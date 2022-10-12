const Batch = require("../model/batch");

const getBatch = async (req, res) => {
  try {
    const foundBatch = await Batch.find({});
    if (foundBatch) {
      res.status(200).json({ batch: foundBatch });
    }
  } catch (err) {
    res.json("No data found");
  }
};

module.exports = { getBatch };
