/*! 
 * String Filters v0.3.3
 * Homepage (https://github.com/tarkhov/js-string-filters)
 * Copyright 2026 Tarkhov
 * License: MIT
 */
function l(n, t = !1) {
  let r = n.charAt(0).toUpperCase(), e = n.slice(1);
  return t && (e = e.toLowerCase()), `${r}${e}`;
}
function o(n, t = { numbers: !1, lower: !1 }) {
  const r = t?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = n.match(r);
  if (e.length <= 1) return null;
  let a = e.shift();
  const u = t?.lower;
  return u && (a = a.toLowerCase()), e = e.map((s) => l(s, u)), e.unshift(a), e.join("");
}
function p(n, t = !1) {
  let r = t ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu"), e = n.match(r);
  return e.length <= 1 ? null : e.map((a) => a.toLowerCase()).join("");
}
function f(n, t = !1) {
  let r = t ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, e = n.match(r);
  return e.length <= 1 ? null : e.map((a) => a.toLowerCase()).join("-");
}
function i(n, t, r = " ") {
  const e = Math.floor((t - n.length) / 2) + n.length;
  return n.padStart(e, r).padEnd(t, r);
}
function c(n, t = { numbers: !1, lower: !1 }) {
  const r = t?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = n.match(r);
  return e.length <= 1 ? null : e.map((a) => l(a, t?.lower)).join("");
}
function g(n, t = !1) {
  let r = t ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, e = n.match(r);
  return e.length <= 1 ? null : e.map((a) => a.toLowerCase()).join("_");
}
function m(n, t = !1) {
  return n.replace(new RegExp("\\p{L}+", "gu"), (r) => l(r, t));
}
function L(n, t = { numbers: !1, lower: !1 }) {
  const r = t?.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu;
  let e = n.match(r);
  return e.length <= 1 ? null : e.map((a) => l(a, t?.lower)).join("-");
}
function w(n, t = 32, r = "...") {
  return n.substring(0, t) + r;
}
export {
  o as camelCase,
  l as capitalize,
  p as flatCase,
  f as kebabCase,
  i as pad,
  c as pascalCase,
  g as snakeCase,
  m as titleCase,
  L as trainCase,
  w as truncate
};
