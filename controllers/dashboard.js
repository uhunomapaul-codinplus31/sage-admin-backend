
const db = require("../db/db")
const jwt = require('jsonwebtoken');

// Login controller
const dashIndex = async (req, res) => {
  try {
    // const { username, password } = req.body

    // Validate input
    // if (!username || !password) {
    //   return res.status(400).json({ message: "Email and password are required" })
    // }

    // Check if user exists
    const userResult = await db.query("SELECT * FROM dashboard_activities LIMIT 10")
    const user = userResult.rows[0]

    // if (!user) {
    //   return res.status(401).json({ message: "Invalid email or password" })
    // }

    // Compare passwords
    // Login successful
    res.status(200).json({
      message: "Login successful",
      user: user,
      token: token
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

// Register controller
module.exports = {
    dashIndex
}