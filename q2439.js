const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().split(' ');

let num = +input[0];
let result = '';

for (let i = 1; i <= num; i++) {
  for (let j = num; j > i; j--) {
    result += ' ';
  }
  for (let k = 0; k < i; k++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);
