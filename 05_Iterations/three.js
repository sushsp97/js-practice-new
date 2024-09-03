// For of loop
// ["", "", ""]
// [{}, {}, {}]
const arr = [1, 2, 3 , 4, 5]
for (const element of arr) {
    console.log(element); 
}

// Maps
// Map is not iterable through for in loop
const map = new Map()
map.set('IN', 'India')
map.set('Fr', 'France')
console.log(map);

// destructuring
for (const [key, value] of map) {
    console.log(key, ':-', value); 
}
