const getFlagMap = require('./getFlagMap');

it('should match object ', () => {
  expect(
    getFlagMap({
      USERNAME: 'username',
      PASSWORD: 'password',
      port: 8080,
    }),
  ).toMatchObject({
    USERNAME: {
      flag: ['-u', '--username'],
      value: 'username',
    },
    PASSWORD: {
      flag: ['-p', '--password'],
      value: 'password',
    },
  });
});
