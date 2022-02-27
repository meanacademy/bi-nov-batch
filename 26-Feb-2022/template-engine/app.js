const express = require('express');
const app = express();
const PORT = 3000;
const hbs = require('hbs');
const path = require('path');

const viewPath = path.join(__dirname, 'templates/views');

//set view engine
app.set("view engine", "hbs");
app.set("views", viewPath);

//Template engine routes 
app.get('/', (req, res) => {
    res.render("index", {name: 'mahesh'})
})



app.listen(PORT, () => {
    console.log('Server Started.!');
})