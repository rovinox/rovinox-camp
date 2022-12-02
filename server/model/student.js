const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  batchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "batch",
  },
  role: {
    type: String,
    required: true,
    default: "admin",
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  refreshToken: String,
});

module.exports = mongoose.model("student", studentSchema);
