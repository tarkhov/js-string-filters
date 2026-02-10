import upper from './upper'

export default function (string, capitalize = false) {
  return string.replace(/\p{L}+/gu, function (text) {
    return upper(text, capitalize)
  })
}