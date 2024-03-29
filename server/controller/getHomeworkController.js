const HomeWork = require("../model/homeWork");

const getHomework = async (req, res) => {
  const { day, batchId } = req.body;
  console.log("day", day);
  try {
    const foundHomeWork = await HomeWork.find({ day, batchId }).populate({
      path: "studentId",
      select: ["lastName", "firstName"],
    });
    console.log(foundHomeWork);
    if (foundHomeWork) {
      res.status(200).json({ homeWork: foundHomeWork, message: "data found" });
    }
  } catch (err) {
    res.json({ message: "No data found" });
  }
};

module.exports = { getHomework };
