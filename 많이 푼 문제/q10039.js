const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((x) => Number(x));
