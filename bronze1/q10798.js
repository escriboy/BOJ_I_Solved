const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const resultArr = [];
let maxLength = 0;

for (const string of input) {
  if (maxLength < string.length) maxLength = string.length;
}

for (const string of input) {
  for (let i = 0; i < maxLength; i++) {
    if (string[i]) {
      if (resultArr[i]) {
        resultArr[i] += string[i];
      } else {
        resultArr[i] = string[i];
      }
    }
  }
}

console.log(resultArr.join(''));
