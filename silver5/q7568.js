const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const num = input.shift();

const info = input.map((el) => el.split(' ').map(Number));
const rank = [];

for (let i = 0; i < num; i++) {
  let count = 0;
  for (let j = 0; j < num; j++) {
    if (i !== j) {
      info[i][0] < info[j][0] && info[i][1] < info[j][1] && count++;
    }
  }
  rank.push(count + 1);
}

console.log(rank.join(' '));
