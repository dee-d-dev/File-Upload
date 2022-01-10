const express = require("express");
const notFound = require("./errors/not-found");
const errorHandler = require("./middleware/errorHandler");
const fileUpload = require("express-fileupload");
const singleRouter = require("./routes/singleFile");
const app = express();
const path = require("path");

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: { fileSize: 5 * 1024 * 1024 },
  })
);
app.set("view engine", "ejs");

app.use("/", singleRouter);

app.get("/", async (req, res) => {
  res.render("index");
});

app.use(notFound);
app.use(errorHandler);
app.listen(5000, (req, res) => {
  console.log("running on 5000");
});
