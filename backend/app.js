const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Import cookie-parser
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Allow credentials
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser()); // Use cookie-parser middleware

app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

module.exports = app;
