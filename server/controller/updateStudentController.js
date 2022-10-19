const Student = require("../model/student");

const updateStudent = async (req, res) => {
  const { batchId, role, enabled, id } = req.body;
  console.log(" batchId, role, enabled, id: ", batchId, role, enabled, id);

  try {
    const result = await Student.findOneAndUpdate(
      { _id: id },
      {
        batchId,
        role,
        enabled,
      }
    );
    result.save();

    if (result) {
      res
        .status(201)
        .json({ message: `student has been updated successfully` });
    }

    // console.log(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { updateStudent };
