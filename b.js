let fs = require('fs')
// commonjs
function req(moduleName) {
  let content = fs.readFileSync(moduleName, 'utf8')
  let fn = new Function('exports', 'module', 'require', '__dirname', '__filename', content + '\n return module.exports')
  let module = {
    exports: {}
  }
  return fn(module.exports, module, req, __dirname, __filename)
}

let str = req('./a.js')

console.log(str)
/**
 * fn() {
 *   module.exports = 'AAAAAAAAAAa'
 *  return module.exports
 * }
 * 
 */