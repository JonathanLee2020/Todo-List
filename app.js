// we need an array taskArr to constantly regenerate with our updated todo list
// we need to grab the elemet we are storing hte list in, and when we regenerate our tasksArr we update the innerHTML of our list
// we need a function that renders our array for convenience sakes
// we need a function that adds a new task to the end taskArr 
    // our addTasks arr must grab the user's typed input
// we needa  fucntion that removes a task from any point in our taskArr

let taskArr = [
    {
        id: 1,
        text: "tester",
    }
]

let newTaskText = ""

function getInput(event) {
    newTaskText = event.target.value
    console.log(`our input text is ${newTaskText}`)
}

const HTMLTasks = document.querySelector(".list")
<button class="todo__delete" onclick=deleteTask(${element.id})>

function renderTasks() {
    HTMLTasks.innerHTML = taskArr.map((element) => {
        return (
            `        
            <li>
                ${element.text}
                <button class="todo__delete" onclick=deleteTask(${element.id})>
                x
                </button>
            </li>`
        )
    }).join("")
}

function addTask () {
    taskArr.push(
        {
        id: taskArr.length + 1,
        text: `${newTaskText}`
        }
    )
    renderTasks()
}

function deleteTask(id) {
    taskArr = taskArr.filter((element) => {
        if (element.id !== id) return element
    })
    renderTasks()
}