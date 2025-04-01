// A function is a section of reusable code you can use
// you can use it anytime
// you call the function to execute the code

// syntax:
// function "function_name" (){

// }

// here we have a user input
let username = "";

function Message() {
  username = window.prompt("Enter name");
  console.log(`Happy Birthday ${username}`);
}

Message();

// here we are using parameters and you have to match the data as shown and input them and make sure its in correct order

function Birthday(name, age) {
  console.log("Happy Birthday to you!");
  console.log(`Happy Birthday Dear ${name} `);
  console.log(`You are now ${age} years old! `);
}

Birthday("John", 26);

// this right here we can add but instead its addtion
function add(x, y) {
  let result = x + y;
  console.log(`Your numbers is equal to ${result}`);
}
add(20, 1);

function subtract(x, y) {
  return x - y;
}

console.log(subtract(100, 20));
