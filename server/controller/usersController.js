const Student = require("../model/student");

const users = async (req, res) => {
  try {
    const Users = await Student.find()
      .select(["lastName", "firstName", "role", "email", "enabled"])
      .populate([
        {
          path: "batchId",
        },
      ]);
    if (Users) {
      res.status(200).json({ users: Users });
    }
  } catch (err) {
    res.json("No data found");
  }
};

module.exports = { users };
