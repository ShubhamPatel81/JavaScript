class CreateUser {
    constructor(name, age, email, address, about, is18) {
        console.log("constructor called ")
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;

    }
    about() {
        return `${this.name} is ${this.age} yrea old `;
    }
    is18() {
        return this.age >= 18;
    }
}
const userr = new CreateUser("Rohan", 2, "rohan@gmail.com", "xyz colony ");
console.log(userr);
console.log(Object.getPrototypeOf(userr))