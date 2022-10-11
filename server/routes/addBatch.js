const express = require("express");
const router = express.Router();
const addBatchController = require("../controller/addBatchController");

router.post("/", addBatchController.addBatch);

module.exports = router;
