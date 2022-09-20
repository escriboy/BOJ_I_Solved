const text = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let lowerText = [];
for (let i = 0; i < text.length; i++) {
  lowerText.push(text[i].toLocaleLowerCase());
}

const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < lowerText.length - 1; i++) {
  let count = 0;
  for (let j = 0; j < vowels.length; j++) {
    let pos = lowerText[i].indexOf(vowels[j]);

    while (pos !== -1) {
      count++;
      pos = lowerText[i].indexOf(vowels[j], pos + 1);
    }
  }
  console.log(count);
}

// for문을 text.length-1까지 돈다.
// 모음을 가진 vowels 배열을 생성하고
// 내부 for문을 돌면서 모음이 몇 개 있는지 센다. (모음 중 하나라도 있으면 => || 연산자 사용하기?)
