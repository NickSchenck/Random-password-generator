//Generator currently doesn't prevent unwanted characters from generating in the password
const lowerValues = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperValues = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]  //All character arrays
const numericValues = ["1","2","3","4","5","6","7","8","9","0"]
const specialValues = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
const defaultLength = Math.floor(Math.random() * 16) + 6; //randomized password length


let password = ""
//potentially move these concat values into the if statements?
let allValues = []; /*lowerValues.concat(upperValues).concat(numericValues).concat(specialValues);*/ //combines arrays to make selection more random

//these variables are generating a number within the [], for the array of characters they belong to
//potential future issue; Math.random is upper-bound EXclusive, so it may never roll the final character in a given array as is
//Also not sure these lower 4 variables will be necessary, with how I'm setting-up getValues
let randomLower = lowerValues[~~(Math.random() * lowerValues.length)];
let randomUpper = upperValues[~~(Math.random() * upperValues.length)];
let randomNumeric = numericValues[~~(Math.random() * numericValues.length)]; //Math for a random value within arrays
let randomSpecial = specialValues[~~(Math.random() * specialValues.length)];



// Get references to the #generate element
// let generateBtn = document.querySelector("#generate");

function getValues(){
  let selectLower = window.confirm("Would you like your password to contain lowercase characters?");
  if(selectLower === true){
    allValues = allValues.concat(lowerValues);
    console.log(allValues);
  };

  let selectUpper = window.confirm("Would you like your password to contain uppercase characters?");
  if(selectUpper === true){
    allValues = allValues.concat(upperValues);
    console.log(allValues);
  };

  let selectNumeric = window.confirm("Would you like your password to contain numeric characters?");
  if(selectNumeric === true){
    allValues = allValues.concat(numericValues);
    console.log(allValues);
  };

  let selectSpecial = window.confirm("Would you like your password to contain special characters?");
  if(selectSpecial === true){
    allValues = allValues.concat(specialValues);
    console.log(allValues);
  };
  
};
console.log(allValues);
// Write password to the #password input
// function writePassword() {
//   let selectLower = window.confirm("Would you like your password to contain lowercase characters?")
//   console.log("randomLower=" + randomLower);
//   if(selectLower === true){
    
//     allValues = allValues.concat(lowerValues);
//   }
//   let upperClicked = window.confirm("Would you like your password to contains uppercase characters?")
//   console.log("randomUpper=" + randomUpper);
//   if(upperClicked === true){    
                                                                                
//     password += randomUpper;
//   }
//   let numberClicked = window.confirm("Would you like your password to contain numeric characters?")
//   console.log("randomNumber=" + randomNumeric);
//   if(numberClicked === true){
    
//     password += randomNumeric;
//   }
//   let specialClicked = window.confirm("Would you like your password to contain special characters?")
//   console.log("randomSpecial=" + randomSpecial);
//   if(specialClicked === true){
    
//     password += randomSpecial;
//   }
//   let difference = defaultLength - password.length;
  
  
//   for (let i = 0; i < difference; i++) {
//     let randomAll = allValues[~~(Math.random() * allValues.length)];
//     console.log(" allValues.length=" +  allValues.length);
//     console.log(allValues);
//     console.log("randomAll=" + randomAll);
//     password += randomAll;
//   }
//   if(password === "" || password === null){
//     window.alert("You must select at least one character type!"); //Requires user select at least one prompt to select characters from
//     return writePassword();
//   }
  
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;
  
  
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

getValues();