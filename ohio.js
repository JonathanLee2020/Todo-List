//there will be a list that we want to insert our elements into, we should first have a variable to point to the list we want to isnert inside
//we want to set have an array GLOBAL of objects that we will re-render when the page reloads
//we need a function that pushes a new item into our GLOBAL array
    //the function must get the input from our typed code
    //the way we actually make our code appear is by targeting an element on the HTML with the queryselector and then changing its innerHTML
//we need a function that removes a specific element from our todo list

// For the deleteTasks fucntion, we want to activate it when we click the button
//we will re-render the page with all teh tasks minus the one we deleted

let list = document.querySelector(".list")

let global = [

    {
        id: 1,
        task: "Finish Frontend Simplified"
    }, 
];

let newTaskText = "";

function newTaskDetected(event) {
    newTaskText = event.target.value
    console.log(`onchange becomes ${newTaskText}`)
}

function deleteTask(id) {
    global = global.filter((element) => {
        return element.id !== id
    })
    renderTasks()
}

function renderTasks(element) {
    list.innerHTML = global.map((element) => {
    return (
        `<div>
            <li>${element.task}
            <button class="todo__delete" onclick=deleteTask(${element.id})>x</button>
            </li>
        </div>`
        )
    }).join("")
}


function addTask () {
    console.log(`we are about to add a task`)
    global.push({
        id: global.length + 1,
        task: `${newTaskText}`
    })
    console.log(`our length is ${global.length}, new id is ${global[global.length - 1].id}`)
    renderTasks();
}










