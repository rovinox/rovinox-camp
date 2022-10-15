const HomeWork = require("../model/homeWork");

const getProgress = async (req, res) => {
  const { studentId } = req.body;
  console.log("studentId", studentId);
  try {
    const foundHomeWork = await HomeWork.find({
      studentId,
    });
    if (foundHomeWork) {
      res.status(200).json({ homeWork: foundHomeWork, message: "data found" });
    }
  } catch (err) {
    res.json({ message: "No data found" });
  }
};

module.exports = { getProgress };
