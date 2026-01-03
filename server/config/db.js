import express from "express";
import Contact from "../models/Contact.js";
import connectDB from "../config/db.js";

const router = express.Router();

// POST - Add Contact
router.post("/", async (req, res) => {
  try {
    await connectDB(); // ✅ IMPORTANT

    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET - Fetch Contacts
router.get("/", async (req, res) => {
  try {
    await connectDB(); // ✅ IMPORTANT

    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE - Delete Contact
router.delete("/:id", async (req, res) => {
  try {
    await connectDB(); // ✅ IMPORTANT

    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Delete failed" });
  }
});

export default router;
