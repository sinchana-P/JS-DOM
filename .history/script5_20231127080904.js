// 5. Removing Elements:
// a. remove()

const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.remove()

div.append(spanBye)     // add it back

div.rem