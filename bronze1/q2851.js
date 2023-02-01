const input = require('fs').readFileSync('dev/stdin').toString().trim();

const N = input.length;
let happy = 0;
let sad = 0;

for (let i = 0; i < N; i++) {
  if (input[i] === ':' && input[i + 1] === '-') {
    if (input[i + 2] === '(') {
      sad++;
    } else if (input[i + 2] === ')') {
      happy++;
    }
  }
}

happy === 0 && sad === 0 && console.log('none');
happy > sad && console.log('happy');
happy < sad && console.log('sad');
happy !== 0 && sad !== 0 && happy === sad && console.log('unsure');
