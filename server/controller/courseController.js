const Batch = require("../model/batch");

const batch = async (req, res) => {
  try {
    const foundBatch = await Batch.find({}).select();
    if (foundBatch) {
      res.status(200).json({ batch: foundBatch });
    }
  } catch (err) {
    res.json("No data found");
  }
};

module.exports = { batch };
