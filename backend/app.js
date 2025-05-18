import { app } from "./app2.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

connectDB();
const PORT = process.env.PORT || 2000
export const instance = new Razorpay({
  key_id: process.env.VITE_APP_RAZORPAY_API_KEY,
  key_secret: process.env.VITE_APP_RAZORPAY_APT_SECRET,
});

app.listen(PORT, () => {
  console.log(`App is running on port ${process.env.VITE_APP_PORT}`);
});