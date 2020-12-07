const init = require('../util/init');

init().then((lines) => {
  const count = lines.filter((line) => {
    const [positions, letter, , password] = line.split(/[:\s+]/);
    const [one, two] = positions.split('-').map((x) => Number(x) - 1);

    return (password[one] === letter) ^ (password[two] === letter);
  }).length;
  console.log(count);
});