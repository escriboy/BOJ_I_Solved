const N = +require('fs').readFileSync('dev/stdin').toString().trim();

let result = 0;
for (let i = 0; i <= N; i++) {
  for (let j = i; j <= N; j++) {
    result += i + j;
  }
}

console.log(result);

/*

domino => 2칸
각 칸의 점의 개수 => 세트의 크기?
세트가 N이면 점의 개수는 0~N

00, 01, 11, 02, 12, 22
=> 중복값은 제외

a * b 라고 할 때 
< N = 2일 때>
a = 0 => b = 0, 1, 2
a = 1 => b = 1, 2
a = 2 => b = 2

< N = 3일 때>
a = 0 => b = 0 1 2 3
a = 1 => b = 1 2 3
a = 2 => b = 2 3
a = 3 => b = 3

a => 0부터 N까지의 for문

b => 
*/
