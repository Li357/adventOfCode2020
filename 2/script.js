const init = require('../util/init');

init().then((lines) => {
  const count = lines.filter((line) => {
    const [policy, letter, , password] = line.split(/[:\s+]/);
    const [min, max] = policy.split('-').map(Number);

    const occurrences = [...password].filter((char) => char === letter).length;
    return min <= occurrences && occurrences <= max;
  }).length;
  console.log(count);
});