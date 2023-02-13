const input = require('fs').readFileSync('dev/stdin').toString().trim();

const words = input.split(' ');
const shortenArr = [];
for (const word of words) {
  const w = word.slice(0, 1);
  shortenArr.push(w);
}
let count = 0;

for (let i = 0; i < shortenArr.length; i++) {
  if (shortenArr[i] === 'U' && count === 0) count = 1;
  if (shortenArr[i] === 'C') {
    if (count === 1) count = 2;
    if (count === 3) {
      count = 4;
      break;
    }
  }
  if (shortenArr[i] === 'P' && count === 2) count = 3;
}

if (count === 4) console.log('I love UCPC');
else console.log('I hate UCPC');

/*
shortenArr.indexOf('U') !== -1 &&
  shortenArr.indexOf('P') !== -1 &&
  shortenArr.filter((el) => el === 'C').length >= 2
 */
