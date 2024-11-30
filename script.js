// DOM Elements
uppercaseCheckbox = document.getElementById("Uppercase")
lowercaseCheckbox = document.getElementById("Lowercase")
numberCheckbox = document.getElementById("Numbers")
symbolCheckbox = document.getElementById("Symbols")
passwordLength = document.getElementById("Password-Length")
passwordOutput = document.getElementById("Password-Output")
copyAlert = document.getElementById("Copy-Alert")

// Variables
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

function GeneratePassword(){
  passwordOutput.style.color = "black";
  length = parseInt(passwordLength.value)
  wordSelection = ""
  password = ""

  if (!uppercaseCheckbox.checked && !lowercaseCheckbox.checked && 
  !numberCheckbox.checked && !symbolCheckbox.checked){
    passwordOutput.value = "Pick Atleast One Option"
    passwordOutput.style.color = "red"
    return
  }
  if (length <= 0 || isNaN(length) || length > 1000){
    passwordOutput.value = "Invalid Password Length"
    passwordOutput.style.color = "red"
    return
  }
  if (uppercaseCheckbox.checked) wordSelection += uppercase;
  if (lowercaseCheckbox.checked) wordSelection += lowercase;
  if (numberCheckbox.checked) wordSelection += numbers;
  if (symbolCheckbox.checked) wordSelection += symbols;

  for (i = 0; i < length; i++){
    password += wordSelection[Math.floor(Math.random() * wordSelection.length)]
  }

  passwordOutput.value = password
}

function copy() {
  let newPasswordOutput = document.getElementById("Password-Output");
  navigator.clipboard.writeText(newPasswordOutput.value);
  copyAlert.style.display = "block";
  setTimeout(() => {
    copyAlert.style.display = "none";
  }, 1500)
}
