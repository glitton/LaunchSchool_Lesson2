const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcome to Calculator!");
// Ask the user for the first number.
prompt("What's the first number? ");
let number1 = readline.question();

// Ask the user for the second number.
prompt("What's the second number? ");
let number2 = readline.question();
prompt(`You entered these numbers: ${number1} and ${number2}`);

// Ask the user for an operation to perform.
prompt(
  "What operation would you like to perform?\n 1) Add 2) Subtract 3) Multiply 4) Divide"
);
let operation = readline.question();
// Perform the operation on the two numbers.
let output;
let math;
switch (operation) {
  case "1":
    math = "adding";
    output = Number(number1) + Number(number2);
    break;
  case "2":
    math = "subtracting";
    output = Number(number1) - Number(number2);
    break;
  case "3":
    math = "multiplying";
    output = Number(number1) * Number(number2);
    break;
  case "4":
    math = "dividing";
    output = Number(number1) / Number(number2);
    break;
}

// if (operation === "1") {
//   math = "adding";
//   output = Number(number1) + Number(number2);
// } else if (operation === "2") {
//   math = "subtracting";
//   output = Number(number1) - Number(number2);
// } else if (operation === "3") {
//   math = "multiplying";
//   output = Number(number1) * Number(number2);
// } else {
//   math = "dividing";
//   output = Number(number1) / Number(number2);
// }
// Print the result to the terminal.
prompt(
  `The result of ${math} the numbers ${number1} and ${number2} is ${output} `
);
