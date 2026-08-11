const initialPosts = [
    {
      id: 0,
      authorId: 0,
      comments: [],
      createdDate: getDate(),
      title: "JavaScript",
      details:
        "JavaScript is more than just a programming language — it’s a key tool for building interactive and dynamic web applications.",
      imgURL:
        "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
    },
    {
      id: 1,
      authorId: 0,
      comments: [],
      createdDate: getDate(),
      title: "CSS",
      details:
        "CSS is what turns a simple webpage into a beautiful and responsive user interface.",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbjSCasUfrH1r_QsnRTjbvh167_4GxVRHebi3C7TZnQVQmWlGEvzB4ic&s=10",
    },
    {
      id: 2,
      authorId: 0,
      comments: [],
      createdDate: getDate(),
      title: "HTML",
      details:
        "HTML is the foundation of every website. It helps structure content and gives a webpage its basic meaning and organization.",
      imgURL:
        "https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png",
    },
  ]

const initialUsers = [{
  id:0,
  email:"postly@gmail.com",
  favorites:[],
  fullname:"Postly",
  password:"postly"
}]
export function generateId() {
  return Date.now();
}

export function getUsers() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
}

export function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
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
  sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
}

export function getCurrentUser() {
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser")) || null;
  return currentUser;
}

export function isSignIn() {
  return getCurrentUser() != null;
}

export function setPosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

export function getPosts() {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  if(posts.length==0){
    setUsers(initialUsers)
    setPosts(initialPosts)
    posts=initialPosts
  }
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
      (favId) => favId != postId,
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
  if (!currentUser) {
    return false;
  }
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
    (favId) => favId != postId,
  );
  setCurrentUser(currentUser);

  let posts = getPosts();
  posts = posts.filter((post) => post.id != postId);
  setPosts(posts);
}

export function setCurrentPost(post) {
  sessionStorage.setItem("currentPost", JSON.stringify(post));
}

export function getCurrentPost() {
  let post = JSON.parse(sessionStorage.getItem("currentPost")) || {};
  return post;
}

export function updatePost(postId, postTitle, imgURL, postDetails) {
  let posts = getPosts();
  posts = posts.map((post) => {
    if (post.id == postId) {
      post.title = postTitle;
      ((post.imgURL = imgURL), (post.details = postDetails));
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
