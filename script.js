// Assignment code here
var lowerValue = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperValue = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numericValue = ["1","2","3","4","5","6","7","8","9","0"]
var specialValue = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var password = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = ""
  let lowerClicked = window.confirm("Would you like your password to contain lowercase characters?")
  console.log(lowerClicked);
  if(lowerClicked === true){
    password += lowerValue[0];
  }
  let upperClicked = window.confirm("Would you like your password to contain uppercase characters?")
  console.log(upperClicked);
  if(upperClicked === true){
    password += upperValue[0];
  }
  let numberClicked = window.confirm("Would you like your password to contain numeric characters?")
  console.log(numberClicked);
  if(numberClicked === true){
    password += numericValue[0];
  }
  let specialClicked = window.confirm("Would you like your password to contain special characters?")
  console.log(specialClicked);
  if(specialClicked === true){
    password += specialValue[0];
  }
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
