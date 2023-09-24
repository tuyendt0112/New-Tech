import express from "express";
import configViewEngine from "./viewEngine";

const app = express();
const port = 8080;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.send(`I'm Jezztom!`);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
