const balance = new Number(100)
console.log(balance.toFixed(2));  // 100.00

const otherNumber = 123.899
console.log(otherNumber.toPrecision(4));  // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000

// console.log(Math.abs(-4));
// console.log(Math.min(3,4,5,6));  // 3
// console.log(Math.max(3,4,5,6));  // 6
// console.log(Math.random());  // value between 0 to 1
// console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);




