import { firstColor, dangerColor, secondaryColor } from "./colors.js";
import { dialogDelete } from "./dialog.js";
import { deletePostById, getPostById, setCurrentPost } from "./main.js";

export function controlBoxPost(postId,authorId) {
  let controlBox = document.createElement("div");
  let updateIcon = document.createElement("i");
  let deleteIcon = document.createElement("i");

  let dialogD=dialogDelete(postId,authorId)
document.body.appendChild(dialogD)
document.body.style.height="100vh"
document.body.style.width="100%"
dialogD.style.display="none"

  updateIcon.classList.add("fa-solid", "fa-pen");
  deleteIcon.classList.add("fa-solid", "fa-trash");

  controlBox.style.padding = "20px 20px";
  controlBox.style.paddingBottom = "0";
  controlBox.style.display = "flex";
  controlBox.style.justifyContent = "end";
  controlBox.style.gap = "20px";
  updateIcon.style.padding = "15px";

  updateIcon.style.color = firstColor;
  deleteIcon.style.color = dangerColor;

  for (let icon of [updateIcon, deleteIcon]) {
    icon.style.fontSize = "20px";
    icon.style.padding = "15px";
    icon.style.borderRadius = "50%";
    icon.style.cursor = "pointer";
    controlBox.appendChild(icon);
  }

  updateIcon.addEventListener("mouseover", () => {
    updateIcon.style.backgroundColor = firstColor;
    updateIcon.style.color = secondaryColor;
  });
  updateIcon.addEventListener("mouseleave", () => {
    updateIcon.style.backgroundColor = secondaryColor;
    updateIcon.style.color = firstColor;
  });

  deleteIcon.addEventListener("mouseover", () => {
    deleteIcon.style.backgroundColor = dangerColor;
    deleteIcon.style.color = secondaryColor;
  });
  deleteIcon.addEventListener("mouseleave", () => {
    deleteIcon.style.backgroundColor = secondaryColor;
    deleteIcon.style.color = dangerColor;
  });

deleteIcon.addEventListener("click",()=>{
  dialogD.style.display="flex"
  
})

updateIcon.addEventListener("click",()=>{
  let post = getPostById(postId)
  setCurrentPost(post)
  window.location.href="../updatePost.html"
  
})

  return controlBox;
}
