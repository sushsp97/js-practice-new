// for each loop
const coding = ['java', 'python', 'cpp']
// callback function doesn't have name
// coding.forEach((item) => {
//     console.log(item);
// });

// coding.forEach(function(val) {
//     console.log(val);
// });

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)  // only give reference of function

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// Accessing object from array
const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"jv"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);
})