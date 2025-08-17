class person2 {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;

    }
    static classInfo() {
        return "This is static class";
    }
    get fullName() {
        return `${this.name} ${this.lastName}`
    }
    set fullName(fullName) {
        const [name, lastName] = fullName.split(" ");//["mohit","jain"]


    }
    eat() {
        return `${this.name} is eating `;
    }
    iscute() {
        return true;
    }
    isSuperCute() {
        return this.age <= 1;
    }
}
const person3 = new person2("guru", "adsfcbsbfv", 9);
console.log(person3.eat());
console.log(person2.classInfo());