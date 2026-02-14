function a(r, e = !1) {
  let n = r.charAt(0).toUpperCase(), t = r.slice(1);
  return e && (t = t.toLowerCase()), `${n}${t}`;
}
function s(r, e = { numbers: !1, lower: !1 }) {
  let n = /[\p{L}]+/gu;
  typeof e.numbers < "u" && e.numbers && (n = /[\p{L}\p{N}]+/gu);
  let t = r.match(n);
  if (t.length <= 1)
    return null;
  let l = t.shift();
  const u = typeof e.lower < "u" ? e.lower : !1;
  return u && (l = l.toLowerCase()), t = t.map((f) => a(f, u)), t.unshift(l), t.join("");
}
function o(r, e = !1) {
  let n = e ? /[\p{L}\p{N}]+/gu : /[\p{L}]+/gu, t = r.match(n);
  return t.length <= 1 ? null : t.map((l) => l.toLowerCase()).join("");
}
function p(r, e = !1) {
  let n = e ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, t = r.match(n);
  return t.length <= 1 ? null : t.map((l) => l.toLowerCase()).join("-");
}
function i(r, e, n = " ") {
  const t = Math.floor((e - r.length) / 2) + r.length;
  return r.padStart(t, n).padEnd(e, n);
}
function w(r, e = { numbers: !1, lower: !1 }) {
  let n = /[\p{L}]+/gu;
  typeof e.numbers < "u" && e.numbers && (n = /[\p{L}\p{N}]+/gu);
  let t = r.match(n);
  if (t.length <= 1)
    return null;
  const l = typeof e.lower < "u" ? e.lower : !1;
  return t.map((u) => a(u, l)).join("");
}
function c(r, e = !1) {
  let n = e ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, t = r.match(n);
  return t.length <= 1 ? null : t.map((l) => l.toLowerCase()).join("_");
}
function d(r, e = { numbers: !1, lower: !1 }) {
  let n = /[\p{L}]+/gu;
  typeof e.numbers < "u" && e.numbers && (n = /[\p{L}\p{N}]+/gu);
  let t = r.match(n);
  if (t.length <= 1)
    return null;
  const l = typeof e.lower < "u" ? e.lower : !1;
  return t.map((u) => a(u, l)).join(" ");
}
function m(r, e = { numbers: !1, lower: !1 }) {
  let n = /[\p{L}-]+/gu;
  typeof e.numbers < "u" && e.numbers && (n = /[\p{L}\p{N}-]+/gu);
  let t = r.match(n);
  if (t.length <= 1)
    return null;
  const l = typeof e.lower < "u" ? e.lower : !1;
  return t.map((u) => a(u, l)).join("-");
}
function g(r, e = 32, n = "...") {
  return r.substring(0, e) + n;
}
export {
  s as camelCase,
  a as capitalize,
  o as flatCase,
  p as kebabCase,
  i as pad,
  w as pascalCase,
  c as snakeCase,
  d as titleCase,
  m as trainCase,
  g as truncate
};
