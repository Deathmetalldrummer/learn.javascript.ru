var quiz = function(e) {
function t(t) {
for (var n, i, a = t[0], o = t[1], s = 0, c = []; s < a.length; s++) i = a[s], r[i] && c.push(r[i][0]), 
r[i] = 0;
for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
for (l && l(t); c.length; ) c.shift()();
}
var n = {}, r = {
14: 0
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
var a = new Promise(function(t, i) {
n = r[e] = [ t, i ];
});
t.push(n[2] = a);
var o, s = document.getElementsByTagName("head")[0], l = document.createElement("script");
l.charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.src = function(e) {
return i.p + "" + ({
31: "authClient",
34: "vendors~authClient"
}[e] || e) + "-" + e + ".ce210dd933f17ce8be6f.js";
}(e), o = function(t) {
l.onerror = l.onload = null, clearTimeout(c);
var n = r[e];
if (0 !== n) {
if (n) {
var i = t && ("load" === t.type ? "missing" : t.type), a = t && t.target && t.target.src, o = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + a + ")");
o.type = i, o.request = a, n[1](o);
}
r[e] = void 0;
}
};
var c = setTimeout(function() {
o({
type: "timeout",
target: l
});
}, 12e4);
l.onerror = l.onload = o, s.appendChild(l);
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
var a = window.webpackJsonp_name_ = window.webpackJsonp_name_ || [], o = a.push.bind(a);
a.push = t, a = a.slice();
for (var s = 0; s < a.length; s++) t(a[s]);
var l = o;
return i(i.s = 365);
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
function a(e) {
return r.hasPhrase(o, e) || i("No such phrase", e), r.t(o, ...arguments);
}
e.exports = a;
const o = n(0).lang;
"en" !== o && r.setFallback(o, "en"), r.add = ((...e) => r.addPhrase(o, ...e)), 
a.i18n = r;
},
10: function(e, t, n) {
"use strict";
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
11: function(e, t, n) {
var r = {
"./ru.yml": 12
};
function i(e) {
var t = a(e);
return n(t);
}
function a(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = a, e.exports = i, i.id = 11;
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
var t = a(e);
return n(t);
}
function a(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = a, e.exports = i, i.id = 13;
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
class a extends i {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
t.Error = a, t.Error = a;
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
365: function(e, t, n) {
"use strict";
let r = n(9), i = n(4), a = n(75), o = n(2);
!function() {
let e = document.querySelector("[data-quiz-question-form]");
e && function(e) {
function t() {
let t = e.elements.type.value, n = e.elements.answer, r = [];
for (let e = 0; e < n.length; e++) n[e].checked && r.push(+n[e].value);
return "single" == t && (r = r[0]), r;
}
e.onchange = function() {
let n = t();
switch (e.elements.type.value) {
case "single":
e.querySelector('[type="submit"]').disabled = void 0 === n;
break;

case "multi":
e.querySelector('[type="submit"]').disabled = !n.length;
break;

default:
throw new Error("unknown type");
}
}, e.onsubmit = function(n) {
n.preventDefault();
let o = t(), s = i({
method: "POST",
url: e.action,
body: {
answer: o
}
}), l = e.querySelector('[type="submit"]'), c = new r({
elem: l,
size: "small",
elemClass: "button_loading"
});
function u() {
c.stop(), l.disabled = !1;
}
c.start(), l.disabled = !0, s.addEventListener("fail", u), s.addEventListener("success", t => {
t.result.reload ? window.location.reload() : t.result.html ? (u(), document.querySelector(".quiz-timeline .quiz-timeline__number_current").classList.remove("quiz-timeline__number_current"), 
document.querySelectorAll(".quiz-timeline span")[t.result.questionNumber].classList.add("quiz-timeline__number_current"), 
document.querySelector(".quiz-tablet-timeline__num").innerHTML = "&nbsp;" + (t.result.questionNumber + 1) + "&nbsp;", 
e.innerHTML = t.result.html, a.highlight(e)) : u();
});
};
}(e);
let t = document.querySelector("[data-quiz-result-save-form]");
t && function(e) {
function t() {
let t = i({
method: "POST",
url: e.action
}), n = e.querySelector('[type="submit"]'), a = new r({
elem: n,
size: "small",
elemClass: "button_loading"
});
a.start(), n.disabled = !0, t.addEventListener("loadend", function() {
a.stop(), n.disabled = !1;
}), t.addEventListener("success", e => {
new o.Success(`Результат сохранён в профиле! <a href='/profile/${window.currentUser.profileName}/quiz'>Перейти в профиль</a>.`, "slow");
});
}
e.onsubmit = function(i) {
i.preventDefault(), window.currentUser ? t() : function() {
let i = e.querySelector('[type="submit"]'), a = new r({
elem: i,
size: "small",
class: "submit-button__spinner",
elemClass: "submit-button_progress"
});
a.start(), Promise.all([ n.e(34), n.e(31) ]).then(function() {
a.stop();
let e = n(47);
new e({
callback: t
});
}.bind(null, n)).catch(n.oe);
}();
};
}(t), a.init();
}();
},
4: function(e, t, n) {
"use strict";
let r = n(2), i = n(10);
const a = n(0).lang, o = n(1);
o.i18n.add("", n(11)("./" + a + ".yml")), o.i18n.add("error.network", n(13)("./" + a + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest(), n = e.method || "GET", r = e.body, a = e.url;
t.open(n, a, !e.sync), t.method = n;
let s = i();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), "[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
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
u(o("error.network.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
u(o("error.network.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
u(o("error.network.request_aborted"), e);
}), t.addEventListener("load", n => {
if (!t.status) return void u(o("error.network.no_response"), n);
if (-1 == l.indexOf(t.status)) return void u(o("error.network.server_error", {
status: t.status
}), n);
let r = t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(o("error.network.invalid_format"), n);
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
45: function(e, t, n) {
"use strict";
e.exports = function(e, t) {
let n, r, i = !1;
return function a() {
if (i) return n = arguments, void (r = this);
e.apply(this, arguments), i = !0, setTimeout(function() {
i = !1, n && (a.apply(r, n), n = r = null);
}, t);
};
};
},
49: function(e, t, n) {
"use strict";
e.exports = function(e) {
let t, n = 1 + e.split("\n").length, r = new Array(n);
return t = `<span class="line-numbers-rows">${r = r.join("<span></span>")}</span>`;
};
},
5: function(e, t, n) {
"use strict";
e.exports = n(6);
},
52: function(e, t, n) {
"use strict";
n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), Prism.hooks.add("wrap", function(e) {
"span" === e.tag && (e.tag = "code");
});
},
53: function(e, t, n) {
"use strict";
let r = n(54), i = n(45), a = [];
t.iframe = function(e) {
r.async(e, function(t, n) {
n && (e.style.height = n + "px");
});
}, t.codeTabs = function(e) {
function t() {
let t = e.closest(".code-tabs"), n = (e.closest("[data-code-tabs-content]"), t.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? t.classList.add("code-tabs_scroll") : t.classList.remove("code-tabs_scroll");
}
t(), a.push(t);
}, window.addEventListener("resize", i(function() {
a.forEach(function(e) {
e();
});
}, 200));
},
54: function(e, t, n) {
"use strict";
let r = n(55);
function i(e, t) {
let n = setTimeout(function() {
t(new Error("timeout"));
}, 500);
function i(e, r) {
clearTimeout(n), t(e, r);
}
try {
(e.contentDocument || e.contentWindow.document).body;
} catch (e) {
!function(e, t) {
throw new Error("Not implemented yet");
}();
}
if (!e.offsetWidth) {
let t = e.cloneNode(!0);
return t.name = "", t.style.height = "50px", t.style.position = "absolute", t.style.display = "block", 
t.style.top = "10000px", t.onload = function() {
let n = r(this.contentDocument);
e.style.display = "block", t.remove(), i(null, n);
}, void document.body.appendChild(t);
}
e.style.display = "block", e.style.height = "1px";
let a = r(e.contentDocument);
e.style.height = "", i(null, a);
}
i.async = function(e, t) {
setTimeout(function() {
i(e, t);
}, 0);
}, e.exports = i;
},
55: function(e, t, n) {
"use strict";
let r, i = n(56);
e.exports = function(e) {
e = e || document;
let t = Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight);
return e.documentElement.scrollWidth > e.documentElement.clientWidth && (r || (r = i()), 
t += r), t;
};
},
56: function(e, t, n) {
"use strict";
e.exports = function() {
let e = document.createElement("div");
if (e.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(e);
let t = e.offsetWidth;
e.style.overflow = "scroll";
let n = document.createElement("div");
n.style.width = "100%", e.appendChild(n);
let r = n.offsetWidth;
return e.parentNode.removeChild(e), t - r;
};
},
57: function(e, t) {
var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, r = function() {
var e = /\blang(?:uage)?-([\w-]+)\b/i, t = 0, r = n.Prism = {
manual: n.Prism && n.Prism.manual,
disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
util: {
encode: function(e) {
return e instanceof i ? new i(e.type, r.util.encode(e.content), e.alias) : "Array" === r.util.type(e) ? e.map(r.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
},
objId: function(e) {
return e.__id || Object.defineProperty(e, "__id", {
value: ++t
}), e.__id;
},
clone: function(e, t) {
var n = r.util.type(e);
switch (t = t || {}, n) {
case "Object":
if (t[r.util.objId(e)]) return t[r.util.objId(e)];
var i = {};
for (var a in t[r.util.objId(e)] = i, e) e.hasOwnProperty(a) && (i[a] = r.util.clone(e[a], t));
return i;

case "Array":
if (t[r.util.objId(e)]) return t[r.util.objId(e)];
i = [];
return t[r.util.objId(e)] = i, e.forEach(function(e, n) {
i[n] = r.util.clone(e, t);
}), i;
}
return e;
}
},
languages: {
extend: function(e, t) {
var n = r.util.clone(r.languages[e]);
for (var i in t) n[i] = t[i];
return n;
},
insertBefore: function(e, t, n, i) {
var a = (i = i || r.languages)[e];
if (2 == arguments.length) {
for (var o in n = arguments[1]) n.hasOwnProperty(o) && (a[o] = n[o]);
return a;
}
var s = {};
for (var l in a) if (a.hasOwnProperty(l)) {
if (l == t) for (var o in n) n.hasOwnProperty(o) && (s[o] = n[o]);
s[l] = a[l];
}
return r.languages.DFS(r.languages, function(t, n) {
n === i[e] && t != e && (this[t] = s);
}), i[e] = s;
},
DFS: function(e, t, n, i) {
for (var a in i = i || {}, e) e.hasOwnProperty(a) && (t.call(e, a, e[a], n || a), 
"Object" !== r.util.type(e[a]) || i[r.util.objId(e[a])] ? "Array" !== r.util.type(e[a]) || i[r.util.objId(e[a])] || (i[r.util.objId(e[a])] = !0, 
r.languages.DFS(e[a], t, a, i)) : (i[r.util.objId(e[a])] = !0, r.languages.DFS(e[a], t, null, i)));
}
},
plugins: {},
highlightAll: function(e, t) {
r.highlightAllUnder(document, e, t);
},
highlightAllUnder: function(e, t, n) {
var i = {
callback: n,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
r.hooks.run("before-highlightall", i);
for (var a, o = i.elements || e.querySelectorAll(i.selector), s = 0; a = o[s++]; ) r.highlightElement(a, !0 === t, i.callback);
},
highlightElement: function(t, i, a) {
for (var o, s, l = t; l && !e.test(l.className); ) l = l.parentNode;
l && (o = (l.className.match(e) || [ , "" ])[1].toLowerCase(), s = r.languages[o]), 
t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, 
t.parentNode && (l = t.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o));
var c = {
element: t,
language: o,
grammar: s,
code: t.textContent
};
if (r.hooks.run("before-sanity-check", c), !c.code || !c.grammar) return c.code && (r.hooks.run("before-highlight", c), 
c.element.textContent = c.code, r.hooks.run("after-highlight", c)), void r.hooks.run("complete", c);
if (r.hooks.run("before-highlight", c), i && n.Worker) {
var u = new Worker(r.filename);
u.onmessage = function(e) {
c.highlightedCode = e.data, r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, 
a && a.call(c.element), r.hooks.run("after-highlight", c), r.hooks.run("complete", c);
}, u.postMessage(JSON.stringify({
language: c.language,
code: c.code,
immediateClose: !0
}));
} else c.highlightedCode = r.highlight(c.code, c.grammar, c.language), r.hooks.run("before-insert", c), 
c.element.innerHTML = c.highlightedCode, a && a.call(t), r.hooks.run("after-highlight", c), 
r.hooks.run("complete", c);
},
highlight: function(e, t, n) {
var a = {
code: e,
grammar: t,
language: n
};
return r.hooks.run("before-tokenize", a), a.tokens = r.tokenize(a.code, a.grammar), 
r.hooks.run("after-tokenize", a), i.stringify(r.util.encode(a.tokens), a.language);
},
matchGrammar: function(e, t, n, i, a, o, s) {
var l = r.Token;
for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
if (c == s) return;
var u = n[c];
u = "Array" === r.util.type(u) ? u : [ u ];
for (var d = 0; d < u.length; ++d) {
var f = u[d], h = f.inside, p = !!f.lookbehind, m = !!f.greedy, g = 0, E = f.alias;
if (m && !f.pattern.global) {
var b = f.pattern.toString().match(/[imuy]*$/)[0];
f.pattern = RegExp(f.pattern.source, b + "g");
}
f = f.pattern || f;
for (var v = i, y = a; v < t.length; y += t[v].length, ++v) {
var T = t[v];
if (t.length > e.length) return;
if (!(T instanceof l)) {
if (m && v != t.length - 1) {
if (f.lastIndex = y, !(N = f.exec(e))) break;
for (var w = N.index + (p ? N[1].length : 0), A = N.index + N[0].length, S = v, O = y, _ = t.length; S < _ && (O < A || !t[S].type && !t[S - 1].greedy); ++S) w >= (O += t[S].length) && (++v, 
y = O);
if (t[v] instanceof l) continue;
L = S - v, T = e.slice(y, O), N.index -= y;
} else {
f.lastIndex = 0;
var N = f.exec(T), L = 1;
}
if (N) {
p && (g = N[1] ? N[1].length : 0);
A = (w = N.index + g) + (N = N[0].slice(g)).length;
var k = T.slice(0, w), I = T.slice(A), F = [ v, L ];
k && (++v, y += k.length, F.push(k));
var C = new l(c, h ? r.tokenize(N, h) : N, E, N, m);
if (F.push(C), I && F.push(I), Array.prototype.splice.apply(t, F), 1 != L && r.matchGrammar(e, t, n, v, y, !0, c), 
o) break;
} else if (o) break;
}
}
}
}
},
tokenize: function(e, t, n) {
var i = [ e ], a = t.rest;
if (a) {
for (var o in a) t[o] = a[o];
delete t.rest;
}
return r.matchGrammar(e, i, t, 0, 0, !1), i;
},
hooks: {
all: {},
add: function(e, t) {
var n = r.hooks.all;
n[e] = n[e] || [], n[e].push(t);
},
run: function(e, t) {
var n = r.hooks.all[e];
if (n && n.length) for (var i, a = 0; i = n[a++]; ) i(t);
}
}
}, i = r.Token = function(e, t, n, r, i) {
this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, 
this.greedy = !!i;
};
if (i.stringify = function(e, t, n) {
if ("string" == typeof e) return e;
if ("Array" === r.util.type(e)) return e.map(function(n) {
return i.stringify(n, t, e);
}).join("");
var a = {
type: e.type,
content: i.stringify(e.content, t, n),
tag: "span",
classes: [ "token", e.type ],
attributes: {},
language: t,
parent: n
};
if (e.alias) {
var o = "Array" === r.util.type(e.alias) ? e.alias : [ e.alias ];
Array.prototype.push.apply(a.classes, o);
}
r.hooks.run("wrap", a);
var s = Object.keys(a.attributes).map(function(e) {
return e + '="' + (a.attributes[e] || "").replace(/"/g, "&quot;") + '"';
}).join(" ");
return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + a.content + "</" + a.tag + ">";
}, !n.document) return n.addEventListener ? (r.disableWorkerMessageHandler || n.addEventListener("message", function(e) {
var t = JSON.parse(e.data), i = t.language, a = t.code, o = t.immediateClose;
n.postMessage(r.highlight(a, r.languages[i], i)), o && n.close();
}, !1), n.Prism) : n.Prism;
var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
return a && (r.filename = a.src, r.manual || a.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r.highlightAll))), 
n.Prism;
}();
void 0 !== e && e.exports && (e.exports = r), "undefined" != typeof global && (global.Prism = r);
},
58: function(e, t) {
Prism.languages.markup = {
comment: /<!--[\s\S]*?-->/,
prolog: /<\?[\s\S]+?\?>/,
doctype: /<!DOCTYPE[\s\S]+?>/i,
cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/i,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"attr-value": {
pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
inside: {
punctuation: [ /^=/, {
pattern: /(^|[^\\])["']/,
lookbehind: !0
} ]
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
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, 
Prism.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, 
Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
},
59: function(e, t) {
Prism.languages.css = {
comment: /\/\*[\s\S]*?\*\//,
atrule: {
pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
inside: {
rule: /@[\w-]+/
}
},
url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
selector: /[^{}\s][^{};]*?(?=\s*\{)/,
string: {
pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
important: /\B!important\b/i,
function: /[-a-z0-9]+(?=\()/i,
punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
style: {
pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
lookbehind: !0,
inside: Prism.languages.css,
alias: "language-css",
greedy: !0
}
}), Prism.languages.insertBefore("inside", "attr-value", {
"style-attr": {
pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
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
6: function(e, t, n) {
"use strict";
var r = n(7), i = n(8);
function a(e) {
return Object.prototype.toString.call(e);
}
function o(e) {
return "[object String]" === a(e);
}
function s(e) {
return !isNaN(e) && isFinite(e);
}
function l(e) {
return !0 === e || !1 === e;
}
function c(e) {
return "[object Object]" === a(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === a(e);
}, d = Array.prototype.forEach;
function f(e, t, n) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r += 1) t.call(n, e[r], r, e); else for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(n, e[a], a, e);
}
var h = /%[sdj%]/g;
function p(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(h, function(e) {
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
function g(e) {
var t = {};
return f(e || {}, function(e, n) {
e && "object" == typeof e ? f(g(e), function(e, r) {
t[n + "." + r] = e;
}) : t[n] = e;
}), t;
}
var E = "#@$";
function b(e, t) {
return e + E + t;
}
function v(e, t, n) {
var r = b(t, n), i = e._storage;
if (i.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var a = e._fallbacks_cache;
if (a.hasOwnProperty(r)) return a[r];
for (var o, s = e._fallbacks[t] || [ e._defaultLocale ], l = 0, c = s.length; l < c; l++) if (o = b(s[l], n), 
i.hasOwnProperty(o)) return a[r] = o, a[r];
return a[r] = null, null;
}
function y(e, t, n) {
var r = i.indexOf(e, t);
return -1 === r ? p('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? p('[plural form %d ("%s") not found in translation]', r, i.forms(e)[r]) : n[r];
}
function T(e) {
if (!(this instanceof T)) return new T(e);
this._defaultLocale = e ? String(e) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
T.prototype.addPhrase = function(e, t, n, r) {
var i, a = this;
if (l(r)) i = r ? 1 / 0 : 0; else if (s(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (c(n) && i > 0) return f(n, function(n, r) {
a.addPhrase(e, (t ? t + "." : "") + r, n, i - 1);
}), this;
if (o(n)) this._storage[b(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(u(n) || s(n) || l(n) || 0 === i && c(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[b(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return a._fallbacks_cache = {}, this;
}, T.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = u(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var w = /#\{|\(\(|\\\\/;
T.prototype.translate = function(e, t, n) {
var i, l = v(this, e, t);
return l ? (i = this._storage[l]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(e, t, n) {
var i, a, o, s, l, c;
return w.test(t) ? 1 === (i = r.parse(t)).length && "literal" === i[0].type ? i[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new T(n)), 
c = e._plurals_cache[n], (a = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
a.push("params = flatten(params);"), f(i, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return o = e.anchor, void a.push(p('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', o, o, o));
if ("plural" !== e.type) throw new Error("Unknown node type");
o = e.anchor, s = {}, f(e.strict, function(t, i) {
var a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return s[i] = !1, void (e.strict[i] = a[0].text);
s[i] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), l = {}, f(e.forms, function(t, i) {
var a, o = r.parse(t);
if (1 === o.length && "literal" === o[0].type) return a = o[0].text, e.forms[i] = a, 
void (l[a] = !1);
l[t] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), a.push(p("loc = %j;", n)), a.push(p("loc_plzr = %j;", n.split(/[-_]/)[0])), 
a.push(p("anchor = params[%j];", o)), a.push(p("cache = this._plurals_cache[loc];")), 
a.push(p("strict = %j;", e.strict)), a.push(p("strict_exec = %j;", s)), a.push(p("forms = %j;", e.forms)), 
a.push(p("forms_exec = %j;", l)), a.push("if (+(anchor) != anchor) {"), a.push(p('  str += "[invalid plurals amount: %s(" + anchor + ")]";', o)), 
a.push("} else {"), a.push("  if (strict[anchor] !== undefined) {"), a.push("    plrl = strict[anchor];"), 
a.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), a.push("  } else {"), 
a.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), a.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
a.push("  }"), a.push("}");
} else a.push(p("str += %j;", e.text));
}), a.push("return str;"), new Function("params", "flatten", "pluralizer", a.join("\n"))) : t;
}(this, i.translation, i.locale)), "[object Function]" !== a(i.compiled) ? i.compiled : ((s(n) || o(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, g, y))) : e + ": No translation for [" + t + "]";
}, T.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(b(e, t)) : !!v(this, e, t);
}, T.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(b(e, t)) ? e : null;
var r = v(this, e, t);
return r ? r.split(E, 2)[0] : null;
}, T.prototype.t = T.prototype.translate, T.prototype.stringify = function(e) {
var t = this, n = {};
f(this._storage, function(e, t) {
n[t.split(E)[1]] = !0;
});
var r = {};
f(n, function(n, i) {
var a = v(t, e, i);
if (a) {
var o = t._storage[a].locale;
r[o] || (r[o] = {}), r[o][i] = t._storage[a].translation;
}
});
var i = {
fallback: {},
locales: r
}, a = (t._fallbacks[e] || []).slice(0, -1);
return a.length && (i.fallback[e] = a), JSON.stringify(i);
}, T.prototype.load = function(e) {
var t = this;
return o(e) && (e = JSON.parse(e)), f(e.locales, function(e, n) {
f(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), f(e.fallback, function(e, n) {
t.setFallback(n, e);
}), this;
}, e.exports = T;
},
60: function(e, t) {
Prism.languages.css.selector = {
pattern: /[^{}\s][^{}]*(?=\s*\{)/,
inside: {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
"pseudo-class": /:[-\w]+(?:\(.*\))?/,
class: /\.[-:.\w]+/,
id: /#[-:.\w]+/,
attribute: /\[[^\]]+\]/
}
}, Prism.languages.insertBefore("css", "function", {
hexcode: /#[\da-f]{3,8}/i,
entity: /\\[\da-f]{1,8}/i,
number: /[\d%.]+/
});
},
61: function(e, t) {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
lookbehind: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
boolean: /\b(?:true|false)\b/,
function: /[a-z0-9_]+(?=\()/i,
number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
punctuation: /[{}[\];(),.:]/
};
},
62: function(e, t) {
Prism.languages.javascript = Prism.languages.extend("clike", {
keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
lookbehind: !0,
greedy: !0
},
"function-variable": {
pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
alias: "function"
},
constant: /\b[A-Z][A-Z\d_]*\b/
}), Prism.languages.insertBefore("javascript", "string", {
"template-string": {
pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
greedy: !0,
inside: {
interpolation: {
pattern: /\${[^}]+}/,
inside: {
"interpolation-punctuation": {
pattern: /^\${|}$/,
alias: "punctuation"
},
rest: null
}
},
string: /[\s\S]+/
}
}
}), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, 
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
script: {
pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
lookbehind: !0,
inside: Prism.languages.javascript,
alias: "language-javascript",
greedy: !0
}
}), Prism.languages.js = Prism.languages.javascript;
},
63: function(e, t) {
Prism.languages.http = {
"request-line": {
pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
inside: {
property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
"attr-name": /:\w+/
}
},
"response-status": {
pattern: /^HTTP\/1.[01] \d+.*/m,
inside: {
property: {
pattern: /(^HTTP\/1.[01] )\d+.*/i,
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
for (var r in n) if (n[r]) {
var i = {};
i[r] = {
pattern: new RegExp("(content-type:\\s*" + r + "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*", "i"),
lookbehind: !0,
inside: {
rest: n[r]
}
}, Prism.languages.insertBefore("http", "header-name", i);
}
},
64: function(e, t) {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
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
pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
inside: {
parent: {
pattern: /&/,
alias: "important"
},
placeholder: /%[-\w]+/,
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: [ /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
pattern: /( +)(?:from|through)(?= )/,
lookbehind: !0
} ]
}), Prism.languages.scss.property = {
pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
inside: {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}, Prism.languages.insertBefore("scss", "important", {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
placeholder: {
pattern: /%[-\w]+/,
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
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
},
65: function(e, t) {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/,
greedy: !0,
lookbehind: !0
},
variable: /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/
};
},
66: function(e, t) {
Prism.languages.java = Prism.languages.extend("clike", {
keyword: /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
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
}), Prism.languages.insertBefore("java", "class-name", {
generics: {
pattern: /<\s*\w+(?:\.\w+)?(?:\s*,\s*\w+(?:\.\w+)?)*>/i,
alias: "function",
inside: {
keyword: Prism.languages.java.keyword,
punctuation: /[<>(),.:]/
}
}
});
},
7: function(e, t, n) {
"use strict";
e.exports = function() {
function e(e, t, n, r, i, a) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, 
this.column = a, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n();
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, a = {
start: ue
}, o = ue, s = i, l = "((", c = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, f = null, h = function(e, t) {
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
}, p = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, g = function(e, t) {
return [ e ].concat(t);
}, E = function(e) {
return [ e ];
}, b = "=", v = {
type: "literal",
value: "=",
description: '"="'
}, y = /^[0-9]/, T = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, w = " ", A = {
type: "literal",
value: " ",
description: '" "'
}, S = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, O = function() {
return {
text: oe()
};
}, _ = "\\", N = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, L = /^[\\|)(]/, k = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, I = function(e) {
return e;
}, F = void 0, C = {
type: "any",
description: "any character"
}, R = function() {
return oe();
}, P = ":", x = {
type: "literal",
value: ":",
description: '":"'
}, D = function(e) {
return e;
}, j = "#{", M = {
type: "literal",
value: "#{",
description: '"#{"'
}, U = "}", B = {
type: "literal",
value: "}",
description: '"}"'
}, H = function(e) {
return {
type: "variable",
anchor: e
};
}, q = ".", z = {
type: "literal",
value: ".",
description: '"."'
}, G = function() {
return oe();
}, W = /^[a-zA-Z_$]/, $ = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, X = /^[a-zA-Z0-9_$]/, Y = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, K = function(e) {
return e;
}, V = function(e) {
return {
type: "literal",
text: e.join("")
};
}, J = /^[\\#()|]/, Z = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, ie = [], ae = 0;
if ("startRule" in r) {
if (!(r.startRule in a)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
o = a[r.startRule];
}
function oe() {
return t.substring(ee, Q);
}
function se(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var i, a;
for (i = n; i < r; i++) "\n" === (a = t.charAt(i)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === a || "\u2028" === a || "\u2029" === a ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function le(e) {
Q < re || (Q > re && (re = Q, ie = []), ie.push(e));
}
function ce(n, r, i) {
var a = se(i), o = i < t.length ? t.charAt(i) : null;
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
}(r, o), r, o, i, a.line, a.column);
}
function ue() {
var e, t;
for (e = [], (t = Ee()) === i && (t = de()) === i && (t = pe()); t !== i; ) e.push(t), 
(t = Ee()) === i && (t = de()) === i && (t = pe());
return e;
}
function de() {
var e, n, r, a, o;
return e = Q, t.substr(Q, 2) === l ? (n = l, Q += 2) : (n = i, 0 === ae && le(c)), 
n !== i && (r = function e() {
var n, r, a, o;
return n = Q, (r = fe()) !== i ? (124 === t.charCodeAt(Q) ? (a = p, Q++) : (a = i, 
0 === ae && le(m)), a !== i && (o = e()) !== i ? (ee = n, r = g(r, o), n = r) : (Q = n, 
n = s)) : (Q = n, n = s), n === i && (n = Q, (r = fe()) !== i && (ee = n, r = E(r)), 
n = r), n;
}()) !== i ? (t.substr(Q, 2) === u ? (a = u, Q += 2) : (a = i, 0 === ae && le(d)), 
a !== i ? ((o = function() {
var e, n, r;
return e = Q, 58 === t.charCodeAt(Q) ? (n = P, Q++) : (n = i, 0 === ae && le(x)), 
n !== i && (r = me()) !== i ? (ee = e, n = D(r), e = n) : (Q = e, e = s), e;
}()) === i && (o = f), o !== i ? (ee = e, e = n = h(r, o)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function fe() {
var e, n, r, a, o, l;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = b, Q++) : (n = i, 0 === ae && le(v)), n !== i) {
if (r = [], y.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = i, 0 === ae && le(T)), 
a !== i) for (;a !== i; ) r.push(a), y.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = i, 
0 === ae && le(T)); else r = s;
if (r !== i) if (32 === t.charCodeAt(Q) ? (a = w, Q++) : (a = i, 0 === ae && le(A)), 
a === i && (a = f), a !== i) {
if (o = [], (l = he()) !== i) for (;l !== i; ) o.push(l), l = he(); else o = s;
o !== i ? (ee = e, e = n = S(r, o)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === i) {
if (e = Q, n = [], (r = he()) !== i) for (;r !== i; ) n.push(r), r = he(); else n = s;
n !== i && (ee = e, n = O()), e = n;
}
return e;
}
function he() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = _, Q++) : (n = i, 0 === ae && le(N)), 
n !== i ? (L.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === ae && le(k)), 
r !== i ? (ee = e, e = n = I(r)) : (Q = e, e = s)) : (Q = e, e = s), e === i && (e = Q, 
n = Q, ae++, 124 === t.charCodeAt(Q) ? (r = p, Q++) : (r = i, 0 === ae && le(m)), 
r === i && (t.substr(Q, 2) === u ? (r = u, Q += 2) : (r = i, 0 === ae && le(d))), 
ae--, r === i ? n = F : (Q = n, n = s), n !== i ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = i, 0 === ae && le(C)), r !== i ? (ee = e, e = n = R()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function pe() {
var e, n, r, a;
return e = Q, t.substr(Q, 2) === j ? (n = j, Q += 2) : (n = i, 0 === ae && le(M)), 
n !== i && (r = me()) !== i ? (125 === t.charCodeAt(Q) ? (a = U, Q++) : (a = i, 
0 === ae && le(B)), a !== i ? (ee = e, e = n = H(r)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function me() {
var e, n, r, a;
if (e = Q, ge() !== i) if (46 === t.charCodeAt(Q) ? (n = q, Q++) : (n = i, 0 === ae && le(z)), 
n !== i) {
if (r = [], (a = me()) !== i) for (;a !== i; ) r.push(a), a = me(); else r = s;
r !== i ? (ee = e, e = G()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === i && (e = ge()), e;
}
function ge() {
var e, n, r, a;
if (e = Q, W.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = i, 0 === ae && le($)), 
n !== i) {
for (r = [], X.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = i, 0 === ae && le(Y)); a !== i; ) r.push(a), 
X.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = i, 0 === ae && le(Y));
r !== i ? (ee = e, e = n = R()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function Ee() {
var e, t, n, r, a;
if (e = Q, t = [], n = Q, r = Q, ae++, (a = de()) === i && (a = pe()), ae--, a === i ? r = F : (Q = r, 
r = s), r !== i && (a = be()) !== i ? (ee = n, n = r = K(a)) : (Q = n, n = s), n !== i) for (;n !== i; ) t.push(n), 
n = Q, r = Q, ae++, (a = de()) === i && (a = pe()), ae--, a === i ? r = F : (Q = r, 
r = s), r !== i && (a = be()) !== i ? (ee = n, n = r = K(a)) : (Q = n, n = s); else t = s;
return t !== i && (ee = e, t = V(t)), e = t;
}
function be() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = _, Q++) : (n = i, 0 === ae && le(N)), 
n !== i ? (J.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === ae && le(Z)), 
r !== i ? (ee = e, e = n = I(r)) : (Q = e, e = s)) : (Q = e, e = s), e === i && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = i, 0 === ae && le(C))), e;
}
if ((n = o()) !== i && Q === t.length) return n;
throw n !== i && Q < t.length && le({
type: "end",
description: "end of input"
}), ce(null, ie, re);
}
};
}();
},
75: function(e, t, n) {
"use strict";
(document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop()).setAttribute("data-manual", 1), 
n(52);
let r = n(76), i = n(79);
function a(e) {
!function(e) {
let t = e.querySelectorAll(".code-example:not([data-prism-highlighted])");
for (let e of t) new r(e), e.setAttribute("data-prism-highlighted", "1");
}(e), function(e) {
let t = e.querySelectorAll("div.code-tabs:not([data-prism-highlighted])");
for (let e of t) new i(e), e.setAttribute("data-prism-highlighted", "1");
}(e);
}
t.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
a(document);
});
}, t.highlight = a;
},
76: function(e, t, n) {
"use strict";
let r = n(53), i = n(77), a = n(49), o = n(78);
e.exports = function(e) {
let t = e.querySelector("pre"), n = t.querySelector('code[class*="language-"]'), s = n.textContent;
Prism.highlightElement(n);
let l = a(t.innerHTML);
t.insertAdjacentHTML("beforeEnd", l);
let c = o(JSON.parse(e.getAttribute("data-highlight")));
t.insertAdjacentHTML("afterBegin", c);
let u, d, f, h = t.classList.contains("language-javascript"), p = t.classList.contains("language-markup"), m = +e.getAttribute("data-trusted");
!+e.getAttribute("data-no-strict") && h && (s = "'use strict';\n" + s);
let g = !0;
if (!h && !p) return;
let E = e.querySelector('[data-action="run"]');
E && (E.onclick = function() {
return this.blur(), w(), !1;
});
let b = e.querySelector('[data-action="edit"]');
function v() {
let e = u.contentWindow;
"function" == typeof e.postMessage ? e.postMessage(s, "https://lookatcode.com/showjs") : alert("Sorry, your browser is too old");
}
function y() {
if (e.hasAttribute("data-global")) {
d || ((d = document.createElement("iframe")).className = "js-frame", d.style.width = 0, 
d.style.height = 0, d.style.border = "none", d.name = "js-global-frame", document.body.appendChild(d));
let e = document.createElement("form");
e.style.display = "none", e.method = "POST", e.enctype = "multipart/form-data", 
e.action = "https://lookatcode.com/showhtml", e.target = "js-global-frame";
let t = document.createElement("textarea");
t.name = "code", t.value = T("<script>\n" + s + "\n<\/script>"), e.appendChild(t), 
d.parentNode.insertBefore(e, d.nextSibling), e.submit(), e.remove();
} else if (m) {
if (e.hasAttribute("data-autorun")) return void function(e) {
let t = document.createElement("script");
t.text = e, document.head.appendChild(t).parentNode.removeChild(t);
}(s);
try {
window.eval.call(window, s);
} catch (e) {
alert("Error: " + e.message);
}
} else e.hasAttribute("data-refresh") && u && (u.remove(), u = null), u ? v() : ((u = document.createElement("iframe")).className = "js-frame", 
u.src = "https://lookatcode.com/showjs", u.style.width = 0, u.style.height = 0, 
u.style.border = "none", u.onload = function() {
v();
}, document.body.appendChild(u));
}
function T(e) {
let t = e.toLowerCase(), n = t.match("<body>"), r = t.match("</body>"), i = t.match("<html>"), a = t.match("</html>");
if (t.match(/^\s*<!doctype/)) return e;
let o = e;
return i || (o = "<html>\n" + o), a || (o += "\n</html>"), n || (o = o.replace("<html>", '<html>\n<head>\n  <meta charset="utf-8">\n</head><body>\n')), 
r || (o = o.replace("</html>", "\n</body>\n</html>")), o = "<!DOCTYPE HTML>\n" + o;
}
function w() {
h ? y() : function() {
let t;
if (f && e.hasAttribute("data-refresh") && (f.remove(), f = null), f || (f = e.querySelector(".code-result")), 
f) t = f.querySelector("iframe"); else {
if ((f = document.createElement("div")).className = "code-result code-example__result", 
(t = document.createElement("iframe")).name = "frame-" + Math.random(), t.className = "code-result__iframe", 
"0" === e.getAttribute("data-demo-height")) t.style.display = "none"; else if (e.hasAttribute("data-demo-height")) {
let n = +e.getAttribute("data-demo-height");
t.style.height = n + "px";
}
f.appendChild(t), e.appendChild(f);
}
if (m) {
let n = t.contentDocument || t.contentWindow.document;
n.open(), n.write(T(s)), n.close(), e.hasAttribute("data-demo-height") || r.iframe(t), 
g && e.hasAttribute("data-autorun") || i(f) || f.scrollIntoView(!1);
} else {
let n = document.createElement("form");
n.style.display = "none", n.method = "POST", n.enctype = "multipart/form-data", 
n.action = "https://lookatcode.com/showhtml", n.target = t.name;
let a = document.createElement("textarea");
a.name = "code", a.value = T(s), n.appendChild(a), t.parentNode.insertBefore(n, t.nextSibling), 
n.submit(), n.remove(), g && e.hasAttribute("data-autorun") || (t.onload = function() {
e.hasAttribute("data-demo-height") || r.iframe(t), i(f) || f.scrollIntoView(!1);
});
}
}(), g = !1;
}
b && (b.onclick = function() {
return this.blur(), function() {
let e;
if (p) e = T(s); else {
let t = s.replace(/^/gim, "    ");
e = "<!DOCTYPE html>\n<html>\n\n<body>\n  <script>\n" + t + "\n  <\/script>\n</body>\n\n</html>";
}
let t = document.createElement("form");
t.action = "http://plnkr.co/edit/?p=preview", t.method = "POST", t.target = "_blank", 
document.body.appendChild(t);
let n = document.createElement("textarea");
n.name = "files[index.html]", n.value = e, t.appendChild(n);
let r = document.createElement("input");
r.name = "description", r.value = "Fork from " + window.location, t.appendChild(r), 
t.submit(), t.remove();
}(), !1;
}), e.hasAttribute("data-autorun") && ("epub" == window.ebookType && "no-epub" == e.getAttribute("data-autorun") ? e.querySelector("iframe").remove() : setTimeout(w, 100));
};
},
77: function(e, t, n) {
"use strict";
e.exports = function(e) {
let t = e.getBoundingClientRect(), n = 0;
if (t.top < 0) n = t.bottom; else {
if (!(t.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
};
},
78: function(e, t, n) {
"use strict";
e.exports = function(e) {
if (!e || !e.length) return "";
let t = [];
for (let n of e) {
let e = `<code class="block-highlight${n.cols ? " block-highlight_inline" : ""}" data-start="${n.start}">`;
if (e += "\n".repeat(n.start), n.end) e += `<code class="mask">${"\n".repeat(n.end - n.start + 1)}</code>`; else if (n.cols) for (let t = 0; t < n.cols.length; t++) {
let r = n.cols[t], i = 0 === t ? null : n.cols[t - 1];
e += " ".repeat(i ? r.start - i.end : r.start), e += `<code class="mask-inline">${" ".repeat(r.end - r.start)}</code>`;
}
e += "</code>", t.push(e);
}
return t.join("");
};
},
79: function(e, t, n) {
"use strict";
let r = n(3), i = n(49);
class a {
constructor(e) {
window.ebookType || (this.elem = e, this.translateX = 0, this.switchesElem = e.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = e.querySelector("[data-code-tabs-left]"), 
this.arrowRight = e.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = (e => {
e.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}), this.arrowRight.onclick = (e => {
e.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
}), this.delegate(".code-tabs__switch", "click", this.onSwitchClick));
}
onSwitchClick(e) {
e.preventDefault();
let t, n = e.delegateTarget.parentNode.children, r = this.elem.querySelector("[data-code-tabs-content]").children;
for (let i = 0; i < n.length; i++) {
let a = n[i], o = r[i];
a == e.delegateTarget ? (t = i, o.classList.add("code-tabs__section_current"), a.classList.add("code-tabs__switch_current")) : (o.classList.remove("code-tabs__section_current"), 
a.classList.remove("code-tabs__switch_current"));
}
0 === t ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(r[t]));
}
highlightTab(e) {
if (e.highlighted) return;
let t = e.querySelector("pre"), n = t.querySelector("code");
Prism.highlightElement(n), t.insertAdjacentHTML("beforeEnd", i(t.innerHTML)), e.highlighted = !0;
}
renderTranslate() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}
}
r.delegateMixin(a.prototype), e.exports = a;
},
8: function(e, t, n) {
"use strict";
var r = {};
function i(e) {
var t;
return r[e] ? e : (t = e.toLowerCase().replace("_", "-"), r[t] ? t : (t = t.split("-")[0], 
r[t] ? t : null));
}
function a(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].cFn) return 0;
var a = String(t), o = a.indexOf(".") < 0 ? "" : a.split(".")[1], s = o.length, l = +t, c = +a.split(".")[0], u = 0 === o.length ? 0 : +o.replace(/0+$/, "");
return r[n].cFn(l, c, s, +o, u);
}
function o(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var a = String(t), o = a.indexOf(".") < 0 ? "" : a.split(".")[1], s = o.length, l = +t, c = +a.split(".")[0], u = 0 === o.length ? 0 : +o.replace(/0+$/, "");
return r[n].oFn(l, c, s, +o, u);
}
e.exports = function(e, t) {
var n = i(e);
return n ? r[n].c[a(n, t)] : null;
}, e.exports.indexOf = a, e.exports.forms = function(e) {
var t = i(e);
return r[t] ? r[t].c : null;
}, e.exports.ordinal = function(e, t) {
var n = i(e);
return r[n] ? r[n].o[o(n, t)] : null;
}, e.exports.ordinal.indexOf = o, e.exports.ordinal.forms = function(e) {
var t = i(e);
return r[t] ? r[t].o : null;
};
var s = [ "zero", "one", "two", "few", "many", "other" ];
function l(e) {
return s[e];
}
function c(e, t) {
var n;
for (t.c = t.c ? t.c.map(l) : [ "other" ], t.o = t.o ? t.o.map(l) : [ "other" ], 
n = 0; n < e.length; n++) r[e[n]] = t;
}
function u(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function d(e, t) {
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
return d([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
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
return d([ 1, 2, 5, 7, 8 ], n) || d([ 20, 50, 70, 80 ], r) ? 0 : d([ 3, 4 ], n) || d([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === t || 6 === n || d([ 40, 60, 90 ], r) ? 2 : 3;
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
return d([ 2, 3 ], e % 10) && !d([ 12, 13 ], t) ? 0 : 1;
}
}), c([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
c([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || d([ 11, 71, 91 ], n) ? 2 !== t || d([ 12, 72, 92 ], n) ? !u(3, 4, t) && 9 !== t || u(10, 19, n) || u(70, 79, n) || u(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, a = t % 100, o = r % 10, s = r % 100;
return 0 === n && 1 === i && 11 !== a || 1 === o && 11 !== s ? 0 : 0 === n && u(2, 4, i) && !u(12, 14, a) || u(2, 4, o) && !u(12, 14, s) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return d([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
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
return d([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : d([ 3, 4 ], e) ? 3 : d([ 5, 6 ], e) ? 4 : 5;
}
}), c([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 1 === e || 0 !== i && d([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 100, a = r % 100;
return 0 === n && 1 === i || 1 === a ? 0 : 0 === n && 2 === i || 2 === a ? 1 : 0 === n && u(3, 4, i) || u(3, 4, a) ? 2 : 3;
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
return d([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, a = r % 10;
return 0 === n && d([ 1, 2, 3 ], t) || 0 === n && !d([ 4, 6, 9 ], i) || 0 !== n && !d([ 4, 6, 9 ], a) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return d([ 0, 1 ], t) ? 0 : 1;
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
return d([ 1, 11 ], e) ? 0 : d([ 2, 12 ], e) ? 1 : u(3, 10, e) || u(13, 19, e) ? 2 : 3;
}
}), c([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && d([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
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
return d([ 1, 5 ], e) ? 0 : 1;
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
return d([ 11, 8, 80, 800 ], e) ? 0 : 1;
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
return 0 === e ? 0 : d([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), c([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, a = e % 100;
return 1 !== i || u(11, 19, a) ? u(2, 9, i) && !u(11, 19, a) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, a = e % 100, o = r % 100, s = r % 10;
return 0 === i || u(11, 19, a) || 2 === n && u(11, 19, o) ? 0 : 1 === i && 11 !== a || 2 === n && 1 === s && 11 !== o || 2 !== n && 1 === s ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : d([ 7, 8 ], n) && !d([ 17, 18 ], r) ? 2 : 3;
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
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
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
return d([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
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
return d([ 1, 2 ], e % 10) && !d([ 11, 12 ], t) ? 0 : 1;
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