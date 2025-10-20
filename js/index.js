import { getUsers, setCurrentUser } from "./main.js";

let signInPage = document.getElementById("signInPage");

let signInForm = document.createElement("form");
let signInBox = document.createElement("div");
let signInTitle = document.createElement("h3");

let emailBox = document.createElement("div");
let emailInput = document.createElement("input");
let emailMessage = document.createElement("p");

let passwordBox = document.createElement("div");
let passwordInput = document.createElement("input");
let passwordMessage = document.createElement("p");

let signInButton = document.createElement("button");

let question = document.createElement("div");
let questionText = document.createElement("p");
let questionLink = document.createElement("a");

// Add Data

signInForm.action = "./home.html";

signInTitle.innerHTML = "Sign In";

emailInput.placeholder = "Email";
emailInput.id = "email";
emailInput.name = "email";
emailInput.type = "text";

passwordInput.placeholder = "Password";
passwordInput.id = "password";
passwordInput.name = "password";
passwordInput.type = "password";

signInButton.innerHTML = "Sign In";
signInButton.type = "submit";

questionText.innerHTML = "Do you not have an account?";
questionLink.innerHTML = "Sign Up";
questionLink.href = "./signUp.html";

// Add to body

signInBox.appendChild(signInTitle);

emailBox.appendChild(emailInput);
emailBox.appendChild(emailMessage);

passwordBox.appendChild(passwordInput);
passwordBox.appendChild(passwordMessage);

signInBox.appendChild(emailBox);
signInBox.appendChild(passwordBox);

question.appendChild(questionText);
question.appendChild(questionLink);

signInForm.appendChild(signInBox);
signInForm.appendChild(signInButton);
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

signInTitle.style.textAlign = "center";
signInTitle.style.marginBottom = "25px";

for (let box of [emailBox, passwordBox]) {
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.marginBottom = "25px";
}

for (let input of [emailInput, passwordInput]) {
  input.style.padding = "10px";
  input.style.borderRadius = "10px";
  input.style.border = "0.5px solid #00000030";
}

for (let message of [
  emailMessage,
  passwordMessage
]) {
  message.style.color = "#dc3545";
  message.style.fontSize = "12px";
  message.style.padding = "0px 5px";
  message.style.paddingTop = "10px";
  message.style.display = "none";
}

signInButton.style.width = "100%";
signInButton.style.padding = "10px 0";
signInButton.style.backgroundColor = "#166fe5";
signInButton.style.border = "none";
signInButton.style.color = "white";
signInButton.style.borderRadius = "10px";
signInButton.style.fontSize = "20px";

question.style.display = "flex";
question.style.flexDirection = "column";
question.style.alignItems = "center";
question.style.marginTop = "25px";

questionText.style.marginBottom = "10px";

questionLink.style.textDecoration = "none";

// Logic

signInForm.addEventListener("submit", function(e){checkSignIn(e)});

function checkSignIn(e) {
  let email = emailInput.value;
  let password = passwordInput.value;
  let users = getUsers();
  let isCorrectEmail = false;
  let currentUser = null;
  for (let user of users) {
    if (email == user.email) {
      isCorrectEmail = true;
      currentUser = user;
      break;
    }
  }
  if (email && isCorrectEmail) {
    emailMessage.style.display = "none";
    if (password == currentUser.password) {
      passwordMessage.style.display = "none";
      setCurrentUser(currentUser);
    } else {
      e.preventDefault();
      passwordMessage.style.display="block"
      passwordMessage.innerHTML = "Invalid Password";
    }
  } else {
    e.preventDefault();
    emailMessage.style.display="block"
    emailMessage.innerHTML = "Invalid Email";
  }
}
