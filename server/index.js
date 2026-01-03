import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", async (req, res, next) => {
  await connectDB();
  next();
}, contactRoutes);

export default app;
