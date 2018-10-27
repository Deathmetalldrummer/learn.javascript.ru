var tutorial = webpackJsonp_name_([ 5 ], {
0: function(module, exports, __webpack_require__) {
"use strict";
function init() {
initTaskButtons(), initMoreEnContentButton(), initFolderList(), initSidebarHighlight(), 
initRuNewsletterForm(), initEnSubscribeButton(), delegate(document, '[data-action="tutorial-map"]', "click", function(e) {
1 == e.which && (e.preventDefault(), showTutorialMapModal());
}), prism.init(), window.ebookType && __webpack_require__.e(6, function() {
__webpack_require__(925).init();
});
var e = document.querySelector(".tutorial-map");
e ? new TutorialMap(e) : /[&?]map\b/.test(location.href) && showTutorialMapModal();
}
function initRuNewsletterForm() {
var e = document.querySelector("[data-newsletter-subscribe-form]");
e && (e.onsubmit = function(t) {
t.preventDefault(), newsletter.submitSubscribeForm(e);
});
}
function initEnSubscribeButton() {
var e = document.querySelector(".main-en-banner__subscribe");
e && newsletter.initEnSubscribeButton(e);
}
function showTutorialMapModal() {
/[&?]map\b/.test(location.href) || window.history.replaceState(null, null, ~location.href.indexOf("?") ? location.href + "&map" : location.href + "?map");
var e = new TutorialMapModal();
e.elem.addEventListener("tutorial-map-remove", function() {
window.history.replaceState(null, null, location.href.replace(/[&?]map\b/, ""));
});
}
function initMoreEnContentButton() {
var e = document.getElementsByClassName("list-sub__more");
if (e.length) for (var t = 0; t < e.length; t++) e[t].addEventListener("click", function() {
for (var e = "list-sub__item", t = e + "_phone_hidden", n = this.parentElement.querySelectorAll("." + e + "." + t), a = 0; a < n.length; a++) n[a].className = e, 
this.style.display = "none";
});
}
function initSidebarHighlight() {
function e() {
var e = document.getElementsByClassName("sidebar__navigation-link_active");
e[0] && e[0].classList.remove("sidebar__navigation-link_active");
for (var t = document.getElementsByTagName("h2"), n = 0; n < t.length; n++) {
var a = t[n];
if (a.getBoundingClientRect().top > 1) break;
}
if (n--, n >= 0) {
var r = t[n].firstElementChild && t[n].firstElementChild.getAttribute("href"), i = document.querySelector('.sidebar__navigation-link a[href="' + r + '"]');
r && i && i.classList.add("sidebar__navigation-link_active");
}
}
document.addEventListener("DOMContentLoaded", function() {
e(), window.addEventListener("scroll", e);
});
}
function initTaskButtons() {
delegate(document, ".task__solution", "click", function(e) {
var t = e.target.closest(".task");
t.classList.toggle("task_answer_open");
var n = t.querySelector(".task__answer");
n.getBoundingClientRect().bottom > document.documentElement.clientHeight && window.scrollBy(0, Math.min(200, n.getBoundingClientRect().bottom - document.documentElement.clientHeight));
}), delegate(document, ".task__answer-close", "click", function(e) {
e.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__step-show", "click", function(e) {
e.target.closest(".task__step").classList.toggle("task_step_open");
});
}
function initFolderList() {
delegate(document, ".lessons-list__lesson_level_1 > .lessons-list__link", "click", function(e) {
var t = e.delegateTarget, n = t.closest(".lessons-list").querySelector(".lessons-list__lesson_open");
n && n != t.parentNode && n.classList.remove("lessons-list__lesson_open"), t.parentNode.classList.toggle("lessons-list__lesson_open"), 
e.preventDefault();
});
}
var delegate = __webpack_require__(783), prism = __webpack_require__(878), xhr = __webpack_require__(790), TutorialMapModal = __webpack_require__(923), TutorialMap = __webpack_require__(924), newsletter = __webpack_require__(802);
window.runDemo = function(button) {
for (var demoElem, parent = button; (parent = parent.parentElement) && !(demoElem = parent.querySelector("[data-demo]")); ) ;
demoElem ? eval(demoElem.textContent) : alert("Error, no demo element");
}, init();
},
87: function(e, t) {
var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, a = function() {
var e = /\blang(?:uage)?-(\w+)\b/i, t = 0, a = n.Prism = {
util: {
encode: function(e) {
return e instanceof r ? new r(e.type, a.util.encode(e.content), e.alias) : "Array" === a.util.type(e) ? e.map(a.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
},
objId: function(e) {
return e.__id || Object.defineProperty(e, "__id", {
value: ++t
}), e.__id;
},
clone: function(e) {
var t = a.util.type(e);
switch (t) {
case "Object":
var n = {};
for (var r in e) e.hasOwnProperty(r) && (n[r] = a.util.clone(e[r]));
return n;

case "Array":
return e.map && e.map(function(e) {
return a.util.clone(e);
});
}
return e;
}
},
languages: {
extend: function(e, t) {
var n = a.util.clone(a.languages[e]);
for (var r in t) n[r] = t[r];
return n;
},
insertBefore: function(e, t, n, r) {
r = r || a.languages;
var i = r[e];
if (2 == arguments.length) {
n = arguments[1];
for (var s in n) n.hasOwnProperty(s) && (i[s] = n[s]);
return i;
}
var o = {};
for (var l in i) if (i.hasOwnProperty(l)) {
if (l == t) for (var s in n) n.hasOwnProperty(s) && (o[s] = n[s]);
o[l] = i[l];
}
return a.languages.DFS(a.languages, function(t, n) {
n === r[e] && t != e && (this[t] = o);
}), r[e] = o;
},
DFS: function(e, t, n, r) {
r = r || {};
for (var i in e) e.hasOwnProperty(i) && (t.call(e, i, e[i], n || i), "Object" !== a.util.type(e[i]) || r[a.util.objId(e[i])] ? "Array" !== a.util.type(e[i]) || r[a.util.objId(e[i])] || (r[a.util.objId(e[i])] = !0, 
a.languages.DFS(e[i], t, i, r)) : (r[a.util.objId(e[i])] = !0, a.languages.DFS(e[i], t, null, r)));
}
},
plugins: {},
highlightAll: function(e, t) {
var n = {
callback: t,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
a.hooks.run("before-highlightall", n);
for (var r, i = n.elements || document.querySelectorAll(n.selector), s = 0; r = i[s++]; ) a.highlightElement(r, e === !0, n.callback);
},
highlightElement: function(t, r, i) {
for (var s, o, l = t; l && !e.test(l.className); ) l = l.parentNode;
l && (s = (l.className.match(e) || [ , "" ])[1].toLowerCase(), o = a.languages[s]), 
t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s, 
l = t.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s);
var c = t.textContent, u = {
element: t,
language: s,
grammar: o,
code: c
};
if (a.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (u.element.textContent = u.code), 
void a.hooks.run("complete", u);
if (a.hooks.run("before-highlight", u), r && n.Worker) {
var d = new Worker(a.filename);
d.onmessage = function(e) {
u.highlightedCode = e.data, a.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, 
i && i.call(u.element), a.hooks.run("after-highlight", u), a.hooks.run("complete", u);
}, d.postMessage(JSON.stringify({
language: u.language,
code: u.code,
immediateClose: !0
}));
} else u.highlightedCode = a.highlight(u.code, u.grammar, u.language), a.hooks.run("before-insert", u), 
u.element.innerHTML = u.highlightedCode, i && i.call(t), a.hooks.run("after-highlight", u), 
a.hooks.run("complete", u);
},
highlight: function(e, t, n) {
var i = a.tokenize(e, t);
return r.stringify(a.util.encode(i), n);
},
tokenize: function(e, t, n) {
var r = a.Token, i = [ e ], s = t.rest;
if (s) {
for (var o in s) t[o] = s[o];
delete t.rest;
}
e: for (var o in t) if (t.hasOwnProperty(o) && t[o]) {
var l = t[o];
l = "Array" === a.util.type(l) ? l : [ l ];
for (var c = 0; c < l.length; ++c) {
var u = l[c], d = u.inside, p = !!u.lookbehind, m = !!u.greedy, h = 0, f = u.alias;
if (m && !u.pattern.global) {
var g = ("" + u.pattern).match(/[imuy]*$/)[0];
u.pattern = RegExp(u.pattern.source, g + "g");
}
u = u.pattern || u;
for (var b = 0, E = 0; b < i.length; E += i[b].length, ++b) {
var y = i[b];
if (i.length > e.length) break e;
if (!(y instanceof r)) {
u.lastIndex = 0;
var v = u.exec(y), w = 1;
if (!v && m && b != i.length - 1) {
if (u.lastIndex = E, v = u.exec(e), !v) break;
for (var T = v.index + (p ? v[1].length : 0), S = v.index + v[0].length, k = b, A = E, C = i.length; k < C && A < S; ++k) A += i[k].length, 
T >= A && (++b, E = A);
if (i[b] instanceof r || i[k - 1].greedy) continue;
w = k - b, y = e.slice(E, A), v.index -= E;
}
if (v) {
p && (h = v[1].length);
var T = v.index + h, v = v[0].slice(h), S = T + v.length, L = y.slice(0, T), _ = y.slice(S), I = [ b, w ];
L && I.push(L);
var N = new r(o, d ? a.tokenize(v, d) : v, f, v, m);
I.push(N), _ && I.push(_), Array.prototype.splice.apply(i, I);
}
}
}
}
}
return i;
},
hooks: {
all: {},
add: function(e, t) {
var n = a.hooks.all;
n[e] = n[e] || [], n[e].push(t);
},
run: function(e, t) {
var n = a.hooks.all[e];
if (n && n.length) for (var r, i = 0; r = n[i++]; ) r(t);
}
}
}, r = a.Token = function(e, t, n, a, r) {
this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length, 
this.greedy = !!r;
};
if (r.stringify = function(e, t, n) {
if ("string" == typeof e) return e;
if ("Array" === a.util.type(e)) return e.map(function(n) {
return r.stringify(n, t, e);
}).join("");
var i = {
type: e.type,
content: r.stringify(e.content, t, n),
tag: "span",
classes: [ "token", e.type ],
attributes: {},
language: t,
parent: n
};
if ("comment" == i.type && (i.attributes.spellcheck = "true"), e.alias) {
var s = "Array" === a.util.type(e.alias) ? e.alias : [ e.alias ];
Array.prototype.push.apply(i.classes, s);
}
a.hooks.run("wrap", i);
var o = Object.keys(i.attributes).map(function(e) {
return e + '="' + (i.attributes[e] || "").replace(/"/g, "&quot;") + '"';
}).join(" ");
return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + i.content + "</" + i.tag + ">";
}, !n.document) return n.addEventListener ? (n.addEventListener("message", function(e) {
var t = JSON.parse(e.data), r = t.language, i = t.code, s = t.immediateClose;
n.postMessage(a.highlight(i, a.languages[r], r)), s && n.close();
}, !1), n.Prism) : n.Prism;
var i = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
return i && (a.filename = i.src, document.addEventListener && !i.hasAttribute("data-manual") && ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(a.highlightAll) : window.setTimeout(a.highlightAll, 16) : document.addEventListener("DOMContentLoaded", a.highlightAll))), 
n.Prism;
}();
void 0 !== e && e.exports && (e.exports = a), "undefined" != typeof global && (global.Prism = a);
},
88: function(e, t) {
Prism.languages.markup = {
comment: /<!--[\w\W]*?-->/,
prolog: /<\?[\w\W]+?\?>/,
doctype: /<!DOCTYPE[\w\W]+?>/i,
cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/i,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"attr-value": {
pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
inside: {
punctuation: /[=>"']/
}
},
punctuation: /\/?>/,
"attr-name": {
pattern: /[^\s>\/]+/,
inside: {
namespace: /^[^\s>\/:]+:/
}
}
}
},
entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, 
Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
},
89: function(e, t) {
Prism.languages.css = {
comment: /\/\*[\w\W]*?\*\//,
atrule: {
pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
inside: {
rule: /@[\w-]+/
}
},
url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
string: {
pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
property: /(\b|\B)[\w-]+(?=\s*:)/i,
important: /\B!important\b/i,
function: /[-a-z0-9]+(?=\()/i,
punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), 
Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
style: {
pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
lookbehind: !0,
inside: Prism.languages.css,
alias: "language-css"
}
}), Prism.languages.insertBefore("inside", "attr-value", {
"style-attr": {
pattern: /\s*style=("|').*?\1/i,
inside: {
"attr-name": {
pattern: /^\s*style/i,
inside: Prism.languages.markup.tag.inside
},
punctuation: /^\s*=\s*['"]|['"]\s*$/,
"attr-value": {
pattern: /.+/i,
inside: Prism.languages.css
}
},
alias: "language-css"
}
}, Prism.languages.markup.tag));
},
90: function(e, t) {
Prism.languages.css.selector = {
pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
inside: {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
"pseudo-class": /:[-\w]+(?:\(.*\))?/,
class: /\.[-:\.\w]+/,
id: /#[-:\.\w]+/,
attribute: /\[[^\]]+\]/
}
}, Prism.languages.insertBefore("css", "function", {
hexcode: /#[\da-f]{3,6}/i,
entity: /\\[\da-f]{1,8}/i,
number: /[\d%\.]+/
});
},
91: function(e, t) {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
lookbehind: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0
} ],
string: {
pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /(\.|\\)/
}
},
keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
boolean: /\b(true|false)\b/,
function: /[a-z0-9_]+(?=\()/i,
number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
punctuation: /[{}[\];(),.:]/
};
},
92: function(e, t) {
Prism.languages.javascript = Prism.languages.extend("clike", {
keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
lookbehind: !0,
greedy: !0
}
}), Prism.languages.insertBefore("javascript", "string", {
"template-string": {
pattern: /`(?:\\\\|\\?[^\\])*?`/,
greedy: !0,
inside: {
interpolation: {
pattern: /\$\{[^}]+\}/,
inside: {
"interpolation-punctuation": {
pattern: /^\$\{|\}$/,
alias: "punctuation"
},
rest: Prism.languages.javascript
}
},
string: /[\s\S]+/
}
}
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
script: {
pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
lookbehind: !0,
inside: Prism.languages.javascript,
alias: "language-javascript"
}
}), Prism.languages.js = Prism.languages.javascript;
},
93: function(e, t) {
!function(e) {
var t = /#(?!\{).+/, n = {
pattern: /#\{[^}]+\}/,
alias: "variable"
};
e.languages.coffeescript = e.languages.extend("javascript", {
comment: t,
string: [ {
pattern: /'(?:\\?[^\\])*?'/,
greedy: !0
}, {
pattern: /"(?:\\?[^\\])*?"/,
greedy: !0,
inside: {
interpolation: n
}
} ],
keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
"class-member": {
pattern: /@(?!\d)\w+/,
alias: "variable"
}
}), e.languages.insertBefore("coffeescript", "comment", {
"multiline-comment": {
pattern: /###[\s\S]+?###/,
alias: "comment"
},
"block-regex": {
pattern: /\/{3}[\s\S]*?\/{3}/,
alias: "regex",
inside: {
comment: t,
interpolation: n
}
}
}), e.languages.insertBefore("coffeescript", "string", {
"inline-javascript": {
pattern: /`(?:\\?[\s\S])*?`/,
inside: {
delimiter: {
pattern: /^`|`$/,
alias: "punctuation"
},
rest: e.languages.javascript
}
},
"multiline-string": [ {
pattern: /'''[\s\S]*?'''/,
greedy: !0,
alias: "string"
}, {
pattern: /"""[\s\S]*?"""/,
greedy: !0,
alias: "string",
inside: {
interpolation: n
}
} ]
}), e.languages.insertBefore("coffeescript", "keyword", {
property: /(?!\d)\w+(?=\s*:(?!:))/
}), delete e.languages.coffeescript["template-string"];
}(Prism);
},
94: function(e, t) {
Prism.languages.http = {
"request-line": {
pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,
inside: {
property: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
"attr-name": /:\w+/
}
},
"response-status": {
pattern: /^HTTP\/1.[01] [0-9]+.*/m,
inside: {
property: {
pattern: /(^HTTP\/1.[01] )[0-9]+.*/i,
lookbehind: !0
}
}
},
"header-name": {
pattern: /^[\w-]+:(?=.)/m,
alias: "keyword"
}
};
var n = {
"application/json": Prism.languages.javascript,
"application/xml": Prism.languages.markup,
"text/xml": Prism.languages.markup,
"text/html": Prism.languages.markup
};
for (var a in n) if (n[a]) {
var r = {};
r[a] = {
pattern: RegExp("(content-type:\\s*" + a + "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*", "i"),
lookbehind: !0,
inside: {
rest: n[a]
}
}, Prism.languages.insertBefore("http", "header-name", r);
}
},
95: function(e, t) {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
lookbehind: !0
},
atrule: {
pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
inside: {
rule: /@[\w-]+/
}
},
url: /(?:[-a-z]+-)*url(?=\()/i,
selector: {
pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
inside: {
parent: {
pattern: /&/,
alias: "important"
},
placeholder: /%[-_\w]+/,
variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
}
}
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: [ /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
pattern: /( +)(?:from|through)(?= )/,
lookbehind: !0
} ]
}), Prism.languages.scss.property = {
pattern: /(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,
inside: {
variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
}
}, Prism.languages.insertBefore("scss", "important", {
variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
placeholder: {
pattern: /%[-_\w]+/,
alias: "selector"
},
statement: {
pattern: /\B!(?:default|optional)\b/i,
alias: "keyword"
},
boolean: /\b(?:true|false)\b/,
null: /\bnull\b/,
operator: {
pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
lookbehind: !0
}
}), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss);
},
96: function(e, t) {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
string: {
pattern: /(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,
lookbehind: !0
},
variable: /@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,
function: /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,
boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
number: /\b-?(?:0x)?\d*\.?[\da-f]+\b/,
operator: /[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/
};
},
97: function(e, t) {
Prism.languages.php = Prism.languages.extend("clike", {
keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
constant: /\b[A-Z0-9_]{2,}\b/,
comment: {
pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
lookbehind: !0,
greedy: !0
}
}), Prism.languages.insertBefore("php", "class-name", {
"shell-comment": {
pattern: /(^|[^\\])#.*/,
lookbehind: !0,
alias: "comment"
}
}), Prism.languages.insertBefore("php", "keyword", {
delimiter: /\?>|<\?(?:php)?/i,
variable: /\$\w+\b/i,
package: {
pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
lookbehind: !0,
inside: {
punctuation: /\\/
}
}
}), Prism.languages.insertBefore("php", "operator", {
property: {
pattern: /(->)[\w]+/,
lookbehind: !0
}
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) {
"php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(t) {
return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}";
}));
}), Prism.hooks.add("before-insert", function(e) {
"php" === e.language && (e.code = e.backupCode, delete e.backupCode);
}), Prism.hooks.add("after-highlight", function(e) {
if ("php" === e.language) {
for (var t, n = 0; t = e.tokenStack[n]; n++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (n + 1) + "}}}", Prism.highlight(t, e.grammar, "php").replace(/\$/g, "$$$$"));
e.element.innerHTML = e.highlightedCode;
}
}), Prism.hooks.add("wrap", function(e) {
"php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'));
}), Prism.languages.insertBefore("php", "comment", {
markup: {
pattern: /<[^?]\/?(.*?)>/,
inside: Prism.languages.markup
},
php: /\{\{\{PHP[0-9]+\}\}\}/
}));
},
98: function(e, t) {
Prism.languages.insertBefore("php", "variable", {
this: /\$this\b/,
global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
scope: {
pattern: /\b[\w\\]+::/,
inside: {
keyword: /(static|self|parent)/,
punctuation: /(::|\\)/
}
}
});
},
99: function(e, t) {
Prism.languages.python = {
"triple-quoted-string": {
pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/,
alias: "string"
},
comment: {
pattern: /(^|[^\\])#.*/,
lookbehind: !0
},
string: {
pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
greedy: !0
},
function: {
pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
lookbehind: !0
},
"class-name": {
pattern: /(\bclass\s+)[a-z0-9_]+/i,
lookbehind: !0
},
keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
boolean: /\b(?:True|False)\b/,
number: /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
punctuation: /[{}[\];(),.:]/
};
},
100: function(e, t) {
!function(e) {
e.languages.ruby = e.languages.extend("clike", {
comment: /#(?!\{[^\r\n]*?\}).*/,
keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
});
var t = {
pattern: /#\{[^}]+\}/,
inside: {
delimiter: {
pattern: /^#\{|\}$/,
alias: "tag"
},
rest: e.util.clone(e.languages.ruby)
}
};
e.languages.insertBefore("ruby", "keyword", {
regex: [ {
pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
inside: {
interpolation: t
}
}, {
pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
inside: {
interpolation: t
}
}, {
pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
inside: {
interpolation: t
}
}, {
pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
inside: {
interpolation: t
}
}, {
pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
inside: {
interpolation: t
}
}, {
pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
lookbehind: !0
} ],
variable: /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
symbol: /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/
}), e.languages.insertBefore("ruby", "number", {
builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
constant: /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/
}), e.languages.ruby.string = [ {
pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
greedy: !0,
inside: {
interpolation: t
}
}, {
pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
greedy: !0,
inside: {
interpolation: t
}
}, {
pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
greedy: !0,
inside: {
interpolation: t
}
}, {
pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
greedy: !0,
inside: {
interpolation: t
}
}, {
pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
greedy: !0,
inside: {
interpolation: t
}
}, {
pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,
greedy: !0,
inside: {
interpolation: t
}
} ];
}(Prism);
},
101: function(e, t) {
Prism.languages.java = Prism.languages.extend("clike", {
keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,
operator: {
pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
lookbehind: !0
}
}), Prism.languages.insertBefore("java", "function", {
annotation: {
alias: "punctuation",
pattern: /(^|[^.])@\w+/,
lookbehind: !0
}
});
},
116: function(e, t) {},
790: function(e, t, n) {
"use strict";
function a(e) {
function t(e, t) {
var n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function n(e, n) {
var a = t("fail", n);
a.reason = e, r.dispatchEvent(a);
}
function a(e, n) {
var a = t("success", n);
a.result = e, r.dispatchEvent(a);
}
var r = new XMLHttpRequest(), s = e.method || "GET", o = e.body, l = e.url;
r.open(s, l, !e.sync), r.method = s;
var c = i();
c && !e.skipCsrf && r.setRequestHeader("X-XSRF-TOKEN", c), "[object Object]" == {}.toString.call(o) && (r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
o = JSON.stringify(o)), e.noDocumentEvents || (r.addEventListener("loadstart", function(e) {
r.timeStart = Date.now();
var n = t("xhrstart", e);
document.dispatchEvent(n);
}), r.addEventListener("loadend", function(e) {
var n = t("xhrend", e);
document.dispatchEvent(n);
}), r.addEventListener("success", function(e) {
var n = t("xhrsuccess", e);
n.result = e.result, document.dispatchEvent(n);
}), r.addEventListener("fail", function(e) {
var n = t("xhrfail", e);
n.reason = e.reason, document.dispatchEvent(n);
})), e.raw || r.setRequestHeader("Accept", "application/json"), r.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var u = e.normalStatuses || [ 200 ];
return r.addEventListener("error", function(e) {
n("Ошибка связи с сервером.", e);
}), r.addEventListener("timeout", function(e) {
n("Превышено максимально допустимое время ожидания ответа от сервера.", e);
}), r.addEventListener("abort", function(e) {
n("Запрос был прерван.", e);
}), r.addEventListener("load", function(t) {
if (!r.status) return void n("Не получен ответ от сервера.", t);
if (u.indexOf(r.status) == -1) return void n("Ошибка на стороне сервера (код " + r.status + "), попытайтесь позднее.", t);
var i = r.responseText, s = r.getResponseHeader("Content-Type");
if (s.match(/^application\/json/) || e.json) try {
i = JSON.parse(i);
} catch (e) {
return void n("Некорректный формат ответа от сервера.", e);
}
a(i, t);
}), setTimeout(function() {
r.send(o);
}, 0), r;
}
var r = n(782), i = n(791);
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = a;
},
791: function(e, t) {
"use strict";
e.exports = function() {
var e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
792: function(e, t, n) {
"use strict";
function a(e) {
return null != e && "" !== e;
}
function r(e) {
return (Array.isArray(e) ? e.map(r) : e && "object" === (void 0 === e ? "undefined" : o(e)) ? Object.keys(e).filter(function(t) {
return e[t];
}) : [ e ]).filter(a).join(" ");
}
function i(e) {
return l[e] || e;
}
function s(e) {
var t = (e + "").replace(c, i);
return t === "" + e ? e : t;
}
var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
t.merge = function e(t, n) {
if (1 === arguments.length) {
for (var r = t[0], i = 1; i < t.length; i++) r = e(r, t[i]);
return r;
}
var s = t.class, o = n.class;
(s || o) && (s = s || [], o = o || [], Array.isArray(s) || (s = [ s ]), Array.isArray(o) || (o = [ o ]), 
t.class = s.concat(o).filter(a));
for (var l in n) "class" != l && (t[l] = n[l]);
return t;
}, t.joinClasses = r, t.cls = function(e, n) {
for (var a = [], i = 0; i < e.length; i++) n && n[i] ? a.push(t.escape(r([ e[i] ]))) : a.push(r(e[i]));
var s = r(a);
return s.length ? ' class="' + s + '"' : "";
}, t.style = function(e) {
return e && "object" === (void 0 === e ? "undefined" : o(e)) ? Object.keys(e).map(function(t) {
return t + ":" + e[t];
}).join(";") : e;
}, t.attr = function(e, n, a, r) {
return "style" === e && (n = t.style(n)), "boolean" == typeof n || null == n ? n ? " " + (r ? e : e + '="' + e + '"') : "" : 0 == e.indexOf("data") && "string" != typeof n ? (JSON.stringify(n).indexOf("&") !== -1, 
n && "function" == typeof n.toISOString, " " + e + "='" + JSON.stringify(n).replace(/'/g, "&apos;") + "'") : a ? (n && "function" == typeof n.toISOString, 
" " + e + '="' + t.escape(n) + '"') : (n && "function" == typeof n.toISOString, 
" " + e + '="' + n + '"');
}, t.attrs = function(e, n) {
var a = [], i = Object.keys(e);
if (i.length) for (var s = 0; s < i.length; ++s) {
var o = i[s], l = e[o];
"class" == o ? (l = r(l)) && a.push(" " + o + '="' + l + '"') : a.push(t.attr(o, l, !1, n));
}
return a.join("");
};
var l = {
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;"
}, c = /[&<>"]/g;
t.escape = s, t.rethrow = function e(t, a, r, i) {
if (!(t instanceof Error)) throw t;
if (!("undefined" == typeof window && a || i)) throw t.message += " on line " + r, 
t;
try {
i = i || n(116).readFileSync(a, "utf8");
} catch (n) {
e(t, null, r);
}
var s = 3, o = i.split("\n"), l = Math.max(r - s, 0), c = Math.min(o.length, r + s), s = o.slice(l, c).map(function(e, t) {
var n = t + l + 1;
return (n == r ? "  > " : "    ") + n + "| " + e;
}).join("\n");
throw t.path = a, t.message = (a || "Jade") + ":" + r + "\n" + s + "\n\n" + t.message, 
t;
}, t.DebugItem = function(e, t) {
this.lineno = e, this.filename = t;
};
},
793: function(e, t, n) {
"use strict";
function a(e) {
e.bem = r, e.t = o, e.thumb = i, e.lang = s;
}
var r = n(794)(), i = n(795).thumb, s = n(796).lang, o = n(797);
e.exports = function(e, t) {
return t = t ? Object.create(t) : {}, a(t), e(t);
};
},
794: function(e, t, n) {
"use strict";
var a = n(792);
e.exports = function(e) {
function t(e, t, n, r, i) {
var s = i || "div";
switch (s) {
case "img":
n.alt && !n.title && (n.title = ""), n.title && !n.alt && (n.alt = n.title), n.alt || (n.alt = "");
break;

case "input":
n.type || (n.type = "text");
break;

case "html":
e.push("<!DOCTYPE HTML>");
break;

case "a":
n.href || (n.href = "#");
}
e.push("<" + s + a.attrs(a.merge([ n ]), !0) + ">"), t && t(), [ "area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr" ].indexOf(s) == -1 && e.push("</" + s + ">");
}
return e = e || {}, e.prefix = e.prefix || "", e.element = e.element || "__", e.modifier = e.modifier || "_", 
function(n, a, r, i) {
var s = this.block, o = this.attributes || {};
if (!o.class && r && !i) throw Error("Block without class: " + r);
if (o.class) {
var l = o.class;
l instanceof Array && (l = l.join(" ")), l = l.split(" ");
var c;
try {
c = l[0].match(RegExp("^(((?!" + e.element + "|" + e.modifier + ").)+)"))[1];
} catch (e) {
throw Error("Incorrect bem class: " + l[0]);
}
i ? l[0] = a[a.length - 1] + e.element + l[0] : a[a.length] = c;
var u = (i ? a[a.length - 1] + e.element : "") + c;
l.indexOf(u) === -1 && (l[l.length] = u);
for (var d = 0; d < l.length; d++) {
var p = l[d];
p.match(RegExp("^(?!" + e.element + ")" + e.modifier)) ? l[d] = u + p : p.match(RegExp("^" + e.element)) && (a[a.length - 2] ? l[d] = a[a.length - 2] + p : l[d] = a[a.length - 1] + p), 
l[d].match(RegExp("^" + u + "($|(?=" + e.element + "|" + e.modifier + "))")) && (l[d] = e.prefix + l[d]);
}
o.class = l.sort().join(" ");
}
t(n, s, o, a, r), i || a.pop();
};
};
},
795: function(e, t) {
"use strict";
t.thumb = function(e, t, n) {
if (!e) return e;
var a = window.devicePixelRatio;
t *= a, n *= a;
var r = t <= 160 && n <= 160 ? "t" : t <= 320 && n <= 320 ? "m" : t <= 640 && n <= 640 ? "i" : t <= 1024 && n <= 1024 ? "h" : "";
return e.slice(0, e.lastIndexOf(".")) + r + e.slice(e.lastIndexOf("."));
};
},
802: function(e, t, n) {
"use strict";
function a(e, t) {
if (e.elements.email.value) {
var n = e.elements.slug, a = [];
if (n.length) for (var r = 0; r < n.length; r++) {
var l = n[r];
l.checked && a.push(l.value);
} else a.push(n.value);
if (!a.length) return void new o.Error(c("newsletter.client.choose_newsletter"));
var u = {
email: e.elements.email.value,
slug: a
}, d = s({
method: "POST",
url: e.action,
body: u
}), p = e.querySelector('[type="submit"]'), m = new i({
elem: p,
size: "small",
elemClass: "button_loading"
});
m.start(), p.disabled = !0, d.addEventListener("loadend", function() {
m.stop(), p.disabled = !1;
});
var h = e.getAttribute("data-newsletter-subscribe-form");
d.addEventListener("success", function(n) {
200 == this.status ? (h && (window.metrika.reachGoal("NEWSLETTER-SUBSCRIBE", {
form: h
}), window.ga("send", "event", "newsletter", "subscribe", h)), new o.Success(n.result.message, "slow"), 
e.elements.email.value = "", t && t()) : (window.metrika.reachGoal("NEWSLETTER-SUBSCRIBE-FAIL", {
form: h
}), window.ga("send", "event", "newsletter", "subscribe-fail", h), new o.Error(n.result.message));
});
}
}
function r(e) {
e.addEventListener("click", function() {
return new l({
onSubmit: a
});
});
}
var i = n(785), s = n(790), o = n(782), l = n(928), c = n(797), u = n(796).lang;
c.requirePhrase("newsletter.client", n(930)("./" + u + ".yml")), t.submitSubscribeForm = a, 
t.initEnSubscribeButton = r;
},
821: function(e, t) {
"use strict";
function n() {
for (var e = document.querySelectorAll("[data-sticky]"), t = 0; t < e.length; t++) {
var n = e[t], r = n.dataset.sticky ? document.querySelector(n.dataset.sticky) : document.body;
if (n.getBoundingClientRect().top < 0) {
if (n.style.cssText) return;
var i = n.getBoundingClientRect().left, s = a(n);
n.parentNode.insertBefore(s, n), r.appendChild(n), n.classList.add("sticky"), n.style.position = "fixed", 
n.style.top = 0, n.style.left = i + "px", n.style.zIndex = 101, n.style.background = "white", 
n.style.margin = 0, n.style.width = s.offsetWidth + "px", n.placeholder = s;
} else n.placeholder && n.placeholder.getBoundingClientRect().top > 0 && (n.style.cssText = "", 
n.classList.remove("sticky"), n.placeholder.parentNode.insertBefore(n, n.placeholder), 
n.placeholder.remove(), n.placeholder = null);
}
}
function a(e) {
var t = document.createElement("div"), n = getComputedStyle(e);
return t.style.width = e.offsetWidth + "px", t.style.marginLeft = n.marginLeft, 
t.style.marginRight = n.marginRight, t.style.height = e.offsetHeight + "px", t.style.marginBottom = n.marginBottom, 
t.style.marginTop = n.marginTop, t;
}
e.exports = n;
},
878: function(e, t, n) {
"use strict";
function a(e) {
for (var t = e.querySelectorAll(".code-example:not([data-prism-done])"), n = 0; n < t.length; n++) {
var a = t[n];
new o(a), a.setAttribute("data-prism-done", "1");
}
}
function r(e) {
for (var t = e.querySelectorAll("div.code-tabs:not([data-prism-done])"), n = 0; n < t.length; n++) new l(t[n]), 
t[n].setAttribute("data-prism-done", "1");
}
function i(e) {
a(e), r(e);
}
var s = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
s.setAttribute("data-manual", 1), n(87), n(88), n(89), n(90), n(91), n(92), n(93), 
n(94), n(95), n(96), n(97), n(98), n(99), n(100), n(101), Prism.tokenTag = "code";
var o = n(879), l = n(882);
t.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
i(document);
});
}, t.highlight = i;
},
879: function(e, t, n) {
"use strict";
function a(e) {
function t() {
var e = v.contentWindow;
return "function" != typeof e.postMessage ? void alert("Извините, запуск кода требует более современный браузер") : void e.postMessage(f, "https://ru.lookatcode.com/showjs");
}
function n() {
var t;
if (T && e.hasAttribute("data-refresh") && (T.remove(), T = null), T || (T = e.querySelector(".code-result")), 
T) t = T.querySelector("iframe"); else {
if (T = document.createElement("div"), T.className = "code-result code-example__result", 
t = document.createElement("iframe"), t.name = "frame-" + Math.random(), t.className = "code-result__iframe", 
"0" === e.getAttribute("data-demo-height")) T.style.display = "none"; else if (e.hasAttribute("data-demo-height")) {
var n = +e.getAttribute("data-demo-height");
t.style.height = n + "px";
}
T.appendChild(t), e.appendChild(T);
}
if (E) {
var a = t.contentDocument || t.contentWindow.document;
a.open(), a.write(d(f)), a.close(), "epub" == window.ebookType && setTimeout(function() {
[].forEach.call(a.querySelectorAll("script"), function(e) {
e.remove();
});
}, 2e3), e.hasAttribute("data-demo-height") || s.iframe(t), S && e.hasAttribute("data-autorun") || o(T) || T.scrollIntoView(!1);
} else {
var r = document.createElement("form");
r.style.display = "none", r.method = "POST", r.enctype = "multipart/form-data", 
r.action = "https://ru.lookatcode.com/showhtml", r.target = t.name;
var i = document.createElement("textarea");
i.name = "code", i.value = d(f), r.appendChild(i), t.parentNode.insertBefore(r, t.nextSibling), 
r.submit(), r.remove(), S && e.hasAttribute("data-autorun") || (t.onload = function() {
e.hasAttribute("data-demo-height") || s.iframe(t), o(T) || T.scrollIntoView(!1);
});
}
}
function a(e) {
var t = document.createElement("script");
t.text = e, document.head.appendChild(t).parentNode.removeChild(t);
}
function c() {
if (e.hasAttribute("data-global")) {
w || (w = document.createElement("iframe"), w.className = "js-frame", w.style.width = 0, 
w.style.height = 0, w.style.border = "none", w.name = "js-global-frame", document.body.appendChild(w));
var n = document.createElement("form");
n.style.display = "none", n.method = "POST", n.enctype = "multipart/form-data", 
n.action = "https://ru.lookatcode.com/showhtml", n.target = "js-global-frame";
var r = document.createElement("textarea");
r.name = "code", r.value = d("<script>\n" + f + "\n</script>"), n.appendChild(r), 
w.parentNode.insertBefore(n, w.nextSibling), n.submit(), n.remove();
} else if (E) {
if (e.hasAttribute("data-autorun")) return void a(f);
try {
window.eval.call(window, f);
} catch (e) {
alert("Error: " + e.message);
}
} else e.hasAttribute("data-refresh") && v && (v.remove(), v = null), v ? t() : (v = document.createElement("iframe"), 
v.className = "js-frame", v.src = "https://ru.lookatcode.com/showjs", v.style.width = 0, 
v.style.height = 0, v.style.border = "none", v.onload = function() {
t();
}, document.body.appendChild(v));
}
function u() {
var e;
if (b) e = d(f); else {
var t = f.replace(/^/gim, "    ");
e = "<!DOCTYPE html>\n<html>\n\n<body>\n  <script>\n" + t + "\n  </script>\n</body>\n\n</html>";
}
var n = document.createElement("form");
n.action = "http://plnkr.co/edit/?p=preview", n.method = "POST", n.target = "_blank", 
document.body.appendChild(n);
var a = document.createElement("textarea");
a.name = "files[index.html]", a.value = e, n.appendChild(a);
var r = document.createElement("input");
r.name = "description", r.value = "Fork from " + window.location, n.appendChild(r), 
n.submit(), n.remove();
}
function d(e) {
var t = e.toLowerCase(), n = t.match(/<body\b/i), a = t.match(/<\/body>/i), r = t.match(/<html>/i), i = t.match(/<\/html>/i), s = t.match(/^\s*<!doctype/);
if (s) return e;
var o = e;
return r || (o = "<html>\n" + o), i || (o += "\n</html>"), n || (o = o.replace("<html>", '<html>\n<head>\n  <meta charset="utf-8">\n</head><body>\n')), 
a || (o = o.replace("</html>", "\n</body>\n</html>")), o = "<!DOCTYPE HTML>\n" + o;
}
function p() {
g ? c() : n(), S = !1;
}
var m = e.querySelector("pre"), h = m.querySelector("code"), f = h.textContent;
Prism.highlightElement(h), l(m), r(m, e.getAttribute("data-highlight-block")), i(m, e.getAttribute("data-highlight-inline"));
var g = m.classList.contains("language-javascript"), b = m.classList.contains("language-markup"), E = +e.getAttribute("data-trusted"), y = +e.getAttribute("data-no-strict");
!y && g && (f = "'use strict';\n" + f);
var v, w, T, S = !0;
if (g || b) {
var k = e.querySelector('[data-action="run"]');
k && (k.onclick = function() {
return this.blur(), p(), !1;
});
var A = e.querySelector('[data-action="edit"]');
A && (A.onclick = function() {
return this.blur(), u(), !1;
}), e.hasAttribute("data-autorun") && ("epub" == window.ebookType && "no-epub" == e.getAttribute("data-autorun") ? e.querySelector("iframe").remove() : setTimeout(p, 100));
}
}
function r(e, t) {
if (t) for (var n, a = t.replace(/\s+/g, "").split(","), r = 0; n = a[r++]; ) {
n = n.split("-");
var i = +n[0], s = +n[1] || i, o = '<code class="block-highlight" data-start="' + i + '" data-end="' + s + '">' + Array(i + 1).join("\n") + '<code class="mask">' + Array(s - i + 2).join("\n") + "</code></code>";
e.insertAdjacentHTML("afterBegin", o);
}
}
function i(e, t) {
var n = e.querySelector('code[class*="language-"]');
t = t ? t.split(",") : [];
for (var a = 0; a < t.length; a++) {
var r = t[a].split(":"), i = +r[0], s = r[1].split("-"), o = +s[0], l = +s[1], c = '<code class="inline-highlight">' + Array(i + 1).join("\n") + Array(o + 1).join(" ") + '<code class="mask">' + Array(l - o + 1).join(" ") + "</code></code>";
n.insertAdjacentHTML("afterBegin", c);
}
}
var s = n(833), o = n(880), l = n(881);
e.exports = a;
},
880: function(e, t) {
"use strict";
function n(e) {
var t = e.getBoundingClientRect(), n = 0;
if (t.top < 0) n = t.bottom; else {
if (!(t.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
}
e.exports = n;
},
881: function(e, t) {
"use strict";
function n(e) {
var t, n = 1 + e.innerHTML.split("\n").length, a = Array(n);
a = a.join("<span></span>"), t = document.createElement("span"), t.className = "line-numbers-rows", 
t.innerHTML = a, e.hasAttribute("data-start") && (e.style.counterReset = "linenumber " + +e.dataset.start - 1), 
e.appendChild(t);
}
e.exports = n;
},
882: function(e, t, n) {
"use strict";
function a(e) {
window.ebookType || (this.elem = e, this.translateX = 0, this.switchesElem = e.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = e.querySelector("[data-code-tabs-left]"), 
this.arrowRight = e.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = function(e) {
e.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}.bind(this), this.arrowRight.onclick = function(e) {
e.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
}.bind(this), this.delegate(".code-tabs__switch", "click", this.onSwitchClick));
}
var r = n(783), i = n(881);
a.prototype.onSwitchClick = function(e) {
e.preventDefault();
for (var t, n = e.delegateTarget.parentNode.children, a = this.elem.querySelector("[data-code-tabs-content]").children, r = 0; r < n.length; r++) {
var i = n[r], s = a[r];
i == e.delegateTarget ? (t = r, s.classList.add("code-tabs__section_current"), i.classList.add("code-tabs__switch_current")) : (s.classList.remove("code-tabs__section_current"), 
i.classList.remove("code-tabs__switch_current"));
}
0 === t ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(a[t]));
}, a.prototype.highlightTab = function(e) {
if (!e.highlighted) {
var t = e.querySelector("pre"), n = t.querySelector("code");
Prism.highlightElement(n), i(t), e.highlighted = !0;
}
}, a.prototype.renderTranslate = function() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}, r.delegateMixin(a.prototype), e.exports = a;
},
923: function(e, t, n) {
"use strict";
function a() {
var e = this;
this.elem = document.createElement("div"), document.body.appendChild(this.elem);
var t = new s({
hasClose: !1
}), n = new o();
t.setContent(n.elem), n.start(), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
var a = r({
url: "/tutorial/map"
});
a.addEventListener("success", function(n) {
t.remove(), e.elem.innerHTML = '<div class="tutorial-map-overlay"></div>', e.mapElem = e.elem.firstChild, 
e.mapElem.innerHTML = n.result + '<button class="close-button tutorial-map-overlay__close"></button>', 
e.mapElem.addEventListener("click", function(t) {
t.target.classList.contains("tutorial-map-overlay__close") && e.remove();
}), document.addEventListener("keydown", e.onDocumentKeyDown), document.body.classList.add("tutorial-map_on"), 
e.mapElem.addEventListener("scroll", c), new l(e.mapElem.firstElementChild);
}), a.addEventListener("fail", function() {
return t.remove();
});
}
var r = n(790), i = n(783), s = n(788), o = n(785), l = n(924), c = n(821);
i.delegateMixin(a.prototype), a.prototype.remove = function() {
this.elem.dispatchEvent(new CustomEvent("tutorial-map-remove")), this.elem.remove(), 
document.body.classList.remove("tutorial-map_on"), document.removeEventListener("keydown", this.onDocumentKeyDown);
}, a.prototype.onDocumentKeyDown = function(e) {
27 == e.keyCode && (e.preventDefault(), this.remove());
}, e.exports = a;
},
924: function(e, t, n) {
"use strict";
function a(e) {
var t = this;
this.elem = e, this.showTasksCheckbox = e.querySelector("[data-tutorial-map-show-tasks]"), 
this.showTasksCheckbox.checked = +localStorage.showTasksCheckbox, this.updateShowTasks(), 
this.showTasksCheckbox.onchange = this.updateShowTasks.bind(this), this.filterInput = this.elem.querySelector("[data-tutorial-map-filter]"), 
this.textInputBlock = this.elem.querySelector(".tutorial-map__filter .text-input"), 
this.filterInput.oninput = this.onFilterInput.bind(this), this.filterInput.onkeydown = this.onFilterKeydown.bind(this), 
this.elem.querySelector(".text-input__clear").onclick = function() {
t.filterInput.value = "", t.showClearButton(!1), t.filter("");
}, this.chaptersCollapsed = JSON.parse(localStorage.tutorialMapChapters || "{}"), 
this.showChaptersCollapsed(), this.delegate(".tutorial-map__item > .tutorial-map__link", "click", function(e) {
e.preventDefault();
var t = e.delegateTarget.getAttribute("href");
this.chaptersCollapsed[t] ? delete this.chaptersCollapsed[t] : this.chaptersCollapsed[t] = 1, 
localStorage.tutorialMapChapters = JSON.stringify(this.chaptersCollapsed), this.showChaptersCollapsed();
});
var n = this.elem.querySelector('.tutorial-map-list-three__link[href="' + location.pathname + '"]');
n && n.classList.add("tutorial-map-list-three__link_active"), this.filterInput.focus();
}
function r(e, t) {
for (var n = 0, a = 0; n < e.length && a < t.length; ) e[n] == t[a] ? (n++, a++) : n++;
return a == t.length;
}
var i = n(837), s = n(783);
a.prototype.showChaptersCollapsed = function() {
for (var e = this.elem.querySelectorAll(".tutorial-map__item > .tutorial-map__link"), t = 0; t < e.length; t++) {
var n = e[t];
this.chaptersCollapsed[n.getAttribute("href")] ? n.parentNode.classList.add("tutorial-map__item_collapsed") : n.parentNode.classList.remove("tutorial-map__item_collapsed");
}
}, a.prototype.updateShowTasks = function() {
this.showTasksCheckbox.checked ? this.elem.classList.add("tutorial-map_show-tasks") : this.elem.classList.remove("tutorial-map_show-tasks"), 
localStorage.showTasksCheckbox = this.showTasksCheckbox.checked ? "1" : "0";
}, a.prototype.onFilterInput = function(e) {
this.showClearButton(e.target.value), this.throttleFilter(e.target.value);
}, a.prototype.onFilterKeydown = function(e) {
27 == e.keyCode && (this.filterInput.value = "", this.showClearButton(!1), this.filter(""));
}, a.prototype.showClearButton = function(e) {
e ? this.textInputBlock.classList.add("text-input_clear-button") : this.textInputBlock.classList.remove("text-input_clear-button");
}, a.prototype.focus = function() {
this.elem.tabIndex = -1, this.elem.focus();
}, a.prototype.filter = function(e) {
function t(t) {
return r(t.querySelector("a").innerHTML.toLowerCase(), e.replace(/\s/g, ""));
}
e = e.toLowerCase();
for (var n = this.showTasksCheckbox.checked, a = (this.elem.querySelectorAll(".tutorial-map-list a"), 
this.elem.querySelectorAll(".tutorial-map-list-two__item")), i = 0; i < a.length; i++) {
var s = a[i], o = s.querySelectorAll(".tutorial-map-list-three__item"), l = Array.prototype.reduce.call(o, function(e, a) {
var r = !1;
if (n) {
var i = a.querySelectorAll(".tutorial-map-list-four__item");
r = Array.prototype.reduce.call(i, function(e, n) {
var a = t(n);
return n.hidden = !a, e || a;
}, !1);
}
var s = r || t(a);
return a.hidden = !s, e || s;
}, !1);
s.hidden = !(l || t(s));
}
}, a.prototype.throttleFilter = i(a.prototype.filter, 200), s.delegateMixin(a.prototype), 
e.exports = a;
},
928: function(e, t, n) {
"use strict";
function a(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function r(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}
function i(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var s = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var a = t[n];
a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
Object.defineProperty(e, a.key, a);
}
}
return function(t, n, a) {
return n && e(t.prototype, n), a && e(t, a), t;
};
}(), o = n(788), l = n(793), c = n(929), u = function(e) {
function t(e) {
a(this, t);
var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
n.options = e || {}, n.options.inModal = !0;
var i = document.createElement("div");
return i.innerHTML = l(c, n.options), n.setContent(i), n.elem.querySelector('[type="email"]').focus(), 
n.elem.querySelector("form").addEventListener("submit", n.onFormSubmit.bind(n)), 
n;
}
return i(t, e), s(t, [ {
key: "onFormSubmit",
value: function(e) {
e.preventDefault(), this.options.onSubmit(e.target, this.remove.bind(this));
}
} ]), t;
}(o);
e.exports = u;
},
929: function(e, t, n) {
var a = n(792);
e.exports = function(e) {
var t, n = [], r = {}, i = e || {};
return function(e, i) {
n.push(""), i || (i = []), r.b = t = function(t, a, r) {
this && this.block, this && this.attributes || {};
e.call(this, n, i, t, a, r);
}, r.e = t = function(e) {
var t = this && this.block, n = this && this.attributes || {};
r.b.call({
block: function() {
t && t();
},
attributes: a.merge([ n ])
}, e, !0);
}, r.b.call({
block: function() {
r.e.call({
block: function() {
n.push("Subscribe to major updates");
},
attributes: {
class: "header"
}
}, "h3"), r.e.call({
block: function() {
n.push("We work on adding new articles and tutorials. Subscribe to learn about major updates when they happen:");
},
attributes: {
class: "description"
}
}), r.e.call({
block: function() {
r.e.call({
attributes: {
type: "email",
name: "email",
placeholder: "Your email",
required: !0,
class: "input"
}
}, "input"), n.push('<input type="hidden" name="slug" value="javascript-info-updates">'), 
r.e.call({
block: function() {
r.e.call({
block: function() {
n.push("Subscribe");
},
attributes: {
class: "text"
}
}, "span");
},
attributes: {
type: "submit",
name: "type",
class: "button button"
}
}, "button");
},
attributes: {
method: "POST",
action: "/newsletter/subscribe",
class: "subscribe-form"
}
}, "form"), r.e.call({
block: function() {
n.push("You can unsubscribe at any time in just one click");
},
attributes: {
class: "legal"
}
});
},
attributes: {
class: "en-subscribe-form"
}
});
}.call(this, "bem" in i ? i.bem : "undefined" != typeof bem ? bem : void 0, "bem_chain" in i ? i.bem_chain : "undefined" != typeof bem_chain ? bem_chain : void 0), 
n.join("");
};
},
930: function(e, t, n) {
function a(e) {
return n(r(e));
}
function r(e) {
return i[e] || function() {
throw Error("Cannot find module '" + e + "'.");
}();
}
var i = {
"./en.yml": 931,
"./ru.yml": 932
};
a.keys = function() {
return Object.keys(i);
}, a.resolve = r, e.exports = a, a.id = 930;
},
931: function(e, t) {
e.exports = {
choose_newsletter: "Choose newsletters in the list."
};
},
932: function(e, t) {
e.exports = {
choose_newsletter: "Выберите рассылки из списка."
};
}
});
//# sourceMappingURL=tutorial.30bfc7bc47478d473464.js.map