const express = require("express")
const router = express.Router()
const authController = require("../controllers/dashboard")

// Check if controller functions exist before using them
if (!authController.login) {
  console.error("Auth controller functions are not properly defined:", authController)
}

// Auth routes with explicit error handling

router.get("/dashboard", (req, res, next) => {
  try {
    return authController.dashIndex(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})



module.exports = router

