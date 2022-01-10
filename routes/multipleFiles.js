const express = require("express");
const uploadMultipleFiles = require("../controller/multipleFiles");
const router = express.Router();

router.post("/multiple", uploadMultipleFiles);

module.exports = router;
