const Homework = require("../model/homeWork");
const Student = require("../model/student");

const gradeHomework = async (req, res) => {
  const { homeWorkId, graded, comment, rating } = req.body;

  try {
    let result = "";
    if (comment) {
      const updatedData = await Homework.findOneAndUpdate(
        { _id: homeWorkId },
        { comment }
      );
      console.log(updatedData);
      result = updatedData;
      result.save();
    } else if (graded) {
      const updatedData = await Homework.findOneAndUpdate(
        { _id: homeWorkId },
        { graded }
      );
      result = updatedData;
      result.save();
      console.log(updatedData);
    } else if (rating) {
      const updatedData = await Homework.findOneAndUpdate(
        { _id: homeWorkId },
        { rating }
      );
      result = updatedData;
      result.save();
      console.log(updatedData);
    }

    if (result) {
      res.status(201).json({ message: `homeWork has been saved successfully` });
    }

    // console.log(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { gradeHomework };
