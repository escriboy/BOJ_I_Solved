const input = `5
2 3 1 7 3
4 1 9 6 8
5 5 2 4 4
6 5 2 6 7
8 4 2 2 2`.split('\n');

const N = +input.shift();
const students = new Array(N);

for (let i = 0; i < N; i++) {
  students[i] = 0;
}

const info = input.map((g) => g.split(' ').map(Number));
for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < 4; j++) {
    if (info[i][j] === info[i + 1][j]) {
      students[i] += 1;
      students[i + 1] += 1;
    }
  }
}

let max = 0;

for (let i = 0; i < students.length; i++) {
  if (max < students[i]) max = i;
}

console.log(max + 1);
