let myDate = new Date()
// console.log(myDate);  // 2024-08-23T06:18:33.899Z
// console.log(myDate.toString());  // Fri Aug 23 2024 06:18:33 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  // Fri Aug 23 2024
// console.log(myDate.toLocaleString());  // 8/23/2024, 6:18:33 AM
// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let myCreatedDate = new Date("01-13-2025")
myCreatedDate.toLocaleString('default',{
    weekday:"long"
})








