const express = require("express");
// used on connecting frontend
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
// handle error and show it inside postman
const { errorHandler } = require("./middleware/errorMiddleware");
// used on get the .env file
const dotenv = require("dotenv").config();

// connect the database here
const connectDB = require("./config/db");
connectDB();



const app = express();

// to retrieve data from postman to be not undefined.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(errorHandler);
app.use("/api/posts", require("./routes/postRoute"));
app.use("/api/providers", require("./routes/providerRoute"));
// app.use("*", (req, res) => res.status(404).json({ error: "No endpoint exists" }));

// Enabled all the review routes in server.js
const reviewRoutes = require("./routes/reviewRoute");
app.use("/api/reviews", reviewRoutes);

// Serve frontend
/*
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
  )
)*/

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
