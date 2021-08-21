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
//Password Length Requirement

var passLengthCheck = function() {
  var passLength = prompt("How many characters must your password be? Please choose a number between 8 and 128.");

 passLength= +passLength;

  if (passLength < 8 || passLength >128 || isNaN(passLength)) {
    passLengthCheck();
  }else {
    lowerCaseCheck();
  }
  for(var i=0; i < passLength; i++) {
    var pass = Math.floor(Math.random()*result.length);
    var passVal = result[pass];
    newPass += passVal;
  }
  console.log(newPass)
};

//include lowerCase 
var lowerCaseCheck =function() {
  var lowerCase = confirm("Does your password need Lower Case characters? Select 'OK' for Yes or 'CANCEL' for No.");

  if(lowerCase) {
    result = result.concat(lC);
    upperCaseCheck();
  };
  
};

//include uppercase
var upperCaseCheck =function() {
  var upperCase = confirm("Does your password need Upper Case characters? Select 'OK' for Yes or 'CANCEL' for No.");

  if(upperCase) {
    result = result.concat(uC);
    numCheck();
  };
  
  
};
//include numbers
var numCheck =function() {
  var number = confirm("Does your password need Numbers? Select 'OK' for Yes or 'CANCEL' for No. ");

  if(number) {
    result = result.concat(num);
    specialCharChck();
  };
  
};
//include special characters

var specialCharChck =function() {
  var specialChar = confirm("Does your password need special characters? Select 'OK' for Yes or 'CANCEL' for No.");

  if(specialChar) {
    result = result.concat(sym);
  };
  
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
