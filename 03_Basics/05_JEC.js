// JavaScript Execution Context (JEC)
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// Steps how this code works
// 1. Global Execution/ Environment --> allocated the code into this
// 2. Memory Creation Phase (Gathering variables and storing it) 
   // val1 : undefined
   // val2 : undefined
   // addNum : definition
   // result1 : undefined
   // result2 : undefined
// 3. Execution Phase
   // val1 : 10
   // val2 : 5
   // when addNum() function gets executed, then a new executional context gets created 
      // new executional context : new variable environment + execution thread  
      // Memory Phase , Execution Phase