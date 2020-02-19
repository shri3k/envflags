const dotenv = require('dotenv');
const argparse = require('argparse');

const envflags = require('./index');

it('should be and instance of argparse parser', () => {
  const parser = argparse.ArgumentParser();
  parser.addArgument(['-p', '--port'], {
    defaultValue: true,
  });
  parser.addArgument(['-u', '--url'], {
    defaultValue: true,
  });
  expect(envflags({ PORT: 8080, URL: 'https:mydomain.com' })).toBeInstanceOf(parser);
});

it('should match value of argparse', () => {
  const parser = argparse.ArgumentParser();
  parser.addArgument(['-i', '--ignore'], {
    defaultValue: true,
  });
  parser.addArgument(['-p', '--port'], {
    defaultValue: 8080,
  });
  const argValues = parser.parseArgs();
  const envFlagValues = envflags({ PORT: 8080, ignore: true }).parseArgs();
  expect(envFlagValues).toMatchObject(argValues);
});
