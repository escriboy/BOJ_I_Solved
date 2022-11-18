const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let N = input[0]; // 운동하려는 시간(분)
let m = input[1]; // 현재 맥박
let M = input[2]; // 최대 맥박
let T = input[3]; // 운동시 분당 증가하는 맥박
let R = input[4]; // 운동시 분당 감소하는 맥박

const init = input[1]; // 초기맥박이자 최소맥박
let time = 0; // 지나가는 시간

if (init + T <= M) {
  // 운동이 가능한 경우
  while (N > 0) {
    // N이 다 줄어들기 전까지
    if (m + T <= M) {
      m += T;
      N--;
      time++;
    } else {
      if (m - R < init) {
        m = init;
        time++;
      } else {
        m -= R;
        time++;
      }
    }
  }
  console.log(time);
} else {
  console.log(-1);
}

/**
 * while(N !== 0) {
  맥박 <= 최대맥박인 경우
  운동하기(N - 1, 시간 + 1)

  맥박 = 최대맥박인 경우 => 휴식하기 (시간 + 1)
 */

/*

변수 주어지는 순서: N, m, M, T, R

맥박: T, 
1분 동안 운동을 한 후의 맥박 : X(기존 맥박) + T(증가한 맥박)
영식이가 원하는 최대 맥박 :   X + T <= M
휴식: 맥박이 R만큼 감소 : X-R >= M

출력: 운동을 N분하는 데 필요한 시간의 최솟값, 운동을 할 수 없다면 -1 출력

운동 => 최대 맥박에 닿으면 휴식 => 다시 운동


운동에 필요한 맥박 > 초기 맥박 + 1분당 맥박 => -1 출력

운동에 필요한 맥박 <= 초기 맥박 + 1분당 맥박 => 운동하기
N = 0이 될 때까지 반복문 돌기


}


휴식이 필요한 타임 = 운동할 수 있는 맥박까지 돌아왔을 때 


*/
