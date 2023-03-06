const DB = require("../config/dbConn");

const getBatch = async (req, res) => {
  try {
    const result = await DB.query(`SELECT * FROM batch`);
    // DB.query(`SELECT * FROM batch`, [], (err, result) => {
    //   if (err) {
    //     console.log("err: ", err);
    //   }
    //  // console.log(result);
    if (result) {
      res.status(200).json({ batch: result.rows });
    }
    // });
  } catch (err) {
    res.json("No data found");
  }
};

module.exports = { getBatch };
