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


// used on get the .env file
dotenv.config();

// set up PORT
const port = (process.env.PORT) || 5000;

// connect the database here
connectDB();

const app = express();

// to retrieve data from postman to be not undefined.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use the routes here
app.use('/api/posts', posts);
app.use('/api/providers', providers);
app.use('/api/taskproviders', taskproviderRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started under ${process.env.NODE_ENV} on port ${port}`.yellow.bold);
});

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