const input = require('fs').readFileSync('dev/stdin').toString().trim();

const [number, base] = input.split(' ').map(Number);

console.log(number.toString(base).toUpperCase());
