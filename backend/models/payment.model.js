import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
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
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    razorpay_signature: {
      type: String,
      required: true,
    }, 
    currentDate: {
      type: Date,
      default: Date.now,
    },
    currentTime: {
      type: String,
      default: new Date().toLocaleTimeString(),
    },
  }
);

export const Payment = mongoose.model("Payment", paymentSchema);
