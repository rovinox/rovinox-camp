const DB = require("../config/dbConn");

const submitHomework = async (req, res) => {
  const { day, graded, link, email, title } = req.body;

  try {
    const foundStudent = await DB.query(
      `SELECT * FROM student WHERE email = $1`,
      [email]
    );
    const homeWork = await DB.query(
      `INSERT INTO homework("studentId", "batchId", day, graded, link, title) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
      [
        foundStudent.rows[0].studentId,
        foundStudent.rows[0].batchId,
        day,
        graded || false,
        link,
        title,
      ]
    );

    if (homeWork.rows.length > 0) {
      res
        .status(201)
        .json({ message: `Homework has been updated successfully` });
    }

    console.log("submitHomework", homeWork);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { submitHomework };
