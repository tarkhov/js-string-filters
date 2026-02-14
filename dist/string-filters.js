function a(n, t = !1) {
  let r = n.charAt(0).toUpperCase(), e = n.slice(1);
  return t && (e = e.toLowerCase()), `${r}${e}`;
}
function o(n, t = { numbers: !1, lower: !1 }) {
  const r = t?.numbers ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu;
  let e = n.match(r);
  if (e.length <= 1) return null;
  let l = e.shift();
  const u = t?.lower;
  return u && (l = l.toLowerCase()), e = e.map((s) => a(s, u)), e.unshift(l), e.join("");
}
function p(n, t = !1) {
  let r = t ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu, e = n.match(r);
  return e.length <= 1 ? null : e.map((l) => l.toLowerCase()).join("");
}
function f(n, t = !1) {
  let r = t ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, e = n.match(r);
  return e.length <= 1 ? null : e.map((l) => l.toLowerCase()).join("-");
}
function i(n, t, r = " ") {
  const e = Math.floor((t - n.length) / 2) + n.length;
  return n.padStart(e, r).padEnd(t, r);
}
function c(n, t = { numbers: !1, lower: !1 }) {
  const r = t?.numbers ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu;
  let e = n.match(r);
  return e.length <= 1 ? null : e.map((l) => a(l, t?.lower)).join("");
}
function m(n, t = !1) {
  let r = t ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, e = n.match(r);
  return e.length <= 1 ? null : e.map((l) => l.toLowerCase()).join("_");
}
function g(n, t = { numbers: !1, lower: !1 }) {
  const r = t?.numbers ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu;
  let e = n.match(r);
  return e.length <= 1 ? null : e.map((l) => a(l, t?.lower)).join(" ");
}
function w(n, t = { numbers: !1, lower: !1 }) {
  const r = t?.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu;
  let e = n.match(r);
  return e.length <= 1 ? null : e.map((l) => a(l, t?.lower)).join("-");
}
function L(n, t = 32, r = "...") {
  return n.substring(0, t) + r;
}
export {
  o as camelCase,
  a as capitalize,
  p as flatCase,
  f as kebabCase,
  i as pad,
  c as pascalCase,
  m as snakeCase,
  g as titleCase,
  w as trainCase,
  L as truncate
};
