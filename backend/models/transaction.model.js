import mongoose from "mongoose"; 

const transactionSchema = new mongoose.Schema({
    amount:{
        type: Number, 
        required: true
    },
    category:{
        type: String, 
        required: true
    },
    desc:{
        type: String, 
        required: true
    },
    method:{
        type: String, 
        required: true
    },
    recurring:{
        type:Boolean,
        required:false
    },
    date:{
        type:Date,
        required:true
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const Transaction = mongoose.model("Transaction", transactionSchema); 

export default Transaction; 