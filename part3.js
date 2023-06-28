// the div we want to add our tasks to is called list
// we want an array of objects that we will add to our htmlList
// we want a function that will add a task based on whatever we type into the text input
// we want a function that deletes the task we click on

let htmlList = document.querySelector(".list")
console.log(htmlList)
let tasks = [
    {
        id : 1,
        text : "say hello"
    }, 
    {
        id : 2,
        text : "say goodbye"
    }
]

function renderTasks() {
    htmlList.innerHTML = tasks.map((task) => {
        return (
        `<li class="task">
          ${task.text}
          <button class="todo__delete" onclick=removeTask(${task.id})>
            x
          </button>
        </li>`
        )
    }).join("")
}

renderTasks()

let $inputEl = document.querySelector("input")

let errorText = document.querySelector("#errorText")

function addTask (newTask) {
    if (!newTask.length) {
        errorText.style.display = "block"
        return
    }
    errorText.style.display = "none"
    // tasks.push({
    //     id: tasks.length + 1,
    //     text: newTask
    // })
    // renderTasks()
    // $inputEl.value = ""

    let $newTaskEl = document.createElement("li")
    htmlList.appendChild($newTaskEl)

    let $taskSpan = document.createElement("span")
    $taskSpan.innerText = newTask;
    $newTaskEl.appendChild($taskSpan)

    let $buttonEl = document.createElement("button")
    $buttonEl.innerText = "delete"
    $newTaskEl.appendChild($buttonEl)

}


let addButton = document.querySelector("button")
addButton.addEventListener("click", (onchange) => addTask($inputEl.value))

function removeTask (id) {
    console.log(`before our tasklist was ${tasks.length} long`)
    tasks = tasks.filter((task) => {
        if (task.id !== id) {
            console.log("we return")
            return task
        } else {
            console.log("no match")
        }
    })
    console.log(`after our tasklist is ${tasks.length} long`)
    renderTasks()
}

// addButton.addEventListener("click", () => {
//     addTask($inputEl.value)
// })

// htmlTasks.forEach((task) => {
//     addEventListener("click", (task) => {
//         console.log("hello")
//     })
// })



