const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" })); 
app.use(express.urlencoded({ limit: "30mb", extended: true }));


app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
