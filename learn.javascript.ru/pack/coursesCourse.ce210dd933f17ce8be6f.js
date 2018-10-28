var coursesCourse = function(e) {
function t(t) {
for (var n, i, o = t[0], s = t[1], a = 0, c = []; a < o.length; a++) i = o[a], r[i] && c.push(r[i][0]), 
r[i] = 0;
for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
for (l && l(t); c.length; ) c.shift()();
}
var n = {}, r = {
17: 0,
34: 0
};
function i(t) {
if (n[t]) return n[t].exports;
var r = n[t] = {
i: t,
l: !1,
exports: {}
};
return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
}
i.e = function(e) {
var t = [], n = r[e];
if (0 !== n) if (n) t.push(n[2]); else {
var o = new Promise(function(t, i) {
n = r[e] = [ t, i ];
});
t.push(n[2] = o);
var s, a = document.getElementsByTagName("head")[0], l = document.createElement("script");
l.charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.src = function(e) {
return i.p + "" + ({
31: "authClient",
34: "vendors~authClient"
}[e] || e) + "-" + e + ".ce210dd933f17ce8be6f.js";
}(e), s = function(t) {
l.onerror = l.onload = null, clearTimeout(c);
var n = r[e];
if (0 !== n) {
if (n) {
var i = t && ("load" === t.type ? "missing" : t.type), o = t && t.target && t.target.src, s = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + o + ")");
s.type = i, s.request = o, n[1](s);
}
r[e] = void 0;
}
};
var c = setTimeout(function() {
s({
type: "timeout",
target: l
});
}, 12e4);
l.onerror = l.onload = s, a.appendChild(l);
}
return Promise.all(t);
}, i.m = e, i.c = n, i.d = function(e, t, n) {
i.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: n
});
}, i.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, i.t = function(e, t) {
if (1 & t && (e = i(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var n = Object.create(null);
if (i.r(n), Object.defineProperty(n, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function(t) {
return e[t];
}.bind(null, r));
return n;
}, i.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return i.d(t, "a", t), t;
}, i.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, i.p = "/pack/", i.oe = function(e) {
throw e;
};
var o = window.webpackJsonp_name_ = window.webpackJsonp_name_ || [], s = o.push.bind(o);
o.push = t, o = o.slice();
for (var a = 0; a < o.length; a++) t(o[a]);
var l = s;
return i(i.s = 372);
}({
0: function(e, t, n) {
"use strict";
e.exports = {
lang: "ru",
currency: {
code: "RUB",
sign: "₽"
},
env: "production",
ordersMail: "orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google+",
id: "google"
}, {
name: "Вконтакте",
id: "vkontakte"
}, {
name: "Github",
id: "github"
}, {
name: "Яндекс",
id: "yandex"
} ],
stripeKey: "pk_live_ukCHHaAAUHELtXYFa9EwbROW",
automationGhGroup: "js-tasks-ru"
};
},
1: function(e, t, n) {
"use strict";
const r = new (n(5))("en");
let i = console.error;
function o(e) {
return r.hasPhrase(s, e) || i("No such phrase", e), r.t(s, ...arguments);
}
e.exports = o;
const s = n(0).lang;
"en" !== s && r.setFallback(s, "en"), r.add = ((...e) => r.addPhrase(s, ...e)), 
o.i18n = r;
},
10: function(e, t, n) {
"use strict";
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
107: function(e, t, n) {
"use strict";
let r = n(9), i = n(4), o = n(2), s = n(108);
const a = n(1), l = n(0).lang;
function c(e, t) {
if (!e.elements.email.value) return;
let n = e.elements.slug, s = [];
if (n.length) for (let e = 0; e < n.length; e++) {
let t = n[e];
t.checked && s.push(t.value);
} else s.push(n.value);
if (!s.length) return void new o.Error(a("newsletter.client.choose_newsletter"));
let l = {
email: e.elements.email.value,
slug: s
};
const c = i({
method: "POST",
url: e.action,
body: l
});
let u = e.querySelector('[type="submit"]'), f = new r({
elem: u,
size: "small",
elemClass: "button_loading"
});
f.start(), u.disabled = !0, c.addEventListener("loadend", () => {
f.stop(), u.disabled = !1;
}), c.addEventListener("success", function(n) {
if (200 == this.status) {
new o.Success(n.result.message, "slow"), e.elements.email.value = "";
let r = e.elements.gaEvent && JSON.parse(e.elements.gaEvent.value);
r && window.gaSendEvent(r), t && t();
} else new o.Error(n.result.message);
});
}
a.i18n.add("newsletter.client", n(110)("./" + l + ".yml")), t.initNewsletterForm = function() {
let e = document.querySelector("[data-newsletter-subscribe-form]");
e && (e.onsubmit = function(t) {
t.preventDefault(), c(e);
});
}, t.initNewsletterLink = function() {
let e = document.querySelector("[data-newsletter-subscribe-link]");
e && (e.onclick = function(t) {
t.preventDefault();
let n = prompt(a("newsletter.client.email_please"), window.currentUser && window.currentUser.email || "");
n && i({
method: "POST",
url: "/newsletter/subscribe",
body: {
slug: e.dataset.slug,
email: n
}
}).addEventListener("success", function(t) {
if (200 == this.status) {
new o.Success(t.result.message, "slow");
let n = e.dataset.gaEvent && JSON.parse(e.dataset.gaEvent);
n && window.gaSendEvent(n);
} else new o.Error(t.result.message);
});
});
}, t.submitSubscribeForm = c, t.initEnSubscribeButton = function(e) {
e.addEventListener("click", () => new s({
onSubmit: c
}));
};
},
108: function(e, t, n) {
"use strict";
let r = n(19), i = n(109);
e.exports = class extends Modal {
constructor(e) {
super(e), this.options = e || {}, this.options.inModal = !0;
let t = document.createElement("div");
t.innerHTML = r(i, this.options), this.setContent(t), this.elem.querySelector('[type="email"]').focus(), 
this.elem.querySelector("form").addEventListener("submit", this.onFormSubmit.bind(this));
}
onFormSubmit(e) {
e.preventDefault(), this.options.onSubmit(e.target, this.remove.bind(this));
}
};
},
109: function(e, t, n) {
var r = n(18);
e.exports = function(e) {
var t, n = "", i = {}, o = e || {};
return function(e, o, s, a, l, c, u, f, p) {
var d = function(t) {
var n;
if (null == t || "object" != typeof t) return t;
if (t instanceof o) return (n = new o()).setTime(t.getTime()), n;
if (t instanceof e) {
n = [];
for (var r = 0, i = t.length; r < i; r++) n[r] = d(t[r]);
return n;
}
if (t instanceof a) {
for (var l in n = {}, t) t.hasOwnProperty(l) && (n[l] = d(t[l]));
return n;
}
throw new s("Unable to copy obj! Its type isn't supported.");
}, h = {
hr: {
type: "self_closing"
},
br: {
type: "self_closing"
},
wbr: {
type: "self_closing"
},
source: {
type: "self_closing"
},
img: {
type: "self_closing"
},
input: {
type: "self_closing"
},
a: {
type: "inline"
},
abbr: {
type: "inline"
},
acronym: {
type: "inline"
},
b: {
type: "inline"
},
code: {
type: "inline"
},
em: {
type: "inline"
},
font: {
type: "inline"
},
i: {
type: "inline"
},
ins: {
type: "inline"
},
kbd: {
type: "inline"
},
map: {
type: "inline"
},
pre: {
type: "inline"
},
samp: {
type: "inline"
},
small: {
type: "inline"
},
span: {
type: "inline"
},
strong: {
type: "inline"
},
sub: {
type: "inline"
},
sup: {
type: "inline"
},
textarea: {
type: "inline"
},
time: {
type: "inline"
},
label: {
content_type: "inline"
},
p: {
content_type: "inline"
},
h1: {
content_type: "inline"
},
h2: {
content_type: "inline"
},
h3: {
content_type: "inline"
},
h4: {
content_type: "inline"
},
h5: {
content_type: "inline"
},
h6: {
content_type: "inline"
},
ul: {
content_type: "list"
},
ol: {
content_type: "list"
},
select: {
content_type: "optionlist"
},
datalist: {
content_type: "optionlist"
}
}, m = [ "element", "modifier" ], _ = {
prefix: "",
element: "__",
modifier: "_",
default_tag: "div",
nosrc_substitute: !0,
flat_elements: !0,
class_delimiter: ""
}, v = function() {
var e = d(_);
void 0 !== p && (e.prefix = p), void 0 !== u && (e.element = u), void 0 !== f && (e.modifier = f), 
void 0 !== c && (e.default_tag = c);
for (var t = 0; t < m.length; t++) {
var n = m[t];
void 0 === e["output_" + n] && (e["output_" + n] = e[n]);
}
return e;
};
i.bemto_custom_inline_tag = t = function(e, i) {
var o = this && this.block, s = this && this.attributes || {};
if (i = i || !1, n += (null == (t = "<") ? "" : t) + r.escape(null == (t = e) ? "" : t), 
s) for (var a in s) s.hasOwnProperty(a) && !1 !== s[a] && void 0 !== s[a] && (n += r.escape(null == (t = " ") ? "" : t) + r.escape(null == (t = a) ? "" : t) + (null == (t = '="') ? "" : t) + (null == (t = !0 === s[a] ? a : s[a]) ? "" : t) + (null == (t = '"') ? "" : t));
i ? n += null == (t = "/>") ? "" : t : (n += null == (t = ">") ? "" : t, o && o(), 
n += (null == (t = "</") ? "" : t) + r.escape(null == (t = e) ? "" : t) + (null == (t = ">") ? "" : t));
}, i.bemto_custom_tag = t = function(e, t) {
var o = this && this.block, s = this && this.attributes || {};
e = e || "div", t = t || {};
var a, l, c = !1;
switch ("/" === e.substr(-1) && (c = !0, e = e.slice(0, -1)), t.type || (l = "block", 
h[a = e] && (l = h[a].type || l), l)) {
case "inline":
i.bemto_custom_inline_tag.call({
block: function() {
o && o();
},
attributes: s
}, e);
break;

case "self_closing":
i.bemto_custom_inline_tag.call({
attributes: s
}, e, !0);
break;

default:
c ? n = n + "<" + e + r.attrs(s, !0) + "/>" : (n = n + "<" + e + r.attrs(s, !0) + ">", 
o && o(), n = n + "</" + e + ">");
}
}, i.bemto_tag = t = function(e, t) {
var r = this && this.block, o = this && this.attributes || {}, s = v();
t = t || {};
var a = e || s.default_tag, l = b.length;
e || ("inline" === b[l - 1] ? a = "span" : "list" === b[l - 1] ? a = "li" : "optionlist" === b[l - 1] && (a = "option")), 
e && "span" != e && "div" != e || (o.href && (a = "a"), o.for && (a = "label"), 
o.type ? a = r ? "button" : "input" : o.src && (a = "img")), "list" === b[l - 1] && "li" !== a ? n += "<li>" : "list" !== b[l - 1] && "pseudo-list" !== b[l - 1] && "li" === a ? (n += "<ul>", 
b[b.length] = "pseudo-list") : "pseudo-list" === b[l - 1] && "li" !== a && (n += "</ul>", 
b = b.splice(0, b.length - 1));
var c, u, f = t.content_type || (u = "block", h[c = a] && (u = h[c].content_type || h[c].type || u), 
u);
b[b.length] = f, "img" == a && (o.alt && !o.title && (o.title = ""), o.title && !o.alt && (o.alt = o.title), 
o.alt || (o.alt = ""), "" === o.alt && (o.role = "presentation"), o.src || (!0 === s.nosrc_substitute ? o.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : s.nosrc_substitute && (o.src = s.nosrc_substitute))), 
"input" == a && (o.type || (o.type = "text")), "main" == a && (o.role || (o.role = "main")), 
"html" == a && (n += "<!DOCTYPE html>"), i.bemto_custom_tag.call({
block: function() {
r && r && r();
},
attributes: o
}, a, t), "list" === b[l - 1] && "li" != a && (n += "</li>");
};
var g = [], b = [ "block" ];
i.b = t = function(t) {
var n = this && this.block, r = this && this.attributes || {}, o = v();
t && void 0 !== t.prefix && (o.prefix = t.prefix);
var s = t && t.tag || ("string" == typeof t ? t : ""), c = t && t.isElement, u = t && t.metadata, f = !1;
if (r.class) {
var p = r.class;
p instanceof e && (p = p.join(" ")), p = p.split(" ");
var h = [], m = !0, _ = [];
if (function() {
var e = p;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t], i = {}, u = h[h.length - 1], v = !1;
if (r.match(/^[A-Z-]+[A-Z0-9-]?$/)) s = r.toLowerCase(); else if (m && c && (i.context = g[g.length - 1]), 
(k = r.match(new l("^(?!" + o.element + "[A-Za-z0-9])" + o.modifier + "(.+)$"))) && u && u.name) u.modifiers || (u.modifiers = []), 
u.modifiers.push(k[1]); else {
(x = r.match(new l("^(?!" + o.modifier + "[A-Za-z0-9])" + o.element + "(.+)$"))) && (i.context = g[g.length - 1], 
r = x[1]), (A = r.match(new l("^(.*[A-Za-z0-9])(?!" + o.modifier + "$)" + o.element + "$"))) && (r = A[1], 
i.is_context = !0, v = !0, f = !0, c = !1), (E = r.match(new l("^(.*?[A-Za-z0-9])(?!" + o.element + "[A-Za-z0-9])" + o.modifier + "(.+)$"))) && (r = E[1], 
i.modifiers || (i.modifiers = []), i.modifiers.push(E[2]));
var b = "", y = "()?";
if (o.prefix) {
"string" == typeof (F = o.prefix) && (F = {
"": F
});
var w = [];
F instanceof a && (function() {
var e = F;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t];
"string" == typeof t && "" != t && -1 == w.indexOf(t) && w.push(t), "string" == typeof r && "" != r && -1 == w.indexOf(r) && w.push(r);
} else for (var t in n = 0, e) n++, r = e[t], "string" == typeof t && "" != t && -1 == w.indexOf(t) && w.push(t), 
"string" == typeof r && "" != r && -1 == w.indexOf(r) && w.push(r);
}.call(this), y = "(" + w.join("|") + ")?"), (j = r.match(new l("^" + y + "([A-Za-z0-9]+.*)$"))) && (r = j[2], 
b = j[1] || "", void 0 !== (b = F[b]) && !0 !== b || (b = j[1]));
}
i.prefix = (b || "").replace(/\-/g, "%DASH%").replace(/\_/g, "%UNDERSCORE%"), v && r.match(/^[a-zA-Z0-9]+.*/) && _.push(i.context ? i.context + o.element + r : i.prefix + r), 
i.name = r, m = !1, i.context && i.context.length > 1 ? function() {
var e = i.context;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t];
(o = d(i)).context = [ r ], h.push(o);
} else for (var t in n = 0, e) {
var o;
n++, r = e[t], (o = d(i)).context = [ r ], h.push(o);
}
}.call(this) : h.push(i);
}
} else for (var t in n = 0, e) {
var k;
if (n++, r = e[t], i = {}, u = h[h.length - 1], v = !1, r.match(/^[A-Z-]+[A-Z0-9-]?$/)) s = r.toLowerCase(); else if (m && c && (i.context = g[g.length - 1]), 
(k = r.match(new l("^(?!" + o.element + "[A-Za-z0-9])" + o.modifier + "(.+)$"))) && u && u.name) u.modifiers || (u.modifiers = []), 
u.modifiers.push(k[1]); else {
var x, A, E, F, j;
if ((x = r.match(new l("^(?!" + o.modifier + "[A-Za-z0-9])" + o.element + "(.+)$"))) && (i.context = g[g.length - 1], 
r = x[1]), (A = r.match(new l("^(.*[A-Za-z0-9])(?!" + o.modifier + "$)" + o.element + "$"))) && (r = A[1], 
i.is_context = !0, v = !0, f = !0, c = !1), (E = r.match(new l("^(.*?[A-Za-z0-9])(?!" + o.element + "[A-Za-z0-9])" + o.modifier + "(.+)$"))) && (r = E[1], 
i.modifiers || (i.modifiers = []), i.modifiers.push(E[2])), b = "", y = "()?", o.prefix) "string" == typeof (F = o.prefix) && (F = {
"": F
}), w = [], F instanceof a && (function() {
var e = F;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t];
"string" == typeof t && "" != t && -1 == w.indexOf(t) && w.push(t), "string" == typeof r && "" != r && -1 == w.indexOf(r) && w.push(r);
} else for (var t in n = 0, e) n++, r = e[t], "string" == typeof t && "" != t && -1 == w.indexOf(t) && w.push(t), 
"string" == typeof r && "" != r && -1 == w.indexOf(r) && w.push(r);
}.call(this), y = "(" + w.join("|") + ")?"), (j = r.match(new l("^" + y + "([A-Za-z0-9]+.*)$"))) && (r = j[2], 
b = j[1] || "", void 0 !== (b = F[b]) && !0 !== b || (b = j[1]));
i.prefix = (b || "").replace(/\-/g, "%DASH%").replace(/\_/g, "%UNDERSCORE%"), v && r.match(/^[a-zA-Z0-9]+.*/) && _.push(i.context ? i.context + o.element + r : i.prefix + r), 
i.name = r, m = !1, i.context && i.context.length > 1 ? function() {
var e = i.context;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var r = e[t];
(o = d(i)).context = [ r ], h.push(o);
} else for (var t in n = 0, e) {
var o;
n++, r = e[t], (o = d(i)).context = [ r ], h.push(o);
}
}.call(this) : h.push(i);
}
}
}.call(this), !c && !_.length && h[0] && h[0].name && h[0].name.match(/^[a-zA-Z0-9]+.*/) && (h[0].is_context = !0, 
_.push(h[0].context ? h[0].context + o.element + h[0].name : h[0].prefix + h[0].name), 
f = !0), _.length && (o.flat_elements && function() {
var e = _;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) (r = e[t].match(new l("^(.*?[A-Za-z0-9])(?!" + o.modifier + "[A-Za-z0-9])" + o.element + ".+$"))) && (_[t] = r[1]); else for (var t in n = 0, 
e) {
var r;
n++, (r = e[t].match(new l("^(.*?[A-Za-z0-9])(?!" + o.modifier + "[A-Za-z0-9])" + o.element + ".+$"))) && (_[t] = r[1]);
}
}.call(this), g[g.length] = _), h.length) {
var y = [];
(function() {
var e = h;
if ("number" == typeof e.length) {
for (var t = 0, n = e.length; t < n; t++) if ((i = e[t]).name) {
var r = i.prefix;
i.context && (r = i.context + o.output_element), y.push(r + i.name), i.modifiers && function() {
var e = i.modifiers;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var s = e[t];
y.push(r + i.name + o.output_modifier + s);
} else for (var t in n = 0, e) n++, s = e[t], y.push(r + i.name + o.output_modifier + s);
}.call(this);
}
} else for (var t in n = 0, e) {
var i;
n++, (i = e[t]).name && (r = i.prefix, i.context && (r = i.context + o.output_element), 
y.push(r + i.name), i.modifiers && function() {
var e = i.modifiers;
if ("number" == typeof e.length) for (var t = 0, n = e.length; t < n; t++) {
var s = e[t];
y.push(r + i.name + o.output_modifier + s);
} else for (var t in n = 0, e) n++, s = e[t], y.push(r + i.name + o.output_modifier + s);
}.call(this));
}
}).call(this);
var w = o.class_delimiter;
w = w ? " " + w + " " : " ", r.class = y.join(w).replace(/%DASH%/g, "-").replace(/%UNDERSCORE%/g, "_");
} else r.class = void 0;
}
n ? i.bemto_tag.call({
block: function() {
n && n();
},
attributes: r
}, s, u) : i.bemto_tag.call({
attributes: r
}, s, u), !c && f && (g = g.splice(0, g.length - 1)), b = b.splice(0, b.length - 1);
}, i.e = t = function(e) {
var t = this && this.block, n = this && this.attributes || {};
(e = e && "string" == typeof e ? {
tag: e
} : e || {}).isElement = !0, i.b.call({
block: function() {
t && t();
},
attributes: n
}, e);
}, i.b.call({
block: function() {
i.e.call({
block: function() {
n += "Tell me about major updates";
},
attributes: {
class: "header"
}
}, "h3"), i.e.call({
block: function() {
n += "We are working on new articles and tutorials. Provide an email to learn about major updates when they happen:";
},
attributes: {
class: "description"
}
}), i.e.call({
block: function() {
i.e.call({
attributes: {
class: "input",
type: "email",
name: "email",
placeholder: "Your email",
required: r.escape(!0)
}
}, "input"), n += '<input type="hidden" name="slug" value="javascript-info-updates">', 
i.e.call({
block: function() {
i.e.call({
block: function() {
n += "Notify me";
},
attributes: {
class: "text"
}
}, "span");
},
attributes: {
class: "button button",
type: "submit",
name: "type"
}
}, "button");
},
attributes: {
class: "subscribe-form",
method: "POST",
action: "/newsletter/subscribe"
}
}, "form");
},
attributes: {
class: "en-subscribe-form"
}
});
}.call(this, "Array" in o ? o.Array : "undefined" != typeof Array ? Array : void 0, "Date" in o ? o.Date : "undefined" != typeof Date ? Date : void 0, "Error" in o ? o.Error : "undefined" != typeof Error ? Error : void 0, "Object" in o ? o.Object : "undefined" != typeof Object ? Object : void 0, "RegExp" in o ? o.RegExp : "undefined" != typeof RegExp ? RegExp : void 0, "bemto_settings_default_tag" in o ? o.bemto_settings_default_tag : "undefined" != typeof bemto_settings_default_tag ? bemto_settings_default_tag : void 0, "bemto_settings_element" in o ? o.bemto_settings_element : "undefined" != typeof bemto_settings_element ? bemto_settings_element : void 0, "bemto_settings_modifier" in o ? o.bemto_settings_modifier : "undefined" != typeof bemto_settings_modifier ? bemto_settings_modifier : void 0, "bemto_settings_prefix" in o ? o.bemto_settings_prefix : "undefined" != typeof bemto_settings_prefix ? bemto_settings_prefix : void 0), 
n;
};
},
11: function(e, t, n) {
var r = {
"./ru.yml": 12
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 11;
},
110: function(e, t, n) {
var r = {
"./ru.yml": 111
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 110;
},
111: function(e, t) {
e.exports = {
choose_newsletter: "Выберите рассылки из списка.",
email_please: "Ваш e-mail?"
};
},
112: function(e, t, n) {
"use strict";
e.exports = class {
constructor(e) {
this.videoId = e.videoId, this.onClose = e.onClose, this.sizeList = [ {
width: 0,
height: 0
}, {
width: 640,
height: 360
}, {
width: 853,
height: 480
}, {
width: 1280,
height: 720
} ];
}
getVideoThumbnail() {
return "https://img.youtube.com/vi/" + this.videoId + "/hqdefault.jpg";
}
openVideo() {
let e = 0;
for (;e < this.sizeList.length && !(document.documentElement.clientHeight < this.sizeList[e].height || document.documentElement.clientWidth < this.sizeList[e].width); e++) ;
if (e--, this.currentWidth = this.sizeList[e].width, this.currentHeight = this.sizeList[e].height, 
0 === e) window.location.href = "//www.youtube.com/watch?v=" + this.videoId; else {
let e = new Modal();
if (e.setContent('<div id="player"></div>'), e.elem.addEventListener("modal-remove", () => {
this.player && (this.player.destroy(), this.player = null), this.onClose && this.onClose.call(this);
}), window.YT) this.initPlayer(); else {
let e = document.createElement("script");
e.src = "https://www.youtube.com/iframe_api", document.head.appendChild(e), window.onYouTubeIframeAPIReady = (() => {
this.initPlayer(), delete window.onYouTubeIframeAPIReady;
});
}
}
}
initPlayer() {
this.player && this.player.destroy(), this.player = new window.YT.Player("player", {
height: this.currentHeight,
width: this.currentWidth,
videoId: this.videoId,
playerVars: {
rel: 0
},
events: {
onReady: () => {
this.player.playVideo();
},
onStateChange: this.onStateChangeHandler.bind(this)
}
});
}
onStateChangeHandler(e) {
if (window.focus(), 1 == e.data && (this.player.videoId = this.videoId), 0 == e.data) {
let e = document.querySelectorAll("[data-video-id]");
for (let t = 0; t < e.length; t++) {
if (e[t].getAttribute("data-video-id") == this.player.videoId) {
let n = e[t + 1] && e[t + 1].getAttribute("data-video-id");
n && (e[t + 1].parentNode.dataset.mnemo && (window.location.hash = e[t + 1].parentNode.dataset.mnemo), 
this.videoId = n, this.initPlayer());
break;
}
}
}
}
};
},
113: function(e, t, n) {
"use strict";
e.exports = class {
constructor({elem: e}) {
this.elem = e, this.list = e.querySelector(".courses-feedback-slides"), this.arrowLeft = e.querySelector(".courses-feedback-control_left"), 
this.arrowRight = e.querySelector(".courses-feedback-control_right"), this.pagination = e.querySelector(".courses-feedback-inline__pagination"), 
this.position = 0, this.arrowRight.onclick = this.next.bind(this), this.arrowLeft.onclick = this.prev.bind(this), 
this.pagination.onclick = this.onPaginationClick.bind(this);
}
onPaginationClick(e) {
let t = e.target.closest("li");
t && (this.position = [].indexOf.call(this.pagination.children, t), this.render());
}
next() {
this.position++, this.render();
}
prev() {
this.position--, this.render();
}
render() {
this.list.style.transform = this.position ? `translate3d(-${this.position}00%,0,0)` : "";
let e = "courses-feedback-control_hidden";
0 === this.position ? this.arrowLeft.classList.add(e) : this.arrowLeft.classList.remove(e), 
this.position == this.list.children.length - 1 ? this.arrowRight.classList.add(e) : this.arrowRight.classList.remove(e);
let t = this.pagination.querySelector(".courses-feedback-inline__page_active");
t && t.classList.remove("courses-feedback-inline__page_active"), this.pagination.children[this.position].classList.add("courses-feedback-inline__page_active");
}
};
},
114: function(e, t, n) {
"use strict";
const r = n(9);
function i({elem: e, callback: t}) {
if (window.currentUser) return void t();
const i = new r({
elem: e,
size: "small",
class: "submit-button__spinner",
elemClass: "submit-button_progress"
});
i.start(), Promise.all([ n.e(34), n.e(31) ]).then(function() {
i.stop(), new (n(47))({
callback: t
});
}.bind(null, n)).catch(n.oe);
}
document.addEventListener("click", function(e) {
let t = e.target;
(t = t.closest("[data-signup-link][href]")) && (e.preventDefault(), i({
elem: t,
callback: () => window.location.href = t.href
}));
}), t.signupLink = i;
},
12: function(e, t) {
e.exports = {
site: {
privacy_policy: "политика конфиденциальности",
terms: "пользовательское соглашение",
gdpr_dialog: {
title: "Этот сайт использует cookie",
text: 'Мы используем браузерные технологии, такие как cookie и local storage для хранения ваших предпочтений. Вы принимаете <a href="/privacy">политику конфиденциальности</a> и <a href="/terms">соглашение пользователя</a>?',
accept: "Принять",
cancel: "Отмена"
},
toolbar: {
lang_switcher: {
cta_text: 'Мы хотим сделать этот проект с открытым исходным кодом доступным для людей во всем мире. Пожалуйста, <a href="https://github.com/iliakan/javascript-tutorial-en" rel="noopener noreferrer" target="_blank">помогите нам перевести</a> это руководство на свой язык',
footer_text: "количество контента, переведенное на соотвествующий язык",
old_version: "Опубликована полная, но предыдущая версия учебника."
},
logo: {
normal: {
svg: "sitetoolbar__logo_ru.svg",
width: 171
},
"normal-white": {
svg: "sitetoolbar__logo_ru-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_ru.svg",
width: 80
},
"small-white": {
svg: "sitetoolbar__logo_small_ru-white.svg"
}
},
sections: [ {
slug: "tutorial",
url: "/",
title: "Учебник"
}, {
slug: "courses",
title: "Курсы"
}, {
url: "https://javascript.ru/forum/",
title: "Форум"
}, {
url: "https://es5.javascript.ru",
title: "ES5"
}, {
slug: "quiz",
title: "Тесты знаний"
}, {
slug: "jobs",
title: "Стажировки"
} ],
buy_ebook_extra: "Купить",
buy_ebook: "EPUB/PDF",
search_placeholder: "Искать на Javascript.ru",
search_button: "Найти",
public_profile: "Публичный профиль",
account: "Аккаунт",
notifications: "Уведомления",
admin: "Админ",
logout: "Выйти"
},
sorry_old_browser: "Извините, IE<10 не поддерживается, пожалуйста используйте более новый браузер.",
contact_us: "связаться с нами",
about_the_project: "о проекте",
ilya_kantor: "Илья Кантор",
comments: "Комментарии",
loading: "Загружается...",
search: "Искать",
share: "Поделиться",
read_before_commenting: "перед тем как писать…",
"tablet-menu": {
choose_section: "Выберите раздел",
search_placeholder: "Поиск в учебнике",
search_button: "Поиск"
},
comment: {
help: [ "Приветствуются комментарии, содержащие дополнения и вопросы по статье, и ответы на них.", "Для одной строки кода используйте тег <code>&lt;code&gt;</code>, для нескольких строк кода&nbsp;&mdash; тег <code>&lt;pre&gt;</code>, если больше 10 строк&nbsp;&mdash; ссылку на песочницу (<a href='http://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='http://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>…)", "Если что-то непонятно в статье&nbsp;&mdash; пишите, что именно и с какого места." ]
},
meta: {
description: "Современный учебник JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM."
},
edit_on_github: "Редактировать на Github",
error: "ошибка",
close: "закрыть",
hide_forever: "не показывать",
hidden_forever: "Эта информация больше не будет выводиться."
}
};
},
13: function(e, t, n) {
var r = {
"./ru.yml": 14
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 13;
},
14: function(e, t) {
e.exports = {
server_connection_error: "Ошибка связи с сервером.",
server_request_timeout: "Превышено максимально допустимое время ожидания ответа от сервера.",
request_aborted: "Запрос был прерван.",
no_response: "Не получен ответ от сервера.",
server_error: "Ошибка на стороне сервера (код #{status}), попытайтесь позднее.",
invalid_format: "Некорректный формат ответа от сервера."
};
},
17: function(e, t, n) {
"use strict";
t.thumb = function(e, t, n) {
if (!e) return e;
let r = window.devicePixelRatio;
n *= r;
let i = (t *= r) <= 160 && n <= 160 ? "t" : t <= 320 && n <= 320 ? "m" : t <= 640 && n <= 640 ? "i" : t <= 1024 && n <= 1024 ? "h" : "";
return e.slice(0, e.lastIndexOf(".")) + i + e.slice(e.lastIndexOf("."));
};
},
18: function(e, t, n) {
"use strict";
var r = Object.prototype.hasOwnProperty;
function i(e, t) {
return Array.isArray(e) ? function(e, t) {
for (var n, r = "", o = "", s = Array.isArray(t), a = 0; a < e.length; a++) (n = i(e[a])) && (s && t[a] && (n = l(n)), 
r = r + o + n, o = " ");
return r;
}(e, t) : e && "object" == typeof e ? function(e) {
var t = "", n = "";
for (var i in e) i && e[i] && r.call(e, i) && (t = t + n + i, n = " ");
return t;
}(e) : e || "";
}
function o(e) {
if (!e) return "";
if ("object" == typeof e) {
var t = "";
for (var n in e) r.call(e, n) && (t = t + n + ":" + e[n] + ";");
return t;
}
return e + "";
}
function s(e, t, n, r) {
return !1 !== t && null != t && (t || "class" !== e && "style" !== e) ? !0 === t ? " " + (r ? e : e + '="' + e + '"') : ("function" == typeof t.toJSON && (t = t.toJSON()), 
"string" == typeof t || (t = JSON.stringify(t), n || -1 === t.indexOf('"')) ? (n && (t = l(t)), 
" " + e + '="' + t + '"') : " " + e + "='" + t.replace(/'/g, "&#39;") + "'") : "";
}
t.merge = function e(t, n) {
if (1 === arguments.length) {
for (var r = t[0], i = 1; i < t.length; i++) r = e(r, t[i]);
return r;
}
for (var s in n) if ("class" === s) {
var a = t[s] || [];
t[s] = (Array.isArray(a) ? a : [ a ]).concat(n[s] || []);
} else if ("style" === s) {
var a = o(t[s]);
a = a && ";" !== a[a.length - 1] ? a + ";" : a;
var l = o(n[s]);
l = l && ";" !== l[l.length - 1] ? l + ";" : l, t[s] = a + l;
} else t[s] = n[s];
return t;
}, t.classes = i, t.style = o, t.attr = s, t.attrs = function(e, t) {
var n = "";
for (var a in e) if (r.call(e, a)) {
var l = e[a];
if ("class" === a) {
l = i(l), n = s(a, l, !1, t) + n;
continue;
}
"style" === a && (l = o(l)), n += s(a, l, !1, t);
}
return n;
};
var a = /["&<>]/;
function l(e) {
var t = "" + e, n = a.exec(t);
if (!n) return e;
var r, i, o, s = "";
for (r = n.index, i = 0; r < t.length; r++) {
switch (t.charCodeAt(r)) {
case 34:
o = "&quot;";
break;

case 38:
o = "&amp;";
break;

case 60:
o = "&lt;";
break;

case 62:
o = "&gt;";
break;

default:
continue;
}
i !== r && (s += t.substring(i, r)), i = r + 1, s += o;
}
return i !== r ? s + t.substring(i, r) : s;
}
t.escape = l, t.rethrow = function e(t, r, i, o) {
if (!(t instanceof Error)) throw t;
if (!("undefined" == typeof window && r || o)) throw t.message += " on line " + i, 
t;
try {
o = o || n(20).readFileSync(r, "utf8");
} catch (n) {
e(t, null, i);
}
var s = 3, a = o.split("\n"), l = Math.max(i - s, 0), c = Math.min(a.length, i + s);
var s = a.slice(l, c).map(function(e, t) {
var n = t + l + 1;
return (n == i ? "  > " : "    ") + n + "| " + e;
}).join("\n");
t.path = r;
t.message = (r || "Pug") + ":" + i + "\n" + s + "\n\n" + t.message;
throw t;
};
},
19: function(e, t, n) {
"use strict";
const r = n(17).thumb, i = n(0), o = n(1);
e.exports = function(e, t) {
return function(e) {
e.t = o, e.thumb = r, e.lang = i.lang, e.env = i.env;
}(t = t ? Object.create(t) : {}), e(t);
};
},
2: function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
let r = n(3);
t.init = function(e) {
window.notificationManager || (window.notificationManager = new class {
constructor(e = {}) {
this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
register(e) {
this.notifications.unshift(e), setTimeout(() => this.recalculate(), 20);
}
unregister(e) {
let t = this.notifications.indexOf(e);
this.notifications.splice(t, 1), this.recalculate();
}
recalculate() {
let e = this.verticalSpace;
this.notifications.forEach(t => {
t.top = e, e += t.height + this.verticalSpace;
});
}
}(e));
};
class i {
constructor(e, t, n) {
let r = `<div class="notification notification_popup notification_${t}">\n    <div class="notification__content">${e}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
switch (document.body.insertAdjacentHTML("beforeEnd", r), this.elem = document.body.lastElementChild, 
n) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = n;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 3e3;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", () => this.close());
}
setupCloseTimeout() {
this.timeout && setTimeout(() => this.close(), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(e) {
this.elem.style.transform = "translateY(" + e + "px)";
}
}
r.delegateMixin(i.prototype);
t.Info = class extends i {
constructor(e, t) {
super(e, "info", t);
}
};
t.Warning = class extends i {
constructor(e, t) {
super(e, "warning", t);
}
};
t.Success = class extends i {
constructor(e, t) {
super(e, "success", t);
}
};
class o extends i {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
t.Error = o, t.Error = o;
},
20: function(e, t) {},
23: function(e, t, n) {
var r = {
"./cert/ru.yml": 25,
"./email/ru.yml": 26,
"./feedback/ru.yml": 27,
"./frontpage/ru.yml": 28,
"./groups/ru.yml": 29,
"./models/ru.yml": 30,
"./ru.yml": 24,
"./teacher/ru.yml": 31
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 23;
},
24: function(e, t) {
e.exports = {
courses: "Курсы",
by_user: {
title: "Описание курса",
info: "Инструкции по настройке окружения",
slack_logs: "Логи slack чата",
jb: "Скидка на редакторы Jetbrains",
ical: "Расписание в формате iCal",
tasklist: "Задачник",
materials: "Материалы для обучения",
participants: "Анкеты участников",
participants_json: "JSON участников (для CORS)"
},
group_feedback_list: {
plural_feedback: "отзыв,отзыва,отзывов"
},
group_feedback_edit: {
no_participant: "Оставлять отзыв могут только участники группы.",
no_rights: "Не хватает прав",
title: "Отзыв",
public_feedback: "Ваш отзыв успешно сохранен. При желании, вы можете поделиться им в соц сетях.",
private_feedback: "Ваш отзыв успешно сохранен. Он будет виден только нам.",
rate_course: "Поставьте, пожалуйста, курсу оценку.",
missing_feedback_text: "Вы забыли написать текст отзыва."
},
group_feedback_show: {
private_feedback: "Отзыв не публичный",
title: "Отзыв",
head_title: "Отзыв на",
comment_saved: "Комментарий сохранён",
comment_save_error: "Не получилось сохранить комментарий",
edit: "редактировать"
},
group_finish: "Группа #{title} успешно завершена.",
group_materials: {
title: "Материалы для обучения",
added_with_notifications: "Материал добавлен, уведомления разосланы.",
added_wo_notifications: "Материал добавлен, уведомления НЕ рассылались.",
email_subject: "Добавлены материалы курса",
remove_file: "Удалить файл",
file_removed: "Файл удалён.",
settings_saved: "Настройка сохранена."
},
group_materials_download: {
invalid_link: "Ссылка неверна. Возможно, этот материал был добавлен по ошибке и позже удалён из преподавателем."
},
group_slack_register: {
already_slack_user: "Пользователь с адресом #{email} уже зарегистрирован в Slack.",
user_invited: "Приглашение отправлено на адрес #{email}."
},
group_slack_invite: {
no_target: "Не участник и не преподаватель",
no_slack_user: "Пользователь с адресом #{email} не зарегистрирован в Slack, сначала запросите приглашение.",
no_slack_user_old: 'Этот пользователь не зарегистрирован в Slack. Сначала зарегистрируйтесь на <a href="#{slack_url}">#{slack_url}</a> с email #{email}.',
user_added: "Пользователь #{email} приглашён в slack-канал #{groupSlug}."
},
participants: {
data_updated: "Данные обновлены.",
fix_errors: "Исправьте, пожалуйста, ошибки."
},
invite: {
order: "Заказ #{order}",
success: "Поздравляем, вы присоединились к курсу. Ниже, рядом с курсом, вы найдёте инструкцию.",
already_accepted_title: "Это приглашение уже принято",
already_accepted: "Это приглашение уже принято. Зайдите в учётную запись участника для доступа к курсу.",
outdated_link_title: "Ссылка устарела",
outdated_link: 'Извините, ссылка по которой вы перешли, устарела. Если у вас возникли какие-либо вопросы – пишите на <a href="mailto:#{email}">#{email}</a>',
already_added: "Вы уже участник курса. Ниже, рядом с курсом, вы найдёте инструкцию.",
choose_country: " выберите страну ",
details_form: {
title: "Анкета участника",
was_logged_in: "Вы вошли на сайт под пользователем #{name}",
first_name: "Имя *",
surname: "Фамилия *",
photo: "Фото",
photo_upload: "Загрузить новое фото",
country: "Страна *",
city: "Город",
occupation: "Область работы",
occupation_note: "Кем или в какой области работаете (кратко)?",
social_note: "Профиль в соц. сети или личная страница, где можно узнать о вашей профессиональной деятельности.",
purpose: "С какой целью записались на курс?",
wishes: "Ваши пожелания по курсу?",
submit: "Отправить"
},
signup_form: {
signup_needed: "Для продолжения вам необходимо зарегистрироваться.",
username: "Имя пользователя",
password: "Пароль",
submit: "Зарегистрироваться"
}
},
signup: {
title: "Заказ № #{order}",
amount: "Стоимость",
no_such_group: "Нет такой группы.",
signup_finished_title: "Запись в эту группу завершена",
signup: "Запись на курс",
signup_finished: 'Запись в эту группу завершена. Перейдите на <a href="/courses/#{slug}">страницу курса</a>, чтобы увидеть открытые группы.',
signup_title: "Регистрация\n #{title}",
tutorial: "Учебник",
courses: "Курсы",
choose_group: "Выберите, пожалуйста, группу.",
plural_human: "человека,человек,человек",
receiptTitle: "Участие в курсе для #{count} #{people}",
email_subject: "Заказ #{order}",
payment_failed: "Оплата не прошла, попробуйте ещё раз.",
questions: 'По вопросам, касающимся оплаты, пишите на <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
contact_info: "Контактная информация:",
payment: "Оплата:",
payment_succeed: "Осуществлена успешно",
payment_pending: "Ожидается подтверждение",
thanks_for_order: "Спасибо за заказ!",
confirmation: "В ближайшее время вам придёт уведомление на адрес #{email}",
click_to_join_group: 'Перейдите в раздел <a href="#{url}/courses">Курсы</a> вашей учетной записи, чтобы присоединиться к группе.',
edit_participants: 'Отредактировать данные других участников можно в разделе <a href="#{url}/orders">Заказы</a> учетной записи. Им также придёт приглашение.',
questions_after: 'Если у вас возникли какие-либо вопросы, присылайте их на <a href="mailto:#{email}">#{email}</a>.',
teacher: "Ведущий",
seats_pluralize: "место,места,мест",
seats_left: "Осталось #{seats} #{seats_pluralized}",
seats_limited: "Количество мест ограничено",
signup_button: "Записаться",
subscribe: "Подписаться",
subscribe_other: [ "Вы также можете", "подписаться", "на уведомления о наборе новых групп по этой программе" ],
confirmation_email: "На ваш email придёт письмо с информацией о дате и деталях программы.",
this_course: "Этот курс",
conducted_plural: "ведут:",
conducted_single: "ведёт:"
},
feedback_loader: {
no_feedback: "Отзывов пока нет."
},
photo_load_widget: {
wrong_format: "Неверный тип файла или изображение повреждено."
},
participant_item: {
participant: "Участник",
invalid_email: "введите корректный email"
},
comment_form: {
submit: "Опубликовать",
cancel: "Отмена"
},
admin: {
no_such_order: "Нет такого заказа.",
no_such_group: "Нет такого заказа на курс",
no_such_file: "Нет такого файла",
transfer_participant: "Вы переведены в группу #{title}",
transfer_succeed_notified: "Перевод завершён, уведомление отослано.",
transfer_succeed_not_notified: "Перевод завершён, уведомление НЕ отсылалось.",
participant_deducted: "Участник отчислен: #{email}",
document_uploaded: "Администратор загрузил документы к заказу #{order}"
},
course: {
code_discount: "Скидка предоставлена по коду."
},
patch: {
information_updated_notified: "Информация обновлена, приглашения высланы на адреса: #{emails}.",
information_updated_not_notified: "Информация об участниках обновлена."
},
chat_logs: {
title: "Логи группового чата",
timeframe_from: "Временной диапазон c",
timeframe_to: "по",
apply: "Применить"
},
contacts: {
title: "Контактная информация",
note: "Оставьте ваши контактные данные, чтобы мы могли связаться с вами в случае необходимости",
name_surname: "Имя и Фамилия:",
phone: "Телефон:",
data_secured: "Ваши данные в безопасности",
personal_info: "Никакие ваши личные данные не будут переданы третьим лицам, кроме как по вашему желанию или для целей выполнения заключенного с вами договора.",
save_and_continue: "Сохранить и продолжить"
},
grayed_list: {
contact_info: "Контактная информация",
payment: "Оплата",
confirmation: "Подтверждение"
},
participant_register: {
title: "Места и участники",
participants_count: "Количество мест",
only_one_place: "есть только 1 место, извините",
enter_count: "введите значение от 1 до #{max}",
already_participant: "Я являюсь участником",
no: "НЕТ",
yes: "ДА",
amount: "Стоимость",
add_participants: "Указать участников",
add_later: "(это можно сделать позже)",
save_and_continue: "Сохранить и продолжить"
},
payment: {
title: "Оплата",
do_not_pay_twice: "Не оплачивайте дважды. Меняйте метод оплаты лишь если уверены, что оплата не произошла.",
terms_accept: 'Регистрируясь на курсы, вы соглашаетесь с <a href="/courses/offer.ru.pdf" target="_blank">договором оферты</a>.',
questions: 'Если у вас возникли какие-либо вопросы, присылайте их на <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
goto_payment: "Перейти к оплате"
},
participant_info: {
country: "Страна",
city: "Город",
about_link: "Ссылка на профиль",
occupation: "Область работы",
purpose: "С какой целью записались на курс?",
wishes: "Ваши пожелания по курсу"
},
guarantee: {
title: "Гарантия",
description: '<ul>\n  <li>Если объяснения будут вам непонятны</li>\n  <li>Если курсы не дадут вам новых знаний и умений</li>\n  <li>Если вы не сможете подключиться к системе онлайн-обучения</li>\n</ul> <p>…то вы сможете получить деньги назад.</p>\n<p>Для этого достаточно не позже окончания первой недели курса <a href="mailto:help@javascript.ru">написать</a>, указав причину из этого списка и что именно вас не устраивает, и тогда ваше участие будет прекращено, а вы получите деньги обратно, удобным для вас способом.</p>\n'
},
additional_information: "Дополнительная информация",
back_to_all: "Все курсы",
create_order: {
recording_finished: "Запись в эту группу завершена, извините.",
no_seats: "Извините, в этой группе уже нет мест.",
seats_limit: "Извините, уже нет такого количества мест. Уменьшите количество участников до #{max}.",
no_contact_person: "Не указано контактное лицо.",
no_participants: "Отсутствуют участники.",
not_authorized: "Вы не авторизованы.",
title_check_prefix: "Оплата за обучение на курсе:"
},
invite_email_subject: "Приглашение на курс, в группу #{group}",
invite_remind_email_subject: "#{group} – вы не присоединились к группе",
request_notification: "Вы можете запросить уведомление:",
promo_video: {
text: "Обзор курса"
},
tasklist: {
module_theory: "Теория модуля",
module_tasks: "Задачи модуля",
tasks: {
title: "Задачи",
solved: "Решена",
no_hints: "без подсказок",
with_hints: "с подсказкой",
add_solution: "Добавить",
view_solution: "Перейти к своему решению",
get_default_solution: "Получить готовое решение",
view_default_solution: "Посмотреть готовое решение"
},
filter: {
all: "Все",
added: "Добавленные",
new: "Новые",
solved: "Решенные"
}
}
};
},
25: function(e, t) {
e.exports = {
line1: "Настоящим удостоверяется, что с #{dateStart} по #{dateEnd}",
line2: "прошёл(а) обучение по программе",
no_user: "Нет такого пользователя",
no_participant: "Нет такого участника"
};
},
26: function(e, t) {
e.exports = {
invite: {
invitation: "Приглашение на курс",
seat_has_been_reserved: "На сайте javascript.ru была оформлена запись для вас на курс #{title}.",
click_to_join: ' Перейдите по ссылке <a href="#{link}">#{link}</a>, чтобы присоединиться к группе.',
auto_login: "При этом вы автоматически будете залогинены на сайте.",
contact_person: "Контактное лицо, указанное в записи: #{name}.",
questions: "Если возникнут какие-либо вопросы – вы всегда можете ответить на это письмо."
},
invite_remind: {
title: "Присоединитесь, пожалуйста, к группе",
hello: "Здравствуйте!",
still_not_joined: "Вы – в списке участников, но до сих пор не присоединились к группе #{title}.",
join_for: "Это нужно сделать, чтобы вы могли участвовать и получать материалы группы.",
click_to_join: 'Присоединиться к группе можно по ссылке <a href="#{link}">#{link}</a>.',
questions: "Если возникнут какие-либо вопросы – вы можете ответить на это письмо."
},
materials: {
title: "Уведомление о материалах курса",
materials_added: 'На страницу <a href="#{link}">#{link}</a> добавлены материалы.',
click_to_download: 'Вы можете скачать файл по прямой ссылке (если залогинены на сайте): <a href="#{fileLink}">#{fileTitle}</a>.'
},
move: {
title: "Оповещение о переводе",
hello: "Здравствуйте!",
you_were_moved: 'Вы были переведены из группы "#{oldGroup}" в группу "#{newGroup}".',
questions: "Если возникнут какие-либо вопросы – вы можете ответить на это письмо."
},
order_cancel: {
subject: "[Курсы, система регистрации] Отмена заказа #{order.number} на сайте #{host}",
title: "Ваш заказ #{number} аннулирован по истечению времени",
order_cancelled: "Ваш заказ на Javascript.ru под номером #{number} автоматически аннулирован",
group_start_soon: "&nbsp;в связи со скорым началом обучения, ввиду отсутствия информации о платеже.",
payment_expired: "&nbsp;по истечению времени ожидания, ввиду отсутствия информации о платеже.",
duplicate: "У вас есть другой, оплаченный, заказ под номером #{number} в ту же группу, так что, вероятно, аннулирован лишний, дублирующий, заказ.",
list_orders: "Список активных заказов доступен в личном кабинете:&nbsp;",
need_login: "&nbsp;(нужно авторизоваться на сайте).",
already_payed_or_soon: "Если вы оплачивали этот заказ или собираетесь это сделать сегодня – ответьте на это письмо.",
already_payed: "Если вы оплачивали этот заказ или собираетесь это сделать – ответьте на это письмо.",
info: "Автоматическая отмена неоплаченных заказов предназначена для удаления несостоявшихся заказов."
},
payment_confirmation: {
title: "Подтверждение оплаты",
payment_confirmed: "Подтверждаем получение оплаты за заказ #{number}.",
participation_confirmed: "Ваша запись одобрена",
free_participation: "Ваша запись без оплаты одобрена.",
no_participants: 'Вы не указали участников. Это можно сделать в разделе учётной записи <a href="#{profileOrdersUrl}">Заказы</a>, в деталях заказа.',
is_participant: 'Перейдите по ссылке <a href="#{orderUserInviteLink}">#{orderUserInviteLink}</a>, чтобы присоединиться к группе.',
confirmation_email: "Приглашённые вами участники также получат письмо на электронную почту с предложением присоединиться. Письмо придёт с адреса orders@javascript.ru.",
questions: "Если возникнут какие-либо вопросы – вы всегда можете ответить на это письмо."
}
};
},
27: function(e, t) {
e.exports = {
title: "Отзыв о курсе\n #{title}",
title_all: "Отзывы о курсе\n #{title}",
grades: {
1: "Плохо",
2: "Так себе",
3: "Нормально",
4: "Хорошо",
5: "Отлично"
},
recommend_text: "Оставивших этот отзыв рекомендуют этот курс",
recommend_text_frontpage: "Пользователей рекомендуют этот курс",
all_feedbacks: "Все отзывы о курсе",
feedback_cut: "весь отзыв",
page: {
recommend: 'Рекомендует курс "#{title}"',
course: "Курс",
teacher: "Преподаватель",
edit: "редактировать",
share: "Поделиться"
},
form: {
grade: "Как вы в целом оцениваете курс?*",
recommend: "Порекомендовали бы вы этот курс другим?*",
recommend_yes: "Да",
recommend_no: "Нет",
feedback: "Отзыв*",
feedback_placeholder: "Несколько слов о том, насколько полезным курс оказался для вас, доступно ли излагается материал, устраивает ли квалификация ведущего и т.д.",
is_public: "Публичный отзыв",
is_public_note: "(будет опубликован на javascript.ru)",
edit: "Редактировать",
name: "Имя",
photo: "Фото",
photo_upload: "Загрузить новое фото",
country: "Страна",
city: "Город",
occupation: "Область работы",
social: "Профиль в соц. сети или личная страница, где можно узнать о вашей профессиональной деятельности",
social_note: "Эта ссылка будет доступна только в контексте вашего отзыва. пожалуйста, укажите её.",
submit: "Отправить"
},
list: {
policy: "Политика отзывов javascript.ru",
policy_list: 'Показываются все опубликованные отзывы, даже если оценка нам "не нравится".\n Отзывы показываются "как есть", не модерируются, если нет нарушения правил сайта и курса (нецензурная лексика и др).\n Отзыв может оставить только участник курса, после прохождения.'
},
filter: {
teachers: "все преподаватели",
all: "с любой оценкой",
grade: "с оценкой"
}
};
},
28: function(e, t) {
e.exports = {
title: "Курсы Javascript",
description: "Здесь находятся «правильные» курсы по профессиональному Javascript, цель которых — научить думать на Javascript, писать просто, быстро и красиво.\n",
opened_courses: "Перейти к списку открытых курсов",
people_talk_about: "Что говорят о курсах люди",
features: [ {
name: "quality",
title: "Качество",
text: "Это самое главное. Мы изучаем разработку на профессиональном уровне"
}, {
name: "online",
onclick: "document.getElementById('online').checked = true",
title: "Дистанционность",
text: "На практике это оказывается удобнее, чем очные курсы"
}, {
name: "teachers",
title: "Поддержка",
text: "Вы получите советы по развитию именно для вас"
}, {
name: "result",
title: "Результат",
text: "Цель курсов - получить конкретные результаты в плане знаний и умений"
}, {
name: "guarantee",
title: "Гарантия",
text: "Возврат денег, если что-то не так"
} ],
program: "Программа курсов и запись",
opinions: "Мнение профессионалов",
ongoing: "Идёт набор в группы",
teachers_title: "Преподаватель,Преподаватели,Преподаватели",
teachers_description: "Курсы проводятся только опытными и проверенными профессионалами. Каждый преподаватель обладает как практическими, так и теоретическими знаниями, приобретёнными за годы работы в сфере веб-разработки.\n",
phone_toggler: "Информация о ведущем и особенностях курсов.",
learn_more: "Подробнее",
faq: {
title: "Часто задаваемые вопросы",
another_question: 'У вас другой вопрос? Напишите его в комментариях внизу этой страницы или мне на почту <a href="mailto:help@javascript.ru">help@javascript.ru</a> (проверяется регулярно), а если совсем срочно&nbsp;— по телефону +7-903-5419441.',
old_comments: 'Почитать предыдущие комментарии к этой странице можно в <a href="https://javascript.ru/courses">старом движке</a>.'
},
participant_logos: {
title: "У нас обучались",
description: "Мастер-классы для профессионалов в области JavaScript проводятся примерно с 2006 года, а курсы – с 2011 года. За это время обучились тысячи человек из сотен компаний, всех их перечислить сложно. В частности, проходили обучение сотрудники этих компаний:\n",
notes: "За время обучения были оставлены сотни отзывов, некоторые из которых вы можете видеть выше на этой странице, а также, в более подробном виде, на странице курса и в профилях преподавателей. Мнение о курсах профессионалов вы также можете увидеть выше.\n"
},
professionals: {
title: "Мнение профессионалов",
articles: [ {
userpic: "/img/courses/dmitryx.jpg",
username: "Дмитрий Поляков",
linkedin_link: "https://www.linkedin.com/in/dmitryx",
about: 'Frontend-разработчик в <a href="http://google.com">Google</a>, делает <a href="http://youtube.com">Youtube</a>, общий опыт работы архитектором и ведущим разработчиком различных проектов более 15 лет.\n',
feedback: "Участвовал в мастер-классах Ильи несколько раз, узнал много полезного. Очень нравится профессиональное и отлично организованное изложение и структуризация материала, приводимые примеры и паттерны применения в настоящей разработке. Считаю Илью одним из лучших JS разработчиков и ведущих. Крайне рекомендую курсы для тех, кто хочет отточить свои знания и стать профессионалом.\n"
}, {
userpic: "/img/courses/andrewsumin.jpg",
username: "Андрей Сумин",
linkedin_link: "https://ru.linkedin.com/in/andrewsumin",
about: 'Главный по Frontend в компании <a href="http://mail.ru">Mail.ru</a>, также принимал участие в таких проектах как <a href="http://hh.ru">hh.ru</a> и <a href="http://yandex.ru">yandex.ru</a>.\n',
feedback: "В далёком 2006 году, будучи frontend-разработчиком в Яндекс, я посетил курс Ильи. Уже тогда его занятия отличались сильной базой, подробным разбором важных и сложных аспектов и грамотной организацией. Я искренне рекомендую курсы Ильи всем кто хочет знать всё о языке JavaScript.\n"
}, {
userpic: "/img/courses/tyv.jpg",
username: "Юрий Ткаченко",
linkedin_link: "https://ua.linkedin.com/in/tkachenkoyuri",
about: 'Frontend-разработчик, в <a href="http://yandex.ru">Яндекс</a> 3 года руководил одной из команд верстальщиков, общий опыт Frontend-разработки более 10 лет .\n',
feedback: "Во время работы руководителем одной из групп верстки в Яндексе передо мной встала задача повышения квалификации большой команды верстальщиков. После длительного анализа я выбрал курс Ильи Кантора и остался очень доволен результатом, считаю этот курс лучшим из существующих на русском языке.\n"
} ]
}
};
},
29: function(e, t) {
e.exports = {
dropbox_share: {
enter_email: "Введите ниже email, с которым вы зарегистрированы на Dropbox. Вам придёт инвайт (функциональность в бете).\n",
by_default: '"По умолчанию" в поле введён ваш email на этом сайте, но, если вы уже используете Dropbox с другим email, то можете его поменять.\n',
request_access: "Запросить доступ к каталогу",
no_dropbox: "У этой группы не включён Dropbox",
success: "Готово, проверьте, в Dropbox должен быть инвайт. Он также придёт на email."
},
materials: {
notify_me: "Уведомлять меня по email о появлении материалов.",
title: "Добавление материалов",
filename: "Имя файла, по времени занятия:&nbsp;&nbsp;",
comment: "Комментарий (опционально)",
notifications: "Рассылать уведомления",
submit: "Добавить",
serial_number: "Серийный номер для видео:",
name: "Название",
size: "Размер",
added_date: "Добавлено",
no_materials: "Материалов пока нет, будут доступны позже.",
chat_logs: "Логи чата"
},
slack_logs: {
title: "Логи группового чата"
},
tasks: {
loading: "Загрузка...",
title: "Задачи для самостоятельного решения",
solved: "Решено",
solved_from: "из",
repository: "Личный репозиторий"
}
};
},
3: function(e, t, n) {
"use strict";
function r(e, t, n, r, i) {
e.addEventListener(n, function(e) {
let n = function(e, t) {
let n = e.target;
for (;n; ) {
if (n.matches(t)) return n;
if (n == e.currentTarget) break;
n = n.parentElement;
}
return null;
}(e, t);
e.delegateTarget = n, n && r.call(i || this, e);
});
}
r.delegateMixin = function(e) {
e.delegate = function(e, t, n) {
r(this.elem, e, t, n, this);
};
}, e.exports = r;
},
30: function(e, t) {
e.exports = {
course_feedback: {
missing_score: "Не стоит оценка.",
missing_text: "Отсутствует текст отзыва.",
missing_country: "Страна не указана."
},
course_group: {
invalid_timeStart: "Некорректное время начала",
invalid_timeEnd: "Некорректное время конца"
},
course_participant: {
missing_name: "Имя отсутствует.",
invalid_name: "Имя дожно состоять из одного слова.",
missing_surname: "Фамилия отсутствует.",
invalid_surname: "Фамилия должна состоять из одного слова.",
missing_country: "Страна не указана.",
invalid_url: "Некорректный URL страницы."
}
};
},
31: function(e, t) {
e.exports = {
group_start_soon: "Скоро группа: #{title}",
reminder: "Напоминание #{title}",
no_such_course: "Нет такого курса",
not_a_teacher: "Вы не ведёте данный курс",
days: [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ],
group_exists: "Группа #{slug} уже существует"
};
},
372: function(e, t, n) {
"use strict";
let r = n(107);
n(9);
const i = n(112);
let o = n(113), s = n(2);
const a = n(114).signupLink;
r.initNewsletterForm(), r.initNewsletterLink();
const l = n(0).lang, c = n(1), u = document.querySelector(".courses-overview__video-container");
u && function(e) {
const t = e.querySelector(".courses-overview__video"), n = t.getAttribute("data-video-id"), r = new i({
videoId: n,
onClose: function() {
e.classList.remove("courses-overview__video-container_playing");
}
});
t.style.backgroundImage = 'url("' + r.getVideoThumbnail() + '")', e.addEventListener("click", t => {
t.preventDefault(), e.classList.add("courses-overview__video-container_playing"), 
r.openVideo();
});
}(u), c.i18n.add("courses", n(23)("./" + l + ".yml")), document.querySelector(".courses-feedback-inline") && new o({
elem: document.querySelector(".courses-feedback-inline")
});
let f = document.querySelector("[data-course-signup-button]");
f && f.addEventListener("click", function() {
let e = f.form, t = e.elements.slug.value;
if (!t) {
let n = Array.from(e.slug).filter(e => e.checked)[0];
if (!n) return void new s.Error(c("courses.signup.choose_group"));
t = n.value;
}
window.gaSendEvent({
eventCategory: "course",
eventAction: "checkout-started",
hitCallback() {
a({
elem: f,
callback: () => {
window.location.href = "/courses/groups/" + t + "/signup";
}
});
}
});
});
},
4: function(e, t, n) {
"use strict";
let r = n(2), i = n(10);
const o = n(0).lang, s = n(1);
s.i18n.add("", n(11)("./" + o + ".yml")), s.i18n.add("error.network", n(13)("./" + o + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest(), n = e.method || "GET", r = e.body, o = e.url;
t.open(n, o, !e.sync), t.method = n;
let a = i();
a && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", a), "[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
let n = c("xhrstart", e);
document.dispatchEvent(n);
}), t.addEventListener("loadend", e => {
let t = c("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
let t = c("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
let t = c("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let l = e.normalStatuses || [ 200 ];
function c(e, t) {
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function u(e, n) {
let r = c("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", e => {
u(s("error.network.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
u(s("error.network.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
u(s("error.network.request_aborted"), e);
}), t.addEventListener("load", n => {
if (!t.status) return void u(s("error.network.no_response"), n);
if (-1 == l.indexOf(t.status)) return void u(s("error.network.server_error", {
status: t.status
}), n);
let r = t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(s("error.network.invalid_format"), n);
}
!function(e, n) {
let r = c("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
t.send(r);
}, 0), t;
};
},
5: function(e, t, n) {
"use strict";
e.exports = n(6);
},
6: function(e, t, n) {
"use strict";
var r = n(7), i = n(8);
function o(e) {
return Object.prototype.toString.call(e);
}
function s(e) {
return "[object String]" === o(e);
}
function a(e) {
return !isNaN(e) && isFinite(e);
}
function l(e) {
return !0 === e || !1 === e;
}
function c(e) {
return "[object Object]" === o(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === o(e);
}, f = Array.prototype.forEach;
function p(e, t, n) {
if (null !== e) if (f && e.forEach === f) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r += 1) t.call(n, e[r], r, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
}
var d = /%[sdj%]/g;
function h(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(d, function(e) {
if ("%%" === e) return "%";
if (t >= r) return e;
switch (e) {
case "%s":
return String(n[t++]);

case "%d":
return Number(n[t++]);

case "%j":
return JSON.stringify(n[t++]);

default:
return e;
}
});
}
var m = "en";
function _(e) {
var t = {};
return p(e || {}, function(e, n) {
e && "object" == typeof e ? p(_(e), function(e, r) {
t[n + "." + r] = e;
}) : t[n] = e;
}), t;
}
var v = "#@$";
function g(e, t) {
return e + v + t;
}
function b(e, t, n) {
var r = g(t, n), i = e._storage;
if (i.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var o = e._fallbacks_cache;
if (o.hasOwnProperty(r)) return o[r];
for (var s, a = e._fallbacks[t] || [ e._defaultLocale ], l = 0, c = a.length; l < c; l++) if (s = g(a[l], n), 
i.hasOwnProperty(s)) return o[r] = s, o[r];
return o[r] = null, null;
}
function y(e, t, n) {
var r = i.indexOf(e, t);
return -1 === r ? h('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? h('[plural form %d ("%s") not found in translation]', r, i.forms(e)[r]) : n[r];
}
function w(e) {
if (!(this instanceof w)) return new w(e);
this._defaultLocale = e ? String(e) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
w.prototype.addPhrase = function(e, t, n, r) {
var i, o = this;
if (l(r)) i = r ? 1 / 0 : 0; else if (a(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (c(n) && i > 0) return p(n, function(n, r) {
o.addPhrase(e, (t ? t + "." : "") + r, n, i - 1);
}), this;
if (s(n)) this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(u(n) || a(n) || l(n) || 0 === i && c(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return o._fallbacks_cache = {}, this;
}, w.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = u(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var k = /#\{|\(\(|\\\\/;
w.prototype.translate = function(e, t, n) {
var i, l = b(this, e, t);
return l ? (i = this._storage[l]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(e, t, n) {
var i, o, s, a, l, c;
return k.test(t) ? 1 === (i = r.parse(t)).length && "literal" === i[0].type ? i[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new w(n)), 
c = e._plurals_cache[n], (o = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
o.push("params = flatten(params);"), p(i, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return s = e.anchor, void o.push(h('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', s, s, s));
if ("plural" !== e.type) throw new Error("Unknown node type");
s = e.anchor, a = {}, p(e.strict, function(t, i) {
var o = r.parse(t);
if (1 === o.length && "literal" === o[0].type) return a[i] = !1, void (e.strict[i] = o[0].text);
a[i] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), l = {}, p(e.forms, function(t, i) {
var o, s = r.parse(t);
if (1 === s.length && "literal" === s[0].type) return o = s[0].text, e.forms[i] = o, 
void (l[o] = !1);
l[t] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), o.push(h("loc = %j;", n)), o.push(h("loc_plzr = %j;", n.split(/[-_]/)[0])), 
o.push(h("anchor = params[%j];", s)), o.push(h("cache = this._plurals_cache[loc];")), 
o.push(h("strict = %j;", e.strict)), o.push(h("strict_exec = %j;", a)), o.push(h("forms = %j;", e.forms)), 
o.push(h("forms_exec = %j;", l)), o.push("if (+(anchor) != anchor) {"), o.push(h('  str += "[invalid plurals amount: %s(" + anchor + ")]";', s)), 
o.push("} else {"), o.push("  if (strict[anchor] !== undefined) {"), o.push("    plrl = strict[anchor];"), 
o.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), o.push("  } else {"), 
o.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), o.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
o.push("  }"), o.push("}");
} else o.push(h("str += %j;", e.text));
}), o.push("return str;"), new Function("params", "flatten", "pluralizer", o.join("\n"))) : t;
}(this, i.translation, i.locale)), "[object Function]" !== o(i.compiled) ? i.compiled : ((a(n) || s(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, _, y))) : e + ": No translation for [" + t + "]";
}, w.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(g(e, t)) : !!b(this, e, t);
}, w.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(g(e, t)) ? e : null;
var r = b(this, e, t);
return r ? r.split(v, 2)[0] : null;
}, w.prototype.t = w.prototype.translate, w.prototype.stringify = function(e) {
var t = this, n = {};
p(this._storage, function(e, t) {
n[t.split(v)[1]] = !0;
});
var r = {};
p(n, function(n, i) {
var o = b(t, e, i);
if (o) {
var s = t._storage[o].locale;
r[s] || (r[s] = {}), r[s][i] = t._storage[o].translation;
}
});
var i = {
fallback: {},
locales: r
}, o = (t._fallbacks[e] || []).slice(0, -1);
return o.length && (i.fallback[e] = o), JSON.stringify(i);
}, w.prototype.load = function(e) {
var t = this;
return s(e) && (e = JSON.parse(e)), p(e.locales, function(e, n) {
p(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), p(e.fallback, function(e, n) {
t.setFallback(n, e);
}), this;
}, e.exports = w;
},
7: function(e, t, n) {
"use strict";
e.exports = function() {
function e(e, t, n, r, i, o) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, 
this.column = o, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n();
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, o = {
start: ue
}, s = ue, a = i, l = "((", c = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, d = function(e, t) {
return {
type: "plural",
forms: function(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}(e),
strict: function(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}(e),
anchor: t || "count"
};
}, h = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, _ = function(e, t) {
return [ e ].concat(t);
}, v = function(e) {
return [ e ];
}, g = "=", b = {
type: "literal",
value: "=",
description: '"="'
}, y = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, k = " ", x = {
type: "literal",
value: " ",
description: '" "'
}, A = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, E = function() {
return {
text: se()
};
}, F = "\\", j = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, O = /^[\\|)(]/, S = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, L = function(e) {
return e;
}, C = void 0, T = {
type: "any",
description: "any character"
}, z = function() {
return se();
}, q = ":", P = {
type: "literal",
value: ":",
description: '":"'
}, R = function(e) {
return e;
}, M = "#{", N = {
type: "literal",
value: "#{",
description: '"#{"'
}, D = "}", U = {
type: "literal",
value: "}",
description: '"}"'
}, I = function(e) {
return {
type: "variable",
anchor: e
};
}, Z = ".", $ = {
type: "literal",
value: ".",
description: '"."'
}, H = function() {
return se();
}, J = /^[a-zA-Z_$]/, B = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, G = /^[a-zA-Z0-9_$]/, W = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, Y = function(e) {
return e;
}, X = function(e) {
return {
type: "literal",
text: e.join("")
};
}, V = /^[\\#()|]/, K = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, ie = [], oe = 0;
if ("startRule" in r) {
if (!(r.startRule in o)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
s = o[r.startRule];
}
function se() {
return t.substring(ee, Q);
}
function ae(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var i, o;
for (i = n; i < r; i++) "\n" === (o = t.charAt(i)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function le(e) {
Q < re || (Q > re && (re = Q, ie = []), ie.push(e));
}
function ce(n, r, i) {
var o = ae(i), s = i < t.length ? t.charAt(i) : null;
return null !== r && function(e) {
var t = 1;
for (e.sort(function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
}); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(r), new e(null !== n ? n : function(e, t) {
var n, r = new Array(e.length);
for (n = 0; n < e.length; n++) r[n] = e[n].description;
return "Expected " + (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) + " but " + (t ? '"' + function(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
return "\\x0" + t(e);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
return "\\x" + t(e);
}).replace(/[\u0180-\u0FFF]/g, function(e) {
return "\\u0" + t(e);
}).replace(/[\u1080-\uFFFF]/g, function(e) {
return "\\u" + t(e);
});
}(t) + '"' : "end of input") + " found.";
}(r, s), r, s, i, o.line, o.column);
}
function ue() {
var e, t;
for (e = [], (t = ve()) === i && (t = fe()) === i && (t = he()); t !== i; ) e.push(t), 
(t = ve()) === i && (t = fe()) === i && (t = he());
return e;
}
function fe() {
var e, n, r, o, s;
return e = Q, t.substr(Q, 2) === l ? (n = l, Q += 2) : (n = i, 0 === oe && le(c)), 
n !== i && (r = function e() {
var n, r, o, s;
return n = Q, (r = pe()) !== i ? (124 === t.charCodeAt(Q) ? (o = h, Q++) : (o = i, 
0 === oe && le(m)), o !== i && (s = e()) !== i ? (ee = n, r = _(r, s), n = r) : (Q = n, 
n = a)) : (Q = n, n = a), n === i && (n = Q, (r = pe()) !== i && (ee = n, r = v(r)), 
n = r), n;
}()) !== i ? (t.substr(Q, 2) === u ? (o = u, Q += 2) : (o = i, 0 === oe && le(f)), 
o !== i ? ((s = function() {
var e, n, r;
return e = Q, 58 === t.charCodeAt(Q) ? (n = q, Q++) : (n = i, 0 === oe && le(P)), 
n !== i && (r = me()) !== i ? (ee = e, n = R(r), e = n) : (Q = e, e = a), e;
}()) === i && (s = p), s !== i ? (ee = e, e = n = d(r, s)) : (Q = e, e = a)) : (Q = e, 
e = a)) : (Q = e, e = a), e;
}
function pe() {
var e, n, r, o, s, l;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = g, Q++) : (n = i, 0 === oe && le(b)), n !== i) {
if (r = [], y.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 0 === oe && le(w)), 
o !== i) for (;o !== i; ) r.push(o), y.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 
0 === oe && le(w)); else r = a;
if (r !== i) if (32 === t.charCodeAt(Q) ? (o = k, Q++) : (o = i, 0 === oe && le(x)), 
o === i && (o = p), o !== i) {
if (s = [], (l = de()) !== i) for (;l !== i; ) s.push(l), l = de(); else s = a;
s !== i ? (ee = e, e = n = A(r, s)) : (Q = e, e = a);
} else Q = e, e = a; else Q = e, e = a;
} else Q = e, e = a;
if (e === i) {
if (e = Q, n = [], (r = de()) !== i) for (;r !== i; ) n.push(r), r = de(); else n = a;
n !== i && (ee = e, n = E()), e = n;
}
return e;
}
function de() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = F, Q++) : (n = i, 0 === oe && le(j)), 
n !== i ? (O.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === oe && le(S)), 
r !== i ? (ee = e, e = n = L(r)) : (Q = e, e = a)) : (Q = e, e = a), e === i && (e = Q, 
n = Q, oe++, 124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = i, 0 === oe && le(m)), 
r === i && (t.substr(Q, 2) === u ? (r = u, Q += 2) : (r = i, 0 === oe && le(f))), 
oe--, r === i ? n = C : (Q = n, n = a), n !== i ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = i, 0 === oe && le(T)), r !== i ? (ee = e, e = n = z()) : (Q = e, e = a)) : (Q = e, 
e = a)), e;
}
function he() {
var e, n, r, o;
return e = Q, t.substr(Q, 2) === M ? (n = M, Q += 2) : (n = i, 0 === oe && le(N)), 
n !== i && (r = me()) !== i ? (125 === t.charCodeAt(Q) ? (o = D, Q++) : (o = i, 
0 === oe && le(U)), o !== i ? (ee = e, e = n = I(r)) : (Q = e, e = a)) : (Q = e, 
e = a), e;
}
function me() {
var e, n, r, o;
if (e = Q, _e() !== i) if (46 === t.charCodeAt(Q) ? (n = Z, Q++) : (n = i, 0 === oe && le($)), 
n !== i) {
if (r = [], (o = me()) !== i) for (;o !== i; ) r.push(o), o = me(); else r = a;
r !== i ? (ee = e, e = H()) : (Q = e, e = a);
} else Q = e, e = a; else Q = e, e = a;
return e === i && (e = _e()), e;
}
function _e() {
var e, n, r, o;
if (e = Q, J.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = i, 0 === oe && le(B)), 
n !== i) {
for (r = [], G.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 0 === oe && le(W)); o !== i; ) r.push(o), 
G.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 0 === oe && le(W));
r !== i ? (ee = e, e = n = z()) : (Q = e, e = a);
} else Q = e, e = a;
return e;
}
function ve() {
var e, t, n, r, o;
if (e = Q, t = [], n = Q, r = Q, oe++, (o = fe()) === i && (o = he()), oe--, o === i ? r = C : (Q = r, 
r = a), r !== i && (o = ge()) !== i ? (ee = n, n = r = Y(o)) : (Q = n, n = a), n !== i) for (;n !== i; ) t.push(n), 
n = Q, r = Q, oe++, (o = fe()) === i && (o = he()), oe--, o === i ? r = C : (Q = r, 
r = a), r !== i && (o = ge()) !== i ? (ee = n, n = r = Y(o)) : (Q = n, n = a); else t = a;
return t !== i && (ee = e, t = X(t)), e = t;
}
function ge() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = F, Q++) : (n = i, 0 === oe && le(j)), 
n !== i ? (V.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === oe && le(K)), 
r !== i ? (ee = e, e = n = L(r)) : (Q = e, e = a)) : (Q = e, e = a), e === i && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = i, 0 === oe && le(T))), e;
}
if ((n = s()) !== i && Q === t.length) return n;
throw n !== i && Q < t.length && le({
type: "end",
description: "end of input"
}), ce(null, ie, re);
}
};
}();
},
8: function(e, t, n) {
"use strict";
var r = {};
function i(e) {
var t;
return r[e] ? e : (t = e.toLowerCase().replace("_", "-"), r[t] ? t : (t = t.split("-")[0], 
r[t] ? t : null));
}
function o(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].cFn) return 0;
var o = String(t), s = o.indexOf(".") < 0 ? "" : o.split(".")[1], a = s.length, l = +t, c = +o.split(".")[0], u = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].cFn(l, c, a, +s, u);
}
function s(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var o = String(t), s = o.indexOf(".") < 0 ? "" : o.split(".")[1], a = s.length, l = +t, c = +o.split(".")[0], u = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].oFn(l, c, a, +s, u);
}
e.exports = function(e, t) {
var n = i(e);
return n ? r[n].c[o(n, t)] : null;
}, e.exports.indexOf = o, e.exports.forms = function(e) {
var t = i(e);
return r[t] ? r[t].c : null;
}, e.exports.ordinal = function(e, t) {
var n = i(e);
return r[n] ? r[n].o[s(n, t)] : null;
}, e.exports.ordinal.indexOf = s, e.exports.ordinal.forms = function(e) {
var t = i(e);
return r[t] ? r[t].o : null;
};
var a = [ "zero", "one", "two", "few", "many", "other" ];
function l(e) {
return a[e];
}
function c(e, t) {
var n;
for (t.c = t.c ? t.c.map(l) : [ "other" ], t.o = t.o ? t.o.map(l) : [ "other" ], 
n = 0; n < e.length; n++) r[e[n]] = t;
}
function u(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function f(e, t) {
return e.indexOf(t) >= 0;
}
c([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) ? 0 : 1;
}
}), c([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), c([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : u(3, 10, t) ? 3 : u(11, 99, t) ? 4 : 5;
}
}), c([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return f([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), c([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, i = t % 1e3;
return f([ 1, 2, 5, 7, 8 ], n) || f([ 20, 50, 70, 80 ], r) ? 0 : f([ 3, 4 ], n) || f([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === t || 6 === n || f([ 40, 60, 90 ], r) ? 2 : 3;
}
}), c([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : u(2, 4, t) && !u(12, 14, n) ? 1 : 0 === t || u(5, 9, t) || u(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return f([ 2, 3 ], e % 10) && !f([ 12, 13 ], t) ? 0 : 1;
}
}), c([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
c([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || f([ 11, 71, 91 ], n) ? 2 !== t || f([ 12, 72, 92 ], n) ? !u(3, 4, t) && 9 !== t || u(10, 19, n) || u(70, 79, n) || u(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, o = t % 100, s = r % 10, a = r % 100;
return 0 === n && 1 === i && 11 !== o || 1 === s && 11 !== a ? 0 : 0 === n && u(2, 4, i) && !u(12, 14, o) || u(2, 4, s) && !u(12, 14, a) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return f([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), c([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : u(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), c([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return f([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : f([ 3, 4 ], e) ? 3 : f([ 5, 6 ], e) ? 4 : 5;
}
}), c([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 1 === e || 0 !== i && f([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 100, o = r % 100;
return 0 === n && 1 === i || 1 === o ? 0 : 0 === n && 2 === i || 2 === o ? 1 : 0 === n && u(3, 4, i) || u(3, 4, o) ? 2 : 3;
}
}), c([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), c([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return f([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, o = r % 10;
return 0 === n && f([ 1, 2, 3 ], t) || 0 === n && !f([ 4, 6, 9 ], i) || 0 !== n && !f([ 4, 6, 9 ], o) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return f([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : u(3, 6, e) ? 2 : u(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return f([ 1, 11 ], e) ? 0 : f([ 2, 12 ], e) ? 1 : u(3, 10, e) || u(13, 19, e) ? 2 : 3;
}
}), c([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), c([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || u(0, 10, e) || 0 !== r ? 3 : 2;
}
}), c([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return f([ 1, 5 ], e) ? 0 : 1;
}
}), c([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 0 === i && 1 === t % 10 && 11 !== t % 100 || 0 !== i ? 0 : 1;
}
}), c([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return f([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), c([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), c([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), c([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), c([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), c([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : f([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), c([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, o = e % 100;
return 1 !== i || u(11, 19, o) ? u(2, 9, i) && !u(11, 19, o) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, o = e % 100, s = r % 100, a = r % 10;
return 0 === i || u(11, 19, o) || 2 === n && u(11, 19, s) ? 0 : 1 === i && 11 !== o || 2 === n && 1 === a && 11 !== s || 2 !== n && 1 === a ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : f([ 7, 8 ], n) && !f([ 17, 18 ], r) ? 2 : 3;
}
}), c([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || 1 !== e && u(1, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), c([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || u(2, 10, t) ? 1 : u(11, 19, t) ? 2 : 3;
}
}), c([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return u(1, 4, e) ? 0 : 1;
}
}), c([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 1 !== t && u(0, 1, r) || 0 === n && u(5, 9, r) || 0 === n && u(12, 14, i) ? 2 : 3;
}
}), c([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 2, e) && 2 !== e ? 0 : 1;
}
}), c([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), c([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
}
}), c([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : u(2, 10, e) ? 1 : 2;
}
}), c([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return f([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), c([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u(3, 4, r) || 0 !== n ? 2 : 3;
}
}), c([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), c([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return f([ 1, 2 ], e % 10) && !f([ 11, 12 ], t) ? 0 : 1;
}
}), c([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) || u(11, 99, e) ? 0 : 1;
}
}), c([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
},
9: function(e, t, n) {
"use strict";
function r(e) {
if (e = e || {}, this.elem = e.elem, this.size = e.size || "medium", this.class = e.class ? " " + e.class : "", 
this.elemClass = e.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
r.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, r.prototype.stop = function() {
let e = this.elem.querySelector(".spinner");
e && (e.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = r, e.exports = r;
}
});