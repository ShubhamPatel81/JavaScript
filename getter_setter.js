//getter and setter 
class person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;

    }
    get fullName() {
        return `${this.name} ${this.lastName}`
    }
    set fullName(fullName) {
        const [name, lastName] = fullName.split(" ");//["mohit","jain"]


    }

    // setName(name, lastName) {
    //     this.name = name;
    //     this.lastName = lastName;
    // }
}

const person1 = new person("Ram", "Singh", 34)
// console.log(person1.fullName())
// console.log(person1.fullName)
// console.log(person1.name);
// console.log(person1.lastName);
// person1.setName("mohit", "Jain")
// console.log(person1.name);
// console.log(person1.lastName);

person1.fullName = "rohit yadav";
console.log(person1)
