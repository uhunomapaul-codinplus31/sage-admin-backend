
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const cusIndex = async (req, res) => {
  try {
    
    const result = await db.query('SELECT u.phone_number, u.email, u.first_name, u.last_name, u.is_phone_number_verified, u.uid, u.id, u.paystack_customer_id, up.is_verified FROM public."user" u LEFT JOIN public.userprofile up ON u.id = up.user_id')
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
    cusIndex
}