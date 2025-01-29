import express from "express";
import { deleteTransaction, getIndivTransaction, getTransactions, postTransaction } from "../controllers/transaction.controller.js";
import { getIndivBudget, getBudgets, postBudget, deleteBudget } from "../controllers/budget.controller.js";
const router = express.Router();

router.post("/trx", postTransaction);
router.get("/trxs", getTransactions);
router.get("/indivtrx/:id", getIndivTransaction);
router.delete("/trx/:id", deleteTransaction);  

router.post("/budget", postBudget); 
router.get("/budgets", getBudgets);
router.get("/indivbudget/:category/:month", getIndivBudget)
router.delete("/budget/:id", deleteBudget);  

export default router; 