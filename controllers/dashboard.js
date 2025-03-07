
const db = require("../db/db")

const dashIndex = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM dashboard_activities LIMIT 10")
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
    dashIndex
}