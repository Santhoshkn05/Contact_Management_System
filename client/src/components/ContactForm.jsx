import { useState } from "react";
import { addContact } from "../services/api";

function ContactForm({ refreshContacts }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");

  const isValid =
    form.name.trim() &&
    /^\d{10}$/.test(form.phone) &&
    /\S+@\S+\.\S+/.test(form.email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setError("Please fill all required fields correctly");
      return;
    }

    try {
      await addContact(form);

      // reset form
      setForm({ name: "", email: "", phone: "", message: "" });
      setError("");

      // success popup
      alert("Contact submitted successfully!");

      refreshContacts();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3 text-center">Contact Form</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            name="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
          />

          <input
          className="form-control mb-2"
          name="phone"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length <= 10) {
                setForm({ ...form, phone: value });
            }
        }}
        maxLength={10}
        />

          <textarea
            className="form-control mb-3"
            name="message"
            placeholder="Your Message (optional)"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />

          <button
            className="btn btn-primary w-100"
            disabled={!isValid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
