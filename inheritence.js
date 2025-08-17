// @ts-nocheck
// Super
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
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
class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    run() {
        return `${this.name} is runnning at ${this.speed} Km/h`
    }
}
// object instance
const tommy = new Dog("tommy", 3, 34);
console.log(tommy)
console.log(tommy.run())
console.log(tommy.eat())
