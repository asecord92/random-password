// Assignment Code
var generateBtn = document.querySelector("#generate");
var result =[]
var lC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var uC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] 

var num = ['1', '2', '3', '4','5', '6', '7', '8', '9']

var sym = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','.','<','>','/','|',];
newPass = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  passLengthCheck();
  return newPass;
  
}

//include lowerCase 
var lowerCaseCheck =function() {
  var lowerCase = confirm("Does your password need Lower Case characters? Select 'OK' for Yes or 'CANCEL' for No.");

  if(lowerCase) {
    result = result.concat(lC);
    upperCaseCheck();
  };
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
