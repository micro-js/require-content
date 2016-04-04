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
    __filename: filename,
    __dirname: path.dirname(filename),
    require: function (path) {
        return mod.require(path);
    }
  }

  var script = vm.createScript(content.toString('utf8'), filename)
  return script.runInNewContext(context)
}
