import {
  borderColor,
  secondaryColor,
  firstColor,
  subTextColor,
  dangerColor,
} from "./colors.js";

import {
  getCurrentUser,
  getPostsCreatedByUser,
  getNumberOfPostsCreatedByUser,
} from "./main.js";

import { getPostCard } from "./postCard.js";

import { controlBoxPost } from "./controlBoxPost.js";
import { getAddPostIcon } from "./addPostIcon.js";

// parent profile
let profilePage = document.getElementById("profilePage");

profilePage.style.margin = "5% 5%";
profilePage.style.display = "flex";
profilePage.style.flexDirection = "column";
profilePage.style.gap = "35px";

// top Profile
let topProfile = document.createElement("div");
let boxLeft = document.createElement("div");
let boxRight = document.createElement("div");
let iconLeft = document.createElement("h2");
let fullname = document.createElement("h3");
let email = document.createElement("p");
let numberOfPosts = document.createElement("p");
let boxAddPostIcon = getAddPostIcon();

let currentUser = getCurrentUser();

email.innerHTML = currentUser.email;
fullname.innerHTML = currentUser.fullname;
iconLeft.innerHTML = currentUser.fullname[0];
numberOfPosts.innerHTML = `${getNumberOfPostsCreatedByUser(
  currentUser.id
)} Posts`;
numberOfPosts.id = "numberOfPosts";

boxLeft.appendChild(iconLeft);
boxRight.appendChild(fullname);
boxRight.appendChild(email);
boxRight.appendChild(numberOfPosts);

topProfile.appendChild(boxLeft);
topProfile.appendChild(boxRight);
profilePage.appendChild(topProfile);
// Add Style

// Top Profile
topProfile.style.display = "flex";
topProfile.style.alignItems = "center";
topProfile.style.gap = "25px";
topProfile.style.padding = "25px 25px";
topProfile.style.border = `1px solid ${borderColor}`;
topProfile.style.borderRadius = "20px";
topProfile.style.backgroundColor = secondaryColor;

// left top Profile
boxLeft.style.backgroundColor = firstColor;
boxLeft.style.display = "flex";
boxLeft.style.justifyContent = "center";
boxLeft.style.alignItems = "center";
boxLeft.style.width = "120px";
boxLeft.style.height = "120px";
boxLeft.style.borderRadius = "50%";

iconLeft.style.color = secondaryColor;
iconLeft.style.fontSize = "50px";

// right top profile
boxRight.style.display = "flex";
boxRight.style.flexDirection = "column";
boxRight.style.gap = "10px";

fullname.style.fontSize = "30px";
email.style.color = subTextColor;

// center Profile
let centerProfile = document.createElement("div");
let titleCenterProfile = document.createElement("h3");
let boxPosts = document.createElement("div");
let emptyBoxPosts = document.createElement("p");
let userPosts = getPostsCreatedByUser(currentUser.id);
titleCenterProfile.innerHTML = "Your Posts";

emptyBoxPosts.innerHTML = "You haven't posted anything yet";
emptyBoxPosts.style.color = subTextColor;
emptyBoxPosts.style.fontSize = "30px";
emptyBoxPosts.style.display = "none";
emptyBoxPosts.id = "emptyMessageProfile";
boxPosts.appendChild(emptyBoxPosts);

if (userPosts.length == 0) {
  emptyBoxPosts.style.display = "block";
} else {
  emptyBoxPosts.style.display = "none";
  for (let post of userPosts) {
    let postCard = getPostCard(post);

    // I use it for delete
    postCard.id = post.id;
    boxPosts.appendChild(postCard);
  }
}
centerProfile.appendChild(titleCenterProfile);
centerProfile.appendChild(boxPosts);
profilePage.appendChild(centerProfile);
profilePage.appendChild(boxAddPostIcon);
// add style
boxPosts.style.display = "flex";
boxPosts.style.flexWrap = "wrap";
boxPosts.style.justifyContent = "center";
boxPosts.style.alignItems = "center";
boxPosts.style.minHeight = "55vh";

titleCenterProfile.style.fontSize = "30px";
