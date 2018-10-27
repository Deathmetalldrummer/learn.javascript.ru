var coursesFrontpage = webpackJsonp_name_([ 18 ], {
0: function(i, e, t) {
"use strict";
function s() {
function i() {
t.style.transform = "translateX(" + -r + "px)", 0 === r ? e.classList.add("participants-logos__slider_disable_left") : e.classList.remove("participants-logos__slider_disable_left"), 
r == t.scrollWidth - t.clientWidth ? e.classList.add("participants-logos__slider_disable_right") : e.classList.remove("participants-logos__slider_disable_right");
}
var e = document.querySelector("[data-participants-slider]"), t = e.querySelector("ul"), s = e.querySelector(".participants-logos__arr_left"), n = e.querySelector(".participants-logos__arr_right"), r = 0;
i(), s.onclick = function() {
r -= t.clientWidth, r < 0 && (r = 0), i();
}, n.onclick = function() {
r = Math.min(r + t.clientWidth, t.scrollWidth - t.clientWidth), i();
};
}
var n = t(803);
s(), document.querySelector(".courses-feedback-inline") && new n({
elem: document.querySelector(".courses-feedback-inline")
});
},
803: function(i, e) {
"use strict";
function t(i, e) {
if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function");
}
var s = function() {
function i(i, e) {
for (var t = 0; t < e.length; t++) {
var s = e[t];
s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
Object.defineProperty(i, s.key, s);
}
}
return function(e, t, s) {
return t && i(e.prototype, t), s && i(e, s), e;
};
}();
i.exports = function() {
function i(e) {
var s = e.elem;
t(this, i), this.elem = s, this.list = s.querySelector(".courses-feedback-slides"), 
this.arrowLeft = s.querySelector(".courses-feedback-control_left"), this.arrowRight = s.querySelector(".courses-feedback-control_right"), 
this.pagination = s.querySelector(".courses-feedback-inline__pagination"), this.position = 0, 
this.arrowRight.onclick = this.next.bind(this), this.arrowLeft.onclick = this.prev.bind(this), 
this.pagination.onclick = this.onPaginationClick.bind(this);
}
return s(i, [ {
key: "onPaginationClick",
value: function(i) {
var e = i.target.closest("li");
e && (this.position = [].indexOf.call(this.pagination.children, e), this.render());
}
}, {
key: "next",
value: function() {
this.position++, this.render();
}
}, {
key: "prev",
value: function() {
this.position--, this.render();
}
}, {
key: "render",
value: function() {
this.list.style.transform = this.position ? "translate3d(-" + this.position + "00%,0,0)" : "";
var i = "courses-feedback-control_hidden";
0 === this.position ? this.arrowLeft.classList.add(i) : this.arrowLeft.classList.remove(i), 
this.position == this.list.children.length - 1 ? this.arrowRight.classList.add(i) : this.arrowRight.classList.remove(i);
var e = this.pagination.querySelector(".courses-feedback-inline__page_active");
e && e.classList.remove("courses-feedback-inline__page_active"), this.pagination.children[this.position].classList.add("courses-feedback-inline__page_active");
}
} ]), i;
}();
}
});
//# sourceMappingURL=coursesFrontpage.30bfc7bc47478d473464.js.map