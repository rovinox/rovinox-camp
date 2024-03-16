
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('DB Connected');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
