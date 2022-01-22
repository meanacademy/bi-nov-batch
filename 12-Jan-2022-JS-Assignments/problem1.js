// Print the factorial of the integer.

let number = 5;

if (number < 0) {
  console.log("Please provide positive no.");
} else if (number == 0) {
  console.log(`Factorial of ${number} is 1.`);
} else {
  let facto = 1;
  for (let i = 1; i <= number; i++) {
    facto *= i;
  }
  console.log(`Factorial of ${number} is - ${facto}`);
}
