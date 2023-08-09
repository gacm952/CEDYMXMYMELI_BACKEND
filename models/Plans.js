import mongoose from "mongoose";

const PlansSchema = mongoose.Schema({
    soldBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    Target: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    typeOfDocument: {
        type: String,
        require: true,
        trim: true,
    },
    Document: {
        type: Number,
        require: true,
        trim: true,
    },
    Plan: {
        type: String,
        require: true,
        trim: true,
    },
    startDate: {
        type: String,
        require: true,
        trim: true,
    },
    paymentMethod: {
        type: String,
        require: true,
        trim: true,
    },
    Status: {
        type: String,
        trim: true,
    },
},
    {
        timestamps: true,
    }
);

const Plans = mongoose.model("Plans", PlansSchema);
export default Plans;