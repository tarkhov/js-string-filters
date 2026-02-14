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
  
  const lower = (typeof options['lower'] !== 'undefined') ? options.lower : false
  return words.map(word => capitalize(word, lower)).join('')
}