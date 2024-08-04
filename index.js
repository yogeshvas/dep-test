import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Allow your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions)); // Use CORS middleware with options

app.get("/api/v1/hello", (req, res) => {
  res.status(200).json({ message: "Hello is working" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running Successfully at", process.env.PORT);
});
