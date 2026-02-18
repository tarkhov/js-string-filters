/*! 
 * String Filters v0.3.6
 * Homepage (https://github.com/tarkhov/js-string-filters)
 * Copyright 2026 Tarkhov
 * License: MIT
 */
function u(t, n = !1) {
  let r = t.charAt(0).toUpperCase(), e = t.slice(1);
  return n && (e = e.toLowerCase()), `${r}${e}`;
}
function i(t, n = { numbers: !1, lower: !1 }) {
  const r = n?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = t.match(r);
  if (!e || e.length <= 1) return null;
  let a = e.shift();
  const o = n?.lower;
  return o && (a = a.toLowerCase()), e = e.map((s) => u(s, o)), e.unshift(a), e.join("");
}
function l(t, n = !1) {
  let r = n ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu"), e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((a) => a.toLowerCase()).join("");
}
function p(t, n = !1) {
  let r = n ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((a) => a.toLowerCase()).join("-");
}
function f(t, n, r = " ") {
  const e = Math.floor((n - t.length) / 2) + t.length;
  return t.padStart(e, r).padEnd(n, r);
}
function c(t, n = { numbers: !1, lower: !1 }) {
  const r = n?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((a) => u(a, n?.lower)).join("");
}
function g(t, n = !1) {
  let r = n ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((a) => a.toLowerCase()).join("_");
}
function h(t, n = !1) {
  return t.replace(new RegExp("\\p{L}+", "gu"), (r) => u(r, n));
}
function m(t, n = { numbers: !1, lower: !1 }) {
  const r = n?.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu;
  let e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((a) => u(a, n?.lower)).join("-");
}
function C(t, n = 32, r = "...") {
  return t.substring(0, n) + r;
}
function L() {
  String.prototype.camelCase = function(t) {
    return i(this, t);
  }, String.prototype.capitalize = function(t) {
    return u(this, t);
  }, String.prototype.flatCase = function(t) {
    return l(this, t);
  }, String.prototype.kebabCase = function(t) {
    return p(this, t);
  }, String.prototype.pad = function(t, n) {
    return f(this, t, n);
  }, String.prototype.pascalCase = function(t) {
    return c(this, t);
  }, String.prototype.snakeCase = function(t) {
    return g(this, t);
  }, String.prototype.titleCase = function(t) {
    return h(this, t);
  }, String.prototype.trainCase = function(t) {
    return m(this, t);
  }, String.prototype.truncate = function(t, n) {
    return C(this, t, n);
  };
}
export {
  i as camelCase,
  u as capitalize,
  l as flatCase,
  p as kebabCase,
  f as pad,
  c as pascalCase,
  g as snakeCase,
  h as titleCase,
  m as trainCase,
  C as truncate,
  L as useProto
};
