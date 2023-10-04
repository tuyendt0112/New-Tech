import express from "express";
import Handlebars from "handlebars";
const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "hbs");
  app.set("views", "./src/views");
};

export default configViewEngine;
