
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const invent_pd = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM inventory_pd_activities LIMIT 10")
    const record = result.rows[0]

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}
const invent_rr = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM inventory_rr_activities LIMIT 10")
    const record = result.rows[0]

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}
const invent_od = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM inventory_od_activities LIMIT 10")
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
    invent_pd,
    invent_od,
    invent_rr
}