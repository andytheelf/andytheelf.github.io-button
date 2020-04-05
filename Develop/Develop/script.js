//Password Variables
var inputCharacters = "";
var prompts = "";

//Variable Character Sets
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialSet = "@#$%^&*+<>?[]{}=~/";
  var numericValue = "0123456789";

 //Generate Password Function
function generatePassword() {
 var entry = Number(window.prompt("Please choose a password length between 8-128 characters!"));
 
 //Password if statements
     if (entry < 8 || entry > 128) {
       window.confirm("Invalid"); 
  }
     if (entry > 8 && entry < 128) {
       console.log(entry);
     
       (upper = window.confirm("Will this contain uppercase letters?"))
     if (upper == true) {
       inputCharacters += upperCase;
     }
     
     (lower = window.confirm("Will this contain lowercase letters?"))
        if (lower == true){
          inputCharacters += lowerCase;
        }
        (special = window.confirm("Will this contain special characters?"))
        if (special == true){
          inputCharacters += specialSet;
        }
       
        (numeric = window.confirm("Will this contain numbers?"))
        if (numeric == true){
          inputCharacters += numericValue;
        }
        
   
   //Create for loop for Random generation
   var prompts = []; 
   
   for (i = 0; i < entry; i++) {
     prompts.push(inputCharacters[Math.floor((Math.random() * inputCharacters.length) + 1)]);
     var product = prompts.join("");
   }
      alert(product);
   }
  
  };



// Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
