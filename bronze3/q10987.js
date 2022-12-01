const input = require("fs").readFileSync("dev/stdin").toString().trim();
let sum = 0;
for (let i = 0; i < input.length; i++) {
  input[i] === "a" ||
  input[i] === "e" ||
  input[i] === "i" ||
  input[i] === "o" ||
  input[i] === "u"
    ? (sum += 1)
    : sum;
}
console.log(sum);
