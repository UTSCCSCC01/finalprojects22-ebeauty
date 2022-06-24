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

app.use('/api/goals', require('./routes/goalRoute'));
app.use('/api/providers', require('./routes/providerRoute'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})

/**
 * It's just a simple app without creating any user, not connected to frontend as well. 
 * 
 * Note: use postman raw sending json object like A1 to: localhost:5000/api/goals
 *       currently, recording to schema goalModel.js, I need a field named movieId that correspond to string
 *       so how it works is you select method, input the url, go to body select raw and JSON, 
 *       if doing the methods that need a body, like post, put, delete. 
 *       We have body looks like this: 
{
"movieId": "1"
}
 * NOTE: currently we go server.js -> route.js -> controller.js -> goalModel.js to send, get messages from database
 *                                 -> db.js to connect to mongodb
 *                                 -> errorMiddleware.js to handle showing error
 * additional: .env is link that help connect to database for db.js process.env.MONGO_URI
 */