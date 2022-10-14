const N = +require('fs').readFileSync('dev/stdin').toString().trim();

let num = 2;
let dotArr = [];

for (let i = 0; i <= N; i++) {
  let dots = num * num;
  dotArr.push(dots);
  num = num + (num - 1);
}

console.log(dotArr[N]);

// 이 식을 원하는 만큼만 반복하려면 어떻게 해야 할까요?

/*

2  3   5   9   17
4  9  25  81  289



*/
