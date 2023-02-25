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

var zerotonine = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPwdLength() {
  var length = parseInt(
    prompt("How many characters do you need in your password: 8-128?")
  );

  if (length >= 8 && length <= 128) {
    // other critriea
  } else {
    alert("Password lenght must be 8 - 128 characters");
    getPwdLength();
  }
}

function getPasswordOptions() {
  // get the pwd len
  getPwdLength();

  var hasNumbers = window.confirm("Click Ok to include numbers.");
  var haslwrCaseLetters = window.alert(
    "Click ok to include lower case letters."
  );
  var hasuprCaseLetters = window.alert("Click to include UPPER CASE letters.");
  var hasspecialCharacters = window.alert(
    "Click to include Special Characters."
  );

  if (
    hasZerotonine === false &&
    haslwrCaseLetters === false &&
    hasuprCaseLetters === false &&
    hasspecialCharacters === false
  ) 
     else {
    alert("You have to pick something.");
    getPwdLength();
  }
  /*  alert("You must pick at least one character type");
    return null; */
    // you must have at least one variable, see quinton's lecture yesterday's
  }

  // Object to store data

  var pswdOptions = {
    Length: length,
    hasZerotonine: hasZerotonine,
    haslwrCaseLetters: haslwrCaseLetters,
    hasuprCaseLetters: hasuprCaseLetters,
    hasspecialCharacters: hasspecialCharacters,
  };
  return PasswordOptions;
}

function getRandom(array) {
  var randIndex = math.floor(Math.random() * array.length);
  var randElement = arr[randIndex];
  
  return randElement;

}


function generatePassword() {
  
  console.log("generate password function");
  
  var options = getPasswordOptions();

  var result = [];

  var typesofCharacters = []; 

  var musthaveCharacters = [];

  if (options.hasZerotonine) {
    typesofCharacters = typesofCharacters.concat(zerotonine);
    musthaveCharacters
  }



for (var i = 0; i < options.length; i++) {
  var typesofCharacters =getRandom(typesofCharacters);
  result.push(typesofCharacters)
}


}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  console.log("Inside writePassword function");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  /*for (var i = 0; i < zooAnimals.length; i++) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}
*/
  // for (var i = 0; i < )

  // Write password to the #password input
}

generateBtn.addEventListener("click", writePassword);

// take user's criteria, select random characters, concatenate selecetion, and scramble.
// print results to the screen/console

/* used
alert("You must choose at least one variable.");
alert("Do you want special characters? !@#$%^&*()");
alert("Do you want UPPER CASE letters?");
alert("Do you want numbers?");
*/

// you must have at least one variable, see quinton's lecture yesterday's

/*
flow questions:
Do you want numbers?
Do you want lowercase letters?
do you want uppercase letters?
do you want special symbols?


// "Do you want special characters? !@#$%^&*()"
// "Do you want UPPER CASE letters?"
// "Do you want lower case letters?"
// "Do you want numbers?"

// list of special characters in between quotes below.  
// Special " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// upper case"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// lower case"abcdefghijklmnopqrstuvwxyz"
// numeric "1234567890"
// treat each of these as strings
// 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
  */
/* from: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript?page=2&tab=scoredesc#tab-top


function randomString() {
 var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
 var string_length = 8;
 var randomstring = '';
 for (var i=0; i<string_length; i++) {
  var rnum = Math.floor(Math.random() * chars.length);
  randomstring += chars.substring(rnum,rnum+1);
 }
 document.randform.randomfield.value = randomstring;
}
*/