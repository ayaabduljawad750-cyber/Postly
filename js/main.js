export function generateId() {
  return Date.now();
}

export function getUsers() {
  let users = JSON.parse(localStorage.getItem("usersPostly")) || [];
  return users;
}

export function setUsers(users) {
  localStorage.setItem("usersPostly", JSON.stringify(users));
}

export function isEmailExists(email) {
  let users = getUsers();
  let isExist = false;
  for (let user of users) {
    if (user.email == email) isExist = true;
  }
  return isExist;
}

export function getUserById(userId) {
  let users = getUsers();
  let user = users.find((u) => u.id == userId) || null;
  return user;
}

export function setCurrentUser(currentUser) {
  sessionStorage.setItem("currentUserPostly", JSON.stringify(currentUser));
}

export function getCurrentUser() {
  let currentUser =
    JSON.parse(sessionStorage.getItem("currentUserPostly")) || {};
  return currentUser;
}

export function setPosts(posts) {
  localStorage.setItem("postsPostly", JSON.stringify(posts));
}

export function getPosts() {
  let posts = JSON.parse(localStorage.getItem("postsPostly")) || [];
  return posts;
}

export function getNumbersOfLikeByPostId(postId) {
  let numberOfLikes = 0;
  let users = getUsers();
  for (let user of users) {
    user.favorites.map((FavoriteIdPost) => {
      if (FavoriteIdPost == postId) {
        numberOfLikes++;
      }
    });
  }
  return numberOfLikes;
}

export function addNewPost(title, imgURL, details) {
  let newPost = {
    id: generateId(),
    authorId: getCurrentUser().id,
    comments: [],
    createdDate: getDate(),
    details,
    title,
    imgURL,
  };
  let posts = getPosts();
  posts.push(newPost);
  setPosts(posts);
}

function getDate() {
  return new Date().toLocaleDateString();
}

export function addLikeFunction(postId) {
  let currentUser = getCurrentUser();
  let isThere = isLikeIt(postId);
  if (isThere) {
    currentUser.favorites = currentUser.favorites.filter(
      (favId) => favId != postId
    );
  } else {
    currentUser.favorites.push(postId);
  }
  let users = getUsers();
  users = users.map((user) => {
    if (user.id == currentUser.id) {
      return currentUser;
    }
    return user;
  });
  setCurrentUser(currentUser);
  setUsers(users);
}

export function isLikeIt(postId) {
  let currentUser = getCurrentUser();
  let isThere = false;
  for (let favId of currentUser.favorites) {
    if (favId == postId) {
      isThere = true;
      break;
    }
  }
  return isThere;
}

export function addNewComment(commentContent, postId) {
  let newComment = {
    id: generateId(),
    authorId: getCurrentUser().id,
    commentContent,
  };
  let posts = getPosts();
  posts = posts.map((post) => {
    if (post.id == postId) {
      post.comments.push(newComment);
    }
    return post;
  });
  setPosts(posts);
  return newComment;
}

export function getPostsCreatedByUser(userId) {
  const allPosts = getPosts();
  let userPosts = allPosts.filter((post) => post.authorId == userId);
  return userPosts;
}

export function getNumberOfPostsCreatedByUser(userId) {
  let userPosts = getPostsCreatedByUser(userId);
  return userPosts.length;
}

export function getPostById(postId) {
  const allPosts = getPosts();
  let post = allPosts.find((p) => p.id == postId);
  return post;
}

export function deletePostById(postId) {
  let users = getUsers();
  let newUsers = users.map((user) => {
    let newUser = { ...user };
    newUser.favorites = user.favorites.filter((favId) => favId != postId);
    return newUser;
  });
  setUsers(newUsers);

  let currentUser = getCurrentUser();
  currentUser.favorites = currentUser.favorites.filter(
    (favId) => favId != postId
  );
  setCurrentUser(currentUser);

  let posts = getPosts();
  posts = posts.filter((post) => post.id != postId);
  setPosts(posts);
}

export function setCurrentPost(post) {
  sessionStorage.setItem("currentPostPostly", JSON.stringify(post));
}

export function getCurrentPost() {
  let post = JSON.parse(sessionStorage.getItem("currentPostPostly")) || {};
  return post;
}

export function updatePost(postId, postTitle, imgURL, postDetails) {
  let posts = getPosts();
  posts = posts.map((post) => {
    if (post.id == postId) {
      post.title = postTitle;
      (post.imgURL = imgURL), (post.details = postDetails);
      post.createdDate = getDate();
    }
    return post;
  });
  setPosts(posts);
}

export function getFavoritePosts() {
  let currentUser = getCurrentUser();
  let favoritePosts = [];
  for (let favId of currentUser.favorites) {
    let post = getPostById(favId);
    favoritePosts.push(post);
  }
  return favoritePosts;
}
