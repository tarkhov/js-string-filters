import capitalize from './capitalize'

export default function (string, numbers = false) {
  let pattern = (numbers) ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu
  let words = string.match(pattern)
  if (words.length <= 1) {
    return null
  }
  return words.map(word => capitalize(word)).join('')
}