const toSignUp = document.getElementById("toSignUp");
const toLogin = document.getElementById("toLogin");
const loginForm = document.querySelector(".login-container");
const signupForm = document.querySelector(".signup-container");

toSignUp.addEventListener("click", () => {
  // Reset classes
  loginForm.classList.remove("show-login", "hide-login");
  signupForm.classList.remove("show-signup", "hide-signup");

  // Apply proper classes
  loginForm.classList.add("hide-login");
  signupForm.classList.add("show-signup");
});

toLogin.addEventListener("click", () => {
  // Reset classes
  loginForm.classList.remove("show-login", "hide-login");
  signupForm.classList.remove("show-signup", "hide-signup");

  // Apply proper classes
  signupForm.classList.add("hide-signup");
  loginForm.classList.add("show-login");
});

