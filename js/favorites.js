import { getAddPostIcon } from "./addPostIcon.js";
import { subTextColor } from "./colors.js";
import { getFavoritePosts } from "./main.js";
import { getPostCard } from "./postCard.js";

let favoritesPage = document.getElementById("favoritesPage");
let emptyBoxPosts = document.createElement("p");
let boxWelcomeMessage = document.createElement("div");
let titleWelcomeMessage = document.createElement("h2");

let boxPosts = document.createElement("div");
let boxAddPostIcon = getAddPostIcon();

// start welcome box

titleWelcomeMessage.innerHTML = "Favorite Posts";

boxWelcomeMessage.appendChild(titleWelcomeMessage);

favoritesPage.appendChild(boxWelcomeMessage);
favoritesPage.appendChild(boxPosts);
favoritesPage.appendChild(boxAddPostIcon);

// add style

boxWelcomeMessage.style.textAlign = "center";
boxWelcomeMessage.style.margin = "50px 0";

titleWelcomeMessage.style.fontSize = "36px";
titleWelcomeMessage.style.paddingBottom = "10px";
titleWelcomeMessage.style.color = "#166fe5";

// end welcome box

// start box posts

emptyBoxPosts.innerHTML = "There are no favorite posts.";
emptyBoxPosts.style.color = subTextColor;
emptyBoxPosts.style.fontSize = "30px";
emptyBoxPosts.style.display = "none";
emptyBoxPosts.id = "emptyMessageProfile";
boxPosts.appendChild(emptyBoxPosts);

let favoritePosts = getFavoritePosts();
if (favoritePosts.length == 0) {
  emptyBoxPosts.style.display = "block";
} else {
  emptyBoxPosts.style.display = "none";
  for (let post of favoritePosts) {
    let postCard = getPostCard(post);
    boxPosts.appendChild(postCard);
  }
}

// Add style
boxPosts.style.margin = "0 25px";
boxPosts.style.display = "flex";
boxPosts.style.flexWrap = "wrap";
boxPosts.style.justifyContent = "center";
boxPosts.style.alignItems = "center";
boxPosts.style.minHeight = "70vh";

// end box posts

boxPosts.addEventListener("change", () => {
  if (favoritePosts.length == 0) {
    emptyBoxPosts.style.display = "block";
  } else {
    emptyBoxPosts.style.display = "none";
  }
});
