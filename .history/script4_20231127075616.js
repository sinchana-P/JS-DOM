// 4. Modifying Element HTML
//      To render HTML
const body = document.body
const div = document.createElement("div")

// div.innerText = "<strong>Hello World</strong>"
div.innerText = "<strong>Hello World</strong>"

body.append(div)