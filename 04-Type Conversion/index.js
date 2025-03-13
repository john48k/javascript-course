// Type Conversion is the process of changing the data type to another data type like strings to numbers etc...

let age = window.prompt("How old are you");

age = Number(age);

age = age + 1;

console.log(age);

document.getElementById("ageButton").onclick = function() {
    document.getElementById("age").textContent = `Your age next year will be ${age}`;
}