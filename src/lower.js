export default function (string, first = false) {
  if (first) {
    return string.charAt(0).toLowerCase() + string.slice(1)
  } else {
    return string.toLowerCase()
  }
}