const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let testCase;

for (let i = 0; i < input.length; i++) {
  testCase = input[i].split(' ').map(x => Number(x));
  if (testCase[0] !== 0) {
    if (testCase[0] > testCase[1]) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
}
