const toSignUp = document.getElementById("toSignUp");
const toLogin = document.getElementById("toLogin");
const loginForm = document.querySelector(".login-container");
const signupForm = document.querySelector(".signup-container");

// Detect screen size
function getScreenType() {
  if (window.innerWidth <= 480) return "mobile";
  if (window.innerWidth <= 768) return "tablet";
  return "desktop";
}

// Toggle to Sign Up
toSignUp.addEventListener("click", () => {
  loginForm.classList.remove("show-login", "hide-login");
  signupForm.classList.remove("show-signup", "hide-signup");

  const screen = getScreenType();

  if (screen === "mobile") {
    loginForm.classList.add("hide-login");
    signupForm.classList.add("show-signup");
  } else if (screen === "tablet") {
    loginForm.classList.add("hide-login");
    signupForm.classList.add("show-signup");
  } else {
    // desktop
    loginForm.classList.add("hide-login");
    signupForm.classList.add("show-signup");
  }
});

// Toggle to Login
toLogin.addEventListener("click", () => {
  loginForm.classList.remove("show-login", "hide-login");
  signupForm.classList.remove("show-signup", "hide-signup");

  const screen = getScreenType();

  if (screen === "mobile") {
    signupForm.classList.add("hide-signup");
    loginForm.classList.add("show-login");
  } else if (screen === "tablet") {
    signupForm.classList.add("hide-signup");
    loginForm.classList.add("show-login");
  } else {
    // desktop
    signupForm.classList.add("hide-signup");
    loginForm.classList.add("show-login");
  }
});

// Optional: adjust on window resize
window.addEventListener("resize", () => {
  const screen = getScreenType();
  if (screen === "mobile") {
    loginForm.style.transform = "rotateY(0deg) scale(1)";
    signupForm.style.transform = "rotateY(0deg) scale(0.95)";
  } else {
    loginForm.style.transform = "";
    signupForm.style.transform = "";
  }
});
