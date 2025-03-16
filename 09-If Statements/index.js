// if a condition is true, then do something
// if a condition is false, then do something else

//its like choosing which path to take
// if the condition is true, then take the first path
// if the condition is false, then take the second path


const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');


mySubmit.onclick = function(){

// over here ive used a number to check if the person is an adult or not
// if the number is greater than or equal to 18, then the person is an adult
// if the number is less than 18, then
// the person is a child
let age = myText.value;
age = Number(age);

if(age >= 18){
    console.log('You are an adult');
    resultElement.textContent = `You are ${age} old and you are an adult`;
}
else{
    console.log('You are a child');
    resultElement.textContent = `You are ${age} and You are a child`;
}


// over here ive used a boolean value to check if the person is a student or not
// if the value is true, then the person is a student
// if the value is false, then the person is not a student
let isStudent = false;

if(isStudent){
    console.log('You are a student');
}
else{
    console.log('You are not a student');
}



// over here we can do an if statement inside another if statement
// this is called a nested if statement
// we can use this to check for multiple conditions

let years = 15;
let hasLicense = false;

if(years >= 16){
    console.log("You are old enough to drive ")

    if(hasLicense){
        console.log("You can drive")
    }

    else{
        console.log("You do not have a license")
    }
}
else{
    console.log("You are not old enough to drive")
}



// over here we can use the else if statement
// this is used to check for multiple conditions
// if the first condition is false, then check the second condition
// if the second condition is false, then check the third condition
// and so on



// bonus tip is the order of the cause matters to the output
let old = -2;

if(old >=18){
    console.log("You are old enough to enter this website")
}
else if(old >= 16){
    console.log("You are almost old enough to enter this website")
}
else if(old <= 0){
    console.log("Please enter a real valid age !!!");
}
else if (old <=100){
    console.log("You are too old to enter this website !!!")
}
else {
    console.log("You are not old enough to enter this website !!!")
}








}


