// password checker
// You are writing the user registration page for a secure web site.
// On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:
//
// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"


function checkCred(){
  var passWord = prompt("Enter Password")
  var userName = prompt("Enter User ID")
  if (checkUser(userName) && checkPassword(passWord) && userName != passWord){
    alert("Credentials valid");
  }
  else {
    alert("Invalid credentials");
  }
}

function checkUser(user){
  return user.length >= 6 && !(user.includes("!") || user.includes("#") || user.includes("$"));
}

function checkPassword(pass){
  return pass.length >= 6 && (pass.includes("!") || pass.includes("#") || user.includes("$")) && pass != "password";
}

// Object Oriented Password Checker
// Take your Password Checker and write in code that will notify the user when they have entered a non-valid user name and password.
// Tasks:
//
// For each criteria create a function that checks the string for the password or username and returns one of two objects.
//
// Either { valid: true } or { valid: false, reason: "User ID cannot contain $"} with the reason for the rule failing.
// Then create a main function that runs all functions and prints out all failures for all criteria one at a time.

function getCred(){
  var user = prompt("Enter User Id")
  while (!checkUser(user).valid){
    user = prompt(checkUser(user).reason + "Enter User Id: ")
  }
  var password = prompt("Enter Password")
  while (!checkPassword(password).valid){
    password = prompt(checkPassword(password).reason + "Enter Password: ")
  }
  alert("Enter the matrix.");
}
  // var user = prompt("Enter User Id")
  // var password = prompt("Enter Password")
  // var a = checkUser(user)
  // var b = checkPassword(password)
  // console.log("User: " + a.valid);
  // console.log("Password: " + b.valid);

function checkPassword(pass){
  var errors = "";
  var valid = true;
  if (pass.length < 6){
    errors = errors + "The password is too short.\n"
    valid = false;
  }
  if (!(pass.includes("!") || pass.includes("#") || pass.includes("$"))){
    errors = errors + "Password must contain '!', '$', or '#'.\n";
    valid = false;
  }
  if (pass === "password"){
    errors = errors + "Password cannot be 'password'.\n";
    valid = false;
  }
  if (valid){
    return {
      valid: true
    };
  }
  else {
    return {
      valid: false,
      reason: errors
    }
  }
}


function checkUser(user){
  var errors =""
  var valid = true
  if (user.length <6){
    errors = errors + "The user is too short.\n"
    valid = false
  }
  if (user.includes("!")){
    errors = errors + "Can't include '!'.\n"
    valid = false
  }
  if (user.includes("#")){
    errors = errors + "Can't include '#'.\n"
    valid = false
  }
  if (user.includes("$")){
    errors = errors + "Can't include '$'.\n"
    valid = false
  }
  if (valid){
    return {
      valid: true
    }
  }
  else {
    return {
      valid: false,
      reason: errors
    }
  }
}
