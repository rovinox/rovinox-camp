const DB = require("../config/dbConn");

const getBatch = async (req, res) => {
  try {
    DB.query(
      `SELECT * FROM public.batch
ORDER BY batchid ASC `,
      [],
      (err, result) => {
        if (err) {
          console.log("err: ", err);
        }
        console.log(result);
        if (result) {
          res.status(200).json({ batch: result.rows });
        }
      }
    );
  } catch (err) {
    res.json("No data found");
  }
};

module.exports = { getBatch };
