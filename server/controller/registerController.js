const Student = require("../model/student");
const Batch = require("../model/batch");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleNewUser = async (req, res) => {
  const { batchId, email, password, lastName, firstName, phoneNumber } =
    req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  // check for duplicate usernames in the db
  const duplicate = await Student.findOne({ email }).exec();
  if (duplicate)
    return res
      .status(409)
      .json({ message: "This email address already exists" }); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);
    const foundBatch = await Batch.findOne({ _id: batchId });
    //create and store the new user
    const result = await Student.create({
      email,
      password: hashedPwd,
      lastName,
      firstName,
      phoneNumber,
      batchId,
      balance: foundBatch.cost,
    });

    console.log(result);
    if (result) {
      const accessToken = jwt.sign(
        {
          UserInfo: {
            email: result.email,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      // const refreshToken = jwt.sign(
      //   { email: result.email },
      //   process.env.REFRESH_TOKEN_SECRET,
      //   { expiresIn: "1d" }
      // );
      // Saving refreshToken with current user
      // result.refreshToken = refreshToken;
      // const addedToken = await result.save();
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
        firstName: result.firstName,
        lastName: result.lastName,
        email,
        role: result.role,
        batchId: result.batchId,
        enabled: result.enabled,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
