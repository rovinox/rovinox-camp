const express = require("express");
const router = express.Router();
const addCourseController = require("../controller/addCourseController");

router.post("/", addCourseController.addCourse);

module.exports = router;
