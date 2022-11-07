const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const games = input.slice(1);
let A = 0;
let B = 0;

for (const i of games) {
  const game = i.split(' ').map(Number);
  if (game[0] > game[1]) A += 1;
  if (game[0] < game[1]) B += 1;
}

console.log(`${A} ${B}`);
