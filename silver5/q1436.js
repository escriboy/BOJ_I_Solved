const input = require('fs').readFileSync('dev/stdin').toString().trim();

let count = 0;
let num = 666;

while (count !== +input) {
  const numToString = num.toString();
  if (numToString.includes('666')) {
    count++;
  }
  num++;
}
console.log(num - 1);
