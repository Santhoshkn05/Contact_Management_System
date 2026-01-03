import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection (cached for serverless)
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("MongoDB connected");
}

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use("/api/contacts", contactRoutes);

// ✅ THIS IS WHAT VERCEL NEEDS
export default app;
