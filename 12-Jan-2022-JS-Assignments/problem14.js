// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = 7;
// let k = 3;

// //starting point
// let startingPoint = k % n;

// // console.log(startingPoint); 3

// for (let i = 0; i < n; i++) {
//   let index = (startingPoint + i) % n;
//   console.log(arr[index]);
// }

const leftRotatedArray = (array, k) => {
  let z = array.splice(0, k);
  console.log(array.concat(z));
};

let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
leftRotatedArray(array, k);
