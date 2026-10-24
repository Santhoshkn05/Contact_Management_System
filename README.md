# Project Description

This project is a Contact Management System developed using the MERN stack. The application allows users to submit contact details through a form and view the stored contacts dynamically. The focus of this project is on working functionality, clean logic, and proper state management using React hooks.

The project is deployed on Vercel and uses MongoDB Atlas as the database.

# Tech Stack

# Frontend

* React.js
* Bootstrap
* Vite
* React Hooks (`useState`, `useEffect`)

# Backend

* Node.js
* Express.js
* REST APIs

# Database

* MongoDB Atlas
* Mongoose

# Deployment

* Vercel

# Features

* Contact form with validation
* Fields: Name, Email, Phone, Message
* Name and Phone are required
* Email validation
* Phone number limited to exactly 10 digits
* Submit button disabled until form is valid
* Success popup on form submission
* Display saved contacts without page reload
* Delete contact with confirmation popup
* Contacts sorted by latest entry
* Responsive UI using Bootstrap

# Form Fields

| Field   | Validation          |
| ------- | ------------------- |
| Name    | Required            |
| Email   | Valid email format  |
| Phone   | Required, 10 digits |
| Message | Optional            |

# API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| POST   | `/api/contacts`     | Add a new contact  |
| GET    | `/api/contacts`     | Fetch all contacts |
| DELETE | `/api/contacts/:id` | Delete a contact   |

# Project Structure

Contact_Management/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactList.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json
│
├── vercel.json
└── README.md

# Environment Variables

Create a `.env` file inside the `server` folder:

MONGO_URI=your_mongodb_connection_string <-

The same variable is configured in Vercel for deployment.
