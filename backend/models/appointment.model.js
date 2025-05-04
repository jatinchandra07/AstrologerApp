import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    service: {
        type: String,
        required: true
    },
    subService: {
      type: String,
    },
    mode:{
      type: String,
      required:true
    },
    price:{
      type:Number,
      required:true
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    razorpay_order_id: {
      type: String,
      // required: true,
    },
    currentDate: {
      type: Date,
      default: Date.now,
    },
    currentTime: {
      type: String,
      default: new Date().toLocaleTimeString(),
    },
  },
  {
    timestamps: true,
  }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);