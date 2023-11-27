// 2. Creating Elements

const body = document.body
const div = document.createElement("div")
div.textContent = "Hello World 1"
div.innerText = "Hello World"

body.append(div)
// body.appendChild(div)       //works