// Assignment code here
var lowerValues = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperValues = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]  //All character arrays
var numericValues = ["1","2","3","4","5","6","7","8","9","0"]
var specialValues = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var defaultLength = Math.floor(Math.random() * 16) + 6; //randomized password length


var password = ""
var allValues = lowerValues.concat(upperValues).concat(numericValues).concat(specialValues); //combines arrays to make selection more random


var randomLower = lowerValues[~~(Math.random() * lowerValues.length)];
var randomUpper = upperValues[~~(Math.random() * upperValues.length)];
var randomNumeric = numericValues[~~(Math.random() * numericValues.length)]; //Math for a random value within arrays
var randomSpecial = specialValues[~~(Math.random() * specialValues.length)];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = ""
  let lowerClicked = window.confirm("Would you like your password to contain lowercase characters?")
  console.log("randomLower=" + randomLower);
  if(lowerClicked === true){
    password += randomLower;
  }
  let upperClicked = window.confirm("Would you like your password to contains uppercase characters?")
  console.log("randomUpper=" + randomUpper);
  if(upperClicked === true){                                                                                  //lines 25-44 contain each prompt
    password += randomUpper;
  }
  let numberClicked = window.confirm("Would you like your password to contain numeric characters?")
  console.log("randomNumber=" + randomNumeric);
  if(numberClicked === true){
    password += randomNumeric;
  }
  let specialClicked = window.confirm("Would you like your password to contain special characters?")
  console.log("randomSpecial=" + randomSpecial);
  if(specialClicked === true){
    password += randomSpecial;
  }
  var difference = defaultLength - password.length;
  
  
  for (var i = 0; i < difference; i++) {
    var randomAll = allValues[~~(Math.random() * allValues.length)];
    console.log(" allValues.length=" +  allValues.length);
    console.log("randomAll=" + randomAll);
    password += randomAll;
  }
  if(password === "" || password === null){
    window.alert("You must select at least one character type!"); //Requires user select at least one prompt to select characters from
    return writePassword();
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

