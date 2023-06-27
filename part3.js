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
          <button class="todo__delete">
            x
          </button>
        </li>`
        )
    }).join("")
}

renderTasks()

let htmlTasks = document.querySelectorAll(".task") 
console.log(htmlTasks)

// htmlTasks.forEach((task) => {
//     addEventListener("click", (task) => {
//         console.log("hello")
//     })
// })



