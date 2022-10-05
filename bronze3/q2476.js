const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
let result = [];

for (let i = 1; i <= N; i++) {
  let dice = input[i].split(' ').map(Number);

  if (dice[0] === dice[1] && dice[0] === dice[2]) {
    result.push(10000 + dice[0] * 1000);
  } else if (dice[0] === dice[1] || dice[0] === dice[2]) {
    result.push(1000 + dice[0] * 100);
  } else if (dice[1] === dice[2]) {
    result.push(1000 + dice[1] * 100);
  } else {
    dice.sort((a, b) => b - a);
    result.push(dice[0] * 100);
  }
}

result.sort((a, b) => b - a);

console.log(result[0]);
