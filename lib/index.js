'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __CACHE = {};

exports.default = {
  removeItem: function removeItem(item, callback) {
    if (__CACHE[item]) {
      delete __CACHE[item];
    }

    if (callback) {
      callback(null);
    }

    return null;
  },
  getItem: function getItem(item, callback) {
    var result = item ? __CACHE[item] : __CACHE;

    if (callback) {
      return callback(null, result);
    }

    return result;
  },
  setItem: function setItem(item, value, callback) {
    __CACHE[item] = value;

    if (callback) {
      return callback(null, true);
    }

    return true;
  },
  mergeItem: function mergeItem(item, value, callback) {
    __CACHE[item] = (0, _deepmerge2.default)(__CACHE[item], JSON.parse(value));

    if (callback) {
      return callback(null, true);
    }

    return true;
  },
  clear: function clear() {
    __CACHE = {};
    return true;
  }
};