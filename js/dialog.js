import { borderColor } from "./colors.js";
import { deletePostById, getCurrentUser, getNumberOfPostsCreatedByUser } from "./main.js";

export function dialogDelete(postId,authorId) {
  let boxBigDialog = document.createElement("div");
  let dialog = document.createElement("div");
  let dialogMessage = document.createElement("p");
  let dialogAction = document.createElement("div");
  let cancelButton = document.createElement("button");
  let deleteButton = document.createElement("button");



  dialogMessage.innerHTML = "Are you sure you want to delete the post?";
  dialog.appendChild(dialogMessage);
  dialog.appendChild(document.createElement("hr"))

  cancelButton.innerHTML = "Cancel";
  deleteButton.innerHTML = "Delete";
  dialogAction.appendChild(cancelButton);
  dialogAction.appendChild(deleteButton);
  dialog.appendChild(dialogAction);

  boxBigDialog.appendChild(dialog);

  boxBigDialog.style.width = "100%";
  boxBigDialog.style.height = "100%";
  boxBigDialog.style.display = "flex";
  boxBigDialog.style.justifyContent = "center";
  boxBigDialog.style.alignItems = "center";
  boxBigDialog.style.backgroundColor = "#ffffff60";
  boxBigDialog.style.position = "fixed";
  boxBigDialog.style.top = "0";
  boxBigDialog.style.left = "0";
  boxBigDialog.style.zIndex = 100;

  dialog.style.display = "flex";
  dialog.style.flexDirection = "column";
  dialog.style.padding = "50px";
  dialog.style.backgroundColor = "#fff";
  dialog.style.justifyContent = "space-between";
  dialog.style.borderRadius = "25px";
  dialog.style.border=`2px solid ${borderColor}`
  dialog.style.gap="25px"

  dialogMessage.style.color = "#dc3545";


  dialogAction.style.alignSelf = "end";
  dialogAction.style.display="flex"
  dialogAction.style.gap="10px"

  for (let button of [cancelButton, deleteButton]) {
    button.style.padding = "15px";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#fff";
  }

  cancelButton.style.color = "#166fe5";
  cancelButton.style.border = "1px solid #166fe5";

  deleteButton.style.color = "#dc3545";
  deleteButton.style.border = "1px solid #dc3545";

  cancelButton.addEventListener("mouseover", () => {
    cancelButton.style.color = "#fff";
    cancelButton.style.backgroundColor = "#166fe5";
  });

  cancelButton.addEventListener("mouseleave", () => {
    cancelButton.style.color = "#166fe5";
    cancelButton.style.backgroundColor = "#fff";
  });

  deleteButton.addEventListener("mouseover", () => {
    deleteButton.style.color = "#fff";
    deleteButton.style.backgroundColor = "#dc3545";
  });

  deleteButton.addEventListener("mouseleave", () => {
    deleteButton.style.color = "#dc3545";
    deleteButton.style.backgroundColor = "#fff";
  });

  cancelButton.addEventListener("click",()=>{
    boxBigDialog.style.display="none"
  })

  deleteButton.addEventListener("click",()=>{
    if(getNumberOfPostsCreatedByUser(authorId)==1){
      document.getElementById("emptyMessageProfile").style.display="block"
    }
    deletePostById(postId,authorId)
    boxBigDialog.style.display="none"
    document.getElementById(postId).style.display="none"
    let currentUser=getCurrentUser()
    document.getElementById("numberOfPosts").innerHTML=`${getNumberOfPostsCreatedByUser(
      currentUser.id
    )} Posts`
  })

  return boxBigDialog;
}
