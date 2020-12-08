const init = require('../util/init');

init().then((instructions) => {
  const seen = {};
  let acc = 0;
  let i = 0;

  while (!seen[i]) {
    const [cmd, rawArg] = instructions[i].split(' ');
    const arg = Number(rawArg);
    seen[i] = true;

    switch (cmd) {
      case 'nop':
        i++;
        break;
      case 'acc':
        acc += arg;
        i++;
        break;
      case 'jmp':
        i += arg;
      default:
    }
  }
  console.log(acc);
});
