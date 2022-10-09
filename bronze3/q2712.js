const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i <= +input[0]; i++) {
  const krStyle = input[i].split(' ');
  let number = +krStyle[0];
  let name = krStyle[1];
  switch (name) {
    case 'kg':
      console.log(`${(number * 2.2046).toFixed(4)} lb`);
      break;
    case 'lb':
      console.log(`${(number * 0.4536).toFixed(4)} kg`);
      break;
    case 'l':
      console.log(`${(number * 0.2642).toFixed(4)} g`);
      break;
    case 'g':
      console.log(`${(number * 3.7854).toFixed(4)} l`);
      break;
  }
}
