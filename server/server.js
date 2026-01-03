import cors from "cors";

const allowedOrigins = [
  "https://contact-management-system-ahdd.onrender.com",
  "https://contact-management-system-frontend-ozqh.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));
