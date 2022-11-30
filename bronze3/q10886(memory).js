const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const surveys = input.slice(1);
let cute = 0;
let not_cute = 0;
let result = "";

for (const survey of surveys) {
  survey === 1 ? (cute += 1) : (not_cute += 1);
}

result = cute > not_cute ? "cute" : "not cute";

console.log(`Junhee is ${result}!`);
