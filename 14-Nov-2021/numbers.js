var n1 = 123;
var n2 = -123;
var n3 = 1.5;

console.log(n1, n2, n3);
console.log(typeof n1, typeof n2, typeof n3);


//precision
let n4 = 9999999999999999;
console.log(n4);

let n5 = 1.0000000000005 + 1.2;
console.log(n5);


//addition of string with number
let n6 = 10 + "20";
console.log(n6);

let n7 = "10" + 50;
console.log(n7);

let n8 = 10 + 20 + "30"; //30 + "30"
console.log(n8);

let n9 = "10" + 20 + 30;
console.log(n9);

let n10 = 10 - "5";
console.log(n10);

let n11 = "10" * 2;
console.log(n11);

let n12 = 10 * "two";
console.log(n12);

console.log(typeof NaN);

let isNumber = isNaN("1jhfjf");
console.log(isNumber);


let division = -10 / 0;
console.log(division);

let numToStr = n1.toString();
console.log(typeof numToStr);

let num = 1.2;
console.log(num.toExponential(2));


let number = 123.456789;

console.log(number.toFixed(2));

console.log(number.toPrecision(8));

console.log(number.valueOf());

console.log(Number("100"));

console.log(parseInt("200"));
console.log(parseInt(1.5));

console.log(parseFloat("100.25"));
console.log(parseFloat(300));

let n13 = 300;
console.log(Number(n13.toPrecision(5)));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);