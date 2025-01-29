import mongoose from 'mongoose';
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

export const getBudgets = async (req,res) => {
    try {
        const budgets = await Budget.find({});
        res.status(200).json({ success: true, data: budgets }); 
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error." }); 
    }
};

export const getIndivBudget = async (req,res) => {
    const { category, month } = req.params; 

    if (!category || !month) {
        return res.status(400).json({ success: false, message: "Category and month are required" });
    }

    try {
        const budget = await Budget.find({ category, month });
        if (!budget || budget.length === 0) {
            return res.status(404).json({ success: false, message: "Budget Category not found." });
        }
        res.status(200).json({ success: true, data: budget });
    } catch (error) {
        console.error("Error fetching budget:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deleteBudget = async (req,res) => {
    const {id} = req.params; 
    try {
        const deletedBudget = await Budget.findByIdAndDelete(id); 
        if(!deletedBudget) {
            return res.status(404).json({ success: false, message: "Budget not found" }); 
        }
        res.status(200).json({ success: true, message: "Budget Deleted" });
    } catch (error) {
        res.status(404).json({ success: false, message: "Budget not found" }); 
    }
};