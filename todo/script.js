// variables
let inputField = document.querySelector("input");
let submitButton = document.querySelector(".submit");
let taskList = document.querySelector("ul");
let clearButton = document.querySelector(".clear");

// logic
function clearAllTasks() {
    taskList.innerHTML = "";
}

function addTask() {

    let task = inputField.value;

    let newItem = document.createElement("li")

    newItem.innerHTML = `<p>${task}</p>
              <div>
                <button class = 'check'>
                  <i class="fa-solid fa-check" style="color: green"></i>
                </button>
                <button class = 'delete'>
                  <i class="fa-solid fa-trash" style="color: red"></i>
                </button>
              </div>
    `
    taskList.appendChild(newItem);
    inputField.value = "";

    let checktask= newItem.querySelector(".check").addEventListener("click",()=>{
        newItem.querySelector("p").style.textDecoration="line-through";
    })

    let deleteTask=newItem.querySelector(".delete").addEventListener("click",()=>{
        taskList.removeChild(newItem);
    })
}



// event listeners
submitButton.addEventListener("click", addTask)
clearButton.addEventListener("click", clearAllTasks)