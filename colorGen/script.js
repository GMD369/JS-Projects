// variables
let redbtn = document.querySelector(".red");
let greenbtn = document.querySelector(".green");
let bluebtn = document.querySelector(".blue");
let yellowbtn = document.querySelector(".yellow");
let orangebtn = document.querySelector(".orange");
let pinkbtn = document.querySelector(".pink");






// logic
const redHandler = () => {
    document.body.style.backgroundColor = "red";
}

const greenHandler = () => {
    document.body.style.backgroundColor = "green";
}

const blueHandler = () => {
    document.body.style.backgroundColor = "blue";
}

const yellowHandler = () => {
    document.body.style.backgroundColor = "yellow";
}

const orangeHandler = () => {
    document.body.style.backgroundColor = "orange";
}

const pinkHandler = () => {
    document.body.style.backgroundColor = "pink";
}




// event listeners
redbtn.addEventListener("click", redHandler);
greenbtn.addEventListener("click", greenHandler);
bluebtn.addEventListener("click", blueHandler);
yellowbtn.addEventListener("click", yellowHandler);
orangebtn.addEventListener("click", orangeHandler);
pinkbtn.addEventListener("click", pinkHandler);