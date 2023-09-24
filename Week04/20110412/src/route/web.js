import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/20110412/:id", homeController.getStudentpage);
  router.post("/20110412/:id", homeController.postStudentpage),
    router.get("/message/:id", homeController.getMessagepage);
  router.get("/message", homeController.getMessage);
  return app.use("/", router);
};
//export default initWebRoute;
export default initWebRoute;
