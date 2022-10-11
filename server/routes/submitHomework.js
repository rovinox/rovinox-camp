const express = require("express");
const router = express.Router();
const submitHomeworkController = require("../controller/submitHomeworkController");

router.post("/", submitHomeworkController.submitHomework);

module.exports = router;
