
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const payment_rg = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM payment_rg_activities LIMIT 10")
    const record = result.rows[0]

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}
const payment_loan = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM payment_loan_activities LIMIT 10")
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
    payment_rg,
    payment_loan
}