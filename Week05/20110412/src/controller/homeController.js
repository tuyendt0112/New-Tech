import Handlebars from "handlebars";
import myListPost from "../models/myListPost";
let posts = myListPost;
let getBlog = (req, res) => {
  return res.render("index", { posts });
};
let postBlog = (req, res) => {
  let newPost = req.body;
  newPost.id = Math.floor(Math.random() * 1001);
  posts.push(newPost);
  return res.render("index", { posts });
};
let getDetailPost = (req, res) => {
  const postId = req.params.id;

  const post = posts.find((post) => post.id == postId);

  if (post) {
    return res.render("detail", { post });
  } else {
    return res.send("This Post Doesn't Exist");
  }
};
let deletePost = (req, res) => {
  const postId = req.body.id;
  const postCurrent = posts.filter(
    (post) => Number(post.id) !== Number(postId)
  );
  posts = postCurrent;
  return res.redirect("/");
};
let editPost = (req, res) => {
  const postId = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  const post = posts.find((post) => Number(post.id) == Number(postId));
  post.title = title;
  post.content = content;
  return res.redirect("/");
};
let getEditBlog = (req, res) => {
  const postId = req.params.id;
  const post = posts.find((post) => post.id == postId);
  return res.render("edit", { post });
};
let postComment = (req, res) => {
  const postId = req.params.id;
  let newComment = req.body;
  const post = posts.find((post) => Number(post.id) == Number(postId));
  post.comments.push(newComment);
  return res.redirect(`/post/${postId}`);
};
module.exports = {
  getBlog,
  postBlog,
  getDetailPost,
  deletePost,
  editPost,
  getEditBlog,
  postComment,
};
