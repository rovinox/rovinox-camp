const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeWorkSchema = new Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
  batchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "batch",
  },
  link: {
    type: String,
    required: true,
  },
  course: {
    type: String,
  },
  comment: {
    type: String,
  },
  graded: {
    type: Boolean,
    default: false,
  },
  day: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("homeWork", homeWorkSchema);
