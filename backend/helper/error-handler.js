function errorHandler(err, req, res, next) {
  if (err.name === "UnathorizedError") {
    // JWT Authentication error
    return res.status(401).json({ message: "The user is not authorized" });
  }

  if (err.name === "ValidationError") {
    // Validation Error
    return res.status(401).json({ message: err });
  }

  // Default to 500 server error
  return res.status(500).json(err);
}

module.exports = errorHandler;
