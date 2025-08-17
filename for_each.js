const arr = [2, 3, 4, 5, 6, 7, 5]
function mulby2(num, index) {
    console.log("index is ", index);
    console.log(`${num} * 2  = ${num * 2} `);
}
// for (let i = 0; i < arr.length; i++) {
//     mulby2(arr[i], i)
// }
arr.forEach(mulby2);


arr.forEach(function (number) {
    console.log("multiple by 3 is : ", number * 3)
})


///////////
const user = [
    { name: "Guru", age: 21 },
    { name: "Rahul", age: 22 },
    { name: "Raghav", age: 23 },
    { name: "suresh", age: 20 }
]
user.forEach(function (ide) {
    console.log(ide.name)
})

////
for (let ide1 of user) {
    console.log(ide1.age)
}