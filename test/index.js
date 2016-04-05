/**
 * Imports
 */

var requireContent = require('..')
var test = require('tape')
var path = require('path')
var fs = require('fs')

/**
 * Tests
 */

test('should run code', function (t) {
  var content = fs.readFileSync(path.join(__dirname, './fixtures/index.js'))
  var foo = requireContent(content, path.join(__dirname, 'fixtures/foo.js'))
  t.equal(foo(), 'foo')
  t.end()
})

test('errors should have correct stack', function (t) {
  var content = fs.readFileSync(path.join(__dirname, './fixtures/error.js'))
  var te = requireContent(content, path.join(__dirname, 'fixtures/error.js'))
  try {
    te()
  } catch (e) {
    t.ok(e.stack.indexOf('fixtures/error.js') >= 0)
    t.end()
  }
})

test('should work for browserified code', function (t) {
  var content = fs.readFileSync(path.join(__dirname, './fixtures/build.js'))
  var foo = requireContent(content, path.join(__dirname, 'fixtures/foo.js'))
  t.equal(foo(), 'foo')
  t.end()
})
