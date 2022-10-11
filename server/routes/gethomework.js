const express = require("express");
const router = express.Router();
const getHomeworkController = require("../controller/getHomeworkController");

router.post("/", getHomeworkController.getHomework);

module.exports = router;
