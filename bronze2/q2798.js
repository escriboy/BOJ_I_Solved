const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const rules = input[0].split(" ").map(Number);
const maxNumber = rules[1];
const cards = input[1].split(" ").map(Number);
let sum = 0;
let max = 0;
for (let i = 0; i < rules[0] - 2; i++) {
  for (let j = i + 1; j < rules[0] - 1; j++) {
    for (let k = j + 1; k < rules[0]; k++) {
      sum = cards[i] + cards[j] + cards[k];
      if (max < sum && sum <= maxNumber) max = sum;
    }
  }
}
console.log(max);

/*
 * for문을 돌면서 수를 계속 더해준다.
 * 같은 수를 더하면 안 된다.
 * */
