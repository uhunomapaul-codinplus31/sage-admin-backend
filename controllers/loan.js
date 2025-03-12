
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const loan_app_all = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM loan_app_activities LIMIT 10")
    const record = result.rows[0]

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}
const loan_rp_overdue_activities = async (req, res) => {
  try {
    
    const result = await db.query(`SELECT cr.amount, cr.expected_payment_date, cr.created_at, cr.credit_per_period, cr.offset_amount, cr.id, u.first_name, u.last_name
    FROM creditrepayment cr
    JOIN creditaccount ca ON cr.account_id = ca.id
    JOIN "user" u ON ca.user_id = u.id`)
    const record = result.rows

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}
const loan_rp_on_activities = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM loan_rp_overdue_activities LIMIT 10")
    const record = result.rows[0]

    
    res.status(200).json({
      
      record: record,
    
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}
const loan_rp_pd_activities = async (req, res) => {
  try {
    
    const result = await db.query("SELECT * FROM loan_rp_overdue_activities LIMIT 10")
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
    loan_app_all,
    loan_rp_overdue_activities,
    loan_rp_pd_activities,
    loan_rp_on_activities
}