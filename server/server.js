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

const PORT = process.env.SERVER_PORT || 8080;

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
app.use(express.static(`${__dirname}/../build`));

// routes
app.use("/getbatch", require("./routes/getBatch"));
app.use("/addbatch", require("./routes/addbatch"));
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));
app.use("/email", require("./routes/email"));

// app.use(verifyJWT);
app.use("/users", require("./routes/users"));
app.use("/gethomework", require("./routes/gethomework"));
app.use("/usersession", require("./routes/valid"));
app.use("/submithomework", require("./routes/submitHomework"));
app.use("/gradehomework", require("./routes/gradeHomework"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
