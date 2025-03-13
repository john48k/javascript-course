// Random Number Generator



// what this does is that it generates a random number between 50 and 100
// Math.random() generates a random number between 0 and 1
// const min = 50;
// const max = 100;


// let randomNum = Math.floor (Math.random() * (max - min)) + min;



// console.log(randomNum);



const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function() {

    randomNum = Math.floor (Math.random() * max) + min;
    myLabel.textContent = randomNum; 

}