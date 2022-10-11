const Batch = require("../model/batch");

const addBatch = async (req, res) => {
  const { startDate, endDate, course, cost } = req.body;
  console.log({ startDate, endDate, course, cost });
  try {
    const result = await Batch.create({
      startDate: startDate.Moment._d,
      endDate: endDate.Moment._d,
      course,
      cost,
    });
    console.log(result);
    if (result) {
      res.status(201).json({ success: `New user created!` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addBatch };
