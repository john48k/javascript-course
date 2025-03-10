// variable = a container that stores a value
// behaves as if it were the value it contains



// Open the console on Google to see the result of the code

// here is an example on what were going to do 
// 1. Declaration let x;
// 2. assignment x = 100;

// This is the number example
let x = 100;
x = 123;
console.log(x);

// This is the another example
let age = 20;
let price = 19.99;
let gpa = 3.5;

console.log(age);
console.log(price);
console.log(gpa);

// Here's an example of template literal using the variables as placeholders
console.log(`The age is ${age}`);
console.log(`The price is ${price}`);
console.log(`The gpa is ${gpa}`);



// you can also use this thing called type of to see what data type it is heres an example 
console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);



// Heres an example of a string 
let firstname = "John";
console.log(typeof firstname);
console.log(`My name is ${firstname}`);



// Heres an example of a boolean

let isRaining = true;
console.log(typeof isRaining);
console.log(`Is it raining? ${isRaining}`);

let isSunny = false;
console.log(typeof isSunny);
console.log(`Is it sunny? ${isSunny}`);



// We will dislay this in the webpage on the variables.html file so use live server to open it to see the results
let fullName = "John Doe";
let student = false;
let year = 2021;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Enrolled: ${student}`;
document.getElementById("p3").textContent = `It is year ${year}`;