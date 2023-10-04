import express from "express";
import homeController from "../controller/homeController";
import Handlebars from "handlebars";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getBlog);
  router.post("/", homeController.postBlog);
  router.get("/post/:id", homeController.getDetailPost);
  router.post("/delete", homeController.deletePost);

  return app.use("/", router);
};
//export default initWebRoute;
export default initWebRoute;
