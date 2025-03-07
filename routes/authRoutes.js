const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")
const dashController = require("../controllers/dashboard")
const customerController = require("../controllers/customer")
const inventoryController = require("../controllers/inventory")
const paymentController = require("../controllers/payment")


// Check if controller functions exist before using them
if (!authController.login) {
  console.error("Auth controller functions are not properly defined:", authController)
}

// Auth routes with explicit error handling
router.post("/auth/login", (req, res, next) => {
  try {
    return authController.login(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/dashboard", (req, res, next) => {
  try {
    return dashController.dashIndex(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})

router.get("/customer", (req, res, next) => {
  try {
    return customerController.cusIndex(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/inventory/product", (req, res, next) => {
  try {
    // invent_pd,
    // invent_od,
    // invent_rr
    return inventoryController.invent_pd(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/inventory/order", (req, res, next) => {
  try {
    // invent_pd,
    // invent_od,
    // invent_rr
    return inventoryController.invent_od(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/inventory/refund", (req, res, next) => {
  try {
    // invent_pd,
    // invent_od,
    // invent_rr
    return inventoryController.invent_rr(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/payment/rg_transaction", (req, res, next) => {
  try {
    // invent_pd,
    // invent_od,
    // invent_rr
    return paymentController.payment_rg(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/payment/loan_transaction", (req, res, next) => {
  try {
    // invent_pd,
    // invent_od,
    // invent_rr
    return paymentController.payment_loan(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})


module.exports = router

