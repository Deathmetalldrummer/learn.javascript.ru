var coursesFrontpage = function(e) {
var t = {};
function i(r) {
if (t[r]) return t[r].exports;
var s = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
}
return i.m = e, i.c = t, i.d = function(e, t, r) {
i.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: r
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
var r = Object.create(null);
if (i.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var s in e) i.d(r, s, function(t) {
return e[t];
}.bind(null, s));
return r;
}, i.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return i.d(t, "a", t), t;
}, i.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, i.p = "/pack/", i(i.s = 388);
}({
113: function(e, t, i) {
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
388: function(e, t, i) {
"use strict";
let r = i(113);
!function() {
let e = document.querySelector("[data-participants-slider]"), t = e.querySelector("ul"), i = e.querySelector(".participants-logos__arr_left"), r = e.querySelector(".participants-logos__arr_right"), s = 0;
function n() {
t.style.transform = `translateX(${-s}px)`, 0 === s ? e.classList.add("participants-logos__slider_disable_left") : e.classList.remove("participants-logos__slider_disable_left"), 
s == t.scrollWidth - t.clientWidth ? e.classList.add("participants-logos__slider_disable_right") : e.classList.remove("participants-logos__slider_disable_right");
}
n(), i.onclick = function() {
(s -= t.clientWidth) < 0 && (s = 0), n();
}, r.onclick = function() {
s = Math.min(s + t.clientWidth, t.scrollWidth - t.clientWidth), n();
};
}(), document.querySelector(".courses-feedback-inline") && new r({
elem: document.querySelector(".courses-feedback-inline")
});
}
});