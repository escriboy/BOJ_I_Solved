const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const min_n = input[0];
const max_n = input[1];
const arr = [];

for (let i = 1; i <= 100; i++) {
  if (Math.pow(i, 2) >= min_n && Math.pow(i, 2) <= max_n) {
    arr.push(Math.pow(i, 2));
  }
}
if (arr.length >= 1) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  arr.sort((a, b) => a - b);
  console.log(sum);
  console.log(arr[0]);
} else {
  console.log(-1);
}
