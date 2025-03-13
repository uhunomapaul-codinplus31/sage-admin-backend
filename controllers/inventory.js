
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const add_product = async (request, res) => {
  try {
    const name = request.body.name;
    const description = request.body.description;
    const quantityInStock = request.body.quantityInStock;
    const price = request.body.price;
    const category = request.body.category;
    const isTCPO = request.body.isTCPO;
    const displayPhotos = request.files?.displayPhotos;
    const dealerID = request.body.dealerID;

    const result = await db.query(`INSERT INTO product (name, description, quantity_in_stock, price, category, is_tcpo, display_photos, dealer_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *`, [
      name, description, quantityInStock, price, category, isTCPO, displayPhotos, dealerID
  ])
    const record = result.rows
    // const allinv = await db.query('SELECT COUNT(*) FROM product')
    // const in_stock = await db.query('SELECT COUNT(*) FROM product WHERE quantity_in_stock = false')
    // const in_stocks = in_stock.rows[0].count
    // const allinvs = allinv.rows[0].count
    
    res.status(200).json({
      
      record: record,

    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}
const invent_pd = async (req, res) => {
  try {
  
    const result = await db.query(`SELECT cc.payment_status, cc.total_shipping, u.id AS user_id, u.first_name, u.last_name,
    p.dealer_id, p.display_photos, p.category, p.quantity_in_stock, p.name
FROM cartcheckout cc
JOIN public."user" u ON cc.user_id = u.id
LEFT JOIN LATERAL jsonb_array_elements(cc.items::jsonb) AS item ON true
LEFT JOIN public."product" p ON p.id = (item->>'product_id')::bigint
WHERE cc.items IS NOT NULL`)
    const record = result.rows
    // const allinv = await db.query('SELECT COUNT(*) FROM product')
    // const in_stock = await db.query('SELECT COUNT(*) FROM product WHERE quantity_in_stock = false')
    // const in_stocks = in_stock.rows[0].count
    // const allinvs = allinv.rows[0].count
    
    res.status(200).json({
      
      record: record,
      inventory: 0,
      in_stocks: 0,
      low_stock: 0,
      out_of_stock: 0
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
    invent_rr,
    add_product
}