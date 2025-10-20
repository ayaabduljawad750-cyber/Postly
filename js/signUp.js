import {
  generateId,
  getUsers,
  setUsers,
  isEmailExists,
  setCurrentUser,
} from "./main.js";

let signInPage = document.getElementById("signUpPage");

let signInForm = document.createElement("form");
let signUpBox = document.createElement("div");
let signUpTitle = document.createElement("h3");

let fullnameBox = document.createElement("div");
let fullnameInput = document.createElement("input");
let fullnameMessage = document.createElement("p");

let emailBox = document.createElement("div");
let emailInput = document.createElement("input");
let emailMessage = document.createElement("p");

let passwordBox = document.createElement("div");
let passwordInput = document.createElement("input");
let passwordMessage = document.createElement("p");

let confirmPasswordBox = document.createElement("div");
let confirmPasswordInput = document.createElement("input");
let confirmPasswordMessage = document.createElement("p");

let signUpButton = document.createElement("button");

let question = document.createElement("div");
let questionText = document.createElement("p");
let questionLink = document.createElement("a");

// Add Data

signInForm.action = "./home.html";

signUpTitle.innerHTML = "Sign Up";

fullnameInput.placeholder = "Fullname";
fullnameInput.id = "fullname";
fullnameInput.name = "fullname";
fullnameInput.type = "text";

emailInput.placeholder = "Email";
emailInput.id = "email";
emailInput.name = "email";
emailInput.type = "text";

passwordInput.placeholder = "Password";
passwordInput.id = "password";
passwordInput.name = "password";
passwordInput.type = "password";

confirmPasswordInput.placeholder = "Confirm Password";
confirmPasswordInput.id = "confirmPassword";
confirmPasswordInput.name = "confirmPassword";
confirmPasswordInput.type = "password";

signUpButton.innerHTML = "Sign Up";
signUpButton.type = "submit";

questionText.innerHTML = "Do you have an account?";
questionLink.innerHTML = "Sign In";
questionLink.href = "./index.html";

// Add to body

signUpBox.appendChild(signUpTitle);

fullnameBox.appendChild(fullnameInput);
fullnameBox.appendChild(fullnameMessage);

emailBox.appendChild(emailInput);
emailBox.appendChild(emailMessage);

passwordBox.appendChild(passwordInput);
passwordBox.appendChild(passwordMessage);

confirmPasswordBox.appendChild(confirmPasswordInput);
confirmPasswordBox.appendChild(confirmPasswordMessage);

signUpBox.appendChild(fullnameBox);
signUpBox.appendChild(emailBox);
signUpBox.appendChild(passwordBox);
signUpBox.appendChild(confirmPasswordBox);

question.appendChild(questionText);
question.appendChild(questionLink);

signInForm.appendChild(signUpBox);
signInForm.appendChild(signUpButton);
signInForm.appendChild(question);

signInPage.appendChild(signInForm);

// Add style

signInPage.style.display = "flex";
signInPage.style.flexDirection = "column";
signInPage.style.height = "80vh";
signInPage.style.justifyContent = "center";
signInPage.style.alignItems = "center";

signInForm.style.width = "30%";
signInForm.style.backgroundColor = "white";
signInForm.style.padding = "25px 25px";
signInForm.style.borderRadius = "25px";

signUpTitle.style.textAlign = "center";
signUpTitle.style.marginBottom = "25px";

for (let box of [fullnameBox, emailBox, passwordBox, confirmPasswordBox]) {
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.marginBottom = "25px";
}

for (let input of [
  fullnameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
]) {
  input.style.padding = "10px";
  input.style.borderRadius = "10px";
  input.style.border = "0.5px solid #00000030";
}

for (let message of [
  fullnameMessage,
  emailMessage,
  passwordMessage,
  confirmPasswordMessage,
]) {
  message.style.color = "#dc3545";
  message.style.fontSize = "12px";
  message.style.padding = "0px 5px";
  message.style.paddingTop = "10px";
  message.style.display = "none";
}

signUpButton.style.width = "100%";
signUpButton.style.padding = "10px 0";
signUpButton.style.backgroundColor = "#166fe5";
signUpButton.style.border = "none";
signUpButton.style.color = "white";
signUpButton.style.borderRadius = "10px";
signUpButton.style.fontSize = "20px";

question.style.display = "flex";
question.style.flexDirection = "column";
question.style.alignItems = "center";
question.style.marginTop = "25px";

questionText.style.marginBottom = "10px";

questionLink.style.textDecoration = "none";

signInForm.addEventListener("submit", function (e) {
  e.preventDefault();
  handleSignUp();
});

function handleSignUp() {
  let fullname = fullnameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;
  checkFullname(fullname, email, password, confirmPassword);
}

function checkFullname(fullname, email, password, confirmPassword) {
  if (/^[A-Z]/.test(fullname)) {
    if (/^[a-zA-Z]+$/.test(fullname)) {
      if (fullname.length > 2) {
        fullnameMessage.style.display = "none";
        checkEmail(fullname, email, password, confirmPassword);
      } else {
        fullnameMessage.style.display = "block";
        fullnameMessage.innerHTML = "Fullname must be more than two letters";
      }
    } else {
      fullnameMessage.style.display = "block";
      fullnameMessage.innerHTML = "Fullname contains only letters";
    }
  } else {
    fullnameMessage.style.display = "block";
    fullnameMessage.innerHTML = "Fullname must start with a capital letter.";
  }
}

function checkEmail(fullname, email, password, confirmPassword) {
  if (/\w+@\w+.\w+/.test(email)) {
    if (!isEmailExists(email)) {
      emailMessage.style.display = "none";
      checkPassword(fullname, email, password, confirmPassword);
    } else {
      emailMessage.style.display = "block";
      emailMessage.innerHTML = "This email already exists. sign in.";
    }
  } else {
    emailMessage.style.display = "block";
    emailMessage.innerHTML = "This is an invalid email.";
  }
}

function checkPassword(fullname, email, password, confirmPassword) {
  if (password.length >= 8 && password.length <= 20) {
    if (
      /\W/.test(password) &&
      /[0-9]/.test(password) &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password)
    ) {
      passwordMessage.style.display = "none";
      if (confirmPassword == password) {
        confirmPasswordMessage.style.display = "none";
        AddNewUser(fullname, email, password);
        signInForm.submit();
      } else {
        confirmPasswordMessage.style.display = "block";
        confirmPasswordMessage.innerHTML =
          "The confirm password must equal the password.";
      }
    } else {
      passwordMessage.style.display = "block";
      passwordMessage.innerHTML = "The password must be strong.";
    }
  } else {
    passwordMessage.style.display = "block";
    passwordMessage.innerHTML = "The password must be between 8 and 20";
  }
}

function AddNewUser(fullname, email, password) {
  let users = getUsers();
  let newUser = {
    id: generateId(),
    fullname,
    email,
    password,
    favorites: [],
  };
  users.push(newUser);
  setCurrentUser(newUser);
  setUsers(users);
}
