//there will be a list that we want to insert our elements into, we should first have a variable to point to the list we want to isnert inside
//we want to set have an array GLOBAL of objects that we will re-render when the page reloads
//we need a function that pushes a new item into our GLOBAL array
    //the function must get the input from our typed code
    //the way we actually make our code appear is by targeting an element on the HTML with the queryselector and then changing its innerHTML
//we need a function that removes a specific element from our todo list

let list = document.querySelector(".list")

const global = [

    {
        id: 1,
        task: "eat durant"
    }, 
    {
        id: 2,
        task: "win championship"
    }
];

function newTaskDetected(event) {
    newTaskText = event.target.value
    console.log(`our input is ${newTaskText}`)
}

list.innerHTML = global.map((element) => {
    return (
        `<div>
            <li>${element.task}
            <button class="todo__delete">x</button>
            </li>
        </div>`
    )
}).join("")

function addTask () {
    global.push({
        id: Math.floor(Math.random() * 1000000),
        task: ""
    })
}







let newTaskText = "";



