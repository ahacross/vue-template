import _ from 'lodash'

// eslint-disable-next-line no-extend-native
String.prototype.toNum = function () {
  return Number(this)
}

// eslint-disable-next-line no-extend-native
Array.prototype.eq = function (idx) {
  return this[idx]
}

// eslint-disable-next-line no-extend-native
Array.prototype.first = function () {
  return this[0]
}

// eslint-disable-next-line no-extend-native
Array.prototype.last = function () {
  return this[this.length - 1]
}

// eslint-disable-next-line no-extend-native
Array.prototype.remove = function (idx) {
  this.splice(_.indexOf(this, idx), 1)
  return this
}
