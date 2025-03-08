import express from "express";
import { placeOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const OrderRoute = express.Router();

OrderRoute.post("/", authMiddleware, placeOrder);

export default OrderRoute;
