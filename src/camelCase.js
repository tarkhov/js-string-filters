import capitalize from './capitalize'

export default function (string, options = { numbers: false, lower: false }) {
  if (!string) return null
  const pattern = (options?.numbers) ? /[\p{L}\p{N}]+/gu : /\p{L}+/gu
  let words = string.match(pattern)
  if (!words || words.length <= 1) return null
  let first = words.shift()
  const lower = options?.lower
  if (lower) first = first.toLowerCase()
  words = words.map(word => capitalize(word, lower))
  words.unshift(first)
  return words.join('')
}