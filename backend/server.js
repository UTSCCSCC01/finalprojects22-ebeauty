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

app.use('/api/posts', require('./routes/postRoute'));
app.use('/api/providers', require('./routes/providerRoute'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
