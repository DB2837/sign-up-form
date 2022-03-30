const pswErrorMessage = document.querySelector(".psw-error-msg");

function validatePassword() {
  if (password.value != confirmPassword.value) {
    pswErrorMessage.textContent = "*Passwords do not match";
    confirmPassword.setCustomValidity("*Passwords Don't Match");
  } else {
    pswErrorMessage.textContent = "";
    confirmPassword.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
