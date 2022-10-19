const express = require("express");
const router = express.Router();
const updateStudentController = require("../controller/updateStudentController");

router.put("/", updateStudentController.updateStudent);

module.exports = router;
