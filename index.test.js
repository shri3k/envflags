const dotenv = require('dotenv');
const envflags = require('./index');
const { parsed } = dotenv.config();

it('should display flagmaps', () => {
  console.log(envflags(parsed));
});
