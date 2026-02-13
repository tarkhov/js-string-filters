export default function (string) {
  let first = string.charAt(0).toUpperCase()
  let text = string.slice(1).toLowerCase()
  return `${first}${text}`
}