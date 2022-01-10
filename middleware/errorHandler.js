const createError = require("http-errors");

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
  console.log(err.message);

  next(createError("It's not you it's us!!!"))
};

module.exports = errorHandler;
