const express = require("express");
const router = express.Router();
const sentEmailController = require("../controller/sentEmailController");

router.post("/", sentEmailController.sendEmail);

module.exports = router;
