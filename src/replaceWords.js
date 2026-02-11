export default function (string, options, callback) {
  return string.replace(/\p{L}+/gu, function (text) {
    return callback(text, options)
  })
}