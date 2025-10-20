import {
  getUserById,
  getNumbersOfLikeByPostId,
  addLikeFunction,
  isLikeIt,
  addNewComment,
  setCurrentPost,
  getFavoritePosts,
} from "./main.js";

import { controlBoxPost } from "./controlBoxPost.js";

export function getPostCard(post) {
  let postCard = document.createElement("div");
  let postTopBox = document.createElement("div");
  let postCenterBox = document.createElement("div");
  let postBottomBox = document.createElement("div");
  let postActions = document.createElement("div");
  let postTopBoxLeftBox = document.createElement("div");
  let postTopBoxRightBox = document.createElement("div");
  let postTopBoxLeftBoxIcon = document.createElement("h4");
  let postUsername = document.createElement("h4");
  let postDate = document.createElement("p");
  let postImg = document.createElement("img");
  let postTitle = document.createElement("h3");
  let postDetails = document.createElement("p");
  let postAddLikeBox = document.createElement("div");
  let postAddCommentBox = document.createElement("div");
  let postAddLikeIcon = document.createElement("i");
  let postAddLikeNumbers = document.createElement("span");
  let postAddCommentsIcon = document.createElement("i");
  let postAddCommentNumbers = document.createElement("span");
  let postParentComments = document.createElement("div");
  let postCommentsBox = document.createElement("div");
  let postSendCommentBox = document.createElement("div");
  let postCommentTextarea = document.createElement("textarea");
  let postCommentSendButton = document.createElement("button");

  const currentPage = window.location.pathname.split("/").pop();
  let postControlBox = controlBoxPost(post.id, post.authorId);
  postControlBox.style.display =
    currentPage != "profile.html" ? "none" : "flex";
  postCard.appendChild(postControlBox);

  postUsername.innerHTML = getUserById(post.authorId).fullname;
  postDate.innerHTML = post.createdDate;
  postTopBoxLeftBoxIcon.innerHTML = getUserById(post.authorId).fullname[0];

  postTopBoxLeftBox.appendChild(postTopBoxLeftBoxIcon);
  postTopBoxRightBox.appendChild(postUsername);
  postTopBoxRightBox.appendChild(postDate);

  postTopBox.appendChild(postTopBoxLeftBox);
  postTopBox.appendChild(postTopBoxRightBox);

  postImg.src = post.imgURL;
  postCenterBox.appendChild(postImg);

  postTitle.innerHTML = post.title;
  postDetails.innerHTML = post.details;

  postBottomBox.appendChild(postTitle);
  postBottomBox.appendChild(postDetails);

  postAddLikeIcon.classList.add(
    isLikeIt(post.id) ? "fa-solid" : "fa-regular",
    "fa-heart"
  );
  postAddLikeIcon.style.color = isLikeIt(post.id) ? "#dc3545" : "#000";

  postAddLikeNumbers.innerHTML = getNumbersOfLikeByPostId(post.id);
  postAddLikeBox.appendChild(postAddLikeIcon);
  postAddLikeBox.appendChild(postAddLikeNumbers);

  postAddCommentsIcon.classList.add("fa-regular", "fa-comment");
  postAddCommentNumbers.innerHTML = post.comments.length;
  postAddCommentBox.appendChild(postAddCommentsIcon);
  postAddCommentBox.appendChild(postAddCommentNumbers);

  postActions.appendChild(postAddLikeBox);
  postActions.appendChild(postAddCommentBox);

  postParentComments.appendChild(postCommentsBox);
  postParentComments.appendChild(postSendCommentBox);
  postSendCommentBox.appendChild(postCommentTextarea);
  postSendCommentBox.appendChild(postCommentSendButton);

  postCommentSendButton.innerHTML = "Send";
  postCommentTextarea.placeholder = "Add a comment ...";
  postCommentTextarea.style.padding = "15px";
  postCommentTextarea.style.borderRadius = "15px";
  postCommentTextarea.style.width = "60%";
  postCommentSendButton.style.padding = "15px";
  postSendCommentBox.style.display = "flex";
  postSendCommentBox.style.justifyContent = "center";
  postSendCommentBox.style.gap = "10px";
  postCommentSendButton.style.borderRadius = "15px";
  postCommentSendButton.style.backgroundColor = "#166fe5";
  postCommentSendButton.style.color = "#fff";
  postCommentSendButton.style.fontSize = "20px";
  postCommentSendButton.style.border = "none";
  postCommentsBox.style.display = "flex";
  postCommentsBox.style.alignItems = "center";
  postCommentsBox.style.flexDirection = "column";
  postCommentsBox.style.gap = "15px";
  postCommentsBox.style.marginBottom = "15px";

  postCard.appendChild(postTopBox);
  postCard.appendChild(postCenterBox);
  postCard.appendChild(postBottomBox);
  postCard.appendChild(postActions);
  postCard.appendChild(postParentComments);

  postCard.style.width = "450px";
  postCard.style.height = "fit-content";
  postCard.style.boxShadow = "0 4px 20px hsl(262 83% 58% / .1)";

  postCenterBox.style.overflow = "hidden";
  postCenterBox.style.width = "100%";
  postCenterBox.style.display = post.imgURL == "" ? "none" : "block";
  postImg.style.width = "100%";
  postImg.style.aspectRatio = "1/1";
  postImg.style.objectFit = "cover";
  postImg.style.transition = "transform 0.4s ease";

  postCard.style.backgroundColor = "#fff";
  postCard.style.margin = "15px 15px";
  postCard.style.borderRadius = "15px";

  for (let box of [
    postTopBox,
    postBottomBox,
    postActions,
    postParentComments,
  ]) {
    box.style.padding = "20px 20px";
  }

  postTopBox.style.paddingTop = currentPage != "profile.html" ? "20px" : "0px";

  postTopBox.style.display = "flex";
  postTopBox.style.alignItems = "center";
  postTopBox.style.gap = "25px";

  postTopBoxLeftBox.style.width = "50px";
  postTopBoxLeftBox.style.height = "50px";
  postTopBoxLeftBox.style.borderRadius = "50%";
  postTopBoxLeftBox.style.backgroundColor = "#166fe5";
  postTopBoxLeftBox.style.display = "flex";
  postTopBoxLeftBox.style.justifyContent = "center";
  postTopBoxLeftBox.style.alignItems = "center";
  postTopBoxLeftBox.style.color = "#fff";

  postUsername.style.marginBottom = "5px";
  postUsername.style.fontSize = "16px";

  postDate.style.color = "#71717A";

  postTitle.style.marginBottom = "10px";
  postTitle.style.fontSize = "20px";

  postDetails.style.color = "#71717A";

  postActions.style.display = "flex";
  postActions.style.alignItems = "center";
  postActions.style.gap = "15px";

  for (let box of [postAddCommentBox, postAddLikeBox]) {
    box.style.padding = "15px";
    box.style.display = "flex";
    box.style.gap = "15px";
    box.style.alignItems = "center";
    box.style.borderRadius = "15px";
    box.style.transition = "all 0.4s ease";

    // add hover effect
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "#166fe5";
      box.style.color = "#fff";
    });
    box.addEventListener("mouseleave", () => {
      box.style.backgroundColor = "#fff";
      box.style.color = "#000";
    });
  }

  // Hover part
  postImg.addEventListener("mouseover", () => {
    postImg.style.transform = "scale(1.2)";
  });
  postImg.addEventListener("mouseleave", () => {
    postImg.style.transform = "scale(1)";
  });

  // Add to love
  postAddLikeBox.addEventListener("click", () => {
    addLikeFunction(post.id);
    postAddLikeNumbers.innerHTML = getNumbersOfLikeByPostId(post.id);
    postAddLikeIcon.classList.remove("fa-solid", "fa-regular");
    postAddLikeIcon.classList.add(
      isLikeIt(post.id) ? "fa-solid" : "fa-regular",
      "fa-heart"
    );
    postAddLikeIcon.style.color = isLikeIt(post.id) ? "#dc3545" : "#000";
    postCard.style.display =
      currentPage == "favorites.html" && !isLikeIt(post.id) ? "none" : "block";
        if(currentPage=="favorites.html"&&getFavoritePosts().length==0){
            document.getElementById("emptyMessageProfile").style.display="block"
          }
  });

  for (let comment of post.comments) {
    let boxComment = getBoxComment(comment);
    postCommentsBox.appendChild(boxComment);
  }

  // Add a comment
  postCommentSendButton.disabled = true;
  postCommentSendButton.style.backgroundColor = postCommentSendButton.disabled
    ? "#71717A"
    : "#166fe5";
  let showComments = false;
  postParentComments.style.display = "none";
  postAddCommentBox.addEventListener("click", () => {
    if (currentPage != "post.html") {
      setCurrentPost(post);
      window.location.href = "../post.html";
    } else {
      showComments = !showComments;
      postParentComments.style.display = showComments ? "block" : "none";
    }
  });
  let commentContent = postCommentTextarea.value;
  postCommentTextarea.addEventListener("change", () => {
    commentContent = postCommentTextarea.value;
    postCommentSendButton.disabled = commentContent ? false : true;
    postCommentSendButton.style.backgroundColor = postCommentSendButton.disabled
      ? "#71717A"
      : "#166fe5";
  });
  postCommentSendButton.addEventListener("click", () => {
    commentContent = postCommentTextarea.value;
    let boxComment = getBoxComment(addNewComment(commentContent, post.id));
    postCommentsBox.appendChild(boxComment);
    postCommentTextarea.value = "";
    commentContent = postCommentTextarea.value;
    postCommentSendButton.disabled = commentContent ? false : true;
    postCommentSendButton.style.backgroundColor = postCommentSendButton.disabled
      ? "#71717A"
      : "#166fe5";
    postAddCommentNumbers.innerHTML = post.comments.length + 1;
  });

  const mediaQuery = window.matchMedia("(max-width: 900px)");

  function handleScreenChange(e) {
    if (e.matches) {
      postCard.style.width = "80%";
    } else {
      postCard.style.width = "450px";
    }
  }

  mediaQuery.addEventListener("change", handleScreenChange);

  return postCard;
}

function getBoxComment(comment) {
  let boxComment = document.createElement("div");
  let authorName = document.createElement("h5");
  let contentComment = document.createElement("p");

  authorName.innerHTML = getUserById(comment.authorId).fullname;
  contentComment.innerHTML = comment.commentContent;

  boxComment.style.backgroundColor = "#f2f4f7";
  boxComment.style.borderRadius = "25px";
  boxComment.style.width = "80%";
  boxComment.style.padding = "25px";

  authorName.style.marginBottom = "5px";
  contentComment.style.color = "#71717A";

  boxComment.appendChild(authorName);
  boxComment.appendChild(contentComment);
  return boxComment;
}
