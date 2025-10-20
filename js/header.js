let header = document.getElementsByTagName("header")[0];

let boxLeft = document.createElement("div");
let menuNav = document.createElement("ul");

let brand = document.createElement("h3");
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
signOutSpan.innerHTML = "Sign out";
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

for (let item of [homeItem, favoritesItem, profileItem, signOutItem]) {
  menuNav.appendChild(item);
  item.style.margin = "0 25px";
  item.style.padding = "15px";
  item.style.transition = "all 0.3s ease";
  item.style.borderRadius = "25px";
  item.style.cursor = "pointer";
  item.addEventListener("mouseover", () => {
    if (item == signOutItem) {
      item.style.backgroundColor = "#dc3545";
    } else {
      item.style.backgroundColor = "#1670e5c7";
    }
    item.children[0].style.color = "#fff";
  });
  item.addEventListener("mouseleave", () => {
    item.children[0].style.color = "#000";
    item.style.background = "none";
  });
}
let linksHref = [
  "../home.html",
  "../favorites.html",
  "../profile.html",
  "../index.html",
];
let i = 0;
const currentPage = window.location.pathname.split("/").pop();
for (let link of [homeLink, favoritesLink, profileLink, signOutLink]) {
  link.style.display = "flex";
  link.style.gap = "15px";
  link.style.color = "#000";
  link.href = linksHref[i];
  i++;
  const linkPage = link.getAttribute("href").split("/").pop();

  if (linkPage === currentPage) {
    // link.classList.add("active");
    // console.log(link)
    link.parentElement.classList.add("active");
    // link.parentElement.style.backgroundColor="#166fe5"
    // link.style.color="#fff"
  }
}
let showMenu = false;
iconMenu.addEventListener("click", () => {
  showMenu = !showMenu;
  iconMenu.classList.remove("fa-bars", "fa-xmark");
  iconMenu.classList.add(showMenu ? "fa-xmark" : "fa-bars");
  menuNav.style.display = showMenu ? "flex" : "none";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
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
