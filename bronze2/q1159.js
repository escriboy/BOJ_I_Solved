const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const names = input.slice(1);
const letters = [];
let result = '';

for (const name of names) {
  const letter = name[0];
  letters.push(letter);
}

for (let i = 97; i < 123; i++) {
  let count = letters.filter(el => el === String.fromCharCode(i)).length;
  if (count >= 5) {
    result += String.fromCharCode(i);
  }
}

result === '' ? console.log('PREDAJA') : console.log(result);
