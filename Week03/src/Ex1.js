// node .\Ex1.js + 2 3
const operator = process.argv[2];
const a = parseFloat(process.argv[3]);
const b = parseFloat(process.argv[4]);

let result;

switch (
  operator // switch case operator +,-,*,/
) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if (b !== 0) {
      result = a / b;
    } else {
      console.log("b must be > 0");
      process.exit(1);
    }
    break;
  default:
    console.log("Invalid operator");
    process.exit(1);
}
console.log("Result = " + result);
