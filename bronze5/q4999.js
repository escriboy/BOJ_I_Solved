const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

if (input[0].length >= input[1].length) {
  console.log('go');
} else if (input[0].length < input[1].length) {
  console.log('no');
}
