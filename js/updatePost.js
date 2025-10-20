import { updatePost, getCurrentPost } from "./main.js";

let updatePostPage = document.getElementById("updatePostPage");

let updatePostForm = document.createElement("form");
let updatePostBoxMessage = document.createElement("div");
let updatePostBox = document.createElement("div");
let updatePostButton = document.createElement("button");

let updatePostBoxMessageTitle = document.createElement("h3");
let updatePostBoxMessageDescription = document.createElement("p");

let updatePostInputTitleBox = document.createElement("div");
let updatePostTitleLabel = document.createElement("label");
let updatePostTitleInput = document.createElement("input");

let updatePostInputImgURLBox = document.createElement("div");
let updatePostImgURLLabel = document.createElement("label");
let updatePostImgURLInput = document.createElement("input");

let updatePostInputDetailsBox = document.createElement("div");
let updatePostDetailsLabel = document.createElement("label");
let updatePostDetailsInput = document.createElement("textarea");

updatePostBoxMessageTitle.innerHTML = "Update Post";
updatePostBoxMessageDescription.innerHTML = "Be careful when editing your post.";

updatePostBoxMessage.appendChild(updatePostBoxMessageTitle);
updatePostBoxMessage.appendChild(updatePostBoxMessageDescription);

let post = getCurrentPost()
updatePostTitleLabel.innerHTML = "Title";
updatePostTitleLabel.htmlFor = "title";
updatePostTitleInput.placeholder = "Enter Title";
updatePostTitleInput.value = post.title;
updatePostTitleInput.id = "title";
updatePostTitleInput.name = "title";
updatePostInputTitleBox.appendChild(updatePostTitleLabel);
updatePostInputTitleBox.appendChild(updatePostTitleInput);

updatePostImgURLLabel.innerHTML = "Image URL";
updatePostImgURLLabel.htmlFor = "imgURL";
updatePostImgURLInput.placeholder = "https://example.com/image.jpg";
updatePostImgURLInput.value = post.imgURL;
updatePostImgURLInput.id = "imgURL";
updatePostImgURLInput.name = "imgURL";
updatePostInputImgURLBox.appendChild(updatePostImgURLLabel);
updatePostInputImgURLBox.appendChild(updatePostImgURLInput);

updatePostDetailsLabel.innerHTML = "Details";
updatePostDetailsLabel.htmlFor = "details";
updatePostDetailsInput.placeholder = "Tell us about your post ...";
updatePostDetailsInput.value = post.details;
updatePostDetailsInput.id = "details";
updatePostDetailsInput.name = "details";
updatePostInputDetailsBox.appendChild(updatePostDetailsLabel);
updatePostInputDetailsBox.appendChild(updatePostDetailsInput);

updatePostBox.appendChild(updatePostInputTitleBox);
updatePostBox.appendChild(updatePostInputImgURLBox);
updatePostBox.appendChild(updatePostInputDetailsBox);

updatePostButton.type = "submit";
updatePostButton.innerHTML = "Update post";

updatePostForm.appendChild(updatePostBoxMessage);
updatePostForm.appendChild(updatePostBox);
updatePostForm.appendChild(updatePostButton);

updatePostForm.action=""

updatePostPage.appendChild(updatePostForm);

// add style

updatePostPage.style.display = "flex";
updatePostPage.style.flexDirection = "column";
updatePostPage.style.height = "80vh";
updatePostPage.style.justifyContent = "center";
updatePostPage.style.alignItems = "center";
updatePostPage.style.margin="25px 25px"

updatePostForm.style.width = "800px";
// addPostForm.style.height="80%"
updatePostForm.style.display = "flex";
updatePostForm.style.flexDirection = "column";
// addPostForm.style.justifyContent="space-between"
updatePostForm.style.backgroundColor = "white";
updatePostForm.style.padding = "25px 25px";
updatePostForm.style.borderRadius = "25px";

updatePostBoxMessage.style.marginBottom = "35px";
updatePostBoxMessageTitle.style.marginBottom = "15px";
updatePostBoxMessageTitle.style.fontSize = "24px";
updatePostBoxMessageDescription.style.color = "#71717A";
updatePostBoxMessageDescription.style.fontSize = "14px";

// addPostBox.style.display="flex"
// addPostBox.style.flexDirection="column"
// addPostBox.style.height="60%"
// addPostBox.style.justifyContent="space-between"

for (let box of [
  updatePostInputTitleBox,
  updatePostInputImgURLBox,
  updatePostInputDetailsBox,
]) {
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.gap = "10px";
  box.style.marginBottom = "25px";
}

for (let input of [
  updatePostTitleInput,
  updatePostImgURLInput,
  updatePostDetailsInput,
]) {
  input.style.padding = "10px";
  input.style.borderRadius = "10px";
  input.style.border = "0.5px solid #00000030";
}

updatePostDetailsInput.style.minHeight = "150px";

updatePostButton.style.fontSize = "16px";
updatePostButton.style.padding = "10px";
updatePostButton.style.borderRadius = "25px";
updatePostButton.style.backgroundColor = updatePostButton.disabled
  ? "#71717A"
  : "#166fe5";
updatePostButton.style.color = "#fff";
updatePostButton.style.transition = "all 0.3s ease";
updatePostButton.style.border = "none";

updatePostButton.addEventListener("mouseover", () => {
  if (!updatePostButton.disabled)
    updatePostButton.style.backgroundColor = "#0f5cc2ff";
});
updatePostButton.addEventListener("mouseleave", () => {
  if (!updatePostButton.disabled) updatePostButton.style.backgroundColor = "#166fe5";
});

// logic

let title = updatePostTitleInput.value;
let imgURL = updatePostImgURLInput.value;
let details = updatePostDetailsInput.value;

updatePostTitleInput.addEventListener("change", () => {
  title = updatePostTitleInput.value
  updatePostButton.disabled = title && details ? false : true;
  updatePostButton.style.backgroundColor = updatePostButton.disabled
  ? "#71717a6b"
  : "#166fe5";
});

updatePostImgURLInput.addEventListener("change", () => {
  imgURL = updatePostImgURLInput.value
  updatePostButton.disabled = title && details ? false : true;
  updatePostButton.style.backgroundColor = updatePostButton.disabled
  ? "#71717a6b"
  : "#166fe5";
});

updatePostDetailsInput.addEventListener("change", () => {
  details = updatePostDetailsInput.value
  updatePostButton.disabled = title && details ? false : true;
  updatePostButton.style.backgroundColor = updatePostButton.disabled
  ? "#71717a6b"
  : "#166fe5";
});
updatePostButton.disabled = title && details ? false : true;
  updatePostButton.style.backgroundColor = updatePostButton.disabled
  ? "#71717a6b"
  : "#166fe5";



  
updatePostForm.addEventListener("submit", (e) => {
  e.preventDefault()
  updatePost(post.id,title,imgURL,details)
  window.location.href="../profile.html"
});


  const mediaQuery = window.matchMedia("(max-width: 1000px)");

  function handleScreenChange(e) {
    if (e.matches) {
      updatePostForm.style.width="70%"
    }
    else{
      updatePostForm.style.width = "800px";
    }
  }

  mediaQuery.addEventListener("change", handleScreenChange);

  handleScreenChange(mediaQuery);
