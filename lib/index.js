'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __CACHE = {};

var Memory = function () {
  function Memory() {
    _classCallCheck(this, Memory);
  }

  _createClass(Memory, [{
    key: 'removeItem',
    value: function removeItem(item, callback) {
      if (__CACHE[item]) {
        delete __CACHE[item];
      }

      if (callback) {
        callback(null);
      }

      return null;
    }
  }, {
    key: 'getItem',
    value: function getItem(item, callback) {
      var result = item ? __CACHE[item] : __CACHE;

      if (callback) {
        return callback(null, result);
      }

      return result;
    }
  }, {
    key: 'setItem',
    value: function setItem(item, value, callback) {
      if (__CACHE[item] === undefined) {
        __CACHE[item] = value;
      } else {
        __CACHE[item] = (0, _deepmerge2.default)(__CACHE[item], value);
      }

      if (callback) {
        return callback(null, true);
      }

      return true;
    }
  }, {
    key: 'mergeItem',
    value: function mergeItem(item, value, callback) {
      __CACHE[item] = (0, _deepmerge2.default)(__CACHE[item], value);

      if (callback) {
        return callback(null, true);
      }

      return true;
    }
  }, {
    key: 'clear',
    value: function clear() {
      __CACHE = {};
      return true;
    }
  }]);

  return Memory;
}();

exports.default = Memory;