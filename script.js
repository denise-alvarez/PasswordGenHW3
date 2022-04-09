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

for (i = 0; i < length; i++) {
  let randomCharIndex = Math.floor(Math.random() * possibleChars.length)
  genPass += possibleChars[randomCharIndex]
}
return genPass
}

//User selections & prompts for password gen//

function getUserSelection() {
  let numChars = parseInt(prompt("How many characters would you like your password to be? Please only select between 8 to 128 characters."))

  if (Number.isNaN(numChars)) {
    alert("Oh no!! That is not a number. Please select a number and try again.")
    return
  }
  if (numChars < 8) {
    alert("Oops!! Looks like you dont have enough characters. Please select at least 8 and try again.")
    return
  }
  else if (numChars > 128) {
    alert("Oh no!! That's way to many characters. Please select 128 or less characters and try again.")
    return
  }

  let useSpecialChars = confirm("Would you like special characters in your password?")
  let useNumChars = confirm("Would you like numbers in your password?")
  let useLowChars = confirm("Would you like lowercase letters in your password?")
  let useUpChars = confirm("Would you like uppercase letters in your password?")
  
  if (!useSpecialChars && !useNumChars && !useLowChars && !useUpChars) {
    alert("Oops!! That is not enough selections. Please select at least one and try again.")
    return
  }
  
  let optionObj = {
    length: numChars,
    specialCharacters: useSpecialChars,
    numbers: useNumChars,
    lowercase: useLowChars,
    uppercase: useUpChars
  }
  return optionObj
}  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
