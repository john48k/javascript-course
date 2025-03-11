// today we will go over how to accept user input in java script
// it basically takes user input and stores it in a variable

// run the index.html file to see the result




/*
over here we are using the window.prompt to get the user input
and we are storing it in the variable called username
and then we are using the console.log to display the message

let username;

username = window.prompt("Enter your username: ");

console.log(`Hello ${username}!`);
*/


/* on this version we are using the professional way of getting user input
by using the document.getElementById to get the value of the text box
and storing it in the variable called username
and then we are using the console.log to display the message
*/


let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value; 
    console.log(`This is your username: ${username} from the text box`);
    document.getElementById("output").textContent = `Your username is: ${username} !`;
    document.getElementById("myH1").textContent = `Hello, ${username} !`;
}