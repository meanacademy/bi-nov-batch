/*

JS Asynchronous
1. setTimeOut()
    - it executes block of code (function) after certain time duration
    - time duration is always in milliseconds
    - it return intervalID which is a positive no

    Syntax: 
    setTimeout(function, milliseconds)
2. setInterval()
    - it executes block of code (function) after every time duration 
    - time duration is always in milliseconds
    - it return intervalID which is a positive no

    Syntax: 
    setInterval(function, milliseconds)

 */

//setTimeout()
// function myFunction() {
//     console.log('I will print after a second');
//     alert('time up..!')
// }

// let timeOutID = setTimeout(myFunction, 5000);

// let timeOutID2 = setTimeout(function () {
//     alert('i am from second function')
// }, 5000);

// // console.log(itervalID);
// // console.log(itervalID2);

// clearTimeout(timeOutID)

//setInterval()

// function currentTimeandDate() {
//     console.log(Date.now());
// }

// let itervalID = setInterval(currentTimeandDate, 1000);

// console.log(itervalID);

// if (true) {
//     clearInterval(itervalID);
// }

// let count = 0;
// function dateandtime() {
//   console.log(Date.now());
//   count++;
//   if (count == 5) {
//     clearInterval(intervalId);
//   }
// }

// let intervalId = setInterval(dateandtime, 1000);

// if (count == 5) {
//   clearInterval(intervalId);
// }
