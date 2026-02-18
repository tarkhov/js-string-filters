import capitalize from './capitalize'

export default function (string, options = { numbers: false, lower: false }) {
  const pattern = (options?.numbers) ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu
  let words = string.match(pattern)
  if (!words || words.length <= 1) return null
  return words.map(word => capitalize(word, options?.lower)).join('-')
}