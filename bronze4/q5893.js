const input = require('fs').readFileSync('dev/stdin').toString().trim();

const num = '0b' + input;
const result = (BigInt(num) * 17n).toString(2);
console.log(result);
