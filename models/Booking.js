import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    bookingFor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    bookingTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    doctorIdBooked: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    cancelledBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    editedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    dateHour: {
        type: Date,
        trim: true,
        default: Date.now(),
    },
    Type: {
        type: String,
        trim: true,
    },
    subType: {
        type: String,
        trim: true,
    },
    Motive: {
        type: String,
        required: true,
        trim: true,
    },
    Status: {
        type: String,
        trim: true,
        default: "",
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false,
    },
    bookingToName: {
        type: String,
            },
    bookingToLastName: {
        type: String,
        },
    bookingToEmail: {
        type: String,
        },
},
    {
        timestamps: true,
    }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;