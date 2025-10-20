import { getCurrentPost } from "./main.js"
import { getPostCard } from "./postCard.js"

let postPage = document.getElementById("postPage")

let post = getCurrentPost()

let postCard = getPostCard(post)

postPage.appendChild(postCard)

postPage.style.display="flex"
postPage.style.justifyContent="center"
postPage.style.alignItems="center"
postPage.style.minHeight="83vh"

postCard.style.width="50%"

  const mediaQuery = window.matchMedia("(max-width: 900px)");
  function handleScreenChange(e) {
    if (e.matches) {
      postCard.style.width="80%"
    }
    else{
      postCard.style.width = "50%";
    }
  }

  mediaQuery.addEventListener("change", handleScreenChange);