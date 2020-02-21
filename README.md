# ENVFLAGS
Converts keys/fields from [`dotenv`](https://github.com/motdotla/dotenv) to cli flags for [`argparse`](https://github.com/nodeca/argparse)

## Syntax

```js
envflags(argparseInstance, [parsedDotenv])
```

### Parameters
**argparseInstance** - Instance of argparse  

**parsedDotenv** - Simple key/value object or parsed object of argparse


### Return value
Modified instance of argparse

## Usage

```js
const dotenv = require('dotenv');
const argparse = require('argparse').ArgumentParser;

const { parsed } = dotenv.config();
let parser = new argparse();
parser  = require('envflags')(argparse, parsed);
const args = parser.parseArgs();
```
