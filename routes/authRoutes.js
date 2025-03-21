const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")
const dashController = require("../controllers/dashboard")
const customerController = require("../controllers/customer")
const inventoryController = require("../controllers/inventory")
const paymentController = require("../controllers/payment")
const loanController = require("../controllers/loan")
const supplierController = require("../controllers/supplier")
const FraudController = require("../controllers/fraud")
const ReportController = require("../controllers/report")


// Check if controller functions exist before using them
if (!authController.login) {
  console.error("Auth controller functions are not properly defined:", authController)
}

// Auth routes with explicit error handling
router.get("/report/index", (req, res, next) => {
  try { 
    return ReportController.report_index(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})

router.get("/fraud/risk", (req, res, next) => {
  try { 
    return FraudController.risklevel(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})

router.get("/fraud/flaggeduser", (req, res, next) => {
  try { 
    return FraudController.flaggeduser(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})

router.get("/fraud/index", (req, res, next) => {
  try { 
    return FraudController.fraudIndex(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/supplier", (req, res, next) => {
  try { 
    return supplierController.supplier(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/supplier/get", (req, res, next) => {
  try { 
    return supplierController.fetch_sup(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.post("/auth/login", (req, res, next) => {
  try {
    return authController.login(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.post("/product/add", (req, res, next) => {
  try {
    return inventoryController.add_product(req, res, next)
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
router.get("/customer/orderdetails", (req, res, next) => {
  try {
    return customerController.orderdetails(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/customer/payment_method", (req, res, next) => {
  try {
    return customerController.payment_method(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})

router.get("/inventory/product", (req, res, next) => {
  try {
  
    return inventoryController.invent_pd(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/inventory/order", (req, res, next) => {
  try {

    return inventoryController.invent_od(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/inventory/refund", (req, res, next) => {
  try {

    return inventoryController.invent_rr(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/payment/rg_transaction", (req, res, next) => {
  try {

    return paymentController.payment_rg(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/payment/loan_transaction", (req, res, next) => {
  try {
  
    return paymentController.payment_loan(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/loan/app/all", (req, res, next) => {
  try {
  
    return loanController.loan_app_all(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/loan/app/employment", (req, res, next) => {
  try {
  
    return loanController.loan_app_id(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/loan/repayment/overdue", (req, res, next) => {
  try {
  
    return loanController.loan_rp_overdue_activities(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/loan/repayment/ongoing", (req, res, next) => {
  try {
  
    return loanController.loan_rp_on_activities(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})
router.get("/loan/repayment/paidloan", (req, res, next) => {
  try {
  
    return loanController.loan_rp_pd_activities(req, res, next)
  } catch (error) {
    console.error("Error in login route:", error)
    return res.status(500).json({ message: "Internal server error in login route" })
  }
})


module.exports = router

