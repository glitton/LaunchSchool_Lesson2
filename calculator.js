const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

// function chooseLanguage(language) {
//   if (language === "s") {
//     language = "es";
//   } else {
//     language = "en";
//   }
//   return language;
// }

prompt(MESSAGES["en"]["welcome"]);
let language = readline.question();
console.log("lang", language);
// chooseLanguage(language);

//To do: prompt user if they want english or spanish
//create a language

while (true) {
  prompt(MESSAGES["firstNumber"]);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(MESSAGES["invalidNumber"]);
    number1 = readline.question();
  }

  prompt(MESSAGES["secondNumber"]);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(MESSAGES["invalidNumber"]);
    number2 = readline.question();
  }

  prompt(`{MESSAGES['confirmation']} ${number1} and ${number2}`);

  prompt(MESSAGES["operation"]);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(MESSAGES["choice"]);
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

  prompt(MESSAGES["anotherCalculation"]);

  let answer = readline.question();

  if (answer !== "y") break;
}
