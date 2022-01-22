
const checkPalindrome = (num) => {
  let count = 0;
  for (i = 1; i <= num; i++) {
    numRev = i.toString().split("").reverse().join("");
    if (i === parseInt(numRev)) {
      count++;
    }
  }
  console.log(count);
};

checkPalindrome(5);
