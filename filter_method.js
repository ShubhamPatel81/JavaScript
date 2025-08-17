// filter method  - always return true or false 
const array = [1, 4, 2, 3, 8, 1, 9];
// const isEven = function (array) {
//     return array % 2 === 0;
// }

// const evenNum = array.filter(isEven);
// console.log(evenNum)
const evenNum = array.filter((num) => {
    return num % 2 != 0;
});
console.log(evenNum)