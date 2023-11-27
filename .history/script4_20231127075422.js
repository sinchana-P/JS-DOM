// 4. Modifying Element HTML

const body = document.body
const div = document.createElement("div")

div.textContent = "<Strong></Strong>Hello World"

body.append(div)