function createUser(name, age, email, address, about, is18) {
    const user = Object.create(createUser.prototype);//{}
    user.name = name;
    user.age = age;
    user.email = email;
    user.address = address;
    // user.about = userMethod.about;
    // user.is18 = userMethod.is18;
    return user;
}

createUser.prototype.about = function () {
    return `${this.name} is ${this.age} yrea old `;
}
createUser.prototype.is18 = function () {
    return this.age >= 18;
}
const usr = createUser("Rohan", 2, "rohan@gmail.com", "xyz colony ");
console.log(usr);
console.log(usr.is18())
console.log(usr.about())
