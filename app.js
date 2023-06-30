// we have an addTask function that 
    // takes our typed input
    // uses it to create a new listNode
    // appends that listNode to the list
// we have a removeTask function that
    // registers the ndoe we are clicking
    // removes it from the DOM

let $input = document.querySelector("input") 
const $list = document.querySelector(".list")
const button = document.querySelector("button")
button.addEventListener("click", () => addTask($input.value))


function addTask(task) {
    if (!task.length) {
        alert("please type the task you wish to add")
        return
    }
    const $newTask = document.createElement("li")
    const $taskText = document.createElement("span")
    $taskText.textContent = task
    $newTask.appendChild($taskText)
    const $remove = document.createElement("button")
    $remove.textContent = "Delete"
    $newTask.appendChild($remove)
    $list.appendChild($newTask)
    $input.value = ""
}

$list.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        removeTask(event.target.parentNode)
    }
})

function removeTask($itemEl) {
    console.log(`our param is of type ${$itemEl.tagName}, the parent is of type ${$itemEl.parentNode.tagName}`)
    $itemEl.parentNode.removeChild($itemEl);
}
