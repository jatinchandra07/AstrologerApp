import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
  key_id: process.env.VITE_APP_RAZORPAY_API_KEY,
  key_secret: process.env.VITE_APP_RAZORPAY_APT_SECRET,
});

app.listen(process.env.VITE_APP_PORT, () => {
  console.log(`App is running on port ${process.env.VITE_APP_PORT}`);
});