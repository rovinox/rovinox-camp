const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchSchema = new Schema({
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("batch", batchSchema);
