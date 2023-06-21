//there will be a list that we want to insert our elements into, we should first have a variable to point to the list we want to isnert inside
//we want to set have an array GLOBAL of objects that we will re-render when the page reloads
//we need a function that pushes a new item into our GLOBAL array
    //the function must get the input from our typed code
    //the way we actually make our code appear is by targeting an element on the HTML with the queryselector and then changing its innerHTML
//we need a function that removes a specific element from our todo list

let insertHere = document.querySelector(".list")
console.log(`our list is ${insertHere}`)

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


function renderTasks () {
    global.map((element) => {
        element.innerHTML = `
        <div>
            <li>the gamers are gaming</li>
            <button>delete</button>
        </div>`
    })
}




let newTaskText = "";

function newTaskDetected(event) {
    newTaskText = event.target.value
    console.log(`our nTT is ${newTaskText}`)
}

function addTask(event) {

}
