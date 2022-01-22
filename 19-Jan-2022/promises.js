/*
4. Promise
    it returns promised value

    it has thre states
    1. pending
    2. fulfilled
    3. rejected

    Syntax: 
    let promise = new Promise(function(resolve, reject) {
    
    })

    1. resolve - this callback will call after successful promise
    2. reject - this callback will call when error occurs

*/

let promise = new Promise(function (resolve, reject) {
  let user = {
    name: "Mahesh",
    address: "Nanded",
    profile: "MEAN Stack Developer",
    contactno: 987655431,
    };
    

    let value = true;

  if (value) {
    resolve(user);
  } else {
    reject("Sorry, no user found..!");
  }
});

promise
  .then(function (res) {
    console.log(res);
  })
  .then(function () {
    console.log("promise resolved");
  })
  .catch(function (err) {
    console.log(err);
  });
