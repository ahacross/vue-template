import _ from 'lodash'

// eslint-disable-next-line no-extend-native
Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' '

  let weekName = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  let d = this

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|ms|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy': return d.getFullYear()
      case 'yy': return (d.getFullYear() % 1000).zf(2)
      case 'MM': return (d.getMonth() + 1).zf(2)
      case 'dd': return d.getDate().zf(2)
      case 'E': return weekName[d.getDay()]
      case 'HH': return d.getHours().zf(2)
      // eslint-disable-next-line no-undef
      case 'hh': return ((h = d.getHours() % 12) ? h : 12).zf(2)
      case 'mm': return d.getMinutes().zf(2)
      case 'ss': return d.getSeconds().zf(2)
      case 'ms': return d.getMilliseconds().zf(3)
      // case 'a/p': return d.getHours() < 12 ? locale.meridiem[0] : locale.meridiem[1]
      default: return $1
    }
  })
}

// eslint-disable-next-line no-extend-native
Date.prototype.minus = function (type, minus) {
  let dat = new Date(this.valueOf())

  if (type === 'year') {
    dat.setFullYear(dat.getFullYear() - minus)
  } else if (type === 'month') {
    dat.setMonth(dat.getMonth() - minus)
  } else if (type === 'date') {
    dat.setDate(dat.getDate() - minus)
  } else if (type === 'hour') {
    dat.setHours(dat.getHours() - minus)
  } else if (type === 'minute') {
    dat.setMinutes(dat.getMinutes() - minus)
  } else if (type === 'second') {
    dat.setSeconds(dat.getSeconds() - minus)
  }
  return dat
}

// eslint-disable-next-line no-extend-native
Date.prototype.plus = function (type, plus) {
  let dat = new Date(this.valueOf())

  if (type === 'year') {
    dat.setFullYear(dat.getFullYear() + plus)
  } else if (type === 'month') {
    dat.setMonth(dat.getMonth() + plus)
  } else if (type === 'date') {
    dat.setDate(dat.getDate() + plus)
  } else if (type === 'hour') {
    dat.setHours(dat.getHours() + plus)
  } else if (type === 'minute') {
    dat.setMinutes(dat.getMinutes() + plus)
  } else if (type === 'second') {
    dat.setSeconds(dat.getSeconds() + plus)
  }
  return dat
}

// eslint-disable-next-line no-extend-native,one-var
String.prototype.string = function (len) { let s = '', i = 0; while (i++ < len) { s += this } return s }
// eslint-disable-next-line no-extend-native
String.prototype.zf = function (len) { return '0'.string(len - this.length) + this }
// eslint-disable-next-line no-extend-native
Number.prototype.zf = function (len) { return this.toString().zf(len) }

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
Array.prototype.remove = function (str) {
  this.splice(_.indexOf(this, str), 1)
  return this
}
