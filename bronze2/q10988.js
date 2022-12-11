const input = require("fs").readFileSync("dev/stdin").toString().trim();

let reverse = "";

for (let i = input.length - 1; i >= 0; i--) {
  reverse += input[i];
}

console.log(reverse === input ? 1 : 0);
