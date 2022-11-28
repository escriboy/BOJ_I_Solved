const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const nums = input.slice(0, -1);

for (const num of nums) {
  const arr = num.split(" ").map(Number);
  const num1 = arr[0];
  const num2 = arr[1];

  if (num1 >= num2) {
    num1 % num2 === 0 ? console.log("multiple") : console.log("neither");
  } else {
    num2 % num1 === 0 ? console.log("factor") : console.log("neither");
  }
}
