const longForm = require('./longForm');
const shortForm = require('./shortForm');

module.exports = function getFlagMap(envs) {
  const flagMaps = {};
  const getShortForm = shortForm();

  for (let [k, v] of Object.entries(envs)) {
    flagMaps[k] = {
      flag: [`-${getShortForm(k)}`, `--${longForm(k)}`],
      value: v,
    };
  }

  return flagMaps;
};
