/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2018, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */

!
function(r, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : r.chroma = e()
} (this,
function() {
    "use strict";
    for (var t = function(r, e, t) {
        return void 0 === e && (e = 0),
        void 0 === t && (t = 1),
        r < e ? e: t < r ? t: r
    },
    e = {},
    r = 0, n = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; r < n.length; r += 1) {
        var a = n[r];
        e["[object " + a + "]"] = a.toLowerCase()
    }
    var Y = function(r) {
        return e[Object.prototype.toString.call(r)] || "object"
    },
    f = Math.PI,
    o = {
        clip_rgb: function(r) {
            r._clipped = !1,
            r._unclipped = r.slice(0);
            r[0] = 60,r[1] = 191,r[2] = 255,r[3] = 0.8;
            return r
        },
        limit: t,
        type: Y,
        unpack: function(e, r) {
            return void 0 === r && (r = null),
            3 <= e.length ? Array.prototype.slice.call(e) : "object" == Y(e[0]) && r ? r.split("").filter(function(r) {
                return void 0 !== e[0][r]
            }).map(function(r) {
                return e[0][r]
            }) : e[0]
        },
        last: function(r) {
            if (r.length < 2) return null;
            var e = r.length - 1;
            return "string" == Y(r[e]) ? r[e].toLowerCase() : null
        },
        PI: f,
        TWOPI: 2 * f,
        PITHIRD: f / 3,
        DEG2RAD: f / 180,
        RAD2DEG: 180 / f
    },
    c = {
        format: {},
        autodetect: []
    },
    i = o.last,
    l = o.clip_rgb,
    h = o.type,
    u = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        if ("object" === h(r[0]) && r[0].constructor && r[0].constructor === this.constructor) return r[0];
        var t = i(r),
        n = !1;
        if (!t) {
            n = !0,
            c.sorted || (c.autodetect = c.autodetect.sort(function(r, e) {
                return e.p - r.p
            }), c.sorted = !0);
            for (var a = 0,
            f = c.autodetect; a < f.length; a += 1) {
                var o = f[a];
                if (t = o.test.apply(o, r)) break
            }
        }
        if (!c.format[t]) throw new Error("unknown format: " + r);
        var u = c.format[t].apply(null, n ? r: r.slice(0, -1));
        this._rgb = l(u),
        3 === this._rgb.length && this._rgb.push(1)
    };
    u.prototype.toString = function() {
        return "function" == h(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
    };
    var A = u,
    s = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(s.Color, [null].concat(r)))
    };
    s.Color = A,
    s.version = "2.0.3";
    var N = s,
    d = o.unpack,
    b = Math.max,
    p = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = d(r, "rgb"),
        n = t[0],
        a = t[1],
        f = t[2],
        o = 1 - b(n /= 255, b(a /= 255, f /= 255)),
        u = o < 1 ? 1 / (1 - o) : 0;
        return [(1 - n - o) * u, (1 - a - o) * u, (1 - f - o) * u, o]
    },
    g = o.unpack,
    v = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = (r = g(r, "cmyk"))[0],
        n = r[1],
        a = r[2],
        f = r[3],
        o = 4 < r.length ? r[4] : 1;
        return 1 === f ? [0, 0, 0, o] : [1 <= t ? 0 : 255 * (1 - t) * (1 - f), 1 <= n ? 0 : 255 * (1 - n) * (1 - f), 1 <= a ? 0 : 255 * (1 - a) * (1 - f), o]
    },
    m = o.unpack,
    y = o.type;
    A.prototype.cmyk = function() {
        return p(this._rgb)
    },
    N.cmyk = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["cmyk"])))
    },
    c.format.cmyk = v,
    c.autodetect.push({
        p: 2,
        test: function() {
            for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
            if (r = m(r, "cmyk"), "array" === y(r) && 4 === r.length) return "cmyk"
        }
    });
    var w = o.unpack,
    k = o.last,
    M = function(r) {
        return Math.round(100 * r) / 100
    },
    _ = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = w(r, "hsla"),
        n = k(r) || "lsa";
        return t[0] = M(t[0] || 0),
        t[1] = M(100 * t[1]) + "%",
        t[2] = M(100 * t[2]) + "%",
        "hsla" === n || 3 < t.length && t[3] < 1 ? (t[3] = 3 < t.length ? t[3] : 1, n = "hsla") : t.length = 3,
        n + "(" + t.join(",") + ")"
    },
    x = o.unpack,
    E = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = (r = x(r, "rgba"))[0],
        n = r[1],
        a = r[2];
        t /= 255,
        n /= 255,
        a /= 255;
        var f, o, u = Math.min(t, n, a),
        c = Math.max(t, n, a),
        i = (c + u) / 2;
        return c === u ? (f = 0, o = Number.NaN) : f = i < .5 ? (c - u) / (c + u) : (c - u) / (2 - c - u),
        t == c ? o = (n - a) / (c - u) : n == c ? o = 2 + (a - t) / (c - u) : a == c && (o = 4 + (t - n) / (c - u)),
        (o *= 60) < 0 && (o += 360),
        3 < r.length && void 0 !== r[3] ? [o, f, i, r[3]] : [o, f, i]
    },
    P = o.unpack,
    F = o.last,
    O = Math.round,
    j = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = P(r, "rgba"),
        n = F(r) || "rgb";
        return "hsl" == n.substr(0, 3) ? _(E(t), n) : (t[0] = O(t[0]), t[1] = O(t[1]), t[2] = O(t[2]), ("rgba" === n || 3 < t.length && t[3] < 1) && (t[3] = 3 < t.length ? t[3] : 1, n = "rgba"), n + "(" + t.slice(0, "rgb" === n ? 3 : 4).join(",") + ")")
    },
    G = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    q = /^#?([A-Fa-f0-9]{8})$/,
    L = function(r) {
        if (r.match(G)) {
            4 !== r.length && 7 !== r.length || (r = r.substr(1)),
            3 === r.length && (r = (r = r.split(""))[0] + r[0] + r[1] + r[1] + r[2] + r[2]);
            var e = parseInt(r, 16);
            return [e >> 16, e >> 8 & 255, 255 & e, 1]
        }
        if (r.match(q)) {
            9 === r.length && (r = r.substr(1));
            var t = parseInt(r, 16);
            return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, Math.round((255 & t) / 255 * 100) / 100]
        }
        throw new Error("unknown hex color: " + r)
    },
    R = o.unpack,
    I = Math.round,
    B = function() {
        for (var r, e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n, a, f, o = (e = R(e, "hsl"))[0],
        u = e[1],
        c = e[2];
        if (0 === u) n = a = f = 255 * c;
        else {
            var i = [0, 0, 0],
            l = [0, 0, 0],
            h = c < .5 ? c * (1 + u) : c + u - c * u,
            s = 2 * c - h,
            d = o / 360;
            i[0] = d + 1 / 3,
            i[1] = d,
            i[2] = d - 1 / 3;
            for (var b = 0; b < 3; b++) i[b] < 0 && (i[b] += 1),
            1 < i[b] && (i[b] -= 1),
            6 * i[b] < 1 ? l[b] = s + 6 * (h - s) * i[b] : 2 * i[b] < 1 ? l[b] = h: 3 * i[b] < 2 ? l[b] = s + (h - s) * (2 / 3 - i[b]) * 6 : l[b] = s;
            n = (r = [I(255 * l[0]), I(255 * l[1]), I(255 * l[2])])[0],
            a = r[1],
            f = r[2]
        }
        return 3 < e.length ? [n, a, f, e[3]] : [n, a, f, 1]
    },
    C = {
        white: "#ffffff",
    },
    D = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
    S = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
    $ = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    z = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    T = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    U = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    V = Math.round,
    W = function(r) {
        if (r = r.toLowerCase().trim(), C[r]) return L(C[r]);
        var e;
        if (e = r.match(D)) {
            for (var t = e.slice(1, 4), n = 0; n < 3; n++) t[n] = +t[n];
            return t[3] = 1,
            t
        }
        if (e = r.match(S)) {
            for (var a = e.slice(1, 5), f = 0; f < 4; f++) a[f] = +a[f];
            return a
        }
        if (e = r.match($)) {
            for (var o = e.slice(1, 4), u = 0; u < 3; u++) o[u] = V(2.55 * o[u]);
            return o[3] = 1,
            o
        }
        if (e = r.match(z)) {
            for (var c = e.slice(1, 5), i = 0; i < 3; i++) c[i] = V(2.55 * c[i]);
            return c[3] = +c[3],
            c
        }
        if (e = r.match(T)) {
            var l = e.slice(1, 4);
            l[1] *= .01,
            l[2] *= .01;
            var h = B(l);
            return h[3] = 1,
            h
        }
        if (e = r.match(U)) {
            var s = e.slice(1, 4);
            s[1] *= .01,
            s[2] *= .01;
            var d = B(s);
            return d[3] = +e[4],
            d
        }
    };
    W.test = function(r) {
        return D.test(r) || S.test(r) || $.test(r) || z.test(r) || T.test(r) || U.test(r)
    };
    var X = W,
    H = o.type;
    A.prototype.css = function(r) {
        return j(this._rgb, r)
    },
    N.css = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["css"])))
    },
    c.format.css = X,
    c.autodetect.push({
        p: 5,
        test: function(r) {
            for (var e = [], t = arguments.length - 1; 0 < t--;) e[t] = arguments[t + 1];
            if (!e.length && "string" === H(r) && X.test(r)) return "css"
        }
    });
    var J = o.unpack;
    c.format.gl = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = J(r, "rgba");
        return t[0] *= 255,
        t[1] *= 255,
        t[2] *= 255,
        t
    },
    N.gl = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["gl"])))
    },
    A.prototype.gl = function() {
        var r = this._rgb;
        return [r[0] / 255, r[1] / 255, r[2] / 255, r[3]]
    };
    var K = o.unpack,
    Q = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t, n = K(r, "rgb"),
        a = n[0],
        f = n[1],
        o = n[2],
        u = Math.min(a, f, o),
        c = Math.max(a, f, o),
        i = c - u,
        l = 100 * i / 255,
        h = u / (255 - i) * 100;
        return 0 === i ? t = Number.NaN: (a === c && (t = (f - o) / i), f === c && (t = 2 + (o - a) / i), o === c && (t = 4 + (a - f) / i), (t *= 60) < 0 && (t += 360)),
        [t, l, h]
    },
    Z = o.unpack,
    rr = Math.floor,
    er = function() {
        for (var r, e, t, n, a, f, o = [], u = arguments.length; u--;) o[u] = arguments[u];
        var c, i, l, h = (o = Z(o, "hcg"))[0],
        s = o[1],
        d = o[2];
        d *= 255;
        var b = 255 * s;
        if (0 === s) c = i = l = d;
        else {
            360 === h && (h = 0),
            360 < h && (h -= 360),
            h < 0 && (h += 360);
            var p = rr(h /= 60),
            g = h - p,
            v = d * (1 - s),
            m = v + b * (1 - g),
            y = v + b * g,
            w = v + b;
            switch (p) {
            case 0:
                c = (r = [w, y, v])[0],
                i = r[1],
                l = r[2];
                break;
            case 1:
                c = (e = [m, w, v])[0],
                i = e[1],
                l = e[2];
                break;
            case 2:
                c = (t = [v, w, y])[0],
                i = t[1],
                l = t[2];
                break;
            case 3:
                c = (n = [v, m, w])[0],
                i = n[1],
                l = n[2];
                break;
            case 4:
                c = (a = [y, v, w])[0],
                i = a[1],
                l = a[2];
                break;
            case 5:
                c = (f = [w, v, m])[0],
                i = f[1],
                l = f[2]
            }
        }
        return [c, i, l, 3 < o.length ? o[3] : 1]
    },
    tr = o.unpack,
    nr = o.type;
    A.prototype.hcg = function() {
        return Q(this._rgb)
    },
    N.hcg = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["hcg"])))
    },
    c.format.hcg = er,
    c.autodetect.push({
        p: 1,
        test: function() {
            for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
            if (r = tr(r, "hcg"), "array" === nr(r) && 3 === r.length) return "hcg"
        }
    });
    var ar = o.unpack,
    fr = o.last,
    or = Math.round,
    ur = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = ar(r, "rgba"),
        n = t[0],
        a = t[1],
        f = t[2],
        o = t[3],
        u = fr(r) || "auto";
        void 0 === o && (o = 1),
        "auto" === u && (u = o < 1 ? "rgba": "rgb");
        var c = "000000" + ((n = or(n)) << 16 | (a = or(a)) << 8 | (f = or(f))).toString(16);
        c = c.substr(c.length - 6);
        var i = "0" + or(255 * o).toString(16);
        switch (i = i.substr(i.length - 2), u.toLowerCase()) {
        case "rgba":
            return "#" + c + i;
        case "argb":
            return "#" + i + c;
        default:
            return "#" + c
        }
    },
    cr = o.type;
    A.prototype.hex = function(r) {
        return ur(this._rgb, r)
    },
    N.hex = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["hex"])))
    },
    c.format.hex = L,
    c.autodetect.push({
        p: 4,
        test: function(r) {
            for (var e = [], t = arguments.length - 1; 0 < t--;) e[t] = arguments[t + 1];
            if (!e.length && "string" === cr(r) && [3, 4, 6, 7, 8, 9].includes(r.length)) return "hex"
        }
    });
    var ir = o.unpack,
    lr = o.TWOPI,
    hr = Math.min,
    sr = Math.sqrt,
    dr = Math.acos,
    br = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t, n = ir(r, "rgb"),
        a = n[0],
        f = n[1],
        o = n[2],
        u = hr(a /= 255, f /= 255, o /= 255),
        c = (a + f + o) / 3,
        i = 0 < c ? 1 - u / c: 0;
        return 0 === i ? t = NaN: (t = (a - f + (a - o)) / 2, t /= sr((a - f) * (a - f) + (a - o) * (f - o)), t = dr(t), f < o && (t = lr - t), t /= lr),
        [360 * t, i, c]
    },
    pr = o.unpack,
    gr = o.limit,
    vr = o.TWOPI,
    mr = o.PITHIRD,
    yr = Math.cos,
    wr = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t, n, a, f = (r = pr(r, "hsi"))[0],
        o = r[1],
        u = r[2];
        return isNaN(f) && (f = 0),
        isNaN(o) && (o = 0),
        360 < f && (f -= 360),
        f < 0 && (f += 360),
        (f /= 360) < 1 / 3 ? n = 1 - ((a = (1 - o) / 3) + (t = (1 + o * yr(vr * f) / yr(mr - vr * f)) / 3)) : f < 2 / 3 ? a = 1 - ((t = (1 - o) / 3) + (n = (1 + o * yr(vr * (f -= 1 / 3)) / yr(mr - vr * f)) / 3)) : t = 1 - ((n = (1 - o) / 3) + (a = (1 + o * yr(vr * (f -= 2 / 3)) / yr(mr - vr * f)) / 3)),
        [255 * (t = gr(u * t * 3)), 255 * (n = gr(u * n * 3)), 255 * (a = gr(u * a * 3)), 3 < r.length ? r[3] : 1]
    },
    kr = o.unpack,
    Mr = o.type;
    A.prototype.hsi = function() {
        return br(this._rgb)
    },
    N.hsi = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["hsi"])))
    },
    c.format.hsi = wr,
    c.autodetect.push({
        p: 2,
        test: function() {
            for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
            if (r = kr(r, "hsi"), "array" === Mr(r) && 3 === r.length) return "hsi"
        }
    });
    var Nr = o.unpack,
    _r = o.type;
    A.prototype.hsl = function() {
        return E(this._rgb)
    },
    N.hsl = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["hsl"])))
    },
    c.format.hsl = B,
    c.autodetect.push({
        p: 2,
        test: function() {
            for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
            if (r = Nr(r, "hsl"), "array" === _r(r) && 3 === r.length) return "hsl"
        }
    });
    var xr = o.unpack,
    Ar = Math.min,
    Er = Math.max,
    Pr = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t, n, a, f = (r = xr(r, "rgb"))[0],
        o = r[1],
        u = r[2],
        c = Ar(f, o, u),
        i = Er(f, o, u),
        l = i - c;
        return a = i / 255,
        0 === i ? (t = Number.NaN, n = 0) : (n = l / i, f === i && (t = (o - u) / l), o === i && (t = 2 + (u - f) / l), u === i && (t = 4 + (f - o) / l), (t *= 60) < 0 && (t += 360)),
        [t, n, a]
    },
    Fr = o.unpack,
    Or = Math.floor,
    jr = function() {
        for (var r, e, t, n, a, f, o = [], u = arguments.length; u--;) o[u] = arguments[u];
        var c, i, l, h = (o = Fr(o, "hsv"))[0],
        s = o[1],
        d = o[2];
        if (d *= 255, 0 === s) c = i = l = d;
        else {
            360 === h && (h = 0),
            360 < h && (h -= 360),
            h < 0 && (h += 360);
            var b = Or(h /= 60),
            p = h - b,
            g = d * (1 - s),
            v = d * (1 - s * p),
            m = d * (1 - s * (1 - p));
            switch (b) {
            case 0:
                c = (r = [d, m, g])[0],
                i = r[1],
                l = r[2];
                break;
            case 1:
                c = (e = [v, d, g])[0],
                i = e[1],
                l = e[2];
                break;
            case 2:
                c = (t = [g, d, m])[0],
                i = t[1],
                l = t[2];
                break;
            case 3:
                c = (n = [g, v, d])[0],
                i = n[1],
                l = n[2];
                break;
            case 4:
                c = (a = [m, g, d])[0],
                i = a[1],
                l = a[2];
                break;
            case 5:
                c = (f = [d, g, v])[0],
                i = f[1],
                l = f[2]
            }
        }
        return [c, i, l, 3 < o.length ? o[3] : 1]
    },
    Gr = o.unpack,
    qr = o.type;
    A.prototype.hsv = function() {
        return Pr(this._rgb)
    },
    N.hsv = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["hsv"])))
    },
    c.format.hsv = jr,
    c.autodetect.push({
        p: 2,
        test: function() {
            for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
            if (r = Gr(r, "hsv"), "array" === qr(r) && 3 === r.length) return "hsv"
        }
    });
    var Lr = 18,
    Rr = .95047,
    Ir = 1,
    Br = 1.08883,
    Cr = .137931034,
    Dr = .206896552,
    Sr = .12841855,
    $r = .008856452,
    Yr = o.unpack,
    zr = Math.pow,
    Tr = function(r) {
        return (r /= 255) <= .04045 ? r / 12.92 : zr((r + .055) / 1.055, 2.4)
    },
    Ur = function(r) {
        return $r < r ? zr(r, 1 / 3) : r / Sr + Cr
    },
    Vr = function(r, e, t) {
        return r = Tr(r),
        e = Tr(e),
        t = Tr(t),
        [Ur((.4124564 * r + .3575761 * e + .1804375 * t) / Rr), Ur((.2126729 * r + .7151522 * e + .072175 * t) / Ir), Ur((.0193339 * r + .119192 * e + .9503041 * t) / Br)]
    },
    Wr = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = Yr(r, "rgb"),
        n = t[0],
        a = t[1],
        f = t[2],
        o = Vr(n, a, f),
        u = o[0],
        c = o[1],
        i = 116 * c - 16;
        return [i < 0 ? 0 : i, 500 * (u - c), 200 * (c - o[2])]
    },
    Xr = o.unpack,
    Hr = Math.pow,
    Jr = function(r) {
        return 255 * (r <= .00304 ? 12.92 * r: 1.055 * Hr(r, 1 / 2.4) - .055)
    },
    Kr = function(r) {
        return Dr < r ? r * r * r: Sr * (r - Cr)
    },
    Qr = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t, n, a, f = (r = Xr(r, "lab"))[0],
        o = r[1],
        u = r[2];
        return n = (f + 16) / 116,
        t = isNaN(o) ? n: n + o / 500,
        a = isNaN(u) ? n: n - u / 200,
        n = Ir * Kr(n),
        t = Rr * Kr(t),
        a = Br * Kr(a),
        [Jr(3.2404542 * t - 1.5371385 * n - .4985314 * a), Jr( - .969266 * t + 1.8760108 * n + .041556 * a), Jr(.0556434 * t - .2040259 * n + 1.0572252 * a), 3 < r.length ? r[3] : 1]
    },
    Zr = o.unpack,
    re = o.type;
    A.prototype.lab = function() {
        return Wr(this._rgb)
    },
    N.lab = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["lab"])))
    },
    c.format.lab = Qr,
    c.autodetect.push({
        p: 2,
        test: function() {
            for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
            if (r = Zr(r, "lab"), "array" === re(r) && 3 === r.length) return "lab"
        }
    });
    var ee = o.unpack,
    te = o.RAD2DEG,
    ne = Math.sqrt,
    ae = Math.atan2,
    fe = Math.round,
    oe = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = ee(r, "lab"),
        n = t[0],
        a = t[1],
        f = t[2],
        o = ne(a * a + f * f),
        u = (ae(f, a) * te + 360) % 360;
        return 0 === fe(1e4 * o) && (u = Number.NaN),
        [n, o, u]
    },
    ue = o.unpack,
    ce = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = ue(r, "rgb"),
        n = t[0],
        a = t[1],
        f = t[2],
        o = Wr(n, a, f),
        u = o[0],
        c = o[1],
        i = o[2];
        return oe(u, c, i)
    },
    ie = o.unpack,
    le = o.DEG2RAD,
    he = Math.sin,
    se = Math.cos,
    de = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = ie(r, "lch"),
        n = t[0],
        a = t[1],
        f = t[2];
        return isNaN(f) && (f = 0),
        [n, se(f *= le) * a, he(f) * a]
    },
    be = o.unpack,
    pe = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = (r = be(r, "lch"))[0],
        n = r[1],
        a = r[2],
        f = de(t, n, a),
        o = f[0],
        u = f[1],
        c = f[2],
        i = Qr(o, u, c);
        return [i[0], i[1], i[2], 3 < r.length ? r[3] : 1]
    },
    ge = o.unpack,
    ve = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = ge(r, "hcl").reverse();
        return pe.apply(void 0, t)
    },
    me = o.unpack,
    ye = o.type;
    A.prototype.lch = function() {
        return ce(this._rgb)
    },
    A.prototype.hcl = function() {
        return ce(this._rgb).reverse()
    },
    N.lch = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["lch"])))
    },
    N.hcl = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["hcl"])))
    },
    c.format.lch = pe,
    c.format.hcl = ve,
    ["lch", "hcl"].forEach(function(t) {
        return c.autodetect.push({
            p: 2,
            test: function() {
                for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
                if (r = me(r, t), "array" === ye(r) && 3 === r.length) return t
            }
        })
    });
    var we = o.type;
    A.prototype.name = function() {
        for (var r = ur(this._rgb, "rgb"), e = 0, t = Object.keys(C); e < t.length; e += 1) {
            var n = t[e];
            if (C[n] === r) return n.toLowerCase()
        }
        return r
    },
    c.format.named = function(r) {
        if (r = r.toLowerCase(), C[r]) return L(C[r]);
        throw new Error("unknown color name: " + r)
    },
    c.autodetect.push({
        p: 5,
        test: function(r) {
            for (var e = [], t = arguments.length - 1; 0 < t--;) e[t] = arguments[t + 1];
            if (!e.length && "string" === we(r) && C[r.toLowerCase()]) return "named"
        }
    });
    var ke = o.unpack,
    Me = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = ke(r, "rgb");
        return (t[0] << 16) + (t[1] << 8) + t[2]
    },
    Ne = o.type,
    _e = function(r) {
        if ("number" == Ne(r) && 0 <= r && r <= 16777215) return [r >> 16, r >> 8 & 255, 255 & r, 1];
        throw new Error("unknown num color: " + r)
    },
    xe = o.type;
    A.prototype.num = function() {
        return Me(this._rgb)
    },
    N.num = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["num"])))
    },
    c.format.num = _e,
    c.autodetect.push({
        p: 5,
        test: function() {
            for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
            if (1 === r.length && "number" === xe(r[0]) && 0 <= r[0] && r[0] <= 16777215) return "num"
        }
    });
    var Ae = o.unpack,
    Ee = o.type,
    Pe = Math.round;
    A.prototype.rgb = function(r) {
        return void 0 === r && (r = !0),
        !1 === r ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Pe)
    },
    A.prototype.rgba = function(t) {
        return void 0 === t && (t = !0),
        this._rgb.slice(0, 4).map(function(r, e) {
            return e < 3 ? !1 === t ? r: Pe(r) : r
        })
    },
    N.rgb = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["rgb"])))
    },
    c.format.rgb = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        var t = Ae(r, "rgba");
        return void 0 === t[3] && (t[3] = 1),
        t
    },
    c.autodetect.push({
        p: 3,
        test: function() {
            for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
            if (r = Ae(r, "rgba"), "array" === Ee(r) && (3 === r.length || 4 === r.length && "number" == Ee(r[3]) && 0 <= r[3] && r[3] <= 1)) return "rgb"
        }
    });
    var Fe = Math.log,
    Oe = function(r) {
        var e, t, n, a = r / 100;
        return n = a < 66 ? (e = 255, t = -155.25485562709179 - .44596950469579133 * (t = a - 2) + 104.49216199393888 * Fe(t), a < 20 ? 0 : .8274096064007395 * (n = a - 10) - 254.76935184120902 + 115.67994401066147 * Fe(n)) : (e = 351.97690566805693 + .114206453784165 * (e = a - 55) - 40.25366309332127 * Fe(e), t = 325.4494125711974 + .07943456536662342 * (t = a - 50) - 28.0852963507957 * Fe(t), 255),
        [e, t, n, 1]
    },
    je = o.unpack,
    Ge = Math.round,
    qe = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        for (var t, n = je(r, "rgb"), a = n[0], f = n[2], o = 1e3, u = 4e4;.4 < u - o;) {
            var c = Oe(t = .5 * (u + o));
            c[2] / c[0] >= f / a ? u = t: o = t
        }
        return Ge(t)
    };
    A.prototype.temp = A.prototype.kelvin = A.prototype.temperature = function() {
        return qe(this._rgb)
    },
    N.temp = N.kelvin = N.temperature = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        return new(Function.prototype.bind.apply(A, [null].concat(r, ["temp"])))
    },
    c.format.temp = c.format.kelvin = c.format.temperature = Oe;
    var Le = o.type;
    A.prototype.alpha = function(r, e) {
        return void 0 === e && (e = !1),
        void 0 !== r && "number" === Le(r) ? e ? (this._rgb[3] = r, this) : new A([this._rgb[0], this._rgb[1], this._rgb[2], r], "rgb") : this._rgb[3]
    },
    A.prototype.clipped = function() {
        return this._rgb._clipped || !1
    },
    A.prototype.darken = function(r) {
        void 0 === r && (r = 1);
        var e = this.lab();
        return e[0] -= Lr * r,
        new A(e, "lab").alpha(this.alpha(), !0)
    },
    A.prototype.brighten = function(r) {
        return void 0 === r && (r = 1),
        this.darken( - r)
    },
    A.prototype.darker = A.prototype.darken,
    A.prototype.brighter = A.prototype.brighten,
    A.prototype.get = function(r) {
        var e = r.split("."),
        t = e[0],
        n = e[1],
        a = this[t]();
        if (n) {
            var f = t.indexOf(n);
            if ( - 1 < f) return a[f];
            throw new Error("unknown channel " + n + " in mode " + t)
        }
        return a
    };
    var Re = o.type,
    Ie = Math.pow;
    A.prototype.luminance = function(a) {
        if (void 0 === a || "number" !== Re(a)) return Be.apply(void 0, this._rgb.slice(0, 3));
        if (0 === a) return new A([0, 0, 0, this._rgb[3]], "rgb");
        if (1 === a) return new A([255, 255, 255, this._rgb[3]], "rgb");
        var r = this.luminance(),
        f = 20,
        o = function(r, e) {
            var t = r.interpolate(e, .5, "rgb"),
            n = t.luminance();
            return Math.abs(a - n) < 1e-7 || !f--?t: a < n ? o(r, t) : o(t, e)
        },
        e = (a < r ? o(new A([0, 0, 0]), this) : o(this, new A([255, 255, 255]))).rgb();
        return new A(e.concat([this._rgb[3]]))
    };
    var Be = function(r, e, t) {
        return.2126 * (r = Ce(r)) + .7152 * (e = Ce(e)) + .0722 * (t = Ce(t))
    },
    Ce = function(r) {
        return (r /= 255) <= .03928 ? r / 12.92 : Ie((r + .055) / 1.055, 2.4)
    },
    De = {},
    Se = o.type,
    $e = function(r, e, t) {
        void 0 === t && (t = .5);
        for (var n = [], a = arguments.length - 3; 0 < a--;) n[a] = arguments[a + 3];
        var f = n[0] || "lrgb";
        if (De[f] || n.length || (f = Object.keys(De)[0]), !De[f]) throw new Error("interpolation mode " + f + " is not defined");
        return "object" !== Se(r) && (r = new A(r)),
        "object" !== Se(e) && (e = new A(e)),
        De[f](r, e, t).alpha(r.alpha() + t * (e.alpha() - r.alpha()))
    };
    A.prototype.mix = A.prototype.interpolate = function(r, e) {
        void 0 === e && (e = .5);
        for (var t = [], n = arguments.length - 2; 0 < n--;) t[n] = arguments[n + 2];
        return $e.apply(void 0, [this, r, e].concat(t))
    },
    A.prototype.premultiply = function(r) {
        void 0 === r && (r = !1);
        var e = this._rgb,
        t = e[3];
        return r ? (this._rgb = [e[0] * t, e[1] * t, e[2] * t, t], this) : new A([e[0] * t, e[1] * t, e[2] * t, t], "rgb")
    },
    A.prototype.saturate = function(r) {
        void 0 === r && (r = 1);
        var e = this.lch();
        return e[1] += Lr * r,
        e[1] < 0 && (e[1] = 0),
        new A(e, "lch").alpha(this.alpha(), !0)
    },
    A.prototype.desaturate = function(r) {
        return void 0 === r && (r = 1),
        this.saturate( - r)
    };
    var Ye = o.type;
    A.prototype.set = function(r, e, t) {
        void 0 === t && (t = !1);
        var n = r.split("."),
        a = n[0],
        f = n[1],
        o = this[a]();
        if (f) {
            var u = a.indexOf(f);
            if ( - 1 < u) {
                if ("string" == Ye(e)) switch (e.charAt(0)) {
                case "+":
                case "-":
                    o[u] += +e;
                    break;
                case "*":
                    o[u] *= +e.substr(1);
                    break;
                case "/":
                    o[u] /= +e.substr(1);
                    break;
                default:
                    o[u] = +e
                } else {
                    if ("number" !== Ye(e)) throw new Error("unsupported value for Color.set");
                    o[u] = e
                }
                var c = new A(o, a);
                return t ? (this._rgb = c._rgb, this) : c
            }
            throw new Error("unknown channel " + f + " in mode " + a)
        }
        return o
    };
    De.rgb = function(r, e, t) {
        var n = r._rgb,
        a = e._rgb;
        return new A(n[0] + t * (a[0] - n[0]), n[1] + t * (a[1] - n[1]), n[2] + t * (a[2] - n[2]), "rgb")
    };
    var ze = Math.sqrt,
    Te = Math.pow;
    De.lrgb = function(r, e, t) {
        var n = r._rgb,
        a = n[0],
        f = n[1],
        o = n[2],
        u = e._rgb,
        c = u[0],
        i = u[1],
        l = u[2];
        return new A(ze(Te(a, 2) * (1 - t) + Te(c, 2) * t), ze(Te(f, 2) * (1 - t) + Te(i, 2) * t), ze(Te(o, 2) * (1 - t) + Te(l, 2) * t), "rgb")
    };
    De.lab = function(r, e, t) {
        var n = r.lab(),
        a = e.lab();
        return new A(n[0] + t * (a[0] - n[0]), n[1] + t * (a[1] - n[1]), n[2] + t * (a[2] - n[2]), "lab")
    };
    var Ue = function(r, e, t, n) {
        var a, f, o, u, c, i, l, h, s, d, b, p;
        return "hsl" === n ? (o = r.hsl(), u = e.hsl()) : "hsv" === n ? (o = r.hsv(), u = e.hsv()) : "hcg" === n ? (o = r.hcg(), u = e.hcg()) : "hsi" === n ? (o = r.hsi(), u = e.hsi()) : "lch" !== n && "hcl" !== n || (n = "hcl", o = r.hcl(), u = e.hcl()),
        "h" === n.substr(0, 1) && (c = (a = o)[0], l = a[1], s = a[2], i = (f = u)[0], h = f[1], d = f[2]),
        isNaN(c) || isNaN(i) ? isNaN(c) ? isNaN(i) ? p = Number.NaN: (p = i, 1 != s && 0 != s || "hsv" == n || (b = h)) : (p = c, 1 != d && 0 != d || "hsv" == n || (b = l)) : p = c + t * (c < i && 180 < i - c ? i - (c + 360) : i < c && 180 < c - i ? i + 360 - c: i - c),
        void 0 === b && (b = l + t * (h - l)),
        new A([p, b, s + t * (d - s)], n)
    },
    Ve = function(r, e, t) {
        return Ue(r, e, t, "lch")
    };
    De.lch = Ve,
    De.hcl = Ve;
    De.num = function(r, e, t) {
        var n = r.num(),
        a = e.num();
        return new A(n + t * (a - n), "num")
    };
    De.hcg = function(r, e, t) {
        return Ue(r, e, t, "hcg")
    };
    De.hsi = function(r, e, t) {
        return Ue(r, e, t, "hsi")
    };
    De.hsl = function(r, e, t) {
        return Ue(r, e, t, "hsl")
    };
    De.hsv = function(r, e, t) {
        return Ue(r, e, t, "hsv")
    };
    var We = o.clip_rgb,
    Xe = Math.pow,
    He = Math.sqrt,
    Je = Math.PI,
    Ke = Math.cos,
    Qe = Math.sin,
    Ze = Math.atan2,
    rt = function(r) {
        for (var e = 1 / r.length,
        t = [0, 0, 0, 0], n = 0, a = r; n < a.length; n += 1) {
            var f = a[n]._rgb;
            t[0] += Xe(f[0], 2) * e,
            t[1] += Xe(f[1], 2) * e,
            t[2] += Xe(f[2], 2) * e,
            t[3] += f[3] * e
        }
        return t[0] = He(t[0]),
        t[1] = He(t[1]),
        t[2] = He(t[2]),
        .9999999 < t[3] && (t[3] = 1),
        new A(We(t))
    },
    et = o.type,
    tt = Math.pow,
    nt = function(i) {
        var u = "rgb",
        c = N("#ccc"),
        e = 0,
        l = [0, 1],
        h = [],
        s = [0, 0],
        d = !1,
        b = [],
        t = !1,
        p = 0,
        g = 1,
        n = !1,
        v = {},
        m = !0,
        y = 1,
        a = function(r) {
            if ((r = r || ["#fff", "#000"]) && "string" === et(r) && N.brewer && N.brewer[r.toLowerCase()] && (r = N.brewer[r.toLowerCase()]), "array" === et(r)) {
                1 === r.length && (r = [r[0], r[0]]),
                r = r.slice(0);
                for (var e = 0; e < r.length; e++) r[e] = N(r[e]);
                for (var t = h.length = 0; t < r.length; t++) h.push(t / (r.length - 1))
            }
            return f(),
            b = r
        },
        w = function(r) {
            return r
        },
        k = function(r, e) {
            var t, n;
            if (null == e && (e = !1), isNaN(r) || null === r) return c;
            e ? n = r: n = d && 2 < d.length ?
            function(r) {
                if (null == d) return 0;
                for (var e = d.length - 1,
                t = 0; t < e && r >= d[t];) t++;
                return t - 1
            } (r) / (d.length - 2) : g !== p ? (r - p) / (g - p) : 1;
            e || (n = w(n)),
            1 !== y && (n = tt(n, y)),
            n = s[0] + n * (1 - s[0] - s[1]),
            n = Math.min(1, Math.max(0, n));
            var a = Math.floor(1e4 * n);
            if (m && v[a]) t = v[a];
            else {
                if ("array" === et(b)) for (var f = 0; f < h.length; f++) {
                    var o = h[f];
                    if (n <= o) {
                        t = b[f];
                        break
                    }
                    if (o <= n && f === h.length - 1) {
                        t = b[f];
                        break
                    }
                    if (o < n && n < h[f + 1]) {
                        n = (n - o) / (h[f + 1] - o),
                        t = N.interpolate(b[f], b[f + 1], n, u);
                        break
                    }
                } else "function" === et(b) && (t = b(n));
                m && (v[a] = t)
            }
            return t
        },
        f = function() {
            return v = {}
        };
        a(i);
        var M = function(r) {
            var e = N(k(r));
            return t && e[t] ? e[t]() : e
        };
        return M.classes = function(r) {
            if (null == r) return d;
            if ("array" === et(r)) l = [(d = r)[0], r[r.length - 1]];
            else {
                var e = N.analyze(l);
                d = 0 === r ? [e.min, e.max] : N.limits(e, "e", r)
            }
            return M
        },
        M.domain = function(r) {
            if (!arguments.length) return l;
            p = r[0],
            g = r[r.length - 1],
            h = [];
            var e = b.length;
            if (r.length === e && p !== g) for (var t = 0,
            n = Array.from(r); t < n.length; t += 1) {
                var a = n[t];
                h.push((a - p) / (g - p))
            } else for (var f = 0; f < e; f++) h.push(f / (e - 1));
            return l = [p, g],
            M
        },
        M.mode = function(r) {
            return arguments.length ? (u = r, f(), M) : u
        },
        M.range = function(r, e) {
            return a(r),
            M
        },
        M.out = function(r) {
            return t = r,
            M
        },
        M.spread = function(r) {
            return arguments.length ? (e = r, M) : e
        },
        M.correctLightness = function(r) {
            return null == r && (r = !0),
            n = r,
            f(),
            w = n ?
            function(r) {
                for (var e = k(0, !0).lab()[0], t = k(1, !0).lab()[0], n = t < e, a = k(r, !0).lab()[0], f = e + (t - e) * r, o = a - f, u = 0, c = 1, i = 20;.01 < Math.abs(o) && 0 < i--;) n && (o *= -1),
                r += o < 0 ? .5 * (c - (u = r)) : .5 * (u - (c = r)),
                a = k(r, !0).lab()[0],
                o = a - f;
                return r
            }: function(r) {
                return r
            },
            M
        },
        M.padding = function(r) {
            return null != r ? ("number" === et(r) && (r = [r, r]), s = r, M) : s
        },
        M.colors = function(e, t) {
            arguments.length < 2 && (t = "hex");
            var r = [];
            if (0 === arguments.length) r = b.slice(0);
            else if (1 === e) r = [M(.5)];
            else if (1 < e) {
                var n = l[0],
                a = l[1] - n;
                r = function(r, e, t) {
                    for (var n = [], a = r < e, f = t ? a ? e + 1 : e - 1 : e, o = r; a ? o < f: f < o; a ? o++:o--) n.push(o);
                    return n
                } (0, e, !1).map(function(r) {
                    return M(n + r / (e - 1) * a)
                })
            } else {
                i = [];
                var f = [];
                if (d && 2 < d.length) for (var o = 1,
                u = d.length,
                c = 1 <= u; c ? o < u: u < o; c ? o++:o--) f.push(.5 * (d[o - 1] + d[o]));
                else f = l;
                r = f.map(function(r) {
                    return M(r)
                })
            }
            return N[t] && (r = r.map(function(r) {
                return r[t]()
            })),
            r
        },
        M.cache = function(r) {
            return null != r ? (m = r, M) : m
        },
        M.gamma = function(r) {
            return null != r ? (y = r, M) : y
        },
        M.nodata = function(r) {
            return null != r ? (c = N(r), M) : c
        },
        M
    };
    var at = function(r) {
        var e, t, n, a, f, o, u;
        if (2 === (r = r.map(function(r) {
            return new A(r)
        })).length) e = r.map(function(r) {
            return r.lab()
        }),
        f = e[0],
        o = e[1],
        a = function(e) {
            var r = [0, 1, 2].map(function(r) {
                return f[r] + e * (o[r] - f[r])
            });
            return new A(r, "lab")
        };
        else if (3 === r.length) t = r.map(function(r) {
            return r.lab()
        }),
        f = t[0],
        o = t[1],
        u = t[2],
        a = function(e) {
            var r = [0, 1, 2].map(function(r) {
                return (1 - e) * (1 - e) * f[r] + 2 * (1 - e) * e * o[r] + e * e * u[r]
            });
            return new A(r, "lab")
        };
        else if (4 === r.length) {
            var c;
            n = r.map(function(r) {
                return r.lab()
            }),
            f = n[0],
            o = n[1],
            u = n[2],
            c = n[3],
            a = function(e) {
                var r = [0, 1, 2].map(function(r) {
                    return (1 - e) * (1 - e) * (1 - e) * f[r] + 3 * (1 - e) * (1 - e) * e * o[r] + 3 * (1 - e) * e * e * u[r] + e * e * e * c[r]
                });
                return new A(r, "lab")
            }
        } else if (5 === r.length) {
            var i = at(r.slice(0, 3)),
            l = at(r.slice(2, 5));
            a = function(r) {
                return r < .5 ? i(2 * r) : l(2 * (r - .5))
            }
        }
        return a
    },
    ft = function(r, e, t) {
        if (!ft[t]) throw new Error("unknown blend mode " + t);
        return ft[t](r, e)
    },
    ot = function(a) {
        return function(r, e) {
            var t = N(e).rgb(),
            n = N(r).rgb();
            return N.rgb(a(t, n))
        }
    },
    ut = function(n) {
        return function(r, e) {
            var t = [];
            return t[0] = n(r[0], e[0]),
            t[1] = n(r[1], e[1]),
            t[2] = n(r[2], e[2]),
            t
        }
    };
    ft.normal = ot(ut(function(r) {
        return r
    })),
    ft.multiply = ot(ut(function(r, e) {
        return r * e / 255
    })),
    ft.screen = ot(ut(function(r, e) {
        return 255 * (1 - (1 - r / 255) * (1 - e / 255))
    })),
    ft.overlay = ot(ut(function(r, e) {
        return e < 128 ? 2 * r * e / 255 : 255 * (1 - 2 * (1 - r / 255) * (1 - e / 255))
    })),
    ft.darken = ot(ut(function(r, e) {
        return e < r ? e: r
    })),
    ft.lighten = ot(ut(function(r, e) {
        return e < r ? r: e
    })),
    ft.dodge = ot(ut(function(r, e) {
        return 255 === r ? 255 : 255 < (r = e / 255 * 255 / (1 - r / 255)) ? 255 : r
    })),
    ft.burn = ot(ut(function(r, e) {
        return 255 * (1 - (1 - e / 255) / (r / 255))
    }));
    for (var ct = ft,
    it = o.type,
    lt = o.clip_rgb,
    ht = o.TWOPI,
    st = Math.pow,
    dt = Math.sin,
    bt = Math.cos,
    pt = Math.floor,
    gt = Math.random,
    vt = Math.log,
    mt = Math.pow,
    yt = Math.floor,
    wt = Math.abs,
    kt = function(r, e) {
        void 0 === e && (e = null);
        var t = {
            min: Number.MAX_VALUE,
            max: -1 * Number.MAX_VALUE,
            sum: 0,
            values: [],
            count: 0
        };
        return "object" === Y(r) && (r = Object.values(r)),
        r.forEach(function(r) {
            e && "object" === Y(r) && (r = r[e]),
            null == r || isNaN(r) || (t.values.push(r), t.sum += r, r < t.min && (t.min = r), r > t.max && (t.max = r), t.count += 1)
        }),
        t.domain = [t.min, t.max],
        t.limits = function(r, e) {
            return Mt(t, r, e)
        },
        t
    },
    Mt = function(r, e, t) {
        void 0 === e && (e = "equal"),
        void 0 === t && (t = 7),
        "array" == Y(r) && (r = kt(r));
        var n = r.min,
        a = r.max,
        f = r.values.sort(function(r, e) {
            return r - e
        });
        if (1 === t) return [n, a];
        var o = [];
        if ("c" === e.substr(0, 1) && (o.push(n), o.push(a)), "e" === e.substr(0, 1)) {
            o.push(n);
            for (var u = 1; u < t; u++) o.push(n + u / t * (a - n));
            o.push(a)
        } else if ("l" === e.substr(0, 1)) {
            if (n <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
            var c = Math.LOG10E * vt(n),
            i = Math.LOG10E * vt(a);
            o.push(n);
            for (var l = 1; l < t; l++) o.push(mt(10, c + l / t * (i - c)));
            o.push(a)
        } else if ("q" === e.substr(0, 1)) {
            o.push(n);
            for (var h = 1; h < t; h++) {
                var s = (f.length - 1) * h / t,
                d = yt(s);
                if (d === s) o.push(f[d]);
                else {
                    var b = s - d;
                    o.push(f[d] * (1 - b) + f[d + 1] * b)
                }
            }
            o.push(a)
        } else if ("k" === e.substr(0, 1)) {
            var p, g = f.length,
            v = new Array(g),
            m = new Array(t),
            y = !0,
            w = 0,
            k = null; (k = []).push(n);
            for (var M = 1; M < t; M++) k.push(n + M / t * (a - n));
            for (k.push(a); y;) {
                for (var N = 0; N < t; N++) m[N] = 0;
                for (var _ = 0; _ < g; _++) for (var x = f[_], A = Number.MAX_VALUE, E = void 0, P = 0; P < t; P++) {
                    var F = wt(k[P] - x);
                    F < A && (A = F, E = P),
                    m[E]++,
                    v[_] = E
                }
                for (var O = new Array(t), j = 0; j < t; j++) O[j] = null;
                for (var G = 0; G < g; G++) null === O[p = v[G]] ? O[p] = f[G] : O[p] += f[G];
                for (var q = 0; q < t; q++) O[q] *= 1 / m[q];
                y = !1;
                for (var L = 0; L < t; L++) if (O[L] !== k[L]) {
                    y = !0;
                    break
                }
                k = O,
                200 < ++w && (y = !1)
            }
            for (var R = {},
            I = 0; I < t; I++) R[I] = [];
            for (var B = 0; B < g; B++) R[p = v[B]].push(f[B]);
            for (var C = [], D = 0; D < t; D++) C.push(R[D][0]),
            C.push(R[D][R[D].length - 1]);
            C = C.sort(function(r, e) {
                return r - e
            }),
            o.push(C[0]);
            for (var S = 1; S < C.length; S += 2) {
                var $ = C[S];
                isNaN($) || -1 !== o.indexOf($) || o.push($)
            }
        }
        return o
    },
    Nt = {
        analyze: kt,
        limits: Mt
    },
    _t = Math.sqrt, xt = Math.atan2, At = Math.abs, Et = Math.cos, Pt = Math.PI, Ft = {
        cool: function() {
            return nt([N.hsl(180, 1, .9), N.hsl(250, .7, .4)])
        },
        hot: function() {
            return nt(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
        }
    },
    Ot = {
        OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
        PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
        BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
        Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
        BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
        YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
        YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
        Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
        RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
        Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
        YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
        Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
        GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
        Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
        YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
        PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
        Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
        PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
        Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
        Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
        RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
        RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
        PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
        PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
        RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
        BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
        RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
        PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
        Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
        Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
        Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
        Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
        Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
        Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
        Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
        Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    },
    jt = 0, Gt = Object.keys(Ot); jt < Gt.length; jt += 1) {
        var qt = Gt[jt];
        Ot[qt.toLowerCase()] = Ot[qt]
    }
    var Lt = Ot;
    return N.average = function(r, a) {
        void 0 === a && (a = "lrgb");
        var e = r.length;
        if (r = r.map(function(r) {
            return new A(r)
        }), "lrgb" === a) return rt(r);
        for (var t = r.shift(), f = t.get(a), o = [], u = 0, c = 0, n = 0; n < f.length; n++) if (f[n] = f[n] || 0, o.push(isNaN(f[n]) ? 0 : 1), "h" === a.charAt(n) && !isNaN(f[n])) {
            var i = f[n] / 180 * Je;
            u += Ke(i),
            c += Qe(i)
        }
        var l = t.alpha();
        r.forEach(function(r) {
            var e = r.get(a);
            l += r.alpha();
            for (var t = 0; t < f.length; t++) if (!isNaN(e[t])) if (o[t]++, "h" === a.charAt(t)) {
                var n = e[t] / 180 * Je;
                u += Ke(n),
                c += Qe(n)
            } else f[t] += e[t]
        });
        for (var h = 0; h < f.length; h++) if ("h" === a.charAt(h)) {
            for (var s = Ze(c / o[h], u / o[h]) / Je * 180; s < 0;) s += 360;
            for (; 360 <= s;) s -= 360;
            f[h] = s
        } else f[h] = f[h] / o[h];
        return l /= e,
        new A(f, a).alpha(.99999 < l ? 1 : l, !0)
    },
    N.bezier = function(r) {
        var e = at(r);
        return e.scale = function() {
            return nt(e)
        },
        e
    },
    N.blend = ct,
    N.cubehelix = function(o, u, c, i, l) {
        void 0 === o && (o = 300),
        void 0 === u && (u = -1.5),
        void 0 === c && (c = 1),
        void 0 === i && (i = 1),
        void 0 === l && (l = [0, 1]);
        var h, s = 0;
        "array" === it(l) ? h = l[1] - l[0] : (h = 0, l = [l, l]);
        var e = function(r) {
            var e = ht * ((o + 120) / 360 + u * r),
            t = st(l[0] + h * r, i),
            n = (0 !== s ? c[0] + r * s: c) * t * (1 - t) / 2,
            a = bt(e),
            f = dt(e);
            return N(lt([255 * (t + n * ( - .14861 * a + 1.78277 * f)), 255 * (t + n * ( - .29227 * a - .90649 * f)), 255 * (t + n * (1.97294 * a)), 1]))
        };
        return e.start = function(r) {
            return null == r ? o: (o = r, e)
        },
        e.rotations = function(r) {
            return null == r ? u: (u = r, e)
        },
        e.gamma = function(r) {
            return null == r ? i: (i = r, e)
        },
        e.hue = function(r) {
            return null == r ? c: ("array" === it(c = r) ? 0 == (s = c[1] - c[0]) && (c = c[1]) : s = 0, e)
        },
        e.lightness = function(r) {
            return null == r ? l: (h = "array" === it(r) ? (l = r)[1] - r[0] : (l = [r, r], 0), e)
        },
        e.scale = function() {
            return N.scale(e)
        },
        e.hue(c),
        e
    },
    N.mix = N.interpolate = $e,
    N.random = function() {
        for (var r = "#",
        e = 0; e < 6; e++) r += "0123456789abcdef".charAt(pt(16 * gt()));
        return new A(r, "hex")
    },
    N.scale = nt,
    N.analyze = Nt.analyze,
    N.contrast = function(r, e) {
        r = new A(r),
        e = new A(e);
        var t = r.luminance(),
        n = e.luminance();
        return n < t ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
    },
    N.deltaE = function(r, e, t, n) {
        void 0 === t && (t = 1),
        void 0 === n && (n = 1),
        r = new A(r),
        e = new A(e);
        for (var a = Array.from(r.lab()), f = a[0], o = a[1], u = a[2], c = Array.from(e.lab()), i = c[0], l = c[1], h = c[2], s = _t(o * o + u * u), d = _t(l * l + h * h), b = f < 16 ? .511 : .040975 * f / (1 + .01765 * f), p = .0638 * s / (1 + .0131 * s) + .638, g = s < 1e-6 ? 0 : 180 * xt(u, o) / Pt; g < 0;) g += 360;
        for (; 360 <= g;) g -= 360;
        var v = 164 <= g && g <= 345 ? .56 + At(.2 * Et(Pt * (g + 168) / 180)) : .36 + At(.4 * Et(Pt * (g + 35) / 180)),
        m = s * s * s * s,
        y = _t(m / (m + 1900)),
        w = p * (y * v + 1 - y),
        k = s - d,
        M = o - l,
        N = u - h,
        _ = (f - i) / (t * b),
        x = k / (n * p);
        return _t(_ * _ + x * x + (M * M + N * N - k * k) / (w * w))
    },
    N.distance = function(r, e, t) {
        void 0 === t && (t = "lab"),
        r = new A(r),
        e = new A(e);
        var n = r.get(t),
        a = e.get(t),
        f = 0;
        for (var o in n) {
            var u = (n[o] || 0) - (a[o] || 0);
            f += u * u
        }
        return Math.sqrt(f)
    },
    N.limits = Nt.limits,
    N.valid = function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        try {
            return new(Function.prototype.bind.apply(A, [null].concat(r))),
            !0
        } catch(r) {
            return ! 1
        }
    },
    N.scales = Ft,
    N.colors = C,
    N.brewer = Lt,
    N
});