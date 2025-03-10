const { Pool } = require("pg")
const dotenv = require("dotenv")

dotenv.config()

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://tekkas_owner:N0I5SqLORgPo@ep-misty-resonance-a56u5r14-pooler.us-east-2.aws.neon.tech/tekkas?sslmode=require",
  ssl: {
    rejectUnauthorized: false, // Required for some cloud database providers
  },
})

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
}

