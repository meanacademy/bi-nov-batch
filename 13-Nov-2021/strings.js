let name = 'Mahesh';
let address = "Pune";
let str = '';
let str2 = "";


console.log(typeof name, typeof address, typeof str, typeof str2);

//single quote inside double quote
let str3 = "It's Rainy";
console.log(str3);

//double quote inside single quote
let str4 = 'my name is "mahesh"';
console.log(str4);

//escape characters
//  1. \' -> Print single quote
//  2. \" -> Print double quote
//  3. \\ -> Print Backslash"

let str5 = "It\'s Rainy";
console.log(str5);

let str6 = "lorem 'ipsum' dolor sit \"amet\", \\consectetur adip";
console.log(str6);

let str7 = 'lorem \'ipsum\' dolor sit "amet", \\consectetur adip';
console.log(str7);

let str8 = 'Consectetur ex irure duis velit eiusmod et consequat commodo aliquip aliquip sint et.' +
    'Proident officia enim ut sunt nisi laborum irure ut dolor laborum do.Lorem irure sunt commodo ea minim.'
    + 'Incididunt cupidatat culpa minim dolor nulla exercitation cupidatat cupidatat excepteur.Sint anim pariatur fugiat velit qui in duis eiusmod exercitation adipisicing laboris in cupidatat.Cillum amet incididunt pariatur velit deserunt magna.Deserunt sunt in amet cillum occaecat cillum proident proident.Magna minim dolor quis ut ex consectetur.Esse sint Lorem sint ut commodo consequat non quis do nostrud sint.Nulla minim sit anim ut et voluptate commodo irure.Velit aute cillum irure eiusmod esse sunt veniam aliquip.Proident duis et consequat nostrud.';
console.log(str8);

//string literals

let str9 = `I am Mahesh from "Nanded", I'm a MEAN Stack Trainer`;
console.log(str9);

let str10 = `Ea velit nulla non do veniam culpa et mollit consectetur commodo dolore. Laborum anim do tempor officia aliquip exercitation sunt velit amet ullamco voluptate id esse magna. Qui cillum nostrud elit laborum consectetur. Qui deserunt nisi consectetur aute Lorem amet id. Incididunt ad minim velit elit. Exercitation labore consectetur elit proident sit.

Ea veniam ullamco labore consequat ullamco ullamco consectetur enim. Lorem Lorem aliquip sint id fugiat esse labore Lorem aliquip veniam cillum in. Ad labore sit nostrud in sint consectetur incididunt elit consequat Lorem deserunt dolor ullamco. Consectetur officia laborum culpa tempor nulla. Proident et ad minim minim in eiusmod velit ex voluptate eiusmod proident reprehenderit. Tempor labore est Lorem aliqua.`;

let firstName = "Mahesh";
let lastName = "Bodhgire";
let fullname = firstName + " " + lastName;
console.log('Full Name: ', fullname);

let fullname2 = `Full name is ${firstName} ${lastName}`;
console.log(fullname2);

let firstNameLength = firstName.length;
console.log(firstNameLength);

//indexOf()
let address2 = 'Karve Nagar, Pune, India, Pune 411041';
let puneindex = address2.indexOf("Pune", 15);
console.log(puneindex);

//lastIndexOf()
console.log(address2.lastIndexOf("Pune"));

//search method
console.log(address2.search("Pune"));


//slice()
//stntax:
// slice(startPos, endPos)

let slicedStr = address2.slice(-7,-3)
console.log(slicedStr);

//substring(start, end)
let substringStr = address2.substring(7,3);
console.log(substringStr);

//substr(start, length)
let substrString = address2.substr(13, 4);
console.log(substrString);

//concat()
console.log(firstName + lastName);
console.log(firstName.concat(" ",lastName, " from nanded"));

//trim()
var str11 = "    hello world, how are you    ";
console.log(str11.length);

var trimmedStr = str11.trim();
console.log(trimmedStr.length);

//charAt(index)
console.log(address2.charAt(0));

//charCodeAt(index)
console.log(address2.charCodeAt(0));

// property access
console.log(address2[0]);

//transform string
console.log(address2.toUpperCase());
console.log(address2.toLowerCase());    

//string to array convertion
//split(splitter)
//splitter may be space, comma, pipe(|), none

console.log(address2.split(","));