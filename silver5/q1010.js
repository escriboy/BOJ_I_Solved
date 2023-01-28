const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const sites = input.slice(1);

const factorial = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

const result = () => {
  sites.forEach((el) => {
    const numbers = el
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    const min = numbers[0];
    const max = numbers[1];

    const answer = factorial(max) / (factorial(min) * factorial(max - min));
    console.log(parseInt(answer + 0.5));
  });
};

result();
