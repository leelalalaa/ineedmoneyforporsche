import Budget from '../models/budget.model.js';

export const postBudget = async (req,res) => {
    const { category, limit, spent, month } = req.body;

    if(!category || !limit || !spent || !month) {
        return res.status(400).json({ success: false, message: "Please provide all fields." }); 
    }

    const newBudget = new Budget({
        category,
        limit,
        spent,
        month
    });

    try {
        await newBudget.save(); 
        res.status(201).json({ success: true, data: newBudget });
    } catch (error) {
        console.error("Error in posting budget: ", error); 
        res.status(500).json({ success: false, message: "Server Error." });
    }
};