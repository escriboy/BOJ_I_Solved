const input = require('fs').readFileSync('dev/stdin').toString().trim();

const N = +input;

const result = N % 2 === 0 ? 'CY' : 'SK';

console.log(result);
