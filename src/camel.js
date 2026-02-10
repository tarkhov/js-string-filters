import upper from './upper'
import words from './words'

export default function (string, first = false, numbers = false) {
  let list = words(string, numbers)
  if (list.length > 1) {
    if (first) {
      list = list.map(function (value) {
        return upper(value)
      })
    } else {
      let first = list.shift()
      list = list.map(function (value) {
        return upper(value)
      })
      list.unshift(first)
    }
    return list.join('')
  }
}