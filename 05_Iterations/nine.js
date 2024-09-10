const myNums = [1, 2, 3]
const myTotal = myNums.reduce( function(accumulator, currentValue){
    console.log(`acc value ${accumulator} and curr value ${currentValue}`);
    return accumulator + currentValue
}, 3)
console.log(myTotal);
// usecase : shopping cart bill value

// arrow function
const newNums = myNums.reduce( (accumulator, currentValue) => (accumulator+currentValue), 0)
console.log(newNums);

