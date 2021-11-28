//string array
let names = ["Mahesh", "Aakash", "Gaurav", "Sunil", "Akansha", "Suraj"];

//number array
let scores = [198, 1, 22, 225, 75, 87, 25, 85, 99];

//sort names array in ace order

console.log(names);
let acenSorting = names.sort();
console.log(acenSorting);
console.log(acenSorting.reverse());

console.log(scores);
let sortNumArr = scores.sort();

console.log(sortNumArr);
console.log(sortNumArr.reverse());


console.log('----After Comapre Function----');
let asceScores = scores.sort(function (a, b) { 
    return a - b;
})

console.log(asceScores);

let descScores = scores.sort(function (a, b) {
    return b - a;
})

console.log(descScores);