const form = document.querySelector("form");
const email = document.querySelector('input[name="email"]');
const errorHint = document.querySelector(".error__hint");
const all = document.querySelector(".all");
const thanksMessage = document.querySelector(".thanks__message");
const emailSpan = document.querySelector(".email__span");
const dismiss = document.querySelector(".dismiss_btn");

let isEmailValid = false;

function checkEmail() {
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    return false;
  }
  return true;
}

const validateInputs = () => {
  isEmailValid = true;

  if (!email.value) {
    email.classList.add("invalid");
    errorHint.classList.remove("hide");
    isEmailValid = false;
  } else {
    email.classList.remove("invalid");
    errorHint.classList.add("hide");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (!checkEmail()) {
    email.classList.add("invalid");
    errorHint.classList.remove("hide");
    isEmailValid = false;
  }
  if (isEmailValid === true) {
    all.classList.add("hide");
    thanksMessage.classList.remove("hide");
    emailSpan.textContent = email.value;
  }
});

email.addEventListener("input", () => {
  validateInputs();
});

dismiss.addEventListener("click", () => {
  all.classList.remove("hide");
  thanksMessage.classList.add("hide");
  email.value = "";
});
