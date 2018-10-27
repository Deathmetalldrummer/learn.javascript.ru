var donate = webpackJsonp_name_([ 24 ], {
0: function(e, t, n) {
"use strict";
function r() {
var e = document.querySelector("[data-order-form]");
e && new a({
elem: e
});
}
var a = n(816);
r();
},
790: function(e, t, n) {
"use strict";
function r(e) {
function t(e, t) {
var n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function n(e, n) {
var r = t("fail", n);
r.reason = e, a.dispatchEvent(r);
}
function r(e, n) {
var r = t("success", n);
r.result = e, a.dispatchEvent(r);
}
var a = new XMLHttpRequest(), i = e.method || "GET", s = e.body, u = e.url;
a.open(i, u, !e.sync), a.method = i;
var c = o();
c && !e.skipCsrf && a.setRequestHeader("X-XSRF-TOKEN", c), "[object Object]" == {}.toString.call(s) && (a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
s = JSON.stringify(s)), e.noDocumentEvents || (a.addEventListener("loadstart", function(e) {
a.timeStart = Date.now();
var n = t("xhrstart", e);
document.dispatchEvent(n);
}), a.addEventListener("loadend", function(e) {
var n = t("xhrend", e);
document.dispatchEvent(n);
}), a.addEventListener("success", function(e) {
var n = t("xhrsuccess", e);
n.result = e.result, document.dispatchEvent(n);
}), a.addEventListener("fail", function(e) {
var n = t("xhrfail", e);
n.reason = e.reason, document.dispatchEvent(n);
})), e.raw || a.setRequestHeader("Accept", "application/json"), a.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var d = e.normalStatuses || [ 200 ];
return a.addEventListener("error", function(e) {
n("Ошибка связи с сервером.", e);
}), a.addEventListener("timeout", function(e) {
n("Превышено максимально допустимое время ожидания ответа от сервера.", e);
}), a.addEventListener("abort", function(e) {
n("Запрос был прерван.", e);
}), a.addEventListener("load", function(t) {
if (!a.status) return void n("Не получен ответ от сервера.", t);
if (d.indexOf(a.status) == -1) return void n("Ошибка на стороне сервера (код " + a.status + "), попытайтесь позднее.", t);
var o = a.responseText, i = a.getResponseHeader("Content-Type");
if (i.match(/^application\/json/) || e.json) try {
o = JSON.parse(o);
} catch (e) {
return void n("Некорректный формат ответа от сервера.", e);
}
r(o, t);
}), setTimeout(function() {
a.send(s);
}, 0), a;
}
var a = n(782), o = n(791);
document.addEventListener("xhrfail", function(e) {
new a.Error(e.reason);
}), e.exports = r;
},
791: function(e, t) {
"use strict";
e.exports = function() {
var e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
812: function(e, t, n) {
"use strict";
t.FormPayment = n(813);
},
813: function(e, t, n) {
"use strict";
function r(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
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
}(), o = n(782), i = n(790), s = n(785), u = (n(788), function() {
function e(t, n) {
r(this, e), this.orderForm = t, this.paymentMethodElem = n;
}
return a(e, [ {
key: "request",
value: function e(t) {
var e = i(t);
return e.addEventListener("loadstart", function() {
var t = this.startRequestIndication();
e.addEventListener("loadend", t);
}.bind(this)), e;
}
}, {
key: "startRequestIndication",
value: function() {
var e = this;
this.paymentMethodElem.classList.add("modal-overlay_light");
var t = new s({
elem: this.paymentMethodElem.querySelector('[type="submit"]'),
size: "small",
class: "",
elemClass: "button_loading"
});
return t.start(), function() {
e.paymentMethodElem.classList.remove("modal-overlay_light"), t && t.stop();
};
}
}, {
key: "readPaymentData",
value: function() {
var e = {};
return [].forEach.call(this.paymentMethodElem.querySelectorAll("input,select,textarea"), function(t) {
("radio" != t.type && "checkbox" != t.type || t.checked) && (e[t.name] = t.value);
}), e;
}
}, {
key: "submit",
value: function() {
var e = this, t = this.orderForm.getOrderData();
if (t) {
var n = this.readPaymentData();
if (!n.paymentMethod) return void new o.Error("Выберите метод оплаты.");
if ("invoice" == n.paymentMethod && !n.invoiceCompanyName) return new o.Error("Укажите название компании."), 
void this.paymentMethodElem.querySelector('[name="invoiceCompanyName"]').focus();
for (var r in n) t[r] = n[r];
var a = window.location.search.match(/[?&]code=([-\w]+)/);
a && (t.discountCode = a[1]);
var s = i({
method: "POST",
url: "/payments/common/checkout",
normalStatuses: [ 200, 403, 400 ],
body: t
});
t.orderTemplate && window.ga("ec:addProduct", {
id: this.orderForm.product,
variant: t.orderTemplate,
price: t.amount,
quantity: 1
}), window.ga("ec:setAction", "checkout", {
step: 1,
option: t.paymentMethod
}), window.metrika.reachGoal("CHECKOUT", {
product: this.orderForm.product,
method: t.paymentMethod,
price: t.amount
}), window.ga("send", "event", "payment", "checkout", "ebook"), window.ga("send", "event", "payment", "checkout-method-" + t.paymentMethod, this.orderForm.product);
var u = this.startRequestIndication();
s.addEventListener("success", function(n) {
if (403 == s.status) return new o.Error("<p>" + (n.result.description || n.result.message) + "</p><p>Пожалуйста, начните оформление заново.</p><p>Если вы считаете, что на сервере ошибка – свяжитесь со <a href='mailto:orders@javascript.ru'>службой поддержки</a>.</p>"), 
void u();
if (400 == s.status) return new o.Error("<p>" + n.result.message + "</p><p>Если вы считаете, что произошла ошибка &mdash; свяжитесь со <a href='mailto:orders@javascript.ru'>службой поддержки</a>.</p>"), 
void u();
var r = n.result;
if (r.form) {
window.ga("ec:setAction", "purchase", {
id: r.orderNumber
});
var a = document.createElement("div");
a.hidden = !0, a.innerHTML = r.form, document.body.appendChild(a);
var i = function e() {
e.called || (e.called = !0, a.firstChild.submit());
};
window.ga("send", "event", "payment", "purchase", "ebook", {
hitCallback: i
}), setTimeout(i, 500), window.metrika.reachGoal("PURCHASE", {
product: e.orderForm.product,
method: t.paymentMethod,
price: t.amount,
number: r.orderNumber
});
} else u(), new o.Error("Ошибка на сервере, свяжитесь со <a href='mailto:orders@javascript.ru'>службой поддержки</a>.");
}), s.addEventListener("fail", u);
}
}
} ]), e;
}());
e.exports = u;
},
816: function(e, t, n) {
"use strict";
function r(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
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
}(), o = (n(790), n(782)), i = n(783), s = n(812).FormPayment, u = function() {
function e(t) {
var n = this;
r(this, e), this.elem = t.elem, this.product = "donate", this.elem.addEventListener("submit", function(e) {
return n.onSubmit(e);
}), this.delegate("[data-order-payment-change]", "click", function(e) {
e.preventDefault(), this.elem.querySelector("[data-order-form-step-payment]").style.display = "block", 
this.elem.querySelector("[data-order-form-step-confirm]").style.display = "none", 
this.elem.querySelector("[data-order-form-step-receipt]").style.display = "none";
}), this.delegate("[data-order-currency]", "change", function(e) {
e.delegateTarget.value;
});
}
return a(e, [ {
key: "onSubmit",
value: function(e) {
e.preventDefault(), new s(this, this.elem).submit();
}
}, {
key: "getOrderData",
value: function() {
var e = {};
if (window.orderNumber ? e.orderNumber = window.orderNumber : (e.orderTemplate = "webpack", 
e.amount = this.elem.amount.value, e.currency = this.elem.currency.value), this.elem.elements.email) {
if (!this.elem.elements.email.value) return window.ga("send", "event", "payment", "checkout-no-email", "donate"), 
window.metrika.reachGoal("CHECKOUT-NO-EMAIL", {
product: "donate"
}), new o.Error("Введите email."), this.elem.elements.email.scrollIntoView(), setTimeout(function() {
window.scrollBy(0, -200);
}, 0), void this.elem.elements.email.focus();
e.email = this.elem.elements.email.value;
}
return e;
}
} ]), e;
}();
i.delegateMixin(u.prototype), e.exports = u;
}
});
//# sourceMappingURL=donate.30bfc7bc47478d473464.js.map