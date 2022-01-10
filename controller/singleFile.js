const path = require("path");
const errorHandler = require("../middleware/errorHandler");
const createError = require("http-errors");

const uploadSingleFile = async (req, res, next) => {
  try {
    // console.log(req.files)
    // console.log(req.files.fileName.name)
    const file = req.files.fileName;
    const fileName = new Date().getTime().toString() + path.extname(file.name);
    const savePath = path.join("public", "uploads", fileName);
    if (file.truncated) {
      next(createError("File size is too big"));
    }

    if (file.mimetype != "image/jpeg") {
      next(createError("Only jpegs are supported"));
    }
    await file.mv(savePath);
    res.redirect("/");

    // console.log(file);
  } catch (error) {
    res.send("Error uploading files");
  }
};

module.exports = uploadSingleFile;
