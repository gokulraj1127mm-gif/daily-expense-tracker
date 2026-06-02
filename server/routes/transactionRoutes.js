const express = require("express");
const router = express.Router();

const {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  getDashboard,
} = require("../controllers/transactionController");

const { protect } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, getDashboard);

router.post("/", protect, addTransaction);
router.get("/", protect, getTransactions);
router.put("/:id", protect, updateTransaction);
router.delete("/:id", protect, deleteTransaction);

module.exports = router;