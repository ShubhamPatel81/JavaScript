// @ts-nocheck
// Function Expression  in js
const add = function (x, y) {
    return x + y;
}
let a = add(10, 10);
console.log(a);

const mul = function () {
    let a = 10;
    let b = 5;
    return a * b;
}
let x = mul()
console.log("Multile of 2 and 5 is : ", x)

// console.log(undefined + undefined);

// even-odd
const isEven = function (num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(10))