import express from "express";
import { postTransaction } from "../controllers/transaction.controller.js";
import { postBudget } from "../controllers/budget.controller.js";
const router = express.Router();

router.post("/trx", postTransaction);

router.post("/budget", postBudget); 

export default router; 