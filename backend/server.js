const express = require('express');
//currently not used
const colors = require('colors');
const port = (process.env.PORT) || 5000
//handle error
const {errorHandler} = require('./middleware/errorMiddleware');
// used on get the .env file
const dotenv = require('dotenv').config();

// connect the database here
const connectDB = require('./config/db');
connectDB();

const app = express();

// to retrieve data from postman to be not undefined.
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(errorHandler);

app.use('/api/goals', require('./routes/route'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})

/**
 * Note: use postman raw sending json object like A1
 * It's just a simple app without creating any user, not connected to frontend as well. 
 * NOTE: currently we go server.js -> route.js -> controller.js -> goalModel.js to send, get messages from database
 *                                 -> db.js to connect to mongodb
 *                                 -> errorMiddleware.js to handle showing error
 * additional .env is link that help connect to database for db.js process.env.MONGO_URI
 */