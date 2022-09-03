const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString().split(' ');

const n = parseInt(inputData);
let result = 0;

for (let i = 1; i <= n; i++) {
  result += i;
}

console.log(result);
