// 나머지

const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().trim().split('\n'); // [1,2,3,4,5,6,7,8,9,10]

const count = new Set(input.map((x) => x % 42)).size; // [1,2,3,4,5,6,7,8,9,10]

console.log(count);

/**
 * 배열의 1~10을 %42 -> 새로운 배열에 저장하기 map() 메서드?
 * 같은 값이 있는지 없는지 확인하는 건 뭐로 할까
 * 배열 전체에서 값을 모두 비교해야 하는디...
 * 어떻게 하느냐!
 */
