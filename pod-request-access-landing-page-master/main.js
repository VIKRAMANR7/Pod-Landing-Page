const emailInput = document.querySelector(".email");
document.querySelector(".request").addEventListener("click", function (e) {
  //prevent the normal submission of the form
  e.preventDefault();
  let regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
  if (emailInput.value.length > 0 && regex.test(emailInput.value) === false) {
    document.querySelector(".error").style.display = "block";
    emailInput.style.border = "1px solid #fb3c3c";
  } else if (emailInput.value.length === 0) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error").innerText = "Oops! Please add your email";
    emailInput.style.border = "1px solid #fb3c3c";
  } else {
    document.querySelector(".error").style.display = "none";
    emailInput.style.border = "none";
  }
});
