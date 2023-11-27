// 4. Modifying Element HTML

const body = document.body
const div = document.createElement("div")

div.innerText = "<strong>Hello World</strong>"

body.append(div)