/*

async-await 
- async keyword is applied before a function keyword
- async function always returns a promise.

Syntax: 
async function functionName (){

}

await waits for the promise to be resolved
when promise resolved, await executes next code block 

*/

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise Resolved');
    }, 5000);
})

async function myAsyncFunction() {
    let res = await promise;
    console.log(res);
    console.log('i will print from myasync function');
}

myAsyncFunction()