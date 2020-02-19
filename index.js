const argparse = require('argparse');
const getFlagMap = require('./libs/getFlagMap');

const DEFAULT_OPTS = {
  version: 'v1',
  addHelp: true,
  description: 'CLI for app',
};

/*
 *
 */
function main(dotenvConfig = {}, opts = DEFAULT_OPTS) {
  const flagMaps = getFlagMap(dotenvConfig);
  const parser = new argparse.ArgumentParser(opts);

  for (let [_, v] of Object.entries(flagMaps)) {
    parser.addArgument(v.flag, {
      defaultValue: v.value,
    });
  }

  return parser;
}

module.exports = main;
