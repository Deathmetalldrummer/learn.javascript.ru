var screencast = webpackJsonp_name_([ 27 ], {
0: function(e, t, n) {
"use strict";
function r() {
o(), i();
}
function i() {
var e = document.querySelector("[data-newsletter-subscribe-form]");
e && (e.onsubmit = function(t) {
t.preventDefault(), l.submitSubscribeForm(e);
});
}
function o() {
for (var e = document.querySelectorAll("li[data-mnemo]"), t = 0; t < e.length; t++) {
var n = e[t], r = n.getAttribute("data-mnemo");
n.insertAdjacentHTML("beforeEnd", '<div class="lessons-list__download"><div class="lessons-list__popup"><ul class="lessons-list__popup-list"><li class="lessons-list__popup-item"><a data-track-outbound href="/screencast/' + window.SCREENCAST_SLUG + "/mp4-low/" + r + '.mp4">Компактный размер</a></li><li class="lessons-list__popup-item"><a data-track-outbound href="/screencast/' + window.SCREENCAST_SLUG + "/mp4/" + r + '.mp4">Высокое качество</a></li></ul></div></div>');
}
for (var i = document.querySelectorAll("a[data-video-id]"), t = 0; t < i.length; t++) {
var o = i[t];
o.href = "//www.youtube.com/watch?v=" + o.getAttribute("data-video-id"), o.onclick = function(e) {
e.preventDefault();
var t = this.getAttribute("data-video-id");
window.ga("send", "event", window.SCREENCAST_SLUG, "open", t), a(t);
};
}
}
function a(e) {
for (var t = [ {
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
} ], n = 0; n < t.length && !(document.documentElement.clientHeight < t[n].height || document.documentElement.clientWidth < t[n].width); n++) ;
n--;
var r = t[n].width, i = t[n].height;
if (0 === n) window.location.href = "//www.youtube.com/watch?v=" + e; else {
var o = new c();
if (o.setContent('<div id="player"></div>'), o.elem.addEventListener("modal-remove", function() {
u && (u.destroy(), u = null);
}), window.YT) s(e, r, i); else {
var a = document.createElement("script");
a.src = "https://www.youtube.com/iframe_api", document.head.appendChild(a), window.onYouTubeIframeAPIReady = function() {
s(e, r, i), delete window.onYouTubeIframeAPIReady;
};
}
}
}
function s(e, t, n) {
u && u.destroy(), u = new window.YT.Player("player", {
height: n,
width: t,
videoId: e,
events: {
onReady: function() {
u.playVideo();
},
onStateChange: function(r) {
document.querySelectorAll("[data-video-id]");
if (1 == r.data && (u.videoId = e), 0 == r.data) for (var i = document.querySelectorAll("[data-video-id]"), o = 0; o < i.length; o++) {
var a = i[o];
if (a.getAttribute("data-video-id") == u.videoId) {
var c = i[o + 1] && i[o + 1].getAttribute("data-video-id");
c && s(c, t, n);
break;
}
}
}
}
});
}
n(777);
var u, c = n(788), l = (n(793), n(802));
n(922);
r();
},
116: function(e, t) {},
777: function(e, t) {},
790: function(e, t, n) {
"use strict";
function r(e) {
function t(e, t) {
var n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function n(e, n) {
var r = t("fail", n);
r.reason = e, i.dispatchEvent(r);
}
function r(e, n) {
var r = t("success", n);
r.result = e, i.dispatchEvent(r);
}
var i = new XMLHttpRequest(), a = e.method || "GET", s = e.body, u = e.url;
i.open(a, u, !e.sync), i.method = a;
var c = o();
c && !e.skipCsrf && i.setRequestHeader("X-XSRF-TOKEN", c), "[object Object]" == {}.toString.call(s) && (i.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
s = JSON.stringify(s)), e.noDocumentEvents || (i.addEventListener("loadstart", function(e) {
i.timeStart = Date.now();
var n = t("xhrstart", e);
document.dispatchEvent(n);
}), i.addEventListener("loadend", function(e) {
var n = t("xhrend", e);
document.dispatchEvent(n);
}), i.addEventListener("success", function(e) {
var n = t("xhrsuccess", e);
n.result = e.result, document.dispatchEvent(n);
}), i.addEventListener("fail", function(e) {
var n = t("xhrfail", e);
n.reason = e.reason, document.dispatchEvent(n);
})), e.raw || i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var l = e.normalStatuses || [ 200 ];
return i.addEventListener("error", function(e) {
n("Ошибка связи с сервером.", e);
}), i.addEventListener("timeout", function(e) {
n("Превышено максимально допустимое время ожидания ответа от сервера.", e);
}), i.addEventListener("abort", function(e) {
n("Запрос был прерван.", e);
}), i.addEventListener("load", function(t) {
if (!i.status) return void n("Не получен ответ от сервера.", t);
if (l.indexOf(i.status) == -1) return void n("Ошибка на стороне сервера (код " + i.status + "), попытайтесь позднее.", t);
var o = i.responseText, a = i.getResponseHeader("Content-Type");
if (a.match(/^application\/json/) || e.json) try {
o = JSON.parse(o);
} catch (e) {
return void n("Некорректный формат ответа от сервера.", e);
}
r(o, t);
}), setTimeout(function() {
i.send(s);
}, 0), i;
}
var i = n(782), o = n(791);
document.addEventListener("xhrfail", function(e) {
new i.Error(e.reason);
}), e.exports = r;
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
function r(e) {
return null != e && "" !== e;
}
function i(e) {
return (Array.isArray(e) ? e.map(i) : e && "object" === (void 0 === e ? "undefined" : s(e)) ? Object.keys(e).filter(function(t) {
return e[t];
}) : [ e ]).filter(r).join(" ");
}
function o(e) {
return u[e] || e;
}
function a(e) {
var t = (e + "").replace(c, o);
return t === "" + e ? e : t;
}
var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
t.merge = function e(t, n) {
if (1 === arguments.length) {
for (var i = t[0], o = 1; o < t.length; o++) i = e(i, t[o]);
return i;
}
var a = t.class, s = n.class;
(a || s) && (a = a || [], s = s || [], Array.isArray(a) || (a = [ a ]), Array.isArray(s) || (s = [ s ]), 
t.class = a.concat(s).filter(r));
for (var u in n) "class" != u && (t[u] = n[u]);
return t;
}, t.joinClasses = i, t.cls = function(e, n) {
for (var r = [], o = 0; o < e.length; o++) n && n[o] ? r.push(t.escape(i([ e[o] ]))) : r.push(i(e[o]));
var a = i(r);
return a.length ? ' class="' + a + '"' : "";
}, t.style = function(e) {
return e && "object" === (void 0 === e ? "undefined" : s(e)) ? Object.keys(e).map(function(t) {
return t + ":" + e[t];
}).join(";") : e;
}, t.attr = function(e, n, r, i) {
return "style" === e && (n = t.style(n)), "boolean" == typeof n || null == n ? n ? " " + (i ? e : e + '="' + e + '"') : "" : 0 == e.indexOf("data") && "string" != typeof n ? (JSON.stringify(n).indexOf("&") !== -1, 
n && "function" == typeof n.toISOString, " " + e + "='" + JSON.stringify(n).replace(/'/g, "&apos;") + "'") : r ? (n && "function" == typeof n.toISOString, 
" " + e + '="' + t.escape(n) + '"') : (n && "function" == typeof n.toISOString, 
" " + e + '="' + n + '"');
}, t.attrs = function(e, n) {
var r = [], o = Object.keys(e);
if (o.length) for (var a = 0; a < o.length; ++a) {
var s = o[a], u = e[s];
"class" == s ? (u = i(u)) && r.push(" " + s + '="' + u + '"') : r.push(t.attr(s, u, !1, n));
}
return r.join("");
};
var u = {
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;"
}, c = /[&<>"]/g;
t.escape = a, t.rethrow = function e(t, r, i, o) {
if (!(t instanceof Error)) throw t;
if (!("undefined" == typeof window && r || o)) throw t.message += " on line " + i, 
t;
try {
o = o || n(116).readFileSync(r, "utf8");
} catch (n) {
e(t, null, i);
}
var a = 3, s = o.split("\n"), u = Math.max(i - a, 0), c = Math.min(s.length, i + a), a = s.slice(u, c).map(function(e, t) {
var n = t + u + 1;
return (n == i ? "  > " : "    ") + n + "| " + e;
}).join("\n");
throw t.path = r, t.message = (r || "Jade") + ":" + i + "\n" + a + "\n\n" + t.message, 
t;
}, t.DebugItem = function(e, t) {
this.lineno = e, this.filename = t;
};
},
793: function(e, t, n) {
"use strict";
function r(e) {
e.bem = i, e.t = s, e.thumb = o, e.lang = a;
}
var i = n(794)(), o = n(795).thumb, a = n(796).lang, s = n(797);
e.exports = function(e, t) {
return t = t ? Object.create(t) : {}, r(t), e(t);
};
},
794: function(e, t, n) {
"use strict";
var r = n(792);
e.exports = function(e) {
function t(e, t, n, i, o) {
var a = o || "div";
switch (a) {
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
e.push("<" + a + r.attrs(r.merge([ n ]), !0) + ">"), t && t(), [ "area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr" ].indexOf(a) == -1 && e.push("</" + a + ">");
}
return e = e || {}, e.prefix = e.prefix || "", e.element = e.element || "__", e.modifier = e.modifier || "_", 
function(n, r, i, o) {
var a = this.block, s = this.attributes || {};
if (!s.class && i && !o) throw Error("Block without class: " + i);
if (s.class) {
var u = s.class;
u instanceof Array && (u = u.join(" ")), u = u.split(" ");
var c;
try {
c = u[0].match(RegExp("^(((?!" + e.element + "|" + e.modifier + ").)+)"))[1];
} catch (e) {
throw Error("Incorrect bem class: " + u[0]);
}
o ? u[0] = r[r.length - 1] + e.element + u[0] : r[r.length] = c;
var l = (o ? r[r.length - 1] + e.element : "") + c;
u.indexOf(l) === -1 && (u[u.length] = l);
for (var d = 0; d < u.length; d++) {
var f = u[d];
f.match(RegExp("^(?!" + e.element + ")" + e.modifier)) ? u[d] = l + f : f.match(RegExp("^" + e.element)) && (r[r.length - 2] ? u[d] = r[r.length - 2] + f : u[d] = r[r.length - 1] + f), 
u[d].match(RegExp("^" + l + "($|(?=" + e.element + "|" + e.modifier + "))")) && (u[d] = e.prefix + u[d]);
}
s.class = u.sort().join(" ");
}
t(n, a, s, r, i), o || r.pop();
};
};
},
795: function(e, t) {
"use strict";
t.thumb = function(e, t, n) {
if (!e) return e;
var r = window.devicePixelRatio;
t *= r, n *= r;
var i = t <= 160 && n <= 160 ? "t" : t <= 320 && n <= 320 ? "m" : t <= 640 && n <= 640 ? "i" : t <= 1024 && n <= 1024 ? "h" : "";
return e.slice(0, e.lastIndexOf(".")) + i + e.slice(e.lastIndexOf("."));
};
},
802: function(e, t, n) {
"use strict";
function r(e, t) {
if (e.elements.email.value) {
var n = e.elements.slug, r = [];
if (n.length) for (var i = 0; i < n.length; i++) {
var u = n[i];
u.checked && r.push(u.value);
} else r.push(n.value);
if (!r.length) return void new s.Error(c("newsletter.client.choose_newsletter"));
var l = {
email: e.elements.email.value,
slug: r
}, d = a({
method: "POST",
url: e.action,
body: l
}), f = e.querySelector('[type="submit"]'), m = new o({
elem: f,
size: "small",
elemClass: "button_loading"
});
m.start(), f.disabled = !0, d.addEventListener("loadend", function() {
m.stop(), f.disabled = !1;
});
var h = e.getAttribute("data-newsletter-subscribe-form");
d.addEventListener("success", function(n) {
200 == this.status ? (h && (window.metrika.reachGoal("NEWSLETTER-SUBSCRIBE", {
form: h
}), window.ga("send", "event", "newsletter", "subscribe", h)), new s.Success(n.result.message, "slow"), 
e.elements.email.value = "", t && t()) : (window.metrika.reachGoal("NEWSLETTER-SUBSCRIBE-FAIL", {
form: h
}), window.ga("send", "event", "newsletter", "subscribe-fail", h), new s.Error(n.result.message));
});
}
}
function i(e) {
e.addEventListener("click", function() {
return new u({
onSubmit: r
});
});
}
var o = n(785), a = n(790), s = n(782), u = n(928), c = n(797), l = n(796).lang;
c.requirePhrase("newsletter.client", n(930)("./" + l + ".yml")), t.submitSubscribeForm = r, 
t.initEnSubscribeButton = i;
},
922: function(e, t) {
"use strict";
e.exports = function(e) {
function t() {
t.wasCalled || (t.wasCalled = !0, e());
}
return setTimeout(t, 500), t;
};
},
928: function(e, t, n) {
"use strict";
function r(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function i(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}
function o(e, t) {
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
var a = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var r = t[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(e, r.key, r);
}
}
return function(t, n, r) {
return n && e(t.prototype, n), r && e(t, r), t;
};
}(), s = n(788), u = n(793), c = n(929), l = function(e) {
function t(e) {
r(this, t);
var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
n.options = e || {}, n.options.inModal = !0;
var o = document.createElement("div");
return o.innerHTML = u(c, n.options), n.setContent(o), n.elem.querySelector('[type="email"]').focus(), 
n.elem.querySelector("form").addEventListener("submit", n.onFormSubmit.bind(n)), 
n;
}
return o(t, e), a(t, [ {
key: "onFormSubmit",
value: function(e) {
e.preventDefault(), this.options.onSubmit(e.target, this.remove.bind(this));
}
} ]), t;
}(s);
e.exports = l;
},
929: function(e, t, n) {
var r = n(792);
e.exports = function(e) {
var t, n = [], i = {}, o = e || {};
return function(e, o) {
n.push(""), o || (o = []), i.b = t = function(t, r, i) {
this && this.block, this && this.attributes || {};
e.call(this, n, o, t, r, i);
}, i.e = t = function(e) {
var t = this && this.block, n = this && this.attributes || {};
i.b.call({
block: function() {
t && t();
},
attributes: r.merge([ n ])
}, e, !0);
}, i.b.call({
block: function() {
i.e.call({
block: function() {
n.push("Subscribe to major updates");
},
attributes: {
class: "header"
}
}, "h3"), i.e.call({
block: function() {
n.push("We work on adding new articles and tutorials. Subscribe to learn about major updates when they happen:");
},
attributes: {
class: "description"
}
}), i.e.call({
block: function() {
i.e.call({
attributes: {
type: "email",
name: "email",
placeholder: "Your email",
required: !0,
class: "input"
}
}, "input"), n.push('<input type="hidden" name="slug" value="javascript-info-updates">'), 
i.e.call({
block: function() {
i.e.call({
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
}, "form"), i.e.call({
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
}.call(this, "bem" in o ? o.bem : "undefined" != typeof bem ? bem : void 0, "bem_chain" in o ? o.bem_chain : "undefined" != typeof bem_chain ? bem_chain : void 0), 
n.join("");
};
},
930: function(e, t, n) {
function r(e) {
return n(i(e));
}
function i(e) {
return o[e] || function() {
throw Error("Cannot find module '" + e + "'.");
}();
}
var o = {
"./en.yml": 931,
"./ru.yml": 932
};
r.keys = function() {
return Object.keys(o);
}, r.resolve = i, e.exports = r, r.id = 930;
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
//# sourceMappingURL=screencast.30bfc7bc47478d473464.js.map