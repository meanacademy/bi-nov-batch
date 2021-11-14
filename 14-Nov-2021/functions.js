// let n1 = 100;
// let n2 = 200;

// console.log(n1 + n2);

// let n3 = 1.5;
// let n4 = 2.5;
// console.log(n3 + n4);

//function declaration/defination
function hello() {
    console.log('Hello World!');
}

//function call
hello();

//parameterised function
//n1 and n2 are parameters
function addition(n1, n2) {
    var result = n1 + n2;
    console.log(result);
}

addition(100, 200);

function multiply() {
    var n1 = 100;
    var n2 = 2;
    var result = n1 * n2;
    console.log('I can also print result');
    return result;
    console.log('Can i print result');
}

var res = multiply();
console.log(res);

function divide(n1, n2) {
    // var result = n1 / n2;
    return n1 / n2;
}

var res2 = divide(100, 5);
console.log(res2);



function add() {
    var n1 = 100;
    var n2 = 200;
    console.log(n1 + n2);
}

add();

function getValue() {
    var n1 = 100;
    var n2 = 200;
    
    return n2 / n1;
}

var value = getValue();
console.log(value);

function multiply2(n1) {
    // var n2 = getValue(); // 2
    var n2 = add();
    console.log(n1 * n2);
}

multiply2(50);


//get an avg marks
//s1 = 10, s2 = 20, s3 = 30

function avg() {
    var avgMarks = (10 + 20 + 30) / 3;
    console.log(avgMarks);
}

var avgMarks = avg();
console.log(avgMarks);

function getAvgMarks() {
    return (10 + 20 + 30) / 3;
}

var myAvgMarks = getAvgMarks();
console.log(myAvgMarks);



function getmarksDetail(avgmarks) {
  console.log("Your avg marks for s1-s3");
  console.log(avgmarks);
}

getmarksDetail(myAvgMarks);

// function substraction() {
//     console.log(200-150);
// }

let substraction = () => console.log(200 - 2);

substraction()