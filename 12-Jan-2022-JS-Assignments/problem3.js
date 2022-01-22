// The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the
// triangle. You are provided with the side "a". Find the area of the equilateral triangle.

// Sample Input :
// 20
// Sample Output :
// 173.21

let a = 20;
let sqrtOfthree = Math.sqrt(3);

let areaOfEquilateralTriangle = (sqrtOfthree / 4) * a * a;
console.log(areaOfEquilateralTriangle.toFixed(2));
