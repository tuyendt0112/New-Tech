console.log("EX 02");
let prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");
let filename = prompt("Filename : ");
try {
  var data = fs.readFileSync(filename, "utf8");

  console.log(data.toString());
} catch (e) {
  console.log("Error:", e.stack);
}
