// X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

// Sample Input:
// 1 5 6
// Sample Output:
// -2.00 -3.00

let a = 1;
let b = 5;
let c = 6;

let res1;
let res2;

// {-b + √(b² - 4ac) } / 2a
res1 = ((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;
console.log(res1.toFixed(2));

// {-b-√(b² -4ac)} / 2a
res2 = ((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;
console.log(res2.toFixed(2));