const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const A = [];
const B = [];
const C = [];

const [N, M] = input.shift();
for (let i = 0; i < N; i++) {
  A.push(input.shift());
}

const [K, L] = input.shift();
for (let i = 0; i < K; i++) {
  B.push(input.shift());
}

while (B[0].length > 0) {
  const tmp = [];
  for (let i = 0; i < K; i++) {
    tmp.push(B[i].shift());
  }
  C.push(tmp);
}

const answer = [];

for (let i = 0; i < N; i++) {
  answer.push([]);
  const X = A[i];
  for (let j = 0; j < L; j++) {
    let sum = 0;
    const Y = C[j];
    for (let k = 0; k < K; k++) {
      sum += X[k] * Y[k];
    }
    answer[answer.length - 1].push(sum);
  }
}

const result = answer.map((el) => el.join(' ')).join('\n');
console.log(result);
