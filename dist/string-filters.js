function a(e, t = !1) {
  let r = e.charAt(0).toUpperCase(), n = e.slice(1);
  return t && (n = n.toLowerCase()), `${r}${n}`;
}
function c(e, t = !1) {
  return t ? e.match(/[\p{L}\p{N}]+/gu) : e.match(/[\p{L}]+/gu);
}
function l(e, t = !1, r = !1) {
  let n = c(e, r);
  if (n.length > 1) {
    if (t)
      n = n.map(function(u) {
        return a(u);
      });
    else {
      let u = n.shift();
      n = n.map(function(f) {
        return a(f);
      }), n.unshift(u);
    }
    return n.join("");
  }
}
function i(e, t = !1) {
  return t ? e.match(/[\p{L}\p{N}-]+/gu) : e.match(/[\p{L}-]+/gu);
}
function p(e, t, r = " ") {
  const n = Math.floor((t - e.length) / 2) + e.length;
  return e.padStart(n, r).padEnd(t, r);
}
function s(e, t, r) {
  return e.replace(new RegExp("\\p{L}+", "gu"), function(n) {
    return r(n, t);
  });
}
function o(e, t = !1) {
  return t ? e.match(/[\p{L}\p{N}_]+/gu) : e.match(/[\p{L}_]+/gu);
}
function h(e, t = 32, r = "...") {
  return e.substring(0, t) + r;
}
export {
  l as camelCase,
  a as capitalize,
  i as kebabCase,
  p as pad,
  s as replaceWords,
  o as snakeCase,
  c as splitWords,
  h as truncate
};
