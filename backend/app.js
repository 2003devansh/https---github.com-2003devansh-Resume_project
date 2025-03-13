const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/post") ;

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" })); 
app.use(express.urlencoded({ limit: "30mb", extended: true }));


app.use("/posts",postRoutes);
// this mean that any route that start with /posts will be redirected to postRoutes


module.exports = app;
