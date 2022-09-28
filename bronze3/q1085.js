const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];

const width = x - 0 <= w - x ? x - 0 : w - x;
const height = y - 0 <= h - y ? y - 0 : h - y;

const result = width <= height ? width : height;

console.log(result);

/**
 * w = width = 가로
 * h = height = 세로
 * 가로의 최단 거리 => (x - 0) 과 (w - x) 중에 더 작은 값
 * 세로의 최단 거리 => (y - 0) 과 (h - y) 중에 더 작은 값
 */
