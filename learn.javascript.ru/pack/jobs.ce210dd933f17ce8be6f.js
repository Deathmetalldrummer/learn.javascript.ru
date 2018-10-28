var jobs = function(t) {
function e(e) {
for (var n, i, o = e[0], s = e[1], a = 0, u = []; a < o.length; a++) i = o[a], r[i] && u.push(r[i][0]), 
r[i] = 0;
for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
for (c && c(e); u.length; ) u.shift()();
}
var n = {}, r = {
27: 0
};
function i(e) {
if (n[e]) return n[e].exports;
var r = n[e] = {
i: e,
l: !1,
exports: {}
};
return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
}
i.e = function(t) {
var e = [], n = r[t];
if (0 !== n) if (n) e.push(n[2]); else {
var o = new Promise(function(e, i) {
n = r[t] = [ e, i ];
});
e.push(n[2] = o);
var s, a = document.getElementsByTagName("head")[0], c = document.createElement("script");
c.charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.src = function(t) {
return i.p + "" + ({
31: "authClient",
34: "vendors~authClient"
}[t] || t) + "-" + t + ".ce210dd933f17ce8be6f.js";
}(t), s = function(e) {
c.onerror = c.onload = null, clearTimeout(u);
var n = r[t];
if (0 !== n) {
if (n) {
var i = e && ("load" === e.type ? "missing" : e.type), o = e && e.target && e.target.src, s = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + o + ")");
s.type = i, s.request = o, n[1](s);
}
r[t] = void 0;
}
};
var u = setTimeout(function() {
s({
type: "timeout",
target: c
});
}, 12e4);
c.onerror = c.onload = s, a.appendChild(c);
}
return Promise.all(e);
}, i.m = t, i.c = n, i.d = function(t, e, n) {
i.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: n
});
}, i.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, i.t = function(t, e) {
if (1 & e && (t = i(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var n = Object.create(null);
if (i.r(n), Object.defineProperty(n, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function(e) {
return t[e];
}.bind(null, r));
return n;
}, i.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return i.d(e, "a", e), e;
}, i.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, i.p = "/pack/", i.oe = function(t) {
throw t;
};
var o = window.webpackJsonp_name_ = window.webpackJsonp_name_ || [], s = o.push.bind(o);
o.push = e, o = o.slice();
for (var a = 0; a < o.length; a++) e(o[a]);
var c = s;
return i(i.s = 389);
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
114: function(t, e, n) {
"use strict";
const r = n(9);
function i({elem: t, callback: e}) {
if (window.currentUser) return void e();
const i = new r({
elem: t,
size: "small",
class: "submit-button__spinner",
elemClass: "submit-button_progress"
});
i.start(), Promise.all([ n.e(34), n.e(31) ]).then(function() {
i.stop(), new (n(47))({
callback: e
});
}.bind(null, n)).catch(n.oe);
}
document.addEventListener("click", function(t) {
let e = t.target;
(e = e.closest("[data-signup-link][href]")) && (t.preventDefault(), i({
elem: e,
callback: () => window.location.href = e.href
}));
}), e.signupLink = i;
},
115: function(t, e, n) {
"use strict";
t.exports = {
setError: function(t, e) {
let n = "description" === e.name ? document.querySelector("#description-error") : e.parentNode.querySelector("span.errored");
n ? n.innerHTML = t : t && ((n = document.createElement("span")).innerHTML = t, 
n.className = "errored", e.parentNode.insertBefore(n, e.nextSibling)), t ? e.classList.add("errored") : e.classList.remove("errored");
}
};
},
116: function(t, e, n) {
"use strict";
!function() {
var e = function(t, n) {
var r = this;
e.count = (e.count || 0) + 1, this.count = e.count, this.isOpened = !1, this.input = i(t), 
this.input.setAttribute("autocomplete", "awesomplete"), this.input.setAttribute("aria-owns", "awesomplete_list_" + this.count), 
this.input.setAttribute("role", "combobox"), this.options = n = n || {}, function(t, e, n) {
for (var r in e) {
var i = e[r], o = t.input.getAttribute("data-" + r.toLowerCase());
"number" == typeof i ? t[r] = parseInt(o) : !1 === i ? t[r] = null !== o : i instanceof Function ? t[r] = null : t[r] = o, 
t[r] || 0 === t[r] || (t[r] = r in n ? n[r] : i);
}
}(this, {
minChars: 2,
maxItems: 10,
autoFirst: !1,
data: e.DATA,
filter: e.FILTER_CONTAINS,
sort: !1 !== n.sort && e.SORT_BYLENGTH,
container: e.CONTAINER,
item: e.ITEM,
replace: e.REPLACE,
tabSelect: !1
}, n), this.index = -1, this.container = this.container(t), this.ul = i.create("ul", {
hidden: "hidden",
role: "listbox",
id: "awesomplete_list_" + this.count,
inside: this.container
}), this.status = i.create("span", {
className: "visually-hidden",
role: "status",
"aria-live": "assertive",
"aria-atomic": !0,
inside: this.container,
textContent: 0 != this.minChars ? "Type " + this.minChars + " or more characters for results." : "Begin typing for results."
}), this._events = {
input: {
input: this.evaluate.bind(this),
blur: this.close.bind(this, {
reason: "blur"
}),
keydown: function(t) {
var e = t.keyCode;
r.opened && (13 === e && r.selected ? (t.preventDefault(), r.select()) : 9 === e && r.selected && r.tabSelect ? r.select() : 27 === e ? r.close({
reason: "esc"
}) : 38 !== e && 40 !== e || (t.preventDefault(), r[38 === e ? "previous" : "next"]()));
}
},
form: {
submit: this.close.bind(this, {
reason: "submit"
})
},
ul: {
mousedown: function(t) {
t.preventDefault();
},
click: function(t) {
var e = t.target;
if (e !== this) {
for (;e && !/li/i.test(e.nodeName); ) e = e.parentNode;
e && 0 === t.button && (t.preventDefault(), r.select(e, t.target));
}
}
}
}, i.bind(this.input, this._events.input), i.bind(this.input.form, this._events.form), 
i.bind(this.ul, this._events.ul), this.input.hasAttribute("list") ? (this.list = "#" + this.input.getAttribute("list"), 
this.input.removeAttribute("list")) : this.list = this.input.getAttribute("data-list") || n.list || [], 
e.all.push(this);
};
function n(t) {
var e = Array.isArray(t) ? {
label: t[0],
value: t[1]
} : "object" == typeof t && "label" in t && "value" in t ? t : {
label: t,
value: t
};
this.label = e.label || e.value, this.value = e.value;
}
e.prototype = {
set list(t) {
if (Array.isArray(t)) this._list = t; else if ("string" == typeof t && t.indexOf(",") > -1) this._list = t.split(/\s*,\s*/); else if ((t = i(t)) && t.children) {
var e = [];
r.apply(t.children).forEach(function(t) {
if (!t.disabled) {
var n = t.textContent.trim(), r = t.value || n, i = t.label || n;
"" !== r && e.push({
label: i,
value: r
});
}
}), this._list = e;
}
document.activeElement === this.input && this.evaluate();
},
get selected() {
return this.index > -1;
},
get opened() {
return this.isOpened;
},
close: function(t) {
this.opened && (this.ul.setAttribute("hidden", ""), this.isOpened = !1, this.index = -1, 
this.status.setAttribute("hidden", ""), i.fire(this.input, "awesomplete-close", t || {}));
},
open: function() {
this.ul.removeAttribute("hidden"), this.isOpened = !0, this.status.removeAttribute("hidden"), 
this.autoFirst && -1 === this.index && this.goto(0), i.fire(this.input, "awesomplete-open");
},
destroy: function() {
if (i.unbind(this.input, this._events.input), i.unbind(this.input.form, this._events.form), 
!this.options.container) {
var t = this.container.parentNode;
t.insertBefore(this.input, this.container), t.removeChild(this.container);
}
this.input.removeAttribute("autocomplete"), this.input.removeAttribute("aria-autocomplete");
var n = e.all.indexOf(this);
-1 !== n && e.all.splice(n, 1);
},
next: function() {
var t = this.ul.children.length;
this.goto(this.index < t - 1 ? this.index + 1 : t ? 0 : -1);
},
previous: function() {
var t = this.ul.children.length, e = this.index - 1;
this.goto(this.selected && -1 !== e ? e : t - 1);
},
goto: function(t) {
var e = this.ul.children;
this.selected && e[this.index].setAttribute("aria-selected", "false"), this.index = t, 
t > -1 && e.length > 0 && (e[t].setAttribute("aria-selected", "true"), this.status.textContent = e[t].textContent + ", list item " + (t + 1) + " of " + e.length, 
this.input.setAttribute("aria-activedescendant", this.ul.id + "_item_" + this.index), 
this.ul.scrollTop = e[t].offsetTop - this.ul.clientHeight + e[t].clientHeight, i.fire(this.input, "awesomplete-highlight", {
text: this.suggestions[this.index]
}));
},
select: function(t, e) {
if (t ? this.index = i.siblingIndex(t) : t = this.ul.children[this.index], t) {
var n = this.suggestions[this.index];
i.fire(this.input, "awesomplete-select", {
text: n,
origin: e || t
}) && (this.replace(n), this.close({
reason: "select"
}), i.fire(this.input, "awesomplete-selectcomplete", {
text: n
}));
}
},
evaluate: function() {
var t = this, e = this.input.value;
e.length >= this.minChars && this._list && this._list.length > 0 ? (this.index = -1, 
this.ul.innerHTML = "", this.suggestions = this._list.map(function(r) {
return new n(t.data(r, e));
}).filter(function(n) {
return t.filter(n, e);
}), !1 !== this.sort && (this.suggestions = this.suggestions.sort(this.sort)), this.suggestions = this.suggestions.slice(0, this.maxItems), 
this.suggestions.forEach(function(n, r) {
t.ul.appendChild(t.item(n, e, r));
}), 0 === this.ul.children.length ? (this.status.textContent = "No results found", 
this.close({
reason: "nomatches"
})) : (this.open(), this.status.textContent = this.ul.children.length + " results found")) : (this.close({
reason: "nomatches"
}), this.status.textContent = "No results found");
}
}, e.all = [], e.FILTER_CONTAINS = function(t, e) {
return RegExp(i.regExpEscape(e.trim()), "i").test(t);
}, e.FILTER_STARTSWITH = function(t, e) {
return RegExp("^" + i.regExpEscape(e.trim()), "i").test(t);
}, e.SORT_BYLENGTH = function(t, e) {
return t.length !== e.length ? t.length - e.length : t < e ? -1 : 1;
}, e.CONTAINER = function(t) {
return i.create("div", {
className: "awesomplete",
around: t
});
}, e.ITEM = function(t, e, n) {
var r = "" === e.trim() ? t : t.replace(RegExp(i.regExpEscape(e.trim()), "gi"), "<mark>$&</mark>");
return i.create("li", {
innerHTML: r,
"aria-selected": "false",
id: "awesomplete_list_" + this.count + "_item_" + n
});
}, e.REPLACE = function(t) {
this.input.value = t.value;
}, e.DATA = function(t) {
return t;
}, Object.defineProperty(n.prototype = Object.create(String.prototype), "length", {
get: function() {
return this.label.length;
}
}), n.prototype.toString = n.prototype.valueOf = function() {
return "" + this.label;
};
var r = Array.prototype.slice;
function i(t, e) {
return "string" == typeof t ? (e || document).querySelector(t) : t || null;
}
function o(t, e) {
return r.call((e || document).querySelectorAll(t));
}
function s() {
o("input.awesomplete").forEach(function(t) {
new e(t);
});
}
i.create = function(t, e) {
var n = document.createElement(t);
for (var r in e) {
var o = e[r];
if ("inside" === r) i(o).appendChild(n); else if ("around" === r) {
var s = i(o);
s.parentNode.insertBefore(n, s), n.appendChild(s), null != s.getAttribute("autofocus") && s.focus();
} else r in n ? n[r] = o : n.setAttribute(r, o);
}
return n;
}, i.bind = function(t, e) {
if (t) for (var n in e) {
var r = e[n];
n.split(/\s+/).forEach(function(e) {
t.addEventListener(e, r);
});
}
}, i.unbind = function(t, e) {
if (t) for (var n in e) {
var r = e[n];
n.split(/\s+/).forEach(function(e) {
t.removeEventListener(e, r);
});
}
}, i.fire = function(t, e, n) {
var r = document.createEvent("HTMLEvents");
for (var i in r.initEvent(e, !0, !0), n) r[i] = n[i];
return t.dispatchEvent(r);
}, i.regExpEscape = function(t) {
return t.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
}, i.siblingIndex = function(t) {
for (var e = 0; t = t.previousElementSibling; e++) ;
return e;
}, "undefined" != typeof self && (self.Awesomplete = e), "undefined" != typeof Document && ("loading" !== document.readyState ? s() : document.addEventListener("DOMContentLoaded", s)), 
e.$ = i, e.$$ = o, "object" == typeof t && t.exports && (t.exports = e);
}();
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
389: function(t, e, n) {
n(390), t.exports = n(392);
},
390: function(t, e, n) {
"use strict";
var r = n(115);
n(114);
const i = n(391), o = n(116), s = n(45);
let a;
function c() {
const t = document.getElementById("jobs-search");
if (!t || null === t.offsetParent) return;
const e = {}, n = new CustomEvent("submit");
t.addEventListener("submit", t => {
t.preventDefault(), function(t) {
const e = [ location.protocol, "//", location.host, location.pathname ].join(""), n = document.location.search.substr(1).split("&").reduce((t, e) => {
if (e) {
const [n, r] = e.split("=");
t[n] = r;
}
return t;
}, {});
Object.assign(n, t);
let r = Object.keys(n).reduce((t, e) => (n[e] && "0" !== n[e] && t.push(e + "=" + n[e]), 
t), []).join("&");
window.location = e + (r.length ? "?" + r : "");
}(e);
}), t.addEventListener("change", i => {
const o = null !== t.querySelector("button[type=submit]").offsetParent;
switch (i.target.name) {
case "paidOnly":
e.paidOnly = t.paidOnly.checked ? "1" : "0";
break;

case "salary":
e.salary = t.salary.value, e.rateType = t.rateType.value, e.rateCurrency = t.rateCurrency.value;
break;

case "rateType":
case "rateCurrency":
break;

case "city":
if (t.city.value) return void (o || (0, r.setError)("Выберите из существующих", i.target));

default:
e[i.target.name] = t[i.target.name].value;
}
o || t.dispatchEvent(n);
}), function() {
const r = document.querySelector(".js-city-autocomplete");
r && (new o(r, {
list: document.getElementById("cityList")
}), r.addEventListener("awesomplete-selectcomplete", () => {
e.city = t.city.value;
const r = null !== t.querySelector("button[type=submit]").offsetParent;
r || t.dispatchEvent(n);
}));
}(), a = !0;
}
i(), c(), function() {
const t = document.querySelector(".jobs__filter-toggle");
t && t.addEventListener("click", t => {
t.preventDefault(), document.querySelector(".jobs").classList.toggle("jobs_filter-show"), 
a || c();
});
}(), function() {
const t = () => {
a || c(), a && window.removeEventListener("resize", t);
};
window.addEventListener("resize", s(t, 200));
}();
},
391: function(t, e, n) {
"use strict";
const r = n(4);
t.exports = function() {
const t = [ "js-remove-job", "js-moderate-job", "js-hide-job" ];
document.addEventListener("click", function(e) {
const n = e.target;
if (!n || !t.some(t => n.classList.contains(t))) return;
if (e.preventDefault(), n.classList.contains("js-remove-job") && !confirm("Вы действительно хотите удалить стажировку?")) return;
let i;
if (n.classList.contains("js-moderate-job")) {
let t;
if (!n.dataset.deny || (t = prompt("Причина отклонения")), null === t) return;
i = {
approve: !n.dataset.deny,
moderateReason: t
};
}
var o, s;
n.classList.contains("js-hide-job") && (i = {
duration: 0
}), o = {
body: i,
url: n.href,
method: n.dataset.method || "POST"
}, s = (t => window.location = t.result.link || "/jobs"), o.normalStatuses = o.normalStatuses || [ 200, 201, 204 ], 
r(o).addEventListener("success", s);
});
};
},
392: function(t, e, n) {},
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
let n = u("xhrstart", t);
document.dispatchEvent(n);
}), e.addEventListener("loadend", t => {
let e = u("xhrend", t);
document.dispatchEvent(e);
}), e.addEventListener("success", t => {
let e = u("xhrsuccess", t);
e.result = t.result, document.dispatchEvent(e);
}), e.addEventListener("fail", t => {
let e = u("xhrfail", t);
e.reason = t.reason, document.dispatchEvent(e);
})), t.raw || e.setRequestHeader("Accept", "application/json"), e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let c = t.normalStatuses || [ 200 ];
function u(t, e) {
let n = new CustomEvent(t);
return n.originalEvent = e, n;
}
function l(t, n) {
let r = u("fail", n);
r.reason = t, e.dispatchEvent(r);
}
return e.addEventListener("error", t => {
l(s("error.network.server_connection_error"), t);
}), e.addEventListener("timeout", t => {
l(s("error.network.server_request_timeout"), t);
}), e.addEventListener("abort", t => {
l(s("error.network.request_aborted"), t);
}), e.addEventListener("load", n => {
if (!e.status) return void l(s("error.network.no_response"), n);
if (-1 == c.indexOf(e.status)) return void l(s("error.network.server_error", {
status: e.status
}), n);
let r = e.responseText;
if ((e.getResponseHeader("Content-Type") || "").match(/^application\/json/) || t.json) try {
r = JSON.parse(r);
} catch (n) {
return void l(s("error.network.invalid_format"), n);
}
!function(t, n) {
let r = u("success", n);
r.result = t, e.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
e.send(r);
}, 0), e;
};
},
45: function(t, e, n) {
"use strict";
t.exports = function(t, e) {
let n, r, i = !1;
return function o() {
if (i) return n = arguments, void (r = this);
t.apply(this, arguments), i = !0, setTimeout(function() {
i = !1, n && (o.apply(r, n), n = r = null);
}, e);
};
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
function u(t) {
return "[object Object]" === o(t);
}
var l = Array.isArray || function(t) {
return "[object Array]" === o(t);
}, f = Array.prototype.forEach;
function h(t, e, n) {
if (null !== t) if (f && t.forEach === f) t.forEach(e, n); else if (t.length === +t.length) for (var r = 0, i = t.length; r < i; r += 1) e.call(n, t[r], r, t); else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(n, t[o], o, t);
}
var p = /%[sdj%]/g;
function d(t) {
var e = 1, n = arguments, r = n.length;
return String(t).replace(p, function(t) {
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
var v = "en";
function m(t) {
var e = {};
return h(t || {}, function(t, n) {
t && "object" == typeof t ? h(m(t), function(t, r) {
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
for (var s, a = t._fallbacks[e] || [ t._defaultLocale ], c = 0, u = a.length; c < u; c++) if (s = b(a[c], n), 
i.hasOwnProperty(s)) return o[r] = s, o[r];
return o[r] = null, null;
}
function _(t, e, n) {
var r = i.indexOf(t, e);
return -1 === r ? d('[pluralizer for "%s" locale not found]', t) : void 0 === n[r] ? d('[plural form %d ("%s") not found in translation]', r, i.forms(t)[r]) : n[r];
}
function w(t) {
if (!(this instanceof w)) return new w(t);
this._defaultLocale = t ? String(t) : v, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
w.prototype.addPhrase = function(t, e, n, r) {
var i, o = this;
if (c(r)) i = r ? 1 / 0 : 0; else if (a(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (u(n) && i > 0) return h(n, function(n, r) {
o.addPhrase(t, (e ? e + "." : "") + r, n, i - 1);
}), this;
if (s(n)) this._storage[b(t, e)] = {
translation: n,
locale: t,
raw: !1
}; else {
if (!(l(n) || a(n) || c(n) || 0 === i && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
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
var r = l(e) ? e.slice() : [ e ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[t] = r, this._fallbacks_cache = {}, 
this;
};
var x = /#\{|\(\(|\\\\/;
w.prototype.translate = function(t, e, n) {
var i, c = y(this, t, e);
return c ? (i = this._storage[c]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(t, e, n) {
var i, o, s, a, c, u;
return x.test(e) ? 1 === (i = r.parse(e)).length && "literal" === i[0].type ? i[0].text : (t._plurals_cache[n] || (t._plurals_cache[n] = new w(n)), 
u = t._plurals_cache[n], (o = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
o.push("params = flatten(params);"), h(i, function(t) {
if ("literal" !== t.type) {
if ("variable" === t.type) return s = t.anchor, void o.push(d('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', s, s, s));
if ("plural" !== t.type) throw new Error("Unknown node type");
s = t.anchor, a = {}, h(t.strict, function(e, i) {
var o = r.parse(e);
if (1 === o.length && "literal" === o[0].type) return a[i] = !1, void (t.strict[i] = o[0].text);
a[i] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
}), c = {}, h(t.forms, function(e, i) {
var o, s = r.parse(e);
if (1 === s.length && "literal" === s[0].type) return o = s[0].text, t.forms[i] = o, 
void (c[o] = !1);
c[e] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
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
}), i.compiled.call(this, n, m, _))) : t + ": No translation for [" + e + "]";
}, w.prototype.hasPhrase = function(t, e, n) {
return n ? this._storage.hasOwnProperty(b(t, e)) : !!y(this, t, e);
}, w.prototype.getLocale = function(t, e, n) {
if (n) return this._storage.hasOwnProperty(b(t, e)) ? t : null;
var r = y(this, t, e);
return r ? r.split(g, 2)[0] : null;
}, w.prototype.t = w.prototype.translate, w.prototype.stringify = function(t) {
var e = this, n = {};
h(this._storage, function(t, e) {
n[e.split(g)[1]] = !0;
});
var r = {};
h(n, function(n, i) {
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
return s(t) && (t = JSON.parse(t)), h(t.locales, function(t, n) {
h(t, function(t, r) {
e.addPhrase(n, r, t, 0);
});
}), h(t.fallback, function(t, n) {
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
start: lt
}, s = lt, a = i, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, h = null, p = function(t, e) {
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
}, d = "|", v = {
type: "literal",
value: "|",
description: '"|"'
}, m = function(t, e) {
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
}, x = " ", E = {
type: "literal",
value: " ",
description: '" "'
}, F = function(t, e) {
return {
strict: t.join(""),
text: e.join("")
};
}, k = function() {
return {
text: st()
};
}, j = "\\", A = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, O = /^[\\|)(]/, T = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, C = function(t) {
return t;
}, L = void 0, S = {
type: "any",
description: "any character"
}, N = function() {
return st();
}, P = ":", R = {
type: "literal",
value: ":",
description: '":"'
}, M = function(t) {
return t;
}, z = "#{", I = {
type: "literal",
value: "#{",
description: '"#{"'
}, q = "}", H = {
type: "literal",
value: "}",
description: '"}"'
}, D = function(t) {
return {
type: "variable",
anchor: t
};
}, U = ".", $ = {
type: "literal",
value: ".",
description: '"."'
}, B = function() {
return st();
}, J = /^[a-zA-Z_$]/, G = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, X = /^[a-zA-Z0-9_$]/, W = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, Z = function(t) {
return t;
}, Y = function(t) {
return {
type: "literal",
text: t.join("")
};
}, K = /^[\\#()|]/, Q = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, V = 0, tt = 0, et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}, rt = 0, it = [], ot = 0;
if ("startRule" in r) {
if (!(r.startRule in o)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
s = o[r.startRule];
}
function st() {
return e.substring(tt, V);
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
V < rt || (V > rt && (rt = V, it = []), it.push(t));
}
function ut(n, r, i) {
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
function lt() {
var t, e;
for (t = [], (e = gt()) === i && (e = ft()) === i && (e = dt()); e !== i; ) t.push(e), 
(e = gt()) === i && (e = ft()) === i && (e = dt());
return t;
}
function ft() {
var t, n, r, o, s;
return t = V, e.substr(V, 2) === c ? (n = c, V += 2) : (n = i, 0 === ot && ct(u)), 
n !== i && (r = function t() {
var n, r, o, s;
return n = V, (r = ht()) !== i ? (124 === e.charCodeAt(V) ? (o = d, V++) : (o = i, 
0 === ot && ct(v)), o !== i && (s = t()) !== i ? (tt = n, r = m(r, s), n = r) : (V = n, 
n = a)) : (V = n, n = a), n === i && (n = V, (r = ht()) !== i && (tt = n, r = g(r)), 
n = r), n;
}()) !== i ? (e.substr(V, 2) === l ? (o = l, V += 2) : (o = i, 0 === ot && ct(f)), 
o !== i ? ((s = function() {
var t, n, r;
return t = V, 58 === e.charCodeAt(V) ? (n = P, V++) : (n = i, 0 === ot && ct(R)), 
n !== i && (r = vt()) !== i ? (tt = t, n = M(r), t = n) : (V = t, t = a), t;
}()) === i && (s = h), s !== i ? (tt = t, t = n = p(r, s)) : (V = t, t = a)) : (V = t, 
t = a)) : (V = t, t = a), t;
}
function ht() {
var t, n, r, o, s, c;
if (t = V, 61 === e.charCodeAt(V) ? (n = b, V++) : (n = i, 0 === ot && ct(y)), n !== i) {
if (r = [], _.test(e.charAt(V)) ? (o = e.charAt(V), V++) : (o = i, 0 === ot && ct(w)), 
o !== i) for (;o !== i; ) r.push(o), _.test(e.charAt(V)) ? (o = e.charAt(V), V++) : (o = i, 
0 === ot && ct(w)); else r = a;
if (r !== i) if (32 === e.charCodeAt(V) ? (o = x, V++) : (o = i, 0 === ot && ct(E)), 
o === i && (o = h), o !== i) {
if (s = [], (c = pt()) !== i) for (;c !== i; ) s.push(c), c = pt(); else s = a;
s !== i ? (tt = t, t = n = F(r, s)) : (V = t, t = a);
} else V = t, t = a; else V = t, t = a;
} else V = t, t = a;
if (t === i) {
if (t = V, n = [], (r = pt()) !== i) for (;r !== i; ) n.push(r), r = pt(); else n = a;
n !== i && (tt = t, n = k()), t = n;
}
return t;
}
function pt() {
var t, n, r;
return t = V, 92 === e.charCodeAt(V) ? (n = j, V++) : (n = i, 0 === ot && ct(A)), 
n !== i ? (O.test(e.charAt(V)) ? (r = e.charAt(V), V++) : (r = i, 0 === ot && ct(T)), 
r !== i ? (tt = t, t = n = C(r)) : (V = t, t = a)) : (V = t, t = a), t === i && (t = V, 
n = V, ot++, 124 === e.charCodeAt(V) ? (r = d, V++) : (r = i, 0 === ot && ct(v)), 
r === i && (e.substr(V, 2) === l ? (r = l, V += 2) : (r = i, 0 === ot && ct(f))), 
ot--, r === i ? n = L : (V = n, n = a), n !== i ? (e.length > V ? (r = e.charAt(V), 
V++) : (r = i, 0 === ot && ct(S)), r !== i ? (tt = t, t = n = N()) : (V = t, t = a)) : (V = t, 
t = a)), t;
}
function dt() {
var t, n, r, o;
return t = V, e.substr(V, 2) === z ? (n = z, V += 2) : (n = i, 0 === ot && ct(I)), 
n !== i && (r = vt()) !== i ? (125 === e.charCodeAt(V) ? (o = q, V++) : (o = i, 
0 === ot && ct(H)), o !== i ? (tt = t, t = n = D(r)) : (V = t, t = a)) : (V = t, 
t = a), t;
}
function vt() {
var t, n, r, o;
if (t = V, mt() !== i) if (46 === e.charCodeAt(V) ? (n = U, V++) : (n = i, 0 === ot && ct($)), 
n !== i) {
if (r = [], (o = vt()) !== i) for (;o !== i; ) r.push(o), o = vt(); else r = a;
r !== i ? (tt = t, t = B()) : (V = t, t = a);
} else V = t, t = a; else V = t, t = a;
return t === i && (t = mt()), t;
}
function mt() {
var t, n, r, o;
if (t = V, J.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, 0 === ot && ct(G)), 
n !== i) {
for (r = [], X.test(e.charAt(V)) ? (o = e.charAt(V), V++) : (o = i, 0 === ot && ct(W)); o !== i; ) r.push(o), 
X.test(e.charAt(V)) ? (o = e.charAt(V), V++) : (o = i, 0 === ot && ct(W));
r !== i ? (tt = t, t = n = N()) : (V = t, t = a);
} else V = t, t = a;
return t;
}
function gt() {
var t, e, n, r, o;
if (t = V, e = [], n = V, r = V, ot++, (o = ft()) === i && (o = dt()), ot--, o === i ? r = L : (V = r, 
r = a), r !== i && (o = bt()) !== i ? (tt = n, n = r = Z(o)) : (V = n, n = a), n !== i) for (;n !== i; ) e.push(n), 
n = V, r = V, ot++, (o = ft()) === i && (o = dt()), ot--, o === i ? r = L : (V = r, 
r = a), r !== i && (o = bt()) !== i ? (tt = n, n = r = Z(o)) : (V = n, n = a); else e = a;
return e !== i && (tt = t, e = Y(e)), t = e;
}
function bt() {
var t, n, r;
return t = V, 92 === e.charCodeAt(V) ? (n = j, V++) : (n = i, 0 === ot && ct(A)), 
n !== i ? (K.test(e.charAt(V)) ? (r = e.charAt(V), V++) : (r = i, 0 === ot && ct(Q)), 
r !== i ? (tt = t, t = n = C(r)) : (V = t, t = a)) : (V = t, t = a), t === i && (e.length > V ? (t = e.charAt(V), 
V++) : (t = i, 0 === ot && ct(S))), t;
}
if ((n = s()) !== i && V === e.length) return n;
throw n !== i && V < e.length && ct({
type: "end",
description: "end of input"
}), ut(null, it, rt);
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
var o = String(e), s = o.indexOf(".") < 0 ? "" : o.split(".")[1], a = s.length, c = +e, u = +o.split(".")[0], l = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].cFn(c, u, a, +s, l);
}
function s(t, e) {
var n = i(t);
if (!n) return -1;
if (!r[n].oFn) return 0;
var o = String(e), s = o.indexOf(".") < 0 ? "" : o.split(".")[1], a = s.length, c = +e, u = +o.split(".")[0], l = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].oFn(c, u, a, +s, l);
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
function u(t, e) {
var n;
for (e.c = e.c ? e.c.map(c) : [ "other" ], e.o = e.o ? e.o.map(c) : [ "other" ], 
n = 0; n < t.length; n++) r[t[n]] = e;
}
function l(t, e, n) {
return t <= n && n <= e && n % 1 == 0;
}
function f(t, e) {
return t.indexOf(e) >= 0;
}
u([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) ? 0 : 1;
}
}), u([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
}
}), u([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : l(3, 10, e) ? 3 : l(11, 99, e) ? 4 : 5;
}
}), u([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 1, 5, 7, 8, 9, 10 ], t) ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), u([ "az" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100, i = e % 1e3;
return f([ 1, 2, 5, 7, 8 ], n) || f([ 20, 50, 70, 80 ], r) ? 0 : f([ 3, 4 ], n) || f([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === e || 6 === n || f([ 40, 60, 90 ], r) ? 2 : 3;
}
}), u([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : l(2, 4, e) && !l(12, 14, n) ? 1 : 0 === e || l(5, 9, e) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 2, 3 ], t % 10) && !f([ 12, 13 ], e) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100, r = t % 1e6;
return 1 !== e || f([ 11, 71, 91 ], n) ? 2 !== e || f([ 12, 72, 92 ], n) ? !l(3, 4, e) && 9 !== e || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== t && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n, r) {
var i = e % 10, o = e % 100, s = r % 10, a = r % 100;
return 0 === n && 1 === i && 11 !== o || 1 === s && 11 !== a ? 0 : 0 === n && l(2, 4, i) && !l(12, 14, o) || l(2, 4, s) && !l(12, 14, a) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return f([ 1, 3 ], t) ? 0 : 2 === t ? 1 : 4 === t ? 2 : 3;
}
}), u([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : l(2, 4, e) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), u([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : 3 === t ? 3 : 6 === t ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 0, 7, 8, 9 ], t) ? 0 : 1 === t ? 1 : 2 === t ? 2 : f([ 3, 4 ], t) ? 3 : f([ 5, 6 ], t) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, i) {
return 1 === t || 0 !== i && f([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n, r) {
var i = e % 100, o = r % 100;
return 0 === n && 1 === i || 1 === o ? 0 : 0 === n && 2 === i || 2 === o ? 1 : 0 === n && l(3, 4, i) || l(3, 4, o) ? 2 : 3;
}
}), u([ "en" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : 2 === e && 12 !== n ? 1 : 3 === e && 13 !== n ? 2 : 3;
}
}), u([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
var i = e % 10, o = r % 10;
return 0 === n && f([ 1, 2, 3 ], e) || 0 === n && !f([ 4, 6, 9 ], i) || 0 !== n && !f([ 4, 6, 9 ], o) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : l(3, 6, t) ? 2 : l(7, 10, t) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t) {
return f([ 1, 11 ], t) ? 0 : f([ 2, 12 ], t) ? 1 : l(3, 10, t) || l(13, 19, t) ? 2 : 3;
}
}), u([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f([ 0, 20, 40, 60, 80 ], e % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), u([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(t, e, n) {
var r = t % 10;
return 1 === e && 0 === n ? 0 : 2 === e && 0 === n ? 1 : 0 !== n || l(0, 10, t) || 0 !== r ? 3 : 2;
}
}), u([ "hu" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return f([ 1, 5 ], t) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, i) {
return 0 === i && 1 === e % 10 && 11 !== e % 100 || 0 !== i ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
return f([ 11, 8, 80, 800 ], t) ? 0 : 1;
}
}), u([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : 2;
}
}), u([ "ka" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t, e) {
var n = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), u([ "kk" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
var e = t % 10;
return 6 === e || 9 === e || 0 === e && 0 !== t ? 0 : 1;
}
}), u([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2;
}
}), u([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e) {
return 0 === t ? 0 : f([ 0, 1 ], e) && 0 !== t ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n, r) {
var i = t % 10, o = t % 100;
return 1 !== i || l(11, 19, o) ? l(2, 9, i) && !l(11, 19, o) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e, n, r) {
var i = t % 10, o = t % 100, s = r % 100, a = r % 10;
return 0 === i || l(11, 19, o) || 2 === n && l(11, 19, s) ? 0 : 1 === i && 11 !== o || 2 === n && 1 === a && 11 !== s || 2 !== n && 1 === a ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return 0 === n && 1 === e % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : f([ 7, 8 ], n) && !f([ 17, 18 ], r) ? 2 : 3;
}
}), u([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 0 !== n || 0 === t || 1 !== t && l(1, 19, t % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "mr" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 3;
}
}), u([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 10, e) ? 1 : l(11, 19, e) ? 2 : 3;
}
}), u([ "ne" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return l(1, 4, t) ? 0 : 1;
}
}), u([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 1 === e && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, i) ? 1 : 0 === n && 1 !== e && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, i) ? 2 : 3;
}
}), u([ "pt" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 2, t) && 2 !== t ? 0 : 1;
}
}), u([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), u([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, i) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : l(2, 10, t) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return f([ 0, 1 ], t) || 0 === e && 1 === r ? 0 : 1;
}
}), u([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n) {
var r = e % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
}
}), u([ "sq" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 4 === t % 10 && 14 !== t % 100 ? 1 : 2;
}
}), u([ "sv" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 1, 2 ], t % 10) && !f([ 11, 12 ], e) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) || l(11, 99, t) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, i) ? 2 : 3;
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