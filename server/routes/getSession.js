const express = require("express");
const router = express.Router();
const registerController = require("../controller/getSessionController");

router.post("/", registerController.getSession);

module.exports = router;
