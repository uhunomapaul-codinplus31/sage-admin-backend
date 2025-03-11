
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const cusIndex = async (req, res) => {
  try {
    
    const result = await db.query('SELECT u.phone_number, u.email, u.first_name, u.last_name, u.is_phone_number_verified, u.uid, u.id, u.paystack_customer_id, up.is_verified FROM public."user" u LEFT JOIN public.userprofile up ON u.id = up.user_id')

    const allusers = await db.query('SELECT COUNT(*) FROM "user"')
    const record = result.rows
    const applicant = await db.query('SELECT COUNT(*) FROM userprofile WHERE is_verified = false')
    const await_verification = applicant.rows[0].count
    const alluser = allusers.rows[0].count

    
    res.status(200).json({
      
      record: record,
      customer: alluser,
      await_verification: await_verification,
      total_applicant: 0,
      pending_application: 0
    
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