// Logical Operators are used to combine or manipulate boolean values (true or false)
// AND = && ..... if one of these is false we dont execute the code
// OR = || ..... if one of these is true we execute the code
// NOT = ! ..... reverse the boolean value

const temp = 20;

if (temp <= 0 || temp >= 30) {
  console.log("The Weather is good");
} else {
  console.log("The weather is bad");
}

const isSunny = true;

if (!isSunny) {
  console.log("It is Sunny");
} else {
  console.log("It is Cloudy");
}
