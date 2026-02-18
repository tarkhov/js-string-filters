import capitalize from './capitalize'

export default function (string, lower = false) {
  if (!string) return null
  return string.replace(/\p{L}+/gu, word => capitalize(word, lower))
}