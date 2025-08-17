// @ts-nocheck
// Functions in js
function add(x, y) {
    return x + y;
}
let a = add(2, 2);
console.log(a);

function mul() {
    let a = 2;
    let b = 5;
    return a * b;
}
let x = mul()
console.log("Multile of 2 and 5 is : ", x)

// console.log(undefined + undefined);

// even-odd
function isEven(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(5))