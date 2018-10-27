var auth = webpackJsonp_name_([ 17, 2 ], {
0: function(t, e, n) {
"use strict";
function i() {
var t = new s(window.authOptions);
document.getElementById("auth-form").appendChild(t.getElem());
}
e.AuthModal = n(787);
var s = n(789);
i();
},
116: function(t, e) {},
157: function(t, e, n) {
var i = n(792);
t.exports = function(t) {
var e, n = [], s = {}, a = t || {};
return function(t, a, o) {
n.push(""), a || (a = []), s.b = e = function(e, i, s) {
this && this.block, this && this.attributes || {};
t.call(this, n, a, e, i, s);
}, s.e = e = function(t) {
var e = this && this.block, n = this && this.attributes || {};
s.b.call({
block: function() {
e && e();
},
attributes: i.merge([ n ])
}, t, !0);
}, s.b.call({
block: function() {
s.e.call({
block: function() {
o ? s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Вход в сайт");
},
attributes: {
class: "title"
}
}, "h4"), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("регистрация");
},
attributes: {
type: "button",
"data-switch": "register-form",
class: "button-link __register"
}
}, "button");
},
attributes: {
class: "header-aside"
}
});
},
attributes: {
class: "line __header"
}
}) : (n.push("<p>Если у вас еще нет аккаунта, вы можете&nbsp;"), s.e.call({
block: function() {
n.push("зарегистрироваться");
},
attributes: {
type: "button",
"data-switch": "register-form",
class: "button-link __register"
}
}, "button"), n.push("</p>")), s.e.call({
block: function() {
s.e.call({
attributes: {
"data-notification": !0,
class: "line __notification"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Email:");
},
attributes: {
for: "auth-email",
class: "label"
}
}, "label"), s.b.call({
block: function() {
s.e.call({
attributes: {
id: "auth-email",
name: "email",
type: "email",
autofocus: !0,
class: "control"
}
}, "input");
},
attributes: {
class: "text-input __input"
}
}, "span");
},
attributes: {
class: "line"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Пароль:");
},
attributes: {
for: "auth-password",
class: "label"
}
}, "label"), s.b.call({
block: function() {
s.e.call({
attributes: {
id: "auth-password",
type: "password",
name: "password",
class: "control"
}
}, "input"), s.e.call({
block: function() {
n.push("Забыли?");
},
attributes: {
type: "button",
"data-switch": "forgot-form",
class: "aside __forgot __button-link"
}
}, "button");
},
attributes: {
class: "text-input _with-aside __input"
}
}, "span");
},
attributes: {
class: "line"
}
}), s.e.call({
block: function() {
s.b.call({
block: function() {
s.e.call({
block: function() {
n.push("Войти");
},
attributes: {
class: "text"
}
}, "span");
},
attributes: {
type: "submit",
class: "button _action"
}
}, "button"), o && s.e.call({
block: function() {
n.push("Отмена");
},
attributes: {
class: "close-link tablet-only modal__close"
}
}, "a");
},
attributes: {
class: "line __footer"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Вход через социальные сети");
},
attributes: {
class: "social-logins-title"
}
}, "h5"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Facebook");
},
attributes: {
"data-provider": "facebook",
class: "social-login _facebook __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Google+");
},
attributes: {
"data-provider": "google",
class: "social-login _google __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Вконтакте");
},
attributes: {
"data-provider": "vkontakte",
class: "social-login _vkontakte __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Github");
},
attributes: {
"data-provider": "github",
class: "social-login _github __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Яндекс");
},
attributes: {
"data-provider": "yandex",
class: "social-login _yandex __social-login"
}
}, "button");
},
attributes: {
class: "line __social-logins"
}
});
},
attributes: {
class: "body"
}
});
},
attributes: {
action: "#",
class: "form"
}
}, "form");
},
attributes: {
"data-form": "login",
class: (e = [ !0 ], i.joinClasses([ [ "login-form", o ? "_modal" : "_inline" ] ].map(i.joinClasses).map(function(t, n) {
return e[n] ? i.escape(t) : t;
})))
}
});
}.call(this, "bem" in a ? a.bem : "undefined" != typeof bem ? bem : void 0, "bem_chain" in a ? a.bem_chain : "undefined" != typeof bem_chain ? bem_chain : void 0, "inModal" in a ? a.inModal : "undefined" != typeof inModal ? inModal : void 0), 
n.join("");
};
},
159: function(t, e, n) {
var i = n(792);
t.exports = function(t) {
var e, n = [], s = {}, a = t || {};
return function(t, a, o) {
n.push(""), a || (a = []), s.b = e = function(e, i, s) {
this && this.block, this && this.attributes || {};
t.call(this, n, a, e, i, s);
}, s.e = e = function(t) {
var e = this && this.block, n = this && this.attributes || {};
s.b.call({
block: function() {
e && e();
},
attributes: i.merge([ n ])
}, t, !0);
}, s.b.call({
block: function() {
s.e.call({
block: function() {
o ? s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Регистрация");
},
attributes: {
class: "title"
}
}, "h4"), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("вход");
},
attributes: {
type: "button",
"data-switch": "login-form",
class: "button-link"
}
}, "button");
},
attributes: {
class: "header-aside"
}
});
},
attributes: {
class: "line __header"
}
}) : (n.push("<p>Если у вас уже есть аккаунт, вы можете&nbsp;"), s.e.call({
block: function() {
n.push("войти");
},
attributes: {
type: "button",
"data-switch": "login-form",
class: "button-link"
}
}, "button"), n.push("</p>")), s.e.call({
block: function() {
s.e.call({
attributes: {
"data-notification": !0,
class: "line __notification"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Email:");
},
attributes: {
for: "register-email",
class: "label"
}
}, "label"), s.b.call({
block: function() {
s.e.call({
attributes: {
id: "register-email",
name: "email",
type: "email",
required: !0,
autofocus: !0,
class: "control"
}
}, "input");
},
attributes: {
class: "text-input __input"
}
}, "span");
},
attributes: {
class: "line"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Имя пользователя:");
},
attributes: {
for: "register-displayName",
class: "label"
}
}, "label"), s.b.call({
block: function() {
s.e.call({
attributes: {
id: "register-displayName",
name: "displayName",
required: !0,
class: "control"
}
}, "input");
},
attributes: {
class: "text-input __input"
}
}, "span");
},
attributes: {
class: "line"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Пароль:");
},
attributes: {
for: "register-password",
class: "label"
}
}, "label"), s.b.call({
block: function() {
s.e.call({
attributes: {
id: "register-password",
type: "password",
name: "password",
required: !0,
minlength: "4",
class: "control"
}
}, "input");
},
attributes: {
class: "text-input __input"
}
}, "span");
},
attributes: {
class: "line"
}
}), s.e.call({
block: function() {
s.e.call({
attributes: {
class: "recaptcha"
}
});
},
attributes: {
class: "line"
}
}), s.e.call({
block: function() {
s.b.call({
block: function() {
s.e.call({
block: function() {
n.push("Зарегистрироваться");
},
attributes: {
class: "text"
}
}, "span");
},
attributes: {
type: "submit",
class: "button _action submit"
}
}, "button"), o && s.e.call({
block: function() {
n.push("Отмена");
},
attributes: {
class: "close-link tablet-only modal__close"
}
}, "a");
},
attributes: {
class: "line __footer"
}
}), s.e.call({
block: function() {
n.push("Регистрируясь, вы принимаете" + i.escape(null == (e = " ") ? "" : e) + '<a href="/agreement">пользовательское соглашение</a>.');
},
attributes: {
class: "line __agreement"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Вход через социальные сети");
},
attributes: {
class: "social-logins-title"
}
}, "h5"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Facebook");
},
attributes: {
"data-provider": "facebook",
class: "social-login _facebook __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Google+");
},
attributes: {
"data-provider": "google",
class: "social-login _google __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Вконтакте");
},
attributes: {
"data-provider": "vkontakte",
class: "social-login _vkontakte __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Github");
},
attributes: {
"data-provider": "github",
class: "social-login _github __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Яндекс");
},
attributes: {
"data-provider": "yandex",
class: "social-login _yandex __social-login"
}
}, "button");
},
attributes: {
class: "line __social-logins"
}
});
},
attributes: {
class: "body"
}
});
},
attributes: {
action: "#",
"data-form": "register",
class: "form"
}
}, "form");
},
attributes: {
class: (e = [ !0 ], i.joinClasses([ [ "login-form", o ? "_modal" : "_inline" ] ].map(i.joinClasses).map(function(t, n) {
return e[n] ? i.escape(t) : t;
})))
}
});
}.call(this, "bem" in a ? a.bem : "undefined" != typeof bem ? bem : void 0, "bem_chain" in a ? a.bem_chain : "undefined" != typeof bem_chain ? bem_chain : void 0, "inModal" in a ? a.inModal : "undefined" != typeof inModal ? inModal : void 0), 
n.join("");
};
},
160: function(t, e, n) {
var i = n(792);
t.exports = function(t) {
var e, n = [], s = {}, a = t || {};
return function(t, a, o) {
n.push(""), a || (a = []), s.b = e = function(e, i, s) {
this && this.block, this && this.attributes || {};
t.call(this, n, a, e, i, s);
}, s.e = e = function(t) {
var e = this && this.block, n = this && this.attributes || {};
s.b.call({
block: function() {
e && e();
},
attributes: i.merge([ n ])
}, t, !0);
}, s.b.call({
block: function() {
s.e.call({
block: function() {
o ? s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Восстановление пароля");
},
attributes: {
class: "title"
}
}, "h4");
},
attributes: {
class: "line __header"
}
}) : (n.push("<p>Если у вас еще нет аккаунта, вы можете&nbsp;"), s.e.call({
block: function() {
n.push("зарегистрироваться");
},
attributes: {
type: "button",
"data-switch": "register-form",
class: "button-link __register"
}
}, "button"), n.push("</p>")), s.e.call({
block: function() {
s.e.call({
attributes: {
"data-notification": !0,
class: "line __notification"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Email:");
},
attributes: {
for: "forgot-email",
class: "label"
}
}, "label"), s.b.call({
block: function() {
s.e.call({
attributes: {
id: "forgot-email",
name: "email",
type: "email",
autofocus: !0,
class: "control"
}
}, "input");
},
attributes: {
class: "text-input __input"
}
}, "span");
},
attributes: {
class: "line"
}
}), s.e.call({
block: function() {
s.e.call({
attributes: {
class: "recaptcha"
}
});
},
attributes: {
class: "line"
}
}), s.e.call({
block: function() {
s.b.call({
block: function() {
s.e.call({
block: function() {
n.push("Восстановить пароль");
},
attributes: {
class: "text"
}
}, "span");
},
attributes: {
type: "submit",
class: "button _action __submit"
}
}, "button");
},
attributes: {
class: "line"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Вход");
},
attributes: {
type: "button",
"data-switch": "login-form",
class: "button-link"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.e.call({
block: function() {
n.push("/");
},
attributes: {
class: "separator"
}
}, "span"), n.push(i.escape(null == (e = " ") ? "" : e)), s.e.call({
block: function() {
n.push("Регистрация");
},
attributes: {
"data-switch": "register-form",
class: "button-link"
}
}, "button"), o && s.e.call({
block: function() {
n.push("Отмена");
},
attributes: {
class: "close-link tablet-only modal__close"
}
}, "a");
},
attributes: {
class: "line __footer"
}
}), s.e.call({
block: function() {
s.e.call({
block: function() {
n.push("Вход через социальные сети");
},
attributes: {
class: "social-logins-title"
}
}, "h5"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Facebook");
},
attributes: {
"data-provider": "facebook",
class: "social-login _facebook __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Google+");
},
attributes: {
"data-provider": "google",
class: "social-login _google __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Вконтакте");
},
attributes: {
"data-provider": "vkontakte",
class: "social-login _vkontakte __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Github");
},
attributes: {
"data-provider": "github",
class: "social-login _github __social-login"
}
}, "button"), n.push(i.escape(null == (e = " ") ? "" : e)), s.b.call({
block: function() {
n.push("Яндекс");
},
attributes: {
"data-provider": "yandex",
class: "social-login _yandex __social-login"
}
}, "button");
},
attributes: {
class: "line __social-logins"
}
});
},
attributes: {
class: "body"
}
});
},
attributes: {
action: "#",
"data-form": "forgot",
class: "form"
}
}, "form");
},
attributes: {
class: (e = [ !0 ], i.joinClasses([ [ "login-form", o ? "_modal" : "_inline" ] ].map(i.joinClasses).map(function(t, n) {
return e[n] ? i.escape(t) : t;
})))
}
});
}.call(this, "bem" in a ? a.bem : "undefined" != typeof bem ? bem : void 0, "bem_chain" in a ? a.bem_chain : "undefined" != typeof bem_chain ? bem_chain : void 0, "inModal" in a ? a.inModal : "undefined" != typeof inModal ? inModal : void 0), 
n.join("");
};
},
787: function(t, e, n) {
"use strict";
function i(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function s(t, e) {
if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function a(t, e) {
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
var o = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
return n && t(e.prototype, n), i && t(e, i), e;
};
}(), l = function t(e, n, i) {
null === e && (e = Function.prototype);
var s = Object.getOwnPropertyDescriptor(e, n);
if (void 0 === s) {
var a = Object.getPrototypeOf(e);
return null === a ? void 0 : t(a, n, i);
}
if ("value" in s) return s.value;
var o = s.get;
if (void 0 !== o) return o.call(i);
}, r = n(788), c = n(789), u = function(t) {
function e(t) {
i(this, e);
var n = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
n.options = t || {}, n.options.inModal = !0;
var a = new c(n.options);
return n.setContent(a.getElem()), n;
}
return a(e, t), o(e, [ {
key: "render",
value: function() {
l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "render", this).call(this), 
this.elem.classList.add("login-form-modal");
}
} ]), e;
}(r);
t.exports = u;
},
789: function(t, e, n) {
"use strict";
function i(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
var s = function() {
function t(t, e) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
Object.defineProperty(t, i.key, i);
}
}
return function(e, n, i) {
return n && t(e.prototype, n), i && t(e, i), e;
};
}(), a = n(790), o = n(783), l = n(785), r = n(157), c = n(159), u = n(160), b = n(793), f = (n(782), 
function() {
function t(e) {
i(this, t), this.options = e, e.successRedirect || (e.successRedirect = window.location.href);
}
return s(t, [ {
key: "render",
value: function() {
this.elem = document.createElement("div"), this.elem.innerHTML = b(r, this.options), 
this.options.message && this.showFormMessage(this.options.message), this.initEventHandlers();
}
}, {
key: "getElem",
value: function() {
return this.elem || this.render(), this.elem;
}
}, {
key: "successRedirect",
value: function() {
window.location.href == this.options.successRedirect ? window.location.reload() : window.location.href = this.options.successRedirect;
}
}, {
key: "clearFormMessages",
value: function() {
[].forEach.call(this.elem.querySelectorAll(".text-input_invalid"), function(t) {
t.classList.remove("text-input_invalid");
}), [].forEach.call(this.elem.querySelectorAll(".text-input__err"), function(t) {
t.remove();
}), this.elem.querySelector("[data-notification]").innerHTML = "";
}
}, {
key: "request",
value: function t(e) {
var t = a(e);
return t.addEventListener("loadstart", function() {
var e = this.startRequestIndication();
t.addEventListener("loadend", e);
}.bind(this)), t;
}
}, {
key: "startRequestIndication",
value: function() {
this.elem.classList.add("modal-overlay_light");
var t = this, e = this.elem.querySelector('[type="submit"]');
if (e) {
var n = new l({
elem: e,
size: "small",
class: "",
elemClass: "button_loading"
});
n.start();
}
return function() {
t.elem.classList.remove("modal-overlay_light"), n && n.stop();
};
}
}, {
key: "initEventHandlers",
value: function() {
this.delegate('[data-switch="register-form"]', "click", function(t) {
t.preventDefault(), this.elem.innerHTML = b(c, this.options);
}), this.delegate('[data-switch="login-form"]', "click", function(t) {
t.preventDefault(), this.elem.innerHTML = b(r, this.options);
}), this.delegate('[data-switch="forgot-form"]', "click", function(t) {
t.preventDefault();
var e = this.elem.querySelector('[type="email"]');
this.elem.innerHTML = b(u, this.options);
var n = this.elem.querySelector('[type="email"]');
n.value = e.value;
}), this.delegate('[data-form="login"]', "submit", function(t) {
t.preventDefault(), this.submitLoginForm(t.target);
}), this.delegate('[data-form="register"]', "submit", function(t) {
t.preventDefault(), this.submitRegisterForm(t.target);
}), this.delegate('[data-form="forgot"]', "submit", function(t) {
t.preventDefault(), this.submitForgotForm(t.target);
}), this.delegate("[data-provider]", "click", function(t) {
t.preventDefault(), this.openAuthPopup("/auth/login/" + t.delegateTarget.dataset.provider);
}), this.delegate("[data-action-verify-email]", "click", function(t) {
t.preventDefault();
var e = new FormData(), n = t.delegateTarget.dataset.actionVerifyEmail;
e.append("email", n);
var i = this.request({
method: "POST",
url: "/auth/reverify",
body: e
}), s = this;
i.addEventListener("success", function(t) {
200 == this.status ? s.showFormMessage({
html: "\n            <p>Письмо-подтверждение отправлено ещё раз.</p>\n            <p><a href='#' data-action-verify-email='" + n + "'>перезапросить подтверждение.</a></p>\n            ",
type: "success"
}) : s.showFormMessage({
type: "error",
html: t.result
});
});
});
}
}, {
key: "submitRegisterForm",
value: function(t) {
this.clearFormMessages();
var e = !1;
if (t.elements.email.value || (e = !0, this.showInputError(t.elements.email, "Введите, пожалуста, email.")), 
t.elements.displayName.value || (e = !0, this.showInputError(t.elements.displayName, "Введите, пожалуста, имя пользователя.")), 
t.elements.password.value || (e = !0, this.showInputError(t.elements.password, "Введите, пожалуста, пароль.")), 
!e) {
var n = new FormData(t);
n.append("successRedirect", this.options.successRedirect);
var i = this.request({
method: "POST",
url: "/auth/register",
normalStatuses: [ 201, 400 ],
body: n
}), s = this;
i.addEventListener("success", function(e) {
if (201 == this.status) return s.elem.innerHTML = b(r, s.options), void s.showFormMessage({
html: "<p>С адреса notify@javascript.ru отправлено письмо со ссылкой-подтверждением.</p><p><a href='#' data-action-verify-email='" + t.elements.email.value + "'>перезапросить подтверждение.</a></p>",
type: "success"
});
if (400 != this.status) s.showFormMessage({
html: "Неизвестный статус ответа сервера",
type: "error"
}); else for (var n in e.result.errors) s.showInputError(t.elements[n], e.result.errors[n]);
});
}
}
}, {
key: "submitForgotForm",
value: function(t) {
this.clearFormMessages();
var e = !1;
if (t.elements.email.value || (e = !0, this.showInputError(t.elements.email, "Введите, пожалуста, email.")), 
!e) {
var n = new FormData(t);
n.append("successRedirect", this.options.successRedirect);
var i = this.request({
method: "POST",
url: "/auth/forgot",
normalStatuses: [ 200, 404, 403 ],
body: n
}), s = this;
i.addEventListener("success", function(t) {
200 == this.status ? (s.elem.innerHTML = b(r, s.options), s.showFormMessage({
html: t.result,
type: "success"
})) : 404 == this.status ? s.showFormMessage({
html: t.result,
type: "error"
}) : 403 == this.status && s.showFormMessage({
html: t.result.message || "Действие запрещено.",
type: "error"
});
});
}
}
}, {
key: "showInputError",
value: function(t, e) {
t.parentNode.classList.add("text-input_invalid");
var n = document.createElement("span");
n.className = "text-input__err", n.innerHTML = e, t.parentNode.appendChild(n);
}
}, {
key: "showFormMessage",
value: function(t) {
var e = t.html;
0 !== e.indexOf("<p>") && (e = "<p>" + e + "</p>");
var n = t.type;
if ([ "info", "error", "warning", "success" ].indexOf(n) == -1) throw Error("Unsupported type: " + n);
var i = document.createElement("div");
i.className = "login-form__" + n, i.innerHTML = e, this.elem.querySelector("[data-notification]").innerHTML = "", 
this.elem.querySelector("[data-notification]").appendChild(i);
}
}, {
key: "submitLoginForm",
value: function(t) {
var e = this;
this.clearFormMessages();
var n = !1;
if (t.elements.email.value || (n = !0, this.showInputError(t.elements.email, "Введите, пожалуста, email.")), 
t.elements.password.value || (n = !0, this.showInputError(t.elements.password, "Введите, пожалуста, пароль.")), 
!n) {
var i = a({
method: "POST",
url: "/auth/login/local",
noDocumentEvents: !0,
normalStatuses: [ 200, 401 ],
body: new FormData(t)
}), s = this.startRequestIndication();
i.addEventListener("success", function(t) {
return 401 == i.status ? (s(), void e.onAuthFailure(t.result.message)) : void (e.options.callback ? (s(), 
e.onAuthSuccess(t.result.user)) : e.onAuthSuccess(t.result.user));
}), i.addEventListener("fail", function(t) {
s(), e.onAuthFailure(t.reason);
});
}
}
}, {
key: "openAuthPopup",
value: function(t) {
this.authPopup && !this.authPopup.closed && this.authPopup.close();
var e = 800, n = 600, i = (window.outerHeight - n) / 2, s = (window.outerWidth - e) / 2;
window.authForm = this, this.authPopup = window.open(t, "authForm", "width=" + e + ",height=" + n + ",scrollbars=0,top=" + i + ",left=" + s);
}
}, {
key: "onAuthSuccess",
value: function(t) {
window.currentUser = t, this.options.callback ? this.options.callback() : this.successRedirect();
}
}, {
key: "onAuthFailure",
value: function(t) {
this.showFormMessage({
html: t || "Отказ в авторизации.",
type: "error"
});
}
} ]), t;
}());
o.delegateMixin(f.prototype), t.exports = f;
},
790: function(t, e, n) {
"use strict";
function i(t) {
function e(t, e) {
var n = new CustomEvent(t);
return n.originalEvent = e, n;
}
function n(t, n) {
var i = e("fail", n);
i.reason = t, s.dispatchEvent(i);
}
function i(t, n) {
var i = e("success", n);
i.result = t, s.dispatchEvent(i);
}
var s = new XMLHttpRequest(), o = t.method || "GET", l = t.body, r = t.url;
s.open(o, r, !t.sync), s.method = o;
var c = a();
c && !t.skipCsrf && s.setRequestHeader("X-XSRF-TOKEN", c), "[object Object]" == {}.toString.call(l) && (s.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
l = JSON.stringify(l)), t.noDocumentEvents || (s.addEventListener("loadstart", function(t) {
s.timeStart = Date.now();
var n = e("xhrstart", t);
document.dispatchEvent(n);
}), s.addEventListener("loadend", function(t) {
var n = e("xhrend", t);
document.dispatchEvent(n);
}), s.addEventListener("success", function(t) {
var n = e("xhrsuccess", t);
n.result = t.result, document.dispatchEvent(n);
}), s.addEventListener("fail", function(t) {
var n = e("xhrfail", t);
n.reason = t.reason, document.dispatchEvent(n);
})), t.raw || s.setRequestHeader("Accept", "application/json"), s.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var u = t.normalStatuses || [ 200 ];
return s.addEventListener("error", function(t) {
n("Ошибка связи с сервером.", t);
}), s.addEventListener("timeout", function(t) {
n("Превышено максимально допустимое время ожидания ответа от сервера.", t);
}), s.addEventListener("abort", function(t) {
n("Запрос был прерван.", t);
}), s.addEventListener("load", function(e) {
if (!s.status) return void n("Не получен ответ от сервера.", e);
if (u.indexOf(s.status) == -1) return void n("Ошибка на стороне сервера (код " + s.status + "), попытайтесь позднее.", e);
var a = s.responseText, o = s.getResponseHeader("Content-Type");
if (o.match(/^application\/json/) || t.json) try {
a = JSON.parse(a);
} catch (t) {
return void n("Некорректный формат ответа от сервера.", t);
}
i(a, e);
}), setTimeout(function() {
s.send(l);
}, 0), s;
}
var s = n(782), a = n(791);
document.addEventListener("xhrfail", function(t) {
new s.Error(t.reason);
}), t.exports = i;
},
791: function(t, e) {
"use strict";
t.exports = function() {
var t = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return t ? t[1] : null;
};
},
792: function(t, e, n) {
"use strict";
function i(t) {
return null != t && "" !== t;
}
function s(t) {
return (Array.isArray(t) ? t.map(s) : t && "object" === (void 0 === t ? "undefined" : l(t)) ? Object.keys(t).filter(function(e) {
return t[e];
}) : [ t ]).filter(i).join(" ");
}
function a(t) {
return r[t] || t;
}
function o(t) {
var e = (t + "").replace(c, a);
return e === "" + t ? t : e;
}
var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};
e.merge = function t(e, n) {
if (1 === arguments.length) {
for (var s = e[0], a = 1; a < e.length; a++) s = t(s, e[a]);
return s;
}
var o = e.class, l = n.class;
(o || l) && (o = o || [], l = l || [], Array.isArray(o) || (o = [ o ]), Array.isArray(l) || (l = [ l ]), 
e.class = o.concat(l).filter(i));
for (var r in n) "class" != r && (e[r] = n[r]);
return e;
}, e.joinClasses = s, e.cls = function(t, n) {
for (var i = [], a = 0; a < t.length; a++) n && n[a] ? i.push(e.escape(s([ t[a] ]))) : i.push(s(t[a]));
var o = s(i);
return o.length ? ' class="' + o + '"' : "";
}, e.style = function(t) {
return t && "object" === (void 0 === t ? "undefined" : l(t)) ? Object.keys(t).map(function(e) {
return e + ":" + t[e];
}).join(";") : t;
}, e.attr = function(t, n, i, s) {
return "style" === t && (n = e.style(n)), "boolean" == typeof n || null == n ? n ? " " + (s ? t : t + '="' + t + '"') : "" : 0 == t.indexOf("data") && "string" != typeof n ? (JSON.stringify(n).indexOf("&") !== -1, 
n && "function" == typeof n.toISOString, " " + t + "='" + JSON.stringify(n).replace(/'/g, "&apos;") + "'") : i ? (n && "function" == typeof n.toISOString, 
" " + t + '="' + e.escape(n) + '"') : (n && "function" == typeof n.toISOString, 
" " + t + '="' + n + '"');
}, e.attrs = function(t, n) {
var i = [], a = Object.keys(t);
if (a.length) for (var o = 0; o < a.length; ++o) {
var l = a[o], r = t[l];
"class" == l ? (r = s(r)) && i.push(" " + l + '="' + r + '"') : i.push(e.attr(l, r, !1, n));
}
return i.join("");
};
var r = {
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;"
}, c = /[&<>"]/g;
e.escape = o, e.rethrow = function t(e, i, s, a) {
if (!(e instanceof Error)) throw e;
if (!("undefined" == typeof window && i || a)) throw e.message += " on line " + s, 
e;
try {
a = a || n(116).readFileSync(i, "utf8");
} catch (n) {
t(e, null, s);
}
var o = 3, l = a.split("\n"), r = Math.max(s - o, 0), c = Math.min(l.length, s + o), o = l.slice(r, c).map(function(t, e) {
var n = e + r + 1;
return (n == s ? "  > " : "    ") + n + "| " + t;
}).join("\n");
throw e.path = i, e.message = (i || "Jade") + ":" + s + "\n" + o + "\n\n" + e.message, 
e;
}, e.DebugItem = function(t, e) {
this.lineno = t, this.filename = e;
};
},
793: function(t, e, n) {
"use strict";
function i(t) {
t.bem = s, t.t = l, t.thumb = a, t.lang = o;
}
var s = n(794)(), a = n(795).thumb, o = n(796).lang, l = n(797);
t.exports = function(t, e) {
return e = e ? Object.create(e) : {}, i(e), t(e);
};
},
794: function(t, e, n) {
"use strict";
var i = n(792);
t.exports = function(t) {
function e(t, e, n, s, a) {
var o = a || "div";
switch (o) {
case "img":
n.alt && !n.title && (n.title = ""), n.title && !n.alt && (n.alt = n.title), n.alt || (n.alt = "");
break;

case "input":
n.type || (n.type = "text");
break;

case "html":
t.push("<!DOCTYPE HTML>");
break;

case "a":
n.href || (n.href = "#");
}
t.push("<" + o + i.attrs(i.merge([ n ]), !0) + ">"), e && e(), [ "area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr" ].indexOf(o) == -1 && t.push("</" + o + ">");
}
return t = t || {}, t.prefix = t.prefix || "", t.element = t.element || "__", t.modifier = t.modifier || "_", 
function(n, i, s, a) {
var o = this.block, l = this.attributes || {};
if (!l.class && s && !a) throw Error("Block without class: " + s);
if (l.class) {
var r = l.class;
r instanceof Array && (r = r.join(" ")), r = r.split(" ");
var c;
try {
c = r[0].match(RegExp("^(((?!" + t.element + "|" + t.modifier + ").)+)"))[1];
} catch (t) {
throw Error("Incorrect bem class: " + r[0]);
}
a ? r[0] = i[i.length - 1] + t.element + r[0] : i[i.length] = c;
var u = (a ? i[i.length - 1] + t.element : "") + c;
r.indexOf(u) === -1 && (r[r.length] = u);
for (var b = 0; b < r.length; b++) {
var f = r[b];
f.match(RegExp("^(?!" + t.element + ")" + t.modifier)) ? r[b] = u + f : f.match(RegExp("^" + t.element)) && (i[i.length - 2] ? r[b] = i[i.length - 2] + f : r[b] = i[i.length - 1] + f), 
r[b].match(RegExp("^" + u + "($|(?=" + t.element + "|" + t.modifier + "))")) && (r[b] = t.prefix + r[b]);
}
l.class = r.sort().join(" ");
}
e(n, o, l, i, s), a || i.pop();
};
};
},
795: function(t, e) {
"use strict";
e.thumb = function(t, e, n) {
if (!t) return t;
var i = window.devicePixelRatio;
e *= i, n *= i;
var s = e <= 160 && n <= 160 ? "t" : e <= 320 && n <= 320 ? "m" : e <= 640 && n <= 640 ? "i" : e <= 1024 && n <= 1024 ? "h" : "";
return t.slice(0, t.lastIndexOf(".")) + s + t.slice(t.lastIndexOf("."));
};
}
});
//# sourceMappingURL=auth.30bfc7bc47478d473464.js.map