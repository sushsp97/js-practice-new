// Primitive : String, Number, BigInt, Null, Undefined, Boolean, Symbol  // Call for value

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false

const bigNumber = 228837636552543n

// Reference (Non Primitive) : Array, Object, Functions

const heroes = ["shaktiman", "naagraj"]
let myObj = 
{
    name : "sush",
    age : 18
}

const myFunction = function(){
    console.log("Hello World !"); 
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive),    Heap (Non-Primitive)

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "sush@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


