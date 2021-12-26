//Looping Controls
//1. for() loop

// for(statement1; statement2; statement3){
//     block of code
// }

/*
    statement1 - variable declaration (executes one time)
    statement2 - condition to execute block of code
    statement3 - increment or decrement operator for each iteration
*/

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.log("outside for loop");
//first iteration
// i => 0;
// 0 <= 5 => true
// i++ => 1;
//console.log(i) => 0

//second iteration
// i => 1;
// 1 <= 5 => true
// i++ => 2;
//console.log(i) => 1

//third iteration
// i => 2;
// 2 <= 5 => true
// i++ => 3;
//console.log(i) => 2

//fourth iteration
// i => 3;
// 3 <= 5 => true
// i++ => 4;
//console.log(i) => 3

//fifth iteration
// i => 4;
// 4 <= 5 => true
// i++ => 5;
//console.log(i) => 4

//sixth iteration
// i => 5;
// 5 <= 5 => true
// i++ => 6;
//console.log(i) => 5

//seventh iteration
// i => 6;
// 6 <= 5 => false
// break the for look

let numbers = [32, 5435, 643, 332, 56, 9, 534];
let arrLength = numbers.length;
// console.log(arrLength);
// console.log(numbers[0]);

//print even nos
console.log("Even No.: ");
for (let i = 0; i <= arrLength; i++) {
  //i = 0; 0<7; 0+1 = 1
  // console.log(numbers[i]); //numbers[0]
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}

//print odd nos
console.log("Odd No.: ");
for (let i = 0; i <= arrLength; i++) {
  if (numbers[i] % 2 != 0) {
    console.log(numbers[i]);
  }
}

//print even and odd nos
for (let i = 0; i <= arrLength; i++) {
  if (numbers[i] % 2 == 0) {
    console.log("Even No.:", numbers[i]);
  } else {
    console.log("Odd No.:", numbers[i]);
  }
}

let evenArr = [];
let oddArr = [];

//print even and odd nos
for (let i = 0; i <= arrLength; i++) {
  if (numbers[i] % 2 == 0) {
    evenArr.push(numbers[i]);
  } else {
    oddArr.push(numbers[i]);
  }
}

console.log("Even No.: ", evenArr);
console.log("Odd No:", oddArr);
