const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const A = input[0].split(' ').map(x => +x);
const B = input[1].split(' ').map(x => +x);
const C = input[2].split(' ').map(x => +x);

const ATime = A[3] * 3600 + A[4] * 60 + A[5] - (A[0] * 3600 + A[1] * 60 + A[2]);
const BTime = B[3] * 3600 + B[4] * 60 + B[5] - (B[0] * 3600 + B[1] * 60 + B[2]);
const CTime = C[3] * 3600 + C[4] * 60 + C[5] - (C[0] * 3600 + C[1] * 60 + C[2]);

const calcWorkTime = function (time) {
  const hour = Math.floor(time / 3600) % 24;
  const minute = Math.floor((time - hour * 3600) / 60);
  const second = time - hour * 3600 - minute * 60;

  console.log(`${hour} ${minute} ${second}`);
};

calcWorkTime(ATime);
calcWorkTime(BTime);
calcWorkTime(CTime);

/**
 * 1) 출근 시간, 퇴근 시간을 각각 초로 변환한다.
 * 2) 퇴근 시간에서 출근 시간을 뺀다.
 * 3) 다시 시간으로 변환한다.
 */
