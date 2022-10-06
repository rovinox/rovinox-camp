require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const verifyJWT = require("./middleware/verifyJWT");
const session = require("express-session");

const PORT = process.env.SERVER_PORT || 3500;

// Connect to MongoDB
connectDB();

// custom middleware logger

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
//app.use(credentials);

// Cross Origin Resource Sharing
//app.use(cors(corsOptions));
app.use(cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use(
  session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));
app.use("/email", require("./routes/email"));
app.use("/course", require("./routes/course"));

// app.use(verifyJWT);
app.use("/users", require("./routes/users"));
app.use("/usersession", require("./routes/valid"));
app.use("/addcourse", require("./routes/addCourse"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
