
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const supplier = async (req, res) => {
  try {
    
    const result = await db.query(`SELECT cr.name, cr.id, u.category
    FROM dealer cr
    LEFT JOIN product u ON cr.id = u.dealer_id
    WHERE cr.id IS NOT NULL`)
    const record = result.rows

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}
const fetch_sup = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM dealer LIMIT 10")
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
    supplier,
    fetch_sup
}