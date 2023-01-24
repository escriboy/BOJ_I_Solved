const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const cards = new Set(input[1].split(' ').map(Number));
const M = +input[2];
const test = input[3].split(' ').map(Number);
let result = [];

for (let i = 0; i < M; i++) {
  cards.has(test[i]) ? result.push(1) : result.push(0);
}

console.log(result.join(' '));

// const a = `5
// 6 3 2 10 -10
// 8
// 10 9 -5 2 3 4 5 -10`;
//
// const input = a.split('\n');
