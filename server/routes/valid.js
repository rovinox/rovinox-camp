const express = require("express");
const router = express.Router();
const getSessionController = require("../controller/getSessionController");

router.get("/", getSessionController.valid);

module.exports = router;
