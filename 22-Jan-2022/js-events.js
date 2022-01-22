/*

<h2 eventName="js code">

mouse events
onclick
onmouseover
onmouseup
onmousedown
onmousemove

*/
function clickMe() {
    console.log("i am from button click");
    alert("hey hello")
}

function mouserover() {
    document.getElementById("sample").style.backgroundColor ="black";
}

function mouseout() {
    document.getElementById("sample").style.backgroundColor = "blue";
}


let div = document.getElementById('sample');
div.addEventListener("mouseover", function () {
    document.getElementById("sample").style.backgroundColor = "black";
})

div.addEventListener("mouseout", function () {
    document.getElementById("sample").style.backgroundColor = "blue";
})

div.addEventListener("mouseup", function () {
    document.getElementById("sample").style.backgroundColor = "green";
})

div.addEventListener("mousedown", function () {
    document.getElementById("sample").style.backgroundColor = "yellow";
})

let input = document.getElementById("myinput");

// input.addEventListener("keydown", function (e) {
//     console.log(e.target.value);
// })

input.addEventListener("keyup", function (e) {
    console.log(e.target.value);
})

function load() {
    // alert('page loading..!')
}

