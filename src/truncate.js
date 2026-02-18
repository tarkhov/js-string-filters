export default function (string, length = 32, omission='...') {
  if (!string) return null
  return string.substring(0, length) + omission
}