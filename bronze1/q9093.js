const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();

for (const string of input) {
  const words = string.split(' ');
  let wordArr = [];
  for (const word of words) {
    wordArr.push(reversedStr(word));
  }
  console.log(wordArr.join(' '));
}

function reversedStr(str) {
  const splitString = str.split('');
  const reverseArr = splitString.reverse();
  return reverseArr.join('');
}
