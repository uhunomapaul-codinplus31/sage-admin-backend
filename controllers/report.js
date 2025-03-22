
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const report_revenue = async (req, res) => {
  try {
     
    
    const result = await db.query(`SELECT COUNT(*) AS total_count FROM cartcheckout`)
// 
    const record = result.rows

    
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
    
    const result = await db.query(`SELECT cc.id, cc.amount, cc.paid_amount,cc.next_payment, cc.status, cc.payment_type, 
    u.id AS user_id, u.first_name, u.last_name,
     p.name, c.transaction_type
FROM loan_transaction cc
JOIN public."user" u ON cc.user_id = u.id
LEFT JOIN public."product" p ON p.product_id = cc.product_id 
LEFT JOIN public."credittransaction" c ON cc.credit_id = c.id`);

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
    report_revenue,
    payment_loan
}