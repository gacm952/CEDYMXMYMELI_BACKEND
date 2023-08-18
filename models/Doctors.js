import mongoose from "mongoose";

const DoctorsSchema = mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    Name: {
        type: String,
        ref: "User",
    },
    Especialidad: {
        type: String,
        required: true,
        trim: true,
    },
    Active: {
        type: Boolean,
        required: true,
        trim: true,
        default: true,
    },
},
    {
        timestamps: true,
    }
);

const Doctors = mongoose.model("Doctors", DoctorsSchema);
export default Doctors;