// Assignment Code

// setup arrays with acceptable characters

var specialCharacters = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "/",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  ",",
  "}",
  "~",
];

var lwrCaseLetters = [
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

var uprCaseLetters = [
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

var num = ['0','1','2','3','4','5','6','7','8','9'];

const getPasswordOptions = () => {

 const length = parseInt(
    prompt("How many characters do you need in your password: 8-128?"),
    10
  );
    if (Number.isNaN(length)) {
      alert("This response requires a number.");
      return null;
  }

    if (length < 8) {
    alert("Password must be at least 8 characters.");
    return null;
  }

  if (length > 128) {
    alert("Password must be less than 128 characters.");
    return null;
  }
  
  var hasNum = confirm(
      "Click Ok to include numbers."
      );
 
  var hasLwrCaseLetters = confirm(
      "Click ok to include lower case letters."
      );
  var hasUprCaseLetters = confirm(
      "Click to include UPPER CASE letters."
      );

  var hasSpecialCharacters = confirm(
    "Click to include Special Characters."
      );

  if (
    hasNum === false &&
    hasLwrCaseLetters === false &&
    hasUprCaseLetters === false &&
    hasSpecialCharacters === false
  ) 
    
    {alert("You must pick at least one character type");
    return null; }
    // you must have at least one variable, see quinton's lecture yesterday's
  

  // Object to store data

  var passwordOptions = {
    length: length,
    hasNum: hasNum,
    hasLwrCaseLetters: hasLwrCaseLetters,
    hasUprCaseLetters: hasUprCaseLetters,
    hasSpecialCharacters: hasSpecialCharacters,
  };

  return passwordOptions;
}

const getRandom = (arr) => {
  const randIndex = Math.floor(Math.random() * arr.length);
  const randElement = arr[randIndex];

  return randElement;
};



function generatePassword() {
  
  console.log("generate password function");
  
  var options = getPasswordOptions();
  var result = [];
  var typesofCharacters = []; 
  var musthaveCharacters = [];

if (!options) return null;

//add in the specail characters
if (options.hasSpecialCharacters) {
    typesofCharacters = typesofCharacters.concat(specialCharacters);
    musthaveCharacters.push(getRandom(specialCharacters));
  }
  // add numbers to the password
if (options.hasNum) {
    typesofCharacters = typesofCharacters.concat(num);
    musthaveCharacters.push(getRandom(num));
  }
//add in the specail characters
if (options.hasSpecialCharacters) {
    typesofCharacters = typesofCharacters.concat(specialCharacters);
    musthaveCharacters.push(getRandom(specialCharacters));
  }
//add in the specail characters
if (options.hasSpecialCharacters) {
    typesofCharacters = typesofCharacters.concat(specialCharacters);
    musthaveCharacters.push(getRandom(specialCharacters));
  }
//add in the specail characters
if (options.hasSpecialCharacters) {
    typesofCharacters = typesofCharacters.concat(specialCharacters);
    musthaveCharacters.push(getRandom(specialCharacters));
  }
//add in the specail characters
if (options.hasSpecialCharacters) {
    typesofCharacters = typesofCharacters.concat(specialCharacters);
    musthaveCharacters.push(getRandom(specialCharacters));
  }
//add in the specail characters
if (options.hasSpecialCharacters) {
    typesofCharacters = typesofCharacters.concat(specialCharacters);
    musthaveCharacters.push(getRandom(specialCharacters));
  }
//add in the specail characters
if (options.hasSpecialCharacters) {
    typesofCharacters = typesofCharacters.concat(specialCharacters);
    musthaveCharacters.push(getRandom(specialCharacters));
  }
//add on lower case characters
if (options.hasLwrCaseLetters) {
    typesofCharacters = typesofCharacters.concat(lwrCaseLetters);
    musthaveCharacters.push(getRandom(lwrCaseLetters));
  }
//add upper case characters
if (options.hasUprCaseLetters) {
    typesofCharacters = typesofCharacters.concat(uprCaseLetters);
    musthaveCharacters.push(getRandom(uprCaseLetters));
  }

for (var i = 0; i < options.length; i++) {
  var typesofCharacter =getRandom(typesofCharacters);
  result.push(typesofCharacter)
}

for (var i =0; i < musthaveCharacters.length; i++) {
  result[i] = musthaveCharacters[i];
}

return result.join('');
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  console.log("Inside writePassword function");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);