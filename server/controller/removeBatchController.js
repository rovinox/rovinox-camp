const Batch = require("../model/batch");

const removeBatch = async (req, res) => {
  const { batchId } = req.body;

  try {
    const result = await Batch.findOneAndUpdate(
      { _id: batchId },
      {
        enabled: false,
      }
    );
    result.save();

    if (result) {
      res
        .status(201)
        .json({ message: ` The Batch Has Been Successfully Removed` });
    }

    // console.log(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { removeBatch };
