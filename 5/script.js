const init = require('../util/init');

function binSearch(str, low, high, marker) {
  if (low === high) {
    return low;
  }
  if (str[0] === marker) {
    return binSearch(str.slice(1), low, (high + low + 1) / 2 - 1, marker);
  }
  return binSearch(str.slice(1), (low + high + 1) / 2, high, marker);
}

init().then((lines) => {
  let max = Number.MIN_VALUE;
  lines.forEach((line) => {
    const i = binSearch(line.slice(0, 7), 0, 127, 'F');
    const j = binSearch(line.slice(7), 0, 7, 'L');
    const seatID = 8 * i + j;
    if (seatID > max) {
      max = seatID;
    }
  });
  console.log(max);
});
