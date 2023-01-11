const selfNumber = [];
const notSelfNumber = [];
let sum = 0;
let i = 1;
while (i <= 10000) {
  const iToString = i.toString().split(''); // i가 각 자리 수로 나뉘어진 배열로 생성됨
  sum = i;
  if (iToString.length === 1) {
    sum += sum;
  } else {
    // i가 두 자리 수 이상인 경우
    for (let j = 0; j < iToString.length; j++) {
      sum += +iToString[j]; // 각 자리 수를 더해준다.
    }
  }
  notSelfNumber.push(sum);
  notSelfNumber.includes(i) || selfNumber.push(i);
  // notSelfNumber에 i가 없는 경우에만 selfNumber에 i를 push
  i++;
}

selfNumber.forEach((el) => console.log(el));
