// import { argv } from "process";
console.log("EX 01");
let prompt = require("prompt-sync")({ sigint: true });

// const calculation = process.argv[2];
const calculation = prompt("calculation : ");
const num1 = prompt("Number 1 : ");
const num2 = prompt("Number 2 : ");
let result = 0;
if (calculation === "+") {
  result = Number(num1) + Number(num2);
} else if (calculation === "-") {
  result = Number(num1) - Number(num2);
} else if (calculation === "*") {
  result = Number(num1) * Number(num2);
} else if (calculation === "/") {
  result = Number(num1) / Number(num2);
}
console.log(`result : ${num1} ${calculation} ${num2} = ${result}`);
