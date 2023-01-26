const input = require('fs').readFileSync('dev/stdin').toString().trim();

const N = input.split('');
const zeroToNine = [];
let max = 0;

for (let i = 0; i < 10; i++) {
  let count = N.filter((el) => i + '' === el).length;
  zeroToNine.push(count);
}

for (let i = 0; i < zeroToNine.length; i++) {
  if (i !== 6 && i !== 9 && zeroToNine[i] >= 2) {
    if (max < zeroToNine[i]) max = zeroToNine[i];
  }
}

const numSixAndNine = Math.ceil((zeroToNine[6] + zeroToNine[9]) / 2);

if (max > 0 || numSixAndNine > 0) {
  max > numSixAndNine ? console.log(max) : console.log(numSixAndNine);
} else {
  console.log(1);
}
