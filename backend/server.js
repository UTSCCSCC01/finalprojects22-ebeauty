const express = require('express');
//currently not used
const colors = require('colors');
const port = (process.env.PORT) || 5000
//handle error
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
// used on get the .env file
const dotenv = require('dotenv').config();

connectDB();

const app = express();

//Note: use postman raw sending json object like A1
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use(errorHandler);
app.use('/api/goals', require('./routes/route'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})