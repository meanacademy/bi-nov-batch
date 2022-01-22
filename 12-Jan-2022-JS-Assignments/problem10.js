let x = [3, 9, 1, 44, 6];
let odd_index = [];
let even_numbs = [];
let output = [];

for (i in x) {
  if (i % 2 == 0) {
    even_numbs.push(x[i]);
  } else {
    odd_index.push(parseInt(i));
  }
}

output = even_numbs.sort();

//array.splice(index, 0, value) -- 0 means 0 elements to be deleted, which is just insert

for (i in odd_index) {
  output.splice(odd_index[i], 0, x[odd_index[i]]);
}

console.log(output.join(" "));
