// methods 
// function inside objects
function personInfo() {
    console.log(`Person name is ${this.name} and age is ${this.age}`)
}
const person1 = {
    name: "Rajat",
    age: 21,
    about: personInfo
}
const person2 = {
    name: "Ram",
    age: 18,
    about: personInfo
}
const person3 = {
    name: "Rahul",
    age: 31,
    about: personInfo
}
person1.about();
person2.about();
person3.about();