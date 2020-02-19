# ENVFLAGS
Converts keys/fields from [`dotenv`](https://github.com/motdotla/dotenv) to cli flags for [`argparse`](https://github.com/nodeca/argparse)

## Usage

```js
const dotenv = require('dotenv');
const { parsed } = dotenv.config();

const parser = require('envflags')(parsed)
const args = parser.parseArgs();
```
