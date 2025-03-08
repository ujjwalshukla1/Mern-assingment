import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js"; 
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import OrderRoute from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

connectDB();


app.use("/api/auth", authRoutes);
app.use("/api/orders", OrderRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
