"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var localCache = {};

var Memory =
/*#__PURE__*/
function () {
  function Memory() {
    _classCallCheck(this, Memory);
  }

  _createClass(Memory, [{
    key: "removeItem",
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
    key: "getItem",
    value: function getItem(item, callback) {
      var result = item ? localCache[item] : localCache;

      if (callback) {
        return callback(null, result);
      }

      return result;
    }
  }, {
    key: "setItem",
    value: function setItem(item, value, callback) {
      if (!localCache[item]) {
        localCache[item] = value;
      } else {
        for (var key in value) {
          localCache[item][key] = value[key];
        }
      }

      if (callback) {
        return callback(null, true);
      }

      return true;
    }
  }, {
    key: "clear",
    value: function clear() {
      for (var key in localCache) {
        delete localCache[key];
      }

      return true;
    }
  }]);

  return Memory;
}();

exports["default"] = Memory;