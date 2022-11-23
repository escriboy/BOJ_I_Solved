const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i <= input.length; i += 2) {
  let sum = 0;
  if (input.slice(i + 1, i + 2).length > 0) {
    const arr = input.slice(i + 1, i + 2);
    const numArr = arr[0].split(' ').map(Number);
    for (const j of numArr) {
      sum += j;
    }
    console.log(sum);
  }
}
