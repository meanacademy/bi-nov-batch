/* 

    In js with try, catch and finally we can go with error handling
    
    try block
     try {
        block of code for try 
     } catch(err){
        block of code to handel an error
     }

     try{
        block of code
        throw 'customise error msg';
     
     }

*/

try {
  let age = 20;
  if (age < 18) {
    console.log("you may not vote..!");
  } else {
    console.log("you can vote");
  }
} catch (err) {
  console.log(err);
}

try {
  let age = 13;
  if (age < 18) throw "age should be 18 to vote in india";
  console.log("you may vote..!");
} catch (err) {
  console.log(err);
} finally {
  console.log("I will print finally");
}

function myName() {
  let errormessage = document.getElementById("err-msg");
  errormessage.innerHTML = "";
  let name = document.getElementById("name").value;
  try {
    if (name == "") throw "name input is empty";
    if (typeof name == "number") throw "name input should not be a number";
    document.getElementById("myname").innerHTML = "Your name is: " + name;
  } catch (err) {
    errormessage.innerHTML = "Error: " + err;
  }
}
