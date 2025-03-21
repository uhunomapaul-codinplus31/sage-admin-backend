
const db = require("../db/db")

const fraudIndex = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM fraud_transaction LIMIT 10")
    const record = result.rows

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

const flaggeduser = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM flagged_user")
    const record = result.rows

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

const risklevel = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM risk_level_alert")
    const record = result.rows

    
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
    fraudIndex,
    flaggeduser,
    risklevel
}
