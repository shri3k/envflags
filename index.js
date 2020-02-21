const argparse = require('argparse').ArgumentParser;
const getFlagMap = require('./libs/getFlagMap');

const ERROR = {
  notAnInstance: Error('First argument must be an instance of argparse'),
};

/**
 * Adds env keys as flags in the passed argparse instance
 * @param {object} parserInstance - Instance of argparse
 * @param {object} dotenvconfig - parsed object of dotenv.config()
 * @returns {object} - Instance of argparse with added flags from dotenv keys
 *
 */
function main(parserInstance, dotenvConfig = {}) {
  if (!(parserInstance instanceof argparse)) {
    throw ERROR.notAnInstance;
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
