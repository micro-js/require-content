/**
 * Modules
 */

var Module = require('module')
var vm = require('vm')
var path = require('path')

/**
 * Expose requireContent
 */

module.exports = requireContent

/**
 * requireContent
 */

function requireContent (content, filename) {
  var mod = new Module(filename);
  var context = {
    module: mod,
    exports: mod.exports,
    __filename: filename,
    __dirname: path.dirname(filename),
    require: function (path) {
      return mod.require(path);
    },
    Buffer: Buffer,
    clearInterval: clearInterval,
    setInterval: setInterval,
    console: console,
    global: global,
    process: process,
    clearTimeout: clearTimeout,
    setTimeout: setTimeout
  }

  var script = vm.createScript(content.toString('utf8'), filename)
  var res = script.runInNewContext(context)
  return mod.exports
}
