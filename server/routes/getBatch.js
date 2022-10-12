const express = require("express");
const router = express.Router();
const getBatchController = require("../controller/getBatchController");

router.get("/", getBatchController.getBatch);

module.exports = router;
