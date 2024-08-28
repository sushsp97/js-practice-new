// current context
const user = {
    username : "sushreeta",
    price : 199,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this); // {}

// function chai(){
//     console.log(this); 
// }
// chai()

//*  Not accessible inside function, only in object
// function chai(){
//     let username = " sushreeta"
//     console.log(this.username); 
// }
// chai()

// arrow function
// const chai = () => {
//     let username = " sushreeta"
//     console.log(this.username); 
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// implicit return
// const addTwo = (num1, num2) => (num1 + num2)


// returning object // parenthesis wrapping is mandatory
const addTwo = (num1, num2) => ({username : "sushreeta"})
console.log(addTwo(3,4));

