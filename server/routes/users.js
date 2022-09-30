const express = require("express");
const router = express.Router();
const usersController = require("../controller/usersController");

router.get("/", usersController.users);

module.exports = router;
