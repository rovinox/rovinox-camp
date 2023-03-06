const bcrypt = require("bcrypt");
const DB = require("../config/dbConn");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const foundUser = await DB.query(`SELECT * FROM student WHERE email = $1`, [
    email,
  ]);

  if (foundUser.rows.length === 0) {
    res.status(401).json({ message: "Incorrect email or password" });
  } else {
    const authenticated = await bcrypt.compareSync(
      password,
      foundUser.rows[0].password
    );
    if (!authenticated) {
      res.status(401).json({ message: "Incorrect email or password" });
    } else {
      const accessToken = jwt.sign(
        {
          UserInfo: {
            email: foundUser.rows[0].email,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        // 5 minutes or 15
        { expiresIn: "1d" }
      );
      // const refreshToken = jwt.sign(
      //   { email: foundUser.email },
      //   process.env.REFRESH_TOKEN_SECRET,
      //   { expiresIn: "1d" }
      // );
      // // Saving refreshToken with current user
      // foundUser.refreshToken = refreshToken;
      // const result = await foundUser.save();
      // console.log(result);

      // Creates Secure Cookie with refresh token
      res.cookie("jwt", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      });

      // Send authorization roles and access token to user
      console.log("foundUser", foundUser);
      res.json({
        accessToken,
        firstName: foundUser.rows[0].firstName,
        lastName: foundUser.rows[0].lastName,
        email,
        role: foundUser.rows[0].role,
        batchId: foundUser.rows[0].batchId,
        enabled: foundUser.rows[0].enabled,
      });
    }
  }
};
module.exports = {
  login,
};
