const { promises: fs } = require('fs');

module.exports = async function init(sep = '\n') {
  const input = await fs.readFile('./input');
  return input.toString('utf8').trim().split(sep);
};
