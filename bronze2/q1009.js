const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const arr = input.slice(1);

const result = arr.map(el => {
  const [a, b] = el.split(' ');

  let pow = 1;

  for (let j = 0; j < b; j++) {
    pow = (pow * a) % 10;
  }

  return pow === 0 ? 10 : pow;
});

console.log(result.join('\n'));

// for (const i of arr) {
//   const newArr = i.split(' ').map(Number);
//   let init = newArr[0];

//   for (let i = 1; i < newArr[1]; i++) {
//     const mul = (init * newArr[0]) % 10;
//     init = mul === 0 ? 10 : mul;
//   }
//   console.log(init);
// }
