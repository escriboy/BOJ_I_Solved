const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');
const cases = input.shift();

for (let k = 0; k < cases; k++) {
  const scores = input[k].split(' ').map(Number);
  scores.shift();

  scores.sort((a, b) => b - a);
  const max = scores[0];
  const min = scores[scores.length - 1];
  let gap = 0;
  for (let i = 1; i <= scores.length; i++) {
    if (gap < Math.abs(scores[i] - scores[i - 1]))
      gap = Math.abs(scores[i] - scores[i - 1]);
  }
  console.log(`Class ${k + 1}`);
  console.log(`Max ${max}, Min ${min}, Largest gap ${gap}`);
}
