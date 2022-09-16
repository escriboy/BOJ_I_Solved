const S = require('fs').readFileSync('dev/stdin').toString().trim();

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

let number = '';

for (let i = 0; i < alphabet.length; i++) {
  number += S.indexOf(alphabet[i]) + ' ';
}

console.log(number);
