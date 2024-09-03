const myObject = {
    js : 'javascript',
    cpp : 'c++'
}
// (object) is not iterable through (for of) loop 
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// For in loop for Array
const programming = ['js', 'cpp']
for (const key in programming) {
    console.log(programming[key]);
}