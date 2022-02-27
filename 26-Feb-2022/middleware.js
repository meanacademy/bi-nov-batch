const express = require("express");
const app = express();
const router = express.Router();

//Application Level Middleware
let mycallback = (req, res, next) => {
  console.log(Date.now());
  next();
};

let myAnotherCallback = (req, res) => {
  res.json({
    name: "BI",
  });
};

app.get("/applevelmiddleware", [mycallback, myAnotherCallback]);

//Router Level Middleware
router.use((req, res, next) => {
    console.log('Current Date and Time: ', Date.now());
    next();
})

router.get('/routerlevelmiddleware', (req, res) => {
    res.send('This is router level middleware');
})

app.use('/', router)

app.listen(3000, () => {
  console.log("Server Started on Port: 3000");
});
