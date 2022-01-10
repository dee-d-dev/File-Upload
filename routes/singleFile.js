const express = require("express");
const uploadSingleFile = require("../controller/singleFile");
const router = express.Router();


router.post('/single', uploadSingleFile)

module.exports = router