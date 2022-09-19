// not solved

const alphabet = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .toLocaleLowerCase();
// 1. 알파벳을 소문자로 바꾸어 입력값을 받는다.

/*
for (let i = 97; i <= 122; i++) {
  let count = 0;
  let searchChar = String.fromCharCode(i);
  let pos = alphabet.indexOf(searchChar);

  while(pos !== -1) {
    count++;
    pos = alphabet.indexOf(searchChar, pos + 1);
  }
}
*/

function findeMaxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }

    console.log(maxChar);
  }
}
findeMaxChar(alphabet);
