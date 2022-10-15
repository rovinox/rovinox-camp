const express = require("express");
const router = express.Router();
const getProgressController = require("../controller/getProgressController");

router.post("/", getProgressController.getProgress);

module.exports = router;
