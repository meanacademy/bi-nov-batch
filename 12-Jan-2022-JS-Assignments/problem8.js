let str = 'Lorem Ipsum';

console.log(str.length);

let newStr = str.replace(/\s/g, "");
// \s - find all the white spaces (space, tab, new line)
// g - all the content
console.log(newStr.length);