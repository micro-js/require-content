
# require-content

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Require content - rather than a file.

## Installation

    $ npm install @f/require-content

## Usage

```js
var requireContent = require('@f/require-content')

var moduleCode = `
module.exports = function foo () {
  return 'foo'
}
`

var foo = requireContent(moduleCode, 'foo.js')

foo() // => 'foo'


```

## API

### requireContent(code, filename)

- `code` - code of module
- `filename` - filename to use for stack traces

**Returns:** the module

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/require-content.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/require-content
[git-image]: https://img.shields.io/github/tag/micro-js/require-content.svg?style=flat-square
[git-url]: https://github.com/micro-js/require-content
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/require-content.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/require-content
