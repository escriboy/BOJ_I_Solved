const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();

for (let i = 0; i < N; i++) {
  const sentence = input[i].split(' ');
  let reverse = '';
  for (let j = sentence.length - 1; j >= 0; j--) {
    reverse += sentence[j] + ' ';
  }
  console.log(`Case #${i + 1}: ${reverse}`);
}
