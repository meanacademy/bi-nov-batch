const fs = require('fs');

//create a folder
// fs.mkdir('demo/demo2', (err) => {
//     if (err) throw err;
//     console.log('Folder created successfully');
// })

//create a file
// let data = "Mahesh Bodhgire";
// fs.writeFile('sample/sample.txt', data, (err) => {
//     if (err) throw err;
//     console.log('File written successfully');
// })

//append file
// let newData = ' from Nanded, Maharashtra';
// fs.appendFile('sample/sample.txt', newData, (err) => {
//     if (err) throw err;
//     console.log('File append successfully');
// })

//read file content
// fs.readFile('sample/sample.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

//delete file
// fs.unlink('sample/sample.txt', (err) => {
//     if (err) throw err;
//     console.log('File Delete successfully');
// })

//delete folder
// fs.rmdir('demo/demo2', (err) => {
//     if (err) throw err;
//     console.log('Folder Delete successfully');
// })