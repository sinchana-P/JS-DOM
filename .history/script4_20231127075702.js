// 4. Modifying Element HTML: "innerHTML"
//      To render HTML inside of a div/ any element

const body = document.body
const div = document.createElement("div")

// div.innerText = "<strong>Hello World</strong>"
div.innerText = "<strong>Hello World</strong>"

body.append(div)