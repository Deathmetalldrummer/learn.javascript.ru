var profileGuestAboutMe = webpackJsonp_name_([ 22 ], {
0: function(t, e, n) {
"use strict";
function s() {
window.FEEDBACK_LIST_INIT && new r(window.FEEDBACK_LIST_INIT);
}
var r = n(809);
s();
},
790: function(t, e, n) {
"use strict";
function s(t) {
function e(t, e) {
var n = new CustomEvent(t);
return n.originalEvent = e, n;
}
function n(t, n) {
var s = e("fail", n);
s.reason = t, r.dispatchEvent(s);
}
function s(t, n) {
var s = e("success", n);
s.result = t, r.dispatchEvent(s);
}
var r = new XMLHttpRequest(), o = t.method || "GET", a = t.body, c = t.url;
r.open(o, c, !t.sync), r.method = o;
var u = i();
u && !t.skipCsrf && r.setRequestHeader("X-XSRF-TOKEN", u), "[object Object]" == {}.toString.call(a) && (r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
a = JSON.stringify(a)), t.noDocumentEvents || (r.addEventListener("loadstart", function(t) {
r.timeStart = Date.now();
var n = e("xhrstart", t);
document.dispatchEvent(n);
}), r.addEventListener("loadend", function(t) {
var n = e("xhrend", t);
document.dispatchEvent(n);
}), r.addEventListener("success", function(t) {
var n = e("xhrsuccess", t);
n.result = t.result, document.dispatchEvent(n);
}), r.addEventListener("fail", function(t) {
var n = e("xhrfail", t);
n.reason = t.reason, document.dispatchEvent(n);
})), t.raw || r.setRequestHeader("Accept", "application/json"), r.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var d = t.normalStatuses || [ 200 ];
return r.addEventListener("error", function(t) {
n("Ошибка связи с сервером.", t);
}), r.addEventListener("timeout", function(t) {
n("Превышено максимально допустимое время ожидания ответа от сервера.", t);
}), r.addEventListener("abort", function(t) {
n("Запрос был прерван.", t);
}), r.addEventListener("load", function(e) {
if (!r.status) return void n("Не получен ответ от сервера.", e);
if (d.indexOf(r.status) == -1) return void n("Ошибка на стороне сервера (код " + r.status + "), попытайтесь позднее.", e);
var i = r.responseText, o = r.getResponseHeader("Content-Type");
if (o.match(/^application\/json/) || t.json) try {
i = JSON.parse(i);
} catch (t) {
return void n("Некорректный формат ответа от сервера.", t);
}
s(i, e);
}), setTimeout(function() {
r.send(a);
}, 0), r;
}
var r = n(782), i = n(791);
document.addEventListener("xhrfail", function(t) {
new r.Error(t.reason);
}), t.exports = s;
},
791: function(t, e) {
"use strict";
t.exports = function() {
var t = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return t ? t[1] : null;
};
},
809: function(t, e, n) {
"use strict";
function s(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
var r = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var s = e[n];
s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
Object.defineProperty(t, s.key, s);
}
}
return function(e, n, s) {
return n && t(e.prototype, n), s && t(e, s), e;
};
}(), i = n(790), o = function() {
function t(e) {
var n = this, r = e.elem, i = e.filter;
s(this, t), this.elem = r, this.container = r.querySelector("[data-feedback-container]"), 
this.baseUrl = "/courses/feedback-fetch", this.reset(i), window.addEventListener("scroll", function(t) {
return n.onScroll(t);
});
}
return r(t, [ {
key: "reset",
value: function(t) {
this.filter = t, this.count = 0, this.total = null, this.hasMore = !0, this.container.innerHTML = "", 
this.load();
}
}, {
key: "onScroll",
value: function() {
this.hasMore && this.container.getBoundingClientRect().bottom <= document.documentElement.clientHeight && !this.isLoading && this.load();
}
}, {
key: "load",
value: function() {
var t = this, e = this.baseUrl + "?skip=" + this.count + "&needTotal=" + (null === this.total ? 1 : 0);
for (var n in this.filter) e += "&" + n + "=" + this.filter[n];
var s = i({
method: "GET",
json: !0,
url: e
});
this.elem.classList.add("course-feedbacks_loading"), this.isLoading = !0, s.addEventListener("loadend", function() {
t.isLoading = !1, t.elem.classList.remove("course-feedbacks_loading");
}), s.addEventListener("success", function(e) {
void 0 !== e.result.total && (t.total = e.result.total), e.result.count ? (t.container.insertAdjacentHTML("beforeEnd", e.result.html), 
t.count += e.result.count) : t.count || (t.container.innerHTML = '<p style="text-align:center">Отзывов пока нет.</p>'), 
e.result.hasMore === !1 && (t.hasMore = !1), t.elem.dispatchEvent(new CustomEvent("feedbackChange", {
bubbles: !0,
detail: {
loader: t
}
}));
});
}
} ]), t;
}();
t.exports = o;
}
});
//# sourceMappingURL=profileGuestAboutMe.30bfc7bc47478d473464.js.map