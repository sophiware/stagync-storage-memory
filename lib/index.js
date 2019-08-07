'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var deepmerge = require('deepmerge');
var localCache = {};

var Memory = function () {
  function Memory() {
    _classCallCheck(this, Memory);
  }

  _createClass(Memory, [{
    key: 'removeItem',
    value: function removeItem(item, callback) {
      if (localCache[item]) {
        delete localCache[item];
      }

      if (callback) {
        callback(null);
      }

      return null;
    }
  }, {
    key: 'getItem',
    value: function getItem(item, callback) {
      var result = item ? localCache[item] : localCache;

      if (callback) {
        return callback(null, result);
      }

      return result;
    }
  }, {
    key: 'setItem',
    value: function setItem(item, value, callback) {
      if (!localCache[item]) {
        localCache[item] = value;
      } else {
        localCache[item] = deepmerge(localCache[item], value);
      }

      if (callback) {
        return callback(null, true);
      }

      return true;
    }
  }, {
    key: 'clear',
    value: function clear() {
      for (var key in localCache) {
        delete localCache[key];
      }

      return true;
    }
  }]);

  return Memory;
}();

exports.default = Memory;