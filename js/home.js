import { getAddPostIcon } from "./addPostIcon.js";
import { subTextColor } from "./colors.js";
import { getPosts } from "./main.js";
import { getPostCard } from "./postCard.js";

let homePage = document.getElementById("homePage");
let emptyBoxPosts = document.createElement("p");
let boxWelcomeMessage = document.createElement("div");
let titleWelcomeMessage = document.createElement("h2");
let welcomeMessage = document.createElement("p");
let boxPosts = document.createElement("div");
let boxAddPostIcon = getAddPostIcon();

// start welcome box

titleWelcomeMessage.innerHTML = "Welcome to Postly";
welcomeMessage.innerHTML = "Share your moments with the world!";

boxWelcomeMessage.appendChild(titleWelcomeMessage);
boxWelcomeMessage.appendChild(welcomeMessage);

homePage.appendChild(boxWelcomeMessage);
homePage.appendChild(boxPosts);
homePage.appendChild(boxAddPostIcon);

// add style

boxWelcomeMessage.style.textAlign = "center";
boxWelcomeMessage.style.margin = "50px 0";

titleWelcomeMessage.style.fontSize = "36px";
titleWelcomeMessage.style.paddingBottom = "10px";
titleWelcomeMessage.style.color = "#166fe5";

welcomeMessage.style.color = "#878fc7ff";
welcomeMessage.style.fontSize = "16px";

// end welcome box

// start box posts

emptyBoxPosts.innerHTML = "Not There any posts";
emptyBoxPosts.style.color = subTextColor;
emptyBoxPosts.style.fontSize = "30px";
emptyBoxPosts.style.display = "none";
emptyBoxPosts.id = "emptyMessageProfile";
boxPosts.appendChild(emptyBoxPosts);

let AllPosts = getPosts();
console.log(AllPosts)
if(AllPosts.length==0){
emptyBoxPosts.style.display = "block";
}
else{
  emptyBoxPosts.style.display = "none";
for (let post of AllPosts) {
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
