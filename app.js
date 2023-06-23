// we need a function that gets what the user types before clicking add, and produces a new task with a delete button below
    //in order to get the user input, we should add an onchange event listener on the input, with the parameter event
    //the way we receive it in our app.js file is by setting a global variable todoText as an empty string, then updating it inside our onchange funciton

//we need a function that activates when the user clicks the delete button and removes it from the list

let taskText = "";

function getInputText (event) {
    console.log(`${event.target.value}`)
    taskText = event.target.value;
}

const list = document.querySelector(".list")
let tasks = [
    {
        id: 1,
        text: "gamer"
    }
];

function renderTasks() {
    list.innerHTML = tasks.map((element) => {
        return (
            `<li>
            ${element.text}
            <button class="todo__delete" onclick=removeTask(${element.id})>
              x
            </button>
          </li>`
        )
    }).join("")
}

function addTask () {
    const taskInput = document.getElementById("taskInput");
    const errorText = document.getElementById("errorText");
    if (!taskInput.value.length) {
      errorText.style.display = "block"; // Display the error message
      return; // Stop the function execution if the input is empty
    }
    let newTask = {
        id: tasks.length + 1,
        text: `${taskText}`
    }
    tasks.push(newTask);
    renderTasks()
    taskText = "";
    taskInput.value = ""; // Clear the input field
    errorText.style.display = "none"; // Hide the error message
}

function removeTask (id) {
    tasks = tasks.filter((element) => {
        if (element.id !== id) {
            return true;
        } else {
            return false
        }
    })
    renderTasks()
}

renderTasks()