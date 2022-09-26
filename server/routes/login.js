const express = require("express");
const router = express.Router();
const registerController = require("../controller/authController");

router.post("/", registerController.login);

module.exports = router;
