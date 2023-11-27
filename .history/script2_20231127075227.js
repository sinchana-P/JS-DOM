// 2. Creating Elements &
// 3. Modifying Element Text

// const body = document.body
// const div = document.createElement("div")
// div.textContent = "Hello World"
// div.innerText = "Hello World 1"

// body.append(div)
// body.appendChild(div)       //works

// -----------

const div = document.querySelector("div")

console.log(div.textContent);   // Displays Both Visible & Invisible Elements
// o/p:
        // Hello
        // Bye
        
console.log(div.innerText);     // Displays Visible Elements
// o/p:
// Hello


