require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const session = require("express-session");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
connectDB();

const { SERVER_PORT, SESSION_SECRET } = process.env;
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  })
);
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(SERVER_PORT, () =>
    console.log(`Server running on port ${SERVER_PORT}`)
  );
});
