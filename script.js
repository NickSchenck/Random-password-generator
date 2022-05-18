// Assignment code here
var lowerValues = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperValues = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numericValues = ["1","2","3","4","5","6","7","8","9","0"]
var specialValues = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var password = ""
var randomLower = lowerValues[~~(Math.random() * lowerValues.length)];
var randomUpper = upperValues[~~(Math.random() * upperValues.length)];
var randomNumeric = numericValues[~~(Math.random() * numericValues.length)];
var randomSpecial = specialValues[~~(Math.random() * specialValues.length)];
  console.log(randomLower);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = ""
  let lowerClicked = window.confirm("Would you like your password to contain lowercase characters?")
  console.log("randomLower=" + randomLower);
  if(lowerClicked === true){
    //var range = new Range(0, 25);
    password += randomLower;
  }
  let upperClicked = window.confirm("Would you like your password to contain uppercase characters?")
  console.log("randomUpper=" + randomUpper);
  if(upperClicked === true){
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
  if(password === "" || password === null){
    window.alert("You must select at least one character type!");
    return writePassword();
  }
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

