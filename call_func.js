function about(hobby, favPlayer) {
    console.log(this.name, this.age, hobby, favPlayer)
}
const user1 = {
    name: "Rahul",
    age: 21,
}
const user2 = {
    name: "Rohan",
    age: 20
}
//call
// about.call(user2, "bollyball", "MS Dhoni")

//apply
// about.apply(user1, ["football", "Virat"])

//bind
const func = about.bind(user1, "gitar", "Rohit")
func()