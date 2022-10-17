const N = +require('fs').readFileSync('dev/stdin').toString().trim();

let result = 0;
for (let i = 0; i <= N; i++) {
  for (let j = i; j <= N; j++) {
    result += i + j;
  }
}

console.log(result);
