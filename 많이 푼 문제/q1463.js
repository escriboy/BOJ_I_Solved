// unsolved

let N = require('fs')
  .readFileSync('dev/stdin')
  .trim()
  .toString()
  .map((x) => Number(x));

let countA = 0;

while (true) {
  if (N % 3 === 0) {
    N = N / 3;
    countA++;
  } else if (N % 2 === 0) {
    N = N / 2;
    countA++;
  } else {
    N = N - 1;
    countA++;
  }
}

/**
 * 순서대로 식이 진행되는 것이 아니거나 식 순서의 모든 경우의 수를 생각한다.
 * 최단경로를 알려주는 그런 건 불가능하지 않을까 결국 모든 경우의 케이스를 적고 그 중에서...
 * a -> b -> c, a -> c -> b, b -> c -> a, c -> a -> b, c -> b -> a
 */
