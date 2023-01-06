const input = require('fs').readFileSync('dev/stdin').toString().trim();

let number = +input;
let count = 0;

const asc = [];
const desc = [];

while (number > 0) {
  count++;
  number = number - count;
}

for (let i = 0; i < count; i++) {
  asc.push(i + 1);
  desc.push(count - i);
}

if (count % 2 === 0) {
  console.log(`${asc[number + count - 1]}/${desc[number + count - 1]}`);
} else {
  console.log(`${desc[number + count - 1]}/${asc[number + count - 1]}`);
}
