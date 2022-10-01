const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");

router.get("/", courseController.course);

module.exports = router;
