const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const authRoutes = require("./routes/authRoutes")
const dashboard = require("./routes/authRoutes")
const errorHandler = require("./middleware/errorHandler")
const db = require("./db/db")

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(
  cors(
  //  {
    // origin: "https://sage-1.vercel.app", // Your React app's URL
  //  credentials: true,
  //}
  ),
)

// Test database connection
db.pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection error:", err)
  } else {
    console.log("Database connected successfully")
  }
})

// Create users table if it doesn't exist
// const createUsersTable = async () => {
//   try {
//     await db.query(`
//       CREATE TABLE IF NOT EXISTS account (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,

//       )
//     `)
//     console.log("Users table created or already exists")
//   } catch (error) {
//     console.error("Error creating users table:", error)
//   }
// }

// createUsersTable()

// Routes
app.use("/api/auth", authRoutes)
app.use("/dashboard", dashboard)

// Error handling middleware
app.use(errorHandler)

// Start server
app.get('/', (req, res) => {
  res.send(`Server running on port ${PORT}`)
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

 