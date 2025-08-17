// reduce method 

const arr2 = [1, 2, 3, 4, 5, 6, 3];
const sum = arr2.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
});
console.log(sum)
