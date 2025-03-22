
const db = require("../db/db")
// const jwt = require('jsonwebtoken');

// Login controller
const report_index = async (req, res) => {
  try {
    let {id} = req.query;
    
    const revenue = await db.query(`SELECT SUM(total) FROM cartcheckout`);
    const order = await db.query(`SELECT COUNT(*) FROM cartcheckout`);
    const sales = await db.query(`SELECT SUM(total) FROM cartcheckout WHERE shipped = 'delivered'`);
    const users = await db.query(`SELECT COUNT(*) FROM public.user WHERE status = 'active'`);
    const product = await db.query(`SELECT 
    SUM((item->>'quantity')::int) AS sales, 
    SUM(cc.total) AS revenue_generated,
    p.name AS product_name, p.category, 
    p.display_photos
FROM cartcheckout cc
CROSS JOIN LATERAL jsonb_array_elements(cc.items::jsonb) AS item
JOIN product p ON p.product_id = (item->>'product_id')::bigint
GROUP BY p.name, p.category, p.display_photos`);
    const salescategory = await db.query(`SELECT DISTINCT p.category
FROM cartcheckout cc
CROSS JOIN LATERAL jsonb_array_elements(cc.items::jsonb) AS item
JOIN product p ON p.product_id = (item->>'product_id')::bigint;
`);
    // const quan = await db.query(`SELECT SUM((item->>'quantity')::int) AS total_quantity, SUM(cc.total) AS total
    // FROM cartcheckout cc,
    //      jsonb_array_elements(cc.items::jsonb) AS item
    // WHERE item->>'product_id' = $1 
    // `, [id]);


    res.status(200).json({  
      revenue: revenue.rows[0].sum,
      sales: sales.rows[0].sum,
      order: order.rows[0].count,
      users: users.rows[0].count,
      product: product.rows,
      salescategory: salescategory.rows
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

const report_sales = async (req, res) => {
  try {
    
    const result = await db.query(`SELECT SUM(total) FROM cartcheckout WHERE shipped = 'delivered'`);

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
    report_index,
    report_sales
}