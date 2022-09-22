const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map(x => +x);

input.sort((a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});

console.log(`${input[0]} ${input[1]} ${input[2]}`);
