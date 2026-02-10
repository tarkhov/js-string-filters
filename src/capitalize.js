export default function (string, lower = false) {
  let first = string.charAt(0).toUpperCase()
  let text = string.slice(1)
  if (lower) {
    text = text.toLowerCase()
  }
  return `${first}${text}`
}