// IIFE : Immediately Invoked Function Expressions --> is used to remove global scope pollution
(function chai(){
    // named IIFE
    console.log(`DB Connecteed`);
})();
// 1st () --> function definition, 2nd () --> function execution
// ; is used to end iife statement
// () => {} arrow function
// ()() iife function

// ( () => {
//     console.log(`DB Connected two`);  
// } )();

// passing parameter in iife function
( (name) => {
    console.log(`DB Connected two ${name}`);  
} )('sushreeta');


