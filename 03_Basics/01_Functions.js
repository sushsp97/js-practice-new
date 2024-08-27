// function addTwoNumbers(number1, number2){
//     console.log(number1+number2); // 8
// }
// const result = addTwoNumbers(3,5)
// console.log("result: ", result); // result:  undefined

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result // after return statement, nothing gets executed
    return number1 + number2
}
// const result = addTwoNumbers(3,5)
// console.log("result: ", result); // result:  8

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("sushreeta"));
// console.log(loginUserMessage()); // undefined just logged in

// Rest Operator or Spread Operator
function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000)); // [500, 2000]
// val1 --> 200, val2 --> 400

// Functions and Objects
const user = {
    username: "sushreeta",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 100, 600])); // 400


