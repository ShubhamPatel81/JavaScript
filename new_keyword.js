function createUser1(name, age) {
    this.name = name;
    this.age = age;
}
const user5 = new createUser1("shubham ", 18)
console.log(user5)


// 
function CreateUser0(name, age, email, address, about, is18) {
    // const user = Object.create(createUser.prototype);//{}
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
    // user.about = userMethod.about;
    // user.is18 = userMethod.is18;
    // return user;
}

CreateUser0.prototype.about = function () {
    return `${this.name} is ${this.age} yrea old `;
}
CreateUser0.prototype.is18 = function () {
    return this.age >= 18;
}
const usr1 = new CreateUser0("Rohan", 2, "rohan@gmail.com", "xyz colony ");
console.log(usr1);
console.log(usr1.is18())
console.log(usr1.about())


for (let key in usr1) {
    // console.log(key);
    if (usr1.hasOwnProperty(key)) {
        console.log(key);
    }

}