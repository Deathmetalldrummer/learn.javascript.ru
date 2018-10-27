var head = function(t) {
function e(n) {
if (r[n]) return r[n].exports;
var o = r[n] = {
exports: {},
id: n,
loaded: !1
};
return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
}
var n = window.webpackJsonp_name_;
window.webpackJsonp_name_ = function(i, c) {
for (var a, s, u = 0, l = []; u < i.length; u++) s = i[u], o[s] && l.push.apply(l, o[s]), 
o[s] = 0;
for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
for (n && n(i, c); l.length; ) l.shift().call(null, e);
if (c[0]) return r[0] = 0, e(0);
};
var r = {}, o = {
14: 0
};
return e.e = function(t, n) {
if (0 === o[t]) return n.call(null, e);
if (void 0 !== o[t]) o[t].push(n); else {
o[t] = [ n ];
var r = document.getElementsByTagName("head")[0], i = document.createElement("script");
i.type = "text/javascript", i.charset = "utf-8", i.async = !0, i.src = e.p + "" + ({
"0": "search",
"1": "coursesCourse",
"2": "authClient",
"3": "footer",
"4": "angular",
"5": "tutorial",
"6": "ebookExtras",
"7": "coursesSignup",
"8": "ebook",
"10": "profile",
"11": "coursesParticipantDetails",
"12": "about",
"13": "quiz",
"16": "coursesMaterials",
"17": "auth",
"18": "coursesFrontpage",
"19": "coursesFeedbackEdit",
"20": "coursesFeedbackList",
"21": "coursesFeedbackShow",
"22": "profileGuestAboutMe",
"24": "donate",
"25": "styles",
"26": "qa",
"27": "screencast",
"32": "newsletterAdmin",
"33": "markup",
"35": "coursesGroupInfo"
}[t] || t) + "-" + t + ".30bfc7bc47478d473464.js", r.appendChild(i);
}
}, e.m = t, e.c = r, e.p = "/pack/", e(0);
}({
0: function(t, e, n) {
"use strict";
n(822);
try {
window.localStorage.testProperty = 1, delete window.localStorage.testProperty;
} catch (t) {
try {
window.localStorage = {};
} catch (t) {}
}
n(829), e.login = n(830), n(831), e.Modal = n(788), e.fontTest = n(832), e.resizeOnload = n(833), 
n(838), n(839), n(840), n(841), n(843), n(844), n(782).init(), e.showTopNotification = function() {
var t = document.querySelector(".notification_top"), e = t.id;
if (t.querySelector("button").onclick = function() {
localStorage.topNotificationHidden = e, t.style.display = "none", window.dispatchEvent(new CustomEvent("resize-internal"));
}, !e) throw Error("Top notification must have an id");
var n = localStorage.topNotificationHidden;
n != e && (delete localStorage.topNotificationHidden, t.style.display = "");
};
},
782: function(t, e, n) {
"use strict";
function r(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function o(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function i(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(e, "__esModule", {
value: !0
});
var c, a = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(t, r.key, r);
}
}
return function(e, n, r) {
return n && t(e.prototype, n), r && t(e, r), e;
};
}(), s = n(783), u = function() {
function t() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
i(this, t), this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
return a(t, [ {
key: "register",
value: function(t) {
var e = this;
this.notifications.unshift(t), setTimeout(function() {
return e.recalculate();
}, 20);
}
}, {
key: "unregister",
value: function(t) {
var e = this.notifications.indexOf(t);
this.notifications.splice(e, 1), this.recalculate();
}
}, {
key: "recalculate",
value: function() {
var t = this, e = this.verticalSpace;
this.notifications.forEach(function(n) {
n.top = e, e += n.height + t.verticalSpace;
});
}
} ]), t;
}();
e.init = function(t) {
c = new u(t);
};
var l = function() {
function t(e, n, r) {
i(this, t);
var o = '<div class="notification notification_popup notification_' + n + '">\n    <div class="notification__content">' + e + '</div>\n    <button title="Закрыть" class="notification__close"></button></div>';
switch (document.body.insertAdjacentHTML("beforeEnd", o), this.elem = document.body.lastElementChild, 
r) {
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
this.timeout = r;
}
c.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
return a(t, [ {
key: "close",
value: function() {
this.elem.parentNode && (this.elem.remove(), c.unregister(this));
}
}, {
key: "setupCloseHandler",
value: function() {
var t = this;
this.delegate(".notification__close", "click", function() {
return t.close();
});
}
}, {
key: "setupCloseTimeout",
value: function() {
var t = this;
this.timeout && setTimeout(function() {
return t.close();
}, this.timeout);
}
}, {
key: "TIMEOUT_DEFAULT",
get: function() {
return 2500;
}
}, {
key: "TIMEOUT_SLOW",
get: function() {
return 5e3;
}
}, {
key: "TIMEOUT_FAST",
get: function() {
return 1500;
}
}, {
key: "height",
get: function() {
return this.elem.offsetHeight;
}
}, {
key: "top",
set: function(t) {
this.elem.style.transform = "translateY(" + t + "px)";
}
} ]), t;
}();
s.delegateMixin(l.prototype);
var f = function(t) {
function e(t, n) {
return i(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "info", n));
}
return o(e, t), e;
}(l);
e.Info = f;
var d = function(t) {
function e(t, n) {
return i(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "warning", n));
}
return o(e, t), e;
}(l);
e.Warning = d;
var p = function(t) {
function e(t, n) {
return i(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "success", n));
}
return o(e, t), e;
}(l);
e.Success = p;
var h = e.Error = function(t) {
function e(t, n) {
return i(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, "error", n));
}
return o(e, t), a(e, [ {
key: "TIMEOUT_DEFAULT",
get: function() {
return 5e3;
}
} ]), e;
}(l);
e.Error = h;
},
783: function(t, e) {
"use strict";
function n(t, e) {
for (var n = t.target; n; ) {
if (n.matches(e)) return n;
if (n == t.currentTarget) break;
n = n.parentElement;
}
return null;
}
function r(t, e, r, o, i) {
t.addEventListener(r, function(t) {
var r = n(t, e);
t.delegateTarget = r, r && o.call(i || this, t);
});
}
r.delegateMixin = function(t) {
t.delegate = function(t, e, n) {
r(this.elem, t, e, n, this);
};
}, t.exports = r;
},
785: function(t, e) {
"use strict";
function n(t) {
if (t = t || {}, this.elem = t.elem, this.size = t.size || "medium", this.class = t.class ? " " + t.class : "", 
this.elemClass = t.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
n.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, n.prototype.stop = function() {
var t = this.elem.querySelector(".spinner");
t && (t.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, t.exports = n;
},
788: function(t, e, n) {
"use strict";
function r(t) {
t = t || {}, this.render(), this.setHasClose(void 0 === t.hasClose || t.hasClose), 
this.onClick = this.onClick.bind(this), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), 
this.elem.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onDocumentKeyDown);
}
var o = n(797), i = n(796).lang;
o.requirePhrase("site", n(933)("./" + i + ".yml")), r.prototype.setHasClose = function(t) {
this._hasClose = t, this._hasClose ? this.elem.classList.add("modal__has-close") : this.elem.classList.remove("modal__has-close");
}, r.prototype.render = function() {
document.body.insertAdjacentHTML("beforeEnd", '<div class="modal"><div class="modal__dialog"><button class="close-button modal__close" title="' + o("site.close") + '"></button><div class="modal__content"></div></div></div>'), 
document.body.classList.add("paranja-open"), this.elem = document.body.lastChild, 
this.contentElem = this.elem.querySelector(".modal__content");
}, r.prototype.onClick = function(t) {
t.target.classList.contains("modal__close") && (this.remove(), t.preventDefault());
}, r.prototype.onDocumentKeyDown = function(t) {
27 == t.keyCode && (t.preventDefault(), this.remove());
}, r.prototype.showOverlay = function() {
this.contentElem.classList.add("modal-overlay_light");
}, r.prototype.hideOverlay = function() {
this.contentElem.classList.remove("modal-overlay_light");
}, r.prototype.setContent = function(t) {
"string" == typeof t ? this.contentElem.innerHTML = t : (this.contentElem.innerHTML = "", 
this.contentElem.appendChild(t));
var e = this.contentElem.querySelector("[data-modal-autofocus],[autofocus]");
e && e.focus();
}, r.prototype.remove = function() {
document.body.classList.remove("paranja-open"), document.body.removeChild(this.elem), 
document.removeEventListener("keydown", this.onDocumentKeyDown), this.elem.dispatchEvent(new CustomEvent("modal-remove"));
}, t.exports = r;
},
796: function(t, e, n) {
"use strict";
t.exports = {
lang: "ru"
};
},
797: function(t, e, n) {
"use strict";
function r() {
for (var t = [ c ], e = 0; e < arguments.length; e++) t.push(arguments[e]);
return i.t.apply(i, t);
}
var o = n(798), i = new o("en"), c = n(796).lang, a = {};
r.i18n = i, r.requirePhrase = function(t, e) {
a[t] && a[t].indexOf(e) != -1 || (a[t] || (a[t] = []), a[t].push(e), i.addPhrase(c, t, e));
}, t.exports = r;
},
798: function(t, e, n) {
"use strict";
t.exports = n(799);
},
799: function(t, e, n) {
"use strict";
function r(t) {
return Object.prototype.toString.call(t);
}
function o(t) {
return "[object String]" === r(t);
}
function i(t) {
return !isNaN(t) && isFinite(t);
}
function c(t) {
return t === !0 || t === !1;
}
function a(t) {
return "[object Function]" === r(t);
}
function s(t) {
return "[object Object]" === r(t);
}
function u(t, e, n) {
if (null !== t) if (w && t.forEach === w) t.forEach(e, n); else if (t.length === +t.length) for (var r = 0, o = t.length; r < o; r += 1) e.call(n, t[r], r, t); else for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(n, t[i], i, t);
}
function l(t) {
var e = 1, n = arguments, r = n.length, o = (t + "").replace(E, function(t) {
if ("%%" === t) return "%";
if (e >= r) return t;
switch (t) {
case "%s":
return n[e++] + "";

case "%d":
return +n[e++];

case "%j":
return JSON.stringify(n[e++]);

default:
return t;
}
});
return o;
}
function f(t) {
var e = {};
return u(t || {}, function(t, n) {
return t && "object" === (void 0 === t ? "undefined" : y(t)) ? void u(f(t), function(t, r) {
e[n + "." + r] = t;
}) : void (e[n] = t);
}), e;
}
function d(t, e) {
return t + x + e;
}
function p(t, e, n) {
var r = d(e, n), o = t._storage;
if (o.hasOwnProperty(r)) return r;
if (e === t._defaultLocale) return null;
var i = t._fallbacks_cache;
if (i.hasOwnProperty(r)) return i[r];
for (var c, a = t._fallbacks[e] || [ t._defaultLocale ], s = 0, u = a.length; s < u; s++) if (c = d(a[s], n), 
o.hasOwnProperty(c)) return i[r] = c, i[r];
return i[r] = null, null;
}
function h(t, e, n) {
var r = b.indexOf(t, e);
return r === -1 ? l('[pluralizer for "%s" locale not found]', t) : void 0 === n[r] ? l('[plural form %d ("%s") not found in translation]', r, b.forms(t)[r]) : n[r];
}
function m(t) {
return this instanceof m ? (this._defaultLocale = t ? t + "" : k, this._fallbacks = {}, 
this._fallbacks_cache = {}, this._storage = {}, void (this._plurals_cache = {})) : new m(t);
}
function v(t, e, n) {
var r, o, i, c, a, s;
return F.test(e) ? (r = g.parse(e), 1 === r.length && "literal" === r[0].type ? r[0].text : (t._plurals_cache[n] || (t._plurals_cache[n] = new m(n)), 
s = t._plurals_cache[n], o = [], o.push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
o.push("params = flatten(params);"), u(r, function(t) {
if ("literal" === t.type) return void o.push(l("str += %j;", t.text));
if ("variable" === t.type) return i = t.anchor, void o.push(l('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', i, i, i));
if ("plural" !== t.type) throw Error("Unknown node type");
i = t.anchor, c = {}, u(t.strict, function(e, r) {
var o = g.parse(e);
return 1 === o.length && "literal" === o[0].type ? (c[r] = !1, void (t.strict[r] = o[0].text)) : (c[r] = !0, 
void (s.hasPhrase(n, e, !0) || s.addPhrase(n, e, e)));
}), a = {}, u(t.forms, function(e, r) {
var o, i = g.parse(e);
return 1 === i.length && "literal" === i[0].type ? (o = i[0].text, t.forms[r] = o, 
void (a[o] = !1)) : (a[e] = !0, void (s.hasPhrase(n, e, !0) || s.addPhrase(n, e, e)));
}), o.push(l("loc = %j;", n)), o.push(l("loc_plzr = %j;", n.split(/[-_]/)[0])), 
o.push(l("anchor = params[%j];", i)), o.push(l("cache = this._plurals_cache[loc];")), 
o.push(l("strict = %j;", t.strict)), o.push(l("strict_exec = %j;", c)), o.push(l("forms = %j;", t.forms)), 
o.push(l("forms_exec = %j;", a)), o.push("if (+(anchor) != anchor) {"), o.push(l('  str += "[invalid plurals amount: %s(" + anchor + ")]";', i)), 
o.push("} else {"), o.push("  if (strict[anchor] !== undefined) {"), o.push("    plrl = strict[anchor];"), 
o.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), o.push("  } else {"), 
o.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), o.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
o.push("  }"), o.push("}");
}), o.push("return str;"), Function("params", "flatten", "pluralizer", o.join("\n")))) : e;
}
var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, g = n(800), b = n(801), _ = Array.isArray || function(t) {
return "[object Array]" === r(t);
}, w = Array.prototype.forEach, E = /%[sdj%]/g, k = "en", x = "#@$";
m.prototype.addPhrase = function(t, e, n, r) {
var a, l = this;
if (c(r)) a = r ? 1 / 0 : 0; else if (i(r)) {
if (a = Math.floor(r), a < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else a = 1 / 0;
if (s(n) && a > 0) return u(n, function(n, r) {
l.addPhrase(t, (e ? e + "." : "") + r, n, a - 1);
}), this;
if (o(n)) this._storage[d(t, e)] = {
translation: n,
locale: t,
raw: !1
}; else {
if (!(_(n) || i(n) || c(n) || 0 === a && s(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[d(t, e)] = {
translation: n,
locale: t,
raw: !0
};
}
return l._fallbacks_cache = {}, this;
}, m.prototype.setFallback = function(t, e) {
var n = this._defaultLocale;
if (n === t) throw Error("Default locale can't have fallbacks");
var r = _(e) ? e.slice() : [ e ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[t] = r, this._fallbacks_cache = {}, 
this;
};
var F = /#\{|\(\(|\\\\/;
m.prototype.translate = function(t, e, n) {
var r, c = p(this, t, e);
return c ? (r = this._storage[c], r.raw ? r.translation : (r.hasOwnProperty("compiled") || (r.compiled = v(this, r.translation, r.locale)), 
a(r.compiled) ? ((i(n) || o(n)) && (n = {
count: n,
value: n
}), r.compiled.call(this, n, f, h)) : r.compiled)) : t + ": No translation for [" + e + "]";
}, m.prototype.hasPhrase = function(t, e, n) {
return n ? this._storage.hasOwnProperty(d(t, e)) : !!p(this, t, e);
}, m.prototype.getLocale = function(t, e, n) {
if (n) return this._storage.hasOwnProperty(d(t, e)) ? t : null;
var r = p(this, t, e);
return r ? r.split(x, 2)[0] : null;
}, m.prototype.t = m.prototype.translate, m.prototype.stringify = function(t) {
var e = this, n = {};
u(this._storage, function(t, e) {
n[e.split(x)[1]] = !0;
});
var r = {};
u(n, function(n, o) {
var i = p(e, t, o);
if (i) {
var c = e._storage[i].locale;
r[c] || (r[c] = {}), r[c][o] = e._storage[i].translation;
}
});
var o = {
fallback: {},
locales: r
}, i = (e._fallbacks[t] || []).slice(0, -1);
return i.length && (o.fallback[t] = i), JSON.stringify(o);
}, m.prototype.load = function(t) {
var e = this;
return o(t) && (t = JSON.parse(t)), u(t.locales, function(t, n) {
u(t, function(t, r) {
e.addPhrase(n, r, t, 0);
});
}), u(t.fallback, function(t, n) {
e.setFallback(n, t);
}), this;
}, t.exports = m;
},
800: function(t, e) {
"use strict";
t.exports = function() {
function t(t, e) {
function n() {
this.constructor = t;
}
n.prototype = e.prototype, t.prototype = new n();
}
function e(t, e, n, r, o, i) {
this.message = t, this.expected = e, this.found = n, this.offset = r, this.line = o, 
this.column = i, this.name = "SyntaxError";
}
function n(t) {
function n() {
return t.substring(yt, vt);
}
function r(e) {
function n(e, n, r) {
var o, i;
for (o = n; o < r; o++) i = t.charAt(o), "\n" === i ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === i || "\u2028" === i || "\u2029" === i ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}
return gt !== e && (gt > e && (gt = 0, bt = {
line: 1,
column: 1,
seenCR: !1
}), n(bt, gt, e), gt = e), bt;
}
function o(t) {
vt < _t || (vt > _t && (_t = vt, wt = []), wt.push(t));
}
function i(n, o, i) {
function c(t) {
var e = 1;
for (t.sort(function(t, e) {
return t.description < e.description ? -1 : t.description > e.description ? 1 : 0;
}); e < t.length; ) t[e - 1] === t[e] ? t.splice(e, 1) : e++;
}
function a(t, e) {
function n(t) {
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
}
var r, o, i, c = Array(t.length);
for (i = 0; i < t.length; i++) c[i] = t[i].description;
return r = t.length > 1 ? c.slice(0, -1).join(", ") + " or " + c[t.length - 1] : c[0], 
o = e ? '"' + n(e) + '"' : "end of input", "Expected " + r + " but " + o + " found.";
}
var s = r(i), u = i < t.length ? t.charAt(i) : null;
return null !== o && c(o), new e(null !== n ? n : a(o, u), o, u, i, s.line, s.column);
}
function c() {
var t, e;
for (t = [], e = m(), e === w && (e = a(), e === w && (e = d())); e !== w; ) t.push(e), 
e = m(), e === w && (e = a(), e === w && (e = d()));
return t;
}
function a() {
var e, n, r, i, c;
return e = vt, t.substr(vt, 2) === F ? (n = F, vt += 2) : (n = w, 0 === Et && o(C)), 
n !== w ? (r = s(), r !== w ? (t.substr(vt, 2) === S ? (i = S, vt += 2) : (i = w, 
0 === Et && o(L)), i !== w ? (c = f(), c === w && (c = A), c !== w ? (yt = e, n = O(r, c), 
e = n) : (vt = e, e = x)) : (vt = e, e = x)) : (vt = e, e = x)) : (vt = e, e = x), 
e;
}
function s() {
var e, n, r, i;
return e = vt, n = u(), n !== w ? (124 === t.charCodeAt(vt) ? (r = j, vt++) : (r = w, 
0 === Et && o(T)), r !== w ? (i = s(), i !== w ? (yt = e, n = P(n, i), e = n) : (vt = e, 
e = x)) : (vt = e, e = x)) : (vt = e, e = x), e === w && (e = vt, n = u(), n !== w && (yt = e, 
n = q(n)), e = n), e;
}
function u() {
var e, n, r, i, c, a;
if (e = vt, 61 === t.charCodeAt(vt) ? (n = D, vt++) : (n = w, 0 === Et && o(N)), 
n !== w) {
if (r = [], z.test(t.charAt(vt)) ? (i = t.charAt(vt), vt++) : (i = w, 0 === Et && o(M)), 
i !== w) for (;i !== w; ) r.push(i), z.test(t.charAt(vt)) ? (i = t.charAt(vt), vt++) : (i = w, 
0 === Et && o(M)); else r = x;
if (r !== w) if (32 === t.charCodeAt(vt) ? (i = H, vt++) : (i = w, 0 === Et && o(R)), 
i === w && (i = A), i !== w) {
if (c = [], a = l(), a !== w) for (;a !== w; ) c.push(a), a = l(); else c = x;
c !== w ? (yt = e, n = W(r, c), e = n) : (vt = e, e = x);
} else vt = e, e = x; else vt = e, e = x;
} else vt = e, e = x;
if (e === w) {
if (e = vt, n = [], r = l(), r !== w) for (;r !== w; ) n.push(r), r = l(); else n = x;
n !== w && (yt = e, n = I()), e = n;
}
return e;
}
function l() {
var e, n, r;
return e = vt, 92 === t.charCodeAt(vt) ? (n = U, vt++) : (n = w, 0 === Et && o(K)), 
n !== w ? (B.test(t.charAt(vt)) ? (r = t.charAt(vt), vt++) : (r = w, 0 === Et && o($)), 
r !== w ? (yt = e, n = J(r), e = n) : (vt = e, e = x)) : (vt = e, e = x), e === w && (e = vt, 
n = vt, Et++, 124 === t.charCodeAt(vt) ? (r = j, vt++) : (r = w, 0 === Et && o(T)), 
r === w && (t.substr(vt, 2) === S ? (r = S, vt += 2) : (r = w, 0 === Et && o(L))), 
Et--, r === w ? n = Z : (vt = n, n = x), n !== w ? (t.length > vt ? (r = t.charAt(vt), 
vt++) : (r = w, 0 === Et && o(G)), r !== w ? (yt = e, n = X(), e = n) : (vt = e, 
e = x)) : (vt = e, e = x)), e;
}
function f() {
var e, n, r;
return e = vt, 58 === t.charCodeAt(vt) ? (n = Y, vt++) : (n = w, 0 === Et && o(Q)), 
n !== w ? (r = p(), r !== w ? (yt = e, n = V(r), e = n) : (vt = e, e = x)) : (vt = e, 
e = x), e;
}
function d() {
var e, n, r, i;
return e = vt, t.substr(vt, 2) === tt ? (n = tt, vt += 2) : (n = w, 0 === Et && o(et)), 
n !== w ? (r = p(), r !== w ? (125 === t.charCodeAt(vt) ? (i = nt, vt++) : (i = w, 
0 === Et && o(rt)), i !== w ? (yt = e, n = ot(r), e = n) : (vt = e, e = x)) : (vt = e, 
e = x)) : (vt = e, e = x), e;
}
function p() {
var e, n, r, i, c;
if (e = vt, n = h(), n !== w) if (46 === t.charCodeAt(vt) ? (r = it, vt++) : (r = w, 
0 === Et && o(ct)), r !== w) {
if (i = [], c = p(), c !== w) for (;c !== w; ) i.push(c), c = p(); else i = x;
i !== w ? (yt = e, n = at(), e = n) : (vt = e, e = x);
} else vt = e, e = x; else vt = e, e = x;
return e === w && (e = h()), e;
}
function h() {
var e, n, r, i;
if (e = vt, st.test(t.charAt(vt)) ? (n = t.charAt(vt), vt++) : (n = w, 0 === Et && o(ut)), 
n !== w) {
for (r = [], lt.test(t.charAt(vt)) ? (i = t.charAt(vt), vt++) : (i = w, 0 === Et && o(ft)); i !== w; ) r.push(i), 
lt.test(t.charAt(vt)) ? (i = t.charAt(vt), vt++) : (i = w, 0 === Et && o(ft));
r !== w ? (yt = e, n = X(), e = n) : (vt = e, e = x);
} else vt = e, e = x;
return e;
}
function m() {
var t, e, n, r, o;
if (t = vt, e = [], n = vt, r = vt, Et++, o = a(), o === w && (o = d()), Et--, o === w ? r = Z : (vt = r, 
r = x), r !== w ? (o = v(), o !== w ? (yt = n, r = dt(o), n = r) : (vt = n, n = x)) : (vt = n, 
n = x), n !== w) for (;n !== w; ) e.push(n), n = vt, r = vt, Et++, o = a(), o === w && (o = d()), 
Et--, o === w ? r = Z : (vt = r, r = x), r !== w ? (o = v(), o !== w ? (yt = n, 
r = dt(o), n = r) : (vt = n, n = x)) : (vt = n, n = x); else e = x;
return e !== w && (yt = t, e = pt(e)), t = e;
}
function v() {
var e, n, r;
return e = vt, 92 === t.charCodeAt(vt) ? (n = U, vt++) : (n = w, 0 === Et && o(K)), 
n !== w ? (ht.test(t.charAt(vt)) ? (r = t.charAt(vt), vt++) : (r = w, 0 === Et && o(mt)), 
r !== w ? (yt = e, n = J(r), e = n) : (vt = e, e = x)) : (vt = e, e = x), e === w && (t.length > vt ? (e = t.charAt(vt), 
vt++) : (e = w, 0 === Et && o(G))), e;
}
function y(t) {
for (var e = [], n = 0; n < t.length; n++) void 0 === t[n].strict && e.push(t[n].text);
return e;
}
function g(t) {
for (var e = {}, n = 0; n < t.length; n++) void 0 !== t[n].strict && (e[t[n].strict] = t[n].text);
return e;
}
var b, _ = arguments.length > 1 ? arguments[1] : {}, w = {}, E = {
start: c
}, k = c, x = w, F = "((", C = {
type: "literal",
value: "((",
description: '"(("'
}, S = "))", L = {
type: "literal",
value: "))",
description: '"))"'
}, A = null, O = function(t, e) {
return {
type: "plural",
forms: y(t),
strict: g(t),
anchor: e || "count"
};
}, j = "|", T = {
type: "literal",
value: "|",
description: '"|"'
}, P = function(t, e) {
return [ t ].concat(e);
}, q = function(t) {
return [ t ];
}, D = "=", N = {
type: "literal",
value: "=",
description: '"="'
}, z = /^[0-9]/, M = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, H = " ", R = {
type: "literal",
value: " ",
description: '" "'
}, W = function(t, e) {
return {
strict: t.join(""),
text: e.join("")
};
}, I = function() {
return {
text: n()
};
}, U = "\\", K = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, B = /^[\\|)(]/, $ = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, J = function(t) {
return t;
}, Z = void 0, G = {
type: "any",
description: "any character"
}, X = function() {
return n();
}, Y = ":", Q = {
type: "literal",
value: ":",
description: '":"'
}, V = function(t) {
return t;
}, tt = "#{", et = {
type: "literal",
value: "#{",
description: '"#{"'
}, nt = "}", rt = {
type: "literal",
value: "}",
description: '"}"'
}, ot = function(t) {
return {
type: "variable",
anchor: t
};
}, it = ".", ct = {
type: "literal",
value: ".",
description: '"."'
}, at = function() {
return n();
}, st = /^[a-zA-Z_$]/, ut = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, lt = /^[a-zA-Z0-9_$]/, ft = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, dt = function(t) {
return t;
}, pt = function(t) {
return {
type: "literal",
text: t.join("")
};
}, ht = /^[\\#()|]/, mt = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, vt = 0, yt = 0, gt = 0, bt = {
line: 1,
column: 1,
seenCR: !1
}, _t = 0, wt = [], Et = 0;
if ("startRule" in _) {
if (!(_.startRule in E)) throw Error("Can't start parsing from rule \"" + _.startRule + '".');
k = E[_.startRule];
}
if (b = k(), b !== w && vt === t.length) return b;
throw b !== w && vt < t.length && o({
type: "end",
description: "end of input"
}), i(null, wt, _t);
}
return t(e, Error), {
SyntaxError: e,
parse: n
};
}();
},
801: function(t, e) {
"use strict";
function n(t) {
var e;
return p[t] ? t : (e = t.toLowerCase().replace("_", "-"), p[e] ? e : (e = e.split("-")[0], 
p[e] ? e : null));
}
function r(t) {
var e = n(t);
return p[e] ? p[e].c : null;
}
function o(t, e) {
var r = n(t);
if (!r) return -1;
if (!p[r].cFn) return 0;
var o = e + "", i = o.indexOf(".") < 0 ? "" : o.split(".")[1], c = i.length, a = +e, s = +o.split(".")[0], u = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return p[r].cFn(a, s, c, +i, u);
}
function i(t, e) {
var r = n(t);
return r ? p[r].c[o(r, e)] : null;
}
function c(t) {
var e = n(t);
return p[e] ? p[e].o : null;
}
function a(t, e) {
var r = n(t);
if (!r) return -1;
if (!p[r].oFn) return 0;
var o = e + "", i = o.indexOf(".") < 0 ? "" : o.split(".")[1], c = i.length, a = +e, s = +o.split(".")[0], u = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return p[r].oFn(a, s, c, +i, u);
}
function s(t, e) {
var r = n(t);
return p[r] ? p[r].o[a(r, e)] : null;
}
function u(t) {
return h[t];
}
function l(t, e) {
var n;
for (e.c = e.c ? e.c.map(u) : [ "other" ], e.o = e.o ? e.o.map(u) : [ "other" ], 
n = 0; n < t.length; n++) p[t[n]] = e;
}
function f(t, e, n) {
return t <= n && n <= e && n % 1 === 0;
}
function d(t, e) {
return t.indexOf(e) >= 0;
}
var p = {};
t.exports = i, t.exports.indexOf = o, t.exports.forms = r, t.exports.ordinal = s, 
t.exports.ordinal.indexOf = a, t.exports.ordinal.forms = c;
var h = [ "zero", "one", "two", "few", "many", "other" ];
l([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(t) {
return f(0, 1, t) ? 0 : 1;
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
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : f(3, 10, e) ? 3 : f(11, 99, e) ? 4 : 5;
}
}), l([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return d([ 1, 5, 7, 8, 9, 10 ], t) ? 0 : d([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
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
var n = e % 10, r = e % 100, o = e % 1e3;
return d([ 1, 2, 5, 7, 8 ], n) || d([ 20, 50, 70, 80 ], r) ? 0 : d([ 3, 4 ], n) || d([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === e || 6 === n || d([ 40, 60, 90 ], r) ? 2 : 3;
}
}), l([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : f(2, 4, e) && !f(12, 14, n) ? 1 : 0 === e || f(5, 9, e) || f(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return d([ 2, 3 ], e) && !d([ 12, 13 ], n) ? 0 : 1;
}
}), l([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
l([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100, r = t % 1e6;
return 1 !== e || d([ 11, 71, 91 ], n) ? 2 !== e || d([ 12, 72, 92 ], n) ? !f(3, 4, e) && 9 !== e || f(10, 19, n) || f(70, 79, n) || f(90, 99, n) ? 0 !== t && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), l([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n, r) {
var o = e % 10, i = e % 100, c = r % 10, a = r % 100;
return 0 === n && 1 === o && 11 !== i || 1 === c && 11 !== a ? 0 : 0 === n && f(2, 4, o) && !f(12, 14, i) || f(2, 4, c) && !f(12, 14, a) ? 1 : 2;
}
}), l([ "ca" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return d([ 1, 3 ], t) ? 0 : 2 === t ? 1 : 4 === t ? 2 : 3;
}
}), l([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : f(2, 4, e) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), l([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : 3 === t ? 3 : 6 === t ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(t) {
return d([ 0, 7, 8, 9 ], t) ? 0 : 1 === t ? 1 : 2 === t ? 2 : d([ 3, 4 ], t) ? 3 : d([ 5, 6 ], t) ? 4 : 5;
}
}), l([ "da" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, o) {
return 1 === t || 0 !== o && d([ 0, 1 ], e) ? 0 : 1;
}
}), l([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n, r) {
var o = e % 100, i = r % 100;
return 0 === n && 1 === o || 1 === i ? 0 : 0 === n && 2 === o || 2 === i ? 1 : 0 === n && f(3, 4, o) || f(3, 4, i) ? 2 : 3;
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
return d([ 0, 1 ], e) ? 0 : 1;
}
}), l([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
var o = e % 10, i = r % 10;
return 0 === n && d([ 1, 2, 3 ], e) || 0 === n && !d([ 4, 6, 9 ], o) || 0 !== n && !d([ 4, 6, 9 ], i) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return d([ 0, 1 ], e) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : f(3, 6, t) ? 2 : f(7, 10, t) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t) {
return d([ 1, 11 ], t) ? 0 : d([ 2, 12 ], t) ? 1 : f(3, 10, t) || f(13, 19, t) ? 2 : 3;
}
}), l([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : d([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), l([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && d([ 0, 20, 40, 60, 80 ], o) ? 2 : 0 !== n ? 3 : 4;
}
}), l([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(t, e, n) {
var r = t % 10;
return 1 === e && 0 === n ? 0 : 2 === e && 0 === n ? 1 : 0 !== n || f(0, 10, t) || 0 !== r ? 3 : 2;
}
}), l([ "hu" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return d([ 1, 5 ], t) ? 0 : 1;
}
}), l([ "is" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, o) {
var i = e % 10, c = e % 100;
return 0 === o && 1 === i && 11 !== c || 0 !== o ? 0 : 1;
}
}), l([ "it" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
return d([ 11, 8, 80, 800 ], t) ? 0 : 1;
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
return 1 === e ? 0 : 0 === e || f(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
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
return 0 === t ? 0 : d([ 0, 1 ], e) && 0 !== t ? 1 : 2;
}
}), l([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), l([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n, r) {
var o = t % 10, i = t % 100;
return 1 !== o || f(11, 19, i) ? f(2, 9, o) && !f(11, 19, i) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), l([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e, n, r) {
var o = t % 10, i = t % 100, c = r % 100, a = r % 10;
return 0 === o || f(11, 19, i) || 2 === n && f(11, 19, c) ? 0 : 1 === o && 11 !== i || 2 === n && 1 === a && 11 !== c || 2 !== n && 1 === a ? 1 : 2;
}
}), l([ "mk" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
var o = e % 10, i = r % 10;
return 0 === n && 1 === o || 1 === i ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : d([ 7, 8 ], n) && !d([ 17, 18 ], r) ? 2 : 3;
}
}), l([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n) {
var r = t % 100;
return 1 === e && 0 === n ? 0 : 0 !== n || 0 === t || 1 !== t && f(1, 19, r) ? 1 : 2;
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
return 1 === t ? 0 : d([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 3;
}
}), l([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 1 === t ? 0 : 0 === t || f(2, 10, e) ? 1 : f(11, 19, e) ? 2 : 3;
}
}), l([ "ne" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return f(1, 4, t) ? 0 : 1;
}
}), l([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 1 === e && 0 === n ? 0 : 0 === n && f(2, 4, r) && !f(12, 14, o) ? 1 : 0 === n && 1 !== e && f(0, 1, r) || 0 === n && f(5, 9, r) || 0 === n && f(12, 14, o) ? 2 : 3;
}
}), l([ "pt" ], {
c: [ 1, 5 ],
cFn: function(t) {
return f(0, 2, t) && 2 !== t ? 0 : 1;
}
}), l([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), l([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && f(2, 4, r) && !f(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && f(5, 9, r) || 0 === n && f(11, 14, o) ? 2 : 3;
}
}), l([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : f(2, 10, t) ? 1 : 2;
}
}), l([ "si" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return d([ 0, 1 ], t) || 0 === e && 1 === r ? 0 : 1;
}
}), l([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n) {
var r = e % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f(3, 4, r) || 0 !== n ? 2 : 3;
}
}), l([ "sq" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === t ? 0 : 4 === e && 14 !== n ? 1 : 2;
}
}), l([ "sv" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return d([ 1, 2 ], e) && !d([ 11, 12 ], n) ? 0 : 1;
}
}), l([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(t) {
return f(0, 1, t) || f(11, 99, t) ? 0 : 1;
}
}), l([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && f(2, 4, r) && !f(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && f(5, 9, r) || 0 === n && f(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return 3 === e && 13 !== n ? 0 : 1;
}
});
},
822: function(t, e, n) {
"use strict";
n(823), n(828);
},
823: function(t, e, n) {
"use strict";
function r(t) {
if (t.length) {
if (1 === t.length) return "string" == typeof t[0] ? document.createTextNode(t[0]) : t[0];
for (var e, n = document.createDocumentFragment(), r = t.length, o = -1; ++o < r; ) e = t[o], 
n.appendChild("string" == typeof e ? document.createTextNode(e) : e);
return n;
}
throw Error("DOM Exception 8");
}
var o = {
matches: Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
replace: function() {
this.parentNode && this.parentNode.replaceChild(r(arguments), this);
},
prepend: function() {
this.insertBefore(r(arguments), this.firstChild);
},
append: function() {
this.appendChild(r(arguments));
},
remove: function() {
var t = this.parentNode;
if (t) return t.removeChild(this);
},
before: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this);
},
after: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this.nextSibling);
},
closest: function(t) {
for (var e = this; e; ) {
if (e.matches && e.matches(t)) return e;
e = e.parentElement;
}
return null;
}
};
for (var i in o) Element.prototype[i] || (Element.prototype[i] = o[i]);
n(824), n(825), n(826), n(827);
},
824: function(t, e) {
"use strict";
try {
new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (t) {
window.CustomEvent = function(t, e) {
var n;
return e = e || {
bubbles: !1,
cancelable: !1,
detail: void 0
}, n = document.createEvent("CustomEvent"), n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), 
n;
}, CustomEvent.prototype = Object.create(window.Event.prototype);
}
},
825: function(t, e) {
"use strict";
if (!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
var n = {
enumerable: !0,
get: function() {
var t, e, n, r, o, i, c = this, a = this.attributes, s = a.length, u = function(t) {
return t.charAt(1).toUpperCase();
}, l = function() {
return this;
}, f = function(t, e) {
return void 0 !== e ? this.setAttribute(t, e) : this.removeAttribute(t);
};
try {
({}).__defineGetter__("test", function() {}), e = {};
} catch (t) {
e = document.createElement("div");
}
for (t = 0; t < s; t++) if (i = a[t], i && i.name && /^data-\w[\w\-]*$/.test(i.name)) {
n = i.value, r = i.name, o = r.substr(5).replace(/-./g, u);
try {
Object.defineProperty(e, o, {
enumerable: this.enumerable,
get: l.bind(n || ""),
set: f.bind(c, r)
});
} catch (t) {
e[o] = n;
}
}
return e;
}
};
try {
Object.defineProperty(Element.prototype, "dataset", n);
} catch (t) {
n.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", n);
}
}
},
826: function(t, e) {
"use strict";
void 0 === document.documentElement.hidden && (document.head.insertAdjacentHTML("beforeEnd", "<style> [hidden] { display: none } </style>"), 
Object.defineProperty(Element.prototype, "hidden", {
set: function(t) {
this.setAttribute("hidden", t);
},
get: function() {
return this.getAttribute("hidden");
}
}));
},
827: function(t, e) {
"use strict";
!function() {
var t = 0;
window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
var r = new Date().getTime(), o = Math.max(0, 16 - (r - t)), i = window.setTimeout(function() {
e(r + o);
}, o);
return t = r + o, i;
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
clearTimeout(t);
});
}();
},
828: function(t, e) {
"use strict";
var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};
String.prototype.startsWith || (String.prototype.startsWith = function(t) {
var e = arguments.length < 2 ? 0 : arguments[1];
return 0 === this.slice(e).indexOf(t);
}), String.prototype.endsWith || (String.prototype.endsWith = function(t) {
var e = arguments.length < 2 ? this.length : arguments[1], n = this.lastIndexOf(t);
return n !== -1 && n === e - t.length;
}), String.prototype.includes || (String.prototype.includes = function(t, e) {
if ("object" === (void 0 === t ? "undefined" : n(t)) && t instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
return this.indexOf(t, e) !== -1;
});
},
829: function(t, e) {
"use strict";
document.addEventListener("click", function(t) {
for (var e = t.target; e; ) {
if (!e.className.match) return;
if (e.className.match(/_unready\b/)) return void t.preventDefault();
e = e.parentElement;
}
}), document.addEventListener("submit", function(t) {
t.target.className.match && t.target.className.match(/_unready\b/) && t.preventDefault();
});
},
830: function(t, e, n) {
"use strict";
function r() {
var t = new o({
hasClose: !1,
mixClass: "login-modal"
}), e = new i();
t.setContent(e.elem), e.start(), n.e(2, function() {
t.remove();
var e = n(787);
new e();
});
}
var o = n(788), i = n(785);
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-login") && (t.preventDefault(), r());
}), t.exports = r;
},
831: function(t, e) {
"use strict";
function n() {
var t = document.createElement("form");
t.method = "POST", t.action = "/auth/logout?_csrf=" + document.cookie.match(/XSRF-TOKEN=([\w-]+)/)[1], 
document.body.appendChild(t), t.submit();
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-user-logout") && (t.preventDefault(), n());
}), t.exports = n;
},
832: function(t, e) {
"use strict";
t.exports = function() {
function t() {
n != e.offsetWidth ? document.body.classList.remove("no-icons") : setTimeout(t, 100);
}
var e = document.createElement("span");
document.body.appendChild(e), e.className = "font-test", e.style.fontFamily = "serif";
var n = e.offsetWidth;
e.style.fontFamily = "", t();
};
},
833: function(t, e, n) {
"use strict";
var r = n(834), o = n(837), i = [];
e.iframe = function(t) {
function e() {
r.async(t, function(e, n) {
n && (t.style.height = n + "px");
});
}
e();
}, e.codeTabs = function(t) {
function e() {
var e = t.closest(".code-tabs"), n = (t.closest("[data-code-tabs-content]"), e.querySelector("[data-code-tabs-switches]")), r = n.firstElementChild;
r.offsetWidth > n.offsetWidth ? e.classList.add("code-tabs_scroll") : e.classList.remove("code-tabs_scroll");
}
e(), i.push(e);
}, window.addEventListener("resize", o(function() {
i.forEach(function(t) {
t();
});
}, 200));
},
834: function(t, e, n) {
"use strict";
function r(t, e) {
function n(t, n) {
clearTimeout(r), e(t, n);
}
var r = setTimeout(function() {
e(Error("timeout"));
}, 500);
try {
(t.contentDocument || t.contentWindow.document).body;
} catch (e) {
o(t, n);
}
if (!t.offsetWidth) {
var c = t.cloneNode(!0);
return c.name = "", c.style.height = "50px", c.style.position = "absolute", c.style.display = "block", 
c.style.top = "10000px", c.onload = function() {
var e = i(this.contentDocument);
t.style.display = "block", c.remove(), n(null, e);
}, void document.body.appendChild(c);
}
t.style.display = "block", t.style.height = "1px";
var a = i(t.contentDocument);
t.style.height = "", n(null, a);
}
function o(t, e) {
throw Error("Not implemented yet");
}
var i = n(835);
r.async = function(t, e) {
setTimeout(function() {
r(t, e);
}, 0);
}, t.exports = r;
},
835: function(t, e, n) {
"use strict";
function r(t) {
t = t || document;
var e = Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight);
return t.documentElement.scrollWidth > t.documentElement.clientWidth && (o || (o = i()), 
e += o), e;
}
var o, i = n(836);
t.exports = r;
},
836: function(t, e) {
"use strict";
function n() {
var t = document.createElement("div");
if (t.style.cssText = "visibility:hidden;height:100px", !document.body) throw Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(t);
var e = t.offsetWidth;
t.style.overflow = "scroll";
var n = document.createElement("div");
n.style.width = "100%", t.appendChild(n);
var r = n.offsetWidth;
return t.parentNode.removeChild(t), e - r;
}
t.exports = n;
},
837: function(t, e) {
"use strict";
function n(t, e) {
function n() {
return i ? (r = arguments, void (o = this)) : (t.apply(this, arguments), i = !0, 
void setTimeout(function() {
i = !1, r && (n.apply(o, r), r = o = null);
}, e));
}
var r, o, i = !1;
return n;
}
t.exports = n;
},
838: function(t, e) {
"use strict";
function n() {}
function r() {
n("compactifySidebar");
var t = document.querySelector(".sidebar"), e = t.querySelector(".sidebar__content"), r = t.querySelector(".sidebar__inner"), o = t.classList.contains("sidebar_sticky-footer"), i = t.classList.contains("sidebar_compact");
if (i) {
var c;
c = o ? e.lastElementChild.getBoundingClientRect().top - e.lastElementChild.previousElementSibling.getBoundingClientRect().bottom : e.getBoundingClientRect().bottom - e.lastElementChild.getBoundingClientRect().bottom, 
n("decompact?", c), c > 150 && t.classList.remove("sidebar_compact");
} else n(r.scrollHeight, r.clientHeight), r.scrollHeight > r.clientHeight && (n("compact!"), 
t.classList.add("sidebar_compact"));
}
function o() {
var t = "ru" === document.documentElement.lang ? ".sitetoolbar" : ".sitetoolbar-light", e = document.querySelector(t);
if (!e) return void n("no sitetoolbar");
var o = document.querySelector(".sidebar");
o && (o.style.top = Math.max(e.getBoundingClientRect().bottom, 0) + "px", r()), 
i();
}
function i() {
var t = document.documentElement.clientWidth <= a, e = document.querySelector('meta[name="viewport"]').content;
e = e.replace(/user-scalable=\w+/, "user-scalable=" + (t ? "yes" : "no")), document.querySelector('meta[name="viewport"]').content = e;
}
var c, a = 840;
!function() {
function t() {
n("onWindowScrollAndResizeThrottled", c), c || (c = window.requestAnimationFrame(function() {
o(), c = null;
}));
}
window.addEventListener("resize-internal", t), window.addEventListener("scroll", t), 
window.addEventListener("resize", t), document.addEventListener("DOMContentLoaded", t);
}();
},
839: function(t, e) {
"use strict";
function n(t) {
if (t.target.closest) {
var e = t.target.closest("[data-dropdown-toggler]");
e && (e.nextElementSibling.style.display = e.nextElementSibling.offsetWidth ? "none" : "block");
}
}
function r(t) {
if (t.target.closest) {
var e = t.target.closest(s + "__search-toggle");
e && (c || o(), i());
}
}
function o() {
var t, e = document.querySelector(s), n = e.querySelector(s + "__search-input input"), r = e.querySelector(s + "__find");
r.onmousedown = function(e) {
t = !0;
}, n.onkeydown = function(t) {
27 == t.keyCode && (this.value = "", i());
}, n.onblur = function(e) {
!t && i();
}, c = !0;
}
function i() {
var t, e = document.querySelector(s);
e.classList.toggle(a + "_search_open");
var n = e.querySelector(s + "__search-input input");
e.classList.contains(a + "_search_open") ? (n.focus(), t = document.createElement("div"), 
t.className = "search-paranja", t.style.top = e.offsetHeight + "px", document.body.appendChild(t), 
document.body.classList.add("paranja-open")) : (t = document.querySelector(".search-paranja"), 
t.parentNode.removeChild(t), document.body.classList.remove("paranja-open"));
}
document.addEventListener("click", r), document.addEventListener("click", n);
var c = !1, a = "ru" === document.documentElement.lang ? "sitetoolbar" : "sitetoolbar-light", s = "." + a;
},
840: function(t, e) {
"use strict";
function n() {
var t = document.querySelector(".page-wrapper");
document.querySelector(".page").classList.toggle("page_sidebar_on"), t && t.classList.toggle("page-wrapper_sidebar_on"), 
document.querySelector(".page").classList.contains("page_sidebar_on") ? delete localStorage.noSidebar : localStorage.noSidebar = 1;
}
function r(t) {
t.target.hasAttribute("data-sidebar-toggle") && n();
}
function o(t) {
if (!(document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName) || t.keyCode != "S".charCodeAt(0))) {
if (~navigator.userAgent.toLowerCase().indexOf("mac os x")) {
if (!t.metaKey || !t.altKey) return;
} else if (!t.altKey) return;
n(), t.preventDefault();
}
}
document.addEventListener("click", r), document.addEventListener("keydown", o);
},
841: function(t, e, n) {
"use strict";
function r(t) {
if ((!document.activeElement || !~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) && t[c + "Key"]) {
var e = null;
switch (t.keyCode) {
case 37:
e = "prev";
break;

case 39:
e = "next";
break;

default:
return;
}
var n = document.querySelector('link[rel="' + e + '"]');
n && (document.location = n.href, t.preventDefault());
}
}
function o() {
var t, e = c[0].toUpperCase() + c.slice(1), n = document.querySelector('link[rel="next"]');
n && (t = document.querySelector('a[href="' + n.getAttribute("href") + '"] .page__nav-text-shortcut'), 
t.innerHTML = e + ' + <span class="page__nav-text-arr">→</span>');
var r = document.querySelector('link[rel="prev"]');
r && (t = document.querySelector('a[href="' + r.getAttribute("href") + '"] .page__nav-text-shortcut'), 
t.innerHTML = e + ' + <span class="page__nav-text-arr">←</span>');
}
var i = n(842), c = ~navigator.userAgent.toLowerCase().indexOf("mac os x") ? "ctrl" : "alt";
i(document, {
onRight: function() {
var t = document.querySelector('link[rel="prev"]');
t && (document.location = t.href);
},
onLeft: function() {
var t = document.querySelector('link[rel="next"]');
t && (document.location = t.href);
}
}), document.addEventListener("keydown", r), document.addEventListener("DOMContentLoaded", o);
},
842: function(t, e) {
"use strict";
function n(t, e) {
e = e || {};
var n, r, o, i, c, a = e.onRight || function() {}, s = e.onLeft || function() {}, u = e.tolerance || 50, l = e.threshold || 150, f = e.allowedTime || 500;
t.addEventListener("touchstart", function(t) {
var e = t.changedTouches[0];
o = 0, n = e.pageX, r = e.pageY, c = Date.now();
}), t.addEventListener("touchend", function(t) {
var e = t.changedTouches[0];
if (o = e.pageX - n, i = Date.now() - c, !(Math.abs(e.pageY - r) > u || i > f)) {
for (var d = !1, p = t.target; p != document.body; ) {
if (p.scrollWidth > p.clientWidth) {
d = !0;
break;
}
p = p.parentElement;
}
d || (o > l && a(t), o < -l && s(t));
}
});
}
t.exports = n;
},
843: function(t, e) {
"use strict";
var n;
document.addEventListener("mouseover", function(t) {
if (t.target.closest) {
var e = t.target.closest("[data-add-class-on-hover]") || t.target.closest(".button");
e && (n = e, e.classList.add("hover"));
}
}), document.addEventListener("touchend", function(t) {
setTimeout(function() {
n && (n.classList.remove("hover"), n = null);
}, 500);
}), document.addEventListener("mouseout", function(t) {
n && (n.contains(t.relatedTarget) || (n.classList.remove("hover"), n = null));
}), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) || document.documentElement.classList.add("working-hover");
},
844: function(t, e) {
"use strict";
var n = window.location.host;
document.addEventListener("click", function(t) {
function e() {
document.location = o;
}
if (1 == t.which && !t.defaultPrevented) {
var r = t.target.closest && t.target.closest("a");
if (r && (n != r.host || r.hasAttribute("data-track-outbound")) && ~[ "_self", "_top", "_parent" ].indexOf(r.target) && !(t.shiftKey || t.ctrlKey || t.altKey)) {
t.preventDefault();
var o = r.href;
window.ga("send", "event", "outbound", "click", o, {
hitCallback: e
}), setTimeout(e, 500);
}
}
});
},
933: function(t, e, n) {
function r(t) {
return n(o(t));
}
function o(t) {
return i[t] || function() {
throw Error("Cannot find module '" + t + "'.");
}();
}
var i = {
"./en.yml": 934,
"./ru.yml": 935
};
r.keys = function() {
return Object.keys(i);
}, r.resolve = o, t.exports = r, r.id = 933;
},
934: function(t, e) {
t.exports = {
toolbar: {
logo: {
normal: {
svg: "sitetoolbar__logo_en.svg",
width: 200
},
small: {
svg: "sitetoolbar__logo_small_en.svg",
width: 70
}
}
},
sorry_old_browser: "Sorry, IE<10 is not supported, please use a newer browser.",
contact_us: "contact us",
about_the_project: "about the project",
ilya_kantor: "Ilya Kantor",
comments: "Comments",
loading: "Loading...",
search: "Search",
share: "Share",
donate: "Donate",
read_before_commenting: "read this before commenting…",
tutorial_map: "Tutorial map",
comment: {
help: [ "You're welcome to post additions, questions to the articles and answers to them.", "To insert a few words of code, use the <code>&lt;code&gt;</code> tag, for several lines – use <code>&lt;pre&gt;</code>, for more than 10 lines – use a sandbox (<a href='http://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='http://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>…)", "If you can't understand something in the article – please elaborate." ]
},
edit_on_github: "Edit on Github",
hide_forever: "hide permanently",
Error: "Error",
close: "close",
Close: "Close"
};
},
935: function(t, e) {
t.exports = {
toolbar: {
logo: {
normal: {
svg: "sitetoolbar__logo_ru.svg",
width: 171
},
small: {
svg: "sitetoolbar__logo_small_ru.svg",
width: 80
}
}
},
sorry_old_browser: "Извините, IE<10 не поддерживается, пожалуйста используйте более новый браузер.",
contact_us: "связаться с нами",
about_the_project: "о проекте",
ilya_kantor: "Илья Кантор",
comments: "Комментарии",
loading: "Загружается...",
search: "Искать",
share: "Поделиться",
donate: "Поддержать",
read_before_commenting: "перед тем как писать…",
tutorial_map: "Карта учебника",
comment: {
help: [ "Приветствуются комментарии, содержащие дополнения и вопросы по статье, и ответы на них.", "Для одной строки кода используйте тег <code>&lt;code&gt;</code>, для нескольких строк кода&nbsp;&mdash; тег <code>&lt;pre&gt;</code>, если больше 10 строк&nbsp;&mdash; ссылку на песочницу (<a href='http://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='http://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>…)", "Если что-то непонятно в статье&nbsp;&mdash; пишите, что именно и с какого места." ]
},
edit_on_github: "Редактировать на Github",
hide_forever: "не показывать",
Error: "Ошибка",
close: "закрыть",
Close: "Закрыть"
};
}
});
//# sourceMappingURL=head.30bfc7bc47478d473464.js.map