"use strict";
(() => {
    var ho = Object.create;
    var Tr = Object.defineProperty;
    var vo = Object.getOwnPropertyDescriptor;
    var xo = Object.getOwnPropertyNames,
        Kr = Object.getOwnPropertySymbols,
        bo = Object.getPrototypeOf,
        Yr = Object.prototype.hasOwnProperty,
        yo = Object.prototype.propertyIsEnumerable;
    var Jr = (e, r, t) => r in e ? Tr(e, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : e[r] = t,
        Ke = (e, r) => {
            for (var t in r || (r = {})) Yr.call(r, t) && Jr(e, t, r[t]);
            if (Kr)
                for (var t of Kr(r)) yo.call(r, t) && Jr(e, t, r[t]);
            return e
        };
    var Te = (e, r) => () => (r || e((r = {
        exports: {}
    }).exports, r), r.exports);
    var go = (e, r, t, o) => {
        if (r && typeof r == "object" || typeof r == "function")
            for (let n of xo(r)) !Yr.call(e, n) && n !== t && Tr(e, n, {
                get: () => r[n],
                enumerable: !(o = vo(r, n)) || o.enumerable
            });
        return e
    };
    var Gr = (e, r, t) => (t = e != null ? ho(bo(e)) : {}, go(r || !e || !e.__esModule ? Tr(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
    var qe = Te(X => {
        (function() {
            var e, r, t, o, n, i, f, s, u, a, c, p, l, v, d, m, x, w, E, R;
            R = 150, a = 20, E = 150, u = .75, X.score = function(h, b, S) {
                var T, y, g, _;
                return y = S.preparedQuery, T = S.allowErrors, T || n(h, y.core_lw, y.core_up) ? (_ = h.toLowerCase(), g = r(h, _, y), Math.ceil(g)) : 0
            }, X.isMatch = n = function(h, b, S) {
                var T, y, g, _, F, U, M;
                if (g = h.length, _ = b.length, !g || _ > g) return !1;
                for (T = -1, y = -1; ++y < _;) {
                    for (F = b.charCodeAt(y), U = S.charCodeAt(y); ++T < g && (M = h.charCodeAt(T), !(M === F || M === U)););
                    if (T === g) return !1
                }
                return !0
            }, X.computeScore = r = function(h, b, S) {
                var T, y, g, _, F, U, M, H, I, j, V, re, q, ae, de, te, ve, fe, wr, Oe, Qe, Sr, Er, Or;
                if (de = S.query, te = S.query_lw, j = h.length, q = de.length, T = c(h, b, de, te), y = T.score, T.count === q) return v(q, j, y, T.pos);
                if (ae = b.indexOf(te), ae > -1) return d(h, b, de, te, ae, q, j);
                for (Oe = new Array(q), F = new Array(q), Or = w(q, j), V = Math.ceil(u * q) + 5, re = V, M = !0, I = -1; ++I < q;) Oe[I] = 0, F[I] = 0;
                for (H = -1; ++H < j;) {
                    if (Sr = b[H], !Sr.charCodeAt(0) in S.charCodes) {
                        if (M) {
                            for (I = -1; ++I < q;) F[I] = 0;
                            M = !1
                        }
                        continue
                    }
                    for (fe = 0, wr = 0, _ = 0, ve = !0, M = !0, I = -1; ++I < q;) {
                        if (Qe = Oe[I], Qe > fe && (fe = Qe), U = 0, te[I] === Sr)
                            if (Er = s(H, h, b), U = _ > 0 ? _ : l(h, b, de, te, H, I, Er), g = wr + p(H, I, Er, y, U), g > fe) fe = g, re = V;
                            else {
                                if (ve && --re <= 0) return Math.max(fe, Oe[q - 1]) * Or;
                                ve = !1
                            } wr = Qe, _ = F[I], F[I] = U, Oe[I] = fe
                    }
                }
                return fe = Oe[q - 1], fe * Or
            }, X.isWordStart = s = function(h, b, S) {
                var T, y;
                return h === 0 ? !0 : (T = b[h], y = b[h - 1], i(y) || T !== S[h] && y === S[h - 1])
            }, X.isWordEnd = f = function(h, b, S, T) {
                var y, g;
                return h === T - 1 ? !0 : (y = b[h], g = b[h + 1], i(g) || y === S[h] && g !== S[h + 1])
            }, i = function(h) {
                return h === " " || h === "." || h === "-" || h === "_" || h === "/" || h === "\\"
            }, x = function(h) {
                var b;
                return h < a ? (b = a - h, 100 + b * b) : Math.max(100 + a - h, 0)
            }, X.scoreSize = w = function(h, b) {
                return E / (E + Math.abs(b - h))
            }, v = function(h, b, S, T) {
                return 2 * h * (R * S + x(T)) * w(h, b)
            }, X.scorePattern = m = function(h, b, S, T, y) {
                var g, _;
                return _ = h, g = 6, S === h && (g += 2), T && (g += 3), y && (g += 1), h === b && (T && (S === b ? _ += 2 : _ += 1), y && (g += 1)), S + _ * (_ + g)
            }, X.scoreCharacter = p = function(h, b, S, T, y) {
                var g;
                return g = x(h), S ? g + R * ((T > y ? T : y) + 10) : g + R * y
            }, X.scoreConsecutives = l = function(h, b, S, T, y, g, _) {
                var F, U, M, H, I, j, V;
                for (U = h.length, H = S.length, M = U - y, I = H - g, F = M < I ? M : I, j = 0, V = 0, S[g] === h[y] && j++; ++V < F && T[++g] === b[++y];) S[g] === h[y] && j++;
                return V < F && y--, V === 1 ? 1 + 2 * j : m(V, H, j, _, f(y, h, b, U))
            }, X.scoreExactMatch = d = function(h, b, S, T, y, g, _) {
                var F, U, M, H, I;
                for (I = s(y, h, b), I || (M = b.indexOf(T, y + 1), M > -1 && (I = s(M, h, b), I && (y = M))), U = -1, H = 0; ++U < g;) S[y + U] === h[U] && H++;
                return F = f(y + g - 1, h, b, _), v(g, _, m(g, g, H, I, F), y)
            }, e = function() {
                function h(b, S, T) {
                    this.score = b, this.pos = S, this.count = T
                }
                return h
            }(), t = new e(0, .1, 0), X.scoreAcronyms = c = function(h, b, S, T) {
                var y, g, _, F, U, M, H, I, j, V, re;
                if (U = h.length, M = S.length, !(U > 1 && M > 1)) return t;
                for (y = 0, V = 0, re = 0, I = 0, _ = -1, F = -1; ++F < M;) {
                    if (H = T[F], i(H))
                        if (_ = b.indexOf(H, _ + 1), _ > -1) {
                            V++;
                            continue
                        } else break;
                    for (; ++_ < U;)
                        if (H === b[_] && s(_, h, b)) {
                            S[F] === h[_] && I++, re += _, y++;
                            break
                        } if (_ === U) break
                }
                return y < 2 ? t : (g = y === M ? o(h, b, S, y) : !1, j = m(y, M, I, !0, g), new e(j, re / y, y + V))
            }, o = function(h, b, S, T) {
                var y, g, _, F;
                if (_ = h.length, F = S.length, y = 0, _ > 12 * F) return !1;
                for (g = -1; ++g < _;)
                    if (s(g, h, b) && ++y > T) return !1;
                return !0
            }
        }).call(X)
    });
    var yr = Te(De => {
        (function() {
            var e, r, t, o, n, i, f, s, u, a;
            a = qe(), i = a.isMatch, e = a.computeScore, s = a.scoreSize, u = 20, t = 2.5, De.score = function(c, p, l) {
                var v, d, m, x;
                return d = l.preparedQuery, v = l.allowErrors, v || i(c, d.core_lw, d.core_up) ? (x = c.toLowerCase(), m = e(c, x, d), m = f(c, x, m, l), Math.ceil(m)) : 0
            }, f = function(c, p, l, v) {
                var d, m, x, w, E, R, h, b, S, T;
                if (l === 0) return 0;
                for (S = v.preparedQuery, T = v.useExtensionBonus, b = v.pathSeparator, E = c.length - 1; c[E] === b;) E--;
                if (x = c.lastIndexOf(b, E), h = E - x, R = 1, T && (R += n(p, S.ext, x, E, 2), l *= R), x === -1) return l;
                for (w = S.depth; x > -1 && w-- > 0;) x = c.lastIndexOf(b, x - 1);
                return m = x === -1 ? l : R * e(c.slice(x + 1, E + 1), p.slice(x + 1, E + 1), S), d = .5 * u / (u + r(c, E + 1, b)), d * m + (1 - d) * l * s(0, t * h)
            }, De.countDir = r = function(c, p, l) {
                var v, d;
                if (p < 1) return 0;
                for (v = 0, d = -1; ++d < p && c[d] === l;);
                for (; ++d < p;)
                    if (c[d] === l)
                        for (v++; ++d < p && c[d] === l;);
                return v
            }, De.getExtension = o = function(c) {
                var p;
                return p = c.lastIndexOf("."), p < 0 ? "" : c.substr(p + 1)
            }, n = function(c, p, l, v, d) {
                var m, x, w, E;
                if (!p.length || (E = c.lastIndexOf(".", v), !(E > l))) return 0;
                for (w = p.length, m = v - E, m < w && (w = m, m = p.length), E++, x = -1; ++x < w && c[E + x] === p[x];);
                return x === 0 && d > 0 ? .9 * n(c, p, l, E - 2, d - 1) : x / m
            }
        }).call(De)
    });
    var qr = Te((Xt, Bt) => {
        (function() {
            var e, r, t, o, n, i, f, s;
            s = yr(), t = s.countDir, n = s.getExtension, Bt.exports = e = function() {
                function u(a, c) {
                    var p, l, v;
                    if (v = c != null ? c : {}, p = v.optCharRegEx, l = v.pathSeparator, !(a && a.length)) return null;
                    this.query = a, this.query_lw = a.toLowerCase(), this.core = r(a, p), this.core_lw = this.core.toLowerCase(), this.core_up = f(this.core), this.depth = t(a, a.length, l), this.ext = n(this.query_lw), this.charCodes = o(this.query_lw)
                }
                return u
            }(), i = /[ _\-:\/\\]/g, r = function(u, a) {
                return a == null && (a = i), u.replace(a, "")
            }, f = function(u) {
                var a, c, p, l;
                for (c = "", p = 0, l = u.length; p < l; p++) a = u[p], c += a.toUpperCase()[0];
                return c
            }, o = function(u) {
                var a, c, p;
                for (p = u.length, c = -1, a = []; ++c < p;) a[u.charCodeAt(c)] = !0;
                return a
            }
        }).call(Xt)
    });
    var ro = Te((Zt, eo) => {
        (function() {
            var e, r, t, o, n;
            o = qe(), r = yr(), e = qr(), t = function(i) {
                return i.candidate
            }, n = function(i, f) {
                return f.score - i.score
            }, eo.exports = function(i, f, s) {
                var u, a, c, p, l, v, d, m, x, w, E, R, h;
                for (m = [], c = s.key, l = s.maxResults, p = s.maxInners, E = s.usePathScoring, x = p != null && p > 0 ? p : i.length + 1, u = c != null, d = E ? r : o, R = 0, h = i.length; R < h && (a = i[R], w = u ? a[c] : a, !(!!w && (v = d.score(w, f, s), v > 0 && (m.push({
                        candidate: a,
                        score: v
                    }), !--x)))); R++);
                return m.sort(n), i = m.map(t), l != null && (i = i.slice(0, l)), i
            }
        }).call(Zt)
    });
    var to = Te(gr => {
        (function() {
            var e, r, t, o, n, i, f, s, u, a;
            a = qe(), t = a.isMatch, o = a.isWordStart, u = a.scoreConsecutives, s = a.scoreCharacter, f = a.scoreAcronyms, gr.match = n = function(c, p, l) {
                var v, d, m, x, w, E;
                return v = l.allowErrors, w = l.preparedQuery, x = l.pathSeparator, v || t(c, w.core_lw, w.core_up) ? (E = c.toLowerCase(), m = r(c, E, w), m.length === 0 || c.indexOf(x) > -1 && (d = e(c, E, w, x), m = i(m, d)), m) : []
            }, gr.wrap = function(c, p, l) {
                var v, d, m, x, w, E, R, h, b;
                if (l.wrap != null && (b = l.wrap, E = b.tagClass, h = b.tagOpen, R = b.tagClose), E == null && (E = "highlight"), h == null && (h = '<strong class="' + E + '">'), R == null && (R = "</strong>"), c === p) return h + c + R;
                if (m = n(c, p, l), m.length === 0) return c;
                for (x = "", v = -1, w = 0; ++v < m.length;) {
                    for (d = m[v], d > w && (x += c.substring(w, d), w = d); ++v < m.length;)
                        if (m[v] === d + 1) d++;
                        else {
                            v--;
                            break
                        } d++, d > w && (x += h, x += c.substring(w, d), x += R, w = d)
                }
                return w <= c.length - 1 && (x += c.substring(w)), x
            }, e = function(c, p, l, v) {
                var d, m, x;
                for (x = c.length - 1; c[x] === v;) x--;
                if (d = c.lastIndexOf(v, x), d === -1) return [];
                for (m = l.depth; m-- > 0;)
                    if (d = c.lastIndexOf(v, d - 1), d === -1) return [];
                return d++, x++, r(c.slice(d, x), p.slice(d, x), l, d)
            }, i = function(c, p) {
                var l, v, d, m, x, w, E;
                if (x = c.length, w = p.length, w === 0) return c.slice();
                if (x === 0) return p.slice();
                for (d = -1, m = 0, v = p[m], E = []; ++d < x;) {
                    for (l = c[d]; v <= l && ++m < w;) v < l && E.push(v), v = p[m];
                    E.push(l)
                }
                for (; m < w;) E.push(p[m++]);
                return E
            }, r = function(c, p, l, v) {
                var d, m, x, w, E, R, h, b, S, T, y, g, _, F, U, M, H, I, j, V, re, q, ae, de, te, ve;
                for (v == null && (v = 0), I = l.query, j = l.query_lw, _ = c.length, M = I.length, E = f(c, p, I, j).score, q = new Array(M), S = new Array(M), x = 0, w = 1, m = 2, d = 3, ve = new Array(_ * M), H = -1, g = -1; ++g < M;) q[g] = 0, S[g] = 0;
                for (y = -1; ++y < _;)
                    for (V = 0, ae = 0, b = 0, de = p[y], g = -1; ++g < M;) T = 0, R = 0, re = ae, j[g] === de && (te = o(y, c, p), T = b > 0 ? b : u(c, p, I, j, y, g, te), R = re + s(y, g, te, E, T)), ae = q[g], b = S[g], V > ae ? U = m : (V = ae, U = w), R > V ? (V = R, U = d) : T = 0, q[g] = V, S[g] = T, ve[++H] = V > 0 ? U : x;
                for (y = _ - 1, g = M - 1, H = y * M + g, h = !0, F = []; h && y >= 0 && g >= 0;) switch (ve[H]) {
                    case w:
                        y--, H -= M;
                        break;
                    case m:
                        g--, H--;
                        break;
                    case d:
                        F.push(y + v), g--, y--, H -= M + 1;
                        break;
                    default:
                        h = !1
                }
                return F.reverse(), F
            }
        }).call(gr)
    });
    var Dr = Te((oo, no) => {
        (function() {
            var e, r, t, o, n, i, f, s;
            t = ro(), o = to(), s = qe(), i = yr(), e = qr(), f = null, r = (typeof process != "undefined" && process !== null ? process.platform : void 0) === "win32" ? "\\" : "/", no.exports = {
                filter: function(u, a, c) {
                    return c == null && (c = {}), a != null && a.length && (u != null && u.length) ? (c = n(c, a), t(u, a, c)) : []
                },
                score: function(u, a, c) {
                    return c == null && (c = {}), u != null && u.length && (a != null && a.length) ? (c = n(c, a), c.usePathScoring ? i.score(u, a, c) : s.score(u, a, c)) : 0
                },
                match: function(u, a, c) {
                    var p, l, v;
                    return c == null && (c = {}), u ? a ? u === a ? function() {
                        v = [];
                        for (var d = 0, m = u.length; 0 <= m ? d < m : d > m; 0 <= m ? d++ : d--) v.push(d);
                        return v
                    }.apply(this) : (c = n(c, a), o.match(u, a, c)) : [] : []
                },
                wrap: function(u, a, c) {
                    return c == null && (c = {}), u ? a ? (c = n(c, a), o.wrap(u, a, c)) : [] : []
                },
                prepareQuery: function(u, a) {
                    return a == null && (a = {}), a = n(a, u), a.preparedQuery
                }
            }, n = function(u, a) {
                return u.allowErrors == null && (u.allowErrors = !1), u.usePathScoring == null && (u.usePathScoring = !0), u.useExtensionBonus == null && (u.useExtensionBonus = !1), u.pathSeparator == null && (u.pathSeparator = r), u.optCharRegEx == null && (u.optCharRegEx = null), u.wrap == null && (u.wrap = null), u.preparedQuery == null && (u.preparedQuery = f && f.query === a ? f : f = new e(a, u)), u
            }
        }).call(oo)
    });
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    var _r = function(e, r) {
        return _r = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, o) {
            t.__proto__ = o
        } || function(t, o) {
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
        }, _r(e, r)
    };

    function $(e, r) {
        if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        _r(e, r);

        function t() {
            this.constructor = e
        }
        e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t)
    }

    function Xr(e, r, t, o) {
        function n(i) {
            return i instanceof t ? i : new t(function(f) {
                f(i)
            })
        }
        return new(t || (t = Promise))(function(i, f) {
            function s(c) {
                try {
                    a(o.next(c))
                } catch (p) {
                    f(p)
                }
            }

            function u(c) {
                try {
                    a(o.throw(c))
                } catch (p) {
                    f(p)
                }
            }

            function a(c) {
                c.done ? i(c.value) : n(c.value).then(s, u)
            }
            a((o = o.apply(e, r || [])).next())
        })
    }

    function Je(e, r) {
        var t = {
                label: 0,
                sent: function() {
                    if (i[0] & 1) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            },
            o, n, i, f;
        return f = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
            return this
        }), f;

        function s(a) {
            return function(c) {
                return u([a, c])
            }
        }

        function u(a) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; t;) try {
                if (o = 1, n && (i = a[0] & 2 ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                switch (n = 0, i && (a = [a[0] & 2, i.value]), a[0]) {
                    case 0:
                    case 1:
                        i = a;
                        break;
                    case 4:
                        return t.label++, {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        t.label++, n = a[1], a = [0];
                        continue;
                    case 7:
                        a = t.ops.pop(), t.trys.pop();
                        continue;
                    default:
                        if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                            t = 0;
                            continue
                        }
                        if (a[0] === 3 && (!i || a[1] > i[0] && a[1] < i[3])) {
                            t.label = a[1];
                            break
                        }
                        if (a[0] === 6 && t.label < i[1]) {
                            t.label = i[1], i = a;
                            break
                        }
                        if (i && t.label < i[2]) {
                            t.label = i[2], t.ops.push(a);
                            break
                        }
                        i[2] && t.ops.pop(), t.trys.pop();
                        continue
                }
                a = r.call(e, t)
            } catch (c) {
                a = [6, c], n = 0
            } finally {
                o = i = 0
            }
            if (a[0] & 5) throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
    }

    function Y(e) {
        var r = typeof Symbol == "function" && Symbol.iterator,
            t = r && e[r],
            o = 0;
        if (t) return t.call(e);
        if (e && typeof e.length == "number") return {
            next: function() {
                return e && o >= e.length && (e = void 0), {
                    value: e && e[o++],
                    done: !e
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function W(e, r) {
        var t = typeof Symbol == "function" && e[Symbol.iterator];
        if (!t) return e;
        var o = t.call(e),
            n, i = [],
            f;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(n = o.next()).done;) i.push(n.value)
        } catch (s) {
            f = {
                error: s
            }
        } finally {
            try {
                n && !n.done && (t = o.return) && t.call(o)
            } finally {
                if (f) throw f.error
            }
        }
        return i
    }

    function z(e, r, t) {
        if (t || arguments.length === 2)
            for (var o = 0, n = r.length, i; o < n; o++)(i || !(o in r)) && (i || (i = Array.prototype.slice.call(r, 0, o)), i[o] = r[o]);
        return e.concat(i || Array.prototype.slice.call(r))
    }

    function xe(e) {
        return this instanceof xe ? (this.v = e, this) : new xe(e)
    }

    function Br(e, r, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o = t.apply(e, r || []),
            n, i = [];
        return n = {}, f("next"), f("throw"), f("return"), n[Symbol.asyncIterator] = function() {
            return this
        }, n;

        function f(l) {
            o[l] && (n[l] = function(v) {
                return new Promise(function(d, m) {
                    i.push([l, v, d, m]) > 1 || s(l, v)
                })
            })
        }

        function s(l, v) {
            try {
                u(o[l](v))
            } catch (d) {
                p(i[0][3], d)
            }
        }

        function u(l) {
            l.value instanceof xe ? Promise.resolve(l.value.v).then(a, c) : p(i[0][2], l)
        }

        function a(l) {
            s("next", l)
        }

        function c(l) {
            s("throw", l)
        }

        function p(l, v) {
            l(v), i.shift(), i.length && s(i[0][0], i[0][1])
        }
    }

    function Zr(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r = e[Symbol.asyncIterator],
            t;
        return r ? r.call(e) : (e = typeof Y == "function" ? Y(e) : e[Symbol.iterator](), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function o(i) {
            t[i] = e[i] && function(f) {
                return new Promise(function(s, u) {
                    f = e[i](f), n(s, u, f.done, f.value)
                })
            }
        }

        function n(i, f, s, u) {
            Promise.resolve(u).then(function(a) {
                i({
                    value: a,
                    done: s
                })
            }, f)
        }
    }

    function O(e) {
        return typeof e == "function"
    }

    function Ye(e) {
        var r = function(o) {
                Error.call(o), o.stack = new Error().stack
            },
            t = e(r);
        return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
    }
    var Ge = Ye(function(e) {
        return function(t) {
            e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(o, n) {
                return n + 1 + ") " + o.toString()
            }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t
        }
    });

    function ue(e, r) {
        if (e) {
            var t = e.indexOf(r);
            0 <= t && e.splice(t, 1)
        }
    }
    var oe = function() {
        function e(r) {
            this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null
        }
        return e.prototype.unsubscribe = function() {
            var r, t, o, n, i;
            if (!this.closed) {
                this.closed = !0;
                var f = this._parentage;
                if (f)
                    if (this._parentage = null, Array.isArray(f)) try {
                        for (var s = Y(f), u = s.next(); !u.done; u = s.next()) {
                            var a = u.value;
                            a.remove(this)
                        }
                    } catch (m) {
                        r = {
                            error: m
                        }
                    } finally {
                        try {
                            u && !u.done && (t = s.return) && t.call(s)
                        } finally {
                            if (r) throw r.error
                        }
                    } else f.remove(this);
                var c = this.initialTeardown;
                if (O(c)) try {
                    c()
                } catch (m) {
                    i = m instanceof Ge ? m.errors : [m]
                }
                var p = this._finalizers;
                if (p) {
                    this._finalizers = null;
                    try {
                        for (var l = Y(p), v = l.next(); !v.done; v = l.next()) {
                            var d = v.value;
                            try {
                                et(d)
                            } catch (m) {
                                i = i != null ? i : [], m instanceof Ge ? i = z(z([], W(i)), W(m.errors)) : i.push(m)
                            }
                        }
                    } catch (m) {
                        o = {
                            error: m
                        }
                    } finally {
                        try {
                            v && !v.done && (n = l.return) && n.call(l)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }
                if (i) throw new Ge(i)
            }
        }, e.prototype.add = function(r) {
            var t;
            if (r && r !== this)
                if (this.closed) et(r);
                else {
                    if (r instanceof e) {
                        if (r.closed || r._hasParent(this)) return;
                        r._addParent(this)
                    }(this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r)
                }
        }, e.prototype._hasParent = function(r) {
            var t = this._parentage;
            return t === r || Array.isArray(t) && t.includes(r)
        }, e.prototype._addParent = function(r) {
            var t = this._parentage;
            this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r
        }, e.prototype._removeParent = function(r) {
            var t = this._parentage;
            t === r ? this._parentage = null : Array.isArray(t) && ue(t, r)
        }, e.prototype.remove = function(r) {
            var t = this._finalizers;
            t && ue(t, r), r instanceof e && r._removeParent(this)
        }, e.EMPTY = function() {
            var r = new e;
            return r.closed = !0, r
        }(), e
    }();
    var Ar = oe.EMPTY;

    function Xe(e) {
        return e instanceof oe || e && "closed" in e && O(e.remove) && O(e.add) && O(e.unsubscribe)
    }

    function et(e) {
        O(e) ? e() : e.unsubscribe()
    }
    var ee = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    };
    var _e = {
        setTimeout: function(e, r) {
            for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
            var n = _e.delegate;
            return n != null && n.setTimeout ? n.setTimeout.apply(n, z([e, r], W(t))) : setTimeout.apply(void 0, z([e, r], W(t)))
        },
        clearTimeout: function(e) {
            var r = _e.delegate;
            return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };

    function Be(e) {
        _e.setTimeout(function() {
            var r = ee.onUnhandledError;
            if (r) r(e);
            else throw e
        })
    }

    function ce() {}
    var rt = function() {
        return Ir("C", void 0, void 0)
    }();

    function tt(e) {
        return Ir("E", void 0, e)
    }

    function ot(e) {
        return Ir("N", e, void 0)
    }

    function Ir(e, r, t) {
        return {
            kind: e,
            value: r,
            error: t
        }
    }
    var be = null;

    function Ae(e) {
        if (ee.useDeprecatedSynchronousErrorHandling) {
            var r = !be;
            if (r && (be = {
                    errorThrown: !1,
                    error: null
                }), e(), r) {
                var t = be,
                    o = t.errorThrown,
                    n = t.error;
                if (be = null, o) throw n
            }
        } else e()
    }

    function nt(e) {
        ee.useDeprecatedSynchronousErrorHandling && be && (be.errorThrown = !0, be.error = e)
    }
    var Ue = function(e) {
        $(r, e);

        function r(t) {
            var o = e.call(this) || this;
            return o.isStopped = !1, t ? (o.destination = t, Xe(t) && t.add(o)) : o.destination = Oo, o
        }
        return r.create = function(t, o, n) {
            return new ye(t, o, n)
        }, r.prototype.next = function(t) {
            this.isStopped ? Mr(ot(t), this) : this._next(t)
        }, r.prototype.error = function(t) {
            this.isStopped ? Mr(tt(t), this) : (this.isStopped = !0, this._error(t))
        }, r.prototype.complete = function() {
            this.isStopped ? Mr(rt, this) : (this.isStopped = !0, this._complete())
        }, r.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
        }, r.prototype._next = function(t) {
            this.destination.next(t)
        }, r.prototype._error = function(t) {
            try {
                this.destination.error(t)
            } finally {
                this.unsubscribe()
            }
        }, r.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, r
    }(oe);
    var wo = Function.prototype.bind;

    function Cr(e, r) {
        return wo.call(e, r)
    }
    var So = function() {
            function e(r) {
                this.partialObserver = r
            }
            return e.prototype.next = function(r) {
                var t = this.partialObserver;
                if (t.next) try {
                    t.next(r)
                } catch (o) {
                    Ze(o)
                }
            }, e.prototype.error = function(r) {
                var t = this.partialObserver;
                if (t.error) try {
                    t.error(r)
                } catch (o) {
                    Ze(o)
                } else Ze(r)
            }, e.prototype.complete = function() {
                var r = this.partialObserver;
                if (r.complete) try {
                    r.complete()
                } catch (t) {
                    Ze(t)
                }
            }, e
        }(),
        ye = function(e) {
            $(r, e);

            function r(t, o, n) {
                var i = e.call(this) || this,
                    f;
                if (O(t) || !t) f = {
                    next: t != null ? t : void 0,
                    error: o != null ? o : void 0,
                    complete: n != null ? n : void 0
                };
                else {
                    var s;
                    i && ee.useDeprecatedNextContext ? (s = Object.create(t), s.unsubscribe = function() {
                        return i.unsubscribe()
                    }, f = {
                        next: t.next && Cr(t.next, s),
                        error: t.error && Cr(t.error, s),
                        complete: t.complete && Cr(t.complete, s)
                    }) : f = t
                }
                return i.destination = new So(f), i
            }
            return r
        }(Ue);

    function Ze(e) {
        ee.useDeprecatedSynchronousErrorHandling ? nt(e) : Be(e)
    }

    function Eo(e) {
        throw e
    }

    function Mr(e, r) {
        var t = ee.onStoppedNotification;
        t && _e.setTimeout(function() {
            return t(e, r)
        })
    }
    var Oo = {
        closed: !0,
        next: ce,
        error: Eo,
        complete: ce
    };
    var Ie = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }();

    function G(e) {
        return e
    }

    function it(e) {
        return e.length === 0 ? G : e.length === 1 ? e[0] : function(t) {
            return e.reduce(function(o, n) {
                return n(o)
            }, t)
        }
    }
    var C = function() {
        function e(r) {
            r && (this._subscribe = r)
        }
        return e.prototype.lift = function(r) {
            var t = new e;
            return t.source = this, t.operator = r, t
        }, e.prototype.subscribe = function(r, t, o) {
            var n = this,
                i = _o(r) ? r : new ye(r, t, o);
            return Ae(function() {
                var f = n,
                    s = f.operator,
                    u = f.source;
                i.add(s ? s.call(i, u) : u ? n._subscribe(i) : n._trySubscribe(i))
            }), i
        }, e.prototype._trySubscribe = function(r) {
            try {
                return this._subscribe(r)
            } catch (t) {
                r.error(t)
            }
        }, e.prototype.forEach = function(r, t) {
            var o = this;
            return t = at(t), new t(function(n, i) {
                var f = new ye({
                    next: function(s) {
                        try {
                            r(s)
                        } catch (u) {
                            i(u), f.unsubscribe()
                        }
                    },
                    error: i,
                    complete: n
                });
                o.subscribe(f)
            })
        }, e.prototype._subscribe = function(r) {
            var t;
            return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r)
        }, e.prototype[Ie] = function() {
            return this
        }, e.prototype.pipe = function() {
            for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
            return it(r)(this)
        }, e.prototype.toPromise = function(r) {
            var t = this;
            return r = at(r), new r(function(o, n) {
                var i;
                t.subscribe(function(f) {
                    return i = f
                }, function(f) {
                    return n(f)
                }, function() {
                    return o(i)
                })
            })
        }, e.create = function(r) {
            return new e(r)
        }, e
    }();

    function at(e) {
        var r;
        return (r = e != null ? e : ee.Promise) !== null && r !== void 0 ? r : Promise
    }

    function To(e) {
        return e && O(e.next) && O(e.error) && O(e.complete)
    }

    function _o(e) {
        return e && e instanceof Ue || To(e) && Xe(e)
    }

    function Ao(e) {
        return O(e == null ? void 0 : e.lift)
    }

    function A(e) {
        return function(r) {
            if (Ao(r)) return r.lift(function(t) {
                try {
                    return e(t, this)
                } catch (o) {
                    this.error(o)
                }
            });
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }

    function L(e, r, t, o, n) {
        return new Io(e, r, t, o, n)
    }
    var Io = function(e) {
        $(r, e);

        function r(t, o, n, i, f, s) {
            var u = e.call(this, t) || this;
            return u.onFinalize = f, u.shouldUnsubscribe = s, u._next = o ? function(a) {
                try {
                    o(a)
                } catch (c) {
                    t.error(c)
                }
            } : e.prototype._next, u._error = i ? function(a) {
                try {
                    i(a)
                } catch (c) {
                    t.error(c)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._error, u._complete = n ? function() {
                try {
                    n()
                } catch (a) {
                    t.error(a)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._complete, u
        }
        return r.prototype.unsubscribe = function() {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var o = this.closed;
                e.prototype.unsubscribe.call(this), !o && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
            }
        }, r
    }(Ue);
    var Ce = {
        schedule: function(e) {
            var r = requestAnimationFrame,
                t = cancelAnimationFrame,
                o = Ce.delegate;
            o && (r = o.requestAnimationFrame, t = o.cancelAnimationFrame);
            var n = r(function(i) {
                t = void 0, e(i)
            });
            return new oe(function() {
                return t == null ? void 0 : t(n)
            })
        },
        requestAnimationFrame: function() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            var t = Ce.delegate;
            return ((t == null ? void 0 : t.requestAnimationFrame) || requestAnimationFrame).apply(void 0, z([], W(e)))
        },
        cancelAnimationFrame: function() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            var t = Ce.delegate;
            return ((t == null ? void 0 : t.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, z([], W(e)))
        },
        delegate: void 0
    };
    var ft = Ye(function(e) {
        return function() {
            e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
        }
    });
    var B = function(e) {
        $(r, e);

        function r() {
            var t = e.call(this) || this;
            return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
        }
        return r.prototype.lift = function(t) {
            var o = new ut(this, this);
            return o.operator = t, o
        }, r.prototype._throwIfClosed = function() {
            if (this.closed) throw new ft
        }, r.prototype.next = function(t) {
            var o = this;
            Ae(function() {
                var n, i;
                if (o._throwIfClosed(), !o.isStopped) {
                    o.currentObservers || (o.currentObservers = Array.from(o.observers));
                    try {
                        for (var f = Y(o.currentObservers), s = f.next(); !s.done; s = f.next()) {
                            var u = s.value;
                            u.next(t)
                        }
                    } catch (a) {
                        n = {
                            error: a
                        }
                    } finally {
                        try {
                            s && !s.done && (i = f.return) && i.call(f)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
            })
        }, r.prototype.error = function(t) {
            var o = this;
            Ae(function() {
                if (o._throwIfClosed(), !o.isStopped) {
                    o.hasError = o.isStopped = !0, o.thrownError = t;
                    for (var n = o.observers; n.length;) n.shift().error(t)
                }
            })
        }, r.prototype.complete = function() {
            var t = this;
            Ae(function() {
                if (t._throwIfClosed(), !t.isStopped) {
                    t.isStopped = !0;
                    for (var o = t.observers; o.length;) o.shift().complete()
                }
            })
        }, r.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
        }, Object.defineProperty(r.prototype, "observed", {
            get: function() {
                var t;
                return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }), r.prototype._trySubscribe = function(t) {
            return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
        }, r.prototype._subscribe = function(t) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t)
        }, r.prototype._innerSubscribe = function(t) {
            var o = this,
                n = this,
                i = n.hasError,
                f = n.isStopped,
                s = n.observers;
            return i || f ? Ar : (this.currentObservers = null, s.push(t), new oe(function() {
                o.currentObservers = null, ue(s, t)
            }))
        }, r.prototype._checkFinalizedStatuses = function(t) {
            var o = this,
                n = o.hasError,
                i = o.thrownError,
                f = o.isStopped;
            n ? t.error(i) : f && t.complete()
        }, r.prototype.asObservable = function() {
            var t = new C;
            return t.source = this, t
        }, r.create = function(t, o) {
            return new ut(t, o)
        }, r
    }(C);
    var ut = function(e) {
        $(r, e);

        function r(t, o) {
            var n = e.call(this) || this;
            return n.destination = t, n.source = o, n
        }
        return r.prototype.next = function(t) {
            var o, n;
            (n = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || n === void 0 || n.call(o, t)
        }, r.prototype.error = function(t) {
            var o, n;
            (n = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || n === void 0 || n.call(o, t)
        }, r.prototype.complete = function() {
            var t, o;
            (o = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || o === void 0 || o.call(t)
        }, r.prototype._subscribe = function(t) {
            var o, n;
            return (n = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(t)) !== null && n !== void 0 ? n : Ar
        }, r
    }(B);
    var ze = {
        now: function() {
            return (ze.delegate || Date).now()
        },
        delegate: void 0
    };
    var ct = function(e) {
        $(r, e);

        function r(t, o, n) {
            t === void 0 && (t = 1 / 0), o === void 0 && (o = 1 / 0), n === void 0 && (n = ze);
            var i = e.call(this) || this;
            return i._bufferSize = t, i._windowTime = o, i._timestampProvider = n, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = o === 1 / 0, i._bufferSize = Math.max(1, t), i._windowTime = Math.max(1, o), i
        }
        return r.prototype.next = function(t) {
            var o = this,
                n = o.isStopped,
                i = o._buffer,
                f = o._infiniteTimeWindow,
                s = o._timestampProvider,
                u = o._windowTime;
            n || (i.push(t), !f && i.push(s.now() + u)), this._trimBuffer(), e.prototype.next.call(this, t)
        }, r.prototype._subscribe = function(t) {
            this._throwIfClosed(), this._trimBuffer();
            for (var o = this._innerSubscribe(t), n = this, i = n._infiniteTimeWindow, f = n._buffer, s = f.slice(), u = 0; u < s.length && !t.closed; u += i ? 1 : 2) t.next(s[u]);
            return this._checkFinalizedStatuses(t), o
        }, r.prototype._trimBuffer = function() {
            var t = this,
                o = t._bufferSize,
                n = t._timestampProvider,
                i = t._buffer,
                f = t._infiniteTimeWindow,
                s = (f ? 1 : 2) * o;
            if (o < 1 / 0 && s < i.length && i.splice(0, i.length - s), !f) {
                for (var u = n.now(), a = 0, c = 1; c < i.length && i[c] <= u; c += 2) a = c;
                a && i.splice(0, a + 1)
            }
        }, r
    }(B);
    var st = function(e) {
        $(r, e);

        function r(t, o) {
            return e.call(this) || this
        }
        return r.prototype.schedule = function(t, o) {
            return o === void 0 && (o = 0), this
        }, r
    }(oe);
    var Ve = {
        setInterval: function(e, r) {
            for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
            var n = Ve.delegate;
            return n != null && n.setInterval ? n.setInterval.apply(n, z([e, r], W(t))) : setInterval.apply(void 0, z([e, r], W(t)))
        },
        clearInterval: function(e) {
            var r = Ve.delegate;
            return ((r == null ? void 0 : r.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    };
    var er = function(e) {
        $(r, e);

        function r(t, o) {
            var n = e.call(this, t, o) || this;
            return n.scheduler = t, n.work = o, n.pending = !1, n
        }
        return r.prototype.schedule = function(t, o) {
            var n;
            if (o === void 0 && (o = 0), this.closed) return this;
            this.state = t;
            var i = this.id,
                f = this.scheduler;
            return i != null && (this.id = this.recycleAsyncId(f, i, o)), this.pending = !0, this.delay = o, this.id = (n = this.id) !== null && n !== void 0 ? n : this.requestAsyncId(f, this.id, o), this
        }, r.prototype.requestAsyncId = function(t, o, n) {
            return n === void 0 && (n = 0), Ve.setInterval(t.flush.bind(t, this), n)
        }, r.prototype.recycleAsyncId = function(t, o, n) {
            if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === !1) return o;
            o != null && Ve.clearInterval(o)
        }, r.prototype.execute = function(t, o) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(t, o);
            if (n) return n;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, r.prototype._execute = function(t, o) {
            var n = !1,
                i;
            try {
                this.work(t)
            } catch (f) {
                n = !0, i = f || new Error("Scheduled action threw falsy error")
            }
            if (n) return this.unsubscribe(), i
        }, r.prototype.unsubscribe = function() {
            if (!this.closed) {
                var t = this,
                    o = t.id,
                    n = t.scheduler,
                    i = n.actions;
                this.work = this.state = this.scheduler = null, this.pending = !1, ue(i, this), o != null && (this.id = this.recycleAsyncId(n, o, null)), this.delay = null, e.prototype.unsubscribe.call(this)
            }
        }, r
    }(st);
    var Lr = function() {
        function e(r, t) {
            t === void 0 && (t = e.now), this.schedulerActionCtor = r, this.now = t
        }
        return e.prototype.schedule = function(r, t, o) {
            return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(o, t)
        }, e.now = ze.now, e
    }();
    var rr = function(e) {
        $(r, e);

        function r(t, o) {
            o === void 0 && (o = Lr.now);
            var n = e.call(this, t, o) || this;
            return n.actions = [], n._active = !1, n
        }
        return r.prototype.flush = function(t) {
            var o = this.actions;
            if (this._active) {
                o.push(t);
                return
            }
            var n;
            this._active = !0;
            do
                if (n = t.execute(t.state, t.delay)) break; while (t = o.shift());
            if (this._active = !1, n) {
                for (; t = o.shift();) t.unsubscribe();
                throw n
            }
        }, r
    }(Lr);
    var ge = new rr(er),
        pt = ge;
    var lt = function(e) {
        $(r, e);

        function r(t, o) {
            var n = e.call(this, t, o) || this;
            return n.scheduler = t, n.work = o, n
        }
        return r.prototype.requestAsyncId = function(t, o, n) {
            return n === void 0 && (n = 0), n !== null && n > 0 ? e.prototype.requestAsyncId.call(this, t, o, n) : (t.actions.push(this), t._scheduled || (t._scheduled = Ce.requestAnimationFrame(function() {
                return t.flush(void 0)
            })))
        }, r.prototype.recycleAsyncId = function(t, o, n) {
            var i;
            if (n === void 0 && (n = 0), n != null ? n > 0 : this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, o, n);
            var f = t.actions;
            o != null && ((i = f[f.length - 1]) === null || i === void 0 ? void 0 : i.id) !== o && (Ce.cancelAnimationFrame(o), t._scheduled = void 0)
        }, r
    }(er);
    var mt = function(e) {
        $(r, e);

        function r() {
            return e !== null && e.apply(this, arguments) || this
        }
        return r.prototype.flush = function(t) {
            this._active = !0;
            var o = this._scheduled;
            this._scheduled = void 0;
            var n = this.actions,
                i;
            t = t || n.shift();
            do
                if (i = t.execute(t.state, t.delay)) break; while ((t = n[0]) && t.id === o && n.shift());
            if (this._active = !1, i) {
                for (;
                    (t = n[0]) && t.id === o && n.shift();) t.unsubscribe();
                throw i
            }
        }, r
    }(rr);
    var Pr = new mt(lt);
    var Me = new C(function(e) {
        return e.complete()
    });

    function tr(e) {
        return e && O(e.schedule)
    }

    function Rr(e) {
        return e[e.length - 1]
    }

    function Le(e) {
        return O(Rr(e)) ? e.pop() : void 0
    }

    function ne(e) {
        return tr(Rr(e)) ? e.pop() : void 0
    }

    function dt(e, r) {
        return typeof Rr(e) == "number" ? e.pop() : r
    }
    var Pe = function(e) {
        return e && typeof e.length == "number" && typeof e != "function"
    };

    function or(e) {
        return O(e == null ? void 0 : e.then)
    }

    function nr(e) {
        return O(e[Ie])
    }

    function ir(e) {
        return Symbol.asyncIterator && O(e == null ? void 0 : e[Symbol.asyncIterator])
    }

    function ar(e) {
        return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }

    function Co() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
    }
    var fr = Co();

    function ur(e) {
        return O(e == null ? void 0 : e[fr])
    }

    function cr(e) {
        return Br(this, arguments, function() {
            var t, o, n, i;
            return Je(this, function(f) {
                switch (f.label) {
                    case 0:
                        t = e.getReader(), f.label = 1;
                    case 1:
                        f.trys.push([1, , 9, 10]), f.label = 2;
                    case 2:
                        return [4, xe(t.read())];
                    case 3:
                        return o = f.sent(), n = o.value, i = o.done, i ? [4, xe(void 0)] : [3, 5];
                    case 4:
                        return [2, f.sent()];
                    case 5:
                        return [4, xe(n)];
                    case 6:
                        return [4, f.sent()];
                    case 7:
                        return f.sent(), [3, 2];
                    case 8:
                        return [3, 10];
                    case 9:
                        return t.releaseLock(), [7];
                    case 10:
                        return [2]
                }
            })
        })
    }

    function sr(e) {
        return O(e == null ? void 0 : e.getReader)
    }

    function k(e) {
        if (e instanceof C) return e;
        if (e != null) {
            if (nr(e)) return Mo(e);
            if (Pe(e)) return Lo(e);
            if (or(e)) return Po(e);
            if (ir(e)) return ht(e);
            if (ur(e)) return Ro(e);
            if (sr(e)) return ko(e)
        }
        throw ar(e)
    }

    function Mo(e) {
        return new C(function(r) {
            var t = e[Ie]();
            if (O(t.subscribe)) return t.subscribe(r);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        })
    }

    function Lo(e) {
        return new C(function(r) {
            for (var t = 0; t < e.length && !r.closed; t++) r.next(e[t]);
            r.complete()
        })
    }

    function Po(e) {
        return new C(function(r) {
            e.then(function(t) {
                r.closed || (r.next(t), r.complete())
            }, function(t) {
                return r.error(t)
            }).then(null, Be)
        })
    }

    function Ro(e) {
        return new C(function(r) {
            var t, o;
            try {
                for (var n = Y(e), i = n.next(); !i.done; i = n.next()) {
                    var f = i.value;
                    if (r.next(f), r.closed) return
                }
            } catch (s) {
                t = {
                    error: s
                }
            } finally {
                try {
                    i && !i.done && (o = n.return) && o.call(n)
                } finally {
                    if (t) throw t.error
                }
            }
            r.complete()
        })
    }

    function ht(e) {
        return new C(function(r) {
            Fo(e, r).catch(function(t) {
                return r.error(t)
            })
        })
    }

    function ko(e) {
        return ht(cr(e))
    }

    function Fo(e, r) {
        var t, o, n, i;
        return Xr(this, void 0, void 0, function() {
            var f, s;
            return Je(this, function(u) {
                switch (u.label) {
                    case 0:
                        u.trys.push([0, 5, 6, 11]), t = Zr(e), u.label = 1;
                    case 1:
                        return [4, t.next()];
                    case 2:
                        if (o = u.sent(), !!o.done) return [3, 4];
                        if (f = o.value, r.next(f), r.closed) return [2];
                        u.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [3, 11];
                    case 5:
                        return s = u.sent(), n = {
                            error: s
                        }, [3, 11];
                    case 6:
                        return u.trys.push([6, , 9, 10]), o && !o.done && (i = t.return) ? [4, i.call(t)] : [3, 8];
                    case 7:
                        u.sent(), u.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        if (n) throw n.error;
                        return [7];
                    case 10:
                        return [7];
                    case 11:
                        return r.complete(), [2]
                }
            })
        })
    }

    function K(e, r, t, o, n) {
        o === void 0 && (o = 0), n === void 0 && (n = !1);
        var i = r.schedule(function() {
            t(), n ? e.add(this.schedule(null, o)) : this.unsubscribe()
        }, o);
        if (e.add(i), !n) return i
    }

    function pr(e, r) {
        return r === void 0 && (r = 0), A(function(t, o) {
            t.subscribe(L(o, function(n) {
                return K(o, e, function() {
                    return o.next(n)
                }, r)
            }, function() {
                return K(o, e, function() {
                    return o.complete()
                }, r)
            }, function(n) {
                return K(o, e, function() {
                    return o.error(n)
                }, r)
            }))
        })
    }

    function lr(e, r) {
        return r === void 0 && (r = 0), A(function(t, o) {
            o.add(e.schedule(function() {
                return t.subscribe(o)
            }, r))
        })
    }

    function vt(e, r) {
        return k(e).pipe(lr(r), pr(r))
    }

    function xt(e, r) {
        return k(e).pipe(lr(r), pr(r))
    }

    function bt(e, r) {
        return new C(function(t) {
            var o = 0;
            return r.schedule(function() {
                o === e.length ? t.complete() : (t.next(e[o++]), t.closed || this.schedule())
            })
        })
    }

    function yt(e, r) {
        return new C(function(t) {
            var o;
            return K(t, r, function() {
                    o = e[fr](), K(t, r, function() {
                        var n, i, f;
                        try {
                            n = o.next(), i = n.value, f = n.done
                        } catch (s) {
                            t.error(s);
                            return
                        }
                        f ? t.complete() : t.next(i)
                    }, 0, !0)
                }),
                function() {
                    return O(o == null ? void 0 : o.return) && o.return()
                }
        })
    }

    function mr(e, r) {
        if (!e) throw new Error("Iterable cannot be null");
        return new C(function(t) {
            K(t, r, function() {
                var o = e[Symbol.asyncIterator]();
                K(t, r, function() {
                    o.next().then(function(n) {
                        n.done ? t.complete() : t.next(n.value)
                    })
                }, 0, !0)
            })
        })
    }

    function gt(e, r) {
        return mr(cr(e), r)
    }

    function wt(e, r) {
        if (e != null) {
            if (nr(e)) return vt(e, r);
            if (Pe(e)) return bt(e, r);
            if (or(e)) return xt(e, r);
            if (ir(e)) return mr(e, r);
            if (ur(e)) return yt(e, r);
            if (sr(e)) return gt(e, r)
        }
        throw ar(e)
    }

    function se(e, r) {
        return r ? wt(e, r) : k(e)
    }

    function ie() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ne(e);
        return se(e, t)
    }

    function kr(e, r) {
        var t = O(e) ? e : function() {
                return e
            },
            o = function(n) {
                return n.error(t())
            };
        return new C(r ? function(n) {
            return r.schedule(o, 0, n)
        } : o)
    }

    function St(e) {
        return e instanceof Date && !isNaN(e)
    }

    function P(e, r) {
        return A(function(t, o) {
            var n = 0;
            t.subscribe(L(o, function(i) {
                o.next(e.call(r, i, n++))
            }))
        })
    }
    var Ho = Array.isArray;

    function Wo(e, r) {
        return Ho(r) ? e.apply(void 0, z([], W(r))) : e(r)
    }

    function dr(e) {
        return P(function(r) {
            return Wo(e, r)
        })
    }
    var Uo = Array.isArray,
        zo = Object.getPrototypeOf,
        Vo = Object.prototype,
        $o = Object.keys;

    function Et(e) {
        if (e.length === 1) {
            var r = e[0];
            if (Uo(r)) return {
                args: r,
                keys: null
            };
            if (jo(r)) {
                var t = $o(r);
                return {
                    args: t.map(function(o) {
                        return r[o]
                    }),
                    keys: t
                }
            }
        }
        return {
            args: e,
            keys: null
        }
    }

    function jo(e) {
        return e && typeof e == "object" && zo(e) === Vo
    }

    function Ot(e, r) {
        return e.reduce(function(t, o, n) {
            return t[o] = r[n], t
        }, {})
    }

    function Re() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ne(e),
            o = Le(e),
            n = Et(e),
            i = n.args,
            f = n.keys;
        if (i.length === 0) return se([], t);
        var s = new C(No(i, t, f ? function(u) {
            return Ot(f, u)
        } : G));
        return o ? s.pipe(dr(o)) : s
    }

    function No(e, r, t) {
        return t === void 0 && (t = G),
            function(o) {
                Tt(r, function() {
                    for (var n = e.length, i = new Array(n), f = n, s = n, u = function(c) {
                            Tt(r, function() {
                                var p = se(e[c], r),
                                    l = !1;
                                p.subscribe(L(o, function(v) {
                                    i[c] = v, l || (l = !0, s--), s || o.next(t(i.slice()))
                                }, function() {
                                    --f || o.complete()
                                }))
                            }, o)
                        }, a = 0; a < n; a++) u(a)
                }, o)
            }
    }

    function Tt(e, r, t) {
        e ? K(t, e, r) : r()
    }

    function _t(e, r, t, o, n, i, f, s) {
        var u = [],
            a = 0,
            c = 0,
            p = !1,
            l = function() {
                p && !u.length && !a && r.complete()
            },
            v = function(m) {
                return a < o ? d(m) : u.push(m)
            },
            d = function(m) {
                i && r.next(m), a++;
                var x = !1;
                k(t(m, c++)).subscribe(L(r, function(w) {
                    n == null || n(w), i ? v(w) : r.next(w)
                }, function() {
                    x = !0
                }, void 0, function() {
                    if (x) try {
                        a--;
                        for (var w = function() {
                                var E = u.shift();
                                f ? K(r, f, function() {
                                    return d(E)
                                }) : d(E)
                            }; u.length && a < o;) w();
                        l()
                    } catch (E) {
                        r.error(E)
                    }
                }))
            };
        return e.subscribe(L(r, v, function() {
                p = !0, l()
            })),
            function() {
                s == null || s()
            }
    }

    function we(e, r, t) {
        return t === void 0 && (t = 1 / 0), O(r) ? we(function(o, n) {
            return P(function(i, f) {
                return r(o, i, n, f)
            })(k(e(o, n)))
        }, t) : (typeof r == "number" && (t = r), A(function(o, n) {
            return _t(o, n, e, t)
        }))
    }

    function hr(e) {
        return e === void 0 && (e = 1 / 0), we(G, e)
    }

    function At() {
        return hr(1)
    }

    function $e() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return At()(se(e, ne(e)))
    }

    function Se(e) {
        return new C(function(r) {
            k(e()).subscribe(r)
        })
    }
    var qo = ["addListener", "removeListener"],
        Do = ["addEventListener", "removeEventListener"],
        Qo = ["on", "off"];

    function D(e, r, t, o) {
        if (O(t) && (o = t, t = void 0), o) return D(e, r, t).pipe(dr(o));
        var n = W(Yo(e) ? Do.map(function(s) {
                return function(u) {
                    return e[s](r, u, t)
                }
            }) : Ko(e) ? qo.map(It(e, r)) : Jo(e) ? Qo.map(It(e, r)) : [], 2),
            i = n[0],
            f = n[1];
        if (!i && Pe(e)) return we(function(s) {
            return D(s, r, t)
        })(k(e));
        if (!i) throw new TypeError("Invalid event target");
        return new C(function(s) {
            var u = function() {
                for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
                return s.next(1 < a.length ? a : a[0])
            };
            return i(u),
                function() {
                    return f(u)
                }
        })
    }

    function It(e, r) {
        return function(t) {
            return function(o) {
                return e[t](r, o)
            }
        }
    }

    function Ko(e) {
        return O(e.addListener) && O(e.removeListener)
    }

    function Jo(e) {
        return O(e.on) && O(e.off)
    }

    function Yo(e) {
        return O(e.addEventListener) && O(e.removeEventListener)
    }

    function vr(e, r, t) {
        e === void 0 && (e = 0), t === void 0 && (t = pt);
        var o = -1;
        return r != null && (tr(r) ? t = r : o = r), new C(function(n) {
            var i = St(e) ? +e - t.now() : e;
            i < 0 && (i = 0);
            var f = 0;
            return t.schedule(function() {
                n.closed || (n.next(f++), 0 <= o ? this.schedule(void 0, o) : n.complete())
            }, i)
        })
    }

    function N() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ne(e),
            o = dt(e, 1 / 0),
            n = e;
        return n.length ? n.length === 1 ? k(n[0]) : hr(o)(se(n, t)) : Me
    }
    var je = new C(ce);
    var Go = Array.isArray;

    function Ct(e) {
        return e.length === 1 && Go(e[0]) ? e[0] : e
    }

    function Ee(e, r) {
        return A(function(t, o) {
            var n = 0;
            t.subscribe(L(o, function(i) {
                return e.call(r, i, n++) && o.next(i)
            }))
        })
    }

    function Mt() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = Le(e),
            o = Ct(e);
        return o.length ? new C(function(n) {
            var i = o.map(function() {
                    return []
                }),
                f = o.map(function() {
                    return !1
                });
            n.add(function() {
                i = f = null
            });
            for (var s = function(a) {
                    k(o[a]).subscribe(L(n, function(c) {
                        if (i[a].push(c), i.every(function(l) {
                                return l.length
                            })) {
                            var p = i.map(function(l) {
                                return l.shift()
                            });
                            n.next(t ? t.apply(void 0, z([], W(p))) : p), i.some(function(l, v) {
                                return !l.length && f[v]
                            }) && n.complete()
                        }
                    }, function() {
                        f[a] = !0, !i[a].length && n.complete()
                    }))
                }, u = 0; !n.closed && u < o.length; u++) s(u);
            return function() {
                i = f = null
            }
        }) : Me
    }

    function Lt(e) {
        return A(function(r, t) {
            var o = !1,
                n = null,
                i = null,
                f = !1,
                s = function() {
                    if (i == null || i.unsubscribe(), i = null, o) {
                        o = !1;
                        var a = n;
                        n = null, t.next(a)
                    }
                    f && t.complete()
                },
                u = function() {
                    i = null, f && t.complete()
                };
            r.subscribe(L(t, function(a) {
                o = !0, n = a, i || k(e(a)).subscribe(i = L(t, s, u))
            }, function() {
                f = !0, (!o || !i || i.closed) && t.complete()
            }))
        })
    }

    function Fr(e, r) {
        return r === void 0 && (r = ge), Lt(function() {
            return vr(e, r)
        })
    }

    function Hr(e, r) {
        return r === void 0 && (r = null), r = r != null ? r : e, A(function(t, o) {
            var n = [],
                i = 0;
            t.subscribe(L(o, function(f) {
                var s, u, a, c, p = null;
                i++ % r === 0 && n.push([]);
                try {
                    for (var l = Y(n), v = l.next(); !v.done; v = l.next()) {
                        var d = v.value;
                        d.push(f), e <= d.length && (p = p != null ? p : [], p.push(d))
                    }
                } catch (w) {
                    s = {
                        error: w
                    }
                } finally {
                    try {
                        v && !v.done && (u = l.return) && u.call(l)
                    } finally {
                        if (s) throw s.error
                    }
                }
                if (p) try {
                    for (var m = Y(p), x = m.next(); !x.done; x = m.next()) {
                        var d = x.value;
                        ue(n, d), o.next(d)
                    }
                } catch (w) {
                    a = {
                        error: w
                    }
                } finally {
                    try {
                        x && !x.done && (c = m.return) && c.call(m)
                    } finally {
                        if (a) throw a.error
                    }
                }
            }, function() {
                var f, s;
                try {
                    for (var u = Y(n), a = u.next(); !a.done; a = u.next()) {
                        var c = a.value;
                        o.next(c)
                    }
                } catch (p) {
                    f = {
                        error: p
                    }
                } finally {
                    try {
                        a && !a.done && (s = u.return) && s.call(u)
                    } finally {
                        if (f) throw f.error
                    }
                }
                o.complete()
            }, void 0, function() {
                n = null
            }))
        })
    }

    function Wr(e, r) {
        return r === void 0 && (r = ge), A(function(t, o) {
            var n = null,
                i = null,
                f = null,
                s = function() {
                    if (n) {
                        n.unsubscribe(), n = null;
                        var a = i;
                        i = null, o.next(a)
                    }
                };

            function u() {
                var a = f + e,
                    c = r.now();
                if (c < a) {
                    n = this.schedule(void 0, a - c), o.add(n);
                    return
                }
                s()
            }
            t.subscribe(L(o, function(a) {
                i = a, f = r.now(), n || (n = r.schedule(u, e), o.add(n))
            }, function() {
                s(), o.complete()
            }, void 0, function() {
                i = n = null
            }))
        })
    }

    function ke(e) {
        return e <= 0 ? function() {
            return Me
        } : A(function(r, t) {
            var o = 0;
            r.subscribe(L(t, function(n) {
                ++o <= e && (t.next(n), e <= o && t.complete())
            }))
        })
    }

    function Pt() {
        return A(function(e, r) {
            e.subscribe(L(r, ce))
        })
    }

    function Rt(e) {
        return P(function() {
            return e
        })
    }

    function Ur(e, r) {
        return r ? function(t) {
            return $e(r.pipe(ke(1), Pt()), t.pipe(Ur(e)))
        } : we(function(t, o) {
            return k(e(t, o)).pipe(ke(1), Rt(t))
        })
    }

    function zr(e, r) {
        r === void 0 && (r = ge);
        var t = vr(e, r);
        return Ur(function() {
            return t
        })
    }

    function pe(e, r) {
        return r === void 0 && (r = G), e = e != null ? e : Xo, A(function(t, o) {
            var n, i = !0;
            t.subscribe(L(o, function(f) {
                var s = r(f);
                (i || !e(n, s)) && (i = !1, n = s, o.next(f))
            }))
        })
    }

    function Xo(e, r) {
        return e === r
    }

    function xr(e, r) {
        return pe(function(t, o) {
            return r ? r(t[e], o[e]) : t[e] === o[e]
        })
    }

    function le(e) {
        return A(function(r, t) {
            try {
                r.subscribe(t)
            } finally {
                t.add(e)
            }
        })
    }

    function kt(e) {
        e === void 0 && (e = {});
        var r = e.connector,
            t = r === void 0 ? function() {
                return new B
            } : r,
            o = e.resetOnError,
            n = o === void 0 ? !0 : o,
            i = e.resetOnComplete,
            f = i === void 0 ? !0 : i,
            s = e.resetOnRefCountZero,
            u = s === void 0 ? !0 : s;
        return function(a) {
            var c, p, l, v = 0,
                d = !1,
                m = !1,
                x = function() {
                    p == null || p.unsubscribe(), p = void 0
                },
                w = function() {
                    x(), c = l = void 0, d = m = !1
                },
                E = function() {
                    var R = c;
                    w(), R == null || R.unsubscribe()
                };
            return A(function(R, h) {
                v++, !m && !d && x();
                var b = l = l != null ? l : t();
                h.add(function() {
                    v--, v === 0 && !m && !d && (p = Vr(E, u))
                }), b.subscribe(h), !c && v > 0 && (c = new ye({
                    next: function(S) {
                        return b.next(S)
                    },
                    error: function(S) {
                        m = !0, x(), p = Vr(w, n, S), b.error(S)
                    },
                    complete: function() {
                        d = !0, x(), p = Vr(w, f), b.complete()
                    }
                }), k(R).subscribe(c))
            })(a)
        }
    }

    function Vr(e, r) {
        for (var t = [], o = 2; o < arguments.length; o++) t[o - 2] = arguments[o];
        if (r === !0) {
            e();
            return
        }
        if (r !== !1) {
            var n = new ye({
                next: function() {
                    n.unsubscribe(), e()
                }
            });
            return k(r.apply(void 0, z([], W(t)))).subscribe(n)
        }
    }

    function me(e, r, t) {
        var o, n, i, f, s = !1;
        return e && typeof e == "object" ? (o = e.bufferSize, f = o === void 0 ? 1 / 0 : o, n = e.windowTime, r = n === void 0 ? 1 / 0 : n, i = e.refCount, s = i === void 0 ? !1 : i, t = e.scheduler) : f = e != null ? e : 1 / 0, kt({
            connector: function() {
                return new ct(f, r, t)
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: s
        })
    }

    function he() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = ne(e);
        return A(function(o, n) {
            (t ? $e(e, o, t) : $e(e, o)).subscribe(n)
        })
    }

    function Q(e, r) {
        return A(function(t, o) {
            var n = null,
                i = 0,
                f = !1,
                s = function() {
                    return f && !n && o.complete()
                };
            t.subscribe(L(o, function(u) {
                n == null || n.unsubscribe();
                var a = 0,
                    c = i++;
                k(e(u, c)).subscribe(n = L(o, function(p) {
                    return o.next(r ? r(u, p, c, a++) : p)
                }, function() {
                    n = null, s()
                }))
            }, function() {
                f = !0, s()
            }))
        })
    }

    function Fe(e, r, t) {
        var o = O(e) || r || t ? {
            next: e,
            error: r,
            complete: t
        } : e;
        return o ? A(function(n, i) {
            var f;
            (f = o.subscribe) === null || f === void 0 || f.call(o);
            var s = !0;
            n.subscribe(L(i, function(u) {
                var a;
                (a = o.next) === null || a === void 0 || a.call(o, u), i.next(u)
            }, function() {
                var u;
                s = !1, (u = o.complete) === null || u === void 0 || u.call(o), i.complete()
            }, function(u) {
                var a;
                s = !1, (a = o.error) === null || a === void 0 || a.call(o, u), i.error(u)
            }, function() {
                var u, a;
                s && ((u = o.unsubscribe) === null || u === void 0 || u.call(o)), (a = o.finalize) === null || a === void 0 || a.call(o)
            }))
        }) : G
    }

    function He() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        var t = Le(e);
        return A(function(o, n) {
            for (var i = e.length, f = new Array(i), s = e.map(function() {
                    return !1
                }), u = !1, a = function(p) {
                    k(e[p]).subscribe(L(n, function(l) {
                        f[p] = l, !u && !s[p] && (s[p] = !0, (u = s.every(G)) && (s = null))
                    }, ce))
                }, c = 0; c < i; c++) a(c);
            o.subscribe(L(n, function(p) {
                if (u) {
                    var l = z([p], W(f));
                    n.next(t ? t.apply(void 0, z([], W(l))) : l)
                }
            }))
        })
    }

    function Ft() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return A(function(t, o) {
            Mt.apply(void 0, z([t], W(e))).subscribe(o)
        })
    }

    function $r() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return Ft.apply(void 0, z([], W(e)))
    }

    function Ht(e, r = document) {
        return Array.from(r.querySelectorAll(e))
    }

    function Z(e, r = document) {
        let t = Wt(e, r);
        if (typeof t == "undefined") throw new ReferenceError(`Missing element: expected "${e}" to be present`);
        return t
    }

    function Wt(e, r = document) {
        return r.querySelector(e) || void 0
    }

    function jr() {
        return document.activeElement instanceof HTMLElement && document.activeElement || void 0
    }
    var Bo = N(D(document.body, "focusin"), D(document.body, "focusout")).pipe(Wr(1), he(void 0), P(() => jr() || document.body), me(1));

    function Ut(e) {
        return Bo.pipe(P(r => e.contains(r)), pe())
    }

    function zt(e) {
        return {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }

    function Vt(e) {
        return N(D(e, "scroll"), D(window, "resize")).pipe(Fr(0, Pr), P(() => zt(e)), he(zt(e)))
    }

    function $t(e, r) {
        if (typeof r == "string" || typeof r == "number") e.innerHTML += r.toString();
        else if (r instanceof Node) e.appendChild(r);
        else if (Array.isArray(r))
            for (let t of r) $t(e, t)
    }

    function J(e, r, ...t) {
        let o = document.createElement(e);
        if (r)
            for (let n of Object.keys(r)) typeof r[n] != "undefined" && (typeof r[n] != "boolean" ? o.setAttribute(n, r[n]) : o.setAttribute(n, ""));
        for (let n of t) $t(o, n);
        return o
    }

    function jt(e) {
        if (e > 999) {
            let r = +((e - 950) % 1e3 > 99);
            return `${((e+1e-6)/1e3).toFixed(r)}k`
        } else return e.toString()
    }

    function Nt(e) {
        let r = J("script", {
            src: e
        });
        return Se(() => (document.head.appendChild(r), N(D(r, "load"), D(r, "error").pipe(Q(() => kr(() => new ReferenceError(`Invalid script: ${e}`))))).pipe(P(() => {}), le(() => document.head.removeChild(r)), ke(1))))
    }
    var Zo = new B,
        Ep = Se(() => typeof ResizeObserver == "undefined" ? Nt("https://unpkg.com/resize-observer-polyfill") : ie(void 0)).pipe(P(() => new ResizeObserver(e => {
            for (let r of e) Zo.next(r)
        })), Q(e => N(je, ie(e)).pipe(le(() => e.disconnect()))), me(1));

    function qt(e) {
        return {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }

    function Dt(e) {
        return {
            width: e.scrollWidth,
            height: e.scrollHeight
        }
    }
    var en = new B,
        Pp = Se(() => ie(new IntersectionObserver(e => {
            for (let r of e) en.next(r)
        }, {
            threshold: 0
        }))).pipe(Q(e => N(je, ie(e)).pipe(le(() => e.disconnect()))), me(1));

    function Qt(e, r = 16) {
        return Vt(e).pipe(P(({
            y: t
        }) => {
            let o = qt(e),
                n = Dt(e);
            return t >= n.height - o.height - r
        }), pe())
    }
    var $p = {
        drawer: Z("[data-md-toggle=drawer]"),
        search: Z("[data-md-toggle=search]")
    };
    var rn = Z("#__config"),
        Ne = JSON.parse(rn.textContent);
    Ne.base = `${new URL(Ne.base,Yt())}`;

    function Kt() {
        return Ne
    }

    function Jt(e, r) {
        return typeof r != "undefined" ? Ne.translations[e].replace("#", r.toString()) : Ne.translations[e]
    }

    function Yt() {
        return new URL(location.href)
    }

    function tn(e, r) {
        return new C(t => {
            let o = new XMLHttpRequest;
            o.open("GET", `${e}`), o.responseType = "blob", o.addEventListener("load", () => {
                o.status >= 200 && o.status < 300 ? (t.next(o.response), t.complete()) : t.error(new Error(o.statusText))
            }), o.addEventListener("error", () => {
                t.error(new Error("Network Error"))
            }), o.addEventListener("abort", () => {
                t.error(new Error("Request aborted"))
            }), typeof(r == null ? void 0 : r.progress$) != "undefined" && (o.addEventListener("progress", n => {
                r.progress$.next(n.loaded / n.total * 100)
            }), r.progress$.next(5)), o.send()
        })
    }

    function br(e, r) {
        return tn(e, r).pipe(Q(t => t.text()), P(t => JSON.parse(t)), me(1))
    }

    function We(e, r = document) {
        return Z(`[data-mdx-component=${e}]`, r)
    }

    function Nr(e, r = document) {
        return Ht(`[data-mdx-component=${e}]`, r)
    }

    function Gt(e) {
        let r = Ut(e),
            t = N(D(e, "keyup"), D(e, "focus").pipe(zr(1))).pipe(P(() => e.value), he(e.value), pe());
        return r.pipe(Ee(o => !o), He(t)).subscribe(([, o]) => {
            let n = document.location.pathname;
            typeof ga == "function" && o.length && ga("send", "pageview", `${n}?q=[icon]+${o}`)
        }), Re([t, r]).pipe(P(([o, n]) => ({
            ref: e,
            value: o,
            focus: n
        })))
    }
    var Qr = Gr(Dr());
    var ao = Gr(Dr());

    function io(e, r) {
        return (0, ao.wrap)(e.shortcode, r, {
            wrap: {
                tagOpen: "<b>",
                tagClose: "</b>"
            }
        })
    }

    function fo(e, r, t) {
        return J("li", {
            class: "mdx-iconsearch-result__item"
        }, J("span", {
            class: "twemoji"
        }, J("img", {
            src: e.url
        })), J("button", {
            class: "md-clipboard--inline",
            title: Jt("clipboard.copy"),
            "data-clipboard-text": t ? e.shortcode : `:${e.shortcode}:`
        }, J("code", null, t ? io(e, r) : `:${io(e,r)}:`)))
    }

    function uo(e) {
        let r = `@${e.name}`;
        return J("a", {
            href: e.url,
            title: r,
            class: "mdx-sponsorship__item"
        }, J("img", {
            src: e.image
        }))
    }

    function co(e) {
        return J("a", {
            href: "https://github.com/sponsors/squidfunk?metadata_origin=docs",
            class: "mdx-sponsorship__item mdx-sponsorship__item--private"
        }, "+", e)
    }

    function on(e, {
        index$: r,
        query$: t
    }) {
        switch (e.getAttribute("data-mdx-mode")) {
            case "file":
                return Re([t.pipe(xr("value")), r.pipe(P(({
                    icons: o
                }) => Object.values(o.data).map(n => n.replace(/\.svg$/, ""))))]).pipe(P(([{
                    value: o
                }, n]) => (0, Qr.filter)(n, o)), Q(o => r.pipe(P(({
                    icons: n
                }) => ({
                    data: o.map(i => ({
                        shortcode: i,
                        url: [n.base, i, ".svg"].join("")
                    }))
                })))));
            default:
                return Re([t.pipe(xr("value")), r.pipe(P(({
                    icons: o,
                    emojis: n
                }) => [...Object.keys(o.data), ...Object.keys(n.data)]))]).pipe(P(([{
                    value: o
                }, n]) => (0, Qr.filter)(n, o)), Q(o => r.pipe(P(({
                    icons: n,
                    emojis: i
                }) => ({
                    data: o.map(f => {
                        let s = f in n.data ? n : i;
                        return {
                            shortcode: f,
                            url: [s.base, s.data[f]].join("")
                        }
                    })
                })))))
        }
    }

    function so(e, {
        index$: r,
        query$: t
    }) {
        let o = new B,
            n = Qt(e).pipe(Ee(Boolean)),
            i = Z(":scope > :first-child", e);
        o.pipe(He(t)).subscribe(([{
            data: u
        }, {
            value: a
        }]) => {
            if (a) switch (u.length) {
                case 0:
                    i.textContent = "No matches";
                    break;
                case 1:
                    i.textContent = "1 match";
                    break;
                default:
                    i.textContent = `${jt(u.length)} matches`
            } else i.textContent = "Type to start searching"
        });
        let f = e.getAttribute("data-mdx-mode") === "file",
            s = Z(":scope > :last-child", e);
        return o.pipe(Fe(() => s.innerHTML = ""), Q(({
            data: u
        }) => N(ie(...u.slice(0, 10)), ie(...u.slice(10)).pipe(Hr(10), $r(n), Q(([a]) => a)))), He(t)).subscribe(([u, {
            value: a
        }]) => s.appendChild(fo(u, a, f))), on(e, {
            query$: t,
            index$: r
        }).pipe(Fe(u => o.next(u)), le(() => o.complete()), P(u => Ke({
            ref: e
        }, u)))
    }

    function po(e) {
        let r = Kt(),
            t = br(new URL("assets/javascripts/iconsearch_index.json", r.base)),
            o = We("iconsearch-query", e),
            n = We("iconsearch-result", e),
            i = Gt(o),
            f = so(n, {
                index$: t,
                query$: i
            });
        return N(i, f)
    }

    function lo(e) {
        let r = br("https://3if8u9o552.execute-api.us-east-1.amazonaws.com/_/"),
            t = We("sponsorship-count"),
            o = We("sponsorship-total");
        return r.subscribe(n => {
            e.removeAttribute("hidden");
            let i = Z(":scope > :first-child", e);
            for (let f of n.sponsors) f.type === "public" && i.appendChild(uo(f.user));
            i.appendChild(co(n.sponsors.filter(({
                type: f
            }) => f === "private").length)), t.innerText = `${n.sponsors.length}`, o.innerText = `$ ${n.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} a month`
        }), r.pipe(P(n => Ke({
            ref: e
        }, n)))
    }

    function mo() {
        let {
            origin: e
        } = new URL(location.href);
        D(document.body, "click").subscribe(r => {
            if (r.target instanceof HTMLElement) {
                let t = r.target.closest("a");
                t && t.origin !== e && ga("send", "event", "outbound", "click", t.href)
            }
        })
    }
    mo();
    var nn = document$.pipe(Q(() => N(...Nr("iconsearch").map(e => po(e)), ...Nr("sponsorship").map(e => lo(e)))));
    nn.subscribe();
})();
//# sourceMappingURL=custom.9c11c319.min.js.map