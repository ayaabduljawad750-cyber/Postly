import { addNewPost } from "./main.js";

let addPostPage = document.getElementById("addPostPage");

let addPostForm = document.createElement("form");
let addPostBoxMessage = document.createElement("div");
let addPostBox = document.createElement("div");
let addPostButton = document.createElement("button");

let addPostBoxMessageTitle = document.createElement("h3");
let addPostBoxMessageDescription = document.createElement("p");

let addPostInputTitleBox = document.createElement("div");
let addPostTitleLabel = document.createElement("label");
let addPostTitleInput = document.createElement("input");

let addPostInputImgURLBox = document.createElement("div");
let addPostImgURLLabel = document.createElement("label");
let addPostImgURLInput = document.createElement("input");

let addPostInputDetailsBox = document.createElement("div");
let addPostDetailsLabel = document.createElement("label");
let addPostDetailsInput = document.createElement("textarea");

addPostBoxMessageTitle.innerHTML = "Create New Post";
addPostBoxMessageDescription.innerHTML = "Share your moment with the community";

addPostBoxMessage.appendChild(addPostBoxMessageTitle);
addPostBoxMessage.appendChild(addPostBoxMessageDescription);

addPostTitleLabel.innerHTML = "Title";
addPostTitleLabel.htmlFor = "title";
addPostTitleInput.placeholder = "Enter Title";
addPostTitleInput.id = "title";
addPostTitleInput.name = "title";
addPostInputTitleBox.appendChild(addPostTitleLabel);
addPostInputTitleBox.appendChild(addPostTitleInput);

addPostImgURLLabel.innerHTML = "Image URL";
addPostImgURLLabel.htmlFor = "imgURL";
addPostImgURLInput.placeholder = "https://example.com/image.jpg";
addPostImgURLInput.id = "imgURL";
addPostImgURLInput.name = "imgURL";
addPostInputImgURLBox.appendChild(addPostImgURLLabel);
addPostInputImgURLBox.appendChild(addPostImgURLInput);

addPostDetailsLabel.innerHTML = "Details";
addPostDetailsLabel.htmlFor = "details";
addPostDetailsInput.placeholder = "Tell us about your post ...";
addPostDetailsInput.id = "details";
addPostDetailsInput.name = "details";
addPostInputDetailsBox.appendChild(addPostDetailsLabel);
addPostInputDetailsBox.appendChild(addPostDetailsInput);

addPostBox.appendChild(addPostInputTitleBox);
addPostBox.appendChild(addPostInputImgURLBox);
addPostBox.appendChild(addPostInputDetailsBox);

addPostButton.type = "submit";
addPostButton.innerHTML = "Create post";

addPostForm.appendChild(addPostBoxMessage);
addPostForm.appendChild(addPostBox);
addPostForm.appendChild(addPostButton);

addPostForm.action="../home.html"

addPostPage.appendChild(addPostForm);

// add style

addPostPage.style.display = "flex";
addPostPage.style.height = "80vh";
addPostPage.style.justifyContent = "center";
addPostPage.style.alignItems = "center";

addPostForm.style.width = "800px";
// addPostForm.style.height="80%"
addPostForm.style.display = "flex";
addPostForm.style.flexDirection = "column";
// addPostForm.style.justifyContent="space-between"
addPostForm.style.backgroundColor = "white";
addPostForm.style.padding = "25px 25px";
addPostForm.style.borderRadius = "25px";

addPostBoxMessage.style.marginBottom = "35px";
addPostBoxMessageTitle.style.marginBottom = "15px";
addPostBoxMessageTitle.style.fontSize = "24px";
addPostBoxMessageDescription.style.color = "#71717A";
addPostBoxMessageDescription.style.fontSize = "14px";

// addPostBox.style.display="flex"
// addPostBox.style.flexDirection="column"
// addPostBox.style.height="60%"
// addPostBox.style.justifyContent="space-between"

for (let box of [
  addPostInputTitleBox,
  addPostInputImgURLBox,
  addPostInputDetailsBox,
]) {
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.gap = "10px";
  box.style.marginBottom = "25px";
}

for (let input of [
  addPostTitleInput,
  addPostImgURLInput,
  addPostDetailsInput,
]) {
  input.style.padding = "10px";
  input.style.borderRadius = "10px";
  input.style.border = "0.5px solid #00000030";
}

addPostDetailsInput.style.minHeight = "150px";

addPostButton.style.fontSize = "16px";
addPostButton.style.padding = "10px";
addPostButton.style.borderRadius = "25px";
addPostButton.style.backgroundColor = addPostButton.disabled
  ? "#71717A"
  : "#166fe5";
addPostButton.style.color = "#fff";
addPostButton.style.transition = "all 0.3s ease";
addPostButton.style.border = "none";

addPostButton.addEventListener("mouseover", () => {
  if (!addPostButton.disabled)
    addPostButton.style.backgroundColor = "#0f5cc2ff";
});
addPostButton.addEventListener("mouseleave", () => {
  if (!addPostButton.disabled) addPostButton.style.backgroundColor = "#166fe5";
});

// logic

let title = addPostTitleInput.value;
let imgURL = addPostImgURLInput.value;
let details = addPostDetailsInput.value;

addPostTitleInput.addEventListener("change", () => {
  title = addPostTitleInput.value
  addPostButton.disabled = title && details ? false : true;
  addPostButton.style.backgroundColor = addPostButton.disabled
  ? "#71717a6b"
  : "#166fe5";
});

addPostImgURLInput.addEventListener("change", () => {
  imgURL = addPostImgURLInput.value
  addPostButton.disabled = title && details ? false : true;
  addPostButton.style.backgroundColor = addPostButton.disabled
  ? "#71717a6b"
  : "#166fe5";
});

addPostDetailsInput.addEventListener("change", () => {
  details = addPostDetailsInput.value
  addPostButton.disabled = title && details ? false : true;
  addPostButton.style.backgroundColor = addPostButton.disabled
  ? "#71717a6b"
  : "#166fe5";
});
addPostButton.disabled = title && details ? false : true;
  addPostButton.style.backgroundColor = addPostButton.disabled
  ? "#71717a6b"
  : "#166fe5";


addPostForm.addEventListener("submit", (e) => {
  e.preventDefault()
  addNewPost(title,imgURL,details)
  window.history.back();
});

  const mediaQuery = window.matchMedia("(max-width: 1000px)");

  function handleScreenChange(e) {
    if (e.matches) {
      addPostForm.style.width="70%"
    }
    else{
      addPostForm.style.width = "800px";
    }
  }

  mediaQuery.addEventListener("change", handleScreenChange);

  handleScreenChange(mediaQuery);