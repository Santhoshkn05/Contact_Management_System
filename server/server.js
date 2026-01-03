import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// CORS
app.use(
  cors({
    origin: "https://contact-management-system-ahdd.onrender.com",
    methods: ["GET", "POST", "DELETE"],
  })
);

app.use(express.json());

// routes
app.use("/api/contacts", contactRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// 🔑 IMPORTANT: listen on PORT
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
