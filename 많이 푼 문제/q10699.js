const now = new Date();
const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
const koreaTimeDiff = 9 * 60 * 60 * 1000;
const koreaNow = new Date(utcNow + koreaTimeDiff);

function leftPad(value) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}
function toStringByFormatting(source, delimiter = '-') {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
}

console.log(toStringByFormatting(koreaNow, '-'));
