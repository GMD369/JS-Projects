// variables
let dateInput = document.querySelector("input");
let calculateBtn = document.querySelector("button");
let result = document.querySelector(".result");




// logic

const calculateAge=()=>{
    let userDate = dateInput.value.split("-");
    let calcAge=2025-userDate[0];
    result.textContent=`Your age is ${calcAge} years old`;
}



// event listeners
calculateBtn.addEventListener("click", calculateAge);