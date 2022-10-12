const Batch = require("../model/batch");

const addBatch = async (req, res) => {
  const { startDate, endDate, course, cost } = req.body;
  console.log({ startDate, endDate, course, cost });
  try {
    const result = await Batch.create({
      startDate,
      endDate,
      course,
      cost,
    });
    console.log(result);
    if (result) {
      res.status(201).json({ batch: result, success: `New user created!` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addBatch };
