console.log("EX 02");
let prompt = require("prompt-sync")({ sigint: true });
const EventEmiiter = require("events");

const study = new EventEmiiter();
study.on("1", () => {
  console.log("student is studying English!!");
});
study.on("2", () => {
  console.log("student is studying physics!!");
});
study.on("3", () => {
  console.log("student is studying information technology!!");
});
const student = {
  event: study,
};
console.log("choose : ");
console.log("1. English  ");
console.log("2. Physics  ");
console.log("3. Information Technology  ");
let choice = prompt("choice : ");

student.event.emit(choice);
