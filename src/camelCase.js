import capitalize from './capitalize'

export default function (string, options = { numbers: false, lower: false}) {
  let pattern = /[\p{L}]+/gu
  if (typeof options['numbers'] !== 'undefined' && options.numbers) {
    pattern = /[\p{L}\p{N}]+/gu
  }

  let words = string.match(pattern)
  if (words.length <= 1) {
    return null
  }

  let first = words.shift()
  const lower = (typeof options['lower'] !== 'undefined') ? options.lower : false
  if (lower) first = first.toLowerCase()
  words = words.map(word => capitalize(word, lower))
  words.unshift(first)
  return words.join('')
}