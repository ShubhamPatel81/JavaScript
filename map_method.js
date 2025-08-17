// map mathod in javaScript
const arr1 = [1, 2, 4, 3, 2, 5];
console.log(arr1)
// const square = function (number) {
//     return number * number;
// }
// const squareNum = arr1.map(square);
// console.log(squareNum)

const squareNum = arr1.map((number) => {
    return number * number;
});
console.log(squareNum)
