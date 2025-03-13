require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/db") ;

const PORT = process.env.PORT || 8000;

// Connect to Database
connectDB();

// Start Server
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
