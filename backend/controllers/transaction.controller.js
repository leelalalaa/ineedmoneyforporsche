import Transaction from '../models/transaction.model.js';

export const postTransaction = async (req,res) => {
    const { amount, category, desc, method, recurring } = req.body;
 
    console.log("amount: " + amount);
    console.log("category: " + category);
    console.log("desc: " + desc);
    console.log("method: " + method);
    console.log("recurring: " + recurring);
    console.log("date: " + new Date());

    if(!amount || !category || !desc || !method) {
        return res.status(400).json({ success: false, message: "Please provide all fields" }); 
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
        console.error("Error in posting trx: ", error); 
        res.status(500).json({ success: false, message: "Server Error" });
    }
};