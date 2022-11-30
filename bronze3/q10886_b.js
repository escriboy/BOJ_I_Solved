const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let cute = 0;
let not_cute = 0;

for (let i = 1; i <= input[0]; i++) {
  input[i] === 1 ? (cute += 1) : (not_cute += 1);
}

cute > not_cute
  ? console.log("Junhee is cute!")
  : console.log("Junhee is not cute!");
