const HomeWork = require("../model/homeWork");

const getHomework = async (req, res) => {
  const { day } = req.body;
  console.log("day", day);
  try {
    const foundHomeWork = await HomeWork.find({ day }).populate({
      path: "studentId",
      select: ["lastName", "firstName"],
    });
    if (foundHomeWork) {
      res.status(200).json({ homeWork: foundHomeWork, message: "data found" });
    }
  } catch (err) {
    res.json({ message: "No data found" });
  }
};

module.exports = { getHomework };
