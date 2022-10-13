const express = require("express");
const router = express.Router();
const gradeHomeworkController = require("../controller/gradeHomeworkController");

router.put("/", gradeHomeworkController.gradeHomework);

module.exports = router;
