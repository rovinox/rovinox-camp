const Homework = require("../model/homeWork");
const Student = require("../model/student");

const gradeHomework = async (req, res) => {
  const { homeWorkId, graded } = req.body;

  try {
    const result = await Homework.findOneAndUpdate({ _id: homeWorkId, graded });
    result.save();

    if (result) {
      res.status(201).json({ success: `homeWork has been saved successfully` });
    }

    // console.log(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { gradeHomework };
