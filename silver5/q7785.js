const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

input.shift();

const company = new Map(input.map((el) => [el[0], el[1]]));
let result = [];

for (const key of company.keys()) {
  company.get(key) !== 'leave' && result.push(key);
}

result.sort().reverse();
console.log(result.join('\n'));
