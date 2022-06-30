<<<<<<< HEAD
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
=======
import express from 'express';
import profiles from './data/profiles.js';
import colors from 'colors';
import errorHandler from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// import apis here
import posts from './routes/postRoute.js';
import providers from './routes/providerRoute.js';
import taskproviderRoute from './routes/taskproviderRoute.js';

import path from 'path';
import {fileURLToPath} from 'url';

// used on get the .env file
dotenv.config();

// set up PORT
const port = (process.env.PORT) || 5000;

// connect the database here
>>>>>>> 64d9256ca352c1fffb78bffdaa2dd3b4de96e5b0
connectDB();



const app = express();

// to retrieve data from postman to be not undefined.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD

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
=======

// use the routes here
app.use('/api/posts', posts);
app.use('/api/providers', providers);
app.use('/api/taskproviders', taskproviderRoute);
>>>>>>> 64d9256ca352c1fffb78bffdaa2dd3b4de96e5b0

// take frontend content (static asset) to backend. but if you modified frontend, then it needs to re-run npm run build in frontend folder everytime.
// thus used for deployment in future. if uncomment below, just visit port:500 would show content of port:3000
/*
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
  )
);*/

app.listen(port, () => {
<<<<<<< HEAD
  console.log(`Server started on port ${port}`);
=======
  console.log(`Server started under ${process.env.NODE_ENV} on port ${port}`.yellow.bold);
>>>>>>> 64d9256ca352c1fffb78bffdaa2dd3b4de96e5b0
});
