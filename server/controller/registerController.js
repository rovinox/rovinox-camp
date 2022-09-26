const Student = require("../model/student");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { email, password, lastName, firstName } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  // check for duplicate usernames in the db
  const duplicate = await Student.findOne({ email }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new user
    const result = await Student.create({
      email,
      password: hashedPwd,
      lastName,
      firstName,
    });

    console.log(result);
    if (result) {
      res.session.user = {
        user_id: result._id,
      };
    }

    res.status(201).json({ success: `New user ${email} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
