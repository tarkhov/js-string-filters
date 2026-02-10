import capitalize from './capitalize'
import words from './words'

export default function (string, first = false, numbers = false) {
  let list = words(string, numbers)
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