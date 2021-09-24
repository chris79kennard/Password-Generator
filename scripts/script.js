// Create arrays of characters ie. NumberChars, UpperChars, LowerChars ect.
var newRandomChar = "";
var newPassword = "";
var passwordChars = [];
var numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var Length = document.querySelector("#Length").value;
  console.log(Length);

  var Uppercase = document.querySelector("#Uppercase").checked;
  console.log(Uppercase);

  var Lowercase = document.querySelector("#Lowercase").checked;
  console.log(Lowercase);

  var Numbers = document.querySelector("#Numbers").checked;
  console.log(Numbers);

  var Special = document.querySelector("#Special").checked;
  console.log(Special);
  if (Uppercase) {
    passwordChars = passwordChars.concat(upperChars);
  }
  console.log(passwordChars);

  if (Lowercase) {
    passwordChars = passwordChars.concat(lowerChars);
  }
  console.log(passwordChars);

  if (Numbers) {
    passwordChars = passwordChars.concat(numberChars);
  }
  console.log(passwordChars);

  if (Special) {
    passwordChars = passwordChars.concat(specialChars);
  }
  console.log(passwordChars);

  for (i = 0; i < Length; i++) {
    var index = Math.floor(Math.random() * passwordChars.length);
    newRandomChar = passwordChars[index];
    newPassword = newPassword.concat(newRandomChar);
  }
  return newPassword;
}

// Write password to the #password input
// start adding if statements to see if it has an effect on the the display text
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
