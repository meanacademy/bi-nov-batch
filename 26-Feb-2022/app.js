const express = require("express");
const path = require("path");
//create an instance of express method
const app = express();

const userroutes = require('./expressrouter');


//Default port no
const PORT = 3000;

//create a default route
// app.use('/', (req, res) => {
//     res.send('Hello Mahesh!, form express js');
// })

// app.use('/', express.static(path.join(__dirname, 'public')))
// app.use("/virtualpath", express.static(path.join(__dirname, "public")));

// app.get("/users", (req, res) => {
//   res.send("<h1>Hello Mahesh</h1>");
// });

// app.post("/adduser", (req, res) => {
//   res.send("This is post method");
// });

// app.put("/updateuser", (req, res) => {
//   res.send("This is put method");
// });

// app.delete("/deleteuser", (req, res) => {
//   res.send("This is delete method");
// });

// app.get("/user/:id/:name", (req, res) => {
//   console.log(req.params);
//   res.send("user ID - " + req.params.id + " " + req.params.name);
// });


// app.get('/json', (req, res) => {
//     res.json({
//         "name": "mahesh",
//         "contact": 9787767656756,
//         "email": 'mahesh@gmail.com'
//     })
// })

app.use("/user", userroutes);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
