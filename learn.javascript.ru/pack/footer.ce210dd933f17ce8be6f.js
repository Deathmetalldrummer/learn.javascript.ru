var footer = function(e) {
var t = {};
function n(o) {
if (t[o]) return t[o].exports;
var i = t[o] = {
i: o,
l: !1,
exports: {}
};
return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
}
return n.m = e, n.c = t, n.d = function(e, t, o) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: o
});
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, n.t = function(e, t) {
if (1 & t && (e = n(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var o = Object.create(null);
if (n.r(o), Object.defineProperty(o, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function(t) {
return e[t];
}.bind(null, i));
return o;
}, n.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "/pack/", n(n.s = 316);
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
106: function(e, t, n) {
"use strict";
function o(e) {
let t = document.createElement("div"), n = getComputedStyle(e);
return t.style.width = e.offsetWidth + "px", t.style.marginLeft = n.marginLeft, 
t.style.marginRight = n.marginRight, t.style.position = n.position, t.style.height = e.offsetHeight + "px", 
t.style.marginBottom = n.marginBottom, t.style.marginTop = n.marginTop, t;
}
e.exports = function() {
let e = document.querySelectorAll("[data-sticky]");
for (let t = 0; t < e.length; t++) {
let n = e[t], i = n.dataset.sticky ? JSON.parse(n.dataset.sticky) : {}, r = i.bottomLimit ? document.querySelector(i.bottomLimit) : null, l = i.container ? document.querySelector(i.container) : document.body, s = !i.minWidth || document.documentElement.clientWidth > i.minWidth;
if (n.placeholder) (n.placeholder.getBoundingClientRect().top > 0 || !s) && (n.style.cssText = "", 
n.classList.remove("sticky"), n.placeholder.parentNode.insertBefore(n, n.placeholder), 
n.placeholder.remove(), n.placeholder = null); else if (n.placeholder && r) r.getBoundingClientRect().top <= n.offsetHeight ? ("fixed" == n.style.position && (n.style.top = window.pageYOffset + "px"), 
n.style.position = "absolute") : (n.style.position = "fixed", n.style.top = 0); else if (n.getBoundingClientRect().top < 0 && s) {
if (n.style.cssText) return;
let e = n.getBoundingClientRect().left, t = i.noPlaceholder ? document.createElement("div") : o(n), r = n.offsetWidth;
n.after(t), l.appendChild(n), n.classList.add("sticky"), n.style.position = "fixed", 
n.style.top = 0, n.style.left = e + "px", n.style.zIndex = 101, n.style.background = "white", 
n.style.margin = 0, n.style.width = r + "px", n.placeholder = t;
}
}
};
},
316: function(e, t, n) {
"use strict";
let o = n(317), i = n(319), r = n(106), l = n(0).lang, s = n(0).currency;
!function() {
o(), window.devicePixelRatio > 1 && i(), window.addEventListener("scroll", r), window.addEventListener("resize", r), 
r();
let e = document.querySelectorAll(".auto-currency");
for (let t = 0; t < e.length; t++) {
let n = e[t];
if ("ru" === l) {
let e = Math.round(parseInt(n.innerHTML) / window.rateUsdToNative);
n.insertAdjacentHTML("beforeEnd", `<span class="auto-currency__usd">(≈$${e})</span>`);
} else if ("USD" !== s.code) {
let e = Math.round(window.rateUsdToNative / parseInt(n.innerHTML));
n.insertAdjacentHTML("beforeEnd", `<span class="auto-currency__usd">(≈${e}${s.sign})</span>`);
}
}
}();
},
317: function(e, t, n) {
"use strict";
let o = n(318);
e.exports = function() {
let e = null, t = 8, n = 10;
function i(o) {
let i = o.clientX + t;
i + e.offsetWidth > document.documentElement.clientWidth && (i = Math.max(0, o.clientX - t - e.offsetWidth)), 
e.style.left = i + "px";
let r = o.clientY + n;
r + e.offsetHeight > document.documentElement.clientHeight && (r = Math.max(0, o.clientY - n - e.offsetHeight)), 
e.style.top = r + "px";
}
o("a,[data-tooltip]", function(t) {
if (!t.target.closest) return;
let n = t.target.closest("a, [data-tooltip]");
n && ("A" == n.tagName && n.closest(".toolbar") || n.classList.contains("button") || ((e = document.createElement("span")).className = "link__type", 
n.getAttribute("data-tooltip") ? e.setAttribute("data-tooltip", n.getAttribute("data-tooltip")) : e.setAttribute("data-url", n.getAttribute("href")), 
document.body.appendChild(e), i(t), document.addEventListener("mousemove", i)));
}, function() {
e && (document.removeEventListener("mousemove", i), e.remove(), e = null);
});
};
},
318: function(e, t, n) {
"use strict";
let o, i, r = 1 / 0, l = 1 / 0, s = Date.now(), a = .2, c = {};
document.addEventListener("mousemove", function(e) {
if (i) return;
if (Math.sqrt(Math.pow(e.pageX - r, 2) + Math.pow(e.pageY - l, 2)) / (Date.now() - s) < a) {
let t = document.elementFromPoint(e.clientX, e.clientY);
if (!t) return;
if (t != o) {
for (let n in c) {
let o = t.closest(n);
o && (i = {
elem: o,
out: c[n].out
}, c[n].over(e));
}
o = t;
}
}
r = e.pageX, l = e.pageY, s = Date.now();
}), document.addEventListener("mouseout", function(e) {
if (!i) return;
let t = e.relatedTarget;
for (;t; ) {
if (t == i.elem) return;
t = t.parentElement;
}
let n = i.out;
i = null, n(e);
}), e.exports = function(e, t, n) {
c[e] = {
over: t,
out: n
};
};
},
319: function(e, t, n) {
"use strict";
e.exports = function() {
let e = document.querySelectorAll('figure img[src$=".png"]');
for (let t = 0; t < e.length; t++) {
let n = e[t];
n.onload = function() {
if (this.onload = null, this.src.match(/@2x.png$/)) return;
let e = new Image();
e.onload = function() {
this.width && this.height && (n.src = this.src);
}, e.src = this.src.replace(".png", "@2x.png");
}, n.complete && n.onload();
}
};
}
});