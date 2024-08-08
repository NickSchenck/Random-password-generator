//values which can be allowed or denied ability to generate in generator
const lowerValues = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
const upperValues = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`]  //All character arrays
const numericValues = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`0`]
const specialValues = [`!`,`#`,`$`,`%`,`&`,`'`,`"`,`(`,`)`,`*`,`+`,`,`,`-`,`.`,`/`,`:`,`;`,`<`,`=`,`>`,`?`,`@`,`[`,`]`,`^`,`_`, '`',`{`,`|`,`}`,`~`]

//instantiated values to act as containers. password will hold the randomized password, allValues will hold
//the selected arrays above
let password = ``;
let allValues = []; 

//helper function, randomizes a number within a range. Within this app we randomize min = 6 and max = 16
function randomNumber(min, max) {
  let value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

//getValues determines which value-arrays are added to the allValues container by evaluating if the user
//selected `OK`(evals to true) or `Cancel`(evals to false), upon clicking the `Generate Password` button.
//finally, getValues calls the randomizePassword function.
function getValues(){

  let selectLower = window.confirm(`Would you like your password to contain lowercase characters?`);
  if(selectLower === true){
    allValues = allValues.concat(lowerValues);
  };

  let selectUpper = window.confirm(`Would you like your password to contain uppercase characters?`);
  if(selectUpper === true){
    allValues = allValues.concat(upperValues);
  };

  let selectNumeric = window.confirm(`Would you like your password to contain numeric characters?`);
  if(selectNumeric === true){
    allValues = allValues.concat(numericValues);
  };

  let selectSpecial = window.confirm(`Would you like your password to contain special characters?`);
  if(selectSpecial === true){
    allValues = allValues.concat(specialValues);
  };

  randomizePassword();
};

//randomizePassword generates the randomized password with a for loop, checking if the variable i is less-than
//the random number generated by the randomNumber helper function. Within the for loop, it enters an if statement
//which checks that the user has selected at least one type of character to populate their randomized password.
//as long as randomAll does not equal undefined, it will add the character selected by randomAll to the password
//variable within the else statement. Last, randomizePassword calls the writePassword function.
function randomizePassword(){

  for (let i = 0; i < randomNumber(6, 16); i++) {
        let randomAll = allValues[~~(Math.random() * allValues.length)];

        if(randomAll === undefined){
          window.alert(`Please select at least one character-type to include in your password.`);
          break;
        }else{
          password += randomAll;
        };
      };

  writePassword();
};

//writePassword allows the value contained within the password variable to be written to the page by selecting
//the element with and Id of #password, and manipulating its .value property
function writePassword(){
  let passwordText = document.querySelector(`#password`);

  passwordText.value = password;
};

//clearPassword ensures that the user can remove the previously generated password and then generate a new
//password, without having the previous generation affect subsequent generations. It selects the element with an
//Id of #password and manipulates the value to an empty string. This function also clears the string-value saved
//in the password variable AND resets the allValues variable back to a empty array to prevent not-selected
//character arrays from being included in subsequent generations.
function clearPassword(){
  let passwordText = document.querySelector(`#password`);

  allValues = [];
  password = ``;
  passwordText.value = ``;
};

//generateBtn variable for selecting an element with an Id of #generate, and an event listener using the
//generateBtn variable to activate upon a `click` event.
let generateBtn = document.querySelector(`#generate`);
generateBtn.addEventListener(`click`, getValues);

//clearBtn variable for selecting an element with an Id of #clear, and an event listener using the clearBtn
//variable to activate upon a `click` event.
let clearBtn = document.querySelector(`#clear`);
clearBtn.addEventListener(`click`, clearPassword);
