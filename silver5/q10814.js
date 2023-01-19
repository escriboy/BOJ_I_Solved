const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let result = '';
const members = input.slice(1).map((member) => member.split(' '));

members
  .sort((a, b) => a[0] - b[0])
  .forEach((member) => {
    result += `${member[0]} ${member[1]}\n`;
  });

console.log(result);
