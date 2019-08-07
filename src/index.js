const deepmerge = require('deepmerge')
const localCache = {}

export default class Memory {
  removeItem (item, callback) {
    if (localCache[item]) {
      delete localCache[item]
    }

    if (callback) {
      callback(null)
    }

    return null
  }

  getItem (item, callback) {
    const result = item ? localCache[item] : localCache

    if (callback) {
      return callback(null, result)
    }

    return result
  }

  setItem (item, value, callback) {
    if (!localCache[item]) {
      localCache[item] = value
    } else {
      localCache[item] = deepmerge(localCache[item], value)
    }

    if (callback) {
      return callback(null, true)
    }

    return true
  }

  clear () {
    for (let key in localCache) {
      delete localCache[key]
    }

    return true
  }
}
