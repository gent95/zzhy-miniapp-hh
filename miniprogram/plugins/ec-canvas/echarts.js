! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function(t) {
  "use strict";

  function e(t) {
    var e = {},
      n = {},
      i = t.match(/Firefox\/([\d.]+)/),
      r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
      a = t.match(/Edge\/([\d.]+)/),
      o = /micromessenger/i.test(t);
    return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), {
      browser: n,
      os: e,
      node: !1,
      canvasSupported: !!document.createElement("canvas").getContext,
      svgSupported: "undefined" != typeof SVGRect,
      touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
      pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11),
      domSupported: "undefined" != typeof document
    }
  }

  function n(t, e) {
    "createCanvas" === t && (ed = null), Jc[t] = e
  }

  function i(t) {
    if (null == t || "object" != typeof t) return t;
    var e = t,
      n = qc.call(t);
    if ("[object Array]" === n) {
      if (!E(t)) {
        e = [];
        for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
      }
    } else if (Yc[n]) {
      if (!E(t)) {
        var o = t.constructor;
        if (t.constructor.from) e = o.from(t);
        else {
          e = new o(t.length);
          for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
        }
      }
    } else if (!Xc[n] && !E(t) && !I(t)) {
      e = {};
      for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
    }
    return e
  }

  function r(t, e, n) {
    if (!b(e) || !b(t)) return n ? i(e) : t;
    for (var a in e)
      if (e.hasOwnProperty(a)) {
        var o = t[a],
          s = e[a];
        !b(s) || !b(o) || _(s) || _(o) || I(s) || I(o) || S(s) || S(o) || E(s) || E(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n)
      }
    return t
  }

  function a(t, e) {
    for (var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);
    return n
  }

  function o(t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
  }

  function s(t, e, n) {
    for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
    return t
  }

  function l() {
    return ed || (ed = td().getContext("2d")), ed
  }

  function h(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);
      for (var n = 0, i = t.length; i > n; n++)
        if (t[n] === e) return n
    }
    return -1
  }

  function u(t, e) {
    function n() {}
    var i = t.prototype;
    n.prototype = e.prototype, t.prototype = new n;
    for (var r in i) t.prototype[r] = i[r];
    t.prototype.constructor = t, t.superClass = e
  }

  function c(t, e, n) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n)
  }

  function d(t) {
    return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
  }

  function f(t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === jc) t.forEach(e, n);
      else if (t.length === +t.length)
      for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t);
    else
      for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
  }

  function p(t, e, n) {
    if (t && e) {
      if (t.map && t.map === Kc) return t.map(e, n);
      for (var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));
      return i
    }
  }

  function g(t, e, n, i) {
    if (t && e) {
      if (t.reduce && t.reduce === Qc) return t.reduce(e, n, i);
      for (var r = 0, a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);
      return n
    }
  }

  function v(t, e, n) {
    if (t && e) {
      if (t.filter && t.filter === Zc) return t.filter(e, n);
      for (var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
      return i
    }
  }

  function m(t, e) {
    var n = $c.call(arguments, 2);
    return function() {
      return t.apply(e, n.concat($c.call(arguments)))
    }
  }

  function y(t) {
    var e = $c.call(arguments, 1);
    return function() {
      return t.apply(this, e.concat($c.call(arguments)))
    }
  }

  function _(t) {
    return "[object Array]" === qc.call(t)
  }

  function x(t) {
    return "function" == typeof t
  }

  function w(t) {
    return "[object String]" === qc.call(t)
  }

  function b(t) {
    var e = typeof t;
    return "function" === e || !!t && "object" == e
  }

  function S(t) {
    return !!Xc[qc.call(t)]
  }

  function M(t) {
    return !!Yc[qc.call(t)]
  }

  function I(t) {
    return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
  }

  function T(t) {
    return t !== t
  }

  function C() {
    for (var t = 0, e = arguments.length; e > t; t++)
      if (null != arguments[t]) return arguments[t]
  }

  function D(t, e) {
    return null != t ? t : e
  }

  function k(t, e, n) {
    return null != t ? t : null != e ? e : n
  }

  function A() {
    return Function.call.apply($c, arguments)
  }

  function P(t) {
    if ("number" == typeof t) return [t, t, t, t];
    var e = t.length;
    return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
  }

  function L(t, e) {
    if (!t) throw new Error(e)
  }

  function O(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  }

  function B(t) {
    t[nd] = !0
  }

  function E(t) {
    return t[nd]
  }

  function z(t) {
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t)
    }
    var n = _(t);
    this.data = {};
    var i = this;
    t instanceof z ? t.each(e) : t && f(t, e)
  }

  function R(t) {
    return new z(t)
  }

  function F() {}

  function N(t, e) {
    var n = new id(2);
    return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
  }

  function H(t) {
    var e = new id(2);
    return e[0] = t[0], e[1] = t[1], e
  }

  function V(t, e, n) {
    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
  }

  function W(t, e, n) {
    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
  }

  function G(t) {
    return Math.sqrt(X(t))
  }

  function X(t) {
    return t[0] * t[0] + t[1] * t[1]
  }

  function Y(t, e, n) {
    return t[0] = e[0] * n, t[1] = e[1] * n, t
  }

  function q(t, e) {
    var n = G(e);
    return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
  }

  function U(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
  }

  function j(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
  }

  function Z(t, e, n) {
    var i = e[0],
      r = e[1];
    return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
  }

  function $(t, e, n) {
    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
  }

  function K(t, e, n) {
    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
  }

  function Q() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
  }

  function J(t, e) {
    return {
      target: t,
      topTarget: e && e.topTarget
    }
  }

  function te(t, e) {
    var n = t._$eventProcessor;
    return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e
  }

  function ee(t) {
    return t.getBoundingClientRect ? t.getBoundingClientRect() : {
      left: 0,
      top: 0
    }
  }

  function ne(t, e, n, i) {
    return n = n || {}, i || !Gc.canvasSupported ? ie(t, e, n) : Gc.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : ie(t, e, n), n
  }

  function ie(t, e, n) {
    var i = ee(t);
    n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
  }

  function re(t, e, n) {
    if (e = e || window.event, null != e.zrX) return e;
    var i = e.type,
      r = i && i.indexOf("touch") >= 0;
    if (r) {
      var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
      a && ne(t, a, e, n)
    } else ne(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
    var o = e.button;
    return null == e.which && void 0 !== o && hd.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
  }

  function ae(t, e, n) {
    ld ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
  }

  function oe(t, e, n) {
    ld ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
  }

  function se(t, e, n) {
    return {
      type: t,
      event: n,
      target: e.target,
      topTarget: e.topTarget,
      cancelBubble: !1,
      offsetX: n.zrX,
      offsetY: n.zrY,
      gestureEvent: n.gestureEvent,
      pinchX: n.pinchX,
      pinchY: n.pinchY,
      pinchScale: n.pinchScale,
      wheelDelta: n.zrDelta,
      zrByTouch: n.zrByTouch,
      which: n.which,
      stop: le
    }
  }

  function le() {
    ud(this.event)
  }

  function he() {}

  function ue(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var i, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
        r.silent && (i = !0), r = r.parent
      }
      return i ? cd : !0
    }
    return !1
  }

  function ce() {
    var t = new pd(6);
    return de(t), t
  }

  function de(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
  }

  function fe(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
  }

  function pe(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
      r = e[1] * n[0] + e[3] * n[1],
      a = e[0] * n[2] + e[2] * n[3],
      o = e[1] * n[2] + e[3] * n[3],
      s = e[0] * n[4] + e[2] * n[5] + e[4],
      l = e[1] * n[4] + e[3] * n[5] + e[5];
    return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
  }

  function ge(t, e, n) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
  }

  function ve(t, e, n) {
    var i = e[0],
      r = e[2],
      a = e[4],
      o = e[1],
      s = e[3],
      l = e[5],
      h = Math.sin(n),
      u = Math.cos(n);
    return t[0] = i * u + o * h, t[1] = -i * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t
  }

  function me(t, e, n) {
    var i = n[0],
      r = n[1];
    return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
  }

  function ye(t, e) {
    var n = e[0],
      i = e[2],
      r = e[4],
      a = e[1],
      o = e[3],
      s = e[5],
      l = n * o - a * i;
    return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null
  }

  function _e(t) {
    return t > vd || -vd > t
  }

  function xe(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
  }

  function we(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
  }

  function be(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t
  }

  function Se(t) {
    return we(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
  }

  function Me(t) {
    return be(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
  }

  function Ie(t, e, n) {
    return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
  }

  function Te(t, e, n, i, r) {
    return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
  }

  function Ce(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
  }

  function De(t, e) {
    Ad && Ce(Ad, e), Ad = kd.put(t, Ad || e.slice())
  }

  function ke(t, e) {
    if (t) {
      e = e || [];
      var n = kd.get(t);
      if (n) return Ce(e, n);
      t += "";
      var i = t.replace(/ /g, "").toLowerCase();
      if (i in Dd) return Ce(e, Dd[i]), De(t, e), e;
      if ("#" !== i.charAt(0)) {
        var r = i.indexOf("("),
          a = i.indexOf(")");
        if (-1 !== r && a + 1 === i.length) {
          var o = i.substr(0, r),
            s = i.substr(r + 1, a - (r + 1)).split(","),
            l = 1;
          switch (o) {
            case "rgba":
              if (4 !== s.length) return void Te(e, 0, 0, 0, 1);
              l = Me(s.pop());
            case "rgb":
              return 3 !== s.length ? void Te(e, 0, 0, 0, 1) : (Te(e, Se(s[0]), Se(s[1]), Se(s[2]), l), De(t, e), e);
            case "hsla":
              return 4 !== s.length ? void Te(e, 0, 0, 0, 1) : (s[3] = Me(s[3]), Ae(s, e), De(t, e), e);
            case "hsl":
              return 3 !== s.length ? void Te(e, 0, 0, 0, 1) : (Ae(s, e), De(t, e), e);
            default:
              return
          }
        }
        Te(e, 0, 0, 0, 1)
      } else {
        if (4 === i.length) {
          var h = parseInt(i.substr(1), 16);
          return h >= 0 && 4095 >= h ? (Te(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), De(t, e), e) : void Te(e, 0, 0, 0, 1)
        }
        if (7 === i.length) {
          var h = parseInt(i.substr(1), 16);
          return h >= 0 && 16777215 >= h ? (Te(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), De(t, e), e) : void Te(e, 0, 0, 0, 1)
        }
      }
    }
  }

  function Ae(t, e) {
    var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
      i = Me(t[1]),
      r = Me(t[2]),
      a = .5 >= r ? r * (i + 1) : r + i - r * i,
      o = 2 * r - a;
    return e = e || [], Te(e, we(255 * Ie(o, a, n + 1 / 3)), we(255 * Ie(o, a, n)), we(255 * Ie(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
  }

  function Pe(t, e) {
    var n = ke(t);
    if (n) {
      for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
      return Oe(n, 4 === n.length ? "rgba" : "rgb")
    }
  }

  function Le(t) {
    var e = ke(t);
    return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
  }

  function Oe(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];
      return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
    }
  }

  function Be(t, e) {
    return t[e]
  }

  function Ee(t, e, n) {
    t[e] = n
  }

  function ze(t, e, n) {
    return (e - t) * n + t
  }

  function Re(t, e, n) {
    return n > .5 ? e : t
  }

  function Fe(t, e, n, i, r) {
    var a = t.length;
    if (1 == r)
      for (var o = 0; a > o; o++) i[o] = ze(t[o], e[o], n);
    else
      for (var s = a && t[0].length, o = 0; a > o; o++)
        for (var l = 0; s > l; l++) i[o][l] = ze(t[o][l], e[o][l], n)
  }

  function Ne(t, e, n) {
    var i = t.length,
      r = e.length;
    if (i !== r) {
      var a = i > r;
      if (a) t.length = r;
      else
        for (var o = i; r > o; o++) t.push(1 === n ? e[o] : Pd.call(e[o]))
    }
    for (var s = t[0] && t[0].length, o = 0; o < t.length; o++)
      if (1 === n) isNaN(t[o]) && (t[o] = e[o]);
      else
        for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
  }

  function He(t, e, n) {
    if (t === e) return !0;
    var i = t.length;
    if (i !== e.length) return !1;
    if (1 === n) {
      for (var r = 0; i > r; r++)
        if (t[r] !== e[r]) return !1
    } else
      for (var a = t[0].length, r = 0; i > r; r++)
        for (var o = 0; a > o; o++)
          if (t[r][o] !== e[r][o]) return !1;
    return !0
  }

  function Ve(t, e, n, i, r, a, o, s, l) {
    var h = t.length;
    if (1 == l)
      for (var u = 0; h > u; u++) s[u] = We(t[u], e[u], n[u], i[u], r, a, o);
    else
      for (var c = t[0].length, u = 0; h > u; u++)
        for (var d = 0; c > d; d++) s[u][d] = We(t[u][d], e[u][d], n[u][d], i[u][d], r, a, o)
  }

  function We(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
      l = .5 * (i - e);
    return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
  }

  function Ge(t) {
    if (d(t)) {
      var e = t.length;
      if (d(t[0])) {
        for (var n = [], i = 0; e > i; i++) n.push(Pd.call(t[i]));
        return n
      }
      return Pd.call(t)
    }
    return t
  }

  function Xe(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
  }

  function Ye(t) {
    var e = t[t.length - 1].value;
    return d(e && e[0]) ? 2 : 1
  }

  function qe(t, e, n, i, r, a) {
    var o = t._getter,
      s = t._setter,
      l = "spline" === e,
      h = i.length;
    if (h) {
      var u, c = i[0].value,
        f = d(c),
        p = !1,
        g = !1,
        v = f ? Ye(i) : 0;
      i.sort(function(t, e) {
        return t.time - e.time
      }), u = i[h - 1].time;
      for (var m = [], y = [], _ = i[0].value, x = !0, w = 0; h > w; w++) {
        m.push(i[w].time / u);
        var b = i[w].value;
        if (f && He(b, _, v) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {
          var S = ke(b);
          S ? (b = S, p = !0) : g = !0
        }
        y.push(b)
      }
      if (a || !x) {
        for (var M = y[h - 1], w = 0; h - 1 > w; w++) f ? Ne(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
        f && Ne(o(t._target, r), M, v);
        var I, T, C, D, k, A, P = 0,
          L = 0;
        if (p) var O = [0, 0, 0, 0];
        var B = function(t, e) {
            var n;
            if (0 > e) n = 0;
            else if (L > e) {
              for (I = Math.min(P + 1, h - 1), n = I; n >= 0 && !(m[n] <= e); n--);
              n = Math.min(n, h - 2)
            } else {
              for (n = P; h > n && !(m[n] > e); n++);
              n = Math.min(n - 1, h - 2)
            }
            P = n, L = e;
            var i = m[n + 1] - m[n];
            if (0 !== i)
              if (T = (e - m[n]) / i, l)
                if (D = y[n], C = y[0 === n ? n : n - 1], k = y[n > h - 2 ? h - 1 : n + 1], A = y[n > h - 3 ? h - 1 : n + 2], f) Ve(C, D, k, A, T, T * T, T * T * T, o(t, r), v);
                else {
                  var a;
                  if (p) a = Ve(C, D, k, A, T, T * T, T * T * T, O, 1), a = Xe(O);
                  else {
                    if (g) return Re(D, k, T);
                    a = We(C, D, k, A, T, T * T, T * T * T)
                  }
                  s(t, r, a)
                }
            else if (f) Fe(y[n], y[n + 1], T, o(t, r), v);
            else {
              var a;
              if (p) Fe(y[n], y[n + 1], T, O, 1), a = Xe(O);
              else {
                if (g) return Re(y[n], y[n + 1], T);
                a = ze(y[n], y[n + 1], T)
              }
              s(t, r, a)
            }
          },
          E = new xe({
            target: t._target,
            life: u,
            loop: t._loop,
            delay: t._delay,
            onframe: B,
            ondestroy: n
          });
        return e && "spline" !== e && (E.easing = e), E
      }
    }
  }

  function Ue(t, e, n, i, r, a, o, s) {
    function l() {
      u--, u || a && a()
    }
    w(i) ? (a = r, r = i, i = 0) : x(r) ? (a = r, r = "linear", i = 0) : x(i) ? (a = i, i = 0) : x(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), je(t, "", t, e, n, i, s);
    var h = t.animators.slice(),
      u = h.length;
    u || a && a();
    for (var c = 0; c < h.length; c++) h[c].done(l).start(r, o)
  }

  function je(t, e, n, i, r, a, o) {
    var s = {},
      l = 0;
    for (var h in i) i.hasOwnProperty(h) && (null != n[h] ? b(i[h]) && !d(i[h]) ? je(t, e ? e + "." + h : h, n[h], i[h], r, a, o) : (o ? (s[h] = n[h], Ze(t, e, h, i[h])) : s[h] = i[h], l++) : null == i[h] || o || Ze(t, e, h, i[h]));
    l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0)
  }

  function Ze(t, e, n, i) {
    if (e) {
      var r = {};
      r[e] = {}, r[e][n] = i, t.attr(r)
    } else t.attr(n, i)
  }

  function $e(t, e, n, i) {
    0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
  }

  function Ke(t) {
    for (var e = 0; t >= Xd;) e |= 1 & t, t >>= 1;
    return t + e
  }

  function Qe(t, e, n, i) {
    var r = e + 1;
    if (r === n) return 1;
    if (i(t[r++], t[e]) < 0) {
      for (; n > r && i(t[r], t[r - 1]) < 0;) r++;
      Je(t, e, r)
    } else
      for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;
    return r - e
  }

  function Je(t, e, n) {
    for (n--; n > e;) {
      var i = t[e];
      t[e++] = t[n], t[n--] = i
    }
  }

  function tn(t, e, n, i, r) {
    for (i === e && i++; n > i; i++) {
      for (var a, o = t[i], s = e, l = i; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
      var h = i - s;
      switch (h) {
        case 3:
          t[s + 3] = t[s + 2];
        case 2:
          t[s + 2] = t[s + 1];
        case 1:
          t[s + 1] = t[s];
          break;
        default:
          for (; h > 0;) t[s + h] = t[s + h - 1], h--
      }
      t[s] = o
    }
  }

  function en(t, e, n, i, r, a) {
    var o = 0,
      s = 0,
      l = 1;
    if (a(t, e[n + r]) > 0) {
      for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s), o += r, l += r
    } else {
      for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s);
      var h = o;
      o = r - l, l = r - h
    }
    for (o++; l > o;) {
      var u = o + (l - o >>> 1);
      a(t, e[n + u]) > 0 ? o = u + 1 : l = u
    }
    return l
  }

  function nn(t, e, n, i, r, a) {
    var o = 0,
      s = 0,
      l = 1;
    if (a(t, e[n + r]) < 0) {
      for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s);
      var h = o;
      o = r - l, l = r - h
    } else {
      for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s), o += r, l += r
    }
    for (o++; l > o;) {
      var u = o + (l - o >>> 1);
      a(t, e[n + u]) < 0 ? l = u : o = u + 1
    }
    return l
  }

  function rn(t, e) {
    function n(t, e) {
      l[c] = t, h[c] = e, c += 1
    }

    function i() {
      for (; c > 1;) {
        var t = c - 2;
        if (t >= 1 && h[t - 1] <= h[t] + h[t + 1] || t >= 2 && h[t - 2] <= h[t] + h[t - 1]) h[t - 1] < h[t + 1] && t--;
        else if (h[t] > h[t + 1]) break;
        a(t)
      }
    }

    function r() {
      for (; c > 1;) {
        var t = c - 2;
        t > 0 && h[t - 1] < h[t + 1] && t--, a(t)
      }
    }

    function a(n) {
      var i = l[n],
        r = h[n],
        a = l[n + 1],
        u = h[n + 1];
      h[n] = r + u, n === c - 3 && (l[n + 1] = l[n + 2], h[n + 1] = h[n + 2]), c--;
      var d = nn(t[a], t, i, r, 0, e);
      i += d, r -= d, 0 !== r && (u = en(t[i + r - 1], t, a, u, u - 1, e), 0 !== u && (u >= r ? o(i, r, a, u) : s(i, r, a, u)))
    }

    function o(n, i, r, a) {
      var o = 0;
      for (o = 0; i > o; o++) d[o] = t[n + o];
      var s = 0,
        l = r,
        h = n;
      if (t[h++] = t[l++], 0 !== --a) {
        if (1 === i) {
          for (o = 0; a > o; o++) t[h + o] = t[l + o];
          return void(t[h + a] = d[s])
        }
        for (var c, f, p, g = u;;) {
          c = 0, f = 0, p = !1;
          do
            if (e(t[l], d[s]) < 0) {
              if (t[h++] = t[l++], f++, c = 0, 0 === --a) {
                p = !0;
                break
              }
            } else if (t[h++] = d[s++], c++, f = 0, 1 === --i) {
            p = !0;
            break
          } while (g > (c | f));
          if (p) break;
          do {
            if (c = nn(t[l], d, s, i, 0, e), 0 !== c) {
              for (o = 0; c > o; o++) t[h + o] = d[s + o];
              if (h += c, s += c, i -= c, 1 >= i) {
                p = !0;
                break
              }
            }
            if (t[h++] = t[l++], 0 === --a) {
              p = !0;
              break
            }
            if (f = en(d[s], t, l, a, 0, e), 0 !== f) {
              for (o = 0; f > o; o++) t[h + o] = t[l + o];
              if (h += f, l += f, a -= f, 0 === a) {
                p = !0;
                break
              }
            }
            if (t[h++] = d[s++], 1 === --i) {
              p = !0;
              break
            }
            g--
          } while (c >= Yd || f >= Yd);
          if (p) break;
          0 > g && (g = 0), g += 2
        }
        if (u = g, 1 > u && (u = 1), 1 === i) {
          for (o = 0; a > o; o++) t[h + o] = t[l + o];
          t[h + a] = d[s]
        } else {
          if (0 === i) throw new Error;
          for (o = 0; i > o; o++) t[h + o] = d[s + o]
        }
      } else
        for (o = 0; i > o; o++) t[h + o] = d[s + o]
    }

    function s(n, i, r, a) {
      var o = 0;
      for (o = 0; a > o; o++) d[o] = t[r + o];
      var s = n + i - 1,
        l = a - 1,
        h = r + a - 1,
        c = 0,
        f = 0;
      if (t[h--] = t[s--], 0 !== --i) {
        if (1 === a) {
          for (h -= i, s -= i, f = h + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
          return void(t[h] = d[l])
        }
        for (var p = u;;) {
          var g = 0,
            v = 0,
            m = !1;
          do
            if (e(d[l], t[s]) < 0) {
              if (t[h--] = t[s--], g++, v = 0, 0 === --i) {
                m = !0;
                break
              }
            } else if (t[h--] = d[l--], v++, g = 0, 1 === --a) {
            m = !0;
            break
          } while (p > (g | v));
          if (m) break;
          do {
            if (g = i - nn(d[l], t, n, i, i - 1, e), 0 !== g) {
              for (h -= g, s -= g, i -= g, f = h + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];
              if (0 === i) {
                m = !0;
                break
              }
            }
            if (t[h--] = d[l--], 1 === --a) {
              m = !0;
              break
            }
            if (v = a - en(t[s], d, 0, a, a - 1, e), 0 !== v) {
              for (h -= v, l -= v, a -= v, f = h + 1, c = l + 1, o = 0; v > o; o++) t[f + o] = d[c + o];
              if (1 >= a) {
                m = !0;
                break
              }
            }
            if (t[h--] = t[s--], 0 === --i) {
              m = !0;
              break
            }
            p--
          } while (g >= Yd || v >= Yd);
          if (m) break;
          0 > p && (p = 0), p += 2
        }
        if (u = p, 1 > u && (u = 1), 1 === a) {
          for (h -= i, s -= i, f = h + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
          t[h] = d[l]
        } else {
          if (0 === a) throw new Error;
          for (c = h - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
        }
      } else
        for (c = h - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
    }
    var l, h, u = Yd,
      c = 0,
      d = [];
    l = [], h = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n
  }

  function an(t, e, n, i) {
    n || (n = 0), i || (i = t.length);
    var r = i - n;
    if (!(2 > r)) {
      var a = 0;
      if (Xd > r) return a = Qe(t, n, i, e), void tn(t, n, i, n + a, e);
      var o = new rn(t, e),
        s = Ke(r);
      do {
        if (a = Qe(t, n, i, e), s > a) {
          var l = r;
          l > s && (l = s), tn(t, n, n + l, n + a, e), a = l
        }
        o.pushRun(n, a), o.mergeRuns(), r -= a, n += a
      } while (0 !== r);
      o.forceMergeRuns()
    }
  }

  function on(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
  }

  function sn(t, e, n) {
    var i = null == e.x ? 0 : e.x,
      r = null == e.x2 ? 1 : e.x2,
      a = null == e.y ? 0 : e.y,
      o = null == e.y2 ? 0 : e.y2;
    e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
    var s = t.createLinearGradient(i, a, r, o);
    return s
  }

  function ln(t, e, n) {
    var i = n.width,
      r = n.height,
      a = Math.min(i, r),
      o = null == e.x ? .5 : e.x,
      s = null == e.y ? .5 : e.y,
      l = null == e.r ? .5 : e.r;
    e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);
    var h = t.createRadialGradient(o, s, 0, o, s, l);
    return h
  }

  function hn() {
    return !1
  }

  function un(t, e, n) {
    var i = td(),
      r = e.getWidth(),
      a = e.getHeight(),
      o = i.style;
    return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i
  }

  function cn(t) {
    if ("string" == typeof t) {
      var e = rf.get(t);
      return e && e.image
    }
    return t
  }

  function dn(t, e, n, i, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !n) return e;
        var a = rf.get(t),
          o = {
            hostEl: n,
            cb: i,
            cbPayload: r
          };
        return a ? (e = a.image, !pn(e) && a.pending.push(o)) : (!e && (e = new Image), e.onload = e.onerror = fn, rf.put(t, e.__cachedImgObj = {
          image: e,
          pending: [o]
        }), e.src = e.__zrImageSrc = t), e
      }
      return t
    }
    return e
  }

  function fn() {
    var t = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
        i = n.cb;
      i && i(this, n.cbPayload), n.hostEl.dirty()
    }
    t.pending.length = 0
  }

  function pn(t) {
    return t && t.width && t.height
  }

  function gn(t, e) {
    e = e || hf;
    var n = t + ":" + e;
    if (af[n]) return af[n];
    for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max(Cn(i[a], e).width, r);
    return of > sf && ( of = 0, af = {}), of ++, af[n] = r, r
  }

  function vn(t, e, n, i, r, a, o) {
    return a ? yn(t, e, n, i, r, a, o) : mn(t, e, n, i, r, o)
  }

  function mn(t, e, n, i, r, a) {
    var o = Dn(t, e, r, a),
      s = gn(t, e);
    r && (s += r[1] + r[3]);
    var l = o.outerHeight,
      h = _n(0, s, n),
      u = xn(0, l, i),
      c = new $e(h, u, s, l);
    return c.lineHeight = o.lineHeight, c
  }

  function yn(t, e, n, i, r, a, o) {
    var s = kn(t, {
        rich: a,
        truncate: o,
        font: e,
        textAlign: n,
        textPadding: r
      }),
      l = s.outerWidth,
      h = s.outerHeight,
      u = _n(0, l, n),
      c = xn(0, h, i);
    return new $e(u, c, l, h)
  }

  function _n(t, e, n) {
    return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
  }

  function xn(t, e, n) {
    return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
  }

  function wn(t, e, n) {
    var i = e.x,
      r = e.y,
      a = e.height,
      o = e.width,
      s = a / 2,
      l = "left",
      h = "top";
    switch (t) {
      case "left":
        i -= n, r += s, l = "right", h = "middle";
        break;
      case "right":
        i += n + o, r += s, h = "middle";
        break;
      case "top":
        i += o / 2, r -= n, l = "center", h = "bottom";
        break;
      case "bottom":
        i += o / 2, r += a + n, l = "center";
        break;
      case "inside":
        i += o / 2, r += s, l = "center", h = "middle";
        break;
      case "insideLeft":
        i += n, r += s, h = "middle";
        break;
      case "insideRight":
        i += o - n, r += s, l = "right", h = "middle";
        break;
      case "insideTop":
        i += o / 2, r += n, l = "center";
        break;
      case "insideBottom":
        i += o / 2, r += a - n, l = "center", h = "bottom";
        break;
      case "insideTopLeft":
        i += n, r += n;
        break;
      case "insideTopRight":
        i += o - n, r += n, l = "right";
        break;
      case "insideBottomLeft":
        i += n, r += a - n, h = "bottom";
        break;
      case "insideBottomRight":
        i += o - n, r += a - n, l = "right", h = "bottom"
    }
    return {
      x: i,
      y: r,
      textAlign: l,
      textVerticalAlign: h
    }
  }

  function bn(t, e, n, i, r) {
    if (!e) return "";
    var a = (t + "").split("\n");
    r = Sn(e, n, i, r);
    for (var o = 0, s = a.length; s > o; o++) a[o] = Mn(a[o], r);
    return a.join("\n")
  }

  function Sn(t, e, n, i) {
    i = o({}, i), i.font = e;
    var n = D(n, "...");
    i.maxIterations = D(i.maxIterations, 2);
    var r = i.minChar = D(i.minChar, 0);
    i.cnCharWidth = gn("国", e);
    var a = i.ascCharWidth = gn("a", e);
    i.placeholder = D(i.placeholder, "");
    for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
    var h = gn(n);
    return h > s && (n = "", h = 0), s = t - h, i.ellipsis = n, i.ellipsisWidth = h, i.contentWidth = s, i.containerWidth = t, i
  }

  function Mn(t, e) {
    var n = e.containerWidth,
      i = e.font,
      r = e.contentWidth;
    if (!n) return "";
    var a = gn(t, i);
    if (n >= a) return t;
    for (var o = 0;; o++) {
      if (r >= a || o >= e.maxIterations) {
        t += e.ellipsis;
        break
      }
      var s = 0 === o ? In(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
      t = t.substr(0, s), a = gn(t, i)
    }
    return "" === t && (t = e.placeholder), t
  }

  function In(t, e, n, i) {
    for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
      var s = t.charCodeAt(a);
      r += s >= 0 && 127 >= s ? n : i
    }
    return a
  }

  function Tn(t) {
    return gn("国", t)
  }

  function Cn(t, e) {
    return uf.measureText(t, e)
  }

  function Dn(t, e, n, i) {
    null != t && (t += "");
    var r = Tn(e),
      a = t ? t.split("\n") : [],
      o = a.length * r,
      s = o;
    if (n && (s += n[0] + n[2]), t && i) {
      var l = i.outerHeight,
        h = i.outerWidth;
      if (null != l && s > l) t = "", a = [];
      else if (null != h)
        for (var u = Sn(h - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
            minChar: i.minChar,
            placeholder: i.placeholder
          }), c = 0, d = a.length; d > c; c++) a[c] = Mn(a[c], u)
    }
    return {
      lines: a,
      height: o,
      outerHeight: s,
      lineHeight: r
    }
  }

  function kn(t, e) {
    var n = {
      lines: [],
      width: 0,
      height: 0
    };
    if (null != t && (t += ""), !t) return n;
    for (var i, r = lf.lastIndex = 0; null != (i = lf.exec(t));) {
      var a = i.index;
      a > r && An(n, t.substring(r, a)), An(n, i[2], i[1]), r = lf.lastIndex
    }
    r < t.length && An(n, t.substring(r, t.length));
    var o = n.lines,
      s = 0,
      l = 0,
      h = [],
      u = e.textPadding,
      c = e.truncate,
      d = c && c.outerWidth,
      f = c && c.outerHeight;
    u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));
    for (var p = 0; p < o.length; p++) {
      for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
        var _ = g.tokens[y],
          x = _.styleName && e.rich[_.styleName] || {},
          w = _.textPadding = x.textPadding,
          b = _.font = x.font || e.font,
          S = _.textHeight = D(x.textHeight, Tn(b));
        if (w && (S += w[0] + w[2]), _.height = S, _.lineHeight = k(x.textLineHeight, e.textLineHeight, S), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return {
          lines: [],
          width: 0,
          height: 0
        };
        _.textWidth = gn(_.text, b);
        var M = x.textWidth,
          I = null == M || "auto" === M;
        if ("string" == typeof M && "%" === M.charAt(M.length - 1)) _.percentWidth = M, h.push(_), M = 0;
        else {
          if (I) {
            M = _.textWidth;
            var T = x.textBackgroundColor,
              C = T && T.image;
            C && (C = cn(C), pn(C) && (M = Math.max(M, C.width * S / C.height)))
          }
          var A = w ? w[1] + w[3] : 0;
          M += A;
          var P = null != d ? d - m : null;
          null != P && M > P && (!I || A > P ? (_.text = "", _.textWidth = M = 0) : (_.text = bn(_.text, P - A, b, c.ellipsis, {
            minChar: c.minChar
          }), _.textWidth = gn(_.text, b), M = _.textWidth + A))
        }
        m += _.width = M, x && (v = Math.max(v, _.lineHeight))
      }
      g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m)
    }
    n.outerWidth = n.width = D(e.textWidth, l), n.outerHeight = n.height = D(e.textHeight, s), u && (n.outerWidth += u[1] + u[3], n.outerHeight += u[0] + u[2]);
    for (var p = 0; p < h.length; p++) {
      var _ = h[p],
        L = _.percentWidth;
      _.width = parseInt(L, 10) / 100 * l
    }
    return n
  }

  function An(t, e, n) {
    for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
        l = {
          styleName: n,
          text: s,
          isLineHolder: !s && !i
        };
      if (o) a.push({
        tokens: [l]
      });
      else {
        var h = (a[a.length - 1] || (a[0] = {
            tokens: []
          })).tokens,
          u = h.length;
        1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l)
      }
    }
  }

  function Pn(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
    return e && O(e) || t.textFont || t.font
  }

  function Ln(t, e) {
    var n, i, r, a, o = e.x,
      s = e.y,
      l = e.width,
      h = e.height,
      u = e.r;
    0 > l && (o += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? n = i = r = a = u : u instanceof Array ? 1 === u.length ? n = i = r = a = u[0] : 2 === u.length ? (n = r = u[0], i = a = u[1]) : 3 === u.length ? (n = u[0], i = a = u[1], r = u[2]) : (n = u[0], i = u[1], r = u[2], a = u[3]) : n = i = r = a = 0;
    var c;
    n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > h && (c = i + r, i *= h / c, r *= h / c), n + a > h && (c = n + a, n *= h / c, a *= h / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI)
  }

  function On(t) {
    return Bn(t), f(t.rich, Bn), t
  }

  function Bn(t) {
    if (t) {
      t.font = Pn(t);
      var e = t.textAlign;
      "middle" === e && (e = "center"), t.textAlign = null == e || cf[e] ? e : "left";
      var n = t.textVerticalAlign || t.textBaseline;
      "center" === n && (n = "middle"), t.textVerticalAlign = null == n || df[n] ? n : "top";
      var i = t.textPadding;
      i && (t.textPadding = P(t.textPadding))
    }
  }

  function En(t, e, n, i, r, a) {
    i.rich ? Rn(t, e, n, i, r) : zn(t, e, n, i, r, a)
  }

  function zn(t, e, n, i, r, a) {
    var o = a && a.style,
      s = o && "text" === a.type,
      l = i.font || hf;
    s && l === (o.font || hf) || (e.font = l);
    var h = t.__computedFont;
    t.__styleFont !== l && (t.__styleFont = l, h = t.__computedFont = e.font);
    var u = i.textPadding,
      c = t.__textCotentBlock;
    (!c || t.__dirtyText) && (c = t.__textCotentBlock = Dn(n, h, u, i.truncate));
    var d = c.outerHeight,
      f = c.lines,
      p = c.lineHeight,
      g = Xn(d, i, r),
      v = g.baseX,
      m = g.baseY,
      y = g.textAlign || "left",
      _ = g.textVerticalAlign;
    Nn(e, i, r, v, m);
    var x = xn(m, d, _),
      w = v,
      b = x,
      S = Vn(i);
    if (S || u) {
      var M = gn(n, h),
        I = M;
      u && (I += u[1] + u[3]);
      var T = _n(v, I, y);
      S && Wn(t, e, i, T, x, I, d), u && (w = Zn(v, y, u), b += u[0])
    }
    e.textAlign = y, e.textBaseline = "middle";
    for (var C = 0; C < ff.length; C++) {
      var D = ff[C],
        k = D[0],
        A = D[1],
        P = i[k];
      s && P === o[k] || (e[A] = jd(e, A, P || D[2]))
    }
    b += p / 2;
    var L = i.textStrokeWidth,
      O = s ? o.textStrokeWidth : null,
      B = !s || L !== O,
      E = !s || B || i.textStroke !== o.textStroke,
      z = qn(i.textStroke, L),
      R = Un(i.textFill);
    if (z && (B && (e.lineWidth = L), E && (e.strokeStyle = z)), R && (!s || i.textFill !== o.textFill || o.textBackgroundColor) && (e.fillStyle = R), 1 === f.length) z && e.strokeText(f[0], w, b), R && e.fillText(f[0], w, b);
    else
      for (var C = 0; C < f.length; C++) z && e.strokeText(f[C], w, b), R && e.fillText(f[C], w, b), b += p
  }

  function Rn(t, e, n, i, r) {
    var a = t.__textCotentBlock;
    (!a || t.__dirtyText) && (a = t.__textCotentBlock = kn(n, i)), Fn(t, e, a, i, r)
  }

  function Fn(t, e, n, i, r) {
    var a = n.width,
      o = n.outerWidth,
      s = n.outerHeight,
      l = i.textPadding,
      h = Xn(s, i, r),
      u = h.baseX,
      c = h.baseY,
      d = h.textAlign,
      f = h.textVerticalAlign;
    Nn(e, i, r, u, c);
    var p = _n(u, o, d),
      g = xn(c, s, f),
      v = p,
      m = g;
    l && (v += l[3], m += l[0]);
    var y = v + a;
    Vn(i) && Wn(t, e, i, p, g, o, s);
    for (var _ = 0; _ < n.lines.length; _++) {
      for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, C = v, D = y, k = S - 1; S > T && (x = b[T], !x.textAlign || "left" === x.textAlign);) Hn(t, e, x, i, M, m, C, "left"), I -= x.width, C += x.width, T++;
      for (; k >= 0 && (x = b[k], "right" === x.textAlign);) Hn(t, e, x, i, M, m, D, "right"), I -= x.width, D -= x.width, k--;
      for (C += (a - (C - v) - (y - D) - I) / 2; k >= T;) x = b[T], Hn(t, e, x, i, M, m, C + x.width / 2, "center"), C += x.width, T++;
      m += M
    }
  }

  function Nn(t, e, n, i, r) {
    if (n && e.textRotation) {
      var a = e.textOrigin;
      "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
    }
  }

  function Hn(t, e, n, i, r, a, o, s) {
    var l = i.rich[n.styleName] || {};
    l.text = n.text;
    var h = n.textVerticalAlign,
      u = a + r / 2;
    "top" === h ? u = a + n.height / 2 : "bottom" === h && (u = a + r - n.height / 2), !n.isLineHolder && Vn(l) && Wn(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);
    var c = n.textPadding;
    c && (o = Zn(o, s, c), u -= n.height / 2 - c[2] - n.textHeight / 2), Yn(e, "shadowBlur", k(l.textShadowBlur, i.textShadowBlur, 0)), Yn(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), Yn(e, "shadowOffsetX", k(l.textShadowOffsetX, i.textShadowOffsetX, 0)), Yn(e, "shadowOffsetY", k(l.textShadowOffsetY, i.textShadowOffsetY, 0)), Yn(e, "textAlign", s), Yn(e, "textBaseline", "middle"), Yn(e, "font", n.font || hf);
    var d = qn(l.textStroke || i.textStroke, p),
      f = Un(l.textFill || i.textFill),
      p = D(l.textStrokeWidth, i.textStrokeWidth);
    d && (Yn(e, "lineWidth", p), Yn(e, "strokeStyle", d), e.strokeText(n.text, o, u)), f && (Yn(e, "fillStyle", f), e.fillText(n.text, o, u))
  }

  function Vn(t) {
    return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
  }

  function Wn(t, e, n, i, r, a, o) {
    var s = n.textBackgroundColor,
      l = n.textBorderWidth,
      h = n.textBorderColor,
      u = w(s);
    if (Yn(e, "shadowBlur", n.textBoxShadowBlur || 0), Yn(e, "shadowColor", n.textBoxShadowColor || "transparent"), Yn(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), Yn(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), u || l && h) {
      e.beginPath();
      var c = n.textBorderRadius;
      c ? Ln(e, {
        x: i,
        y: r,
        width: a,
        height: o,
        r: c
      }) : e.rect(i, r, a, o), e.closePath()
    }
    if (u)
      if (Yn(e, "fillStyle", s), null != n.fillOpacity) {
        var d = e.globalAlpha;
        e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d
      } else e.fill();
    else if (x(s)) Yn(e, "fillStyle", s(n)), e.fill();
    else if (b(s)) {
      var f = s.image;
      f = dn(f, null, t, Gn, s), f && pn(f) && e.drawImage(f, i, r, a, o)
    }
    if (l && h)
      if (Yn(e, "lineWidth", l), Yn(e, "strokeStyle", h), null != n.strokeOpacity) {
        var d = e.globalAlpha;
        e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d
      } else e.stroke()
  }

  function Gn(t, e) {
    e.image = t
  }

  function Xn(t, e, n) {
    var i = e.x || 0,
      r = e.y || 0,
      a = e.textAlign,
      o = e.textVerticalAlign;
    if (n) {
      var s = e.textPosition;
      if (s instanceof Array) i = n.x + jn(s[0], n.width), r = n.y + jn(s[1], n.height);
      else {
        var l = wn(s, n, e.textDistance);
        i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
      }
      var h = e.textOffset;
      h && (i += h[0], r += h[1])
    }
    return {
      baseX: i,
      baseY: r,
      textAlign: a,
      textVerticalAlign: o
    }
  }

  function Yn(t, e, n) {
    return t[e] = jd(t, e, n), t[e]
  }

  function qn(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
  }

  function Un(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
  }

  function jn(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
  }

  function Zn(t, e, n) {
    return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
  }

  function $n(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
  }

  function Kn(t) {
    t = t || {}, Nd.call(this, t);
    for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
    this.style = new $d(t.style, this), this._rect = null, this.__clipPaths = []
  }

  function Qn(t) {
    Kn.call(this, t)
  }

  function Jn(t) {
    return parseInt(t, 10)
  }

  function ti(t) {
    return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
  }

  function ei(t, e, n) {
    return xf.copy(t.getBoundingRect()), t.transform && xf.applyTransform(t.transform), wf.width = e, wf.height = n, !xf.intersect(wf)
  }

  function ni(t, e) {
    if (t == e) return !1;
    if (!t || !e || t.length !== e.length) return !0;
    for (var n = 0; n < t.length; n++)
      if (t[n] !== e[n]) return !0
  }

  function ii(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
    }
  }

  function ri(t, e) {
    var n = document.createElement("div");
    return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
  }

  function ai(t) {
    var e = t[1][0] - t[0][0],
      n = t[1][1] - t[0][1];
    return Math.sqrt(e * e + n * n)
  }

  function oi(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
  }

  function si(t) {
    return "mousewheel" === t && Gc.browser.firefox ? "DOMMouseScroll" : t
  }

  function li(t, e, n) {
    var i = t._gestureMgr;
    "start" === n && i.clear();
    var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
    if ("end" === n && i.clear(), r) {
      var a = r.type;
      e.gestureEvent = a, t.handler.dispatchToElement({
        target: r.target
      }, a, r.event)
    }
  }

  function hi(t) {
    t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
      t._touching = !1
    }, 700)
  }

  function ui(t) {
    var e = t.pointerType;
    return "pen" === e || "touch" === e
  }

  function ci(t) {
    function e(t, e) {
      return function() {
        return e._touching ? void 0 : t.apply(e, arguments)
      }
    }
    f(Df, function(e) {
      t._handlers[e] = m(Pf[e], t)
    }), f(Af, function(e) {
      t._handlers[e] = m(Pf[e], t)
    }), f(Cf, function(n) {
      t._handlers[n] = e(Pf[n], t)
    })
  }

  function di(t) {
    function e(e, n) {
      f(e, function(e) {
        ae(t, si(e), n._handlers[e])
      }, n)
    }
    sd.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Mf, this._handlers = {}, ci(this), Gc.pointerEventsSupported ? e(Af, this) : (Gc.touchEventsSupported && e(Df, this), e(Cf, this))
  }

  function fi(t, e) {
    var n = new Ef(Vc(), t, e);
    return n
  }

  function pi(t) {
    return t instanceof Array ? t : null == t ? [] : [t]
  }

  function gi(t, e, n) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
      for (var i = 0, r = n.length; r > i; i++) {
        var a = n[i];
        !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
      }
    }
  }

  function vi(t) {
    return !Rf(t) || Ff(t) || t instanceof Date ? t : t.value
  }

  function mi(t) {
    return Rf(t) && !(t instanceof Array)
  }

  function yi(t, e) {
    e = (e || []).slice();
    var n = p(t || [], function(t) {
      return {
        exist: t
      }
    });
    return zf(e, function(t, i) {
      if (Rf(t)) {
        for (var r = 0; r < n.length; r++)
          if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void(e[i] = null);
        for (var r = 0; r < n.length; r++) {
          var a = n[r].exist;
          if (!(n[r].option || null != a.id && null != t.id || null == t.name || wi(t) || wi(a) || a.name !== t.name + "")) return n[r].option = t, void(e[i] = null)
        }
      }
    }), zf(e, function(t) {
      if (Rf(t)) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e].exist;
          if (!n[e].option && !wi(i) && null == t.id) {
            n[e].option = t;
            break
          }
        }
        e >= n.length && n.push({
          option: t
        })
      }
    }), n
  }

  function _i(t) {
    var e = R();
    zf(t, function(t) {
      var n = t.exist;
      n && e.set(n.id, t)
    }), zf(t, function(t) {
      var n = t.option;
      L(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
    }), zf(t, function(t, n) {
      var i = t.exist,
        r = t.option,
        a = t.keyInfo;
      if (Rf(r)) {
        if (a.name = null != r.name ? r.name + "" : i ? i.name : Nf + n, i) a.id = i.id;
        else if (null != r.id) a.id = r.id + "";
        else {
          var o = 0;
          do a.id = "\x00" + a.name + "\x00" + o++; while (e.get(a.id))
        }
        e.set(a.id, t)
      }
    })
  }

  function xi(t) {
    var e = t.name;
    return !(!e || !e.indexOf(Nf))
  }

  function wi(t) {
    return Rf(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
  }

  function bi(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function(e) {
      return t.indexOfRawIndex(e)
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function(e) {
      return t.indexOfName(e)
    }) : t.indexOfName(e.name) : void 0
  }

  function Si() {
    var t = "__\x00ec_inner_" + Vf++ + "_" + Math.random().toFixed(5);
    return function(e) {
      return e[t] || (e[t] = {})
    }
  }

  function Mi(t, e, n) {
    if (w(e)) {
      var i = {};
      i[e + "Index"] = 0, e = i
    }
    var r = n && n.defaultMainType;
    !r || Ii(e, r + "Index") || Ii(e, r + "Id") || Ii(e, r + "Name") || (e[r + "Index"] = 0);
    var a = {};
    return zf(e, function(i, r) {
      var i = e[r];
      if ("dataIndex" === r || "dataIndexInside" === r) return void(a[r] = i);
      var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
        s = o[1],
        l = (o[2] || "").toLowerCase();
      if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && h(n.includeMainTypes, s) < 0)) {
        var u = {
          mainType: s
        };
        ("index" !== l || "all" !== i) && (u[l] = i);
        var c = t.queryComponents(u);
        a[s + "Models"] = c, a[s + "Model"] = c[0]
      }
    }), a
  }

  function Ii(t, e) {
    return t && t.hasOwnProperty(e)
  }

  function Ti(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : t[e] = n
  }

  function Ci(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e]
  }

  function Di(t) {
    return "auto" === t ? Gc.domSupported ? "html" : "richText" : t || "html"
  }

  function ki(t) {
    var e = {
      main: "",
      sub: ""
    };
    return t && (t = t.split(Wf), e.main = t[0] || "", e.sub = t[1] || ""), e
  }

  function Ai(t) {
    L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
  }

  function Pi(t) {
    t.$constructor = t, t.extend = function(t) {
      var e = this,
        n = function() {
          t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
        };
      return o(n.prototype, t), n.extend = this.extend, n.superCall = Oi, n.superApply = Bi, u(n, this), n.superClass = e, n
    }
  }

  function Li(t) {
    var e = ["__\x00is_clz", Xf++, Math.random().toFixed(3)].join("_");
    t.prototype[e] = !0, t.isInstance = function(t) {
      return !(!t || !t[e])
    }
  }

  function Oi(t, e) {
    var n = A(arguments, 2);
    return this.superClass.prototype[e].apply(t, n)
  }

  function Bi(t, e, n) {
    return this.superClass.prototype[e].apply(t, n)
  }

  function Ei(t, e) {
    function n(t) {
      var e = i[t.main];
      return e && e[Gf] || (e = i[t.main] = {}, e[Gf] = !0), e
    }
    e = e || {};
    var i = {};
    if (t.registerClass = function(t, e) {
        if (e)
          if (Ai(e), e = ki(e), e.sub) {
            if (e.sub !== Gf) {
              var r = n(e);
              r[e.sub] = t
            }
          } else i[e.main] = t;
        return t
      }, t.getClass = function(t, e, n) {
        var r = i[t];
        if (r && r[Gf] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
        return r
      }, t.getClassesByMainType = function(t) {
        t = ki(t);
        var e = [],
          n = i[t.main];
        return n && n[Gf] ? f(n, function(t, n) {
          n !== Gf && e.push(t)
        }) : e.push(n), e
      }, t.hasClass = function(t) {
        return t = ki(t), !!i[t.main]
      }, t.getAllClassMainTypes = function() {
        var t = [];
        return f(i, function(e, n) {
          t.push(n)
        }), t
      }, t.hasSubTypes = function(t) {
        t = ki(t);
        var e = i[t.main];
        return e && e[Gf]
      }, t.parseClassType = ki, e.registerWhenExtend) {
      var r = t.extend;
      r && (t.extend = function(e) {
        var n = r.call(this, e);
        return t.registerClass(n, e.type)
      })
    }
    return t
  }

  function zi(t) {
    return t > -Qf && Qf > t
  }

  function Ri(t) {
    return t > Qf || -Qf > t
  }

  function Fi(t, e, n, i, r) {
    var a = 1 - r;
    return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
  }

  function Ni(t, e, n, i, r) {
    var a = 1 - r;
    return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
  }

  function Hi(t, e, n, i, r, a) {
    var o = i + 3 * (e - n) - t,
      s = 3 * (n - 2 * e + t),
      l = 3 * (e - t),
      h = t - r,
      u = s * s - 3 * o * l,
      c = s * l - 9 * o * h,
      d = l * l - 3 * s * h,
      f = 0;
    if (zi(u) && zi(c))
      if (zi(s)) a[0] = 0;
      else {
        var p = -l / s;
        p >= 0 && 1 >= p && (a[f++] = p)
      }
    else {
      var g = c * c - 4 * u * d;
      if (zi(g)) {
        var v = c / u,
          p = -s / o + v,
          m = -v / 2;
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m)
      } else if (g > 0) {
        var y = Kf(g),
          _ = u * s + 1.5 * o * (-c + y),
          x = u * s + 1.5 * o * (-c - y);
        _ = 0 > _ ? -$f(-_, ep) : $f(_, ep), x = 0 > x ? -$f(-x, ep) : $f(x, ep);
        var p = (-s - (_ + x)) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p)
      } else {
        var w = (2 * u * s - 3 * o * c) / (2 * Kf(u * u * u)),
          b = Math.acos(w) / 3,
          S = Kf(u),
          M = Math.cos(b),
          p = (-s - 2 * S * M) / (3 * o),
          m = (-s + S * (M + tp * Math.sin(b))) / (3 * o),
          I = (-s + S * (M - tp * Math.sin(b))) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), I >= 0 && 1 >= I && (a[f++] = I)
      }
    }
    return f
  }

  function Vi(t, e, n, i, r) {
    var a = 6 * n - 12 * e + 6 * t,
      o = 9 * e + 3 * i - 3 * t - 9 * n,
      s = 3 * e - 3 * t,
      l = 0;
    if (zi(o)) {
      if (Ri(a)) {
        var h = -s / a;
        h >= 0 && 1 >= h && (r[l++] = h)
      }
    } else {
      var u = a * a - 4 * o * s;
      if (zi(u)) r[0] = -a / (2 * o);
      else if (u > 0) {
        var c = Kf(u),
          h = (-a + c) / (2 * o),
          d = (-a - c) / (2 * o);
        h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d)
      }
    }
    return l
  }

  function Wi(t, e, n, i, r, a) {
    var o = (e - t) * r + t,
      s = (n - e) * r + e,
      l = (i - n) * r + n,
      h = (s - o) * r + o,
      u = (l - s) * r + s,
      c = (u - h) * r + h;
    a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = i
  }

  function Gi(t, e, n, i, r, a, o, s, l, h, u) {
    var c, d, f, p, g, v = .005,
      m = 1 / 0;
    np[0] = l, np[1] = h;
    for (var y = 0; 1 > y; y += .05) ip[0] = Fi(t, n, r, o, y), ip[1] = Fi(e, i, a, s, y), p = ad(np, ip), m > p && (c = y, m = p);
    m = 1 / 0;
    for (var _ = 0; 32 > _ && !(Jf > v); _++) d = c - v, f = c + v, ip[0] = Fi(t, n, r, o, d), ip[1] = Fi(e, i, a, s, d), p = ad(ip, np), d >= 0 && m > p ? (c = d, m = p) : (rp[0] = Fi(t, n, r, o, f), rp[1] = Fi(e, i, a, s, f), g = ad(rp, np), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
    return u && (u[0] = Fi(t, n, r, o, c), u[1] = Fi(e, i, a, s, c)), Kf(m)
  }

  function Xi(t, e, n, i) {
    var r = 1 - i;
    return r * (r * t + 2 * i * e) + i * i * n
  }

  function Yi(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e))
  }

  function qi(t, e, n, i, r) {
    var a = t - 2 * e + n,
      o = 2 * (e - t),
      s = t - i,
      l = 0;
    if (zi(a)) {
      if (Ri(o)) {
        var h = -s / o;
        h >= 0 && 1 >= h && (r[l++] = h)
      }
    } else {
      var u = o * o - 4 * a * s;
      if (zi(u)) {
        var h = -o / (2 * a);
        h >= 0 && 1 >= h && (r[l++] = h)
      } else if (u > 0) {
        var c = Kf(u),
          h = (-o + c) / (2 * a),
          d = (-o - c) / (2 * a);
        h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d)
      }
    }
    return l
  }

  function Ui(t, e, n) {
    var i = t + n - 2 * e;
    return 0 === i ? .5 : (t - e) / i
  }

  function ji(t, e, n, i, r) {
    var a = (e - t) * i + t,
      o = (n - e) * i + e,
      s = (o - a) * i + a;
    r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n
  }

  function Zi(t, e, n, i, r, a, o, s, l) {
    var h, u = .005,
      c = 1 / 0;
    np[0] = o, np[1] = s;
    for (var d = 0; 1 > d; d += .05) {
      ip[0] = Xi(t, n, r, d), ip[1] = Xi(e, i, a, d);
      var f = ad(np, ip);
      c > f && (h = d, c = f)
    }
    c = 1 / 0;
    for (var p = 0; 32 > p && !(Jf > u); p++) {
      var g = h - u,
        v = h + u;
      ip[0] = Xi(t, n, r, g), ip[1] = Xi(e, i, a, g);
      var f = ad(ip, np);
      if (g >= 0 && c > f) h = g, c = f;
      else {
        rp[0] = Xi(t, n, r, v), rp[1] = Xi(e, i, a, v);
        var m = ad(rp, np);
        1 >= v && c > m ? (h = v, c = m) : u *= .5
      }
    }
    return l && (l[0] = Xi(t, n, r, h), l[1] = Xi(e, i, a, h)), Kf(c)
  }

  function $i(t, e, n, i, r, a) {
    r[0] = ap(t, n), r[1] = ap(e, i), a[0] = op(t, n), a[1] = op(e, i)
  }

  function Ki(t, e, n, i, r, a, o, s, l, h) {
    var u, c = Vi,
      d = Fi,
      f = c(t, n, r, o, fp);
    for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; f > u; u++) {
      var p = d(t, n, r, o, fp[u]);
      l[0] = ap(p, l[0]), h[0] = op(p, h[0])
    }
    for (f = c(e, i, a, s, pp), u = 0; f > u; u++) {
      var g = d(e, i, a, s, pp[u]);
      l[1] = ap(g, l[1]), h[1] = op(g, h[1])
    }
    l[0] = ap(t, l[0]), h[0] = op(t, h[0]), l[0] = ap(o, l[0]), h[0] = op(o, h[0]), l[1] = ap(e, l[1]), h[1] = op(e, h[1]), l[1] = ap(s, l[1]), h[1] = op(s, h[1])
  }

  function Qi(t, e, n, i, r, a, o, s) {
    var l = Ui,
      h = Xi,
      u = op(ap(l(t, n, r), 1), 0),
      c = op(ap(l(e, i, a), 1), 0),
      d = h(t, n, r, u),
      f = h(e, i, a, c);
    o[0] = ap(t, r, d), o[1] = ap(e, a, f), s[0] = op(t, r, d), s[1] = op(e, a, f)
  }

  function Ji(t, e, n, i, r, a, o, s, l) {
    var h = $,
      u = K,
      c = Math.abs(r - a);
    if (1e-4 > c % hp && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void(l[1] = e + i);
    if (up[0] = lp(r) * n + t, up[1] = sp(r) * i + e, cp[0] = lp(a) * n + t, cp[1] = sp(a) * i + e, h(s, up, cp), u(l, up, cp), r %= hp, 0 > r && (r += hp), a %= hp, 0 > a && (a += hp), r > a && !o ? a += hp : a > r && o && (r += hp), o) {
      var d = a;
      a = r, r = d
    }
    for (var f = 0; a > f; f += Math.PI / 2) f > r && (dp[0] = lp(f) * n + t, dp[1] = sp(f) * i + e, h(s, dp, s), u(l, dp, l))
  }

  function tr(t, e, n, i, r, a, o) {
    if (0 === r) return !1;
    var s = r,
      l = 0,
      h = t;
    if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;
    if (t === n) return Math.abs(a - t) <= s / 2;
    l = (e - i) / (t - n), h = (t * i - n * e) / (t - n);
    var u = l * a - o + h,
      c = u * u / (l * l + 1);
    return s / 2 * s / 2 >= c
  }

  function er(t, e, n, i, r, a, o, s, l, h, u) {
    if (0 === l) return !1;
    var c = l;
    if (u > e + c && u > i + c && u > a + c && u > s + c || e - c > u && i - c > u && a - c > u && s - c > u || h > t + c && h > n + c && h > r + c && h > o + c || t - c > h && n - c > h && r - c > h && o - c > h) return !1;
    var d = Gi(t, e, n, i, r, a, o, s, h, u, null);
    return c / 2 >= d
  }

  function nr(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;
    var h = o;
    if (l > e + h && l > i + h && l > a + h || e - h > l && i - h > l && a - h > l || s > t + h && s > n + h && s > r + h || t - h > s && n - h > s && r - h > s) return !1;
    var u = Zi(t, e, n, i, r, a, s, l, null);
    return h / 2 >= u
  }

  function ir(t) {
    return t %= Dp, 0 > t && (t += Dp), t
  }

  function rr(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;
    var h = o;
    s -= t, l -= e;
    var u = Math.sqrt(s * s + l * l);
    if (u - h > n || n > u + h) return !1;
    if (Math.abs(i - r) % kp < 1e-4) return !0;
    if (a) {
      var c = i;
      i = ir(r), r = ir(c)
    } else i = ir(i), r = ir(r);
    i > r && (r += kp);
    var d = Math.atan2(l, s);
    return 0 > d && (d += kp), d >= i && r >= d || d + kp >= i && r >= d + kp
  }

  function ar(t, e, n, i, r, a) {
    if (a > e && a > i || e > a && i > a) return 0;
    if (i === e) return 0;
    var o = e > i ? 1 : -1,
      s = (a - e) / (i - e);
    (1 === s || 0 === s) && (o = e > i ? .5 : -.5);
    var l = s * (n - t) + t;
    return l === r ? 1 / 0 : l > r ? o : 0
  }

  function or(t, e) {
    return Math.abs(t - e) < Lp
  }

  function sr() {
    var t = Bp[0];
    Bp[0] = Bp[1], Bp[1] = t
  }

  function lr(t, e, n, i, r, a, o, s, l, h) {
    if (h > e && h > i && h > a && h > s || e > h && i > h && a > h && s > h) return 0;
    var u = Hi(e, i, a, s, h, Op);
    if (0 === u) return 0;
    for (var c, d, f = 0, p = -1, g = 0; u > g; g++) {
      var v = Op[g],
        m = 0 === v || 1 === v ? .5 : 1,
        y = Fi(t, n, r, o, v);
      l > y || (0 > p && (p = Vi(e, i, a, s, Bp), Bp[1] < Bp[0] && p > 1 && sr(), c = Fi(e, i, a, s, Bp[0]), p > 1 && (d = Fi(e, i, a, s, Bp[1]))), f += 2 == p ? v < Bp[0] ? e > c ? m : -m : v < Bp[1] ? c > d ? m : -m : d > s ? m : -m : v < Bp[0] ? e > c ? m : -m : c > s ? m : -m)
    }
    return f
  }

  function hr(t, e, n, i, r, a, o, s) {
    if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;
    var l = qi(e, i, a, s, Op);
    if (0 === l) return 0;
    var h = Ui(e, i, a);
    if (h >= 0 && 1 >= h) {
      for (var u = 0, c = Xi(e, i, a, h), d = 0; l > d; d++) {
        var f = 0 === Op[d] || 1 === Op[d] ? .5 : 1,
          p = Xi(t, n, r, Op[d]);
        o > p || (u += Op[d] < h ? e > c ? f : -f : c > a ? f : -f)
      }
      return u
    }
    var f = 0 === Op[0] || 1 === Op[0] ? .5 : 1,
      p = Xi(t, n, r, Op[0]);
    return o > p ? 0 : e > a ? f : -f
  }

  function ur(t, e, n, i, r, a, o, s) {
    if (s -= e, s > n || -n > s) return 0;
    var l = Math.sqrt(n * n - s * s);
    Op[0] = -l, Op[1] = l;
    var h = Math.abs(i - r);
    if (1e-4 > h) return 0;
    if (1e-4 > h % Pp) {
      i = 0, r = Pp;
      var u = a ? 1 : -1;
      return o >= Op[0] + t && o <= Op[1] + t ? u : 0
    }
    if (a) {
      var l = i;
      i = ir(r), r = ir(l)
    } else i = ir(i), r = ir(r);
    i > r && (r += Pp);
    for (var c = 0, d = 0; 2 > d; d++) {
      var f = Op[d];
      if (f + t > o) {
        var p = Math.atan2(s, f),
          u = a ? 1 : -1;
        0 > p && (p = Pp + p), (p >= i && r >= p || p + Pp >= i && r >= p + Pp) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), c += u)
      }
    }
    return c
  }

  function cr(t, e, n, i, r) {
    for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
      var c = t[u++];
      switch (c === Ap.M && u > 1 && (n || (a += ar(o, s, l, h, i, r))), 1 == u && (o = t[u], s = t[u + 1], l = o, h = s), c) {
        case Ap.M:
          l = t[u++], h = t[u++], o = l, s = h;
          break;
        case Ap.L:
          if (n) {
            if (tr(o, s, t[u], t[u + 1], e, i, r)) return !0
          } else a += ar(o, s, t[u], t[u + 1], i, r) || 0;
          o = t[u++], s = t[u++];
          break;
        case Ap.C:
          if (n) {
            if (er(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0
          } else a += lr(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
          o = t[u++], s = t[u++];
          break;
        case Ap.Q:
          if (n) {
            if (nr(o, s, t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0
          } else a += hr(o, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
          o = t[u++], s = t[u++];
          break;
        case Ap.A:
          var d = t[u++],
            f = t[u++],
            p = t[u++],
            g = t[u++],
            v = t[u++],
            m = t[u++],
            y = (t[u++], 1 - t[u++]),
            _ = Math.cos(v) * p + d,
            x = Math.sin(v) * g + f;
          u > 1 ? a += ar(o, s, _, x, i, r) : (l = _, h = x);
          var w = (i - d) * g / p + d;
          if (n) {
            if (rr(d, f, g, v, v + m, y, e, w, r)) return !0
          } else a += ur(d, f, g, v, v + m, y, w, r);
          o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
          break;
        case Ap.R:
          l = o = t[u++], h = s = t[u++];
          var b = t[u++],
            S = t[u++],
            _ = l + b,
            x = h + S;
          if (n) {
            if (tr(l, h, _, h, e, i, r) || tr(_, h, _, x, e, i, r) || tr(_, x, l, x, e, i, r) || tr(l, x, l, h, e, i, r)) return !0
          } else a += ar(_, h, _, x, i, r), a += ar(l, x, l, h, i, r);
          break;
        case Ap.Z:
          if (n) {
            if (tr(o, s, l, h, e, i, r)) return !0
          } else a += ar(o, s, l, h, i, r);
          o = l, s = h
      }
    }
    return n || or(s, h) || (a += ar(o, s, l, h, i, r) || 0), 0 !== a
  }

  function dr(t, e, n) {
    return cr(t, 0, !1, e, n)
  }

  function fr(t, e, n, i) {
    return cr(t, e, !0, n, i)
  }

  function pr(t) {
    Kn.call(this, t), this.path = null
  }

  function gr(t, e, n, i, r, a, o, s, l, h, u) {
    var c = l * (qp / 180),
      d = Yp(c) * (t - n) / 2 + Xp(c) * (e - i) / 2,
      f = -1 * Xp(c) * (t - n) / 2 + Yp(c) * (e - i) / 2,
      p = d * d / (o * o) + f * f / (s * s);
    p > 1 && (o *= Gp(p), s *= Gp(p));
    var g = (r === a ? -1 : 1) * Gp((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
      v = g * o * f / s,
      m = g * -s * d / o,
      y = (t + n) / 2 + Yp(c) * v - Xp(c) * m,
      _ = (e + i) / 2 + Xp(c) * v + Yp(c) * m,
      x = Zp([1, 0], [(d - v) / o, (f - m) / s]),
      w = [(d - v) / o, (f - m) / s],
      b = [(-1 * d - v) / o, (-1 * f - m) / s],
      S = Zp(w, b);
    jp(w, b) <= -1 && (S = qp), jp(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * qp), 1 === a && 0 > S && (S += 2 * qp), u.addData(h, y, _, o, s, x, S, c, a)
  }

  function vr(t) {
    if (!t) return new Cp;
    for (var e, n = 0, i = 0, r = n, a = i, o = new Cp, s = Cp.CMD, l = t.match($p), h = 0; h < l.length; h++) {
      for (var u, c = l[h], d = c.charAt(0), f = c.match(Kp) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
      for (var v = 0; p > v;) {
        var m, y, _, x, w, b, S, M = n,
          I = i;
        switch (d) {
          case "l":
            n += f[v++], i += f[v++], u = s.L, o.addData(u, n, i);
            break;
          case "L":
            n = f[v++], i = f[v++], u = s.L, o.addData(u, n, i);
            break;
          case "m":
            n += f[v++], i += f[v++], u = s.M, o.addData(u, n, i), r = n, a = i, d = "l";
            break;
          case "M":
            n = f[v++], i = f[v++], u = s.M, o.addData(u, n, i), r = n, a = i, d = "L";
            break;
          case "h":
            n += f[v++], u = s.L, o.addData(u, n, i);
            break;
          case "H":
            n = f[v++], u = s.L, o.addData(u, n, i);
            break;
          case "v":
            i += f[v++], u = s.L, o.addData(u, n, i);
            break;
          case "V":
            i = f[v++], u = s.L, o.addData(u, n, i);
            break;
          case "C":
            u = s.C, o.addData(u, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), n = f[v - 2], i = f[v - 1];
            break;
          case "c":
            u = s.C, o.addData(u, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i), n += f[v - 2], i += f[v - 1];
            break;
          case "S":
            m = n, y = i;
            var T = o.len(),
              C = o.data;
            e === s.C && (m += n - C[T - 4], y += i - C[T - 3]), u = s.C, M = f[v++], I = f[v++], n = f[v++], i = f[v++], o.addData(u, m, y, M, I, n, i);
            break;
          case "s":
            m = n, y = i;
            var T = o.len(),
              C = o.data;
            e === s.C && (m += n - C[T - 4], y += i - C[T - 3]), u = s.C, M = n + f[v++], I = i + f[v++], n += f[v++], i += f[v++], o.addData(u, m, y, M, I, n, i);
            break;
          case "Q":
            M = f[v++], I = f[v++], n = f[v++], i = f[v++], u = s.Q, o.addData(u, M, I, n, i);
            break;
          case "q":
            M = f[v++] + n, I = f[v++] + i, n += f[v++], i += f[v++], u = s.Q, o.addData(u, M, I, n, i);
            break;
          case "T":
            m = n, y = i;
            var T = o.len(),
              C = o.data;
            e === s.Q && (m += n - C[T - 4], y += i - C[T - 3]), n = f[v++], i = f[v++], u = s.Q, o.addData(u, m, y, n, i);
            break;
          case "t":
            m = n, y = i;
            var T = o.len(),
              C = o.data;
            e === s.Q && (m += n - C[T - 4], y += i - C[T - 3]), n += f[v++], i += f[v++], u = s.Q, o.addData(u, m, y, n, i);
            break;
          case "A":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, I = i, n = f[v++], i = f[v++], u = s.A, gr(M, I, n, i, b, S, _, x, w, u, o);
            break;
          case "a":
            _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, I = i, n += f[v++], i += f[v++], u = s.A, gr(M, I, n, i, b, S, _, x, w, u, o)
        }
      }("z" === d || "Z" === d) && (u = s.Z, o.addData(u), n = r, i = a), e = u
    }
    return o.toStatic(), o
  }

  function mr(t, e) {
    var n = vr(t);
    return e = e || {}, e.buildPath = function(t) {
      if (t.setData) {
        t.setData(n.data);
        var e = t.getContext();
        e && t.rebuildPath(e)
      } else {
        var e = t;
        n.rebuildPath(e)
      }
    }, e.applyTransform = function(t) {
      Wp(n, t), this.dirty(!0)
    }, e
  }

  function yr(t, e) {
    return new pr(mr(t, e))
  }

  function _r(t, e) {
    return pr.extend(mr(t, e))
  }

  function xr(t, e) {
    for (var n = [], i = t.length, r = 0; i > r; r++) {
      var a = t[r];
      a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path)
    }
    var o = new pr(e);
    return o.createPathProxy(), o.buildPath = function(t) {
      t.appendPath(n);
      var e = t.getContext();
      e && t.rebuildPath(e)
    }, o
  }

  function wr(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
      l = .5 * (i - e);
    return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
  }

  function br(t, e, n) {
    var i = e.points,
      r = e.smooth;
    if (i && i.length >= 2) {
      if (r && "spline" !== r) {
        var a = ag(i, r, n, e.smoothConstraint);
        t.moveTo(i[0][0], i[0][1]);
        for (var o = i.length, s = 0;
          (n ? o : o - 1) > s; s++) {
          var l = a[2 * s],
            h = a[2 * s + 1],
            u = i[(s + 1) % o];
          t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1])
        }
      } else {
        "spline" === r && (i = rg(i, n)), t.moveTo(i[0][0], i[0][1]);
        for (var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1])
      }
      n && t.closePath()
    }
  }

  function Sr(t, e, n) {
    var i = t.cpx2,
      r = t.cpy2;
    return null === i || null === r ? [(n ? Ni : Fi)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Ni : Fi)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? Yi : Xi)(t.x1, t.cpx1, t.x2, e), (n ? Yi : Xi)(t.y1, t.cpy1, t.y2, e)]
  }

  function Mr(t) {
    Kn.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
  }

  function Ir(t) {
    return pr.extend(t)
  }

  function Tr(t, e) {
    return _r(t, e)
  }

  function Cr(t, e, n, i) {
    var r = yr(t, e);
    return n && ("center" === i && (n = kr(n, r.getBoundingRect())), Ar(r, n)), r
  }

  function Dr(t, e, n) {
    var i = new Qn({
      style: {
        image: t,
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height
      },
      onload: function(t) {
        if ("center" === n) {
          var r = {
            width: t.width,
            height: t.height
          };
          i.setStyle(kr(e, r))
        }
      }
    });
    return i
  }

  function kr(t, e) {
    var n, i = e.width / e.height,
      r = t.height * i;
    r <= t.width ? n = t.height : (r = t.width, n = r / i);
    var a = t.x + t.width / 2,
      o = t.y + t.height / 2;
    return {
      x: a - r / 2,
      y: o - n / 2,
      width: r,
      height: n
    }
  }

  function Ar(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
        i = n.calculateTransform(e);
      t.applyTransform(i)
    }
  }

  function Pr(t) {
    var e = t.shape,
      n = t.style.lineWidth;
    return yg(2 * e.x1) === yg(2 * e.x2) && (e.x1 = e.x2 = Or(e.x1, n, !0)), yg(2 * e.y1) === yg(2 * e.y2) && (e.y1 = e.y2 = Or(e.y1, n, !0)), t
  }

  function Lr(t) {
    var e = t.shape,
      n = t.style.lineWidth,
      i = e.x,
      r = e.y,
      a = e.width,
      o = e.height;
    return e.x = Or(e.x, n, !0), e.y = Or(e.y, n, !0), e.width = Math.max(Or(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(Or(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t
  }

  function Or(t, e, n) {
    var i = yg(2 * t);
    return (i + yg(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
  }

  function Br(t) {
    return null != t && "none" !== t
  }

  function Er(t) {
    if ("string" != typeof t) return t;
    var e = Sg.get(t);
    return e || (e = Pe(t, -.1), 1e4 > Mg && (Sg.set(t, e), Mg++)), e
  }

  function zr(t) {
    if (t.__hoverStlDirty) {
      t.__hoverStlDirty = !1;
      var e = t.__hoverStl;
      if (!e) return void(t.__normalStl = null);
      var n = t.__normalStl = {},
        i = t.style;
      for (var r in e) null != e[r] && (n[r] = i[r]);
      n.fill = i.fill, n.stroke = i.stroke
    }
  }

  function Rr(t) {
    var e = t.__hoverStl;
    if (e && !t.__highlighted) {
      var n = t.useHoverLayer;
      t.__highlighted = n ? "layer" : "plain";
      var i = t.__zr;
      if (i || !n) {
        var r = t,
          a = t.style;
        n && (r = i.addHover(t), a = r.style), ra(a), n || zr(r), a.extendFrom(e), Fr(a, e, "fill"), Fr(a, e, "stroke"), ia(a), n || (t.dirty(!1), t.z2 += 1)
      }
    }
  }

  function Fr(t, e, n) {
    !Br(e[n]) && Br(t[n]) && (t[n] = Er(t[n]))
  }

  function Nr(t) {
    t.__highlighted && (Hr(t), t.__highlighted = !1)
  }

  function Hr(t) {
    var e = t.__highlighted;
    if ("layer" === e) t.__zr && t.__zr.removeHover(t);
    else if (e) {
      var n = t.style,
        i = t.__normalStl;
      i && (ra(n), t.setStyle(i), ia(n), t.z2 -= 1)
    }
  }

  function Vr(t, e) {
    t.isGroup ? t.traverse(function(t) {
      !t.isGroup && e(t)
    }) : e(t)
  }

  function Wr(t, e) {
    e = t.__hoverStl = e !== !1 && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (Nr(t), Rr(t))
  }

  function Gr(t) {
    return t && t.__isEmphasisEntered
  }

  function Xr(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && Vr(this, Rr)
  }

  function Yr(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && Vr(this, Nr)
  }

  function qr() {
    this.__isEmphasisEntered = !0, Vr(this, Rr)
  }

  function Ur() {
    this.__isEmphasisEntered = !1, Vr(this, Nr)
  }

  function jr(t, e, n) {
    t.isGroup ? t.traverse(function(t) {
      !t.isGroup && Wr(t, t.hoverStyle || e)
    }) : Wr(t, t.hoverStyle || e), Zr(t, n)
  }

  function Zr(t, e) {
    var n = e === !1;
    if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
      var i = n ? "off" : "on";
      t[i]("mouseover", Xr)[i]("mouseout", Yr), t[i]("emphasis", qr)[i]("normal", Ur), t.__hoverStyleTrigger = !n
    }
  }

  function $r(t, e, n, i, r, a, o) {
    r = r || wg;
    var s, l = r.labelFetcher,
      h = r.labelDataIndex,
      u = r.labelDimIndex,
      c = n.getShallow("show"),
      d = i.getShallow("show");
    (c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = x(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
    var f = c ? s : null,
      p = d ? D(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
    (null != f || null != p) && (Kr(t, n, a, r), Kr(e, i, o, r, !0)), t.text = f, e.text = p
  }

  function Kr(t, e, n, i, r) {
    return Jr(t, e, i, r), n && o(t, n), t
  }

  function Qr(t, e, n) {
    var i, r = {
      isRectText: !0
    };
    n === !1 ? i = !0 : r.autoColor = n, Jr(t, e, r, i)
  }

  function Jr(t, e, n, i) {
    if (n = n || wg, n.isRectText) {
      var r = e.getShallow("position") || (i ? null : "inside");
      "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
      var a = e.getShallow("rotate");
      null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = D(e.getShallow("distance"), i ? null : 5)
    }
    var o, s = e.ecModel,
      l = s && s.option.textStyle,
      h = ta(e);
    if (h) {
      o = {};
      for (var u in h)
        if (h.hasOwnProperty(u)) {
          var c = e.getModel(["rich", u]);
          ea(o[u] = {}, c, l, n, i)
        }
    }
    return t.rich = o, ea(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
  }

  function ta(t) {
    for (var e; t && t !== t.ecModel;) {
      var n = (t.option || wg).rich;
      if (n) {
        e = e || {};
        for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
      }
      t = t.parentModel
    }
    return e
  }

  function ea(t, e, n, i, r, a) {
    n = !r && n || wg, t.textFill = na(e.getShallow("color"), i) || n.color, t.textStroke = na(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = D(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (a && (t.insideRollbackOpt = i, ia(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = na(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = na(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
  }

  function na(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
  }

  function ia(t) {
    var e = t.insideRollbackOpt;
    if (e && null == t.textFill) {
      var n, i = e.useInsideStyle,
        r = t.insideRawTextPosition,
        a = e.autoColor;
      i !== !1 && (i === !0 || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = {
        textFill: null,
        textStroke: t.textStroke,
        textStrokeWidth: t.textStrokeWidth
      }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (n = {
        textFill: null
      }, t.textFill = a), n && (t.insideRollback = n)
    }
  }

  function ra(t) {
    var e = t.insideRollback;
    e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
  }

  function aa(t, e) {
    var n = e || e.getModel("textStyle");
    return O([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
  }

  function oa(t, e, n, i, r, a) {
    "function" == typeof r && (a = r, r = null);
    var o = i && i.isAnimationEnabled();
    if (o) {
      var s = t ? "Update" : "",
        l = i.getShallow("animationDuration" + s),
        h = i.getShallow("animationEasing" + s),
        u = i.getShallow("animationDelay" + s);
      "function" == typeof u && (u = u(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, u || 0, h, a, !!a) : (e.stopAnimation(), e.attr(n), a && a())
    } else e.stopAnimation(), e.attr(n), a && a()
  }

  function sa(t, e, n, i, r) {
    oa(!0, t, e, n, i, r)
  }

  function la(t, e, n, i, r) {
    oa(!1, t, e, n, i, r)
  }

  function ha(t, e) {
    for (var n = de([]); t && t !== e;) pe(n, t.getLocalTransform(), n), t = t.parent;
    return n
  }

  function ua(t, e, n) {
    return e && !d(e) && (e = md.getLocalTransform(e)), n && (e = ye([], e)), Z([], t, e)
  }

  function ca(t, e, n) {
    var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
      r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
      a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
    return a = ua(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
  }

  function da(t, e, n) {
    function i(t) {
      var e = {};
      return t.traverse(function(t) {
        !t.isGroup && t.anid && (e[t.anid] = t)
      }), e
    }

    function r(t) {
      var e = {
        position: H(t.position),
        rotation: t.rotation
      };
      return t.shape && (e.shape = o({}, t.shape)), e
    }
    if (t && e) {
      var a = i(t);
      e.traverse(function(t) {
        if (!t.isGroup && t.anid) {
          var e = a[t.anid];
          if (e) {
            var i = r(t);
            t.attr(r(e)), sa(t, i, n, t.dataIndex)
          }
        }
      })
    }
  }

  function fa(t, e) {
    return p(t, function(t) {
      var n = t[0];
      n = _g(n, e.x), n = xg(n, e.x + e.width);
      var i = t[1];
      return i = _g(i, e.y), i = xg(i, e.y + e.height), [n, i]
    })
  }

  function pa(t, e) {
    var n = _g(t.x, e.x),
      i = xg(t.x + t.width, e.x + e.width),
      r = _g(t.y, e.y),
      a = xg(t.y + t.height, e.y + e.height);
    return i >= n && a >= r ? {
      x: n,
      y: r,
      width: i - n,
      height: a - r
    } : void 0
  }

  function ga(t, e, n) {
    e = o({
      rectHover: !0
    }, e);
    var i = e.style = {
      strokeNoScale: !0
    };
    return n = n || {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new Qn(e)) : Cr(t.replace("path://", ""), e, n, "center") : void 0
  }

  function va(t, e, n) {
    this.parentModel = e, this.ecModel = n, this.option = t
  }

  function ma(t, e, n) {
    for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++);
    return null == t && n && (t = n.get(e)), t
  }

  function ya(t, e) {
    var n = Pg(t).getParent;
    return n ? n.call(t, e) : t.parentModel
  }

  function _a(t) {
    return [t || "", Lg++, Math.random().toFixed(5)].join("_")
  }

  function xa(t) {
    var e = {};
    return t.registerSubTypeDefaulter = function(t, n) {
      t = ki(t), e[t.main] = n
    }, t.determineSubType = function(n, i) {
      var r = i.type;
      if (!r) {
        var a = ki(n).main;
        t.hasSubTypes(n) && e[a] && (r = e[a](i))
      }
      return r
    }, t
  }

  function wa(t, e) {
    function n(t) {
      var n = {},
        a = [];
      return f(t, function(o) {
        var s = i(n, o),
          l = s.originalDeps = e(o),
          u = r(l, t);
        s.entryCount = u.length, 0 === s.entryCount && a.push(o), f(u, function(t) {
          h(s.predecessor, t) < 0 && s.predecessor.push(t);
          var e = i(n, t);
          h(e.successor, t) < 0 && e.successor.push(o)
        })
      }), {
        graph: n,
        noEntryList: a
      }
    }

    function i(t, e) {
      return t[e] || (t[e] = {
        predecessor: [],
        successor: []
      }), t[e]
    }

    function r(t, e) {
      var n = [];
      return f(t, function(t) {
        h(e, t) >= 0 && n.push(t)
      }), n
    }
    t.topologicalTravel = function(t, e, i, r) {
      function a(t) {
        l[t].entryCount--, 0 === l[t].entryCount && h.push(t)
      }

      function o(t) {
        u[t] = !0, a(t)
      }
      if (t.length) {
        var s = n(e),
          l = s.graph,
          h = s.noEntryList,
          u = {};
        for (f(t, function(t) {
            u[t] = !0
          }); h.length;) {
          var c = h.pop(),
            d = l[c],
            p = !!u[c];
          p && (i.call(r, c, d.originalDeps.slice()), delete u[c]), f(d.successor, p ? o : a)
        }
        f(u, function() {
          throw new Error("Circle dependency may exists")
        })
      }
    }
  }

  function ba(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "")
  }

  function Sa(t, e, n, i) {
    var r = e[1] - e[0],
      a = n[1] - n[0];
    if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
    if (i)
      if (r > 0) {
        if (t <= e[0]) return n[0];
        if (t >= e[1]) return n[1]
      } else {
        if (t >= e[0]) return n[0];
        if (t <= e[1]) return n[1]
      }
    else {
      if (t === e[0]) return n[0];
      if (t === e[1]) return n[1]
    }
    return (t - e[0]) / r * a + n[0]
  }

  function Ma(t, e) {
    switch (t) {
      case "center":
      case "middle":
        t = "50%";
        break;
      case "left":
      case "top":
        t = "0%";
        break;
      case "right":
      case "bottom":
        t = "100%"
    }
    return "string" == typeof t ? ba(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
  }

  function Ia(t, e, n) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
  }

  function Ta(t) {
    var e = t.toString(),
      n = e.indexOf("e");
    if (n > 0) {
      var i = +e.slice(n + 1);
      return 0 > i ? -i : 0
    }
    var r = e.indexOf(".");
    return 0 > r ? 0 : e.length - 1 - r
  }

  function Ca(t, e) {
    var n = Math.log,
      i = Math.LN10,
      r = Math.floor(n(t[1] - t[0]) / i),
      a = Math.round(n(Math.abs(e[1] - e[0])) / i),
      o = Math.min(Math.max(-r + a, 0), 20);
    return isFinite(o) ? o : 20
  }

  function Da(t, e, n) {
    if (!t[e]) return 0;
    var i = g(t, function(t, e) {
      return t + (isNaN(e) ? 0 : e)
    }, 0);
    if (0 === i) return 0;
    for (var r = Math.pow(10, n), a = p(t, function(t) {
        return (isNaN(t) ? 0 : t) / i * r * 100
      }), o = 100 * r, s = p(a, function(t) {
        return Math.floor(t)
      }), l = g(s, function(t, e) {
        return t + e
      }, 0), h = p(a, function(t, e) {
        return t - s[e]
      }); o > l;) {
      for (var u = Number.NEGATIVE_INFINITY, c = null, d = 0, f = h.length; f > d; ++d) h[d] > u && (u = h[d], c = d);
      ++s[c], h[c] = 0, ++l
    }
    return s[e] / r
  }

  function ka(t) {
    var e = 2 * Math.PI;
    return (t % e + e) % e
  }

  function Aa(t) {
    return t > -Og && Og > t
  }

  function Pa(t) {
    if (t instanceof Date) return t;
    if ("string" == typeof t) {
      var e = Bg.exec(t);
      if (!e) return new Date(0 / 0);
      if (e[8]) {
        var n = +e[4] || 0;
        return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
      }
      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
    }
    return new Date(null == t ? 0 / 0 : Math.round(t))
  }

  function La(t) {
    return Math.pow(10, Oa(t))
  }

  function Oa(t) {
    return Math.floor(Math.log(t) / Math.LN10)
  }

  function Ba(t, e) {
    var n, i = Oa(t),
      r = Math.pow(10, i),
      a = t / r;
    return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
  }

  function Ea(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
  }

  function za(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
      return e.toUpperCase()
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
  }

  function Ra(t) {
    return null == t ? "" : (t + "").replace(zg, function(t, e) {
      return Rg[e]
    })
  }

  function Fa(t, e, n) {
    _(e) || (e = [e]);
    var i = e.length;
    if (!i) return "";
    for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = Fg[a];
      t = t.replace(Ng(o), Ng(o, 0))
    }
    for (var s = 0; i > s; s++)
      for (var l = 0; l < r.length; l++) {
        var h = e[s][r[l]];
        t = t.replace(Ng(Fg[l], s), n ? Ra(h) : h)
      }
    return t
  }

  function Na(t, e) {
    t = w(t) ? {
      color: t,
      extraCssText: e
    } : t || {};
    var n = t.color,
      i = t.type,
      e = t.extraCssText,
      r = t.renderMode || "html",
      a = t.markerId || "X";
    return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Ra(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Ra(n) + ";" + (e || "") + '"></span>' : {
      renderMode: r,
      content: "{marker" + a + "|}  ",
      style: {
        color: n
      }
    } : ""
  }

  function Ha(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t
  }

  function Va(t, e, n) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
    var i = Pa(e),
      r = n ? "UTC" : "",
      a = i["get" + r + "FullYear"](),
      o = i["get" + r + "Month"]() + 1,
      s = i["get" + r + "Date"](),
      l = i["get" + r + "Hours"](),
      h = i["get" + r + "Minutes"](),
      u = i["get" + r + "Seconds"](),
      c = i["get" + r + "Milliseconds"]();
    return t = t.replace("MM", Ha(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", Ha(s, 2)).replace("d", s).replace("hh", Ha(l, 2)).replace("h", l).replace("mm", Ha(h, 2)).replace("m", h).replace("ss", Ha(u, 2)).replace("s", u).replace("SSS", Ha(c, 3))
  }

  function Wa(t, e, n, i, r) {
    var a = 0,
      o = 0;
    null == i && (i = 1 / 0), null == r && (r = 1 / 0);
    var s = 0;
    e.eachChild(function(l, h) {
      var u, c, d = l.position,
        f = l.getBoundingRect(),
        p = e.childAt(h + 1),
        g = p && p.getBoundingRect();
      if ("horizontal" === t) {
        var v = f.width + (g ? -g.x + f.x : 0);
        u = a + v, u > i || l.newline ? (a = 0, u = v, o += s + n, s = f.height) : s = Math.max(s, f.height)
      } else {
        var m = f.height + (g ? -g.y + f.y : 0);
        c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width)
      }
      l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = u + n : o = c + n)
    })
  }

  function Ga(t, e, n) {
    n = Eg(n || 0);
    var i = e.width,
      r = e.height,
      a = Ma(t.left, i),
      o = Ma(t.top, r),
      s = Ma(t.right, i),
      l = Ma(t.bottom, r),
      h = Ma(t.width, i),
      u = Ma(t.height, r),
      c = n[2] + n[0],
      d = n[1] + n[3],
      f = t.aspect;
    switch (isNaN(h) && (h = i - s - d - a), isNaN(u) && (u = r - l - c - o), null != f && (isNaN(h) && isNaN(u) && (f > i / r ? h = .8 * i : u = .8 * r), isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(a) && (a = i - s - h - d), isNaN(o) && (o = r - l - u - c), t.left || t.right) {
      case "center":
        a = i / 2 - h / 2 - n[3];
        break;
      case "right":
        a = i - h - d
    }
    switch (t.top || t.bottom) {
      case "middle":
      case "center":
        o = r / 2 - u / 2 - n[0];
        break;
      case "bottom":
        o = r - u - c
    }
    a = a || 0, o = o || 0, isNaN(h) && (h = i - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
    var p = new $e(a + n[3], o + n[0], h, u);
    return p.margin = n, p
  }

  function Xa(t, e, n) {
    function i(n, i) {
      var o = {},
        l = 0,
        h = {},
        u = 0,
        c = 2;
      if (Vg(n, function(e) {
          h[e] = t[e]
        }), Vg(n, function(t) {
          r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++
        }), s[i]) return a(e, n[1]) ? h[n[2]] = null : a(e, n[2]) && (h[n[1]] = null), h;
      if (u !== c && l) {
        if (l >= c) return o;
        for (var d = 0; d < n.length; d++) {
          var f = n[d];
          if (!r(o, f) && r(t, f)) {
            o[f] = t[f];
            break
          }
        }
        return o
      }
      return h
    }

    function r(t, e) {
      return t.hasOwnProperty(e)
    }

    function a(t, e) {
      return null != t[e] && "auto" !== t[e]
    }

    function o(t, e, n) {
      Vg(t, function(t) {
        e[t] = n[t]
      })
    }!b(n) && (n = {});
    var s = n.ignoreSize;
    !_(s) && (s = [s, s]);
    var l = i(Gg[0], 0),
      h = i(Gg[1], 1);
    o(Gg[0], t, l), o(Gg[1], t, h)
  }

  function Ya(t) {
    return qa({}, t)
  }

  function qa(t, e) {
    return e && t && Vg(Wg, function(n) {
      e.hasOwnProperty(n) && (t[n] = e[n])
    }), t
  }

  function Ua(t) {
    var e = [];
    return f(Ug.getClassesByMainType(t), function(t) {
      e = e.concat(t.prototype.dependencies || [])
    }), e = p(e, function(t) {
      return ki(t).main
    }), "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"), e
  }

  function ja(t, e) {
    for (var n = t.length, i = 0; n > i; i++)
      if (t[i].length > e) return t[i];
    return t[n - 1]
  }

  function Za(t) {
    var e = t.get("coordinateSystem"),
      n = {
        coordSysName: e,
        coordSysDims: [],
        axisMap: R(),
        categoryAxisMap: R()
      },
      i = Qg[e];
    return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
  }

  function $a(t) {
    return "category" === t.get("type")
  }

  function Ka(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === nv ? {} : []), this.sourceFormat = t.sourceFormat || iv, this.seriesLayoutBy = t.seriesLayoutBy || av, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && R(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
  }

  function Qa(t) {
    var e = t.option.source,
      n = iv;
    if (M(e)) n = rv;
    else if (_(e)) {
      0 === e.length && (n = tv);
      for (var i = 0, r = e.length; r > i; i++) {
        var a = e[i];
        if (null != a) {
          if (_(a)) {
            n = tv;
            break
          }
          if (b(a)) {
            n = ev;
            break
          }
        }
      }
    } else if (b(e)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && d(e[o])) {
          n = nv;
          break
        }
    } else if (null != e) throw new Error("Invalid data");
    sv(t).sourceFormat = n
  }

  function Ja(t) {
    return sv(t).source
  }

  function to(t) {
    sv(t).datasetMap = R()
  }

  function eo(t) {
    var e = t.option,
      n = e.data,
      i = M(n) ? rv : Jg,
      r = !1,
      a = e.seriesLayoutBy,
      o = e.sourceHeader,
      s = e.dimensions,
      l = so(t);
    if (l) {
      var h = l.option;
      n = h.source, i = sv(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), s = s || h.dimensions
    }
    var u = no(n, i, a, o, s),
      c = e.encode;
    !c && l && (c = oo(t, l, n, i, a, u)), sv(t).source = new Ka({
      data: n,
      fromDataset: r,
      seriesLayoutBy: a,
      sourceFormat: i,
      dimensionsDefine: u.dimensionsDefine,
      startIndex: u.startIndex,
      dimensionsDetectCount: u.dimensionsDetectCount,
      encodeDefine: c
    })
  }

  function no(t, e, n, i, r) {
    if (!t) return {
      dimensionsDefine: io(r)
    };
    var a, o, s;
    if (e === tv) "auto" === i || null == i ? ro(function(t) {
      null != t && "-" !== t && (w(t) ? null == o && (o = 1) : o = 0)
    }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], ro(function(t, e) {
      r[e] = null != t ? t : ""
    }, n, t)), a = r ? r.length : n === ov ? t.length : t[0] ? t[0].length : null;
    else if (e === ev) r || (r = ao(t), s = !0);
    else if (e === nv) r || (r = [], s = !0, f(t, function(t, e) {
      r.push(e)
    }));
    else if (e === Jg) {
      var l = vi(t[0]);
      a = _(l) && l.length || 1
    }
    var h;
    return s && f(r, function(t, e) {
      "name" === (b(t) ? t.name : t) && (h = e)
    }), {
      startIndex: o,
      dimensionsDefine: io(r),
      dimensionsDetectCount: a,
      potentialNameDimIndex: h
    }
  }

  function io(t) {
    if (t) {
      var e = R();
      return p(t, function(t) {
        if (t = o({}, b(t) ? t : {
            name: t
          }), null == t.name) return t;
        t.name += "", null == t.displayName && (t.displayName = t.name);
        var n = e.get(t.name);
        return n ? t.name += "-" + n.count++ : e.set(t.name, {
          count: 1
        }), t
      })
    }
  }

  function ro(t, e, n, i) {
    if (null == i && (i = 1 / 0), e === ov)
      for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);
    else
      for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) t(a[r], r)
  }

  function ao(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]););
    if (e) {
      var i = [];
      return f(e, function(t, e) {
        i.push(e)
      }), i
    }
  }

  function oo(t, e, n, i, r, a) {
    var o = Za(t),
      s = {},
      l = [],
      h = [],
      u = t.subType,
      c = R(["pie", "map", "funnel"]),
      d = R(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
    if (o && null != d.get(u)) {
      var p = t.ecModel,
        g = sv(p).datasetMap,
        v = e.uid + "_" + r,
        m = g.get(v) || g.set(v, {
          categoryWayDim: 1,
          valueWayDim: 0
        });
      f(o.coordSysDims, function(t) {
        if (null == o.firstCategoryDimIndex) {
          var e = m.valueWayDim++;
          s[t] = e, h.push(e)
        } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);
        else {
          var e = m.categoryWayDim++;
          s[t] = e, h.push(e)
        }
      })
    } else if (null != c.get(u)) {
      for (var y, _ = 0; 5 > _ && null == y; _++) ho(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
      if (null != y) {
        s.value = y;
        var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
        h.push(x), l.push(x)
      }
    }
    return l.length && (s.itemName = l), h.length && (s.seriesName = h), s
  }

  function so(t) {
    var e = t.option,
      n = e.data;
    return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
  }

  function lo(t, e) {
    return ho(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
  }

  function ho(t, e, n, i, r, a) {
    function o(t) {
      return null != t && isFinite(t) && "" !== t ? !1 : w(t) && "-" !== t ? !0 : void 0
    }
    var s, l = 5;
    if (M(t)) return !1;
    var h;
    if (i && (h = i[a], h = b(h) ? h.name : h), e === tv)
      if (n === ov) {
        for (var u = t[a], c = 0; c < (u || []).length && l > c; c++)
          if (null != (s = o(u[r + c]))) return s
      } else
        for (var c = 0; c < t.length && l > c; c++) {
          var d = t[r + c];
          if (d && null != (s = o(d[a]))) return s
        } else if (e === ev) {
          if (!h) return;
          for (var c = 0; c < t.length && l > c; c++) {
            var f = t[c];
            if (f && null != (s = o(f[h]))) return s
          }
        } else if (e === nv) {
      if (!h) return;
      var u = t[h];
      if (!u || M(u)) return !1;
      for (var c = 0; c < u.length && l > c; c++)
        if (null != (s = o(u[c]))) return s
    } else if (e === Jg)
      for (var c = 0; c < t.length && l > c; c++) {
        var f = t[c],
          p = vi(f);
        if (!_(p)) return !1;
        if (null != (s = o(p[a]))) return s
      }
    return !1
  }

  function uo(t, e) {
    if (e) {
      var n = e.seiresIndex,
        i = e.seriesId,
        r = e.seriesName;
      return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
    }
  }

  function co(t, e) {
    var n = t.color && !t.colorLayer;
    f(e, function(e, a) {
      "colorLayer" === a && n || Ug.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e))
    })
  }

  function fo(t) {
    t = t, this.option = {}, this.option[lv] = 1, this._componentsMap = R({
      series: []
    }), this._seriesIndices, this._seriesIndicesMap, co(t, this._theme.option), r(t, Zg, !1), this.mergeOption(t)
  }

  function po(t, e) {
    _(e) || (e = e ? [e] : []);
    var n = {};
    return f(e, function(e) {
      n[e] = (t.get(e) || []).slice()
    }), n
  }

  function go(t, e, n) {
    var i = e.type ? e.type : n ? n.subType : Ug.determineSubType(t, e);
    return i
  }

  function vo(t, e) {
    t._seriesIndicesMap = R(t._seriesIndices = p(e, function(t) {
      return t.componentIndex
    }) || [])
  }

  function mo(t, e) {
    return e.hasOwnProperty("subType") ? v(t, function(t) {
      return t.subType === e.subType
    }) : t
  }

  function yo(t) {
    f(uv, function(e) {
      this[e] = m(t[e], t)
    }, this)
  }

  function _o() {
    this._coordinateSystems = []
  }

  function xo(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
  }

  function wo(t, e, n) {
    var i, r, a = [],
      o = [],
      s = t.timeline;
    if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};
      var l = t.media;
      dv(l, function(t) {
        t && t.option && (t.query ? o.push(t) : i || (i = t))
      })
    }
    return r || (r = t), r.timeline || (r.timeline = s), dv([r].concat(a).concat(p(o, function(t) {
      return t.option
    })), function(t) {
      dv(e, function(e) {
        e(t, n)
      })
    }), {
      baseOption: r,
      timelineOptions: a,
      mediaDefault: i,
      mediaList: o
    }
  }

  function bo(t, e, n) {
    var i = {
        width: e,
        height: n,
        aspectratio: e / n
      },
      r = !0;
    return f(t, function(t, e) {
      var n = e.match(vv);
      if (n && n[1] && n[2]) {
        var a = n[1],
          o = n[2].toLowerCase();
        So(i[o], t, a) || (r = !1)
      }
    }), r
  }

  function So(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? e >= t : t === e
  }

  function Mo(t, e) {
    return t.join(",") === e.join(",")
  }

  function Io(t, e) {
    e = e || {}, dv(e, function(e, n) {
      if (null != e) {
        var i = t[n];
        if (Ug.hasClass(n)) {
          e = pi(e), i = pi(i);
          var r = yi(i, e);
          t[n] = pv(r, function(t) {
            return t.option && t.exist ? gv(t.exist, t.option, !0) : t.exist || t.option
          })
        } else t[n] = gv(i, e, !0)
      }
    })
  }

  function To(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0, i = _v.length; i > n; n++) {
        var a = _v[n],
          o = e.normal,
          s = e.emphasis;
        o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
      }
  }

  function Co(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
        r = t[e].emphasis;
      i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
    }
  }

  function Do(t) {
    Co(t, "itemStyle"), Co(t, "lineStyle"), Co(t, "areaStyle"), Co(t, "label"), Co(t, "labelLine"), Co(t, "upperLabel"), Co(t, "edgeLabel")
  }

  function ko(t, e) {
    var n = yv(t) && t[e],
      i = yv(n) && n.textStyle;
    if (i)
      for (var r = 0, a = Hf.length; a > r; r++) {
        var e = Hf[r];
        i.hasOwnProperty(e) && (n[e] = i[e])
      }
  }

  function Ao(t) {
    t && (Do(t), ko(t, "label"), t.emphasis && ko(t.emphasis, "label"))
  }

  function Po(t) {
    if (yv(t)) {
      To(t), Do(t), ko(t, "label"), ko(t, "upperLabel"), ko(t, "edgeLabel"), t.emphasis && (ko(t.emphasis, "label"), ko(t.emphasis, "upperLabel"), ko(t.emphasis, "edgeLabel"));
      var e = t.markPoint;
      e && (To(e), Ao(e));
      var n = t.markLine;
      n && (To(n), Ao(n));
      var i = t.markArea;
      i && Ao(i);
      var r = t.data;
      if ("graph" === t.type) {
        r = r || t.nodes;
        var a = t.links || t.edges;
        if (a && !M(a))
          for (var o = 0; o < a.length; o++) Ao(a[o]);
        f(t.categories, function(t) {
          Do(t)
        })
      }
      if (r && !M(r))
        for (var o = 0; o < r.length; o++) Ao(r[o]);
      var e = t.markPoint;
      if (e && e.data)
        for (var s = e.data, o = 0; o < s.length; o++) Ao(s[o]);
      var n = t.markLine;
      if (n && n.data)
        for (var l = n.data, o = 0; o < l.length; o++) _(l[o]) ? (Ao(l[o][0]), Ao(l[o][1])) : Ao(l[o]);
      "gauge" === t.type ? (ko(t, "axisLabel"), ko(t, "title"), ko(t, "detail")) : "treemap" === t.type ? (Co(t.breadcrumb, "itemStyle"), f(t.levels, function(t) {
        Do(t)
      })) : "tree" === t.type && Do(t.leaves)
    }
  }

  function Lo(t) {
    return _(t) ? t : t ? [t] : []
  }

  function Oo(t) {
    return (_(t) ? t[0] : t) || {}
  }

  function Bo(t, e) {
    e = e.split(",");
    for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++);
    return n
  }

  function Eo(t, e, n, i) {
    e = e.split(",");
    for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
    (i || null == a[e[o]]) && (a[e[o]] = n)
  }

  function zo(t) {
    f(wv, function(e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
    })
  }

  function Ro(t) {
    f(t, function(e, n) {
      var i = [],
        r = [0 / 0, 0 / 0],
        a = [e.stackResultDimension, e.stackedOverDimension],
        o = e.data,
        s = e.isStackedByIndex,
        l = o.map(a, function(a, l, h) {
          var u = o.get(e.stackedDimension, h);
          if (isNaN(u)) return r;
          var c, d;
          s ? d = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);
          for (var f = 0 / 0, p = n - 1; p >= 0; p--) {
            var g = t[p];
            if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
              var v = g.data.getByRawIndex(g.stackResultDimension, d);
              if (u >= 0 && v > 0 || 0 >= u && 0 > v) {
                u += v, f = v;
                break
              }
            }
          }
          return i[0] = u, i[1] = f, i
        });
      o.hostModel.setData(l), e.data = l
    })
  }

  function Fo(t, e) {
    Ka.isInstance(t) || (t = Ka.seriesDataToSource(t)), this._source = t;
    var n = this._data = t.data,
      i = t.sourceFormat;
    i === rv && (this._offset = 0, this._dimSize = e, this._data = n);
    var r = Tv[i === tv ? i + "_" + t.seriesLayoutBy : i];
    o(this, r)
  }

  function No() {
    return this._data.length
  }

  function Ho(t) {
    return this._data[t]
  }

  function Vo(t) {
    for (var e = 0; e < t.length; e++) this._data.push(t[e])
  }

  function Wo(t, e, n) {
    return null != n ? t[n] : t
  }

  function Go(t, e, n, i) {
    return Xo(t[i], this._dimensionInfos[e])
  }

  function Xo(t, e) {
    var n = e && e.type;
    if ("ordinal" === n) {
      var i = e && e.ordinalMeta;
      return i ? i.parseAndCollect(t) : t
    }
    return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Pa(t)), null == t || "" === t ? 0 / 0 : +t
  }

  function Yo(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);
      if (null != i) {
        var r, a, o = t.getProvider().getSource().sourceFormat,
          s = t.getDimensionInfo(n);
        return s && (r = s.name, a = s.index), Cv[o](i, e, a, r)
      }
    }
  }

  function qo(t, e, n) {
    if (t) {
      var i = t.getProvider().getSource().sourceFormat;
      if (i === Jg || i === ev) {
        var r = t.getRawDataItem(e);
        return i !== Jg || b(r) || (r = null), r ? r[n] : void 0
      }
    }
  }

  function Uo(t) {
    return new jo(t)
  }

  function jo(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
  }

  function Zo(t, e, n, i, r, a) {
    Lv.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({
      start: n,
      end: i,
      count: i - n,
      next: Lv.next
    }, t.context)
  }

  function $o(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
    var n, i;
    !e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), _(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
    var r = t._downstream;
    return r && r.dirty(), i
  }

  function Ko(t) {
    var e = t.name;
    xi(t) || (t.name = Qo(t) || e)
  }

  function Qo(t) {
    var e = t.getRawData(),
      n = e.mapDimension("seriesName", !0),
      i = [];
    return f(n, function(t) {
      var n = e.getDimensionInfo(t);
      n.displayName && i.push(n.displayName)
    }), i.join(" ")
  }

  function Jo(t) {
    return t.model.getRawData().count()
  }

  function ts(t) {
    var e = t.model;
    return e.setData(e.getRawData().cloneShallow()), es
  }

  function es(t, e) {
    t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
  }

  function ns(t, e) {
    f(t.CHANGABLE_METHODS, function(n) {
      t.wrapMethod(n, y(is, e))
    })
  }

  function is(t) {
    var e = rs(t);
    e && e.setOutputEnd(this.count())
  }

  function rs(t) {
    var e = (t.ecModel || {}).scheduler,
      n = e && e.getPipeline(t.uid);
    if (n) {
      var i = n.currentTask;
      if (i) {
        var r = i.agentStubMap;
        r && (i = r.get(t.uid))
      }
      return i
    }
  }

  function as() {
    this.group = new Gd, this.uid = _a("viewChart"), this.renderTask = Uo({
      plan: ls,
      reset: hs
    }), this.renderTask.context = {
      view: this
    }
  }

  function os(t, e) {
    if (t && (t.trigger(e), "group" === t.type))
      for (var n = 0; n < t.childCount(); n++) os(t.childAt(n), e)
  }

  function ss(t, e, n) {
    var i = bi(t, e);
    null != i ? f(pi(i), function(e) {
      os(t.getItemGraphicEl(e), n)
    }) : t.eachItemGraphicEl(function(t) {
      os(t, n)
    })
  }

  function ls(t) {
    return Nv(t.model)
  }

  function hs(t) {
    var e = t.model,
      n = t.ecModel,
      i = t.api,
      r = t.payload,
      a = e.pipelineContext.progressiveRender,
      o = t.view,
      s = r && Fv(r).updateMethod,
      l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return "render" !== l && o[l](e, n, i, r), Vv[l]
  }

  function us(t, e, n) {
    function i() {
      u = (new Date).getTime(), c = null, t.apply(o, s || [])
    }
    var r, a, o, s, l, h = 0,
      u = 0,
      c = null;
    e = e || 0;
    var d = function() {
      r = (new Date).getTime(), o = this, s = arguments;
      var t = l || e,
        d = l || n;
      l = null, a = r - (d ? h : u) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), h = r
    };
    return d.clear = function() {
      c && (clearTimeout(c), c = null)
    }, d.debounceNextCall = function(t) {
      l = t
    }, d
  }

  function cs(t, e, n, i) {
    var r = t[e];
    if (r) {
      var a = r[Wv] || r,
        o = r[Xv],
        s = r[Gv];
      if (s !== n || o !== i) {
        if (null == n || !i) return t[e] = a;
        r = t[e] = us(a, n, "debounce" === i), r[Wv] = a, r[Xv] = i, r[Gv] = n
      }
      return r
    }
  }

  function ds(t, e, n, i) {
    this.ecInstance = t, this.api = e, this.unfinished;
    var n = this._dataProcessorHandlers = n.slice(),
      i = this._visualHandlers = i.slice();
    this._allHandlers = n.concat(i), this._stageTaskMap = R()
  }

  function fs(t, e, n, i, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
    }
    r = r || {};
    var o;
    f(e, function(e) {
      if (!r.visualType || r.visualType === e.visualType) {
        var s = t._stageTaskMap.get(e.uid),
          l = s.seriesTaskMap,
          h = s.overallTask;
        if (h) {
          var u, c = h.agentStubMap;
          c.each(function(t) {
            a(r, t) && (t.dirty(), u = !0)
          }), u && h.dirty(), Kv(h, i);
          var d = t.getPerformArgs(h, r.block);
          c.each(function(t) {
            t.perform(d)
          }), o |= h.perform(d)
        } else l && l.each(function(s) {
          a(r, s) && s.dirty();
          var l = t.getPerformArgs(s, r.block);
          l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), Kv(s, i), o |= s.perform(l)
        })
      }
    }), t.unfinished |= o
  }

  function ps(t, e, n, i, r) {
    function a(n) {
      var a = n.uid,
        s = o.get(a) || o.set(a, Uo({
          plan: xs,
          reset: ws,
          count: Ss
        }));
      s.context = {
        model: n,
        ecModel: i,
        api: r,
        useClearVisual: e.isVisual && !e.isLayout,
        plan: e.plan,
        reset: e.reset,
        scheduler: t
      }, Ms(t, n, s)
    }
    var o = n.seriesTaskMap || (n.seriesTaskMap = R()),
      s = e.seriesType,
      l = e.getTargetSeries;
    e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
    var h = t._pipelineMap;
    o.each(function(t, e) {
      h.get(e) || (t.dispose(), o.removeKey(e))
    })
  }

  function gs(t, e, n, i, r) {
    function a(e) {
      var n = e.uid,
        i = s.get(n);
      i || (i = s.set(n, Uo({
        reset: ms,
        onDirty: _s
      })), o.dirty()), i.context = {
        model: e,
        overallProgress: u,
        modifyOutputEnd: c
      }, i.agent = o, i.__block = u, Ms(t, e, i)
    }
    var o = n.overallTask = n.overallTask || Uo({
      reset: vs
    });
    o.context = {
      ecModel: i,
      api: r,
      overallReset: e.overallReset,
      scheduler: t
    };
    var s = o.agentStubMap = o.agentStubMap || R(),
      l = e.seriesType,
      h = e.getTargetSeries,
      u = !0,
      c = e.modifyOutputEnd;
    l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : (u = !1, f(i.getSeries(), a));
    var d = t._pipelineMap;
    s.each(function(t, e) {
      d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
    })
  }

  function vs(t) {
    t.overallReset(t.ecModel, t.api, t.payload)
  }

  function ms(t) {
    return t.overallProgress && ys
  }

  function ys() {
    this.agent.dirty(), this.getDownstream().dirty()
  }

  function _s() {
    this.agent && this.agent.dirty()
  }

  function xs(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
  }

  function ws(t) {
    t.useClearVisual && t.data.clearAllVisual();
    var e = t.resetDefines = pi(t.reset(t.model, t.ecModel, t.api, t.payload));
    return e.length > 1 ? p(e, function(t, e) {
      return bs(e)
    }) : Qv
  }

  function bs(t) {
    return function(e, n) {
      var i = n.data,
        r = n.resetDefines[t];
      if (r && r.dataEach)
        for (var a = e.start; a < e.end; a++) r.dataEach(i, a);
      else r && r.progress && r.progress(e, i)
    }
  }

  function Ss(t) {
    return t.data.count()
  }

  function Ms(t, e, n) {
    var i = e.uid,
      r = t._pipelineMap.get(i);
    !r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r
  }

  function Is(t) {
    Jv = null;
    try {
      t(tm, em)
    } catch (e) {}
    return Jv
  }

  function Ts(t, e) {
    for (var n in e.prototype) t[n] = F
  }

  function Cs(t) {
    if (w(t)) {
      var e = new DOMParser;
      t = e.parseFromString(t, "text/xml")
    }
    for (9 === t.nodeType && (t = t.firstChild);
      "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
    return t
  }

  function Ds() {
    this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
  }

  function ks(t, e) {
    for (var n = t.firstChild; n;) {
      if (1 === n.nodeType) {
        var i = n.getAttribute("offset");
        i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
        var r = n.getAttribute("stop-color") || "#000000";
        e.addColorStop(i, r)
      }
      n = n.nextSibling
    }
  }

  function As(t, e) {
    t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle))
  }

  function Ps(t) {
    for (var e = O(t).split(hm), n = [], i = 0; i < e.length; i += 2) {
      var r = parseFloat(e[i]),
        a = parseFloat(e[i + 1]);
      n.push([r, a])
    }
    return n
  }

  function Ls(t, e, n, i) {
    var r = e.__inheritedStyle || {},
      a = "text" === e.type;
    if (1 === t.nodeType && (Bs(t, e), o(r, Es(t)), !i))
      for (var s in dm)
        if (dm.hasOwnProperty(s)) {
          var l = t.getAttribute(s);
          null != l && (r[dm[s]] = l)
        }
    var h = a ? "textFill" : "fill",
      u = a ? "textStroke" : "stroke";
    e.style = e.style || new $d;
    var c = e.style;
    null != r.fill && c.set(h, Os(r.fill, n)), null != r.stroke && c.set(u, Os(r.stroke, n)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function(t) {
      var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
      null != r[t] && c.set(e, parseFloat(r[t]))
    }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function(t) {
      null != r[t] && c.set(t, r[t])
    }), r.lineDash && (e.style.lineDash = O(r.lineDash).split(hm)), c[u] && "none" !== c[u] && (e[u] = !0), e.__inheritedStyle = r
  }

  function Os(t, e) {
    var n = e && t && t.match(fm);
    if (n) {
      var i = O(n[1]),
        r = e[i];
      return r
    }
    return t
  }

  function Bs(t, e) {
    var n = t.getAttribute("transform");
    if (n) {
      n = n.replace(/,/g, " ");
      var i = null,
        r = [];
      n.replace(pm, function(t, e, n) {
        r.push(e, n)
      });
      for (var a = r.length - 1; a > 0; a -= 2) {
        var o = r[a],
          s = r[a - 1];
        switch (i = i || ce(), s) {
          case "translate":
            o = O(o).split(hm), ge(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
            break;
          case "scale":
            o = O(o).split(hm), me(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
            break;
          case "rotate":
            o = O(o).split(hm), ve(i, i, parseFloat(o[0]));
            break;
          case "skew":
            o = O(o).split(hm), console.warn("Skew transform is not supported yet");
            break;
          case "matrix":
            var o = O(o).split(hm);
            i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5])
        }
      }
    }
    e.setLocalTransform(i)
  }

  function Es(t) {
    var e = t.getAttribute("style"),
      n = {};
    if (!e) return n;
    var i = {};
    gm.lastIndex = 0;
    for (var r; null != (r = gm.exec(e));) i[r[1]] = r[2];
    for (var a in dm) dm.hasOwnProperty(a) && null != i[a] && (n[dm[a]] = i[a]);
    return n
  }

  function zs(t, e, n) {
    var i = e / t.width,
      r = n / t.height,
      a = Math.min(i, r),
      o = [a, a],
      s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];
    return {
      scale: o,
      position: s
    }
  }

  function Rs(t) {
    return function(e, n, i) {
      e = e && e.toLowerCase(), sd.prototype[t].call(this, e, n, i)
    }
  }

  function Fs() {
    sd.call(this)
  }

  function Ns(t, e, n) {
    function r(t, e) {
      return t.__prio - e.__prio
    }
    n = n || {}, "string" == typeof e && (e = Um[e]), this.id, this.group, this._dom = t;
    var a = "canvas",
      o = this._zr = fi(t, {
        renderer: n.renderer || a,
        devicePixelRatio: n.devicePixelRatio,
        width: n.width,
        height: n.height
      });
    this._throttledZrFlush = us(m(o.flush, o), 17);
    var e = i(e);
    e && Sv(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new _o;
    var s = this._api = il(this);
    an(qm, r), an(Gm, r), this._scheduler = new ds(this, s, Gm, qm), sd.call(this, this._ecEventProcessor = new rl), this._messageCenter = new Fs, this._initEvents(), this.resize = m(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), Us(o, this), B(this)
  }

  function Hs(t, e, n) {
    var i, r = this._model,
      a = this._coordSysMgr.getCoordinateSystems();
    e = Mi(r, e);
    for (var o = 0; o < a.length; o++) {
      var s = a[o];
      if (s[t] && null != (i = s[t](r, e, n))) return i
    }
  }

  function Vs(t) {
    var e = t._model,
      n = t._scheduler;
    n.restorePipelines(e), n.prepareStageTasks(), js(t, "component", e, n), js(t, "chart", e, n), n.plan()
  }

  function Ws(t, e, n, i, r) {
    function a(i) {
      i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
    }
    var o = t._model;
    if (!i) return void xm(t._componentsViews.concat(t._chartsViews), a);
    var s = {};
    s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
    var l = {
      mainType: i,
      query: s
    };
    r && (l.subType = r);
    var h = n.excludeSeriesId;
    null != h && (h = R(pi(h))), o && o.eachComponent(l, function(e) {
      h && null != h.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
    }, t)
  }

  function Gs(t, e) {
    var n = t._chartsMap,
      i = t._scheduler;
    e.eachSeries(function(t) {
      i.updateStreamModes(t, n[t.__viewId])
    })
  }

  function Xs(t, e) {
    var n = t.type,
      i = t.escapeConnect,
      r = Vm[n],
      a = r.actionInfo,
      l = (a.update || "update").split(":"),
      h = l.pop();
    l = null != l[0] && Sm(l[0]), this[Em] = !0;
    var u = [t],
      c = !1;
    t.batch && (c = !0, u = p(t.batch, function(e) {
      return e = s(o({}, e), t), e.batch = null, e
    }));
    var d, f = [],
      g = "highlight" === n || "downplay" === n;
    xm(u, function(t) {
      d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? Ws(this, h, t, "series") : l && Ws(this, h, t, l.main, l.sub)
    }, this), "none" === h || g || l || (this[zm] ? (Vs(this), Nm.update.call(this, t), this[zm] = !1) : Nm[h].call(this, t)), d = c ? {
      type: a.event || n,
      escapeConnect: i,
      batch: f
    } : f[0], this[Em] = !1, !e && this._messageCenter.trigger(d.type, d)
  }

  function Ys(t) {
    for (var e = this._pendingActions; e.length;) {
      var n = e.shift();
      Xs.call(this, n, t)
    }
  }

  function qs(t) {
    !t && this.trigger("updated")
  }

  function Us(t, e) {
    t.on("rendered", function() {
      e.trigger("rendered"), !t.animation.isFinished() || e[zm] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
    })
  }

  function js(t, e, n, i) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
        r = s[e];
      if (!r) {
        var u = Sm(t.type),
          c = a ? Ev.getClass(u.main, u.sub) : as.getClass(u.sub);
        r = new c, r.init(n, h), s[e] = r, o.push(r), l.add(r.group)
      }
      t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
        mainType: t.mainType,
        index: t.componentIndex
      }, !a && i.prepareView(r, t, n, h)
    }
    for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
    a ? n.eachComponent(function(t, e) {
      "series" !== t && r(e)
    }) : n.eachSeries(r);
    for (var u = 0; u < o.length;) {
      var c = o[u];
      c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, h), o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
    }
  }

  function Zs(t) {
    t.clearColorPalette(), t.eachSeries(function(t) {
      t.clearColorPalette()
    })
  }

  function $s(t, e, n, i) {
    Ks(t, e, n, i), xm(t._chartsViews, function(t) {
      t.__alive = !1
    }), Qs(t, e, n, i), xm(t._chartsViews, function(t) {
      t.__alive || t.remove(e, n)
    })
  }

  function Ks(t, e, n, i, r) {
    xm(r || t._componentsViews, function(t) {
      var r = t.__model;
      t.render(r, e, n, i), nl(r, t)
    })
  }

  function Qs(t, e, n, i, r) {
    var a, o = t._scheduler;
    e.eachSeries(function(e) {
      var n = t._chartsMap[e.__viewId];
      n.__alive = !0;
      var s = n.renderTask;
      o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), nl(e, n), el(e, n)
    }), o.unfinished |= a, tl(t._zr, e), Uv(t._zr.dom, e)
  }

  function Js(t, e) {
    xm(Ym, function(n) {
      n(t, e)
    })
  }

  function tl(t, e) {
    var n = t.storage,
      i = 0;
    n.traverse(function(t) {
      t.isGroup || i++
    }), i > e.get("hoverLayerThreshold") && !Gc.node && n.traverse(function(t) {
      t.isGroup || (t.useHoverLayer = !0)
    })
  }

  function el(t, e) {
    var n = t.get("blendMode") || null;
    e.group.traverse(function(t) {
      t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
        t.setStyle("blend", n)
      })
    })
  }

  function nl(t, e) {
    var n = t.get("z"),
      i = t.get("zlevel");
    e.group.traverse(function(t) {
      "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
    })
  }

  function il(t) {
    var e = t._coordSysMgr;
    return o(new yo(t), {
      getCoordinateSystems: m(e.getCoordinateSystems, e),
      getComponentByElement: function(e) {
        for (; e;) {
          var n = e.__ecComponentInfo;
          if (null != n) return t._model.getComponent(n.mainType, n.index);
          e = e.parent
        }
      }
    })
  }

  function rl() {
    this.eventInfo
  }

  function al(t) {
    function e(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i[a] = e
      }
    }
    var n = 0,
      i = 1,
      r = 2,
      a = "__connectUpdateStatus";
    xm(Wm, function(o, s) {
      t._messageCenter.on(s, function(o) {
        if ($m[t.group] && t[a] !== n) {
          if (o && o.escapeConnect) return;
          var s = t.makeActionFromEvent(o),
            l = [];
          xm(Zm, function(e) {
            e !== t && e.group === t.group && l.push(e)
          }), e(l, n), xm(l, function(t) {
            t[a] !== i && t.dispatchAction(s)
          }), e(l, r)
        }
      })
    })
  }

  function ol(t, e, n) {
    var i = ul(t);
    if (i) return i;
    var r = new Ns(t, e, n);
    return r.id = "ec_" + Km++, Zm[r.id] = r, Ti(t, Jm, r.id), al(r), r
  }

  function sl(t) {
    if (_(t)) {
      var e = t;
      t = null, xm(e, function(e) {
        null != e.group && (t = e.group)
      }), t = t || "g_" + Qm++, xm(e, function(e) {
        e.group = t
      })
    }
    return $m[t] = !0, t
  }

  function ll(t) {
    $m[t] = !1
  }

  function hl(t) {
    "string" == typeof t ? t = Zm[t] : t instanceof Ns || (t = ul(t)), t instanceof Ns && !t.isDisposed() && t.dispose()
  }

  function ul(t) {
    return Zm[Ci(t, Jm)]
  }

  function cl(t) {
    return Zm[t]
  }

  function dl(t, e) {
    Um[t] = e
  }

  function fl(t) {
    Xm.push(t)
  }

  function pl(t, e) {
    wl(Gm, t, e, Cm)
  }

  function gl(t) {
    Ym.push(t)
  }

  function vl(t, e, n) {
    "function" == typeof e && (n = e, e = "");
    var i = bm(t) ? t.type : [t, t = {
      event: e
    }][0];
    t.event = (t.event || i).toLowerCase(), e = t.event, _m(Rm.test(i) && Rm.test(e)), Vm[i] || (Vm[i] = {
      action: n,
      actionInfo: t
    }), Wm[e] = i
  }

  function ml(t, e) {
    _o.register(t, e)
  }

  function yl(t) {
    var e = _o.get(t);
    return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
  }

  function _l(t, e) {
    wl(qm, t, e, km, "layout")
  }

  function xl(t, e) {
    wl(qm, t, e, Pm, "visual")
  }

  function wl(t, e, n, i, r) {
    (wm(e) || bm(e)) && (n = e, e = i);
    var a = ds.wrapStageHandler(n, r);
    return a.__prio = e, a.__raw = n, t.push(a), a
  }

  function bl(t, e) {
    jm[t] = e
  }

  function Sl(t) {
    return Ug.extend(t)
  }

  function Ml(t) {
    return Ev.extend(t)
  }

  function Il(t) {
    return Bv.extend(t)
  }

  function Tl(t) {
    return as.extend(t)
  }

  function Cl(t) {
    n("createCanvas", t)
  }

  function Dl(t, e, n) {
    mm.registerMap(t, e, n)
  }

  function kl(t) {
    var e = mm.retrieveMap(t);
    return e && e[0] && {
      geoJson: e[0].geoJSON,
      specialAreas: e[0].specialAreas
    }
  }

  function Al(t, e, n) {
    n = n || {};
    var i, r, a, o, s = n.byIndex,
      l = n.stackedCoordDimension,
      h = !(!t || !t.get("stack"));
    if (f(e, function(t, n) {
        w(t) && (e[n] = t = {
          name: t
        }), h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
      }), !r || s || i || (s = !0), r) {
      a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);
      var u = r.coordDim,
        c = r.type,
        d = 0;
      f(e, function(t) {
        t.coordDim === u && d++
      }), e.push({
        name: a,
        coordDim: u,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      }), d++, e.push({
        name: o,
        coordDim: o,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      })
    }
    return {
      stackedDimension: r && r.name,
      stackedByDimension: i && i.name,
      isStackedByIndex: s,
      stackedOverDimension: o,
      stackResultDimension: a
    }
  }

  function Pl(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension")
  }

  function Ll(t, e) {
    return Pl(t, e) ? t.getCalculationInfo("stackResultDimension") : e
  }

  function Ol(t) {
    return t.get("stack") || ny + t.seriesIndex
  }

  function Bl(t) {
    return t.dim + t.index
  }

  function El(t, e) {
    var n = [];
    return e.eachSeriesByType(t, function(t) {
      Hl(t) && !Vl(t) && n.push(t)
    }), n
  }

  function zl(t) {
    var e = [];
    return f(t, function(t) {
      var n = t.getData(),
        i = t.coordinateSystem,
        r = i.getBaseAxis(),
        a = r.getExtent(),
        o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
        s = Ma(t.get("barWidth"), o),
        l = Ma(t.get("barMaxWidth"), o),
        h = t.get("barGap"),
        u = t.get("barCategoryGap");
      e.push({
        bandWidth: o,
        barWidth: s,
        barMaxWidth: l,
        barGap: h,
        barCategoryGap: u,
        axisKey: Bl(r),
        stackId: Ol(t)
      })
    }), Rl(e)
  }

  function Rl(t) {
    var e = {};
    f(t, function(t) {
      var n = t.axisKey,
        i = t.bandWidth,
        r = e[n] || {
          bandWidth: i,
          remainedWidth: i,
          autoWidthCount: 0,
          categoryGap: "20%",
          gap: "30%",
          stacks: {}
        },
        a = r.stacks;
      e[n] = r;
      var o = t.stackId;
      a[o] || r.autoWidthCount++, a[o] = a[o] || {
        width: 0,
        maxWidth: 0
      };
      var s = t.barWidth;
      s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
      var l = t.barMaxWidth;
      l && (a[o].maxWidth = l);
      var h = t.barGap;
      null != h && (r.gap = h);
      var u = t.barCategoryGap;
      null != u && (r.categoryGap = u)
    });
    var n = {};
    return f(e, function(t, e) {
      n[e] = {};
      var i = t.stacks,
        r = t.bandWidth,
        a = Ma(t.categoryGap, r),
        o = Ma(t.gap, 1),
        s = t.remainedWidth,
        l = t.autoWidthCount,
        h = (s - a) / (l + (l - 1) * o);
      h = Math.max(h, 0), f(i, function(t) {
        var e = t.maxWidth;
        e && h > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--)
      }), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);
      var u, c = 0;
      f(i, function(t) {
        t.width || (t.width = h), u = t, c += t.width * (1 + o)
      }), u && (c -= u.width * o);
      var d = -c / 2;
      f(i, function(t, i) {
        n[e][i] = n[e][i] || {
          offset: d,
          width: t.width
        }, d += t.width * (1 + o)
      })
    }), n
  }

  function Fl(t, e, n) {
    if (t && e) {
      var i = t[Bl(e)];
      return null != i && null != n && (i = i[Ol(n)]), i
    }
  }

  function Nl(t, e) {
    var n = El(t, e),
      i = zl(n),
      r = {};
    f(n, function(t) {
      var e = t.getData(),
        n = t.coordinateSystem,
        a = n.getBaseAxis(),
        o = Ol(t),
        s = i[Bl(a)][o],
        l = s.offset,
        h = s.width,
        u = n.getOtherAxis(a),
        c = t.get("barMinHeight") || 0;
      r[o] = r[o] || [], e.setLayout({
        offset: l,
        size: h
      });
      for (var d = e.mapDimension(u.dim), f = e.mapDimension(a.dim), p = Pl(e, d), g = u.isHorizontal(), v = Wl(a, u, p), m = 0, y = e.count(); y > m; m++) {
        var _ = e.get(d, m),
          x = e.get(f, m);
        if (!isNaN(_)) {
          var w = _ >= 0 ? "p" : "n",
            b = v;
          p && (r[o][x] || (r[o][x] = {
            p: v,
            n: v
          }), b = r[o][x][w]);
          var S, M, I, T;
          if (g) {
            var C = n.dataToPoint([_, x]);
            S = b, M = C[1] + l, I = C[0] - v, T = h, Math.abs(I) < c && (I = (0 > I ? -1 : 1) * c), p && (r[o][x][w] += I)
          } else {
            var C = n.dataToPoint([x, _]);
            S = C[0] + l, M = b, I = h, T = C[1] - v, Math.abs(T) < c && (T = (0 >= T ? -1 : 1) * c), p && (r[o][x][w] += T)
          }
          e.setItemLayout(m, {
            x: S,
            y: M,
            width: I,
            height: T
          })
        }
      }
    }, this)
  }

  function Hl(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
  }

  function Vl(t) {
    return t.pipelineContext && t.pipelineContext.large
  }

  function Wl(t, e) {
    var n, i, r = e.getGlobalExtent();
    r[0] > r[1] ? (n = r[1], i = r[0]) : (n = r[0], i = r[1]);
    var a = e.toGlobalCoord(e.dataToCoord(0));
    return n > a && (a = n), a > i && (a = i), a
  }

  function Gl(t) {
    this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
  }

  function Xl(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
  }

  function Yl(t) {
    return t._map || (t._map = R(t.categories))
  }

  function ql(t) {
    return b(t) && null != t.value ? t.value : t + ""
  }

  function Ul(t, e, n, i) {
    var r = {},
      a = t[1] - t[0],
      o = r.interval = Ba(a / e, !0);
    null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
    var s = r.intervalPrecision = jl(o),
      l = r.niceTickExtent = [hy(Math.ceil(t[0] / o) * o, s), hy(Math.floor(t[1] / o) * o, s)];
    return $l(l, t), r
  }

  function jl(t) {
    return Ta(t) + 2
  }

  function Zl(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0])
  }

  function $l(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Zl(t, 0, e), Zl(t, 1, e), t[0] > t[1] && (t[0] = t[1])
  }

  function Kl(t, e, n, i) {
    var r = [];
    if (!t) return r;
    var a = 1e4;
    e[0] < n[0] && r.push(e[0]);
    for (var o = n[0]; o <= n[1] && (r.push(o), o = hy(o + t, i), o !== r[r.length - 1]);)
      if (r.length > a) return [];
    return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
  }

  function Ql(t, e) {
    return Iy(t, My(e))
  }

  function Jl(t, e) {
    var n, i, r, a = t.type,
      o = e.getMin(),
      s = e.getMax(),
      l = null != o,
      h = null != s,
      u = t.getExtent();
    "ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), _(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = Ma(i[0], 1), i[1] = Ma(i[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : u[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : u[1] + i[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({
      min: u[0],
      max: u[1]
    })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
      min: u[0],
      max: u[1]
    })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(T(o) || T(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !h && (s = 0));
    var c = e.ecModel;
    if (c && "time" === a) {
      var d, p = El("bar", c);
      if (f(p, function(t) {
          d |= t.getBaseAxis() === e.axis
        }), d) {
        var g = zl(p),
          v = th(o, s, e, g);
        o = v.min, s = v.max
      }
    }
    return [o, s]
  }

  function th(t, e, n, i) {
    var r = n.axis.getExtent(),
      a = r[1] - r[0],
      o = Fl(i, n.axis);
    if (void 0 === o) return {
      min: t,
      max: e
    };
    var s = 1 / 0;
    f(o, function(t) {
      s = Math.min(t.offset, s)
    });
    var l = -1 / 0;
    f(o, function(t) {
      l = Math.max(t.offset + t.width, l)
    }), s = Math.abs(s), l = Math.abs(l);
    var h = s + l,
      u = e - t,
      c = 1 - (s + l) / a,
      d = u / c - u;
    return e += d * (l / h), t -= d * (s / h), {
      min: t,
      max: e
    }
  }

  function eh(t, e) {
    var n = Jl(t, e),
      i = null != e.getMin(),
      r = null != e.getMax(),
      a = e.get("splitNumber");
    "log" === t.type && (t.base = e.get("logBase"));
    var o = t.type;
    t.setExtent(n[0], n[1]), t.niceExtent({
      splitNumber: a,
      fixMin: i,
      fixMax: r,
      minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
      maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
    });
    var s = e.get("interval");
    null != s && t.setInterval && t.setInterval(s)
  }

  function nh(t, e) {
    if (e = e || t.get("type")) switch (e) {
      case "category":
        return new ly(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
      case "value":
        return new cy;
      default:
        return (Gl.getClass(e) || cy).create(t)
    }
  }

  function ih(t) {
    var e = t.scale.getExtent(),
      n = e[0],
      i = e[1];
    return !(n > 0 && i > 0 || 0 > n && 0 > i)
  }

  function rh(t) {
    var e = t.getLabelModel().get("formatter"),
      n = "category" === t.type ? t.scale.getExtent()[0] : null;
    return "string" == typeof e ? e = function(e) {
      return function(n) {
        return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "")
      }
    }(e) : "function" == typeof e ? function(i, r) {
      return null != n && (r = i - n), e(ah(t, i), r)
    } : function(e) {
      return t.scale.getLabel(e)
    }
  }

  function ah(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e
  }

  function oh(t) {
    var e = t.model,
      n = t.scale;
    if (e.get("axisLabel.show") && !n.isBlank()) {
      var i, r, a = "category" === t.type,
        o = n.getExtent();
      a ? r = n.count() : (i = n.getTicks(), r = i.length);
      var s, l = t.getLabelModel(),
        h = rh(t),
        u = 1;
      r > 40 && (u = Math.ceil(r / 40));
      for (var c = 0; r > c; c += u) {
        var d = i ? i[c] : o[0] + c,
          f = h(d),
          p = l.getTextRect(f),
          g = sh(p, l.get("rotate") || 0);
        s ? s.union(g) : s = g
      }
      return s
    }
  }

  function sh(t, e) {
    var n = e * Math.PI / 180,
      i = t.plain(),
      r = i.width,
      a = i.height,
      o = r * Math.cos(n) + a * Math.sin(n),
      s = r * Math.sin(n) + a * Math.cos(n),
      l = new $e(i.x, i.y, o, s);
    return l
  }

  function lh(t) {
    return this._axes[t]
  }

  function hh(t) {
    Py.call(this, t)
  }

  function uh(t) {
    return "category" === t.type ? dh(t) : gh(t)
  }

  function ch(t, e) {
    return "category" === t.type ? ph(t, e) : {
      ticks: t.scale.getTicks()
    }
  }

  function dh(t) {
    var e = t.getLabelModel(),
      n = fh(t, e);
    return !e.get("show") || t.scale.isBlank() ? {
      labels: [],
      labelCategoryInterval: n.labelCategoryInterval
    } : n
  }

  function fh(t, e) {
    var n = vh(t, "labels"),
      i = Mh(e),
      r = mh(n, i);
    if (r) return r;
    var a, o;
    return x(i) ? a = Sh(t, i) : (o = "auto" === i ? _h(t) : i, a = bh(t, o)), yh(n, i, {
      labels: a,
      labelCategoryInterval: o
    })
  }

  function ph(t, e) {
    var n = vh(t, "ticks"),
      i = Mh(e),
      r = mh(n, i);
    if (r) return r;
    var a, o;
    if ((!e.get("show") || t.scale.isBlank()) && (a = []), x(i)) a = Sh(t, i, !0);
    else if ("auto" === i) {
      var s = fh(t, t.getLabelModel());
      o = s.labelCategoryInterval, a = p(s.labels, function(t) {
        return t.tickValue
      })
    } else o = i, a = bh(t, o, !0);
    return yh(n, i, {
      ticks: a,
      tickCategoryInterval: o
    })
  }

  function gh(t) {
    var e = t.scale.getTicks(),
      n = rh(t);
    return {
      labels: p(e, function(e, i) {
        return {
          formattedLabel: n(e, i),
          rawLabel: t.scale.getLabel(e),
          tickValue: e
        }
      })
    }
  }

  function vh(t, e) {
    return Ly(t)[e] || (Ly(t)[e] = [])
  }

  function mh(t, e) {
    for (var n = 0; n < t.length; n++)
      if (t[n].key === e) return t[n].value
  }

  function yh(t, e, n) {
    return t.push({
      key: e,
      value: n
    }), n
  }

  function _h(t) {
    var e = Ly(t).autoInterval;
    return null != e ? e : Ly(t).autoInterval = t.calculateCategoryInterval()
  }

  function xh(t) {
    var e = wh(t),
      n = rh(t),
      i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
      r = t.scale,
      a = r.getExtent(),
      o = r.count();
    if (a[1] - a[0] < 1) return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));
    for (var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(i)), c = Math.abs(h * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
      var p = 0,
        g = 0,
        v = vn(n(l), e.font, "center", "top");
      p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
    }
    var m = d / u,
      y = f / c;
    isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
    var _ = Math.max(0, Math.floor(Math.min(m, y))),
      x = Ly(t.model),
      w = x.lastAutoInterval,
      b = x.lastTickCount;
    return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w : (x.lastTickCount = o, x.lastAutoInterval = _), _
  }

  function wh(t) {
    var e = t.getLabelModel();
    return {
      axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
      labelRotate: e.get("rotate") || 0,
      font: e.getFont()
    }
  }

  function bh(t, e, n) {
    function i(t) {
      l.push(n ? t : {
        formattedLabel: r(t),
        rawLabel: a.getLabel(t),
        tickValue: t
      })
    }
    var r = rh(t),
      a = t.scale,
      o = a.getExtent(),
      s = t.getLabelModel(),
      l = [],
      h = Math.max((e || 0) + 1, 1),
      u = o[0],
      c = a.count();
    0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
    var d = {
      min: s.get("showMinLabel"),
      max: s.get("showMaxLabel")
    };
    d.min && u !== o[0] && i(o[0]);
    for (var f = u; f <= o[1]; f += h) i(f);
    return d.max && f !== o[1] && i(o[1]), l
  }

  function Sh(t, e, n) {
    var i = t.scale,
      r = rh(t),
      a = [];
    return f(i.getTicks(), function(t) {
      var o = i.getLabel(t);
      e(t, o) && a.push(n ? t : {
        formattedLabel: r(t),
        rawLabel: o,
        tickValue: t
      })
    }), a
  }

  function Mh(t) {
    var e = t.get("interval");
    return null == e ? "auto" : e
  }

  function Ih(t, e) {
    var n = t[1] - t[0],
      i = e,
      r = n / i / 2;
    t[0] += r, t[1] -= r
  }

  function Th(t, e, n, i, r) {
    function a(t, e) {
      return u ? t > e : e > t
    }
    var o = e.length;
    if (t.onBand && !i && o) {
      var s, l = t.getExtent();
      if (1 === o) e[0].coord = l[0], s = e[1] = {
        coord: l[0]
      };
      else {
        var h = e[1].coord - e[0].coord;
        f(e, function(t) {
          t.coord -= h / 2;
          var e = e || 0;
          e % 2 > 0 && (t.coord -= h / (2 * (e + 1)))
        }), s = {
          coord: e[o - 1].coord + h
        }, e.push(s)
      }
      var u = l[0] > l[1];
      a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
        coord: l[0]
      }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
        coord: l[1]
      })
    }
  }

  function Ch(t, e) {
    return e.type || (e.data ? "category" : "value")
  }

  function Dh(t, e) {
    return t.getCoordSysModel() === e
  }

  function kh(t, e, n) {
    this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t
  }

  function Ah(t, e, n, i) {
    function r(t) {
      return t.dim + "_" + t.index
    }
    n.getAxesOnZeroOf = function() {
      return a ? [a] : []
    };
    var a, o = t[e],
      s = n.model,
      l = s.get("axisLine.onZero"),
      h = s.get("axisLine.onZeroAxisIndex");
    if (l) {
      if (null != h) Ph(o[h]) && (a = o[h]);
      else
        for (var u in o)
          if (o.hasOwnProperty(u) && Ph(o[u]) && !i[r(o[u])]) {
            a = o[u];
            break
          }
      a && (i[r(a)] = !0)
    }
  }

  function Ph(t) {
    return t && "category" !== t.type && "time" !== t.type && ih(t)
  }

  function Lh(t, e) {
    var n = t.getExtent(),
      i = n[0] + n[1];
    t.toGlobalCoord = "x" === t.dim ? function(t) {
      return t + e
    } : function(t) {
      return i - t + e
    }, t.toLocalCoord = "x" === t.dim ? function(t) {
      return t - e
    } : function(t) {
      return i - t + e
    }
  }

  function Oh(t) {
    return p(Xy, function(e) {
      var n = t.getReferringComponents(e)[0];
      return n
    })
  }

  function Bh(t) {
    return "cartesian2d" === t.get("coordinateSystem")
  }

  function Eh(t) {
    return t
  }

  function zh(t, e, n, i, r) {
    this._old = t, this._new = e, this._oldKeyGetter = n || Eh, this._newKeyGetter = i || Eh, this.context = r
  }

  function Rh(t, e, n, i, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[i](t[a], a),
        s = e[o];
      null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
    }
  }

  function Fh(t) {
    var e = {},
      n = e.encode = {},
      i = R(),
      r = [],
      a = [];
    f(t.dimensions, function(e) {
      var o = t.getDimensionInfo(e),
        s = o.coordDim;
      if (s) {
        var l = n[s];
        n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), Hh(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e)
      }
      Yy.each(function(t, e) {
        var i = n[e];
        n.hasOwnProperty(e) || (i = n[e] = []);
        var r = o.otherDims[e];
        null != r && r !== !1 && (i[r] = o.name)
      })
    });
    var o = [],
      s = {};
    i.each(function(t, e) {
      var i = n[e];
      s[e] = i[0], o = o.concat(i)
    }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
    var l = n.label;
    l && l.length && (r = l.slice());
    var h = n.tooltip;
    return h && h.length ? a = h.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e
  }

  function Nh(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
  }

  function Hh(t) {
    return !("ordinal" === t || "time" === t)
  }

  function Vh(t) {
    return t._rawCount > 65535 ? $y : Ky
  }

  function Wh(t) {
    var e = t.constructor;
    return e === Array ? t.slice() : new e(t)
  }

  function Gh(t, e) {
    f(Qy.concat(e.__wrappedMethods || []), function(n) {
      e.hasOwnProperty(n) && (t[n] = e[n])
    }), t.__wrappedMethods = e.__wrappedMethods, f(Jy, function(n) {
      t[n] = i(e[n])
    }), t._calculationInfo = o(e._calculationInfo)
  }

  function Xh(t) {
    var e = t._invertedIndicesMap;
    f(e, function(n, i) {
      var r = t._dimensionInfos[i],
        a = r.ordinalMeta;
      if (a) {
        n = e[i] = new $y(a.categories.length);
        for (var o = 0; o < n.length; o++) n[o] = 0 / 0;
        for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o
      }
    })
  }

  function Yh(t, e, n) {
    var i;
    if (null != e) {
      var r = t._chunkSize,
        a = Math.floor(n / r),
        o = n % r,
        s = t.dimensions[e],
        l = t._storage[s][a];
      if (l) {
        i = l[o];
        var h = t._dimensionInfos[s].ordinalMeta;
        h && h.categories.length && (i = h.categories[i])
      }
    }
    return i
  }

  function qh(t) {
    return t
  }

  function Uh(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1
  }

  function jh(t, e) {
    var n = t._idList[e];
    return null == n && (n = Yh(t, t._idDimIdx, e)), null == n && (n = jy + e), n
  }

  function Zh(t) {
    return _(t) || (t = [t]), t
  }

  function $h(t, e) {
    var n = t.dimensions,
      i = new t_(p(n, t.getDimensionInfo, t), t.hostModel);
    Gh(i, t);
    for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
      var s = n[o];
      a[s] && (h(e, s) >= 0 ? (r[s] = Kh(a[s]), i._rawExtent[s] = Qh(), i._extent[s] = null) : r[s] = a[s])
    }
    return i
  }

  function Kh(t) {
    for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = Wh(t[n]);
    return e
  }

  function Qh() {
    return [1 / 0, -1 / 0]
  }

  function Jh(t, e, n) {
    function r(t, e, n) {
      null != Yy.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, !0))
    }
    Ka.isInstance(e) || (e = Ka.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();
    for (var a = (n.dimsDef || []).slice(), l = R(n.encodeDef), h = R(), u = R(), c = [], d = tu(e, t, a, n.dimCount), p = 0; d > p; p++) {
      var g = a[p] = o({}, b(a[p]) ? a[p] : {
          name: a[p]
        }),
        v = g.name,
        m = c[p] = {
          otherDims: {}
        };
      null != v && null == h.get(v) && (m.name = m.displayName = v, h.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName)
    }
    l.each(function(t, e) {
      if (t = pi(t).slice(), 1 === t.length && t[0] < 0) return void l.set(e, !1);
      var n = l.set(e, []);
      f(t, function(t, i) {
        w(t) && (t = h.get(t)), null != t && d > t && (n[i] = t, r(c[t], e, i))
      })
    });
    var y = 0;
    f(t, function(t) {
      var e, t, n, a;
      if (w(t)) e = t, t = {};
      else {
        e = t.name;
        var o = t.ordinalMeta;
        t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
      }
      var h = l.get(e);
      if (h !== !1) {
        var h = pi(h);
        if (!h.length)
          for (var u = 0; u < (n && n.length || 1); u++) {
            for (; y < c.length && null != c[y].coordDim;) y++;
            y < c.length && h.push(y++)
          }
        f(h, function(i, o) {
          var l = c[i];
          if (r(s(l, t), e, o), null == l.name && n) {
            var h = n[o];
            !b(h) && (h = {
              name: h
            }), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip
          }
          a && s(l.otherDims, a)
        })
      }
    });
    var _ = n.generateCoord,
      x = n.generateCoordCount,
      S = null != x;
    x = _ ? x || 1 : 0;
    for (var M = _ || "value", I = 0; d > I; I++) {
      var m = c[I] = c[I] || {},
        T = m.coordDim;
      null == T && (m.coordDim = eu(M, u, S), m.coordDimIndex = 0, (!_ || 0 >= x) && (m.isExtraCoord = !0), x--), null == m.name && (m.name = eu(m.coordDim, h)), null == m.type && lo(e, I, m.name) && (m.type = "ordinal")
    }
    return c
  }

  function tu(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
    return f(e, function(t) {
      var e = t.dimsDef;
      e && (r = Math.max(r, e.length))
    }), r
  }

  function eu(t, e, n) {
    if (n || null != e.get(t)) {
      for (var i = 0; null != e.get(t + i);) i++;
      t += i
    }
    return e.set(t, !0), t
  }

  function nu(t, e, n) {
    n = n || {}, Ka.isInstance(t) || (t = Ka.seriesDataToSource(t));
    var i, r = e.get("coordinateSystem"),
      a = _o.get(r),
      o = Za(e);
    o && (i = p(o.coordSysDims, function(t) {
      var e = {
          name: t
        },
        n = o.axisMap.get(t);
      if (n) {
        var i = n.get("type");
        e.type = Nh(i)
      }
      return e
    })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
    var s, l, h = i_(t, {
      coordDimensions: i,
      generateCoord: n.generateCoord
    });
    o && f(h, function(t, e) {
      var n = t.coordDim,
        i = o.categoryAxisMap.get(n);
      i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
    }), l || null == s || (h[s].otherDims.itemName = 0);
    var u = Al(e, h),
      c = new t_(h, e);
    c.setCalculationInfo(u);
    var d = null != s && iu(t) ? function(t, e, n, i) {
      return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
    } : null;
    return c.hasItemOption = !1, c.initData(t, null, d), c
  }

  function iu(t) {
    if (t.sourceFormat === Jg) {
      var e = ru(t.data || []);
      return null != e && !_(vi(e))
    }
  }

  function ru(t) {
    for (var e = 0; e < t.length && null == t[e];) e++;
    return t[e]
  }

  function au(t, e) {
    var n = t.mapDimension("defaultedLabel", !0),
      i = n.length;
    if (1 === i) return Yo(t, e, n[0]);
    if (i) {
      for (var r = [], a = 0; a < n.length; a++) {
        var o = Yo(t, e, n[a]);
        r.push(o)
      }
      return r.join(" ")
    }
  }

  function ou(t, e, n, i, r, a) {
    var o = n.getModel("label"),
      s = n.getModel("emphasis.label");
    $r(t, e, o, s, {
      labelFetcher: r,
      labelDataIndex: a,
      defaultText: au(r.getData(), a),
      isRectText: !0,
      autoColor: i
    }), su(t), su(e)
  }

  function su(t, e) {
    "outside" === t.textPosition && (t.textPosition = e)
  }

  function lu(t, e, n) {
    n.style.text = null, sa(n, {
      shape: {
        width: 0
      }
    }, e, t, function() {
      n.parent && n.parent.remove(n)
    })
  }

  function hu(t, e, n) {
    n.style.text = null, sa(n, {
      shape: {
        r: n.shape.r0
      }
    }, e, t, function() {
      n.parent && n.parent.remove(n)
    })
  }

  function uu(t, e, n, i, r, a, o, l) {
    var h = e.getItemVisual(n, "color"),
      u = e.getItemVisual(n, "opacity"),
      c = i.getModel("itemStyle"),
      d = i.getModel("emphasis.itemStyle").getBarItemStyle();
    l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(s({
      fill: h,
      opacity: u
    }, c.getBarItemStyle()));
    var f = i.getShallow("cursor");
    f && t.attr("cursor", f);
    var p = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
    l || ou(t.style, d, i, h, a, n, p), jr(t, d)
  }

  function cu(t, e) {
    var n = t.get(s_) || 0;
    return Math.min(n, Math.abs(e.width), Math.abs(e.height))
  }

  function du(t, e, n) {
    var i = t.getData(),
      r = [],
      a = i.getLayout("valueAxisHorizontal") ? 1 : 0;
    r[1 - a] = i.getLayout("valueAxisStart");
    var o = new u_({
      shape: {
        points: i.getLayout("largePoints")
      },
      incremental: !!n,
      __startPoint: r,
      __valueIdx: a
    });
    e.add(o), fu(o, t, i)
  }

  function fu(t, e, n) {
    var i = n.getVisual("borderColor") || n.getVisual("color"),
      r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
    t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth")
  }

  function pu(t, e) {
    if ("image" !== this.type) {
      var n = this.style,
        i = this.shape;
      i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
    }
  }

  function gu(t, e, n, i, r, a, o) {
    var s = 0 === t.indexOf("empty");
    s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
    var l;
    return l = 0 === t.indexOf("image://") ? Dr(t.slice(8), new $e(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? Cr(t.slice(7), {}, new $e(e, n, i, r), o ? "center" : "cover") : new y_({
      shape: {
        symbolType: t,
        x: e,
        y: n,
        width: i,
        height: r
      }
    }), l.__isEmptyBrush = s, l.setColor = pu, l.setColor(a), l
  }

  function vu(t) {
    var e = {
      componentType: t.mainType,
      componentIndex: t.componentIndex
    };
    return e[t.mainType + "Index"] = t.componentIndex, e
  }

  function mu(t, e, n, i) {
    var r, a, o = ka(n - t.rotation),
      s = i[0] > i[1],
      l = "start" === e && !s || "start" !== e && s;
    return Aa(o - __ / 2) ? (a = l ? "bottom" : "top", r = "center") : Aa(o - 1.5 * __) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * __ > o && o > __ / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
      rotation: o,
      textAlign: r,
      textVerticalAlign: a
    }
  }

  function yu(t) {
    var e = t.get("tooltip");
    return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
  }

  function _u(t, e, n) {
    var i = t.get("axisLabel.showMinLabel"),
      r = t.get("axisLabel.showMaxLabel");
    e = e || [], n = n || [];
    var a = e[0],
      o = e[1],
      s = e[e.length - 1],
      l = e[e.length - 2],
      h = n[0],
      u = n[1],
      c = n[n.length - 1],
      d = n[n.length - 2];
    i === !1 ? (xu(a), xu(h)) : wu(a, o) && (i ? (xu(o), xu(u)) : (xu(a), xu(h))), r === !1 ? (xu(s), xu(c)) : wu(l, s) && (r ? (xu(l), xu(d)) : (xu(s), xu(c)))
  }

  function xu(t) {
    t && (t.ignore = !0)
  }

  function wu(t, e) {
    var n = t && t.getBoundingRect().clone(),
      i = e && e.getBoundingRect().clone();
    if (n && i) {
      var r = de([]);
      return ve(r, r, -t.rotation), n.applyTransform(pe([], r, t.getLocalTransform())), i.applyTransform(pe([], r, e.getLocalTransform())), n.intersect(i)
    }
  }

  function bu(t) {
    return "middle" === t || "center" === t
  }

  function Su(t, e, n) {
    var i = e.axis;
    if (e.get("axisTick.show") && !i.scale.isBlank()) {
      for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), h = [], u = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
        var p = l[f].coord;
        h[0] = p, h[1] = 0, u[0] = p, u[1] = n.tickDirection * o, c && (Z(h, h, c), Z(u, u, c));
        var g = new hg(Pr({
          anid: "tick_" + l[f].tickValue,
          shape: {
            x1: h[0],
            y1: h[1],
            x2: u[0],
            y2: u[1]
          },
          style: s(a.getLineStyle(), {
            stroke: e.get("axisLine.lineStyle.color")
          }),
          z2: 2,
          silent: !0
        }));
        t.group.add(g), d.push(g)
      }
      return d
    }
  }

  function Mu(t, e, n) {
    var i = e.axis,
      r = C(n.axisLabelShow, e.get("axisLabel.show"));
    if (r && !i.scale.isBlank()) {
      var a = e.getModel("axisLabel"),
        o = a.get("margin"),
        s = i.getViewLabels(),
        l = (C(n.labelRotate, a.get("rotate")) || 0) * __ / 180,
        h = b_(n.rotation, l, n.labelDirection),
        u = e.getCategories(!0),
        c = [],
        d = yu(e),
        p = e.get("triggerEvent");
      return f(s, function(r, s) {
        var l = r.tickValue,
          f = r.formattedLabel,
          g = r.rawLabel,
          v = a;
        u && u[l] && u[l].textStyle && (v = new va(u[l].textStyle, a, e.ecModel));
        var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
          y = i.dataToCoord(l),
          _ = [y, n.labelOffset + n.labelDirection * o],
          x = new Qp({
            anid: "label_" + l,
            position: _,
            rotation: h.rotation,
            silent: d,
            z2: 10
          });
        Kr(x.style, v, {
          text: f,
          textAlign: v.getShallow("align", !0) || h.textAlign,
          textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
          textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m
        }), p && (x.eventData = vu(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform()
      }), c
    }
  }

  function Iu(t, e) {
    var n = {
      axesInfo: {},
      seriesInvolved: !1,
      coordSysAxesInfo: {},
      coordSysMap: {}
    };
    return Tu(n, t, e), n.seriesInvolved && Du(n, t), n
  }

  function Tu(t, e, n) {
    var i = e.getComponent("tooltip"),
      r = e.getComponent("axisPointer"),
      a = r.get("link", !0) || [],
      o = [];
    S_(n.getCoordinateSystems(), function(n) {
      function s(i, s, l) {
        var u = l.model.getModel("axisPointer", r),
          d = u.get("show");
        if (d && ("auto" !== d || i || Bu(u))) {
          null == s && (s = u.get("triggerTooltip")), u = i ? Cu(l, c, r, e, i, s) : u;
          var f = u.get("snap"),
            p = Eu(l.model),
            g = s || f || "category" === l.type,
            v = t.axesInfo[p] = {
              key: p,
              axis: l,
              coordSys: n,
              axisPointerModel: u,
              triggerTooltip: s,
              involveSeries: g,
              snap: f,
              useHandle: Bu(u),
              seriesModels: []
            };
          h[p] = v, t.seriesInvolved |= g;
          var m = ku(a, l);
          if (null != m) {
            var y = o[m] || (o[m] = {
              axesInfo: {}
            });
            y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y
          }
        }
      }
      if (n.axisPointerEnabled) {
        var l = Eu(n.model),
          h = t.coordSysAxesInfo[l] = {};
        t.coordSysMap[l] = n;
        var u = n.model,
          c = u.getModel("tooltip", i);
        if (S_(n.getAxes(), M_(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
          var d = "axis" === c.get("trigger"),
            f = "cross" === c.get("axisPointer.type"),
            p = n.getTooltipAxes(c.get("axisPointer.axis"));
          (d || f) && S_(p.baseAxes, M_(s, f ? "cross" : !0, d)), f && S_(p.otherAxes, M_(s, "cross", !1))
        }
      }
    })
  }

  function Cu(t, e, n, r, a, o) {
    var l = e.getModel("axisPointer"),
      h = {};
    S_(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function(t) {
      h[t] = i(l.get(t))
    }), h.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (h.type = "line");
    var u = h.label || (h.label = {});
    if (null == u.show && (u.show = !1), "cross" === a) {
      var c = l.get("label.show");
      if (u.show = null != c ? c : !0, !o) {
        var d = h.lineStyle = l.get("crossStyle");
        d && s(u, d.textStyle)
      }
    }
    return t.model.getModel("axisPointer", new va(h, n, r))
  }

  function Du(t, e) {
    e.eachSeries(function(e) {
      var n = e.coordinateSystem,
        i = e.get("tooltip.trigger", !0),
        r = e.get("tooltip.show", !0);
      n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get("axisPointer.show", !0) !== !1 && S_(t.coordSysAxesInfo[Eu(n.model)], function(t) {
        var i = t.axis;
        n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
      })
    }, this)
  }

  function ku(t, e) {
    for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
      var a = t[r] || {};
      if (Au(a[i + "AxisId"], n.id) || Au(a[i + "AxisIndex"], n.componentIndex) || Au(a[i + "AxisName"], n.name)) return r
    }
  }

  function Au(t, e) {
    return "all" === t || _(t) && h(t, e) >= 0 || t === e
  }

  function Pu(t) {
    var e = Lu(t);
    if (e) {
      var n = e.axisPointerModel,
        i = e.axis.scale,
        r = n.option,
        a = n.get("status"),
        o = n.get("value");
      null != o && (o = i.parse(o));
      var s = Bu(n);
      null == a && (r.status = s ? "show" : "hide");
      var l = i.getExtent().slice();
      l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
    }
  }

  function Lu(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return e && e.axesInfo[Eu(t)]
  }

  function Ou(t) {
    var e = Lu(t);
    return e && e.axisPointerModel
  }

  function Bu(t) {
    return !!t.get("handle.show")
  }

  function Eu(t) {
    return t.type + "||" + t.id
  }

  function zu(t, e, n, i, r, a) {
    var o = I_.getAxisPointerClass(t.axisPointerClass);
    if (o) {
      var s = Ou(e);
      s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, i, a) : Ru(t, i)
    }
  }

  function Ru(t, e, n) {
    var i = t._axisPointer;
    i && i.dispose(e, n), t._axisPointer = null
  }

  function Fu(t, e, n) {
    n = n || {};
    var i = t.coordinateSystem,
      r = e.axis,
      a = {},
      o = r.getAxesOnZeroOf()[0],
      s = r.position,
      l = o ? "onZero" : s,
      h = r.dim,
      u = i.getRect(),
      c = [u.x, u.x + u.width, u.y, u.y + u.height],
      d = {
        left: 0,
        right: 1,
        top: 0,
        bottom: 1,
        onZero: 2
      },
      f = e.get("offset") || 0,
      p = "x" === h ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
    if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));
      p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
    }
    a.position = ["y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);
    var v = {
      top: -1,
      bottom: 1,
      left: -1,
      right: 1
    };
    a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), C(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
    var m = e.get("axisLabel.rotate");
    return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a
  }

  function Nu(t, e, n, i) {
    var r = e.getData(),
      a = this.dataIndex,
      o = r.getName(a),
      s = e.get("selectedOffset");
    i.dispatchAction({
      type: "pieToggleSelect",
      from: t,
      name: o,
      seriesId: e.id
    }), r.each(function(t) {
      Hu(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
    })
  }

  function Hu(t, e, n, i, r) {
    var a = (e.startAngle + e.endAngle) / 2,
      o = Math.cos(a),
      s = Math.sin(a),
      l = n ? i : 0,
      h = [o * l, s * l];
    r ? t.animate().when(200, {
      position: h
    }).start("bounceOut") : t.attr("position", h)
  }

  function Vu(t, e) {
    function n() {
      a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore
    }

    function i() {
      a.ignore = a.normalIgnore, o.ignore = o.normalIgnore
    }
    Gd.call(this);
    var r = new ng({
        z2: 2
      }),
      a = new sg,
      o = new Qp;
    this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
  }

  function Wu(t, e, n, i, r, a, o) {
    function s(e, n, i) {
      for (var r = e; n > r; r++)
        if (t[r].y += i, r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, i / 2);
      l(n - 1, i / 2)
    }

    function l(e, n) {
      for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--);
    }

    function h(t, e, n, i, r, a) {
      for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++)
        if ("center" !== t[s].position) {
          var h = Math.abs(t[s].y - i),
            u = t[s].len,
            c = t[s].len2,
            d = r + u > h ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
          e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = n + d * a, o = d
        }
    }
    t.sort(function(t, e) {
      return t.y - e.y
    });
    for (var u, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) u = t[g].y - c, 0 > u && s(g, d, -u, r), c = t[g].y + t[g].height;
    0 > o - c && l(d - 1, c - o);
    for (var g = 0; d > g; g++) t[g].y >= n ? p.push(t[g]) : f.push(t[g]);
    h(f, !1, e, n, i, r), h(p, !0, e, n, i, r)
  }

  function Gu(t, e, n, i, r, a) {
    for (var o = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? o.push(t[l]) : s.push(t[l]);
    Wu(s, e, n, i, 1, r, a), Wu(o, e, n, i, -1, r, a);
    for (var l = 0; l < t.length; l++) {
      var h = t[l].linePoints;
      if (h) {
        var u = h[1][0] - h[2][0];
        h[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u
      }
    }
  }

  function Xu(t, e, n) {
    var i, r = {},
      a = "toggleSelected" === t;
    return n.eachComponent("legend", function(n) {
      a && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name));
      var o = n.getData();
      f(o, function(t) {
        var e = t.get("name");
        if ("\n" !== e && "" !== e) {
          var i = n.isSelected(e);
          r[e] = r.hasOwnProperty(e) ? r[e] && i : i
        }
      })
    }), {
      name: e.name,
      selected: r
    }
  }

  function Yu(t, e) {
    var n = Eg(e.get("padding")),
      i = e.getItemStyle(["color", "opacity"]);
    i.fill = e.get("backgroundColor");
    var t = new lg({
      shape: {
        x: t.x - n[3],
        y: t.y - n[0],
        width: t.width + n[1] + n[3],
        height: t.height + n[0] + n[2],
        r: e.get("borderRadius")
      },
      style: i,
      silent: !0,
      z2: -1
    });
    return t
  }

  function qu(t, e) {
    e.dispatchAction({
      type: "legendToggleSelect",
      name: t
    })
  }

  function Uu(t, e, n, i) {
    var r = n.getZr().storage.getDisplayList()[0];
    r && r.useHoverLayer || n.dispatchAction({
      type: "highlight",
      seriesName: t,
      name: e,
      excludeSeriesId: i
    })
  }

  function ju(t, e, n, i) {
    var r = n.getZr().storage.getDisplayList()[0];
    r && r.useHoverLayer || n.dispatchAction({
      type: "downplay",
      seriesName: t,
      name: e,
      excludeSeriesId: i
    })
  }

  function Zu(t, e, n) {
    var i = t.getOrient(),
      r = [1, 1];
    r[i.index] = 0, Xa(e, n, {
      type: "box",
      ignoreSize: r
    })
  }

  function $u(t, e, n, i, r) {
    var a = t.axis;
    if (!a.scale.isBlank() && a.containData(e)) {
      if (!t.involveSeries) return void n.showPointer(t, e);
      var s = Ku(e, t),
        l = s.payloadBatch,
        h = s.snapToValue;
      l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(h) && null != h && (e = h), n.showPointer(t, e, l, r), n.showTooltip(t, s, h)
    }
  }

  function Ku(t, e) {
    var n = e.axis,
      i = n.dim,
      r = t,
      a = [],
      o = Number.MAX_VALUE,
      s = -1;
    return J_(e.seriesModels, function(e) {
      var l, h, u = e.getData().mapDimension(i, !0);
      if (e.getAxisTooltipData) {
        var c = e.getAxisTooltipData(u, t, n);
        h = c.dataIndices, l = c.nestestValue
      } else {
        if (h = e.getData().indicesOfNearest(u[0], t, "category" === n.type ? .5 : null), !h.length) return;
        l = e.getData().get(u[0], h[0])
      }
      if (null != l && isFinite(l)) {
        var d = t - l,
          f = Math.abs(d);
        o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), J_(h, function(t) {
          a.push({
            seriesIndex: e.seriesIndex,
            dataIndexInside: t,
            dataIndex: e.getData().getRawIndex(t)
          })
        }))
      }
    }), {
      payloadBatch: a,
      snapToValue: r
    }
  }

  function Qu(t, e, n, i) {
    t[e.key] = {
      value: n,
      payloadBatch: i
    }
  }

  function Ju(t, e, n, i) {
    var r = n.payloadBatch,
      a = e.axis,
      o = a.model,
      s = e.axisPointerModel;
    if (e.triggerTooltip && r.length) {
      var l = e.coordSys.model,
        h = Eu(l),
        u = t.map[h];
      u || (u = t.map[h] = {
        coordSysId: l.id,
        coordSysIndex: l.componentIndex,
        coordSysType: l.type,
        coordSysMainType: l.mainType,
        dataByAxis: []
      }, t.list.push(u)), u.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: o.componentIndex,
        axisType: o.type,
        axisId: o.id,
        value: i,
        valueLabelOpt: {
          precision: s.get("label.precision"),
          formatter: s.get("label.formatter")
        },
        seriesDataIndices: r.slice()
      })
    }
  }

  function tc(t, e, n) {
    var i = n.axesInfo = [];
    J_(e, function(e, n) {
      var r = e.axisPointerModel.option,
        a = t[n];
      a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
        axisDim: e.axis.dim,
        axisIndex: e.axis.model.componentIndex,
        value: r.value
      })
    })
  }

  function ec(t, e, n, i) {
    if (ac(e) || !t.list.length) return void i({
      type: "hideTip"
    });
    var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    i({
      type: "showTip",
      escapeConnect: !0,
      x: e[0],
      y: e[1],
      tooltipOption: n.tooltipOption,
      position: n.position,
      dataIndexInside: r.dataIndexInside,
      dataIndex: r.dataIndex,
      seriesIndex: r.seriesIndex,
      dataByCoordSys: t.list
    })
  }

  function nc(t, e, n) {
    var i = n.getZr(),
      r = "axisPointerLastHighlights",
      a = ex(i)[r] || {},
      o = ex(i)[r] = {};
    J_(t, function(t) {
      var e = t.axisPointerModel.option;
      "show" === e.status && J_(e.seriesDataIndices, function(t) {
        var e = t.seriesIndex + " | " + t.dataIndex;
        o[e] = t
      })
    });
    var s = [],
      l = [];
    f(a, function(t, e) {
      !o[e] && l.push(t)
    }), f(o, function(t, e) {
      !a[e] && s.push(t)
    }), l.length && n.dispatchAction({
      type: "downplay",
      escapeConnect: !0,
      batch: l
    }), s.length && n.dispatchAction({
      type: "highlight",
      escapeConnect: !0,
      batch: s
    })
  }

  function ic(t, e) {
    for (var n = 0; n < (t || []).length; n++) {
      var i = t[n];
      if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
    }
  }

  function rc(t) {
    var e = t.axis.model,
      n = {},
      i = n.axisDim = t.axis.dim;
    return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
  }

  function ac(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
  }

  function oc(t, e, n) {
    if (!Gc.node) {
      var i = e.getZr();
      ix(i).records || (ix(i).records = {}), sc(i, e);
      var r = ix(i).records[t] || (ix(i).records[t] = {});
      r.handler = n
    }
  }

  function sc(t, e) {
    function n(n, i) {
      t.on(n, function(n) {
        var r = cc(e);
        rx(ix(t).records, function(t) {
          t && i(t, n, r.dispatchAction)
        }), lc(r.pendings, e)
      })
    }
    ix(t).initialized || (ix(t).initialized = !0, n("click", y(uc, "click")), n("mousemove", y(uc, "mousemove")), n("globalout", hc))
  }

  function lc(t, e) {
    var n, i = t.showTip.length,
      r = t.hideTip.length;
    i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
  }

  function hc(t, e, n) {
    t.handler("leave", null, n)
  }

  function uc(t, e, n, i) {
    e.handler(t, n, i)
  }

  function cc(t) {
    var e = {
        showTip: [],
        hideTip: []
      },
      n = function(i) {
        var r = e[i.type];
        r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
      };
    return {
      dispatchAction: n,
      pendings: e
    }
  }

  function dc(t, e) {
    if (!Gc.node) {
      var n = e.getZr(),
        i = (ix(n).records || {})[t];
      i && (ix(n).records[t] = null)
    }
  }

  function fc() {}

  function pc(t, e, n, i) {
    gc(ox(n).lastProp, i) || (ox(n).lastProp = i, e ? sa(n, i, t) : (n.stopAnimation(), n.attr(i)))
  }

  function gc(t, e) {
    if (b(t) && b(e)) {
      var n = !0;
      return f(e, function(e, i) {
        n = n && gc(t[i], e)
      }), !!n
    }
    return t === e
  }

  function vc(t, e) {
    t[e.get("label.show") ? "show" : "hide"]()
  }

  function mc(t) {
    return {
      position: t.position.slice(),
      rotation: t.rotation || 0
    }
  }

  function yc(t, e, n) {
    var i = e.get("z"),
      r = e.get("zlevel");
    t && t.traverse(function(t) {
      "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
    })
  }

  function _c(t) {
    var e, n = t.get("type"),
      i = t.getModel(n + "Style");
    return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e
  }

  function xc(t, e, n, i, r) {
    var a = n.get("value"),
      o = bc(a, e.axis, e.ecModel, n.get("seriesDataIndices"), {
        precision: n.get("label.precision"),
        formatter: n.get("label.formatter")
      }),
      s = n.getModel("label"),
      l = Eg(s.get("padding") || 0),
      h = s.getFont(),
      u = vn(o, h),
      c = r.position,
      d = u.width + l[1] + l[3],
      f = u.height + l[0] + l[2],
      p = r.align;
    "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
    var g = r.verticalAlign;
    "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), wc(c, d, f, i);
    var v = s.get("backgroundColor");
    v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = {
      shape: {
        x: 0,
        y: 0,
        width: d,
        height: f,
        r: s.get("borderRadius")
      },
      position: c.slice(),
      style: {
        text: o,
        textFont: h,
        textFill: s.getTextColor(),
        textPosition: "inside",
        fill: v,
        stroke: s.get("borderColor") || "transparent",
        lineWidth: s.get("borderWidth") || 0,
        shadowBlur: s.get("shadowBlur"),
        shadowColor: s.get("shadowColor"),
        shadowOffsetX: s.get("shadowOffsetX"),
        shadowOffsetY: s.get("shadowOffsetY")
      },
      z2: 10
    }
  }

  function wc(t, e, n, i) {
    var r = i.getWidth(),
      a = i.getHeight();
    t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
  }

  function bc(t, e, n, i, r) {
    t = e.scale.parse(t);
    var a = e.scale.getLabel(t, {
        precision: r.precision
      }),
      o = r.formatter;
    if (o) {
      var s = {
        value: ah(e, t),
        seriesData: []
      };
      f(i, function(t) {
        var e = n.getSeriesByIndex(t.seriesIndex),
          i = t.dataIndexInside,
          r = e && e.getDataParams(i);
        r && s.seriesData.push(r)
      }), w(o) ? a = o.replace("{value}", a) : x(o) && (a = o(s))
    }
    return a
  }

  function Sc(t, e, n) {
    var i = ce();
    return ve(i, i, n.rotation), ge(i, i, n.position), ua([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
  }

  function Mc(t, e, n, i, r, a) {
    var o = x_.innerTextLayout(n.rotation, 0, n.labelDirection);
    n.labelMargin = r.get("label.margin"), xc(e, i, r, a, {
      position: Sc(i.axis, t, n),
      align: o.textAlign,
      verticalAlign: o.textVerticalAlign
    })
  }

  function Ic(t, e, n) {
    return n = n || 0, {
      x1: t[n],
      y1: t[1 - n],
      x2: e[n],
      y2: e[1 - n]
    }
  }

  function Tc(t, e, n) {
    return n = n || 0, {
      x: t[n],
      y: t[1 - n],
      width: e[n],
      height: e[1 - n]
    }
  }

  function Cc(t, e) {
    var n = {};
    return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
  }

  function Dc(t) {
    return "x" === t.dim ? 0 : 1
  }

  function kc(t) {
    var e = "cubic-bezier(0.23, 1, 0.32, 1)",
      n = "left " + t + "s " + e + ",top " + t + "s " + e;
    return p(fx, function(t) {
      return t + "transition:" + n
    }).join(";")
  }

  function Ac(t) {
    var e = [],
      n = t.get("fontSize"),
      i = t.getTextColor();
    return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), cx(["decoration", "align"], function(n) {
      var i = t.get(n);
      i && e.push("text-" + n + ":" + i)
    }), e.join(";")
  }

  function Pc(t) {
    var e = [],
      n = t.get("transitionDuration"),
      i = t.get("backgroundColor"),
      r = t.getModel("textStyle"),
      a = t.get("padding");
    return n && e.push(kc(n)), i && (Gc.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Le(i)), e.push("filter:alpha(opacity=70)"))), cx(["width", "color", "radius"], function(n) {
      var i = "border-" + n,
        r = dx(i),
        a = t.get(r);
      null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"))
    }), e.push(Ac(r)), null != a && e.push("padding:" + Eg(a).join("px ") + "px"), e.join(";") + ";"
  }

  function Lc(t, e) {
    if (Gc.wxa) return null;
    var n = document.createElement("div"),
      i = this._zr = e.getZr();
    this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
    var r = this;
    n.onmouseenter = function() {
      r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
    }, n.onmousemove = function(e) {
      if (e = e || window.event, !r._enterable) {
        var n = i.handler;
        re(t, e, !0), n.dispatch("mousemove", e)
      }
    }, n.onmouseleave = function() {
      r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
    }
  }

  function Oc(t) {
    this._zr = t.getZr(), this._show = !1, this._hideTimeout
  }

  function Bc(t) {
    for (var e = t.pop(); t.length;) {
      var n = t.pop();
      n && (va.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {
        formatter: n
      }), e = new va(n, e, e.ecModel))
    }
    return e
  }

  function Ec(t, e) {
    return t.dispatchAction || m(e.dispatchAction, e)
  }

  function zc(t, e, n, i, r, a, o) {
    var s = n.getOuterSize(),
      l = s.width,
      h = s.height;
    return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + h + o > r ? e -= h + o : e += o), [t, e]
  }

  function Rc(t, e, n, i, r) {
    var a = n.getOuterSize(),
      o = a.width,
      s = a.height;
    return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
  }

  function Fc(t, e, n) {
    var i = n[0],
      r = n[1],
      a = 5,
      o = 0,
      s = 0,
      l = e.width,
      h = e.height;
    switch (t) {
      case "inside":
        o = e.x + l / 2 - i / 2, s = e.y + h / 2 - r / 2;
        break;
      case "top":
        o = e.x + l / 2 - i / 2, s = e.y - r - a;
        break;
      case "bottom":
        o = e.x + l / 2 - i / 2, s = e.y + h + a;
        break;
      case "left":
        o = e.x - i - a, s = e.y + h / 2 - r / 2;
        break;
      case "right":
        o = e.x + l + a, s = e.y + h / 2 - r / 2
    }
    return [o, s]
  }

  function Nc(t) {
    return "center" === t || "middle" === t
  }
  var Hc = 2311,
    Vc = function() {
      return Hc++
    },
    Wc = {};
  Wc = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
    browser: {},
    os: {},
    node: !1,
    wxa: !0,
    canvasSupported: !0,
    svgSupported: !1,
    touchEventsSupported: !0,
    domSupported: !1
  } : "undefined" == typeof document && "undefined" != typeof self ? {
    browser: {},
    os: {},
    node: !1,
    worker: !0,
    canvasSupported: !0,
    domSupported: !1
  } : "undefined" == typeof navigator ? {
    browser: {},
    os: {},
    node: !0,
    worker: !1,
    canvasSupported: !0,
    svgSupported: !0,
    domSupported: !1
  } : e(navigator.userAgent);
  var Gc = Wc,
    Xc = {
      "[object Function]": 1,
      "[object RegExp]": 1,
      "[object Date]": 1,
      "[object Error]": 1,
      "[object CanvasGradient]": 1,
      "[object CanvasPattern]": 1,
      "[object Image]": 1,
      "[object Canvas]": 1
    },
    Yc = {
      "[object Int8Array]": 1,
      "[object Uint8Array]": 1,
      "[object Uint8ClampedArray]": 1,
      "[object Int16Array]": 1,
      "[object Uint16Array]": 1,
      "[object Int32Array]": 1,
      "[object Uint32Array]": 1,
      "[object Float32Array]": 1,
      "[object Float64Array]": 1
    },
    qc = Object.prototype.toString,
    Uc = Array.prototype,
    jc = Uc.forEach,
    Zc = Uc.filter,
    $c = Uc.slice,
    Kc = Uc.map,
    Qc = Uc.reduce,
    Jc = {},
    td = function() {
      return Jc.createCanvas()
    };
  Jc.createCanvas = function() {
    return document.createElement("canvas")
  };
  var ed, nd = "__ec_primitive__";
  z.prototype = {
    constructor: z,
    get: function(t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null
    },
    set: function(t, e) {
      return this.data[t] = e
    },
    each: function(t, e) {
      void 0 !== e && (t = m(t, e));
      for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n)
    },
    removeKey: function(t) {
      delete this.data[t]
    }
  };
  var id = "undefined" == typeof Float32Array ? Array : Float32Array,
    rd = U,
    ad = j;
  Q.prototype = {
    constructor: Q,
    _dragStart: function(t) {
      var e = t.target;
      e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(J(e, t), "dragstart", t.event))
    },
    _drag: function(t) {
      var e = this._draggingTarget;
      if (e) {
        var n = t.offsetX,
          i = t.offsetY,
          r = n - this._x,
          a = i - this._y;
        this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(J(e, t), "drag", t.event);
        var o = this.findHover(n, i, e).target,
          s = this._dropTarget;
        this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(J(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(J(o, t), "dragenter", t.event))
      }
    },
    _dragEnd: function(t) {
      var e = this._draggingTarget;
      e && (e.dragging = !1), this.dispatchToElement(J(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(J(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
    }
  };
  var od = Array.prototype.slice,
    sd = function(t) {
      this._$handlers = {}, this._$eventProcessor = t
    };
  sd.prototype = {
    constructor: sd,
    one: function(t, e, n, i) {
      var r = this._$handlers;
      if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
      e = te(this, e), r[t] || (r[t] = []);
      for (var a = 0; a < r[t].length; a++)
        if (r[t][a].h === n) return this;
      return r[t].push({
        h: n,
        one: !0,
        query: e,
        ctx: i || this
      }), this
    },
    on: function(t, e, n, i) {
      var r = this._$handlers;
      if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
      e = te(this, e), r[t] || (r[t] = []);
      for (var a = 0; a < r[t].length; a++)
        if (r[t][a].h === n) return this;
      return r[t].push({
        h: n,
        one: !1,
        query: e,
        ctx: i || this
      }), this
    },
    isSilent: function(t) {
      var e = this._$handlers;
      return e[t] && e[t].length
    },
    off: function(t, e) {
      var n = this._$handlers;
      if (!t) return this._$handlers = {}, this;
      if (e) {
        if (n[t]) {
          for (var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h !== e && i.push(n[t][r]);
          n[t] = i
        }
        n[t] && 0 === n[t].length && delete n[t]
      } else delete n[t];
      return this
    },
    trigger: function(t) {
      var e = this._$handlers[t],
        n = this._$eventProcessor;
      if (e) {
        var i = arguments,
          r = i.length;
        r > 3 && (i = od.call(i, 1));
        for (var a = e.length, o = 0; a > o;) {
          var s = e[o];
          if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;
          else {
            switch (r) {
              case 1:
                s.h.call(s.ctx);
                break;
              case 2:
                s.h.call(s.ctx, i[1]);
                break;
              case 3:
                s.h.call(s.ctx, i[1], i[2]);
                break;
              default:
                s.h.apply(s.ctx, i)
            }
            s.one ? (e.splice(o, 1), a--) : o++
          }
        }
      }
      return n && n.afterTrigger && n.afterTrigger(t), this
    },
    triggerWithContext: function(t) {
      var e = this._$handlers[t],
        n = this._$eventProcessor;
      if (e) {
        var i = arguments,
          r = i.length;
        r > 4 && (i = od.call(i, 1, i.length - 1));
        for (var a = i[i.length - 1], o = e.length, s = 0; o > s;) {
          var l = e[s];
          if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;
          else {
            switch (r) {
              case 1:
                l.h.call(a);
                break;
              case 2:
                l.h.call(a, i[1]);
                break;
              case 3:
                l.h.call(a, i[1], i[2]);
                break;
              default:
                l.h.apply(a, i)
            }
            l.one ? (e.splice(s, 1), o--) : s++
          }
        }
      }
      return n && n.afterTrigger && n.afterTrigger(t), this
    }
  };
  var ld = "undefined" != typeof window && !!window.addEventListener,
    hd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ud = ld ? function(t) {
      t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
    } : function(t) {
      t.returnValue = !1, t.cancelBubble = !0
    },
    cd = "silent";
  he.prototype.dispose = function() {};
  var dd = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    fd = function(t, e, n, i) {
      sd.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new he, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, Q.call(this), this.setHandlerProxy(n)
    };
  fd.prototype = {
    constructor: fd,
    setHandlerProxy: function(t) {
      this.proxy && this.proxy.dispose(), t && (f(dd, function(e) {
        t.on && t.on(e, this[e], this)
      }, this), t.handler = this), this.proxy = t
    },
    mousemove: function(t) {
      var e = t.zrX,
        n = t.zrY,
        i = this._hovered,
        r = i.target;
      r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
      var a = this._hovered = this.findHover(e, n),
        o = a.target,
        s = this.proxy;
      s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t)
    },
    mouseout: function(t) {
      this.dispatchToElement(this._hovered, "mouseout", t);
      var e, n = t.toElement || t.relatedTarget;
      do n = n && n.parentNode; while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
      !e && this.trigger("globalout", {
        event: t
      })
    },
    resize: function() {
      this._hovered = {}
    },
    dispatch: function(t, e) {
      var n = this[t];
      n && n.call(this, e)
    },
    dispose: function() {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null
    },
    setCursorStyle: function(t) {
      var e = this.proxy;
      e.setCursor && e.setCursor(t)
    },
    dispatchToElement: function(t, e, n) {
      t = t || {};
      var i = t.target;
      if (!i || !i.silent) {
        for (var r = "on" + e, a = se(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble););
        a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
        }))
      }
    },
    findHover: function(t, e, n) {
      for (var i = this.storage.getDisplayList(), r = {
          x: t,
          y: e
        }, a = i.length - 1; a >= 0; a--) {
        var o;
        if (i[a] !== n && !i[a].ignore && (o = ue(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== cd)) {
          r.target = i[a];
          break
        }
      }
      return r
    }
  }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
    fd.prototype[t] = function(e) {
      var n = this.findHover(e.zrX, e.zrY),
        i = n.target;
      if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;
      else if ("mouseup" === t) this._upEl = i;
      else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || rd(this._downPoint, [e.zrX, e.zrY]) > 4) return;
        this._downPoint = null
      }
      this.dispatchToElement(n, t, e)
    }
  }), c(fd, sd), c(fd, Q);
  var pd = "undefined" == typeof Float32Array ? Array : Float32Array,
    gd = de,
    vd = 5e-5,
    md = function(t) {
      t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    },
    yd = md.prototype;
  yd.transform = null, yd.needLocalTransform = function() {
    return _e(this.rotation) || _e(this.position[0]) || _e(this.position[1]) || _e(this.scale[0] - 1) || _e(this.scale[1] - 1)
  };
  var _d = [];
  yd.updateTransform = function() {
    var t = this.parent,
      e = t && t.transform,
      n = this.needLocalTransform(),
      i = this.transform;
    if (!n && !e) return void(i && gd(i));
    i = i || ce(), n ? this.getLocalTransform(i) : gd(i), e && (n ? pe(i, t.transform, i) : fe(i, t.transform)), this.transform = i;
    var r = this.globalScaleRatio;
    if (null != r && 1 !== r) {
      this.getGlobalScale(_d);
      var a = _d[0] < 0 ? -1 : 1,
        o = _d[1] < 0 ? -1 : 1,
        s = ((_d[0] - a) * r + a) / _d[0] || 0,
        l = ((_d[1] - o) * r + o) / _d[1] || 0;
      i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l
    }
    this.invTransform = this.invTransform || ce(), ye(this.invTransform, i)
  }, yd.getLocalTransform = function(t) {
    return md.getLocalTransform(this, t)
  }, yd.setTransform = function(t) {
    var e = this.transform,
      n = t.dpr || 1;
    e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
  }, yd.restoreTransform = function(t) {
    var e = t.dpr || 1;
    t.setTransform(e, 0, 0, e, 0, 0)
  };
  var xd = [],
    wd = ce();
  yd.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1],
        n = t[2] * t[2] + t[3] * t[3],
        i = this.position,
        r = this.scale;
      _e(e - 1) && (e = Math.sqrt(e)), _e(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e)
    }
  }, yd.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent,
        e = this.transform;
      t && t.transform && (pe(xd, t.invTransform, e), e = xd);
      var n = this.origin;
      n && (n[0] || n[1]) && (wd[4] = n[0], wd[5] = n[1], pe(xd, e, wd), xd[4] -= n[0], xd[5] -= n[1], e = xd), this.setLocalTransform(e)
    }
  }, yd.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
  }, yd.transformCoordToLocal = function(t, e) {
    var n = [t, e],
      i = this.invTransform;
    return i && Z(n, n, i), n
  }, yd.transformCoordToGlobal = function(t, e) {
    var n = [t, e],
      i = this.transform;
    return i && Z(n, n, i), n
  }, md.getLocalTransform = function(t, e) {
    e = e || [], gd(e);
    var n = t.origin,
      i = t.scale || [1, 1],
      r = t.rotation || 0,
      a = t.position || [0, 0];
    return n && (e[4] -= n[0], e[5] -= n[1]), me(e, e, i), r && ve(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e
  };
  var bd = {
    linear: function(t) {
      return t
    },
    quadraticIn: function(t) {
      return t * t
    },
    quadraticOut: function(t) {
      return t * (2 - t)
    },
    quadraticInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
    },
    cubicIn: function(t) {
      return t * t * t
    },
    cubicOut: function(t) {
      return --t * t * t + 1
    },
    cubicInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
    },
    quarticIn: function(t) {
      return t * t * t * t
    },
    quarticOut: function(t) {
      return 1 - --t * t * t * t
    },
    quarticInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
    },
    quinticIn: function(t) {
      return t * t * t * t * t
    },
    quinticOut: function(t) {
      return --t * t * t * t * t + 1
    },
    quinticInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
    },
    sinusoidalIn: function(t) {
      return 1 - Math.cos(t * Math.PI / 2)
    },
    sinusoidalOut: function(t) {
      return Math.sin(t * Math.PI / 2)
    },
    sinusoidalInOut: function(t) {
      return .5 * (1 - Math.cos(Math.PI * t))
    },
    exponentialIn: function(t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1)
    },
    exponentialOut: function(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    },
    exponentialInOut: function(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
    },
    circularIn: function(t) {
      return 1 - Math.sqrt(1 - t * t)
    },
    circularOut: function(t) {
      return Math.sqrt(1 - --t * t)
    },
    circularInOut: function(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    },
    elasticIn: function(t) {
      var e, n = .1,
        i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
    },
    elasticOut: function(t) {
      var e, n = .1,
        i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
    },
    elasticInOut: function(t) {
      var e, n = .1,
        i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
    },
    backIn: function(t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e)
    },
    backOut: function(t) {
      var e = 1.70158;
      return --t * t * ((e + 1) * t + e) + 1
    },
    backInOut: function(t) {
      var e = 2.5949095;
      return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
    },
    bounceIn: function(t) {
      return 1 - bd.bounceOut(1 - t)
    },
    bounceOut: function(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    },
    bounceInOut: function(t) {
      return .5 > t ? .5 * bd.bounceIn(2 * t) : .5 * bd.bounceOut(2 * t - 1) + .5
    }
  };
  xe.prototype = {
    constructor: xe,
    step: function(t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void(this._pausedTime += e);
      var n = (t - this._startTime - this._pausedTime) / this._life;
      if (!(0 > n)) {
        n = Math.min(n, 1);
        var i = this.easing,
          r = "string" == typeof i ? bd[i] : i,
          a = "function" == typeof r ? r(n) : n;
        return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
      }
    },
    restart: function(t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;
      this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
    },
    fire: function(t, e) {
      t = "on" + t, this[t] && this[t](this._target, e)
    },
    pause: function() {
      this._paused = !0
    },
    resume: function() {
      this._paused = !1
    }
  };
  var Sd = function() {
      this.head = null, this.tail = null, this._len = 0
    },
    Md = Sd.prototype;
  Md.insert = function(t) {
    var e = new Id(t);
    return this.insertEntry(e), e
  }, Md.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
  }, Md.remove = function(t) {
    var e = t.prev,
      n = t.next;
    e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
  }, Md.len = function() {
    return this._len
  }, Md.clear = function() {
    this.head = this.tail = null, this._len = 0
  };
  var Id = function(t) {
      this.value = t, this.next, this.prev
    },
    Td = function(t) {
      this._list = new Sd, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
    },
    Cd = Td.prototype;
  Cd.put = function(t, e) {
    var n = this._list,
      i = this._map,
      r = null;
    if (null == i[t]) {
      var a = n.len(),
        o = this._lastRemovedEntry;
      if (a >= this._maxSize && a > 0) {
        var s = n.head;
        n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
      }
      o ? o.value = e : o = new Id(e), o.key = t, n.insertEntry(o), i[t] = o
    }
    return r
  }, Cd.get = function(t) {
    var e = this._map[t],
      n = this._list;
    return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
  }, Cd.clear = function() {
    this._list.clear(), this._map = {}
  };
  var Dd = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
      azure: [240, 255, 255, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      blueviolet: [138, 43, 226, 1],
      brown: [165, 42, 42, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      cornflowerblue: [100, 149, 237, 1],
      cornsilk: [255, 248, 220, 1],
      crimson: [220, 20, 60, 1],
      cyan: [0, 255, 255, 1],
      darkblue: [0, 0, 139, 1],
      darkcyan: [0, 139, 139, 1],
      darkgoldenrod: [184, 134, 11, 1],
      darkgray: [169, 169, 169, 1],
      darkgreen: [0, 100, 0, 1],
      darkgrey: [169, 169, 169, 1],
      darkkhaki: [189, 183, 107, 1],
      darkmagenta: [139, 0, 139, 1],
      darkolivegreen: [85, 107, 47, 1],
      darkorange: [255, 140, 0, 1],
      darkorchid: [153, 50, 204, 1],
      darkred: [139, 0, 0, 1],
      darksalmon: [233, 150, 122, 1],
      darkseagreen: [143, 188, 143, 1],
      darkslateblue: [72, 61, 139, 1],
      darkslategray: [47, 79, 79, 1],
      darkslategrey: [47, 79, 79, 1],
      darkturquoise: [0, 206, 209, 1],
      darkviolet: [148, 0, 211, 1],
      deeppink: [255, 20, 147, 1],
      deepskyblue: [0, 191, 255, 1],
      dimgray: [105, 105, 105, 1],
      dimgrey: [105, 105, 105, 1],
      dodgerblue: [30, 144, 255, 1],
      firebrick: [178, 34, 34, 1],
      floralwhite: [255, 250, 240, 1],
      forestgreen: [34, 139, 34, 1],
      fuchsia: [255, 0, 255, 1],
      gainsboro: [220, 220, 220, 1],
      ghostwhite: [248, 248, 255, 1],
      gold: [255, 215, 0, 1],
      goldenrod: [218, 165, 32, 1],
      gray: [128, 128, 128, 1],
      green: [0, 128, 0, 1],
      greenyellow: [173, 255, 47, 1],
      grey: [128, 128, 128, 1],
      honeydew: [240, 255, 240, 1],
      hotpink: [255, 105, 180, 1],
      indianred: [205, 92, 92, 1],
      indigo: [75, 0, 130, 1],
      ivory: [255, 255, 240, 1],
      khaki: [240, 230, 140, 1],
      lavender: [230, 230, 250, 1],
      lavenderblush: [255, 240, 245, 1],
      lawngreen: [124, 252, 0, 1],
      lemonchiffon: [255, 250, 205, 1],
      lightblue: [173, 216, 230, 1],
      lightcoral: [240, 128, 128, 1],
      lightcyan: [224, 255, 255, 1],
      lightgoldenrodyellow: [250, 250, 210, 1],
      lightgray: [211, 211, 211, 1],
      lightgreen: [144, 238, 144, 1],
      lightgrey: [211, 211, 211, 1],
      lightpink: [255, 182, 193, 1],
      lightsalmon: [255, 160, 122, 1],
      lightseagreen: [32, 178, 170, 1],
      lightskyblue: [135, 206, 250, 1],
      lightslategray: [119, 136, 153, 1],
      lightslategrey: [119, 136, 153, 1],
      lightsteelblue: [176, 196, 222, 1],
      lightyellow: [255, 255, 224, 1],
      lime: [0, 255, 0, 1],
      limegreen: [50, 205, 50, 1],
      linen: [250, 240, 230, 1],
      magenta: [255, 0, 255, 1],
      maroon: [128, 0, 0, 1],
      mediumaquamarine: [102, 205, 170, 1],
      mediumblue: [0, 0, 205, 1],
      mediumorchid: [186, 85, 211, 1],
      mediumpurple: [147, 112, 219, 1],
      mediumseagreen: [60, 179, 113, 1],
      mediumslateblue: [123, 104, 238, 1],
      mediumspringgreen: [0, 250, 154, 1],
      mediumturquoise: [72, 209, 204, 1],
      mediumvioletred: [199, 21, 133, 1],
      midnightblue: [25, 25, 112, 1],
      mintcream: [245, 255, 250, 1],
      mistyrose: [255, 228, 225, 1],
      moccasin: [255, 228, 181, 1],
      navajowhite: [255, 222, 173, 1],
      navy: [0, 0, 128, 1],
      oldlace: [253, 245, 230, 1],
      olive: [128, 128, 0, 1],
      olivedrab: [107, 142, 35, 1],
      orange: [255, 165, 0, 1],
      orangered: [255, 69, 0, 1],
      orchid: [218, 112, 214, 1],
      palegoldenrod: [238, 232, 170, 1],
      palegreen: [152, 251, 152, 1],
      paleturquoise: [175, 238, 238, 1],
      palevioletred: [219, 112, 147, 1],
      papayawhip: [255, 239, 213, 1],
      peachpuff: [255, 218, 185, 1],
      peru: [205, 133, 63, 1],
      pink: [255, 192, 203, 1],
      plum: [221, 160, 221, 1],
      powderblue: [176, 224, 230, 1],
      purple: [128, 0, 128, 1],
      red: [255, 0, 0, 1],
      rosybrown: [188, 143, 143, 1],
      royalblue: [65, 105, 225, 1],
      saddlebrown: [139, 69, 19, 1],
      salmon: [250, 128, 114, 1],
      sandybrown: [244, 164, 96, 1],
      seagreen: [46, 139, 87, 1],
      seashell: [255, 245, 238, 1],
      sienna: [160, 82, 45, 1],
      silver: [192, 192, 192, 1],
      skyblue: [135, 206, 235, 1],
      slateblue: [106, 90, 205, 1],
      slategray: [112, 128, 144, 1],
      slategrey: [112, 128, 144, 1],
      snow: [255, 250, 250, 1],
      springgreen: [0, 255, 127, 1],
      steelblue: [70, 130, 180, 1],
      tan: [210, 180, 140, 1],
      teal: [0, 128, 128, 1],
      thistle: [216, 191, 216, 1],
      tomato: [255, 99, 71, 1],
      turquoise: [64, 224, 208, 1],
      violet: [238, 130, 238, 1],
      wheat: [245, 222, 179, 1],
      white: [255, 255, 255, 1],
      whitesmoke: [245, 245, 245, 1],
      yellow: [255, 255, 0, 1],
      yellowgreen: [154, 205, 50, 1]
    },
    kd = new Td(20),
    Ad = null,
    Pd = Array.prototype.slice,
    Ld = function(t, e, n, i) {
      this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Be, this._setter = i || Ee, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
  Ld.prototype = {
    when: function(t, e) {
      var n = this._tracks;
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          if (!n[i]) {
            n[i] = [];
            var r = this._getter(this._target, i);
            if (null == r) continue;
            0 !== t && n[i].push({
              time: 0,
              value: Ge(r)
            })
          }
          n[i].push({
            time: t,
            value: e[i]
          })
        }
      return this
    },
    during: function(t) {
      return this._onframeList.push(t), this
    },
    pause: function() {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
      this._paused = !0
    },
    resume: function() {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
      this._paused = !1
    },
    isPaused: function() {
      return !!this._paused
    },
    _doneCallback: function() {
      this._tracks = {}, this._clipList.length = 0;
      for (var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this)
    },
    start: function(t, e) {
      var n, i = this,
        r = 0,
        a = function() {
          r--, r || i._doneCallback()
        };
      for (var o in this._tracks)
        if (this._tracks.hasOwnProperty(o)) {
          var s = qe(this, t, a, this._tracks[o], o, e);
          s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s)
        }
      if (n) {
        var l = n.onframe;
        n.onframe = function(t, e) {
          l(t, e);
          for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
        }
      }
      return r || this._doneCallback(), this
    },
    stop: function(t) {
      for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
        var r = e[i];
        t && r.onframe(this._target, 1), n && n.removeClip(r)
      }
      e.length = 0
    },
    delay: function(t) {
      return this._delay = t, this
    },
    done: function(t) {
      return t && this._doneList.push(t), this
    },
    getClips: function() {
      return this._clipList
    }
  };
  var Od = 1;
  "undefined" != typeof window && (Od = Math.max(window.devicePixelRatio || 1, 1));
  var Bd = 0,
    Ed = Od,
    zd = function() {};
  1 === Bd ? zd = function() {
    for (var t in arguments) throw new Error(arguments[t])
  } : Bd > 1 && (zd = function() {
    for (var t in arguments) console.log(arguments[t])
  });
  var Rd = zd,
    Fd = function() {
      this.animators = []
    };
  Fd.prototype = {
    constructor: Fd,
    animate: function(t, e) {
      var n, i = !1,
        r = this,
        a = this.__zr;
      if (t) {
        var o = t.split("."),
          s = r;
        i = "shape" === o[0];
        for (var l = 0, u = o.length; u > l; l++) s && (s = s[o[l]]);
        s && (n = s)
      } else n = r;
      if (!n) return void Rd('Property "' + t + '" is not existed in element ' + r.id);
      var c = r.animators,
        d = new Ld(n, e);
      return d.during(function() {
        r.dirty(i)
      }).done(function() {
        c.splice(h(c, d), 1)
      }), c.push(d), a && a.animation.addAnimator(d), d
    },
    stopAnimation: function(t) {
      for (var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);
      return e.length = 0, this
    },
    animateTo: function(t, e, n, i, r, a) {
      Ue(this, t, e, n, i, r, a)
    },
    animateFrom: function(t, e, n, i, r, a) {
      Ue(this, t, e, n, i, r, a, !0)
    }
  };
  var Nd = function(t) {
    md.call(this, t), sd.call(this, t), Fd.call(this, t), this.id = t.id || Vc()
  };
  Nd.prototype = {
    type: "element",
    name: "",
    __zr: null,
    ignore: !1,
    clipPath: null,
    isGroup: !1,
    drift: function(t, e) {
      switch (this.draggable) {
        case "horizontal":
          e = 0;
          break;
        case "vertical":
          t = 0
      }
      var n = this.transform;
      n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
    },
    beforeUpdate: function() {},
    afterUpdate: function() {},
    update: function() {
      this.updateTransform()
    },
    traverse: function() {},
    attrKV: function(t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var n = this[t];
          n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
        }
      } else this[t] = e
    },
    hide: function() {
      this.ignore = !0, this.__zr && this.__zr.refresh()
    },
    show: function() {
      this.ignore = !1, this.__zr && this.__zr.refresh()
    },
    attr: function(t, e) {
      if ("string" == typeof t) this.attrKV(t, e);
      else if (b(t))
        for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
      return this.dirty(!1), this
    },
    setClipPath: function(t) {
      var e = this.__zr;
      e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
    },
    removeClipPath: function() {
      var t = this.clipPath;
      t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
    },
    addSelfToZr: function(t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
      this.clipPath && this.clipPath.addSelfToZr(t)
    },
    removeSelfFromZr: function(t) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
      this.clipPath && this.clipPath.removeSelfFromZr(t)
    }
  }, c(Nd, Fd), c(Nd, md), c(Nd, sd);
  var Hd = Z,
    Vd = Math.min,
    Wd = Math.max;
  $e.prototype = {
    constructor: $e,
    union: function(t) {
      var e = Vd(t.x, this.x),
        n = Vd(t.y, this.y);
      this.width = Wd(t.x + t.width, this.x + this.width) - e, this.height = Wd(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
    },
    applyTransform: function() {
      var t = [],
        e = [],
        n = [],
        i = [];
      return function(r) {
        if (r) {
          t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, Hd(t, t, r), Hd(e, e, r), Hd(n, n, r), Hd(i, i, r), this.x = Vd(t[0], e[0], n[0], i[0]), this.y = Vd(t[1], e[1], n[1], i[1]);
          var a = Wd(t[0], e[0], n[0], i[0]),
            o = Wd(t[1], e[1], n[1], i[1]);
          this.width = a - this.x, this.height = o - this.y
        }
      }
    }(),
    calculateTransform: function(t) {
      var e = this,
        n = t.width / e.width,
        i = t.height / e.height,
        r = ce();
      return ge(r, r, [-e.x, -e.y]), me(r, r, [n, i]), ge(r, r, [t.x, t.y]), r
    },
    intersect: function(t) {
      if (!t) return !1;
      t instanceof $e || (t = $e.create(t));
      var e = this,
        n = e.x,
        i = e.x + e.width,
        r = e.y,
        a = e.y + e.height,
        o = t.x,
        s = t.x + t.width,
        l = t.y,
        h = t.y + t.height;
      return !(o > i || n > s || l > a || r > h)
    },
    contain: function(t, e) {
      var n = this;
      return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
    },
    clone: function() {
      return new $e(this.x, this.y, this.width, this.height)
    },
    copy: function(t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
    },
    plain: function() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      }
    }
  }, $e.create = function(t) {
    return new $e(t.x, t.y, t.width, t.height)
  };
  var Gd = function(t) {
    t = t || {}, Nd.call(this, t);
    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
    this._children = [], this.__storage = null, this.__dirty = !0
  };
  Gd.prototype = {
    constructor: Gd,
    isGroup: !0,
    type: "group",
    silent: !1,
    children: function() {
      return this._children.slice()
    },
    childAt: function(t) {
      return this._children[t]
    },
    childOfName: function(t) {
      for (var e = this._children, n = 0; n < e.length; n++)
        if (e[n].name === t) return e[n]
    },
    childCount: function() {
      return this._children.length
    },
    add: function(t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
    },
    addBefore: function(t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var n = this._children,
          i = n.indexOf(e);
        i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
      }
      return this
    },
    _doAdd: function(t) {
      t.parent && t.parent.remove(t), t.parent = this;
      var e = this.__storage,
        n = this.__zr;
      e && e !== t.__storage && (e.addToStorage(t), t instanceof Gd && t.addChildrenToStorage(e)), n && n.refresh()
    },
    remove: function(t) {
      var e = this.__zr,
        n = this.__storage,
        i = this._children,
        r = h(i, t);
      return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Gd && t.delChildrenFromStorage(n)), e && e.refresh(), this)
    },
    removeAll: function() {
      var t, e, n = this._children,
        i = this.__storage;
      for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof Gd && t.delChildrenFromStorage(i)), t.parent = null;
      return n.length = 0, this
    },
    eachChild: function(t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];
        t.call(e, r, i)
      }
      return this
    },
    traverse: function(t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        t.call(e, i), "group" === i.type && i.traverse(t, e)
      }
      return this
    },
    addChildrenToStorage: function(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];
        t.addToStorage(n), n instanceof Gd && n.addChildrenToStorage(t)
      }
    },
    delChildrenFromStorage: function(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];
        t.delFromStorage(n), n instanceof Gd && n.delChildrenFromStorage(t)
      }
    },
    dirty: function() {
      return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
    },
    getBoundingRect: function(t) {
      for (var e = null, n = new $e(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
        var o = i[a];
        if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
            l = o.getLocalTransform(r);
          l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s))
        }
      }
      return e || n
    }
  }, u(Gd, Nd);
  var Xd = 32,
    Yd = 7,
    qd = function() {
      this._roots = [], this._displayList = [], this._displayListLen = 0
    };
  qd.prototype = {
    constructor: qd,
    traverse: function(t, e) {
      for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
    },
    getDisplayList: function(t, e) {
      return e = e || !1, t && this.updateDisplayList(e), this._displayList
    },
    updateDisplayList: function(t) {
      this._displayListLen = 0;
      for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
      n.length = this._displayListLen, Gc.canvasSupported && an(n, on)
    },
    _updateAndAddDisplayable: function(t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
        var i = t.clipPath;
        if (i) {
          e = e ? e.slice() : [];
          for (var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
        }
        if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];
            t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
          }
          t.__dirty = !1
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
      }
    },
    addRoot: function(t) {
      t.__storage !== this && (t instanceof Gd && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
    },
    delRoot: function(t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var n = this._roots[e];
          n instanceof Gd && n.delChildrenFromStorage(this)
        }
        return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
      }
      if (t instanceof Array)
        for (var e = 0, i = t.length; i > e; e++) this.delRoot(t[e]);
      else {
        var r = h(this._roots, t);
        r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Gd && t.delChildrenFromStorage(this))
      }
    },
    addToStorage: function(t) {
      return t && (t.__storage = this, t.dirty(!1)), this
    },
    delFromStorage: function(t) {
      return t && (t.__storage = null), this
    },
    dispose: function() {
      this._renderList = this._roots = null
    },
    displayableSortFunc: on
  };
  var Ud = {
      shadowBlur: 1,
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      textShadowBlur: 1,
      textShadowOffsetX: 1,
      textShadowOffsetY: 1,
      textBoxShadowBlur: 1,
      textBoxShadowOffsetX: 1,
      textBoxShadowOffsetY: 1
    },
    jd = function(t, e, n) {
      return Ud.hasOwnProperty(e) ? n *= t.dpr : n
    },
    Zd = [
      ["shadowBlur", 0],
      ["shadowOffsetX", 0],
      ["shadowOffsetY", 0],
      ["shadowColor", "#000"],
      ["lineCap", "butt"],
      ["lineJoin", "miter"],
      ["miterLimit", 10]
    ],
    $d = function(t) {
      this.extendFrom(t, !1)
    };
  $d.prototype = {
    constructor: $d,
    fill: "#000",
    stroke: null,
    opacity: 1,
    fillOpacity: null,
    strokeOpacity: null,
    lineDash: null,
    lineDashOffset: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    lineWidth: 1,
    strokeNoScale: !1,
    text: null,
    font: null,
    textFont: null,
    fontStyle: null,
    fontWeight: null,
    fontSize: null,
    fontFamily: null,
    textTag: null,
    textFill: "#000",
    textStroke: null,
    textWidth: null,
    textHeight: null,
    textStrokeWidth: 0,
    textLineHeight: null,
    textPosition: "inside",
    textRect: null,
    textOffset: null,
    textAlign: null,
    textVerticalAlign: null,
    textDistance: 5,
    textShadowColor: "transparent",
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    textBoxShadowColor: "transparent",
    textBoxShadowBlur: 0,
    textBoxShadowOffsetX: 0,
    textBoxShadowOffsetY: 0,
    transformText: !1,
    textRotation: 0,
    textOrigin: null,
    textBackgroundColor: null,
    textBorderColor: null,
    textBorderWidth: 0,
    textBorderRadius: 0,
    textPadding: null,
    rich: null,
    truncate: null,
    blend: null,
    bind: function(t, e, n) {
      for (var i = this, r = n && n.style, a = !r, o = 0; o < Zd.length; o++) {
        var s = Zd[o],
          l = s[0];
        (a || i[l] !== r[l]) && (t[l] = jd(t, l, i[l] || s[1]))
      }
      if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
        var h = i.lineWidth;
        t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
      }
    },
    hasFill: function() {
      var t = this.fill;
      return null != t && "none" !== t
    },
    hasStroke: function() {
      var t = this.stroke;
      return null != t && "none" !== t && this.lineWidth > 0
    },
    extendFrom: function(t, e) {
      if (t)
        for (var n in t) !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
    },
    set: function(t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
    },
    clone: function() {
      var t = new this.constructor;
      return t.extendFrom(this, !0), t
    },
    getGradient: function(t, e, n) {
      for (var i = "radial" === e.type ? ln : sn, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);
      return r
    }
  };
  for (var Kd = $d.prototype, Qd = 0; Qd < Zd.length; Qd++) {
    var Jd = Zd[Qd];
    Jd[0] in Kd || (Kd[Jd[0]] = Jd[1])
  }
  $d.getGradient = Kd.getGradient;
  var tf = function(t, e) {
    this.image = t, this.repeat = e, this.type = "pattern"
  };
  tf.prototype.getCanvasPattern = function(t) {
    return t.createPattern(this.image, this.repeat || "repeat")
  };
  var ef = function(t, e, n) {
    var i;
    n = n || Ed, "string" == typeof t ? i = un(t, e, n) : b(t) && (i = t, t = i.id), this.id = t, this.dom = i;
    var r = i.style;
    r && (i.onselectstart = hn, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
  };
  ef.prototype = {
    constructor: ef,
    __dirty: !0,
    __used: !1,
    __drawIndex: 0,
    __startIndex: 0,
    __endIndex: 0,
    incremental: !1,
    getElementCount: function() {
      return this.__endIndex - this.__startIndex
    },
    initContext: function() {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
    },
    createBackBuffer: function() {
      var t = this.dpr;
      this.domBack = un("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
    },
    resize: function(t, e) {
      var n = this.dpr,
        i = this.dom,
        r = i.style,
        a = this.domBack;
      r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n))
    },
    clear: function(t, e) {
      var n = this.dom,
        i = this.ctx,
        r = n.width,
        a = n.height,
        e = e || this.clearColor,
        o = this.motionBlur && !t,
        s = this.lastFrameAlpha,
        l = this.dpr;
      if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var h;
        e.colorStops ? (h = e.__canvasGradient || $d.getGradient(i, e, {
          x: 0,
          y: 0,
          width: r,
          height: a
        }), e.__canvasGradient = h) : e.image && (h = tf.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = h || e, i.fillRect(0, 0, r, a), i.restore()
      }
      if (o) {
        var u = this.domBack;
        i.save(), i.globalAlpha = s, i.drawImage(u, 0, 0, r, a), i.restore()
      }
    }
  };
  var nf = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
      setTimeout(t, 16)
    },
    rf = new Td(50),
    af = {},
    of = 0,
    sf = 5e3,
    lf = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
    hf = "12px sans-serif",
    uf = {};
  uf.measureText = function(t, e) {
    var n = l();
    return n.font = e || hf, n.measureText(t)
  };
  var cf = {
      left: 1,
      right: 1,
      center: 1
    },
    df = {
      top: 1,
      bottom: 1,
      middle: 1
    },
    ff = [
      ["textShadowBlur", "shadowBlur", 0],
      ["textShadowOffsetX", "shadowOffsetX", 0],
      ["textShadowOffsetY", "shadowOffsetY", 0],
      ["textShadowColor", "shadowColor", "transparent"]
    ],
    pf = new $e,
    gf = function() {};
  gf.prototype = {
    constructor: gf,
    drawRectText: function(t, e) {
      var n = this.style;
      e = n.textRect || e, this.__dirty && On(n, !0);
      var i = n.text;
      if (null != i && (i += ""), $n(i, n)) {
        t.save();
        var r = this.transform;
        n.transformText ? this.setTransform(t) : r && (pf.copy(e), pf.applyTransform(r), e = pf), En(this, t, i, n, e), t.restore()
      }
    }
  }, Kn.prototype = {
    constructor: Kn,
    type: "displayable",
    __dirty: !0,
    invisible: !1,
    z: 0,
    z2: 0,
    zlevel: 0,
    draggable: !1,
    dragging: !1,
    silent: !1,
    culling: !1,
    cursor: "pointer",
    rectHover: !1,
    progressive: !1,
    incremental: !1,
    globalScaleRatio: 1,
    beforeBrush: function() {},
    afterBrush: function() {},
    brush: function() {},
    getBoundingRect: function() {},
    contain: function(t, e) {
      return this.rectContain(t, e)
    },
    traverse: function(t, e) {
      t.call(e, this)
    },
    rectContain: function(t, e) {
      var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect();
      return i.contain(n[0], n[1])
    },
    dirty: function() {
      this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
    },
    animateStyle: function(t) {
      return this.animate("style", t)
    },
    attrKV: function(t, e) {
      "style" !== t ? Nd.prototype.attrKV.call(this, t, e) : this.style.set(e)
    },
    setStyle: function(t, e) {
      return this.style.set(t, e), this.dirty(!1), this
    },
    useStyle: function(t) {
      return this.style = new $d(t, this), this.dirty(!1), this
    }
  }, u(Kn, Nd), c(Kn, gf), Qn.prototype = {
    constructor: Qn,
    type: "image",
    brush: function(t, e) {
      var n = this.style,
        i = n.image;
      n.bind(t, this, e);
      var r = this._image = dn(i, this._image, this, this.onload);
      if (r && pn(r)) {
        var a = n.x || 0,
          o = n.y || 0,
          s = n.width,
          l = n.height,
          h = r.width / r.height;
        if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
          var u = n.sx || 0,
            c = n.sy || 0;
          t.drawImage(r, u, c, n.sWidth, n.sHeight, a, o, s, l)
        } else if (n.sx && n.sy) {
          var u = n.sx,
            c = n.sy,
            d = s - u,
            f = l - c;
          t.drawImage(r, u, c, d, f, a, o, s, l)
        } else t.drawImage(r, a, o, s, l);
        null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
      }
    },
    getBoundingRect: function() {
      var t = this.style;
      return this._rect || (this._rect = new $e(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
    }
  }, u(Qn, Kn);
  var vf = 1e5,
    mf = 314159,
    yf = .01,
    _f = .001,
    xf = new $e(0, 0, 0, 0),
    wf = new $e(0, 0, 0, 0),
    bf = function(t, e, n) {
      this.type = "canvas";
      var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
      this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Ed, this._singleCanvas = i, this.root = t;
      var r = t.style;
      r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
      var a = this._zlevelList = [],
        s = this._layers = {};
      if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
        var l = t.width,
          h = t.height;
        null != n.width && (l = n.width), null != n.height && (h = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;
        var u = new ef(t, this, this.dpr);
        u.__builtin__ = !0, u.initContext(), s[mf] = u, u.zlevel = mf, a.push(mf), this._domRoot = t
      } else {
        this._width = this._getSize(0), this._height = this._getSize(1);
        var c = this._domRoot = ri(this._width, this._height);
        t.appendChild(c)
      }
      this._hoverlayer = null, this._hoverElements = []
    };
  bf.prototype = {
    constructor: bf,
    getType: function() {
      return "canvas"
    },
    isSingleCanvas: function() {
      return this._singleCanvas
    },
    getViewportRoot: function() {
      return this._domRoot
    },
    getViewportRootOffset: function() {
      var t = this.getViewportRoot();
      return t ? {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      } : void 0
    },
    refresh: function(t) {
      var e = this.storage.getDisplayList(!0),
        n = this._zlevelList;
      this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
      for (var i = 0; i < n.length; i++) {
        var r = n[i],
          a = this._layers[r];
        if (!a.__builtin__ && a.refresh) {
          var o = 0 === i ? this._backgroundColor : null;
          a.refresh(o)
        }
      }
      return this.refreshHover(), this
    },
    addHover: function(t, e) {
      if (!t.__hoverMir) {
        var n = new t.constructor({
          style: t.style,
          shape: t.shape,
          z: t.z,
          z2: t.z2,
          silent: t.silent
        });
        return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n
      }
    },
    removeHover: function(t) {
      var e = t.__hoverMir,
        n = this._hoverElements,
        i = h(n, e);
      i >= 0 && n.splice(i, 1), t.__hoverMir = null
    },
    clearHover: function() {
      for (var t = this._hoverElements, e = 0; e < t.length; e++) {
        var n = t[e].__from;
        n && (n.__hoverMir = null)
      }
      t.length = 0
    },
    refreshHover: function() {
      var t = this._hoverElements,
        e = t.length,
        n = this._hoverlayer;
      if (n && n.clear(), e) {
        an(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(vf));
        var i = {};
        n.ctx.save();
        for (var r = 0; e > r;) {
          var a = t[r],
            o = a.__from;
          o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--)
        }
        n.ctx.restore()
      }
    },
    getHoverLayer: function() {
      return this.getLayer(vf)
    },
    _paintList: function(t, e, n) {
      if (this._redrawId === n) {
        e = e || !1, this._updateLayerStatus(t);
        var i = this._doPaintList(t, e);
        if (this._needsManuallyCompositing && this._compositeManually(), !i) {
          var r = this;
          nf(function() {
            r._paintList(t, e, n)
          })
        }
      }
    },
    _compositeManually: function() {
      var t = this.getLayer(mf).ctx,
        e = this._domRoot.width,
        n = this._domRoot.height;
      t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n)
      })
    },
    _doPaintList: function(t, e) {
      for (var n = [], i = 0; i < this._zlevelList.length; i++) {
        var r = this._zlevelList[i],
          a = this._layers[r];
        a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a)
      }
      for (var o = !0, s = 0; s < n.length; s++) {
        var a = n[s],
          l = a.ctx,
          h = {};
        l.save();
        var u = e ? a.__startIndex : a.__drawIndex,
          c = !e && a.incremental && Date.now,
          d = c && Date.now(),
          p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
        if (a.__startIndex === a.__endIndex) a.clear(!1, p);
        else if (u === a.__startIndex) {
          var g = t[u];
          g.incremental && g.notClear && !e || a.clear(!1, p)
        } - 1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = a.__startIndex);
        for (var v = u; v < a.__endIndex; v++) {
          var m = t[v];
          if (this._doPaintEl(m, a, e, h), m.__dirty = m.__dirtyText = !1, c) {
            var y = Date.now() - d;
            if (y > 15) break
          }
        }
        a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), l.restore()
      }
      return Gc.wxa && f(this._layers, function(t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw()
      }), o
    },
    _doPaintEl: function(t, e, n, i) {
      var r = e.ctx,
        a = t.transform;
      if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && ei(t, this._width, this._height))) {
        var o = t.__clipPaths;
        (!i.prevElClipPaths || ni(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), ii(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
      }
    },
    getLayer: function(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = mf);
      var n = this._layers[t];
      return n || (n = new ef("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
    },
    insertLayer: function(t, e) {
      var n = this._layers,
        i = this._zlevelList,
        r = i.length,
        a = null,
        o = -1,
        s = this._domRoot;
      if (n[t]) return void Rd("ZLevel " + t + " has been used already");
      if (!ti(e)) return void Rd("Layer of zlevel " + t + " is not valid");
      if (r > 0 && t > i[0]) {
        for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++);
        a = n[i[o]]
      }
      if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual)
        if (a) {
          var l = a.dom;
          l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
        } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
    },
    eachLayer: function(t, e) {
      var n, i, r = this._zlevelList;
      for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
    },
    eachBuiltinLayer: function(t, e) {
      var n, i, r, a = this._zlevelList;
      for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i)
    },
    eachOtherLayer: function(t, e) {
      var n, i, r, a = this._zlevelList;
      for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i)
    },
    getLayers: function() {
      return this._layers
    },
    _updateLayerStatus: function(t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
      }
      if (this.eachBuiltinLayer(function(t) {
          t.__dirty = t.__used = !1
        }), this._singleCanvas)
        for (var n = 1; n < t.length; n++) {
          var i = t[n];
          if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
            this._needsManuallyCompositing = !0;
            break
          }
        }
      for (var r = null, a = 0, n = 0; n < t.length; n++) {
        var o, i = t[n],
          s = i.zlevel;
        i.incremental ? (o = this.getLayer(s + _f, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? yf : 0), this._needsManuallyCompositing), o.__builtin__ || Rd("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n))
      }
      e(n), this.eachBuiltinLayer(function(t) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
      })
    },
    clear: function() {
      return this.eachBuiltinLayer(this._clearLayer), this
    },
    _clearLayer: function(t) {
      t.clear()
    },
    setBackgroundColor: function(t) {
      this._backgroundColor = t
    },
    configLayer: function(t, e) {
      if (e) {
        var n = this._layerConfig;
        n[t] ? r(n[t], e, !0) : n[t] = e;
        for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];
          if (a === t || a === t + yf) {
            var o = this._layers[a];
            r(o, n[t], !0)
          }
        }
      }
    },
    delLayer: function(t) {
      var e = this._layers,
        n = this._zlevelList,
        i = e[t];
      i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(h(n, t), 1))
    },
    resize: function(t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;
        n.style.display = "none";
        var i = this._opts;
        if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
          n.style.width = t + "px", n.style.height = e + "px";
          for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
          f(this._progressiveLayers, function(n) {
            n.resize(t, e)
          }), this.refresh(!0)
        }
        this._width = t, this._height = e
      } else {
        if (null == t || null == e) return;
        this._width = t, this._height = e, this.getLayer(mf).resize(t, e)
      }
      return this
    },
    clearLayer: function(t) {
      var e = this._layers[t];
      e && e.clear()
    },
    dispose: function() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
    },
    getRenderedCanvas: function(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[mf].dom;
      var e = new ef("image", this, t.pixelRatio || this.dpr);
      if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();
        var n = e.dom.width,
          i = e.dom.height,
          r = e.ctx;
        this.eachLayer(function(t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
        })
      } else
        for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
          var l = o[s];
          this._doPaintEl(l, e, !0, a)
        }
      return e.dom
    },
    getWidth: function() {
      return this._width
    },
    getHeight: function() {
      return this._height
    },
    _getSize: function(t) {
      var e = this._opts,
        n = ["width", "height"][t],
        i = ["clientWidth", "clientHeight"][t],
        r = ["paddingLeft", "paddingTop"][t],
        a = ["paddingRight", "paddingBottom"][t];
      if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
      var o = this.root,
        s = document.defaultView.getComputedStyle(o);
      return (o[i] || Jn(s[n]) || Jn(o.style[n])) - (Jn(s[r]) || 0) - (Jn(s[a]) || 0) | 0
    },
    pathToImage: function(t, e) {
      e = e || this.dpr;
      var n = document.createElement("canvas"),
        i = n.getContext("2d"),
        r = t.getBoundingRect(),
        a = t.style,
        o = a.shadowBlur * e,
        s = a.shadowOffsetX * e,
        l = a.shadowOffsetY * e,
        h = a.hasStroke() ? a.lineWidth : 0,
        u = Math.max(h / 2, -s + o),
        c = Math.max(h / 2, s + o),
        d = Math.max(h / 2, -l + o),
        f = Math.max(h / 2, l + o),
        p = r.width + u + c,
        g = r.height + d + f;
      n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
      var v = {
        position: t.position,
        rotation: t.rotation,
        scale: t.scale
      };
      t.position = [u - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
      var m = Qn,
        y = new m({
          style: {
            x: 0,
            y: 0,
            image: n
          }
        });
      return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y
    }
  };
  var Sf = function(t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, sd.call(this)
  };
  Sf.prototype = {
    constructor: Sf,
    addClip: function(t) {
      this._clips.push(t)
    },
    addAnimator: function(t) {
      t.animation = this;
      for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
    },
    removeClip: function(t) {
      var e = h(this._clips, t);
      e >= 0 && this._clips.splice(e, 1)
    },
    removeAnimator: function(t) {
      for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
      t.animation = null
    },
    _update: function() {
      for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
        var s = n[o],
          l = s.step(t, e);
        l && (r.push(l), a.push(s))
      }
      for (var o = 0; i > o;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
      i = r.length;
      for (var o = 0; i > o; o++) a[o].fire(r[o]);
      this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
    },
    _startLoop: function() {
      function t() {
        e._running && (nf(t), !e._paused && e._update())
      }
      var e = this;
      this._running = !0, nf(t)
    },
    start: function() {
      this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
    },
    stop: function() {
      this._running = !1
    },
    pause: function() {
      this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
    },
    resume: function() {
      this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
    },
    clear: function() {
      this._clips = []
    },
    isFinished: function() {
      return !this._clips.length
    },
    animate: function(t, e) {
      e = e || {};
      var n = new Ld(t, e.loop, e.getter, e.setter);
      return this.addAnimator(n), n
    }
  }, c(Sf, sd);
  var Mf = function() {
    this._track = []
  };
  Mf.prototype = {
    constructor: Mf,
    recognize: function(t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t)
    },
    clear: function() {
      return this._track.length = 0, this
    },
    _doTrack: function(t, e, n) {
      var i = t.touches;
      if (i) {
        for (var r = {
            points: [],
            touches: [],
            target: e,
            event: t
          }, a = 0, o = i.length; o > a; a++) {
          var s = i[a],
            l = ne(n, s, {});
          r.points.push([l.zrX, l.zrY]), r.touches.push(s)
        }
        this._track.push(r)
      }
    },
    _recognize: function(t) {
      for (var e in If)
        if (If.hasOwnProperty(e)) {
          var n = If[e](this._track, t);
          if (n) return n
        }
    }
  };
  var If = {
      pinch: function(t, e) {
        var n = t.length;
        if (n) {
          var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;
          if (r && r.length > 1 && i && i.length > 1) {
            var a = ai(i) / ai(r);
            !isFinite(a) && (a = 1), e.pinchScale = a;
            var o = oi(i);
            return e.pinchX = o[0], e.pinchY = o[1], {
              type: "pinch",
              target: t[0].target,
              event: e
            }
          }
        }
      }
    },
    Tf = 300,
    Cf = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    Df = ["touchstart", "touchend", "touchmove"],
    kf = {
      pointerdown: 1,
      pointerup: 1,
      pointermove: 1,
      pointerout: 1
    },
    Af = p(Cf, function(t) {
      var e = t.replace("mouse", "pointer");
      return kf[e] ? e : t
    }),
    Pf = {
      mousemove: function(t) {
        t = re(this.dom, t), this.trigger("mousemove", t)
      },
      mouseout: function(t) {
        t = re(this.dom, t);
        var e = t.toElement || t.relatedTarget;
        if (e != this.dom)
          for (; e && 9 != e.nodeType;) {
            if (e === this.dom) return;
            e = e.parentNode
          }
        this.trigger("mouseout", t)
      },
      touchstart: function(t) {
        t = re(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, li(this, t, "start"), Pf.mousemove.call(this, t), Pf.mousedown.call(this, t), hi(this)
      },
      touchmove: function(t) {
        t = re(this.dom, t), t.zrByTouch = !0, li(this, t, "change"), Pf.mousemove.call(this, t), hi(this)
      },
      touchend: function(t) {
        t = re(this.dom, t), t.zrByTouch = !0, li(this, t, "end"), Pf.mouseup.call(this, t), +new Date - this._lastTouchMoment < Tf && Pf.click.call(this, t), hi(this)
      },
      pointerdown: function(t) {
        Pf.mousedown.call(this, t)
      },
      pointermove: function(t) {
        ui(t) || Pf.mousemove.call(this, t)
      },
      pointerup: function(t) {
        Pf.mouseup.call(this, t)
      },
      pointerout: function(t) {
        ui(t) || Pf.mouseout.call(this, t)
      }
    };
  f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
    Pf[t] = function(e) {
      e = re(this.dom, e), this.trigger(t, e)
    }
  });
  var Lf = di.prototype;
  Lf.dispose = function() {
    for (var t = Cf.concat(Df), e = 0; e < t.length; e++) {
      var n = t[e];
      oe(this.dom, si(n), this._handlers[n])
    }
  }, Lf.setCursor = function(t) {
    this.dom.style && (this.dom.style.cursor = t || "default")
  }, c(di, sd);
  var Of = !Gc.canvasSupported,
    Bf = {
      canvas: bf
    },
    Ef = function(t, e, n) {
      n = n || {}, this.dom = e, this.id = t;
      var i = this,
        r = new qd,
        a = n.renderer;
      if (Of) {
        if (!Bf.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
        a = "vml"
      } else a && Bf[a] || (a = "canvas");
      var o = new Bf[a](e, r, n, t);
      this.storage = r, this.painter = o;
      var s = Gc.node || Gc.worker ? null : new di(o.getViewportRoot());
      this.handler = new fd(r, o, s, o.root), this.animation = new Sf({
        stage: {
          update: m(this.flush, this)
        }
      }), this.animation.start(), this._needsRefresh;
      var l = r.delFromStorage,
        h = r.addToStorage;
      r.delFromStorage = function(t) {
        l.call(r, t), t && t.removeSelfFromZr(i)
      }, r.addToStorage = function(t) {
        h.call(r, t), t.addSelfToZr(i)
      }
    };
  Ef.prototype = {
    constructor: Ef,
    getId: function() {
      return this.id
    },
    add: function(t) {
      this.storage.addRoot(t), this._needsRefresh = !0
    },
    remove: function(t) {
      this.storage.delRoot(t), this._needsRefresh = !0
    },
    configLayer: function(t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
    },
    setBackgroundColor: function(t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
    },
    refreshImmediately: function() {
      this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
    },
    refresh: function() {
      this._needsRefresh = !0
    },
    flush: function() {
      var t;
      this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
    },
    addHover: function(t, e) {
      if (this.painter.addHover) {
        var n = this.painter.addHover(t, e);
        return this.refreshHover(), n
      }
    },
    removeHover: function(t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
    },
    clearHover: function() {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
    },
    refreshHover: function() {
      this._needsRefreshHover = !0
    },
    refreshHoverImmediately: function() {
      this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
    },
    resize: function(t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
    },
    clearAnimation: function() {
      this.animation.clear()
    },
    getWidth: function() {
      return this.painter.getWidth()
    },
    getHeight: function() {
      return this.painter.getHeight()
    },
    pathToImage: function(t, e) {
      return this.painter.pathToImage(t, e)
    },
    setCursorStyle: function(t) {
      this.handler.setCursorStyle(t)
    },
    findHover: function(t, e) {
      return this.handler.findHover(t, e)
    },
    on: function(t, e, n) {
      this.handler.on(t, e, n)
    },
    off: function(t, e) {
      this.handler.off(t, e)
    },
    trigger: function(t, e) {
      this.handler.trigger(t, e)
    },
    clear: function() {
      this.storage.delRoot(), this.painter.clear()
    },
    dispose: function() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null
    }
  };
  var zf = f,
    Rf = b,
    Ff = _,
    Nf = "series\x00",
    Hf = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
    Vf = 0,
    Wf = ".",
    Gf = "___EC__COMPONENT__CONTAINER___",
    Xf = 0,
    Yf = function(t) {
      for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
      return function(e, n, i) {
        for (var r = {}, a = 0; a < t.length; a++) {
          var o = t[a][1];
          if (!(n && h(n, o) >= 0 || i && h(i, o) < 0)) {
            var s = e.getShallow(o);
            null != s && (r[t[a][0]] = s)
          }
        }
        return r
      }
    },
    qf = Yf([
      ["lineWidth", "width"],
      ["stroke", "color"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"]
    ]),
    Uf = {
      getLineStyle: function(t) {
        var e = qf(this, t),
          n = this.getLineDash(e.lineWidth);
        return n && (e.lineDash = n), e
      },
      getLineDash: function(t) {
        null == t && (t = 1);
        var e = this.get("type"),
          n = Math.max(t, 2),
          i = 4 * t;
        return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
      }
    },
    jf = Yf([
      ["fill", "color"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["opacity"],
      ["shadowColor"]
    ]),
    Zf = {
      getAreaStyle: function(t, e) {
        return jf(this, t, e)
      }
    },
    $f = Math.pow,
    Kf = Math.sqrt,
    Qf = 1e-8,
    Jf = 1e-4,
    tp = Kf(3),
    ep = 1 / 3,
    np = N(),
    ip = N(),
    rp = N(),
    ap = Math.min,
    op = Math.max,
    sp = Math.sin,
    lp = Math.cos,
    hp = 2 * Math.PI,
    up = N(),
    cp = N(),
    dp = N(),
    fp = [],
    pp = [],
    gp = {
      M: 1,
      L: 2,
      C: 3,
      Q: 4,
      A: 5,
      Z: 6,
      R: 7
    },
    vp = [],
    mp = [],
    yp = [],
    _p = [],
    xp = Math.min,
    wp = Math.max,
    bp = Math.cos,
    Sp = Math.sin,
    Mp = Math.sqrt,
    Ip = Math.abs,
    Tp = "undefined" != typeof Float32Array,
    Cp = function(t) {
      this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
    };
  Cp.prototype = {
    constructor: Cp,
    _xi: 0,
    _yi: 0,
    _x0: 0,
    _y0: 0,
    _ux: 0,
    _uy: 0,
    _len: 0,
    _lineDash: null,
    _dashOffset: 0,
    _dashIdx: 0,
    _dashSum: 0,
    setScale: function(t, e) {
      this._ux = Ip(1 / Ed / t) || 0, this._uy = Ip(1 / Ed / e) || 0
    },
    getContext: function() {
      return this._ctx
    },
    beginPath: function(t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
    },
    moveTo: function(t, e) {
      return this.addData(gp.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
    },
    lineTo: function(t, e) {
      var n = Ip(t - this._xi) > this._ux || Ip(e - this._yi) > this._uy || this._len < 5;
      return this.addData(gp.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
    },
    bezierCurveTo: function(t, e, n, i, r, a) {
      return this.addData(gp.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this
    },
    quadraticCurveTo: function(t, e, n, i) {
      return this.addData(gp.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
    },
    arc: function(t, e, n, i, r, a) {
      return this.addData(gp.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = bp(r) * n + t, this._yi = Sp(r) * n + e, this
    },
    arcTo: function(t, e, n, i, r) {
      return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
    },
    rect: function(t, e, n, i) {
      return this._ctx && this._ctx.rect(t, e, n, i), this.addData(gp.R, t, e, n, i), this
    },
    closePath: function() {
      this.addData(gp.Z);
      var t = this._ctx,
        e = this._x0,
        n = this._y0;
      return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
    },
    fill: function(t) {
      t && t.fill(), this.toStatic()
    },
    stroke: function(t) {
      t && t.stroke(), this.toStatic()
    },
    setLineDash: function(t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;
        for (var e = 0, n = 0; n < t.length; n++) e += t[n];
        this._dashSum = e
      }
      return this
    },
    setLineDashOffset: function(t) {
      return this._dashOffset = t, this
    },
    len: function() {
      return this._len
    },
    setData: function(t) {
      var e = t.length;
      this.data && this.data.length == e || !Tp || (this.data = new Float32Array(e));
      for (var n = 0; e > n; n++) this.data[n] = t[n];
      this._len = e
    },
    appendPath: function(t) {
      t instanceof Array || (t = [t]);
      for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
      Tp && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
      for (var r = 0; e > r; r++)
        for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
      this._len = i
    },
    addData: function(t) {
      if (this._saveData) {
        var e = this.data;
        this._len + arguments.length > e.length && (this._expandData(), e = this.data);
        for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
        this._prevCmd = t
      }
    },
    _expandData: function() {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
        this.data = t
      }
    },
    _needsDash: function() {
      return this._lineDash
    },
    _dashedLineTo: function(t, e) {
      var n, i, r = this._dashSum,
        a = this._dashOffset,
        o = this._lineDash,
        s = this._ctx,
        l = this._xi,
        h = this._yi,
        u = t - l,
        c = e - h,
        d = Mp(u * u + c * c),
        f = l,
        p = h,
        g = o.length;
      for (u /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * u, p -= a * c; u > 0 && t >= f || 0 > u && f >= t || 0 == u && (c > 0 && e >= p || 0 > c && p >= e);) i = this._dashIdx, n = o[i], f += u * n, p += c * n, this._dashIdx = (i + 1) % g, u > 0 && l > f || 0 > u && f > l || c > 0 && h > p || 0 > c && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? xp(f, t) : wp(f, t), c >= 0 ? xp(p, e) : wp(p, e));
      u = f - t, c = p - e, this._dashOffset = -Mp(u * u + c * c)
    },
    _dashedBezierTo: function(t, e, n, i, r, a) {
      var o, s, l, h, u, c = this._dashSum,
        d = this._dashOffset,
        f = this._lineDash,
        p = this._ctx,
        g = this._xi,
        v = this._yi,
        m = Fi,
        y = 0,
        _ = this._dashIdx,
        x = f.length,
        w = 0;
      for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += Mp(s * s + l * l);
      for (; x > _ && (w += f[_], !(w > d)); _++);
      for (o = (w - d) / y; 1 >= o;) h = m(g, t, n, r, o), u = m(v, e, i, a, o), _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u), o += f[_] / y, _ = (_ + 1) % x;
      _ % 2 !== 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -Mp(s * s + l * l)
    },
    _dashedQuadraticTo: function(t, e, n, i) {
      var r = n,
        a = i;
      n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a)
    },
    toStatic: function() {
      var t = this.data;
      t instanceof Array && (t.length = this._len, Tp && (this.data = new Float32Array(t)))
    },
    getBoundingRect: function() {
      vp[0] = vp[1] = yp[0] = yp[1] = Number.MAX_VALUE, mp[0] = mp[1] = _p[0] = _p[1] = -Number.MAX_VALUE;
      for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];
        switch (1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {
          case gp.M:
            i = t[a++], r = t[a++], e = i, n = r, yp[0] = i, yp[1] = r, _p[0] = i, _p[1] = r;
            break;
          case gp.L:
            $i(e, n, t[a], t[a + 1], yp, _p), e = t[a++], n = t[a++];
            break;
          case gp.C:
            Ki(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], yp, _p), e = t[a++], n = t[a++];
            break;
          case gp.Q:
            Qi(e, n, t[a++], t[a++], t[a], t[a + 1], yp, _p), e = t[a++], n = t[a++];
            break;
          case gp.A:
            var s = t[a++],
              l = t[a++],
              h = t[a++],
              u = t[a++],
              c = t[a++],
              d = t[a++] + c,
              f = (t[a++], 1 - t[a++]);
            1 == a && (i = bp(c) * h + s, r = Sp(c) * u + l), Ji(s, l, h, u, c, d, f, yp, _p), e = bp(d) * h + s, n = Sp(d) * u + l;
            break;
          case gp.R:
            i = e = t[a++], r = n = t[a++];
            var p = t[a++],
              g = t[a++];
            $i(i, r, i + p, r + g, yp, _p);
            break;
          case gp.Z:
            e = i, n = r
        }
        $(vp, vp, yp), K(mp, mp, _p)
      }
      return 0 === a && (vp[0] = vp[1] = mp[0] = mp[1] = 0), new $e(vp[0], vp[1], mp[0] - vp[0], mp[1] - vp[1])
    },
    rebuildPath: function(t) {
      for (var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c;) {
        var d = s[c++];
        switch (1 == c && (i = s[c], r = s[c + 1], e = i, n = r), d) {
          case gp.M:
            e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
            break;
          case gp.L:
            a = s[c++], o = s[c++], (Ip(a - i) > l || Ip(o - r) > h || c === u - 1) && (t.lineTo(a, o), i = a, r = o);
            break;
          case gp.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
            break;
          case gp.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
            break;
          case gp.A:
            var f = s[c++],
              p = s[c++],
              g = s[c++],
              v = s[c++],
              m = s[c++],
              y = s[c++],
              _ = s[c++],
              x = s[c++],
              w = g > v ? g : v,
              b = g > v ? 1 : g / v,
              S = g > v ? v / g : 1,
              M = Math.abs(g - v) > .001,
              I = m + y;
            M ? (t.translate(f, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, I, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, I, 1 - x), 1 == c && (e = bp(m) * g + f, n = Sp(m) * v + p), i = bp(I) * g + f, r = Sp(I) * v + p;
            break;
          case gp.R:
            e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
            break;
          case gp.Z:
            t.closePath(), i = e, r = n
        }
      }
    }
  }, Cp.CMD = gp;
  var Dp = 2 * Math.PI,
    kp = 2 * Math.PI,
    Ap = Cp.CMD,
    Pp = 2 * Math.PI,
    Lp = 1e-4,
    Op = [-1, -1, -1],
    Bp = [-1, -1],
    Ep = tf.prototype.getCanvasPattern,
    zp = Math.abs,
    Rp = new Cp(!0);
  pr.prototype = {
    constructor: pr,
    type: "path",
    __dirtyPath: !0,
    strokeContainThreshold: 5,
    brush: function(t, e) {
      var n = this.style,
        i = this.path || Rp,
        r = n.hasStroke(),
        a = n.hasFill(),
        o = n.fill,
        s = n.stroke,
        l = a && !!o.colorStops,
        h = r && !!s.colorStops,
        u = a && !!o.image,
        c = r && !!s.image;
      if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var d;
        l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), h && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d))
      }
      l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = Ep.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Ep.call(s, t));
      var f = n.lineDash,
        p = n.lineDashOffset,
        g = !!t.setLineDash,
        v = this.getGlobalScale();
      if (i.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a)
        if (null != n.fillOpacity) {
          var m = t.globalAlpha;
          t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m
        } else i.fill(t);
      if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r)
        if (null != n.strokeOpacity) {
          var m = t.globalAlpha;
          t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m
        } else i.stroke(t);
      f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
    },
    buildPath: function() {},
    createPathProxy: function() {
      this.path = new Cp
    },
    getBoundingRect: function() {
      var t = this._rect,
        e = this.style,
        n = !t;
      if (n) {
        var i = this.path;
        i || (i = this.path = new Cp), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
      }
      if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
        if (this.__dirty || n) {
          r.copy(t);
          var a = e.lineWidth,
            o = e.strokeNoScale ? this.getLineScale() : 1;
          e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
        }
        return r
      }
      return t
    },
    contain: function(t, e) {
      var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect(),
        r = this.style;
      if (t = n[0], e = n[1], i.contain(t, e)) {
        var a = this.path.data;
        if (r.hasStroke()) {
          var o = r.lineWidth,
            s = r.strokeNoScale ? this.getLineScale() : 1;
          if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), fr(a, o / s, t, e))) return !0
        }
        if (r.hasFill()) return dr(a, t, e)
      }
      return !1
    },
    dirty: function(t) {
      null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
    },
    animateShape: function(t) {
      return this.animate("shape", t)
    },
    attrKV: function(t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : Kn.prototype.attrKV.call(this, t, e)
    },
    setShape: function(t, e) {
      var n = this.shape;
      if (n) {
        if (b(t))
          for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        else n[t] = e;
        this.dirty(!0)
      }
      return this
    },
    getLineScale: function() {
      var t = this.transform;
      return t && zp(t[0] - 1) > 1e-10 && zp(t[3] - 1) > 1e-10 ? Math.sqrt(zp(t[0] * t[3] - t[2] * t[1])) : 1
    }
  }, pr.extend = function(t) {
    var e = function(e) {
      pr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
      var n = t.shape;
      if (n) {
        this.shape = this.shape || {};
        var i = this.shape;
        for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
      }
      t.init && t.init.call(this, e)
    };
    u(e, pr);
    for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
    return e
  }, u(pr, Kn);
  var Fp = Cp.CMD,
    Np = [
      [],
      [],
      []
    ],
    Hp = Math.sqrt,
    Vp = Math.atan2,
    Wp = function(t, e) {
      var n, i, r, a, o, s, l = t.data,
        h = Fp.M,
        u = Fp.C,
        c = Fp.L,
        d = Fp.R,
        f = Fp.A,
        p = Fp.Q;
      for (r = 0, a = 0; r < l.length;) {
        switch (n = l[r++], a = r, i = 0, n) {
          case h:
            i = 1;
            break;
          case c:
            i = 1;
            break;
          case u:
            i = 3;
            break;
          case p:
            i = 2;
            break;
          case f:
            var g = e[4],
              v = e[5],
              m = Hp(e[0] * e[0] + e[1] * e[1]),
              y = Hp(e[2] * e[2] + e[3] * e[3]),
              _ = Vp(-e[1] / y, e[0] / m);
            l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;
            break;
          case d:
            s[0] = l[r++], s[1] = l[r++], Z(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], Z(s, s, e), l[a++] = s[0], l[a++] = s[1]
        }
        for (o = 0; i > o; o++) {
          var s = Np[o];
          s[0] = l[r++], s[1] = l[r++], Z(s, s, e), l[a++] = s[0], l[a++] = s[1]
        }
      }
    },
    Gp = Math.sqrt,
    Xp = Math.sin,
    Yp = Math.cos,
    qp = Math.PI,
    Up = function(t) {
      return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    },
    jp = function(t, e) {
      return (t[0] * e[0] + t[1] * e[1]) / (Up(t) * Up(e))
    },
    Zp = function(t, e) {
      return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(jp(t, e))
    },
    $p = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    Kp = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
    Qp = function(t) {
      Kn.call(this, t)
    };
  Qp.prototype = {
    constructor: Qp,
    type: "text",
    brush: function(t, e) {
      var n = this.style;
      this.__dirty && On(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
      var i = n.text;
      null != i && (i += ""), $n(i, n) && (this.setTransform(t), En(this, t, i, n, null, e), this.restoreTransform(t))
    },
    getBoundingRect: function() {
      var t = this.style;
      if (this.__dirty && On(t, !0), !this._rect) {
        var e = t.text;
        null != e ? e += "" : e = "";
        var n = vn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
        if (n.x += t.x || 0, n.y += t.y || 0, qn(t.textStroke, t.textStrokeWidth)) {
          var i = t.textStrokeWidth;
          n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
        }
        this._rect = n
      }
      return this._rect
    }
  }, u(Qp, Kn);
  var Jp = pr.extend({
      type: "circle",
      shape: {
        cx: 0,
        cy: 0,
        r: 0
      },
      buildPath: function(t, e, n) {
        n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
      }
    }),
    tg = [
      ["shadowBlur", 0],
      ["shadowColor", "#000"],
      ["shadowOffsetX", 0],
      ["shadowOffsetY", 0]
    ],
    eg = function(t) {
      return Gc.browser.ie && Gc.browser.version >= 11 ? function() {
        var e, n = this.__clipPaths,
          i = this.style;
        if (n)
          for (var r = 0; r < n.length; r++) {
            var a = n[r],
              o = a && a.shape,
              s = a && a.type;
            if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
              for (var l = 0; l < tg.length; l++) tg[l][2] = i[tg[l][0]], i[tg[l][0]] = tg[l][1];
              e = !0;
              break
            }
          }
        if (t.apply(this, arguments), e)
          for (var l = 0; l < tg.length; l++) i[tg[l][0]] = tg[l][2]
      } : t
    },
    ng = pr.extend({
      type: "sector",
      shape: {
        cx: 0,
        cy: 0,
        r0: 0,
        r: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        clockwise: !0
      },
      brush: eg(pr.prototype.brush),
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          h = Math.cos(o),
          u = Math.sin(o);
        t.moveTo(h * r + n, u * r + i), t.lineTo(h * a + n, u * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath()
      }
    }),
    ig = pr.extend({
      type: "ring",
      shape: {
        cx: 0,
        cy: 0,
        r: 0,
        r0: 0
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;
        t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
      }
    }),
    rg = function(t, e) {
      for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) r += U(t[a - 1], t[a]);
      var o = r / 2;
      o = n > o ? n : o;
      for (var a = 0; o > a; a++) {
        var s, l, h, u = a / (o - 1) * (e ? n : n - 1),
          c = Math.floor(u),
          d = u - c,
          f = t[c % n];
        e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], h = t[c > n - 3 ? n - 1 : c + 2]);
        var p = d * d,
          g = d * p;
        i.push([wr(s[0], f[0], l[0], h[0], d, p, g), wr(s[1], f[1], l[1], h[1], d, p, g)])
      }
      return i
    },
    ag = function(t, e, n, i) {
      var r, a, o, s, l = [],
        h = [],
        u = [],
        c = [];
      if (i) {
        o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
        for (var d = 0, f = t.length; f > d; d++) $(o, o, t[d]), K(s, s, t[d]);
        $(o, o, i[0]), K(s, s, i[1])
      }
      for (var d = 0, f = t.length; f > d; d++) {
        var p = t[d];
        if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];
        else {
          if (0 === d || d === f - 1) {
            l.push(H(t[d]));
            continue
          }
          r = t[d - 1], a = t[d + 1]
        }
        W(h, a, r), Y(h, h, e);
        var g = U(p, r),
          v = U(p, a),
          m = g + v;
        0 !== m && (g /= m, v /= m), Y(u, h, -g), Y(c, h, v);
        var y = V([], p, u),
          _ = V([], p, c);
        i && (K(y, y, o), $(y, y, s), K(_, _, o), $(_, _, s)), l.push(y), l.push(_)
      }
      return n && l.push(l.shift()), l
    },
    og = pr.extend({
      type: "polygon",
      shape: {
        points: null,
        smooth: !1,
        smoothConstraint: null
      },
      buildPath: function(t, e) {
        br(t, e, !0)
      }
    }),
    sg = pr.extend({
      type: "polyline",
      shape: {
        points: null,
        smooth: !1,
        smoothConstraint: null
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        br(t, e, !1)
      }
    }),
    lg = pr.extend({
      type: "rect",
      shape: {
        r: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.x,
          i = e.y,
          r = e.width,
          a = e.height;
        e.r ? Ln(t, e) : t.rect(n, i, r, a), t.closePath()
      }
    }),
    hg = pr.extend({
      type: "line",
      shape: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        percent: 1
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.percent;
        0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a))
      },
      pointAt: function(t) {
        var e = this.shape;
        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
      }
    }),
    ug = [],
    cg = pr.extend({
      type: "bezier-curve",
      shape: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        cpx1: 0,
        cpy1: 0,
        percent: 1
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          h = e.cpy2,
          u = e.percent;
        0 !== u && (t.moveTo(n, i), null == l || null == h ? (1 > u && (ji(n, o, r, u, ug), o = ug[1], r = ug[2], ji(i, s, a, u, ug), s = ug[1], a = ug[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > u && (Wi(n, o, l, r, u, ug), o = ug[1], l = ug[2], r = ug[3], Wi(i, s, h, a, u, ug), s = ug[1], h = ug[2], a = ug[3]), t.bezierCurveTo(o, s, l, h, r, a)))
      },
      pointAt: function(t) {
        return Sr(this.shape, t, !1)
      },
      tangentAt: function(t) {
        var e = Sr(this.shape, t, !0);
        return q(e, e)
      }
    }),
    dg = pr.extend({
      type: "arc",
      shape: {
        cx: 0,
        cy: 0,
        r: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        clockwise: !0
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          h = Math.sin(a);
        t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, a, o, !s)
      }
    }),
    fg = pr.extend({
      type: "compound",
      shape: {
        paths: null
      },
      _updatePathDirty: function() {
        for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
        this.__dirtyPath = t, this.__dirty = this.__dirty || t
      },
      beforeBrush: function() {
        this._updatePathDirty();
        for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
      },
      buildPath: function(t, e) {
        for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
      },
      afterBrush: function() {
        for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
      },
      getBoundingRect: function() {
        return this._updatePathDirty(), pr.prototype.getBoundingRect.call(this)
      }
    }),
    pg = function(t) {
      this.colorStops = t || []
    };
  pg.prototype = {
    constructor: pg,
    addColorStop: function(t, e) {
      this.colorStops.push({
        offset: t,
        color: e
      })
    }
  };
  var gg = function(t, e, n, i, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, pg.call(this, r)
  };
  gg.prototype = {
    constructor: gg
  }, u(gg, pg);
  var vg = function(t, e, n, i, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, pg.call(this, i)
  };
  vg.prototype = {
    constructor: vg
  }, u(vg, pg), Mr.prototype.incremental = !0, Mr.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
  }, Mr.prototype.addDisplayable = function(t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
  }, Mr.prototype.addDisplayables = function(t, e) {
    e = e || !1;
    for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
  }, Mr.prototype.eachPendingDisplayable = function(t) {
    for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
    for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
  }, Mr.prototype.update = function() {
    this.updateTransform();
    for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];
      e.parent = this, e.update(), e.parent = null
    }
    for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];
      e.parent = this, e.update(), e.parent = null
    }
  }, Mr.prototype.brush = function(t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._displayables[e];
      n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t)
    }
    this._cursor = e;
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];
      n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t)
    }
    this._temporaryDisplayables = [], this.notClear = !0
  };
  var mg = [];
  Mr.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var t = new $e(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
        var n = this._displayables[e],
          i = n.getBoundingRect().clone();
        n.needLocalTransform() && i.applyTransform(n.getLocalTransform(mg)), t.union(i)
      }
      this._rect = t
    }
    return this._rect
  }, Mr.prototype.contain = function(t, e) {
    var n = this.transformCoordToLocal(t, e),
      i = this.getBoundingRect();
    if (i.contain(n[0], n[1]))
      for (var r = 0; r < this._displayables.length; r++) {
        var a = this._displayables[r];
        if (a.contain(t, e)) return !0
      }
    return !1
  }, u(Mr, Kn);
  var yg = Math.round,
    _g = Math.max,
    xg = Math.min,
    wg = {},
    bg = xr,
    Sg = R(),
    Mg = 0,
    Ig = (Object.freeze || Object)({
      extendShape: Ir,
      extendPath: Tr,
      makePath: Cr,
      makeImage: Dr,
      mergePath: bg,
      resizePath: Ar,
      subPixelOptimizeLine: Pr,
      subPixelOptimizeRect: Lr,
      subPixelOptimize: Or,
      setElementHoverStyle: Wr,
      isInEmphasis: Gr,
      setHoverStyle: jr,
      setAsHoverStyleTrigger: Zr,
      setLabelStyle: $r,
      setTextStyle: Kr,
      setText: Qr,
      getFont: aa,
      updateProps: sa,
      initProps: la,
      getTransform: ha,
      applyTransform: ua,
      transformDirection: ca,
      groupTransition: da,
      clipPointsByRect: fa,
      clipRectByRect: pa,
      createIcon: ga,
      Group: Gd,
      Image: Qn,
      Text: Qp,
      Circle: Jp,
      Sector: ng,
      Ring: ig,
      Polygon: og,
      Polyline: sg,
      Rect: lg,
      Line: hg,
      BezierCurve: cg,
      Arc: dg,
      IncrementalDisplayable: Mr,
      CompoundPath: fg,
      LinearGradient: gg,
      RadialGradient: vg,
      BoundingRect: $e
    }),
    Tg = ["textStyle", "color"],
    Cg = {
      getTextColor: function(t) {
        var e = this.ecModel;
        return this.getShallow("color") || (!t && e ? e.get(Tg) : null)
      },
      getFont: function() {
        return aa({
          fontStyle: this.getShallow("fontStyle"),
          fontWeight: this.getShallow("fontWeight"),
          fontSize: this.getShallow("fontSize"),
          fontFamily: this.getShallow("fontFamily")
        }, this.ecModel)
      },
      getTextRect: function(t) {
        return vn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
      }
    },
    Dg = Yf([
      ["fill", "color"],
      ["stroke", "borderColor"],
      ["lineWidth", "borderWidth"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"],
      ["textPosition"],
      ["textAlign"]
    ]),
    kg = {
      getItemStyle: function(t, e) {
        var n = Dg(this, t, e),
          i = this.getBorderLineDash();
        return i && (n.lineDash = i), n
      },
      getBorderLineDash: function() {
        var t = this.get("borderType");
        return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
      }
    },
    Ag = c,
    Pg = Si();
  va.prototype = {
    constructor: va,
    init: null,
    mergeOption: function(t) {
      r(this.option, t, !0)
    },
    get: function(t, e) {
      return null == t ? this.option : ma(this.option, this.parsePath(t), !e && ya(this, t))
    },
    getShallow: function(t, e) {
      var n = this.option,
        i = null == n ? n : n[t],
        r = !e && ya(this, t);
      return null == i && r && (i = r.getShallow(t)), i
    },
    getModel: function(t, e) {
      var n, i = null == t ? this.option : ma(this.option, t = this.parsePath(t));
      return e = e || (n = ya(this, t)) && n.getModel(t), new va(i, e, this.ecModel)
    },
    isEmpty: function() {
      return null == this.option
    },
    restoreData: function() {},
    clone: function() {
      var t = this.constructor;
      return new t(i(this.option))
    },
    setReadOnly: function() {},
    parsePath: function(t) {
      return "string" == typeof t && (t = t.split(".")), t
    },
    customizeGetParent: function(t) {
      Pg(this).getParent = t
    },
    isAnimationEnabled: function() {
      if (!Gc.node) {
        if (null != this.option.animation) return !!this.option.animation;
        if (this.parentModel) return this.parentModel.isAnimationEnabled()
      }
    }
  }, Pi(va), Li(va), Ag(va, Uf), Ag(va, Zf), Ag(va, Cg), Ag(va, kg);
  var Lg = 0,
    Og = 1e-4,
    Bg = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
    Eg = P,
    zg = /([&<>"'])/g,
    Rg = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    },
    Fg = ["a", "b", "c", "d", "e", "f", "g"],
    Ng = function(t, e) {
      return "{" + t + (null == e ? "" : e) + "}"
    },
    Hg = bn,
    Vg = f,
    Wg = ["left", "right", "top", "bottom", "width", "height"],
    Gg = [
      ["width", "left", "right"],
      ["height", "top", "bottom"]
    ],
    Xg = Wa,
    Yg = (y(Wa, "vertical"), y(Wa, "horizontal"), {
      getBoxLayoutParams: function() {
        return {
          left: this.get("left"),
          top: this.get("top"),
          right: this.get("right"),
          bottom: this.get("bottom"),
          width: this.get("width"),
          height: this.get("height")
        }
      }
    }),
    qg = Si(),
    Ug = va.extend({
      type: "component",
      id: "",
      name: "",
      mainType: "",
      subType: "",
      componentIndex: 0,
      defaultOption: null,
      ecModel: null,
      dependentModels: [],
      uid: null,
      layoutMode: null,
      $constructor: function(t, e, n, i) {
        va.call(this, t, e, n, i), this.uid = _a("ec_cpt_model")
      },
      init: function(t, e, n) {
        this.mergeDefaultAndTheme(t, n)
      },
      mergeDefaultAndTheme: function(t, e) {
        var n = this.layoutMode,
          i = n ? Ya(t) : {},
          a = e.getTheme();
        r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && Xa(t, i, n)
      },
      mergeOption: function(t) {
        r(this.option, t, !0);
        var e = this.layoutMode;
        e && Xa(this.option, t, e)
      },
      optionUpdated: function() {},
      getDefaultOption: function() {
        var t = qg(this);
        if (!t.defaultOption) {
          for (var e = [], n = this.constructor; n;) {
            var i = n.prototype.defaultOption;
            i && e.push(i), n = n.superClass
          }
          for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
          t.defaultOption = a
        }
        return t.defaultOption
      },
      getReferringComponents: function(t) {
        return this.ecModel.queryComponents({
          mainType: t,
          index: this.get(t + "Index", !0),
          id: this.get(t + "Id", !0)
        })
      }
    });
  Ei(Ug, {
    registerWhenExtend: !0
  }), xa(Ug), wa(Ug, Ua), c(Ug, Yg);
  var jg = "";
  "undefined" != typeof navigator && (jg = navigator.platform || "");
  var Zg = {
      color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
      gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
      textStyle: {
        fontFamily: jg.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal"
      },
      blendMode: null,
      animation: "auto",
      animationDuration: 1e3,
      animationDurationUpdate: 300,
      animationEasing: "exponentialOut",
      animationEasingUpdate: "cubicOut",
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1
    },
    $g = Si(),
    Kg = {
      clearColorPalette: function() {
        $g(this).colorIdx = 0, $g(this).colorNameMap = {}
      },
      getColorFromPalette: function(t, e, n) {
        e = e || this;
        var i = $g(e),
          r = i.colorIdx || 0,
          a = i.colorNameMap = i.colorNameMap || {};
        if (a.hasOwnProperty(t)) return a[t];
        var o = pi(this.get("color", !0)),
          s = this.get("colorLayer", !0),
          l = null != n && s ? ja(s, n) : o;
        if (l = l || o, l && l.length) {
          var h = l[r];
          return t && (a[t] = h), i.colorIdx = (r + 1) % l.length, h
        }
      }
    },
    Qg = {
      cartesian2d: function(t, e, n, i) {
        var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];
        e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), $a(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), $a(a) && (i.set("y", a), e.firstCategoryDimIndex = 1)
      },
      singleAxis: function(t, e, n, i) {
        var r = t.getReferringComponents("singleAxis")[0];
        e.coordSysDims = ["single"], n.set("single", r), $a(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
      },
      polar: function(t, e, n, i) {
        var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");
        e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), $a(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), $a(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1)
      },
      geo: function(t, e) {
        e.coordSysDims = ["lng", "lat"]
      },
      parallel: function(t, e, n, i) {
        var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();
        f(a.parallelAxisIndex, function(t, a) {
          var s = r.getComponent("parallelAxis", t),
            l = o[a];
          n.set(l, s), $a(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a)
        })
      }
    },
    Jg = "original",
    tv = "arrayRows",
    ev = "objectRows",
    nv = "keyedColumns",
    iv = "unknown",
    rv = "typedArray",
    av = "column",
    ov = "row";
  Ka.seriesDataToSource = function(t) {
    return new Ka({
      data: t,
      sourceFormat: M(t) ? rv : Jg,
      fromDataset: !1
    })
  }, Li(Ka);
  var sv = Si(),
    lv = "\x00_ec_inner",
    hv = va.extend({
      init: function(t, e, n, i) {
        n = n || {}, this.option = null, this._theme = new va(n), this._optionManager = i
      },
      setOption: function(t, e) {
        L(!(lv in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
      },
      resetOption: function(t) {
        var e = !1,
          n = this._optionManager;
        if (!t || "recreate" === t) {
          var i = n.mountOption("recreate" === t);
          this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : fo.call(this, i), e = !0
        }
        if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
          var r = n.getTimelineOption(this);
          r && (this.mergeOption(r), e = !0)
        }
        if (!t || "recreate" === t || "media" === t) {
          var a = n.getMediaOption(this, this._api);
          a.length && f(a, function(t) {
            this.mergeOption(t, e = !0)
          }, this)
        }
        return e
      },
      mergeOption: function(t) {
        function e(e, i) {
          var r = pi(t[e]),
            s = yi(a.get(e), r);
          _i(s), f(s, function(t) {
            var n = t.option;
            b(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = go(e, n, t.exist))
          });
          var l = po(a, i);
          n[e] = [], a.set(e, []), f(s, function(t, i) {
            var r = t.exist,
              s = t.option;
            if (L(b(s) || r, "Empty component definition"), s) {
              var h = Ug.getClass(e, t.keyInfo.subType, !0);
              if (r && r instanceof h) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);
              else {
                var u = o({
                  dependentModels: l,
                  componentIndex: i
                }, t.keyInfo);
                r = new h(s, this, this, u), o(r, u), r.init(s, this, this, u), r.optionUpdated(null, !0)
              }
            } else r.mergeOption({}, this), r.optionUpdated({}, !1);
            a.get(e)[i] = r, n[e][i] = r.option
          }, this), "series" === e && vo(this, a.get("series"))
        }
        var n = this.option,
          a = this._componentsMap,
          s = [];
        to(this), f(t, function(t, e) {
          null != t && (Ug.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0))
        }), Ug.topologicalTravel(s, Ug.getAllClassMainTypes(), e, this), this._seriesIndicesMap = R(this._seriesIndices = this._seriesIndices || [])
      },
      getOption: function() {
        var t = i(this.option);
        return f(t, function(e, n) {
          if (Ug.hasClass(n)) {
            for (var e = pi(e), i = e.length - 1; i >= 0; i--) wi(e[i]) && e.splice(i, 1);
            t[n] = e
          }
        }), delete t[lv], t
      },
      getTheme: function() {
        return this._theme
      },
      getComponent: function(t, e) {
        var n = this._componentsMap.get(t);
        return n ? n[e || 0] : void 0
      },
      queryComponents: function(t) {
        var e = t.mainType;
        if (!e) return [];
        var n = t.index,
          i = t.id,
          r = t.name,
          a = this._componentsMap.get(e);
        if (!a || !a.length) return [];
        var o;
        if (null != n) _(n) || (n = [n]), o = v(p(n, function(t) {
          return a[t]
        }), function(t) {
          return !!t
        });
        else if (null != i) {
          var s = _(i);
          o = v(a, function(t) {
            return s && h(i, t.id) >= 0 || !s && t.id === i
          })
        } else if (null != r) {
          var l = _(r);
          o = v(a, function(t) {
            return l && h(r, t.name) >= 0 || !l && t.name === r
          })
        } else o = a.slice();
        return mo(o, t)
      },
      findComponents: function(t) {
        function e(t) {
          var e = r + "Index",
            n = r + "Id",
            i = r + "Name";
          return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
            mainType: r,
            index: t[e],
            id: t[n],
            name: t[i]
          }
        }

        function n(e) {
          return t.filter ? v(e, t.filter) : e
        }
        var i = t.query,
          r = t.mainType,
          a = e(i),
          o = a ? this.queryComponents(a) : this._componentsMap.get(r);
        return n(mo(o, t))
      },
      eachComponent: function(t, e, n) {
        var i = this._componentsMap;
        if ("function" == typeof t) n = e, e = t, i.each(function(t, i) {
          f(t, function(t, r) {
            e.call(n, i, t, r)
          })
        });
        else if (w(t)) f(i.get(t), e, n);
        else if (b(t)) {
          var r = this.findComponents(t);
          f(r, e, n)
        }
      },
      getSeriesByName: function(t) {
        var e = this._componentsMap.get("series");
        return v(e, function(e) {
          return e.name === t
        })
      },
      getSeriesByIndex: function(t) {
        return this._componentsMap.get("series")[t]
      },
      getSeriesByType: function(t) {
        var e = this._componentsMap.get("series");
        return v(e, function(e) {
          return e.subType === t
        })
      },
      getSeries: function() {
        return this._componentsMap.get("series").slice()
      },
      getSeriesCount: function() {
        return this._componentsMap.get("series").length
      },
      eachSeries: function(t, e) {
        f(this._seriesIndices, function(n) {
          var i = this._componentsMap.get("series")[n];
          t.call(e, i, n)
        }, this)
      },
      eachRawSeries: function(t, e) {
        f(this._componentsMap.get("series"), t, e)
      },
      eachSeriesByType: function(t, e, n) {
        f(this._seriesIndices, function(i) {
          var r = this._componentsMap.get("series")[i];
          r.subType === t && e.call(n, r, i)
        }, this)
      },
      eachRawSeriesByType: function(t, e, n) {
        return f(this.getSeriesByType(t), e, n)
      },
      isSeriesFiltered: function(t) {
        return null == this._seriesIndicesMap.get(t.componentIndex)
      },
      getCurrentSeriesIndices: function() {
        return (this._seriesIndices || []).slice()
      },
      filterSeries: function(t, e) {
        var n = v(this._componentsMap.get("series"), t, e);
        vo(this, n)
      },
      restoreData: function(t) {
        var e = this._componentsMap;
        vo(this, e.get("series"));
        var n = [];
        e.each(function(t, e) {
          n.push(e)
        }), Ug.topologicalTravel(n, Ug.getAllClassMainTypes(), function(n) {
          f(e.get(n), function(e) {
            ("series" !== n || !uo(e, t)) && e.restoreData()
          })
        })
      }
    });
  c(hv, Kg);
  var uv = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
    cv = {};
  _o.prototype = {
    constructor: _o,
    create: function(t, e) {
      var n = [];
      f(cv, function(i) {
        var r = i.create(t, e);
        n = n.concat(r || [])
      }), this._coordinateSystems = n
    },
    update: function(t, e) {
      f(this._coordinateSystems, function(n) {
        n.update && n.update(t, e)
      })
    },
    getCoordinateSystems: function() {
      return this._coordinateSystems.slice()
    }
  }, _o.register = function(t, e) {
    cv[t] = e
  }, _o.get = function(t) {
    return cv[t]
  };
  var dv = f,
    fv = i,
    pv = p,
    gv = r,
    vv = /^(min|max)?(.+)$/;
  xo.prototype = {
    constructor: xo,
    setOption: function(t, e) {
      t && f(pi(t.series), function(t) {
        t && t.data && M(t.data) && B(t.data)
      }), t = fv(t, !0);
      var n = this._optionBackup,
        i = wo.call(this, t, e, !n);
      this._newBaseOption = i.baseOption, n ? (Io(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
    },
    mountOption: function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = pv(e.timelineOptions, fv), this._mediaList = pv(e.mediaList, fv), this._mediaDefault = fv(e.mediaDefault), this._currentMediaIndices = [], fv(t ? e.baseOption : this._newBaseOption)
    },
    getTimelineOption: function(t) {
      var e, n = this._timelineOptions;
      if (n.length) {
        var i = t.getComponent("timeline");
        i && (e = fv(n[i.getCurrentIndex()], !0))
      }
      return e
    },
    getMediaOption: function() {
      var t = this._api.getWidth(),
        e = this._api.getHeight(),
        n = this._mediaList,
        i = this._mediaDefault,
        r = [],
        a = [];
      if (!n.length && !i) return a;
      for (var o = 0, s = n.length; s > o; o++) bo(n[o].query, t, e) && r.push(o);
      return !r.length && i && (r = [-1]), r.length && !Mo(r, this._currentMediaIndices) && (a = pv(r, function(t) {
        return fv(-1 === t ? i.option : n[t].option)
      })), this._currentMediaIndices = r, a
    }
  };
  var mv = f,
    yv = b,
    _v = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
    xv = function(t, e) {
      mv(Lo(t.series), function(t) {
        yv(t) && Po(t)
      });
      var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
      e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), mv(n, function(e) {
        mv(Lo(t[e]), function(t) {
          t && (ko(t, "axisLabel"), ko(t.axisPointer, "label"))
        })
      }), mv(Lo(t.parallel), function(t) {
        var e = t && t.parallelAxisDefault;
        ko(e, "axisLabel"), ko(e && e.axisPointer, "label")
      }), mv(Lo(t.calendar), function(t) {
        Co(t, "itemStyle"), ko(t, "dayLabel"), ko(t, "monthLabel"), ko(t, "yearLabel")
      }), mv(Lo(t.radar), function(t) {
        ko(t, "name")
      }), mv(Lo(t.geo), function(t) {
        yv(t) && (Ao(t), mv(Lo(t.regions), function(t) {
          Ao(t)
        }))
      }), mv(Lo(t.timeline), function(t) {
        Ao(t), Co(t, "label"), Co(t, "itemStyle"), Co(t, "controlStyle", !0);
        var e = t.data;
        _(e) && f(e, function(t) {
          b(t) && (Co(t, "label"), Co(t, "itemStyle"))
        })
      }), mv(Lo(t.toolbox), function(t) {
        Co(t, "iconStyle"), mv(t.feature, function(t) {
          Co(t, "iconStyle")
        })
      }), ko(Oo(t.axisPointer), "label"), ko(Oo(t.tooltip).axisPointer, "label")
    },
    wv = [
      ["x", "left"],
      ["y", "top"],
      ["x2", "right"],
      ["y2", "bottom"]
    ],
    bv = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
    Sv = function(t, e) {
      xv(t, e), t.series = pi(t.series), f(t.series, function(t) {
        if (b(t)) {
          var e = t.type;
          if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
            var n = Bo(t, "pointer.color");
            null != n && Eo(t, "itemStyle.normal.color", n)
          }
          zo(t)
        }
      }), t.dataRange && (t.visualMap = t.dataRange), f(bv, function(e) {
        var n = t[e];
        n && (_(n) || (n = [n]), f(n, function(t) {
          zo(t)
        }))
      })
    },
    Mv = function(t) {
      var e = R();
      t.eachSeries(function(t) {
        var n = t.get("stack");
        if (n) {
          var i = e.get(n) || e.set(n, []),
            r = t.getData(),
            a = {
              stackResultDimension: r.getCalculationInfo("stackResultDimension"),
              stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
              stackedDimension: r.getCalculationInfo("stackedDimension"),
              stackedByDimension: r.getCalculationInfo("stackedByDimension"),
              isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
              data: r,
              seriesModel: t
            };
          if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
          i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a)
        }
      }), e.each(Ro)
    },
    Iv = Fo.prototype;
  Iv.pure = !1, Iv.persistent = !0, Iv.getSource = function() {
    return this._source
  };
  var Tv = {
      arrayRows_column: {
        pure: !0,
        count: function() {
          return Math.max(0, this._data.length - this._source.startIndex)
        },
        getItem: function(t) {
          return this._data[t + this._source.startIndex]
        },
        appendData: Vo
      },
      arrayRows_row: {
        pure: !0,
        count: function() {
          var t = this._data[0];
          return t ? Math.max(0, t.length - this._source.startIndex) : 0
        },
        getItem: function(t) {
          t += this._source.startIndex;
          for (var e = [], n = this._data, i = 0; i < n.length; i++) {
            var r = n[i];
            e.push(r ? r[t] : null)
          }
          return e
        },
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
        }
      },
      objectRows: {
        pure: !0,
        count: No,
        getItem: Ho,
        appendData: Vo
      },
      keyedColumns: {
        pure: !0,
        count: function() {
          var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];
          return e ? e.length : 0
        },
        getItem: function(t) {
          for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
            var r = this._data[n[i].name];
            e.push(r ? r[t] : null)
          }
          return e
        },
        appendData: function(t) {
          var e = this._data;
          f(t, function(t, n) {
            for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
          })
        }
      },
      original: {
        count: No,
        getItem: Ho,
        appendData: Vo
      },
      typedArray: {
        persistent: !1,
        pure: !0,
        count: function() {
          return this._data ? this._data.length / this._dimSize : 0
        },
        getItem: function(t, e) {
          t -= this._offset, e = e || [];
          for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
          return e
        },
        appendData: function(t) {
          this._data = t
        },
        clean: function() {
          this._offset += this.count(), this._data = null
        }
      }
    },
    Cv = {
      arrayRows: Wo,
      objectRows: function(t, e, n, i) {
        return null != n ? t[i] : t
      },
      keyedColumns: Wo,
      original: function(t, e, n) {
        var i = vi(t);
        return null != n && i instanceof Array ? i[n] : i
      },
      typedArray: Wo
    },
    Dv = {
      arrayRows: Go,
      objectRows: function(t, e) {
        return Xo(t[e], this._dimensionInfos[e])
      },
      keyedColumns: Go,
      original: function(t, e, n, i) {
        var r = t && (null == t.value ? t : t.value);
        return !this._rawData.pure && mi(t) && (this.hasItemOption = !0), Xo(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
      },
      typedArray: function(t, e, n, i) {
        return t[i]
      }
    },
    kv = /\{@(.+?)\}/g,
    Av = {
      getDataParams: function(t, e) {
        var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          a = n.getName(t),
          o = n.getRawDataItem(t),
          s = n.getItemVisual(t, "color"),
          l = this.ecModel.getComponent("tooltip"),
          h = l && l.get("renderMode"),
          u = Di(h),
          c = this.mainType,
          d = "series" === c;
        return {
          componentType: c,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: d ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: d ? this.id : null,
          seriesName: d ? this.name : null,
          name: a,
          dataIndex: r,
          data: o,
          dataType: e,
          value: i,
          color: s,
          marker: Na({
            color: s,
            renderMode: u
          }),
          $vars: ["seriesName", "name", "value"]
        }
      },
      getFormattedLabel: function(t, e, n, i, r) {
        e = e || "normal";
        var a = this.getData(n),
          o = a.getItemModel(t),
          s = this.getDataParams(t, n);
        null != i && s.value instanceof Array && (s.value = s.value[i]);
        var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
        if ("function" == typeof l) return s.status = e, l(s);
        if ("string" == typeof l) {
          var h = Fa(l, s);
          return h.replace(kv, function(e, n) {
            var i = n.length;
            return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), Yo(a, t, n)
          })
        }
      },
      getRawValue: function(t, e) {
        return Yo(this.getData(e), t)
      },
      formatTooltip: function() {}
    },
    Pv = jo.prototype;
  Pv.perform = function(t) {
    function e(t) {
      return !(t >= 1) && (t = 1), t
    }
    var n = this._upstream,
      i = t && t.skip;
    if (this._dirty && n) {
      var r = this.context;
      r.data = r.outputData = n.context.outputData
    }
    this.__pipeline && (this.__pipeline.currentTask = this);
    var a;
    this._plan && !i && (a = this._plan(this.context));
    var o = e(this._modBy),
      s = this._modDataCount || 0,
      l = e(t && t.modBy),
      h = t && t.modDataCount || 0;
    (o !== l || s !== h) && (a = "reset");
    var u;
    (this._dirty || "reset" === a) && (this._dirty = !1, u = $o(this, i)), this._modBy = l, this._modDataCount = h;
    var c = t && t.step;
    if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
      var d = this._dueIndex,
        f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
      if (!i && (u || f > d)) {
        var p = this._progress;
        if (_(p))
          for (var g = 0; g < p.length; g++) Zo(this, p[g], d, f, l, h);
        else Zo(this, p, d, f, l, h)
      }
      this._dueIndex = f;
      var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
      this._outputDueEnd = v
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
    return this.unfinished()
  };
  var Lv = function() {
    function t() {
      return n > i ? i++ : null
    }

    function e() {
      var t = i % o * r + Math.ceil(i / o),
        e = i >= n ? null : a > t ? t : i;
      return i++, e
    }
    var n, i, r, a, o, s = {
      reset: function(l, h, u, c) {
        i = l, n = h, r = u, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t
      }
    };
    return s
  }();
  Pv.dirty = function() {
    this._dirty = !0, this._onDirty && this._onDirty(this.context)
  }, Pv.unfinished = function() {
    return this._progress && this._dueIndex < this._dueEnd
  }, Pv.pipe = function(t) {
    (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
  }, Pv.dispose = function() {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
  }, Pv.getUpstream = function() {
    return this._upstream
  }, Pv.getDownstream = function() {
    return this._downstream
  }, Pv.setOutputEnd = function(t) {
    this._outputDueEnd = this._settedOutputEnd = t
  };
  var Ov = Si(),
    Bv = Ug.extend({
      type: "series.__base__",
      seriesIndex: 0,
      coordinateSystem: null,
      defaultOption: null,
      legendDataProvider: null,
      visualColorAccessPath: "itemStyle.color",
      layoutMode: null,
      init: function(t, e, n) {
        this.seriesIndex = this.componentIndex, this.dataTask = Uo({
          count: Jo,
          reset: ts
        }), this.dataTask.context = {
          model: this
        }, this.mergeDefaultAndTheme(t, n), eo(this);
        var i = this.getInitialData(t, n);
        ns(i, this), this.dataTask.context.data = i, Ov(this).dataBeforeProcessed = i, Ko(this)
      },
      mergeDefaultAndTheme: function(t, e) {
        var n = this.layoutMode,
          i = n ? Ya(t) : {},
          a = this.subType;
        Ug.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), gi(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && Xa(t, i, n)
      },
      mergeOption: function(t, e) {
        t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
        var n = this.layoutMode;
        n && Xa(this.option, t, n), eo(this);
        var i = this.getInitialData(t, e);
        ns(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, Ov(this).dataBeforeProcessed = i, Ko(this)
      },
      fillDataTextStyle: function(t) {
        if (t && !M(t))
          for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && gi(t[n], "label", e)
      },
      getInitialData: function() {},
      appendData: function(t) {
        var e = this.getRawData();
        e.appendData(t.data)
      },
      getData: function(t) {
        var e = rs(this);
        if (e) {
          var n = e.context.data;
          return null == t ? n : n.getLinkedData(t)
        }
        return Ov(this).data
      },
      setData: function(t) {
        var e = rs(this);
        if (e) {
          var n = e.context;
          n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t)
        }
        Ov(this).data = t
      },
      getSource: function() {
        return Ja(this)
      },
      getRawData: function() {
        return Ov(this).dataBeforeProcessed
      },
      getBaseAxis: function() {
        var t = this.coordinateSystem;
        return t && t.getBaseAxis && t.getBaseAxis()
      },
      formatTooltip: function(t, e, n, i) {
        function r(n) {
          function r(t, n) {
            var r = c.getDimensionInfo(n);
            if (r && r.otherDims.tooltip !== !1) {
              var d = r.type,
                f = "sub" + o.seriesIndex + "at" + u,
                p = Na({
                  color: y,
                  type: "subItem",
                  renderMode: i,
                  markerId: f
                }),
                g = "string" == typeof p ? p : p.content,
                v = (a ? g + Ra(r.displayName || "-") + ": " : "") + Ra("ordinal" === d ? t + "" : "time" === d ? e ? "" : Va("yyyy/MM/dd hh:mm:ss", t) : Ea(t));
              v && s.push(v), l && (h[f] = y, ++u)
            }
          }
          var a = g(n, function(t, e, n) {
              var i = c.getDimensionInfo(n);
              return t |= i && i.tooltip !== !1 && null != i.displayName
            }, 0),
            s = [];
          d.length ? f(d, function(e) {
            r(Yo(c, t, e), e)
          }) : f(n, r);
          var p = a ? l ? "\n" : "<br/>" : "",
            v = p + s.join(p || ", ");
          return {
            renderMode: i,
            content: v,
            style: h
          }
        }

        function a(t) {
          return {
            renderMode: i,
            content: Ra(Ea(t)),
            style: h
          }
        }
        var o = this;
        i = i || "html";
        var s = "html" === i ? "<br/>" : "\n",
          l = "richText" === i,
          h = {},
          u = 0,
          c = this.getData(),
          d = c.mapDimension("defaultedTooltip", !0),
          p = d.length,
          v = this.getRawValue(t),
          m = _(v),
          y = c.getItemVisual(t, "color");
        b(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";
        var x = p > 1 || m && !p ? r(v) : a(p ? Yo(c, t, d[0]) : m ? v[0] : v),
          w = x.content,
          S = o.seriesIndex + "at" + u,
          M = Na({
            color: y,
            type: "item",
            renderMode: i,
            markerId: S
          });
        h[S] = y, ++u;
        var I = c.getName(t),
          T = this.name;
        xi(this) || (T = ""), T = T ? Ra(T) + (e ? ": " : s) : "";
        var C = "string" == typeof M ? M : M.content,
          D = e ? C + T + w : T + C + (I ? Ra(I) + ": " + w : w);
        return {
          html: D,
          markers: h
        }
      },
      isAnimationEnabled: function() {
        if (Gc.node) return !1;
        var t = this.getShallow("animation");
        return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
      },
      restoreData: function() {
        this.dataTask.dirty()
      },
      getColorFromPalette: function(t, e, n) {
        var i = this.ecModel,
          r = Kg.getColorFromPalette.call(this, t, e, n);
        return r || (r = i.getColorFromPalette(t, e, n)), r
      },
      coordDimToDataDim: function(t) {
        return this.getRawData().mapDimension(t, !0)
      },
      getProgressive: function() {
        return this.get("progressive")
      },
      getProgressiveThreshold: function() {
        return this.get("progressiveThreshold")
      },
      getAxisTooltipData: null,
      getTooltipPosition: null,
      pipeTask: null,
      preventIncremental: null,
      pipelineContext: null
    });
  c(Bv, Av), c(Bv, Kg);
  var Ev = function() {
    this.group = new Gd, this.uid = _a("viewComponent")
  };
  Ev.prototype = {
    constructor: Ev,
    init: function() {},
    render: function() {},
    dispose: function() {},
    filterForExposedEvent: null
  };
  var zv = Ev.prototype;
  zv.updateView = zv.updateLayout = zv.updateVisual = function() {}, Pi(Ev), Ei(Ev, {
    registerWhenExtend: !0
  });
  var Rv = function() {
      var t = Si();
      return function(e) {
        var n = t(e),
          i = e.pipelineContext,
          r = n.large,
          a = n.progressiveRender,
          o = n.large = i.large,
          s = n.progressiveRender = i.progressiveRender;
        return !!(r ^ o || a ^ s) && "reset"
      }
    },
    Fv = Si(),
    Nv = Rv();
  as.prototype = {
    type: "chart",
    init: function() {},
    render: function() {},
    highlight: function(t, e, n, i) {
      ss(t.getData(), i, "emphasis")
    },
    downplay: function(t, e, n, i) {
      ss(t.getData(), i, "normal")
    },
    remove: function() {
      this.group.removeAll()
    },
    dispose: function() {},
    incrementalPrepareRender: null,
    incrementalRender: null,
    updateTransform: null,
    filterForExposedEvent: null
  };
  var Hv = as.prototype;
  Hv.updateView = Hv.updateLayout = Hv.updateVisual = function(t, e, n, i) {
    this.render(t, e, n, i)
  }, Pi(as, ["dispose"]), Ei(as, {
    registerWhenExtend: !0
  }), as.markUpdateMethod = function(t, e) {
    Fv(t).updateMethod = e
  };
  var Vv = {
      incrementalPrepareRender: {
        progress: function(t, e) {
          e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
        }
      },
      render: {
        forceFirstProgress: !0,
        progress: function(t, e) {
          e.view.render(e.model, e.ecModel, e.api, e.payload)
        }
      }
    },
    Wv = "\x00__throttleOriginMethod",
    Gv = "\x00__throttleRate",
    Xv = "\x00__throttleType",
    Yv = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function(t, e) {
        var n = t.getData(),
          i = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
        if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
          "function" != typeof r || r instanceof pg || n.each(function(e) {
            n.setItemVisual(e, "color", r(t.getDataParams(e)))
          });
          var a = function(t, e) {
            var n = t.getItemModel(e),
              r = n.get(i, !0);
            null != r && t.setItemVisual(e, "color", r)
          };
          return {
            dataEach: n.hasItemOption ? a : null
          }
        }
      }
    },
    qv = {
      toolbox: {
        brush: {
          title: {
            rect: "矩形选择",
            polygon: "圈选",
            lineX: "横向选择",
            lineY: "纵向选择",
            keep: "保持选择",
            clear: "清除选择"
          }
        },
        dataView: {
          title: "数据视图",
          lang: ["数据视图", "关闭", "刷新"]
        },
        dataZoom: {
          title: {
            zoom: "区域缩放",
            back: "区域缩放还原"
          }
        },
        magicType: {
          title: {
            line: "切换为折线图",
            bar: "切换为柱状图",
            stack: "切换为堆叠",
            tiled: "切换为平铺"
          }
        },
        restore: {
          title: "还原"
        },
        saveAsImage: {
          title: "保存为图片",
          lang: ["右键另存为图片"]
        }
      },
      series: {
        typeNames: {
          pie: "饼图",
          bar: "柱状图",
          line: "折线图",
          scatter: "散点图",
          effectScatter: "涟漪散点图",
          radar: "雷达图",
          tree: "树图",
          treemap: "矩形树图",
          boxplot: "箱型图",
          candlestick: "K线图",
          k: "K线图",
          heatmap: "热力图",
          map: "地图",
          parallel: "平行坐标图",
          lines: "线图",
          graph: "关系图",
          sankey: "桑基图",
          funnel: "漏斗图",
          gauge: "仪表盘图",
          pictorialBar: "象形柱图",
          themeRiver: "主题河流图",
          sunburst: "旭日图"
        }
      },
      aria: {
        general: {
          withTitle: "这是一个关于“{title}”的图表。",
          withoutTitle: "这是一个图表，"
        },
        series: {
          single: {
            prefix: "",
            withName: "图表类型是{seriesType}，表示{seriesName}。",
            withoutName: "图表类型是{seriesType}。"
          },
          multiple: {
            prefix: "它由{seriesCount}个图表系列组成。",
            withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
            withoutName: "第{seriesId}个系列是一个{seriesType}，",
            separator: {
              middle: "；",
              end: "。"
            }
          }
        },
        data: {
          allData: "其数据是——",
          partialData: "其中，前{displayCnt}项是——",
          withName: "{name}的数据是{value}",
          withoutName: "{value}",
          separator: {
            middle: "，",
            end: ""
          }
        }
      }
    },
    Uv = function(t, e) {
      function n(t, e) {
        if ("string" != typeof t) return t;
        var n = t;
        return f(e, function(t, e) {
          n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
        }), n
      }

      function i(t) {
        var e = o.get(t);
        if (null == e) {
          for (var n = t.split("."), i = qv.aria, r = 0; r < n.length; ++r) i = i[n[r]];
          return i
        }
        return e
      }

      function r() {
        var t = e.getModel("title").option;
        return t && t.length && (t = t[0]), t && t.text
      }

      function a(t) {
        return qv.series.typeNames[t] || "自定义图"
      }
      var o = e.getModel("aria");
      if (o.get("show")) {
        if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
        var s = 0;
        e.eachSeries(function() {
          ++s
        }, this);
        var l, h = o.get("data.maxCount") || 10,
          u = o.get("series.maxCount") || 10,
          c = Math.min(s, u);
        if (!(1 > s)) {
          var d = r();
          l = d ? n(i("general.withTitle"), {
            title: d
          }) : i("general.withoutTitle");
          var p = [],
            g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
          l += n(i(g), {
            seriesCount: s
          }), e.eachSeries(function(t, e) {
            if (c > e) {
              var r, o = t.get("name"),
                l = "series." + (s > 1 ? "multiple" : "single") + ".";
              r = i(o ? l + "withName" : l + "withoutName"), r = n(r, {
                seriesId: t.seriesIndex,
                seriesName: t.get("name"),
                seriesType: a(t.subType)
              });
              var u = t.getData();
              window.data = u, r += u.count() > h ? n(i("data.partialData"), {
                displayCnt: h
              }) : i("data.allData");
              for (var d = [], f = 0; f < u.count(); f++)
                if (h > f) {
                  var g = u.getName(f),
                    v = Yo(u, f);
                  d.push(n(i(g ? "data.withName" : "data.withoutName"), {
                    name: g,
                    value: v
                  }))
                }
              r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r)
            }
          }), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l)
        }
      }
    },
    jv = Math.PI,
    Zv = function(t, e) {
      e = e || {}, s(e, {
        text: "loading",
        color: "#c23531",
        textColor: "#000",
        maskColor: "rgba(255, 255, 255, 0.8)",
        zlevel: 0
      });
      var n = new lg({
          style: {
            fill: e.maskColor
          },
          zlevel: e.zlevel,
          z: 1e4
        }),
        i = new dg({
          shape: {
            startAngle: -jv / 2,
            endAngle: -jv / 2 + .1,
            r: 10
          },
          style: {
            stroke: e.color,
            lineCap: "round",
            lineWidth: 5
          },
          zlevel: e.zlevel,
          z: 10001
        }),
        r = new lg({
          style: {
            fill: "none",
            text: e.text,
            textPosition: "right",
            textDistance: 10,
            textFill: e.textColor
          },
          zlevel: e.zlevel,
          z: 10001
        });
      i.animateShape(!0).when(1e3, {
        endAngle: 3 * jv / 2
      }).start("circularInOut"), i.animateShape(!0).when(1e3, {
        startAngle: 3 * jv / 2
      }).delay(300).start("circularInOut");
      var a = new Gd;
      return a.add(i), a.add(r), a.add(n), a.resize = function() {
        var e = t.getWidth() / 2,
          a = t.getHeight() / 2;
        i.setShape({
          cx: e,
          cy: a
        });
        var o = i.shape.r;
        r.setShape({
          x: e - o,
          y: a - o,
          width: 2 * o,
          height: 2 * o
        }), n.setShape({
          x: 0,
          y: 0,
          width: t.getWidth(),
          height: t.getHeight()
        })
      }, a.resize(), a
    },
    $v = ds.prototype;
  $v.restoreData = function(t, e) {
    t.restoreData(e), this._stageTaskMap.each(function(t) {
      var e = t.overallTask;
      e && e.dirty()
    })
  }, $v.getPerformArgs = function(t, e) {
    if (t.__pipeline) {
      var n = this._pipelineMap.get(t.__pipeline.id),
        i = n.context,
        r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
        a = r ? n.step : null,
        o = i && i.modDataCount,
        s = null != o ? Math.ceil(o / a) : null;
      return {
        step: a,
        modBy: s,
        modDataCount: o
      }
    }
  }, $v.getPipeline = function(t) {
    return this._pipelineMap.get(t)
  }, $v.updateStreamModes = function(t, e) {
    var n = this._pipelineMap.get(t.uid),
      i = t.getData(),
      r = i.count(),
      a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
      o = t.get("large") && r >= t.get("largeThreshold"),
      s = "mod" === t.get("progressiveChunkMode") ? r : null;
    t.pipelineContext = n.context = {
      progressiveRender: a,
      modDataCount: s,
      large: o
    }
  }, $v.restorePipelines = function(t) {
    var e = this,
      n = e._pipelineMap = R();
    t.eachSeries(function(t) {
      var i = t.getProgressive(),
        r = t.uid;
      n.set(r, {
        id: r,
        head: null,
        tail: null,
        threshold: t.getProgressiveThreshold(),
        progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
        blockIndex: -1,
        step: Math.round(i || 700),
        count: 0
      }), Ms(e, t, t.dataTask)
    })
  }, $v.prepareStageTasks = function() {
    var t = this._stageTaskMap,
      e = this.ecInstance.getModel(),
      n = this.api;
    f(this._allHandlers, function(i) {
      var r = t.get(i.uid) || t.set(i.uid, []);
      i.reset && ps(this, i, r, e, n), i.overallReset && gs(this, i, r, e, n)
    }, this)
  }, $v.prepareView = function(t, e, n, i) {
    var r = t.renderTask,
      a = r.context;
    a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, Ms(this, e, r)
  }, $v.performDataProcessorTasks = function(t, e) {
    fs(this, this._dataProcessorHandlers, t, e, {
      block: !0
    })
  }, $v.performVisualTasks = function(t, e, n) {
    fs(this, this._visualHandlers, t, e, n)
  }, $v.performSeriesTasks = function(t) {
    var e;
    t.eachSeries(function(t) {
      e |= t.dataTask.perform()
    }), this.unfinished |= e
  }, $v.plan = function() {
    this._pipelineMap.each(function(t) {
      var e = t.tail;
      do {
        if (e.__block) {
          t.blockIndex = e.__idxInPipeline;
          break
        }
        e = e.getUpstream()
      } while (e)
    })
  };
  var Kv = $v.updatePayload = function(t, e) {
      "remain" !== e && (t.context.payload = e)
    },
    Qv = bs(0);
  ds.wrapStageHandler = function(t, e) {
    return x(t) && (t = {
      overallReset: t,
      seriesType: Is(t)
    }), t.uid = _a("stageHandler"), e && (t.visualType = e), t
  };
  var Jv, tm = {},
    em = {};
  Ts(tm, hv), Ts(em, yo), tm.eachSeriesByType = tm.eachRawSeriesByType = function(t) {
    Jv = t
  }, tm.eachComponent = function(t) {
    "series" === t.mainType && t.subType && (Jv = t.subType)
  };
  var nm = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
    im = {
      color: nm,
      colorLayer: [
        ["#37A2DA", "#ffd85c", "#fd7b5f"],
        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
        ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], nm
      ]
    },
    rm = "#eee",
    am = function() {
      return {
        axisLine: {
          lineStyle: {
            color: rm
          }
        },
        axisTick: {
          lineStyle: {
            color: rm
          }
        },
        axisLabel: {
          textStyle: {
            color: rm
          }
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "#aaa"
          }
        },
        splitArea: {
          areaStyle: {
            color: rm
          }
        }
      }
    },
    om = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
    sm = {
      color: om,
      backgroundColor: "#333",
      tooltip: {
        axisPointer: {
          lineStyle: {
            color: rm
          },
          crossStyle: {
            color: rm
          }
        }
      },
      legend: {
        textStyle: {
          color: rm
        }
      },
      textStyle: {
        color: rm
      },
      title: {
        textStyle: {
          color: rm
        }
      },
      toolbox: {
        iconStyle: {
          normal: {
            borderColor: rm
          }
        }
      },
      dataZoom: {
        textStyle: {
          color: rm
        }
      },
      visualMap: {
        textStyle: {
          color: rm
        }
      },
      timeline: {
        lineStyle: {
          color: rm
        },
        itemStyle: {
          normal: {
            color: om[1]
          }
        },
        label: {
          normal: {
            textStyle: {
              color: rm
            }
          }
        },
        controlStyle: {
          normal: {
            color: rm,
            borderColor: rm
          }
        }
      },
      timeAxis: am(),
      logAxis: am(),
      valueAxis: am(),
      categoryAxis: am(),
      line: {
        symbol: "circle"
      },
      graph: {
        color: om
      },
      gauge: {
        title: {
          textStyle: {
            color: rm
          }
        }
      },
      candlestick: {
        itemStyle: {
          normal: {
            color: "#FD1050",
            color0: "#0CF49B",
            borderColor: "#FD1050",
            borderColor0: "#0CF49B"
          }
        }
      }
    };
  sm.categoryAxis.splitLine.show = !1, Ug.extend({
    type: "dataset",
    defaultOption: {
      seriesLayoutBy: av,
      sourceHeader: null,
      dimensions: null,
      source: null
    },
    optionUpdated: function() {
      Qa(this)
    }
  }), Ev.extend({
    type: "dataset"
  });
  var lm = pr.extend({
      type: "ellipse",
      shape: {
        cx: 0,
        cy: 0,
        rx: 0,
        ry: 0
      },
      buildPath: function(t, e) {
        var n = .5522848,
          i = e.cx,
          r = e.cy,
          a = e.rx,
          o = e.ry,
          s = a * n,
          l = o * n;
        t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), t.closePath()
      }
    }),
    hm = /[\s,]+/;
  Ds.prototype.parse = function(t, e) {
    e = e || {};
    var n = Cs(t);
    if (!n) throw new Error("Illegal svg");
    var i = new Gd;
    this._root = i;
    var r = n.getAttribute("viewBox") || "",
      a = parseFloat(n.getAttribute("width") || e.width),
      o = parseFloat(n.getAttribute("height") || e.height);
    isNaN(a) && (a = null), isNaN(o) && (o = null), Ls(n, i, null, !0);
    for (var s = n.firstChild; s;) this._parseNode(s, i), s = s.nextSibling;
    var l, h;
    if (r) {
      var u = O(r).split(hm);
      u.length >= 4 && (l = {
        x: parseFloat(u[0] || 0),
        y: parseFloat(u[1] || 0),
        width: parseFloat(u[2]),
        height: parseFloat(u[3])
      })
    }
    if (l && null != a && null != o && (h = zs(l, a, o), !e.ignoreViewBox)) {
      var c = i;
      i = new Gd, i.add(c), c.scale = h.scale.slice(), c.position = h.position.slice()
    }
    return e.ignoreRootClip || null == a || null == o || i.setClipPath(new lg({
      shape: {
        x: 0,
        y: 0,
        width: a,
        height: o
      }
    })), {
      root: i,
      width: a,
      height: o,
      viewBoxRect: l,
      viewBoxTransform: h
    }
  }, Ds.prototype._parseNode = function(t, e) {
    var n = t.nodeName.toLowerCase();
    "defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);
    var i;
    if (this._isDefine) {
      var r = cm[n];
      if (r) {
        var a = r.call(this, t),
          o = t.getAttribute("id");
        o && (this._defs[o] = a)
      }
    } else {
      var r = um[n];
      r && (i = r.call(this, t, e), e.add(i))
    }
    for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
    "defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1)
  }, Ds.prototype._parseText = function(t, e) {
    if (1 === t.nodeType) {
      var n = t.getAttribute("dx") || 0,
        i = t.getAttribute("dy") || 0;
      this._textX += parseFloat(n), this._textY += parseFloat(i)
    }
    var r = new Qp({
      style: {
        text: t.textContent,
        transformText: !0
      },
      position: [this._textX || 0, this._textY || 0]
    });
    As(e, r), Ls(t, r, this._defs);
    var a = r.style.fontSize;
    a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);
    var o = r.getBoundingRect();
    return this._textX += o.width, e.add(r), r
  };
  var um = {
      g: function(t, e) {
        var n = new Gd;
        return As(e, n), Ls(t, n, this._defs), n
      },
      rect: function(t, e) {
        var n = new lg;
        return As(e, n), Ls(t, n, this._defs), n.setShape({
          x: parseFloat(t.getAttribute("x") || 0),
          y: parseFloat(t.getAttribute("y") || 0),
          width: parseFloat(t.getAttribute("width") || 0),
          height: parseFloat(t.getAttribute("height") || 0)
        }), n
      },
      circle: function(t, e) {
        var n = new Jp;
        return As(e, n), Ls(t, n, this._defs), n.setShape({
          cx: parseFloat(t.getAttribute("cx") || 0),
          cy: parseFloat(t.getAttribute("cy") || 0),
          r: parseFloat(t.getAttribute("r") || 0)
        }), n
      },
      line: function(t, e) {
        var n = new hg;
        return As(e, n), Ls(t, n, this._defs), n.setShape({
          x1: parseFloat(t.getAttribute("x1") || 0),
          y1: parseFloat(t.getAttribute("y1") || 0),
          x2: parseFloat(t.getAttribute("x2") || 0),
          y2: parseFloat(t.getAttribute("y2") || 0)
        }), n
      },
      ellipse: function(t, e) {
        var n = new lm;
        return As(e, n), Ls(t, n, this._defs), n.setShape({
          cx: parseFloat(t.getAttribute("cx") || 0),
          cy: parseFloat(t.getAttribute("cy") || 0),
          rx: parseFloat(t.getAttribute("rx") || 0),
          ry: parseFloat(t.getAttribute("ry") || 0)
        }), n
      },
      polygon: function(t, e) {
        var n = t.getAttribute("points");
        n && (n = Ps(n));
        var i = new og({
          shape: {
            points: n || []
          }
        });
        return As(e, i), Ls(t, i, this._defs), i
      },
      polyline: function(t, e) {
        var n = new pr;
        As(e, n), Ls(t, n, this._defs);
        var i = t.getAttribute("points");
        i && (i = Ps(i));
        var r = new sg({
          shape: {
            points: i || []
          }
        });
        return r
      },
      image: function(t, e) {
        var n = new Qn;
        return As(e, n), Ls(t, n, this._defs), n.setStyle({
          image: t.getAttribute("xlink:href"),
          x: t.getAttribute("x"),
          y: t.getAttribute("y"),
          width: t.getAttribute("width"),
          height: t.getAttribute("height")
        }), n
      },
      text: function(t, e) {
        var n = t.getAttribute("x") || 0,
          i = t.getAttribute("y") || 0,
          r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0;
        this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);
        var o = new Gd;
        return As(e, o), Ls(t, o, this._defs), o
      },
      tspan: function(t, e) {
        var n = t.getAttribute("x"),
          i = t.getAttribute("y");
        null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
        var r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0,
          o = new Gd;
        return As(e, o), Ls(t, o, this._defs), this._textX += r, this._textY += a, o
      },
      path: function(t, e) {
        var n = t.getAttribute("d") || "",
          i = yr(n);
        return As(e, i), Ls(t, i, this._defs), i
      }
    },
    cm = {
      lineargradient: function(t) {
        var e = parseInt(t.getAttribute("x1") || 0, 10),
          n = parseInt(t.getAttribute("y1") || 0, 10),
          i = parseInt(t.getAttribute("x2") || 10, 10),
          r = parseInt(t.getAttribute("y2") || 0, 10),
          a = new gg(e, n, i, r);
        return ks(t, a), a
      },
      radialgradient: function() {}
    },
    dm = {
      fill: "fill",
      stroke: "stroke",
      "stroke-width": "lineWidth",
      opacity: "opacity",
      "fill-opacity": "fillOpacity",
      "stroke-opacity": "strokeOpacity",
      "stroke-dasharray": "lineDash",
      "stroke-dashoffset": "lineDashOffset",
      "stroke-linecap": "lineCap",
      "stroke-linejoin": "lineJoin",
      "stroke-miterlimit": "miterLimit",
      "font-family": "fontFamily",
      "font-size": "fontSize",
      "font-style": "fontStyle",
      "font-weight": "fontWeight",
      "text-align": "textAlign",
      "alignment-baseline": "textBaseline"
    },
    fm = /url\(\s*#(.*?)\)/,
    pm = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
    gm = /([^\s:;]+)\s*:\s*([^:;]+)/g,
    vm = R(),
    mm = {
      registerMap: function(t, e, n) {
        var i;
        return _(e) ? i = e : e.svg ? i = [{
          type: "svg",
          source: e.svg,
          specialAreas: e.specialAreas
        }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{
          type: "geoJSON",
          source: e,
          specialAreas: n
        }]), f(i, function(t) {
          var e = t.type;
          "geoJson" === e && (e = t.type = "geoJSON");
          var n = ym[e];
          n(t)
        }), vm.set(t, i)
      },
      retrieveMap: function(t) {
        return vm.get(t)
      }
    },
    ym = {
      geoJSON: function(t) {
        var e = t.source;
        t.geoJSON = w(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
      },
      svg: function(t) {
        t.svgXML = Cs(t.source)
      }
    },
    _m = L,
    xm = f,
    wm = x,
    bm = b,
    Sm = Ug.parseClassType,
    Mm = "4.2.0",
    Im = {
      zrender: "4.0.5"
    },
    Tm = 1,
    Cm = 1e3,
    Dm = 5e3,
    km = 1e3,
    Am = 2e3,
    Pm = 3e3,
    Lm = 4e3,
    Om = 5e3,
    Bm = {
      PROCESSOR: {
        FILTER: Cm,
        STATISTIC: Dm
      },
      VISUAL: {
        LAYOUT: km,
        GLOBAL: Am,
        CHART: Pm,
        COMPONENT: Lm,
        BRUSH: Om
      }
    },
    Em = "__flagInMainProcess",
    zm = "__optionUpdated",
    Rm = /^[a-zA-Z0-9_]+$/;
  Fs.prototype.on = Rs("on"), Fs.prototype.off = Rs("off"), Fs.prototype.one = Rs("one"), c(Fs, sd);
  var Fm = Ns.prototype;
  Fm._onframe = function() {
    if (!this._disposed) {
      var t = this._scheduler;
      if (this[zm]) {
        var e = this[zm].silent;
        this[Em] = !0, Vs(this), Nm.update.call(this), this[Em] = !1, this[zm] = !1, Ys.call(this, e), qs.call(this, e)
      } else if (t.unfinished) {
        var n = Tm,
          i = this._model,
          r = this._api;
        t.unfinished = !1;
        do {
          var a = +new Date;
          t.performSeriesTasks(i), t.performDataProcessorTasks(i), Gs(this, i), t.performVisualTasks(i), Qs(this, this._model, r, "remain"), n -= +new Date - a
        } while (n > 0 && t.unfinished);
        t.unfinished || this._zr.flush()
      }
    }
  }, Fm.getDom = function() {
    return this._dom
  }, Fm.getZr = function() {
    return this._zr
  }, Fm.setOption = function(t, e, n) {
    var i;
    if (bm(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[Em] = !0, !this._model || e) {
      var r = new xo(this._api),
        a = this._theme,
        o = this._model = new hv(null, null, a, r);
      o.scheduler = this._scheduler, o.init(null, null, a, r)
    }
    this._model.setOption(t, Xm), n ? (this[zm] = {
      silent: i
    }, this[Em] = !1) : (Vs(this), Nm.update.call(this), this._zr.flush(), this[zm] = !1, this[Em] = !1, Ys.call(this, i), qs.call(this, i))
  }, Fm.setTheme = function() {
    console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
  }, Fm.getModel = function() {
    return this._model
  }, Fm.getOption = function() {
    return this._model && this._model.getOption()
  }, Fm.getWidth = function() {
    return this._zr.getWidth()
  }, Fm.getHeight = function() {
    return this._zr.getHeight()
  }, Fm.getDevicePixelRatio = function() {
    return this._zr.painter.dpr || window.devicePixelRatio || 1
  }, Fm.getRenderedCanvas = function(t) {
    if (Gc.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
      var e = this._zr;
      return e.painter.getRenderedCanvas(t)
    }
  }, Fm.getSvgDataUrl = function() {
    if (Gc.svgSupported) {
      var t = this._zr,
        e = t.storage.getDisplayList();
      return f(e, function(t) {
        t.stopAnimation(!0)
      }), t.painter.pathToDataUrl()
    }
  }, Fm.getDataURL = function(t) {
    t = t || {};
    var e = t.excludeComponents,
      n = this._model,
      i = [],
      r = this;
    xm(e, function(t) {
      n.eachComponent({
        mainType: t
      }, function(t) {
        var e = r._componentsMap[t.__viewId];
        e.group.ignore || (i.push(e), e.group.ignore = !0)
      })
    });
    var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
    return xm(i, function(t) {
      t.group.ignore = !1
    }), a
  }, Fm.getConnectedDataURL = function(t) {
    if (Gc.canvasSupported) {
      var e = this.group,
        n = Math.min,
        r = Math.max,
        a = 1 / 0;
      if ($m[e]) {
        var o = a,
          s = a,
          l = -a,
          h = -a,
          u = [],
          c = t && t.pixelRatio || 1;
        f(Zm, function(a) {
          if (a.group === e) {
            var c = a.getRenderedCanvas(i(t)),
              d = a.getDom().getBoundingClientRect();
            o = n(d.left, o), s = n(d.top, s), l = r(d.right, l), h = r(d.bottom, h), u.push({
              dom: c,
              left: d.left,
              top: d.top
            })
          }
        }), o *= c, s *= c, l *= c, h *= c;
        var d = l - o,
          p = h - s,
          g = td();
        g.width = d, g.height = p;
        var v = fi(g);
        return xm(u, function(t) {
          var e = new Qn({
            style: {
              x: t.left * c - o,
              y: t.top * c - s,
              image: t.dom
            }
          });
          v.add(e)
        }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
      }
      return this.getDataURL(t)
    }
  }, Fm.convertToPixel = y(Hs, "convertToPixel"), Fm.convertFromPixel = y(Hs, "convertFromPixel"), Fm.containPixel = function(t, e) {
    var n, i = this._model;
    return t = Mi(i, t), f(t, function(t, i) {
      i.indexOf("Models") >= 0 && f(t, function(t) {
        var r = t.coordinateSystem;
        if (r && r.containPoint) n |= !!r.containPoint(e);
        else if ("seriesModels" === i) {
          var a = this._chartsMap[t.__viewId];
          a && a.containPoint && (n |= a.containPoint(e, t))
        }
      }, this)
    }, this), !!n
  }, Fm.getVisual = function(t, e) {
    var n = this._model;
    t = Mi(n, t, {
      defaultMainType: "series"
    });
    var i = t.seriesModel,
      r = i.getData(),
      a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
    return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
  }, Fm.getViewOfComponentModel = function(t) {
    return this._componentsMap[t.__viewId]
  }, Fm.getViewOfSeriesModel = function(t) {
    return this._chartsMap[t.__viewId]
  };
  var Nm = {
    prepareAndUpdate: function(t) {
      Vs(this), Nm.update.call(this, t)
    },
    update: function(t) {
      var e = this._model,
        n = this._api,
        i = this._zr,
        r = this._coordSysMgr,
        a = this._scheduler;
      if (e) {
        a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), Gs(this, e), r.update(e, n), Zs(e), a.performVisualTasks(e, t), $s(this, e, n, t);
        var o = e.get("backgroundColor") || "transparent";
        if (Gc.canvasSupported) i.setBackgroundColor(o);
        else {
          var s = ke(o);
          o = Oe(s, "rgb"), 0 === s[3] && (o = "transparent")
        }
        Js(e, n)
      }
    },
    updateTransform: function(t) {
      var e = this._model,
        n = this,
        i = this._api;
      if (e) {
        var r = [];
        e.eachComponent(function(a, o) {
          var s = n.getViewOfComponentModel(o);
          if (s && s.__alive)
            if (s.updateTransform) {
              var l = s.updateTransform(o, e, i, t);
              l && l.update && r.push(s)
            } else r.push(s)
        });
        var a = R();
        e.eachSeries(function(r) {
          var o = n._chartsMap[r.__viewId];
          if (o.updateTransform) {
            var s = o.updateTransform(r, e, i, t);
            s && s.update && a.set(r.uid, 1)
          } else a.set(r.uid, 1)
        }), Zs(e), this._scheduler.performVisualTasks(e, t, {
          setDirty: !0,
          dirtyMap: a
        }), Qs(n, e, i, t, a), Js(e, this._api)
      }
    },
    updateView: function(t) {
      var e = this._model;
      e && (as.markUpdateMethod(t, "updateView"), Zs(e), this._scheduler.performVisualTasks(e, t, {
        setDirty: !0
      }), $s(this, this._model, this._api, t), Js(e, this._api))
    },
    updateVisual: function(t) {
      Nm.update.call(this, t)
    },
    updateLayout: function(t) {
      Nm.update.call(this, t)
    }
  };
  Fm.resize = function(t) {
    this._zr.resize(t);
    var e = this._model;
    if (this._loadingFX && this._loadingFX.resize(), e) {
      var n = e.resetOption("media"),
        i = t && t.silent;
      this[Em] = !0, n && Vs(this), Nm.update.call(this), this[Em] = !1, Ys.call(this, i), qs.call(this, i)
    }
  }, Fm.showLoading = function(t, e) {
    if (bm(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), jm[t]) {
      var n = jm[t](this._api, e),
        i = this._zr;
      this._loadingFX = n, i.add(n)
    }
  }, Fm.hideLoading = function() {
    this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
  }, Fm.makeActionFromEvent = function(t) {
    var e = o({}, t);
    return e.type = Wm[t.type], e
  }, Fm.dispatchAction = function(t, e) {
    if (bm(e) || (e = {
        silent: !!e
      }), Vm[t.type] && this._model) {
      if (this[Em]) return void this._pendingActions.push(t);
      Xs.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Gc.browser.weChat && this._throttledZrFlush(), Ys.call(this, e.silent), qs.call(this, e.silent)
    }
  }, Fm.appendData = function(t) {
    var e = t.seriesIndex,
      n = this.getModel(),
      i = n.getSeriesByIndex(e);
    i.appendData(t), this._scheduler.unfinished = !0
  }, Fm.on = Rs("on"), Fm.off = Rs("off"), Fm.one = Rs("one");
  var Hm = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
  Fm._initEvents = function() {
    xm(Hm, function(t) {
      this._zr.on(t, function(e) {
        var n, i = this.getModel(),
          r = e.target,
          a = "globalout" === t;
        if (a) n = {};
        else if (r && null != r.dataIndex) {
          var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
          n = s && s.getDataParams(r.dataIndex, r.dataType, r) || {}
        } else r && r.eventData && (n = o({}, r.eventData));
        if (n) {
          var l = n.componentType,
            h = n.componentIndex;
          ("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", h = n.seriesIndex);
          var u = l && null != h && i.getComponent(l, h),
            c = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
          n.event = e, n.type = t, this._ecEventProcessor.eventInfo = {
            targetEl: r,
            packedEvent: n,
            model: u,
            view: c
          }, this.trigger(t, n)
        }
      }, this)
    }, this), xm(Wm, function(t, e) {
      this._messageCenter.on(e, function(t) {
        this.trigger(e, t)
      }, this)
    }, this)
  }, Fm.isDisposed = function() {
    return this._disposed
  }, Fm.clear = function() {
    this.setOption({
      series: []
    }, !0)
  }, Fm.dispose = function() {
    if (!this._disposed) {
      this._disposed = !0, Ti(this.getDom(), Jm, "");
      var t = this._api,
        e = this._model;
      xm(this._componentsViews, function(n) {
        n.dispose(e, t)
      }), xm(this._chartsViews, function(n) {
        n.dispose(e, t)
      }), this._zr.dispose(), delete Zm[this.id]
    }
  }, c(Ns, sd), rl.prototype = {
    constructor: rl,
    normalizeQuery: function(t) {
      var e = {},
        n = {},
        i = {};
      if (w(t)) {
        var r = Sm(t);
        e.mainType = r.main || null, e.subType = r.sub || null
      } else {
        var a = ["Index", "Name", "Id"],
          o = {
            name: 1,
            dataIndex: 1,
            dataType: 1
          };
        f(t, function(t, r) {
          for (var s = !1, l = 0; l < a.length; l++) {
            var h = a[l],
              u = r.lastIndexOf(h);
            if (u > 0 && u === r.length - h.length) {
              var c = r.slice(0, u);
              "data" !== c && (e.mainType = c, e[h.toLowerCase()] = t, s = !0)
            }
          }
          o.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t)
        })
      }
      return {
        cptQuery: e,
        dataQuery: n,
        otherQuery: i
      }
    },
    filter: function(t, e) {
      function n(t, e, n, i) {
        return null == t[n] || e[i || n] === t[n]
      }
      var i = this.eventInfo;
      if (!i) return !0;
      var r = i.targetEl,
        a = i.packedEvent,
        o = i.model,
        s = i.view;
      if (!o || !s) return !0;
      var l = e.cptQuery,
        h = e.dataQuery;
      return n(l, o, "mainType") && n(l, o, "subType") && n(l, o, "index", "componentIndex") && n(l, o, "name") && n(l, o, "id") && n(h, a, "name") && n(h, a, "dataIndex") && n(h, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a))
    },
    afterTrigger: function() {
      this.eventInfo = null
    }
  };
  var Vm = {},
    Wm = {},
    Gm = [],
    Xm = [],
    Ym = [],
    qm = [],
    Um = {},
    jm = {},
    Zm = {},
    $m = {},
    Km = new Date - 0,
    Qm = new Date - 0,
    Jm = "_echarts_instance_",
    ty = ll;
  xl(Am, Yv), fl(Sv), pl(Dm, Mv), bl("default", Zv), vl({
    type: "highlight",
    event: "highlight",
    update: "highlight"
  }, F), vl({
    type: "downplay",
    event: "downplay",
    update: "downplay"
  }, F), dl("light", im), dl("dark", sm);
  var ey = {},
    ny = "__ec_stack_",
    iy = .5,
    ry = "undefined" != typeof Float32Array ? Float32Array : Array,
    ay = {
      seriesType: "bar",
      plan: Rv(),
      reset: function(t) {
        function e(t, e) {
          for (var n, c = new ry(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) f[h] = e.get(o, n), f[1 - h] = e.get(s, n), d = i.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];
          e.setLayout({
            largePoints: c,
            barWidth: u,
            valueAxisStart: Wl(r, a, !1),
            valueAxisHorizontal: l
          })
        }
        if (Hl(t) && Vl(t)) {
          var n = t.getData(),
            i = t.coordinateSystem,
            r = i.getBaseAxis(),
            a = i.getOtherAxis(r),
            o = n.mapDimension(a.dim),
            s = n.mapDimension(r.dim),
            l = a.isHorizontal(),
            h = l ? 0 : 1,
            u = Fl(zl([t]), r, t).width;
          return u > iy || (u = iy), {
            progress: e
          }
        }
      }
    };
  Gl.prototype.parse = function(t) {
    return t
  }, Gl.prototype.getSetting = function(t) {
    return this._setting[t]
  }, Gl.prototype.contain = function(t) {
    var e = this._extent;
    return t >= e[0] && t <= e[1]
  }, Gl.prototype.normalize = function(t) {
    var e = this._extent;
    return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
  }, Gl.prototype.scale = function(t) {
    var e = this._extent;
    return t * (e[1] - e[0]) + e[0]
  }, Gl.prototype.unionExtent = function(t) {
    var e = this._extent;
    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
  }, Gl.prototype.unionExtentFromData = function(t, e) {
    this.unionExtent(t.getApproximateExtent(e))
  }, Gl.prototype.getExtent = function() {
    return this._extent.slice()
  }, Gl.prototype.setExtent = function(t, e) {
    var n = this._extent;
    isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
  }, Gl.prototype.isBlank = function() {
    return this._isBlank
  }, Gl.prototype.setBlank = function(t) {
    this._isBlank = t
  }, Gl.prototype.getLabel = null, Pi(Gl), Ei(Gl, {
    registerWhenExtend: !0
  }), Xl.createByAxisModel = function(t) {
    var e = t.option,
      n = e.data,
      i = n && p(n, ql);
    return new Xl({
      categories: i,
      needCollect: !i,
      deduplication: e.dedplication !== !1
    })
  };
  var oy = Xl.prototype;
  oy.getOrdinal = function(t) {
    return Yl(this).get(t)
  }, oy.parseAndCollect = function(t) {
    var e, n = this._needCollect;
    if ("string" != typeof t && !n) return t;
    if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
    var i = Yl(this);
    return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e
  };
  var sy = Gl.prototype,
    ly = Gl.extend({
      type: "ordinal",
      init: function(t, e) {
        (!t || _(t)) && (t = new Xl({
          categories: t
        })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
      },
      parse: function(t) {
        return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
      },
      contain: function(t) {
        return t = this.parse(t), sy.contain.call(this, t) && null != this._ordinalMeta.categories[t]
      },
      normalize: function(t) {
        return sy.normalize.call(this, this.parse(t))
      },
      scale: function(t) {
        return Math.round(sy.scale.call(this, t))
      },
      getTicks: function() {
        for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
        return t
      },
      getLabel: function(t) {
        return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
      },
      count: function() {
        return this._extent[1] - this._extent[0] + 1
      },
      unionExtentFromData: function(t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      },
      getOrdinalMeta: function() {
        return this._ordinalMeta
      },
      niceTicks: F,
      niceExtent: F
    });
  ly.create = function() {
    return new ly
  };
  var hy = Ia,
    uy = Ia,
    cy = Gl.extend({
      type: "interval",
      _interval: 0,
      _intervalPrecision: 2,
      setExtent: function(t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
      },
      unionExtent: function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), cy.prototype.setExtent.call(this, e[0], e[1])
      },
      getInterval: function() {
        return this._interval
      },
      setInterval: function(t) {
        this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = jl(t)
      },
      getTicks: function() {
        return Kl(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
      },
      getLabel: function(t, e) {
        if (null == t) return "";
        var n = e && e.precision;
        return null == n ? n = Ta(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = uy(t, n, !0), Ea(t)
      },
      niceTicks: function(t, e, n) {
        t = t || 5;
        var i = this._extent,
          r = i[1] - i[0];
        if (isFinite(r)) {
          0 > r && (r = -r, i.reverse());
          var a = Ul(i, t, e, n);
          this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
        }
      },
      niceExtent: function(t) {
        var e = this._extent;
        if (e[0] === e[1])
          if (0 !== e[0]) {
            var n = e[0];
            t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
          } else e[1] = 1;
        var i = e[1] - e[0];
        isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        var r = this._interval;
        t.fixMin || (e[0] = uy(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = uy(Math.ceil(e[1] / r) * r))
      }
    });
  cy.create = function() {
    return new cy
  };
  var dy = cy.prototype,
    fy = Math.ceil,
    py = Math.floor,
    gy = 1e3,
    vy = 60 * gy,
    my = 60 * vy,
    yy = 24 * my,
    _y = function(t, e, n, i) {
      for (; i > n;) {
        var r = n + i >>> 1;
        t[r][1] < e ? n = r + 1 : i = r
      }
      return n
    },
    xy = cy.extend({
      type: "time",
      getLabel: function(t) {
        var e = this._stepLvl,
          n = new Date(t);
        return Va(e[0], n, this.getSetting("useUTC"))
      },
      niceExtent: function(t) {
        var e = this._extent;
        if (e[0] === e[1] && (e[0] -= yy, e[1] += yy), e[1] === -1 / 0 && 1 / 0 === e[0]) {
          var n = new Date;
          e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - yy
        }
        this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        var i = this._interval;
        t.fixMin || (e[0] = Ia(py(e[0] / i) * i)), t.fixMax || (e[1] = Ia(fy(e[1] / i) * i))
      },
      niceTicks: function(t, e, n) {
        t = t || 10;
        var i = this._extent,
          r = i[1] - i[0],
          a = r / t;
        null != e && e > a && (a = e), null != n && a > n && (a = n);
        var o = wy.length,
          s = _y(wy, a, 0, o),
          l = wy[Math.min(s, o - 1)],
          h = l[1];
        if ("year" === l[0]) {
          var u = r / h,
            c = Ba(u / t, !0);
          h *= c
        }
        var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
          f = [Math.round(fy((i[0] - d) / h) * h + d), Math.round(py((i[1] - d) / h) * h + d)];
        $l(f, i), this._stepLvl = l, this._interval = h, this._niceExtent = f
      },
      parse: function(t) {
        return +Pa(t)
      }
    });
  f(["contain", "normalize"], function(t) {
    xy.prototype[t] = function(e) {
      return dy[t].call(this, this.parse(e))
    }
  });
  var wy = [
    ["hh:mm:ss", gy],
    ["hh:mm:ss", 5 * gy],
    ["hh:mm:ss", 10 * gy],
    ["hh:mm:ss", 15 * gy],
    ["hh:mm:ss", 30 * gy],
    ["hh:mm\nMM-dd", vy],
    ["hh:mm\nMM-dd", 5 * vy],
    ["hh:mm\nMM-dd", 10 * vy],
    ["hh:mm\nMM-dd", 15 * vy],
    ["hh:mm\nMM-dd", 30 * vy],
    ["hh:mm\nMM-dd", my],
    ["hh:mm\nMM-dd", 2 * my],
    ["hh:mm\nMM-dd", 6 * my],
    ["hh:mm\nMM-dd", 12 * my],
    ["MM-dd\nyyyy", yy],
    ["MM-dd\nyyyy", 2 * yy],
    ["MM-dd\nyyyy", 3 * yy],
    ["MM-dd\nyyyy", 4 * yy],
    ["MM-dd\nyyyy", 5 * yy],
    ["MM-dd\nyyyy", 6 * yy],
    ["week", 7 * yy],
    ["MM-dd\nyyyy", 10 * yy],
    ["week", 14 * yy],
    ["week", 21 * yy],
    ["month", 31 * yy],
    ["week", 42 * yy],
    ["month", 62 * yy],
    ["week", 70 * yy],
    ["quarter", 95 * yy],
    ["month", 31 * yy * 4],
    ["month", 31 * yy * 5],
    ["half-year", 380 * yy / 2],
    ["month", 31 * yy * 8],
    ["month", 31 * yy * 10],
    ["year", 380 * yy]
  ];
  xy.create = function(t) {
    return new xy({
      useUTC: t.ecModel.get("useUTC")
    })
  };
  var by = Gl.prototype,
    Sy = cy.prototype,
    My = Ta,
    Iy = Ia,
    Ty = Math.floor,
    Cy = Math.ceil,
    Dy = Math.pow,
    ky = Math.log,
    Ay = Gl.extend({
      type: "log",
      base: 10,
      $constructor: function() {
        Gl.apply(this, arguments), this._originalScale = new cy
      },
      getTicks: function() {
        var t = this._originalScale,
          e = this._extent,
          n = t.getExtent();
        return p(Sy.getTicks.call(this), function(i) {
          var r = Ia(Dy(this.base, i));
          return r = i === e[0] && t.__fixMin ? Ql(r, n[0]) : r, r = i === e[1] && t.__fixMax ? Ql(r, n[1]) : r
        }, this)
      },
      getLabel: Sy.getLabel,
      scale: function(t) {
        return t = by.scale.call(this, t), Dy(this.base, t)
      },
      setExtent: function(t, e) {
        var n = this.base;
        t = ky(t) / ky(n), e = ky(e) / ky(n), Sy.setExtent.call(this, t, e)
      },
      getExtent: function() {
        var t = this.base,
          e = by.getExtent.call(this);
        e[0] = Dy(t, e[0]), e[1] = Dy(t, e[1]);
        var n = this._originalScale,
          i = n.getExtent();
        return n.__fixMin && (e[0] = Ql(e[0], i[0])), n.__fixMax && (e[1] = Ql(e[1], i[1])), e
      },
      unionExtent: function(t) {
        this._originalScale.unionExtent(t);
        var e = this.base;
        t[0] = ky(t[0]) / ky(e), t[1] = ky(t[1]) / ky(e), by.unionExtent.call(this, t)
      },
      unionExtentFromData: function(t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      },
      niceTicks: function(t) {
        t = t || 10;
        var e = this._extent,
          n = e[1] - e[0];
        if (!(1 / 0 === n || 0 >= n)) {
          var i = La(n),
            r = t / n * i;
          for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
          var a = [Ia(Cy(e[0] / i) * i), Ia(Ty(e[1] / i) * i)];
          this._interval = i, this._niceExtent = a
        }
      },
      niceExtent: function(t) {
        Sy.niceExtent.call(this, t);
        var e = this._originalScale;
        e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
      }
    });
  f(["contain", "normalize"], function(t) {
    Ay.prototype[t] = function(e) {
      return e = ky(e) / ky(this.base), by[t].call(this, e)
    }
  }), Ay.create = function() {
    return new Ay
  };
  var Py = function(t) {
    this._axes = {}, this._dimList = [], this.name = t || ""
  };
  Py.prototype = {
    constructor: Py,
    type: "cartesian",
    getAxis: function(t) {
      return this._axes[t]
    },
    getAxes: function() {
      return p(this._dimList, lh, this)
    },
    getAxesByScale: function(t) {
      return t = t.toLowerCase(), v(this.getAxes(), function(e) {
        return e.scale.type === t
      })
    },
    addAxis: function(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e)
    },
    dataToCoord: function(t) {
      return this._dataCoordConvert(t, "dataToCoord")
    },
    coordToData: function(t) {
      return this._dataCoordConvert(t, "coordToData")
    },
    _dataCoordConvert: function(t, e) {
      for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
        var a = n[r],
          o = this._axes[a];
        i[a] = o[e](t[a])
      }
      return i
    }
  }, hh.prototype = {
    constructor: hh,
    type: "cartesian2d",
    dimensions: ["x", "y"],
    getBaseAxis: function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
    },
    containPoint: function(t) {
      var e = this.getAxis("x"),
        n = this.getAxis("y");
      return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
    },
    containData: function(t) {
      return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
    },
    dataToPoint: function(t, e, n) {
      var i = this.getAxis("x"),
        r = this.getAxis("y");
      return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n
    },
    clampData: function(t, e) {
      var n = this.getAxis("x").scale,
        i = this.getAxis("y").scale,
        r = n.getExtent(),
        a = i.getExtent(),
        o = n.parse(t[0]),
        s = i.parse(t[1]);
      return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e
    },
    pointToData: function(t, e) {
      var n = this.getAxis("x"),
        i = this.getAxis("y");
      return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e
    },
    getOtherAxis: function(t) {
      return this.getAxis("x" === t.dim ? "y" : "x")
    }
  }, u(hh, Py);
  var Ly = Si(),
    Oy = [0, 1],
    By = function(t, e, n) {
      this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
    };
  By.prototype = {
    constructor: By,
    contain: function(t) {
      var e = this._extent,
        n = Math.min(e[0], e[1]),
        i = Math.max(e[0], e[1]);
      return t >= n && i >= t
    },
    containData: function(t) {
      return this.contain(this.dataToCoord(t))
    },
    getExtent: function() {
      return this._extent.slice()
    },
    getPixelPrecision: function(t) {
      return Ca(t || this.scale.getExtent(), this._extent)
    },
    setExtent: function(t, e) {
      var n = this._extent;
      n[0] = t, n[1] = e
    },
    dataToCoord: function(t, e) {
      var n = this._extent,
        i = this.scale;
      return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), Ih(n, i.count())), Sa(t, Oy, n, e)
    },
    coordToData: function(t, e) {
      var n = this._extent,
        i = this.scale;
      this.onBand && "ordinal" === i.type && (n = n.slice(), Ih(n, i.count()));
      var r = Sa(t, n, Oy, e);
      return this.scale.scale(r)
    },
    pointToData: function() {},
    getTicksCoords: function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(),
        n = ch(this, e),
        i = n.ticks,
        r = p(i, function(t) {
          return {
            coord: this.dataToCoord(t),
            tickValue: t
          }
        }, this),
        a = e.get("alignWithLabel");
      return Th(this, r, n.tickCategoryInterval, a, t.clamp), r
    },
    getViewLabels: function() {
      return uh(this).labels
    },
    getLabelModel: function() {
      return this.model.getModel("axisLabel")
    },
    getTickModel: function() {
      return this.model.getModel("axisTick")
    },
    getBandWidth: function() {
      var t = this._extent,
        e = this.scale.getExtent(),
        n = e[1] - e[0] + (this.onBand ? 1 : 0);
      0 === n && (n = 1);
      var i = Math.abs(t[1] - t[0]);
      return Math.abs(i) / n
    },
    isHorizontal: null,
    getRotate: null,
    calculateCategoryInterval: function() {
      return xh(this)
    }
  };
  var Ey = function(t, e, n, i, r) {
    By.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom"
  };
  Ey.prototype = {
    constructor: Ey,
    index: 0,
    getAxesOnZeroOf: null,
    model: null,
    isHorizontal: function() {
      var t = this.position;
      return "top" === t || "bottom" === t
    },
    getGlobalExtent: function(t) {
      var e = this.getExtent();
      return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
    },
    getOtherAxis: function() {
      this.grid.getOtherAxis()
    },
    pointToData: function(t, e) {
      return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
    },
    toLocalCoord: null,
    toGlobalCoord: null
  }, u(Ey, By);
  var zy = {
      show: !0,
      zlevel: 0,
      z: 0,
      inverse: !1,
      name: "",
      nameLocation: "end",
      nameRotate: null,
      nameTruncate: {
        maxWidth: null,
        ellipsis: "...",
        placeholder: "."
      },
      nameTextStyle: {},
      nameGap: 15,
      silent: !1,
      triggerEvent: !1,
      tooltip: {
        show: !1
      },
      axisPointer: {},
      axisLine: {
        show: !0,
        onZero: !0,
        onZeroAxisIndex: null,
        lineStyle: {
          color: "#333",
          width: 1,
          type: "solid"
        },
        symbol: ["none", "none"],
        symbolSize: [10, 15]
      },
      axisTick: {
        show: !0,
        inside: !1,
        length: 5,
        lineStyle: {
          width: 1
        }
      },
      axisLabel: {
        show: !0,
        inside: !1,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12
      },
      splitLine: {
        show: !0,
        lineStyle: {
          color: ["#ccc"],
          width: 1,
          type: "solid"
        }
      },
      splitArea: {
        show: !1,
        areaStyle: {
          color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
        }
      }
    },
    Ry = {};
  Ry.categoryAxis = r({
    boundaryGap: !0,
    deduplication: null,
    splitLine: {
      show: !1
    },
    axisTick: {
      alignWithLabel: !1,
      interval: "auto"
    },
    axisLabel: {
      interval: "auto"
    }
  }, zy), Ry.valueAxis = r({
    boundaryGap: [0, 0],
    splitNumber: 5
  }, zy), Ry.timeAxis = s({
    scale: !0,
    min: "dataMin",
    max: "dataMax"
  }, Ry.valueAxis), Ry.logAxis = s({
    scale: !0,
    logBase: 10
  }, Ry.valueAxis);
  var Fy = ["value", "category", "time", "log"],
    Ny = function(t, e, n, i) {
      f(Fy, function(o) {
        e.extend({
          type: t + "Axis." + o,
          mergeDefaultAndTheme: function(e, i) {
            var a = this.layoutMode,
              s = a ? Ya(e) : {},
              l = i.getTheme();
            r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = n(t, e), a && Xa(e, s, a)
          },
          optionUpdated: function() {
            var t = this.option;
            "category" === t.type && (this.__ordinalMeta = Xl.createByAxisModel(this))
          },
          getCategories: function(t) {
            var e = this.option;
            return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0
          },
          getOrdinalMeta: function() {
            return this.__ordinalMeta
          },
          defaultOption: a([{}, Ry[o + "Axis"], i], !0)
        })
      }), Ug.registerSubTypeDefaulter(t + "Axis", y(n, t))
    },
    Hy = {
      getMin: function(t) {
        var e = this.option,
          n = t || null == e.rangeStart ? e.min : e.rangeStart;
        return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n
      },
      getMax: function(t) {
        var e = this.option,
          n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
        return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n
      },
      getNeedCrossZero: function() {
        var t = this.option;
        return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
      },
      getCoordSysModel: F,
      setRange: function(t, e) {
        this.option.rangeStart = t, this.option.rangeEnd = e
      },
      resetRange: function() {
        this.option.rangeStart = this.option.rangeEnd = null
      }
    },
    Vy = Ug.extend({
      type: "cartesian2dAxis",
      axis: null,
      init: function() {
        Vy.superApply(this, "init", arguments), this.resetRange()
      },
      mergeOption: function() {
        Vy.superApply(this, "mergeOption", arguments), this.resetRange()
      },
      restoreData: function() {
        Vy.superApply(this, "restoreData", arguments), this.resetRange()
      },
      getCoordSysModel: function() {
        return this.ecModel.queryComponents({
          mainType: "grid",
          index: this.option.gridIndex,
          id: this.option.gridId
        })[0]
      }
    });
  r(Vy.prototype, Hy);
  var Wy = {
    offset: 0
  };
  Ny("x", Vy, Ch, Wy), Ny("y", Vy, Ch, Wy), Ug.extend({
    type: "grid",
    dependencies: ["xAxis", "yAxis"],
    layoutMode: "box",
    coordinateSystem: null,
    defaultOption: {
      show: !1,
      zlevel: 0,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 60,
      containLabel: !1,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    }
  });
  var Gy = kh.prototype;
  Gy.type = "grid", Gy.axisPointerEnabled = !0, Gy.getRect = function() {
    return this._rect
  }, Gy.update = function(t, e) {
    var n = this._axesMap;
    this._updateScale(t, this.model), f(n.x, function(t) {
      eh(t.scale, t.model)
    }), f(n.y, function(t) {
      eh(t.scale, t.model)
    });
    var i = {};
    f(n.x, function(t) {
      Ah(n, "y", t, i)
    }), f(n.y, function(t) {
      Ah(n, "x", t, i)
    }), this.resize(this.model, e)
  }, Gy.resize = function(t, e, n) {
    function i() {
      f(a, function(t) {
        var e = t.isHorizontal(),
          n = e ? [0, r.width] : [0, r.height],
          i = t.inverse ? 1 : 0;
        t.setExtent(n[i], n[1 - i]), Lh(t, e ? r.x : r.y)
      })
    }
    var r = Ga(t.getBoxLayoutParams(), {
      width: e.getWidth(),
      height: e.getHeight()
    });
    this._rect = r;
    var a = this._axesList;
    i(), !n && t.get("containLabel") && (f(a, function(t) {
      if (!t.model.get("axisLabel.inside")) {
        var e = oh(t);
        if (e) {
          var n = t.isHorizontal() ? "height" : "width",
            i = t.model.get("axisLabel.margin");
          r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i)
        }
      }
    }), i())
  }, Gy.getAxis = function(t, e) {
    var n = this._axesMap[t];
    if (null != n) {
      if (null == e)
        for (var i in n)
          if (n.hasOwnProperty(i)) return n[i];
      return n[e]
    }
  }, Gy.getAxes = function() {
    return this._axesList.slice()
  }, Gy.getCartesian = function(t, e) {
    if (null != t && null != e) {
      var n = "x" + t + "y" + e;
      return this._coordsMap[n]
    }
    b(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
    for (var i = 0, r = this._coordsList; i < r.length; i++)
      if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
  }, Gy.getCartesians = function() {
    return this._coordsList.slice()
  }, Gy.convertToPixel = function(t, e, n) {
    var i = this._findConvertTarget(t, e);
    return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
  }, Gy.convertFromPixel = function(t, e, n) {
    var i = this._findConvertTarget(t, e);
    return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
  }, Gy._findConvertTarget = function(t, e) {
    var n, i, r = e.seriesModel,
      a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
      o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
      s = e.gridModel,
      l = this._coordsList;
    if (r) n = r.coordinateSystem, h(l, n) < 0 && (n = null);
    else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);
    else if (a) i = this.getAxis("x", a.componentIndex);
    else if (o) i = this.getAxis("y", o.componentIndex);
    else if (s) {
      var u = s.coordinateSystem;
      u === this && (n = this._coordsList[0])
    }
    return {
      cartesian: n,
      axis: i
    }
  }, Gy.containPoint = function(t) {
    var e = this._coordsList[0];
    return e ? e.containPoint(t) : void 0
  }, Gy._initCartesian = function(t, e) {
    function n(n) {
      return function(o, s) {
        if (Dh(o, t, e)) {
          var l = o.get("position");
          "x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l = "left" === l ? "right" : "left")), i[l] = !0;
          var h = new Ey(n, nh(o), [0, 0], o.get("type"), l),
            u = "category" === h.type;
          h.onBand = u && o.get("boundaryGap"), h.inverse = o.get("inverse"), o.axis = h, h.model = o, h.grid = this, h.index = s, this._axesList.push(h), r[n][s] = h, a[n]++
        }
      }
    }
    var i = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      },
      r = {
        x: {},
        y: {}
      },
      a = {
        x: 0,
        y: 0
      };
    return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function(e, n) {
      f(r.y, function(i, r) {
        var a = "x" + n + "y" + r,
          o = new hh(a);
        o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i)
      }, this)
    }, this)) : (this._axesMap = {}, void(this._axesList = []))
  }, Gy._updateScale = function(t, e) {
    function n(t, e) {
      f(t.mapDimension(e.dim, !0), function(n) {
        e.scale.unionExtentFromData(t, Ll(t, n))
      })
    }
    f(this._axesList, function(t) {
      t.scale.setExtent(1 / 0, -1 / 0)
    }), t.eachSeries(function(i) {
      if (Bh(i)) {
        var r = Oh(i, t),
          a = r[0],
          o = r[1];
        if (!Dh(a, e, t) || !Dh(o, e, t)) return;
        var s = this.getCartesian(a.componentIndex, o.componentIndex),
          l = i.getData(),
          h = s.getAxis("x"),
          u = s.getAxis("y");
        "list" === l.type && (n(l, h, i), n(l, u, i))
      }
    }, this)
  }, Gy.getTooltipAxes = function(t) {
    var e = [],
      n = [];
    return f(this.getCartesians(), function(i) {
      var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
        a = i.getOtherAxis(r);
      h(e, r) < 0 && e.push(r), h(n, a) < 0 && n.push(a)
    }), {
      baseAxes: e,
      otherAxes: n
    }
  };
  var Xy = ["xAxis", "yAxis"];
  kh.create = function(t, e) {
    var n = [];
    return t.eachComponent("grid", function(i, r) {
      var a = new kh(i, t, e);
      a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a)
    }), t.eachSeries(function(e) {
      if (Bh(e)) {
        var n = Oh(e, t),
          i = n[0],
          r = n[1],
          a = i.getCoordSysModel(),
          o = a.coordinateSystem;
        e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex)
      }
    }), n
  }, kh.dimensions = kh.prototype.dimensions = hh.prototype.dimensions, _o.register("cartesian2d", kh), zh.prototype = {
    constructor: zh,
    add: function(t) {
      return this._add = t, this
    },
    update: function(t) {
      return this._update = t, this
    },
    remove: function(t) {
      return this._remove = t, this
    },
    execute: function() {
      var t, e = this._old,
        n = this._new,
        i = {},
        r = {},
        a = [],
        o = [];
      for (Rh(e, i, a, "_oldKeyGetter", this), Rh(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
          l = r[s];
        if (null != l) {
          var h = l.length;
          h ? (1 === h && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t)
        } else this._remove && this._remove(t)
      }
      for (var t = 0; t < o.length; t++) {
        var s = o[t];
        if (r.hasOwnProperty(s)) {
          var l = r[s];
          if (null == l) continue;
          if (l.length)
            for (var u = 0, h = l.length; h > u; u++) this._add && this._add(l[u]);
          else this._add && this._add(l)
        }
      }
    }
  };
  var Yy = R(["tooltip", "label", "itemName", "itemId", "seriesName"]),
    qy = b,
    Uy = "undefined",
    jy = "e\x00\x00",
    Zy = {
      "float": typeof Float64Array === Uy ? Array : Float64Array,
      "int": typeof Int32Array === Uy ? Array : Int32Array,
      ordinal: Array,
      number: Array,
      time: Array
    },
    $y = typeof Uint32Array === Uy ? Array : Uint32Array,
    Ky = typeof Uint16Array === Uy ? Array : Uint16Array,
    Qy = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
    Jy = ["_extent", "_approximateExtent", "_rawExtent"],
    t_ = function(t, e) {
      t = t || ["x", "y"];
      for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
        var o = t[a];
        w(o) && (o = {
          name: o
        });
        var s = o.name;
        o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = [])
      }
      this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = Fh(this), this._invertedIndicesMap = r, this._calculationInfo = {}
    },
    e_ = t_.prototype;
  e_.type = "list", e_.hasItemOption = !0, e_.getDimension = function(t) {
    return isNaN(t) || (t = this.dimensions[t] || t), t
  }, e_.getDimensionInfo = function(t) {
    return this._dimensionInfos[this.getDimension(t)]
  }, e_.getDimensionsOnCoord = function() {
    return this._dimensionsSummary.dataDimsOnCoord.slice()
  }, e_.mapDimension = function(t, e) {
    var n = this._dimensionsSummary;
    if (null == e) return n.encodeFirstDimNotExtra[t];
    var i = n.encode[t];
    return e === !0 ? (i || []).slice() : i && i[e]
  }, e_.initData = function(t, e, n) {
    var i = Ka.isInstance(t) || d(t);
    i && (t = new Fo(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = Dv[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
  }, e_.getProvider = function() {
    return this._rawData
  }, e_.appendData = function(t) {
    var e = this._rawData,
      n = this.count();
    e.appendData(t);
    var i = e.count();
    e.persistent || (i += n), this._initDataFromProvider(n, i)
  }, e_._initDataFromProvider = function(t, e) {
    if (!(t >= e)) {
      for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s > g; g++) {
        var v = o[g];
        c[v] || (c[v] = Qh());
        var m = l[v];
        0 === m.otherDims.itemName && (n = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
        var y = Zy[m.type];
        a[v] || (a[v] = []);
        var _ = a[v][p];
        if (_ && _.length < i) {
          for (var x = new y(Math.min(e - p * i, i)), w = 0; w < _.length; w++) x[w] = _[w];
          a[v][p] = x
        }
        for (var b = f * i; e > b; b += i) a[v].push(new y(Math.min(e - b, i)));
        this._chunkCount = a[v].length
      }
      for (var S = new Array(s), M = t; e > M; M++) {
        S = r.getItem(M, S);
        for (var I = Math.floor(M / i), T = M % i, b = 0; s > b; b++) {
          var v = o[b],
            C = a[v][I],
            D = this._dimValueGetter(S, v, M, b);
          C[T] = D;
          var k = c[v];
          D < k[0] && (k[0] = D), D > k[1] && (k[1] = D)
        }
        if (!r.pure) {
          var A = h[M];
          if (S && null == A)
            if (null != S.name) h[M] = A = S.name;
            else if (null != n) {
            var P = o[n],
              L = a[P][I];
            if (L) {
              A = L[T];
              var O = l[P].ordinalMeta;
              O && O.categories.length && (A = O.categories[A])
            }
          }
          var B = null == S ? null : S.id;
          null == B && null != A && (d[A] = d[A] || 0, B = A, d[A] > 0 && (B += "__ec__" + d[A]), d[A]++), null != B && (u[M] = B)
        }
      }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Xh(this)
    }
  }, e_.count = function() {
    return this._count
  }, e_.getIndices = function() {
    var t, e = this._indices;
    if (e) {
      var n = e.constructor,
        i = this._count;
      if (n === Array) {
        t = new n(i);
        for (var r = 0; i > r; r++) t[r] = e[r]
      } else t = new n(e.buffer, 0, i)
    } else
      for (var n = Vh(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;
    return t
  }, e_.get = function(t, e) {
    if (!(e >= 0 && e < this._count)) return 0 / 0;
    var n = this._storage;
    if (!n[t]) return 0 / 0;
    e = this.getRawIndex(e);
    var i = Math.floor(e / this._chunkSize),
      r = e % this._chunkSize,
      a = n[t][i],
      o = a[r];
    return o
  }, e_.getByRawIndex = function(t, e) {
    if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
    var n = this._storage[t];
    if (!n) return 0 / 0;
    var i = Math.floor(e / this._chunkSize),
      r = e % this._chunkSize,
      a = n[i];
    return a[r]
  }, e_._getFast = function(t, e) {
    var n = Math.floor(e / this._chunkSize),
      i = e % this._chunkSize,
      r = this._storage[t][n];
    return r[i]
  }, e_.getValues = function(t, e) {
    var n = [];
    _(t) || (e = t, t = this.dimensions);
    for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
    return n
  }, e_.hasValue = function(t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++)
      if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
    return !0
  }, e_.getDataExtent = function(t) {
    t = this.getDimension(t);
    var e = this._storage[t],
      n = Qh();
    if (!e) return n;
    var i, r = this.count(),
      a = !this._indices;
    if (a) return this._rawExtent[t].slice();
    if (i = this._extent[t]) return i.slice();
    i = n;
    for (var o = i[0], s = i[1], l = 0; r > l; l++) {
      var h = this._getFast(t, this.getRawIndex(l));
      o > h && (o = h), h > s && (s = h)
    }
    return i = [o, s], this._extent[t] = i, i
  }, e_.getApproximateExtent = function(t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
  }, e_.setApproximateExtent = function(t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice()
  }, e_.getCalculationInfo = function(t) {
    return this._calculationInfo[t]
  }, e_.setCalculationInfo = function(t, e) {
    qy(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
  }, e_.getSum = function(t) {
    var e = this._storage[t],
      n = 0;
    if (e)
      for (var i = 0, r = this.count(); r > i; i++) {
        var a = this.get(t, i);
        isNaN(a) || (n += a)
      }
    return n
  }, e_.getMedian = function(t) {
    var e = [];
    this.each(t, function(t) {
      isNaN(t) || e.push(t)
    });
    var n = [].concat(e).sort(function(t, e) {
        return t - e
      }),
      i = this.count();
    return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
  }, e_.rawIndexOf = function(t, e) {
    var n = t && this._invertedIndicesMap[t],
      i = n[e];
    return null == i || isNaN(i) ? -1 : i
  }, e_.indexOfName = function(t) {
    for (var e = 0, n = this.count(); n > e; e++)
      if (this.getName(e) === t) return e;
    return -1
  }, e_.indexOfRawIndex = function(t) {
    if (!this._indices) return t;
    if (t >= this._rawCount || 0 > t) return -1;
    var e = this._indices,
      n = e[t];
    if (null != n && n < this._count && n === t) return t;
    for (var i = 0, r = this._count - 1; r >= i;) {
      var a = (i + r) / 2 | 0;
      if (e[a] < t) i = a + 1;
      else {
        if (!(e[a] > t)) return a;
        r = a - 1
      }
    }
    return -1
  }, e_.indicesOfNearest = function(t, e, n) {
    var i = this._storage,
      r = i[t],
      a = [];
    if (!r) return a;
    null == n && (n = 1 / 0);
    for (var o = Number.MAX_VALUE, s = -1, l = 0, h = this.count(); h > l; l++) {
      var u = e - this.get(t, l),
        c = Math.abs(u);
      n >= u && o >= c && ((o > c || u >= 0 && 0 > s) && (o = c, s = u, a.length = 0), a.push(l))
    }
    return a
  }, e_.getRawIndex = qh, e_.getRawDataItem = function(t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
    for (var e = [], n = 0; n < this.dimensions.length; n++) {
      var i = this.dimensions[n];
      e.push(this.get(i, t))
    }
    return e
  }, e_.getName = function(t) {
    var e = this.getRawIndex(t);
    return this._nameList[e] || Yh(this, this._nameDimIdx, e) || ""
  }, e_.getId = function(t) {
    return jh(this, this.getRawIndex(t))
  }, e_.each = function(t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Zh(t), this.getDimension, this);
      for (var r = t.length, a = 0; a < this.count(); a++) switch (r) {
        case 0:
          e.call(n, a);
          break;
        case 1:
          e.call(n, this.get(t[0], a), a);
          break;
        case 2:
          e.call(n, this.get(t[0], a), this.get(t[1], a), a);
          break;
        default:
          for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
          s[o] = a, e.apply(n, s)
      }
    }
  }, e_.filterSelf = function(t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Zh(t), this.getDimension, this);
      for (var r = this.count(), a = Vh(this), o = new a(r), s = [], l = t.length, h = 0, u = t[0], c = 0; r > c; c++) {
        var d, f = this.getRawIndex(c);
        if (0 === l) d = e.call(n, c);
        else if (1 === l) {
          var g = this._getFast(u, f);
          d = e.call(n, g, c)
        } else {
          for (var v = 0; l > v; v++) s[v] = this._getFast(u, f);
          s[v] = c, d = e.apply(n, s)
        }
        d && (o[h++] = f)
      }
      return r > h && (this._indices = o), this._count = h, this._extent = {}, this.getRawIndex = this._indices ? Uh : qh, this
    }
  }, e_.selectRange = function(t) {
    if (this._count) {
      var e = [];
      for (var n in t) t.hasOwnProperty(n) && e.push(n);
      var i = e.length;
      if (i) {
        var r = this.count(),
          a = Vh(this),
          o = new a(r),
          s = 0,
          l = e[0],
          h = t[l][0],
          u = t[l][1],
          c = !1;
        if (!this._indices) {
          var d = 0;
          if (1 === i) {
            for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++)
              for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m];
                (y >= h && u >= y || isNaN(y)) && (o[s++] = d), d++
              }
            c = !0
          } else if (2 === i) {
            for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++)
              for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m],
                  S = b[m];
                (y >= h && u >= y || isNaN(y)) && (S >= x && w >= S || isNaN(S)) && (o[s++] = d), d++
              }
            c = !0
          }
        }
        if (!c)
          if (1 === i)
            for (var m = 0; r > m; m++) {
              var M = this.getRawIndex(m),
                y = this._getFast(l, M);
              (y >= h && u >= y || isNaN(y)) && (o[s++] = M)
            } else
              for (var m = 0; r > m; m++) {
                for (var I = !0, M = this.getRawIndex(m), p = 0; i > p; p++) {
                  var T = e[p],
                    y = this._getFast(n, M);
                  (y < t[T][0] || y > t[T][1]) && (I = !1)
                }
                I && (o[s++] = this.getRawIndex(m))
              }
        return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? Uh : qh, this
      }
    }
  }, e_.mapArray = function(t, e, n, i) {
    "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
    var r = [];
    return this.each(t, function() {
      r.push(e && e.apply(this, arguments))
    }, n), r
  }, e_.map = function(t, e, n, i) {
    n = n || i || this, t = p(Zh(t), this.getDimension, this);
    var r = $h(this, t);
    r._indices = this._indices, r.getRawIndex = r._indices ? Uh : qh;
    for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, d = 0; h > d; d++) {
      for (var f = 0; l > f; f++) u[f] = this.get(t[f], d);
      u[l] = d;
      var g = e && e.apply(n, u);
      if (null != g) {
        "object" != typeof g && (o[0] = g, g = o);
        for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
          var x = t[_],
            w = g[_],
            b = c[x],
            S = a[x];
          S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
        }
      }
    }
    return r
  }, e_.downSample = function(t, e, n, i) {
    for (var r = $h(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new(Vh(this))(h), f = 0, p = 0; h > p; p += s) {
      s > h - p && (s = h - p, o.length = s);
      for (var g = 0; s > g; g++) {
        var v = this.getRawIndex(p + g),
          m = Math.floor(v / u),
          y = v % u;
        o[g] = l[m][y]
      }
      var _ = n(o),
        x = this.getRawIndex(Math.min(p + i(o, _) || 0, h - 1)),
        w = Math.floor(x / u),
        b = x % u;
      l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x
    }
    return r._count = f, r._indices = d, r.getRawIndex = Uh, r
  }, e_.getItemModel = function(t) {
    var e = this.hostModel;
    return new va(this.getRawDataItem(t), e, e && e.ecModel)
  }, e_.diff = function(t) {
    var e = this;
    return new zh(t ? t.getIndices() : [], this.getIndices(), function(e) {
      return jh(t, e)
    }, function(t) {
      return jh(e, t)
    })
  }, e_.getVisual = function(t) {
    var e = this._visual;
    return e && e[t]
  }, e_.setVisual = function(t, e) {
    if (qy(t))
      for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
    else this._visual = this._visual || {}, this._visual[t] = e
  }, e_.setLayout = function(t, e) {
    if (qy(t))
      for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
    else this._layout[t] = e
  }, e_.getLayout = function(t) {
    return this._layout[t]
  }, e_.getItemLayout = function(t) {
    return this._itemLayouts[t]
  }, e_.setItemLayout = function(t, e, n) {
    this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e
  }, e_.clearItemLayouts = function() {
    this._itemLayouts.length = 0
  }, e_.getItemVisual = function(t, e, n) {
    var i = this._itemVisuals[t],
      r = i && i[e];
    return null != r || n ? r : this.getVisual(e)
  }, e_.setItemVisual = function(t, e, n) {
    var i = this._itemVisuals[t] || {},
      r = this.hasItemVisual;
    if (this._itemVisuals[t] = i, qy(e))
      for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
    else i[e] = n, r[e] = !0
  }, e_.clearAllVisual = function() {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
  };
  var n_ = function(t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
  };
  e_.setItemGraphicEl = function(t, e) {
    var n = this.hostModel;
    e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(n_, e)), this._graphicEls[t] = e
  }, e_.getItemGraphicEl = function(t) {
    return this._graphicEls[t]
  }, e_.eachItemGraphicEl = function(t, e) {
    f(this._graphicEls, function(n, i) {
      n && t && t.call(e, n, i)
    })
  }, e_.cloneShallow = function(t) {
    if (!t) {
      var e = p(this.dimensions, this.getDimensionInfo, this);
      t = new t_(e, this.hostModel)
    }
    if (t._storage = this._storage, Gh(t, this), this._indices) {
      var n = this._indices.constructor;
      t._indices = new n(this._indices)
    } else t._indices = null;
    return t.getRawIndex = t._indices ? Uh : qh, t
  }, e_.wrapMethod = function(t, e) {
    var n = this[t];
    "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
      var t = n.apply(this, arguments);
      return e.apply(this, [t].concat(A(arguments)))
    })
  }, e_.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], e_.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
  var i_ = function(t, e) {
      return e = e || {}, Jh(e.coordDimensions || [], t, {
        dimsDef: e.dimensionsDefine || t.dimensionsDefine,
        encodeDef: e.encodeDefine || t.encodeDefine,
        dimCount: e.dimensionsCount,
        generateCoord: e.generateCoord,
        generateCoordCount: e.generateCoordCount
      })
    },
    r_ = Bv.extend({
      type: "series.__base_bar__",
      getInitialData: function() {
        return nu(this.getSource(), this)
      },
      getMarkerPosition: function(t) {
        var e = this.coordinateSystem;
        if (e) {
          var n = e.dataToPoint(e.clampData(t)),
            i = this.getData(),
            r = i.getLayout("offset"),
            a = i.getLayout("size"),
            o = e.getBaseAxis().isHorizontal() ? 0 : 1;
          return n[o] += r + a / 2, n
        }
        return [0 / 0, 0 / 0]
      },
      defaultOption: {
        zlevel: 0,
        z: 2,
        coordinateSystem: "cartesian2d",
        legendHoverLink: !0,
        barMinHeight: 0,
        barMinAngle: 0,
        large: !1,
        largeThreshold: 400,
        progressive: 3e3,
        progressiveChunkMode: "mod",
        itemStyle: {},
        emphasis: {}
      }
    });
  r_.extend({
    type: "series.bar",
    dependencies: ["grid", "polar"],
    brushSelector: "rect",
    getProgressive: function() {
      return this.get("large") ? this.get("progressive") : !1
    },
    getProgressiveThreshold: function() {
      var t = this.get("progressiveThreshold"),
        e = this.get("largeThreshold");
      return e > t && (t = e), t
    }
  });
  var a_ = Yf([
      ["fill", "color"],
      ["stroke", "borderColor"],
      ["lineWidth", "borderWidth"],
      ["stroke", "barBorderColor"],
      ["lineWidth", "barBorderWidth"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"]
    ]),
    o_ = {
      getBarItemStyle: function(t) {
        var e = a_(this, t);
        if (this.getBorderLineDash) {
          var n = this.getBorderLineDash();
          n && (e.lineDash = n)
        }
        return e
      }
    },
    s_ = ["itemStyle", "barBorderWidth"];
  o(va.prototype, o_), Tl({
    type: "bar",
    render: function(t, e, n) {
      this._updateDrawMode(t);
      var i = t.get("coordinateSystem");
      return ("cartesian2d" === i || "polar" === i) && (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), this.group
    },
    incrementalPrepareRender: function(t) {
      this._clear(), this._updateDrawMode(t)
    },
    incrementalRender: function(t, e) {
      this._incrementalRenderLarge(t, e)
    },
    _updateDrawMode: function(t) {
      var e = t.pipelineContext.large;
      (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
    },
    _renderNormal: function(t) {
      var e, n = this.group,
        i = t.getData(),
        r = this._data,
        a = t.coordinateSystem,
        o = a.getBaseAxis();
      "cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o.dim);
      var s = t.isAnimationEnabled() ? t : null;
      i.diff(r).add(function(r) {
        if (i.hasValue(r)) {
          var o = i.getItemModel(r),
            l = h_[a.type](i, r, o),
            h = l_[a.type](i, r, o, l, e, s);
          i.setItemGraphicEl(r, h), n.add(h), uu(h, i, r, o, l, t, e, "polar" === a.type)
        }
      }).update(function(o, l) {
        var h = r.getItemGraphicEl(l);
        if (!i.hasValue(o)) return void n.remove(h);
        var u = i.getItemModel(o),
          c = h_[a.type](i, o, u);
        h ? sa(h, {
          shape: c
        }, s, o) : h = l_[a.type](i, o, u, c, e, s, !0), i.setItemGraphicEl(o, h), n.add(h), uu(h, i, o, u, c, t, e, "polar" === a.type)
      }).remove(function(t) {
        var e = r.getItemGraphicEl(t);
        "cartesian2d" === a.type ? e && lu(t, s, e) : e && hu(t, s, e)
      }).execute(), this._data = i
    },
    _renderLarge: function(t) {
      this._clear(), du(t, this.group)
    },
    _incrementalRenderLarge: function(t, e) {
      du(e, this.group, !0)
    },
    dispose: F,
    remove: function(t) {
      this._clear(t)
    },
    _clear: function(t) {
      var e = this.group,
        n = this._data;
      t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function(e) {
        "sector" === e.type ? hu(e.dataIndex, t, e) : lu(e.dataIndex, t, e)
      }) : e.removeAll(), this._data = null
    }
  });
  var l_ = {
      cartesian2d: function(t, e, n, i, r, a, s) {
        var l = new lg({
          shape: o({}, i)
        });
        if (a) {
          var h = l.shape,
            u = r ? "height" : "width",
            c = {};
          h[u] = 0, c[u] = i[u], Ig[s ? "updateProps" : "initProps"](l, {
            shape: c
          }, a, e)
        }
        return l
      },
      polar: function(t, e, n, i, r, a, o) {
        var l = i.startAngle < i.endAngle,
          h = new ng({
            shape: s({
              clockwise: l
            }, i)
          });
        if (a) {
          var u = h.shape,
            c = r ? "r" : "endAngle",
            d = {};
          u[c] = r ? 0 : i.startAngle, d[c] = i[c], Ig[o ? "updateProps" : "initProps"](h, {
            shape: d
          }, a, e)
        }
        return h
      }
    },
    h_ = {
      cartesian2d: function(t, e, n) {
        var i = t.getItemLayout(e),
          r = cu(n, i),
          a = i.width > 0 ? 1 : -1,
          o = i.height > 0 ? 1 : -1;
        return {
          x: i.x + a * r / 2,
          y: i.y + o * r / 2,
          width: i.width - a * r,
          height: i.height - o * r
        }
      },
      polar: function(t, e) {
        var n = t.getItemLayout(e);
        return {
          cx: n.cx,
          cy: n.cy,
          r0: n.r0,
          r: n.r,
          startAngle: n.startAngle,
          endAngle: n.endAngle
        }
      }
    },
    u_ = pr.extend({
      type: "largeBar",
      shape: {
        points: []
      },
      buildPath: function(t, e) {
        for (var n = e.points, i = this.__startPoint, r = this.__valueIdx, a = 0; a < n.length; a += 2) i[this.__valueIdx] = n[a + r], t.moveTo(i[0], i[1]), t.lineTo(n[a], n[a + 1])
      }
    }),
    c_ = Ir({
      type: "triangle",
      shape: {
        cx: 0,
        cy: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;
        t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath()
      }
    }),
    d_ = Ir({
      type: "diamond",
      shape: {
        cx: 0,
        cy: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;
        t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath()
      }
    }),
    f_ = Ir({
      type: "pin",
      shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.x,
          i = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = i - a + o + s,
          h = Math.asin(s / o),
          u = Math.cos(h) * o,
          c = Math.sin(h),
          d = Math.cos(h),
          f = .6 * o,
          p = .7 * o;
        t.moveTo(n - u, l + s), t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - u + c * f, l + s + d * f, n - u, l + s), t.closePath()
      }
    }),
    p_ = Ir({
      type: "arrow",
      shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.height,
          i = e.width,
          r = e.x,
          a = e.y,
          o = i / 3 * 2;
        t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath()
      }
    }),
    g_ = {
      line: hg,
      rect: lg,
      roundRect: lg,
      square: lg,
      circle: Jp,
      diamond: d_,
      pin: f_,
      arrow: p_,
      triangle: c_
    },
    v_ = {
      line: function(t, e, n, i, r) {
        r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
      },
      rect: function(t, e, n, i, r) {
        r.x = t, r.y = e, r.width = n, r.height = i
      },
      roundRect: function(t, e, n, i, r) {
        r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
      },
      square: function(t, e, n, i, r) {
        var a = Math.min(n, i);
        r.x = t, r.y = e, r.width = a, r.height = a
      },
      circle: function(t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
      },
      diamond: function(t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
      },
      pin: function(t, e, n, i, r) {
        r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
      },
      arrow: function(t, e, n, i, r) {
        r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
      },
      triangle: function(t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
      }
    },
    m_ = {};
  f(g_, function(t, e) {
    m_[e] = new t
  });
  var y_ = Ir({
      type: "symbol",
      shape: {
        symbolType: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      beforeBrush: function() {
        var t = this.style,
          e = this.shape;
        "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
      },
      buildPath: function(t, e, n) {
        var i = e.symbolType,
          r = m_[i];
        "none" !== e.symbolType && (r || (i = "rect", r = m_[i]), v_[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
      }
    }),
    __ = Math.PI,
    x_ = function(t, e) {
      this.opt = e, this.axisModel = t, s(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0
      }), this.group = new Gd;
      var n = new Gd({
        position: e.position.slice(),
        rotation: e.rotation
      });
      n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
    };
  x_.prototype = {
    constructor: x_,
    hasBuilder: function(t) {
      return !!w_[t]
    },
    add: function(t) {
      w_[t].call(this)
    },
    getGroup: function() {
      return this.group
    }
  };
  var w_ = {
      axisLine: function() {
        var t = this.opt,
          e = this.axisModel;
        if (e.get("axisLine.show")) {
          var n = this.axisModel.axis.getExtent(),
            i = this._transform,
            r = [n[0], 0],
            a = [n[1], 0];
          i && (Z(r, r, i), Z(a, a, i));
          var s = o({
            lineCap: "round"
          }, e.getModel("axisLine.lineStyle").getLineStyle());
          this.group.add(new hg(Pr({
            anid: "line",
            shape: {
              x1: r[0],
              y1: r[1],
              x2: a[0],
              y2: a[1]
            },
            style: s,
            strokeContainThreshold: t.strokeContainThreshold || 5,
            silent: !0,
            z2: 1
          })));
          var l = e.get("axisLine.symbol"),
            h = e.get("axisLine.symbolSize"),
            u = e.get("axisLine.symbolOffset") || 0;
          if ("number" == typeof u && (u = [u, u]), null != l) {
            "string" == typeof l && (l = [l, l]), ("string" == typeof h || "number" == typeof h) && (h = [h, h]);
            var c = h[0],
              d = h[1];
            f([{
              rotate: t.rotation + Math.PI / 2,
              offset: u[0],
              r: 0
            }, {
              rotate: t.rotation - Math.PI / 2,
              offset: u[1],
              r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
            }], function(e, n) {
              if ("none" !== l[n] && null != l[n]) {
                var i = gu(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                i.attr({
                  rotation: e.rotate,
                  position: o,
                  silent: !0
                }), this.group.add(i)
              }
            }, this)
          }
        }
      },
      axisTickLabel: function() {
        var t = this.axisModel,
          e = this.opt,
          n = Su(this, t, e),
          i = Mu(this, t, e);
        _u(t, i, n)
      },
      axisName: function() {
        var t = this.opt,
          e = this.axisModel,
          n = C(t.axisName, e.get("name"));
        if (n) {
          var i, r = e.get("nameLocation"),
            a = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            h = this.axisModel.axis.getExtent(),
            u = h[0] > h[1] ? -1 : 1,
            c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, bu(r) ? t.labelOffset + a * l : 0],
            d = e.get("nameRotate");
          null != d && (d = d * __ / 180);
          var f;
          bu(r) ? i = b_(t.rotation, null != d ? d : t.rotation, a) : (i = mu(t, r, d || 0, h), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));
          var p = s.getFont(),
            g = e.get("nameTruncate", !0) || {},
            v = g.ellipsis,
            m = C(t.nameTruncateMaxWidth, g.maxWidth, f),
            y = null != v && null != m ? Hg(n, m, p, v, {
              minChar: 2,
              placeholder: g.placeholder
            }) : n,
            _ = e.get("tooltip", !0),
            x = e.mainType,
            w = {
              componentType: x,
              name: n,
              $vars: ["name"]
            };
          w[x + "Index"] = e.componentIndex;
          var b = new Qp({
            anid: "name",
            __fullText: n,
            __truncatedText: y,
            position: c,
            rotation: i.rotation,
            silent: yu(e),
            z2: 1,
            tooltip: _ && _.show ? o({
              content: n,
              formatter: function() {
                return n
              },
              formatterParams: w
            }, _) : null
          });
          Kr(b.style, s, {
            text: y,
            textFont: p,
            textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
            textAlign: i.textAlign,
            textVerticalAlign: i.textVerticalAlign
          }), e.get("triggerEvent") && (b.eventData = vu(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
        }
      }
    },
    b_ = x_.innerTextLayout = function(t, e, n) {
      var i, r, a = ka(e - t);
      return Aa(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : Aa(a - __) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && __ > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
        rotation: a,
        textAlign: i,
        textVerticalAlign: r
      }
    },
    S_ = f,
    M_ = y,
    I_ = Ml({
      type: "axis",
      _axisPointer: null,
      axisPointerClass: null,
      render: function(t, e, n, i) {
        this.axisPointerClass && Pu(t), I_.superApply(this, "render", arguments), zu(this, t, e, n, i, !0)
      },
      updateAxisPointer: function(t, e, n, i) {
        zu(this, t, e, n, i, !1)
      },
      remove: function(t, e) {
        var n = this._axisPointer;
        n && n.remove(e), I_.superApply(this, "remove", arguments)
      },
      dispose: function(t, e) {
        Ru(this, e), I_.superApply(this, "dispose", arguments)
      }
    }),
    T_ = [];
  I_.registerAxisPointerClass = function(t, e) {
    T_[t] = e
  }, I_.getAxisPointerClass = function(t) {
    return t && T_[t]
  };
  var C_ = ["axisLine", "axisTickLabel", "axisName"],
    D_ = ["splitArea", "splitLine"],
    k_ = I_.extend({
      type: "cartesianAxis",
      axisPointerClass: "CartesianAxisPointer",
      render: function(t, e, n, i) {
        this.group.removeAll();
        var r = this._axisGroup;
        if (this._axisGroup = new Gd, this.group.add(this._axisGroup), t.get("show")) {
          var a = t.getCoordSysModel(),
            o = Fu(a, t),
            s = new x_(t, o);
          f(C_, s.add, s), this._axisGroup.add(s.getGroup()), f(D_, function(e) {
            t.get(e + ".show") && this["_" + e](t, a)
          }, this), da(r, this._axisGroup, t), k_.superCall(this, "render", t, e, n, i)
        }
      },
      remove: function() {
        this._splitAreaColors = null
      },
      _splitLine: function(t, e) {
        var n = t.axis;
        if (!n.scale.isBlank()) {
          var i = t.getModel("splitLine"),
            r = i.getModel("lineStyle"),
            a = r.get("color");
          a = _(a) ? a : [a];
          for (var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), h = 0, u = n.getTicksCoords({
              tickModel: i
            }), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {
            var g = n.toGlobalCoord(u[p].coord);
            l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);
            var v = h++ % a.length,
              m = u[p].tickValue;
            this._axisGroup.add(new hg(Pr({
              anid: null != m ? "line_" + u[p].tickValue : null,
              shape: {
                x1: c[0],
                y1: c[1],
                x2: d[0],
                y2: d[1]
              },
              style: s({
                stroke: a[v]
              }, f),
              silent: !0
            })))
          }
        }
      },
      _splitArea: function(t, e) {
        var n = t.axis;
        if (!n.scale.isBlank()) {
          var i = t.getModel("splitArea"),
            r = i.getModel("areaStyle"),
            a = r.get("color"),
            o = e.coordinateSystem.getRect(),
            l = n.getTicksCoords({
              tickModel: i,
              clamp: !0
            });
          if (l.length) {
            var h = a.length,
              u = this._splitAreaColors,
              c = R(),
              d = 0;
            if (u)
              for (var f = 0; f < l.length; f++) {
                var p = u.get(l[f].tickValue);
                if (null != p) {
                  d = (p + (h - 1) * f) % h;
                  break
                }
              }
            var g = n.toGlobalCoord(l[0].coord),
              v = r.getAreaStyle();
            a = _(a) ? a : [a];
            for (var f = 1; f < l.length; f++) {
              var m, y, x, w, b = n.toGlobalCoord(l[f].coord);
              n.isHorizontal() ? (m = g, y = o.y, x = b - m, w = o.height, g = m + x) : (m = o.x, y = g, x = o.width, w = b - y, g = y + w);
              var S = l[f - 1].tickValue;
              null != S && c.set(S, d), this._axisGroup.add(new lg({
                anid: null != S ? "area_" + S : null,
                shape: {
                  x: m,
                  y: y,
                  width: x,
                  height: w
                },
                style: s({
                  fill: a[d]
                }, v),
                silent: !0
              })), d = (d + 1) % h
            }
            this._splitAreaColors = c
          }
        }
      }
    });
  k_.extend({
    type: "xAxis"
  }), k_.extend({
    type: "yAxis"
  }), Ml({
    type: "grid",
    render: function(t) {
      this.group.removeAll(), t.get("show") && this.group.add(new lg({
        shape: t.coordinateSystem.getRect(),
        style: s({
          fill: t.get("backgroundColor")
        }, t.getItemStyle()),
        silent: !0,
        z2: -1
      }))
    }
  }), fl(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {})
  }), _l(y(Nl, "bar")), _l(ay), xl({
    seriesType: "bar",
    reset: function(t) {
      t.getData().setVisual("legendSymbol", "roundRect")
    }
  });
  var A_ = function(t, e, n) {
      e = _(e) && {
        coordDimensions: e
      } || o({}, e);
      var i = t.getSource(),
        r = i_(i, e),
        a = new t_(r, t);
      return a.initData(i, n), a
    },
    P_ = {
      updateSelectedMap: function(t) {
        this._targetList = _(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function(t, e) {
          return t.set(e.name, e), t
        }, R())
      },
      select: function(t, e) {
        var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
          i = this.get("selectedMode");
        "single" === i && this._selectTargetMap.each(function(t) {
          t.selected = !1
        }), n && (n.selected = !0)
      },
      unSelect: function(t, e) {
        var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
        n && (n.selected = !1)
      },
      toggleSelected: function(t, e) {
        var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
        return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0
      },
      isSelected: function(t, e) {
        var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
        return n && n.selected
      }
    },
    L_ = Il({
      type: "series.pie",
      init: function(t) {
        L_.superApply(this, "init", arguments), this.legendDataProvider = function() {
          return this.getRawData()
        }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
      },
      mergeOption: function(t) {
        L_.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
      },
      getInitialData: function() {
        return A_(this, ["value"])
      },
      _createSelectableList: function() {
        for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); r > i; i++) n.push({
          name: t.getName(i),
          value: t.get(e, i),
          selected: qo(t, i, "selected")
        });
        return n
      },
      getDataParams: function(t) {
        var e = this.getData(),
          n = L_.superCall(this, "getDataParams", t),
          i = [];
        return e.each(e.mapDimension("value"), function(t) {
          i.push(t)
        }), n.percent = Da(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n
      },
      _defaultLabelLine: function(t) {
        gi(t, "labelLine", ["show"]);
        var e = t.labelLine,
          n = t.emphasis.labelLine;
        e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
      },
      defaultOption: {
        zlevel: 0,
        z: 2,
        legendHoverLink: !0,
        hoverAnimation: !0,
        center: ["50%", "50%"],
        radius: [0, "75%"],
        clockwise: !0,
        startAngle: 90,
        minAngle: 0,
        selectedOffset: 10,
        hoverOffset: 10,
        avoidLabelOverlap: !0,
        percentPrecision: 2,
        stillShowZeroSum: !0,
        label: {
          rotate: !1,
          show: !0,
          position: "outer"
        },
        labelLine: {
          show: !0,
          length: 15,
          length2: 15,
          smooth: !1,
          lineStyle: {
            width: 1,
            type: "solid"
          }
        },
        itemStyle: {
          borderWidth: 1
        },
        animationType: "expansion",
        animationEasing: "cubicOut"
      }
    });
  c(L_, P_);
  var O_ = Vu.prototype;
  O_.updateData = function(t, e, n) {
    function i() {
      a.stopAnimation(!0), a.animateTo({
        shape: {
          r: u.r + l.get("hoverOffset")
        }
      }, 300, "elasticOut")
    }

    function r() {
      a.stopAnimation(!0), a.animateTo({
        shape: {
          r: u.r
        }
      }, 300, "elasticOut")
    }
    var a = this.childAt(0),
      l = t.hostModel,
      h = t.getItemModel(e),
      u = t.getItemLayout(e),
      c = o({}, u);
    if (c.label = null, n) {
      a.setShape(c);
      var d = l.getShallow("animationType");
      "scale" === d ? (a.shape.r = u.r0, la(a, {
        shape: {
          r: u.r
        }
      }, l, e)) : (a.shape.endAngle = u.startAngle, sa(a, {
        shape: {
          endAngle: u.endAngle
        }
      }, l, e))
    } else sa(a, {
      shape: c
    }, l, e);
    var f = t.getItemVisual(e, "color");
    a.useStyle(s({
      lineJoin: "bevel",
      fill: f
    }, h.getModel("itemStyle").getItemStyle())), a.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();
    var p = h.getShallow("cursor");
    p && a.attr("cursor", p), Hu(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), jr(this)
  }, O_._updateLabel = function(t, e) {
    var n = this.childAt(1),
      i = this.childAt(2),
      r = t.hostModel,
      a = t.getItemModel(e),
      o = t.getItemLayout(e),
      s = o.label,
      l = t.getItemVisual(e, "color");
    sa(n, {
      shape: {
        points: s.linePoints || [
          [s.x, s.y],
          [s.x, s.y],
          [s.x, s.y]
        ]
      }
    }, r, e), sa(i, {
      style: {
        x: s.x,
        y: s.y
      }
    }, r, e), i.attr({
      rotation: s.rotation,
      origin: [s.x, s.y],
      z2: 10
    });
    var h = a.getModel("label"),
      u = a.getModel("emphasis.label"),
      c = a.getModel("labelLine"),
      d = a.getModel("emphasis.labelLine"),
      l = t.getItemVisual(e, "color");
    $r(i.style, i.hoverStyle = {}, h, u, {
      labelFetcher: t.hostModel,
      labelDataIndex: e,
      defaultText: t.getName(e),
      autoColor: l,
      useInsideStyle: !!s.inside
    }, {
      textAlign: s.textAlign,
      textVerticalAlign: s.verticalAlign,
      opacity: t.getItemVisual(e, "opacity")
    }), i.ignore = i.normalIgnore = !h.get("show"), i.hoverIgnore = !u.get("show"), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), n.setStyle({
      stroke: l,
      opacity: t.getItemVisual(e, "opacity")
    }), n.setStyle(c.getModel("lineStyle").getLineStyle()), n.hoverStyle = d.getModel("lineStyle").getLineStyle();
    var f = c.get("smooth");
    f && f === !0 && (f = .4), n.setShape({
      smooth: f
    })
  }, u(Vu, Gd);
  var B_ = (as.extend({
      type: "pie",
      init: function() {
        var t = new Gd;
        this._sectorGroup = t
      },
      render: function(t, e, n, i) {
        if (!i || i.from !== this.uid) {
          var r = t.getData(),
            a = this._data,
            o = this.group,
            s = e.get("animation"),
            l = !a,
            h = t.get("animationType"),
            u = y(Nu, this.uid, t, s, n),
            c = t.get("selectedMode");
          if (r.diff(a).add(function(t) {
              var e = new Vu(r, t);
              l && "scale" !== h && e.eachChild(function(t) {
                t.stopAnimation(!0)
              }), c && e.on("click", u), r.setItemGraphicEl(t, e), o.add(e)
            }).update(function(t, e) {
              var n = a.getItemGraphicEl(e);
              n.updateData(r, t), n.off("click"), c && n.on("click", u), o.add(n), r.setItemGraphicEl(t, n)
            }).remove(function(t) {
              var e = a.getItemGraphicEl(t);
              o.remove(e)
            }).execute(), s && l && r.count() > 0 && "scale" !== h) {
            var d = r.getItemLayout(0),
              f = Math.max(n.getWidth(), n.getHeight()) / 2,
              p = m(o.removeClipPath, o);
            o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
          } else o.removeClipPath();
          this._data = r
        }
      },
      dispose: function() {},
      _createClipPath: function(t, e, n, i, r, a, o) {
        var s = new ng({
          shape: {
            cx: t,
            cy: e,
            r0: 0,
            r: n,
            startAngle: i,
            endAngle: i,
            clockwise: r
          }
        });
        return la(s, {
          shape: {
            endAngle: i + (r ? 1 : -1) * Math.PI * 2
          }
        }, o, a), s
      },
      containPoint: function(t, e) {
        var n = e.getData(),
          i = n.getItemLayout(0);
        if (i) {
          var r = t[0] - i.cx,
            a = t[1] - i.cy,
            o = Math.sqrt(r * r + a * a);
          return o <= i.r && o >= i.r0
        }
      }
    }), function(t, e) {
      f(e, function(e) {
        e.update = "updateView", vl(e, function(n, i) {
          var r = {};
          return i.eachComponent({
            mainType: "series",
            subType: t,
            query: n
          }, function(t) {
            t[e.method] && t[e.method](n.name, n.dataIndex);
            var i = t.getData();
            i.each(function(e) {
              var n = i.getName(e);
              r[n] = t.isSelected(n) || !1
            })
          }), {
            name: n.name,
            selected: r
          }
        })
      })
    }),
    E_ = function(t) {
      return {
        getTargetSeries: function(e) {
          var n = {},
            i = R();
          return e.eachSeriesByType(t, function(t) {
            t.__paletteScope = n, i.set(t.uid, t)
          }), i
        },
        reset: function(t) {
          var e = t.getRawData(),
            n = {},
            i = t.getData();
          i.each(function(t) {
            var e = i.getRawIndex(t);
            n[e] = t
          }), e.each(function(r) {
            var a = n[r],
              o = null != a && i.getItemVisual(a, "color", !0);
            if (o) e.setItemVisual(r, "color", o);
            else {
              var s = e.getItemModel(r),
                l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
              e.setItemVisual(r, "color", l), null != a && i.setItemVisual(a, "color", l)
            }
          })
        }
      }
    },
    z_ = function(t, e, n, i) {
      var r, a, o = t.getData(),
        s = [],
        l = !1;
      o.each(function(n) {
        var i, h, u, c, d = o.getItemLayout(n),
          f = o.getItemModel(n),
          p = f.getModel("label"),
          g = p.get("position") || f.get("emphasis.label.position"),
          v = f.getModel("labelLine"),
          m = v.get("length"),
          y = v.get("length2"),
          _ = (d.startAngle + d.endAngle) / 2,
          x = Math.cos(_),
          w = Math.sin(_);
        r = d.cx, a = d.cy;
        var b = "inside" === g || "inner" === g;
        if ("center" === g) i = d.cx, h = d.cy, c = "center";
        else {
          var S = (b ? (d.r + d.r0) / 2 * x : d.r * x) + r,
            M = (b ? (d.r + d.r0) / 2 * w : d.r * w) + a;
          if (i = S + 3 * x, h = M + 3 * w, !b) {
            var I = S + x * (m + e - d.r),
              T = M + w * (m + e - d.r),
              C = I + (0 > x ? -1 : 1) * y,
              D = T;
            i = C + (0 > x ? -5 : 5), h = D, u = [
              [S, M],
              [I, T],
              [C, D]
            ]
          }
          c = b ? "center" : x > 0 ? "left" : "right"
        }
        var k = p.getFont(),
          A = p.get("rotate") ? 0 > x ? -_ + Math.PI : -_ : 0,
          P = t.getFormattedLabel(n, "normal") || o.getName(n),
          L = vn(P, k, c, "top");
        l = !!A, d.label = {
          x: i,
          y: h,
          position: g,
          height: L.height,
          len: m,
          len2: y,
          linePoints: u,
          textAlign: c,
          verticalAlign: "middle",
          rotation: A,
          inside: b
        }, b || s.push(d.label)
      }), !l && t.get("avoidLabelOverlap") && Gu(s, r, a, e, n, i)
    },
    R_ = 2 * Math.PI,
    F_ = Math.PI / 180,
    N_ = function(t, e, n) {
      e.eachSeriesByType(t, function(t) {
        var e = t.getData(),
          i = e.mapDimension("value"),
          r = t.get("center"),
          a = t.get("radius");
        _(a) || (a = [0, a]), _(r) || (r = [r, r]);
        var o = n.getWidth(),
          s = n.getHeight(),
          l = Math.min(o, s),
          h = Ma(r[0], o),
          u = Ma(r[1], s),
          c = Ma(a[0], l / 2),
          d = Ma(a[1], l / 2),
          f = -t.get("startAngle") * F_,
          p = t.get("minAngle") * F_,
          g = 0;
        e.each(i, function(t) {
          !isNaN(t) && g++
        });
        var v = e.getSum(i),
          m = Math.PI / (v || g) * 2,
          y = t.get("clockwise"),
          x = t.get("roseType"),
          w = t.get("stillShowZeroSum"),
          b = e.getDataExtent(i);
        b[0] = 0;
        var S = R_,
          M = 0,
          I = f,
          T = y ? 1 : -1;
        if (e.each(i, function(t, n) {
            var i;
            if (isNaN(t)) return void e.setItemLayout(n, {
              angle: 0 / 0,
              startAngle: 0 / 0,
              endAngle: 0 / 0,
              clockwise: y,
              cx: h,
              cy: u,
              r0: c,
              r: x ? 0 / 0 : d
            });
            i = "area" !== x ? 0 === v && w ? m : t * m : R_ / g, p > i ? (i = p, S -= p) : M += t;
            var r = I + T * i;
            e.setItemLayout(n, {
              angle: i,
              startAngle: I,
              endAngle: r,
              clockwise: y,
              cx: h,
              cy: u,
              r0: c,
              r: x ? Sa(t, b, [c, d]) : d
            }), I = r
          }), R_ > S && g)
          if (.001 >= S) {
            var C = R_ / g;
            e.each(i, function(t, n) {
              if (!isNaN(t)) {
                var i = e.getItemLayout(n);
                i.angle = C, i.startAngle = f + T * n * C, i.endAngle = f + T * (n + 1) * C
              }
            })
          } else m = S / M, I = f, e.each(i, function(t, n) {
            if (!isNaN(t)) {
              var i = e.getItemLayout(n),
                r = i.angle === p ? p : t * m;
              i.startAngle = I, i.endAngle = I + T * r, I += T * r
            }
          });
        z_(t, d, o, s)
      })
    },
    H_ = function(t) {
      return {
        seriesType: t,
        reset: function(t, e) {
          var n = e.findComponents({
            mainType: "legend"
          });
          if (n && n.length) {
            var i = t.getData();
            i.filterSelf(function(t) {
              for (var e = i.getName(t), r = 0; r < n.length; r++)
                if (!n[r].isSelected(e)) return !1;
              return !0
            })
          }
        }
      }
    };
  B_("pie", [{
    type: "pieToggleSelect",
    event: "pieselectchanged",
    method: "toggleSelected"
  }, {
    type: "pieSelect",
    event: "pieselected",
    method: "select"
  }, {
    type: "pieUnSelect",
    event: "pieunselected",
    method: "unSelect"
  }]), xl(E_("pie")), _l(y(N_, "pie")), pl(H_("pie")), Sl({
    type: "title",
    layoutMode: {
      type: "box",
      ignoreSize: !0
    },
    defaultOption: {
      zlevel: 0,
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bolder",
        color: "#333"
      },
      subtextStyle: {
        color: "#aaa"
      }
    }
  }), Ml({
    type: "title",
    render: function(t, e, n) {
      if (this.group.removeAll(), t.get("show")) {
        var i = this.group,
          r = t.getModel("textStyle"),
          a = t.getModel("subtextStyle"),
          o = t.get("textAlign"),
          s = t.get("textBaseline"),
          l = new Qp({
            style: Kr({}, r, {
              text: t.get("text"),
              textFill: r.getTextColor()
            }, {
              disableBox: !0
            }),
            z2: 10
          }),
          h = l.getBoundingRect(),
          u = t.get("subtext"),
          c = new Qp({
            style: Kr({}, a, {
              text: u,
              textFill: a.getTextColor(),
              y: h.height + t.get("itemGap"),
              textVerticalAlign: "top"
            }, {
              disableBox: !0
            }),
            z2: 10
          }),
          d = t.get("link"),
          f = t.get("sublink"),
          p = t.get("triggerEvent", !0);
        l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function() {
          window.open(d, "_" + t.get("target"))
        }), f && c.on("click", function() {
          window.open(f, "_" + t.get("subtarget"))
        }), l.eventData = c.eventData = p ? {
          componentType: "title",
          componentIndex: t.componentIndex
        } : null, i.add(l), u && i.add(c);
        var g = i.getBoundingRect(),
          v = t.getBoxLayoutParams();
        v.width = g.width, v.height = g.height;
        var m = Ga(v, {
          width: n.getWidth(),
          height: n.getHeight()
        }, t.get("padding"));
        o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" === o ? m.x += m.width : "center" === o && (m.x += m.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? m.y += m.height : "middle" === s && (m.y += m.height / 2), s = s || "top"), i.attr("position", [m.x, m.y]);
        var y = {
          textAlign: o,
          textVerticalAlign: s
        };
        l.setStyle(y), c.setStyle(y), g = i.getBoundingRect();
        var _ = m.margin,
          x = t.getItemStyle(["color", "opacity"]);
        x.fill = t.get("backgroundColor");
        var w = new lg({
          shape: {
            x: g.x - _[3],
            y: g.y - _[0],
            width: g.width + _[1] + _[3],
            height: g.height + _[0] + _[2],
            r: t.get("borderRadius")
          },
          style: x,
          silent: !0
        });
        Lr(w), i.add(w)
      }
    }
  });
  var V_ = Sl({
    type: "legend.plain",
    dependencies: ["series"],
    layoutMode: {
      type: "box",
      ignoreSize: !0
    },
    init: function(t, e, n) {
      this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}
    },
    mergeOption: function(t) {
      V_.superCall(this, "mergeOption", t)
    },
    optionUpdated: function() {
      this._updateData(this.ecModel);
      var t = this._data;
      if (t[0] && "single" === this.get("selectedMode")) {
        for (var e = !1, n = 0; n < t.length; n++) {
          var i = t[n].get("name");
          if (this.isSelected(i)) {
            this.select(i), e = !0;
            break
          }
        }!e && this.select(t[0].get("name"))
      }
    },
    _updateData: function(t) {
      var e = [],
        n = [];
      t.eachRawSeries(function(i) {
        var r = i.name;
        n.push(r);
        var a;
        if (i.legendDataProvider) {
          var o = i.legendDataProvider(),
            s = o.mapArray(o.getName);
          t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : a = !0
        } else a = !0;
        a && xi(i) && e.push(i.name)
      }), this._availableNames = n;
      var i = this.get("data") || e,
        r = p(i, function(t) {
          return ("string" == typeof t || "number" == typeof t) && (t = {
            name: t
          }), new va(t, this, this.ecModel)
        }, this);
      this._data = r
    },
    getData: function() {
      return this._data
    },
    select: function(t) {
      var e = this.option.selected,
        n = this.get("selectedMode");
      if ("single" === n) {
        var i = this._data;
        f(i, function(t) {
          e[t.get("name")] = !1
        })
      }
      e[t] = !0
    },
    unSelect: function(t) {
      "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
    },
    toggleSelected: function(t) {
      var e = this.option.selected;
      e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
    },
    isSelected: function(t) {
      var e = this.option.selected;
      return !(e.hasOwnProperty(t) && !e[t]) && h(this._availableNames, t) >= 0
    },
    defaultOption: {
      zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      top: 0,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      inactiveColor: "#ccc",
      textStyle: {
        color: "#333"
      },
      selectedMode: !0,
      tooltip: {
        show: !1
      }
    }
  });
  vl("legendToggleSelect", "legendselectchanged", y(Xu, "toggleSelected")), vl("legendSelect", "legendselected", y(Xu, "select")), vl("legendUnSelect", "legendunselected", y(Xu, "unSelect"));
  var W_ = y,
    G_ = f,
    X_ = Gd,
    Y_ = Ml({
      type: "legend.plain",
      newlineDisabled: !1,
      init: function() {
        this.group.add(this._contentGroup = new X_), this._backgroundEl
      },
      getContentGroup: function() {
        return this._contentGroup
      },
      render: function(t, e, n) {
        if (this.resetInner(), t.get("show", !0)) {
          var i = t.get("align");
          i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(i, t, e, n);
          var r = t.getBoxLayoutParams(),
            a = {
              width: n.getWidth(),
              height: n.getHeight()
            },
            o = t.get("padding"),
            l = Ga(r, a, o),
            h = this.layoutInner(t, i, l),
            u = Ga(s({
              width: h.width,
              height: h.height
            }, r), a, o);
          this.group.attr("position", [u.x - h.x, u.y - h.y]), this.group.add(this._backgroundEl = Yu(h, t))
        }
      },
      resetInner: function() {
        this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl)
      },
      renderInner: function(t, e, n, i) {
        var r = this.getContentGroup(),
          a = R(),
          o = e.get("selectedMode"),
          s = [];
        n.eachRawSeries(function(t) {
          !t.get("legendHoverLink") && s.push(t.id)
        }), G_(e.getData(), function(l, h) {
          var u = l.get("name");
          if (!this.newlineDisabled && ("" === u || "\n" === u)) return void r.add(new X_({
            newline: !0
          }));
          var c = n.getSeriesByName(u)[0];
          if (!a.get(u))
            if (c) {
              var d = c.getData(),
                f = d.getVisual("color");
              "function" == typeof f && (f = f(c.getDataParams(0)));
              var p = d.getVisual("legendSymbol") || "roundRect",
                g = d.getVisual("symbol"),
                v = this._createItem(u, h, l, e, p, g, t, f, o);
              v.on("click", W_(qu, u, i)).on("mouseover", W_(Uu, c.name, null, i, s)).on("mouseout", W_(ju, c.name, null, i, s)), a.set(u, !0)
            } else n.eachRawSeries(function(n) {
              if (!a.get(u) && n.legendDataProvider) {
                var r = n.legendDataProvider(),
                  c = r.indexOfName(u);
                if (0 > c) return;
                var d = r.getItemVisual(c, "color"),
                  f = "roundRect",
                  p = this._createItem(u, h, l, e, f, null, t, d, o);
                p.on("click", W_(qu, u, i)).on("mouseover", W_(Uu, null, u, i, s)).on("mouseout", W_(ju, null, u, i, s)), a.set(u, !0)
              }
            }, this)
        }, this)
      },
      _createItem: function(t, e, n, i, r, a, s, l, h) {
        var u = i.get("itemWidth"),
          c = i.get("itemHeight"),
          d = i.get("inactiveColor"),
          f = i.get("symbolKeepAspect"),
          p = i.isSelected(t),
          g = new X_,
          v = n.getModel("textStyle"),
          m = n.get("icon"),
          y = n.getModel("tooltip"),
          _ = y.parentModel;
        if (r = m || r, g.add(gu(r, 0, 0, u, c, p ? l : d, null == f ? !0 : f)), !m && a && (a !== r || "none" === a)) {
          var x = .8 * c;
          "none" === a && (a = "circle"), g.add(gu(a, (u - x) / 2, (c - x) / 2, x, x, p ? l : d, null == f ? !0 : f))
        }
        var w = "left" === s ? u + 5 : -5,
          b = s,
          S = i.get("formatter"),
          M = t;
        "string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" == typeof S && (M = S(t)), g.add(new Qp({
          style: Kr({}, v, {
            text: M,
            x: w,
            y: c / 2,
            textFill: p ? v.getTextColor() : d,
            textAlign: b,
            textVerticalAlign: "middle"
          })
        }));
        var I = new lg({
          shape: g.getBoundingRect(),
          invisible: !0,
          tooltip: y.get("show") ? o({
            content: t,
            formatter: _.get("formatter", !0) || function() {
              return t
            },
            formatterParams: {
              componentType: "legend",
              legendIndex: i.componentIndex,
              name: t,
              $vars: ["name"]
            }
          }, y.option) : null
        });
        return g.add(I), g.eachChild(function(t) {
          t.silent = !0
        }), I.silent = !h, this.getContentGroup().add(g), jr(g), g.__legendDataIndex = e, g
      },
      layoutInner: function(t, e, n) {
        var i = this.getContentGroup();
        Xg(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
        var r = i.getBoundingRect();
        return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect()
      }
    }),
    q_ = function(t) {
      var e = t.findComponents({
        mainType: "legend"
      });
      e && e.length && t.filterSeries(function(t) {
        for (var n = 0; n < e.length; n++)
          if (!e[n].isSelected(t.name)) return !1;
        return !0
      })
    };
  pl(q_), Ug.registerSubTypeDefaulter("legend", function() {
    return "plain"
  });
  var U_ = V_.extend({
      type: "legend.scroll",
      setScrollDataIndex: function(t) {
        this.option.scrollDataIndex = t
      },
      defaultOption: {
        scrollDataIndex: 0,
        pageButtonItemGap: 5,
        pageButtonGap: null,
        pageButtonPosition: "end",
        pageFormatter: "{current}/{total}",
        pageIcons: {
          horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
          vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
        },
        pageIconColor: "#2f4554",
        pageIconInactiveColor: "#aaa",
        pageIconSize: 15,
        pageTextStyle: {
          color: "#333"
        },
        animationDurationUpdate: 800
      },
      init: function(t, e, n, i) {
        var r = Ya(t);
        U_.superCall(this, "init", t, e, n, i), Zu(this, t, r)
      },
      mergeOption: function(t, e) {
        U_.superCall(this, "mergeOption", t, e), Zu(this, this.option, t)
      },
      getOrient: function() {
        return "vertical" === this.get("orient") ? {
          index: 1,
          name: "vertical"
        } : {
          index: 0,
          name: "horizontal"
        }
      }
    }),
    j_ = Gd,
    Z_ = ["width", "height"],
    $_ = ["x", "y"],
    K_ = Y_.extend({
      type: "legend.scroll",
      newlineDisabled: !0,
      init: function() {
        K_.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new j_), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new j_), this._showController
      },
      resetInner: function() {
        K_.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
      },
      renderInner: function(t, e, n, i) {
        function r(t, n) {
          var r = t + "DataIndex",
            l = ga(e.get("pageIcons", !0)[e.getOrient().name][n], {
              onclick: m(a._pageGo, a, r, e, i)
            }, {
              x: -s[0] / 2,
              y: -s[1] / 2,
              width: s[0],
              height: s[1]
            });
          l.name = t, o.add(l)
        }
        var a = this;
        K_.superCall(this, "renderInner", t, e, n, i);
        var o = this._controllerGroup,
          s = e.get("pageIconSize", !0);
        _(s) || (s = [s, s]), r("pagePrev", 0);
        var l = e.getModel("pageTextStyle");
        o.add(new Qp({
          name: "pageText",
          style: {
            textFill: l.getTextColor(),
            font: l.getFont(),
            textVerticalAlign: "middle",
            textAlign: "center"
          },
          silent: !0
        })), r("pageNext", 1)
      },
      layoutInner: function(t, e, n) {
        var i = this.getContentGroup(),
          r = this._containerGroup,
          a = this._controllerGroup,
          o = t.getOrient().index,
          s = Z_[o],
          l = Z_[1 - o],
          h = $_[1 - o];
        Xg(t.get("orient"), i, t.get("itemGap"), o ? n.width : null, o ? null : n.height), Xg("horizontal", a, t.get("pageButtonItemGap", !0));
        var u = i.getBoundingRect(),
          c = a.getBoundingRect(),
          d = this._showController = u[s] > n[s],
          f = [-u.x, -u.y];
        f[o] = i.position[o];
        var p = [0, 0],
          g = [-c.x, -c.y],
          v = D(t.get("pageButtonGap", !0), t.get("itemGap", !0));
        if (d) {
          var m = t.get("pageButtonPosition", !0);
          "end" === m ? g[o] += n[s] - c[s] : p[o] += c[s] + v
        }
        g[1 - o] += u[l] / 2 - c[l] / 2, i.attr("position", f), r.attr("position", p), a.attr("position", g);
        var y = this.group.getBoundingRect(),
          y = {
            x: 0,
            y: 0
          };
        if (y[s] = d ? n[s] : u[s], y[l] = Math.max(u[l], c[l]), y[h] = Math.min(0, c[h] + g[1 - o]), r.__rectSize = n[s], d) {
          var _ = {
            x: 0,
            y: 0
          };
          _[s] = Math.max(n[s] - c[s] - v, 0), _[l] = y[l], r.setClipPath(new lg({
            shape: _
          })), r.__rectSize = _[s]
        } else a.eachChild(function(t) {
          t.attr({
            invisible: !0,
            silent: !0
          })
        });
        var x = this._getPageInfo(t);
        return null != x.pageIndex && sa(i, {
          position: x.contentPosition
        }, d ? t : !1), this._updatePageInfoView(t, x), y
      },
      _pageGo: function(t, e, n) {
        var i = this._getPageInfo(e)[t];
        null != i && n.dispatchAction({
          type: "legendScroll",
          scrollDataIndex: i,
          legendId: e.id
        })
      },
      _updatePageInfoView: function(t, e) {
        var n = this._controllerGroup;
        f(["pagePrev", "pageNext"], function(i) {
          var r = null != e[i + "DataIndex"],
            a = n.childOfName(i);
          a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = r ? "pointer" : "default")
        });
        var i = n.childOfName("pageText"),
          r = t.get("pageFormatter"),
          a = e.pageIndex,
          o = null != a ? a + 1 : 0,
          s = e.pageCount;
        i && r && i.setStyle("text", w(r) ? r.replace("{current}", o).replace("{total}", s) : r({
          current: o,
          total: s
        }))
      },
      _getPageInfo: function(t) {
        function e(t) {
          var e = t.getBoundingRect().clone();
          return e[f] += t.position[u], e
        }
        var n, i, r, a, o = t.get("scrollDataIndex", !0),
          s = this.getContentGroup(),
          l = s.getBoundingRect(),
          h = this._containerGroup.__rectSize,
          u = t.getOrient().index,
          c = Z_[u],
          d = Z_[1 - u],
          f = $_[u],
          p = s.position.slice();
        this._showController ? s.eachChild(function(t) {
          t.__legendDataIndex === o && (a = t)
        }) : a = s.childAt(0);
        var g = h ? Math.ceil(l[c] / h) : 0;
        if (a) {
          var v = a.getBoundingRect(),
            m = a.position[u] + v[f];
          p[u] = -m - l[f], n = Math.floor(g * (m + v[f] + h / 2) / l[c]), n = l[c] && g ? Math.max(0, Math.min(g - 1, n)) : -1;
          var y = {
            x: 0,
            y: 0
          };
          y[c] = h, y[d] = l[d], y[f] = -p[u] - l[f];
          var _, x = s.children();
          if (s.eachChild(function(t, n) {
              var i = e(t);
              i.intersect(y) && (null == _ && (_ = n), r = t.__legendDataIndex), n === x.length - 1 && i[f] + i[c] <= y[f] + y[c] && (r = null)
            }), null != _) {
            var w = x[_],
              b = e(w);
            if (y[f] = b[f] + b[c] - y[c], 0 >= _ && b[f] >= y[f]) i = null;
            else {
              for (; _ > 0 && e(x[_ - 1]).intersect(y);) _--;
              i = x[_].__legendDataIndex
            }
          }
        }
        return {
          contentPosition: p,
          pageIndex: n,
          pageCount: g,
          pagePrevDataIndex: i,
          pageNextDataIndex: r
        }
      }
    });
  vl("legendScroll", "legendscroll", function(t, e) {
    var n = t.scrollDataIndex;
    null != n && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(t) {
      t.setScrollDataIndex(n)
    })
  });
  var Q_ = function(t, e) {
      var n, i = [],
        r = t.seriesIndex;
      if (null == r || !(n = e.getSeriesByIndex(r))) return {
        point: []
      };
      var a = n.getData(),
        o = bi(a, t);
      if (null == o || 0 > o || _(o)) return {
        point: []
      };
      var s = a.getItemGraphicEl(o),
        l = n.coordinateSystem;
      if (n.getTooltipPosition) i = n.getTooltipPosition(o) || [];
      else if (l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function(t) {
        return a.mapDimension(t)
      }), o, !0)) || [];
      else if (s) {
        var h = s.getBoundingRect().clone();
        h.applyTransform(s.transform), i = [h.x + h.width / 2, h.y + h.height / 2]
      }
      return {
        point: i,
        el: s
      }
    },
    J_ = f,
    tx = y,
    ex = Si(),
    nx = function(t, e, n) {
      var i = t.currTrigger,
        r = [t.x, t.y],
        a = t,
        o = t.dispatchAction || m(n.dispatchAction, n),
        s = e.getComponent("axisPointer").coordSysAxesInfo;
      if (s) {
        ac(r) && (r = Q_({
          seriesIndex: a.seriesIndex,
          dataIndex: a.dataIndex
        }, e).point);
        var l = ac(r),
          h = a.axesInfo,
          u = s.axesInfo,
          c = "leave" === i || ac(r),
          d = {},
          f = {},
          p = {
            list: [],
            map: {}
          },
          g = {
            showPointer: tx(Qu, f),
            showTooltip: tx(Ju, p)
          };
        J_(s.coordSysMap, function(t, e) {
          var n = l || t.containPoint(r);
          J_(s.coordSysAxesInfo[e], function(t) {
            var e = t.axis,
              i = ic(h, t);
            if (!c && n && (!h || i)) {
              var a = i && i.value;
              null != a || l || (a = e.pointToData(r)), null != a && $u(t, a, g, !1, d)
            }
          })
        });
        var v = {};
        return J_(u, function(t, e) {
          var n = t.linkGroup;
          n && !f[e] && J_(n.axesInfo, function(e, i) {
            var r = f[i];
            if (e !== t && r) {
              var a = r.value;
              n.mapper && (a = t.axis.scale.parse(n.mapper(a, rc(e), rc(t)))), v[t.key] = a
            }
          })
        }), J_(v, function(t, e) {
          $u(u[e], t, g, !0, d)
        }), tc(f, u, d), ec(p, r, t, o), nc(u, o, n), d
      }
    },
    ix = (Sl({
      type: "axisPointer",
      coordSysAxesInfo: null,
      defaultOption: {
        show: "auto",
        triggerOn: null,
        zlevel: 0,
        z: 50,
        type: "line",
        snap: !1,
        triggerTooltip: !0,
        value: null,
        status: null,
        link: [],
        animation: null,
        animationDurationUpdate: 200,
        lineStyle: {
          color: "#aaa",
          width: 1,
          type: "solid"
        },
        shadowStyle: {
          color: "rgba(150,150,150,0.3)"
        },
        label: {
          show: !0,
          formatter: null,
          precision: "auto",
          margin: 3,
          color: "#fff",
          padding: [5, 7, 5, 7],
          backgroundColor: "auto",
          borderColor: null,
          borderWidth: 0,
          shadowBlur: 3,
          shadowColor: "#aaa"
        },
        handle: {
          show: !1,
          icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
          size: 45,
          margin: 50,
          color: "#333",
          shadowBlur: 3,
          shadowColor: "#aaa",
          shadowOffsetX: 0,
          shadowOffsetY: 2,
          throttle: 40
        }
      }
    }), Si()),
    rx = f,
    ax = Ml({
      type: "axisPointer",
      render: function(t, e, n) {
        var i = e.getComponent("tooltip"),
          r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
        oc("axisPointer", n, function(t, e, n) {
          "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
            type: "updateAxisPointer",
            currTrigger: t,
            x: e && e.offsetX,
            y: e && e.offsetY
          })
        })
      },
      remove: function(t, e) {
        dc(e.getZr(), "axisPointer"), ax.superApply(this._model, "remove", arguments)
      },
      dispose: function(t, e) {
        dc("axisPointer", e), ax.superApply(this._model, "dispose", arguments)
      }
    }),
    ox = Si(),
    sx = i,
    lx = m;
  fc.prototype = {
    _group: null,
    _lastGraphicKey: null,
    _handle: null,
    _dragging: !1,
    _lastValue: null,
    _lastStatus: null,
    _payloadInfo: null,
    animationThreshold: 15,
    render: function(t, e, n, i) {
      var r = e.get("value"),
        a = e.get("status");
      if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== a) {
        this._lastValue = r, this._lastStatus = a;
        var o = this._group,
          s = this._handle;
        if (!a || "hide" === a) return o && o.hide(), void(s && s.hide());
        o && o.show(), s && s.show();
        var l = {};
        this.makeElOption(l, r, t, e, n);
        var h = l.graphicKey;
        h !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = h;
        var u = this._moveAnimation = this.determineAnimation(t, e);
        if (o) {
          var c = y(pc, e, u);
          this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e)
        } else o = this._group = new Gd, this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), n.getZr().add(o);
        yc(o, e, !0), this._renderHandle(r)
      }
    },
    remove: function(t) {
      this.clear(t)
    },
    dispose: function(t) {
      this.clear(t)
    },
    determineAnimation: function(t, e) {
      var n = e.get("animation"),
        i = t.axis,
        r = "category" === i.type,
        a = e.get("snap");
      if (!a && !r) return !1;
      if ("auto" === n || null == n) {
        var o = this.animationThreshold;
        if (r && i.getBandWidth() > o) return !0;
        if (a) {
          var s = Lu(t).seriesDataCount,
            l = i.getExtent();
          return Math.abs(l[0] - l[1]) / s > o
        }
        return !1
      }
      return n === !0
    },
    makeElOption: function() {},
    createPointerEl: function(t, e) {
      var n = e.pointer;
      if (n) {
        var i = ox(t).pointerEl = new Ig[n.type](sx(e.pointer));
        t.add(i)
      }
    },
    createLabelEl: function(t, e, n, i) {
      if (e.label) {
        var r = ox(t).labelEl = new lg(sx(e.label));
        t.add(r), vc(r, i)
      }
    },
    updatePointerEl: function(t, e, n) {
      var i = ox(t).pointerEl;
      i && (i.setStyle(e.pointer.style), n(i, {
        shape: e.pointer.shape
      }))
    },
    updateLabelEl: function(t, e, n, i) {
      var r = ox(t).labelEl;
      r && (r.setStyle(e.label.style), n(r, {
        shape: e.label.shape,
        position: e.label.position
      }), vc(r, i))
    },
    _renderHandle: function(t) {
      if (!this._dragging && this.updateHandleTransform) {
        var e = this._axisPointerModel,
          n = this._api.getZr(),
          i = this._handle,
          r = e.getModel("handle"),
          a = e.get("status");
        if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void(this._handle = null);
        var o;
        this._handle || (o = !0, i = this._handle = ga(r.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(t) {
            ud(t.event)
          },
          onmousedown: lx(this._onHandleDragMove, this, 0, 0),
          drift: lx(this._onHandleDragMove, this),
          ondragend: lx(this._onHandleDragEnd, this)
        }), n.add(i)), yc(i, e, !1);
        var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
        i.setStyle(r.getItemStyle(null, s));
        var l = r.get("size");
        _(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), cs(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o)
      }
    },
    _moveHandleToValue: function(t, e) {
      pc(this._axisPointerModel, !e && this._moveAnimation, this._handle, mc(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
    },
    _onHandleDragMove: function(t, e) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(mc(n), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(mc(i)), ox(n).lastProp = null, this._doDispatchAxisPointer()
      }
    },
    _doDispatchAxisPointer: function() {
      var t = this._handle;
      if (t) {
        var e = this._payloadInfo,
          n = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: n.axis.dim,
            axisIndex: n.componentIndex
          }]
        })
      }
    },
    _onHandleDragEnd: function() {
      this._dragging = !1;
      var t = this._handle;
      if (t) {
        var e = this._axisPointerModel.get("value");
        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        })
      }
    },
    getHandleTransform: null,
    updateHandleTransform: null,
    clear: function(t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(),
        n = this._group,
        i = this._handle;
      e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
    },
    doClear: function() {},
    buildLabel: function(t, e, n) {
      return n = n || 0, {
        x: t[n],
        y: t[1 - n],
        width: e[n],
        height: e[1 - n]
      }
    }
  }, fc.prototype.constructor = fc, Pi(fc);
  var hx = fc.extend({
      makeElOption: function(t, e, n, i, r) {
        var a = n.axis,
          o = a.grid,
          s = i.get("type"),
          l = Cc(o, a).getOtherAxis(a).getGlobalExtent(),
          h = a.toGlobalCoord(a.dataToCoord(e, !0));
        if (s && "none" !== s) {
          var u = _c(i),
            c = ux[s](a, h, l, u);
          c.style = u, t.graphicKey = c.type, t.pointer = c
        }
        var d = Fu(o.model, n);
        Mc(e, t, d, n, i, r)
      },
      getHandleTransform: function(t, e, n) {
        var i = Fu(e.axis.grid.model, e, {
          labelInside: !1
        });
        return i.labelMargin = n.get("handle.margin"), {
          position: Sc(e.axis, t, i),
          rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
        }
      },
      updateHandleTransform: function(t, e, n) {
        var i = n.axis,
          r = i.grid,
          a = i.getGlobalExtent(!0),
          o = Cc(r, i).getOtherAxis(i).getGlobalExtent(),
          s = "x" === i.dim ? 0 : 1,
          l = t.position;
        l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
        var h = (o[1] + o[0]) / 2,
          u = [h, h];
        u[s] = l[s];
        var c = [{
          verticalAlign: "middle"
        }, {
          align: "center"
        }];
        return {
          position: l,
          rotation: t.rotation,
          cursorPoint: u,
          tooltipOption: c[s]
        }
      }
    }),
    ux = {
      line: function(t, e, n, i) {
        var r = Ic([e, n[0]], [e, n[1]], Dc(t));
        return Pr({
          shape: r,
          style: i
        }), {
          type: "Line",
          shape: r
        }
      },
      shadow: function(t, e, n) {
        var i = Math.max(1, t.getBandWidth()),
          r = n[1] - n[0];
        return {
          type: "Rect",
          shape: Tc([e - i / 2, n[0]], [i, r], Dc(t))
        }
      }
    };
  I_.registerAxisPointerClass("CartesianAxisPointer", hx), fl(function(t) {
    if (t) {
      (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !_(e) && (t.axisPointer.link = [e])
    }
  }), pl(Bm.PROCESSOR.STATISTIC, function(t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = Iu(t, e)
  }), vl({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, nx), Sl({
    type: "tooltip",
    dependencies: ["axisPointer"],
    defaultOption: {
      zlevel: 0,
      z: 60,
      show: !0,
      showContent: !0,
      trigger: "item",
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      renderMode: "auto",
      confine: !1,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: .4,
      enterable: !1,
      backgroundColor: "rgba(50,50,50,0.7)",
      borderColor: "#333",
      borderRadius: 4,
      borderWidth: 0,
      padding: 5,
      extraCssText: "",
      axisPointer: {
        type: "line",
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          textStyle: {}
        }
      },
      textStyle: {
        color: "#fff",
        fontSize: 14
      }
    }
  });
  var cx = f,
    dx = za,
    fx = ["", "-webkit-", "-moz-", "-o-"],
    px = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
  Lc.prototype = {
    constructor: Lc,
    _enterable: !0,
    update: function() {
      var t = this._container,
        e = t.currentStyle || document.defaultView.getComputedStyle(t),
        n = t.style;
      "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
    },
    show: function(t) {
      clearTimeout(this._hideTimeout);
      var e = this.el;
      e.style.cssText = px + Pc(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0
    },
    setContent: function(t) {
      this.el.innerHTML = null == t ? "" : t
    },
    setEnterable: function(t) {
      this._enterable = t
    },
    getSize: function() {
      var t = this.el;
      return [t.clientWidth, t.clientHeight]
    },
    moveTo: function(t, e) {
      var n, i = this._zr;
      i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);
      var r = this.el.style;
      r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
    },
    hide: function() {
      this.el.style.display = "none", this._show = !1
    },
    hideLater: function(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide())
    },
    isShow: function() {
      return this._show
    },
    getOuterSize: function() {
      var t = this.el.clientWidth,
        e = this.el.clientHeight;
      if (document.defaultView && document.defaultView.getComputedStyle) {
        var n = document.defaultView.getComputedStyle(this.el);
        n && (t += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10))
      }
      return {
        width: t,
        height: e
      }
    }
  }, Oc.prototype = {
    constructor: Oc,
    _enterable: !0,
    update: function() {},
    show: function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0
    },
    setContent: function(t, e, n) {
      this.el && this._zr.remove(this.el);
      for (var i = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0;) {
        var l = r.indexOf(o),
          h = r.substr(s + a.length, l - s - a.length);
        i["marker" + h] = h.indexOf("sub") > -1 ? {
          textWidth: 4,
          textHeight: 4,
          textBorderRadius: 2,
          textBackgroundColor: e[h],
          textOffset: [3, 0]
        } : {
          textWidth: 10,
          textHeight: 10,
          textBorderRadius: 5,
          textBackgroundColor: e[h]
        }, r = r.substr(l + 1), s = r.indexOf("{marker")
      }
      this.el = new Qp({
        style: {
          rich: i,
          text: t,
          textLineHeight: 20,
          textBackgroundColor: n.get("backgroundColor"),
          textBorderRadius: n.get("borderRadius"),
          textFill: n.get("textStyle.color"),
          textPadding: n.get("padding")
        },
        z: n.get("z")
      }), this._zr.add(this.el);
      var u = this;
      this.el.on("mouseover", function() {
        u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0
      }), this.el.on("mouseout", function() {
        u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1
      })
    },
    setEnterable: function(t) {
      this._enterable = t
    },
    getSize: function() {
      var t = this.el.getBoundingRect();
      return [t.width, t.height]
    },
    moveTo: function(t, e) {
      this.el && this.el.attr("position", [t, e])
    },
    hide: function() {
      this.el.hide(), this._show = !1
    },
    hideLater: function(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide())
    },
    isShow: function() {
      return this._show
    },
    getOuterSize: function() {
      return this.getSize()
    }
  };
  var gx = m,
    vx = f,
    mx = Ma,
    yx = new lg({
      shape: {
        x: -1,
        y: -1,
        width: 2,
        height: 2
      }
    });
  Ml({
    type: "tooltip",
    init: function(t, e) {
      if (!Gc.node) {
        var n = t.getComponent("tooltip"),
          i = n.get("renderMode");
        this._renderMode = Di(i);
        var r;
        "html" === this._renderMode ? (r = new Lc(e.getDom(), e), this._newLine = "<br/>") : (r = new Oc(e), this._newLine = "\n"), this._tooltipContent = r
      }
    },
    render: function(t, e, n) {
      if (!Gc.node) {
        this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
        var i = this._tooltipContent;
        i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
      }
    },
    _initGlobalListener: function() {
      var t = this._tooltipModel,
        e = t.get("triggerOn");
      oc("itemTooltip", this._api, gx(function(t, n, i) {
        "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i))
      }, this))
    },
    _keepShow: function() {
      var t = this._tooltipModel,
        e = this._ecModel,
        n = this._api;
      if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
        var i = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          i.manuallyShowTip(t, e, n, {
            x: i._lastX,
            y: i._lastY
          })
        })
      }
    },
    manuallyShowTip: function(t, e, n, i) {
      if (i.from !== this.uid && !Gc.node) {
        var r = Ec(i, n);
        this._ticket = "";
        var a = i.dataByCoordSys;
        if (i.tooltip && null != i.x && null != i.y) {
          var o = yx;
          o.position = [i.x, i.y], o.update(), o.tooltip = i.tooltip, this._tryShow({
            offsetX: i.x,
            offsetY: i.y,
            target: o
          }, r)
        } else if (a) this._tryShow({
          offsetX: i.x,
          offsetY: i.y,
          position: i.position,
          event: {},
          dataByCoordSys: i.dataByCoordSys,
          tooltipOption: i.tooltipOption
        }, r);
        else if (null != i.seriesIndex) {
          if (this._manuallyAxisShowTip(t, e, n, i)) return;
          var s = Q_(i, e),
            l = s.point[0],
            h = s.point[1];
          null != l && null != h && this._tryShow({
            offsetX: l,
            offsetY: h,
            position: i.position,
            target: s.el,
            event: {}
          }, r)
        } else null != i.x && null != i.y && (n.dispatchAction({
          type: "updateAxisPointer",
          x: i.x,
          y: i.y
        }), this._tryShow({
          offsetX: i.x,
          offsetY: i.y,
          position: i.position,
          target: n.getZr().findHover(i.x, i.y).target,
          event: {}
        }, r))
      }
    },
    manuallyHideTip: function(t, e, n, i) {
      var r = this._tooltipContent;
      !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(Ec(i, n))
    },
    _manuallyAxisShowTip: function(t, e, n, i) {
      var r = i.seriesIndex,
        a = i.dataIndex,
        o = e.getComponent("axisPointer").coordSysAxesInfo;
      if (null != r && null != a && null != o) {
        var s = e.getSeriesByIndex(r);
        if (s) {
          var l = s.getData(),
            t = Bc([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
          if ("axis" === t.get("trigger")) return n.dispatchAction({
            type: "updateAxisPointer",
            seriesIndex: r,
            dataIndex: a,
            position: i.position
          }), !0
        }
      }
    },
    _tryShow: function(t, e) {
      var n = t.target,
        i = this._tooltipModel;
      if (i) {
        this._lastX = t.offsetX, this._lastY = t.offsetY;
        var r = t.dataByCoordSys;
        r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
      }
    },
    _showOrMove: function(t, e) {
      var n = t.get("showDelay");
      e = m(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
    },
    _showAxisTooltip: function(t, e) {
      var n = this._ecModel,
        i = this._tooltipModel,
        a = [e.offsetX, e.offsetY],
        o = [],
        s = [],
        l = Bc([e.tooltipOption, i]),
        h = this._renderMode,
        u = this._newLine,
        c = {};
      vx(t, function(t) {
        vx(t.dataByAxis, function(t) {
          var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
            i = t.value,
            a = [];
          if (e && null != i) {
            var l = bc(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
            f(t.seriesDataIndices, function(o) {
              var u = n.getSeriesByIndex(o.seriesIndex),
                d = o.dataIndexInside,
                f = u && u.getDataParams(d);
              if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = ah(e.axis, i), f.axisValueLabel = l, f) {
                s.push(f);
                var p, g = u.formatTooltip(d, !0, null, h);
                if (b(g)) {
                  p = g.html;
                  var v = g.markers;
                  r(c, v)
                } else p = g;
                a.push(p)
              }
            });
            var d = l;
            o.push("html" !== h ? a.join(u) : (d ? Ra(d) + u : "") + a.join(u))
          }
        })
      }, this), o.reverse(), o = o.join(this._newLine + this._newLine);
      var d = e.position;
      this._showOrMove(l, function() {
        this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c)
      })
    },
    _showSeriesItemTooltip: function(t, e, n) {
      var i = this._ecModel,
        r = e.seriesIndex,
        a = i.getSeriesByIndex(r),
        o = e.dataModel || a,
        s = e.dataIndex,
        l = e.dataType,
        h = o.getData(),
        u = Bc([h.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
        c = u.get("trigger");
      if (null == c || "item" === c) {
        var d, f, p = o.getDataParams(s, l),
          g = o.formatTooltip(s, !1, l, this._renderMode);
        b(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
        var v = "item_" + o.name + "_" + s;
        this._showOrMove(u, function() {
          this._showTooltipContent(u, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f)
        }), n({
          type: "showTip",
          dataIndexInside: s,
          dataIndex: h.getRawIndex(s),
          seriesIndex: r,
          from: this.uid
        })
      }
    },
    _showComponentItemTooltip: function(t, e, n) {
      var i = e.tooltip;
      if ("string" == typeof i) {
        var r = i;
        i = {
          content: r,
          formatter: r
        }
      }
      var a = new va(i, this._tooltipModel, this._ecModel),
        o = a.get("content"),
        s = Math.random();
      this._showOrMove(a, function() {
        this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
      }), n({
        type: "showTip",
        from: this.uid
      })
    },
    _showTooltipContent: function(t, e, n, i, r, a, o, s, l) {
      if (this._ticket = "", t.get("showContent") && t.get("show")) {
        var h = this._tooltipContent,
          u = t.get("formatter");
        o = o || t.get("position");
        var c = e;
        if (u && "string" == typeof u) c = Fa(u, n, !0);
        else if ("function" == typeof u) {
          var d = gx(function(e, i) {
            e === this._ticket && (h.setContent(i, l, t), this._updatePosition(t, o, r, a, h, n, s))
          }, this);
          this._ticket = i, c = u(n, i, d)
        }
        h.setContent(c, l, t), h.show(t), this._updatePosition(t, o, r, a, h, n, s)
      }
    },
    _updatePosition: function(t, e, n, i, r, a, o) {
      var s = this._api.getWidth(),
        l = this._api.getHeight();
      e = e || t.get("position");
      var h = r.getSize(),
        u = t.get("align"),
        c = t.get("verticalAlign"),
        d = o && o.getBoundingRect().clone();
      if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el, d, {
          viewSize: [s, l],
          contentSize: h.slice()
        })), _(e)) n = mx(e[0], s), i = mx(e[1], l);
      else if (b(e)) {
        e.width = h[0], e.height = h[1];
        var f = Ga(e, {
          width: s,
          height: l
        });
        n = f.x, i = f.y, u = null, c = null
      } else if ("string" == typeof e && o) {
        var p = Fc(e, d, h);
        n = p[0], i = p[1]
      } else {
        var p = zc(n, i, r, s, l, u ? null : 20, c ? null : 20);
        n = p[0], i = p[1]
      }
      if (u && (n -= Nc(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (i -= Nc(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), t.get("confine")) {
        var p = Rc(n, i, r, s, l);
        n = p[0], i = p[1]
      }
      r.moveTo(n, i)
    },
    _updateContentNotChangedOnAxis: function(t) {
      var e = this._lastDataByCoordSys,
        n = !!e && e.length === t.length;
      return n && vx(e, function(e, i) {
        var r = e.dataByAxis || {},
          a = t[i] || {},
          o = a.dataByAxis || [];
        n &= r.length === o.length, n && vx(r, function(t, e) {
          var i = o[e] || {},
            r = t.seriesDataIndices || [],
            a = i.seriesDataIndices || [];
          n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length, n && vx(r, function(t, e) {
            var i = a[e];
            n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
          })
        })
      }), this._lastDataByCoordSys = t, !!n
    },
    _hide: function(t) {
      this._lastDataByCoordSys = null, t({
        type: "hideTip",
        from: this.uid
      })
    },
    dispose: function(t, e) {
      Gc.node || (this._tooltipContent.hide(), dc("itemTooltip", e))
    }
  }), vl({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, function() {}), vl({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, function() {}), t.version = Mm, t.dependencies = Im, t.PRIORITY = Bm, t.init = ol, t.connect = sl, t.disConnect = ll, t.disconnect = ty, t.dispose = hl, t.getInstanceByDom = ul, t.getInstanceById = cl, t.registerTheme = dl, t.registerPreprocessor = fl, t.registerProcessor = pl, t.registerPostUpdate = gl, t.registerAction = vl, t.registerCoordinateSystem = ml, t.getCoordinateSystemDimensions = yl, t.registerLayout = _l, t.registerVisual = xl, t.registerLoading = bl, t.extendComponentModel = Sl, t.extendComponentView = Ml, t.extendSeriesModel = Il, t.extendChartView = Tl, t.setCanvasCreator = Cl, t.registerMap = Dl, t.getMap = kl, t.dataTool = ey
});