let str = "mahesh bodhgire";
console.log(str);
let number = 123;
let para =
  number +
  "lorem ipsum dolor sit amet, adip. Ut enim ad minim veniam. Ut enim ad minim ven. lorem ips, quis nostrud exercitation ullamco laboris nisi lorem ipsum dolor sit amet, consectetur adip. Ut enim ad minim veniam. Ut enim ad minim ven. lorem ips, quis nostrud exercitation ullamco laboris nisi";

console.log(para);

let para2 = `${number} lorem ipsum 'dolor' sit amet, adip. Ut enim ad minim veniam. Ut enim ad minim ven. lorem ips, quis nostrud exercitation ullamco laboris nisi "lorem" ipsum dolor sit amet, consectetur adip. Ut enim ad minim veniam. Ut enim ad minim ven. lorem ips, quis nostrud exercitation ullamco laboris nisi. ${
  1 + 1
} ${str}`;

console.log(para2);

// let addtion = (a, b) => {
//   console.log(a + b);
// };

let addition = (a = 0, b = 0) => console.log(a + b);

addition(30, 20);
addition(10);

let user = ["Vipul", "Mumbai", "987654215"];
console.log(user);

//js destructuring
let [username, address] = user;

console.log(username, address);

let subjects = {
  s1: 86,
  s2: 31,
  s3: 55,
};


//js destructuring
let { s1, s2, s3 } = subjects;

console.log(s1, s2, s3);
