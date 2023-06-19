var generateBtn = document.querySelector("#generate");

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split('');
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = "0123456789".split('');
var specialCharacters = "!@#$%^&*()-=_+".split('');

var generatePassword = function() {
    var passwordLength = +window.prompt("Please enter the desired amount of characters for your new password. It must be between 8 and 12 characters:");

    if (typeof passwordLength !== `number` || passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid length.")
    return "";
}

var characters = [];

var addlowercaseLetters = window.confirm("Include lowercase letters?")
if (addlowercaseLetters) {
    for (var i = 0; i < lowercaseLetters.length; i++) {
        characters.push(lowercaseLetters[i]);
    }
}

var adduppercaseLetters = window.confirm("Include uppercase letters?")
if (adduppercaseLetters) {
    for (var i = 0; i < uppercaseLetters.length; i++) {
        characters.push(uppercaseLetters[i]);
    }
}

var addnumbers = window.confirm("Include numbers?")
if (addnumbers) {
    for (var i = 0; i < numbers.length; i++) {
        characters.push(numbers[i]);
    }
}

var addspeacialCharacters = window.confirm("Include special characters?")
if (addspeacialCharacters) {
    for (var i=0; i < specialCharacters.length; i++) {
        characters.push(specialCharacters[i])
    }
}

if (characters.length === 0) {
    alert("You must select at least one character type.")
    return "";
}

var newpassword = "";
for (var i = 0; i < passwordLength; i++) {
    var randomeindex = Math.floor(Math.random() * characters.length);
    newpassword += characters[randomeindex]
}

return newpassword;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);