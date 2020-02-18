const getFlagMap = require('./getFlagMap');

it('should get flatmap', () => {
  console.log(getFlagMap({ HELLO: 'world', GOODBYE: 'universe' }));
});
