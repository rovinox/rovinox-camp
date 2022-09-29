const express = require("express");
const router = express.Router();
const getSessionController = require("../controller/getSessionController");

router.post("/", getSessionController.valid);

module.exports = router;
