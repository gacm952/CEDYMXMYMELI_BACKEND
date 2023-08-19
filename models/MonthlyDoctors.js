import mongoose from "mongoose";

export const getMonthYearString = (date) => {
  const month = date.toLocaleString("default", { month: "long" }).toUpperCase();
  const year = date.getFullYear();
  return `${month}${year}`;
};

const DailyDoctorSchema = mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: Date,
    },
    Active: {
      type: Boolean,
      default: true
    },
    activeMorning: {
      type: Boolean,
      default: true
    },
    activeLate: {
      type: Boolean,
      default: true
    },
    morning: {
      type: String,
    },
    late: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const getDailyDoctorModelForMonth = (date) => {
  const modelName = getMonthYearString(date);
  return mongoose.model(modelName, DailyDoctorSchema);
};