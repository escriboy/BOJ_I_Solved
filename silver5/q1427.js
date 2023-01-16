const input = require('fs').readFileSync('dev/stdin').toString().trim();

const sorted = input.split('').sort((a, b) => b - a);

console.log(sorted.join(''));
