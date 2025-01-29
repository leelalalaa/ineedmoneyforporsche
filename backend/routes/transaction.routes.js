import express from "express";
import { postTransaction } from "../controllers/transaction.controller.js";
const router = express.Router();

router.post("/", postTransaction);

export default router; 