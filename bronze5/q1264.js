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
