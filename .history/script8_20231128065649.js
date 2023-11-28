// 8. Modifying Element Classes

const spanHi = document.querySelector("#hi")

spanHi.classList.add("new-class-added")
// class="hi1 hi2 new-class-added"

spanHi.classList.remove("hi1")
// class="hi2 new-class-added"

spanHi.classList.toggle("hi")
