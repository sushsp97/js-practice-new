const myArr = [0,1,2,3,4]
// const myArr1 = new Array(1,2,3,4)
// myArr.push(5)
// console.log(myArr);
// myArr.pop(5)
// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// const newArr = myArr.join()
// console.log(newArr); // 0,1,2,3,4
// console.log(typeof newArr); // string

// slice, splice
console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4 ]
const myn1 = myArr.slice(1,3)
console.log(myn1); // [ 1, 2 ]

console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4 ]
const myn2 = myArr.splice(1,3)
console.log("C ",myArr); // C  [ 0, 4 ]
console.log(myn2); // [ 1, 2, 3 ]




