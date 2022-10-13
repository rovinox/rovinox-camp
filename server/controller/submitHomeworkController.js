const Homework = require("../model/homeWork");
const Student = require("../model/student");

const submitHomework = async (req, res) => {
  const { homeWorkId, day, graded, link, email } = req.body;

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
        batchId: foundStudent.batchId,
        day,
        graded,
        link,
      });
      if (result) {
        res
          .status(201)
          .json({ message: `Homework has been updated successfully` });
      }
    }

    // console.log(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { submitHomework };
