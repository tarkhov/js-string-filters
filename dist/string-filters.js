function l(e) {
  let n = e.charAt(0).toUpperCase(), r = e.slice(1).toLowerCase();
  return `${n}${r}`;
}
function p(e, n = !1) {
  let r = n ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu, t = e.match(r);
  if (t.length <= 1)
    return null;
  let a = t.shift();
  return a = a.toLowerCase(), t = t.map((u) => l(u)), t.unshift(a), t.join("");
}
function o(e, n = !1) {
  let r = n ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu, t = e.match(r);
  return t.length <= 1 ? null : t.map((a) => a.toLowerCase()).join("");
}
function s(e, n = !1) {
  let r = n ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, t = e.match(r);
  return t.length <= 1 ? null : t.map((a) => a.toLowerCase()).join("-");
}
function i(e, n, r = " ") {
  const t = Math.floor((n - e.length) / 2) + e.length;
  return e.padStart(t, r).padEnd(n, r);
}
function f(e, n = !1) {
  let r = n ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu, t = e.match(r);
  return t.length <= 1 ? null : t.map((a) => l(a)).join("");
}
function c(e, n = !1) {
  let r = n ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, t = e.match(r);
  return t.length <= 1 ? null : t.map((a) => a.toLowerCase()).join("_");
}
function g(e, n = !1) {
  let r = n ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu, t = e.match(r);
  return t.length <= 1 ? null : t.map((a) => l(a)).join(" ");
}
function L(e, n = !1) {
  let r = n ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, t = e.match(r);
  return t.length <= 1 ? null : t.map((a) => l(a)).join("-");
}
function h(e, n = 32, r = "...") {
  return e.substring(0, n) + r;
}
export {
  p as camelCase,
  l as capitalize,
  o as flatCase,
  s as kebabCase,
  i as pad,
  f as pascalCase,
  c as snakeCase,
  g as titleCase,
  L as trainCase,
  h as truncate
};
