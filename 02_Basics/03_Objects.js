// object literals
const mySym = Symbol("key1")
const JsUser = {
    name:"sush",
    "full name":"sushreeta pradhan",
    [mySym]:"mykey1",
    age:18,
    location:"bbsr",
    email:"sush@google.com",
    isLoggesIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);
JsUser.email = "sush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="sush@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");  
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
// console.log(JsUser.greeting); // [Function (anonymous)] *
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());








