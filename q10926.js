const fs = require('fs');

// 입력 데이터가 여러 개가 아니라 하나의 문자열이다.
// 따라서 split(' ')을 활용해 띄어쓰기를 없애고 파싱하는 과정이 필요없다.
// 대신 trim()을 사용해 문자열 양 옆에 존재하는 공백을 지워준다. trim()을 사용하지 않으면 오답처리된다.
const inputData = fs.readFileSync('dev/stdin').toString().trim();

console.log(`${inputData}??!`);
