const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

const num1 = +(input[0] + input[1]);
const num2 = +(input[2] + input[3]);

console.log(num1 + num2);
