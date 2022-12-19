const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const cases = input.slice(1);
for (const num of cases) {
  let count = 0;
  let arr = [];
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i * j <= num) arr.push(i * j);
    }
  }
  for (let i = 1; i <= num; i++) {
    if (arr.filter((el) => i === el).length % 2 !== 0) count++;
  }
  console.log(count);
}
