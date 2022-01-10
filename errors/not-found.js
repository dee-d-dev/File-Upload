const notFound = (req, res, next) => {
  const err = new Error("not found");
  err.status = 404;
  next(err);
};

module.exports = notFound;
