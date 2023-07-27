// INPUT ELEMENTS:
const fisrtNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const inputElements = [
  fisrtNameInput,
  lastNameInput,
  emailInput,
  passwordInput,
];

const errorMessage = document.querySelectorAll(".error");
const button = document.querySelector(".form-btn");

button.addEventListener("click", () => {
  inputElements.forEach((inputElement) => {
    const isFill = isInputFilled(inputElement);
    const isEmailValid = validateEmail(emailInput.value.trim());
    const index = inputElements.indexOf(inputElement);

    if (!isFill) {
      errorMessage.ariaHidden = false;
      errorMessage[index].classList.remove("hidden");
      inputElement.classList.add("bg-error", "border-Red");
      errorMessage[index].textContent = `${inputElement.name} cannot be empty`;
    } else {
      errorMessage[index].classList.add("hidden");
      inputElement.classList.remove("bg-error", "border-Red");

      if (!isEmailValid) {
        errorMessage[2].classList.remove("hidden");
        emailInput.classList.add("error-bg");
        errorMessage[2].textContent = `Looks like this is not an email`;
      }
    }
  });
});

function validateEmail(email) {
  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexPattern.test(email);
}

function isInputFilled(inputElement) {
  let isFilled;
  const inputValue = inputElement.value.trim();

  if (inputValue) {
    isFilled = true;
  } else {
    isFilled = false;
  }

  return isFilled;
}
