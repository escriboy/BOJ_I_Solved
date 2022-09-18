const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map(BigInt);

console.log(`${input[0] + input[1]}
${input[0] - input[1]}
${input[0] * input[1]}`);
