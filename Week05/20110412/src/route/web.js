import express from "express";
import homeController from "../controller/homeController";
import Handlebars from "handlebars";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getBlog);
  router.post("/", homeController.postBlog);
  router.get("/post/:id", homeController.getDetailPost);
  router.post("/delete", homeController.deletePost);
  router.post("/edit/:id", homeController.editPost);
  router.get("/edit/:id", homeController.getEditBlog);
  router.post("/comment/:id", homeController.postComment);
  return app.use("/", router);
};
//export default initWebRoute;
export default initWebRoute;
