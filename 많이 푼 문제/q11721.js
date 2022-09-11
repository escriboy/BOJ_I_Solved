const input = require('fs').readFileSync('dev/stdin').toString().trim();

input.substring(0, 10);

for (let i = 0; i < input.length; i += 10) {
  console.log(input.slice(i, i + 10)); // 0, 10 / 10, 10 + 10 / 20, 20 + 10
}
