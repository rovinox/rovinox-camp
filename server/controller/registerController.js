const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DB = require("../config/dbConn");

const handleNewUser = async (req, res) => {
  const { batchId, email, password, lastName, firstName, phoneNumber } =
    req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  // check for duplicate usernames in the db
  const duplicate = await DB.query(`SELECT * FROM student WHERE email = $1`, [
    email,
  ]);

  if (duplicate.rows.length > 0)
    return res
      .status(409)
      .json({ message: "This email address already exists" }); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);
    const foundBatch = await DB.query(
      `SELECT * FROM batch WHERE "batchId" = $1`,
      [batchId]
    );
    console.log(foundBatch);
    //create and store the new user
    const result = await DB.query(
      `INSERT INTO student(email, password, "lastName", "firstName","phoneNumber", "batchId", balance) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        email,
        hashedPwd,
        lastName,
        firstName,
        phoneNumber,
        batchId,
        foundBatch.rows[0].cost,
      ]
    );

    if (result) {
      const accessToken = jwt.sign(
        {
          UserInfo: {
            email: result.rows[0].email,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      // const refreshToken = jwt.sign(
      //   { email: result.rows[0].email },
      //   process.env.REFRESH_TOKEN_SECRET,
      //   { expiresIn: "1d" }
      // );
      // Saving refreshToken with current user
      // result.rows[0].refreshToken = refreshToken;
      // const addedToken = await result.rows[0].save();
      // console.log(addedToken);

      // Creates Secure Cookie with refresh token
      res.cookie("jwt", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json({
        accessToken,
        firstName: result.rows[0].firstName,
        lastName: result.rows[0].lastName,
        email: result.rows[0].email,
        role: result.rows[0].role,
        batchId: result.rows[0].batchId,
        enabled: result.rows[0].enabled,
      });
    }
  } catch (err) {
    console.log({ message: err.message });
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
