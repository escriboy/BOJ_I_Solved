const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sortedInput = input.sort((a, b) => b - a);
const sequenceArr = [];
for (let i = 0; i < sortedInput.length - 1; i++) {
  sequenceArr.push(sortedInput[i] - sortedInput[i + 1]);
}

if (sequenceArr[0] === sequenceArr[1])
  console.log(sortedInput[2] + (sortedInput[1] - sortedInput[0]));

if (sequenceArr[0] > sequenceArr[1])
  console.log(sortedInput[0] - (sortedInput[1] - sortedInput[2]));

if (sequenceArr[0] < sequenceArr[1])
  console.log(sortedInput[1] - (sortedInput[0] - sortedInput[1]));
