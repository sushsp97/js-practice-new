// let a = 100
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log(a); // 10  (blog scope)
// }
// console.log(a); // 100 (global scope)
// console.log(b);
// console.log(c); // c
 
// function one(){
//     const username = "sushreeta"

//     function two(){
//         const website = "youtube"
//         console.log(username);   
//     }
//     // console.log(website);
    
//     two()
// }
// one()

// if(true){
//     const username = "sushreeta"
//     if(username === "sushreeta"){
//         const website = " youtube"
//         console.log(username + website); 
//     }
//     // console.log(website);
// }
// console.log(username);

// +++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1
}
// addone(5)

console.log(addtwo(5)); // error (hoisting concept)
const addtwo = function(num){
    return num+2
}
// addtwo(5)


