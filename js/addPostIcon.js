export function getAddPostIcon() {
  let boxAddPostIcon = document.createElement("div")
let iconAddPost = document.createElement("i")
  // start Icon Add post
  iconAddPost.classList.add("fa-solid", "fa-share-nodes");
  boxAddPostIcon.appendChild(iconAddPost);

  // add style
  boxAddPostIcon.style.position = "fixed";
  boxAddPostIcon.style.bottom = "25px";
  boxAddPostIcon.style.right = "25px";
  boxAddPostIcon.style.border = "1px solid #166fe5";
  boxAddPostIcon.style.color = "#166fe5";
  boxAddPostIcon.style.backgroundColor = "#fff";
  boxAddPostIcon.style.padding = "25px";
  boxAddPostIcon.style.borderRadius = "50%";
  boxAddPostIcon.style.transition = "all 0.4s ease";
  boxAddPostIcon.style.zIndex=1000

  iconAddPost.style.fontSize = "30px";

  boxAddPostIcon.addEventListener("mouseover", () => {
    boxAddPostIcon.style.color = "#fff";
    boxAddPostIcon.style.backgroundColor = "#166fe5";
  });

  boxAddPostIcon.addEventListener("mouseleave", () => {
    boxAddPostIcon.style.color = "#166fe5";
    boxAddPostIcon.style.backgroundColor = "#fff";
  });

  // end Icon Add post

  // event click 
  boxAddPostIcon.addEventListener("click",()=>{
    window.location.href="../addPost.html"
  })

  return boxAddPostIcon
}
