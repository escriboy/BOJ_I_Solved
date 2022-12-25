const input = require('fs').readFileSync('dev/stdin').toString().trim();

const alphabet = 'CAMBRIDGE';
let newWord = '';
for (let i = 0; i < input.length; i++) {
  if (!alphabet.includes(input[i])) {
    newWord += input[i];
  }
}
console.log(newWord);
