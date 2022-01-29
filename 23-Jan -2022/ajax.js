console.log("This is ajax console");

let getDataBtn = document.getElementById("getDataBtn");
// console.log(getDataBtn);

getDataBtn.addEventListener("click", getDatabtnHandler);

function getDatabtnHandler() {
  console.log("You clicked on get data button");

  //start AJAX Code
  // create an object of xhr
  let xhr = new XMLHttpRequest();

  //open xhr object
  //and request local data
  //   xhr.open("GET", "data/data.json", false);
  xhr.open("GET", "https://reqres.in/api/users", true);

  //progress i.e trying get data from given url, till now we can show any spinner or message to end user.
  xhr.onprogress = function () {
    console.log("It is progress");
  };

  //optional state for checking where is our state for request
  xhr.onreadystatechange = function () {
    console.log("ready state:", xhr.readyState);
  };

  //here we are ready with our response
  xhr.onload = function () {
      let obj = JSON.parse(this.responseText);
      let resData = obj["data"];
      let div = document.getElementById("employees");
      let avator = document.getElementById("avatar");
      let email = document.getElementById("email");
      let name = document.getElementById("name");
      let str = "";
    for (let i = 0; i < resData.length; i++) {
        // console.log("src", resData[i].avatar);
        // avator.setAttribute("src", resData[i].avatar);
      str += <h3>resData[i].email</h3>;
      email.innerHTML = resData[i].email;
      }
      div.innerHTML = str;
  };

  //send the request
  xhr.send();
  console.log("Shall i print after response");
}

//POST Data using POST Method of XMLHttpRequest
let postDataBtn = document.getElementById("postDataBtn");

postDataBtn.addEventListener("click", postDataBtnHandler);

function postDataBtnHandler() {
  console.log("You clicked on post data button");

  let xhr = new XMLHttpRequest();
  //POST METHOD
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else if (this.status === 404) {
      console.log("The data not found");
    } else if (this.status === 500) {
      console.log("Internal server error");
    } else {
      console.log("Error Occoured");
    }
  };
  let data = `{"name":"testmahesh","salary":"50000","age":"23"}`;
  xhr.send(data);
}
