// const input = require("fs")
//   .readFileSync("dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = [
  "100 100",
  "F 10",
  "F 10",
  "E 20",
  "# 0",
  "50 30",
  "F 5",
  "E 20",
  "# 0",
  "0 0",
];

for (let i = 1; i < input.length - 1; i++) {
  console.log(input[i]);
  // const weight = input
}

// const weight = input[0].split(" ").map(Number);
//
// const idealWeight = weight[0];
// const realWeight = weight[1];

const scenario = input.slice(1, -1);
let n = 0;

/**
 * 적정 체중 * 1/2 < 실제 체중 < 적정 체중 * 2 => 행복
 * 실제 체중 < 0 => 사망
 * else 슬픔
 *
 * E 숫자 : 운동 => n분 운동한 만큼 체중 n 감소
 * F 숫자 : 먹이 => n만큼 체중 증가
 * 중간에 죽으면 이후 작용은 무시한다.
 *
 *
 * 1) 체중 주어지고 => 케이스가 주어짐 => #이 나오면 끝나고 새로운 케이스가 다시 주어짐
 * 2)
 *
 *
 */
