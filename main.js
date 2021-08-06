const textarea = document.getElementById("inputText")
const showbutton = document.getElementById('showButton')



function printText() {
    const outputtext = document.getElementById("outputText")
    const task = document.createElement("div")
    const removebutton = document.createElement("button")
    const newp = document.createElement("p")

    outputtext.appendChild(task)
    task.appendChild(newp)
    task.appendChild(removebutton)

    newp.textContent = textarea.value
    removebutton.innerText = "remove"
    removebutton.addEventListener("click", function () { task.remove() })
}

showbutton.addEventListener("click", printText)