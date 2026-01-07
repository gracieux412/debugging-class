//toggle

const toggleBtn = document.getElementById("toggle");

//testing theme change
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

//dashboard
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector("#close_btn");

const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2").classList.toggle("active");
});

//getting the different ids and classes from login.html

const form = document.querySelector(".login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

//get error

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

//using the form to get eventListener to login fields

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Assume form is valid
  let valid = true;

  // for email checking
  if (email.value === "") {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  // for password checking
  if (password.value === "") {
    passwordError.style.display = "block";
    valid = false;
  } else {
    passwordError.style.display = "none";
  }

  // if both fields are valid
  if (valid) {
    alert("Login successful!");
    form.reset();
  }
});
