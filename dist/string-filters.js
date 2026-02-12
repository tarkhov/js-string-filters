function a(r, t = !1) {
  let n = r.charAt(0).toUpperCase(), e = r.slice(1);
  return t && (e = e.toLowerCase()), `${n}${e}`;
}
function s(r, t = { numbers: !1, lower: !1 }) {
  let n = t.numbers ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu, e = r.match(n);
  if (e.length <= 1)
    return null;
  let l = e.shift();
  return t.lower && (l = l.toLowerCase()), e = e.map((u) => a(u, t.lower)), e.unshift(l), e.join("");
}
function o(r, t = !1) {
  let n = t ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu, e = r.match(n);
  return e.length <= 1 ? null : e.map((l) => l.toLowerCase()).join("");
}
function p(r, t = !1) {
  let n = t ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, e = r.match(n);
  return e.length <= 1 ? null : e.map((l) => l.toLowerCase()).join("-");
}
function f(r, t, n = " ") {
  const e = Math.floor((t - r.length) / 2) + r.length;
  return r.padStart(e, n).padEnd(t, n);
}
function i(r, t = { numbers: !1, lower: !1 }) {
  let n = t.numbers ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu, e = r.match(n);
  return e.length <= 1 ? null : e.map((l) => a(l, t.lower)).join("");
}
function c(r, t = !1) {
  let n = t ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, e = r.match(n);
  return e.length <= 1 ? null : e.map((l) => l.toLowerCase()).join("_");
}
function m(r, t = { numbers: !1, lower: !1 }) {
  let n = t.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, e = r.match(n);
  return e.length <= 1 ? null : e.map((l) => a(l, t.lower)).join("-");
}
function g(r, t = 32, n = "...") {
  return r.substring(0, t) + n;
}
export {
  s as camelCase,
  a as capitalize,
  o as flatCase,
  p as kebabCase,
  f as pad,
  i as pascalCase,
  c as snakeCase,
  m as trainCase,
  g as truncate
};
