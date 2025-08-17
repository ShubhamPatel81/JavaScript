// console.log("Hello World");
// Objects
/*
objects is referecne type
array are good but not sufficirnt
for real world data
object stores key value pairs
objects don't hava index

*/
/*
// creation of object
const person = {
    name: "Subh",
    age: 13,
    hobbies: ["playing", "listening music ", "trevelling "]
};
console.log(person);
console.log(person.hobbies);
console.log(typeof person);
console.log(person.name);
console.log(person.age);

//adding new key-value pair
// person.gender = "male";
person["person"] = "male";
console.log(person);

// difference between dot and bracket
const key = "email";
const person = {
    name: "Subh",
    age: 13,
    "person hobbies ": ["playing", "listening music ", "trevelling "]
};

// console.log(["person hobbies"]);
person[key] = "xyz@gmail.com";
console.log(person);


//  how to iterate object
const person = {
    name: "Subh",
    age: 13,
    "person hobbies ": ["playing", "listening music ", "trevelling "]
};

// for in loop
// object.keys
for (let key in person) {
    // console.log(`${key}: ${person[key]}`)
}

// console.log(Object.keys(person))
const va = Array.isArray(Object.keys(person));
// console.log(va)

for (let key of Object.keys(person)) {
    // console.log(person[key]);
}

// computed properties
const key1 = "value_key1";
const key2 = "value_key3";

const value1 = "myvalue 1";

const value2 = "myvalue 2";

// const obj1 {
//     [key1]: value1,
//     [key2]: value2
// }

const obj = {};
obj[key1] = value1;
obj[key2] = value2;
// console.log(obj)


// Spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArray = [...arr1, ...arr2];
const arr = [..."1234567898765"]
console.log(arr);
console.log(newArray);

const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value3",
    key4: "value4"
}
const newobj = { ...obj1, ...obj2 }
console.log(newobj)


// Object destructing
const brand = {
    car1: "oddi",
    car2: "fortuner"
};/*
const car1 = brand.car1;
const car2 = brand.car2;
console.log(car1);
console.log(car2);
const { car1, car2 } = brand;
*/

// FUNCTIONS IN JS 
