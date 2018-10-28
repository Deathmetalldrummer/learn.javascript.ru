var screencast = function(t) {
var e = {};
function n(r) {
if (e[r]) return e[r].exports;
var i = e[r] = {
i: r,
l: !1,
exports: {}
};
return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
}
return n.m = t, n.c = e, n.d = function(t, e, r) {
n.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: r
});
}, n.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, n.t = function(t, e) {
if (1 & e && (t = n(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function(e) {
return t[e];
}.bind(null, i));
return r;
}, n.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return n.d(e, "a", e), e;
}, n.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, n.p = "/pack/", n(n.s = 359);
}({
0: function(t, e, n) {
"use strict";
t.exports = {
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
1: function(t, e, n) {
"use strict";
const r = new (n(5))("en");
let i = console.error;
function o(t) {
return r.hasPhrase(s, t) || i("No such phrase", t), r.t(s, ...arguments);
}
t.exports = o;
const s = n(0).lang;
"en" !== s && r.setFallback(s, "en"), r.add = ((...t) => r.addPhrase(s, ...t)), 
o.i18n = r;
},
10: function(t, e, n) {
"use strict";
t.exports = function() {
let t = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return t ? t[1] : null;
};
},
107: function(t, e, n) {
"use strict";
let r = n(9), i = n(4), o = n(2), s = n(108);
const a = n(1), c = n(0).lang;
function l(t, e) {
if (!t.elements.email.value) return;
let n = t.elements.slug, s = [];
if (n.length) for (let t = 0; t < n.length; t++) {
let e = n[t];
e.checked && s.push(e.value);
} else s.push(n.value);
if (!s.length) return void new o.Error(a("newsletter.client.choose_newsletter"));
let c = {
email: t.elements.email.value,
slug: s
};
const l = i({
method: "POST",
url: t.action,
body: c
});
let u = t.querySelector('[type="submit"]'), f = new r({
elem: u,
size: "small",
elemClass: "button_loading"
});
f.start(), u.disabled = !0, l.addEventListener("loadend", () => {
f.stop(), u.disabled = !1;
}), l.addEventListener("success", function(n) {
if (200 == this.status) {
new o.Success(n.result.message, "slow"), t.elements.email.value = "";
let r = t.elements.gaEvent && JSON.parse(t.elements.gaEvent.value);
r && window.gaSendEvent(r), e && e();
} else new o.Error(n.result.message);
});
}
a.i18n.add("newsletter.client", n(110)("./" + c + ".yml")), e.initNewsletterForm = function() {
let t = document.querySelector("[data-newsletter-subscribe-form]");
t && (t.onsubmit = function(e) {
e.preventDefault(), l(t);
});
}, e.initNewsletterLink = function() {
let t = document.querySelector("[data-newsletter-subscribe-link]");
t && (t.onclick = function(e) {
e.preventDefault();
let n = prompt(a("newsletter.client.email_please"), window.currentUser && window.currentUser.email || "");
n && i({
method: "POST",
url: "/newsletter/subscribe",
body: {
slug: t.dataset.slug,
email: n
}
}).addEventListener("success", function(e) {
if (200 == this.status) {
new o.Success(e.result.message, "slow");
let n = t.dataset.gaEvent && JSON.parse(t.dataset.gaEvent);
n && window.gaSendEvent(n);
} else new o.Error(e.result.message);
});
});
}, e.submitSubscribeForm = l, e.initEnSubscribeButton = function(t) {
t.addEventListener("click", () => new s({
onSubmit: l
}));
};
},
108: function(t, e, n) {
"use strict";
let r = n(19), i = n(109);
t.exports = class extends Modal {
constructor(t) {
super(t), this.options = t || {}, this.options.inModal = !0;
let e = document.createElement("div");
e.innerHTML = r(i, this.options), this.setContent(e), this.elem.querySelector('[type="email"]').focus(), 
this.elem.querySelector("form").addEventListener("submit", this.onFormSubmit.bind(this));
}
onFormSubmit(t) {
t.preventDefault(), this.options.onSubmit(t.target, this.remove.bind(this));
}
};
},
109: function(t, e, n) {
var r = n(18);
t.exports = function(t) {
var e, n = "", i = {}, o = t || {};
return function(t, o, s, a, c, l, u, f, p) {
var h = function(e) {
var n;
if (null == e || "object" != typeof e) return e;
if (e instanceof o) return (n = new o()).setTime(e.getTime()), n;
if (e instanceof t) {
n = [];
for (var r = 0, i = e.length; r < i; r++) n[r] = h(e[r]);
return n;
}
if (e instanceof a) {
for (var c in n = {}, e) e.hasOwnProperty(c) && (n[c] = h(e[c]));
return n;
}
throw new s("Unable to copy obj! Its type isn't supported.");
}, d = {
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
}, m = [ "element", "modifier" ], v = {
prefix: "",
element: "__",
modifier: "_",
default_tag: "div",
nosrc_substitute: !0,
flat_elements: !0,
class_delimiter: ""
}, g = function() {
var t = h(v);
void 0 !== p && (t.prefix = p), void 0 !== u && (t.element = u), void 0 !== f && (t.modifier = f), 
void 0 !== l && (t.default_tag = l);
for (var e = 0; e < m.length; e++) {
var n = m[e];
void 0 === t["output_" + n] && (t["output_" + n] = t[n]);
}
return t;
};
i.bemto_custom_inline_tag = e = function(t, i) {
var o = this && this.block, s = this && this.attributes || {};
if (i = i || !1, n += (null == (e = "<") ? "" : e) + r.escape(null == (e = t) ? "" : e), 
s) for (var a in s) s.hasOwnProperty(a) && !1 !== s[a] && void 0 !== s[a] && (n += r.escape(null == (e = " ") ? "" : e) + r.escape(null == (e = a) ? "" : e) + (null == (e = '="') ? "" : e) + (null == (e = !0 === s[a] ? a : s[a]) ? "" : e) + (null == (e = '"') ? "" : e));
i ? n += null == (e = "/>") ? "" : e : (n += null == (e = ">") ? "" : e, o && o(), 
n += (null == (e = "</") ? "" : e) + r.escape(null == (e = t) ? "" : e) + (null == (e = ">") ? "" : e));
}, i.bemto_custom_tag = e = function(t, e) {
var o = this && this.block, s = this && this.attributes || {};
t = t || "div", e = e || {};
var a, c, l = !1;
switch ("/" === t.substr(-1) && (l = !0, t = t.slice(0, -1)), e.type || (c = "block", 
d[a = t] && (c = d[a].type || c), c)) {
case "inline":
i.bemto_custom_inline_tag.call({
block: function() {
o && o();
},
attributes: s
}, t);
break;

case "self_closing":
i.bemto_custom_inline_tag.call({
attributes: s
}, t, !0);
break;

default:
l ? n = n + "<" + t + r.attrs(s, !0) + "/>" : (n = n + "<" + t + r.attrs(s, !0) + ">", 
o && o(), n = n + "</" + t + ">");
}
}, i.bemto_tag = e = function(t, e) {
var r = this && this.block, o = this && this.attributes || {}, s = g();
e = e || {};
var a = t || s.default_tag, c = y.length;
t || ("inline" === y[c - 1] ? a = "span" : "list" === y[c - 1] ? a = "li" : "optionlist" === y[c - 1] && (a = "option")), 
t && "span" != t && "div" != t || (o.href && (a = "a"), o.for && (a = "label"), 
o.type ? a = r ? "button" : "input" : o.src && (a = "img")), "list" === y[c - 1] && "li" !== a ? n += "<li>" : "list" !== y[c - 1] && "pseudo-list" !== y[c - 1] && "li" === a ? (n += "<ul>", 
y[y.length] = "pseudo-list") : "pseudo-list" === y[c - 1] && "li" !== a && (n += "</ul>", 
y = y.splice(0, y.length - 1));
var l, u, f = e.content_type || (u = "block", d[l = a] && (u = d[l].content_type || d[l].type || u), 
u);
y[y.length] = f, "img" == a && (o.alt && !o.title && (o.title = ""), o.title && !o.alt && (o.alt = o.title), 
o.alt || (o.alt = ""), "" === o.alt && (o.role = "presentation"), o.src || (!0 === s.nosrc_substitute ? o.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : s.nosrc_substitute && (o.src = s.nosrc_substitute))), 
"input" == a && (o.type || (o.type = "text")), "main" == a && (o.role || (o.role = "main")), 
"html" == a && (n += "<!DOCTYPE html>"), i.bemto_custom_tag.call({
block: function() {
r && r && r();
},
attributes: o
}, a, e), "list" === y[c - 1] && "li" != a && (n += "</li>");
};
var b = [], y = [ "block" ];
i.b = e = function(e) {
var n = this && this.block, r = this && this.attributes || {}, o = g();
e && void 0 !== e.prefix && (o.prefix = e.prefix);
var s = e && e.tag || ("string" == typeof e ? e : ""), l = e && e.isElement, u = e && e.metadata, f = !1;
if (r.class) {
var p = r.class;
p instanceof t && (p = p.join(" ")), p = p.split(" ");
var d = [], m = !0, v = [];
if (function() {
var t = p;
if ("number" == typeof t.length) for (var e = 0, n = t.length; e < n; e++) {
var r = t[e], i = {}, u = d[d.length - 1], g = !1;
if (r.match(/^[A-Z-]+[A-Z0-9-]?$/)) s = r.toLowerCase(); else if (m && l && (i.context = b[b.length - 1]), 
(x = r.match(new c("^(?!" + o.element + "[A-Za-z0-9])" + o.modifier + "(.+)$"))) && u && u.name) u.modifiers || (u.modifiers = []), 
u.modifiers.push(x[1]); else {
(A = r.match(new c("^(?!" + o.modifier + "[A-Za-z0-9])" + o.element + "(.+)$"))) && (i.context = b[b.length - 1], 
r = A[1]), (k = r.match(new c("^(.*[A-Za-z0-9])(?!" + o.modifier + "$)" + o.element + "$"))) && (r = k[1], 
i.is_context = !0, g = !0, f = !0, l = !1), (F = r.match(new c("^(.*?[A-Za-z0-9])(?!" + o.element + "[A-Za-z0-9])" + o.modifier + "(.+)$"))) && (r = F[1], 
i.modifiers || (i.modifiers = []), i.modifiers.push(F[2]));
var y = "", _ = "()?";
if (o.prefix) {
"string" == typeof (E = o.prefix) && (E = {
"": E
});
var w = [];
E instanceof a && (function() {
var t = E;
if ("number" == typeof t.length) for (var e = 0, n = t.length; e < n; e++) {
var r = t[e];
"string" == typeof e && "" != e && -1 == w.indexOf(e) && w.push(e), "string" == typeof r && "" != r && -1 == w.indexOf(r) && w.push(r);
} else for (var e in n = 0, t) n++, r = t[e], "string" == typeof e && "" != e && -1 == w.indexOf(e) && w.push(e), 
"string" == typeof r && "" != r && -1 == w.indexOf(r) && w.push(r);
}.call(this), _ = "(" + w.join("|") + ")?"), (O = r.match(new c("^" + _ + "([A-Za-z0-9]+.*)$"))) && (r = O[2], 
y = O[1] || "", void 0 !== (y = E[y]) && !0 !== y || (y = O[1]));
}
i.prefix = (y || "").replace(/\-/g, "%DASH%").replace(/\_/g, "%UNDERSCORE%"), g && r.match(/^[a-zA-Z0-9]+.*/) && v.push(i.context ? i.context + o.element + r : i.prefix + r), 
i.name = r, m = !1, i.context && i.context.length > 1 ? function() {
var t = i.context;
if ("number" == typeof t.length) for (var e = 0, n = t.length; e < n; e++) {
var r = t[e];
(o = h(i)).context = [ r ], d.push(o);
} else for (var e in n = 0, t) {
var o;
n++, r = t[e], (o = h(i)).context = [ r ], d.push(o);
}
}.call(this) : d.push(i);
}
} else for (var e in n = 0, t) {
var x;
if (n++, r = t[e], i = {}, u = d[d.length - 1], g = !1, r.match(/^[A-Z-]+[A-Z0-9-]?$/)) s = r.toLowerCase(); else if (m && l && (i.context = b[b.length - 1]), 
(x = r.match(new c("^(?!" + o.element + "[A-Za-z0-9])" + o.modifier + "(.+)$"))) && u && u.name) u.modifiers || (u.modifiers = []), 
u.modifiers.push(x[1]); else {
var A, k, F, E, O;
if ((A = r.match(new c("^(?!" + o.modifier + "[A-Za-z0-9])" + o.element + "(.+)$"))) && (i.context = b[b.length - 1], 
r = A[1]), (k = r.match(new c("^(.*[A-Za-z0-9])(?!" + o.modifier + "$)" + o.element + "$"))) && (r = k[1], 
i.is_context = !0, g = !0, f = !0, l = !1), (F = r.match(new c("^(.*?[A-Za-z0-9])(?!" + o.element + "[A-Za-z0-9])" + o.modifier + "(.+)$"))) && (r = F[1], 
i.modifiers || (i.modifiers = []), i.modifiers.push(F[2])), y = "", _ = "()?", o.prefix) "string" == typeof (E = o.prefix) && (E = {
"": E
}), w = [], E instanceof a && (function() {
var t = E;
if ("number" == typeof t.length) for (var e = 0, n = t.length; e < n; e++) {
var r = t[e];
"string" == typeof e && "" != e && -1 == w.indexOf(e) && w.push(e), "string" == typeof r && "" != r && -1 == w.indexOf(r) && w.push(r);
} else for (var e in n = 0, t) n++, r = t[e], "string" == typeof e && "" != e && -1 == w.indexOf(e) && w.push(e), 
"string" == typeof r && "" != r && -1 == w.indexOf(r) && w.push(r);
}.call(this), _ = "(" + w.join("|") + ")?"), (O = r.match(new c("^" + _ + "([A-Za-z0-9]+.*)$"))) && (r = O[2], 
y = O[1] || "", void 0 !== (y = E[y]) && !0 !== y || (y = O[1]));
i.prefix = (y || "").replace(/\-/g, "%DASH%").replace(/\_/g, "%UNDERSCORE%"), g && r.match(/^[a-zA-Z0-9]+.*/) && v.push(i.context ? i.context + o.element + r : i.prefix + r), 
i.name = r, m = !1, i.context && i.context.length > 1 ? function() {
var t = i.context;
if ("number" == typeof t.length) for (var e = 0, n = t.length; e < n; e++) {
var r = t[e];
(o = h(i)).context = [ r ], d.push(o);
} else for (var e in n = 0, t) {
var o;
n++, r = t[e], (o = h(i)).context = [ r ], d.push(o);
}
}.call(this) : d.push(i);
}
}
}.call(this), !l && !v.length && d[0] && d[0].name && d[0].name.match(/^[a-zA-Z0-9]+.*/) && (d[0].is_context = !0, 
v.push(d[0].context ? d[0].context + o.element + d[0].name : d[0].prefix + d[0].name), 
f = !0), v.length && (o.flat_elements && function() {
var t = v;
if ("number" == typeof t.length) for (var e = 0, n = t.length; e < n; e++) (r = t[e].match(new c("^(.*?[A-Za-z0-9])(?!" + o.modifier + "[A-Za-z0-9])" + o.element + ".+$"))) && (v[e] = r[1]); else for (var e in n = 0, 
t) {
var r;
n++, (r = t[e].match(new c("^(.*?[A-Za-z0-9])(?!" + o.modifier + "[A-Za-z0-9])" + o.element + ".+$"))) && (v[e] = r[1]);
}
}.call(this), b[b.length] = v), d.length) {
var _ = [];
(function() {
var t = d;
if ("number" == typeof t.length) {
for (var e = 0, n = t.length; e < n; e++) if ((i = t[e]).name) {
var r = i.prefix;
i.context && (r = i.context + o.output_element), _.push(r + i.name), i.modifiers && function() {
var t = i.modifiers;
if ("number" == typeof t.length) for (var e = 0, n = t.length; e < n; e++) {
var s = t[e];
_.push(r + i.name + o.output_modifier + s);
} else for (var e in n = 0, t) n++, s = t[e], _.push(r + i.name + o.output_modifier + s);
}.call(this);
}
} else for (var e in n = 0, t) {
var i;
n++, (i = t[e]).name && (r = i.prefix, i.context && (r = i.context + o.output_element), 
_.push(r + i.name), i.modifiers && function() {
var t = i.modifiers;
if ("number" == typeof t.length) for (var e = 0, n = t.length; e < n; e++) {
var s = t[e];
_.push(r + i.name + o.output_modifier + s);
} else for (var e in n = 0, t) n++, s = t[e], _.push(r + i.name + o.output_modifier + s);
}.call(this));
}
}).call(this);
var w = o.class_delimiter;
w = w ? " " + w + " " : " ", r.class = _.join(w).replace(/%DASH%/g, "-").replace(/%UNDERSCORE%/g, "_");
} else r.class = void 0;
}
n ? i.bemto_tag.call({
block: function() {
n && n();
},
attributes: r
}, s, u) : i.bemto_tag.call({
attributes: r
}, s, u), !l && f && (b = b.splice(0, b.length - 1)), y = y.splice(0, y.length - 1);
}, i.e = e = function(t) {
var e = this && this.block, n = this && this.attributes || {};
(t = t && "string" == typeof t ? {
tag: t
} : t || {}).isElement = !0, i.b.call({
block: function() {
e && e();
},
attributes: n
}, t);
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
11: function(t, e, n) {
var r = {
"./ru.yml": 12
};
function i(t) {
var e = o(t);
return n(e);
}
function o(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, t.exports = i, i.id = 11;
},
110: function(t, e, n) {
var r = {
"./ru.yml": 111
};
function i(t) {
var e = o(t);
return n(e);
}
function o(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, t.exports = i, i.id = 110;
},
111: function(t, e) {
t.exports = {
choose_newsletter: "Выберите рассылки из списка.",
email_please: "Ваш e-mail?"
};
},
112: function(t, e, n) {
"use strict";
t.exports = class {
constructor(t) {
this.videoId = t.videoId, this.onClose = t.onClose, this.sizeList = [ {
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
let t = 0;
for (;t < this.sizeList.length && !(document.documentElement.clientHeight < this.sizeList[t].height || document.documentElement.clientWidth < this.sizeList[t].width); t++) ;
if (t--, this.currentWidth = this.sizeList[t].width, this.currentHeight = this.sizeList[t].height, 
0 === t) window.location.href = "//www.youtube.com/watch?v=" + this.videoId; else {
let t = new Modal();
if (t.setContent('<div id="player"></div>'), t.elem.addEventListener("modal-remove", () => {
this.player && (this.player.destroy(), this.player = null), this.onClose && this.onClose.call(this);
}), window.YT) this.initPlayer(); else {
let t = document.createElement("script");
t.src = "https://www.youtube.com/iframe_api", document.head.appendChild(t), window.onYouTubeIframeAPIReady = (() => {
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
onStateChangeHandler(t) {
if (window.focus(), 1 == t.data && (this.player.videoId = this.videoId), 0 == t.data) {
let t = document.querySelectorAll("[data-video-id]");
for (let e = 0; e < t.length; e++) {
if (t[e].getAttribute("data-video-id") == this.player.videoId) {
let n = t[e + 1] && t[e + 1].getAttribute("data-video-id");
n && (t[e + 1].parentNode.dataset.mnemo && (window.location.hash = t[e + 1].parentNode.dataset.mnemo), 
this.videoId = n, this.initPlayer());
break;
}
}
}
}
};
},
12: function(t, e) {
t.exports = {
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
13: function(t, e, n) {
var r = {
"./ru.yml": 14
};
function i(t) {
var e = o(t);
return n(e);
}
function o(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, t.exports = i, i.id = 13;
},
14: function(t, e) {
t.exports = {
server_connection_error: "Ошибка связи с сервером.",
server_request_timeout: "Превышено максимально допустимое время ожидания ответа от сервера.",
request_aborted: "Запрос был прерван.",
no_response: "Не получен ответ от сервера.",
server_error: "Ошибка на стороне сервера (код #{status}), попытайтесь позднее.",
invalid_format: "Некорректный формат ответа от сервера."
};
},
17: function(t, e, n) {
"use strict";
e.thumb = function(t, e, n) {
if (!t) return t;
let r = window.devicePixelRatio;
n *= r;
let i = (e *= r) <= 160 && n <= 160 ? "t" : e <= 320 && n <= 320 ? "m" : e <= 640 && n <= 640 ? "i" : e <= 1024 && n <= 1024 ? "h" : "";
return t.slice(0, t.lastIndexOf(".")) + i + t.slice(t.lastIndexOf("."));
};
},
18: function(t, e, n) {
"use strict";
var r = Object.prototype.hasOwnProperty;
function i(t, e) {
return Array.isArray(t) ? function(t, e) {
for (var n, r = "", o = "", s = Array.isArray(e), a = 0; a < t.length; a++) (n = i(t[a])) && (s && e[a] && (n = c(n)), 
r = r + o + n, o = " ");
return r;
}(t, e) : t && "object" == typeof t ? function(t) {
var e = "", n = "";
for (var i in t) i && t[i] && r.call(t, i) && (e = e + n + i, n = " ");
return e;
}(t) : t || "";
}
function o(t) {
if (!t) return "";
if ("object" == typeof t) {
var e = "";
for (var n in t) r.call(t, n) && (e = e + n + ":" + t[n] + ";");
return e;
}
return t + "";
}
function s(t, e, n, r) {
return !1 !== e && null != e && (e || "class" !== t && "style" !== t) ? !0 === e ? " " + (r ? t : t + '="' + t + '"') : ("function" == typeof e.toJSON && (e = e.toJSON()), 
"string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = c(e)), 
" " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'") : "";
}
e.merge = function t(e, n) {
if (1 === arguments.length) {
for (var r = e[0], i = 1; i < e.length; i++) r = t(r, e[i]);
return r;
}
for (var s in n) if ("class" === s) {
var a = e[s] || [];
e[s] = (Array.isArray(a) ? a : [ a ]).concat(n[s] || []);
} else if ("style" === s) {
var a = o(e[s]);
a = a && ";" !== a[a.length - 1] ? a + ";" : a;
var c = o(n[s]);
c = c && ";" !== c[c.length - 1] ? c + ";" : c, e[s] = a + c;
} else e[s] = n[s];
return e;
}, e.classes = i, e.style = o, e.attr = s, e.attrs = function(t, e) {
var n = "";
for (var a in t) if (r.call(t, a)) {
var c = t[a];
if ("class" === a) {
c = i(c), n = s(a, c, !1, e) + n;
continue;
}
"style" === a && (c = o(c)), n += s(a, c, !1, e);
}
return n;
};
var a = /["&<>]/;
function c(t) {
var e = "" + t, n = a.exec(e);
if (!n) return t;
var r, i, o, s = "";
for (r = n.index, i = 0; r < e.length; r++) {
switch (e.charCodeAt(r)) {
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
i !== r && (s += e.substring(i, r)), i = r + 1, s += o;
}
return i !== r ? s + e.substring(i, r) : s;
}
e.escape = c, e.rethrow = function t(e, r, i, o) {
if (!(e instanceof Error)) throw e;
if (!("undefined" == typeof window && r || o)) throw e.message += " on line " + i, 
e;
try {
o = o || n(20).readFileSync(r, "utf8");
} catch (n) {
t(e, null, i);
}
var s = 3, a = o.split("\n"), c = Math.max(i - s, 0), l = Math.min(a.length, i + s);
var s = a.slice(c, l).map(function(t, e) {
var n = e + c + 1;
return (n == i ? "  > " : "    ") + n + "| " + t;
}).join("\n");
e.path = r;
e.message = (r || "Pug") + ":" + i + "\n" + s + "\n\n" + e.message;
throw e;
};
},
19: function(t, e, n) {
"use strict";
const r = n(17).thumb, i = n(0), o = n(1);
t.exports = function(t, e) {
return function(t) {
t.t = o, t.thumb = r, t.lang = i.lang, t.env = i.env;
}(e = e ? Object.create(e) : {}), t(e);
};
},
2: function(t, e, n) {
"use strict";
Object.defineProperty(e, "__esModule", {
value: !0
});
let r = n(3);
e.init = function(t) {
window.notificationManager || (window.notificationManager = new class {
constructor(t = {}) {
this.notifications = [], this.verticalSpace = t.verticalSpace || 8;
}
register(t) {
this.notifications.unshift(t), setTimeout(() => this.recalculate(), 20);
}
unregister(t) {
let e = this.notifications.indexOf(t);
this.notifications.splice(e, 1), this.recalculate();
}
recalculate() {
let t = this.verticalSpace;
this.notifications.forEach(e => {
e.top = t, t += e.height + this.verticalSpace;
});
}
}(t));
};
class i {
constructor(t, e, n) {
let r = `<div class="notification notification_popup notification_${e}">\n    <div class="notification__content">${t}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
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
set top(t) {
this.elem.style.transform = "translateY(" + t + "px)";
}
}
r.delegateMixin(i.prototype);
e.Info = class extends i {
constructor(t, e) {
super(t, "info", e);
}
};
e.Warning = class extends i {
constructor(t, e) {
super(t, "warning", e);
}
};
e.Success = class extends i {
constructor(t, e) {
super(t, "success", e);
}
};
class o extends i {
constructor(t, e) {
super(t, "error", e);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
e.Error = o, e.Error = o;
},
20: function(t, e) {},
3: function(t, e, n) {
"use strict";
function r(t, e, n, r, i) {
t.addEventListener(n, function(t) {
let n = function(t, e) {
let n = t.target;
for (;n; ) {
if (n.matches(e)) return n;
if (n == t.currentTarget) break;
n = n.parentElement;
}
return null;
}(t, e);
t.delegateTarget = n, n && r.call(i || this, t);
});
}
r.delegateMixin = function(t) {
t.delegate = function(t, e, n) {
r(this.elem, t, e, n, this);
};
}, t.exports = r;
},
359: function(t, e, n) {
n(360), t.exports = n(362);
},
360: function(t, e, n) {
"use strict";
n(19);
let r = n(107);
n(361);
const i = n(112);
!function() {
!function() {
document.querySelectorAll("li[data-mnemo]");
let t = document.querySelectorAll("a[data-video-id]");
for (let e = 0; e < t.length; e++) {
let n = t[e];
n.href = "//www.youtube.com/watch?v=" + n.getAttribute("data-video-id"), n.onclick = function(t) {
t.preventDefault();
let e = this.getAttribute("data-video-id"), n = this.parentNode.dataset.mnemo;
window.ga("send", "event", window.SCREENCAST_SLUG, "open", n), window.location.hash = n;
const r = new i({
videoId: e
});
r.openVideo();
};
}
}(), function() {
let t = document.querySelector("[data-newsletter-subscribe-form]");
t && (t.onsubmit = function(e) {
e.preventDefault(), r.submitSubscribeForm(t);
});
}();
let t = window.location.hash;
if (!t) return;
t && (t = t.slice(1));
let e = document.querySelector(`[data-mnemo="${t}"]`);
if (e) {
e.scrollIntoView(), window.ga("send", "event", window.SCREENCAST_SLUG, "open", t);
let n = e.firstElementChild.dataset.videoId;
new i({
videoId: n
}).openVideo();
}
}();
},
361: function(t, e, n) {
"use strict";
t.exports = function(t) {
function e() {
e.wasCalled || (e.wasCalled = !0, t());
}
return setTimeout(e, 500), e;
};
},
362: function(t, e, n) {},
4: function(t, e, n) {
"use strict";
let r = n(2), i = n(10);
const o = n(0).lang, s = n(1);
s.i18n.add("", n(11)("./" + o + ".yml")), s.i18n.add("error.network", n(13)("./" + o + ".yml")), 
document.addEventListener("xhrfail", function(t) {
new r.Error(t.reason);
}), t.exports = function(t) {
let e = new XMLHttpRequest(), n = t.method || "GET", r = t.body, o = t.url;
e.open(n, o, !t.sync), e.method = n;
let a = i();
a && !t.skipCsrf && e.setRequestHeader("X-XSRF-TOKEN", a), "[object Object]" == {}.toString.call(r) && (e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), t.noDocumentEvents || (e.addEventListener("loadstart", t => {
e.timeStart = Date.now();
let n = l("xhrstart", t);
document.dispatchEvent(n);
}), e.addEventListener("loadend", t => {
let e = l("xhrend", t);
document.dispatchEvent(e);
}), e.addEventListener("success", t => {
let e = l("xhrsuccess", t);
e.result = t.result, document.dispatchEvent(e);
}), e.addEventListener("fail", t => {
let e = l("xhrfail", t);
e.reason = t.reason, document.dispatchEvent(e);
})), t.raw || e.setRequestHeader("Accept", "application/json"), e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let c = t.normalStatuses || [ 200 ];
function l(t, e) {
let n = new CustomEvent(t);
return n.originalEvent = e, n;
}
function u(t, n) {
let r = l("fail", n);
r.reason = t, e.dispatchEvent(r);
}
return e.addEventListener("error", t => {
u(s("error.network.server_connection_error"), t);
}), e.addEventListener("timeout", t => {
u(s("error.network.server_request_timeout"), t);
}), e.addEventListener("abort", t => {
u(s("error.network.request_aborted"), t);
}), e.addEventListener("load", n => {
if (!e.status) return void u(s("error.network.no_response"), n);
if (-1 == c.indexOf(e.status)) return void u(s("error.network.server_error", {
status: e.status
}), n);
let r = e.responseText;
if ((e.getResponseHeader("Content-Type") || "").match(/^application\/json/) || t.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(s("error.network.invalid_format"), n);
}
!function(t, n) {
let r = l("success", n);
r.result = t, e.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
e.send(r);
}, 0), e;
};
},
5: function(t, e, n) {
"use strict";
t.exports = n(6);
},
6: function(t, e, n) {
"use strict";
var r = n(7), i = n(8);
function o(t) {
return Object.prototype.toString.call(t);
}
function s(t) {
return "[object String]" === o(t);
}
function a(t) {
return !isNaN(t) && isFinite(t);
}
function c(t) {
return !0 === t || !1 === t;
}
function l(t) {
return "[object Object]" === o(t);
}
var u = Array.isArray || function(t) {
return "[object Array]" === o(t);
}, f = Array.prototype.forEach;
function p(t, e, n) {
if (null !== t) if (f && t.forEach === f) t.forEach(e, n); else if (t.length === +t.length) for (var r = 0, i = t.length; r < i; r += 1) e.call(n, t[r], r, t); else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(n, t[o], o, t);
}
var h = /%[sdj%]/g;
function d(t) {
var e = 1, n = arguments, r = n.length;
return String(t).replace(h, function(t) {
if ("%%" === t) return "%";
if (e >= r) return t;
switch (t) {
case "%s":
return String(n[e++]);

case "%d":
return Number(n[e++]);

case "%j":
return JSON.stringify(n[e++]);

default:
return t;
}
});
}
var m = "en";
function v(t) {
var e = {};
return p(t || {}, function(t, n) {
t && "object" == typeof t ? p(v(t), function(t, r) {
e[n + "." + r] = t;
}) : e[n] = t;
}), e;
}
var g = "#@$";
function b(t, e) {
return t + g + e;
}
function y(t, e, n) {
var r = b(e, n), i = t._storage;
if (i.hasOwnProperty(r)) return r;
if (e === t._defaultLocale) return null;
var o = t._fallbacks_cache;
if (o.hasOwnProperty(r)) return o[r];
for (var s, a = t._fallbacks[e] || [ t._defaultLocale ], c = 0, l = a.length; c < l; c++) if (s = b(a[c], n), 
i.hasOwnProperty(s)) return o[r] = s, o[r];
return o[r] = null, null;
}
function _(t, e, n) {
var r = i.indexOf(t, e);
return -1 === r ? d('[pluralizer for "%s" locale not found]', t) : void 0 === n[r] ? d('[plural form %d ("%s") not found in translation]', r, i.forms(t)[r]) : n[r];
}
function w(t) {
if (!(this instanceof w)) return new w(t);
this._defaultLocale = t ? String(t) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
w.prototype.addPhrase = function(t, e, n, r) {
var i, o = this;
if (c(r)) i = r ? 1 / 0 : 0; else if (a(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (l(n) && i > 0) return p(n, function(n, r) {
o.addPhrase(t, (e ? e + "." : "") + r, n, i - 1);
}), this;
if (s(n)) this._storage[b(t, e)] = {
translation: n,
locale: t,
raw: !1
}; else {
if (!(u(n) || a(n) || c(n) || 0 === i && l(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[b(t, e)] = {
translation: n,
locale: t,
raw: !0
};
}
return o._fallbacks_cache = {}, this;
}, w.prototype.setFallback = function(t, e) {
var n = this._defaultLocale;
if (n === t) throw new Error("Default locale can't have fallbacks");
var r = u(e) ? e.slice() : [ e ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[t] = r, this._fallbacks_cache = {}, 
this;
};
var x = /#\{|\(\(|\\\\/;
w.prototype.translate = function(t, e, n) {
var i, c = y(this, t, e);
return c ? (i = this._storage[c]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(t, e, n) {
var i, o, s, a, c, l;
return x.test(e) ? 1 === (i = r.parse(e)).length && "literal" === i[0].type ? i[0].text : (t._plurals_cache[n] || (t._plurals_cache[n] = new w(n)), 
l = t._plurals_cache[n], (o = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
o.push("params = flatten(params);"), p(i, function(t) {
if ("literal" !== t.type) {
if ("variable" === t.type) return s = t.anchor, void o.push(d('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', s, s, s));
if ("plural" !== t.type) throw new Error("Unknown node type");
s = t.anchor, a = {}, p(t.strict, function(e, i) {
var o = r.parse(e);
if (1 === o.length && "literal" === o[0].type) return a[i] = !1, void (t.strict[i] = o[0].text);
a[i] = !0, l.hasPhrase(n, e, !0) || l.addPhrase(n, e, e);
}), c = {}, p(t.forms, function(e, i) {
var o, s = r.parse(e);
if (1 === s.length && "literal" === s[0].type) return o = s[0].text, t.forms[i] = o, 
void (c[o] = !1);
c[e] = !0, l.hasPhrase(n, e, !0) || l.addPhrase(n, e, e);
}), o.push(d("loc = %j;", n)), o.push(d("loc_plzr = %j;", n.split(/[-_]/)[0])), 
o.push(d("anchor = params[%j];", s)), o.push(d("cache = this._plurals_cache[loc];")), 
o.push(d("strict = %j;", t.strict)), o.push(d("strict_exec = %j;", a)), o.push(d("forms = %j;", t.forms)), 
o.push(d("forms_exec = %j;", c)), o.push("if (+(anchor) != anchor) {"), o.push(d('  str += "[invalid plurals amount: %s(" + anchor + ")]";', s)), 
o.push("} else {"), o.push("  if (strict[anchor] !== undefined) {"), o.push("    plrl = strict[anchor];"), 
o.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), o.push("  } else {"), 
o.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), o.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
o.push("  }"), o.push("}");
} else o.push(d("str += %j;", t.text));
}), o.push("return str;"), new Function("params", "flatten", "pluralizer", o.join("\n"))) : e;
}(this, i.translation, i.locale)), "[object Function]" !== o(i.compiled) ? i.compiled : ((a(n) || s(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, v, _))) : t + ": No translation for [" + e + "]";
}, w.prototype.hasPhrase = function(t, e, n) {
return n ? this._storage.hasOwnProperty(b(t, e)) : !!y(this, t, e);
}, w.prototype.getLocale = function(t, e, n) {
if (n) return this._storage.hasOwnProperty(b(t, e)) ? t : null;
var r = y(this, t, e);
return r ? r.split(g, 2)[0] : null;
}, w.prototype.t = w.prototype.translate, w.prototype.stringify = function(t) {
var e = this, n = {};
p(this._storage, function(t, e) {
n[e.split(g)[1]] = !0;
});
var r = {};
p(n, function(n, i) {
var o = y(e, t, i);
if (o) {
var s = e._storage[o].locale;
r[s] || (r[s] = {}), r[s][i] = e._storage[o].translation;
}
});
var i = {
fallback: {},
locales: r
}, o = (e._fallbacks[t] || []).slice(0, -1);
return o.length && (i.fallback[t] = o), JSON.stringify(i);
}, w.prototype.load = function(t) {
var e = this;
return s(t) && (t = JSON.parse(t)), p(t.locales, function(t, n) {
p(t, function(t, r) {
e.addPhrase(n, r, t, 0);
});
}), p(t.fallback, function(t, n) {
e.setFallback(n, t);
}), this;
}, t.exports = w;
},
7: function(t, e, n) {
"use strict";
t.exports = function() {
function t(t, e, n, r, i, o) {
this.message = t, this.expected = e, this.found = n, this.offset = r, this.line = i, 
this.column = o, this.name = "SyntaxError";
}
return function(t, e) {
function n() {
this.constructor = t;
}
n.prototype = e.prototype, t.prototype = new n();
}(t, Error), {
SyntaxError: t,
parse: function(e) {
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, o = {
start: ut
}, s = ut, a = i, c = "((", l = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, h = function(t, e) {
return {
type: "plural",
forms: function(t) {
for (var e = [], n = 0; n < t.length; n++) void 0 === t[n].strict && e.push(t[n].text);
return e;
}(t),
strict: function(t) {
for (var e = {}, n = 0; n < t.length; n++) void 0 !== t[n].strict && (e[t[n].strict] = t[n].text);
return e;
}(t),
anchor: e || "count"
};
}, d = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, v = function(t, e) {
return [ t ].concat(e);
}, g = function(t) {
return [ t ];
}, b = "=", y = {
type: "literal",
value: "=",
description: '"="'
}, _ = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, x = " ", A = {
type: "literal",
value: " ",
description: '" "'
}, k = function(t, e) {
return {
strict: t.join(""),
text: e.join("")
};
}, F = function() {
return {
text: st()
};
}, E = "\\", O = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, S = /^[\\|)(]/, j = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, C = function(t) {
return t;
}, T = void 0, z = {
type: "any",
description: "any character"
}, L = function() {
return st();
}, P = ":", R = {
type: "literal",
value: ":",
description: '":"'
}, N = function(t) {
return t;
}, M = "#{", I = {
type: "literal",
value: "#{",
description: '"#{"'
}, D = "}", U = {
type: "literal",
value: "}",
description: '"}"'
}, q = function(t) {
return {
type: "variable",
anchor: t
};
}, Z = ".", $ = {
type: "literal",
value: ".",
description: '"."'
}, H = function() {
return st();
}, J = /^[a-zA-Z_$]/, B = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, G = /^[a-zA-Z0-9_$]/, W = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, Y = function(t) {
return t;
}, V = function(t) {
return {
type: "literal",
text: t.join("")
};
}, X = /^[\\#()|]/, K = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, tt = 0, et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}, rt = 0, it = [], ot = 0;
if ("startRule" in r) {
if (!(r.startRule in o)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
s = o[r.startRule];
}
function st() {
return e.substring(tt, Q);
}
function at(t) {
return et !== t && (et > t && (et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}), function(t, n, r) {
var i, o;
for (i = n; i < r; i++) "\n" === (o = e.charAt(i)) ? (t.seenCR || t.line++, t.column = 1, 
t.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (t.line++, t.column = 1, 
t.seenCR = !0) : (t.column++, t.seenCR = !1);
}(nt, et, t), et = t), nt;
}
function ct(t) {
Q < rt || (Q > rt && (rt = Q, it = []), it.push(t));
}
function lt(n, r, i) {
var o = at(i), s = i < e.length ? e.charAt(i) : null;
return null !== r && function(t) {
var e = 1;
for (t.sort(function(t, e) {
return t.description < e.description ? -1 : t.description > e.description ? 1 : 0;
}); e < t.length; ) t[e - 1] === t[e] ? t.splice(e, 1) : e++;
}(r), new t(null !== n ? n : function(t, e) {
var n, r = new Array(t.length);
for (n = 0; n < t.length; n++) r[n] = t[n].description;
return "Expected " + (t.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[t.length - 1] : r[0]) + " but " + (e ? '"' + function(t) {
function e(t) {
return t.charCodeAt(0).toString(16).toUpperCase();
}
return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(t) {
return "\\x0" + e(t);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(t) {
return "\\x" + e(t);
}).replace(/[\u0180-\u0FFF]/g, function(t) {
return "\\u0" + e(t);
}).replace(/[\u1080-\uFFFF]/g, function(t) {
return "\\u" + e(t);
});
}(e) + '"' : "end of input") + " found.";
}(r, s), r, s, i, o.line, o.column);
}
function ut() {
var t, e;
for (t = [], (e = gt()) === i && (e = ft()) === i && (e = dt()); e !== i; ) t.push(e), 
(e = gt()) === i && (e = ft()) === i && (e = dt());
return t;
}
function ft() {
var t, n, r, o, s;
return t = Q, e.substr(Q, 2) === c ? (n = c, Q += 2) : (n = i, 0 === ot && ct(l)), 
n !== i && (r = function t() {
var n, r, o, s;
return n = Q, (r = pt()) !== i ? (124 === e.charCodeAt(Q) ? (o = d, Q++) : (o = i, 
0 === ot && ct(m)), o !== i && (s = t()) !== i ? (tt = n, r = v(r, s), n = r) : (Q = n, 
n = a)) : (Q = n, n = a), n === i && (n = Q, (r = pt()) !== i && (tt = n, r = g(r)), 
n = r), n;
}()) !== i ? (e.substr(Q, 2) === u ? (o = u, Q += 2) : (o = i, 0 === ot && ct(f)), 
o !== i ? ((s = function() {
var t, n, r;
return t = Q, 58 === e.charCodeAt(Q) ? (n = P, Q++) : (n = i, 0 === ot && ct(R)), 
n !== i && (r = mt()) !== i ? (tt = t, n = N(r), t = n) : (Q = t, t = a), t;
}()) === i && (s = p), s !== i ? (tt = t, t = n = h(r, s)) : (Q = t, t = a)) : (Q = t, 
t = a)) : (Q = t, t = a), t;
}
function pt() {
var t, n, r, o, s, c;
if (t = Q, 61 === e.charCodeAt(Q) ? (n = b, Q++) : (n = i, 0 === ot && ct(y)), n !== i) {
if (r = [], _.test(e.charAt(Q)) ? (o = e.charAt(Q), Q++) : (o = i, 0 === ot && ct(w)), 
o !== i) for (;o !== i; ) r.push(o), _.test(e.charAt(Q)) ? (o = e.charAt(Q), Q++) : (o = i, 
0 === ot && ct(w)); else r = a;
if (r !== i) if (32 === e.charCodeAt(Q) ? (o = x, Q++) : (o = i, 0 === ot && ct(A)), 
o === i && (o = p), o !== i) {
if (s = [], (c = ht()) !== i) for (;c !== i; ) s.push(c), c = ht(); else s = a;
s !== i ? (tt = t, t = n = k(r, s)) : (Q = t, t = a);
} else Q = t, t = a; else Q = t, t = a;
} else Q = t, t = a;
if (t === i) {
if (t = Q, n = [], (r = ht()) !== i) for (;r !== i; ) n.push(r), r = ht(); else n = a;
n !== i && (tt = t, n = F()), t = n;
}
return t;
}
function ht() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = E, Q++) : (n = i, 0 === ot && ct(O)), 
n !== i ? (S.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = i, 0 === ot && ct(j)), 
r !== i ? (tt = t, t = n = C(r)) : (Q = t, t = a)) : (Q = t, t = a), t === i && (t = Q, 
n = Q, ot++, 124 === e.charCodeAt(Q) ? (r = d, Q++) : (r = i, 0 === ot && ct(m)), 
r === i && (e.substr(Q, 2) === u ? (r = u, Q += 2) : (r = i, 0 === ot && ct(f))), 
ot--, r === i ? n = T : (Q = n, n = a), n !== i ? (e.length > Q ? (r = e.charAt(Q), 
Q++) : (r = i, 0 === ot && ct(z)), r !== i ? (tt = t, t = n = L()) : (Q = t, t = a)) : (Q = t, 
t = a)), t;
}
function dt() {
var t, n, r, o;
return t = Q, e.substr(Q, 2) === M ? (n = M, Q += 2) : (n = i, 0 === ot && ct(I)), 
n !== i && (r = mt()) !== i ? (125 === e.charCodeAt(Q) ? (o = D, Q++) : (o = i, 
0 === ot && ct(U)), o !== i ? (tt = t, t = n = q(r)) : (Q = t, t = a)) : (Q = t, 
t = a), t;
}
function mt() {
var t, n, r, o;
if (t = Q, vt() !== i) if (46 === e.charCodeAt(Q) ? (n = Z, Q++) : (n = i, 0 === ot && ct($)), 
n !== i) {
if (r = [], (o = mt()) !== i) for (;o !== i; ) r.push(o), o = mt(); else r = a;
r !== i ? (tt = t, t = H()) : (Q = t, t = a);
} else Q = t, t = a; else Q = t, t = a;
return t === i && (t = vt()), t;
}
function vt() {
var t, n, r, o;
if (t = Q, J.test(e.charAt(Q)) ? (n = e.charAt(Q), Q++) : (n = i, 0 === ot && ct(B)), 
n !== i) {
for (r = [], G.test(e.charAt(Q)) ? (o = e.charAt(Q), Q++) : (o = i, 0 === ot && ct(W)); o !== i; ) r.push(o), 
G.test(e.charAt(Q)) ? (o = e.charAt(Q), Q++) : (o = i, 0 === ot && ct(W));
r !== i ? (tt = t, t = n = L()) : (Q = t, t = a);
} else Q = t, t = a;
return t;
}
function gt() {
var t, e, n, r, o;
if (t = Q, e = [], n = Q, r = Q, ot++, (o = ft()) === i && (o = dt()), ot--, o === i ? r = T : (Q = r, 
r = a), r !== i && (o = bt()) !== i ? (tt = n, n = r = Y(o)) : (Q = n, n = a), n !== i) for (;n !== i; ) e.push(n), 
n = Q, r = Q, ot++, (o = ft()) === i && (o = dt()), ot--, o === i ? r = T : (Q = r, 
r = a), r !== i && (o = bt()) !== i ? (tt = n, n = r = Y(o)) : (Q = n, n = a); else e = a;
return e !== i && (tt = t, e = V(e)), t = e;
}
function bt() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = E, Q++) : (n = i, 0 === ot && ct(O)), 
n !== i ? (X.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = i, 0 === ot && ct(K)), 
r !== i ? (tt = t, t = n = C(r)) : (Q = t, t = a)) : (Q = t, t = a), t === i && (e.length > Q ? (t = e.charAt(Q), 
Q++) : (t = i, 0 === ot && ct(z))), t;
}
if ((n = s()) !== i && Q === e.length) return n;
throw n !== i && Q < e.length && ct({
type: "end",
description: "end of input"
}), lt(null, it, rt);
}
};
}();
},
8: function(t, e, n) {
"use strict";
var r = {};
function i(t) {
var e;
return r[t] ? t : (e = t.toLowerCase().replace("_", "-"), r[e] ? e : (e = e.split("-")[0], 
r[e] ? e : null));
}
function o(t, e) {
var n = i(t);
if (!n) return -1;
if (!r[n].cFn) return 0;
var o = String(e), s = o.indexOf(".") < 0 ? "" : o.split(".")[1], a = s.length, c = +e, l = +o.split(".")[0], u = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].cFn(c, l, a, +s, u);
}
function s(t, e) {
var n = i(t);
if (!n) return -1;
if (!r[n].oFn) return 0;
var o = String(e), s = o.indexOf(".") < 0 ? "" : o.split(".")[1], a = s.length, c = +e, l = +o.split(".")[0], u = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].oFn(c, l, a, +s, u);
}
t.exports = function(t, e) {
var n = i(t);
return n ? r[n].c[o(n, e)] : null;
}, t.exports.indexOf = o, t.exports.forms = function(t) {
var e = i(t);
return r[e] ? r[e].c : null;
}, t.exports.ordinal = function(t, e) {
var n = i(t);
return r[n] ? r[n].o[s(n, e)] : null;
}, t.exports.ordinal.indexOf = s, t.exports.ordinal.forms = function(t) {
var e = i(t);
return r[e] ? r[e].o : null;
};
var a = [ "zero", "one", "two", "few", "many", "other" ];
function c(t) {
return a[t];
}
function l(t, e) {
var n;
for (e.c = e.c ? e.c.map(c) : [ "other" ], e.o = e.o ? e.o.map(c) : [ "other" ], 
n = 0; n < t.length; n++) r[t[n]] = e;
}
function u(t, e, n) {
return t <= n && n <= e && n % 1 == 0;
}
function f(t, e) {
return t.indexOf(e) >= 0;
}
l([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(t) {
return u(0, 1, t) ? 0 : 1;
}
}), l([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
}
}), l([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : u(3, 10, e) ? 3 : u(11, 99, e) ? 4 : 5;
}
}), l([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 1, 5, 7, 8, 9, 10 ], t) ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), l([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), l([ "az" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100, i = e % 1e3;
return f([ 1, 2, 5, 7, 8 ], n) || f([ 20, 50, 70, 80 ], r) ? 0 : f([ 3, 4 ], n) || f([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === e || 6 === n || f([ 40, 60, 90 ], r) ? 2 : 3;
}
}), l([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : u(2, 4, e) && !u(12, 14, n) ? 1 : 0 === e || u(5, 9, e) || u(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 2, 3 ], t % 10) && !f([ 12, 13 ], e) ? 0 : 1;
}
}), l([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
l([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100, r = t % 1e6;
return 1 !== e || f([ 11, 71, 91 ], n) ? 2 !== e || f([ 12, 72, 92 ], n) ? !u(3, 4, e) && 9 !== e || u(10, 19, n) || u(70, 79, n) || u(90, 99, n) ? 0 !== t && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), l([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n, r) {
var i = e % 10, o = e % 100, s = r % 10, a = r % 100;
return 0 === n && 1 === i && 11 !== o || 1 === s && 11 !== a ? 0 : 0 === n && u(2, 4, i) && !u(12, 14, o) || u(2, 4, s) && !u(12, 14, a) ? 1 : 2;
}
}), l([ "ca" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return f([ 1, 3 ], t) ? 0 : 2 === t ? 1 : 4 === t ? 2 : 3;
}
}), l([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : u(2, 4, e) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), l([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : 3 === t ? 3 : 6 === t ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 0, 7, 8, 9 ], t) ? 0 : 1 === t ? 1 : 2 === t ? 2 : f([ 3, 4 ], t) ? 3 : f([ 5, 6 ], t) ? 4 : 5;
}
}), l([ "da" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, i) {
return 1 === t || 0 !== i && f([ 0, 1 ], e) ? 0 : 1;
}
}), l([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n, r) {
var i = e % 100, o = r % 100;
return 0 === n && 1 === i || 1 === o ? 0 : 0 === n && 2 === i || 2 === o ? 1 : 0 === n && u(3, 4, i) || u(3, 4, o) ? 2 : 3;
}
}), l([ "en" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : 2 === e && 12 !== n ? 1 : 3 === e && 13 !== n ? 2 : 3;
}
}), l([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
}
}), l([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
var i = e % 10, o = r % 10;
return 0 === n && f([ 1, 2, 3 ], e) || 0 === n && !f([ 4, 6, 9 ], i) || 0 !== n && !f([ 4, 6, 9 ], o) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : u(3, 6, t) ? 2 : u(7, 10, t) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t) {
return f([ 1, 11 ], t) ? 0 : f([ 2, 12 ], t) ? 1 : u(3, 10, t) || u(13, 19, t) ? 2 : 3;
}
}), l([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), l([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f([ 0, 20, 40, 60, 80 ], e % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), l([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(t, e, n) {
var r = t % 10;
return 1 === e && 0 === n ? 0 : 2 === e && 0 === n ? 1 : 0 !== n || u(0, 10, t) || 0 !== r ? 3 : 2;
}
}), l([ "hu" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return f([ 1, 5 ], t) ? 0 : 1;
}
}), l([ "is" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, i) {
return 0 === i && 1 === e % 10 && 11 !== e % 100 || 0 !== i ? 0 : 1;
}
}), l([ "it" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
return f([ 11, 8, 80, 800 ], t) ? 0 : 1;
}
}), l([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : 2;
}
}), l([ "ka" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t, e) {
var n = e % 100;
return 1 === e ? 0 : 0 === e || u(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), l([ "kk" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
var e = t % 10;
return 6 === e || 9 === e || 0 === e && 0 !== t ? 0 : 1;
}
}), l([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2;
}
}), l([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e) {
return 0 === t ? 0 : f([ 0, 1 ], e) && 0 !== t ? 1 : 2;
}
}), l([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n, r) {
var i = t % 10, o = t % 100;
return 1 !== i || u(11, 19, o) ? u(2, 9, i) && !u(11, 19, o) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), l([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e, n, r) {
var i = t % 10, o = t % 100, s = r % 100, a = r % 10;
return 0 === i || u(11, 19, o) || 2 === n && u(11, 19, s) ? 0 : 1 === i && 11 !== o || 2 === n && 1 === a && 11 !== s || 2 !== n && 1 === a ? 1 : 2;
}
}), l([ "mk" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return 0 === n && 1 === e % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : f([ 7, 8 ], n) && !f([ 17, 18 ], r) ? 2 : 3;
}
}), l([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 0 !== n || 0 === t || 1 !== t && u(1, 19, t % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "mr" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 3;
}
}), l([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 10, e) ? 1 : u(11, 19, e) ? 2 : 3;
}
}), l([ "ne" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return u(1, 4, t) ? 0 : 1;
}
}), l([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 1 === e && 0 === n ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 1 !== e && u(0, 1, r) || 0 === n && u(5, 9, r) || 0 === n && u(12, 14, i) ? 2 : 3;
}
}), l([ "pt" ], {
c: [ 1, 5 ],
cFn: function(t) {
return u(0, 2, t) && 2 !== t ? 0 : 1;
}
}), l([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), l([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
}
}), l([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : u(2, 10, t) ? 1 : 2;
}
}), l([ "si" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return f([ 0, 1 ], t) || 0 === e && 1 === r ? 0 : 1;
}
}), l([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n) {
var r = e % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u(3, 4, r) || 0 !== n ? 2 : 3;
}
}), l([ "sq" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 4 === t % 10 && 14 !== t % 100 ? 1 : 2;
}
}), l([ "sv" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 1, 2 ], t % 10) && !f([ 11, 12 ], e) ? 0 : 1;
}
}), l([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(t) {
return u(0, 1, t) || u(11, 99, t) ? 0 : 1;
}
}), l([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
return 3 === t % 10 && 13 !== t % 100 ? 0 : 1;
}
});
},
9: function(t, e, n) {
"use strict";
function r(t) {
if (t = t || {}, this.elem = t.elem, this.size = t.size || "medium", this.class = t.class ? " " + t.class : "", 
this.elemClass = t.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
r.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, r.prototype.stop = function() {
let t = this.elem.querySelector(".spinner");
t && (t.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = r, t.exports = r;
}
});