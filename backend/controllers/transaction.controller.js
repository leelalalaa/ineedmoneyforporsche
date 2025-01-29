import mongoose from 'mongoose';
import Transaction from '../models/transaction.model.js';

export const postTransaction = async (req,res) => {
    const { amount, category, desc, method, recurring } = req.body;

    if(!amount || !category || !desc || !method) {
        return res.status(400).json({ success: false, message: "Please provide all fields." }); 
    }

    const newTrx = new Transaction({
        amount,
        category,
        desc: desc,
        method: method,
        recurring: recurring || false, // Default false if not provided
        date: new Date() // Auto-generate date here
    });

    try {
        await newTrx.save(); 
        res.status(201).json({ success: true, data: newTrx });
    } catch (error) {
        console.error("Error in posting transaction: ", error); 
        res.status(500).json({ success: false, message: "Server Error." });
    }
};

export const getTransactions = async (req,res) => {
    try {
        const trxs = await Transaction.find({});
        res.status(200).json({ success: true, data: trxs }); 
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error." }); 
    }
};

export const getIndivTrx = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    try {
        const trx = await Transaction.findById(id);
        if (!trx) {
            return res.status(404).json({ success: false, message: "Transaction not found." });
        }
        res.status(200).json({ success: true, data: trx });
    } catch (error) {
        console.error("Error fetching transaction:", error);
        res.status(500).json({ success: false, message: "Server error." });
    }
}