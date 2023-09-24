import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
const bp = require("body-parser");
require("dotenv").config();
// var morgan = require("morgan");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bp.json());
// app.use(bp.urlencoded({ extended: true }));
app.use(express.json());
// set up view engine

configViewEngine(app);

initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
