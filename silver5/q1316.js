const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const words = input.slice(1);
let count = 0;

for (const word of words) {
  const wordArr = word.split('');
  const isExists = [];
  let isGroupWord = true;
  for (let i = 0; i < wordArr.length; i++) {
    if (!isExists.includes(wordArr[i])) isExists.push(wordArr[i]);
    else {
      if (isExists.indexOf(wordArr[i]) !== isExists.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }
  isGroupWord && count++;
}

console.log(count);
