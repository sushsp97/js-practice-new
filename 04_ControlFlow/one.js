// var keyword : global
// let : used in scope
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// checking empty array
const userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty");
}

// checking empty object
const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined
// To handle null value coming from database
let val1
// val1 = 5 ?? 10    // 5
// val1 = null ?? 10   // 10
val1 = undefined ?? 15    // 15
val1 = null ?? 10 ?? 15   // 10
console.log(val1);


// Ternary Operator
// condition : true ? false





