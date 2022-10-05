const Student = require("../model/student");

const users = async (req, res) => {
  try {
    const Users = await Student.find();
    if (Users) {
      Users.forEach((user, index) => {
        console.log(user);
        user.password = "";
      });
      res.status(200).json({ users: Users });
    }
  } catch (err) {
    res.json("No data found");
  }
};

module.exports = { users };
