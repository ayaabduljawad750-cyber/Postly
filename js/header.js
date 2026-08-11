import { isSignIn } from "./main.js";

const isLogin = isSignIn();

let header = document.getElementsByTagName("header")[0];

let boxLeft = document.createElement("div");
let menuNav = document.createElement("ul");

let brand = document.createElement("a");
let iconMenu = document.createElement("i");

let homeItem = document.createElement("li");
let favoritesItem = document.createElement("li");
let profileItem = document.createElement("li");
let signOutItem = document.createElement("li");

let homeLink = document.createElement("a");
let favoritesLink = document.createElement("a");
let profileLink = document.createElement("a");
let signOutLink = document.createElement("a");

let homeSpan = document.createElement("span");
let favoritesSpan = document.createElement("span");
let profileSpan = document.createElement("span");
let signOutSpan = document.createElement("span");

let homeIcon = document.createElement("i");
let favoritesIcon = document.createElement("i");
let profileIcon = document.createElement("i");
let signOutIcon = document.createElement("i");

brand.innerHTML = "Postly";
brand.href = "../index.html";
iconMenu.classList.add("fa-solid", "fa-bars");

boxLeft.appendChild(brand);
boxLeft.appendChild(iconMenu);
header.appendChild(boxLeft);
header.appendChild(menuNav);

homeIcon.classList.add("fa-regular", "fa-house");
homeSpan.innerHTML = "Home";
homeLink.appendChild(homeIcon);
homeLink.appendChild(homeSpan);
homeItem.appendChild(homeLink);

favoritesIcon.classList.add("fa-regular", "fa-heart");
favoritesSpan.innerHTML = "Favorites";
favoritesLink.appendChild(favoritesIcon);
favoritesLink.appendChild(favoritesSpan);
favoritesItem.appendChild(favoritesLink);

profileIcon.classList.add("fa-regular", "fa-user");
profileSpan.innerHTML = "Profile";
profileLink.appendChild(profileIcon);
profileLink.appendChild(profileSpan);
profileItem.appendChild(profileLink);

signOutIcon.classList.add("fa-solid", "fa-right-from-bracket");
if (isLogin) {
  signOutSpan.innerHTML = "Sign out";
} else {
  signOutSpan.innerHTML = "Sign in";
}
signOutLink.appendChild(signOutIcon);
signOutLink.appendChild(signOutSpan);
signOutItem.appendChild(signOutLink);

// Add style
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "25px";
header.style.backgroundColor = "#fff";

boxLeft.style.display = "flex";
boxLeft.style.justifyContent = "space-between";

brand.style.color = "#166fe5";
brand.style.fontSize = "30px";

iconMenu.style.fontSize = "30px";
iconMenu.style.color = "#166fe5";
iconMenu.style.cursor = "pointer";
iconMenu.style.transition = "all 0.3s ease";
iconMenu.style.display = "none";

menuNav.style.display = "flex";
menuNav.style.listStyle = "none";

const currentPage = window.location.pathname.split("/").pop();

for (let item of [homeItem, favoritesItem, profileItem, signOutItem]) {

  if (currentPage != "signIn.html" && currentPage != "signUp.html") {
    menuNav.appendChild(item);
  }
}
let linksHref = [
  "../index.html",
  isLogin ? "../favorites.html" : "../signIn.html",
  isLogin ? "../profile.html" : "../signIn.html",
  isLogin ? "#" : "../signIn.html",
];
let i = 0;

for (let link of [homeLink, favoritesLink, profileLink, signOutLink]) {
  link.style.display = "flex";
  link.style.gap = "15px";
  link.style.color = "#000";
  link.style.alignItems = "center";
  link.style.justifyContent = "center";

  link.style.margin = "0 25px";
  link.style.padding = "15px";
  link.style.transition = "all 0.3s ease";
  link.style.borderRadius = "25px";
  link.style.cursor = "pointer";
  link.addEventListener("mouseover", () => {
    if (link == signOutLink && isLogin) {
      link.style.backgroundColor = "#dc3545";
    } else {
      link.style.backgroundColor = "#1670e5c7";
    }
    link.style.color = "#fff";
  });
  link.addEventListener("mouseleave", () => {
    link.style.color = "#000";
    link.style.background = "none";
  });
  link.href = linksHref[i];
  i++;
  const linkPage = link.getAttribute("href").split("/").pop();

  if (linkPage === currentPage) {
    // link.classList.add("active");
    // console.log(link)
    link.classList.add("active");
    // link.parentElement.style.backgroundColor="#166fe5"
    // link.style.color="#fff"
  }
}

if (isLogin) {
  signOutLink.addEventListener("click", (e) => {
    e.preventDefault();

    sessionStorage.removeItem("currentUser");

    window.location.href = "../index.html";
  });
}

let showMenu = false;
iconMenu.addEventListener("click", () => {
  showMenu = !showMenu;
  iconMenu.classList.remove("fa-bars", "fa-xmark");
  iconMenu.classList.add(showMenu ? "fa-xmark" : "fa-bars");
  menuNav.style.display = showMenu ? "flex" : "none";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.width = "100vw";
    menuNav.style.paddingRight = "100px";
    iconMenu.style.paddingRight = "100px";
    header.style.zIndex = "1000";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.width = "";
    header.style.position = "static";
    header.style.boxShadow = "none";
    menuNav.style.paddingRight = "10px";
    iconMenu.style.paddingRight = "0px";
  }
});

const mediaQueryHeader = window.matchMedia("(max-width: 900px)");

function handleScreenChangeHeader(e) {
  if (e.matches) {
    iconMenu.style.display = "block";
    iconMenu.classList.add("fa-bars");
    header.style.flexDirection = "column";
    boxLeft.style.width = "100%";
    menuNav.style.flexDirection = "column";
    menuNav.style.marginTop = "25px";
    menuNav.style.width = "100%";
    menuNav.style.padding = "0 10px";
    menuNav.style.display = "none";
    for (let item of [homeItem, favoritesItem, profileItem, signOutItem]) {
      item.style.borderRadius = "0";
      item.style.marginBottom = "5px";
    }
  } else {
    iconMenu.style.display = "none";
    header.style.flexDirection = "row";
    boxLeft.style.width = "";
    menuNav.style.flexDirection = "row";
    menuNav.style.marginTop = "";
    menuNav.style.width = "";
    menuNav.style.display = "flex";
    for (let item of [homeItem, favoritesItem, profileItem, signOutItem]) {
      item.style.borderRadius = "25px";
      item.style.marginBottom = "0";
    }
  }
}

handleScreenChangeHeader(mediaQueryHeader);

mediaQueryHeader.addEventListener("change", handleScreenChangeHeader);
