import merge from 'deepmerge'

var __CACHE = {}


export default class Memory {
  removeItem(item, callback) {
    if (__CACHE[item]) {
      delete __CACHE[item]
    }

    if (callback) {
      callback(null)
    }

    return null
  }

  getItem(item, callback) {
    const result = item ? __CACHE[item] : __CACHE

    if (callback) {
      return callback(null, result)
    }

    return result
  }

  setItem(item, value, callback) {
    if (__CACHE[item] === undefined) {
      console.log('set', value)
      __CACHE[item] = value
    } else {
      console.log('merge', value)
      __CACHE[item] = merge(__CACHE[item], value)
    }

    console.log(__CACHE[item])

    if (callback) {
      return callback(null, true)
    }

    return true
  }

  mergeItem(item, value, callback) {
    __CACHE[item] = merge(__CACHE[item], value)

    if (callback) {
      return callback(null, true)
    }

    return true
  }

  clear() {
    __CACHE = {}
    return true
  }
}
