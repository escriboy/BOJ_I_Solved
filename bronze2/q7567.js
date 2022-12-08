const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("");

let height = 10;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] === input[i + 1]) {
    height += 5;
  } else {
    height += 10;
  }
}

console.log(height);

// const plates = input.slice(1);

// 바닥에 놓을 때 : 10cm
// 포갤 때 : 5cm
// 반대방향으로 쌓이면 : 10cm
