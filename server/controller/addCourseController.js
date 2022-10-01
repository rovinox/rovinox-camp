const Course = require("../model/course");

const addCourse = async (req, res) => {
  const { startDate, endDate, course, cost } = req.body;

  try {
    const result = await Course.create({
      startDate,
      endDate,
      course,
      cost,
    });

    console.log(result);
    if (result) {
      res.status(201).json({ success: `New user created!` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addCourse };
