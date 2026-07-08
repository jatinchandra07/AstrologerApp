import mongoose from "mongoose";
import dns from 'dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.VITE_MONGO_URL);
  // console.log(`Mongo is connected wuth DB ${connection.host}`)
  console.log(`Mongo is connected with DB`);
};