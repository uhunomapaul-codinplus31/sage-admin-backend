
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const cusIndex = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM userprofile LIMIT 10")
    const record = result.rows[0]

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

// Register controller
module.exports = {
    cusIndex
}