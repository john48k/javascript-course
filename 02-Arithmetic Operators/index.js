// Arithmetic operators are values and variables that perform arithmetic operations on two or more values. 
//
// The arithmetic operators are: (+, -, *, /, %, **, ++, --)
// example: 11 = x + 5;


// here is an example of addition 

// over here ive declared how many students are in the class
let students = 30;

//here ive added 5 more students to the class
students = students + 5;


/* as you can see here in the console.log we are using the arithmetic operator (+) to add the number of students 
in the class to display the total number of students in the class */
console.log(`There are ${students} students in the class`);



// here is an example of subtraction

// over here ive declared how many laptops are in the table
let laptops = 20;

// here ive subtracted 5 laptops from the table
laptops = laptops - 5;

/* as you can see here in the console.log we are using the arithmetic operator (-) to subtract the number of laptops
in the table to display the total number of laptops in the table */
console.log(`There are ${laptops} laptops in the table`);


// over here is an example of multiplication but we will use the augmented assignment operator (*=) 
// to multiply the number of laptops in the table


// here ive declared how many apples are in the table

let apples = 20;

// here ive multioled the number of apples in the table by 5
apples *= 5;

/* as you can see here in the console.log we are using the arithmetic operator (*) 
to multiply the number of apples */
console.log(`There are ${apples} apples in the table`);

// if it was standard multiplication it would look like this
// apples = apples * 5;
// but to be honest its the same thing and its just a shortcut to make the code look cleaner and easier to read
// but its just a prefrence on how you want to write your code perosnally me i like to use the standard way of writing it

// also this is the increment and decrement operator
// the increment operator is (++) and the decrement operator is (--)
// here is an example of the increment operator

// ive declared how many fruits are in the basket
let fruits = 10;

// here ive incremented the number of fruits in the basket by 1
fruits++;

// now ive displayed it using the console.log
console.log(`There are ${fruits} fruits in the basket`);

// basically the increment operator is the same as writing it like this
// fruits = fruits + 1;
// but its just a shortcut to make the code look cleaner and easier to read


// now lets talk about operator precedence 
// operator precedence is the order in which operators are evaluated in an expression
// here is an example of operator precedence
// 1.  parentheses
// 2. exponentiation / exponents
// 3. multiplication and division and modulo
// 4. addition and subtraction

// here is an example of operator precedence
let result = 1 + 2 * 3 + 4  ** 2;

console.log(`The result is ${result}`);




