/*
author: Mahesh Bodhgire
topic: js outputs
*/

//document.write()
document.write("Hello world..!");
document.write("How are you?");
document.write("where are you from?");
document.write(123);
document.write(true);

var mahesh = "BI"; //variable
document.write(mahesh);

//alert() method
/* alert('hello world!')
 alert(123);
alert(mahesh);*/

//innerHTML Property
document.getElementById("name").innerHTML = "My name is Sita";

//console.log() method
console.log("My name is Mahesh Bodhgire");
console.log(123);
console.log(true);
console.log(mahesh);

//use warn() method for sending warning
console.warn("warning:");
//use error() method for sending error
console.error("error:");
//use info() method for sending information
console.info("info");

//Variable by var keyward
var username;
console.log(username);
username = "mahesh123";
console.log(username);

var username = "mahesh7410";
console.log(username);

// var firstName;
// var lastName;
// var address;

// var firstName, lastName, address;

let city;
console.log(city);

city = "Pune";
console.log(city);

city = "Mumbai";
console.log(city);

const company_name = "my company";
console.log(company_name);

let address = "Mumbai"; //string
let age = 30; //number
let marks = 85.25; //number
let isMarried = false; //boolean
let hobbies = ["coding", "watcing movies"]; //array
let dob; //undefined
let email = null; //null
let getName = function () {}; //function
let user = {
  firstName: "Mahesh",
  lastName: "Bodhgire",
  address: "Nanded",
  marks: 85,
  isMarried: false,
  hobbies: ["coding", "watcing movies"],
};

console.log(dob, email);
