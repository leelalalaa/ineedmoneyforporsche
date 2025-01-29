import express from "express";
import { getIndivTrx, getTransactions, postTransaction } from "../controllers/transaction.controller.js";
import { getIndivBudget, getBudgets, postBudget } from "../controllers/budget.controller.js";
const router = express.Router();

router.post("/trx", postTransaction);
router.get("/trxs", getTransactions);
router.get("/indivtrx/:id", getIndivTrx);

router.post("/budget", postBudget); 
router.get("/budgets", getBudgets);
router.get("/indivbudget/:category/:month", getIndivBudget)


export default router; 