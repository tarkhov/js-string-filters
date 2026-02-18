/*! 
 * String Filters v0.3.7
 * Homepage (https://github.com/tarkhov/js-string-filters)
 * Copyright 2026 Tarkhov
 * License: MIT
 */
function l(t, n = !1) {
  if (!t) return null;
  let r = t.charAt(0).toUpperCase(), e = t.slice(1);
  return n && (e = e.toLowerCase()), `${r}${e}`;
}
function i(t, n = { numbers: !1, lower: !1 }) {
  if (!t) return null;
  const r = n?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = t.match(r);
  if (!e || e.length <= 1) return null;
  let u = e.shift();
  const a = n?.lower;
  return a && (u = u.toLowerCase()), e = e.map((o) => l(o, a)), e.unshift(u), e.join("");
}
function p(t, n = !1) {
  if (!t) return null;
  let r = n ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu"), e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((u) => u.toLowerCase()).join("");
}
function f(t, n = !1) {
  if (!t) return null;
  let r = n ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((u) => u.toLowerCase()).join("-");
}
function s(t, n, r = " ") {
  if (!t) return null;
  const e = Math.floor((n - t.length) / 2) + t.length;
  return t.padStart(e, r).padEnd(n, r);
}
function c(t, n = { numbers: !1, lower: !1 }) {
  if (!t) return null;
  const r = n?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((u) => l(u, n?.lower)).join("");
}
function h(t, n = !1) {
  if (!t) return null;
  let r = n ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((u) => u.toLowerCase()).join("_");
}
function m(t, n = !1) {
  return t ? t.replace(new RegExp("\\p{L}+", "gu"), (r) => l(r, n)) : null;
}
function C(t, n = { numbers: !1, lower: !1 }) {
  if (!t) return null;
  const r = n?.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu;
  let e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((u) => l(u, n?.lower)).join("-");
}
function g(t, n = 32, r = "...") {
  return t ? t.substring(0, n) + r : null;
}
function L() {
  String.prototype.camelCase = function(t) {
    return i(this, t);
  }, String.prototype.capitalize = function(t) {
    return l(this, t);
  }, String.prototype.flatCase = function(t) {
    return p(this, t);
  }, String.prototype.kebabCase = function(t) {
    return f(this, t);
  }, String.prototype.pad = function(t, n) {
    return s(this, t, n);
  }, String.prototype.pascalCase = function(t) {
    return c(this, t);
  }, String.prototype.snakeCase = function(t) {
    return h(this, t);
  }, String.prototype.titleCase = function(t) {
    return m(this, t);
  }, String.prototype.trainCase = function(t) {
    return C(this, t);
  }, String.prototype.truncate = function(t, n) {
    return g(this, t, n);
  };
}
export {
  i as camelCase,
  l as capitalize,
  p as flatCase,
  f as kebabCase,
  s as pad,
  c as pascalCase,
  h as snakeCase,
  m as titleCase,
  C as trainCase,
  g as truncate,
  L as useProto
};
