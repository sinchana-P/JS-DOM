// 2. Creating Elements

const body = document.body
const div = document.createElement("div")
div.innerText = "Hello World"
div.textContent = "HEllo"

body.append(div)
// body.appendChild(div)       //works