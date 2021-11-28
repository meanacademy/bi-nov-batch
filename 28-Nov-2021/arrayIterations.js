//string array
let names = ["Mahesh", "Aakash", "Gaurav", "Sunil", "Akansha", "Suraj"];

//number array
let scores = [99, 75, 87, 25, 85, 99];

// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }


// for (let i = 0; i < scores.length; i++){
//     console.log(scores[i]);
// }

names.forEach(function (name) {
    let customStr = "My name is " + name;
    console.log(customStr);
})

let newArray = names.map(function (name) {
    return "My name is " + name;
})

console.log(newArray);


let newScores = scores.map(function (score) {
    return score + 10;
})

console.log(newScores);

let evenNos = scores.filter(function (score) {
    return score % 2 == 0;
})

console.log(evenNos);


let addition = scores.reduce(function (result, score) {

    return result + score;
}, 0)

console.log(addition);


let isEvenAvailable = scores.some(function (score) {
    return score % 2 == 0;
})

console.log(isEvenAvailable);

let isAllEvens = scores.every(function (score) {
    return score % 2 != 0;
})
console.log(isAllEvens);


let findNumber = scores.find(function (score) {
    return score == 100;
})

console.log(findNumber);

let findIndexNumber = scores.findIndex(function (score) {
    return score == 25;
})

console.log(findIndexNumber);