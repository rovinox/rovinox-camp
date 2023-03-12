const Homework = require("../model/homeWork");
const DB = require("../config/dbConn");

const gradeHomework = async (req, res) => {
  const { homeWorkId, graded, comment, rating } = req.body;
  console.log({ homeWorkId, graded, comment, rating });
  try {
    let result = [];
    if (comment) {
      const updatedData = await DB.query(
        `UPDATE homework h SET comment = $1 WHERE h."homeworkId" = $2 returning *`,
        [comment, homeWorkId]
      );
      console.log(updatedData);
      result = updatedData.rows;
    } else if (graded) {
      const updatedData = await DB.query(
        `UPDATE homework h SET graded = $1 WHERE h."homeworkId" = $2 returning *`,
        [graded, homeWorkId]
      );
      console.log(updatedData);
      result = updatedData.rows;
    } else if (rating) {
      const updatedData = await DB.query(
        `UPDATE homework h SET rating = $1 WHERE h."homeworkId" = $2 returning *`,
        [rating, homeWorkId]
      );
      console.log(updatedData);
      result = updatedData.rows;
    }

    if (result.length > 0) {
      res.status(201).json({ message: `homeWork has been saved successfully` });
    }

    // console.log(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { gradeHomework };
