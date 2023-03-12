const DB = require("../config/dbConn");
const getHomework = async (req, res) => {
  const { day, batchId } = req.body;
  console.log("day", day);
  try {
    const foundHomeWork = await DB.query(
      `select s."firstName", s."lastName", s."studentId", h."homeworkId" , h."batchId" ,h."day" ,h.link ,h."comment" ,h.title ,h.rating ,h.graded  from student s join homework h on s."studentId" = h."studentId" where h."day" =$1 and s."batchId" =$2
`,
      [day, batchId]
    );

    console.log(foundHomeWork);
    if (foundHomeWork.rows.length > 0) {
      res
        .status(200)
        .json({ homeWork: foundHomeWork.rows, message: "data found" });
    }
  } catch (err) {
    res.json({ message: "No data found" });
  }
};

module.exports = { getHomework };
