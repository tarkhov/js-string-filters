import capitalize from './capitalize'

export default function (string, lower = false) {
  return string.replace(/\p{L}+/gu, word => capitalize(word, lower))
}