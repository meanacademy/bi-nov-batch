console.log("JS Array");

//string array
let names = ["Mahesh", "Aakash", "Gaurav", "Sunil", "Akansha", "Suraj"];

//number array
let scores = [98, 75, 87, 25, 85, 99];

//access an array element/item
let userName = names[6];

console.log(userName);

names[6] = "Amol";
console.log(names[6]);

names[10] = "Somesh";
console.log(names);

let namesLength = names.length;
let scoresLength = scores.length;
console.log(namesLength);
console.log(scoresLength);

console.log(typeof names);

let address = 'Pune';

console.log(typeof address);

console.log(Array.isArray(address));