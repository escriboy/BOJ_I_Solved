const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .toLocaleLowerCase();

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

let number = [];

for (let i = 0; i < alphabet.length; i++) {
  number.push(input.indexOf(alphabet[i]));
}
let number2 = number.slice();
number2.sort((a, b) => b - a);

console.log(number2[0]);
console.log(number);
const max = number.indexOf(number2[0]);
console.log(max);
console.log(alphabet[15]);

/*
1) 배열 

*/
