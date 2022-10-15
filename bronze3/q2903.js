const N = +require('fs').readFileSync('dev/stdin').toString().trim();

let num = 2;
let dotArr = [];

for (let i = 0; i <= N; i++) {
  let dots = num * num;
  dotArr.push(dots);
  num = num + (num - 1);
}

console.log(dotArr[N]);
