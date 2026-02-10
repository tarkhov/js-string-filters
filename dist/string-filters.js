function a(t, e = !1) {
  let u = t.charAt(0).toUpperCase(), n = t.slice(1);
  return e && (n = n.toLowerCase()), `${u}${n}`;
}
function l(t, e = !1) {
  return e ? t.match(/[\p{L}\p{N}]+/gu) : t.match(/[\p{L}]+/gu);
}
function c(t, e = !1, u = !1) {
  let n = l(t, u);
  if (n.length > 1) {
    if (e)
      n = n.map(function(r) {
        return a(r);
      });
    else {
      let r = n.shift();
      n = n.map(function(f) {
        return a(f);
      }), n.unshift(r);
    }
    return n.join("");
  }
}
function i(t, e = !1) {
  return e ? t.match(/[\p{L}\p{N}-]+/gu) : t.match(/[\p{L}-]+/gu);
}
function o(t, e, u = " ") {
  const n = Math.floor((e - t.length) / 2) + t.length;
  return t.padStart(n, u).padEnd(e, u);
}
function p(t, e = !1) {
  return e ? t.match(/[\p{L}\p{N}_]+/gu) : t.match(/[\p{L}_]+/gu);
}
function s(t, e = 32, u = "...") {
  return t.substring(0, e) + u;
}
export {
  c as camel,
  a as capitalize,
  i as kebab,
  o as pad,
  p as snake,
  s as truncate,
  l as words
};
