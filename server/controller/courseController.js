const Course = require("../model/course");

const course = async (req, res) => {
  try {
    const Users = await Course.find({}).select();
    if (Users) {
      res.status(200).json({ users: Users });
    }
  } catch (err) {
    res.json("No data found");
  }
};

module.exports = { course };
