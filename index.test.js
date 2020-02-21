const dotenv = require('dotenv');
const argparse = require('argparse');

const envflags = require('./index');

it('should throw an error if argparse instance is not given', () => {
  expect(() => {
    envflags({ API: 'somekeyofapi', VALUE: 'somevalue' });
  }).toThrow();
});

it('should result in identical result from argparse', () => {
  const parser = argparse.ArgumentParser();
  const parser2 = argparse.ArgumentParser();
  expect(envflags(parser2, { PORT: 8080, URL: 'https://mydomain.com' })).toBeInstanceOf(
    argparse.ArgumentParser,
  );
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

  const parser2 = argparse.ArgumentParser();
  const envFlagValues = envflags(parser2, { PORT: 8080, ignore: true }).parseArgs();
  expect(envFlagValues).toMatchObject(argValues);
});
