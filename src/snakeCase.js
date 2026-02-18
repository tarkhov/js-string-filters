export default function (string, numbers = false) {
  if (!string) return null
  let pattern = (numbers) ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu
  let words = string.match(pattern)
  if (!words || words.length <= 1) return null
  return words.map(word => word.toLowerCase()).join('_')
}