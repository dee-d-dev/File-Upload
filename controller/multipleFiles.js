const path = require("path");
const errorHandler = require("../middleware/errorHandler");
const createError = require("http-errors");

const uploadSingleFile = async (req, res, next) => {
  try {
    const files = req.files;
    const fileName = req.files.fileNames.name;
    console.log(files);
    const promises = files.map((file) => {
      const savePath = path.join("public", "uploads", fileName);
      return file.mv(savePath);
    });
    // files.forEach((file) => {
    //   const fileName =
    //     new Date().getTime().toString() + path.extname(file.name);
    //   const savePath = path.join("public", "uploads", fileName);
    //   if (file.truncated) {
    //     next(createError("File size is too big"));
    //   }

    //   if (file.mimetype != "image/jpeg") {
    //     next(createError("Only jpegs are supported"));
    //   }

    //   promises.push(file.mv(savePath));
    // });

    await Promise.all(promises);

    res.redirect("/");

    // console.log(file);
  } catch (error) {
    res.send("Error uploading files");
    console.log(error);
  }
};

module.exports = uploadSingleFile;
