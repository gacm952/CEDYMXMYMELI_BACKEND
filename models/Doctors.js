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
    Specialty: {
        type: String,
        required: true,
        trim: true,
    },
    SchedulesAvailable: {
        type: String,
        required: true,
        trim: true,
    },
    Clinic: {
        type: String,
        required: true,
        trim: true,
    },
    Available: {
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