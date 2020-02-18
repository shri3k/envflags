const lf = require('./longForm');

it('should return lowercase string', () => {
  expect(lf('USERNAME')).toEqual('username');
});
