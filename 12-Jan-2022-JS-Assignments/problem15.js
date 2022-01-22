// 5 3 1 * + 9 -

let myarr = ["5", "3", "1", "*", "+", "9", "-"];

function postfixEval(myarr) {
  var stack = [];
  for (element of myarr) {
    if (isNaN(element)) {
      var a = stack.pop();
      var b = stack.pop();
      if (element == "+") {
        stack.push(b + a);
      } else if (element == "-") {
        stack.push(b - a);
      } else if (element == "*") {
        stack.push(b * a);
      } else if (element == "/") {
        stack.push(b / a);
      }
    } else {
      stack.push(parseFloat(element));
    }
  }

  let result;
  while (stack.length > 0) {
    let element = stack.pop();
    if (isNaN(element)) {
      continue;
    } else {
      result = element;
    }
  }
  return result;
}

let value = postfixEval(myarr);
console.log(value);
