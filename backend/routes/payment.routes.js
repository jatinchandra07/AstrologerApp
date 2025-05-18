import express from "express";
import {
  appointment,
  checkout,
  paymentVerification,
  getAppointments,
  getAllPaymentsOfUser,
} from "../controllers/payment.controller3.js";

const router = express.Router();
router.route("/checkout").post(checkout);
router.route("/appointment").post(appointment);
router.route("/paymentverification").post(paymentVerification);
router.get("/all-appointment-of-users", getAppointments);
router.get("/get-all-payments-of-users", getAllPaymentsOfUser);
export default router;