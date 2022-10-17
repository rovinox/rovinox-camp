const Homework = require("../model/homeWork");
const Student = require("../model/student");

const submitHomework = async (req, res) => {
  const { homeWorkId, course, day, graded, link, email } = req.body;

  try {
    if (graded) {
      const result = await Homework.findOneAndUpdate(
        { _id: homeWorkId },
        { graded }
      );
      result.save();
    } else {
      const foundStudent = await Student.findOne({ email });

      const result = await Homework.create({
        studentId: foundStudent._id,
        course,
        day,
        graded,
        link,
      });
      if (result) {
        res.status(201).json({ success: `New user created!` });
      }
    }

    // console.log(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { submitHomework };