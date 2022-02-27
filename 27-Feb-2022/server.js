//add all required dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;
//create an instance of express
const app = express();

const todoRoutes = require('./routes/todoRoutes')

//connect with database - todoapi
mongoose.connect("mongodb://localhost:27017/todoapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
    console.log('Connected to DB');
    })
    .catch((err) => {
    console.log('Connection unsuccessful..', err);
})

app.use(bodyParser.json());
//basepath = http://localhost:3000
app.use('/api', todoRoutes) //http://localhost:3000/api

//start server or listen server on PORT 3000
app.listen(PORT, () => {
    console.log('server started on port ', PORT);
});