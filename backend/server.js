const express = require('express');
// used on connecting frontend
const path = require('path');
const port = (process.env.PORT) || 5000
// handle error and show it inside postman
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

// Serve frontend
/*
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
  )
)*/

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
