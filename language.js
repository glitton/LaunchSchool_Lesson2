const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

//Add function to choose language, insert into prompt
let language = "en";
function chooseLanguage() {
  prompt(MESSAGES[language]["chooseLanguage"]);
  let languageChosen = readline.question();
  if (languageChosen === "s") {
    language = "es";
  }
  return language;
}

chooseLanguage();
prompt(MESSAGES[language]["firstNumber"]);
let number1 = readline.question();

// if (language === "s") {
//   language = "es";
// } else {
//   language = "en";
// }

// return language;
