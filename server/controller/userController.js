const Student = require("../model/student");

const user = async (req, res) => {
  const { email } = req.body;
  try {
    const Users = await Student.findOne({ email })
      .select([
        "lastName",
        "firstName",
        "role",
        "email",
        "enabled",
        "phoneNumber",
        "balance",
      ])
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

module.exports = { user };
