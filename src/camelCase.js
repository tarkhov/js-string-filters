import capitalize from './capitalize'
import splitWords from './splitWords'

export default function (string, first = false, numbers = false) {
  let list =splitWords(string, numbers)
  if (list.length > 1) {
    if (first) {
      list = list.map(function (value) {
        return capitalize(value)
      })
    } else {
      let first = list.shift()
      list = list.map(function (value) {
        return capitalize(value)
      })
      list.unshift(first)
    }
    return list.join('')
  }
}