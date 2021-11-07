let username = "Mahesh";
let marks = 78.45;
let isMarried = false;
let hobbies = ["coding", "cooking"];

console.log(typeof hobbies);

let n1 = 20;
let n2 = 10;

let result = n1 + n2; //addtion
console.log(result);

result = n1 - n2;
console.log(result);

result = n1 * n2;
console.log(result);

result = n1 / n2;
console.log(result);

result = n2 % n1;
console.log(result);

result = 2 ** 2;
console.log(result);

//post increment
console.log(n1);
n1++; //20++ = 20+1 = 21
console.log(n1);

//pre increment
++n1; //20++ = 20+1 = 21
console.log(n1);

for (let i = 0; i <= 10; i++) {
  console.log(i);
  // ++i
}


//post decrement
console.log(n1);
n1--; //22-- = 22-1 = 21
console.log(n1);

//pre decrement
--n1; //--21 = 21+1 = 20
console.log(n1);


n1 = 50;
n2 = 100;

console.log(n1, n2);
n1 += n2 // n1 = n1 + n2 n1 = 50+100
console.log(n1);

n2 -= n1 //n2 = n2 - n1 n2 = 100-150
console.log(n2);
console.log(n1, n2);

n1 *= n2 //n1 = n1 * n2 n1 = 150 * -50
console.log(n1);

n1 /= n2 //n1 = n1 / n2 n1 = -7500 / -50
console.log(n1);

console.log(n1, n2);

n1 %= n2 //n1 = n1 % n2 n1 = 150 % -50
console.log(n1);

n2 **= 2; //n2 = n2 ** 2 
console.log(n2);

n1 = 100;
n2 = 200;
console.log("Original value n1:",n1);
console.log("Pre Increment n1", --n1);
console.log("Original value n2", n2);
console.log("Post increment n2", n2--);
console.log("second statement for n2", n2);

console.log(n1, n2);
console.log(n1 == n2); // 99 == 199
n2 = '99';
console.log(n1 == n2); // 99 == '99' true
console.log(n1 === n2); // 99 === '99' false

console.log(n1 + n2); //99 + '99'

n1 = 99;

console.log(n1 != n2);
console.log(n1 !== n2);

n1 = 100;
console.log(n1 > n2); //100>'99'
console.log(n2 > n1); //'99' >100

n1 = 99;
console.log(n1, n2);
console.log(n1 >= n2);

console.log(n1 < n2); //99 < '99'
console.log(n1 <= n2); // 100< '99'

console.log(n1 >= n2 ? "n1 is greater than n2" : "n2 is greater than n1");

if (n1 >= n2) {
    console.log("n1 is greater than n2");
} else {
    console.log("n2 is greater than n1");
}


let n3 = 100;
console.log(n1, n2, n3);

console.log(n1 >= n2 && n1 < n3);

console.log(n1 > n2 || n1 < n3);

console.log(!(n1 != n2));