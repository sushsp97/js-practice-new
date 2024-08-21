console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// The reason is that the an equality check == and comparisions > < >= <= work differently.
// Comparisions convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

// strict check
console.log("2" === 2);  // false


