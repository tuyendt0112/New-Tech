import Handlebars from "handlebars";
import myListPost from "../models/myListPost";
const posts = myListPost;
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
  const posts = myListPost;
  let postId = req.body.id;
  console.log("id delete>>>>>>>>>>>>", postId);

  const post = posts.filter((post) => post.id !== postId);

  console.log("result >>>>", post);
  return res.send("index");
};
module.exports = {
  getBlog,
  postBlog,
  getDetailPost,
  deletePost,
};
