const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const num = input[0];
const sharp = '#';
const J = 'J';
let result = '';

for (let i = 1; i <= num; i++) {
  const box = input[i];

  for (let j = 0; j < box; j++) {
    for (let k = 0; k < box; k++) {
      if (j === 0 || j === box - 1 || k === 0 || k === box - 1) {
        console.log('#');
      } else {
        console.log('J');
      }
    }
    console.log('\n');
  }
  console.log('\n');
}
