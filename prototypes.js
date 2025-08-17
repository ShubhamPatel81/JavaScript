// const user = {
//     name: "Ram",
//     age: 21,
//     email: " ram12@gmail..com",
//     address: "xyz colony , aby area , mnq district",
//     about: function () {
//         return `${this.name} is ${this.age} yrea old `;
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }

// const a = user.about();
// console.log(a)

const userMethod = {
    about: function () {
        return `${this.name} is ${this.age} yrea old `;
    },
    is18: function () {
        return this.age >= 18;
    }
}
function createUser(name, age, email, address, about, is18) {
    const user = {};
    user.name = name;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}
const usr = createUser("Rohan", 21, "rohan@gmail.com", "xyz colony ");
console.log(usr);
console.log(usr.is18())
console.log(usr.about())


// const proto  = Object.create(userMethod)
