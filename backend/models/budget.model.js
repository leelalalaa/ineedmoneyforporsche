import mongoose from "mongoose"; 

const budgetSchema = new mongoose.Schema({
    category:{
        type: String, 
        required: true
    },
    limit:{
        type: Number, 
        required: true
    },
    spent:{
        type: Number, 
        required: true
    },
    month:{
        type:String,
        required:false
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const Budget = mongoose.model("Budget", budgetSchema); 

export default Budget; 