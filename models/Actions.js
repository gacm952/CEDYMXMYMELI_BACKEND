import mongoose from "mongoose";

const ActionsSchema = mongoose.Schema({
    realizedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    Target: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    Action: {
        type: String,
        required: true,
        trim: true,
    },
},
    {
        timestamps: true,
    }
);

const Actions = mongoose.model("Actions", ActionsSchema);
export default Actions;