const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {}); // ✅ No deprecated options
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Error connecting to database:", error);
  }
};

module.exports = connectDB;
