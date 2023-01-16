const word = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .toLowerCase();

const alphabet = new Array(26).fill(0);
for (let i = 0; i < word.length; i++) {
  alphabet[word.charCodeAt(i) - 97]++;
}

const max = Math.max(...alphabet);
const index = alphabet.indexOf(max);

let isSame = false;

// 최대값이 두 개 이상인지를 확인
for (let i = 0; i < 26; i++) {
  if (alphabet[i] === max && index !== i) {
    isSame = true;
    break;
  }
}

console.log(isSame ? '?' : String.fromCharCode(index + 65));
