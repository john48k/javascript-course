// string slicing is creating a substring from a portion of another string

// string.slice(start, end) - returns a substring from start to end (end not included)
// string.slice(start) - returns a substring from start to end of string

const fullName = "Michael James";

let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(7, 13);

console.log(firstName); // Mic
console.log(lastName); // James

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstChar); // M
console.log(lastChar); // s
