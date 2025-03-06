// Global error handler middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
  
    const statusCode = err.statusCode || 500
    const message = err.message || "Something went wrong!"
  
    res.status(statusCode).json({
      message,
      error: process.env.NODE_ENV === "development" ? err.stack : "Internal server error",
    })
  }
  
  module.exports = errorHandler
  
  