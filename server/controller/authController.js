const bcrypt = require("bcrypt");
const Student = require("../model/student");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const foundUser = await Student.findOne({ email });

  if (!foundUser) {
    res.status(401).json("Incorrect email or password");
  } else {
    const authenticated = await bcrypt.compareSync(
      password,
      foundUser.password
    );
    if (!authenticated) {
      res.status(401).json("Incorrect email or password");
    } else {
      const accessToken = jwt.sign(
        {
          UserInfo: {
            email: foundUser.email,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        // 5 minutes or 15
        { expiresIn: "1h" }
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
      res.json({ accessToken, email, role: foundUser.role });
    }
  }
};
module.exports = {
  login,
};
