const s = require('./shortForm');
it('should return first letter of flags', () => {
  const sh = s();
  expect(sh('username')).toEqual('u');
  expect(sh('password')).toEqual('p');
});

it('should return second letter of flags after finding the duplicate', () => {
  const sh = s();
  sh('username');
  expect(sh('ultra')).toEqual('l');
});

it('should return full word if it cannot find unique letter', () => {
  const sh = s();
  sh('user');
  sh('show');
  sh('error');
  sh('row');

  expect(sh('sure')).toEqual('sure');
});
