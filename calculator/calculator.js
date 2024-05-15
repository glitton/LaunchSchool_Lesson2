const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

//TODO: Add check for invalid language input
let language = "en";
function chooseLanguage() {
  prompt(MESSAGES[language]["chooseLanguage"]);
  let languageChosen = readline.question();

  if (languageChosen === "s") {
    language = "es";
  }
  return language;
}

prompt(MESSAGES[language]["welcome"]);
chooseLanguage();

while (true) {
  prompt(MESSAGES[language]["firstNumber"]);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(MESSAGES[language]["invalidNumber"]);
    number1 = readline.question();
  }

  prompt(MESSAGES[language]["secondNumber"]);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(MESSAGES[language]["invalidNumber"]);
    number2 = readline.question();
  }

  prompt(`${MESSAGES[language]["confirmation"]} ${number1} and ${number2}`);

  prompt(MESSAGES[language]["operation"]);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(MESSAGES[language]["choice"]);
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

  prompt(MESSAGES[language]["anotherCalculation"]);

  let answer = readline.question();
  console.clear();

  if (answer !== "y") break;
}
