// Singleton Object
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sushreeta",
            lastname:"pradhan"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2) // {} --> target, obj1,obj2 --> source

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// datbase objects
const users = [
    {
        id:1,
        email:"sp1@gmail.com"
    },
    {
        id:2,
        email:"sp2@gmail.com"
    }
]
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

// objects destructuring
const course = {
    coursename : "JavaScript",
    price : "999",
    courseInstructor : "sushreeta"
}

const {courseInstructor : instructor} = course
console.log(instructor);

// JSON
// {
//     "name" : "sushreeta",
//     "coursename" : "Javascript",
//     "price" : "free"
// }






