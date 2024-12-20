function t(t) {
  return t && t.__esModule ? t.default : t;
}
var e =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : {};
var r = {};
function n() {}
(n.prototype = {
  on: function (t, e, r) {
    var n = this.e || (this.e = {});
    return (n[t] || (n[t] = [])).push({ fn: e, ctx: r }), this;
  },
  once: function (t, e, r) {
    var n = this;
    function i() {
      n.off(t, i), e.apply(r, arguments);
    }
    return (i._ = e), this.on(t, i, r);
  },
  emit: function (t) {
    for (
      var e = [].slice.call(arguments, 1),
        r = ((this.e || (this.e = {}))[t] || []).slice(),
        n = 0,
        i = r.length;
      n < i;
      n++
    )
      r[n].fn.apply(r[n].ctx, e);
    return this;
  },
  off: function (t, e) {
    var r = this.e || (this.e = {}),
      n = r[t],
      i = [];
    if (n && e)
      for (var o = 0, a = n.length; o < a; o++)
        n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
    return i.length ? (r[t] = i) : delete r[t], this;
  },
}),
  ((r = n).TinyEmitter = n);
var i = {};
function o(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function a(t, e, r) {
  return (
    e && o(t.prototype, e),
    r && o(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function s() {
  return (
    (s = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    s.apply(this, arguments)
  );
}
function u(t, e) {
  return (
    (u = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    u(t, e)
  );
}
function l(t, e) {
  var r = t % e;
  return ((e > 0 && r < 0) || (e < 0 && r > 0)) && (r += e), r;
}
i = (function () {
  var t = 0;
  function e(e) {
    return "__private_" + t++ + "_" + e;
  }
  function r(t, e) {
    if (!Object.prototype.hasOwnProperty.call(t, e))
      throw new TypeError("attempted to use private field on non-instance");
    return t;
  }
  function n() {}
  n.prototype = {
    on: function (t, e, r) {
      var n = this.e || (this.e = {});
      return (n[t] || (n[t] = [])).push({ fn: e, ctx: r }), this;
    },
    once: function (t, e, r) {
      var n = this;
      function i() {
        n.off(t, i), e.apply(r, arguments);
      }
      return (i._ = e), this.on(t, i, r);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          r = ((this.e || (this.e = {}))[t] || []).slice(),
          n = 0,
          i = r.length;
        n < i;
        n++
      )
        r[n].fn.apply(r[n].ctx, e);
      return this;
    },
    off: function (t, e) {
      var r = this.e || (this.e = {}),
        n = r[t],
        i = [];
      if (n && e)
        for (var o = 0, a = n.length; o < a; o++)
          n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
      return i.length ? (r[t] = i) : delete r[t], this;
    },
  };
  var i = n;
  i.TinyEmitter = n;
  var o,
    a = "virtualscroll",
    s = e("options"),
    u = e("el"),
    l = e("emitter"),
    c = e("event"),
    f = e("touchStart"),
    h = e("bodyTouchAction");
  return (function () {
    function t(t) {
      var e = this;
      Object.defineProperty(this, s, { writable: !0, value: void 0 }),
        Object.defineProperty(this, u, { writable: !0, value: void 0 }),
        Object.defineProperty(this, l, { writable: !0, value: void 0 }),
        Object.defineProperty(this, c, { writable: !0, value: void 0 }),
        Object.defineProperty(this, f, { writable: !0, value: void 0 }),
        Object.defineProperty(this, h, { writable: !0, value: void 0 }),
        (this._onWheel = function (t) {
          var n = r(e, s)[s],
            i = r(e, c)[c];
          (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
            (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
            o.isFirefox &&
              1 === t.deltaMode &&
              ((i.deltaX *= n.firefoxMultiplier),
              (i.deltaY *= n.firefoxMultiplier)),
            (i.deltaX *= n.mouseMultiplier),
            (i.deltaY *= n.mouseMultiplier),
            e._notify(t);
        }),
        (this._onMouseWheel = function (t) {
          var n = r(e, c)[c];
          (n.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
            (n.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
            e._notify(t);
        }),
        (this._onTouchStart = function (t) {
          var n = t.targetTouches ? t.targetTouches[0] : t;
          (r(e, f)[f].x = n.pageX), (r(e, f)[f].y = n.pageY);
        }),
        (this._onTouchMove = function (t) {
          var n = r(e, s)[s];
          n.preventTouch &&
            !t.target.classList.contains(n.unpreventTouchClass) &&
            t.preventDefault();
          var i = r(e, c)[c],
            o = t.targetTouches ? t.targetTouches[0] : t;
          (i.deltaX = (o.pageX - r(e, f)[f].x) * n.touchMultiplier),
            (i.deltaY = (o.pageY - r(e, f)[f].y) * n.touchMultiplier),
            (r(e, f)[f].x = o.pageX),
            (r(e, f)[f].y = o.pageY),
            e._notify(t);
        }),
        (this._onKeyDown = function (t) {
          var n = r(e, c)[c];
          n.deltaX = n.deltaY = 0;
          var i = window.innerHeight - 40;
          switch (t.keyCode) {
            case 37:
            case 38:
              n.deltaY = r(e, s)[s].keyStep;
              break;
            case 39:
            case 40:
              n.deltaY = -r(e, s)[s].keyStep;
              break;
            case 32:
              n.deltaY = i * (t.shiftKey ? 1 : -1);
              break;
            default:
              return;
          }
          e._notify(t);
        }),
        (r(this, u)[u] = window),
        t && t.el && ((r(this, u)[u] = t.el), delete t.el),
        o ||
          (o = {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch: "ontouchstart" in document,
            hasTouchWin:
              navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
          }),
        (r(this, s)[s] = Object.assign(
          {
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            useKeyboard: !0,
            useTouch: !0,
          },
          t
        )),
        (r(this, l)[l] = new i()),
        (r(this, c)[c] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
        (r(this, f)[f] = { x: null, y: null }),
        (r(this, h)[h] = null),
        void 0 !== r(this, s)[s].passive &&
          (this.listenerOptions = { passive: r(this, s)[s].passive });
    }
    var e = t.prototype;
    return (
      (e._notify = function (t) {
        var e = r(this, c)[c];
        (e.x += e.deltaX),
          (e.y += e.deltaY),
          r(this, l)[l].emit(a, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t,
          });
      }),
      (e._bind = function () {
        o.hasWheelEvent &&
          r(this, u)[u].addEventListener(
            "wheel",
            this._onWheel,
            this.listenerOptions
          ),
          o.hasMouseWheelEvent &&
            r(this, u)[u].addEventListener(
              "mousewheel",
              this._onMouseWheel,
              this.listenerOptions
            ),
          o.hasTouch &&
            r(this, s)[s].useTouch &&
            (r(this, u)[u].addEventListener(
              "touchstart",
              this._onTouchStart,
              this.listenerOptions
            ),
            r(this, u)[u].addEventListener(
              "touchmove",
              this._onTouchMove,
              this.listenerOptions
            )),
          o.hasPointer &&
            o.hasTouchWin &&
            ((r(this, h)[h] = document.body.style.msTouchAction),
            (document.body.style.msTouchAction = "none"),
            r(this, u)[u].addEventListener(
              "MSPointerDown",
              this._onTouchStart,
              !0
            ),
            r(this, u)[u].addEventListener(
              "MSPointerMove",
              this._onTouchMove,
              !0
            )),
          o.hasKeyDown &&
            r(this, s)[s].useKeyboard &&
            document.addEventListener("keydown", this._onKeyDown);
      }),
      (e._unbind = function () {
        o.hasWheelEvent &&
          r(this, u)[u].removeEventListener("wheel", this._onWheel),
          o.hasMouseWheelEvent &&
            r(this, u)[u].removeEventListener("mousewheel", this._onMouseWheel),
          o.hasTouch &&
            (r(this, u)[u].removeEventListener(
              "touchstart",
              this._onTouchStart
            ),
            r(this, u)[u].removeEventListener("touchmove", this._onTouchMove)),
          o.hasPointer &&
            o.hasTouchWin &&
            ((document.body.style.msTouchAction = r(this, h)[h]),
            r(this, u)[u].removeEventListener(
              "MSPointerDown",
              this._onTouchStart,
              !0
            ),
            r(this, u)[u].removeEventListener(
              "MSPointerMove",
              this._onTouchMove,
              !0
            )),
          o.hasKeyDown &&
            r(this, s)[s].useKeyboard &&
            document.removeEventListener("keydown", this._onKeyDown);
      }),
      (e.on = function (t, e) {
        r(this, l)[l].on(a, t, e);
        var n = r(this, l)[l].e;
        n && n[a] && 1 === n[a].length && this._bind();
      }),
      (e.off = function (t, e) {
        r(this, l)[l].off(a, t, e);
        var n = r(this, l)[l].e;
        (!n[a] || n[a].length <= 0) && this._unbind();
      }),
      (e.destroy = function () {
        r(this, l)[l].off(), this._unbind();
      }),
      t
    );
  })();
})();
var c = ["duration", "easing"],
  f = (function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.to = function (t, e) {
        var r = this,
          n = void 0 === e ? {} : e,
          i = n.duration,
          o = void 0 === i ? 1 : i,
          a = n.easing,
          u =
            void 0 === a
              ? function (t) {
                  return t;
                }
              : a,
          l = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              e.indexOf((r = o[n])) >= 0 || (i[r] = t[r]);
            return i;
          })(n, c);
        (this.target = t),
          (this.fromKeys = s({}, l)),
          (this.toKeys = s({}, l)),
          (this.keys = Object.keys(s({}, l))),
          this.keys.forEach(function (e) {
            r.fromKeys[e] = t[e];
          }),
          (this.duration = o),
          (this.easing = u),
          (this.currentTime = 0),
          (this.isRunning = !0);
      }),
      (e.stop = function () {
        this.isRunning = !1;
      }),
      (e.raf = function (t) {
        var e = this;
        if (this.isRunning) {
          this.currentTime = Math.min(this.currentTime + t, this.duration);
          var r = this.progress >= 1 ? 1 : this.easing(this.progress);
          this.keys.forEach(function (t) {
            var n = e.fromKeys[t];
            e.target[t] = n + (e.toKeys[t] - n) * r;
          }),
            1 === r && this.stop();
        }
      }),
      a(t, [
        {
          key: "progress",
          get: function () {
            return this.currentTime / this.duration;
          },
        },
      ]),
      t
    );
  })(),
  h = (function (e) {
    var r, n;
    function o(r) {
      var n,
        o,
        a,
        s,
        u = void 0 === r ? {} : r,
        l = u.duration,
        c = void 0 === l ? 1.2 : l,
        h = u.easing,
        p =
          void 0 === h
            ? function (t) {
                return Math.min(1, 1.001 - Math.pow(2, -10 * t));
              }
            : h,
        d = u.smooth,
        _ = void 0 === d || d,
        g = u.mouseMultiplier,
        v = void 0 === g ? 1 : g,
        m = u.smoothTouch,
        y = void 0 !== m && m,
        b = u.touchMultiplier,
        w = void 0 === b ? 2 : b,
        x = u.direction,
        T = void 0 === x ? "vertical" : x,
        O = u.gestureDirection,
        E = void 0 === O ? "vertical" : O,
        A = u.infinite,
        M = void 0 !== A && A,
        S = u.wrapper,
        k = void 0 === S ? window : S,
        P = u.content,
        R = void 0 === P ? document.body : P;
      ((s = e.call(this) || this).onWindowResize = function () {
        (s.wrapperWidth = window.innerWidth),
          (s.wrapperHeight = window.innerHeight);
      }),
        (s.onWrapperResize = function (t) {
          var e = t[0];
          if (e) {
            var r = e.contentRect;
            (s.wrapperWidth = r.width), (s.wrapperHeight = r.height);
          }
        }),
        (s.onContentResize = function (t) {
          var e = t[0];
          if (e) {
            var r = e.contentRect;
            (s.contentWidth = r.width), (s.contentHeight = r.height);
          }
        }),
        (s.onVirtualScroll = function (t) {
          var e = t.deltaY,
            r = t.deltaX,
            n = t.originalEvent;
          if (
            !(
              ("vertical" === s.gestureDirection && 0 === e) ||
              ("horizontal" === s.gestureDirection && 0 === r)
            )
          ) {
            var i = !!n.composedPath().find(function (t) {
              return t.hasAttribute && t.hasAttribute("data-lenis-prevent");
            });
            n.ctrlKey ||
              i ||
              ((s.smooth = n.changedTouches ? s.smoothTouch : s.options.smooth),
              s.stopped
                ? n.preventDefault()
                : s.smooth &&
                  4 !== n.buttons &&
                  (s.smooth && n.preventDefault(),
                  (s.targetScroll -=
                    "both" === s.gestureDirection
                      ? r + e
                      : "horizontal" === s.gestureDirection
                      ? r
                      : e),
                  s.scrollTo(s.targetScroll)));
          }
        }),
        (s.onScroll = function (t) {
          (s.isScrolling && s.smooth) ||
            ((s.targetScroll =
              s.scroll =
              s.lastScroll =
                s.wrapperNode[s.scrollProperty]),
            s.notify());
        }),
        (window.lenisVersion = "0.2.28"),
        (s.options = {
          duration: c,
          easing: p,
          smooth: _,
          mouseMultiplier: v,
          smoothTouch: y,
          touchMultiplier: w,
          direction: T,
          gestureDirection: E,
          infinite: M,
          wrapper: k,
          content: R,
        }),
        (s.duration = c),
        (s.easing = p),
        (s.smooth = _),
        (s.mouseMultiplier = v),
        (s.smoothTouch = y),
        (s.touchMultiplier = w),
        (s.direction = T),
        (s.gestureDirection = E),
        (s.infinite = M),
        (s.wrapperNode = k),
        (s.contentNode = R),
        s.wrapperNode.addEventListener("scroll", s.onScroll),
        s.wrapperNode === window
          ? (s.wrapperNode.addEventListener("resize", s.onWindowResize),
            s.onWindowResize())
          : ((s.wrapperHeight = s.wrapperNode.offsetHeight),
            (s.wrapperWidth = s.wrapperNode.offsetWidth),
            (s.wrapperObserver = new ResizeObserver(s.onWrapperResize)),
            s.wrapperObserver.observe(s.wrapperNode)),
        (s.contentHeight = s.contentNode.offsetHeight),
        (s.contentWidth = s.contentNode.offsetWidth),
        (s.contentObserver = new ResizeObserver(s.onContentResize)),
        s.contentObserver.observe(s.contentNode),
        (s.targetScroll =
          s.scroll =
          s.lastScroll =
            s.wrapperNode[s.scrollProperty]),
        (s.animate = new f());
      var C =
        (null == (n = navigator) || null == (o = n.userAgentData)
          ? void 0
          : o.platform) ||
        (null == (a = navigator) ? void 0 : a.platform) ||
        "unknown";
      return (
        (s.virtualScroll = new (t(i))({
          el: s.wrapperNode,
          firefoxMultiplier: 50,
          mouseMultiplier:
            s.mouseMultiplier *
            (C.includes("Win") || C.includes("Linux") ? 0.84 : 0.4),
          touchMultiplier: s.touchMultiplier,
          passive: !1,
          useKeyboard: !1,
          useTouch: !0,
        })),
        s.virtualScroll.on(s.onVirtualScroll),
        s
      );
    }
    (n = e),
      ((r = o).prototype = Object.create(n.prototype)),
      (r.prototype.constructor = r),
      u(r, n);
    var s = o.prototype;
    return (
      (s.start = function () {
        var t = this.wrapperNode;
        this.wrapperNode === window && (t = document.documentElement),
          t.classList.remove("lenis-stopped"),
          (this.stopped = !1);
      }),
      (s.stop = function () {
        var t = this.wrapperNode;
        this.wrapperNode === window && (t = document.documentElement),
          t.classList.add("lenis-stopped"),
          (this.stopped = !0),
          this.animate.stop();
      }),
      (s.destroy = function () {
        var t;
        this.wrapperNode === window &&
          this.wrapperNode.removeEventListener("resize", this.onWindowResize),
          this.wrapperNode.removeEventListener("scroll", this.onScroll),
          this.virtualScroll.destroy(),
          null == (t = this.wrapperObserver) || t.disconnect(),
          this.contentObserver.disconnect();
      }),
      (s.raf = function (t) {
        var e = t - (this.now || 0);
        (this.now = t),
          !this.stopped &&
            this.smooth &&
            ((this.lastScroll = this.scroll),
            this.animate.raf(0.001 * e),
            this.scroll === this.targetScroll &&
              (this.lastScroll = this.scroll),
            this.isScrolling && (this.setScroll(this.scroll), this.notify()),
            (this.isScrolling = this.scroll !== this.targetScroll));
      }),
      (s.setScroll = function (t) {
        var e = this.infinite ? l(t, this.limit) : t;
        "horizontal" === this.direction
          ? this.wrapperNode.scrollTo(e, 0)
          : this.wrapperNode.scrollTo(0, e);
      }),
      (s.notify = function () {
        var t = this.infinite ? l(this.scroll, this.limit) : this.scroll;
        this.emit("scroll", {
          scroll: t,
          limit: this.limit,
          velocity: this.velocity,
          direction: 0 === this.velocity ? 0 : this.velocity > 0 ? 1 : -1,
          progress: t / this.limit,
        });
      }),
      (s.scrollTo = function (t, e) {
        var r = void 0 === e ? {} : e,
          n = r.offset,
          i = void 0 === n ? 0 : n,
          o = r.immediate,
          a = void 0 !== o && o,
          s = r.duration,
          u = void 0 === s ? this.duration : s,
          l = r.easing,
          c = void 0 === l ? this.easing : l;
        if (null != t && !this.stopped) {
          var f;
          if ("number" == typeof t) f = t;
          else if ("top" === t || "#top" === t) f = 0;
          else if ("bottom" === t) f = this.limit;
          else {
            var h;
            if ("string" == typeof t) h = document.querySelector(t);
            else {
              if (null == t || !t.nodeType) return;
              h = t;
            }
            if (!h) return;
            var p = 0;
            if (this.wrapperNode !== window) {
              var d = this.wrapperNode.getBoundingClientRect();
              p = "horizontal" === this.direction ? d.left : d.top;
            }
            var _ = h.getBoundingClientRect();
            f =
              ("horizontal" === this.direction ? _.left : _.top) +
              this.scroll -
              p;
          }
          (f += i),
            (this.targetScroll = this.infinite
              ? f
              : Math.max(0, Math.min(f, this.limit))),
            !this.smooth || a
              ? (this.animate.stop(),
                (this.scroll = this.lastScroll = this.targetScroll),
                this.setScroll(this.targetScroll))
              : this.animate.to(this, {
                  duration: u,
                  easing: c,
                  scroll: this.targetScroll,
                });
        }
      }),
      a(o, [
        {
          key: "scrollProperty",
          get: function () {
            return this.wrapperNode === window
              ? "horizontal" === this.direction
                ? "scrollX"
                : "scrollY"
              : "horizontal" === this.direction
              ? "scrollLeft"
              : "scrollTop";
          },
        },
        {
          key: "limit",
          get: function () {
            return "horizontal" === this.direction
              ? this.contentWidth - this.wrapperWidth
              : this.contentHeight - this.wrapperHeight;
          },
        },
        {
          key: "velocity",
          get: function () {
            return this.scroll - this.lastScroll;
          },
        },
      ]),
      o
    );
  })(r.TinyEmitter);
function p(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function d(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var _,
  g,
  v,
  m,
  y,
  b,
  w,
  x,
  T,
  O,
  E,
  A,
  M,
  S,
  k,
  P,
  R,
  C,
  L,
  j,
  D,
  I,
  N,
  z,
  F,
  q,
  B,
  Y,
  U,
  X,
  H = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  W = { duration: 0.5, overwrite: !1, delay: 0 },
  G = 1e8,
  V = 1 / G,
  K = 2 * Math.PI,
  $ = K / 4,
  J = 0,
  Z = Math.sqrt,
  Q = Math.cos,
  tt = Math.sin,
  et = function (t) {
    return "string" == typeof t;
  },
  rt = function (t) {
    return "function" == typeof t;
  },
  nt = function (t) {
    return "number" == typeof t;
  },
  it = function (t) {
    return void 0 === t;
  },
  ot = function (t) {
    return "object" == typeof t;
  },
  at = function (t) {
    return !1 !== t;
  },
  st = function () {
    return "undefined" != typeof window;
  },
  ut = function (t) {
    return rt(t) || et(t);
  },
  lt =
    ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
  ct = Array.isArray,
  ft = /(?:-?\.?\d|\.)+/gi,
  ht = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  pt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  dt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  _t = /[+-]=-?[.\d]+/,
  gt = /[^,'"\[\]\s]+/gi,
  vt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  mt = {},
  yt = {},
  bt = function (t) {
    return (yt = Kt(t, mt)) && Vr;
  },
  wt = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  xt = function (t, e) {
    return !e && console.warn(t);
  },
  Tt = function (t, e) {
    return (t && (mt[t] = e) && yt && (yt[t] = e)) || mt;
  },
  Ot = function () {
    return 0;
  },
  Et = { suppressEvents: !0, isStart: !0, kill: !1 },
  At = { suppressEvents: !0, kill: !1 },
  Mt = { suppressEvents: !0 },
  St = {},
  kt = [],
  Pt = {},
  Rt = {},
  Ct = {},
  Lt = 30,
  jt = [],
  Dt = "",
  It = function (t) {
    var e,
      r,
      n = t[0];
    if ((ot(n) || rt(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
      for (r = jt.length; r-- && !jt[r].targetTest(n); );
      e = jt[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new lr(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  },
  Nt = function (t) {
    return t._gsap || It(Me(t))[0]._gsap;
  },
  zt = function (t, e, r) {
    return (r = t[e]) && rt(r)
      ? t[e]()
      : (it(r) && t.getAttribute && t.getAttribute(e)) || r;
  },
  Ft = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  qt = function (t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  },
  Bt = function (t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  },
  Yt = function (t, e) {
    var r = e.charAt(0),
      n = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
    );
  },
  Ut = function (t, e) {
    for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
    return n < r;
  },
  Xt = function () {
    var t,
      e,
      r = kt.length,
      n = kt.slice(0);
    for (Pt = {}, kt.length = 0, t = 0; t < r; t++)
      (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  },
  Ht = function (t, e, r, n) {
    kt.length && !g && Xt(),
      t.render(e, r, n || (g && e < 0 && (t._initted || t._startAt))),
      kt.length && !g && Xt();
  },
  Wt = function (t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(gt).length < 2
      ? e
      : et(t)
      ? t.trim()
      : t;
  },
  Gt = function (t) {
    return t;
  },
  Vt = function (t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  },
  Kt = function (t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  },
  $t = function t(e, r) {
    for (var n in r)
      "__proto__" !== n &&
        "constructor" !== n &&
        "prototype" !== n &&
        (e[n] = ot(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
    return e;
  },
  Jt = function (t, e) {
    var r,
      n = {};
    for (r in t) r in e || (n[r] = t[r]);
    return n;
  },
  Zt = function (t) {
    var e,
      r = t.parent || m,
      n = t.keyframes
        ? ((e = ct(t.keyframes)),
          function (t, r) {
            for (var n in r)
              n in t ||
                ("duration" === n && e) ||
                "ease" === n ||
                (t[n] = r[n]);
          })
        : Vt;
    if (at(t.inherit))
      for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
    return t;
  },
  Qt = function (t, e, r, n, i) {
    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
    var o,
      a = t[n];
    if (i) for (o = e[i]; a && a[i] > o; ) a = a._prev;
    return (
      a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[r]), (t[r] = e)),
      e._next ? (e._next._prev = e) : (t[n] = e),
      (e._prev = a),
      (e.parent = e._dp = t),
      e
    );
  },
  te = function (t, e, r, n) {
    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
    var i = e._prev,
      o = e._next;
    i ? (i._next = o) : t[r] === e && (t[r] = o),
      o ? (o._prev = i) : t[n] === e && (t[n] = i),
      (e._next = e._prev = e.parent = null);
  },
  ee = function (t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
      (t._act = 0);
  },
  re = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  },
  ne = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  ie = function (t, e, r, n) {
    return (
      t._startAt &&
      (g
        ? t._startAt.revert(At)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, n))
    );
  },
  oe = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  ae = function (t) {
    return t._repeat ? se(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  se = function (t, e) {
    var r = Math.floor((t /= e));
    return t && r === t ? r - 1 : r;
  },
  ue = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  le = function (t) {
    return (t._end = Bt(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0)
    ));
  },
  ce = function (t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = Bt(
          r._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        le(t),
        r._dirty || re(r, t)),
      t
    );
  },
  fe = function (t, e) {
    var r;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((r = ue(t.rawTime(), e)),
        (!e._dur || Te(0, e.totalDuration(), r) - e._tTime > V) &&
          e.render(r, !0)),
      re(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -V;
    }
  },
  he = function (t, e, r, n) {
    return (
      e.parent && ee(e),
      (e._start = Bt(
        (nt(r) ? r : r || t !== m ? be(t, r, e) : t._time) + e._delay
      )),
      (e._end = Bt(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      Qt(t, e, "_first", "_last", t._sort ? "_start" : 0),
      ge(e) || (t._recent = e),
      n || fe(t, e),
      t._ts < 0 && ce(t, t._tTime),
      t
    );
  },
  pe = function (t, e) {
    return (
      (mt.ScrollTrigger || wt("scrollTrigger", e)) &&
      mt.ScrollTrigger.create(e, t)
    );
  },
  de = function (t, e, r, n, i) {
    return (
      vr(t, e, i),
      t._initted
        ? !r &&
          t._pt &&
          !g &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          T !== $e.frame
          ? (kt.push(t), (t._lazy = [i, n]), 1)
          : void 0
        : 1
    );
  },
  _e = function t(e) {
    var r = e.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
  },
  ge = function (t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
  ve = function (t, e, r, n) {
    var i = t._repeat,
      o = Bt(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !n && (t._time *= o / t._dur),
      (t._dur = o),
      (t._tDur = i ? (i < 0 ? 1e10 : Bt(o * (i + 1) + t._rDelay * i)) : o),
      a > 0 && !n && ce(t, (t._tTime = t._tDur * a)),
      t.parent && le(t),
      r || re(t.parent, t),
      t
    );
  },
  me = function (t) {
    return t instanceof fr ? re(t) : ve(t, t._dur);
  },
  ye = { _start: 0, endTime: Ot, totalDuration: Ot },
  be = function t(e, r, n) {
    var i,
      o,
      a,
      s = e.labels,
      u = e._recent || ye,
      l = e.duration() >= G ? u.endTime(!1) : e._dur;
    return et(r) && (isNaN(r) || r in s)
      ? ((o = r.charAt(0)),
        (a = "%" === r.substr(-1)),
        (i = r.indexOf("=")),
        "<" === o || ">" === o
          ? (i >= 0 && (r = r.replace(/=/, "")),
            ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (a ? (i < 0 ? u : n).totalDuration() / 100 : 1))
          : i < 0
          ? (r in s || (s[r] = l), s[r])
          : ((o = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
            a && n && (o = (o / 100) * (ct(n) ? n[0] : n).totalDuration()),
            i > 1 ? t(e, r.substr(0, i - 1), n) + o : l + o))
      : null == r
      ? l
      : +r;
  },
  we = function (t, e, r) {
    var n,
      i,
      o = nt(e[1]),
      a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
      s = e[a];
    if ((o && (s.duration = e[1]), (s.parent = r), t)) {
      for (n = s, i = r; i && !("immediateRender" in n); )
        (n = i.vars.defaults || {}), (i = at(i.vars.inherit) && i.parent);
      (s.immediateRender = at(n.immediateRender)),
        t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
    }
    return new xr(e[0], s, e[a + 1]);
  },
  xe = function (t, e) {
    return t || 0 === t ? e(t) : e;
  },
  Te = function (t, e, r) {
    return r < t ? t : r > e ? e : r;
  },
  Oe = function (t, e) {
    return et(t) && (e = vt.exec(t)) ? e[1] : "";
  },
  Ee = [].slice,
  Ae = function (t, e) {
    return (
      t &&
      ot(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && ot(t[0]))) &&
      !t.nodeType &&
      t !== y
    );
  },
  Me = function (t, e, r) {
    return v && !e && v.selector
      ? v.selector(t)
      : !et(t) || r || (!b && Je())
      ? ct(t)
        ? (function (t, e, r) {
            return (
              void 0 === r && (r = []),
              t.forEach(function (t) {
                var n;
                return (et(t) && !e) || Ae(t, 1)
                  ? (n = r).push.apply(n, Me(t))
                  : r.push(t);
              }) || r
            );
          })(t, r)
        : Ae(t)
        ? Ee.call(t, 0)
        : t
        ? [t]
        : []
      : Ee.call((e || w).querySelectorAll(t), 0);
  },
  Se = function (t) {
    return (
      (t = Me(t)[0] || xt("Invalid scope") || {}),
      function (e) {
        var r = t.current || t.nativeElement || t;
        return Me(
          e,
          r.querySelectorAll
            ? r
            : r === t
            ? xt("Invalid scope") || w.createElement("div")
            : t
        );
      }
    );
  },
  ke = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Pe = function (t) {
    if (rt(t)) return t;
    var e = ot(t) ? t : { each: t },
      r = ir(e.ease),
      n = e.from || 0,
      i = parseFloat(e.base) || 0,
      o = {},
      a = n > 0 && n < 1,
      s = isNaN(n) || a,
      u = e.axis,
      l = n,
      c = n;
    return (
      et(n)
        ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
        : !a && s && ((l = n[0]), (c = n[1])),
      function (t, a, f) {
        var h,
          p,
          d,
          _,
          g,
          v,
          m,
          y,
          b,
          w = (f || e).length,
          x = o[w];
        if (!x) {
          if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, G])[1])) {
            for (
              m = -G;
              m < (m = f[b++].getBoundingClientRect().left) && b < w;

            );
            b--;
          }
          for (
            x = o[w] = [],
              h = s ? Math.min(b, w) * l - 0.5 : n % b,
              p = b === G ? 0 : s ? (w * c) / b - 0.5 : (n / b) | 0,
              m = 0,
              y = G,
              v = 0;
            v < w;
            v++
          )
            (d = (v % b) - h),
              (_ = p - ((v / b) | 0)),
              (x[v] = g = u ? Math.abs("y" === u ? _ : d) : Z(d * d + _ * _)),
              g > m && (m = g),
              g < y && (y = g);
          "random" === n && ke(x),
            (x.max = m - y),
            (x.min = y),
            (x.v = w =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (b > w
                    ? w - 1
                    : u
                    ? "y" === u
                      ? w / b
                      : b
                    : Math.max(b, w / b)) ||
                0) * ("edges" === n ? -1 : 1)),
            (x.b = w < 0 ? i - w : i),
            (x.u = Oe(e.amount || e.each) || 0),
            (r = r && w < 0 ? rr(r) : r);
        }
        return (
          (w = (x[t] - x.min) / x.max || 0),
          Bt(x.b + (r ? r(w) : w) * x.v) + x.u
        );
      }
    );
  },
  Re = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (r) {
      var n = Bt(Math.round(parseFloat(r) / t) * t * e);
      return (n - (n % 1)) / e + (nt(r) ? 0 : Oe(r));
    };
  },
  Ce = function (t, e) {
    var r,
      n,
      i = ct(t);
    return (
      !i &&
        ot(t) &&
        ((r = i = t.radius || G),
        t.values
          ? ((t = Me(t.values)), (n = !nt(t[0])) && (r *= r))
          : (t = Re(t.increment))),
      xe(
        e,
        i
          ? rt(t)
            ? function (e) {
                return (n = t(e)), Math.abs(n - e) <= r ? n : e;
              }
            : function (e) {
                for (
                  var i,
                    o,
                    a = parseFloat(n ? e.x : e),
                    s = parseFloat(n ? e.y : 0),
                    u = G,
                    l = 0,
                    c = t.length;
                  c--;

                )
                  (i = n
                    ? (i = t[c].x - a) * i + (o = t[c].y - s) * o
                    : Math.abs(t[c] - a)) < u && ((u = i), (l = c));
                return (
                  (l = !r || u <= r ? t[l] : e),
                  n || l === e || nt(e) ? l : l + Oe(e)
                );
              }
          : Re(t)
      )
    );
  },
  Le = function (t, e, r, n) {
    return xe(ct(t) ? !e : !0 === r ? ((r = 0), !1) : !n, function () {
      return ct(t)
        ? t[~~(Math.random() * t.length)]
        : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) *
                r *
                n
            ) / n;
    });
  },
  je = function (t, e, r) {
    return xe(r, function (r) {
      return t[~~e(r)];
    });
  },
  De = function (t) {
    for (var e, r, n, i, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
      (n = t.indexOf(")", e)),
        (i = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, n - e - 7).match(i ? gt : ft)),
        (a +=
          t.substr(o, e - o) + Le(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
        (o = n + 1);
    return a + t.substr(o, t.length - o);
  },
  Ie = function (t, e, r, n, i) {
    var o = e - t,
      a = n - r;
    return xe(i, function (e) {
      return r + (((e - t) / o) * a || 0);
    });
  },
  Ne = function (t, e, r) {
    var n,
      i,
      o,
      a = t.labels,
      s = G;
    for (n in a)
      (i = a[n] - e) < 0 == !!r &&
        i &&
        s > (i = Math.abs(i)) &&
        ((o = n), (s = i));
    return o;
  },
  ze = function (t, e, r) {
    var n,
      i,
      o,
      a = t.vars,
      s = a[e],
      u = v,
      l = t._ctx;
    if (s)
      return (
        (n = a[e + "Params"]),
        (i = a.callbackScope || t),
        r && kt.length && Xt(),
        l && (v = l),
        (o = n ? s.apply(i, n) : s.call(i)),
        (v = u),
        o
      );
  },
  Fe = function (t) {
    return (
      ee(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!g),
      t.progress() < 1 && ze(t, "onInterrupt"),
      t
    );
  },
  qe = function (t) {
    var e = (t = (!t.name && t.default) || t).name,
      r = rt(t),
      n =
        e && !r && t.init
          ? function () {
              this._props = [];
            }
          : t,
      i = { init: Ot, render: Rr, add: _r, kill: Lr, modifier: Cr, rawVars: 0 },
      o = { targetTest: 0, get: 0, getSetter: Mr, aliases: {}, register: 0 };
    if ((Je(), t !== n)) {
      if (Rt[e]) return;
      Vt(n, Vt(Jt(t, i), o)),
        Kt(n.prototype, Kt(i, Jt(t, o))),
        (Rt[(n.prop = e)] = n),
        t.targetTest && (jt.push(n), (St[e] = 1)),
        (e =
          ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
          "Plugin");
    }
    Tt(e, n), t.register && t.register(Vr, n, Ir);
  },
  Be = 255,
  Ye = {
    aqua: [0, Be, Be],
    lime: [0, Be, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Be],
    navy: [0, 0, 128],
    white: [Be, Be, Be],
    olive: [128, 128, 0],
    yellow: [Be, Be, 0],
    orange: [Be, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Be, 0, 0],
    pink: [Be, 192, 203],
    cyan: [0, Be, Be],
    transparent: [Be, Be, Be, 0],
  },
  Ue = function (t, e, r) {
    return (
      ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        Be +
        0.5) |
      0
    );
  },
  Xe = function (t, e, r) {
    var n,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      h,
      p = t ? (nt(t) ? [t >> 16, (t >> 8) & Be, t & Be] : 0) : Ye.black;
    if (!p) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ye[t]))
        p = Ye[t];
      else if ("#" === t.charAt(0)) {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (i = t.charAt(2)),
            (o = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              i +
              i +
              o +
              o +
              (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
          9 === t.length)
        )
          return [
            (p = parseInt(t.substr(1, 6), 16)) >> 16,
            (p >> 8) & Be,
            p & Be,
            parseInt(t.substr(7), 16) / 255,
          ];
        p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Be, t & Be];
      } else if ("hsl" === t.substr(0, 3))
        if (((p = h = t.match(ft)), e)) {
          if (~t.indexOf("="))
            return (p = t.match(ht)), r && p.length < 4 && (p[3] = 1), p;
        } else
          (a = (+p[0] % 360) / 360),
            (s = +p[1] / 100),
            (n =
              2 * (u = +p[2] / 100) -
              (i = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
            p.length > 3 && (p[3] *= 1),
            (p[0] = Ue(a + 1 / 3, n, i)),
            (p[1] = Ue(a, n, i)),
            (p[2] = Ue(a - 1 / 3, n, i));
      else p = t.match(ft) || Ye.transparent;
      p = p.map(Number);
    }
    return (
      e &&
        !h &&
        ((n = p[0] / Be),
        (i = p[1] / Be),
        (o = p[2] / Be),
        (u = ((l = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2),
        l === c
          ? (a = s = 0)
          : ((f = l - c),
            (s = u > 0.5 ? f / (2 - l - c) : f / (l + c)),
            (a =
              l === n
                ? (i - o) / f + (i < o ? 6 : 0)
                : l === i
                ? (o - n) / f + 2
                : (n - i) / f + 4),
            (a *= 60)),
        (p[0] = ~~(a + 0.5)),
        (p[1] = ~~(100 * s + 0.5)),
        (p[2] = ~~(100 * u + 0.5))),
      r && p.length < 4 && (p[3] = 1),
      p
    );
  },
  He = function (t) {
    var e = [],
      r = [],
      n = -1;
    return (
      t.split(Ge).forEach(function (t) {
        var i = t.match(pt) || [];
        e.push.apply(e, i), r.push((n += i.length + 1));
      }),
      (e.c = r),
      e
    );
  },
  We = function (t, e, r) {
    var n,
      i,
      o,
      a,
      s = "",
      u = (t + s).match(Ge),
      l = e ? "hsla(" : "rgba(",
      c = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = Xe(t, e, 1)) &&
          l +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      r && ((o = He(t)), (n = r.c).join(s) !== o.c.join(s)))
    )
      for (a = (i = t.replace(Ge, "1").split(pt)).length - 1; c < a; c++)
        s +=
          i[c] +
          (~n.indexOf(c)
            ? u.shift() || l + "0,0,0,0)"
            : (o.length ? o : u.length ? u : r).shift());
    if (!i) for (a = (i = t.split(Ge)).length - 1; c < a; c++) s += i[c] + u[c];
    return s + i[a];
  },
  Ge = (function () {
    var t,
      e =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (t in Ye) e += "|" + t + "\\b";
    return new RegExp(e + ")", "gi");
  })(),
  Ve = /hsl[a]?\(/,
  Ke = function (t) {
    var e,
      r = t.join(" ");
    if (((Ge.lastIndex = 0), Ge.test(r)))
      return (
        (e = Ve.test(r)),
        (t[1] = We(t[1], e)),
        (t[0] = We(t[0], e, He(t[1]))),
        !0
      );
  },
  $e =
    ((C = Date.now),
    (L = 500),
    (j = 33),
    (D = C()),
    (I = D),
    (z = N = 1e3 / 240),
    (q = function t(e) {
      var r,
        n,
        i,
        o,
        a = C() - I,
        s = !0 === e;
      if (
        (a > L && (D += a - j),
        ((r = (i = (I += a) - D) - z) > 0 || s) &&
          ((o = ++k.frame),
          (P = i - 1e3 * k.time),
          (k.time = i /= 1e3),
          (z += r + (r >= N ? 4 : N - r)),
          (n = 1)),
        s || (A = M(t)),
        n)
      )
        for (R = 0; R < F.length; R++) F[R](i, P, o, e);
    }),
    (k = {
      time: 0,
      frame: 0,
      tick: function () {
        q(!0);
      },
      deltaRatio: function (t) {
        return P / (1e3 / (t || 60));
      },
      wake: function () {
        x &&
          (!b &&
            st() &&
            ((y = b = window),
            (w = y.document || {}),
            (mt.gsap = Vr),
            (y.gsapVersions || (y.gsapVersions = [])).push(Vr.version),
            bt(yt || y.GreenSockGlobals || (!y.gsap && y) || {}),
            (S = y.requestAnimationFrame)),
          A && k.sleep(),
          (M =
            S ||
            function (t) {
              return setTimeout(t, (z - 1e3 * k.time + 1) | 0);
            }),
          (E = 1),
          q(2));
      },
      sleep: function () {
        (S ? y.cancelAnimationFrame : clearTimeout)(A), (E = 0), (M = Ot);
      },
      lagSmoothing: function (t, e) {
        (L = t || 1 / 0), (j = Math.min(e || 33, L));
      },
      fps: function (t) {
        (N = 1e3 / (t || 240)), (z = 1e3 * k.time + N);
      },
      add: function (t, e, r) {
        var n = e
          ? function (e, r, i, o) {
              t(e, r, i, o), k.remove(n);
            }
          : t;
        return k.remove(t), F[r ? "unshift" : "push"](n), Je(), n;
      },
      remove: function (t, e) {
        ~(e = F.indexOf(t)) && F.splice(e, 1) && R >= e && R--;
      },
      _listeners: (F = []),
    })),
  Je = function () {
    return !E && $e.wake();
  },
  Ze = {},
  Qe = /^[\d.\-M][\d.\-,\s]/,
  tr = /["']/g,
  er = function (t) {
    for (
      var e,
        r,
        n,
        i = {},
        o = t.substr(1, t.length - 3).split(":"),
        a = o[0],
        s = 1,
        u = o.length;
      s < u;
      s++
    )
      (r = o[s]),
        (e = s !== u - 1 ? r.lastIndexOf(",") : r.length),
        (n = r.substr(0, e)),
        (i[a] = isNaN(n) ? n.replace(tr, "").trim() : +n),
        (a = r.substr(e + 1).trim());
    return i;
  },
  rr = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  nr = function t(e, r) {
    for (var n, i = e._first; i; )
      i instanceof fr
        ? t(i, r)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === r ||
          (i.timeline
            ? t(i.timeline, r)
            : ((n = i._ease),
              (i._ease = i._yEase),
              (i._yEase = n),
              (i._yoyo = r))),
        (i = i._next);
  },
  ir = function (t, e) {
    return (
      (t &&
        (rt(t)
          ? t
          : Ze[t] ||
            (function (t) {
              var e,
                r,
                n,
                i,
                o = (t + "").split("("),
                a = Ze[o[0]];
              return a && o.length > 1 && a.config
                ? a.config.apply(
                    null,
                    ~t.indexOf("{")
                      ? [er(o[1])]
                      : ((e = t),
                        (r = e.indexOf("(") + 1),
                        (n = e.indexOf(")")),
                        (i = e.indexOf("(", r)),
                        e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n))
                          .split(",")
                          .map(Wt)
                  )
                : Ze._CE && Qe.test(t)
                ? Ze._CE("", t)
                : a;
            })(t))) ||
      e
    );
  },
  or = function (t, e, r, n) {
    void 0 === r &&
      (r = function (t) {
        return 1 - e(1 - t);
      }),
      void 0 === n &&
        (n = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var i,
      o = { easeIn: e, easeOut: r, easeInOut: n };
    return (
      Ft(t, function (t) {
        for (var e in ((Ze[t] = mt[t] = o), (Ze[(i = t.toLowerCase())] = r), o))
          Ze[
            i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Ze[t + "." + e] = o[e];
      }),
      o
    );
  },
  ar = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
    };
  },
  sr = function t(e, r, n) {
    var i = r >= 1 ? r : 1,
      o = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      a = (o / K) * (Math.asin(1 / i) || 0),
      s = function (t) {
        return 1 === t ? 1 : i * Math.pow(2, -10 * t) * tt((t - a) * o) + 1;
      },
      u =
        "out" === e
          ? s
          : "in" === e
          ? function (t) {
              return 1 - s(1 - t);
            }
          : ar(s);
    return (
      (o = K / o),
      (u.config = function (r, n) {
        return t(e, r, n);
      }),
      u
    );
  },
  ur = function t(e, r) {
    void 0 === r && (r = 1.70158);
    var n = function (t) {
        return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
      },
      i =
        "out" === e
          ? n
          : "in" === e
          ? function (t) {
              return 1 - n(1 - t);
            }
          : ar(n);
    return (
      (i.config = function (r) {
        return t(e, r);
      }),
      i
    );
  };
Ft("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var r = e < 5 ? e + 1 : e;
  or(
    t + ",Power" + (r - 1),
    e
      ? function (t) {
          return Math.pow(t, r);
        }
      : function (t) {
          return t;
        },
    function (t) {
      return 1 - Math.pow(1 - t, r);
    },
    function (t) {
      return t < 0.5
        ? Math.pow(2 * t, r) / 2
        : 1 - Math.pow(2 * (1 - t), r) / 2;
    }
  );
}),
  (Ze.Linear.easeNone = Ze.none = Ze.Linear.easeIn),
  or("Elastic", sr("in"), sr("out"), sr()),
  (B = 7.5625),
  (U = 1 / (Y = 2.75)),
  or(
    "Bounce",
    function (t) {
      return 1 - X(1 - t);
    },
    (X = function (t) {
      return t < U
        ? B * t * t
        : t < 0.7272727272727273
        ? B * Math.pow(t - 1.5 / Y, 2) + 0.75
        : t < 0.9090909090909092
        ? B * (t -= 2.25 / Y) * t + 0.9375
        : B * Math.pow(t - 2.625 / Y, 2) + 0.984375;
    })
  ),
  or("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }),
  or("Circ", function (t) {
    return -(Z(1 - t * t) - 1);
  }),
  or("Sine", function (t) {
    return 1 === t ? 1 : 1 - Q(t * $);
  }),
  or("Back", ur("in"), ur("out"), ur()),
  (Ze.SteppedEase =
    Ze.steps =
    mt.SteppedEase =
      {
        config: function (t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t,
            n = t + (e ? 0 : 1),
            i = e ? 1 : 0,
            o = 1 - V;
          return function (t) {
            return (((n * Te(0, o, t)) | 0) + i) * r;
          };
        },
      }),
  (W.ease = Ze["quad.out"]),
  Ft(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (t) {
      return (Dt += t + "," + t + "Params,");
    }
  );
var lr = function (t, e) {
    (this.id = J++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : zt),
      (this.set = e ? e.getSetter : Mr);
  },
  cr = (function () {
    function t(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        ve(this, +t.duration, 1, 1),
        (this.data = t.data),
        v && ((this._ctx = v), v.data.push(this)),
        E || $e.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            ve(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (t, e) {
        if ((Je(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (ce(this, t), !r._dp || r.parent || fe(r, this); r && r.parent; )
            r.parent._time !==
              r._start +
                (r._ts >= 0
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) ||
              (this._ts < 0 && t > 0) ||
              (!this._tDur && !t)) &&
            he(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === V) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), Ht(this, t, e)),
          this
        );
      }),
      (e.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + ae(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (e.totalProgress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                ae(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? se(this._tTime, r) + 1
          : 1;
      }),
      (e.timeScale = function (t) {
        if (!arguments.length) return this._rts === -V ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? ue(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -V ? 0 : this._rts),
          this.totalTime(Te(-this._delay, this._tDur, e), !0),
          le(this),
          ne(this)
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Je(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== V &&
                      (this._tTime -= V)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            e && (e._sort || !this.parent) && he(e, this, t - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (at(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ue(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (t) {
        void 0 === t && (t = Mt);
        var e = g;
        return (
          (g = t),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          "nested" !== this.data && !1 !== t.kill && this.kill(),
          (g = e),
          this
        );
      }),
      (e.globalTime = function (t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (e._ts || 1)), (e = e._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(t)
          : r;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), me(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), me(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, e) {
        return this.totalTime(be(this, t), at(e));
      }),
      (e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, at(e));
      }),
      (e.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -V : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -V), this;
      }),
      (e.isActive = function () {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - V
          )
        );
      }),
      (e.eventCallback = function (t, e, r) {
        var n = this.vars;
        return arguments.length > 1
          ? (e
              ? ((n[t] = e),
                r && (n[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete n[t],
            this)
          : n[t];
      }),
      (e.then = function (t) {
        var e = this;
        return new Promise(function (r) {
          var n = rt(t) ? t : Gt,
            i = function () {
              var t = e.then;
              (e.then = null),
                rt(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                r(n),
                (e.then = t);
            };
          (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
          (!e._tTime && e._ts < 0)
            ? i()
            : (e._prom = i);
        });
      }),
      (e.kill = function () {
        Fe(this);
      }),
      t
    );
  })();
Vt(cr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -V,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var fr = (function (t) {
  function e(e, r) {
    var n;
    return (
      void 0 === e && (e = {}),
      ((n = t.call(this, e) || this).labels = {}),
      (n.smoothChildTiming = !!e.smoothChildTiming),
      (n.autoRemoveChildren = !!e.autoRemoveChildren),
      (n._sort = at(e.sortChildren)),
      m && he(e.parent || m, p(n), r),
      e.reversed && n.reverse(),
      e.paused && n.paused(!0),
      e.scrollTrigger && pe(p(n), e.scrollTrigger),
      n
    );
  }
  d(e, t);
  var r = e.prototype;
  return (
    (r.to = function (t, e, r) {
      return we(0, arguments, this), this;
    }),
    (r.from = function (t, e, r) {
      return we(1, arguments, this), this;
    }),
    (r.fromTo = function (t, e, r, n) {
      return we(2, arguments, this), this;
    }),
    (r.set = function (t, e, r) {
      return (
        (e.duration = 0),
        (e.parent = this),
        Zt(e).repeatDelay || (e.repeat = 0),
        (e.immediateRender = !!e.immediateRender),
        new xr(t, e, be(this, r), 1),
        this
      );
    }),
    (r.call = function (t, e, r) {
      return he(this, xr.delayedCall(0, t, e), r);
    }),
    (r.staggerTo = function (t, e, r, n, i, o, a) {
      return (
        (r.duration = e),
        (r.stagger = r.stagger || n),
        (r.onComplete = o),
        (r.onCompleteParams = a),
        (r.parent = this),
        new xr(t, r, be(this, i)),
        this
      );
    }),
    (r.staggerFrom = function (t, e, r, n, i, o, a) {
      return (
        (r.runBackwards = 1),
        (Zt(r).immediateRender = at(r.immediateRender)),
        this.staggerTo(t, e, r, n, i, o, a)
      );
    }),
    (r.staggerFromTo = function (t, e, r, n, i, o, a, s) {
      return (
        (n.startAt = r),
        (Zt(n).immediateRender = at(n.immediateRender)),
        this.staggerTo(t, e, n, i, o, a, s)
      );
    }),
    (r.render = function (t, e, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        _ = this._time,
        v = this._dirty ? this.totalDuration() : this._tDur,
        y = this._dur,
        b = t <= 0 ? 0 : Bt(t),
        w = this._zTime < 0 != t < 0 && (this._initted || !y);
      if (
        (this !== m && b > v && t >= 0 && (b = v), b !== this._tTime || r || w)
      ) {
        if (
          (_ !== this._time &&
            y &&
            ((b += this._time - _), (t += this._time - _)),
          (n = b),
          (f = this._start),
          (u = !(c = this._ts)),
          w && (y || (_ = this._zTime), (t || !e) && (this._zTime = t)),
          this._repeat)
        ) {
          if (
            ((p = this._yoyo),
            (s = y + this._rDelay),
            this._repeat < -1 && t < 0)
          )
            return this.totalTime(100 * s + t, e, r);
          if (
            ((n = Bt(b % s)),
            b === v
              ? ((a = this._repeat), (n = y))
              : ((a = ~~(b / s)) && a === b / s && ((n = y), a--),
                n > y && (n = y)),
            (h = se(this._tTime, s)),
            !_ && this._tTime && h !== a && (h = a),
            p && 1 & a && ((n = y - n), (d = 1)),
            a !== h && !this._lock)
          ) {
            var x = p && 1 & h,
              T = x === (p && 1 & a);
            if (
              (a < h && (x = !x),
              (_ = x ? 0 : y),
              (this._lock = 1),
              (this.render(_ || (d ? 0 : Bt(a * s)), e, !y)._lock = 0),
              (this._tTime = b),
              !e && this.parent && ze(this, "onRepeat"),
              this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1),
              (_ && _ !== this._time) ||
                u !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((y = this._dur),
              (v = this._tDur),
              T &&
                ((this._lock = 2),
                (_ = x ? y : -1e-4),
                this.render(_, !0),
                this.vars.repeatRefresh && !d && this.invalidate()),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this;
            nr(this, d);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((l = (function (t, e, r) {
              var n;
              if (r > e)
                for (n = t._first; n && n._start <= r; ) {
                  if ("isPause" === n.data && n._start > e) return n;
                  n = n._next;
                }
              else
                for (n = t._last; n && n._start >= r; ) {
                  if ("isPause" === n.data && n._start < e) return n;
                  n = n._prev;
                }
            })(this, Bt(_), Bt(n))),
            l && (b -= n - (n = l._start))),
          (this._tTime = b),
          (this._time = n),
          (this._act = !c),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = t),
            (_ = 0)),
          !_ && n && !e && (ze(this, "onStart"), this._tTime !== b))
        )
          return this;
        if (n >= _ && t >= 0)
          for (i = this._first; i; ) {
            if (
              ((o = i._next), (i._act || n >= i._start) && i._ts && l !== i)
            ) {
              if (i.parent !== this) return this.render(t, e, r);
              if (
                (i.render(
                  i._ts > 0
                    ? (n - i._start) * i._ts
                    : (i._dirty ? i.totalDuration() : i._tDur) +
                        (n - i._start) * i._ts,
                  e,
                  r
                ),
                n !== this._time || (!this._ts && !u))
              ) {
                (l = 0), o && (b += this._zTime = -V);
                break;
              }
            }
            i = o;
          }
        else {
          i = this._last;
          for (var O = t < 0 ? t : n; i; ) {
            if (((o = i._prev), (i._act || O <= i._end) && i._ts && l !== i)) {
              if (i.parent !== this) return this.render(t, e, r);
              if (
                (i.render(
                  i._ts > 0
                    ? (O - i._start) * i._ts
                    : (i._dirty ? i.totalDuration() : i._tDur) +
                        (O - i._start) * i._ts,
                  e,
                  r || (g && (i._initted || i._startAt))
                ),
                n !== this._time || (!this._ts && !u))
              ) {
                (l = 0), o && (b += this._zTime = O ? -V : V);
                break;
              }
            }
            i = o;
          }
        }
        if (
          l &&
          !e &&
          (this.pause(),
          (l.render(n >= _ ? 0 : -V)._zTime = n >= _ ? 1 : -1),
          this._ts)
        )
          return (this._start = f), le(this), this.render(t, e, r);
        this._onUpdate && !e && ze(this, "onUpdate", !0),
          ((b === v && this._tTime >= this.totalDuration()) || (!b && _)) &&
            ((f !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
              this._lock ||
              ((t || !y) &&
                ((b === v && this._ts > 0) || (!b && this._ts < 0)) &&
                ee(this, 1),
              e ||
                (t < 0 && !_) ||
                (!b && !_ && v) ||
                (ze(
                  this,
                  b === v && t >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(b < v && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (r.add = function (t, e) {
      var r = this;
      if ((nt(e) || (e = be(this, e, t)), !(t instanceof cr))) {
        if (ct(t))
          return (
            t.forEach(function (t) {
              return r.add(t, e);
            }),
            this
          );
        if (et(t)) return this.addLabel(t, e);
        if (!rt(t)) return this;
        t = xr.delayedCall(0, t);
      }
      return this !== t ? he(this, t, e) : this;
    }),
    (r.getChildren = function (t, e, r, n) {
      void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === r && (r = !0),
        void 0 === n && (n = -G);
      for (var i = [], o = this._first; o; )
        o._start >= n &&
          (o instanceof xr
            ? e && i.push(o)
            : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))),
          (o = o._next);
      return i;
    }),
    (r.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
        if (e[r].vars.id === t) return e[r];
    }),
    (r.remove = function (t) {
      return et(t)
        ? this.removeLabel(t)
        : rt(t)
        ? this.killTweensOf(t)
        : (te(this, t),
          t === this._recent && (this._recent = this._last),
          re(this));
    }),
    (r.totalTime = function (e, r) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Bt(
              $e.time -
                (this._ts > 0
                  ? e / this._ts
                  : (this.totalDuration() - e) / -this._ts)
            )),
          t.prototype.totalTime.call(this, e, r),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (t, e) {
      return (this.labels[t] = be(this, e)), this;
    }),
    (r.removeLabel = function (t) {
      return delete this.labels[t], this;
    }),
    (r.addPause = function (t, e, r) {
      var n = xr.delayedCall(0, e || Ot, r);
      return (
        (n.data = "isPause"), (this._hasPause = 1), he(this, n, be(this, t))
      );
    }),
    (r.removePause = function (t) {
      var e = this._first;
      for (t = be(this, t); e; )
        e._start === t && "isPause" === e.data && ee(e), (e = e._next);
    }),
    (r.killTweensOf = function (t, e, r) {
      for (var n = this.getTweensOf(t, r), i = n.length; i--; )
        hr !== n[i] && n[i].kill(t, e);
      return this;
    }),
    (r.getTweensOf = function (t, e) {
      for (var r, n = [], i = Me(t), o = this._first, a = nt(e); o; )
        o instanceof xr
          ? Ut(o._targets, i) &&
            (a
              ? (!hr || (o._initted && o._ts)) &&
                o.globalTime(0) <= e &&
                o.globalTime(o.totalDuration()) > e
              : !e || o.isActive()) &&
            n.push(o)
          : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r),
          (o = o._next);
      return n;
    }),
    (r.tweenTo = function (t, e) {
      e = e || {};
      var r,
        n = this,
        i = be(n, t),
        o = e,
        a = o.startAt,
        s = o.onStart,
        u = o.onStartParams,
        l = o.immediateRender,
        c = xr.to(
          n,
          Vt(
            {
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: i,
              overwrite: "auto",
              duration:
                e.duration ||
                Math.abs(
                  (i - (a && "time" in a ? a.time : n._time)) / n.timeScale()
                ) ||
                V,
              onStart: function () {
                if ((n.pause(), !r)) {
                  var t =
                    e.duration ||
                    Math.abs(
                      (i - (a && "time" in a ? a.time : n._time)) /
                        n.timeScale()
                    );
                  c._dur !== t && ve(c, t, 0, 1).render(c._time, !0, !0),
                    (r = 1);
                }
                s && s.apply(c, u || []);
              },
            },
            e
          )
        );
      return l ? c.render(0) : c;
    }),
    (r.tweenFromTo = function (t, e, r) {
      return this.tweenTo(e, Vt({ startAt: { time: be(this, t) } }, r));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (t) {
      return void 0 === t && (t = this._time), Ne(this, be(this, t));
    }),
    (r.previousLabel = function (t) {
      return void 0 === t && (t = this._time), Ne(this, be(this, t), 1);
    }),
    (r.currentLabel = function (t) {
      return arguments.length
        ? this.seek(t, !0)
        : this.previousLabel(this._time + V);
    }),
    (r.shiftChildren = function (t, e, r) {
      void 0 === r && (r = 0);
      for (var n, i = this._first, o = this.labels; i; )
        i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
      if (e) for (n in o) o[n] >= r && (o[n] += t);
      return re(this);
    }),
    (r.invalidate = function (e) {
      var r = this._first;
      for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
      return t.prototype.invalidate.call(this, e);
    }),
    (r.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        re(this)
      );
    }),
    (r.totalDuration = function (t) {
      var e,
        r,
        n,
        i = 0,
        o = this,
        a = o._last,
        s = G;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -t : t)
        );
      if (o._dirty) {
        for (n = o.parent; a; )
          (e = a._prev),
            a._dirty && a.totalDuration(),
            (r = a._start) > s && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (he(o, a, r - a._delay, 1)._lock = 0))
              : (s = r),
            r < 0 &&
              a._ts &&
              ((i -= r),
              ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)),
              o.shiftChildren(-r, !1, -1 / 0),
              (s = 0)),
            a._end > i && a._ts && (i = a._end),
            (a = e);
        ve(o, o === m && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (t) {
      if ((m._ts && (Ht(m, ue(t, m)), (T = $e.frame)), $e.frame >= Lt)) {
        Lt += H.autoSleep || 120;
        var e = m._first;
        if ((!e || !e._ts) && H.autoSleep && $e._listeners.length < 2) {
          for (; e && !e._ts; ) e = e._next;
          e || $e.sleep();
        }
      }
    }),
    e
  );
})(cr);
Vt(fr.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var hr,
  pr,
  dr = function (t, e, r, n, i, o, a) {
    var s,
      u,
      l,
      c,
      f,
      h,
      p,
      d,
      _ = new Ir(this._pt, t, e, 0, 1, Pr, null, i),
      g = 0,
      v = 0;
    for (
      _.b = r,
        _.e = n,
        r += "",
        (p = ~(n += "").indexOf("random(")) && (n = De(n)),
        o && (o((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
        u = r.match(dt) || [];
      (s = dt.exec(n));

    )
      (c = s[0]),
        (f = n.substring(g, s.index)),
        l ? (l = (l + 1) % 5) : "rgba(" === f.substr(-5) && (l = 1),
        c !== u[v++] &&
          ((h = parseFloat(u[v - 1]) || 0),
          (_._pt = {
            _next: _._pt,
            p: f || 1 === v ? f : ",",
            s: h,
            c: "=" === c.charAt(1) ? Yt(h, c) - h : parseFloat(c) - h,
            m: l && l < 4 ? Math.round : 0,
          }),
          (g = dt.lastIndex));
    return (
      (_.c = g < n.length ? n.substring(g, n.length) : ""),
      (_.fp = a),
      (_t.test(n) || p) && (_.e = 0),
      (this._pt = _),
      _
    );
  },
  _r = function (t, e, r, n, i, o, a, s, u, l) {
    rt(n) && (n = n(i || 0, t, o));
    var c,
      f = t[e],
      h =
        "get" !== r
          ? r
          : rt(f)
          ? u
            ? t[
                e.indexOf("set") || !rt(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](u)
            : t[e]()
          : f,
      p = rt(f) ? (u ? Er : Or) : Tr;
    if (
      (et(n) &&
        (~n.indexOf("random(") && (n = De(n)),
        "=" === n.charAt(1) &&
          ((c = Yt(h, n) + (Oe(h) || 0)) || 0 === c) &&
          (n = c)),
      !l || h !== n || pr)
    )
      return isNaN(h * n) || "" === n
        ? (!f && !(e in t) && wt(e, n),
          dr.call(this, t, e, h, n, p, s || H.stringFilter, u))
        : ((c = new Ir(
            this._pt,
            t,
            e,
            +h || 0,
            n - (h || 0),
            "boolean" == typeof f ? kr : Sr,
            0,
            p
          )),
          u && (c.fp = u),
          a && c.modifier(a, this, t),
          (this._pt = c));
  },
  gr = function (t, e, r, n, i, o) {
    var a, s, u, l;
    if (
      Rt[t] &&
      !1 !==
        (a = new Rt[t]()).init(
          i,
          a.rawVars
            ? e[t]
            : (function (t, e, r, n, i) {
                if (
                  (rt(t) && (t = yr(t, i, e, r, n)),
                  !ot(t) || (t.style && t.nodeType) || ct(t) || lt(t))
                )
                  return et(t) ? yr(t, i, e, r, n) : t;
                var o,
                  a = {};
                for (o in t) a[o] = yr(t[o], i, e, r, n);
                return a;
              })(e[t], n, i, o, r),
          r,
          n,
          o
        ) &&
      ((r._pt = s = new Ir(r._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
      r !== O)
    )
      for (u = r._ptLookup[r._targets.indexOf(i)], l = a._props.length; l--; )
        u[a._props[l]] = s;
    return a;
  },
  vr = function t(e, r, n) {
    var i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      h,
      p,
      d,
      v,
      y,
      b = e.vars,
      w = b.ease,
      x = b.startAt,
      T = b.immediateRender,
      O = b.lazy,
      E = b.onUpdate,
      A = b.onUpdateParams,
      M = b.callbackScope,
      S = b.runBackwards,
      k = b.yoyoEase,
      P = b.keyframes,
      R = b.autoRevert,
      C = e._dur,
      L = e._startAt,
      j = e._targets,
      D = e.parent,
      I = D && "nested" === D.data ? D.vars.targets : j,
      N = "auto" === e._overwrite && !_,
      z = e.timeline;
    if (
      (z && (!P || !w) && (w = "none"),
      (e._ease = ir(w, W.ease)),
      (e._yEase = k ? rr(ir(!0 === k ? w : k, W.ease)) : 0),
      k &&
        e._yoyo &&
        !e._repeat &&
        ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)),
      (e._from = !z && !!b.runBackwards),
      !z || (P && !b.stagger))
    ) {
      if (
        ((v = (f = j[0] ? Nt(j[0]).harness : 0) && b[f.prop]),
        (i = Jt(b, St)),
        L &&
          (L._zTime < 0 && L.progress(1),
          r < 0 && S && T && !R ? L.render(-1, !0) : L.revert(S && C ? At : Et),
          (L._lazy = 0)),
        x)
      ) {
        if (
          (ee(
            (e._startAt = xr.set(
              j,
              Vt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: D,
                  immediateRender: !0,
                  lazy: !L && at(O),
                  startAt: null,
                  delay: 0,
                  onUpdate: E,
                  onUpdateParams: A,
                  callbackScope: M,
                  stagger: 0,
                },
                x
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          r < 0 && (g || (!T && !R)) && e._startAt.revert(At),
          T && C && r <= 0 && n <= 0)
        )
          return void (r && (e._zTime = r));
      } else if (S && C && !L)
        if (
          (r && (T = !1),
          (a = Vt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: T && !L && at(O),
              immediateRender: T,
              stagger: 0,
              parent: D,
            },
            i
          )),
          v && (a[f.prop] = v),
          ee((e._startAt = xr.set(j, a))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          r < 0 && (g ? e._startAt.revert(At) : e._startAt.render(-1, !0)),
          (e._zTime = r),
          T)
        ) {
          if (!r) return;
        } else t(e._startAt, V, V);
      for (
        e._pt = e._ptCache = 0, O = (C && at(O)) || (O && !C), o = 0;
        o < j.length;
        o++
      ) {
        if (
          ((c = (u = j[o])._gsap || It(j)[o]._gsap),
          (e._ptLookup[o] = p = {}),
          Pt[c.id] && kt.length && Xt(),
          (d = I === j ? o : I.indexOf(u)),
          f &&
            !1 !== (h = new f()).init(u, v || i, e, d, I) &&
            ((e._pt = s =
              new Ir(e._pt, u, h.name, 0, 1, h.render, h, 0, h.priority)),
            h._props.forEach(function (t) {
              p[t] = s;
            }),
            h.priority && (l = 1)),
          !f || v)
        )
          for (a in i)
            Rt[a] && (h = gr(a, i, e, d, u, I))
              ? h.priority && (l = 1)
              : (p[a] = s =
                  _r.call(e, u, a, "get", i[a], d, I, 0, b.stringFilter));
        e._op && e._op[o] && e.kill(u, e._op[o]),
          N &&
            e._pt &&
            ((hr = e),
            m.killTweensOf(u, p, e.globalTime(r)),
            (y = !e.parent),
            (hr = 0)),
          e._pt && O && (Pt[c.id] = 1);
      }
      l && Dr(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = E),
      (e._initted = (!e._op || e._pt) && !y),
      P && r <= 0 && z.render(G, !0, !0);
  },
  mr = function (t, e, r, n) {
    var i,
      o,
      a = e.ease || n || "power1.inOut";
    if (ct(e))
      (o = r[t] || (r[t] = [])),
        e.forEach(function (t, r) {
          return o.push({ t: (r / (e.length - 1)) * 100, v: t, e: a });
        });
    else
      for (i in e)
        (o = r[i] || (r[i] = [])),
          "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: a });
  },
  yr = function (t, e, r, n, i) {
    return rt(t)
      ? t.call(e, r, n, i)
      : et(t) && ~t.indexOf("random(")
      ? De(t)
      : t;
  },
  br = Dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  wr = {};
Ft(br + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (wr[t] = 1);
});
var xr = (function (t) {
  function e(e, r, n, i) {
    var o;
    "number" == typeof r && ((n.duration = r), (r = n), (n = null));
    var a,
      s,
      u,
      l,
      c,
      f,
      h,
      d,
      g = (o = t.call(this, i ? r : Zt(r)) || this).vars,
      v = g.duration,
      y = g.delay,
      b = g.immediateRender,
      w = g.stagger,
      x = g.overwrite,
      T = g.keyframes,
      O = g.defaults,
      E = g.scrollTrigger,
      A = g.yoyoEase,
      M = r.parent || m,
      S = (ct(e) || lt(e) ? nt(e[0]) : "length" in r) ? [e] : Me(e);
    if (
      ((o._targets = S.length
        ? It(S)
        : xt(
            "GSAP target " + e + " not found. https://greensock.com",
            !H.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = x),
      T || w || ut(v) || ut(y))
    ) {
      if (
        ((r = o.vars),
        (a = o.timeline =
          new fr({
            data: "nested",
            defaults: O || {},
            targets: M && "nested" === M.data ? M.vars.targets : S,
          })).kill(),
        (a.parent = a._dp = p(o)),
        (a._start = 0),
        w || ut(v) || ut(y))
      ) {
        if (((l = S.length), (h = w && Pe(w)), ot(w)))
          for (c in w) ~br.indexOf(c) && (d || (d = {}), (d[c] = w[c]));
        for (s = 0; s < l; s++)
          ((u = Jt(r, wr)).stagger = 0),
            A && (u.yoyoEase = A),
            d && Kt(u, d),
            (f = S[s]),
            (u.duration = +yr(v, p(o), s, f, S)),
            (u.delay = (+yr(y, p(o), s, f, S) || 0) - o._delay),
            !w &&
              1 === l &&
              u.delay &&
              ((o._delay = y = u.delay), (o._start += y), (u.delay = 0)),
            a.to(f, u, h ? h(s, f, S) : 0),
            (a._ease = Ze.none);
        a.duration() ? (v = y = 0) : (o.timeline = 0);
      } else if (T) {
        Zt(Vt(a.vars.defaults, { ease: "none" })),
          (a._ease = ir(T.ease || r.ease || "none"));
        var k,
          P,
          R,
          C = 0;
        if (ct(T))
          T.forEach(function (t) {
            return a.to(S, t, ">");
          }),
            a.duration();
        else {
          for (c in ((u = {}), T))
            "ease" === c || "easeEach" === c || mr(c, T[c], u, T.easeEach);
          for (c in u)
            for (
              k = u[c].sort(function (t, e) {
                return t.t - e.t;
              }),
                C = 0,
                s = 0;
              s < k.length;
              s++
            )
              ((R = {
                ease: (P = k[s]).e,
                duration: ((P.t - (s ? k[s - 1].t : 0)) / 100) * v,
              })[c] = P.v),
                a.to(S, R, C),
                (C += R.duration);
          a.duration() < v && a.to({}, { duration: v - a.duration() });
        }
      }
      v || o.duration((v = a.duration()));
    } else o.timeline = 0;
    return (
      !0 !== x || _ || ((hr = p(o)), m.killTweensOf(S), (hr = 0)),
      he(M, p(o), n),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      (b ||
        (!v &&
          !T &&
          o._start === Bt(M._time) &&
          at(b) &&
          oe(p(o)) &&
          "nested" !== M.data)) &&
        ((o._tTime = -V), o.render(Math.max(0, -y) || 0)),
      E && pe(p(o), E),
      o
    );
  }
  d(e, t);
  var r = e.prototype;
  return (
    (r.render = function (t, e, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        h = this._time,
        p = this._tDur,
        d = this._dur,
        _ = t < 0,
        v = t > p - V && !_ ? p : t < V ? 0 : t;
      if (d) {
        if (
          v !== this._tTime ||
          !t ||
          r ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== _)
        ) {
          if (((n = v), (c = this.timeline), this._repeat)) {
            if (((a = d + this._rDelay), this._repeat < -1 && _))
              return this.totalTime(100 * a + t, e, r);
            if (
              ((n = Bt(v % a)),
              v === p
                ? ((o = this._repeat), (n = d))
                : ((o = ~~(v / a)) && o === v / a && ((n = d), o--),
                  n > d && (n = d)),
              (u = this._yoyo && 1 & o) && ((f = this._yEase), (n = d - n)),
              (s = se(this._tTime, a)),
              n === h && !r && this._initted)
            )
              return (this._tTime = v), this;
            o !== s &&
              (c && this._yEase && nr(c, u),
              !this.vars.repeatRefresh ||
                u ||
                this._lock ||
                ((this._lock = r = 1),
                (this.render(Bt(a * o), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (de(this, _ ? t : n, r, e, v)) return (this._tTime = 0), this;
            if (h !== this._time) return this;
            if (d !== this._dur) return this.render(t, e, r);
          }
          if (
            ((this._tTime = v),
            (this._time = n),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = l = (f || this._ease)(n / d)),
            this._from && (this.ratio = l = 1 - l),
            n && !h && !e && (ze(this, "onStart"), this._tTime !== v))
          )
            return this;
          for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
          (c &&
            c.render(
              t < 0 ? t : !n && u ? -V : c._dur * c._ease(n / this._dur),
              e,
              r
            )) ||
            (this._startAt && (this._zTime = t)),
            this._onUpdate &&
              !e &&
              (_ && ie(this, t, 0, r), ze(this, "onUpdate")),
            this._repeat &&
              o !== s &&
              this.vars.onRepeat &&
              !e &&
              this.parent &&
              ze(this, "onRepeat"),
            (v !== this._tDur && v) ||
              this._tTime !== v ||
              (_ && !this._onUpdate && ie(this, t, 0, !0),
              (t || !d) &&
                ((v === this._tDur && this._ts > 0) || (!v && this._ts < 0)) &&
                ee(this, 1),
              e ||
                (_ && !h) ||
                !(v || h || u) ||
                (ze(this, v === p ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(v < p && this.timeScale() > 0) &&
                  this._prom()));
        }
      } else
        !(function (t, e, r, n) {
          var i,
            o,
            a,
            s = t.ratio,
            u =
              e < 0 ||
              (!e &&
                ((!t._start && _e(t) && (t._initted || !ge(t))) ||
                  ((t._ts < 0 || t._dp._ts < 0) && !ge(t))))
                ? 0
                : 1,
            l = t._rDelay,
            c = 0;
          if (
            (l &&
              t._repeat &&
              ((c = Te(0, t._tDur, e)),
              (o = se(c, l)),
              t._yoyo && 1 & o && (u = 1 - u),
              o !== se(t._tTime, l) &&
                ((s = 1 - u),
                t.vars.repeatRefresh && t._initted && t.invalidate())),
            u !== s || g || n || t._zTime === V || (!e && t._zTime))
          ) {
            if (!t._initted && de(t, e, n, r, c)) return;
            for (
              a = t._zTime,
                t._zTime = e || (r ? V : 0),
                r || (r = e && !a),
                t.ratio = u,
                t._from && (u = 1 - u),
                t._time = 0,
                t._tTime = c,
                i = t._pt;
              i;

            )
              i.r(u, i.d), (i = i._next);
            e < 0 && ie(t, e, 0, !0),
              t._onUpdate && !r && ze(t, "onUpdate"),
              c && t._repeat && !r && t.parent && ze(t, "onRepeat"),
              (e >= t._tDur || e < 0) &&
                t.ratio === u &&
                (u && ee(t, 1),
                r ||
                  g ||
                  (ze(t, u ? "onComplete" : "onReverseComplete", !0),
                  t._prom && t._prom()));
          } else t._zTime || (t._zTime = e);
        })(this, t, e, r);
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (e) {
      return (
        (!e || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(e),
        t.prototype.invalidate.call(this, e)
      );
    }),
    (r.resetTo = function (t, e, r, n) {
      E || $e.wake(), this._ts || this.play();
      var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return (
        this._initted || vr(this, i),
        (function (t, e, r, n, i, o, a) {
          var s,
            u,
            l,
            c,
            f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
          if (!f)
            for (
              f = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length;
              c--;

            ) {
              if ((s = l[c][e]) && s.d && s.d._pt)
                for (s = s.d._pt; s && s.p !== e && s.fp !== e; ) s = s._next;
              if (!s)
                return (pr = 1), (t.vars[e] = "+=0"), vr(t, a), (pr = 0), 1;
              f.push(s);
            }
          for (c = f.length; c--; )
            ((s = (u = f[c])._pt || u).s =
              (!n && 0 !== n) || i ? s.s + (n || 0) + o * s.c : n),
              (s.c = r - s.s),
              u.e && (u.e = qt(r) + Oe(u.e)),
              u.b && (u.b = s.s + Oe(u.b));
        })(this, t, e, r, n, this._ease(i / this._dur), i)
          ? this.resetTo(t, e, r, n)
          : (ce(this, 0),
            this.parent ||
              Qt(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (r.kill = function (t, e) {
      if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
        return (this._lazy = this._pt = 0), this.parent ? Fe(this) : this;
      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(t, e, hr && !0 !== hr.vars.overwrite)
            ._first || Fe(this),
          this.parent &&
            r !== this.timeline.totalDuration() &&
            ve(this, (this._dur * this.timeline._tDur) / r, 0, 1),
          this
        );
      }
      var n,
        i,
        o,
        a,
        s,
        u,
        l,
        c = this._targets,
        f = t ? Me(t) : c,
        h = this._ptLookup,
        p = this._pt;
      if (
        (!e || "all" === e) &&
        (function (t, e) {
          for (
            var r = t.length, n = r === e.length;
            n && r-- && t[r] === e[r];

          );
          return r < 0;
        })(c, f)
      )
        return "all" === e && (this._pt = 0), Fe(this);
      for (
        n = this._op = this._op || [],
          "all" !== e &&
            (et(e) &&
              ((s = {}),
              Ft(e, function (t) {
                return (s[t] = 1);
              }),
              (e = s)),
            (e = (function (t, e) {
              var r,
                n,
                i,
                o,
                a = t[0] ? Nt(t[0]).harness : 0,
                s = a && a.aliases;
              if (!s) return e;
              for (n in ((r = Kt({}, e)), s))
                if ((n in r))
                  for (i = (o = s[n].split(",")).length; i--; ) r[o[i]] = r[n];
              return r;
            })(c, e))),
          l = c.length;
        l--;

      )
        if (~f.indexOf(c[l]))
          for (s in ((i = h[l]),
          "all" === e
            ? ((n[l] = e), (a = i), (o = {}))
            : ((o = n[l] = n[l] || {}), (a = e)),
          a))
            (u = i && i[s]) &&
              (("kill" in u.d && !0 !== u.d.kill(s)) || te(this, u, "_pt"),
              delete i[s]),
              "all" !== o && (o[s] = 1);
      return this._initted && !this._pt && p && Fe(this), this;
    }),
    (e.to = function (t, r) {
      return new e(t, r, arguments[2]);
    }),
    (e.from = function (t, e) {
      return we(1, arguments);
    }),
    (e.delayedCall = function (t, r, n, i) {
      return new e(r, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: r,
        onReverseComplete: r,
        onCompleteParams: n,
        onReverseCompleteParams: n,
        callbackScope: i,
      });
    }),
    (e.fromTo = function (t, e, r) {
      return we(2, arguments);
    }),
    (e.set = function (t, r) {
      return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r);
    }),
    (e.killTweensOf = function (t, e, r) {
      return m.killTweensOf(t, e, r);
    }),
    e
  );
})(cr);
Vt(xr.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  Ft("staggerTo,staggerFrom,staggerFromTo", function (t) {
    xr[t] = function () {
      var e = new fr(),
        r = Ee.call(arguments, 0);
      return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
    };
  });
var Tr = function (t, e, r) {
    return (t[e] = r);
  },
  Or = function (t, e, r) {
    return t[e](r);
  },
  Er = function (t, e, r, n) {
    return t[e](n.fp, r);
  },
  Ar = function (t, e, r) {
    return t.setAttribute(e, r);
  },
  Mr = function (t, e) {
    return rt(t[e]) ? Or : it(t[e]) && t.setAttribute ? Ar : Tr;
  },
  Sr = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
  kr = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  Pr = function (t, e) {
    var r = e._pt,
      n = "";
    if (!t && e.b) n = e.b;
    else if (1 === t && e.e) n = e.e;
    else {
      for (; r; )
        (n =
          r.p +
          (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
          n),
          (r = r._next);
      n += e.c;
    }
    e.set(e.t, e.p, n, e);
  },
  Rr = function (t, e) {
    for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
  },
  Cr = function (t, e, r, n) {
    for (var i, o = this._pt; o; )
      (i = o._next), o.p === n && o.modifier(t, e, r), (o = i);
  },
  Lr = function (t) {
    for (var e, r, n = this._pt; n; )
      (r = n._next),
        (n.p === t && !n.op) || n.op === t
          ? te(this, n, "_pt")
          : n.dep || (e = 1),
        (n = r);
    return !e;
  },
  jr = function (t, e, r, n) {
    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
  },
  Dr = function (t) {
    for (var e, r, n, i, o = t._pt; o; ) {
      for (e = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
      (o._prev = r ? r._prev : i) ? (o._prev._next = o) : (n = o),
        (o._next = r) ? (r._prev = o) : (i = o),
        (o = e);
    }
    t._pt = n;
  },
  Ir = (function () {
    function t(t, e, r, n, i, o, a, s, u) {
      (this.t = e),
        (this.s = n),
        (this.c = i),
        (this.p = r),
        (this.r = o || Sr),
        (this.d = a || this),
        (this.set = s || Tr),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    return (
      (t.prototype.modifier = function (t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = jr),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      t
    );
  })();
Ft(
  Dt +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (St[t] = 1);
  }
),
  (mt.TweenMax = mt.TweenLite = xr),
  (mt.TimelineLite = mt.TimelineMax = fr),
  (m = new fr({
    sortChildren: !1,
    defaults: W,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
  })),
  (H.stringFilter = Ke);
var Nr = [],
  zr = {},
  Fr = [],
  qr = 0,
  Br = function (t) {
    return (zr[t] || Fr).map(function (t) {
      return t();
    });
  },
  Yr = function () {
    var t = Date.now(),
      e = [];
    t - qr > 2 &&
      (Br("matchMediaInit"),
      Nr.forEach(function (t) {
        var r,
          n,
          i,
          o,
          a = t.queries,
          s = t.conditions;
        for (n in a)
          (r = y.matchMedia(a[n]).matches) && (i = 1),
            r !== s[n] && ((s[n] = r), (o = 1));
        o && (t.revert(), i && e.push(t));
      }),
      Br("matchMediaRevert"),
      e.forEach(function (t) {
        return t.onMatch(t);
      }),
      (qr = t),
      Br("matchMedia"));
  },
  Ur = (function () {
    function t(t, e) {
      (this.selector = e && Se(e)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        t && this.add(t);
    }
    var e = t.prototype;
    return (
      (e.add = function (t, e, r) {
        rt(t) && ((r = e), (e = t), (t = rt));
        var n = this,
          i = function () {
            var t,
              i = v,
              o = n.selector;
            return (
              i && i !== n && i.data.push(n),
              r && (n.selector = Se(r)),
              (v = n),
              (t = e.apply(n, arguments)),
              rt(t) && n._r.push(t),
              (v = i),
              (n.selector = o),
              (n.isReverted = !1),
              t
            );
          };
        return (n.last = i), t === rt ? i(n) : t ? (n[t] = i) : i;
      }),
      (e.ignore = function (t) {
        var e = v;
        (v = null), t(this), (v = e);
      }),
      (e.getTweens = function () {
        var e = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof t
              ? e.push.apply(e, r.getTweens())
              : r instanceof xr &&
                  !(r.parent && "nested" === r.parent.data) &&
                  e.push(r);
          }),
          e
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (t, e) {
        var r = this;
        if (t) {
          var n = this.getTweens();
          this.data.forEach(function (t) {
            "isFlip" === t.data &&
              (t.revert(),
              t.getChildren(!0, !0, !1).forEach(function (t) {
                return n.splice(n.indexOf(t), 1);
              }));
          }),
            n
              .map(function (t) {
                return { g: t.globalTime(0), t: t };
              })
              .sort(function (t, e) {
                return e.g - t.g || -1;
              })
              .forEach(function (e) {
                return e.t.revert(t);
              }),
            this.data.forEach(function (e) {
              return !(e instanceof cr) && e.revert && e.revert(t);
            }),
            this._r.forEach(function (e) {
              return e(t, r);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (t) {
            return t.kill && t.kill();
          });
        if ((this.clear(), e)) {
          var i = Nr.indexOf(this);
          ~i && Nr.splice(i, 1);
        }
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      t
    );
  })(),
  Xr = (function () {
    function t(t) {
      (this.contexts = []), (this.scope = t);
    }
    var e = t.prototype;
    return (
      (e.add = function (t, e, r) {
        ot(t) || (t = { matches: t });
        var n,
          i,
          o,
          a = new Ur(0, r || this.scope),
          s = (a.conditions = {});
        for (i in (this.contexts.push(a),
        (e = a.add("onMatch", e)),
        (a.queries = t),
        t))
          "all" === i
            ? (o = 1)
            : (n = y.matchMedia(t[i])) &&
              (Nr.indexOf(a) < 0 && Nr.push(a),
              (s[i] = n.matches) && (o = 1),
              n.addListener
                ? n.addListener(Yr)
                : n.addEventListener("change", Yr));
        return o && e(a), this;
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      (e.kill = function (t) {
        this.contexts.forEach(function (e) {
          return e.kill(t, !0);
        });
      }),
      t
    );
  })(),
  Hr = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return qe(t);
      });
    },
    timeline: function (t) {
      return new fr(t);
    },
    getTweensOf: function (t, e) {
      return m.getTweensOf(t, e);
    },
    getProperty: function (t, e, r, n) {
      et(t) && (t = Me(t)[0]);
      var i = Nt(t || {}).get,
        o = r ? Gt : Wt;
      return (
        "native" === r && (r = ""),
        t
          ? e
            ? o(((Rt[e] && Rt[e].get) || i)(t, e, r, n))
            : function (e, r, n) {
                return o(((Rt[e] && Rt[e].get) || i)(t, e, r, n));
              }
          : t
      );
    },
    quickSetter: function (t, e, r) {
      if ((t = Me(t)).length > 1) {
        var n = t.map(function (t) {
            return Vr.quickSetter(t, e, r);
          }),
          i = n.length;
        return function (t) {
          for (var e = i; e--; ) n[e](t);
        };
      }
      t = t[0] || {};
      var o = Rt[e],
        a = Nt(t),
        s = (a.harness && (a.harness.aliases || {})[e]) || e,
        u = o
          ? function (e) {
              var n = new o();
              (O._pt = 0),
                n.init(t, r ? e + r : e, O, 0, [t]),
                n.render(1, n),
                O._pt && Rr(1, O);
            }
          : a.set(t, s);
      return o
        ? u
        : function (e) {
            return u(t, s, r ? e + r : e, a, 1);
          };
    },
    quickTo: function (t, e, r) {
      var n,
        i = Vr.to(
          t,
          Kt((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {})
        ),
        o = function (t, r, n) {
          return i.resetTo(e, t, r, n);
        };
      return (o.tween = i), o;
    },
    isTweening: function (t) {
      return m.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = ir(t.ease, W.ease)), $t(W, t || {});
    },
    config: function (t) {
      return $t(H, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        r = t.effect,
        n = t.plugins,
        i = t.defaults,
        o = t.extendTimeline;
      (n || "").split(",").forEach(function (t) {
        return (
          t && !Rt[t] && !mt[t] && xt(e + " effect requires " + t + " plugin.")
        );
      }),
        (Ct[e] = function (t, e, n) {
          return r(Me(t), Vt(e || {}, i), n);
        }),
        o &&
          (fr.prototype[e] = function (t, r, n) {
            return this.add(Ct[e](t, ot(r) ? r : (n = r) && {}, this), n);
          });
    },
    registerEase: function (t, e) {
      Ze[t] = ir(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? ir(t, e) : Ze;
    },
    getById: function (t) {
      return m.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var r,
        n,
        i = new fr(t);
      for (
        i.smoothChildTiming = at(t.smoothChildTiming),
          m.remove(i),
          i._dp = 0,
          i._time = i._tTime = m._time,
          r = m._first;
        r;

      )
        (n = r._next),
          (!e &&
            !r._dur &&
            r instanceof xr &&
            r.vars.onComplete === r._targets[0]) ||
            he(i, r, r._start - r._delay),
          (r = n);
      return he(m, i, 0), i;
    },
    context: function (t, e) {
      return t ? new Ur(t, e) : v;
    },
    matchMedia: function (t) {
      return new Xr(t);
    },
    matchMediaRefresh: function () {
      return (
        Nr.forEach(function (t) {
          var e,
            r,
            n = t.conditions;
          for (r in n) n[r] && ((n[r] = !1), (e = 1));
          e && t.revert();
        }) || Yr()
      );
    },
    addEventListener: function (t, e) {
      var r = zr[t] || (zr[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function (t, e) {
      var r = zr[t],
        n = r && r.indexOf(e);
      n >= 0 && r.splice(n, 1);
    },
    utils: {
      wrap: function t(e, r, n) {
        var i = r - e;
        return ct(e)
          ? je(e, t(0, e.length), r)
          : xe(n, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function t(e, r, n) {
        var i = r - e,
          o = 2 * i;
        return ct(e)
          ? je(e, t(0, e.length - 1), r)
          : xe(n, function (t) {
              return e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t);
            });
      },
      distribute: Pe,
      random: Le,
      snap: Ce,
      normalize: function (t, e, r) {
        return Ie(t, e, 0, 1, r);
      },
      getUnit: Oe,
      clamp: function (t, e, r) {
        return xe(r, function (r) {
          return Te(t, e, r);
        });
      },
      splitColor: Xe,
      toArray: Me,
      selector: Se,
      mapRange: Ie,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (r) {
          return t(parseFloat(r)) + (e || Oe(r));
        };
      },
      interpolate: function t(e, r, n, i) {
        var o = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!o) {
          var a,
            s,
            u,
            l,
            c,
            f = et(e),
            h = {};
          if ((!0 === n && (i = 1) && (n = null), f))
            (e = { p: e }), (r = { p: r });
          else if (ct(e) && !ct(r)) {
            for (u = [], l = e.length, c = l - 2, s = 1; s < l; s++)
              u.push(t(e[s - 1], e[s]));
            l--,
              (o = function (t) {
                t *= l;
                var e = Math.min(c, ~~t);
                return u[e](t - e);
              }),
              (n = r);
          } else i || (e = Kt(ct(e) ? [] : {}, e));
          if (!u) {
            for (a in r) _r.call(h, e, a, "get", r[a]);
            o = function (t) {
              return Rr(t, h) || (f ? e.p : e);
            };
          }
        }
        return xe(n, o);
      },
      shuffle: ke,
    },
    install: bt,
    effects: Ct,
    ticker: $e,
    updateRoot: fr.updateRoot,
    plugins: Rt,
    globalTimeline: m,
    core: {
      PropTween: Ir,
      globals: Tt,
      Tween: xr,
      Timeline: fr,
      Animation: cr,
      getCache: Nt,
      _removeLinkedListItem: te,
      reverting: function () {
        return g;
      },
      context: function (t) {
        return t && v && (v.data.push(t), (t._ctx = v)), v;
      },
      suppressOverwrites: function (t) {
        return (_ = t);
      },
    },
  };
Ft("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (Hr[t] = xr[t]);
}),
  $e.add(fr.updateRoot),
  (O = Hr.to({}, { duration: 0 }));
var Wr = function (t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  },
  Gr = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (t, r, n) {
        n._onInit = function (t) {
          var n, i;
          if (
            (et(r) &&
              ((n = {}),
              Ft(r, function (t) {
                return (n[t] = 1);
              }),
              (r = n)),
            e)
          ) {
            for (i in ((n = {}), r)) n[i] = e(r[i]);
            r = n;
          }
          !(function (t, e) {
            var r,
              n,
              i,
              o = t._targets;
            for (r in e)
              for (n = o.length; n--; )
                (i = t._ptLookup[n][r]) &&
                  (i = i.d) &&
                  (i._pt && (i = Wr(i, r)),
                  i && i.modifier && i.modifier(e[r], t, o[n], r));
          })(t, r);
        };
      },
    };
  },
  Vr =
    Hr.registerPlugin(
      {
        name: "attr",
        init: function (t, e, r, n, i) {
          var o, a, s;
          for (o in ((this.tween = r), e))
            (s = t.getAttribute(o) || ""),
              ((a = this.add(
                t,
                "setAttribute",
                (s || 0) + "",
                e[o],
                n,
                i,
                0,
                0,
                o
              )).op = o),
              (a.b = s),
              this._props.push(o);
        },
        render: function (t, e) {
          for (var r = e._pt; r; )
            g ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var r = e.length; r--; )
            this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Gr("roundProps", Re),
      Gr("modifiers"),
      Gr("snap", Ce)
    ) || Hr;
(xr.version = fr.version = Vr.version = "3.11.4"), (x = 1), st() && Je();
Ze.Power0,
  Ze.Power1,
  Ze.Power2,
  Ze.Power3,
  Ze.Power4,
  Ze.Linear,
  Ze.Quad,
  Ze.Cubic,
  Ze.Quart,
  Ze.Quint,
  Ze.Strong,
  Ze.Elastic,
  Ze.Back,
  Ze.SteppedEase,
  Ze.Bounce,
  Ze.Sine,
  Ze.Expo,
  Ze.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Kr,
  $r,
  Jr,
  Zr,
  Qr,
  tn,
  en,
  rn,
  nn = {},
  on = 180 / Math.PI,
  an = Math.PI / 180,
  sn = Math.atan2,
  un = /([A-Z])/g,
  ln = /(left|right|width|margin|padding|x)/i,
  cn = /[\s,\(]\S/,
  fn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  hn = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  },
  pn = function (t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  },
  dn = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  },
  _n = function (t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  gn = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  vn = function (t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  },
  mn = function (t, e, r) {
    return (t.style[e] = r);
  },
  yn = function (t, e, r) {
    return t.style.setProperty(e, r);
  },
  bn = function (t, e, r) {
    return (t._gsap[e] = r);
  },
  wn = function (t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  },
  xn = function (t, e, r, n, i) {
    var o = t._gsap;
    (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
  },
  Tn = function (t, e, r, n, i) {
    var o = t._gsap;
    (o[e] = r), o.renderTransform(i, o);
  },
  On = "transform",
  En = On + "Origin",
  An = function (t, e) {
    var r = this,
      n = this.target,
      i = n.style;
    if (t in nn) {
      if (
        ((this.tfm = this.tfm || {}),
        "transform" !== t &&
          (~(t = fn[t] || t).indexOf(",")
            ? t.split(",").forEach(function (t) {
                return (r.tfm[t] = Xn(n, t));
              })
            : (this.tfm[t] = n._gsap.x ? n._gsap[t] : Xn(n, t))),
        this.props.indexOf(On) >= 0)
      )
        return;
      n._gsap.svg &&
        ((this.svgo = n.getAttribute("data-svg-origin")),
        this.props.push(En, e, "")),
        (t = On);
    }
    (i || e) && this.props.push(t, e, i[t]);
  },
  Mn = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  Sn = function () {
    var t,
      e,
      r = this.props,
      n = this.target,
      i = n.style,
      o = n._gsap;
    for (t = 0; t < r.length; t += 3)
      r[t + 1]
        ? (n[r[t]] = r[t + 2])
        : r[t + 2]
        ? (i[r[t]] = r[t + 2])
        : i.removeProperty(r[t].replace(un, "-$1").toLowerCase());
    if (this.tfm) {
      for (e in this.tfm) o[e] = this.tfm[e];
      o.svg &&
        (o.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        !(t = en()) || t.isStart || i[On] || (Mn(i), (o.uncache = 1));
    }
  },
  kn = function (t, e) {
    var r = { target: t, props: [], revert: Sn, save: An };
    return (
      e &&
        e.split(",").forEach(function (t) {
          return r.save(t);
        }),
      r
    );
  },
  Pn = function (t, e) {
    var r = $r.createElementNS
      ? $r.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : $r.createElement(t);
    return r.style ? r : $r.createElement(t);
  },
  Rn = function t(e, r, n) {
    var i = getComputedStyle(e);
    return (
      i[r] ||
      i.getPropertyValue(r.replace(un, "-$1").toLowerCase()) ||
      i.getPropertyValue(r) ||
      (!n && t(e, Ln(r) || r, 1)) ||
      ""
    );
  },
  Cn = "O,Moz,ms,Ms,Webkit".split(","),
  Ln = function (t, e, r) {
    var n = (e || Qr).style,
      i = 5;
    if (t in n && !r) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      i-- && !(Cn[i] + t in n);

    );
    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Cn[i] : "") + t;
  },
  jn = function () {
    "undefined" != typeof window &&
      window.document &&
      ((Kr = window),
      ($r = Kr.document),
      (Jr = $r.documentElement),
      (Qr = Pn("div") || { style: {} }),
      Pn("div"),
      (On = Ln(On)),
      (En = On + "Origin"),
      (Qr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (rn = !!Ln("perspective")),
      (en = Vr.core.reverting),
      (Zr = 1));
  },
  Dn = function t(e) {
    var r,
      n = Pn(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      o = this.nextSibling,
      a = this.style.cssText;
    if (
      (Jr.appendChild(n),
      n.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (r = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch (t) {}
    else this._gsapBBox && (r = this._gsapBBox());
    return (
      i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
      Jr.removeChild(n),
      (this.style.cssText = a),
      r
    );
  },
  In = function (t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  },
  Nn = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch (r) {
      e = Dn.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === Dn || (e = Dn.call(t, !0)),
      !e || e.width || e.x || e.y
        ? e
        : {
            x: +In(t, ["x", "cx", "x1"]) || 0,
            y: +In(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  },
  zn = function (t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Nn(t));
  },
  Fn = function (t, e) {
    if (e) {
      var r = t.style;
      e in nn && e !== En && (e = On),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(un, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  },
  qn = function (t, e, r, n, i, o) {
    var a = new Ir(t._pt, e, r, 0, 1, o ? vn : gn);
    return (t._pt = a), (a.b = n), (a.e = i), t._props.push(r), a;
  },
  Bn = { deg: 1, rad: 1, turn: 1 },
  Yn = { grid: 1, flex: 1 },
  Un = function t(e, r, n, i) {
    var o,
      a,
      s,
      u,
      l = parseFloat(n) || 0,
      c = (n + "").trim().substr((l + "").length) || "px",
      f = Qr.style,
      h = ln.test(r),
      p = "svg" === e.tagName.toLowerCase(),
      d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
      _ = 100,
      g = "px" === i,
      v = "%" === i;
    return i === c || !l || Bn[i] || Bn[c]
      ? l
      : ("px" !== c && !g && (l = t(e, r, n, "px")),
        (u = e.getCTM && zn(e)),
        (!v && "%" !== c) || (!nn[r] && !~r.indexOf("adius"))
          ? ((f[h ? "width" : "height"] = _ + (g ? c : i)),
            (a =
              ~r.indexOf("adius") || ("em" === i && e.appendChild && !p)
                ? e
                : e.parentNode),
            u && (a = (e.ownerSVGElement || {}).parentNode),
            (a && a !== $r && a.appendChild) || (a = $r.body),
            (s = a._gsap) &&
            v &&
            s.width &&
            h &&
            s.time === $e.time &&
            !s.uncache
              ? qt((l / s.width) * _)
              : ((v || "%" === c) &&
                  !Yn[Rn(a, "display")] &&
                  (f.position = Rn(e, "position")),
                a === e && (f.position = "static"),
                a.appendChild(Qr),
                (o = Qr[d]),
                a.removeChild(Qr),
                (f.position = "absolute"),
                h && v && (((s = Nt(a)).time = $e.time), (s.width = a[d])),
                qt(g ? (o * l) / _ : o && l ? (_ / o) * l : 0)))
          : ((o = u ? e.getBBox()[h ? "width" : "height"] : e[d]),
            qt(v ? (l / o) * _ : (l / 100) * o)));
  },
  Xn = function (t, e, r, n) {
    var i;
    return (
      Zr || jn(),
      e in fn &&
        "transform" !== e &&
        ~(e = fn[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      nn[e] && "transform" !== e
        ? ((i = ei(t, n)),
          (i =
            "transformOrigin" !== e
              ? i[e]
              : i.svg
              ? i.origin
              : ri(Rn(t, En)) + " " + i.zOrigin + "px"))
        : (!(i = t.style[e]) ||
            "auto" === i ||
            n ||
            ~(i + "").indexOf("calc(")) &&
          (i =
            (Vn[e] && Vn[e](t, e, r)) ||
            Rn(t, e) ||
            zt(t, e) ||
            ("opacity" === e ? 1 : 0)),
      r && !~(i + "").trim().indexOf(" ") ? Un(t, e, i, r) + r : i
    );
  },
  Hn = function (t, e, r, n) {
    if (!r || "none" === r) {
      var i = Ln(e, t, 1),
        o = i && Rn(t, i, 1);
      o && o !== r
        ? ((e = i), (r = o))
        : "borderColor" === e && (r = Rn(t, "borderTopColor"));
    }
    var a,
      s,
      u,
      l,
      c,
      f,
      h,
      p,
      d,
      _,
      g,
      v = new Ir(this._pt, t.style, e, 0, 1, Pr),
      m = 0,
      y = 0;
    if (
      ((v.b = r),
      (v.e = n),
      (r += ""),
      "auto" === (n += "") &&
        ((t.style[e] = n), (n = Rn(t, e) || n), (t.style[e] = r)),
      Ke((a = [r, n])),
      (n = a[1]),
      (u = (r = a[0]).match(pt) || []),
      (n.match(pt) || []).length)
    ) {
      for (; (s = pt.exec(n)); )
        (h = s[0]),
          (d = n.substring(m, s.index)),
          c
            ? (c = (c + 1) % 5)
            : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) || (c = 1),
          h !== (f = u[y++] || "") &&
            ((l = parseFloat(f) || 0),
            (g = f.substr((l + "").length)),
            "=" === h.charAt(1) && (h = Yt(l, h) + g),
            (p = parseFloat(h)),
            (_ = h.substr((p + "").length)),
            (m = pt.lastIndex - _.length),
            _ ||
              ((_ = _ || H.units[e] || g),
              m === n.length && ((n += _), (v.e += _))),
            g !== _ && (l = Un(t, e, f, _) || 0),
            (v._pt = {
              _next: v._pt,
              p: d || 1 === y ? d : ",",
              s: l,
              c: p - l,
              m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
            }));
      v.c = m < n.length ? n.substring(m, n.length) : "";
    } else v.r = "display" === e && "none" === n ? vn : gn;
    return _t.test(n) && (v.e = 0), (this._pt = v), v;
  },
  Wn = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Gn = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        n,
        i,
        o = e.t,
        a = o.style,
        s = e.u,
        u = o._gsap;
      if ("all" === s || !0 === s) (a.cssText = ""), (n = 1);
      else
        for (i = (s = s.split(",")).length; --i > -1; )
          (r = s[i]),
            nn[r] && ((n = 1), (r = "transformOrigin" === r ? En : On)),
            Fn(o, r);
      n &&
        (Fn(o, On),
        u &&
          (u.svg && o.removeAttribute("transform"),
          ei(o, 1),
          (u.uncache = 1),
          Mn(a)));
    }
  },
  Vn = {
    clearProps: function (t, e, r, n, i) {
      if ("isFromStart" !== i.data) {
        var o = (t._pt = new Ir(t._pt, e, r, 0, 0, Gn));
        return (o.u = n), (o.pr = -10), (o.tween = i), t._props.push(r), 1;
      }
    },
  },
  Kn = [1, 0, 0, 1, 0, 0],
  $n = {},
  Jn = function (t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  },
  Zn = function (t) {
    var e = Rn(t, On);
    return Jn(e) ? Kn : e.substr(7).match(ht).map(qt);
  },
  Qn = function (t, e) {
    var r,
      n,
      i,
      o,
      a = t._gsap || Nt(t),
      s = t.style,
      u = Zn(t);
    return a.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (i = t.transform.baseVal.consolidate().matrix).a,
          i.b,
          i.c,
          i.d,
          i.e,
          i.f,
        ]).join(",")
        ? Kn
        : u
      : (u !== Kn ||
          t.offsetParent ||
          t === Jr ||
          a.svg ||
          ((i = s.display),
          (s.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((o = 1), (n = t.nextElementSibling), Jr.appendChild(t)),
          (u = Zn(t)),
          i ? (s.display = i) : Fn(t, "display"),
          o &&
            (n
              ? r.insertBefore(t, n)
              : r
              ? r.appendChild(t)
              : Jr.removeChild(t))),
        e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  },
  ti = function (t, e, r, n, i, o) {
    var a,
      s,
      u,
      l = t._gsap,
      c = i || Qn(t, !0),
      f = l.xOrigin || 0,
      h = l.yOrigin || 0,
      p = l.xOffset || 0,
      d = l.yOffset || 0,
      _ = c[0],
      g = c[1],
      v = c[2],
      m = c[3],
      y = c[4],
      b = c[5],
      w = e.split(" "),
      x = parseFloat(w[0]) || 0,
      T = parseFloat(w[1]) || 0;
    r
      ? c !== Kn &&
        (s = _ * m - g * v) &&
        ((u = x * (-g / s) + T * (_ / s) - (_ * b - g * y) / s),
        (x = x * (m / s) + T * (-v / s) + (v * b - m * y) / s),
        (T = u))
      : ((x = (a = Nn(t)).x + (~w[0].indexOf("%") ? (x / 100) * a.width : x)),
        (T = a.y + (~(w[1] || w[0]).indexOf("%") ? (T / 100) * a.height : T))),
      n || (!1 !== n && l.smooth)
        ? ((y = x - f),
          (b = T - h),
          (l.xOffset = p + (y * _ + b * v) - y),
          (l.yOffset = d + (y * g + b * m) - b))
        : (l.xOffset = l.yOffset = 0),
      (l.xOrigin = x),
      (l.yOrigin = T),
      (l.smooth = !!n),
      (l.origin = e),
      (l.originIsAbsolute = !!r),
      (t.style[En] = "0px 0px"),
      o &&
        (qn(o, l, "xOrigin", f, x),
        qn(o, l, "yOrigin", h, T),
        qn(o, l, "xOffset", p, l.xOffset),
        qn(o, l, "yOffset", d, l.yOffset)),
      t.setAttribute("data-svg-origin", x + " " + T);
  },
  ei = function (t, e) {
    var r = t._gsap || new lr(t);
    if ("x" in r && !e && !r.uncache) return r;
    var n,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      h,
      p,
      d,
      _,
      g,
      v,
      m,
      y,
      b,
      w,
      x,
      T,
      O,
      E,
      A,
      M,
      S,
      k,
      P,
      R,
      C,
      L,
      j,
      D = t.style,
      I = r.scaleX < 0,
      N = "px",
      z = "deg",
      F = getComputedStyle(t),
      q = Rn(t, En) || "0";
    return (
      (n = i = o = u = l = c = f = h = p = 0),
      (a = s = 1),
      (r.svg = !(!t.getCTM || !zn(t))),
      F.translate &&
        (("none" === F.translate &&
          "none" === F.scale &&
          "none" === F.rotate) ||
          (D[On] =
            ("none" !== F.translate
              ? "translate3d(" +
                (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") +
            ("none" !== F.scale
              ? "scale(" + F.scale.split(" ").join(",") + ") "
              : "") +
            ("none" !== F[On] ? F[On] : "")),
        (D.scale = D.rotate = D.translate = "none")),
      (g = Qn(t, r.svg)),
      r.svg &&
        (r.uncache
          ? ((M = t.getBBox()),
            (q = r.xOrigin - M.x + "px " + (r.yOrigin - M.y) + "px"),
            (A = ""))
          : (A = !e && t.getAttribute("data-svg-origin")),
        ti(t, A || q, !!A || r.originIsAbsolute, !1 !== r.smooth, g)),
      (d = r.xOrigin || 0),
      (_ = r.yOrigin || 0),
      g !== Kn &&
        ((b = g[0]),
        (w = g[1]),
        (x = g[2]),
        (T = g[3]),
        (n = O = g[4]),
        (i = E = g[5]),
        6 === g.length
          ? ((a = Math.sqrt(b * b + w * w)),
            (s = Math.sqrt(T * T + x * x)),
            (u = b || w ? sn(w, b) * on : 0),
            (f = x || T ? sn(x, T) * on + u : 0) &&
              (s *= Math.abs(Math.cos(f * an))),
            r.svg && ((n -= d - (d * b + _ * x)), (i -= _ - (d * w + _ * T))))
          : ((j = g[6]),
            (C = g[7]),
            (k = g[8]),
            (P = g[9]),
            (R = g[10]),
            (L = g[11]),
            (n = g[12]),
            (i = g[13]),
            (o = g[14]),
            (l = (v = sn(j, R)) * on),
            v &&
              ((A = O * (m = Math.cos(-v)) + k * (y = Math.sin(-v))),
              (M = E * m + P * y),
              (S = j * m + R * y),
              (k = O * -y + k * m),
              (P = E * -y + P * m),
              (R = j * -y + R * m),
              (L = C * -y + L * m),
              (O = A),
              (E = M),
              (j = S)),
            (c = (v = sn(-x, R)) * on),
            v &&
              ((m = Math.cos(-v)),
              (L = T * (y = Math.sin(-v)) + L * m),
              (b = A = b * m - k * y),
              (w = M = w * m - P * y),
              (x = S = x * m - R * y)),
            (u = (v = sn(w, b)) * on),
            v &&
              ((A = b * (m = Math.cos(v)) + w * (y = Math.sin(v))),
              (M = O * m + E * y),
              (w = w * m - b * y),
              (E = E * m - O * y),
              (b = A),
              (O = M)),
            l &&
              Math.abs(l) + Math.abs(u) > 359.9 &&
              ((l = u = 0), (c = 180 - c)),
            (a = qt(Math.sqrt(b * b + w * w + x * x))),
            (s = qt(Math.sqrt(E * E + j * j))),
            (v = sn(O, E)),
            (f = Math.abs(v) > 2e-4 ? v * on : 0),
            (p = L ? 1 / (L < 0 ? -L : L) : 0)),
        r.svg &&
          ((A = t.getAttribute("transform")),
          (r.forceCSS = t.setAttribute("transform", "") || !Jn(Rn(t, On))),
          A && t.setAttribute("transform", A))),
      Math.abs(f) > 90 &&
        Math.abs(f) < 270 &&
        (I
          ? ((a *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180))
          : ((s *= -1), (f += f <= 0 ? 180 : -180))),
      (e = e || r.uncache),
      (r.x =
        n -
        ((r.xPercent =
          n &&
          ((!e && r.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
          ? (t.offsetWidth * r.xPercent) / 100
          : 0) +
        N),
      (r.y =
        i -
        ((r.yPercent =
          i &&
          ((!e && r.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
          ? (t.offsetHeight * r.yPercent) / 100
          : 0) +
        N),
      (r.z = o + N),
      (r.scaleX = qt(a)),
      (r.scaleY = qt(s)),
      (r.rotation = qt(u) + z),
      (r.rotationX = qt(l) + z),
      (r.rotationY = qt(c) + z),
      (r.skewX = f + z),
      (r.skewY = h + z),
      (r.transformPerspective = p + N),
      (r.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (D[En] = ri(q)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = H.force3D),
      (r.renderTransform = r.svg ? li : rn ? ui : ii),
      (r.uncache = 0),
      r
    );
  },
  ri = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  ni = function (t, e, r) {
    var n = Oe(e);
    return qt(parseFloat(e) + parseFloat(Un(t, "x", r + "px", n))) + n;
  },
  ii = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      ui(t, e);
  },
  oi = "0deg",
  ai = "0px",
  si = ") ",
  ui = function (t, e) {
    var r = e || this,
      n = r.xPercent,
      i = r.yPercent,
      o = r.x,
      a = r.y,
      s = r.z,
      u = r.rotation,
      l = r.rotationY,
      c = r.rotationX,
      f = r.skewX,
      h = r.skewY,
      p = r.scaleX,
      d = r.scaleY,
      _ = r.transformPerspective,
      g = r.force3D,
      v = r.target,
      m = r.zOrigin,
      y = "",
      b = ("auto" === g && t && 1 !== t) || !0 === g;
    if (m && (c !== oi || l !== oi)) {
      var w,
        x = parseFloat(l) * an,
        T = Math.sin(x),
        O = Math.cos(x);
      (x = parseFloat(c) * an),
        (w = Math.cos(x)),
        (o = ni(v, o, T * w * -m)),
        (a = ni(v, a, -Math.sin(x) * -m)),
        (s = ni(v, s, O * w * -m + m));
    }
    _ !== ai && (y += "perspective(" + _ + si),
      (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
      (b || o !== ai || a !== ai || s !== ai) &&
        (y +=
          s !== ai || b
            ? "translate3d(" + o + ", " + a + ", " + s + ") "
            : "translate(" + o + ", " + a + si),
      u !== oi && (y += "rotate(" + u + si),
      l !== oi && (y += "rotateY(" + l + si),
      c !== oi && (y += "rotateX(" + c + si),
      (f === oi && h === oi) || (y += "skew(" + f + ", " + h + si),
      (1 === p && 1 === d) || (y += "scale(" + p + ", " + d + si),
      (v.style[On] = y || "translate(0, 0)");
  },
  li = function (t, e) {
    var r,
      n,
      i,
      o,
      a,
      s = e || this,
      u = s.xPercent,
      l = s.yPercent,
      c = s.x,
      f = s.y,
      h = s.rotation,
      p = s.skewX,
      d = s.skewY,
      _ = s.scaleX,
      g = s.scaleY,
      v = s.target,
      m = s.xOrigin,
      y = s.yOrigin,
      b = s.xOffset,
      w = s.yOffset,
      x = s.forceCSS,
      T = parseFloat(c),
      O = parseFloat(f);
    (h = parseFloat(h)),
      (p = parseFloat(p)),
      (d = parseFloat(d)) && ((p += d = parseFloat(d)), (h += d)),
      h || p
        ? ((h *= an),
          (p *= an),
          (r = Math.cos(h) * _),
          (n = Math.sin(h) * _),
          (i = Math.sin(h - p) * -g),
          (o = Math.cos(h - p) * g),
          p &&
            ((d *= an),
            (a = Math.tan(p - d)),
            (i *= a = Math.sqrt(1 + a * a)),
            (o *= a),
            d &&
              ((a = Math.tan(d)), (r *= a = Math.sqrt(1 + a * a)), (n *= a))),
          (r = qt(r)),
          (n = qt(n)),
          (i = qt(i)),
          (o = qt(o)))
        : ((r = _), (o = g), (n = i = 0)),
      ((T && !~(c + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
        ((T = Un(v, "x", c, "px")), (O = Un(v, "y", f, "px"))),
      (m || y || b || w) &&
        ((T = qt(T + m - (m * r + y * i) + b)),
        (O = qt(O + y - (m * n + y * o) + w))),
      (u || l) &&
        ((a = v.getBBox()),
        (T = qt(T + (u / 100) * a.width)),
        (O = qt(O + (l / 100) * a.height))),
      (a =
        "matrix(" + r + "," + n + "," + i + "," + o + "," + T + "," + O + ")"),
      v.setAttribute("transform", a),
      x && (v.style[On] = a);
  },
  ci = function (t, e, r, n, i) {
    var o,
      a,
      s = 360,
      u = et(i),
      l = parseFloat(i) * (u && ~i.indexOf("rad") ? on : 1) - n,
      c = n + l + "deg";
    return (
      u &&
        ("short" === (o = i.split("_")[1]) &&
          (l %= s) !== l % 180 &&
          (l += l < 0 ? s : -360),
        "cw" === o && l < 0
          ? (l = ((l + 36e9) % s) - ~~(l / s) * s)
          : "ccw" === o && l > 0 && (l = ((l - 36e9) % s) - ~~(l / s) * s)),
      (t._pt = a = new Ir(t._pt, e, r, n, l, pn)),
      (a.e = c),
      (a.u = "deg"),
      t._props.push(r),
      a
    );
  },
  fi = function (t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  },
  hi = function (t, e, r) {
    var n,
      i,
      o,
      a,
      s,
      u,
      l,
      c = fi({}, r._gsap),
      f = r.style;
    for (i in (c.svg
      ? ((o = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (f[On] = e),
        (n = ei(r, 1)),
        Fn(r, On),
        r.setAttribute("transform", o))
      : ((o = getComputedStyle(r)[On]),
        (f[On] = e),
        (n = ei(r, 1)),
        (f[On] = o)),
    nn))
      (o = c[i]) !== (a = n[i]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
        ((s = Oe(o) !== (l = Oe(a)) ? Un(r, i, o, l) : parseFloat(o)),
        (u = parseFloat(a)),
        (t._pt = new Ir(t._pt, n, i, s, u - s, hn)),
        (t._pt.u = l || 0),
        t._props.push(i));
    fi(n, c);
  };
Ft("padding,margin,Width,Radius", function (t, e) {
  var r = "Top",
    n = "Right",
    i = "Bottom",
    o = "Left",
    a = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(function (r) {
      return e < 2 ? t + r : "border" + r + t;
    });
  Vn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
    var o, s;
    if (arguments.length < 4)
      return (
        (o = a.map(function (e) {
          return Xn(t, e, r);
        })),
        5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
      );
    (o = (n + "").split(" ")),
      (s = {}),
      a.forEach(function (t, e) {
        return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
      }),
      t.init(e, s, i);
  };
});
var pi,
  di,
  _i,
  gi = {
    name: "css",
    register: jn,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, r, n, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        _,
        g,
        v,
        m,
        y,
        b,
        w,
        x,
        T,
        O,
        E = this._props,
        A = t.style,
        M = r.vars.startAt;
      for (f in (Zr || jn(),
      (this.styles = this.styles || kn(t)),
      (b = this.styles.props),
      (this.tween = r),
      e))
        if ("autoRound" !== f && ((a = e[f]), !Rt[f] || !gr(f, e, r, n, t, i)))
          if (
            ((l = typeof a),
            (c = Vn[f]),
            "function" === l && (l = typeof (a = a.call(r, n, t, i))),
            "string" === l && ~a.indexOf("random(") && (a = De(a)),
            c)
          )
            c(this, t, f, a, r) && (y = 1);
          else if ("--" === f.substr(0, 2))
            (o = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
              (a += ""),
              (Ge.lastIndex = 0),
              Ge.test(o) || ((h = Oe(o)), (p = Oe(a))),
              p ? h !== p && (o = Un(t, f, o, p) + p) : h && (a += h),
              this.add(A, "setProperty", o, a, n, i, 0, 0, f),
              E.push(f),
              b.push(f, 0, A[f]);
          else if ("undefined" !== l) {
            if (
              (M && f in M
                ? ((o =
                    "function" == typeof M[f] ? M[f].call(r, n, t, i) : M[f]),
                  et(o) && ~o.indexOf("random(") && (o = De(o)),
                  Oe(o + "") || (o += H.units[f] || Oe(Xn(t, f)) || ""),
                  "=" === (o + "").charAt(1) && (o = Xn(t, f)))
                : (o = Xn(t, f)),
              (u = parseFloat(o)),
              (d = "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) &&
                (a = a.substr(2)),
              (s = parseFloat(a)),
              f in fn &&
                ("autoAlpha" === f &&
                  (1 === u && "hidden" === Xn(t, "visibility") && s && (u = 0),
                  b.push("visibility", 0, A.visibility),
                  qn(
                    this,
                    A,
                    "visibility",
                    u ? "inherit" : "hidden",
                    s ? "inherit" : "hidden",
                    !s
                  )),
                "scale" !== f &&
                  "transform" !== f &&
                  ~(f = fn[f]).indexOf(",") &&
                  (f = f.split(",")[0])),
              (_ = f in nn))
            )
              if (
                (this.styles.save(f),
                g ||
                  (((v = t._gsap).renderTransform && !e.parseTransform) ||
                    ei(t, e.parseTransform),
                  (m = !1 !== e.smoothOrigin && v.smooth),
                  ((g = this._pt =
                    new Ir(
                      this._pt,
                      A,
                      On,
                      0,
                      1,
                      v.renderTransform,
                      v,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === f)
              )
                (this._pt = new Ir(
                  this._pt,
                  v,
                  "scaleY",
                  v.scaleY,
                  (d ? Yt(v.scaleY, d + s) : s) - v.scaleY || 0,
                  hn
                )),
                  (this._pt.u = 0),
                  E.push("scaleY", f),
                  (f += "X");
              else {
                if ("transformOrigin" === f) {
                  b.push(En, 0, A[En]),
                    (x = void 0),
                    (T = void 0),
                    (O = void 0),
                    (x = (w = a).split(" ")),
                    (T = x[0]),
                    (O = x[1] || "50%"),
                    ("top" !== T &&
                      "bottom" !== T &&
                      "left" !== O &&
                      "right" !== O) ||
                      ((w = T), (T = O), (O = w)),
                    (x[0] = Wn[T] || T),
                    (x[1] = Wn[O] || O),
                    (a = x.join(" ")),
                    v.svg
                      ? ti(t, a, 0, m, 0, this)
                      : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin &&
                          qn(this, v, "zOrigin", v.zOrigin, p),
                        qn(this, A, f, ri(o), ri(a)));
                  continue;
                }
                if ("svgOrigin" === f) {
                  ti(t, a, 1, m, 0, this);
                  continue;
                }
                if (f in $n) {
                  ci(this, v, f, u, d ? Yt(u, d + a) : a);
                  continue;
                }
                if ("smoothOrigin" === f) {
                  qn(this, v, "smooth", v.smooth, a);
                  continue;
                }
                if ("force3D" === f) {
                  v[f] = a;
                  continue;
                }
                if ("transform" === f) {
                  hi(this, a, t);
                  continue;
                }
              }
            else f in A || (f = Ln(f) || f);
            if (
              _ ||
              ((s || 0 === s) && (u || 0 === u) && !cn.test(a) && f in A)
            )
              s || (s = 0),
                (h = (o + "").substr((u + "").length)) !==
                  (p = Oe(a) || (f in H.units ? H.units[f] : h)) &&
                  (u = Un(t, f, o, p)),
                (this._pt = new Ir(
                  this._pt,
                  _ ? v : A,
                  f,
                  u,
                  (d ? Yt(u, d + s) : s) - u,
                  _ || ("px" !== p && "zIndex" !== f) || !1 === e.autoRound
                    ? hn
                    : _n
                )),
                (this._pt.u = p || 0),
                h !== p && "%" !== p && ((this._pt.b = o), (this._pt.r = dn));
            else if (f in A) Hn.call(this, t, f, o, d ? d + a : a);
            else if (f in t) this.add(t, f, o || t[f], d ? d + a : a, n, i);
            else if ("parseTransform" !== f) {
              wt(f, a);
              continue;
            }
            _ || (f in A ? b.push(f, 0, A[f]) : b.push(f, 1, o || t[f])),
              E.push(f);
          }
      y && Dr(this);
    },
    render: function (t, e) {
      if (e.tween._time || !en())
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      else e.styles.revert();
    },
    get: Xn,
    aliases: fn,
    getSetter: function (t, e, r) {
      var n = fn[e];
      return (
        n && n.indexOf(",") < 0 && (e = n),
        e in nn && e !== En && (t._gsap.x || Xn(t, "x"))
          ? r && tn === r
            ? "scale" === e
              ? wn
              : bn
            : ((tn = r || {}), "scale" === e ? xn : Tn)
          : t.style && !it(t.style[e])
          ? mn
          : ~e.indexOf("-")
          ? yn
          : Mr(t, e)
      );
    },
    core: { _removeProperty: Fn, _getMatrix: Qn },
  };
(Vr.utils.checkPrefix = Ln),
  (Vr.core.getStyleSaver = kn),
  (_i = Ft(
    (pi = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
      "," +
      (di = "rotation,rotationX,rotationY,skewX,skewY") +
      ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    function (t) {
      nn[t] = 1;
    }
  )),
  Ft(di, function (t) {
    (H.units[t] = "deg"), ($n[t] = 1);
  }),
  (fn[_i[13]] = pi + "," + di),
  Ft(
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
    function (t) {
      var e = t.split(":");
      fn[e[1]] = _i[e[0]];
    }
  ),
  Ft(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (t) {
      H.units[t] = "px";
    }
  ),
  Vr.registerPlugin(gi);
var vi = Vr.registerPlugin(gi) || Vr;
/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ vi.core.Tween;
function mi(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var yi,
  bi,
  wi,
  xi,
  Ti,
  Oi,
  Ei,
  Ai,
  Mi,
  Si,
  ki,
  Pi,
  Ri,
  Ci = function () {
    return (
      yi ||
      ("undefined" != typeof window &&
        (yi = window.gsap) &&
        yi.registerPlugin &&
        yi)
    );
  },
  Li = 1,
  ji = [],
  Di = [],
  Ii = [],
  Ni = Date.now,
  zi = function (t, e) {
    return e;
  },
  Fi = function (t, e) {
    return ~Ii.indexOf(t) && Ii[Ii.indexOf(t) + 1][e];
  },
  qi = function (t) {
    return !!~Si.indexOf(t);
  },
  Bi = function (t, e, r, n, i) {
    return t.addEventListener(e, r, { passive: !n, capture: !!i });
  },
  Yi = function (t, e, r, n) {
    return t.removeEventListener(e, r, !!n);
  },
  Ui = "scrollLeft",
  Xi = "scrollTop",
  Hi = function () {
    return (ki && ki.isPressed) || Di.cache++;
  },
  Wi = function (t, e) {
    var r = function r(n) {
      if (n || 0 === n) {
        Li && (wi.history.scrollRestoration = "manual");
        var i = ki && ki.isPressed;
        (n = r.v = Math.round(n) || (ki && ki.iOS ? 1 : 0)),
          t(n),
          (r.cacheID = Di.cache),
          i && zi("ss", n);
      } else
        (e || Di.cache !== r.cacheID || zi("ref")) &&
          ((r.cacheID = Di.cache), (r.v = t()));
      return r.v + r.offset;
    };
    return (r.offset = 0), t && r;
  },
  Gi = {
    s: Ui,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Wi(function (t) {
      return arguments.length
        ? wi.scrollTo(t, Vi.sc())
        : wi.pageXOffset || xi[Ui] || Ti[Ui] || Oi[Ui] || 0;
    }),
  },
  Vi = {
    s: Xi,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Gi,
    sc: Wi(function (t) {
      return arguments.length
        ? wi.scrollTo(Gi.sc(), t)
        : wi.pageYOffset || xi[Xi] || Ti[Xi] || Oi[Xi] || 0;
    }),
  },
  Ki = function (t) {
    return (
      yi.utils.toArray(t)[0] ||
      ("string" == typeof t && !1 !== yi.config().nullTargetWarn
        ? console.warn("Element not found:", t)
        : null)
    );
  },
  $i = function (t, e) {
    var r = e.s,
      n = e.sc;
    qi(t) && (t = xi.scrollingElement || Ti);
    var i = Di.indexOf(t),
      o = n === Vi.sc ? 1 : 2;
    !~i && (i = Di.push(t) - 1), Di[i + o] || t.addEventListener("scroll", Hi);
    var a = Di[i + o],
      s =
        a ||
        (Di[i + o] =
          Wi(Fi(t, r), !0) ||
          (qi(t)
            ? n
            : Wi(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = "smooth" === yi.getProperty(t, "scrollBehavior")),
      s
    );
  },
  Ji = function (t, e, r) {
    var n = t,
      i = t,
      o = Ni(),
      a = o,
      s = e || 50,
      u = Math.max(500, 3 * s),
      l = function (t, e) {
        var u = Ni();
        e || u - o > s
          ? ((i = n), (n = t), (a = o), (o = u))
          : r
          ? (n += t)
          : (n = i + ((t - i) / (u - a)) * (o - a));
      };
    return {
      update: l,
      reset: function () {
        (i = n = r ? 0 : n), (a = o = 0);
      },
      getVelocity: function (t) {
        var e = a,
          s = i,
          c = Ni();
        return (
          (t || 0 === t) && t !== n && l(t),
          o === a || c - a > u
            ? 0
            : ((n + (r ? s : -s)) / ((r ? c : o) - e)) * 1e3
        );
      },
    };
  },
  Zi = function (t, e) {
    return (
      e && !t._gsapAllow && t.preventDefault(),
      t.changedTouches ? t.changedTouches[0] : t
    );
  },
  Qi = function (t) {
    var e = Math.max.apply(Math, t),
      r = Math.min.apply(Math, t);
    return Math.abs(e) >= Math.abs(r) ? e : r;
  },
  to = function () {
    var t, e, r, n;
    (Mi = yi.core.globals().ScrollTrigger) &&
      Mi.core &&
      ((t = Mi.core),
      (e = t.bridge || {}),
      (r = t._scrollers),
      (n = t._proxies),
      r.push.apply(r, Di),
      n.push.apply(n, Ii),
      (Di = r),
      (Ii = n),
      (zi = function (t, r) {
        return e[t](r);
      }));
  },
  eo = function (t) {
    return (
      (yi = t || Ci()) &&
        "undefined" != typeof document &&
        document.body &&
        ((wi = window),
        (xi = document),
        (Ti = xi.documentElement),
        (Oi = xi.body),
        (Si = [wi, xi, Ti, Oi]),
        yi.utils.clamp,
        (Ri = yi.core.context || function () {}),
        (Ai = "onpointerenter" in Oi ? "pointer" : "mouse"),
        (Ei = ro.isTouch =
          wi.matchMedia &&
          wi.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in wi ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Pi = ro.eventTypes =
          (
            "ontouchstart" in Ti
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Ti
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Li = 0);
        }, 500),
        to(),
        (bi = 1)),
      bi
    );
  };
(Gi.op = Vi), (Di.cache = 0);
var ro = (function () {
  function t(t) {
    this.init(t);
  }
  var e, r, n;
  return (
    (t.prototype.init = function (t) {
      bi || eo(yi) || console.warn("Please gsap.registerPlugin(Observer)"),
        Mi || to();
      var e = t.tolerance,
        r = t.dragMinimum,
        n = t.type,
        i = t.target,
        o = t.lineHeight,
        a = t.debounce,
        s = t.preventDefault,
        u = t.onStop,
        l = t.onStopDelay,
        c = t.ignore,
        f = t.wheelSpeed,
        h = t.event,
        p = t.onDragStart,
        d = t.onDragEnd,
        _ = t.onDrag,
        g = t.onPress,
        v = t.onRelease,
        m = t.onRight,
        y = t.onLeft,
        b = t.onUp,
        w = t.onDown,
        x = t.onChangeX,
        T = t.onChangeY,
        O = t.onChange,
        E = t.onToggleX,
        A = t.onToggleY,
        M = t.onHover,
        S = t.onHoverEnd,
        k = t.onMove,
        P = t.ignoreCheck,
        R = t.isNormalizer,
        C = t.onGestureStart,
        L = t.onGestureEnd,
        j = t.onWheel,
        D = t.onEnable,
        I = t.onDisable,
        N = t.onClick,
        z = t.scrollSpeed,
        F = t.capture,
        q = t.allowClicks,
        B = t.lockAxis,
        Y = t.onLockAxis;
      (this.target = i = Ki(i) || Ti),
        (this.vars = t),
        c && (c = yi.utils.toArray(c)),
        (e = e || 1e-9),
        (r = r || 0),
        (f = f || 1),
        (z = z || 1),
        (n = n || "wheel,touch,pointer"),
        (a = !1 !== a),
        o || (o = parseFloat(wi.getComputedStyle(Oi).lineHeight) || 22);
      var U,
        X,
        H,
        W,
        G,
        V,
        K,
        $ = this,
        J = 0,
        Z = 0,
        Q = $i(i, Gi),
        tt = $i(i, Vi),
        et = Q(),
        rt = tt(),
        nt =
          ~n.indexOf("touch") &&
          !~n.indexOf("pointer") &&
          "pointerdown" === Pi[0],
        it = qi(i),
        ot = i.ownerDocument || xi,
        at = [0, 0, 0],
        st = [0, 0, 0],
        ut = 0,
        lt = function () {
          return (ut = Ni());
        },
        ct = function (t, e) {
          return (
            (($.event = t) && c && ~c.indexOf(t.target)) ||
            (e && nt && "touch" !== t.pointerType) ||
            (P && P(t, e))
          );
        },
        ft = function () {
          var t = ($.deltaX = Qi(at)),
            r = ($.deltaY = Qi(st)),
            n = Math.abs(t) >= e,
            i = Math.abs(r) >= e;
          O && (n || i) && O($, t, r, at, st),
            n &&
              (m && $.deltaX > 0 && m($),
              y && $.deltaX < 0 && y($),
              x && x($),
              E && $.deltaX < 0 != J < 0 && E($),
              (J = $.deltaX),
              (at[0] = at[1] = at[2] = 0)),
            i &&
              (w && $.deltaY > 0 && w($),
              b && $.deltaY < 0 && b($),
              T && T($),
              A && $.deltaY < 0 != Z < 0 && A($),
              (Z = $.deltaY),
              (st[0] = st[1] = st[2] = 0)),
            (W || H) && (k && k($), H && (_($), (H = !1)), (W = !1)),
            V && ((V = !1), 1) && Y && Y($),
            G && (j($), (G = !1)),
            (U = 0);
        },
        ht = function (t, e, r) {
          (at[r] += t),
            (st[r] += e),
            $._vx.update(t),
            $._vy.update(e),
            a ? U || (U = requestAnimationFrame(ft)) : ft();
        },
        pt = function (t, e) {
          B &&
            !K &&
            (($.axis = K = Math.abs(t) > Math.abs(e) ? "x" : "y"), (V = !0)),
            "y" !== K && ((at[2] += t), $._vx.update(t, !0)),
            "x" !== K && ((st[2] += e), $._vy.update(e, !0)),
            a ? U || (U = requestAnimationFrame(ft)) : ft();
        },
        dt = function (t) {
          if (!ct(t, 1)) {
            var e = (t = Zi(t, s)).clientX,
              n = t.clientY,
              i = e - $.x,
              o = n - $.y,
              a = $.isDragging;
            ($.x = e),
              ($.y = n),
              (a ||
                Math.abs($.startX - e) >= r ||
                Math.abs($.startY - n) >= r) &&
                (_ && (H = !0),
                a || ($.isDragging = !0),
                pt(i, o),
                a || (p && p($)));
          }
        },
        _t = ($.onPress = function (t) {
          ct(t, 1) ||
            (($.axis = K = null),
            X.pause(),
            ($.isPressed = !0),
            (t = Zi(t)),
            (J = Z = 0),
            ($.startX = $.x = t.clientX),
            ($.startY = $.y = t.clientY),
            $._vx.reset(),
            $._vy.reset(),
            Bi(R ? i : ot, Pi[1], dt, s, !0),
            ($.deltaX = $.deltaY = 0),
            g && g($));
        }),
        gt = function (t) {
          if (!ct(t, 1)) {
            Yi(R ? i : ot, Pi[1], dt, !0);
            var e = !isNaN($.y - $.startY),
              r =
                $.isDragging &&
                (Math.abs($.x - $.startX) > 3 || Math.abs($.y - $.startY) > 3),
              n = Zi(t);
            !r &&
              e &&
              ($._vx.reset(),
              $._vy.reset(),
              s &&
                q &&
                yi.delayedCall(0.08, function () {
                  if (Ni() - ut > 300 && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (ot.createEvent) {
                      var e = ot.createEvent("MouseEvents");
                      e.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        wi,
                        1,
                        n.screenX,
                        n.screenY,
                        n.clientX,
                        n.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        t.target.dispatchEvent(e);
                    }
                })),
              ($.isDragging = $.isGesturing = $.isPressed = !1),
              u && !R && X.restart(!0),
              d && r && d($),
              v && v($, r);
          }
        },
        vt = function (t) {
          return (
            t.touches &&
            t.touches.length > 1 &&
            ($.isGesturing = !0) &&
            C(t, $.isDragging)
          );
        },
        mt = function () {
          return ($.isGesturing = !1), L($);
        },
        yt = function (t) {
          if (!ct(t)) {
            var e = Q(),
              r = tt();
            ht((e - et) * z, (r - rt) * z, 1),
              (et = e),
              (rt = r),
              u && X.restart(!0);
          }
        },
        bt = function (t) {
          if (!ct(t)) {
            (t = Zi(t, s)), j && (G = !0);
            var e =
              (1 === t.deltaMode ? o : 2 === t.deltaMode ? wi.innerHeight : 1) *
              f;
            ht(t.deltaX * e, t.deltaY * e, 0), u && !R && X.restart(!0);
          }
        },
        wt = function (t) {
          if (!ct(t)) {
            var e = t.clientX,
              r = t.clientY,
              n = e - $.x,
              i = r - $.y;
            ($.x = e), ($.y = r), (W = !0), (n || i) && pt(n, i);
          }
        },
        xt = function (t) {
          ($.event = t), M($);
        },
        Tt = function (t) {
          ($.event = t), S($);
        },
        Ot = function (t) {
          return ct(t) || (Zi(t, s) && N($));
        };
      (X = $._dc =
        yi
          .delayedCall(l || 0.25, function () {
            $._vx.reset(), $._vy.reset(), X.pause(), u && u($);
          })
          .pause()),
        ($.deltaX = $.deltaY = 0),
        ($._vx = Ji(0, 50, !0)),
        ($._vy = Ji(0, 50, !0)),
        ($.scrollX = Q),
        ($.scrollY = tt),
        ($.isDragging = $.isGesturing = $.isPressed = !1),
        Ri(this),
        ($.enable = function (t) {
          return (
            $.isEnabled ||
              (Bi(it ? ot : i, "scroll", Hi),
              n.indexOf("scroll") >= 0 && Bi(it ? ot : i, "scroll", yt, s, F),
              n.indexOf("wheel") >= 0 && Bi(i, "wheel", bt, s, F),
              ((n.indexOf("touch") >= 0 && Ei) || n.indexOf("pointer") >= 0) &&
                (Bi(i, Pi[0], _t, s, F),
                Bi(ot, Pi[2], gt),
                Bi(ot, Pi[3], gt),
                q && Bi(i, "click", lt, !1, !0),
                N && Bi(i, "click", Ot),
                C && Bi(ot, "gesturestart", vt),
                L && Bi(ot, "gestureend", mt),
                M && Bi(i, Ai + "enter", xt),
                S && Bi(i, Ai + "leave", Tt),
                k && Bi(i, Ai + "move", wt)),
              ($.isEnabled = !0),
              t && t.type && _t(t),
              D && D($)),
            $
          );
        }),
        ($.disable = function () {
          $.isEnabled &&
            (ji.filter(function (t) {
              return t !== $ && qi(t.target);
            }).length || Yi(it ? ot : i, "scroll", Hi),
            $.isPressed &&
              ($._vx.reset(), $._vy.reset(), Yi(R ? i : ot, Pi[1], dt, !0)),
            Yi(it ? ot : i, "scroll", yt, F),
            Yi(i, "wheel", bt, F),
            Yi(i, Pi[0], _t, F),
            Yi(ot, Pi[2], gt),
            Yi(ot, Pi[3], gt),
            Yi(i, "click", lt, !0),
            Yi(i, "click", Ot),
            Yi(ot, "gesturestart", vt),
            Yi(ot, "gestureend", mt),
            Yi(i, Ai + "enter", xt),
            Yi(i, Ai + "leave", Tt),
            Yi(i, Ai + "move", wt),
            ($.isEnabled = $.isPressed = $.isDragging = !1),
            I && I($));
        }),
        ($.kill = $.revert =
          function () {
            $.disable();
            var t = ji.indexOf($);
            t >= 0 && ji.splice(t, 1), ki === $ && (ki = 0);
          }),
        ji.push($),
        R && qi(i) && (ki = $),
        $.enable(h);
    }),
    (e = t),
    (r = [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]) && mi(e.prototype, r),
    n && mi(e, n),
    t
  );
})();
(ro.version = "3.11.4"),
  (ro.create = function (t) {
    return new ro(t);
  }),
  (ro.register = eo),
  (ro.getAll = function () {
    return ji.slice();
  }),
  (ro.getById = function (t) {
    return ji.filter(function (e) {
      return e.vars.id === t;
    })[0];
  }),
  Ci() && yi.registerPlugin(ro);
var no,
  io,
  oo,
  ao,
  so,
  uo,
  lo,
  co,
  fo,
  ho,
  po,
  _o,
  go,
  vo,
  mo,
  yo,
  bo,
  wo,
  xo,
  To,
  Oo,
  Eo,
  Ao,
  Mo,
  So,
  ko,
  Po,
  Ro,
  Co,
  Lo,
  jo,
  Do,
  Io,
  No,
  zo = 1,
  Fo = Date.now,
  qo = Fo(),
  Bo = 0,
  Yo = 0,
  Uo = function () {
    return (vo = 1);
  },
  Xo = function () {
    return (vo = 0);
  },
  Ho = function (t) {
    return t;
  },
  Wo = function (t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  },
  Go = function () {
    return "undefined" != typeof window;
  },
  Vo = function () {
    return no || (Go() && (no = window.gsap) && no.registerPlugin && no);
  },
  Ko = function (t) {
    return !!~lo.indexOf(t);
  },
  $o = function (t) {
    return (
      Fi(t, "getBoundingClientRect") ||
      (Ko(t)
        ? function () {
            return (ss.width = oo.innerWidth), (ss.height = oo.innerHeight), ss;
          }
        : function () {
            return xa(t);
          })
    );
  },
  Jo = function (t, e) {
    var r = e.s,
      n = e.d2,
      i = e.d,
      o = e.a;
    return (o = Fi(t, (r = "scroll" + n)))
      ? o() - $o(t)()[i]
      : Ko(t)
      ? (so[r] || uo[r]) -
        (oo["inner" + n] || so["client" + n] || uo["client" + n])
      : t[r] - t["offset" + n];
  },
  Zo = function (t, e) {
    for (var r = 0; r < xo.length; r += 3)
      (!e || ~e.indexOf(xo[r + 1])) && t(xo[r], xo[r + 1], xo[r + 2]);
  },
  Qo = function (t) {
    return "string" == typeof t;
  },
  ta = function (t) {
    return "function" == typeof t;
  },
  ea = function (t) {
    return "number" == typeof t;
  },
  ra = function (t) {
    return "object" == typeof t;
  },
  na = function (t, e, r) {
    return t && t.progress(e ? 0 : 1) && r && t.pause();
  },
  ia = function (t, e) {
    if (t.enabled) {
      var r = e(t);
      r && r.totalTime && (t.callbackAnimation = r);
    }
  },
  oa = Math.abs,
  aa = "left",
  sa = "right",
  ua = "bottom",
  la = "width",
  ca = "height",
  fa = "Right",
  ha = "Left",
  pa = "Top",
  da = "Bottom",
  _a = "padding",
  ga = "margin",
  va = "Width",
  ma = "Height",
  ya = "px",
  ba = function (t) {
    return oo.getComputedStyle(t);
  },
  wa = function (t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  },
  xa = function (t, e) {
    var r =
        e &&
        "matrix(1, 0, 0, 1, 0, 0)" !== ba(t)[mo] &&
        no
          .to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      n = t.getBoundingClientRect();
    return r && r.progress(0).kill(), n;
  },
  Ta = function (t, e) {
    var r = e.d2;
    return t["offset" + r] || t["client" + r] || 0;
  },
  Oa = function (t) {
    var e,
      r = [],
      n = t.labels,
      i = t.duration();
    for (e in n) r.push(n[e] / i);
    return r;
  },
  Ea = function (t) {
    var e = no.utils.snap(t),
      r =
        Array.isArray(t) &&
        t.slice(0).sort(function (t, e) {
          return t - e;
        });
    return r
      ? function (t, n, i) {
          var o;
          if ((void 0 === i && (i = 0.001), !n)) return e(t);
          if (n > 0) {
            for (t -= i, o = 0; o < r.length; o++) if (r[o] >= t) return r[o];
            return r[o - 1];
          }
          for (o = r.length, t += i; o--; ) if (r[o] <= t) return r[o];
          return r[0];
        }
      : function (r, n, i) {
          void 0 === i && (i = 0.001);
          var o = e(r);
          return !n || Math.abs(o - r) < i || o - r < 0 == n < 0
            ? o
            : e(n < 0 ? r - t : r + t);
        };
  },
  Aa = function (t, e, r, n) {
    return r.split(",").forEach(function (r) {
      return t(e, r, n);
    });
  },
  Ma = function (t, e, r, n, i) {
    return t.addEventListener(e, r, { passive: !n, capture: !!i });
  },
  Sa = function (t, e, r, n) {
    return t.removeEventListener(e, r, !!n);
  },
  ka = function (t, e, r) {
    return r && r.wheelHandler && t(e, "wheel", r);
  },
  Pa = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Ra = { toggleActions: "play", anticipatePin: 0 },
  Ca = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  La = function (t, e) {
    if (Qo(t)) {
      var r = t.indexOf("="),
        n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
      ~r && (t.indexOf("%") > r && (n *= e / 100), (t = t.substr(0, r - 1))),
        (t =
          n +
          (t in Ca
            ? Ca[t] * e
            : ~t.indexOf("%")
            ? (parseFloat(t) * e) / 100
            : parseFloat(t) || 0));
    }
    return t;
  },
  ja = function (t, e, r, n, i, o, a, s) {
    var u = i.startColor,
      l = i.endColor,
      c = i.fontSize,
      f = i.indent,
      h = i.fontWeight,
      p = ao.createElement("div"),
      d = Ko(r) || "fixed" === Fi(r, "pinType"),
      _ = -1 !== t.indexOf("scroller"),
      g = d ? uo : r,
      v = -1 !== t.indexOf("start"),
      m = v ? u : l,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        c +
        ";color:" +
        m +
        ";font-weight:" +
        h +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((_ || s) && d ? "fixed;" : "absolute;")),
      (_ || s || !d) &&
        (y += (n === Vi ? sa : ua) + ":" + (o + parseFloat(f)) + "px;"),
      a &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = v),
      p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
      (p.style.cssText = y),
      (p.innerText = e || 0 === e ? t + "-" + e : t),
      g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      Da(p, 0, n, v),
      p
    );
  },
  Da = function (t, e, r, n) {
    var i = { display: "block" },
      o = r[n ? "os2" : "p2"],
      a = r[n ? "p2" : "os2"];
    (t._isFlipped = n),
      (i[r.a + "Percent"] = n ? -100 : 0),
      (i[r.a] = n ? "1px" : 0),
      (i["border" + o + va] = 1),
      (i["border" + a + va] = 0),
      (i[r.p] = e + "px"),
      no.set(t, i);
  },
  Ia = [],
  Na = {},
  za = function () {
    return Fo() - Bo > 34 && (jo || (jo = requestAnimationFrame(ts)));
  },
  Fa = function () {
    (!Ao || !Ao.isPressed || Ao.startX > uo.clientWidth) &&
      (Di.cache++,
      Ao ? jo || (jo = requestAnimationFrame(ts)) : ts(),
      Bo || Ha("scrollStart"),
      (Bo = Fo()));
  },
  qa = function () {
    (ko = oo.innerWidth), (So = oo.innerHeight);
  },
  Ba = function () {
    Di.cache++,
      !go &&
        !Eo &&
        !ao.fullscreenElement &&
        !ao.webkitFullscreenElement &&
        (!Mo ||
          ko !== oo.innerWidth ||
          Math.abs(oo.innerHeight - So) > 0.25 * oo.innerHeight) &&
        co.restart(!0);
  },
  Ya = {},
  Ua = [],
  Xa = function t() {
    return Sa(hs, "scrollEnd", t) || Ja(!0);
  },
  Ha = function (t) {
    return (
      (Ya[t] &&
        Ya[t].map(function (t) {
          return t();
        })) ||
      Ua
    );
  },
  Wa = [],
  Ga = function (t) {
    for (var e = 0; e < Wa.length; e += 5)
      (!t || (Wa[e + 4] && Wa[e + 4].query === t)) &&
        ((Wa[e].style.cssText = Wa[e + 1]),
        Wa[e].getBBox && Wa[e].setAttribute("transform", Wa[e + 2] || ""),
        (Wa[e + 3].uncache = 1));
  },
  Va = function (t, e) {
    var r;
    for (yo = 0; yo < Ia.length; yo++)
      !(r = Ia[yo]) ||
        (e && r._ctx !== e) ||
        (t ? r.kill(1) : r.revert(!0, !0));
    e && Ga(e), e || Ha("revert");
  },
  Ka = function (t, e) {
    Di.cache++,
      (e || !Do) &&
        Di.forEach(function (t) {
          return ta(t) && t.cacheID++ && (t.rec = 0);
        }),
      Qo(t) && (oo.history.scrollRestoration = Co = t);
  },
  $a = 0,
  Ja = function (t, e) {
    if (!Bo || t) {
      (Do = hs.isRefreshing = !0),
        Di.forEach(function (t) {
          return ta(t) && t.cacheID++ && (t.rec = t());
        });
      var r = Ha("refreshInit");
      To && hs.sort(),
        e || Va(),
        Di.forEach(function (t) {
          ta(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
        }),
        Ia.slice(0).forEach(function (t) {
          return t.refresh();
        }),
        Ia.forEach(function (t, e) {
          if (t._subPinOffset && t.pin) {
            var r = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
              n = t.pin[r];
            t.revert(!0, 1), t.adjustPinSpacing(t.pin[r] - n), t.revert(!1, 1);
          }
        }),
        Ia.forEach(function (t) {
          return (
            "max" === t.vars.end &&
            t.setPositions(
              t.start,
              Math.max(t.start + 1, Jo(t.scroller, t._dir))
            )
          );
        }),
        r.forEach(function (t) {
          return t && t.render && t.render(-1);
        }),
        Di.forEach(function (t) {
          ta(t) &&
            (t.smooth &&
              requestAnimationFrame(function () {
                return (t.target.style.scrollBehavior = "smooth");
              }),
            t.rec && t(t.rec));
        }),
        Ka(Co, 1),
        co.pause(),
        $a++,
        ts(2),
        Ia.forEach(function (t) {
          return ta(t.vars.onRefresh) && t.vars.onRefresh(t);
        }),
        (Do = hs.isRefreshing = !1),
        Ha("refresh");
    } else Ma(hs, "scrollEnd", Xa);
  },
  Za = 0,
  Qa = 1,
  ts = function (t) {
    if (!Do || 2 === t) {
      (hs.isUpdating = !0), No && No.update(0);
      var e = Ia.length,
        r = Fo(),
        n = r - qo >= 50,
        i = e && Ia[0].scroll();
      if (
        ((Qa = Za > i ? -1 : 1),
        (Za = i),
        n &&
          (Bo && !vo && r - Bo > 200 && ((Bo = 0), Ha("scrollEnd")),
          (po = qo),
          (qo = r)),
        Qa < 0)
      ) {
        for (yo = e; yo-- > 0; ) Ia[yo] && Ia[yo].update(0, n);
        Qa = 1;
      } else for (yo = 0; yo < e; yo++) Ia[yo] && Ia[yo].update(0, n);
      hs.isUpdating = !1;
    }
    jo = 0;
  },
  es = [
    aa,
    "top",
    ua,
    sa,
    ga + da,
    ga + fa,
    ga + pa,
    ga + ha,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  rs = es.concat([
    la,
    ca,
    "boxSizing",
    "max" + va,
    "max" + ma,
    "position",
    ga,
    _a,
    _a + pa,
    _a + fa,
    _a + da,
    _a + ha,
  ]),
  ns = function (t, e, r, n) {
    if (!t._gsap.swappedIn) {
      for (var i, o = es.length, a = e.style, s = t.style; o--; )
        a[(i = es[o])] = r[i];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[ua] = s[sa] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[la] = Ta(t, Gi) + ya),
        (a[ca] = Ta(t, Vi) + ya),
        (a[_a] = s[ga] = s.top = s[aa] = "0"),
        os(n),
        (s[la] = s["max" + va] = r[la]),
        (s[ca] = s["max" + ma] = r[ca]),
        (s[_a] = r[_a]),
        t.parentNode !== e &&
          (t.parentNode.insertBefore(e, t), e.appendChild(t)),
        (t._gsap.swappedIn = !0);
    }
  },
  is = /([A-Z])/g,
  os = function (t) {
    if (t) {
      var e,
        r,
        n = t.t.style,
        i = t.length,
        o = 0;
      for ((t.t._gsap || no.core.getCache(t.t)).uncache = 1; o < i; o += 2)
        (r = t[o + 1]),
          (e = t[o]),
          r
            ? (n[e] = r)
            : n[e] && n.removeProperty(e.replace(is, "-$1").toLowerCase());
    }
  },
  as = function (t) {
    for (var e = rs.length, r = t.style, n = [], i = 0; i < e; i++)
      n.push(rs[i], r[rs[i]]);
    return (n.t = t), n;
  },
  ss = { left: 0, top: 0 },
  us = function (t, e, r, n, i, o, a, s, u, l, c, f, h) {
    ta(t) && (t = t(s)),
      Qo(t) &&
        "max" === t.substr(0, 3) &&
        (t = f + ("=" === t.charAt(4) ? La("0" + t.substr(3), r) : 0));
    var p,
      d,
      _,
      g = h ? h.time() : 0;
    if ((h && h.seek(0), ea(t))) a && Da(a, r, n, !0);
    else {
      ta(e) && (e = e(s));
      var v,
        m,
        y,
        b,
        w = (t || "0").split(" ");
      (_ = Ki(e) || uo),
        ((v = xa(_) || {}) && (v.left || v.top)) ||
          "none" !== ba(_).display ||
          ((b = _.style.display),
          (_.style.display = "block"),
          (v = xa(_)),
          b ? (_.style.display = b) : _.style.removeProperty("display")),
        (m = La(w[0], v[n.d])),
        (y = La(w[1] || "0", r)),
        (t = v[n.p] - u[n.p] - l + m + i - y),
        a && Da(a, y, n, r - y < 20 || (a._isStart && y > 20)),
        (r -= r - y);
    }
    if (o) {
      var x = t + r,
        T = o._isStart;
      (p = "scroll" + n.d2),
        Da(
          o,
          x,
          n,
          (T && x > 20) ||
            (!T && (c ? Math.max(uo[p], so[p]) : o.parentNode[p]) <= x + 1)
        ),
        c &&
          ((u = xa(a)),
          c && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + ya));
    }
    return (
      h &&
        _ &&
        ((p = xa(_)),
        h.seek(f),
        (d = xa(_)),
        (h._caScrollDist = p[n.p] - d[n.p]),
        (t = (t / h._caScrollDist) * f)),
      h && h.seek(g),
      h ? t : Math.round(t)
    );
  },
  ls = /(webkit|moz|length|cssText|inset)/i,
  cs = function (t, e, r, n) {
    if (t.parentNode !== e) {
      var i,
        o,
        a = t.style;
      if (e === uo) {
        for (i in ((t._stOrig = a.cssText), (o = ba(t))))
          +i ||
            ls.test(i) ||
            !o[i] ||
            "string" != typeof a[i] ||
            "0" === i ||
            (a[i] = o[i]);
        (a.top = r), (a.left = n);
      } else a.cssText = t._stOrig;
      (no.core.getCache(t).uncache = 1), e.appendChild(t);
    }
  },
  fs = function (t, e) {
    var r,
      n,
      i = $i(t, e),
      o = "_scroll" + e.p2,
      a = function e(a, s, u, l, c) {
        var f = e.tween,
          h = s.onComplete,
          p = {};
        return (
          (u = u || i()),
          (c = (l && c) || 0),
          (l = l || a - u),
          f && f.kill(),
          (r = Math.round(u)),
          (s[o] = a),
          (s.modifiers = p),
          (p[o] = function (t) {
            return (
              (t = Math.round(i())) !== r &&
              t !== n &&
              Math.abs(t - r) > 3 &&
              Math.abs(t - n) > 3
                ? (f.kill(), (e.tween = 0))
                : (t = u + l * f.ratio + c * f.ratio * f.ratio),
              (n = r),
              (r = Math.round(t))
            );
          }),
          (s.onUpdate = function () {
            Di.cache++, ts();
          }),
          (s.onComplete = function () {
            (e.tween = 0), h && h.call(f);
          }),
          (f = e.tween = no.to(t, s))
        );
      };
    return (
      (t[o] = i),
      (i.wheelHandler = function () {
        return a.tween && a.tween.kill() && (a.tween = 0);
      }),
      Ma(t, "wheel", i.wheelHandler),
      a
    );
  },
  hs = (function () {
    function t(e, r) {
      io ||
        t.register(no) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(e, r);
    }
    return (
      (t.prototype.init = function (e, r) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), Yo)
        ) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            _,
            g,
            v,
            m,
            y,
            b,
            w,
            x,
            T,
            O,
            E,
            A,
            M,
            S,
            k,
            P,
            R,
            C,
            L,
            j,
            D,
            I,
            N,
            z,
            F,
            q,
            B,
            Y,
            U,
            X,
            H = (e = wa(Qo(e) || ea(e) || e.nodeType ? { trigger: e } : e, Ra)),
            W = H.onUpdate,
            G = H.toggleClass,
            V = H.id,
            K = H.onToggle,
            $ = H.onRefresh,
            J = H.scrub,
            Z = H.trigger,
            Q = H.pin,
            tt = H.pinSpacing,
            et = H.invalidateOnRefresh,
            rt = H.anticipatePin,
            nt = H.onScrubComplete,
            it = H.onSnapComplete,
            ot = H.once,
            at = H.snap,
            st = H.pinReparent,
            ut = H.pinSpacer,
            lt = H.containerAnimation,
            ct = H.fastScrollEnd,
            ft = H.preventOverlaps,
            ht =
              e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                ? Gi
                : Vi,
            pt = !J && 0 !== J,
            dt = Ki(e.scroller || oo),
            _t = no.core.getCache(dt),
            gt = Ko(dt),
            vt =
              "fixed" ===
              ("pinType" in e
                ? e.pinType
                : Fi(dt, "pinType") || (gt && "fixed")),
            mt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            yt = pt && e.toggleActions.split(" "),
            bt = "markers" in e ? e.markers : Ra.markers,
            wt = gt ? 0 : parseFloat(ba(dt)["border" + ht.p2 + va]) || 0,
            xt = this,
            Tt =
              e.onRefreshInit &&
              function () {
                return e.onRefreshInit(xt);
              },
            Ot = (function (t, e, r) {
              var n = r.d,
                i = r.d2,
                o = r.a;
              return (o = Fi(t, "getBoundingClientRect"))
                ? function () {
                    return o()[n];
                  }
                : function () {
                    return (e ? oo["inner" + i] : t["client" + i]) || 0;
                  };
            })(dt, gt, ht),
            Et = (function (t, e) {
              return !e || ~Ii.indexOf(t)
                ? $o(t)
                : function () {
                    return ss;
                  };
            })(dt, gt),
            At = 0,
            Mt = 0,
            St = $i(dt, ht);
          if (
            (Ro(xt),
            (xt._dir = ht),
            (rt *= 45),
            (xt.scroller = dt),
            (xt.scroll = lt ? lt.time.bind(lt) : St),
            (a = St()),
            (xt.vars = e),
            (r = r || e.animation),
            "refreshPriority" in e &&
              ((To = 1), -9999 === e.refreshPriority && (No = xt)),
            (_t.tweenScroll = _t.tweenScroll || {
              top: fs(dt, Vi),
              left: fs(dt, Gi),
            }),
            (xt.tweenTo = n = _t.tweenScroll[ht.p]),
            (xt.scrubDuration = function (t) {
              (j = ea(t) && t)
                ? L
                  ? L.duration(t)
                  : (L = no.to(r, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: j,
                      paused: !0,
                      onComplete: function () {
                        return nt && nt(xt);
                      },
                    }))
                : (L && L.progress(1).kill(), (L = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              r._initted ||
                (!1 !== r.vars.immediateRender &&
                  !1 !== e.immediateRender &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (xt.animation = r.pause()),
              (r.scrollTrigger = xt),
              xt.scrubDuration(J),
              (R = 0),
              V || (V = r.vars.id)),
            Ia.push(xt),
            at &&
              ((ra(at) && !at.push) || (at = { snapTo: at }),
              "scrollBehavior" in uo.style &&
                no.set(gt ? [uo, so] : dt, { scrollBehavior: "auto" }),
              Di.forEach(function (t) {
                return (
                  ta(t) &&
                  t.target === (gt ? ao.scrollingElement || so : dt) &&
                  (t.smooth = !1)
                );
              }),
              (o = ta(at.snapTo)
                ? at.snapTo
                : "labels" === at.snapTo
                ? (function (t) {
                    return function (e) {
                      return no.utils.snap(Oa(t), e);
                    };
                  })(r)
                : "labelsDirectional" === at.snapTo
                ? ((Y = r),
                  function (t, e) {
                    return Ea(Oa(Y))(t, e.direction);
                  })
                : !1 !== at.directional
                ? function (t, e) {
                    return Ea(at.snapTo)(t, Fo() - Mt < 500 ? 0 : e.direction);
                  }
                : no.utils.snap(at.snapTo)),
              (D = at.duration || { min: 0.1, max: 2 }),
              (D = ra(D) ? ho(D.min, D.max) : ho(D, D)),
              (I = no
                .delayedCall(at.delay || j / 2 || 0.1, function () {
                  var t = St(),
                    e = Fo() - Mt < 500,
                    i = n.tween;
                  if (
                    !(e || Math.abs(xt.getVelocity()) < 10) ||
                    i ||
                    vo ||
                    At === t
                  )
                    xt.isActive && At !== t && I.restart(!0);
                  else {
                    var a = (t - u) / _,
                      s = r && !pt ? r.totalProgress() : a,
                      c = e ? 0 : ((s - C) / (Fo() - po)) * 1e3 || 0,
                      f = no.utils.clamp(-a, 1 - a, (oa(c / 2) * c) / 0.185),
                      h = a + (!1 === at.inertia ? 0 : f),
                      p = ho(0, 1, o(h, xt)),
                      d = Math.round(u + p * _),
                      g = at,
                      v = g.onStart,
                      m = g.onInterrupt,
                      y = g.onComplete;
                    if (t <= l && t >= u && d !== t) {
                      if (i && !i._initted && i.data <= oa(d - t)) return;
                      !1 === at.inertia && (f = p - a),
                        n(
                          d,
                          {
                            duration: D(
                              oa(
                                (0.185 * Math.max(oa(h - s), oa(p - s))) /
                                  c /
                                  0.05 || 0
                              )
                            ),
                            ease: at.ease || "power3",
                            data: oa(d - t),
                            onInterrupt: function () {
                              return I.restart(!0) && m && m(xt);
                            },
                            onComplete: function () {
                              xt.update(),
                                (At = St()),
                                (R = C =
                                  r && !pt ? r.totalProgress() : xt.progress),
                                it && it(xt),
                                y && y(xt);
                            },
                          },
                          t,
                          f * _,
                          d - t - f * _
                        ),
                        v && v(xt, n.tween);
                    }
                  }
                })
                .pause())),
            V && (Na[V] = xt),
            (B =
              (Z = xt.trigger = Ki(Z || Q)) && Z._gsap && Z._gsap.stRevert) &&
              (B = B(xt)),
            (Q = !0 === Q ? Z : Ki(Q)),
            Qo(G) && (G = { targets: Z, className: G }),
            Q &&
              (!1 === tt ||
                tt === ga ||
                (tt =
                  !(
                    !tt &&
                    Q.parentNode &&
                    Q.parentNode.style &&
                    "flex" === ba(Q.parentNode).display
                  ) && _a),
              (xt.pin = Q),
              (i = no.core.getCache(Q)).spacer
                ? (g = i.pinState)
                : (ut &&
                    ((ut = Ki(ut)) &&
                      !ut.nodeType &&
                      (ut = ut.current || ut.nativeElement),
                    (i.spacerIsNative = !!ut),
                    ut && (i.spacerState = as(ut))),
                  (i.spacer = y = ut || ao.createElement("div")),
                  y.classList.add("pin-spacer"),
                  V && y.classList.add("pin-spacer-" + V),
                  (i.pinState = g = as(Q))),
              !1 !== e.force3D && no.set(Q, { force3D: !0 }),
              (xt.spacer = y = i.spacer),
              (P = ba(Q)),
              (E = P[tt + ht.os2]),
              (w = no.getProperty(Q)),
              (x = no.quickSetter(Q, ht.a, ya)),
              ns(Q, y, P),
              (m = as(Q))),
            bt)
          ) {
            (d = ra(bt) ? wa(bt, Pa) : Pa),
              (h = ja("scroller-start", V, dt, ht, d, 0)),
              (p = ja("scroller-end", V, dt, ht, d, 0, h)),
              (b = h["offset" + ht.op.d2]);
            var kt = Ki(Fi(dt, "content") || dt);
            (c = this.markerStart = ja("start", V, kt, ht, d, b, 0, lt)),
              (f = this.markerEnd = ja("end", V, kt, ht, d, b, 0, lt)),
              lt && (q = no.quickSetter([c, f], ht.a, ya)),
              vt ||
                (Ii.length && !0 === Fi(dt, "fixedMarkers")) ||
                ((X = ba((U = gt ? uo : dt)).position),
                (U.style.position =
                  "absolute" === X || "fixed" === X ? X : "relative"),
                no.set([h, p], { force3D: !0 }),
                (M = no.quickSetter(h, ht.a, ya)),
                (k = no.quickSetter(p, ht.a, ya)));
          }
          if (lt) {
            var Pt = lt.vars.onUpdate,
              Rt = lt.vars.onUpdateParams;
            lt.eventCallback("onUpdate", function () {
              xt.update(0, 0, 1), Pt && Pt.apply(Rt || []);
            });
          }
          (xt.previous = function () {
            return Ia[Ia.indexOf(xt) - 1];
          }),
            (xt.next = function () {
              return Ia[Ia.indexOf(xt) + 1];
            }),
            (xt.revert = function (t, e) {
              if (!e) return xt.kill(!0);
              var n = !1 !== t || !xt.enabled,
                i = go;
              n !== xt.isReverted &&
                (n &&
                  ((z = Math.max(St(), xt.scroll.rec || 0)),
                  (N = xt.progress),
                  (F = r && r.progress())),
                c &&
                  [c, f, h, p].forEach(function (t) {
                    return (t.style.display = n ? "none" : "block");
                  }),
                n && ((go = 1), xt.update(n)),
                !Q ||
                  (st && xt.isActive) ||
                  (n
                    ? (function (t, e, r) {
                        os(r);
                        var n = t._gsap;
                        if (n.spacerIsNative) os(n.spacerState);
                        else if (t._gsap.swappedIn) {
                          var i = e.parentNode;
                          i && (i.insertBefore(t, e), i.removeChild(e));
                        }
                        t._gsap.swappedIn = !1;
                      })(Q, y, g)
                    : ns(Q, y, ba(Q), A)),
                n || xt.update(n),
                (go = i),
                (xt.isReverted = n));
            }),
            (xt.refresh = function (i, o) {
              if ((!go && xt.enabled) || o)
                if (Q && i && Bo) Ma(t, "scrollEnd", Xa);
                else {
                  !Do && Tt && Tt(xt),
                    (go = 1),
                    (Mt = Fo()),
                    n.tween && (n.tween.kill(), (n.tween = 0)),
                    L && L.pause(),
                    et && r && r.revert({ kill: !1 }).invalidate(),
                    xt.isReverted || xt.revert(!0, !0),
                    (xt._subPinOffset = !1);
                  for (
                    var d,
                      b,
                      x,
                      E,
                      M,
                      k,
                      P,
                      R,
                      C,
                      j,
                      D,
                      q = Ot(),
                      B = Et(),
                      Y = lt ? lt.duration() : Jo(dt, ht),
                      U = 0,
                      X = 0,
                      H = e.end,
                      W = e.endTrigger || Z,
                      G =
                        e.start ||
                        (0 !== e.start && Z ? (Q ? "0 0" : "0 100%") : 0),
                      V = (xt.pinnedContainer =
                        e.pinnedContainer && Ki(e.pinnedContainer)),
                      K = (Z && Math.max(0, Ia.indexOf(xt))) || 0,
                      J = K;
                    J--;

                  )
                    (k = Ia[J]).end || k.refresh(0, 1) || (go = 1),
                      !(P = k.pin) ||
                        (P !== Z && P !== Q) ||
                        k.isReverted ||
                        (j || (j = []), j.unshift(k), k.revert(!0, !0)),
                      k !== Ia[J] && (K--, J--);
                  for (
                    ta(G) && (G = G(xt)),
                      u =
                        us(G, Z, q, ht, St(), c, h, xt, B, wt, vt, Y, lt) ||
                        (Q ? -0.001 : 0),
                      ta(H) && (H = H(xt)),
                      Qo(H) &&
                        !H.indexOf("+=") &&
                        (~H.indexOf(" ")
                          ? (H = (Qo(G) ? G.split(" ")[0] : "") + H)
                          : ((U = La(H.substr(2), q)),
                            (H = Qo(G) ? G : u + U),
                            (W = Z))),
                      l =
                        Math.max(
                          u,
                          us(
                            H || (W ? "100% 0" : Y),
                            W,
                            q,
                            ht,
                            St() + U,
                            f,
                            p,
                            xt,
                            B,
                            wt,
                            vt,
                            Y,
                            lt
                          )
                        ) || -0.001,
                      _ = l - u || ((u -= 0.01) && 0.001),
                      U = 0,
                      J = K;
                    J--;

                  )
                    (P = (k = Ia[J]).pin) &&
                      k.start - k._pinPush <= u &&
                      !lt &&
                      k.end > 0 &&
                      ((d = k.end - k.start),
                      ((P === Z && k.start - k._pinPush < u) || P === V) &&
                        !ea(G) &&
                        (U += d * (1 - k.progress)),
                      P === Q && (X += d));
                  if (
                    ((u += U),
                    (l += U),
                    (xt._pinPush = X),
                    c &&
                      U &&
                      (((d = {})[ht.a] = "+=" + U),
                      V && (d[ht.p] = "-=" + St()),
                      no.set([c, f], d)),
                    Q)
                  )
                    (d = ba(Q)),
                      (E = ht === Vi),
                      (x = St()),
                      (T = parseFloat(w(ht.a)) + X),
                      !Y &&
                        l > 1 &&
                        ((D = {
                          style: (D = (gt ? ao.scrollingElement || so : dt)
                            .style),
                          value: D["overflow" + ht.a.toUpperCase()],
                        })["overflow" + ht.a.toUpperCase()] = "scroll"),
                      ns(Q, y, d),
                      (m = as(Q)),
                      (b = xa(Q, !0)),
                      (R = vt && $i(dt, E ? Gi : Vi)()),
                      tt &&
                        (((A = [tt + ht.os2, _ + X + ya]).t = y),
                        (J = tt === _a ? Ta(Q, ht) + _ + X : 0) &&
                          A.push(ht.d, J + ya),
                        os(A),
                        V &&
                          Ia.forEach(function (t) {
                            t.pin === V &&
                              !1 !== t.vars.pinSpacing &&
                              (t._subPinOffset = !0);
                          }),
                        vt && St(z)),
                      vt &&
                        (((M = {
                          top: b.top + (E ? x - u : R) + ya,
                          left: b.left + (E ? R : x - u) + ya,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[la] = M["max" + va] =
                          Math.ceil(b.width) + ya),
                        (M[ca] = M["max" + ma] = Math.ceil(b.height) + ya),
                        (M[ga] =
                          M[ga + pa] =
                          M[ga + fa] =
                          M[ga + da] =
                          M[ga + ha] =
                            "0"),
                        (M[_a] = d[_a]),
                        (M[_a + pa] = d[_a + pa]),
                        (M[_a + fa] = d[_a + fa]),
                        (M[_a + da] = d[_a + da]),
                        (M[_a + ha] = d[_a + ha]),
                        (v = (function (t, e, r) {
                          for (
                            var n, i = [], o = t.length, a = r ? 8 : 0;
                            a < o;
                            a += 2
                          )
                            (n = t[a]), i.push(n, n in e ? e[n] : t[a + 1]);
                          return (i.t = t.t), i;
                        })(g, M, st)),
                        Do && St(0)),
                      r
                        ? ((C = r._initted),
                          Oo(1),
                          r.render(r.duration(), !0, !0),
                          (O = w(ht.a) - T + _ + X),
                          (S = Math.abs(_ - O) > 1),
                          vt && S && v.splice(v.length - 2, 2),
                          r.render(0, !0, !0),
                          C || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          Oo(0))
                        : (O = _),
                      D &&
                        (D.value
                          ? (D.style["overflow" + ht.a.toUpperCase()] = D.value)
                          : D.style.removeProperty("overflow-" + ht.a));
                  else if (Z && St() && !lt)
                    for (b = Z.parentNode; b && b !== uo; )
                      b._pinOffset &&
                        ((u -= b._pinOffset), (l -= b._pinOffset)),
                        (b = b.parentNode);
                  j &&
                    j.forEach(function (t) {
                      return t.revert(!1, !0);
                    }),
                    (xt.start = u),
                    (xt.end = l),
                    (a = s = Do ? z : St()),
                    lt || Do || (a < z && St(z), (xt.scroll.rec = 0)),
                    xt.revert(!1, !0),
                    I &&
                      ((At = -1), xt.isActive && St(u + _ * N), I.restart(!0)),
                    (go = 0),
                    r &&
                      pt &&
                      (r._initted || F) &&
                      r.progress() !== F &&
                      r.progress(F, !0).render(r.time(), !0, !0),
                    (N !== xt.progress || lt) &&
                      (r && !pt && r.totalProgress(N, !0),
                      (xt.progress = (a - u) / _ === N ? 0 : N)),
                    Q && tt && (y._pinOffset = Math.round(xt.progress * O)),
                    $ && !Do && $(xt);
                }
            }),
            (xt.getVelocity = function () {
              return ((St() - s) / (Fo() - po)) * 1e3 || 0;
            }),
            (xt.endAnimation = function () {
              na(xt.callbackAnimation),
                r &&
                  (L
                    ? L.progress(1)
                    : r.paused()
                    ? pt || na(r, xt.direction < 0, 1)
                    : na(r, r.reversed()));
            }),
            (xt.labelToScroll = function (t) {
              return (
                (r &&
                  r.labels &&
                  (u || xt.refresh() || u) +
                    (r.labels[t] / r.duration()) * _) ||
                0
              );
            }),
            (xt.getTrailing = function (t) {
              var e = Ia.indexOf(xt),
                r =
                  xt.direction > 0 ? Ia.slice(0, e).reverse() : Ia.slice(e + 1);
              return (
                Qo(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (t) {
                return xt.direction > 0 ? t.end <= u : t.start >= l;
              });
            }),
            (xt.update = function (t, e, i) {
              if (!lt || i || t) {
                var o,
                  c,
                  f,
                  p,
                  d,
                  g,
                  b,
                  w = Do ? z : xt.scroll(),
                  A = t ? 0 : (w - u) / _,
                  P = A < 0 ? 0 : A > 1 ? 1 : A || 0,
                  j = xt.progress;
                if (
                  (e &&
                    ((s = a),
                    (a = lt ? St() : w),
                    at && ((C = R), (R = r && !pt ? r.totalProgress() : P))),
                  rt &&
                    !P &&
                    Q &&
                    !go &&
                    !zo &&
                    Bo &&
                    u < w + ((w - s) / (Fo() - po)) * rt &&
                    (P = 1e-4),
                  P !== j && xt.enabled)
                ) {
                  if (
                    ((p =
                      (d =
                        (o = xt.isActive = !!P && P < 1) !== (!!j && j < 1)) ||
                      !!P != !!j),
                    (xt.direction = P > j ? 1 : -1),
                    (xt.progress = P),
                    p &&
                      !go &&
                      ((c = P && !j ? 0 : 1 === P ? 1 : 1 === j ? 2 : 3),
                      pt &&
                        ((f =
                          (!d && "none" !== yt[c + 1] && yt[c + 1]) || yt[c]),
                        (b =
                          r && ("complete" === f || "reset" === f || f in r)))),
                    ft &&
                      (d || b) &&
                      (b || J || !r) &&
                      (ta(ft)
                        ? ft(xt)
                        : xt.getTrailing(ft).forEach(function (t) {
                            return t.endAnimation();
                          })),
                    pt ||
                      (!L || go || zo
                        ? r && r.totalProgress(P, !!go)
                        : (L._dp._time - L._start !== L._time &&
                            L.render(L._dp._time - L._start),
                          L.resetTo
                            ? L.resetTo("totalProgress", P, r._tTime / r._tDur)
                            : ((L.vars.totalProgress = P),
                              L.invalidate().restart()))),
                    Q)
                  )
                    if ((t && tt && (y.style[tt + ht.os2] = E), vt)) {
                      if (p) {
                        if (
                          ((g =
                            !t && P > j && l + 1 > w && w + 1 >= Jo(dt, ht)),
                          st)
                        )
                          if (t || (!o && !g)) cs(Q, y);
                          else {
                            var D = xa(Q, !0),
                              N = w - u;
                            cs(
                              Q,
                              uo,
                              D.top + (ht === Vi ? N : 0) + ya,
                              D.left + (ht === Vi ? 0 : N) + ya
                            );
                          }
                        os(o || g ? v : m),
                          (S && P < 1 && o) || x(T + (1 !== P || g ? 0 : O));
                      }
                    } else x(Wo(T + O * P));
                  at && !n.tween && !go && !zo && I.restart(!0),
                    G &&
                      (d || (ot && P && (P < 1 || !Lo))) &&
                      fo(G.targets).forEach(function (t) {
                        return t.classList[o || ot ? "add" : "remove"](
                          G.className
                        );
                      }),
                    W && !pt && !t && W(xt),
                    p && !go
                      ? (pt &&
                          (b &&
                            ("complete" === f
                              ? r.pause().totalProgress(1)
                              : "reset" === f
                              ? r.restart(!0).pause()
                              : "restart" === f
                              ? r.restart(!0)
                              : r[f]()),
                          W && W(xt)),
                        (!d && Lo) ||
                          (K && d && ia(xt, K),
                          mt[c] && ia(xt, mt[c]),
                          ot && (1 === P ? xt.kill(!1, 1) : (mt[c] = 0)),
                          d || (mt[(c = 1 === P ? 1 : 3)] && ia(xt, mt[c]))),
                        ct &&
                          !o &&
                          Math.abs(xt.getVelocity()) > (ea(ct) ? ct : 2500) &&
                          (na(xt.callbackAnimation),
                          L
                            ? L.progress(1)
                            : na(r, "reverse" === f ? 1 : !P, 1)))
                      : pt && W && !go && W(xt);
                }
                if (k) {
                  var F = lt
                    ? (w / lt.duration()) * (lt._caScrollDist || 0)
                    : w;
                  M(F + (h._isFlipped ? 1 : 0)), k(F);
                }
                q && q((-w / lt.duration()) * (lt._caScrollDist || 0));
              }
            }),
            (xt.enable = function (e, r) {
              xt.enabled ||
                ((xt.enabled = !0),
                Ma(dt, "resize", Ba),
                Ma(gt ? ao : dt, "scroll", Fa),
                Tt && Ma(t, "refreshInit", Tt),
                !1 !== e && ((xt.progress = N = 0), (a = s = At = St())),
                !1 !== r && xt.refresh());
            }),
            (xt.getTween = function (t) {
              return t && n ? n.tween : L;
            }),
            (xt.setPositions = function (t, e) {
              Q &&
                ((T += t - u),
                (O += e - t - _),
                tt === _a && xt.adjustPinSpacing(e - t - _)),
                (xt.start = u = t),
                (xt.end = l = e),
                (_ = e - t),
                xt.update();
            }),
            (xt.adjustPinSpacing = function (t) {
              if (A) {
                var e = A.indexOf(ht.d) + 1;
                (A[e] = parseFloat(A[e]) + t + ya),
                  (A[1] = parseFloat(A[1]) + t + ya),
                  os(A);
              }
            }),
            (xt.disable = function (e, r) {
              if (
                xt.enabled &&
                (!1 !== e && xt.revert(!0, !0),
                (xt.enabled = xt.isActive = !1),
                r || (L && L.pause()),
                (z = 0),
                i && (i.uncache = 1),
                Tt && Sa(t, "refreshInit", Tt),
                I && (I.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                !gt)
              ) {
                for (var o = Ia.length; o--; )
                  if (Ia[o].scroller === dt && Ia[o] !== xt) return;
                Sa(dt, "resize", Ba), Sa(dt, "scroll", Fa);
              }
            }),
            (xt.kill = function (t, n) {
              xt.disable(t, n), L && !n && L.kill(), V && delete Na[V];
              var o = Ia.indexOf(xt);
              o >= 0 && Ia.splice(o, 1),
                o === yo && Qa > 0 && yo--,
                (o = 0),
                Ia.forEach(function (t) {
                  return t.scroller === xt.scroller && (o = 1);
                }),
                o || Do || (xt.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  t && r.revert({ kill: !1 }),
                  n || r.kill()),
                c &&
                  [c, f, h, p].forEach(function (t) {
                    return t.parentNode && t.parentNode.removeChild(t);
                  }),
                No === xt && (No = 0),
                Q &&
                  (i && (i.uncache = 1),
                  (o = 0),
                  Ia.forEach(function (t) {
                    return t.pin === Q && o++;
                  }),
                  o || (i.spacer = 0)),
                e.onKill && e.onKill(xt);
            }),
            xt.enable(!1, !1),
            B && B(xt),
            r && r.add && !_
              ? no.delayedCall(0.01, function () {
                  return u || l || xt.refresh();
                }) &&
                (_ = 0.01) &&
                (u = l = 0)
              : xt.refresh(),
            Q &&
              (function () {
                if (Io !== $a) {
                  var t = (Io = $a);
                  requestAnimationFrame(function () {
                    return t === $a && Ja(!0);
                  });
                }
              })();
        } else this.update = this.refresh = this.kill = Ho;
      }),
      (t.register = function (e) {
        return (
          io ||
            ((no = e || Vo()),
            Go() && window.document && t.enable(),
            (io = Yo)),
          io
        );
      }),
      (t.defaults = function (t) {
        if (t) for (var e in t) Ra[e] = t[e];
        return Ra;
      }),
      (t.disable = function (t, e) {
        (Yo = 0),
          Ia.forEach(function (r) {
            return r[e ? "kill" : "disable"](t);
          }),
          Sa(oo, "wheel", Fa),
          Sa(ao, "scroll", Fa),
          clearInterval(_o),
          Sa(ao, "touchcancel", Ho),
          Sa(uo, "touchstart", Ho),
          Aa(Sa, ao, "pointerdown,touchstart,mousedown", Uo),
          Aa(Sa, ao, "pointerup,touchend,mouseup", Xo),
          co.kill(),
          Zo(Sa);
        for (var r = 0; r < Di.length; r += 3)
          ka(Sa, Di[r], Di[r + 1]), ka(Sa, Di[r], Di[r + 2]);
      }),
      (t.enable = function () {
        if (
          ((oo = window),
          (ao = document),
          (so = ao.documentElement),
          (uo = ao.body),
          no &&
            ((fo = no.utils.toArray),
            (ho = no.utils.clamp),
            (Ro = no.core.context || Ho),
            (Oo = no.core.suppressOverwrites || Ho),
            (Co = oo.history.scrollRestoration || "auto"),
            no.core.globals("ScrollTrigger", t),
            uo))
        ) {
          (Yo = 1),
            ro.register(no),
            (t.isTouch = ro.isTouch),
            (Po =
              ro.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            Ma(oo, "wheel", Fa),
            (lo = [oo, ao, so, uo]),
            no.matchMedia
              ? ((t.matchMedia = function (t) {
                  var e,
                    r = no.matchMedia();
                  for (e in t) r.add(e, t[e]);
                  return r;
                }),
                no.addEventListener("matchMediaInit", function () {
                  return Va();
                }),
                no.addEventListener("matchMediaRevert", function () {
                  return Ga();
                }),
                no.addEventListener("matchMedia", function () {
                  Ja(0, 1), Ha("matchMedia");
                }),
                no.matchMedia("(orientation: portrait)", function () {
                  return qa(), qa;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            qa(),
            Ma(ao, "scroll", Fa);
          var e,
            r,
            n = uo.style,
            i = n.borderTopStyle,
            o = no.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              n.borderTopStyle = "solid",
              e = xa(uo),
              Vi.m = Math.round(e.top + Vi.sc()) || 0,
              Gi.m = Math.round(e.left + Gi.sc()) || 0,
              i ? (n.borderTopStyle = i) : n.removeProperty("border-top-style"),
              _o = setInterval(za, 250),
              no.delayedCall(0.5, function () {
                return (zo = 0);
              }),
              Ma(ao, "touchcancel", Ho),
              Ma(uo, "touchstart", Ho),
              Aa(Ma, ao, "pointerdown,touchstart,mousedown", Uo),
              Aa(Ma, ao, "pointerup,touchend,mouseup", Xo),
              mo = no.utils.checkPrefix("transform"),
              rs.push(mo),
              io = Fo(),
              co = no.delayedCall(0.2, Ja).pause(),
              xo = [
                ao,
                "visibilitychange",
                function () {
                  var t = oo.innerWidth,
                    e = oo.innerHeight;
                  ao.hidden
                    ? ((bo = t), (wo = e))
                    : (bo === t && wo === e) || Ba();
                },
                ao,
                "DOMContentLoaded",
                Ja,
                oo,
                "load",
                Ja,
                oo,
                "resize",
                Ba,
              ],
              Zo(Ma),
              Ia.forEach(function (t) {
                return t.enable(0, 1);
              }),
              r = 0;
            r < Di.length;
            r += 3
          )
            ka(Sa, Di[r], Di[r + 1]), ka(Sa, Di[r], Di[r + 2]);
        }
      }),
      (t.config = function (e) {
        "limitCallbacks" in e && (Lo = !!e.limitCallbacks);
        var r = e.syncInterval;
        (r && clearInterval(_o)) || ((_o = r) && setInterval(za, r)),
          "ignoreMobileResize" in e &&
            (Mo = 1 === t.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Zo(Sa) || Zo(Ma, e.autoRefreshEvents || "none"),
            (Eo = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (t.scrollerProxy = function (t, e) {
        var r = Ki(t),
          n = Di.indexOf(r),
          i = Ko(r);
        ~n && Di.splice(n, i ? 6 : 2),
          e && (i ? Ii.unshift(oo, e, uo, e, so, e) : Ii.unshift(r, e));
      }),
      (t.clearMatchMedia = function (t) {
        Ia.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (t.isInViewport = function (t, e, r) {
        var n = (Qo(t) ? Ki(t) : t).getBoundingClientRect(),
          i = n[r ? la : ca] * e || 0;
        return r
          ? n.right - i > 0 && n.left + i < oo.innerWidth
          : n.bottom - i > 0 && n.top + i < oo.innerHeight;
      }),
      (t.positionInViewport = function (t, e, r) {
        Qo(t) && (t = Ki(t));
        var n = t.getBoundingClientRect(),
          i = n[r ? la : ca],
          o =
            null == e
              ? i / 2
              : e in Ca
              ? Ca[e] * i
              : ~e.indexOf("%")
              ? (parseFloat(e) * i) / 100
              : parseFloat(e) || 0;
        return r ? (n.left + o) / oo.innerWidth : (n.top + o) / oo.innerHeight;
      }),
      (t.killAll = function (t) {
        if (
          (Ia.slice(0).forEach(function (t) {
            return "ScrollSmoother" !== t.vars.id && t.kill();
          }),
          !0 !== t)
        ) {
          var e = Ya.killAll || [];
          (Ya = {}),
            e.forEach(function (t) {
              return t();
            });
        }
      }),
      t
    );
  })();
(hs.version = "3.11.4"),
  (hs.saveStyles = function (t) {
    return t
      ? fo(t).forEach(function (t) {
          if (t && t.style) {
            var e = Wa.indexOf(t);
            e >= 0 && Wa.splice(e, 5),
              Wa.push(
                t,
                t.style.cssText,
                t.getBBox && t.getAttribute("transform"),
                no.core.getCache(t),
                Ro()
              );
          }
        })
      : Wa;
  }),
  (hs.revert = function (t, e) {
    return Va(!t, e);
  }),
  (hs.create = function (t, e) {
    return new hs(t, e);
  }),
  (hs.refresh = function (t) {
    return t ? Ba() : (io || hs.register()) && Ja(!0);
  }),
  (hs.update = function (t) {
    return ++Di.cache && ts(!0 === t ? 2 : 0);
  }),
  (hs.clearScrollMemory = Ka),
  (hs.maxScroll = function (t, e) {
    return Jo(t, e ? Gi : Vi);
  }),
  (hs.getScrollFunc = function (t, e) {
    return $i(Ki(t), e ? Gi : Vi);
  }),
  (hs.getById = function (t) {
    return Na[t];
  }),
  (hs.getAll = function () {
    return Ia.filter(function (t) {
      return "ScrollSmoother" !== t.vars.id;
    });
  }),
  (hs.isScrolling = function () {
    return !!Bo;
  }),
  (hs.snapDirectional = Ea),
  (hs.addEventListener = function (t, e) {
    var r = Ya[t] || (Ya[t] = []);
    ~r.indexOf(e) || r.push(e);
  }),
  (hs.removeEventListener = function (t, e) {
    var r = Ya[t],
      n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1);
  }),
  (hs.batch = function (t, e) {
    var r,
      n = [],
      i = {},
      o = e.interval || 0.016,
      a = e.batchMax || 1e9,
      s = function (t, e) {
        var r = [],
          n = [],
          i = no
            .delayedCall(o, function () {
              e(r, n), (r = []), (n = []);
            })
            .pause();
        return function (t) {
          r.length || i.restart(!0),
            r.push(t.trigger),
            n.push(t),
            a <= r.length && i.progress(1);
        };
      };
    for (r in e)
      i[r] =
        "on" === r.substr(0, 2) && ta(e[r]) && "onRefreshInit" !== r
          ? s(0, e[r])
          : e[r];
    return (
      ta(a) &&
        ((a = a()),
        Ma(hs, "refresh", function () {
          return (a = e.batchMax());
        })),
      fo(t).forEach(function (t) {
        var e = {};
        for (r in i) e[r] = i[r];
        (e.trigger = t), n.push(hs.create(e));
      }),
      n
    );
  });
var ps,
  ds = function (t, e, r, n) {
    return (
      e > n ? t(n) : e < 0 && t(0),
      r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
    );
  },
  _s = function t(e, r) {
    !0 === r
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === r
            ? "auto"
            : r
            ? "pan-" + r + (ro.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === so && t(uo, r);
  },
  gs = { auto: 1, scroll: 1 },
  vs = function (t) {
    var e,
      r = t.event,
      n = t.target,
      i = t.axis,
      o = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = o._gsap || no.core.getCache(o),
      s = Fo();
    if (!a._isScrollT || s - a._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== uo &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          (!gs[(e = ba(o)).overflowY] && !gs[e.overflowX]));

      )
        o = o.parentNode;
      (a._isScroll =
        o &&
        o !== n &&
        !Ko(o) &&
        (gs[(e = ba(o)).overflowY] || gs[e.overflowX])),
        (a._isScrollT = s);
    }
    (a._isScroll || "x" === i) && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  ms = function (t, e, r, n) {
    return ro.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: e,
      onWheel: (n = n && vs),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function () {
        return r && Ma(ao, ro.eventTypes[0], bs, !1, !0);
      },
      onDisable: function () {
        return Sa(ao, ro.eventTypes[0], bs, !0);
      },
    });
  },
  ys = /(input|label|select|textarea)/i,
  bs = function (t) {
    var e = ys.test(t.target.tagName);
    (e || ps) && ((t._gsapAllow = !0), (ps = e));
  },
  ws = function (t) {
    ra(t) || (t = {}),
      (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
      t.type || (t.type = "wheel,touch"),
      (t.debounce = !!t.debounce),
      (t.id = t.id || "normalizer");
    var e,
      r,
      n,
      i,
      o,
      a,
      s,
      u,
      l = t,
      c = l.normalizeScrollX,
      f = l.momentum,
      h = l.allowNestedScroll,
      p = Ki(t.target) || so,
      d = no.core.globals().ScrollSmoother,
      _ = d && d.get(),
      g =
        Po &&
        ((t.content && Ki(t.content)) ||
          (_ && !1 !== t.content && !_.smooth() && _.content())),
      v = $i(p, Vi),
      m = $i(p, Gi),
      y = 1,
      b =
        (ro.isTouch && oo.visualViewport
          ? oo.visualViewport.scale * oo.visualViewport.width
          : oo.outerWidth) / oo.innerWidth,
      w = 0,
      x = ta(f)
        ? function () {
            return f(e);
          }
        : function () {
            return f || 2.8;
          },
      T = ms(p, t.type, !0, h),
      O = function () {
        return (i = !1);
      },
      E = Ho,
      A = Ho,
      M = function () {
        (r = Jo(p, Vi)),
          (A = ho(Po ? 1 : 0, r)),
          c && (E = ho(0, Jo(p, Gi))),
          (n = $a);
      },
      S = function () {
        (g._gsap.y = Wo(parseFloat(g._gsap.y) + v.offset) + "px"),
          (g.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(g._gsap.y) +
            ", 0, 1)"),
          (v.offset = v.cacheID = 0);
      },
      k = function () {
        M(),
          o.isActive() &&
            o.vars.scrollY > r &&
            (v() > r ? o.progress(1) && v(r) : o.resetTo("scrollY", r));
      };
    return (
      g && no.set(g, { y: "+=0" }),
      (t.ignoreCheck = function (t) {
        return (
          (Po &&
            "touchmove" === t.type &&
            (function () {
              if (i) {
                requestAnimationFrame(O);
                var t = Wo(e.deltaY / 2),
                  r = A(v.v - t);
                if (g && r !== v.v + v.offset) {
                  v.offset = r - v.v;
                  var n = Wo((parseFloat(g && g._gsap.y) || 0) - v.offset);
                  (g.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    n +
                    ", 0, 1)"),
                    (g._gsap.y = n + "px"),
                    (v.cacheID = Di.cache),
                    ts();
                }
                return !0;
              }
              v.offset && S(), (i = !0);
            })()) ||
          (y > 1.05 && "touchstart" !== t.type) ||
          e.isGesturing ||
          (t.touches && t.touches.length > 1)
        );
      }),
      (t.onPress = function () {
        var t = y;
        (y = Wo(((oo.visualViewport && oo.visualViewport.scale) || 1) / b)),
          o.pause(),
          t !== y && _s(p, y > 1.01 || (!c && "x")),
          (a = m()),
          (s = v()),
          M(),
          (n = $a);
      }),
      (t.onRelease = t.onGestureStart =
        function (t, e) {
          if ((v.offset && S(), e)) {
            Di.cache++;
            var n,
              i,
              a = x();
            c &&
              ((i = (n = m()) + (0.05 * a * -t.velocityX) / 0.227),
              (a *= ds(m, n, i, Jo(p, Gi))),
              (o.vars.scrollX = E(i))),
              (i = (n = v()) + (0.05 * a * -t.velocityY) / 0.227),
              (a *= ds(v, n, i, Jo(p, Vi))),
              (o.vars.scrollY = A(i)),
              o.invalidate().duration(a).play(0.01),
              ((Po && o.vars.scrollY >= r) || n >= r - 1) &&
                no.to({}, { onUpdate: k, duration: a });
          } else u.restart(!0);
        }),
      (t.onWheel = function () {
        o._ts && o.pause(), Fo() - w > 1e3 && ((n = 0), (w = Fo()));
      }),
      (t.onChange = function (t, e, r, i, o) {
        if (
          ($a !== n && M(),
          e && c && m(E(i[2] === e ? a + (t.startX - t.x) : m() + e - i[1])),
          r)
        ) {
          v.offset && S();
          var u = o[2] === r,
            l = u ? s + t.startY - t.y : v() + r - o[1],
            f = A(l);
          u && l !== f && (s += f - l), v(f);
        }
        (r || e) && ts();
      }),
      (t.onEnable = function () {
        _s(p, !c && "x"),
          hs.addEventListener("refresh", k),
          Ma(oo, "resize", k),
          v.smooth &&
            ((v.target.style.scrollBehavior = "auto"),
            (v.smooth = m.smooth = !1)),
          T.enable();
      }),
      (t.onDisable = function () {
        _s(p, !0),
          Sa(oo, "resize", k),
          hs.removeEventListener("refresh", k),
          T.kill();
      }),
      (t.lockAxis = !1 !== t.lockAxis),
      ((e = new ro(t)).iOS = Po),
      Po && !v() && v(1),
      Po && no.ticker.add(Ho),
      (u = e._dc),
      (o = no.to(e, {
        ease: "power4",
        paused: !0,
        scrollX: c ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: u.vars.onComplete,
      })),
      e
    );
  };
(hs.sort = function (t) {
  return Ia.sort(
    t ||
      function (t, e) {
        return (
          -1e6 * (t.vars.refreshPriority || 0) +
          t.start -
          (e.start + -1e6 * (e.vars.refreshPriority || 0))
        );
      }
  );
}),
  (hs.observe = function (t) {
    return new ro(t);
  }),
  (hs.normalizeScroll = function (t) {
    if (void 0 === t) return Ao;
    if (!0 === t && Ao) return Ao.enable();
    if (!1 === t) return Ao && Ao.kill();
    var e = t instanceof ro ? t : ws(t);
    return (
      Ao && Ao.target === e.target && Ao.kill(), Ko(e.target) && (Ao = e), e
    );
  }),
  (hs.core = {
    _getVelocityProp: Ji,
    _inputObserver: ms,
    _scrollers: Di,
    _proxies: Ii,
    bridge: {
      ss: function () {
        Bo || Ha("scrollStart"), (Bo = Fo());
      },
      ref: function () {
        return go;
      },
    },
  }),
  Vo() && no.registerPlugin(hs);
var xs = {};
xs = (function () {
  var t = document,
    e = t.createTextNode.bind(t);
  function r(t, e, r) {
    t.style.setProperty(e, r);
  }
  function n(t, e) {
    return t.appendChild(e);
  }
  function i(e, r, i, o) {
    var a = t.createElement("span");
    return (
      r && (a.className = r),
      i && (!o && a.setAttribute("data-" + r, i), (a.textContent = i)),
      (e && n(e, a)) || a
    );
  }
  function o(t, e) {
    return t.getAttribute("data-" + e);
  }
  function a(e, r) {
    return e && 0 != e.length
      ? e.nodeName
        ? [e]
        : [].slice.call(e[0].nodeName ? e : (r || t).querySelectorAll(e))
      : [];
  }
  function s(t) {
    for (var e = []; t--; ) e[t] = [];
    return e;
  }
  function u(t, e) {
    t && t.some(e);
  }
  function l(t) {
    return function (e) {
      return t[e];
    };
  }
  function c(t, e, n) {
    var i = "--" + e,
      o = i + "-index";
    u(n, function (t, e) {
      Array.isArray(t)
        ? u(t, function (t) {
            r(t, o, e);
          })
        : r(t, o, e);
    }),
      r(t, i + "-total", n.length);
  }
  var f = {};
  function h(t, e, r) {
    var n = r.indexOf(t);
    if (-1 == n)
      r.unshift(t),
        u(f[t].depends, function (e) {
          h(e, t, r);
        });
    else {
      var i = r.indexOf(e);
      r.splice(n, 1), r.splice(i, 0, t);
    }
    return r;
  }
  function p(t, e, r, n) {
    return { by: t, depends: e, key: r, split: n };
  }
  function d(t) {
    return h(t, 0, []).map(l(f));
  }
  function _(t) {
    f[t.by] = t;
  }
  function g(t, r, o, s, l) {
    t.normalize();
    var c = [],
      f = document.createDocumentFragment();
    s && c.push(t.previousSibling);
    var h = [];
    return (
      a(t.childNodes).some(function (t) {
        if (!t.tagName || t.hasChildNodes()) {
          if (t.childNodes && t.childNodes.length)
            return h.push(t), void c.push.apply(c, g(t, r, o, s, l));
          var n = t.wholeText || "",
            a = n.trim();
          a.length &&
            (" " === n[0] && h.push(e(" ")),
            u(a.split(o), function (t, e) {
              e && l && h.push(i(f, "whitespace", " ", l));
              var n = i(f, r, t);
              c.push(n), h.push(n);
            }),
            " " === n[n.length - 1] && h.push(e(" ")));
        } else h.push(t);
      }),
      u(h, function (t) {
        n(f, t);
      }),
      (t.innerHTML = ""),
      n(t, f),
      c
    );
  }
  var v = 0;
  function m(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  var y = "words",
    b = p(y, v, "word", function (t) {
      return g(t, "word", /\s+/, 0, 1);
    }),
    w = "chars",
    x = p(w, [y], "char", function (t, e, r) {
      var n = [];
      return (
        u(r[y], function (t, r) {
          n.push.apply(n, g(t, "char", "", e.whitespace && r));
        }),
        n
      );
    });
  function T(t) {
    var e = (t = t || {}).key;
    return a(t.target || "[data-splitting]").map(function (r) {
      var n = r["🍌"];
      if (!t.force && n) return n;
      n = r["🍌"] = { el: r };
      var i = d(t.by || o(r, "splitting") || w),
        a = m({}, t);
      return (
        u(i, function (t) {
          if (t.split) {
            var i = t.by,
              o = (e ? "-" + e : "") + t.key,
              s = t.split(r, a, n);
            o && c(r, o, s), (n[i] = s), r.classList.add(i);
          }
        }),
        r.classList.add("splitting"),
        n
      );
    });
  }
  function O(t) {
    var e = ((t = t || {}).target = i());
    return (e.innerHTML = t.content), T(t), e.outerHTML;
  }
  function E(t, e, r) {
    var n = a(e.matching || t.children, t),
      i = {};
    return (
      u(n, function (t) {
        var e = Math.round(t[r]);
        (i[e] || (i[e] = [])).push(t);
      }),
      Object.keys(i).map(Number).sort(A).map(l(i))
    );
  }
  function A(t, e) {
    return t - e;
  }
  (T.html = O), (T.add = _);
  var M = p("lines", [y], "line", function (t, e, r) {
      return E(t, { matching: r[y] }, "offsetTop");
    }),
    S = p("items", v, "item", function (t, e) {
      return a(e.matching || t.children, t);
    }),
    k = p("rows", v, "row", function (t, e) {
      return E(t, e, "offsetTop");
    }),
    P = p("cols", v, "col", function (t, e) {
      return E(t, e, "offsetLeft");
    }),
    R = p("grid", ["rows", "cols"]),
    C = "layout",
    L = p(C, v, v, function (t, e) {
      var s = (e.rows = +(e.rows || o(t, "rows") || 1)),
        u = (e.columns = +(e.columns || o(t, "columns") || 1));
      if (
        ((e.image = e.image || o(t, "image") || t.currentSrc || t.src), e.image)
      ) {
        var l = a("img", t)[0];
        e.image = l && (l.currentSrc || l.src);
      }
      e.image && r(t, "background-image", "url(" + e.image + ")");
      for (var c = s * u, f = [], h = i(v, "cell-grid"); c--; ) {
        var p = i(h, "cell");
        i(p, "cell-inner"), f.push(p);
      }
      return n(t, h), f;
    }),
    j = p("cellRows", [C], "row", function (t, e, r) {
      var n = e.rows,
        i = s(n);
      return (
        u(r[C], function (t, e, r) {
          i[Math.floor(e / (r.length / n))].push(t);
        }),
        i
      );
    }),
    D = p("cellColumns", [C], "col", function (t, e, r) {
      var n = e.columns,
        i = s(n);
      return (
        u(r[C], function (t, e) {
          i[e % n].push(t);
        }),
        i
      );
    }),
    I = p("cells", ["cellRows", "cellColumns"], "cell", function (t, e, r) {
      return r[C];
    });
  return _(b), _(x), _(M), _(S), _(k), _(P), _(R), _(L), _(j), _(D), _(I), T;
})();
var Ts = {};
(Ts = (function () {
  function t(e, r, n) {
    function i(a, s) {
      if (!r[a]) {
        if (!e[a]) {
          var u = void 0;
          if (!s && u) return u(a, !0);
          if (o) return o(a, !0);
          var l = new Error("Cannot find module '" + a + "'");
          throw ((l.code = "MODULE_NOT_FOUND"), l);
        }
        var c = (r[a] = { exports: {} });
        e[a][0].call(
          c.exports,
          function (t) {
            return i(e[a][1][t] || t);
          },
          c,
          c.exports,
          t,
          e,
          r,
          n
        );
      }
      return r[a].exports;
    }
    for (var o = void 0, a = 0; a < n.length; a++) i(n[a]);
    return i;
  }
  return t;
})()(
  {
    1: [
      function (t, e, r) {
        var n,
          i =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof self
              ? self
              : null;
        (n = i
          ? "signal" in new Request("")
            ? i.AbortController
            : t("abortcontroller-polyfill/dist/cjs-ponyfill").AbortController
          : t("abort-controller")),
          (e.exports = n);
      },
      {
        "abort-controller": 20,
        "abortcontroller-polyfill/dist/cjs-ponyfill": 19,
      },
    ],
    2: [
      function (t, e, r) {
        var n = (function () {
          function t(t, e, r) {
            (this.error = t), (this.message = e), (this.statusCode = r);
          }
          return (
            (t.prototype.toString = function () {
              return [
                this.message,
                "(",
                this.error,
                ")",
                this.statusCode ? "[Http code " + this.statusCode + "]" : "",
              ].join("");
            }),
            t
          );
        })();
        e.exports = n;
      },
      {},
    ],
    3: [
      function (t, e, r) {
        var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var i in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, i) &&
                          (t[i] = e[i]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            },
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            },
          o = i(t("lodash/get")),
          a = i(t("lodash/isPlainObject")),
          s = i(t("lodash/keys")),
          u = i(t("./fetch")),
          l = i(t("./abort-controller")),
          c = i(t("./object_to_query_param_string")),
          f = i(t("./airtable_error")),
          h = i(t("./table")),
          p = i(t("./http_headers")),
          d = i(t("./run_action")),
          _ = i(t("./package_version")),
          g = i(t("./exponential_backoff_with_jitter")),
          v = "Airtable.js/" + _.default,
          m = (function () {
            function t(t, e) {
              (this._airtable = t), (this._id = e);
            }
            return (
              (t.prototype.table = function (t) {
                return new h.default(this, null, t);
              }),
              (t.prototype.makeRequest = function (t) {
                var e,
                  r = this;
                void 0 === t && (t = {});
                var i = o.default(t, "method", "GET").toUpperCase(),
                  a =
                    this._airtable._endpointUrl +
                    "/v" +
                    this._airtable._apiVersionMajor +
                    "/" +
                    this._id +
                    o.default(t, "path", "/") +
                    "?" +
                    c.default(o.default(t, "qs", {})),
                  s = new l.default(),
                  h = {
                    method: i,
                    headers: this._getRequestHeaders(
                      Object.assign(
                        {},
                        this._airtable._customHeaders,
                        null !== (e = t.headers) && void 0 !== e ? e : {}
                      )
                    ),
                    signal: s.signal,
                  };
                "body" in t && y(i) && (h.body = JSON.stringify(t.body));
                var p = setTimeout(function () {
                  s.abort();
                }, this._airtable._requestTimeout);
                return new Promise(function (e, i) {
                  u.default(a, h)
                    .then(function (a) {
                      if (
                        (clearTimeout(p),
                        429 !== a.status || r._airtable._noRetryIfRateLimited)
                      )
                        a.json()
                          .then(function (t) {
                            var n =
                              r._checkStatusForError(a.status, t) ||
                              b(a.status, t);
                            n
                              ? i(n)
                              : e({
                                  statusCode: a.status,
                                  headers: a.headers,
                                  body: t,
                                });
                          })
                          .catch(function () {
                            var t = b(a.status);
                            i(t);
                          });
                      else {
                        var s = o.default(t, "_numAttempts", 0),
                          u = g.default(s);
                        setTimeout(function () {
                          var o = n(n({}, t), { _numAttempts: s + 1 });
                          r.makeRequest(o).then(e).catch(i);
                        }, u);
                      }
                    })
                    .catch(function (t) {
                      clearTimeout(p),
                        (t = new f.default(
                          "CONNECTION_ERROR",
                          t.message,
                          null
                        )),
                        i(t);
                    });
                });
              }),
              (t.prototype.runAction = function (t, e, r, n, i) {
                d.default(this, t, e, r, n, i, 0);
              }),
              (t.prototype._getRequestHeaders = function (t) {
                var e = new p.default();
                e.set("Authorization", "Bearer " + this._airtable._apiKey),
                  e.set("User-Agent", v),
                  e.set("Content-Type", "application/json");
                for (var r = 0, n = s.default(t); r < n.length; r++) {
                  var i = n[r];
                  e.set(i, t[i]);
                }
                return e.toJSON();
              }),
              (t.prototype._checkStatusForError = function (t, e) {
                var r = (null != e ? e : { error: {} }).error,
                  n = void 0 === r ? {} : r,
                  i = n.type,
                  o = n.message;
                return 401 === t
                  ? new f.default(
                      "AUTHENTICATION_REQUIRED",
                      "You should provide valid api key to perform this operation",
                      t
                    )
                  : 403 === t
                  ? new f.default(
                      "NOT_AUTHORIZED",
                      "You are not authorized to perform this operation",
                      t
                    )
                  : 404 === t
                  ? new f.default(
                      "NOT_FOUND",
                      null != o ? o : "Could not find what you are looking for",
                      t
                    )
                  : 413 === t
                  ? new f.default(
                      "REQUEST_TOO_LARGE",
                      "Request body is too large",
                      t
                    )
                  : 422 === t
                  ? new f.default(
                      null != i ? i : "UNPROCESSABLE_ENTITY",
                      null != o ? o : "The operation cannot be processed",
                      t
                    )
                  : 429 === t
                  ? new f.default(
                      "TOO_MANY_REQUESTS",
                      "You have made too many requests in a short period of time. Please retry your request later",
                      t
                    )
                  : 500 === t
                  ? new f.default(
                      "SERVER_ERROR",
                      "Try again. If the problem persists, contact support.",
                      t
                    )
                  : 503 === t
                  ? new f.default(
                      "SERVICE_UNAVAILABLE",
                      "The service is temporarily unavailable. Please retry shortly.",
                      t
                    )
                  : t >= 400
                  ? new f.default(
                      null != i ? i : "UNEXPECTED_ERROR",
                      null != o ? o : "An unexpected error occurred",
                      t
                    )
                  : null;
              }),
              (t.prototype.doCall = function (t) {
                return this.table(t);
              }),
              (t.prototype.getId = function () {
                return this._id;
              }),
              (t.createFunctor = function (e, r) {
                var n = new t(e, r),
                  i = function (t) {
                    return n.doCall(t);
                  };
                return (
                  (i._base = n),
                  (i.table = n.table.bind(n)),
                  (i.makeRequest = n.makeRequest.bind(n)),
                  (i.runAction = n.runAction.bind(n)),
                  (i.getId = n.getId.bind(n)),
                  i
                );
              }),
              t
            );
          })();
        function y(t) {
          return "GET" !== t && "DELETE" !== t;
        }
        function b(t, e) {
          return a.default(e)
            ? null
            : new f.default(
                "UNEXPECTED_ERROR",
                "The response from Airtable was invalid JSON. Please try again soon.",
                t
              );
        }
        e.exports = m;
      },
      {
        "./abort-controller": 1,
        "./airtable_error": 2,
        "./exponential_backoff_with_jitter": 6,
        "./fetch": 7,
        "./http_headers": 9,
        "./object_to_query_param_string": 11,
        "./package_version": 12,
        "./run_action": 16,
        "./table": 17,
        "lodash/get": 77,
        "lodash/isPlainObject": 89,
        "lodash/keys": 93,
      },
    ],
    4: [
      function (t, e, r) {
        function n(t, e, r) {
          return (
            void 0 === r && (r = void 0),
            function () {
              for (var n, i = [], o = 0; o < arguments.length; o++)
                i[o] = arguments[o];
              if (
                "function" !=
                typeof i[
                  (n = void 0 === r ? (i.length > 0 ? i.length - 1 : 0) : r)
                ]
              ) {
                for (var a = [], s = Math.max(i.length, n), u = 0; u < s; u++)
                  a.push(i[u]);
                return new Promise(function (r, n) {
                  a.push(function (t, e) {
                    t ? n(t) : r(e);
                  }),
                    t.apply(e, a);
                });
              }
              t.apply(e, i);
            }
          );
        }
        e.exports = n;
      },
      {},
    ],
    5: [
      function (t, e, r) {
        var n = {};
        function i(t, e, r) {
          return function () {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            n[e] || ((n[e] = !0), console.warn(r)), t.apply(this, i);
          };
        }
        e.exports = i;
      },
      {},
    ],
    6: [
      function (t, e, r) {
        var n = (
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          }
        )(t("./internal_config.json"));
        function i(t) {
          var e =
              n.default.INITIAL_RETRY_DELAY_IF_RATE_LIMITED * Math.pow(2, t),
            r = Math.min(n.default.MAX_RETRY_DELAY_IF_RATE_LIMITED, e);
          return Math.random() * r;
        }
        e.exports = i;
      },
      { "./internal_config.json": 10 },
    ],
    7: [
      function (t, e, r) {
        var n = (
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            }
          )(t("node-fetch")),
          i =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof self
              ? self
              : null;
        e.exports = i ? i.fetch.bind(i) : n.default;
      },
      { "node-fetch": 20 },
    ],
    8: [
      function (t, e, r) {
        function n(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        e.exports = n;
      },
      {},
    ],
    9: [
      function (t, e, r) {
        var n = (
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            }
          )(t("lodash/keys")),
          i = "undefined" != typeof window,
          o = (function () {
            function t() {
              this._headersByLowercasedKey = {};
            }
            return (
              (t.prototype.set = function (t, e) {
                var r = t.toLowerCase();
                "x-airtable-user-agent" === r &&
                  ((r = "user-agent"), (t = "User-Agent")),
                  (this._headersByLowercasedKey[r] = {
                    headerKey: t,
                    headerValue: e,
                  });
              }),
              (t.prototype.toJSON = function () {
                for (
                  var t = {},
                    e = 0,
                    r = n.default(this._headersByLowercasedKey);
                  e < r.length;
                  e++
                ) {
                  var o = r[e],
                    a = this._headersByLowercasedKey[o];
                  t[
                    i && "user-agent" === o
                      ? "X-Airtable-User-Agent"
                      : a.headerKey
                  ] = a.headerValue;
                }
                return t;
              }),
              t
            );
          })();
        e.exports = o;
      },
      { "lodash/keys": 93 },
    ],
    10: [
      function (t, e, r) {
        e.exports = {
          INITIAL_RETRY_DELAY_IF_RATE_LIMITED: 5e3,
          MAX_RETRY_DELAY_IF_RATE_LIMITED: 6e5,
        };
      },
      {},
    ],
    11: [
      function (t, e, r) {
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            },
          i = n(t("lodash/isArray")),
          o = n(t("lodash/isNil")),
          a = n(t("lodash/keys"));
        function s(t, e, r) {
          if (i.default(e))
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              /\[\]$/.test(t)
                ? r(t, o)
                : s(
                    t +
                      "[" +
                      ("object" == typeof o && null !== o ? n : "") +
                      "]",
                    o,
                    r
                  );
            }
          else if ("object" == typeof e)
            for (var u = 0, l = a.default(e); u < l.length; u++) {
              var c = l[u];
              s(t + "[" + c + "]", (o = e[c]), r);
            }
          else r(t, e);
        }
        function u(t) {
          for (
            var e = [],
              r = function (t, r) {
                (r = o.default(r) ? "" : r),
                  e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
              },
              n = 0,
              i = a.default(t);
            n < i.length;
            n++
          ) {
            var u = i[n];
            s(u, t[u], r);
          }
          return e.join("&").replace(/%20/g, "+");
        }
        e.exports = u;
      },
      { "lodash/isArray": 79, "lodash/isNil": 85, "lodash/keys": 93 },
    ],
    12: [
      function (t, e, r) {
        e.exports = "0.11.6";
      },
      {},
    ],
    13: [
      function (t, e, r) {
        var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var i in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, i) &&
                          (t[i] = e[i]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            },
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            },
          o = i(t("lodash/isFunction")),
          a = i(t("lodash/keys")),
          s = i(t("./record")),
          u = i(t("./callback_to_promise")),
          l = i(t("./has")),
          c = t("./query_params"),
          f = i(t("./object_to_query_param_string")),
          h = (function () {
            function t(t, e) {
              (this._table = t),
                (this._params = e),
                (this.firstPage = u.default(p, this)),
                (this.eachPage = u.default(d, this, 1)),
                (this.all = u.default(_, this));
            }
            return (
              (t.validateParams = function (e) {
                for (
                  var r = {}, n = [], i = [], o = 0, s = a.default(e);
                  o < s.length;
                  o++
                ) {
                  var u = s[o],
                    c = e[u];
                  if (l.default(t.paramValidators, u)) {
                    var f = (0, t.paramValidators[u])(c);
                    f.pass ? (r[u] = c) : i.push(f.error);
                  } else n.push(u);
                }
                return { validParams: r, ignoredKeys: n, errors: i };
              }),
              (t.paramValidators = c.paramValidators),
              t
            );
          })();
        function p(t) {
          if (!o.default(t))
            throw new Error(
              "The first parameter to `firstPage` must be a function"
            );
          this.eachPage(
            function (e) {
              t(null, e);
            },
            function (e) {
              t(e, null);
            }
          );
        }
        function d(t, e) {
          var r = this;
          if (!o.default(t))
            throw new Error(
              "The first parameter to `eachPage` must be a function"
            );
          if (!o.default(e) && void 0 !== e)
            throw new Error(
              "The second parameter to `eachPage` must be a function or undefined"
            );
          var i,
            a,
            u = n({}, this._params),
            l = "/" + this._table._urlEncodedNameOrId() + "?" + f.default(u),
            h = {},
            p = null;
          if ("post" === u.method || l.length > c.URL_CHARACTER_LENGTH_LIMIT) {
            (p = u),
              (i = "post"),
              (a = "/" + this._table._urlEncodedNameOrId() + "/listRecords");
            for (var d = 0, _ = Object.keys(u); d < _.length; d++) {
              var g = _[d];
              c.shouldListRecordsParamBePassedAsParameter(g)
                ? (h[g] = u[g])
                : (p[g] = u[g]);
            }
          } else
            (i = "get"), (h = u), (a = "/" + this._table._urlEncodedNameOrId());
          var v = function () {
            r._table._base.runAction(i, a, h, p, function (n, i, o) {
              if (n) e(n, null);
              else {
                var a = void 0;
                o.offset
                  ? ((u.offset = o.offset), (a = v))
                  : (a = function () {
                      e(null);
                    });
                var l = o.records.map(function (t) {
                  return new s.default(r._table, null, t);
                });
                t(l, a);
              }
            });
          };
          v();
        }
        function _(t) {
          if (!o.default(t))
            throw new Error("The first parameter to `all` must be a function");
          var e = [];
          this.eachPage(
            function (t, r) {
              e.push.apply(e, t), r();
            },
            function (r) {
              r ? t(r, null) : t(null, e);
            }
          );
        }
        e.exports = h;
      },
      {
        "./callback_to_promise": 4,
        "./has": 8,
        "./object_to_query_param_string": 11,
        "./query_params": 14,
        "./record": 15,
        "lodash/isFunction": 83,
        "lodash/keys": 93,
      },
    ],
    14: [
      function (t, e, r) {
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.shouldListRecordsParamBePassedAsParameter =
            r.URL_CHARACTER_LENGTH_LIMIT =
            r.paramValidators =
              void 0);
        var i = n(t("./typecheck")),
          o = n(t("lodash/isString")),
          a = n(t("lodash/isNumber")),
          s = n(t("lodash/isPlainObject")),
          u = n(t("lodash/isBoolean"));
        (r.paramValidators = {
          fields: i.default(
            i.default.isArrayOf(o.default),
            "the value for `fields` should be an array of strings"
          ),
          filterByFormula: i.default(
            o.default,
            "the value for `filterByFormula` should be a string"
          ),
          maxRecords: i.default(
            a.default,
            "the value for `maxRecords` should be a number"
          ),
          pageSize: i.default(
            a.default,
            "the value for `pageSize` should be a number"
          ),
          offset: i.default(
            a.default,
            "the value for `offset` should be a number"
          ),
          sort: i.default(
            i.default.isArrayOf(function (t) {
              return (
                s.default(t) &&
                o.default(t.field) &&
                (void 0 === t.direction ||
                  ["asc", "desc"].includes(t.direction))
              );
            }),
            'the value for `sort` should be an array of sort objects. Each sort object must have a string `field` value, and an optional `direction` value that is "asc" or "desc".'
          ),
          view: i.default(o.default, "the value for `view` should be a string"),
          cellFormat: i.default(function (t) {
            return o.default(t) && ["json", "string"].includes(t);
          }, 'the value for `cellFormat` should be "json" or "string"'),
          timeZone: i.default(
            o.default,
            "the value for `timeZone` should be a string"
          ),
          userLocale: i.default(
            o.default,
            "the value for `userLocale` should be a string"
          ),
          method: i.default(function (t) {
            return o.default(t) && ["get", "post"].includes(t);
          }, 'the value for `method` should be "get" or "post"'),
          returnFieldsByFieldId: i.default(
            u.default,
            "the value for `returnFieldsByFieldId` should be a boolean"
          ),
        }),
          (r.URL_CHARACTER_LENGTH_LIMIT = 15e3),
          (r.shouldListRecordsParamBePassedAsParameter = function (t) {
            return "timeZone" === t || "userLocale" === t;
          });
      },
      {
        "./typecheck": 18,
        "lodash/isBoolean": 81,
        "lodash/isNumber": 86,
        "lodash/isPlainObject": 89,
        "lodash/isString": 90,
      },
    ],
    15: [
      function (t, e, r) {
        var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var i in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, i) &&
                          (t[i] = e[i]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            },
          i = (
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            }
          )(t("./callback_to_promise")),
          o = (function () {
            function t(t, e, r) {
              (this._table = t),
                (this.id = e || r.id),
                this.setRawJson(r),
                (this.save = i.default(a, this)),
                (this.patchUpdate = i.default(s, this)),
                (this.putUpdate = i.default(u, this)),
                (this.destroy = i.default(l, this)),
                (this.fetch = i.default(c, this)),
                (this.updateFields = this.patchUpdate),
                (this.replaceFields = this.putUpdate);
            }
            return (
              (t.prototype.getId = function () {
                return this.id;
              }),
              (t.prototype.get = function (t) {
                return this.fields[t];
              }),
              (t.prototype.set = function (t, e) {
                this.fields[t] = e;
              }),
              (t.prototype.setRawJson = function (t) {
                (this._rawJson = t),
                  (this.fields = (this._rawJson && this._rawJson.fields) || {});
              }),
              t
            );
          })();
        function a(t) {
          this.putUpdate(this.fields, t);
        }
        function s(t, e, r) {
          var i = this;
          r || ((r = e), (e = {}));
          var o = n({ fields: t }, e);
          this._table._base.runAction(
            "patch",
            "/" + this._table._urlEncodedNameOrId() + "/" + this.id,
            {},
            o,
            function (t, e, n) {
              t ? r(t) : (i.setRawJson(n), r(null, i));
            }
          );
        }
        function u(t, e, r) {
          var i = this;
          r || ((r = e), (e = {}));
          var o = n({ fields: t }, e);
          this._table._base.runAction(
            "put",
            "/" + this._table._urlEncodedNameOrId() + "/" + this.id,
            {},
            o,
            function (t, e, n) {
              t ? r(t) : (i.setRawJson(n), r(null, i));
            }
          );
        }
        function l(t) {
          var e = this;
          this._table._base.runAction(
            "delete",
            "/" + this._table._urlEncodedNameOrId() + "/" + this.id,
            {},
            null,
            function (r) {
              r ? t(r) : t(null, e);
            }
          );
        }
        function c(t) {
          var e = this;
          this._table._base.runAction(
            "get",
            "/" + this._table._urlEncodedNameOrId() + "/" + this.id,
            {},
            null,
            function (r, n, i) {
              r ? t(r) : (e.setRawJson(i), t(null, e));
            }
          );
        }
        e.exports = o;
      },
      { "./callback_to_promise": 4 },
    ],
    16: [
      function (t, e, r) {
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            },
          i = n(t("./exponential_backoff_with_jitter")),
          o = n(t("./object_to_query_param_string")),
          a = n(t("./package_version")),
          s = n(t("./fetch")),
          u = n(t("./abort-controller")),
          l = "Airtable.js/" + a.default;
        function c(t, e, r, n, a, f, h) {
          var p =
              t._airtable._endpointUrl +
              "/v" +
              t._airtable._apiVersionMajor +
              "/" +
              t._id +
              r +
              "?" +
              o.default(n),
            d = {
              authorization: "Bearer " + t._airtable._apiKey,
              "x-api-version": t._airtable._apiVersion,
              "x-airtable-application-id": t.getId(),
              "content-type": "application/json",
            };
          "undefined" != typeof window
            ? (d["x-airtable-user-agent"] = l)
            : (d["User-Agent"] = l);
          var _ = new u.default(),
            g = e.toUpperCase(),
            v = { method: g, headers: d, signal: _.signal };
          null !== a &&
            ("GET" === g || "HEAD" === g
              ? console.warn(
                  "body argument to runAction are ignored with GET or HEAD requests"
                )
              : (v.body = JSON.stringify(a)));
          var m = setTimeout(function () {
            _.abort();
          }, t._airtable._requestTimeout);
          s.default(p, v)
            .then(function (o) {
              if (
                (clearTimeout(m),
                429 !== o.status || t._airtable._noRetryIfRateLimited)
              )
                o.json()
                  .then(function (e) {
                    var r = t._checkStatusForError(o.status, e),
                      n = {};
                    Object.keys(o).forEach(function (t) {
                      n[t] = o[t];
                    }),
                      (n.body = e),
                      (n.statusCode = o.status),
                      f(r, n, e);
                  })
                  .catch(function () {
                    f(t._checkStatusForError(o.status));
                  });
              else {
                var s = i.default(h);
                setTimeout(function () {
                  c(t, e, r, n, a, f, h + 1);
                }, s);
              }
            })
            .catch(function (t) {
              clearTimeout(m), f(t);
            });
        }
        e.exports = c;
      },
      {
        "./abort-controller": 1,
        "./exponential_backoff_with_jitter": 6,
        "./fetch": 7,
        "./object_to_query_param_string": 11,
        "./package_version": 12,
      },
    ],
    17: [
      function (t, e, r) {
        var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var i in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, i) &&
                          (t[i] = e[i]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            },
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            },
          o = i(t("lodash/isPlainObject")),
          a = i(t("./deprecate")),
          s = i(t("./query")),
          u = t("./query_params"),
          l = i(t("./object_to_query_param_string")),
          c = i(t("./record")),
          f = i(t("./callback_to_promise")),
          h = (function () {
            function t(t, e, r) {
              if (!e && !r)
                throw new Error("Table name or table ID is required");
              (this._base = t),
                (this.id = e),
                (this.name = r),
                (this.find = f.default(this._findRecordById, this)),
                (this.select = this._selectRecords.bind(this)),
                (this.create = f.default(this._createRecords, this)),
                (this.update = f.default(
                  this._updateRecords.bind(this, !1),
                  this
                )),
                (this.replace = f.default(
                  this._updateRecords.bind(this, !0),
                  this
                )),
                (this.destroy = f.default(this._destroyRecord, this)),
                (this.list = a.default(
                  this._listRecords.bind(this),
                  "table.list",
                  "Airtable: `list()` is deprecated. Use `select()` instead."
                )),
                (this.forEach = a.default(
                  this._forEachRecord.bind(this),
                  "table.forEach",
                  "Airtable: `forEach()` is deprecated. Use `select()` instead."
                ));
            }
            return (
              (t.prototype._findRecordById = function (t, e) {
                new c.default(this, t).fetch(e);
              }),
              (t.prototype._selectRecords = function (t) {
                if (
                  (void 0 === t && (t = {}),
                  arguments.length > 1 &&
                    console.warn(
                      "Airtable: `select` takes only one parameter, but it was given " +
                        arguments.length +
                        " parameters. Use `eachPage` or `firstPage` to fetch records."
                    ),
                  o.default(t))
                ) {
                  var e = s.default.validateParams(t);
                  if (e.errors.length) {
                    var r = e.errors.map(function (t) {
                      return "  * " + t;
                    });
                    throw new Error(
                      "Airtable: invalid parameters for `select`:\n" +
                        r.join("\n")
                    );
                  }
                  return (
                    e.ignoredKeys.length &&
                      console.warn(
                        "Airtable: the following parameters to `select` will be ignored: " +
                          e.ignoredKeys.join(", ")
                      ),
                    new s.default(this, e.validParams)
                  );
                }
                throw new Error(
                  "Airtable: the parameter for `select` should be a plain object or undefined."
                );
              }),
              (t.prototype._urlEncodedNameOrId = function () {
                return this.id || encodeURIComponent(this.name);
              }),
              (t.prototype._createRecords = function (t, e, r) {
                var i,
                  o = this,
                  a = Array.isArray(t);
                r || ((r = e), (e = {})),
                  (i = n(a ? { records: t } : { fields: t }, e)),
                  this._base.runAction(
                    "post",
                    "/" + this._urlEncodedNameOrId() + "/",
                    {},
                    i,
                    function (t, e, n) {
                      var i;
                      t
                        ? r(t)
                        : ((i = a
                            ? n.records.map(function (t) {
                                return new c.default(o, t.id, t);
                              })
                            : new c.default(o, n.id, n)),
                          r(null, i));
                    }
                  );
              }),
              (t.prototype._updateRecords = function (t, e, r, i, a) {
                var s,
                  u = this;
                if (Array.isArray(e)) {
                  var l = e;
                  (s = o.default(r) ? r : {}), (a = i || r);
                  var f = t ? "put" : "patch",
                    h = n({ records: l }, s);
                  this._base.runAction(
                    f,
                    "/" + this._urlEncodedNameOrId() + "/",
                    {},
                    h,
                    function (t, e, r) {
                      if (t) a(t);
                      else {
                        var n = r.records.map(function (t) {
                          return new c.default(u, t.id, t);
                        });
                        a(null, n);
                      }
                    }
                  );
                } else {
                  var p = e,
                    d = r;
                  (s = o.default(i) ? i : {}), (a = a || i);
                  var _ = new c.default(this, p);
                  t ? _.putUpdate(d, s, a) : _.patchUpdate(d, s, a);
                }
              }),
              (t.prototype._destroyRecord = function (t, e) {
                var r = this;
                if (Array.isArray(t)) {
                  var n = { records: t };
                  this._base.runAction(
                    "delete",
                    "/" + this._urlEncodedNameOrId(),
                    n,
                    null,
                    function (t, n, i) {
                      if (t) e(t);
                      else {
                        var o = i.records.map(function (t) {
                          var e = t.id;
                          return new c.default(r, e, null);
                        });
                        e(null, o);
                      }
                    }
                  );
                } else new c.default(this, t).destroy(e);
              }),
              (t.prototype._listRecords = function (t, e, r, i) {
                var o = this;
                i || ((i = r), (r = {}));
                var a,
                  s,
                  f = "/" + this._urlEncodedNameOrId() + "?" + l.default(r),
                  h = {},
                  p = null;
                if (
                  ("function" != typeof r && "post" === r.method) ||
                  f.length > u.URL_CHARACTER_LENGTH_LIMIT
                ) {
                  (a = "/" + this._urlEncodedNameOrId() + "/listRecords"),
                    (p = n(n({}, t && { pageSize: t }), e && { offset: e })),
                    (s = "post");
                  for (var d = 0, _ = Object.keys(r); d < _.length; d++) {
                    var g = _[d];
                    u.shouldListRecordsParamBePassedAsParameter(g)
                      ? (h[g] = r[g])
                      : (p[g] = r[g]);
                  }
                } else
                  (s = "get"),
                    (a = "/" + this._urlEncodedNameOrId() + "/"),
                    (h = n({ limit: t, offset: e }, r));
                this._base.runAction(s, a, h, p, function (t, e, r) {
                  if (t) i(t);
                  else {
                    var n = r.records.map(function (t) {
                      return new c.default(o, null, t);
                    });
                    i(null, n, r.offset);
                  }
                });
              }),
              (t.prototype._forEachRecord = function (e, r, n) {
                var i = this;
                2 === arguments.length && ((n = r), (r = e), (e = {}));
                var o = t.__recordsPerPageForIteration || 100,
                  a = null,
                  s = function () {
                    i._listRecords(o, a, e, function (t, e, i) {
                      if (t) n(t);
                      else {
                        for (var o = 0; o < e.length; o++) r(e[o]);
                        i ? ((a = i), s()) : n();
                      }
                    });
                  };
                s();
              }),
              t
            );
          })();
        e.exports = h;
      },
      {
        "./callback_to_promise": 4,
        "./deprecate": 5,
        "./object_to_query_param_string": 11,
        "./query": 13,
        "./query_params": 14,
        "./record": 15,
        "lodash/isPlainObject": 89,
      },
    ],
    18: [
      function (t, e, r) {
        function n(t, e) {
          return function (r) {
            return t(r) ? { pass: !0 } : { pass: !1, error: e };
          };
        }
        (n.isOneOf = function (t) {
          return t.includes.bind(t);
        }),
          (n.isArrayOf = function (t) {
            return function (e) {
              return Array.isArray(e) && e.every(t);
            };
          }),
          (e.exports = n);
      },
      {},
    ],
    19: [
      function (t, e, r) {
        function n(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        function o(t, e, r) {
          return e && i(t.prototype, e), r && i(t, r), t;
        }
        function a(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && u(t, e);
        }
        function s(t) {
          return (
            (s = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            s(t)
          );
        }
        function u(t, e) {
          return (
            (u =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            u(t, e)
          );
        }
        function l(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function c(t, e) {
          return !e || ("object" != typeof e && "function" != typeof e)
            ? l(t)
            : e;
        }
        function f(t, e) {
          for (
            ;
            !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t));

          );
          return t;
        }
        function h(t, e, r) {
          return (
            (h =
              "undefined" != typeof Reflect && Reflect.get
                ? Reflect.get
                : function (t, e, r) {
                    var n = f(t, e);
                    if (n) {
                      var i = Object.getOwnPropertyDescriptor(n, e);
                      return i.get ? i.get.call(r) : i.value;
                    }
                  }),
            h(t, e, r || t)
          );
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var p = (function () {
            function t() {
              n(this, t),
                Object.defineProperty(this, "listeners", {
                  value: {},
                  writable: !0,
                  configurable: !0,
                });
            }
            return (
              o(t, [
                {
                  key: "addEventListener",
                  value: function (t, e) {
                    t in this.listeners || (this.listeners[t] = []),
                      this.listeners[t].push(e);
                  },
                },
                {
                  key: "removeEventListener",
                  value: function (t, e) {
                    if (t in this.listeners)
                      for (
                        var r = this.listeners[t], n = 0, i = r.length;
                        n < i;
                        n++
                      )
                        if (r[n] === e) return void r.splice(n, 1);
                  },
                },
                {
                  key: "dispatchEvent",
                  value: function (t) {
                    var e = this;
                    if (t.type in this.listeners) {
                      for (
                        var r = function (r) {
                            setTimeout(function () {
                              return r.call(e, t);
                            });
                          },
                          n = this.listeners[t.type],
                          i = 0,
                          o = n.length;
                        i < o;
                        i++
                      )
                        r(n[i]);
                      return !t.defaultPrevented;
                    }
                  },
                },
              ]),
              t
            );
          })(),
          d = (function (t) {
            function e() {
              var t;
              return (
                n(this, e),
                (t = c(this, s(e).call(this))).listeners || p.call(l(t)),
                Object.defineProperty(l(t), "aborted", {
                  value: !1,
                  writable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(l(t), "onabort", {
                  value: null,
                  writable: !0,
                  configurable: !0,
                }),
                t
              );
            }
            return (
              a(e, t),
              o(e, [
                {
                  key: "toString",
                  value: function () {
                    return "[object AbortSignal]";
                  },
                },
                {
                  key: "dispatchEvent",
                  value: function (t) {
                    "abort" === t.type &&
                      ((this.aborted = !0),
                      "function" == typeof this.onabort &&
                        this.onabort.call(this, t)),
                      h(s(e.prototype), "dispatchEvent", this).call(this, t);
                  },
                },
              ]),
              e
            );
          })(p),
          _ = (function () {
            function t() {
              n(this, t),
                Object.defineProperty(this, "signal", {
                  value: new d(),
                  writable: !0,
                  configurable: !0,
                });
            }
            return (
              o(t, [
                {
                  key: "abort",
                  value: function () {
                    var t;
                    try {
                      t = new Event("abort");
                    } catch (e) {
                      "undefined" != typeof document
                        ? document.createEvent
                          ? (t = document.createEvent("Event")).initEvent(
                              "abort",
                              !1,
                              !1
                            )
                          : ((t = document.createEventObject()).type = "abort")
                        : (t = { type: "abort", bubbles: !1, cancelable: !1 });
                    }
                    this.signal.dispatchEvent(t);
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return "[object AbortController]";
                  },
                },
              ]),
              t
            );
          })();
        function g(t) {
          return t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
            ? (console.log(
                "__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"
              ),
              !0)
            : ("function" == typeof t.Request &&
                !t.Request.prototype.hasOwnProperty("signal")) ||
                !t.AbortController;
        }
        function v(t) {
          "function" == typeof t && (t = { fetch: t });
          var e = t,
            r = e.fetch,
            n = e.Request,
            i = void 0 === n ? r.Request : n,
            o = e.AbortController,
            a = e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,
            s = void 0 !== a && a;
          if (
            !g({
              fetch: r,
              Request: i,
              AbortController: o,
              __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: s,
            })
          )
            return { fetch: r, Request: u };
          var u = i;
          ((u && !u.prototype.hasOwnProperty("signal")) || s) &&
            ((u = function (t, e) {
              var r;
              e && e.signal && ((r = e.signal), delete e.signal);
              var n = new i(t, e);
              return (
                r &&
                  Object.defineProperty(n, "signal", {
                    writable: !1,
                    enumerable: !1,
                    configurable: !0,
                    value: r,
                  }),
                n
              );
            }).prototype = i.prototype);
          var l = r;
          return {
            fetch: function (t, e) {
              var r =
                u && u.prototype.isPrototypeOf(t)
                  ? t.signal
                  : e
                  ? e.signal
                  : void 0;
              if (r) {
                var n;
                try {
                  n = new DOMException("Aborted", "AbortError");
                } catch (t) {
                  (n = new Error("Aborted")).name = "AbortError";
                }
                if (r.aborted) return Promise.reject(n);
                var i = new Promise(function (t, e) {
                  r.addEventListener(
                    "abort",
                    function () {
                      return e(n);
                    },
                    { once: !0 }
                  );
                });
                return (
                  e && e.signal && delete e.signal, Promise.race([i, l(t, e)])
                );
              }
              return l(t, e);
            },
            Request: u,
          };
        }
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          ((_.prototype[Symbol.toStringTag] = "AbortController"),
          (d.prototype[Symbol.toStringTag] = "AbortSignal")),
          (r.AbortController = _),
          (r.AbortSignal = d),
          (r.abortableFetch = v);
      },
      {},
    ],
    20: [function (t, e, r) {}, {}],
    21: [
      function (t, e, r) {
        var n = t("./_hashClear"),
          i = t("./_hashDelete"),
          o = t("./_hashGet"),
          a = t("./_hashHas"),
          s = t("./_hashSet");
        function u(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.clear(); ++e < r; ) {
            var n = t[e];
            this.set(n[0], n[1]);
          }
        }
        (u.prototype.clear = n),
          (u.prototype.delete = i),
          (u.prototype.get = o),
          (u.prototype.has = a),
          (u.prototype.set = s),
          (e.exports = u);
      },
      {
        "./_hashClear": 46,
        "./_hashDelete": 47,
        "./_hashGet": 48,
        "./_hashHas": 49,
        "./_hashSet": 50,
      },
    ],
    22: [
      function (t, e, r) {
        var n = t("./_listCacheClear"),
          i = t("./_listCacheDelete"),
          o = t("./_listCacheGet"),
          a = t("./_listCacheHas"),
          s = t("./_listCacheSet");
        function u(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.clear(); ++e < r; ) {
            var n = t[e];
            this.set(n[0], n[1]);
          }
        }
        (u.prototype.clear = n),
          (u.prototype.delete = i),
          (u.prototype.get = o),
          (u.prototype.has = a),
          (u.prototype.set = s),
          (e.exports = u);
      },
      {
        "./_listCacheClear": 56,
        "./_listCacheDelete": 57,
        "./_listCacheGet": 58,
        "./_listCacheHas": 59,
        "./_listCacheSet": 60,
      },
    ],
    23: [
      function (t, e, r) {
        var n = t("./_getNative")(t("./_root"), "Map");
        e.exports = n;
      },
      { "./_getNative": 42, "./_root": 72 },
    ],
    24: [
      function (t, e, r) {
        var n = t("./_mapCacheClear"),
          i = t("./_mapCacheDelete"),
          o = t("./_mapCacheGet"),
          a = t("./_mapCacheHas"),
          s = t("./_mapCacheSet");
        function u(t) {
          var e = -1,
            r = null == t ? 0 : t.length;
          for (this.clear(); ++e < r; ) {
            var n = t[e];
            this.set(n[0], n[1]);
          }
        }
        (u.prototype.clear = n),
          (u.prototype.delete = i),
          (u.prototype.get = o),
          (u.prototype.has = a),
          (u.prototype.set = s),
          (e.exports = u);
      },
      {
        "./_mapCacheClear": 61,
        "./_mapCacheDelete": 62,
        "./_mapCacheGet": 63,
        "./_mapCacheHas": 64,
        "./_mapCacheSet": 65,
      },
    ],
    25: [
      function (t, e, r) {
        var n = t("./_root").Symbol;
        e.exports = n;
      },
      { "./_root": 72 },
    ],
    26: [
      function (t, e, r) {
        var n = t("./_baseTimes"),
          i = t("./isArguments"),
          o = t("./isArray"),
          a = t("./isBuffer"),
          s = t("./_isIndex"),
          u = t("./isTypedArray"),
          l = Object.prototype.hasOwnProperty;
        function c(t, e) {
          var r = o(t),
            c = !r && i(t),
            f = !r && !c && a(t),
            h = !r && !c && !f && u(t),
            p = r || c || f || h,
            d = p ? n(t.length, String) : [],
            _ = d.length;
          for (var g in t)
            (!e && !l.call(t, g)) ||
              (p &&
                ("length" == g ||
                  (f && ("offset" == g || "parent" == g)) ||
                  (h &&
                    ("buffer" == g ||
                      "byteLength" == g ||
                      "byteOffset" == g)) ||
                  s(g, _))) ||
              d.push(g);
          return d;
        }
        e.exports = c;
      },
      {
        "./_baseTimes": 35,
        "./_isIndex": 51,
        "./isArguments": 78,
        "./isArray": 79,
        "./isBuffer": 82,
        "./isTypedArray": 92,
      },
    ],
    27: [
      function (t, e, r) {
        function n(t, e) {
          for (
            var r = -1, n = null == t ? 0 : t.length, i = Array(n);
            ++r < n;

          )
            i[r] = e(t[r], r, t);
          return i;
        }
        e.exports = n;
      },
      {},
    ],
    28: [
      function (t, e, r) {
        var n = t("./eq");
        function i(t, e) {
          for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
          return -1;
        }
        e.exports = i;
      },
      { "./eq": 76 },
    ],
    29: [
      function (t, e, r) {
        var n = t("./_castPath"),
          i = t("./_toKey");
        function o(t, e) {
          for (var r = 0, o = (e = n(e, t)).length; null != t && r < o; )
            t = t[i(e[r++])];
          return r && r == o ? t : void 0;
        }
        e.exports = o;
      },
      { "./_castPath": 38, "./_toKey": 74 },
    ],
    30: [
      function (t, e, r) {
        var n = t("./_Symbol"),
          i = t("./_getRawTag"),
          o = t("./_objectToString"),
          a = "[object Null]",
          s = "[object Undefined]",
          u = n ? n.toStringTag : void 0;
        function l(t) {
          return null == t
            ? void 0 === t
              ? s
              : a
            : u && u in Object(t)
            ? i(t)
            : o(t);
        }
        e.exports = l;
      },
      { "./_Symbol": 25, "./_getRawTag": 44, "./_objectToString": 70 },
    ],
    31: [
      function (t, e, r) {
        var n = t("./_baseGetTag"),
          i = t("./isObjectLike"),
          o = "[object Arguments]";
        function a(t) {
          return i(t) && n(t) == o;
        }
        e.exports = a;
      },
      { "./_baseGetTag": 30, "./isObjectLike": 88 },
    ],
    32: [
      function (t, e, r) {
        var n = t("./isFunction"),
          i = t("./_isMasked"),
          o = t("./isObject"),
          a = t("./_toSource"),
          s = /[\\^$.*+?()[\]{}|]/g,
          u = /^\[object .+?Constructor\]$/,
          l = Function.prototype,
          c = Object.prototype,
          f = l.toString,
          h = c.hasOwnProperty,
          p = RegExp(
            "^" +
              f
                .call(h)
                .replace(s, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        function d(t) {
          return !(!o(t) || i(t)) && (n(t) ? p : u).test(a(t));
        }
        e.exports = d;
      },
      {
        "./_isMasked": 54,
        "./_toSource": 75,
        "./isFunction": 83,
        "./isObject": 87,
      },
    ],
    33: [
      function (t, e, r) {
        var n = t("./_baseGetTag"),
          i = t("./isLength"),
          o = t("./isObjectLike"),
          a = "[object Arguments]",
          s = "[object Array]",
          u = "[object Boolean]",
          l = "[object Date]",
          c = "[object Error]",
          f = "[object Function]",
          h = "[object Map]",
          p = "[object Number]",
          d = "[object Object]",
          _ = "[object RegExp]",
          g = "[object Set]",
          v = "[object String]",
          m = "[object WeakMap]",
          y = "[object ArrayBuffer]",
          b = "[object DataView]",
          w = "[object Float64Array]",
          x = "[object Int8Array]",
          T = "[object Int16Array]",
          O = "[object Int32Array]",
          E = "[object Uint8Array]",
          A = "[object Uint8ClampedArray]",
          M = "[object Uint16Array]",
          S = "[object Uint32Array]",
          k = {};
        function P(t) {
          return o(t) && i(t.length) && !!k[n(t)];
        }
        (k["[object Float32Array]"] =
          k[w] =
          k[x] =
          k[T] =
          k[O] =
          k[E] =
          k[A] =
          k[M] =
          k[S] =
            !0),
          (k[a] =
            k[s] =
            k[y] =
            k[u] =
            k[b] =
            k[l] =
            k[c] =
            k[f] =
            k[h] =
            k[p] =
            k[d] =
            k[_] =
            k[g] =
            k[v] =
            k[m] =
              !1),
          (e.exports = P);
      },
      { "./_baseGetTag": 30, "./isLength": 84, "./isObjectLike": 88 },
    ],
    34: [
      function (t, e, r) {
        var n = t("./_isPrototype"),
          i = t("./_nativeKeys"),
          o = Object.prototype.hasOwnProperty;
        function a(t) {
          if (!n(t)) return i(t);
          var e = [];
          for (var r in Object(t))
            o.call(t, r) && "constructor" != r && e.push(r);
          return e;
        }
        e.exports = a;
      },
      { "./_isPrototype": 55, "./_nativeKeys": 68 },
    ],
    35: [
      function (t, e, r) {
        function n(t, e) {
          for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
          return n;
        }
        e.exports = n;
      },
      {},
    ],
    36: [
      function (t, e, r) {
        var n = t("./_Symbol"),
          i = t("./_arrayMap"),
          o = t("./isArray"),
          a = t("./isSymbol"),
          s = 1 / 0,
          u = n ? n.prototype : void 0,
          l = u ? u.toString : void 0;
        function c(t) {
          if ("string" == typeof t) return t;
          if (o(t)) return i(t, c) + "";
          if (a(t)) return l ? l.call(t) : "";
          var e = t + "";
          return "0" == e && 1 / t == -s ? "-0" : e;
        }
        e.exports = c;
      },
      { "./_Symbol": 25, "./_arrayMap": 27, "./isArray": 79, "./isSymbol": 91 },
    ],
    37: [
      function (t, e, r) {
        function n(t) {
          return function (e) {
            return t(e);
          };
        }
        e.exports = n;
      },
      {},
    ],
    38: [
      function (t, e, r) {
        var n = t("./isArray"),
          i = t("./_isKey"),
          o = t("./_stringToPath"),
          a = t("./toString");
        function s(t, e) {
          return n(t) ? t : i(t, e) ? [t] : o(a(t));
        }
        e.exports = s;
      },
      {
        "./_isKey": 52,
        "./_stringToPath": 73,
        "./isArray": 79,
        "./toString": 96,
      },
    ],
    39: [
      function (t, e, r) {
        var n = t("./_root")["__core-js_shared__"];
        e.exports = n;
      },
      { "./_root": 72 },
    ],
    40: [
      function (t, r, n) {
        (function (t) {
          var e = "object" == typeof t && t && t.Object === Object && t;
          r.exports = e;
        }).call(
          this,
          void 0 !== e
            ? e
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      },
      {},
    ],
    41: [
      function (t, e, r) {
        var n = t("./_isKeyable");
        function i(t, e) {
          var r = t.__data__;
          return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
        }
        e.exports = i;
      },
      { "./_isKeyable": 53 },
    ],
    42: [
      function (t, e, r) {
        var n = t("./_baseIsNative"),
          i = t("./_getValue");
        function o(t, e) {
          var r = i(t, e);
          return n(r) ? r : void 0;
        }
        e.exports = o;
      },
      { "./_baseIsNative": 32, "./_getValue": 45 },
    ],
    43: [
      function (t, e, r) {
        var n = t("./_overArg")(Object.getPrototypeOf, Object);
        e.exports = n;
      },
      { "./_overArg": 71 },
    ],
    44: [
      function (t, e, r) {
        var n = t("./_Symbol"),
          i = Object.prototype,
          o = i.hasOwnProperty,
          a = i.toString,
          s = n ? n.toStringTag : void 0;
        function u(t) {
          var e = o.call(t, s),
            r = t[s];
          try {
            t[s] = void 0;
            var n = !0;
          } catch (t) {}
          var i = a.call(t);
          return n && (e ? (t[s] = r) : delete t[s]), i;
        }
        e.exports = u;
      },
      { "./_Symbol": 25 },
    ],
    45: [
      function (t, e, r) {
        function n(t, e) {
          return null == t ? void 0 : t[e];
        }
        e.exports = n;
      },
      {},
    ],
    46: [
      function (t, e, r) {
        var n = t("./_nativeCreate");
        function i() {
          (this.__data__ = n ? n(null) : {}), (this.size = 0);
        }
        e.exports = i;
      },
      { "./_nativeCreate": 67 },
    ],
    47: [
      function (t, e, r) {
        function n(t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        }
        e.exports = n;
      },
      {},
    ],
    48: [
      function (t, e, r) {
        var n = t("./_nativeCreate"),
          i = "__lodash_hash_undefined__",
          o = Object.prototype.hasOwnProperty;
        function a(t) {
          var e = this.__data__;
          if (n) {
            var r = e[t];
            return r === i ? void 0 : r;
          }
          return o.call(e, t) ? e[t] : void 0;
        }
        e.exports = a;
      },
      { "./_nativeCreate": 67 },
    ],
    49: [
      function (t, e, r) {
        var n = t("./_nativeCreate"),
          i = Object.prototype.hasOwnProperty;
        function o(t) {
          var e = this.__data__;
          return n ? void 0 !== e[t] : i.call(e, t);
        }
        e.exports = o;
      },
      { "./_nativeCreate": 67 },
    ],
    50: [
      function (t, e, r) {
        var n = t("./_nativeCreate"),
          i = "__lodash_hash_undefined__";
        function o(t, e) {
          var r = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (r[t] = n && void 0 === e ? i : e),
            this
          );
        }
        e.exports = o;
      },
      { "./_nativeCreate": 67 },
    ],
    51: [
      function (t, e, r) {
        var n = 9007199254740991,
          i = /^(?:0|[1-9]\d*)$/;
        function o(t, e) {
          var r = typeof t;
          return (
            !!(e = null == e ? n : e) &&
            ("number" == r || ("symbol" != r && i.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        }
        e.exports = o;
      },
      {},
    ],
    52: [
      function (t, e, r) {
        var n = t("./isArray"),
          i = t("./isSymbol"),
          o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        function s(t, e) {
          if (n(t)) return !1;
          var r = typeof t;
          return (
            !(
              "number" != r &&
              "symbol" != r &&
              "boolean" != r &&
              null != t &&
              !i(t)
            ) ||
            a.test(t) ||
            !o.test(t) ||
            (null != e && t in Object(e))
          );
        }
        e.exports = s;
      },
      { "./isArray": 79, "./isSymbol": 91 },
    ],
    53: [
      function (t, e, r) {
        function n(t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        }
        e.exports = n;
      },
      {},
    ],
    54: [
      function (t, e, r) {
        var n,
          i = t("./_coreJsData"),
          o = (n = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + n
            : "";
        function a(t) {
          return !!o && o in t;
        }
        e.exports = a;
      },
      { "./_coreJsData": 39 },
    ],
    55: [
      function (t, e, r) {
        var n = Object.prototype;
        function i(t) {
          var e = t && t.constructor;
          return t === (("function" == typeof e && e.prototype) || n);
        }
        e.exports = i;
      },
      {},
    ],
    56: [
      function (t, e, r) {
        function n() {
          (this.__data__ = []), (this.size = 0);
        }
        e.exports = n;
      },
      {},
    ],
    57: [
      function (t, e, r) {
        var n = t("./_assocIndexOf"),
          i = Array.prototype.splice;
        function o(t) {
          var e = this.__data__,
            r = n(e, t);
          return !(
            r < 0 ||
            (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, 0)
          );
        }
        e.exports = o;
      },
      { "./_assocIndexOf": 28 },
    ],
    58: [
      function (t, e, r) {
        var n = t("./_assocIndexOf");
        function i(t) {
          var e = this.__data__,
            r = n(e, t);
          return r < 0 ? void 0 : e[r][1];
        }
        e.exports = i;
      },
      { "./_assocIndexOf": 28 },
    ],
    59: [
      function (t, e, r) {
        var n = t("./_assocIndexOf");
        function i(t) {
          return n(this.__data__, t) > -1;
        }
        e.exports = i;
      },
      { "./_assocIndexOf": 28 },
    ],
    60: [
      function (t, e, r) {
        var n = t("./_assocIndexOf");
        function i(t, e) {
          var r = this.__data__,
            i = n(r, t);
          return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
        }
        e.exports = i;
      },
      { "./_assocIndexOf": 28 },
    ],
    61: [
      function (t, e, r) {
        var n = t("./_Hash"),
          i = t("./_ListCache"),
          o = t("./_Map");
        function a() {
          (this.size = 0),
            (this.__data__ = {
              hash: new n(),
              map: new (o || i)(),
              string: new n(),
            });
        }
        e.exports = a;
      },
      { "./_Hash": 21, "./_ListCache": 22, "./_Map": 23 },
    ],
    62: [
      function (t, e, r) {
        var n = t("./_getMapData");
        function i(t) {
          var e = n(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        }
        e.exports = i;
      },
      { "./_getMapData": 41 },
    ],
    63: [
      function (t, e, r) {
        var n = t("./_getMapData");
        function i(t) {
          return n(this, t).get(t);
        }
        e.exports = i;
      },
      { "./_getMapData": 41 },
    ],
    64: [
      function (t, e, r) {
        var n = t("./_getMapData");
        function i(t) {
          return n(this, t).has(t);
        }
        e.exports = i;
      },
      { "./_getMapData": 41 },
    ],
    65: [
      function (t, e, r) {
        var n = t("./_getMapData");
        function i(t, e) {
          var r = n(this, t),
            i = r.size;
          return r.set(t, e), (this.size += r.size == i ? 0 : 1), this;
        }
        e.exports = i;
      },
      { "./_getMapData": 41 },
    ],
    66: [
      function (t, e, r) {
        var n = t("./memoize"),
          i = 500;
        function o(t) {
          var e = n(t, function (t) {
              return r.size === i && r.clear(), t;
            }),
            r = e.cache;
          return e;
        }
        e.exports = o;
      },
      { "./memoize": 94 },
    ],
    67: [
      function (t, e, r) {
        var n = t("./_getNative")(Object, "create");
        e.exports = n;
      },
      { "./_getNative": 42 },
    ],
    68: [
      function (t, e, r) {
        var n = t("./_overArg")(Object.keys, Object);
        e.exports = n;
      },
      { "./_overArg": 71 },
    ],
    69: [
      function (t, e, r) {
        var n = t("./_freeGlobal"),
          i = "object" == typeof r && r && !r.nodeType && r,
          o = i && "object" == typeof e && e && !e.nodeType && e,
          a = o && o.exports === i && n.process,
          s = (function () {
            try {
              var t = o && o.require && o.require("util").types;
              return t || (a && a.binding && a.binding("util"));
            } catch (t) {}
          })();
        e.exports = s;
      },
      { "./_freeGlobal": 40 },
    ],
    70: [
      function (t, e, r) {
        var n = Object.prototype.toString;
        function i(t) {
          return n.call(t);
        }
        e.exports = i;
      },
      {},
    ],
    71: [
      function (t, e, r) {
        function n(t, e) {
          return function (r) {
            return t(e(r));
          };
        }
        e.exports = n;
      },
      {},
    ],
    72: [
      function (t, e, r) {
        var n = t("./_freeGlobal"),
          i = "object" == typeof self && self && self.Object === Object && self,
          o = n || i || Function("return this")();
        e.exports = o;
      },
      { "./_freeGlobal": 40 },
    ],
    73: [
      function (t, e, r) {
        var n = t("./_memoizeCapped"),
          i =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          a = n(function (t) {
            var e = [];
            return (
              46 === t.charCodeAt(0) && e.push(""),
              t.replace(i, function (t, r, n, i) {
                e.push(n ? i.replace(o, "$1") : r || t);
              }),
              e
            );
          });
        e.exports = a;
      },
      { "./_memoizeCapped": 66 },
    ],
    74: [
      function (t, e, r) {
        var n = t("./isSymbol"),
          i = 1 / 0;
        function o(t) {
          if ("string" == typeof t || n(t)) return t;
          var e = t + "";
          return "0" == e && 1 / t == -i ? "-0" : e;
        }
        e.exports = o;
      },
      { "./isSymbol": 91 },
    ],
    75: [
      function (t, e, r) {
        var n = Function.prototype.toString;
        function i(t) {
          if (null != t) {
            try {
              return n.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        }
        e.exports = i;
      },
      {},
    ],
    76: [
      function (t, e, r) {
        function n(t, e) {
          return t === e || (t != t && e != e);
        }
        e.exports = n;
      },
      {},
    ],
    77: [
      function (t, e, r) {
        var n = t("./_baseGet");
        function i(t, e, r) {
          var i = null == t ? void 0 : n(t, e);
          return void 0 === i ? r : i;
        }
        e.exports = i;
      },
      { "./_baseGet": 29 },
    ],
    78: [
      function (t, e, r) {
        var n = t("./_baseIsArguments"),
          i = t("./isObjectLike"),
          o = Object.prototype,
          a = o.hasOwnProperty,
          s = o.propertyIsEnumerable,
          u = n(
            (function () {
              return arguments;
            })()
          )
            ? n
            : function (t) {
                return i(t) && a.call(t, "callee") && !s.call(t, "callee");
              };
        e.exports = u;
      },
      { "./_baseIsArguments": 31, "./isObjectLike": 88 },
    ],
    79: [
      function (t, e, r) {
        var n = Array.isArray;
        e.exports = n;
      },
      {},
    ],
    80: [
      function (t, e, r) {
        var n = t("./isFunction"),
          i = t("./isLength");
        function o(t) {
          return null != t && i(t.length) && !n(t);
        }
        e.exports = o;
      },
      { "./isFunction": 83, "./isLength": 84 },
    ],
    81: [
      function (t, e, r) {
        var n = t("./_baseGetTag"),
          i = t("./isObjectLike"),
          o = "[object Boolean]";
        function a(t) {
          return !0 === t || !1 === t || (i(t) && n(t) == o);
        }
        e.exports = a;
      },
      { "./_baseGetTag": 30, "./isObjectLike": 88 },
    ],
    82: [
      function (t, e, r) {
        var n = t("./_root"),
          i = t("./stubFalse"),
          o = "object" == typeof r && r && !r.nodeType && r,
          a = o && "object" == typeof e && e && !e.nodeType && e,
          s = a && a.exports === o ? n.Buffer : void 0,
          u = (s ? s.isBuffer : void 0) || i;
        e.exports = u;
      },
      { "./_root": 72, "./stubFalse": 95 },
    ],
    83: [
      function (t, e, r) {
        var n = t("./_baseGetTag"),
          i = t("./isObject"),
          o = "[object AsyncFunction]",
          a = "[object Function]",
          s = "[object GeneratorFunction]",
          u = "[object Proxy]";
        function l(t) {
          if (!i(t)) return !1;
          var e = n(t);
          return e == a || e == s || e == o || e == u;
        }
        e.exports = l;
      },
      { "./_baseGetTag": 30, "./isObject": 87 },
    ],
    84: [
      function (t, e, r) {
        var n = 9007199254740991;
        function i(t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
        }
        e.exports = i;
      },
      {},
    ],
    85: [
      function (t, e, r) {
        function n(t) {
          return null == t;
        }
        e.exports = n;
      },
      {},
    ],
    86: [
      function (t, e, r) {
        var n = t("./_baseGetTag"),
          i = t("./isObjectLike"),
          o = "[object Number]";
        function a(t) {
          return "number" == typeof t || (i(t) && n(t) == o);
        }
        e.exports = a;
      },
      { "./_baseGetTag": 30, "./isObjectLike": 88 },
    ],
    87: [
      function (t, e, r) {
        function n(t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        }
        e.exports = n;
      },
      {},
    ],
    88: [
      function (t, e, r) {
        function n(t) {
          return null != t && "object" == typeof t;
        }
        e.exports = n;
      },
      {},
    ],
    89: [
      function (t, e, r) {
        var n = t("./_baseGetTag"),
          i = t("./_getPrototype"),
          o = t("./isObjectLike"),
          a = "[object Object]",
          s = Function.prototype,
          u = Object.prototype,
          l = s.toString,
          c = u.hasOwnProperty,
          f = l.call(Object);
        function h(t) {
          if (!o(t) || n(t) != a) return !1;
          var e = i(t);
          if (null === e) return !0;
          var r = c.call(e, "constructor") && e.constructor;
          return "function" == typeof r && r instanceof r && l.call(r) == f;
        }
        e.exports = h;
      },
      { "./_baseGetTag": 30, "./_getPrototype": 43, "./isObjectLike": 88 },
    ],
    90: [
      function (t, e, r) {
        var n = t("./_baseGetTag"),
          i = t("./isArray"),
          o = t("./isObjectLike"),
          a = "[object String]";
        function s(t) {
          return "string" == typeof t || (!i(t) && o(t) && n(t) == a);
        }
        e.exports = s;
      },
      { "./_baseGetTag": 30, "./isArray": 79, "./isObjectLike": 88 },
    ],
    91: [
      function (t, e, r) {
        var n = t("./_baseGetTag"),
          i = t("./isObjectLike"),
          o = "[object Symbol]";
        function a(t) {
          return "symbol" == typeof t || (i(t) && n(t) == o);
        }
        e.exports = a;
      },
      { "./_baseGetTag": 30, "./isObjectLike": 88 },
    ],
    92: [
      function (t, e, r) {
        var n = t("./_baseIsTypedArray"),
          i = t("./_baseUnary"),
          o = t("./_nodeUtil"),
          a = o && o.isTypedArray,
          s = a ? i(a) : n;
        e.exports = s;
      },
      { "./_baseIsTypedArray": 33, "./_baseUnary": 37, "./_nodeUtil": 69 },
    ],
    93: [
      function (t, e, r) {
        var n = t("./_arrayLikeKeys"),
          i = t("./_baseKeys"),
          o = t("./isArrayLike");
        function a(t) {
          return o(t) ? n(t) : i(t);
        }
        e.exports = a;
      },
      { "./_arrayLikeKeys": 26, "./_baseKeys": 34, "./isArrayLike": 80 },
    ],
    94: [
      function (t, e, r) {
        var n = t("./_MapCache"),
          i = "Expected a function";
        function o(t, e) {
          if ("function" != typeof t || (null != e && "function" != typeof e))
            throw new TypeError(i);
          var r = function () {
            var n = arguments,
              i = e ? e.apply(this, n) : n[0],
              o = r.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, n);
            return (r.cache = o.set(i, a) || o), a;
          };
          return (r.cache = new (o.Cache || n)()), r;
        }
        (o.Cache = n), (e.exports = o);
      },
      { "./_MapCache": 24 },
    ],
    95: [
      function (t, e, r) {
        function n() {
          return !1;
        }
        e.exports = n;
      },
      {},
    ],
    96: [
      function (t, e, r) {
        var n = t("./_baseToString");
        function i(t) {
          return null == t ? "" : n(t);
        }
        e.exports = i;
      },
      { "./_baseToString": 36 },
    ],
    airtable: [
      function (t, e, r) {
        var n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            },
          i = n(t("./base")),
          o = n(t("./record")),
          a = n(t("./table")),
          s = n(t("./airtable_error")),
          u = (function () {
            function t(e) {
              void 0 === e && (e = {});
              var r = t.default_config(),
                n = e.apiVersion || t.apiVersion || r.apiVersion;
              if (
                (Object.defineProperties(this, {
                  _apiKey: { value: e.apiKey || t.apiKey || r.apiKey },
                  _apiVersion: { value: n },
                  _apiVersionMajor: { value: n.split(".")[0] },
                  _customHeaders: { value: e.customHeaders || {} },
                  _endpointUrl: {
                    value: e.endpointUrl || t.endpointUrl || r.endpointUrl,
                  },
                  _noRetryIfRateLimited: {
                    value:
                      e.noRetryIfRateLimited ||
                      t.noRetryIfRateLimited ||
                      r.noRetryIfRateLimited,
                  },
                  _requestTimeout: {
                    value:
                      e.requestTimeout || t.requestTimeout || r.requestTimeout,
                  },
                }),
                !this._apiKey)
              )
                throw new Error(
                  "An API key is required to connect to Airtable"
                );
            }
            return (
              (t.prototype.base = function (t) {
                return i.default.createFunctor(this, t);
              }),
              (t.default_config = function () {
                return {
                  endpointUrl: "https://api.airtable.com",
                  apiVersion: "0.1.0",
                  apiKey: "",
                  noRetryIfRateLimited: !1,
                  requestTimeout: 3e5,
                };
              }),
              (t.configure = function (e) {
                var r = e.apiKey,
                  n = e.endpointUrl,
                  i = e.apiVersion,
                  o = e.noRetryIfRateLimited,
                  a = e.requestTimeout;
                (t.apiKey = r),
                  (t.endpointUrl = n),
                  (t.apiVersion = i),
                  (t.noRetryIfRateLimited = o),
                  (t.requestTimeout = a);
              }),
              (t.base = function (e) {
                return new t().base(e);
              }),
              (t.Base = i.default),
              (t.Record = o.default),
              (t.Table = a.default),
              (t.Error = s.default),
              t
            );
          })();
        e.exports = u;
      },
      { "./airtable_error": 2, "./base": 3, "./record": 15, "./table": 17 },
    ],
  },
  {},
  ["airtable"]
)("airtable")),
  vi.registerPlugin(hs);
let Os;
const Es = new URLSearchParams(window.location.search).get("uid"),
  As = new (t(Ts))({ apiKey: "patEfo4Z6HS7QF4Fc" }).base("apphAQubtYSAcld88"),
  Ms = document.getElementById("username"),
  Ss = document.getElementById("slider"),
  ks = document.getElementById("going"),
  Ps = document.getElementById("notgoing"),
  Rs = document.getElementById("note-on-guests"),
  Cs = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect5]"
    ),
  ],
  Ls = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect6]"
    ),
  ],
  js = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect7]"
    ),
  ],
  Ds = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect8]"
    ),
  ],
  Is = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect16]"
    ),
  ],
  Ns = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect17]"
    ),
  ],
  zs = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect18]"
    ),
  ],
  Fs = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect19]"
    ),
  ],
  qs = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect20]"
    ),
  ],
  Bs = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect21]"
    ),
  ],
  Ys = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect22]"
    ),
  ],
  Us = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect23]"
    ),
  ],
  Xs = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect24]"
    ),
  ],
  Hs = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect25]"
    ),
  ],
  Ws = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect26]"
    ),
  ],
  Gs = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect27]"
    ),
  ],
  Vs = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect28]"
    ),
  ],
  Ks = [
    ...document.querySelectorAll(
      ".content__title[data-splitting][data-effect29]"
    ),
  ];
let $s;
var Js;
((Js = "cvn8slu"),
new Promise((t) => {
  WebFont.load({ typekit: { id: Js }, active: t });
})).then(() => {
  As("Guest List").find(Es, (e, r) => {
    if (e) return void console.error(e);
    if (
      ((Os = { ...r.fields, id: r.id }),
      console.log(Os),
      (Ms.innerHTML = Os.Nickname),
      Os?.showChristening)
    ) {
      const t = document.getElementById("christening-title"),
        e = document.getElementById("christening-content");
      t.classList.remove("hidden"), e.classList.remove("hidden");
    }
    Os?.isGoing && ks.classList.add("active"),
      Os?.seatsReserved &&
        (Rs.innerHTML = `We have reserved <u>${Os?.seatsReserved} seat(s)</u> for you. We kindly request that if there are any changes to your reservation, please inform us in advance, as the number of guests we can accommodate is limited.`);
    const n = document.getElementById("bear-float");
    n.load("https://assets7.lottiefiles.com/packages/lf20_v8Ji51.json"),
      n.addEventListener("load", () => {
        n.play();
      }),
      t(xs)(),
      document.body.classList.remove("loading"),
      (() => {
        ($s = new h({ lerp: 0.2, smooth: !0 })),
          $s.on("scroll", () => hs.update());
        const t = (e) => {
          $s.raf(e), requestAnimationFrame(t);
        };
        requestAnimationFrame(t);
      })(),
      (() => {
        Is.forEach((t) => {
          vi.fromTo(
            t,
            { transformOrigin: "0% 50%", rotate: 3 },
            {
              ease: "none",
              rotate: 0,
              scrollTrigger: {
                trigger: t,
                start: "top bottom",
                end: "top top",
                scrub: !0,
              },
            }
          ),
            vi.fromTo(
              t.querySelectorAll(".word"),
              { "will-change": "opacity", opacity: 0.1 },
              {
                ease: "none",
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                  trigger: t,
                  start: "top bottom-=20%",
                  end: "center top+=20%",
                  scrub: !0,
                },
              }
            );
        }),
          Cs.forEach((t) => {
            const e = t.querySelectorAll(".char");
            vi.fromTo(
              e,
              {
                "will-change": "opacity, transform",
                opacity: 0,
                xPercent: () => vi.utils.random(-200, 200),
                yPercent: () => vi.utils.random(-150, 150),
              },
              {
                ease: "power1.inOut",
                opacity: 1,
                xPercent: 0,
                yPercent: 0,
                stagger: { each: 0.05, grid: "auto", from: "random" },
                scrollTrigger: {
                  trigger: t,
                  start: "center bottom+=10%",
                  end: "bottom center",
                  scrub: 0.9,
                },
              }
            );
          }),
          Ls.forEach((t) => {
            const e = t.querySelectorAll(".word");
            for (const t of e) {
              const e = t.querySelectorAll(".char");
              e.forEach((t) => vi.set(t.parentNode, { perspective: 2e3 })),
                vi.fromTo(
                  e,
                  {
                    "will-change": "opacity, transform",
                    opacity: 0,
                    rotationX: -90,
                    yPercent: 50,
                  },
                  {
                    ease: "power1.inOut",
                    opacity: 1,
                    rotationX: 0,
                    yPercent: 0,
                    stagger: { each: 0.03, from: 0 },
                    scrollTrigger: {
                      trigger: t,
                      start: "center bottom+=40%",
                      end: "bottom center-=30%",
                      scrub: 0.9,
                    },
                  }
                );
            }
          }),
          js.forEach((t) => {
            const e = t.querySelectorAll(".word");
            for (const t of e) {
              const e = t.querySelectorAll(".char");
              e.forEach((t) => vi.set(t.parentNode, { perspective: 2e3 })),
                vi.fromTo(
                  e,
                  {
                    "will-change": "opacity, transform",
                    transformOrigin: "100% 50%",
                    opacity: 0,
                    rotationY: -90,
                    z: -300,
                  },
                  {
                    ease: "expo",
                    opacity: 1,
                    rotationY: 0,
                    z: 0,
                    stagger: { each: 0.06, from: "end" },
                    scrollTrigger: {
                      trigger: t,
                      start: "bottom bottom+=20%",
                      end: "bottom top",
                      scrub: 1,
                    },
                  }
                );
            }
          });
        const t = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "!",
          "@",
          "#",
          "$",
          "%",
          "^",
          "&",
          "*",
          "-",
          "_",
          "+",
          "=",
          ";",
          ":",
          "<",
          ">",
          ",",
        ];
        Ds.forEach((e) => {
          e.querySelectorAll(".char").forEach((r, n) => {
            let i = r.innerHTML;
            vi.fromTo(
              r,
              { opacity: 0 },
              {
                duration: 0.03,
                innerHTML: () => t[Math.floor(Math.random() * t.length)],
                repeat: 1,
                repeatRefresh: !0,
                opacity: 1,
                repeatDelay: 0.03,
                delay: 0.18 * (n + 1),
                onComplete: () => vi.set(r, { innerHTML: i, delay: 0.03 }),
                scrollTrigger: {
                  trigger: e,
                  start: "top bottom",
                  end: "bottom center",
                  toggleActions: "play resume resume reset",
                  onEnter: () => vi.set(r, { opacity: 0 }),
                },
              }
            );
          });
        }),
          Ns.forEach((t) => {
            const e = t.querySelectorAll(".char");
            e.forEach((t) => vi.set(t.parentNode, { perspective: 1e3 })),
              vi.fromTo(
                e,
                {
                  "will-change": "opacity, transform",
                  opacity: 0,
                  rotateX: () => vi.utils.random(-120, 120),
                  z: () => vi.utils.random(-200, 200),
                },
                {
                  ease: "none",
                  opacity: 1,
                  rotateX: 0,
                  z: 0,
                  stagger: 0.02,
                  scrollTrigger: {
                    trigger: t,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0,
                  },
                }
              );
          }),
          zs.forEach((t) => {
            const e = t.querySelectorAll(".char");
            e.forEach((t) => vi.set(t.parentNode, { perspective: 1e3 })),
              vi.fromTo(
                e,
                { "will-change": "opacity, transform", opacity: 0.2, z: -800 },
                {
                  ease: "back.out(1.2)",
                  opacity: 1,
                  z: 0,
                  stagger: 0.04,
                  scrollTrigger: {
                    trigger: t,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0,
                  },
                }
              );
          }),
          Fs.forEach((t) => {
            const e = t.querySelectorAll(".char");
            e.forEach((t) => vi.set(t.parentNode, { perspective: 1e3 })),
              vi.fromTo(
                e,
                {
                  "will-change": "opacity, transform",
                  transformOrigin: "50% 0%",
                  opacity: 0,
                  rotationX: -90,
                  z: -200,
                },
                {
                  ease: "power1",
                  opacity: 1,
                  stagger: 0.05,
                  rotationX: 0,
                  z: 0,
                  scrollTrigger: {
                    trigger: t,
                    start: "center bottom",
                    end: "bottom top+=20%",
                    scrub: !0,
                  },
                }
              );
          }),
          qs.forEach((t) => {
            const e = t.querySelectorAll(".char");
            e.forEach((t) => vi.set(t.parentNode, { perspective: 1e3 })),
              vi.fromTo(
                e,
                {
                  "will-change": "opacity, transform",
                  transformOrigin: "50% 100%",
                  opacity: 0,
                  rotationX: 90,
                },
                {
                  ease: "power4",
                  opacity: 1,
                  stagger: { each: 0.03, from: "random" },
                  rotationX: 0,
                  scrollTrigger: {
                    trigger: t,
                    start: "center bottom",
                    end: "bottom top+=20%",
                    scrub: !0,
                  },
                }
              );
          }),
          Bs.forEach((t) => {
            const e = [...t.querySelectorAll(".word")];
            for (const t of e) {
              const e = t.querySelectorAll(".char");
              e.forEach((t) => vi.set(t.parentNode, { perspective: 2e3 })),
                vi.fromTo(
                  e,
                  {
                    "will-change": "opacity, transform",
                    opacity: 0,
                    y: (t, e, r) => -40 * Math.abs(t - r.length / 2),
                    z: () => vi.utils.random(-1500, -600),
                    rotationX: () => vi.utils.random(-500, -200),
                  },
                  {
                    ease: "power1.inOut",
                    opacity: 1,
                    y: 0,
                    z: 0,
                    rotationX: 0,
                    stagger: { each: 0.06, from: "center" },
                    scrollTrigger: {
                      trigger: t,
                      start: "top bottom",
                      end: "top top+=15%",
                      scrub: !0,
                    },
                  }
                );
            }
          }),
          Ys.forEach((t) => {
            const e = [...t.querySelectorAll(".word")];
            for (const t of e) {
              const e = t.querySelectorAll(".char"),
                r = e.length;
              e.forEach((t) => vi.set(t.parentNode, { perspective: 1e3 })),
                vi.fromTo(
                  e,
                  {
                    "will-change": "transform",
                    x: (t) => {
                      const e =
                        t < Math.ceil(r / 2)
                          ? t
                          : Math.ceil(r / 2) -
                            Math.abs(Math.floor(r / 2) - t) -
                            1;
                      return (
                        200 *
                        (r % 2
                          ? Math.abs(Math.ceil(r / 2) - 1 - e)
                          : Math.abs(Math.ceil(r / 2) - e)) *
                        (t < r / 2 ? -1 : 1)
                      );
                    },
                    y: (t) =>
                      60 *
                      (t < Math.ceil(r / 2)
                        ? t
                        : Math.ceil(r / 2) -
                          Math.abs(Math.floor(r / 2) - t) -
                          1),
                    rotationY: -270,
                    rotationZ: (t) => {
                      const e =
                        t < Math.ceil(r / 2)
                          ? t
                          : Math.ceil(r / 2) -
                            Math.abs(Math.floor(r / 2) - t) -
                            1;
                      return t < r / 2
                        ? 8 * Math.abs(e - r / 2)
                        : -1 * Math.abs(e - r / 2) * 8;
                    },
                  },
                  {
                    ease: "power2.inOut",
                    x: 0,
                    y: 0,
                    rotationZ: 0,
                    rotationY: 0,
                    scale: 1,
                    scrollTrigger: {
                      trigger: t,
                      start: "top bottom+=40%",
                      end: "top top+=15%",
                      scrub: !0,
                    },
                  }
                );
            }
          }),
          Us.forEach((t) => {
            const e = [...t.querySelectorAll(".word")];
            for (const [t, r] of e.entries())
              vi.fromTo(
                r.querySelectorAll(".char"),
                {
                  "will-change": "transform",
                  scale: 0.01,
                  x: (e, r, n) => (t % 2 ? 50 * e : -50 * (n.length - e - 1)),
                },
                {
                  ease: "power4",
                  scale: 1,
                  x: 0,
                  scrollTrigger: {
                    trigger: r,
                    start: "center bottom",
                    end: "bottom top-=40%",
                    scrub: !0,
                  },
                }
              );
          }),
          Xs.forEach((t) => {
            const e = t.querySelectorAll(".char"),
              r = e.length;
            vi.fromTo(
              e,
              {
                "will-change": "transform",
                y: (t) => {
                  const e =
                    t < Math.ceil(r / 2)
                      ? t
                      : Math.ceil(r / 2) - Math.abs(Math.floor(r / 2) - t) - 1;
                  return 50 * (r / 2 - e + 6);
                },
              },
              {
                ease: "elastic.out(.4)",
                y: 0,
                stagger: { amount: 0.1, from: "center" },
                scrollTrigger: {
                  trigger: t,
                  start: "top bottom",
                  end: "bottom top-=10%",
                  scrub: !0,
                },
              }
            );
          }),
          Hs.forEach((t) => {
            vi.fromTo(
              t.querySelectorAll(".char"),
              {
                "will-change": "transform",
                transformOrigin: "50% 100%",
                scaleY: 0,
              },
              {
                ease: "power3.in",
                opacity: 1,
                scaleY: 1,
                stagger: 0.05,
                scrollTrigger: {
                  trigger: t,
                  start: "center center",
                  end: "+=500%",
                  scrub: !0,
                  pin: t.parentNode,
                },
              }
            );
          }),
          Ws.forEach((t) => {
            const e = [...t.querySelectorAll(".word")],
              r = vi.timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "center center",
                  end: "+=100%",
                  scrub: !0,
                  pin: t.parentNode,
                },
              });
            for (const [t, n] of e.entries())
              r.fromTo(
                n.querySelectorAll(".char"),
                {
                  "will-change": "transform",
                  transformOrigin: () => (!t % 2 ? "50% 0%" : "50% 100%"),
                  scaleY: 0,
                },
                {
                  ease: "power1.inOut",
                  scaleY: 1,
                  stagger: { amount: 0.3, from: "center" },
                },
                0
              );
          }),
          Gs.forEach((t) => {
            const e = [...t.querySelectorAll(".word")];
            e.forEach((t) => vi.set(t.parentNode, { perspective: 1e3 })),
              vi.fromTo(
                e,
                {
                  "will-change": "opacity, transform",
                  z: () => vi.utils.random(500, 950),
                  opacity: 0,
                  xPercent: (t) => vi.utils.random(-100, 100),
                  yPercent: (t) => vi.utils.random(-10, 10),
                  rotationX: () => vi.utils.random(-90, 90),
                },
                {
                  ease: "expo",
                  opacity: 1,
                  rotationX: 0,
                  rotationY: 0,
                  xPercent: 0,
                  yPercent: 0,
                  z: 0,
                  scrollTrigger: {
                    trigger: t,
                    start: "center center",
                    end: "+=300%",
                    scrub: !0,
                    pin: t.parentNode,
                  },
                  stagger: { each: 0.006, from: "random" },
                }
              );
          }),
          Vs.forEach((t) => {
            const e = [...t.querySelectorAll(".word")];
            for (const t of e) {
              const e = t.querySelectorAll(".char"),
                r = e.length;
              vi.fromTo(
                e,
                {
                  "will-change": "transform, filter",
                  transformOrigin: "50% 100%",
                  scale: (t) => {
                    const e =
                      t < Math.ceil(r / 2)
                        ? t
                        : Math.ceil(r / 2) -
                          Math.abs(Math.floor(r / 2) - t) -
                          1;
                    return vi.utils.mapRange(0, Math.ceil(r / 2), 0.5, 2.1, e);
                  },
                  y: (t) => {
                    const e =
                      t < Math.ceil(r / 2)
                        ? t
                        : Math.ceil(r / 2) -
                          Math.abs(Math.floor(r / 2) - t) -
                          1;
                    return vi.utils.mapRange(0, Math.ceil(r / 2), 0, 60, e);
                  },
                  rotation: (t) => {
                    const e =
                      t < Math.ceil(r / 2)
                        ? t
                        : Math.ceil(r / 2) -
                          Math.abs(Math.floor(r / 2) - t) -
                          1;
                    return t < r / 2
                      ? vi.utils.mapRange(0, Math.ceil(r / 2), -4, 0, e)
                      : vi.utils.mapRange(0, Math.ceil(r / 2), 0, 4, e);
                  },
                  filter: "blur(12px) opacity(0)",
                },
                {
                  ease: "power2.inOut",
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  filter: "blur(0px) opacity(1)",
                  scrollTrigger: {
                    trigger: t,
                    start: "top bottom+=40%",
                    end: "top top+=15%",
                    scrub: !0,
                  },
                  stagger: { amount: 0.15, from: "center" },
                }
              );
            }
          }),
          Ks.forEach((t) => {
            const e = [...t.querySelectorAll(".word")];
            for (const [t, r] of e.entries()) {
              const e = r.querySelectorAll(".char");
              vi.fromTo(
                e,
                {
                  "will-change": "transform",
                  transformOrigin: `${t % 2 ? 0 : 100}% ${t % 2 ? 100 : 0}%`,
                  scale: 0,
                },
                {
                  ease: "power4",
                  scale: 1,
                  stagger: { each: 0.03, from: t % 2 ? "end" : "start" },
                  scrollTrigger: {
                    trigger: r,
                    start: "top bottom-=10%",
                    end: "top top",
                    scrub: !0,
                  },
                }
              );
            }
          });
      })(),
      Ss.addEventListener("click", () => {
        Ss.classList.toggle("paused");
      }),
      ks.addEventListener("click", () => {
        As("Guest List").update(
          [{ id: Os?.id, fields: { Name: Os?.Name, isGoing: !0 } }],
          function (t, e) {
            t
              ? console.error(t)
              : (Ps.classList.remove("active"),
                ks.classList.add("active"),
                alert(
                  "Thank you for your confirmation! If there are any changes to your plans prior to the event, please inform us. Thank you!"
                ));
          }
        );
      }),
      Ps.addEventListener("click", () => {
        As("Guest List").update(
          [{ id: Os?.id, fields: { Name: Os?.Name, isGoing: !1 } }],
          function (t, e) {
            t
              ? console.error(t)
              : (ks.classList.remove("active"),
                Ps.classList.add("active"),
                alert(
                  "Thank you for letting us know! If there are any changes to your plans prior to the event, please inform us. Thank you!"
                ));
          }
        );
      });
  });
});
//# sourceMappingURL=index.1c4af77c.js.map
