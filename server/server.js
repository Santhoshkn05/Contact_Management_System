import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// ✅ CORS – allow your frontend
app.use(
  cors({
    origin: "https://contact-management-system-ahdd.onrender.com",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);

// middleware
app.use(express.json());

// routes
app.use("/api/contacts", contactRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

connectDB();

export default app;
