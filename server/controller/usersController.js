const Student = require("../model/student");
const DB = require("../config/dbConn");
const users = async (req, res) => {
  try {
    const Users =
      await DB.query(`SELECT st."studentId", st."lastName", st."firstName", st.role, st.email, st.enabled, st."phoneNumber",st.balance, ba."cost", ba.course, ba."startDate", ba."endDate", ba."batchId"  from  student as st JOIN batch as ba ON st."batchId" = ba."batchId";
`);
    console.log(Users);

    if (Users) {
      res.status(200).json({ users: Users.rows });
    }
  } catch (err) {
    res.json("No data found");
  }
};

module.exports = { users };
