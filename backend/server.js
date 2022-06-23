const express = require('express');
const port = (process.env.PORT) || 5000
const {errorHandler} = require('./middleware/errorMiddleware');
const app = express();

//Note: use postman raw sending json object like A1
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use(errorHandler);
app.use('/api/goals', require('./routes/route'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})