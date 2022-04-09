// Calling out the value for special characters//
const specialChars =[
  '!','@','#','$','%','^','&','*','(',')'
];
//Calling out the value for numbers//
const numChars = ['0','1','2','3','4','5','6','7','8','9'
];
//Calling out the value for lowercase letters//
const lowChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
//Calling out the value for uppercase letters//
const upChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = genPass();
  let passwordText = document.querySelector("#password");

  if (password === undefined) {
    return
  }

  passwordText.value = password;

}

//Create array for all possible character combinations//

function genPass() {
  let selectedOptions = getUserSelection()
  
  if (selectedOptions === undefined) {
    return
  }  

let { length, lowercase, uppercase, SpecialChars, numbers } = selectedOptions
let possibleChars = [];
let genPass = "";

if (SpecialChars) {
  possibleChars = possibleChars.concat(specialChars)
}

if (numbers) {
  possibleChars = possibleChars.concat(numChars)
}

if (lowercase) {
  possibleChars = possibleChars.concat(lowChars)
}

if (uppercase) {
  possibleChars = possibleChars.concat(upChars)
}

for (i = 0; i < length + 1; i++) {
  let randomCharIndex = Math.floor(Math.random() * possibleChars.length)
  genPass += possibleChars[randomCharIndex]
}
return genPass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
