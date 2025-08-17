// DOM -  Document Object Mode
/*
console.log(window.document)
console.dir(window.document)
console.log(document.getElementById(""));

console.log(document.querySelector(".form-todo"));

const mainHead = document.getElementById("main-heading")
console.log(mainHead.textContent);
mainHead.textContent = "Changing text Context ";
console.log(mainHead);

*/
// const mainHead = document.getElementById("main-heading")
// console.log(mainHead?.innerText )

// const navItem = document.getElementsByClassName("navitem");
// console.log(navItem)
// let anchors = document.querySelectorAll("a");
/*
// simple for loop
for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    anchor.style.backgroundColor = "red ";
    anchor.style.color = "white";
    anchor.style.fontWeight = "bold";
}


// for of loop
for (let anchor of anchors) {
    anchor.style.backgroundColor = "red ";
    anchor.style.color = "white";
    anchor.style.fontWeight = "bold";
}


// foreach
anchors.forEach((anchor) => {
    anchor.style.backgroundColor = "red ";
    anchor.style.color = "white";
    anchor.style.fontWeight = "bold";
})
console.log(anchors)


// innerHTML

// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1> Inner HTML changed </h1>"

const section_todo = document.querySelector(".todo-section");
// console.log(section_todo?.classList);
// section_todo?.classList.add("bg-dark");
section_todo?.classList.toggle("bg-dark");
section_todo?.classList.toggle("bg-dark");

*/

// document.createElement
// append
// prepend
// remove
// Before
// after
// const newTodo = document.createElement("li");
// const newTodoItemText = document.createTextNode("Hello World ");
// newTodo.appendChild(newTodoItemText);
// console.log(newTodo)

// elem.insertAdjecentHTML(where, html)
// beforebegain
// afterbegain
// beforeend
// afterend

// some old method to   support poor Internet Exxplorer(IE)
// appendChild
// insertBefore
// replaceChild
// removeChild


// static list vs live list
// qureySelectorAll ---> static list
// getElementsBySomething ----> live list


// how to get the dimensions of the element
// height , width
// var_name.getBoundingClintRect

/*
// Events 
const btn = document.querySelector(".btn-headline");
console.dir(btn)
btn.onclick = function () {
    console.log("YOu clicked me ")
}


//.addEventListener method 
const btn = document.querySelector(".btn-headline");

btn?.addEventListener("click", function () {
    console.log("You clicked me ")
})


// this keyword 

const btn = document.querySelector(".btn-headline");

btn?.addEventListener("click", function () {
    console.log("You clicked me ")
    console.log("value of this is : ")
    console.log(this)
})

const btn1 = document.querySelector(".btn-headline");

btn1?.addEventListener("click", () => {
    console.log("You clicked me ")
    console.log("value of this is : ")
    console.log(this)
})


// if there is many clickable items are there then 
// examle
for (let button in buttons) {
    button.addEventListener("click", (e) => {
        console.log(e.currentTarget,textContent);
    })
}


// Keypress event 
// mouseover event


const body = document.body;
body.addEventListener("keypress", (e) => {
    console.log(e.key)
})
const mainButton = document.querySelector(".btn-headline");
mainButton?.addEventListener("mouseover", () => {
    console.log("Mouseover event occured !!")
})
mainButton?.addEventListener("mouseleave", () => {
    console.log("Mouseleave event occured !!")
})
*/
const todo = document.querySelector(".btn signup-btn");
todo?.addEventListener("submit", (e) => {
    // 
    e.preventDefault();
    console.log("form Submited ");
})
