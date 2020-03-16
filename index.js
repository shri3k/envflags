const argparse = require('argparse').ArgumentParser;
const getFlagMap = require('./libs/getFlagMap');

const ERROR = {
  notAnInstance: Error('First argument must be an instance of argparse'),
};

const INFO = {
  noConfig: 'No config passed. Skipping.',
};

function hasEqualInterface(parserInstance) {
  const keys = (o) => Object.keys(o);
  const instanceProps = keys(parserInstance);
  const argParseProps = keys(argparse);

  return argParseProps.every((k) => instanceProps.includes(k));
}

/**
 * Adds env keys as flags in the passed argparse instance
 * @param {object} parserInstance - Instance of argparse
 * @param {object} dotenvconfig - parsed object of dotenv.config()
 * @returns {object} - Instance of argparse with added flags from dotenv keys
 *
 */
function main(parserInstance, dotenvConfig = {}) {
  if (!hasEqualInterface(parserInstance)) {
    throw ERROR.notAnInstance;
  }

  if (Object.keys(dotenvConfig).length < 1) {
    console.info(INFO.noconfig);
    return parserInstance;
  }

  const flagMaps = getFlagMap(dotenvConfig);

  for (let [_, v] of Object.entries(flagMaps)) {
    parserInstance.addArgument(v.flag, {
      defaultValue: v.value,
    });
  }

  return parserInstance;
}

module.exports = main;
