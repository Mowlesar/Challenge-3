var generateBtn = document.querySelector("#generate");

var lowercassLetters = `abcdefghijklmnopqrstuvwxyz` .split
var uppercaseLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ` .split
var numbers = `0123456789` .split
var specialCharacters = `!@#$%^&*()-=_+` .split

var generatePassword = function() {
    var passwordLength = +window.prompt("Please enter the desired amount of characters for your new password. It must be between 8 and 12 characters:")

    if (passwordLength !== passwordLength || passwordLength > 8 || passwordLength < 128) {
    window.alert("Invalid length.")
    return " ";
}

var characters = [];

var addlowercaseLetters = window.confirm("Include lowercase letters?")
if (addlowercaseLetters) {
    for (var i = 0; i < lowercassLetters.length; i++) {
        characters.push(lowercassLetters[i]);
    }
}

var adduppercaseLetters = window.confirm("Include uppercase letters?")
if (adduppercaseLetters) {
    for (var i = 0; i < uppercaseLetters.length; i++) {
        characters.push(uppercaseLetters[i]);
    }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);