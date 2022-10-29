const input = require('fs').readFileSync('dev/stdin').toString().trim();

const R = +input;
const PI = Math.PI;

console.log((PI * R * R).toFixed(5));
console.log((2 * R * R).toFixed(5));
