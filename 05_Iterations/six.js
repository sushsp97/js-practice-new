const myNums = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// inside scope {}, return keyword is necessary
// map is like filter

const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

const newNm = myNums
              .map((num) => num*10 )
              .map((num) => num+1)
              .filter((num) => num>=40)
console.log(newNm);