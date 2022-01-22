// function myfunction(a, b, c) {
//   console.log(a, b, c);
// }

// myfunction(10, 'js', 30);


/*
    3. Callback Function

    Callback function
    - you can pass a function as an argument or a parameter to a function (another).
    - this function that passed as an argument inside of another function is called a 
    callback function.

    Syntax:
    function functionName(arg1, arg2, callback) {
        callback();
    }

    function callback(){
    
    }
*/

// function callback() {
//     console.log('i am from callback function');
// }

// function mycallback(name, callback) {
//     callback();
//     return 'My name is ' + name;
// }

// function myFunction(name, callback1, callback2) {

//     // console.log(name);
//     // console.log(callback);
//     // callback();

//     let data = callback2(name, callback1);
//     console.log(data);
// }

// myFunction("Mahesh", callback, mycallback);


function login(username, password, callback) {
    if (username == '' || password == '') {
        console.log('please provide username and password');
    } else {
        console.log(callback);
        let res = callback(username, password);
        console.log(res);
    }
}

function checkLogin(username, password) {
    if (username == 'admin' && password == 'admin') {
        return 'login success';
    } else {
        return 'login failed';
    }
}

login('admin', 'admin2', checkLogin);