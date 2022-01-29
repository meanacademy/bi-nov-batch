const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");

//create server
// http.createServer((req, res) => {
//     res.write('<h1>Hello From Node.JS<h1>');
//     res.end();
// }).listen(3000, () => {
//     console.log('server is started on port no 3000');
// });

const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url == '/') {
        let filePath = path.join(__dirname, 'index.html');
        // console.log(filePath);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    } else if (req.url == '/contact') {
        let filePath = path.join(__dirname, 'contact.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
