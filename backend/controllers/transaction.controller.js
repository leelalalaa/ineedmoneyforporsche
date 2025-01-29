import Transaction from '../models/transaction.model.js';

export const postTransaction = async (req,res) => {
    const trx = req.body;

    if(!trx.amount || !trx.category || !trx.desc || !trx.method) {
        return res.status(400).json({ success: false, message: "Please provide all fields" }); 
    }

    const newTrx = new Transaction(trx);

    try {
        await newTrx.save(); 
        res.status(201).json({ success: true, data: newTrx });
    } catch (error) {
        console.error("Error in posting trx: ", error); 
        res.status(500).json({ success: false, message: "Server Error" });
    }
};