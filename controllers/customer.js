
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const cusIndex = async (req, res) => {
  try {
    
    const result = await db.query('SELECT u.phone_number, u.email, u.first_name, u.last_name, u.is_phone_number_verified, u.uid, u.id, u.paystack_customer_id, up.is_verified, u.address FROM public."user" u LEFT JOIN public.userprofile up ON u.id = up.user_id')

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

const orderdetails = async (req, res) => {
  try {
    let {id} = req.query;

//     SELECT cc.payment_status, cc.total_shipping, u.id AS user_id, u.first_name, u.last_name,
//     p.dealer_id, p.display_photos, p.category, p.quantity_in_stock, p.name
// FROM cartcheckout cc
// JOIN public."user" u ON cc.user_id = u.id
// LEFT JOIN LATERAL jsonb_array_elements(cc.items::jsonb) AS item ON true
// LEFT JOIN public."product" p ON p.id = (item->>'product_id')::bigint
// WHERE cc.items IS NOT NULL



    const result = await db.query(`SELECT 
    cc.items, 
    cc.created_at, 
    cc.shipped,
    u.id AS user_id, 
    u.first_name, 
    u.last_name,
    p.dealer_id, 
    p.price, 
    p.display_photos, 
    p.category, 
    p.quantity_in_stock, 
    p.name
FROM cartcheckout cc
JOIN public."user" u ON cc.user_id = u.id
LEFT JOIN LATERAL jsonb_array_elements(cc.items::jsonb) AS item ON true
LEFT JOIN public."product" p ON p.product_id = (item->>'product_id')::bigint
WHERE cc.items IS NOT NULL 
AND cc.user_id = $1`,[id])

    
    const record = result.rows
    

    
    res.status(200).json({
      record: record,
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}


const payment_method = async (req, res) => {
  try {
    let {id} = req.query;

//     SELECT cc.payment_status, cc.total_shipping, u.id AS user_id, u.first_name, u.last_name,
//     p.dealer_id, p.display_photos, p.category, p.quantity_in_stock, p.name
// FROM cartcheckout cc
// JOIN public."user" u ON cc.user_id = u.id
// LEFT JOIN LATERAL jsonb_array_elements(cc.items::jsonb) AS item ON true
// LEFT JOIN public."product" p ON p.id = (item->>'product_id')::bigint
// WHERE cc.items IS NOT NULL



    const result = await db.query(`SELECT * FROM credittransaction WHERE account_id = $1`,[id])

    
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
    cusIndex,
    orderdetails,
  payment_method
}
