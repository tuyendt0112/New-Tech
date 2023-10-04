import Handlebars from "handlebars";
import myListPost from "../models/myListPost";
let posts = myListPost;
let getBlog = (req, res) => {
  return res.render("index", { posts });
};
let postBlog = (req, res) => {
  console.log(">>>>>>>>>", req.body);

  // const posts = myListPost;
  // let id = Math.floor(Math.random() * 1001);
  let newPost = req.body;
  newPost.id = Math.floor(Math.random() * 1001);
  posts.push(newPost);
  console.log(newPost);
  return res.render("index", { posts });
};
let getDetailPost = (req, res) => {
  const postId = req.params.id;
  console.log("id detail>>>>>>>>>>>>", postId);
  // const posts = myListPost;
  // console.log("list>>>>", posts);
  const post = posts.find((post) => post.id == postId);
  // console.log(">>>>", post);
  if (post) {
    return res.render("detail", { post });
  } else {
    return res.send("Bài viết không tồn tại");
  }
};
let deletePost = (req, res) => {
  // let posts = myListPost;
  const postId = req.body.id;
  console.log("id delete>>>>>>>>>>>>", postId);

  const postCurrent = posts.filter(
    (post) => Number(post.id) !== Number(postId)
  );

  console.log("result >>>>", postCurrent);
  posts = postCurrent;
  return res.redirect("/");
};
let editPost = (req, res) => {
  const postId = req.params.id;
  console.log("id edit>>>>>>>>>>>>", postId);
  const title = req.body.title;
  const content = req.body.content;
  const post = posts.find((post) => Number(post.id) == Number(postId));
  post.title = title;
  post.content = content;
  console.log("result >>>>", post);
  // posts = postCurrent;
  return res.redirect("/");
};
let getEditBlog = (req, res) => {
  const postId = req.params.id;
  const post = posts.find((post) => post.id == postId);

  return res.render("edit", { post });
};
module.exports = {
  getBlog,
  postBlog,
  getDetailPost,
  deletePost,
  editPost,
  getEditBlog,
};
