let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map((el) => Number(el));

for (let i = 0; i < 3; i++) {
  for (let j = i + 1; j < 3; j++) {
    if (input[i] > input[j]) {
      let temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }
  }
}

console.log(input[1]);
