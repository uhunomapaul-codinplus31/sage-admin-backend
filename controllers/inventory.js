
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const invent_pd = async (req, res) => {
  try {

    const result = await db.query(`SELECT cc.payment_status, cc.total_shipping, u.id AS user_id, u.first_name, u.last_name,
    p.dealer, p.display_photos, p.category, p.quantity_in_stock, p.name
FROM cartcheckout cc
JOIN public."user" u ON cc.user_id = u.id
LEFT JOIN LATERAL jsonb_array_elements(cc.items::jsonb) AS item ON true
LEFT JOIN public."product" p ON p.id = (item->>'product_id')::bigint
WHERE cc.items IS NOT NULL`)
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