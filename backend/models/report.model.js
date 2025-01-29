import mongoose from "mongoose"; 

const reportSchema = new mongoose.Schema({
    total:{
        type: Number, 
        required: true
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const Report = mongoose.model("Report", reportSchema); 

export default Report; 