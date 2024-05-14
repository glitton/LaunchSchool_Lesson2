const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("Welcome to Calculator!");

while (true) {
  prompt("What's the first number? ");
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(`Sorry you entered an invalid first number. Try again.`);
    number1 = readline.question();
  }

  prompt("What's the second number? ");
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(`Sorry you entered an invalid first number. Try again.`);
    number2 = readline.question();
  }

  prompt(`You entered these numbers: ${number1} and ${number2}`);

  prompt(
    "What operation would you like to perform? 1) Add 2) Subtract 3) Multiply 4) Divide"
  );
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("You must choose 1, 2, 3 or 4");
    operation = readline.question();
  }

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

  prompt(
    `The result of ${math} the numbers ${number1} and ${number2} is ${output} `
  );

  prompt(
    `Do you want to do another calculation? Type 'y' for yes or 'n' for no.`
  );

  let answer = readline.question();

  if (answer !== "y") break;
}

//Launch School version
// const readline = require("readline-sync");

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// function invalidNumber(number) {
//   return number.trimStart() === "" || Number.isNaN(Number(number));
// }

// prompt("Welcome to Calculator!");

// while (true) {
//   // ask for two numbers
//   // ask for operation
//   // perform operation and display results

//   prompt("Would you like to perform another operation? (y/n)");
//   let answer = readline.question();

//   if (answer[0].toLowerCase() !== 'y') break;
// }
