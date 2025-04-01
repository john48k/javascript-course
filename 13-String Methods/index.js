// String Methods allows you to manipulate strings in various ways.

let userName = "JavaScript";

// this .length property returns the length of the string.
console.log(userName.length); // 10

// this right here displays the position of that letter 0 means the first letter.
console.log(userName.charAt(0)); // J

// this right here displays the position of that letter 9 means the last letter.
console.log(userName.indexOf("S")); // 4

// this right here .toLowerCase displays the text to be all lower case
console.log(userName.toLowerCase()); // javascript

// this right here .toUpperCase displays the text to be all lower case
console.log(userName.toUpperCase()); // JAVASCRIPT

// this right here .repeat repeats it how many times you want and in this case its 3 times its gonna be repeating
console.log(userName.repeat(3)); // JavaScriptJavaScriptJavaScript

// this right here .replace replaces the text with the new text
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padStart();

console.log(phoneNumber); // 123-456-7890

// theres way more to discuss but i will leave it here for now
