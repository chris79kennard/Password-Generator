// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
