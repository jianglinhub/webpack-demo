// requirejs

// define 声明模块 通过require使用一个模块

let factories = {}
function define(moduleName, dependencies, factory) {
  factory.dependencies = dependencies // 挂载依赖
  factories[moduleName] = factory
}

function require(mods, callback) {
  let result = mods.map(function (mod) {
    let factory = factories[mod]
    let exports
    let dependencies = factory.dependencies // ['name']
    // require(['name'], function () {})
    require(dependencies, function () {
      exports = factory.apply(null, arguments)
    }) // [requirejs9]
    return exports
  })
  callback.apply(null, result)
}

define('name', [], function () {
  return 'requirejs'
})

define('age', ['name'], function (name) {
  return 9 + name
})

require(['age'], function (age) {
  console.log(age)
})
