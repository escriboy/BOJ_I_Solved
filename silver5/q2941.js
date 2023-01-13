const input = require('fs').readFileSync('dev/stdin').toString().trim();

const words = input.split('');
let count = 0;

while (words.length !== 0) {
  if (words[0] === 'c') {
    if (words[1] === '=') {
      count++;
      words.splice(0, 2);
    } else if (words[1] === '-') {
      count++;
      words.splice(0, 2);
    } else {
      count++;
      words.splice(0, 1);
    }
  } else if (words[0] === 'd') {
    if (words[1] === '-') {
      count++;
      words.splice(0, 2);
    } else if (words[1] === 'z' && words[2] === '=') {
      count++;
      words.splice(0, 3);
    } else {
      count++;
      words.splice(0, 1);
    }
  } else if (words[0] === 'l' && words[1] === 'j') {
    count++;
    words.splice(0, 2);
  } else if (words[0] === 'n' && words[1] === 'j') {
    count++;
    words.splice(0, 2);
  } else if (words[0] === 's' && words[1] === '=') {
    count++;
    words.splice(0, 2);
  } else if (words[0] === 'z' && words[1] === '=') {
    count++;
    words.splice(0, 2);
  } else {
    count++;
    words.splice(0, 1);
  }
}

console.log(count);

/**
 * croatia alpahbet
 * 문자 두 개에서 세 개로 이루어져 있음
 * 크로아티아 알파벳과 일반 알파벳을 분리해야 함
 *
 */

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'c') {
//     words[i + 1] === '=' && count++;
//     words[i + 1] === '-' && count++;
//   }
//   if (words[i] === 'd') {
//     words[i + 1] === '-' && count++;
//     words[i + 1] === 'z' && words[i + 2] === '=' && count++;
//   }
//   words[i] === 'l' && words[i + 1] === 'j' && count++;
//   words[i] === 'n' && words[i + 1] === 'j' && count++;
//   words[i] === 's' && words[i + 1] === '=' && count++;
//   words[i] === 'z' && words[i + 1] === '=' && count++;
// }
