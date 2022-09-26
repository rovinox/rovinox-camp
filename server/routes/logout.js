const express = require("express");
const router = express.Router();
const registerController = require("../controller/logoutController");

router.post("/", registerController.logout);

module.exports = router;
