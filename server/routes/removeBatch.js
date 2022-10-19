const express = require("express");
const router = express.Router();
const removeBatchController = require("../controller/removeBatchController");

router.put("/", removeBatchController.removeBatch);

module.exports = router;
