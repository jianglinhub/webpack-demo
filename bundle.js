(function (modules) {
  function __webpack_require__(moduleId) {
    var module = installedModules[moduleId] = {
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
  }
  return __webpack_require__("./src/index.js");
})
({
  "./src/a.js":
    (function (module, exports) {
      eval("module.exports = 'AAAA'\n\n//# sourceURL=webpack:///./src/a.js?");
    }),
  "./src/index.js":
    (function (module, exports, __webpack_require__) {
      eval("let a = __webpack_require__(/*! ./a */ \"./src/a.js\")\nconsole.log(a)\n\n//# sourceURL=webpack:///./src/index.js?");
    })
});