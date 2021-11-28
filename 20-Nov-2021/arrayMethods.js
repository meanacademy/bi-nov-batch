//string array
let names = ["Mahesh", "Aakash", "Gaurav", "Sunil", "Akansha", "Suraj"];

//number array
let scores = [98, 75, 87, 25, 85, 99];

let arrToStr = names.toString();
console.log(names);
console.log(typeof arrToStr);
console.log(names.join(' '));


console.log(scores.pop());

names.push("Ganesh");
console.log(names);

console.log(names.shift());
console.log(names);

console.log(names.unshift("Pooja"));
console.log(names);

delete names[0];
console.log(names[0]);

let arrayA = [1, 2, 3, 4, 5];
let arrayB = [6, 7, 8, 9, 10];
let arrayC = [11, 22, 33, 44, 55];

let newArray = arrayB.concat(arrayA, arrayC);
console.log(newArray);

console.log(arrayC);

arrayC.splice(2,1, 66)
console.log(arrayC);

arrayC.splice(3, 1);
console.log(arrayC);

console.log(arrayA);
let arrResp = arrayA.slice(2, 4);
console.log(arrResp);
console.log(arrayA);


