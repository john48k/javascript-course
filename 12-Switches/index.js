// switch can be efficient replacement for if-else statements
// switch statement is used to perform different actions based on different conditions
// switch statement starts with a switch keyword followed by a parentheses
// inside the parentheses, there is an expression that will be evaluated
// the expression is then compared to the case values
// if there is a match, the code block will be executed
// if there is no match, the default block will be executed
// break keyword is used to exit the switch statement

// lets say you have a lot of if else statements you can shorten that up by using switch statement

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
    break;
}

// default means theres no matches
// the break statement is used to exit the switch statement
// if you don't use break statement, the code will continue to run until it finds a break statement

let testScore = 91;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;

  default:
    letterGrade = "F";
    break;
}

console.log(letterGrade);
