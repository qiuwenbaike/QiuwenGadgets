(function Wikiplus() {
	/*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
	var t = {
		3099: function (t) {
			t.exports = function (t) {
				if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
				return t;
			};
		},
		6077: function (t, e, n) {
			var r = n(111);
			t.exports = function (t) {
				if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + ' as a prototype');
				return t;
			};
		},
		1223: function (t, e, n) {
			var r = n(5112),
				i = n(30),
				o = n(3070),
				a = r('unscopables'),
				c = Array.prototype;
			null == c[a] && o.f(c, a, {configurable: !0, value: i(null)}),
				(t.exports = function (t) {
					c[a][t] = !0;
				});
		},
		1530: function (t, e, n) {
			'use strict';
			var r = n(8710).charAt;
			t.exports = function (t, e, n) {
				return e + (n ? r(t, e).length : 1);
			};
		},
		5787: function (t) {
			t.exports = function (t, e, n) {
				if (!(t instanceof e)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
				return t;
			};
		},
		9670: function (t, e, n) {
			var r = n(111);
			t.exports = function (t) {
				if (!r(t)) throw TypeError(String(t) + ' is not an object');
				return t;
			};
		},
		8533: function (t, e, n) {
			'use strict';
			var r = n(2092).forEach,
				i = n(9341),
				o = n(9207),
				a = i('forEach'),
				c = o('forEach');
			t.exports =
				a && c
					? [].forEach
					: function (t) {
							return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
					  };
		},
		8457: function (t, e, n) {
			'use strict';
			var r = n(9974),
				i = n(7908),
				o = n(3411),
				a = n(7659),
				c = n(7466),
				u = n(6135),
				s = n(1246);
			t.exports = function (t) {
				var e,
					n,
					l,
					f,
					p,
					d,
					h = i(t),
					v = 'function' == typeof this ? this : Array,
					g = arguments.length,
					m = g > 1 ? arguments[1] : void 0,
					y = void 0 !== m,
					k = s(h),
					b = 0;
				if ((y && (m = r(m, g > 2 ? arguments[2] : void 0, 2)), null == k || (v == Array && a(k))))
					for (n = new v((e = c(h.length))); e > b; b++) (d = y ? m(h[b], b) : h[b]), u(n, b, d);
				else
					for (p = (f = k.call(h)).next, n = new v(); !(l = p.call(f)).done; b++)
						(d = y ? o(f, m, [l.value, b], !0) : l.value), u(n, b, d);
				return (n.length = b), n;
			};
		},
		1318: function (t, e, n) {
			var r = n(5656),
				i = n(7466),
				o = n(1400),
				a = function (t) {
					return function (e, n, a) {
						var c,
							u = r(e),
							s = i(u.length),
							l = o(a, s);
						if (t && n != n) {
							for (; s > l; ) if ((c = u[l++]) != c) return !0;
						} else for (; s > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
						return !t && -1;
					};
				};
			t.exports = {includes: a(!0), indexOf: a(!1)};
		},
		2092: function (t, e, n) {
			var r = n(9974),
				i = n(8361),
				o = n(7908),
				a = n(7466),
				c = n(5417),
				u = [].push,
				s = function (t) {
					var e = 1 == t,
						n = 2 == t,
						s = 3 == t,
						l = 4 == t,
						f = 6 == t,
						p = 5 == t || f;
					return function (d, h, v, g) {
						for (
							var m,
								y,
								k = o(d),
								b = i(k),
								A = r(h, v, 3),
								w = a(b.length),
								x = 0,
								I = g || c,
								C = e ? I(d, w) : n ? I(d, 0) : void 0;
							w > x;
							x++
						)
							if ((p || x in b) && ((y = A((m = b[x]), x, k)), t))
								if (e) C[x] = y;
								else if (y)
									switch (t) {
										case 3:
											return !0;
										case 5:
											return m;
										case 6:
											return x;
										case 2:
											u.call(C, m);
									}
								else if (l) return !1;
						return f ? -1 : s || l ? l : C;
					};
				};
			t.exports = {
				forEach: s(0),
				map: s(1),
				filter: s(2),
				some: s(3),
				every: s(4),
				find: s(5),
				findIndex: s(6),
			};
		},
		1194: function (t, e, n) {
			var r = n(7293),
				i = n(5112),
				o = n(7392),
				a = i('species');
			t.exports = function (t) {
				return (
					o >= 51 ||
					!r(function () {
						var e = [];
						return (
							((e.constructor = {})[a] = function () {
								return {foo: 1};
							}),
							1 !== e[t](Boolean).foo
						);
					})
				);
			};
		},
		9341: function (t, e, n) {
			'use strict';
			var r = n(7293);
			t.exports = function (t, e) {
				var n = [][t];
				return (
					!!n &&
					r(function () {
						n.call(
							null,
							e ||
								function () {
									throw 1;
								},
							1
						);
					})
				);
			};
		},
		9207: function (t, e, n) {
			var r = n(9781),
				i = n(7293),
				o = n(6656),
				a = Object.defineProperty,
				c = {},
				u = function (t) {
					throw t;
				};
			t.exports = function (t, e) {
				if (o(c, t)) return c[t];
				e || (e = {});
				var n = [][t],
					s = !!o(e, 'ACCESSORS') && e.ACCESSORS,
					l = o(e, 0) ? e[0] : u,
					f = o(e, 1) ? e[1] : void 0;
				return (c[t] =
					!!n &&
					!i(function () {
						if (s && !r) return !0;
						var t = {length: -1};
						s ? a(t, 1, {enumerable: !0, get: u}) : (t[1] = 1), n.call(t, l, f);
					}));
			};
		},
		5417: function (t, e, n) {
			var r = n(111),
				i = n(3157),
				o = n(5112)('species');
			t.exports = function (t, e) {
				var n;
				return (
					i(t) &&
						('function' != typeof (n = t.constructor) || (n !== Array && !i(n.prototype))
							? r(n) && null === (n = n[o]) && (n = void 0)
							: (n = void 0)),
					new (void 0 === n ? Array : n)(0 === e ? 0 : e)
				);
			};
		},
		3411: function (t, e, n) {
			var r = n(9670);
			t.exports = function (t, e, n, i) {
				try {
					return i ? e(r(n)[0], n[1]) : e(n);
				} catch (e) {
					var o = t.return;
					throw (void 0 !== o && r(o.call(t)), e);
				}
			};
		},
		7072: function (t, e, n) {
			var r = n(5112)('iterator'),
				i = !1;
			try {
				var o = 0,
					a = {
						next: function () {
							return {done: !!o++};
						},
						return: function () {
							i = !0;
						},
					};
				(a[r] = function () {
					return this;
				}),
					Array.from(a, function () {
						throw 2;
					});
			} catch (t) {}
			t.exports = function (t, e) {
				if (!e && !i) return !1;
				var n = !1;
				try {
					var o = {};
					(o[r] = function () {
						return {
							next: function () {
								return {done: (n = !0)};
							},
						};
					}),
						t(o);
				} catch (t) {}
				return n;
			};
		},
		4326: function (t) {
			var e = {}.toString;
			t.exports = function (t) {
				return e.call(t).slice(8, -1);
			};
		},
		648: function (t, e, n) {
			var r = n(1694),
				i = n(4326),
				o = n(5112)('toStringTag'),
				a =
					'Arguments' ==
					i(
						(function () {
							return arguments;
						})()
					);
			t.exports = r
				? i
				: function (t) {
						var e, n, r;
						return void 0 === t
							? 'Undefined'
							: null === t
							? 'Null'
							: 'string' ==
							  typeof (n = (function (t, e) {
									try {
										return t[e];
									} catch (t) {}
							  })((e = Object(t)), o))
							? n
							: a
							? i(e)
							: 'Object' == (r = i(e)) && 'function' == typeof e.callee
							? 'Arguments'
							: r;
				  };
		},
		5631: function (t, e, n) {
			'use strict';
			var r = n(3070).f,
				i = n(30),
				o = n(2248),
				a = n(9974),
				c = n(5787),
				u = n(408),
				s = n(654),
				l = n(6340),
				f = n(9781),
				p = n(2423).fastKey,
				d = n(9909),
				h = d.set,
				v = d.getterFor;
			t.exports = {
				getConstructor: function (t, e, n, s) {
					var l = t(function (t, r) {
							c(t, l, e),
								h(t, {type: e, index: i(null), first: void 0, last: void 0, size: 0}),
								f || (t.size = 0),
								null != r && u(r, t[s], t, n);
						}),
						d = v(e),
						g = function (t, e, n) {
							var r,
								i,
								o = d(t),
								a = m(t, e);
							return (
								a
									? (a.value = n)
									: ((o.last = a =
											{
												index: (i = p(e, !0)),
												key: e,
												value: n,
												previous: (r = o.last),
												next: void 0,
												removed: !1,
											}),
									  o.first || (o.first = a),
									  r && (r.next = a),
									  f ? o.size++ : t.size++,
									  'F' !== i && (o.index[i] = a)),
								t
							);
						},
						m = function (t, e) {
							var n,
								r = d(t),
								i = p(e);
							if ('F' !== i) return r.index[i];
							for (n = r.first; n; n = n.next) if (n.key == e) return n;
						};
					return (
						o(l.prototype, {
							clear: function () {
								for (var t = d(this), e = t.index, n = t.first; n; )
									(n.removed = !0),
										n.previous && (n.previous = n.previous.next = void 0),
										delete e[n.index],
										(n = n.next);
								(t.first = t.last = void 0), f ? (t.size = 0) : (this.size = 0);
							},
							delete: function (t) {
								var e = this,
									n = d(e),
									r = m(e, t);
								if (r) {
									var i = r.next,
										o = r.previous;
									delete n.index[r.index],
										(r.removed = !0),
										o && (o.next = i),
										i && (i.previous = o),
										n.first == r && (n.first = i),
										n.last == r && (n.last = o),
										f ? n.size-- : e.size--;
								}
								return !!r;
							},
							forEach: function (t) {
								for (
									var e, n = d(this), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
									(e = e ? e.next : n.first);

								)
									for (r(e.value, e.key, this); e && e.removed; ) e = e.previous;
							},
							has: function (t) {
								return !!m(this, t);
							},
						}),
						o(
							l.prototype,
							n
								? {
										get: function (t) {
											var e = m(this, t);
											return e && e.value;
										},
										set: function (t, e) {
											return g(this, 0 === t ? 0 : t, e);
										},
								  }
								: {
										add: function (t) {
											return g(this, (t = 0 === t ? 0 : t), t);
										},
								  }
						),
						f &&
							r(l.prototype, 'size', {
								get: function () {
									return d(this).size;
								},
							}),
						l
					);
				},
				setStrong: function (t, e, n) {
					var r = e + ' Iterator',
						i = v(e),
						o = v(r);
					s(
						t,
						e,
						function (t, e) {
							h(this, {type: r, target: t, state: i(t), kind: e, last: void 0});
						},
						function () {
							for (var t = o(this), e = t.kind, n = t.last; n && n.removed; ) n = n.previous;
							return t.target && (t.last = n = n ? n.next : t.state.first)
								? 'keys' == e
									? {value: n.key, done: !1}
									: 'values' == e
									? {value: n.value, done: !1}
									: {value: [n.key, n.value], done: !1}
								: ((t.target = void 0), {value: void 0, done: !0});
						},
						n ? 'entries' : 'values',
						!n,
						!0
					),
						l(e);
				},
			};
		},
		7710: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(7854),
				o = n(4705),
				a = n(1320),
				c = n(2423),
				u = n(408),
				s = n(5787),
				l = n(111),
				f = n(7293),
				p = n(7072),
				d = n(8003),
				h = n(9587);
			t.exports = function (t, e, n) {
				var v = -1 !== t.indexOf('Map'),
					g = -1 !== t.indexOf('Weak'),
					m = v ? 'set' : 'add',
					y = i[t],
					k = y && y.prototype,
					b = y,
					A = {},
					w = function (t) {
						var e = k[t];
						a(
							k,
							t,
							'add' == t
								? function (t) {
										return e.call(this, 0 === t ? 0 : t), this;
								  }
								: 'delete' == t
								? function (t) {
										return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t);
								  }
								: 'get' == t
								? function (t) {
										return g && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
								  }
								: 'has' == t
								? function (t) {
										return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t);
								  }
								: function (t, n) {
										return e.call(this, 0 === t ? 0 : t, n), this;
								  }
						);
					};
				if (
					o(
						t,
						'function' != typeof y ||
							!(
								g ||
								(k.forEach &&
									!f(function () {
										new y().entries().next();
									}))
							)
					)
				)
					(b = n.getConstructor(e, t, v, m)), (c.REQUIRED = !0);
				else if (o(t, !0)) {
					var x = new b(),
						I = x[m](g ? {} : -0, 1) != x,
						C = f(function () {
							x.has(1);
						}),
						B = p(function (t) {
							new y(t);
						}),
						_ =
							!g &&
							f(function () {
								for (var t = new y(), e = 5; e--; ) t[m](e, e);
								return !t.has(-0);
							});
					B ||
						(((b = e(function (e, n) {
							s(e, b, t);
							var r = h(new y(), e, b);
							return null != n && u(n, r[m], r, v), r;
						})).prototype = k),
						(k.constructor = b)),
						(C || _) && (w('delete'), w('has'), v && w('get')),
						(_ || I) && w(m),
						g && k.clear && delete k.clear;
				}
				return (A[t] = b), r({global: !0, forced: b != y}, A), d(b, t), g || n.setStrong(b, t, v), b;
			};
		},
		9920: function (t, e, n) {
			var r = n(6656),
				i = n(3887),
				o = n(1236),
				a = n(3070);
			t.exports = function (t, e) {
				for (var n = i(e), c = a.f, u = o.f, s = 0; s < n.length; s++) {
					var l = n[s];
					r(t, l) || c(t, l, u(e, l));
				}
			};
		},
		4964: function (t, e, n) {
			var r = n(5112)('match');
			t.exports = function (t) {
				var e = /./;
				try {
					'/./'[t](e);
				} catch (n) {
					try {
						return (e[r] = !1), '/./'[t](e);
					} catch (t) {}
				}
				return !1;
			};
		},
		8544: function (t, e, n) {
			var r = n(7293);
			t.exports = !r(function () {
				function t() {}
				return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
			});
		},
		4994: function (t, e, n) {
			'use strict';
			var r = n(3383).IteratorPrototype,
				i = n(30),
				o = n(9114),
				a = n(8003),
				c = n(7497),
				u = function () {
					return this;
				};
			t.exports = function (t, e, n) {
				var s = e + ' Iterator';
				return (t.prototype = i(r, {next: o(1, n)})), a(t, s, !1, !0), (c[s] = u), t;
			};
		},
		8880: function (t, e, n) {
			var r = n(9781),
				i = n(3070),
				o = n(9114);
			t.exports = r
				? function (t, e, n) {
						return i.f(t, e, o(1, n));
				  }
				: function (t, e, n) {
						return (t[e] = n), t;
				  };
		},
		9114: function (t) {
			t.exports = function (t, e) {
				return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
			};
		},
		6135: function (t, e, n) {
			'use strict';
			var r = n(7593),
				i = n(3070),
				o = n(9114);
			t.exports = function (t, e, n) {
				var a = r(e);
				a in t ? i.f(t, a, o(0, n)) : (t[a] = n);
			};
		},
		654: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(4994),
				o = n(9518),
				a = n(7674),
				c = n(8003),
				u = n(8880),
				s = n(1320),
				l = n(5112),
				f = n(1913),
				p = n(7497),
				d = n(3383),
				h = d.IteratorPrototype,
				v = d.BUGGY_SAFARI_ITERATORS,
				g = l('iterator'),
				m = 'keys',
				y = 'values',
				k = 'entries',
				b = function () {
					return this;
				};
			t.exports = function (t, e, n, l, d, A, w) {
				i(n, e, l);
				var x,
					I,
					C,
					B = function (t) {
						if (t === d && W) return W;
						if (!v && t in O) return O[t];
						switch (t) {
							case m:
							case y:
							case k:
								return function () {
									return new n(this, t);
								};
						}
						return function () {
							return new n(this);
						};
					},
					_ = e + ' Iterator',
					S = !1,
					O = t.prototype,
					P = O[g] || O['@@iterator'] || (d && O[d]),
					W = (!v && P) || B(d),
					E = ('Array' == e && O.entries) || P;
				if (
					(E &&
						((x = o(E.call(new t()))),
						h !== Object.prototype &&
							x.next &&
							(f || o(x) === h || (a ? a(x, h) : 'function' != typeof x[g] && u(x, g, b)),
							c(x, _, !0, !0),
							f && (p[_] = b))),
					d == y &&
						P &&
						P.name !== y &&
						((S = !0),
						(W = function () {
							return P.call(this);
						})),
					(f && !w) || O[g] === W || u(O, g, W),
					(p[e] = W),
					d)
				)
					if (((I = {values: B(y), keys: A ? W : B(m), entries: B(k)}), w))
						for (C in I) (v || S || !(C in O)) && s(O, C, I[C]);
					else r({target: e, proto: !0, forced: v || S}, I);
				return I;
			};
		},
		7235: function (t, e, n) {
			var r = n(857),
				i = n(6656),
				o = n(6061),
				a = n(3070).f;
			t.exports = function (t) {
				var e = r.Symbol || (r.Symbol = {});
				i(e, t) || a(e, t, {value: o.f(t)});
			};
		},
		9781: function (t, e, n) {
			var r = n(7293);
			t.exports = !r(function () {
				return (
					7 !=
					Object.defineProperty({}, 1, {
						get: function () {
							return 7;
						},
					})[1]
				);
			});
		},
		317: function (t, e, n) {
			var r = n(7854),
				i = n(111),
				o = r.document,
				a = i(o) && i(o.createElement);
			t.exports = function (t) {
				return a ? o.createElement(t) : {};
			};
		},
		8324: function (t) {
			t.exports = {
				CSSRuleList: 0,
				CSSStyleDeclaration: 0,
				CSSValueList: 0,
				ClientRectList: 0,
				DOMRectList: 0,
				DOMStringList: 0,
				DOMTokenList: 1,
				DataTransferItemList: 0,
				FileList: 0,
				HTMLAllCollection: 0,
				HTMLCollection: 0,
				HTMLFormElement: 0,
				HTMLSelectElement: 0,
				MediaList: 0,
				MimeTypeArray: 0,
				NamedNodeMap: 0,
				NodeList: 1,
				PaintRequestList: 0,
				Plugin: 0,
				PluginArray: 0,
				SVGLengthList: 0,
				SVGNumberList: 0,
				SVGPathSegList: 0,
				SVGPointList: 0,
				SVGStringList: 0,
				SVGTransformList: 0,
				SourceBufferList: 0,
				StyleSheetList: 0,
				TextTrackCueList: 0,
				TextTrackList: 0,
				TouchList: 0,
			};
		},
		6833: function (t, e, n) {
			var r = n(8113);
			t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
		},
		8113: function (t, e, n) {
			var r = n(5005);
			t.exports = r('navigator', 'userAgent') || '';
		},
		7392: function (t, e, n) {
			var r,
				i,
				o = n(7854),
				a = n(8113),
				c = o.process,
				u = c && c.versions,
				s = u && u.v8;
			s
				? (i = (r = s.split('.'))[0] + r[1])
				: a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]),
				(t.exports = i && +i);
		},
		748: function (t) {
			t.exports = [
				'constructor',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'toLocaleString',
				'toString',
				'valueOf',
			];
		},
		2109: function (t, e, n) {
			var r = n(7854),
				i = n(1236).f,
				o = n(8880),
				a = n(1320),
				c = n(3505),
				u = n(9920),
				s = n(4705);
			t.exports = function (t, e) {
				var n,
					l,
					f,
					p,
					d,
					h = t.target,
					v = t.global,
					g = t.stat;
				if ((n = v ? r : g ? r[h] || c(h, {}) : (r[h] || {}).prototype))
					for (l in e) {
						if (
							((p = e[l]),
							(f = t.noTargetGet ? (d = i(n, l)) && d.value : n[l]),
							!s(v ? l : h + (g ? '.' : '#') + l, t.forced) && void 0 !== f)
						) {
							if (typeof p == typeof f) continue;
							u(p, f);
						}
						(t.sham || (f && f.sham)) && o(p, 'sham', !0), a(n, l, p, t);
					}
			};
		},
		7293: function (t) {
			t.exports = function (t) {
				try {
					return !!t();
				} catch (t) {
					return !0;
				}
			};
		},
		7007: function (t, e, n) {
			'use strict';
			n(4916);
			var r = n(1320),
				i = n(7293),
				o = n(5112),
				a = n(2261),
				c = n(8880),
				u = o('species'),
				s = !i(function () {
					var t = /./;
					return (
						(t.exec = function () {
							var t = [];
							return (t.groups = {a: '7'}), t;
						}),
						'7' !== ''.replace(t, '$<a>')
					);
				}),
				l = '$0' === 'a'.replace(/./, '$0'),
				f = o('replace'),
				p = !!/./[f] && '' === /./[f]('a', '$0'),
				d = !i(function () {
					var t = /(?:)/,
						e = t.exec;
					t.exec = function () {
						return e.apply(this, arguments);
					};
					var n = 'ab'.split(t);
					return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
				});
			t.exports = function (t, e, n, f) {
				var h = o(t),
					v = !i(function () {
						var e = {};
						return (
							(e[h] = function () {
								return 7;
							}),
							7 != ''[t](e)
						);
					}),
					g =
						v &&
						!i(function () {
							var e = !1,
								n = /a/;
							return (
								'split' === t &&
									(((n = {}).constructor = {}),
									(n.constructor[u] = function () {
										return n;
									}),
									(n.flags = ''),
									(n[h] = /./[h])),
								(n.exec = function () {
									return (e = !0), null;
								}),
								n[h](''),
								!e
							);
						});
				if (!v || !g || ('replace' === t && (!s || !l || p)) || ('split' === t && !d)) {
					var m = /./[h],
						y = n(
							h,
							''[t],
							function (t, e, n, r, i) {
								return e.exec === a
									? v && !i
										? {done: !0, value: m.call(e, n, r)}
										: {done: !0, value: t.call(n, e, r)}
									: {done: !1};
							},
							{REPLACE_KEEPS_$0: l, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p}
						),
						k = y[0],
						b = y[1];
					r(String.prototype, t, k),
						r(
							RegExp.prototype,
							h,
							2 == e
								? function (t, e) {
										return b.call(t, this, e);
								  }
								: function (t) {
										return b.call(t, this);
								  }
						);
				}
				f && c(RegExp.prototype[h], 'sham', !0);
			};
		},
		6677: function (t, e, n) {
			var r = n(7293);
			t.exports = !r(function () {
				return Object.isExtensible(Object.preventExtensions({}));
			});
		},
		9974: function (t, e, n) {
			var r = n(3099);
			t.exports = function (t, e, n) {
				if ((r(t), void 0 === e)) return t;
				switch (n) {
					case 0:
						return function () {
							return t.call(e);
						};
					case 1:
						return function (n) {
							return t.call(e, n);
						};
					case 2:
						return function (n, r) {
							return t.call(e, n, r);
						};
					case 3:
						return function (n, r, i) {
							return t.call(e, n, r, i);
						};
				}
				return function () {
					return t.apply(e, arguments);
				};
			};
		},
		7065: function (t, e, n) {
			'use strict';
			var r = n(3099),
				i = n(111),
				o = [].slice,
				a = {},
				c = function (t, e, n) {
					if (!(e in a)) {
						for (var r = [], i = 0; i < e; i++) r[i] = 'a[' + i + ']';
						a[e] = Function('C,a', 'return new C(' + r.join(',') + ')');
					}
					return a[e](t, n);
				};
			t.exports =
				Function.bind ||
				function (t) {
					var e = r(this),
						n = o.call(arguments, 1),
						a = function () {
							var r = n.concat(o.call(arguments));
							return this instanceof a ? c(e, r.length, r) : e.apply(t, r);
						};
					return i(e.prototype) && (a.prototype = e.prototype), a;
				};
		},
		5005: function (t, e, n) {
			var r = n(857),
				i = n(7854),
				o = function (t) {
					return 'function' == typeof t ? t : void 0;
				};
			t.exports = function (t, e) {
				return arguments.length < 2 ? o(r[t]) || o(i[t]) : (r[t] && r[t][e]) || (i[t] && i[t][e]);
			};
		},
		1246: function (t, e, n) {
			var r = n(648),
				i = n(7497),
				o = n(5112)('iterator');
			t.exports = function (t) {
				if (null != t) return t[o] || t['@@iterator'] || i[r(t)];
			};
		},
		8554: function (t, e, n) {
			var r = n(9670),
				i = n(1246);
			t.exports = function (t) {
				var e = i(t);
				if ('function' != typeof e) throw TypeError(String(t) + ' is not iterable');
				return r(e.call(t));
			};
		},
		7854: function (t, e, n) {
			var r = function (t) {
				return t && t.Math == Math && t;
			};
			t.exports =
				r('object' == typeof globalThis && globalThis) ||
				r('object' == typeof window && window) ||
				r('object' == typeof self && self) ||
				r('object' == typeof n.g && n.g) ||
				Function('return this')();
		},
		6656: function (t) {
			var e = {}.hasOwnProperty;
			t.exports = function (t, n) {
				return e.call(t, n);
			};
		},
		3501: function (t) {
			t.exports = {};
		},
		842: function (t, e, n) {
			var r = n(7854);
			t.exports = function (t, e) {
				var n = r.console;
				n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
			};
		},
		490: function (t, e, n) {
			var r = n(5005);
			t.exports = r('document', 'documentElement');
		},
		4664: function (t, e, n) {
			var r = n(9781),
				i = n(7293),
				o = n(317);
			t.exports =
				!r &&
				!i(function () {
					return (
						7 !=
						Object.defineProperty(o('div'), 'a', {
							get: function () {
								return 7;
							},
						}).a
					);
				});
		},
		8361: function (t, e, n) {
			var r = n(7293),
				i = n(4326),
				o = ''.split;
			t.exports = r(function () {
				return !Object('z').propertyIsEnumerable(0);
			})
				? function (t) {
						return 'String' == i(t) ? o.call(t, '') : Object(t);
				  }
				: Object;
		},
		9587: function (t, e, n) {
			var r = n(111),
				i = n(7674);
			t.exports = function (t, e, n) {
				var o, a;
				return (
					i &&
						'function' == typeof (o = e.constructor) &&
						o !== n &&
						r((a = o.prototype)) &&
						a !== n.prototype &&
						i(t, a),
					t
				);
			};
		},
		2788: function (t, e, n) {
			var r = n(5465),
				i = Function.toString;
			'function' != typeof r.inspectSource &&
				(r.inspectSource = function (t) {
					return i.call(t);
				}),
				(t.exports = r.inspectSource);
		},
		2423: function (t, e, n) {
			var r = n(3501),
				i = n(111),
				o = n(6656),
				a = n(3070).f,
				c = n(9711),
				u = n(6677),
				s = c('meta'),
				l = 0,
				f =
					Object.isExtensible ||
					function () {
						return !0;
					},
				p = function (t) {
					a(t, s, {value: {objectID: 'O' + ++l, weakData: {}}});
				},
				d = (t.exports = {
					REQUIRED: !1,
					fastKey: function (t, e) {
						if (!i(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
						if (!o(t, s)) {
							if (!f(t)) return 'F';
							if (!e) return 'E';
							p(t);
						}
						return t[s].objectID;
					},
					getWeakData: function (t, e) {
						if (!o(t, s)) {
							if (!f(t)) return !0;
							if (!e) return !1;
							p(t);
						}
						return t[s].weakData;
					},
					onFreeze: function (t) {
						return u && d.REQUIRED && f(t) && !o(t, s) && p(t), t;
					},
				});
			r[s] = !0;
		},
		9909: function (t, e, n) {
			var r,
				i,
				o,
				a = n(8536),
				c = n(7854),
				u = n(111),
				s = n(8880),
				l = n(6656),
				f = n(6200),
				p = n(3501),
				d = c.WeakMap;
			if (a) {
				var h = new d(),
					v = h.get,
					g = h.has,
					m = h.set;
				(r = function (t, e) {
					return m.call(h, t, e), e;
				}),
					(i = function (t) {
						return v.call(h, t) || {};
					}),
					(o = function (t) {
						return g.call(h, t);
					});
			} else {
				var y = f('state');
				(p[y] = !0),
					(r = function (t, e) {
						return s(t, y, e), e;
					}),
					(i = function (t) {
						return l(t, y) ? t[y] : {};
					}),
					(o = function (t) {
						return l(t, y);
					});
			}
			t.exports = {
				set: r,
				get: i,
				has: o,
				enforce: function (t) {
					return o(t) ? i(t) : r(t, {});
				},
				getterFor: function (t) {
					return function (e) {
						var n;
						if (!u(e) || (n = i(e)).type !== t)
							throw TypeError('Incompatible receiver, ' + t + ' required');
						return n;
					};
				},
			};
		},
		7659: function (t, e, n) {
			var r = n(5112),
				i = n(7497),
				o = r('iterator'),
				a = Array.prototype;
			t.exports = function (t) {
				return void 0 !== t && (i.Array === t || a[o] === t);
			};
		},
		3157: function (t, e, n) {
			var r = n(4326);
			t.exports =
				Array.isArray ||
				function (t) {
					return 'Array' == r(t);
				};
		},
		4705: function (t, e, n) {
			var r = n(7293),
				i = /#|\.prototype\./,
				o = function (t, e) {
					var n = c[a(t)];
					return n == s || (n != u && ('function' == typeof e ? r(e) : !!e));
				},
				a = (o.normalize = function (t) {
					return String(t).replace(i, '.').toLowerCase();
				}),
				c = (o.data = {}),
				u = (o.NATIVE = 'N'),
				s = (o.POLYFILL = 'P');
			t.exports = o;
		},
		111: function (t) {
			t.exports = function (t) {
				return 'object' == typeof t ? null !== t : 'function' == typeof t;
			};
		},
		1913: function (t) {
			t.exports = !1;
		},
		7850: function (t, e, n) {
			var r = n(111),
				i = n(4326),
				o = n(5112)('match');
			t.exports = function (t) {
				var e;
				return r(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' == i(t));
			};
		},
		408: function (t, e, n) {
			var r = n(9670),
				i = n(7659),
				o = n(7466),
				a = n(9974),
				c = n(1246),
				u = n(3411),
				s = function (t, e) {
					(this.stopped = t), (this.result = e);
				};
			(t.exports = function (t, e, n, l, f) {
				var p,
					d,
					h,
					v,
					g,
					m,
					y,
					k = a(e, n, l ? 2 : 1);
				if (f) p = t;
				else {
					if ('function' != typeof (d = c(t))) throw TypeError('Target is not iterable');
					if (i(d)) {
						for (h = 0, v = o(t.length); v > h; h++)
							if ((g = l ? k(r((y = t[h]))[0], y[1]) : k(t[h])) && g instanceof s) return g;
						return new s(!1);
					}
					p = d.call(t);
				}
				for (m = p.next; !(y = m.call(p)).done; )
					if ('object' == typeof (g = u(p, k, y.value, l)) && g && g instanceof s) return g;
				return new s(!1);
			}).stop = function (t) {
				return new s(!0, t);
			};
		},
		3383: function (t, e, n) {
			'use strict';
			var r,
				i,
				o,
				a = n(9518),
				c = n(8880),
				u = n(6656),
				s = n(5112),
				l = n(1913),
				f = s('iterator'),
				p = !1;
			[].keys && ('next' in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : (p = !0)),
				null == r && (r = {}),
				l ||
					u(r, f) ||
					c(r, f, function () {
						return this;
					}),
				(t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p});
		},
		7497: function (t) {
			t.exports = {};
		},
		5948: function (t, e, n) {
			var r,
				i,
				o,
				a,
				c,
				u,
				s,
				l,
				f = n(7854),
				p = n(1236).f,
				d = n(4326),
				h = n(261).set,
				v = n(6833),
				g = f.MutationObserver || f.WebKitMutationObserver,
				m = f.process,
				y = f.Promise,
				k = 'process' == d(m),
				b = p(f, 'queueMicrotask'),
				A = b && b.value;
			A ||
				((r = function () {
					var t, e;
					for (k && (t = m.domain) && t.exit(); i; ) {
						(e = i.fn), (i = i.next);
						try {
							e();
						} catch (t) {
							throw (i ? a() : (o = void 0), t);
						}
					}
					(o = void 0), t && t.enter();
				}),
				k
					? (a = function () {
							m.nextTick(r);
					  })
					: g && !v
					? ((c = !0),
					  (u = document.createTextNode('')),
					  new g(r).observe(u, {characterData: !0}),
					  (a = function () {
							u.data = c = !c;
					  }))
					: y && y.resolve
					? ((s = y.resolve(void 0)),
					  (l = s.then),
					  (a = function () {
							l.call(s, r);
					  }))
					: (a = function () {
							h.call(f, r);
					  })),
				(t.exports =
					A ||
					function (t) {
						var e = {fn: t, next: void 0};
						o && (o.next = e), i || ((i = e), a()), (o = e);
					});
		},
		3366: function (t, e, n) {
			var r = n(7854);
			t.exports = r.Promise;
		},
		133: function (t, e, n) {
			var r = n(7293);
			t.exports =
				!!Object.getOwnPropertySymbols &&
				!r(function () {
					return !String(Symbol());
				});
		},
		590: function (t, e, n) {
			var r = n(7293),
				i = n(5112),
				o = n(1913),
				a = i('iterator');
			t.exports = !r(function () {
				var t = new URL('b?a=1&b=2&c=3', 'http://a'),
					e = t.searchParams,
					n = '';
				return (
					(t.pathname = 'c%20d'),
					e.forEach(function (t, r) {
						e.delete('b'), (n += r + t);
					}),
					(o && !t.toJSON) ||
						!e.sort ||
						'http://a/c%20d?a=1&c=3' !== t.href ||
						'3' !== e.get('c') ||
						'a=1' !== String(new URLSearchParams('?a=1')) ||
						!e[a] ||
						'a' !== new URL('https://a@b').username ||
						'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
						'xn--e1aybc' !== new URL('http://тест').host ||
						'#%D0%B1' !== new URL('http://a#б').hash ||
						'a1c3' !== n ||
						'x' !== new URL('http://x', void 0).host
				);
			});
		},
		8536: function (t, e, n) {
			var r = n(7854),
				i = n(2788),
				o = r.WeakMap;
			t.exports = 'function' == typeof o && /native code/.test(i(o));
		},
		8523: function (t, e, n) {
			'use strict';
			var r = n(3099),
				i = function (t) {
					var e, n;
					(this.promise = new t(function (t, r) {
						if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
						(e = t), (n = r);
					})),
						(this.resolve = r(e)),
						(this.reject = r(n));
				};
			t.exports.f = function (t) {
				return new i(t);
			};
		},
		3929: function (t, e, n) {
			var r = n(7850);
			t.exports = function (t) {
				if (r(t)) throw TypeError("The method doesn't accept regular expressions");
				return t;
			};
		},
		1574: function (t, e, n) {
			'use strict';
			var r = n(9781),
				i = n(7293),
				o = n(1956),
				a = n(5181),
				c = n(5296),
				u = n(7908),
				s = n(8361),
				l = Object.assign,
				f = Object.defineProperty;
			t.exports =
				!l ||
				i(function () {
					if (
						r &&
						1 !==
							l(
								{b: 1},
								l(
									f({}, 'a', {
										enumerable: !0,
										get: function () {
											f(this, 'b', {value: 3, enumerable: !1});
										},
									}),
									{b: 2}
								)
							).b
					)
						return !0;
					var t = {},
						e = {},
						n = Symbol(),
						i = 'abcdefghijklmnopqrst';
					return (
						(t[n] = 7),
						i.split('').forEach(function (t) {
							e[t] = t;
						}),
						7 != l({}, t)[n] || o(l({}, e)).join('') != i
					);
				})
					? function (t, e) {
							for (var n = u(t), i = arguments.length, l = 1, f = a.f, p = c.f; i > l; )
								for (
									var d, h = s(arguments[l++]), v = f ? o(h).concat(f(h)) : o(h), g = v.length, m = 0;
									g > m;

								)
									(d = v[m++]), (r && !p.call(h, d)) || (n[d] = h[d]);
							return n;
					  }
					: l;
		},
		30: function (t, e, n) {
			var r,
				i = n(9670),
				o = n(6048),
				a = n(748),
				c = n(3501),
				u = n(490),
				s = n(317),
				l = n(6200),
				f = l('IE_PROTO'),
				p = function () {},
				d = function (t) {
					return '<script>' + t + '</' + 'script>';
				},
				h = function () {
					try {
						r = document.domain && new ActiveXObject('htmlfile');
					} catch (t) {}
					var t, e;
					h = r
						? (function (t) {
								t.write(d('')), t.close();
								var e = t.parentWindow.Object;
								return (t = null), e;
						  })(r)
						: (((e = s('iframe')).style.display = 'none'),
						  u.appendChild(e),
						  (e.src = String('javascript:')),
						  (t = e.contentWindow.document).open(),
						  t.write(d('document.F=Object')),
						  t.close(),
						  t.F);
					for (var n = a.length; n--; ) delete h.prototype[a[n]];
					return h();
				};
			(c[f] = !0),
				(t.exports =
					Object.create ||
					function (t, e) {
						var n;
						return (
							null !== t
								? ((p.prototype = i(t)), (n = new p()), (p.prototype = null), (n[f] = t))
								: (n = h()),
							void 0 === e ? n : o(n, e)
						);
					});
		},
		6048: function (t, e, n) {
			var r = n(9781),
				i = n(3070),
				o = n(9670),
				a = n(1956);
			t.exports = r
				? Object.defineProperties
				: function (t, e) {
						o(t);
						for (var n, r = a(e), c = r.length, u = 0; c > u; ) i.f(t, (n = r[u++]), e[n]);
						return t;
				  };
		},
		3070: function (t, e, n) {
			var r = n(9781),
				i = n(4664),
				o = n(9670),
				a = n(7593),
				c = Object.defineProperty;
			e.f = r
				? c
				: function (t, e, n) {
						if ((o(t), (e = a(e, !0)), o(n), i))
							try {
								return c(t, e, n);
							} catch (t) {}
						if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
						return 'value' in n && (t[e] = n.value), t;
				  };
		},
		1236: function (t, e, n) {
			var r = n(9781),
				i = n(5296),
				o = n(9114),
				a = n(5656),
				c = n(7593),
				u = n(6656),
				s = n(4664),
				l = Object.getOwnPropertyDescriptor;
			e.f = r
				? l
				: function (t, e) {
						if (((t = a(t)), (e = c(e, !0)), s))
							try {
								return l(t, e);
							} catch (t) {}
						if (u(t, e)) return o(!i.f.call(t, e), t[e]);
				  };
		},
		1156: function (t, e, n) {
			var r = n(5656),
				i = n(8006).f,
				o = {}.toString,
				a =
					'object' == typeof window && window && Object.getOwnPropertyNames
						? Object.getOwnPropertyNames(window)
						: [];
			t.exports.f = function (t) {
				return a && '[object Window]' == o.call(t)
					? (function (t) {
							try {
								return i(t);
							} catch (t) {
								return a.slice();
							}
					  })(t)
					: i(r(t));
			};
		},
		8006: function (t, e, n) {
			var r = n(6324),
				i = n(748).concat('length', 'prototype');
			e.f =
				Object.getOwnPropertyNames ||
				function (t) {
					return r(t, i);
				};
		},
		5181: function (t, e) {
			e.f = Object.getOwnPropertySymbols;
		},
		9518: function (t, e, n) {
			var r = n(6656),
				i = n(7908),
				o = n(6200),
				a = n(8544),
				c = o('IE_PROTO'),
				u = Object.prototype;
			t.exports = a
				? Object.getPrototypeOf
				: function (t) {
						return (
							(t = i(t)),
							r(t, c)
								? t[c]
								: 'function' == typeof t.constructor && t instanceof t.constructor
								? t.constructor.prototype
								: t instanceof Object
								? u
								: null
						);
				  };
		},
		6324: function (t, e, n) {
			var r = n(6656),
				i = n(5656),
				o = n(1318).indexOf,
				a = n(3501);
			t.exports = function (t, e) {
				var n,
					c = i(t),
					u = 0,
					s = [];
				for (n in c) !r(a, n) && r(c, n) && s.push(n);
				for (; e.length > u; ) r(c, (n = e[u++])) && (~o(s, n) || s.push(n));
				return s;
			};
		},
		1956: function (t, e, n) {
			var r = n(6324),
				i = n(748);
			t.exports =
				Object.keys ||
				function (t) {
					return r(t, i);
				};
		},
		5296: function (t, e) {
			'use strict';
			var n = {}.propertyIsEnumerable,
				r = Object.getOwnPropertyDescriptor,
				i = r && !n.call({1: 2}, 1);
			e.f = i
				? function (t) {
						var e = r(this, t);
						return !!e && e.enumerable;
				  }
				: n;
		},
		7674: function (t, e, n) {
			var r = n(9670),
				i = n(6077);
			t.exports =
				Object.setPrototypeOf ||
				('__proto__' in {}
					? (function () {
							var t,
								e = !1,
								n = {};
							try {
								(t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []),
									(e = n instanceof Array);
							} catch (t) {}
							return function (n, o) {
								return r(n), i(o), e ? t.call(n, o) : (n.__proto__ = o), n;
							};
					  })()
					: void 0);
		},
		4699: function (t, e, n) {
			var r = n(9781),
				i = n(1956),
				o = n(5656),
				a = n(5296).f,
				c = function (t) {
					return function (e) {
						for (var n, c = o(e), u = i(c), s = u.length, l = 0, f = []; s > l; )
							(n = u[l++]), (r && !a.call(c, n)) || f.push(t ? [n, c[n]] : c[n]);
						return f;
					};
				};
			t.exports = {entries: c(!0), values: c(!1)};
		},
		288: function (t, e, n) {
			'use strict';
			var r = n(1694),
				i = n(648);
			t.exports = r
				? {}.toString
				: function () {
						return '[object ' + i(this) + ']';
				  };
		},
		3887: function (t, e, n) {
			var r = n(5005),
				i = n(8006),
				o = n(5181),
				a = n(9670);
			t.exports =
				r('Reflect', 'ownKeys') ||
				function (t) {
					var e = i.f(a(t)),
						n = o.f;
					return n ? e.concat(n(t)) : e;
				};
		},
		857: function (t, e, n) {
			var r = n(7854);
			t.exports = r;
		},
		2534: function (t) {
			t.exports = function (t) {
				try {
					return {error: !1, value: t()};
				} catch (t) {
					return {error: !0, value: t};
				}
			};
		},
		9478: function (t, e, n) {
			var r = n(9670),
				i = n(111),
				o = n(8523);
			t.exports = function (t, e) {
				if ((r(t), i(e) && e.constructor === t)) return e;
				var n = o.f(t);
				return (0, n.resolve)(e), n.promise;
			};
		},
		2248: function (t, e, n) {
			var r = n(1320);
			t.exports = function (t, e, n) {
				for (var i in e) r(t, i, e[i], n);
				return t;
			};
		},
		1320: function (t, e, n) {
			var r = n(7854),
				i = n(8880),
				o = n(6656),
				a = n(3505),
				c = n(2788),
				u = n(9909),
				s = u.get,
				l = u.enforce,
				f = String(String).split('String');
			(t.exports = function (t, e, n, c) {
				var u = !!c && !!c.unsafe,
					s = !!c && !!c.enumerable,
					p = !!c && !!c.noTargetGet;
				'function' == typeof n &&
					('string' != typeof e || o(n, 'name') || i(n, 'name', e),
					(l(n).source = f.join('string' == typeof e ? e : ''))),
					t !== r
						? (u ? !p && t[e] && (s = !0) : delete t[e], s ? (t[e] = n) : i(t, e, n))
						: s
						? (t[e] = n)
						: a(e, n);
			})(Function.prototype, 'toString', function () {
				return ('function' == typeof this && s(this).source) || c(this);
			});
		},
		7651: function (t, e, n) {
			var r = n(4326),
				i = n(2261);
			t.exports = function (t, e) {
				var n = t.exec;
				if ('function' == typeof n) {
					var o = n.call(t, e);
					if ('object' != typeof o)
						throw TypeError('RegExp exec method returned something other than an Object or null');
					return o;
				}
				if ('RegExp' !== r(t)) throw TypeError('RegExp#exec called on incompatible receiver');
				return i.call(t, e);
			};
		},
		2261: function (t, e, n) {
			'use strict';
			var r,
				i,
				o = n(7066),
				a = n(2999),
				c = RegExp.prototype.exec,
				u = String.prototype.replace,
				s = c,
				l = ((r = /a/), (i = /b*/g), c.call(r, 'a'), c.call(i, 'a'), 0 !== r.lastIndex || 0 !== i.lastIndex),
				f = a.UNSUPPORTED_Y || a.BROKEN_CARET,
				p = void 0 !== /()??/.exec('')[1];
			(l || p || f) &&
				(s = function (t) {
					var e,
						n,
						r,
						i,
						a = this,
						s = f && a.sticky,
						d = o.call(a),
						h = a.source,
						v = 0,
						g = t;
					return (
						s &&
							(-1 === (d = d.replace('y', '')).indexOf('g') && (d += 'g'),
							(g = String(t).slice(a.lastIndex)),
							a.lastIndex > 0 &&
								(!a.multiline || (a.multiline && '\n' !== t[a.lastIndex - 1])) &&
								((h = '(?: ' + h + ')'), (g = ' ' + g), v++),
							(n = new RegExp('^(?:' + h + ')', d))),
						p && (n = new RegExp('^' + h + '$(?!\\s)', d)),
						l && (e = a.lastIndex),
						(r = c.call(s ? n : a, g)),
						s
							? r
								? ((r.input = r.input.slice(v)),
								  (r[0] = r[0].slice(v)),
								  (r.index = a.lastIndex),
								  (a.lastIndex += r[0].length))
								: (a.lastIndex = 0)
							: l && r && (a.lastIndex = a.global ? r.index + r[0].length : e),
						p &&
							r &&
							r.length > 1 &&
							u.call(r[0], n, function () {
								for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0);
							}),
						r
					);
				}),
				(t.exports = s);
		},
		7066: function (t, e, n) {
			'use strict';
			var r = n(9670);
			t.exports = function () {
				var t = r(this),
					e = '';
				return (
					t.global && (e += 'g'),
					t.ignoreCase && (e += 'i'),
					t.multiline && (e += 'm'),
					t.dotAll && (e += 's'),
					t.unicode && (e += 'u'),
					t.sticky && (e += 'y'),
					e
				);
			};
		},
		2999: function (t, e, n) {
			'use strict';
			var r = n(7293);
			function i(t, e) {
				return RegExp(t, e);
			}
			(e.UNSUPPORTED_Y = r(function () {
				var t = i('a', 'y');
				return (t.lastIndex = 2), null != t.exec('abcd');
			})),
				(e.BROKEN_CARET = r(function () {
					var t = i('^r', 'gy');
					return (t.lastIndex = 2), null != t.exec('str');
				}));
		},
		4488: function (t) {
			t.exports = function (t) {
				if (null == t) throw TypeError("Can't call method on " + t);
				return t;
			};
		},
		3505: function (t, e, n) {
			var r = n(7854),
				i = n(8880);
			t.exports = function (t, e) {
				try {
					i(r, t, e);
				} catch (n) {
					r[t] = e;
				}
				return e;
			};
		},
		6340: function (t, e, n) {
			'use strict';
			var r = n(5005),
				i = n(3070),
				o = n(5112),
				a = n(9781),
				c = o('species');
			t.exports = function (t) {
				var e = r(t),
					n = i.f;
				a &&
					e &&
					!e[c] &&
					n(e, c, {
						configurable: !0,
						get: function () {
							return this;
						},
					});
			};
		},
		8003: function (t, e, n) {
			var r = n(3070).f,
				i = n(6656),
				o = n(5112)('toStringTag');
			t.exports = function (t, e, n) {
				t && !i((t = n ? t : t.prototype), o) && r(t, o, {configurable: !0, value: e});
			};
		},
		6200: function (t, e, n) {
			var r = n(2309),
				i = n(9711),
				o = r('keys');
			t.exports = function (t) {
				return o[t] || (o[t] = i(t));
			};
		},
		5465: function (t, e, n) {
			var r = n(7854),
				i = n(3505),
				o = '__core-js_shared__',
				a = r[o] || i(o, {});
			t.exports = a;
		},
		2309: function (t, e, n) {
			var r = n(1913),
				i = n(5465);
			(t.exports = function (t, e) {
				return i[t] || (i[t] = void 0 !== e ? e : {});
			})('versions', []).push({
				version: '3.6.5',
				mode: r ? 'pure' : 'global',
				copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
			});
		},
		6707: function (t, e, n) {
			var r = n(9670),
				i = n(3099),
				o = n(5112)('species');
			t.exports = function (t, e) {
				var n,
					a = r(t).constructor;
				return void 0 === a || null == (n = r(a)[o]) ? e : i(n);
			};
		},
		8710: function (t, e, n) {
			var r = n(9958),
				i = n(4488),
				o = function (t) {
					return function (e, n) {
						var o,
							a,
							c = String(i(e)),
							u = r(n),
							s = c.length;
						return u < 0 || u >= s
							? t
								? ''
								: void 0
							: (o = c.charCodeAt(u)) < 55296 ||
							  o > 56319 ||
							  u + 1 === s ||
							  (a = c.charCodeAt(u + 1)) < 56320 ||
							  a > 57343
							? t
								? c.charAt(u)
								: o
							: t
							? c.slice(u, u + 2)
							: a - 56320 + ((o - 55296) << 10) + 65536;
					};
				};
			t.exports = {codeAt: o(!1), charAt: o(!0)};
		},
		3197: function (t) {
			'use strict';
			var e = 2147483647,
				n = /[^\0-\u007E]/,
				r = /[.\u3002\uFF0E\uFF61]/g,
				i = 'Overflow: input needs wider integers to process',
				o = Math.floor,
				a = String.fromCharCode,
				c = function (t) {
					return t + 22 + 75 * (t < 26);
				},
				u = function (t, e, n) {
					var r = 0;
					for (t = n ? o(t / 700) : t >> 1, t += o(t / e); t > 455; r += 36) t = o(t / 35);
					return o(r + (36 * t) / (t + 38));
				},
				s = function (t) {
					var n = [];
					t = (function (t) {
						for (var e = [], n = 0, r = t.length; n < r; ) {
							var i = t.charCodeAt(n++);
							if (i >= 55296 && i <= 56319 && n < r) {
								var o = t.charCodeAt(n++);
								56320 == (64512 & o)
									? e.push(((1023 & i) << 10) + (1023 & o) + 65536)
									: (e.push(i), n--);
							} else e.push(i);
						}
						return e;
					})(t);
					var r,
						s,
						l = t.length,
						f = 128,
						p = 0,
						d = 72;
					for (r = 0; r < t.length; r++) (s = t[r]) < 128 && n.push(a(s));
					var h = n.length,
						v = h;
					for (h && n.push('-'); v < l; ) {
						var g = e;
						for (r = 0; r < t.length; r++) (s = t[r]) >= f && s < g && (g = s);
						var m = v + 1;
						if (g - f > o((e - p) / m)) throw RangeError(i);
						for (p += (g - f) * m, f = g, r = 0; r < t.length; r++) {
							if ((s = t[r]) < f && ++p > e) throw RangeError(i);
							if (s == f) {
								for (var y = p, k = 36; ; k += 36) {
									var b = k <= d ? 1 : k >= d + 26 ? 26 : k - d;
									if (y < b) break;
									var A = y - b,
										w = 36 - b;
									n.push(a(c(b + (A % w)))), (y = o(A / w));
								}
								n.push(a(c(y))), (d = u(p, m, v == h)), (p = 0), ++v;
							}
						}
						++p, ++f;
					}
					return n.join('');
				};
			t.exports = function (t) {
				var e,
					i,
					o = [],
					a = t.toLowerCase().replace(r, '.').split('.');
				for (e = 0; e < a.length; e++) (i = a[e]), o.push(n.test(i) ? 'xn--' + s(i) : i);
				return o.join('.');
			};
		},
		6091: function (t, e, n) {
			var r = n(7293),
				i = n(1361);
			t.exports = function (t) {
				return r(function () {
					return !!i[t]() || '​᠎' != '​᠎'[t]() || i[t].name !== t;
				});
			};
		},
		3111: function (t, e, n) {
			var r = n(4488),
				i = '[' + n(1361) + ']',
				o = RegExp('^' + i + i + '*'),
				a = RegExp(i + i + '*$'),
				c = function (t) {
					return function (e) {
						var n = String(r(e));
						return 1 & t && (n = n.replace(o, '')), 2 & t && (n = n.replace(a, '')), n;
					};
				};
			t.exports = {start: c(1), end: c(2), trim: c(3)};
		},
		261: function (t, e, n) {
			var r,
				i,
				o,
				a = n(7854),
				c = n(7293),
				u = n(4326),
				s = n(9974),
				l = n(490),
				f = n(317),
				p = n(6833),
				d = a.location,
				h = a.setImmediate,
				v = a.clearImmediate,
				g = a.process,
				m = a.MessageChannel,
				y = a.Dispatch,
				k = 0,
				b = {},
				A = 'onreadystatechange',
				w = function (t) {
					if (b.hasOwnProperty(t)) {
						var e = b[t];
						delete b[t], e();
					}
				},
				x = function (t) {
					return function () {
						w(t);
					};
				},
				I = function (t) {
					w(t.data);
				},
				C = function (t) {
					a.postMessage(t + '', d.protocol + '//' + d.host);
				};
			(h && v) ||
				((h = function (t) {
					for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
					return (
						(b[++k] = function () {
							('function' == typeof t ? t : Function(t)).apply(void 0, e);
						}),
						r(k),
						k
					);
				}),
				(v = function (t) {
					delete b[t];
				}),
				'process' == u(g)
					? (r = function (t) {
							g.nextTick(x(t));
					  })
					: y && y.now
					? (r = function (t) {
							y.now(x(t));
					  })
					: m && !p
					? ((o = (i = new m()).port2), (i.port1.onmessage = I), (r = s(o.postMessage, o, 1)))
					: !a.addEventListener ||
					  'function' != typeof postMessage ||
					  a.importScripts ||
					  c(C) ||
					  'file:' === d.protocol
					? (r =
							A in f('script')
								? function (t) {
										l.appendChild(f('script')).onreadystatechange = function () {
											l.removeChild(this), w(t);
										};
								  }
								: function (t) {
										setTimeout(x(t), 0);
								  })
					: ((r = C), a.addEventListener('message', I, !1))),
				(t.exports = {set: h, clear: v});
		},
		1400: function (t, e, n) {
			var r = n(9958),
				i = Math.max,
				o = Math.min;
			t.exports = function (t, e) {
				var n = r(t);
				return n < 0 ? i(n + e, 0) : o(n, e);
			};
		},
		5656: function (t, e, n) {
			var r = n(8361),
				i = n(4488);
			t.exports = function (t) {
				return r(i(t));
			};
		},
		9958: function (t) {
			var e = Math.ceil,
				n = Math.floor;
			t.exports = function (t) {
				return isNaN((t = +t)) ? 0 : (t > 0 ? n : e)(t);
			};
		},
		7466: function (t, e, n) {
			var r = n(9958),
				i = Math.min;
			t.exports = function (t) {
				return t > 0 ? i(r(t), 9007199254740991) : 0;
			};
		},
		7908: function (t, e, n) {
			var r = n(4488);
			t.exports = function (t) {
				return Object(r(t));
			};
		},
		7593: function (t, e, n) {
			var r = n(111);
			t.exports = function (t, e) {
				if (!r(t)) return t;
				var n, i;
				if (e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
				if ('function' == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
				if (!e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
				throw TypeError("Can't convert object to primitive value");
			};
		},
		1694: function (t, e, n) {
			var r = {};
			(r[n(5112)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(r));
		},
		9711: function (t) {
			var e = 0,
				n = Math.random();
			t.exports = function (t) {
				return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++e + n).toString(36);
			};
		},
		3307: function (t, e, n) {
			var r = n(133);
			t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
		},
		6061: function (t, e, n) {
			var r = n(5112);
			e.f = r;
		},
		5112: function (t, e, n) {
			var r = n(7854),
				i = n(2309),
				o = n(6656),
				a = n(9711),
				c = n(133),
				u = n(3307),
				s = i('wks'),
				l = r.Symbol,
				f = u ? l : (l && l.withoutSetter) || a;
			t.exports = function (t) {
				return o(s, t) || (c && o(l, t) ? (s[t] = l[t]) : (s[t] = f('Symbol.' + t))), s[t];
			};
		},
		1361: function (t) {
			t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
		},
		2222: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(7293),
				o = n(3157),
				a = n(111),
				c = n(7908),
				u = n(7466),
				s = n(6135),
				l = n(5417),
				f = n(1194),
				p = n(5112),
				d = n(7392),
				h = p('isConcatSpreadable'),
				v = 9007199254740991,
				g = 'Maximum allowed index exceeded',
				m =
					d >= 51 ||
					!i(function () {
						var t = [];
						return (t[h] = !1), t.concat()[0] !== t;
					}),
				y = f('concat'),
				k = function (t) {
					if (!a(t)) return !1;
					var e = t[h];
					return void 0 !== e ? !!e : o(t);
				};
			r(
				{target: 'Array', proto: !0, forced: !m || !y},
				{
					concat: function (t) {
						var e,
							n,
							r,
							i,
							o,
							a = c(this),
							f = l(a, 0),
							p = 0;
						for (e = -1, r = arguments.length; e < r; e++)
							if (k((o = -1 === e ? a : arguments[e]))) {
								if (p + (i = u(o.length)) > v) throw TypeError(g);
								for (n = 0; n < i; n++, p++) n in o && s(f, p, o[n]);
							} else {
								if (p >= v) throw TypeError(g);
								s(f, p++, o);
							}
						return (f.length = p), f;
					},
				}
			);
		},
		7327: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(2092).filter,
				o = n(1194),
				a = n(9207),
				c = o('filter'),
				u = a('filter');
			r(
				{target: 'Array', proto: !0, forced: !c || !u},
				{
					filter: function (t) {
						return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		9826: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(2092).find,
				o = n(1223),
				a = n(9207),
				c = 'find',
				u = !0,
				s = a(c);
			c in [] &&
				Array(1).find(function () {
					u = !1;
				}),
				r(
					{target: 'Array', proto: !0, forced: u || !s},
					{
						find: function (t) {
							return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
						},
					}
				),
				o(c);
		},
		1038: function (t, e, n) {
			var r = n(2109),
				i = n(8457);
			r(
				{
					target: 'Array',
					stat: !0,
					forced: !n(7072)(function (t) {
						Array.from(t);
					}),
				},
				{from: i}
			);
		},
		6699: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(1318).includes,
				o = n(1223);
			r(
				{target: 'Array', proto: !0, forced: !n(9207)('indexOf', {ACCESSORS: !0, 1: 0})},
				{
					includes: function (t) {
						return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			),
				o('includes');
		},
		2772: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(1318).indexOf,
				o = n(9341),
				a = n(9207),
				c = [].indexOf,
				u = !!c && 1 / [1].indexOf(1, -0) < 0,
				s = o('indexOf'),
				l = a('indexOf', {ACCESSORS: !0, 1: 0});
			r(
				{target: 'Array', proto: !0, forced: u || !s || !l},
				{
					indexOf: function (t) {
						return u
							? c.apply(this, arguments) || 0
							: i(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		6992: function (t, e, n) {
			'use strict';
			var r = n(5656),
				i = n(1223),
				o = n(7497),
				a = n(9909),
				c = n(654),
				u = 'Array Iterator',
				s = a.set,
				l = a.getterFor(u);
			(t.exports = c(
				Array,
				'Array',
				function (t, e) {
					s(this, {type: u, target: r(t), index: 0, kind: e});
				},
				function () {
					var t = l(this),
						e = t.target,
						n = t.kind,
						r = t.index++;
					return !e || r >= e.length
						? ((t.target = void 0), {value: void 0, done: !0})
						: 'keys' == n
						? {value: r, done: !1}
						: 'values' == n
						? {value: e[r], done: !1}
						: {value: [r, e[r]], done: !1};
				},
				'values'
			)),
				(o.Arguments = o.Array),
				i('keys'),
				i('values'),
				i('entries');
		},
		9600: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(8361),
				o = n(5656),
				a = n(9341),
				c = [].join,
				u = i != Object,
				s = a('join', ',');
			r(
				{target: 'Array', proto: !0, forced: u || !s},
				{
					join: function (t) {
						return c.call(o(this), void 0 === t ? ',' : t);
					},
				}
			);
		},
		7042: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(111),
				o = n(3157),
				a = n(1400),
				c = n(7466),
				u = n(5656),
				s = n(6135),
				l = n(5112),
				f = n(1194),
				p = n(9207),
				d = f('slice'),
				h = p('slice', {ACCESSORS: !0, 0: 0, 1: 2}),
				v = l('species'),
				g = [].slice,
				m = Math.max;
			r(
				{target: 'Array', proto: !0, forced: !d || !h},
				{
					slice: function (t, e) {
						var n,
							r,
							l,
							f = u(this),
							p = c(f.length),
							d = a(t, p),
							h = a(void 0 === e ? p : e, p);
						if (
							o(f) &&
							('function' != typeof (n = f.constructor) || (n !== Array && !o(n.prototype))
								? i(n) && null === (n = n[v]) && (n = void 0)
								: (n = void 0),
							n === Array || void 0 === n)
						)
							return g.call(f, d, h);
						for (r = new (void 0 === n ? Array : n)(m(h - d, 0)), l = 0; d < h; d++, l++)
							d in f && s(r, l, f[d]);
						return (r.length = l), r;
					},
				}
			);
		},
		8309: function (t, e, n) {
			var r = n(9781),
				i = n(3070).f,
				o = Function.prototype,
				a = o.toString,
				c = /^\s*function ([^ (]*)/,
				u = 'name';
			r &&
				!(u in o) &&
				i(o, u, {
					configurable: !0,
					get: function () {
						try {
							return a.call(this).match(c)[1];
						} catch (t) {
							return '';
						}
					},
				});
		},
		1532: function (t, e, n) {
			'use strict';
			var r = n(7710),
				i = n(5631);
			t.exports = r(
				'Map',
				function (t) {
					return function () {
						return t(this, arguments.length ? arguments[0] : void 0);
					};
				},
				i
			);
		},
		3321: function (t, e, n) {
			var r = n(2109),
				i = n(9781);
			r({target: 'Object', stat: !0, forced: !i, sham: !i}, {defineProperties: n(6048)});
		},
		9070: function (t, e, n) {
			var r = n(2109),
				i = n(9781);
			r({target: 'Object', stat: !0, forced: !i, sham: !i}, {defineProperty: n(3070).f});
		},
		9720: function (t, e, n) {
			var r = n(2109),
				i = n(4699).entries;
			r(
				{target: 'Object', stat: !0},
				{
					entries: function (t) {
						return i(t);
					},
				}
			);
		},
		5003: function (t, e, n) {
			var r = n(2109),
				i = n(7293),
				o = n(5656),
				a = n(1236).f,
				c = n(9781),
				u = i(function () {
					a(1);
				});
			r(
				{target: 'Object', stat: !0, forced: !c || u, sham: !c},
				{
					getOwnPropertyDescriptor: function (t, e) {
						return a(o(t), e);
					},
				}
			);
		},
		9337: function (t, e, n) {
			var r = n(2109),
				i = n(9781),
				o = n(3887),
				a = n(5656),
				c = n(1236),
				u = n(6135);
			r(
				{target: 'Object', stat: !0, sham: !i},
				{
					getOwnPropertyDescriptors: function (t) {
						for (var e, n, r = a(t), i = c.f, s = o(r), l = {}, f = 0; s.length > f; )
							void 0 !== (n = i(r, (e = s[f++]))) && u(l, e, n);
						return l;
					},
				}
			);
		},
		489: function (t, e, n) {
			var r = n(2109),
				i = n(7293),
				o = n(7908),
				a = n(9518),
				c = n(8544);
			r(
				{
					target: 'Object',
					stat: !0,
					forced: i(function () {
						a(1);
					}),
					sham: !c,
				},
				{
					getPrototypeOf: function (t) {
						return a(o(t));
					},
				}
			);
		},
		7941: function (t, e, n) {
			var r = n(2109),
				i = n(7908),
				o = n(1956);
			r(
				{
					target: 'Object',
					stat: !0,
					forced: n(7293)(function () {
						o(1);
					}),
				},
				{
					keys: function (t) {
						return o(i(t));
					},
				}
			);
		},
		8304: function (t, e, n) {
			n(2109)({target: 'Object', stat: !0}, {setPrototypeOf: n(7674)});
		},
		1539: function (t, e, n) {
			var r = n(1694),
				i = n(1320),
				o = n(288);
			r || i(Object.prototype, 'toString', o, {unsafe: !0});
		},
		8674: function (t, e, n) {
			'use strict';
			var r,
				i,
				o,
				a,
				c = n(2109),
				u = n(1913),
				s = n(7854),
				l = n(5005),
				f = n(3366),
				p = n(1320),
				d = n(2248),
				h = n(8003),
				v = n(6340),
				g = n(111),
				m = n(3099),
				y = n(5787),
				k = n(4326),
				b = n(2788),
				A = n(408),
				w = n(7072),
				x = n(6707),
				I = n(261).set,
				C = n(5948),
				B = n(9478),
				_ = n(842),
				S = n(8523),
				O = n(2534),
				P = n(9909),
				W = n(4705),
				E = n(5112),
				j = n(7392),
				R = E('species'),
				$ = 'Promise',
				T = P.get,
				L = P.set,
				N = P.getterFor($),
				M = f,
				U = s.TypeError,
				Q = s.document,
				D = s.process,
				q = l('fetch'),
				F = S.f,
				z = F,
				Y = 'process' == k(D),
				G = !!(Q && Q.createEvent && s.dispatchEvent),
				H = 'unhandledrejection',
				J = W($, function () {
					if (!(b(M) !== String(M))) {
						if (66 === j) return !0;
						if (!Y && 'function' != typeof PromiseRejectionEvent) return !0;
					}
					if (u && !M.prototype.finally) return !0;
					if (j >= 51 && /native code/.test(M)) return !1;
					var t = M.resolve(1),
						e = function (t) {
							t(
								function () {},
								function () {}
							);
						};
					return ((t.constructor = {})[R] = e), !(t.then(function () {}) instanceof e);
				}),
				X =
					J ||
					!w(function (t) {
						M.all(t).catch(function () {});
					}),
				Z = function (t) {
					var e;
					return !(!g(t) || 'function' != typeof (e = t.then)) && e;
				},
				V = function (t, e, n) {
					if (!e.notified) {
						e.notified = !0;
						var r = e.reactions;
						C(function () {
							for (var i = e.value, o = 1 == e.state, a = 0; r.length > a; ) {
								var c,
									u,
									s,
									l = r[a++],
									f = o ? l.ok : l.fail,
									p = l.resolve,
									d = l.reject,
									h = l.domain;
								try {
									f
										? (o || (2 === e.rejection && nt(t, e), (e.rejection = 1)),
										  !0 === f ? (c = i) : (h && h.enter(), (c = f(i)), h && (h.exit(), (s = !0))),
										  c === l.promise
												? d(U('Promise-chain cycle'))
												: (u = Z(c))
												? u.call(c, p, d)
												: p(c))
										: d(i);
								} catch (t) {
									h && !s && h.exit(), d(t);
								}
							}
							(e.reactions = []), (e.notified = !1), n && !e.rejection && tt(t, e);
						});
					}
				},
				K = function (t, e, n) {
					var r, i;
					G
						? (((r = Q.createEvent('Event')).promise = e),
						  (r.reason = n),
						  r.initEvent(t, !1, !0),
						  s.dispatchEvent(r))
						: (r = {promise: e, reason: n}),
						(i = s['on' + t]) ? i(r) : t === H && _('Unhandled promise rejection', n);
				},
				tt = function (t, e) {
					I.call(s, function () {
						var n,
							r = e.value;
						if (
							et(e) &&
							((n = O(function () {
								Y ? D.emit('unhandledRejection', r, t) : K(H, t, r);
							})),
							(e.rejection = Y || et(e) ? 2 : 1),
							n.error)
						)
							throw n.value;
					});
				},
				et = function (t) {
					return 1 !== t.rejection && !t.parent;
				},
				nt = function (t, e) {
					I.call(s, function () {
						Y ? D.emit('rejectionHandled', t) : K('rejectionhandled', t, e.value);
					});
				},
				rt = function (t, e, n, r) {
					return function (i) {
						t(e, n, i, r);
					};
				},
				it = function (t, e, n, r) {
					e.done || ((e.done = !0), r && (e = r), (e.value = n), (e.state = 2), V(t, e, !0));
				},
				ot = function (t, e, n, r) {
					if (!e.done) {
						(e.done = !0), r && (e = r);
						try {
							if (t === n) throw U("Promise can't be resolved itself");
							var i = Z(n);
							i
								? C(function () {
										var r = {done: !1};
										try {
											i.call(n, rt(ot, t, r, e), rt(it, t, r, e));
										} catch (n) {
											it(t, r, n, e);
										}
								  })
								: ((e.value = n), (e.state = 1), V(t, e, !1));
						} catch (n) {
							it(t, {done: !1}, n, e);
						}
					}
				};
			J &&
				((M = function (t) {
					y(this, M, $), m(t), r.call(this);
					var e = T(this);
					try {
						t(rt(ot, this, e), rt(it, this, e));
					} catch (t) {
						it(this, e, t);
					}
				}),
				((r = function (t) {
					L(this, {
						type: $,
						done: !1,
						notified: !1,
						parent: !1,
						reactions: [],
						rejection: !1,
						state: 0,
						value: void 0,
					});
				}).prototype = d(M.prototype, {
					then: function (t, e) {
						var n = N(this),
							r = F(x(this, M));
						return (
							(r.ok = 'function' != typeof t || t),
							(r.fail = 'function' == typeof e && e),
							(r.domain = Y ? D.domain : void 0),
							(n.parent = !0),
							n.reactions.push(r),
							0 != n.state && V(this, n, !1),
							r.promise
						);
					},
					catch: function (t) {
						return this.then(void 0, t);
					},
				})),
				(i = function () {
					var t = new r(),
						e = T(t);
					(this.promise = t), (this.resolve = rt(ot, t, e)), (this.reject = rt(it, t, e));
				}),
				(S.f = F =
					function (t) {
						return t === M || t === o ? new i(t) : z(t);
					}),
				u ||
					'function' != typeof f ||
					((a = f.prototype.then),
					p(
						f.prototype,
						'then',
						function (t, e) {
							var n = this;
							return new M(function (t, e) {
								a.call(n, t, e);
							}).then(t, e);
						},
						{unsafe: !0}
					),
					'function' == typeof q &&
						c(
							{global: !0, enumerable: !0, forced: !0},
							{
								fetch: function (t) {
									return B(M, q.apply(s, arguments));
								},
							}
						))),
				c({global: !0, wrap: !0, forced: J}, {Promise: M}),
				h(M, $, !1, !0),
				v($),
				(o = l($)),
				c(
					{target: $, stat: !0, forced: J},
					{
						reject: function (t) {
							var e = F(this);
							return e.reject.call(void 0, t), e.promise;
						},
					}
				),
				c(
					{target: $, stat: !0, forced: u || J},
					{
						resolve: function (t) {
							return B(u && this === o ? M : this, t);
						},
					}
				),
				c(
					{target: $, stat: !0, forced: X},
					{
						all: function (t) {
							var e = this,
								n = F(e),
								r = n.resolve,
								i = n.reject,
								o = O(function () {
									var n = m(e.resolve),
										o = [],
										a = 0,
										c = 1;
									A(t, function (t) {
										var u = a++,
											s = !1;
										o.push(void 0),
											c++,
											n.call(e, t).then(function (t) {
												s || ((s = !0), (o[u] = t), --c || r(o));
											}, i);
									}),
										--c || r(o);
								});
							return o.error && i(o.value), n.promise;
						},
						race: function (t) {
							var e = this,
								n = F(e),
								r = n.reject,
								i = O(function () {
									var i = m(e.resolve);
									A(t, function (t) {
										i.call(e, t).then(n.resolve, r);
									});
								});
							return i.error && r(i.value), n.promise;
						},
					}
				);
		},
		2419: function (t, e, n) {
			var r = n(2109),
				i = n(5005),
				o = n(3099),
				a = n(9670),
				c = n(111),
				u = n(30),
				s = n(7065),
				l = n(7293),
				f = i('Reflect', 'construct'),
				p = l(function () {
					function t() {}
					return !(f(function () {}, [], t) instanceof t);
				}),
				d = !l(function () {
					f(function () {});
				}),
				h = p || d;
			r(
				{target: 'Reflect', stat: !0, forced: h, sham: h},
				{
					construct: function (t, e) {
						o(t), a(e);
						var n = arguments.length < 3 ? t : o(arguments[2]);
						if (d && !p) return f(t, e, n);
						if (t == n) {
							switch (e.length) {
								case 0:
									return new t();
								case 1:
									return new t(e[0]);
								case 2:
									return new t(e[0], e[1]);
								case 3:
									return new t(e[0], e[1], e[2]);
								case 4:
									return new t(e[0], e[1], e[2], e[3]);
							}
							var r = [null];
							return r.push.apply(r, e), new (s.apply(t, r))();
						}
						var i = n.prototype,
							l = u(c(i) ? i : Object.prototype),
							h = Function.apply.call(t, l, e);
						return c(h) ? h : l;
					},
				}
			);
		},
		4603: function (t, e, n) {
			var r = n(9781),
				i = n(7854),
				o = n(4705),
				a = n(9587),
				c = n(3070).f,
				u = n(8006).f,
				s = n(7850),
				l = n(7066),
				f = n(2999),
				p = n(1320),
				d = n(7293),
				h = n(9909).set,
				v = n(6340),
				g = n(5112)('match'),
				m = i.RegExp,
				y = m.prototype,
				k = /a/g,
				b = /a/g,
				A = new m(k) !== k,
				w = f.UNSUPPORTED_Y;
			if (
				r &&
				o(
					'RegExp',
					!A ||
						w ||
						d(function () {
							return (b[g] = !1), m(k) != k || m(b) == b || '/a/i' != m(k, 'i');
						})
				)
			) {
				for (
					var x = function (t, e) {
							var n,
								r = this instanceof x,
								i = s(t),
								o = void 0 === e;
							if (!r && i && t.constructor === x && o) return t;
							A ? i && !o && (t = t.source) : t instanceof x && (o && (e = l.call(t)), (t = t.source)),
								w && (n = !!e && e.indexOf('y') > -1) && (e = e.replace(/y/g, ''));
							var c = a(A ? new m(t, e) : m(t, e), r ? this : y, x);
							return w && n && h(c, {sticky: n}), c;
						},
						I = function (t) {
							(t in x) ||
								c(x, t, {
									configurable: !0,
									get: function () {
										return m[t];
									},
									set: function (e) {
										m[t] = e;
									},
								});
						},
						C = u(m),
						B = 0;
					C.length > B;

				)
					I(C[B++]);
				(y.constructor = x), (x.prototype = y), p(i, 'RegExp', x);
			}
			v('RegExp');
		},
		4916: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(2261);
			r({target: 'RegExp', proto: !0, forced: /./.exec !== i}, {exec: i});
		},
		9714: function (t, e, n) {
			'use strict';
			var r = n(1320),
				i = n(9670),
				o = n(7293),
				a = n(7066),
				c = 'toString',
				u = RegExp.prototype,
				s = u.toString,
				l = o(function () {
					return '/a/b' != s.call({source: 'a', flags: 'b'});
				}),
				f = s.name != c;
			(l || f) &&
				r(
					RegExp.prototype,
					c,
					function () {
						var t = i(this),
							e = String(t.source),
							n = t.flags;
						return (
							'/' +
							e +
							'/' +
							String(void 0 === n && t instanceof RegExp && !('flags' in u) ? a.call(t) : n)
						);
					},
					{unsafe: !0}
				);
		},
		2023: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(3929),
				o = n(4488);
			r(
				{target: 'String', proto: !0, forced: !n(4964)('includes')},
				{
					includes: function (t) {
						return !!~String(o(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		8783: function (t, e, n) {
			'use strict';
			var r = n(8710).charAt,
				i = n(9909),
				o = n(654),
				a = 'String Iterator',
				c = i.set,
				u = i.getterFor(a);
			o(
				String,
				'String',
				function (t) {
					c(this, {type: a, string: String(t), index: 0});
				},
				function () {
					var t,
						e = u(this),
						n = e.string,
						i = e.index;
					return i >= n.length
						? {value: void 0, done: !0}
						: ((t = r(n, i)), (e.index += t.length), {value: t, done: !1});
				}
			);
		},
		4723: function (t, e, n) {
			'use strict';
			var r = n(7007),
				i = n(9670),
				o = n(7466),
				a = n(4488),
				c = n(1530),
				u = n(7651);
			r('match', 1, function (t, e, n) {
				return [
					function (e) {
						var n = a(this),
							r = null == e ? void 0 : e[t];
						return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
					},
					function (t) {
						var r = n(e, t, this);
						if (r.done) return r.value;
						var a = i(t),
							s = String(this);
						if (!a.global) return u(a, s);
						var l = a.unicode;
						a.lastIndex = 0;
						for (var f, p = [], d = 0; null !== (f = u(a, s)); ) {
							var h = String(f[0]);
							(p[d] = h), '' === h && (a.lastIndex = c(s, o(a.lastIndex), l)), d++;
						}
						return 0 === d ? null : p;
					},
				];
			});
		},
		5306: function (t, e, n) {
			'use strict';
			var r = n(7007),
				i = n(9670),
				o = n(7908),
				a = n(7466),
				c = n(9958),
				u = n(4488),
				s = n(1530),
				l = n(7651),
				f = Math.max,
				p = Math.min,
				d = Math.floor,
				h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
				v = /\$([$&'`]|\d\d?)/g;
			r('replace', 2, function (t, e, n, r) {
				var g = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
					m = r.REPLACE_KEEPS_$0,
					y = g ? '$' : '$0';
				return [
					function (n, r) {
						var i = u(this),
							o = null == n ? void 0 : n[t];
						return void 0 !== o ? o.call(n, i, r) : e.call(String(i), n, r);
					},
					function (t, r) {
						if ((!g && m) || ('string' == typeof r && -1 === r.indexOf(y))) {
							var o = n(e, t, this, r);
							if (o.done) return o.value;
						}
						var u = i(t),
							d = String(this),
							h = 'function' == typeof r;
						h || (r = String(r));
						var v = u.global;
						if (v) {
							var b = u.unicode;
							u.lastIndex = 0;
						}
						for (var A = []; ; ) {
							var w = l(u, d);
							if (null === w) break;
							if ((A.push(w), !v)) break;
							'' === String(w[0]) && (u.lastIndex = s(d, a(u.lastIndex), b));
						}
						for (var x, I = '', C = 0, B = 0; B < A.length; B++) {
							w = A[B];
							for (
								var _ = String(w[0]), S = f(p(c(w.index), d.length), 0), O = [], P = 1;
								P < w.length;
								P++
							)
								O.push(void 0 === (x = w[P]) ? x : String(x));
							var W = w.groups;
							if (h) {
								var E = [_].concat(O, S, d);
								void 0 !== W && E.push(W);
								var j = String(r.apply(void 0, E));
							} else j = k(_, d, S, O, W, r);
							S >= C && ((I += d.slice(C, S) + j), (C = S + _.length));
						}
						return I + d.slice(C);
					},
				];
				function k(t, n, r, i, a, c) {
					var u = r + t.length,
						s = i.length,
						l = v;
					return (
						void 0 !== a && ((a = o(a)), (l = h)),
						e.call(c, l, function (e, o) {
							var c;
							switch (o.charAt(0)) {
								case '$':
									return '$';
								case '&':
									return t;
								case '`':
									return n.slice(0, r);
								case "'":
									return n.slice(u);
								case '<':
									c = a[o.slice(1, -1)];
									break;
								default:
									var l = +o;
									if (0 === l) return e;
									if (l > s) {
										var f = d(l / 10);
										return 0 === f
											? e
											: f <= s
											? void 0 === i[f - 1]
												? o.charAt(1)
												: i[f - 1] + o.charAt(1)
											: e;
									}
									c = i[l - 1];
							}
							return void 0 === c ? '' : c;
						})
					);
				}
			});
		},
		3210: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(3111).trim;
			r(
				{target: 'String', proto: !0, forced: n(6091)('trim')},
				{
					trim: function () {
						return i(this);
					},
				}
			);
		},
		1817: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(9781),
				o = n(7854),
				a = n(6656),
				c = n(111),
				u = n(3070).f,
				s = n(9920),
				l = o.Symbol;
			if (i && 'function' == typeof l && (!('description' in l.prototype) || void 0 !== l().description)) {
				var f = {},
					p = function () {
						var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
							e = this instanceof p ? new l(t) : void 0 === t ? l() : l(t);
						return '' === t && (f[e] = !0), e;
					};
				s(p, l);
				var d = (p.prototype = l.prototype);
				d.constructor = p;
				var h = d.toString,
					v = 'Symbol(test)' == String(l('test')),
					g = /^Symbol\((.*)\)[^)]+$/;
				u(d, 'description', {
					configurable: !0,
					get: function () {
						var t = c(this) ? this.valueOf() : this,
							e = h.call(t);
						if (a(f, t)) return '';
						var n = v ? e.slice(7, -1) : e.replace(g, '$1');
						return '' === n ? void 0 : n;
					},
				}),
					r({global: !0, forced: !0}, {Symbol: p});
			}
		},
		2165: function (t, e, n) {
			n(7235)('iterator');
		},
		2526: function (t, e, n) {
			'use strict';
			var r = n(2109),
				i = n(7854),
				o = n(5005),
				a = n(1913),
				c = n(9781),
				u = n(133),
				s = n(3307),
				l = n(7293),
				f = n(6656),
				p = n(3157),
				d = n(111),
				h = n(9670),
				v = n(7908),
				g = n(5656),
				m = n(7593),
				y = n(9114),
				k = n(30),
				b = n(1956),
				A = n(8006),
				w = n(1156),
				x = n(5181),
				I = n(1236),
				C = n(3070),
				B = n(5296),
				_ = n(8880),
				S = n(1320),
				O = n(2309),
				P = n(6200),
				W = n(3501),
				E = n(9711),
				j = n(5112),
				R = n(6061),
				$ = n(7235),
				T = n(8003),
				L = n(9909),
				N = n(2092).forEach,
				M = P('hidden'),
				U = 'Symbol',
				Q = j('toPrimitive'),
				D = L.set,
				q = L.getterFor(U),
				F = Object.prototype,
				z = i.Symbol,
				Y = o('JSON', 'stringify'),
				G = I.f,
				H = C.f,
				J = w.f,
				X = B.f,
				Z = O('symbols'),
				V = O('op-symbols'),
				K = O('string-to-symbol-registry'),
				tt = O('symbol-to-string-registry'),
				et = O('wks'),
				nt = i.QObject,
				rt = !nt || !nt.prototype || !nt.prototype.findChild,
				it =
					c &&
					l(function () {
						return (
							7 !=
							k(
								H({}, 'a', {
									get: function () {
										return H(this, 'a', {value: 7}).a;
									},
								})
							).a
						);
					})
						? function (t, e, n) {
								var r = G(F, e);
								r && delete F[e], H(t, e, n), r && t !== F && H(F, e, r);
						  }
						: H,
				ot = function (t, e) {
					var n = (Z[t] = k(z.prototype));
					return D(n, {type: U, tag: t, description: e}), c || (n.description = e), n;
				},
				at = s
					? function (t) {
							return 'symbol' == typeof t;
					  }
					: function (t) {
							return Object(t) instanceof z;
					  },
				ct = function (t, e, n) {
					t === F && ct(V, e, n), h(t);
					var r = m(e, !0);
					return (
						h(n),
						f(Z, r)
							? (n.enumerable
									? (f(t, M) && t[M][r] && (t[M][r] = !1), (n = k(n, {enumerable: y(0, !1)})))
									: (f(t, M) || H(t, M, y(1, {})), (t[M][r] = !0)),
							  it(t, r, n))
							: H(t, r, n)
					);
				},
				ut = function (t, e) {
					h(t);
					var n = g(e),
						r = b(n).concat(pt(n));
					return (
						N(r, function (e) {
							(c && !st.call(n, e)) || ct(t, e, n[e]);
						}),
						t
					);
				},
				st = function (t) {
					var e = m(t, !0),
						n = X.call(this, e);
					return (
						!(this === F && f(Z, e) && !f(V, e)) &&
						(!(n || !f(this, e) || !f(Z, e) || (f(this, M) && this[M][e])) || n)
					);
				},
				lt = function (t, e) {
					var n = g(t),
						r = m(e, !0);
					if (n !== F || !f(Z, r) || f(V, r)) {
						var i = G(n, r);
						return !i || !f(Z, r) || (f(n, M) && n[M][r]) || (i.enumerable = !0), i;
					}
				},
				ft = function (t) {
					var e = J(g(t)),
						n = [];
					return (
						N(e, function (t) {
							f(Z, t) || f(W, t) || n.push(t);
						}),
						n
					);
				},
				pt = function (t) {
					var e = t === F,
						n = J(e ? V : g(t)),
						r = [];
					return (
						N(n, function (t) {
							!f(Z, t) || (e && !f(F, t)) || r.push(Z[t]);
						}),
						r
					);
				};
			(u ||
				((z = function () {
					if (this instanceof z) throw TypeError('Symbol is not a constructor');
					var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
						e = E(t),
						n = function (t) {
							this === F && n.call(V, t),
								f(this, M) && f(this[M], e) && (this[M][e] = !1),
								it(this, e, y(1, t));
						};
					return c && rt && it(F, e, {configurable: !0, set: n}), ot(e, t);
				}),
				S(z.prototype, 'toString', function () {
					return q(this).tag;
				}),
				S(z, 'withoutSetter', function (t) {
					return ot(E(t), t);
				}),
				(B.f = st),
				(C.f = ct),
				(I.f = lt),
				(A.f = w.f = ft),
				(x.f = pt),
				(R.f = function (t) {
					return ot(j(t), t);
				}),
				c &&
					(H(z.prototype, 'description', {
						configurable: !0,
						get: function () {
							return q(this).description;
						},
					}),
					a || S(F, 'propertyIsEnumerable', st, {unsafe: !0}))),
			r({global: !0, wrap: !0, forced: !u, sham: !u}, {Symbol: z}),
			N(b(et), function (t) {
				$(t);
			}),
			r(
				{target: U, stat: !0, forced: !u},
				{
					for: function (t) {
						var e = String(t);
						if (f(K, e)) return K[e];
						var n = z(e);
						return (K[e] = n), (tt[n] = e), n;
					},
					keyFor: function (t) {
						if (!at(t)) throw TypeError(t + ' is not a symbol');
						if (f(tt, t)) return tt[t];
					},
					useSetter: function () {
						rt = !0;
					},
					useSimple: function () {
						rt = !1;
					},
				}
			),
			r(
				{target: 'Object', stat: !0, forced: !u, sham: !c},
				{
					create: function (t, e) {
						return void 0 === e ? k(t) : ut(k(t), e);
					},
					defineProperty: ct,
					defineProperties: ut,
					getOwnPropertyDescriptor: lt,
				}
			),
			r({target: 'Object', stat: !0, forced: !u}, {getOwnPropertyNames: ft, getOwnPropertySymbols: pt}),
			r(
				{
					target: 'Object',
					stat: !0,
					forced: l(function () {
						x.f(1);
					}),
				},
				{
					getOwnPropertySymbols: function (t) {
						return x.f(v(t));
					},
				}
			),
			Y) &&
				r(
					{
						target: 'JSON',
						stat: !0,
						forced:
							!u ||
							l(function () {
								var t = z();
								return '[null]' != Y([t]) || '{}' != Y({a: t}) || '{}' != Y(Object(t));
							}),
					},
					{
						stringify: function (t, e, n) {
							for (var r, i = [t], o = 1; arguments.length > o; ) i.push(arguments[o++]);
							if (((r = e), (d(e) || void 0 !== t) && !at(t)))
								return (
									p(e) ||
										(e = function (t, e) {
											if (('function' == typeof r && (e = r.call(this, t, e)), !at(e))) return e;
										}),
									(i[1] = e),
									Y.apply(null, i)
								);
						},
					}
				);
			z.prototype[Q] || _(z.prototype, Q, z.prototype.valueOf), T(z, U), (W[M] = !0);
		},
		4747: function (t, e, n) {
			var r = n(7854),
				i = n(8324),
				o = n(8533),
				a = n(8880);
			for (var c in i) {
				var u = r[c],
					s = u && u.prototype;
				if (s && s.forEach !== o)
					try {
						a(s, 'forEach', o);
					} catch (t) {
						s.forEach = o;
					}
			}
		},
		3948: function (t, e, n) {
			var r = n(7854),
				i = n(8324),
				o = n(6992),
				a = n(8880),
				c = n(5112),
				u = c('iterator'),
				s = c('toStringTag'),
				l = o.values;
			for (var f in i) {
				var p = r[f],
					d = p && p.prototype;
				if (d) {
					if (d[u] !== l)
						try {
							a(d, u, l);
						} catch (t) {
							d[u] = l;
						}
					if ((d[s] || a(d, s, f), i[f]))
						for (var h in o)
							if (d[h] !== o[h])
								try {
									a(d, h, o[h]);
								} catch (t) {
									d[h] = o[h];
								}
				}
			}
		},
		1637: function (t, e, n) {
			'use strict';
			n(6992);
			var r = n(2109),
				i = n(5005),
				o = n(590),
				a = n(1320),
				c = n(2248),
				u = n(8003),
				s = n(4994),
				l = n(9909),
				f = n(5787),
				p = n(6656),
				d = n(9974),
				h = n(648),
				v = n(9670),
				g = n(111),
				m = n(30),
				y = n(9114),
				k = n(8554),
				b = n(1246),
				A = n(5112),
				w = i('fetch'),
				x = i('Headers'),
				I = A('iterator'),
				C = 'URLSearchParams',
				B = 'URLSearchParamsIterator',
				_ = l.set,
				S = l.getterFor(C),
				O = l.getterFor(B),
				P = /\+/g,
				W = Array(4),
				E = function (t) {
					return W[t - 1] || (W[t - 1] = RegExp('((?:%[\\da-f]{2}){' + t + '})', 'gi'));
				},
				j = function (t) {
					try {
						return decodeURIComponent(t);
					} catch (e) {
						return t;
					}
				},
				R = function (t) {
					var e = t.replace(P, ' '),
						n = 4;
					try {
						return decodeURIComponent(e);
					} catch (t) {
						for (; n; ) e = e.replace(E(n--), j);
						return e;
					}
				},
				$ = /[!'()~]|%20/g,
				T = {'!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+'},
				L = function (t) {
					return T[t];
				},
				N = function (t) {
					return encodeURIComponent(t).replace($, L);
				},
				M = function (t, e) {
					if (e)
						for (var n, r, i = e.split('&'), o = 0; o < i.length; )
							(n = i[o++]).length &&
								((r = n.split('=')), t.push({key: R(r.shift()), value: R(r.join('='))}));
				},
				U = function (t) {
					(this.entries.length = 0), M(this.entries, t);
				},
				Q = function (t, e) {
					if (t < e) throw TypeError('Not enough arguments');
				},
				D = s(
					function (t, e) {
						_(this, {type: B, iterator: k(S(t).entries), kind: e});
					},
					'Iterator',
					function () {
						var t = O(this),
							e = t.kind,
							n = t.iterator.next(),
							r = n.value;
						return (
							n.done || (n.value = 'keys' === e ? r.key : 'values' === e ? r.value : [r.key, r.value]), n
						);
					}
				),
				q = function () {
					f(this, q, C);
					var t,
						e,
						n,
						r,
						i,
						o,
						a,
						c,
						u,
						s = arguments.length > 0 ? arguments[0] : void 0,
						l = this,
						d = [];
					if ((_(l, {type: C, entries: d, updateURL: function () {}, updateSearchParams: U}), void 0 !== s))
						if (g(s))
							if ('function' == typeof (t = b(s)))
								for (n = (e = t.call(s)).next; !(r = n.call(e)).done; ) {
									if (
										(a = (o = (i = k(v(r.value))).next).call(i)).done ||
										(c = o.call(i)).done ||
										!o.call(i).done
									)
										throw TypeError('Expected sequence with length 2');
									d.push({key: a.value + '', value: c.value + ''});
								}
							else for (u in s) p(s, u) && d.push({key: u, value: s[u] + ''});
						else M(d, 'string' == typeof s ? ('?' === s.charAt(0) ? s.slice(1) : s) : s + '');
				},
				F = q.prototype;
			c(
				F,
				{
					append: function (t, e) {
						Q(arguments.length, 2);
						var n = S(this);
						n.entries.push({key: t + '', value: e + ''}), n.updateURL();
					},
					delete: function (t) {
						Q(arguments.length, 1);
						for (var e = S(this), n = e.entries, r = t + '', i = 0; i < n.length; )
							n[i].key === r ? n.splice(i, 1) : i++;
						e.updateURL();
					},
					get: function (t) {
						Q(arguments.length, 1);
						for (var e = S(this).entries, n = t + '', r = 0; r < e.length; r++)
							if (e[r].key === n) return e[r].value;
						return null;
					},
					getAll: function (t) {
						Q(arguments.length, 1);
						for (var e = S(this).entries, n = t + '', r = [], i = 0; i < e.length; i++)
							e[i].key === n && r.push(e[i].value);
						return r;
					},
					has: function (t) {
						Q(arguments.length, 1);
						for (var e = S(this).entries, n = t + '', r = 0; r < e.length; )
							if (e[r++].key === n) return !0;
						return !1;
					},
					set: function (t, e) {
						Q(arguments.length, 1);
						for (
							var n, r = S(this), i = r.entries, o = !1, a = t + '', c = e + '', u = 0;
							u < i.length;
							u++
						)
							(n = i[u]).key === a && (o ? i.splice(u--, 1) : ((o = !0), (n.value = c)));
						o || i.push({key: a, value: c}), r.updateURL();
					},
					sort: function () {
						var t,
							e,
							n,
							r = S(this),
							i = r.entries,
							o = i.slice();
						for (i.length = 0, n = 0; n < o.length; n++) {
							for (t = o[n], e = 0; e < n; e++)
								if (i[e].key > t.key) {
									i.splice(e, 0, t);
									break;
								}
							e === n && i.push(t);
						}
						r.updateURL();
					},
					forEach: function (t) {
						for (
							var e,
								n = S(this).entries,
								r = d(t, arguments.length > 1 ? arguments[1] : void 0, 3),
								i = 0;
							i < n.length;

						)
							r((e = n[i++]).value, e.key, this);
					},
					keys: function () {
						return new D(this, 'keys');
					},
					values: function () {
						return new D(this, 'values');
					},
					entries: function () {
						return new D(this, 'entries');
					},
				},
				{enumerable: !0}
			),
				a(F, I, F.entries),
				a(
					F,
					'toString',
					function () {
						for (var t, e = S(this).entries, n = [], r = 0; r < e.length; )
							(t = e[r++]), n.push(N(t.key) + '=' + N(t.value));
						return n.join('&');
					},
					{enumerable: !0}
				),
				u(q, C),
				r({global: !0, forced: !o}, {URLSearchParams: q}),
				o ||
					'function' != typeof w ||
					'function' != typeof x ||
					r(
						{global: !0, enumerable: !0, forced: !0},
						{
							fetch: function (t) {
								var e,
									n,
									r,
									i = [t];
								return (
									arguments.length > 1 &&
										(g((e = arguments[1])) &&
											((n = e.body),
											h(n) === C &&
												((r = e.headers ? new x(e.headers) : new x()).has('content-type') ||
													r.set(
														'content-type',
														'application/x-www-form-urlencoded;charset=UTF-8'
													),
												(e = m(e, {body: y(0, String(n)), headers: y(0, r)})))),
										i.push(e)),
									w.apply(this, i)
								);
							},
						}
					),
				(t.exports = {URLSearchParams: q, getState: S});
		},
		285: function (t, e, n) {
			'use strict';
			n(8783);
			var r,
				i = n(2109),
				o = n(9781),
				a = n(590),
				c = n(7854),
				u = n(6048),
				s = n(1320),
				l = n(5787),
				f = n(6656),
				p = n(1574),
				d = n(8457),
				h = n(8710).codeAt,
				v = n(3197),
				g = n(8003),
				m = n(1637),
				y = n(9909),
				k = c.URL,
				b = m.URLSearchParams,
				A = m.getState,
				w = y.set,
				x = y.getterFor('URL'),
				I = Math.floor,
				C = Math.pow,
				B = 'Invalid scheme',
				_ = 'Invalid host',
				S = 'Invalid port',
				O = /[A-Za-z]/,
				P = /[\d+-.A-Za-z]/,
				W = /\d/,
				E = /^(0x|0X)/,
				j = /^[0-7]+$/,
				R = /^\d+$/,
				$ = /^[\dA-Fa-f]+$/,
				T = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
				L = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
				N = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
				M = /[\u0009\u000A\u000D]/g,
				U = function (t, e) {
					var n, r, i;
					if ('[' == e.charAt(0)) {
						if (']' != e.charAt(e.length - 1)) return _;
						if (!(n = D(e.slice(1, -1)))) return _;
						t.host = n;
					} else if (X(t)) {
						if (((e = v(e)), T.test(e))) return _;
						if (null === (n = Q(e))) return _;
						t.host = n;
					} else {
						if (L.test(e)) return _;
						for (n = '', r = d(e), i = 0; i < r.length; i++) n += H(r[i], F);
						t.host = n;
					}
				},
				Q = function (t) {
					var e,
						n,
						r,
						i,
						o,
						a,
						c,
						u = t.split('.');
					if ((u.length && '' == u[u.length - 1] && u.pop(), (e = u.length) > 4)) return t;
					for (n = [], r = 0; r < e; r++) {
						if ('' == (i = u[r])) return t;
						if (
							((o = 10),
							i.length > 1 &&
								'0' == i.charAt(0) &&
								((o = E.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
							'' === i)
						)
							a = 0;
						else {
							if (!(10 == o ? R : 8 == o ? j : $).test(i)) return t;
							a = parseInt(i, o);
						}
						n.push(a);
					}
					for (r = 0; r < e; r++)
						if (((a = n[r]), r == e - 1)) {
							if (a >= C(256, 5 - e)) return null;
						} else if (a > 255) return null;
					for (c = n.pop(), r = 0; r < n.length; r++) c += n[r] * C(256, 3 - r);
					return c;
				},
				D = function (t) {
					var e,
						n,
						r,
						i,
						o,
						a,
						c,
						u = [0, 0, 0, 0, 0, 0, 0, 0],
						s = 0,
						l = null,
						f = 0,
						p = function () {
							return t.charAt(f);
						};
					if (':' == p()) {
						if (':' != t.charAt(1)) return;
						(f += 2), (l = ++s);
					}
					for (; p(); ) {
						if (8 == s) return;
						if (':' != p()) {
							for (e = n = 0; n < 4 && $.test(p()); ) (e = 16 * e + parseInt(p(), 16)), f++, n++;
							if ('.' == p()) {
								if (0 == n) return;
								if (((f -= n), s > 6)) return;
								for (r = 0; p(); ) {
									if (((i = null), r > 0)) {
										if (!('.' == p() && r < 4)) return;
										f++;
									}
									if (!W.test(p())) return;
									for (; W.test(p()); ) {
										if (((o = parseInt(p(), 10)), null === i)) i = o;
										else {
											if (0 == i) return;
											i = 10 * i + o;
										}
										if (i > 255) return;
										f++;
									}
									(u[s] = 256 * u[s] + i), (2 != ++r && 4 != r) || s++;
								}
								if (4 != r) return;
								break;
							}
							if (':' == p()) {
								if ((f++, !p())) return;
							} else if (p()) return;
							u[s++] = e;
						} else {
							if (null !== l) return;
							f++, (l = ++s);
						}
					}
					if (null !== l)
						for (a = s - l, s = 7; 0 != s && a > 0; ) (c = u[s]), (u[s--] = u[l + a - 1]), (u[l + --a] = c);
					else if (8 != s) return;
					return u;
				},
				q = function (t) {
					var e, n, r, i;
					if ('number' == typeof t) {
						for (e = [], n = 0; n < 4; n++) e.unshift(t % 256), (t = I(t / 256));
						return e.join('.');
					}
					if ('object' == typeof t) {
						for (
							e = '',
								r = (function (t) {
									for (var e = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
										0 !== t[o]
											? (i > n && ((e = r), (n = i)), (r = null), (i = 0))
											: (null === r && (r = o), ++i);
									return i > n && ((e = r), (n = i)), e;
								})(t),
								n = 0;
							n < 8;
							n++
						)
							(i && 0 === t[n]) ||
								(i && (i = !1),
								r === n
									? ((e += n ? ':' : '::'), (i = !0))
									: ((e += t[n].toString(16)), n < 7 && (e += ':')));
						return '[' + e + ']';
					}
					return t;
				},
				F = {},
				z = p({}, F, {' ': 1, '"': 1, '<': 1, '>': 1, '`': 1}),
				Y = p({}, z, {'#': 1, '?': 1, '{': 1, '}': 1}),
				G = p({}, Y, {'/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1}),
				H = function (t, e) {
					var n = h(t, 0);
					return n > 32 && n < 127 && !f(e, t) ? t : encodeURIComponent(t);
				},
				J = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443},
				X = function (t) {
					return f(J, t.scheme);
				},
				Z = function (t) {
					return '' != t.username || '' != t.password;
				},
				V = function (t) {
					return !t.host || t.cannotBeABaseURL || 'file' == t.scheme;
				},
				K = function (t, e) {
					var n;
					return 2 == t.length && O.test(t.charAt(0)) && (':' == (n = t.charAt(1)) || (!e && '|' == n));
				},
				tt = function (t) {
					var e;
					return (
						t.length > 1 &&
						K(t.slice(0, 2)) &&
						(2 == t.length || '/' === (e = t.charAt(2)) || '\\' === e || '?' === e || '#' === e)
					);
				},
				et = function (t) {
					var e = t.path,
						n = e.length;
					!n || ('file' == t.scheme && 1 == n && K(e[0], !0)) || e.pop();
				},
				nt = function (t) {
					return '.' === t || '%2e' === t.toLowerCase();
				},
				rt = {},
				it = {},
				ot = {},
				at = {},
				ct = {},
				ut = {},
				st = {},
				lt = {},
				ft = {},
				pt = {},
				dt = {},
				ht = {},
				vt = {},
				gt = {},
				mt = {},
				yt = {},
				kt = {},
				bt = {},
				At = {},
				wt = {},
				xt = {},
				It = function (t, e, n, i) {
					var o,
						a,
						c,
						u,
						s,
						l = n || rt,
						p = 0,
						h = '',
						v = !1,
						g = !1,
						m = !1;
					for (
						n ||
							((t.scheme = ''),
							(t.username = ''),
							(t.password = ''),
							(t.host = null),
							(t.port = null),
							(t.path = []),
							(t.query = null),
							(t.fragment = null),
							(t.cannotBeABaseURL = !1),
							(e = e.replace(N, ''))),
							e = e.replace(M, ''),
							o = d(e);
						p <= o.length;

					) {
						switch (((a = o[p]), l)) {
							case rt:
								if (!a || !O.test(a)) {
									if (n) return B;
									l = ot;
									continue;
								}
								(h += a.toLowerCase()), (l = it);
								break;
							case it:
								if (a && (P.test(a) || '+' == a || '-' == a || '.' == a)) h += a.toLowerCase();
								else {
									if (':' != a) {
										if (n) return B;
										(h = ''), (l = ot), (p = 0);
										continue;
									}
									if (
										n &&
										(X(t) != f(J, h) ||
											('file' == h && (Z(t) || null !== t.port)) ||
											('file' == t.scheme && !t.host))
									)
										return;
									if (((t.scheme = h), n))
										return void (X(t) && J[t.scheme] == t.port && (t.port = null));
									(h = ''),
										'file' == t.scheme
											? (l = gt)
											: X(t) && i && i.scheme == t.scheme
											? (l = at)
											: X(t)
											? (l = lt)
											: '/' == o[p + 1]
											? ((l = ct), p++)
											: ((t.cannotBeABaseURL = !0), t.path.push(''), (l = At));
								}
								break;
							case ot:
								if (!i || (i.cannotBeABaseURL && '#' != a)) return B;
								if (i.cannotBeABaseURL && '#' == a) {
									(t.scheme = i.scheme),
										(t.path = i.path.slice()),
										(t.query = i.query),
										(t.fragment = ''),
										(t.cannotBeABaseURL = !0),
										(l = xt);
									break;
								}
								l = 'file' == i.scheme ? gt : ut;
								continue;
							case at:
								if ('/' != a || '/' != o[p + 1]) {
									l = ut;
									continue;
								}
								(l = ft), p++;
								break;
							case ct:
								if ('/' == a) {
									l = pt;
									break;
								}
								l = bt;
								continue;
							case ut:
								if (((t.scheme = i.scheme), a == r))
									(t.username = i.username),
										(t.password = i.password),
										(t.host = i.host),
										(t.port = i.port),
										(t.path = i.path.slice()),
										(t.query = i.query);
								else if ('/' == a || ('\\' == a && X(t))) l = st;
								else if ('?' == a)
									(t.username = i.username),
										(t.password = i.password),
										(t.host = i.host),
										(t.port = i.port),
										(t.path = i.path.slice()),
										(t.query = ''),
										(l = wt);
								else {
									if ('#' != a) {
										(t.username = i.username),
											(t.password = i.password),
											(t.host = i.host),
											(t.port = i.port),
											(t.path = i.path.slice()),
											t.path.pop(),
											(l = bt);
										continue;
									}
									(t.username = i.username),
										(t.password = i.password),
										(t.host = i.host),
										(t.port = i.port),
										(t.path = i.path.slice()),
										(t.query = i.query),
										(t.fragment = ''),
										(l = xt);
								}
								break;
							case st:
								if (!X(t) || ('/' != a && '\\' != a)) {
									if ('/' != a) {
										(t.username = i.username),
											(t.password = i.password),
											(t.host = i.host),
											(t.port = i.port),
											(l = bt);
										continue;
									}
									l = pt;
								} else l = ft;
								break;
							case lt:
								if (((l = ft), '/' != a || '/' != h.charAt(p + 1))) continue;
								p++;
								break;
							case ft:
								if ('/' != a && '\\' != a) {
									l = pt;
									continue;
								}
								break;
							case pt:
								if ('@' == a) {
									v && (h = '%40' + h), (v = !0), (c = d(h));
									for (var y = 0; y < c.length; y++) {
										var k = c[y];
										if (':' != k || m) {
											var b = H(k, G);
											m ? (t.password += b) : (t.username += b);
										} else m = !0;
									}
									h = '';
								} else if (a == r || '/' == a || '?' == a || '#' == a || ('\\' == a && X(t))) {
									if (v && '' == h) return 'Invalid authority';
									(p -= d(h).length + 1), (h = ''), (l = dt);
								} else h += a;
								break;
							case dt:
							case ht:
								if (n && 'file' == t.scheme) {
									l = yt;
									continue;
								}
								if (':' != a || g) {
									if (a == r || '/' == a || '?' == a || '#' == a || ('\\' == a && X(t))) {
										if (X(t) && '' == h) return _;
										if (n && '' == h && (Z(t) || null !== t.port)) return;
										if ((u = U(t, h))) return u;
										if (((h = ''), (l = kt), n)) return;
										continue;
									}
									'[' == a ? (g = !0) : ']' == a && (g = !1), (h += a);
								} else {
									if ('' == h) return _;
									if ((u = U(t, h))) return u;
									if (((h = ''), (l = vt), n == ht)) return;
								}
								break;
							case vt:
								if (!W.test(a)) {
									if (a == r || '/' == a || '?' == a || '#' == a || ('\\' == a && X(t)) || n) {
										if ('' != h) {
											var A = parseInt(h, 10);
											if (A > 65535) return S;
											(t.port = X(t) && A === J[t.scheme] ? null : A), (h = '');
										}
										if (n) return;
										l = kt;
										continue;
									}
									return S;
								}
								h += a;
								break;
							case gt:
								if (((t.scheme = 'file'), '/' == a || '\\' == a)) l = mt;
								else {
									if (!i || 'file' != i.scheme) {
										l = bt;
										continue;
									}
									if (a == r) (t.host = i.host), (t.path = i.path.slice()), (t.query = i.query);
									else if ('?' == a)
										(t.host = i.host), (t.path = i.path.slice()), (t.query = ''), (l = wt);
									else {
										if ('#' != a) {
											tt(o.slice(p).join('')) ||
												((t.host = i.host), (t.path = i.path.slice()), et(t)),
												(l = bt);
											continue;
										}
										(t.host = i.host),
											(t.path = i.path.slice()),
											(t.query = i.query),
											(t.fragment = ''),
											(l = xt);
									}
								}
								break;
							case mt:
								if ('/' == a || '\\' == a) {
									l = yt;
									break;
								}
								i &&
									'file' == i.scheme &&
									!tt(o.slice(p).join('')) &&
									(K(i.path[0], !0) ? t.path.push(i.path[0]) : (t.host = i.host)),
									(l = bt);
								continue;
							case yt:
								if (a == r || '/' == a || '\\' == a || '?' == a || '#' == a) {
									if (!n && K(h)) l = bt;
									else if ('' == h) {
										if (((t.host = ''), n)) return;
										l = kt;
									} else {
										if ((u = U(t, h))) return u;
										if (('localhost' == t.host && (t.host = ''), n)) return;
										(h = ''), (l = kt);
									}
									continue;
								}
								h += a;
								break;
							case kt:
								if (X(t)) {
									if (((l = bt), '/' != a && '\\' != a)) continue;
								} else if (n || '?' != a)
									if (n || '#' != a) {
										if (a != r && ((l = bt), '/' != a)) continue;
									} else (t.fragment = ''), (l = xt);
								else (t.query = ''), (l = wt);
								break;
							case bt:
								if (a == r || '/' == a || ('\\' == a && X(t)) || (!n && ('?' == a || '#' == a))) {
									if (
										('..' === (s = (s = h).toLowerCase()) ||
										'%2e.' === s ||
										'.%2e' === s ||
										'%2e%2e' === s
											? (et(t), '/' == a || ('\\' == a && X(t)) || t.path.push(''))
											: nt(h)
											? '/' == a || ('\\' == a && X(t)) || t.path.push('')
											: ('file' == t.scheme &&
													!t.path.length &&
													K(h) &&
													(t.host && (t.host = ''), (h = h.charAt(0) + ':')),
											  t.path.push(h)),
										(h = ''),
										'file' == t.scheme && (a == r || '?' == a || '#' == a))
									)
										for (; t.path.length > 1 && '' === t.path[0]; ) t.path.shift();
									'?' == a ? ((t.query = ''), (l = wt)) : '#' == a && ((t.fragment = ''), (l = xt));
								} else h += H(a, Y);
								break;
							case At:
								'?' == a
									? ((t.query = ''), (l = wt))
									: '#' == a
									? ((t.fragment = ''), (l = xt))
									: a != r && (t.path[0] += H(a, F));
								break;
							case wt:
								n || '#' != a
									? a != r &&
									  ("'" == a && X(t) ? (t.query += '%27') : (t.query += '#' == a ? '%23' : H(a, F)))
									: ((t.fragment = ''), (l = xt));
								break;
							case xt:
								a != r && (t.fragment += H(a, z));
						}
						p++;
					}
				},
				Ct = function (t) {
					var e,
						n,
						r = l(this, Ct, 'URL'),
						i = arguments.length > 1 ? arguments[1] : void 0,
						a = String(t),
						c = w(r, {type: 'URL'});
					if (void 0 !== i)
						if (i instanceof Ct) e = x(i);
						else if ((n = It((e = {}), String(i)))) throw TypeError(n);
					if ((n = It(c, a, null, e))) throw TypeError(n);
					var u = (c.searchParams = new b()),
						s = A(u);
					s.updateSearchParams(c.query),
						(s.updateURL = function () {
							c.query = String(u) || null;
						}),
						o ||
							((r.href = _t.call(r)),
							(r.origin = St.call(r)),
							(r.protocol = Ot.call(r)),
							(r.username = Pt.call(r)),
							(r.password = Wt.call(r)),
							(r.host = Et.call(r)),
							(r.hostname = jt.call(r)),
							(r.port = Rt.call(r)),
							(r.pathname = $t.call(r)),
							(r.search = Tt.call(r)),
							(r.searchParams = Lt.call(r)),
							(r.hash = Nt.call(r)));
				},
				Bt = Ct.prototype,
				_t = function () {
					var t = x(this),
						e = t.scheme,
						n = t.username,
						r = t.password,
						i = t.host,
						o = t.port,
						a = t.path,
						c = t.query,
						u = t.fragment,
						s = e + ':';
					return (
						null !== i
							? ((s += '//'),
							  Z(t) && (s += n + (r ? ':' + r : '') + '@'),
							  (s += q(i)),
							  null !== o && (s += ':' + o))
							: 'file' == e && (s += '//'),
						(s += t.cannotBeABaseURL ? a[0] : a.length ? '/' + a.join('/') : ''),
						null !== c && (s += '?' + c),
						null !== u && (s += '#' + u),
						s
					);
				},
				St = function () {
					var t = x(this),
						e = t.scheme,
						n = t.port;
					if ('blob' == e)
						try {
							return new URL(e.path[0]).origin;
						} catch (t) {
							return 'null';
						}
					return 'file' != e && X(t) ? e + '://' + q(t.host) + (null !== n ? ':' + n : '') : 'null';
				},
				Ot = function () {
					return x(this).scheme + ':';
				},
				Pt = function () {
					return x(this).username;
				},
				Wt = function () {
					return x(this).password;
				},
				Et = function () {
					var t = x(this),
						e = t.host,
						n = t.port;
					return null === e ? '' : null === n ? q(e) : q(e) + ':' + n;
				},
				jt = function () {
					var t = x(this).host;
					return null === t ? '' : q(t);
				},
				Rt = function () {
					var t = x(this).port;
					return null === t ? '' : String(t);
				},
				$t = function () {
					var t = x(this),
						e = t.path;
					return t.cannotBeABaseURL ? e[0] : e.length ? '/' + e.join('/') : '';
				},
				Tt = function () {
					var t = x(this).query;
					return t ? '?' + t : '';
				},
				Lt = function () {
					return x(this).searchParams;
				},
				Nt = function () {
					var t = x(this).fragment;
					return t ? '#' + t : '';
				},
				Mt = function (t, e) {
					return {get: t, set: e, configurable: !0, enumerable: !0};
				};
			if (
				(o &&
					u(Bt, {
						href: Mt(_t, function (t) {
							var e = x(this),
								n = String(t),
								r = It(e, n);
							if (r) throw TypeError(r);
							A(e.searchParams).updateSearchParams(e.query);
						}),
						origin: Mt(St),
						protocol: Mt(Ot, function (t) {
							var e = x(this);
							It(e, String(t) + ':', rt);
						}),
						username: Mt(Pt, function (t) {
							var e = x(this),
								n = d(String(t));
							if (!V(e)) {
								e.username = '';
								for (var r = 0; r < n.length; r++) e.username += H(n[r], G);
							}
						}),
						password: Mt(Wt, function (t) {
							var e = x(this),
								n = d(String(t));
							if (!V(e)) {
								e.password = '';
								for (var r = 0; r < n.length; r++) e.password += H(n[r], G);
							}
						}),
						host: Mt(Et, function (t) {
							var e = x(this);
							e.cannotBeABaseURL || It(e, String(t), dt);
						}),
						hostname: Mt(jt, function (t) {
							var e = x(this);
							e.cannotBeABaseURL || It(e, String(t), ht);
						}),
						port: Mt(Rt, function (t) {
							var e = x(this);
							V(e) || ('' == (t = String(t)) ? (e.port = null) : It(e, t, vt));
						}),
						pathname: Mt($t, function (t) {
							var e = x(this);
							e.cannotBeABaseURL || ((e.path = []), It(e, t + '', kt));
						}),
						search: Mt(Tt, function (t) {
							var e = x(this);
							'' == (t = String(t))
								? (e.query = null)
								: ('?' == t.charAt(0) && (t = t.slice(1)), (e.query = ''), It(e, t, wt)),
								A(e.searchParams).updateSearchParams(e.query);
						}),
						searchParams: Mt(Lt),
						hash: Mt(Nt, function (t) {
							var e = x(this);
							'' != (t = String(t))
								? ('#' == t.charAt(0) && (t = t.slice(1)), (e.fragment = ''), It(e, t, xt))
								: (e.fragment = null);
						}),
					}),
				s(
					Bt,
					'toJSON',
					function () {
						return _t.call(this);
					},
					{enumerable: !0}
				),
				s(
					Bt,
					'toString',
					function () {
						return _t.call(this);
					},
					{enumerable: !0}
				),
				k)
			) {
				var Ut = k.createObjectURL,
					Qt = k.revokeObjectURL;
				Ut &&
					s(Ct, 'createObjectURL', function (t) {
						return Ut.apply(k, arguments);
					}),
					Qt &&
						s(Ct, 'revokeObjectURL', function (t) {
							return Qt.apply(k, arguments);
						});
			}
			g(Ct, 'URL'), i({global: !0, forced: !a, sham: !o}, {URL: Ct});
		},
		9183: function (t, e, n) {
			'use strict';
			var r = n(7537),
				i = n.n(r),
				o = n(3645),
				a = n.n(o)()(i());
			a.push([
				t.id,
				".clear {\n    clear: both;\n}\n#Wikiplus-Quickedit-Summary-Input {\n    width: 50%;\n}\n#Wikiplus-Quickedit-Preview-Submit,\n#Wikiplus-Quickedit-Submit {\n    margin-top: 5px;\n    padding: revert;\n}\n.Wikiplus-Btn {\n    position: relative;\n    float: left;\n    margin: 3px 5px;\n    padding: 3px 1em;\n    width: auto;\n    background-color: #fff;\n    box-shadow: 0 1px 2px #aaa;\n    text-align: center;\n    cursor: pointer;\n}\n.Wikiplus-Btn a {\n    position: relative;\n    display: block;\n    margin: 0;\n    color: #000;\n    text-decoration: none;\n}\n.Wikiplus-InterBox {\n    position: absolute;\n    top: 20%;\n    z-index: 200;\n    padding: 20px 10px;\n    width: 600px;\n    min-height: 100px;\n    border: 1px rgba(161, 154, 220, 0.41) solid;\n    background-color: #edf9f7;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.Wikiplus-InterBox-Header {\n    position: relative;\n    top: 0;\n    top: -8px;\n    margin: 0;\n    width: 100%;\n    border-bottom: 1px #6cf solid;\n    text-align: left;\n    font-size: 15px;\n    line-height: 30px;\n    cursor: move;\n}\n.Wikiplus-InterBox-Input {\n    margin: 20px;\n    width: 60%;\n}\n.Wikiplus-InterBox-Btn {\n    position: relative;\n    float: right;\n    margin: auto 3px;\n    padding: 6px 12px;\n    border: 1px solid #dedede;\n    background-color: #fff;\n    vertical-align: middle;\n    text-align: center;\n    cursor: pointer;\n}\n.Wikiplus-InterBox-Btn:hover {\n    background-color: #e8e8e8;\n}\n.Wikiplus-InterBox-Close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 3px 7px;\n    font-size: 20px;\n    cursor: pointer;\n}\n.Wikiplus-InterBox label {\n    font-size: 13px;\n}\n.Wikiplus-InterBox table.diff {\n    table-layout: auto !important;\n}\n.Wikiplus-InterBox table.diff .diff-addedline,\n.Wikiplus-InterBox table.diff .diff-deletedline,\n.Wikiplus-InterBox table.diff .diff-lineno {\n    width: 50%;\n}\n.Wikiplus-InterBox table.diff .diff-marker {\n    text-align: left;\n}\n#Wikiplus-Quickedit-Preview-Output {\n    clear: both;\n    margin: 5px 0;\n}\n#Wikiplus-Quickedit {\n    word-break: break-all;\n    width: 100%;\n    min-height: 500px;\n}\n.Wikiplus-Banner {\n    margin: 0;\n    padding: 10px 5px;\n    min-height: 50px;\n    background: rgba(193, 222, 214, 0.51);\n    text-align: center;\n    font-size: 30px;\n    font-family: 微软雅黑;\n}\n.MoeNotification-notice {\n    position: relative;\n    display: none;\n    overflow: hidden;\n    margin: 3px 5px;\n    padding: 0 5px;\n    width: auto;\n    box-shadow: 0 3px 3px #aaa;\n    font-size: 14px !important;\n}\n.MoeNotification-notice span {\n    position: relative;\n    margin: 3px auto 3px 3px;\n    color: #fff;\n    text-align: left;\n    font-size: 14px !important;\n    font-family: Arial, Tahoma, Microsoft YaHei, \\5fae\\8f6f\\96c5\\9ed1, Hiragino Sans GB,\n        Microsoft JhengHei, 微軟正黑體, sans-serif;\n    line-height: 1.5 !important;\n}\n.MoeNotification-notice-success {\n    border-left: 5px #8dda93 solid;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px;\n    background-color: #008a00;\n}\n.MoeNotification-notice-warning {\n    border-left: 5px #ffdf00 solid;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px;\n    background-color: #f4bd00;\n}\n.MoeNotification-notice-warning span {\n    color: #000;\n}\n.MoeNotification-notice-error {\n    border-left: 5px #e71717 solid;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px;\n    background-color: #b00e06;\n}\n#MoeNotification {\n    position: fixed;\n    bottom: 30px;\n    left: 0;\n    z-index: 713;\n    min-width: 20%;\n}\n.mw-editsection-divider {\n    display: inline !important;\n}\n.skin-minerva #Wikiplus-Quickedit-Preview-Submit,\n.skin-minerva #Wikiplus-Quickedit-Submit,\n.skin-minerva #Wikiplus-Quickedit-Summary-Input,\n.skin-minerva .Wikiplus-InterBox-Input {\n    all: revert;\n}\n.skin-minerva #Wikiplus-Quickedit-Summary-Input {\n    width: 50%;\n}\n.skin-minerva #Wikiplus-Quickedit-Preview-Submit,\n.skin-minerva #Wikiplus-Quickedit-Submit {\n    margin-top: 5px;\n}\n.skin-minerva #Wikiplus-Setting-Input {\n    width: calc(100% - 10px);\n    max-width: calc(100% - 10px);\n}\n.skin-minerva .Wikiplus-InterBox-Input {\n    margin: 20px;\n    width: 60%;\n}\n.skin-minerva #Wikiplus-Settings-Intro a:before {\n    background-image: linear-gradient(transparent, transparent),\n        url(/w/load.php?modules=skins.minerva.mainMenu.icons&image=settings&format=original&skin=minerva&version=1up49);\n}\n.skin-minerva #Wikiplus-SR-Intro a:before {\n    background-image: linear-gradient(transparent, transparent),\n        url(/w/load.php?modules=skins.minerva.overflow.icons&image=articleRedirect&format=original&lang=zh-cn&skin=minerva&version=1vckg);\n}\n.skin-minerva .mw-parser-output .mw-editsection {\n    display: flex !important;\n    align-items: center;\n}\n.skin-minerva .mw-parser-output .section-heading > div {\n    vertical-align: baseline;\n}\n.skin-vector #Wikiplus-Quickedit-Summary-Input {\n    margin-top: 5px;\n}\n.skin-moeskin .Wikiplus-More-Function-Button a {\n    display: inline-block;\n    padding: 0.4rem 0.8rem;\n    line-height: 1.5;\n    border-radius: 0.2rem;\n}\n.skin-moeskin #Wikiplus-Edit-TopBtn {\n    display: flex;\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    color: var(--theme-button-color);\n    background-color: var(--theme-accent-link-color);\n    line-height: 2;\n    text-align: center;\n    box-shadow: var(--theme-card-box-shadow);\n    transition: all .24s ease;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.skin-moeskin #Wikiplus-Edit-TopBtn:hover {\n    color: var(--theme-accent-link-color);\n    box-shadow: var(--theme-card-box-shadow--hover);\n    background-color: var(--theme-button-color);\n}\n.skin-moeskin #Wikiplus-Edit-TopBtn a {\n    display: none;\n}\n.skin-moeskin #Wikiplus-Edit-TopBtn span::after {\n    content: 'W+';\n    display: inline-block;\n    font-weight: bold;\n    font-size: smaller;\n    transform: translateY(-2px);\n}",
				'',
				{
					version: 3,
					sources: ['webpack://./src/wikiplus.css'],
					names: [],
					mappings:
						'AAAA;IACI,WAAW;AACf;AACA;IACI,UAAU;AACd;AACA;;IAEI,eAAe;IACf,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,sBAAsB;IACtB,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,SAAS;IACT,WAAW;IACX,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,SAAS;IACT,WAAW;IACX,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,eAAe;IACf,eAAe;IACf,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,6BAA6B;AACjC;AACA;;;IAGI,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,qCAAqC;IACrC,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,WAAW;IACX,0BAA0B;IAC1B,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,gBAAgB;IAChB,0BAA0B;IAC1B;6CACyC;IACzC,2BAA2B;AAC/B;AACA;IACI,8BAA8B;IAC9B,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;AAC7B;AACA;IACI,8BAA8B;IAC9B,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;AAC7B;AACA;IACI,WAAW;AACf;AACA;IACI,8BAA8B;IAC9B,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,YAAY;IACZ,OAAO;IACP,YAAY;IACZ,cAAc;AAClB;AACA;IACI,0BAA0B;AAC9B;AACA;;;;IAII,WAAW;AACf;AACA;IACI,UAAU;AACd;AACA;;IAEI,eAAe;AACnB;AACA;IACI,wBAAwB;IACxB,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,UAAU;AACd;AACA;IACI;uHACmH;AACvH;AACA;IACI;yIACqI;AACzI;AACA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,eAAe;AACnB;AACA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gCAAgC;IAChC,gDAAgD;IAChD,cAAc;IACd,kBAAkB;IAClB,wCAAwC;IACxC,yBAAyB;IACzB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,qCAAqC;IACrC,+CAA+C;IAC/C,2CAA2C;AAC/C;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;AAC/B',
					sourcesContent: [
						".clear {\n    clear: both;\n}\n#Wikiplus-Quickedit-Summary-Input {\n    width: 50%;\n}\n#Wikiplus-Quickedit-Preview-Submit,\n#Wikiplus-Quickedit-Submit {\n    margin-top: 5px;\n    padding: revert;\n}\n.Wikiplus-Btn {\n    position: relative;\n    float: left;\n    margin: 3px 5px;\n    padding: 3px 1em;\n    width: auto;\n    background-color: #fff;\n    box-shadow: 0 1px 2px #aaa;\n    text-align: center;\n    cursor: pointer;\n}\n.Wikiplus-Btn a {\n    position: relative;\n    display: block;\n    margin: 0;\n    color: #000;\n    text-decoration: none;\n}\n.Wikiplus-InterBox {\n    position: absolute;\n    top: 20%;\n    z-index: 200;\n    padding: 20px 10px;\n    width: 600px;\n    min-height: 100px;\n    border: 1px rgba(161, 154, 220, 0.41) solid;\n    background-color: #edf9f7;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.Wikiplus-InterBox-Header {\n    position: relative;\n    top: 0;\n    top: -8px;\n    margin: 0;\n    width: 100%;\n    border-bottom: 1px #6cf solid;\n    text-align: left;\n    font-size: 15px;\n    line-height: 30px;\n    cursor: move;\n}\n.Wikiplus-InterBox-Input {\n    margin: 20px;\n    width: 60%;\n}\n.Wikiplus-InterBox-Btn {\n    position: relative;\n    float: right;\n    margin: auto 3px;\n    padding: 6px 12px;\n    border: 1px solid #dedede;\n    background-color: #fff;\n    vertical-align: middle;\n    text-align: center;\n    cursor: pointer;\n}\n.Wikiplus-InterBox-Btn:hover {\n    background-color: #e8e8e8;\n}\n.Wikiplus-InterBox-Close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 3px 7px;\n    font-size: 20px;\n    cursor: pointer;\n}\n.Wikiplus-InterBox label {\n    font-size: 13px;\n}\n.Wikiplus-InterBox table.diff {\n    table-layout: auto !important;\n}\n.Wikiplus-InterBox table.diff .diff-addedline,\n.Wikiplus-InterBox table.diff .diff-deletedline,\n.Wikiplus-InterBox table.diff .diff-lineno {\n    width: 50%;\n}\n.Wikiplus-InterBox table.diff .diff-marker {\n    text-align: left;\n}\n#Wikiplus-Quickedit-Preview-Output {\n    clear: both;\n    margin: 5px 0;\n}\n#Wikiplus-Quickedit {\n    word-break: break-all;\n    width: 100%;\n    min-height: 500px;\n}\n.Wikiplus-Banner {\n    margin: 0;\n    padding: 10px 5px;\n    min-height: 50px;\n    background: rgba(193, 222, 214, 0.51);\n    text-align: center;\n    font-size: 30px;\n    font-family: 微软雅黑;\n}\n.MoeNotification-notice {\n    position: relative;\n    display: none;\n    overflow: hidden;\n    margin: 3px 5px;\n    padding: 0 5px;\n    width: auto;\n    box-shadow: 0 3px 3px #aaa;\n    font-size: 14px !important;\n}\n.MoeNotification-notice span {\n    position: relative;\n    margin: 3px auto 3px 3px;\n    color: #fff;\n    text-align: left;\n    font-size: 14px !important;\n    font-family: Arial, Tahoma, Microsoft YaHei, \\5fae\\8f6f\\96c5\\9ed1, Hiragino Sans GB,\n        Microsoft JhengHei, 微軟正黑體, sans-serif;\n    line-height: 1.5 !important;\n}\n.MoeNotification-notice-success {\n    border-left: 5px #8dda93 solid;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px;\n    background-color: #008a00;\n}\n.MoeNotification-notice-warning {\n    border-left: 5px #ffdf00 solid;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px;\n    background-color: #f4bd00;\n}\n.MoeNotification-notice-warning span {\n    color: #000;\n}\n.MoeNotification-notice-error {\n    border-left: 5px #e71717 solid;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px;\n    background-color: #b00e06;\n}\n#MoeNotification {\n    position: fixed;\n    bottom: 30px;\n    left: 0;\n    z-index: 713;\n    min-width: 20%;\n}\n.mw-editsection-divider {\n    display: inline !important;\n}\n.skin-minerva #Wikiplus-Quickedit-Preview-Submit,\n.skin-minerva #Wikiplus-Quickedit-Submit,\n.skin-minerva #Wikiplus-Quickedit-Summary-Input,\n.skin-minerva .Wikiplus-InterBox-Input {\n    all: revert;\n}\n.skin-minerva #Wikiplus-Quickedit-Summary-Input {\n    width: 50%;\n}\n.skin-minerva #Wikiplus-Quickedit-Preview-Submit,\n.skin-minerva #Wikiplus-Quickedit-Submit {\n    margin-top: 5px;\n}\n.skin-minerva #Wikiplus-Setting-Input {\n    width: calc(100% - 10px);\n    max-width: calc(100% - 10px);\n}\n.skin-minerva .Wikiplus-InterBox-Input {\n    margin: 20px;\n    width: 60%;\n}\n.skin-minerva #Wikiplus-Settings-Intro a:before {\n    background-image: linear-gradient(transparent, transparent),\n        url(/w/load.php?modules=skins.minerva.mainMenu.icons&image=settings&format=original&skin=minerva&version=1up49);\n}\n.skin-minerva #Wikiplus-SR-Intro a:before {\n    background-image: linear-gradient(transparent, transparent),\n        url(/w/load.php?modules=skins.minerva.overflow.icons&image=articleRedirect&format=original&lang=zh-cn&skin=minerva&version=1vckg);\n}\n.skin-minerva .mw-parser-output .mw-editsection {\n    display: flex !important;\n    align-items: center;\n}\n.skin-minerva .mw-parser-output .section-heading > div {\n    vertical-align: baseline;\n}\n.skin-vector #Wikiplus-Quickedit-Summary-Input {\n    margin-top: 5px;\n}\n.skin-moeskin .Wikiplus-More-Function-Button a {\n    display: inline-block;\n    padding: 0.4rem 0.8rem;\n    line-height: 1.5;\n    border-radius: 0.2rem;\n}\n.skin-moeskin #Wikiplus-Edit-TopBtn {\n    display: flex;\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    color: var(--theme-button-color);\n    background-color: var(--theme-accent-link-color);\n    line-height: 2;\n    text-align: center;\n    box-shadow: var(--theme-card-box-shadow);\n    transition: all .24s ease;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n.skin-moeskin #Wikiplus-Edit-TopBtn:hover {\n    color: var(--theme-accent-link-color);\n    box-shadow: var(--theme-card-box-shadow--hover);\n    background-color: var(--theme-button-color);\n}\n.skin-moeskin #Wikiplus-Edit-TopBtn a {\n    display: none;\n}\n.skin-moeskin #Wikiplus-Edit-TopBtn span::after {\n    content: 'W+';\n    display: inline-block;\n    font-weight: bold;\n    font-size: smaller;\n    transform: translateY(-2px);\n}",
					],
					sourceRoot: '',
				},
			]),
				(e.Z = a);
		},
		3645: function (t) {
			'use strict';
			t.exports = function (t) {
				var e = [];
				return (
					(e.toString = function () {
						return this.map(function (e) {
							var n = '',
								r = void 0 !== e[5];
							return (
								e[4] && (n += '@supports ('.concat(e[4], ') {')),
								e[2] && (n += '@media '.concat(e[2], ' {')),
								r && (n += '@layer'.concat(e[5].length > 0 ? ' '.concat(e[5]) : '', ' {')),
								(n += t(e)),
								r && (n += '}'),
								e[2] && (n += '}'),
								e[4] && (n += '}'),
								n
							);
						}).join('');
					}),
					(e.i = function (t, n, r, i, o) {
						'string' == typeof t && (t = [[null, t, void 0]]);
						var a = {};
						if (r)
							for (var c = 0; c < this.length; c++) {
								var u = this[c][0];
								null != u && (a[u] = !0);
							}
						for (var s = 0; s < t.length; s++) {
							var l = [].concat(t[s]);
							(r && a[l[0]]) ||
								(void 0 !== o &&
									(void 0 === l[5] ||
										(l[1] = '@layer'
											.concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
											.concat(l[1], '}')),
									(l[5] = o)),
								n &&
									(l[2]
										? ((l[1] = '@media '.concat(l[2], ' {').concat(l[1], '}')), (l[2] = n))
										: (l[2] = n)),
								i &&
									(l[4]
										? ((l[1] = '@supports ('.concat(l[4], ') {').concat(l[1], '}')), (l[4] = i))
										: (l[4] = ''.concat(i))),
								e.push(l));
						}
					}),
					e
				);
			};
		},
		7537: function (t) {
			'use strict';
			t.exports = function (t) {
				var e = t[1],
					n = t[3];
				if (!n) return e;
				if ('function' == typeof btoa) {
					var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
						i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(r),
						o = '/*# '.concat(i, ' */'),
						a = n.sources.map(function (t) {
							return '/*# sourceURL='.concat(n.sourceRoot || '').concat(t, ' */');
						});
					return [e].concat(a).concat([o]).join('\n');
				}
				return [e].join('\n');
			};
		},
		5666: function (t) {
			var e = (function (t) {
				'use strict';
				var e,
					n = Object.prototype,
					r = n.hasOwnProperty,
					i = 'function' == typeof Symbol ? Symbol : {},
					o = i.iterator || '@@iterator',
					a = i.asyncIterator || '@@asyncIterator',
					c = i.toStringTag || '@@toStringTag';
				function u(t, e, n) {
					return (
						Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					u({}, '');
				} catch (t) {
					u = function (t, e, n) {
						return (t[e] = n);
					};
				}
				function s(t, e, n, r) {
					var i = e && e.prototype instanceof g ? e : g,
						o = Object.create(i.prototype),
						a = new S(r || []);
					return (
						(o._invoke = (function (t, e, n) {
							var r = f;
							return function (i, o) {
								if (r === d) throw new Error('Generator is already running');
								if (r === h) {
									if ('throw' === i) throw o;
									return P();
								}
								for (n.method = i, n.arg = o; ; ) {
									var a = n.delegate;
									if (a) {
										var c = C(a, n);
										if (c) {
											if (c === v) continue;
											return c;
										}
									}
									if ('next' === n.method) n.sent = n._sent = n.arg;
									else if ('throw' === n.method) {
										if (r === f) throw ((r = h), n.arg);
										n.dispatchException(n.arg);
									} else 'return' === n.method && n.abrupt('return', n.arg);
									r = d;
									var u = l(t, e, n);
									if ('normal' === u.type) {
										if (((r = n.done ? h : p), u.arg === v)) continue;
										return {value: u.arg, done: n.done};
									}
									'throw' === u.type && ((r = h), (n.method = 'throw'), (n.arg = u.arg));
								}
							};
						})(t, n, a)),
						o
					);
				}
				function l(t, e, n) {
					try {
						return {type: 'normal', arg: t.call(e, n)};
					} catch (t) {
						return {type: 'throw', arg: t};
					}
				}
				t.wrap = s;
				var f = 'suspendedStart',
					p = 'suspendedYield',
					d = 'executing',
					h = 'completed',
					v = {};
				function g() {}
				function m() {}
				function y() {}
				var k = {};
				u(k, o, function () {
					return this;
				});
				var b = Object.getPrototypeOf,
					A = b && b(b(O([])));
				A && A !== n && r.call(A, o) && (k = A);
				var w = (y.prototype = g.prototype = Object.create(k));
				function x(t) {
					['next', 'throw', 'return'].forEach(function (e) {
						u(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function I(t, e) {
					function n(i, o, a, c) {
						var u = l(t[i], t, o);
						if ('throw' !== u.type) {
							var s = u.arg,
								f = s.value;
							return f && 'object' == typeof f && r.call(f, '__await')
								? e.resolve(f.__await).then(
										function (t) {
											n('next', t, a, c);
										},
										function (t) {
											n('throw', t, a, c);
										}
								  )
								: e.resolve(f).then(
										function (t) {
											(s.value = t), a(s);
										},
										function (t) {
											return n('throw', t, a, c);
										}
								  );
						}
						c(u.arg);
					}
					var i;
					this._invoke = function (t, r) {
						function o() {
							return new e(function (e, i) {
								n(t, r, e, i);
							});
						}
						return (i = i ? i.then(o, o) : o());
					};
				}
				function C(t, n) {
					var r = t.iterator[n.method];
					if (r === e) {
						if (((n.delegate = null), 'throw' === n.method)) {
							if (
								t.iterator.return &&
								((n.method = 'return'), (n.arg = e), C(t, n), 'throw' === n.method)
							)
								return v;
							(n.method = 'throw'),
								(n.arg = new TypeError("The iterator does not provide a 'throw' method"));
						}
						return v;
					}
					var i = l(r, t.iterator, n.arg);
					if ('throw' === i.type) return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), v;
					var o = i.arg;
					return o
						? o.done
							? ((n[t.resultName] = o.value),
							  (n.next = t.nextLoc),
							  'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
							  (n.delegate = null),
							  v)
							: o
						: ((n.method = 'throw'),
						  (n.arg = new TypeError('iterator result is not an object')),
						  (n.delegate = null),
						  v);
				}
				function B(t) {
					var e = {tryLoc: t[0]};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					var e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function S(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(B, this), this.reset(!0);
				}
				function O(t) {
					if (t) {
						var n = t[o];
						if (n) return n.call(t);
						if ('function' == typeof t.next) return t;
						if (!isNaN(t.length)) {
							var i = -1,
								a = function n() {
									for (; ++i < t.length; )
										if (r.call(t, i)) return (n.value = t[i]), (n.done = !1), n;
									return (n.value = e), (n.done = !0), n;
								};
							return (a.next = a);
						}
					}
					return {next: P};
				}
				function P() {
					return {value: e, done: !0};
				}
				return (
					(m.prototype = y),
					u(w, 'constructor', y),
					u(y, 'constructor', m),
					(m.displayName = u(y, c, 'GeneratorFunction')),
					(t.isGeneratorFunction = function (t) {
						var e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(t.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, y)
								: ((t.__proto__ = y), u(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(w)),
							t
						);
					}),
					(t.awrap = function (t) {
						return {__await: t};
					}),
					x(I.prototype),
					u(I.prototype, a, function () {
						return this;
					}),
					(t.AsyncIterator = I),
					(t.async = function (e, n, r, i, o) {
						void 0 === o && (o = Promise);
						var a = new I(s(e, n, r, i), o);
						return t.isGeneratorFunction(n)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
							  });
					}),
					x(w),
					u(w, c, 'Generator'),
					u(w, o, function () {
						return this;
					}),
					u(w, 'toString', function () {
						return '[object Generator]';
					}),
					(t.keys = function (t) {
						var e = [];
						for (var n in t) e.push(n);
						return (
							e.reverse(),
							function n() {
								for (; e.length; ) {
									var r = e.pop();
									if (r in t) return (n.value = r), (n.done = !1), n;
								}
								return (n.done = !0), n;
							}
						);
					}),
					(t.values = O),
					(S.prototype = {
						constructor: S,
						reset: function (t) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = e),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = e),
								this.tryEntries.forEach(_),
								!t)
							)
								for (var n in this)
									't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (t) {
							if (this.done) throw t;
							var n = this;
							function i(r, i) {
								return (
									(c.type = 'throw'),
									(c.arg = t),
									(n.next = r),
									i && ((n.method = 'next'), (n.arg = e)),
									!!i
								);
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var a = this.tryEntries[o],
									c = a.completion;
								if ('root' === a.tryLoc) return i('end');
								if (a.tryLoc <= this.prev) {
									var u = r.call(a, 'catchLoc'),
										s = r.call(a, 'finallyLoc');
									if (u && s) {
										if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return i(a.finallyLoc);
									} else if (u) {
										if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return i(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var n = this.tryEntries.length - 1; n >= 0; --n) {
								var i = this.tryEntries[n];
								if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
									var o = i;
									break;
								}
							}
							o &&
								('break' === t || 'continue' === t) &&
								o.tryLoc <= e &&
								e <= o.finallyLoc &&
								(o = null);
							var a = o ? o.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
							);
						},
						complete: function (t, e) {
							if ('throw' === t.type) throw t.arg;
							return (
								'break' === t.type || 'continue' === t.type
									? (this.next = t.arg)
									: 'return' === t.type
									? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
									: 'normal' === t.type && e && (this.next = e),
								v
							);
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), _(n), v;
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.tryLoc === t) {
									var r = n.completion;
									if ('throw' === r.type) {
										var i = r.arg;
										_(n);
									}
									return i;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (t, n, r) {
							return (
								(this.delegate = {iterator: O(t), resultName: n, nextLoc: r}),
								'next' === this.method && (this.arg = e),
								v
							);
						},
					}),
					t
				);
			})(t.exports);
			try {
				regeneratorRuntime = e;
			} catch (t) {
				'object' == typeof globalThis
					? (globalThis.regeneratorRuntime = e)
					: Function('r', 'regeneratorRuntime = r')(e);
			}
		},
		3379: function (t) {
			'use strict';
			var e = [];
			function n(t) {
				for (var n = -1, r = 0; r < e.length; r++)
					if (e[r].identifier === t) {
						n = r;
						break;
					}
				return n;
			}
			function r(t, r) {
				for (var o = {}, a = [], c = 0; c < t.length; c++) {
					var u = t[c],
						s = r.base ? u[0] + r.base : u[0],
						l = o[s] || 0,
						f = ''.concat(s, ' ').concat(l);
					o[s] = l + 1;
					var p = n(f),
						d = {css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5]};
					if (-1 !== p) e[p].references++, e[p].updater(d);
					else {
						var h = i(d, r);
						(r.byIndex = c), e.splice(c, 0, {identifier: f, updater: h, references: 1});
					}
					a.push(f);
				}
				return a;
			}
			function i(t, e) {
				var n = e.domAPI(e);
				n.update(t);
				return function (e) {
					if (e) {
						if (
							e.css === t.css &&
							e.media === t.media &&
							e.sourceMap === t.sourceMap &&
							e.supports === t.supports &&
							e.layer === t.layer
						)
							return;
						n.update((t = e));
					} else n.remove();
				};
			}
			t.exports = function (t, i) {
				var o = r((t = t || []), (i = i || {}));
				return function (t) {
					t = t || [];
					for (var a = 0; a < o.length; a++) {
						var c = n(o[a]);
						e[c].references--;
					}
					for (var u = r(t, i), s = 0; s < o.length; s++) {
						var l = n(o[s]);
						0 === e[l].references && (e[l].updater(), e.splice(l, 1));
					}
					o = u;
				};
			};
		},
		569: function (t) {
			'use strict';
			var e = {};
			t.exports = function (t, n) {
				var r = (function (t) {
					if (void 0 === e[t]) {
						var n = document.querySelector(t);
						if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
							try {
								n = n.contentDocument.head;
							} catch (t) {
								n = null;
							}
						e[t] = n;
					}
					return e[t];
				})(t);
				if (!r)
					throw new Error(
						"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
					);
				r.appendChild(n);
			};
		},
		9216: function (t) {
			'use strict';
			t.exports = function (t) {
				var e = document.createElement('style');
				return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
			};
		},
		3565: function (t, e, n) {
			'use strict';
			t.exports = function (t) {
				var e = n.nc;
				e && t.setAttribute('nonce', e);
			};
		},
		7795: function (t) {
			'use strict';
			t.exports = function (t) {
				var e = t.insertStyleElement(t);
				return {
					update: function (n) {
						!(function (t, e, n) {
							var r = '';
							n.supports && (r += '@supports ('.concat(n.supports, ') {')),
								n.media && (r += '@media '.concat(n.media, ' {'));
							var i = void 0 !== n.layer;
							i && (r += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')),
								(r += n.css),
								i && (r += '}'),
								n.media && (r += '}'),
								n.supports && (r += '}');
							var o = n.sourceMap;
							o &&
								'undefined' != typeof btoa &&
								(r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
									btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
									' */'
								)),
								e.styleTagTransform(r, t, e.options);
						})(e, t, n);
					},
					remove: function () {
						!(function (t) {
							if (null === t.parentNode) return !1;
							t.parentNode.removeChild(t);
						})(e);
					},
				};
			};
		},
		4589: function (t) {
			'use strict';
			t.exports = function (t, e) {
				if (e.styleSheet) e.styleSheet.cssText = t;
				else {
					for (; e.firstChild; ) e.removeChild(e.firstChild);
					e.appendChild(document.createTextNode(t));
				}
			};
		},
	};
	var e = {};
	function n(r) {
		var i = e[r];
		if (void 0 !== i) return i.exports;
		var o = (e[r] = {id: r, exports: {}});
		return t[r](o, o.exports, n), o.exports;
	}
	(n.n = function (t) {
		var e =
			t && t.__esModule
				? function () {
						return t.default;
				  }
				: function () {
						return t;
				  };
		return n.d(e, {a: e}), e;
	}),
		(n.d = function (t, e) {
			for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]});
		}),
		(n.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || new Function('return this')();
			} catch (t) {
				if ('object' == typeof window) return window;
			}
		})()),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(function () {
			'use strict';
			n(6699),
				n(2023),
				n(2222),
				n(9600),
				n(4916),
				n(5306),
				n(1539),
				n(8674),
				n(9070),
				n(7941),
				n(2526),
				n(7327),
				n(5003),
				n(4747),
				n(9337),
				n(3321),
				n(5666),
				n(6992),
				n(8783),
				n(3948),
				n(285),
				n(1637),
				n(9720),
				n(1817),
				n(2165),
				n(7042),
				n(8309),
				n(1038);
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			var e = (function () {
					function e() {
						var t, n, r;
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, e),
							(r = '4.0.11'),
							(n = 'version') in (t = this)
								? Object.defineProperty(t, n, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (t[n] = r);
					}
					var n, r, i;
					return (
						(n = e),
						(r = [
							{
								key: 'isArticle',
								get: function () {
									return window.mw.config.get('wgIsArticle');
								},
							},
							{
								key: 'currentPageName',
								get: function () {
									return window.mw.config.get('wgPageName').replace(/ /g, '_');
								},
							},
							{
								key: 'articleId',
								get: function () {
									return window.mw.config.get('wgArticleId');
								},
							},
							{
								key: 'revisionId',
								get: function () {
									return window.mw.config.get('wgRevisionId');
								},
							},
							{
								key: 'latestRevisionId',
								get: function () {
									return window.mw.config.get('wgCurRevisionId');
								},
							},
							{
								key: 'articlePath',
								get: function () {
									return window.mw.config.get('wgArticlePath');
								},
							},
							{
								key: 'scriptPath',
								get: function () {
									return window.mw.config.get('wgScriptPath');
								},
							},
							{
								key: 'action',
								get: function () {
									return window.mw.config.get('wgAction');
								},
							},
							{
								key: 'skin',
								get: function () {
									return window.mw.config.get('skin');
								},
							},
							{
								key: 'userGroups',
								get: function () {
									return window.mw.config.get('wgUserGroups');
								},
							},
							{
								key: 'wikiId',
								get: function () {
									return window.mw.config.get('wgWikiID');
								},
							},
						]) && t(n.prototype, r),
						i && t(n, i),
						Object.defineProperty(n, 'prototype', {writable: !1}),
						e
					);
				})(),
				r = new e();
			function i(t, e) {
				return (
					(function (t) {
						if (Array.isArray(t)) return t;
					})(t) ||
					(function (t, e) {
						var n =
							null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
						if (null == n) return;
						var r,
							i,
							o = [],
							a = !0,
							c = !1;
						try {
							for (
								n = n.call(t);
								!(a = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e);
								a = !0
							);
						} catch (t) {
							(c = !0), (i = t);
						} finally {
							try {
								a || null == n.return || n.return();
							} finally {
								if (c) throw i;
							}
						}
						return o;
					})(t, e) ||
					(function (t, e) {
						if (!t) return;
						if ('string' == typeof t) return o(t, e);
						var n = Object.prototype.toString.call(t).slice(8, -1);
						'Object' === n && t.constructor && (n = t.constructor.name);
						if ('Map' === n || 'Set' === n) return Array.from(t);
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e);
					})(t, e) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					})()
				);
			}
			function o(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r;
			}
			function a(t, e, n, r, i, o, a) {
				try {
					var c = t[o](a),
						u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function c(t) {
				return function () {
					var e = this,
						n = arguments;
					return new Promise(function (r, i) {
						var o = t.apply(e, n);
						function c(t) {
							a(o, r, i, c, u, 'next', t);
						}
						function u(t) {
							a(o, r, i, c, u, 'throw', t);
						}
						c(void 0);
					});
				};
			}
			function u(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			var s,
				l,
				f,
				p = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t);
					}
					var e, n, o, a, s;
					return (
						(e = t),
						(n = null),
						(o = [
							{
								key: 'get',
								value:
									((s = c(
										regeneratorRuntime.mark(function e(n) {
											var i, o;
											return regeneratorRuntime.wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(i = new URL(t.base)),
																Object.keys(n).forEach(function (t) {
																	i.searchParams.append(t, n[t]);
																}),
																(e.next = 4),
																fetch(i, {
																	credentials: 'same-origin',
																	headers: {
																		'Api-User-Agent': 'Wikiplus/'
																			.concat(r.version, ' (')
																			.concat(r.wikiId, ')'),
																	},
																})
															);
														case 4:
															return (o = e.sent), (e.next = 7), o.json();
														case 7:
															return e.abrupt('return', e.sent);
														case 8:
														case 'end':
															return e.stop();
													}
											}, e);
										})
									)),
									function (t) {
										return s.apply(this, arguments);
									}),
							},
							{
								key: 'post',
								value:
									((a = c(
										regeneratorRuntime.mark(function e(n) {
											var o, a, c;
											return regeneratorRuntime.wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(o = new URL(t.base)),
																(a = new FormData()),
																Object.entries(n).forEach(function (t) {
																	var e = i(t, 2),
																		n = e[0],
																		r = e[1];
																	a.append(n, r);
																}),
																(e.next = 5),
																fetch(o, {
																	method: 'POST',
																	body: a,
																	credentials: 'same-origin',
																	headers: {
																		'Api-User-Agent': 'Wikiplus/'
																			.concat(r.version, ' (')
																			.concat(r.wikiId, ')'),
																	},
																})
															);
														case 5:
															return (c = e.sent), (e.next = 8), c.json();
														case 8:
															return e.abrupt('return', e.sent);
														case 9:
														case 'end':
															return e.stop();
													}
											}, e);
										})
									)),
									function (t) {
										return a.apply(this, arguments);
									}),
							},
						]),
						n && u(e.prototype, n),
						o && u(e, o),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})();
			(s = p),
				(l = 'base'),
				(f = ''.concat(location.protocol, '//').concat(location.host).concat(r.scriptPath, '/api.php')),
				l in s
					? Object.defineProperty(s, l, {value: f, enumerable: !0, configurable: !0, writable: !0})
					: (s[l] = f);
			var d = p,
				h =
					(n(8304),
					n(489),
					n(4603),
					n(9714),
					n(2772),
					n(2419),
					n(1532),
					JSON.parse(
						'{"__language":"zh-cn","__author":["Eridanus Sora"],"__version":"212","unknown_error_name":"未知的错误名","api_unaccessiable":"无可用的API","api_unwriteable":"无可用的写入API","fail_to_get_timestamp":"无法获得页面编辑起始时间戳","fail_to_get_edittoken":"无法获得页面编辑权标","fail_to_get_pageinfo":"无法获得页面信息","not_autoconfirmed_user":"非自动确认用户","hit_abusefilter":"被防滥用过滤器拦截","unknown_edit_error":"未知编辑错误","unknown_edit_error_message":"未知编辑错误($1)","notitle":"无法编辑空标题页面","notext":"缺少页面内容","notoken":"空编辑权标","invalidsection":"段落编号非法","protectedtitle":"该标题被保护，无法创建","cantcreate":"无新建页面权限","cantcreate_anon":"匿名用户无新建页面权限","articleexists":"无法创建已经存在的页面","noimageredirect_anon":"匿名用户无新建文件重定向权限","noimageredirect":"无新建文件重定向权限","spamdetected":"文本含有敏感内容，被SPAM过滤器拦截","filtered":"编辑被过滤器拦截","contenttoobig":"文本超过最大长度限制","noedit_anon":"匿名用户无编辑页面权限","noedit":"无编辑页面权限","pagedeleted":"编辑时，此页面被删除","emptypage":"无法新建空内容页面","emptynewsection":"无法新建空内容段落","editconflict":"编辑冲突，请手工检查页面当前内容与提交内容差异并修正后，刷新页面提交","revwrongpage":"编辑的修订版本与编辑的页面不匹配","undofailure":"由于存在冲突的中间版本，无法撤销编辑","missingtitle":"无法创建或编辑空标题页面","mustbeposted":"必须使用POST方式提交编辑","readapidenied":"无读取API使用权限","writeapidenied":"无通过API编辑页面权限","noapiwrite":"本Wiki未开启可用的写入API","badtoken":"非法的编辑权标","missingparam":"缺少必要参数，页面名和页面ID不能均为空","invalidparammix":"参数重复，页面名和页面ID不能同时给定","invalidtitle":"非法的标题","nosuchpageid":"不存在的页面ID","pagecannotexist":"该名称空间不允许新建一般页面","nosuchrevid":"不存在的修订版本","badmd5":"非法的MD5值","hookaborted":"编辑被扩展Hook拦截","parseerror":"无法解析页面文本","summaryrequired":"编辑摘要不能为空","blocked":"已被封禁","ratelimited":"达到操作速率上限，请稍后重试","unknownerror":"未知错误","nosuchsection":"无法编辑不存在的段落","sectionsnotsupported":"该页面不支持段落编辑","editnotsupported":"该页面不支持通过API编辑","appendnotsupported":"该页面无法在前后插入文本","redirect_appendonly":"在遵循重定向的情况下，只能进行前后插入或创建新段落","badformat":"文本格式错误","customcssprotected":"无法编辑用户CSS页","customjsprotected":"无法编辑用户JS页","cascadeprotected":"该页面被级联保护","network_edit_error":"由于网络原因编辑失败","redirect_to_summary":"重定向页面至[[$1]] // Wikiplus","redirect_from_summary":"将[[$1]]重定向至[[$2]] // Wikiplus","need_init":"页面类未加载完成","fail_to_get_wikitext":"无法获得页面文本","quickedit_topbtn":"快速编辑","quickedit_sectionbtn":"快速编辑","fail_to_init_quickedit":"无法加载快速编辑","back":"返回","goto_editbox":"到编辑框","summary_placehold":"请输入编辑摘要","submit":"提交","publish_page":"发布页面","publish_change":"发布更改","preview":"预览","cancel":"取消","mark_minoredit":"标记为小编辑","onclose_confirm":"[Wikiplus] 您确认要关闭/刷新页面吗？这会导致您的编辑数据丢失","fail_to_get_wikitext_when_edit":"无法获得页面文本以编辑","cant_parse_wikitext":"无法解析维基文本","loading_preview":"正在读取预览","submitting_edit":"正在提交编辑","edit_success":"编辑成功 用时$1ms","empty_page_confirm":"您向编辑函数传入了空内容参数 这将清空页面\\r\\n由于该行为危险 请将config参数的empty键值设定为true来确认","cross_page_edit":"编辑目标位于其他页面 正在获取基础信息","cross_page_edit_submit":"基础信息获取成功 正在提交编辑","cross_page_edit_error":"无法获得基础信息>.<","install_tip":"您是否允许Wikiplus采集非敏感数据用于改进Wikiplus及为当前Wiki：$1提供改进建议？","accept":"接受","decline":"拒绝","install_finish":"Wikiplus安装完毕","loading":"正在载入","cant_add_funcbtn":"无法增加功能按钮","wikiplus_settings":"Wikiplus设置","wikiplus_settings_desc":"请在下方按规范修改Wikiplus设置","wikiplus_settings_placeholder":"当前设置为空 请在此处按规范修改Wikiplus设置","wikiplus_settings_grammar_error":"设置存在语法错误 请检查后重试","wikiplus_settings_saved":"设置已保存","redirect_from":"将页面重定向至此","redirect_desc":"请输入要重定向至此的页面名","empty_input":"输入不能为空","redirect_saved":"重定向完成","uninited":"Wikiplus未加载完毕 请刷新重试","cant_parse_i18ncache":"无法解析多语言定义文件缓存","cant_load_language":"无法获取多语言定义文件","history_edit_warning":" // 正试图编辑历史版本 这将会应用到本页面的最新版本 请慎重提交","create_page_tip":"\x3c!-- 正在创建新页面 请删去此行注释后继续 --\x3e","continue":"仍然继续","default_summary_suffix":"// Edit via Wikiplus"}'
					)),
				v = JSON.parse(
					'{"__language":"en-us","__author":["Eridanus Sora","AnnAngela","YinYan"],"__version":"212","unknown_error_name":"Unknown error","api_unaccessiable":"API of this wiki is not available","api_unwriteable":"Write API of this wiki is not available","fail_to_get_timestamp":"Failed to get the timestamp of this page.","fail_to_get_edittoken":"Failed to get the EditToken of this page.","fail_to_get_pageinfo":"Failed to load infomation of this page","not_autoconfirmed_user":"You are not an autoconfiremd user","hit_abusefilter":"Your edit hit the abusefilter(s)","unknown_edit_error":"Unknown edit error","unknown_edit_error_message":"Unknown edit error($1)","notitle":"The title parameter must be set","notext":"The text parameter must be set","notoken":"The token parameter must be set","invalidsection":"The section parameter must be set to an integer or \'new\'","protectedtitle":"This title has been protected from creation","cantcreate":"You don\'t have permission to create new pages","cantcreate_anon":"Anonymous users can\'t create new pages","articleexists":"The article you tried to create has already existed","noimageredirect_anon":"Anonymous users can\'t create image redirects","noimageredirect":"You don\'t have the permission to create image redirects","spamdetected":"Your edit was rejected because it contained a spam fragment","filtered":"The filter callback function rejected your edit","contenttoobig":"The content you submitted exceeds the article size limit","noedit_anon":"Anonymous users can\'t edit pages","noedit":"You don\'t have the permission to edit pages","pagedeleted":"The page was deleted during your edit","emptypage":"Creating new, empty pages is not allowed","emptynewsection":"Creating empty new sections is not possible.","editconflict":"Edit Conflict! Don\'t panic. Please check the difference between your content below and the existing revision, then refresh the page to make another submit","revwrongpage":"The revision you are editing now is not one a valid reversions of this page","undofailure":"Undo failed due to conflicts.","missingtitle":"Missing title in your edit/creation","mustbeposted":"The edit must be submited by POST method","readapidenied":"Read API Denied","writeapidenied":"Write API Denied","noapiwrite":"No available write API in this wiki","badtoken":"Invalid EditToken","missingparam":"One of the parameters title, pageid is required","invalidparammix":"The parameters title, pageid can not be used together","invalidtitle":"Invalid page title","nosuchpageid":"Inexistent page ID","pagecannotexist":"No access to create a new page in this namespace","nosuchrevid":"Inexisting reversion ID","badmd5":"Invalid MD5","hookaborted":"Your edit was rejected by the hook(s)","parseerror":"Failed to parse the wikitext of this page","summaryrequired":"No summary in your edit","blocked":"You have been already BLOCKED","ratelimited":"You\'ve exceeded your rate limit. Please have a tea and try again later","unknownerror":"Unknown error","nosuchsection":"There is no such section","sectionsnotsupported":"Can\'t edit in this section","editnotsupported":"Can\'t edit in this section by writing section","appendnotsupported":"Can\'t append/prepend wikitext to this page","redirect_appendonly":"Only append/prepend can be made to this page because of the rules of the redirect page","badformat":"The requested serialization format can not be applied to the page\'s content model","customcssprotected":"You\'re not allowed to edit custom CSS pages","customjsprotected":"You\'re not allowed to edit custom JavaScript pages","cascadeprotected":"This page is under a cascading protection","network_edit_error":"Failed to edit this page because of network errors","redirect_to_summary":"Redirect to [[$1]] // Wikiplus","redirect_from_summary":"Redirect [[$1]] to [[$2]] // Wikiplus","need_init":"Wikiplus haven\'t been loaded completely. It\'s a rare occasion so you can try to refresh and try again.","fail_to_get_wikitext":"Failed to load the wikitext of this page","quickedit_topbtn":"QuickEdit","quickedit_sectionbtn":"QuickEdit","fail_to_init_quickedit":"Failed to initialize Wikiplus","back":"Back","goto_editbox":"Jump to editbox","summary_placehold":"Edit summary","submit":"Submit","publish_page":"Publish Page","publish_change":"Publish Changes","preview":"Preview","cancel":"Cancel","mark_minoredit":"Mark this edit as a minor edit","onclose_confirm":"[Wikiplus] Do you really want to close this page when you are still editing it, as you will lose all your unsaved work?","fail_to_get_wikitext_when_edit":"Failed to load wikitext for your edit","cant_parse_wikitext":"Failed to parse the wikitext","loading_preview":"Loading the preview","submitting_edit":"Submitting your edit","edit_success":"Your edit is submitted within $1ms","empty_page_confirm":"The wikitext in your edit is empty, which will empty this page.\\r\\nPlease set the value of key \\"empty\\" true to allow this kind of edits. (This is a tip for developers)","cross_page_edit":"The content you are editing belongs to another page, please wait...","cross_page_edit_submit":"Submitting your edit...","cross_page_edit_error":"Failed to load the infomation","install_tip":"Do you allow Wikiplus to collect insensitive data to help us develop Wikiplus and provide feedback to current site: $1 ?","accept":"Yes","decline":"No","install_finish":"Wikiplus is installed, enjoy it","loading":"Loading","cant_add_funcbtn":"Failed to add buttons for Wikiplus","wikiplus_settings":"Wikiplus Setting","wikiplus_settings_desc":"Please modify your setting according to the standards below","wikiplus_settings_placeholder":"Your setting is empty, please modify your setting according to the documentation.","wikiplus_settings_grammar_error":"Syntax error in your setting","wikiplus_settings_saved":"Your settings have been saved","redirect_from":"Redirect from","redirect_desc":"Which page do you want to redirect here?","empty_input":"Empty input","redirect_saved":"Redirection is finished","uninited":"Wikiplus is not completely initialized, please refeash this page","cant_parse_i18ncache":"Failed to parse the cache of i18n file","cant_load_language":"Failed to load i18n file","history_edit_warning":" // You are trying to edit a history revision of this page. This will apply to the latest revision. Please be careful.","create_page_tip":"\x3c!-- You are now creating a new page. Please delete this line and be careful. --\x3e","continue":"Continue anyway","default_summary_suffix":"// Edit via Wikiplus"}'
				);
			function g(t, e, n, r, i, o, a) {
				try {
					var c = t[o](a),
						u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function m(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function y(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = n),
					t
				);
			}
			var k = (function () {
					function t() {
						var e;
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							y(this, 'language', void 0),
							y(this, 'i18nData', {}),
							y(this, 'sessionUpdateLog', []);
						try {
							e =
								JSON.parse(localStorage.Wikiplus_Settings).language ||
								window.navigator.language.toLowerCase();
						} catch (t) {
							e = window.navigator.language.toLowerCase();
						}
						(this.language = e), (this.i18nData['zh-cn'] = h), (this.i18nData['en-us'] = v);
						try {
							for (
								var n = JSON.parse(localStorage.getItem('Wikiplus_i18nCache')),
									r = 0,
									i = Object.keys(n);
								r < i.length;
								r++
							) {
								var o = i[r];
								'zh-cn' !== o && 'en-us' !== o && (this.i18nData[o] = n[o]);
							}
						} catch (t) {
							localStorage.setItem('Wikiplus_i18nCache', '{}');
						}
					}
					var e, n, r, i, o;
					return (
						(e = t),
						(n = [
							{
								key: 'translate',
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
										n = '';
									return (
										this.language in this.i18nData
											? t in this.i18nData[this.language]
												? (n = this.i18nData[this.language][t])
												: (this.loadLanguage(this.language),
												  (n = t in this.i18nData['en-us'] ? this.i18nData['en-us'][t] : t))
											: this.loadLanguage(this.language),
										e.length > 0 &&
											e.forEach(function (t, e) {
												n = n.replace('$'.concat(e + 1), t);
											}),
										n
									);
								},
							},
							{
								key: 'loadLanguage',
								value:
									((i = regeneratorRuntime.mark(function t(e) {
										var n, r;
										return regeneratorRuntime.wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															if (!this.sessionUpdateLog.includes(e)) {
																t.next = 2;
																break;
															}
															return t.abrupt('return');
														case 2:
															return (
																(t.prev = 2),
																(t.next = 5),
																fetch(
																	'https://wikiplus-app.com/languages/get.php?lang='.concat(
																		e
																	)
																)
															);
														case 5:
															return (t.next = 7), t.sent.json();
														case 7:
															(n = t.sent),
																(r =
																	localStorage.getItem('Wikiplus_LanguageVersion') ||
																	'000'),
																this.sessionUpdateLog.push(e),
																(n.__version === r && e in this.i18nData) ||
																	(console.info(
																		'Update '
																			.concat(e, ' support to version ')
																			.concat(n.__version)
																	),
																	(this.i18nData[e] = n),
																	localStorage.setItem(
																		'Wikiplus_i18nCache',
																		JSON.stringify(this.i18nData)
																	)),
																(t.next = 15);
															break;
														case 13:
															(t.prev = 13), (t.t0 = t.catch(2));
														case 15:
														case 'end':
															return t.stop();
													}
											},
											t,
											this,
											[[2, 13]]
										);
									})),
									(o = function () {
										var t = this,
											e = arguments;
										return new Promise(function (n, r) {
											var o = i.apply(t, e);
											function a(t) {
												g(o, n, r, a, c, 'next', t);
											}
											function c(t) {
												g(o, n, r, a, c, 'throw', t);
											}
											a(void 0);
										});
									}),
									function (t) {
										return o.apply(this, arguments);
									}),
							},
						]),
						n && m(e.prototype, n),
						r && m(e, r),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				b = new k();
			function A(t) {
				return (
					(A =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
							  }
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					A(t)
				);
			}
			function w(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function x(t, e, n) {
				return e && w(t.prototype, e), n && w(t, n), Object.defineProperty(t, 'prototype', {writable: !1}), t;
			}
			function I(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function C(t, e) {
				if (e && ('object' === A(e) || 'function' == typeof e)) return e;
				if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');
				return (function (t) {
					if (void 0 === t)
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t;
				})(t);
			}
			function B(t) {
				var e = 'function' == typeof Map ? new Map() : void 0;
				return (
					(B = function (t) {
						if (null === t || ((n = t), -1 === Function.toString.call(n).indexOf('[native code]')))
							return t;
						var n;
						if ('function' != typeof t)
							throw new TypeError('Super expression must either be null or a function');
						if (void 0 !== e) {
							if (e.has(t)) return e.get(t);
							e.set(t, r);
						}
						function r() {
							return _(t, arguments, P(this).constructor);
						}
						return (
							(r.prototype = Object.create(t.prototype, {
								constructor: {value: r, enumerable: !1, writable: !0, configurable: !0},
							})),
							O(r, t)
						);
					}),
					B(t)
				);
			}
			function _(t, e, n) {
				return (
					(_ = S()
						? Reflect.construct
						: function (t, e, n) {
								var r = [null];
								r.push.apply(r, e);
								var i = new (Function.bind.apply(t, r))();
								return n && O(i, n.prototype), i;
						  }),
					_.apply(null, arguments)
				);
			}
			function S() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
				} catch (t) {
					return !1;
				}
			}
			function O(t, e) {
				return (
					(O =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					O(t, e)
				);
			}
			function P(t) {
				return (
					(P = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					P(t)
				);
			}
			var W = (function (t) {
					!(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: {value: t, writable: !0, configurable: !0},
						})),
							Object.defineProperty(t, 'prototype', {writable: !1}),
							e && O(t, e);
					})(i, t);
					var e,
						n,
						r =
							((e = i),
							(n = S()),
							function () {
								var t,
									r = P(e);
								if (n) {
									var i = P(this).constructor;
									t = Reflect.construct(r, arguments, i);
								} else t = r.apply(this, arguments);
								return C(this, t);
							});
					function i(t, e) {
						var n;
						return I(this, i), ((n = r.call(this, t)).code = e), n;
					}
					return x(i);
				})(B(Error)),
				E = (function () {
					function t() {
						I(this, t);
					}
					return (
						x(t, null, [
							{
								key: 'debug',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
									console.debug('[Wikiplus-DEBUG] '.concat(t));
								},
							},
							{
								key: 'info',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
									console.info('[Wikiplus-INFO] '.concat(t));
								},
							},
							{
								key: 'error',
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
										n = b.translate(t);
									throw (
										(e.length > 0 &&
											e.forEach(function (t, e) {
												n = n.replace(new RegExp('\\'.concat(e + 1), 'ig'), t);
											}),
										console.error('[Wikiplus-ERROR] '.concat(n)),
										new W(''.concat(n), t))
									);
								},
							},
						]),
						t
					);
				})(),
				j = E;
			function R(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e &&
						(r = r.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function T(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? R(Object(n), !0).forEach(function (e) {
								U(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: R(Object(n)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
						  });
				}
				return t;
			}
			function L(t, e, n, r, i, o, a) {
				try {
					var c = t[o](a),
						u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function N(t) {
				return function () {
					var e = this,
						n = arguments;
					return new Promise(function (r, i) {
						var o = t.apply(e, n);
						function a(t) {
							L(o, r, i, a, c, 'next', t);
						}
						function c(t) {
							L(o, r, i, a, c, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function M(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function U(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = n),
					t
				);
			}
			var Q = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							U(this, 'pageInfoCache', {});
					}
					var e, n, i, o, a, c, u, s, l;
					return (
						(e = t),
						(n = [
							{
								key: 'getEditToken',
								value:
									((l = N(
										regeneratorRuntime.mark(function t() {
											var e;
											return regeneratorRuntime.wrap(function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(t.next = 2),
																d.get({action: 'query', meta: 'tokens', format: 'json'})
															);
														case 2:
															if (
																!(
																	(e = t.sent).query &&
																	e.query.tokens &&
																	e.query.tokens.csrftoken &&
																	'+\\' !== e.query.tokens.csrftoken
																)
															) {
																t.next = 7;
																break;
															}
															return t.abrupt('return', e.query.tokens.csrftoken);
														case 7:
															return t.abrupt('return', j.error('fail_to_get_edittoken'));
														case 8:
														case 'end':
															return t.stop();
													}
											}, t);
										})
									)),
									function () {
										return l.apply(this, arguments);
									}),
							},
							{
								key: 'getPageInfo',
								value:
									((s = N(
										regeneratorRuntime.mark(function t(e) {
											var n, r, i, o, a;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																if (
																	((n = e.title),
																	(r = e.revisionId),
																	(t.prev = 1),
																	(i = {
																		action: 'query',
																		prop: 'revisions|info',
																		rvprop: 'timestamp|ids',
																		format: 'json',
																	}),
																	!r)
																) {
																	t.next = 7;
																	break;
																}
																(i.revids = r), (t.next = 11);
																break;
															case 7:
																if (!n) {
																	t.next = 11;
																	break;
																}
																if (!this.pageInfoCache[n]) {
																	t.next = 10;
																	break;
																}
																return t.abrupt('return', {
																	timestamp: this.pageInfoCache[n].timestamp,
																	revisionId: this.pageInfoCache[n].revid,
																});
															case 10:
																i.titles = n;
															case 11:
																return (t.next = 13), d.get(i);
															case 13:
																if (!(o = t.sent).query || !o.query.pages) {
																	t.next = 20;
																	break;
																}
																if ('-1' !== Object.keys(o.query.pages)[0]) {
																	t.next = 17;
																	break;
																}
																return t.abrupt('return', {});
															case 17:
																return (
																	(a =
																		o.query.pages[Object.keys(o.query.pages)[0]]
																			.revisions[0]),
																	n && (this.pageInfoCache[n] = a),
																	t.abrupt('return', {
																		timestamp: a.timestamp,
																		revisionId: a.revid,
																	})
																);
															case 20:
																t.next = 25;
																break;
															case 22:
																(t.prev = 22),
																	(t.t0 = t.catch(1)),
																	j.error('fail_to_get_edittoken');
															case 25:
															case 'end':
																return t.stop();
														}
												},
												t,
												this,
												[[1, 22]]
											);
										})
									)),
									function (t) {
										return s.apply(this, arguments);
									}),
							},
							{
								key: 'getWikiText',
								value:
									((u = N(
										regeneratorRuntime.mark(function t(e) {
											var n, i, o;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(n = e.section),
																	(i = e.revisionId),
																	(t.prev = 1),
																	(t.next = 4),
																	fetch(
																		''
																			.concat(location.protocol, '//')
																			.concat(location.host)
																			.concat(r.scriptPath, '/index.php?oldid=')
																			.concat(i, '&section=')
																			.concat(n, '&action=raw')
																	)
																);
															case 4:
																return (t.next = 6), t.sent.text();
															case 6:
																return (o = t.sent), t.abrupt('return', o);
															case 10:
																(t.prev = 10),
																	(t.t0 = t.catch(1)),
																	j.error('fail_to_get_wikitext');
															case 13:
															case 'end':
																return t.stop();
														}
												},
												t,
												null,
												[[1, 10]]
											);
										})
									)),
									function (t) {
										return u.apply(this, arguments);
									}),
							},
							{
								key: 'parseWikiText',
								value:
									((c = N(
										regeneratorRuntime.mark(function t(e) {
											var n,
												r,
												i = arguments;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(n = i.length > 1 && void 0 !== i[1] ? i[1] : ''),
																	i.length > 2 && void 0 !== i[2] && i[2],
																	(t.prev = 2),
																	(t.next = 5),
																	d.post({
																		format: 'json',
																		action: 'parse',
																		text: e,
																		title: n,
																		pst: 'true',
																	})
																);
															case 5:
																if (!(r = t.sent).parse || !r.parse.text) {
																	t.next = 8;
																	break;
																}
																return t.abrupt('return', r.parse.text['*']);
															case 8:
																t.next = 13;
																break;
															case 10:
																(t.prev = 10),
																	(t.t0 = t.catch(2)),
																	j.error('cant_parse_wikitext');
															case 13:
															case 'end':
																return t.stop();
														}
												},
												t,
												null,
												[[2, 10]]
											);
										})
									)),
									function (t) {
										return c.apply(this, arguments);
									}),
							},
							{
								key: 'edit',
								value:
									((a = N(
										regeneratorRuntime.mark(function t() {
											var e,
												n,
												r,
												i,
												o,
												a,
												c,
												u,
												s,
												l,
												f = arguments;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(e = f.length > 0 && void 0 !== f[0] ? f[0] : {}),
																	(n = e.title),
																	(r = e.content),
																	(i = e.editToken),
																	(o = e.timestamp),
																	(a = e.config),
																	(c = void 0 === a ? {} : a),
																	(u = e.additionalConfig),
																	(s = void 0 === u ? {} : u),
																	(t.prev = 1),
																	(t.next = 4),
																	d.post(
																		T(
																			T(
																				T(
																					{
																						action: 'edit',
																						format: 'json',
																						text: r,
																						title: n,
																						token: i,
																					},
																					o ? {basetimestamp: o} : {}
																				),
																				c
																			),
																			s
																		)
																	)
																);
															case 4:
																(l = t.sent), (t.next = 10);
																break;
															case 7:
																(t.prev = 7),
																	(t.t0 = t.catch(1)),
																	j.error('network_edit_error');
															case 10:
																if (!l.edit) {
																	t.next = 22;
																	break;
																}
																if ('Success' !== l.edit.result) {
																	t.next = 15;
																	break;
																}
																return t.abrupt('return', !0);
															case 15:
																if (!l.edit.code) {
																	t.next = 19;
																	break;
																}
																throw new Error(
																	'\n                        '
																		.concat(b.translate('hit_abusefilter'), ':')
																		.concat(
																			l.edit.info.replace(
																				'/Hit AbuseFilter: /ig',
																				''
																			),
																			'\n                        <br>\n                        <div style="font-size: smaller;">'
																		)
																		.concat(
																			l.edit.warning,
																			'</div>\n                    '
																		)
																);
															case 19:
																j.error('unknown_edit_error');
															case 20:
																t.next = 23;
																break;
															case 22:
																l.error && l.error.code
																	? j.error(l.error.code)
																	: l.code
																	? j.error(l.code)
																	: j.error('unknown_edit_error');
															case 23:
															case 'end':
																return t.stop();
														}
												},
												t,
												null,
												[[1, 7]]
											);
										})
									)),
									function () {
										return a.apply(this, arguments);
									}),
							},
							{
								key: 'getLatestRevisionIdForPage',
								value:
									((o = N(
										regeneratorRuntime.mark(function t(e) {
											var n, r;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), this.getPageInfo({title: e});
															case 2:
																return (
																	(n = t.sent),
																	(r = n.revisionId),
																	t.abrupt('return', r)
																);
															case 5:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function (t) {
										return o.apply(this, arguments);
									}),
							},
						]),
						n && M(e.prototype, n),
						i && M(e, i),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				D = new Q();
			function q(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e &&
						(r = r.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function F(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? q(Object(n), !0).forEach(function (e) {
								H(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: q(Object(n)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
						  });
				}
				return t;
			}
			function z(t, e, n, r, i, o, a) {
				try {
					var c = t[o](a),
						u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function Y(t) {
				return function () {
					var e = this,
						n = arguments;
					return new Promise(function (r, i) {
						var o = t.apply(e, n);
						function a(t) {
							z(o, r, i, a, c, 'next', t);
						}
						function c(t) {
							z(o, r, i, a, c, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function G(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function H(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = n),
					t
				);
			}
			var J = (function () {
					function t(e) {
						var n = e.title,
							r = e.revisionId;
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							H(this, 'timestamp', void 0),
							H(this, 'editToken', void 0),
							H(this, 'title', void 0),
							H(this, 'revisionId', void 0),
							H(this, 'inited', !1),
							H(this, 'isNewPage', !1),
							H(this, 'sectionCache', {}),
							(this.title = n),
							(this.revisionId = r),
							(this.isNewPage = !r);
					}
					var e, n, r, i, o, a, c, u, s;
					return (
						(e = t),
						(n = [
							{
								key: 'init',
								value:
									((s = Y(
										regeneratorRuntime.mark(function t() {
											var e,
												n,
												r,
												i,
												o = arguments;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(e = o.length > 0 && void 0 !== o[0] ? o[0] : {}),
																	(n = e.editToken),
																	(r = void 0 === n ? '' : n),
																	(i = [this.getTimestamp()]),
																	r || i.push(this.getEditToken()),
																	(t.next = 5),
																	Promise.all(i)
																);
															case 5:
																(this.inited = !0),
																	j.info(
																		'Page initialization for '
																			.concat(this.title, '#')
																			.concat(this.revisionId, ' finished.')
																	);
															case 7:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function () {
										return s.apply(this, arguments);
									}),
							},
							{
								key: 'getEditToken',
								value:
									((u = Y(
										regeneratorRuntime.mark(function t() {
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), mw.loader.using('mediawiki.user');
															case 2:
																if (
																	!mw.user.tokens.get('csrfToken') ||
																	'+\\' === mw.user.tokens.get('csrfToken')
																) {
																	t.next = 5;
																	break;
																}
																return (
																	(this.editToken = mw.user.tokens.get('csrfToken')),
																	t.abrupt('return')
																);
															case 5:
																return (t.next = 7), D.getEditToken();
															case 7:
																this.editToken = t.sent;
															case 8:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function () {
										return u.apply(this, arguments);
									}),
							},
							{
								key: 'getTimestamp',
								value:
									((c = Y(
										regeneratorRuntime.mark(function t() {
											var e, n, r;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(t.next = 2),
																	D.getPageInfo({
																		revisionId: this.revisionId,
																		title: this.title,
																	})
																);
															case 2:
																(e = t.sent),
																	(n = e.timestamp),
																	(r = e.revisionId),
																	(this.timestamp = n),
																	r && ((this.revisionId = r), (this.isNewPage = !1));
															case 7:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function () {
										return c.apply(this, arguments);
									}),
							},
							{
								key: 'getWikiText',
								value:
									((a = Y(
										regeneratorRuntime.mark(function t() {
											var e,
												n,
												r,
												i,
												o,
												a = arguments;
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																if (
																	((e = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
																	(n = e.section),
																	(i = -1 === (r = void 0 === n ? '' : n) ? '' : r),
																	!this.sectionCache[i])
																) {
																	t.next = 4;
																	break;
																}
																return t.abrupt('return', this.sectionCache[i]);
															case 4:
																return (
																	(t.next = 6),
																	D.getWikiText({
																		section: i,
																		revisionId: this.revisionId,
																	})
																);
															case 6:
																return (
																	(o = t.sent),
																	j.info(
																		'Wikitext of '
																			.concat(this.title, '#')
																			.concat(r, ' fetched.')
																	),
																	(this.sectionCache[i] = o),
																	t.abrupt('return', o)
																);
															case 10:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function () {
										return a.apply(this, arguments);
									}),
							},
							{
								key: 'parseWikiText',
								value:
									((o = Y(
										regeneratorRuntime.mark(function t(e) {
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return t.abrupt(
																	'return',
																	D.parseWikiText(e, this.title)
																);
															case 1:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function (t) {
										return o.apply(this, arguments);
									}),
							},
							{
								key: 'edit',
								value:
									((i = Y(
										regeneratorRuntime.mark(function t(e) {
											return regeneratorRuntime.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																if (this.editToken) {
																	t.next = 3;
																	break;
																}
																return (
																	j.error('fail_to_get_edittoken'), t.abrupt('return')
																);
															case 3:
																if (this.timestamp || this.isNewPage) {
																	t.next = 6;
																	break;
																}
																return (
																	j.error('fail_to_get_timestamp'), t.abrupt('return')
																);
															case 6:
																return t.abrupt(
																	'return',
																	D.edit(
																		F(
																			F(
																				F(
																					{
																						title: this.title,
																						editToken: this.editToken,
																					},
																					this.timestamp
																						? {timestamp: this.timestamp}
																						: {}
																				),
																				e
																			),
																			{},
																			{
																				additionalConfig: F(
																					{},
																					this.isNewPage
																						? {createonly: this.isNewPage}
																						: {}
																				),
																			}
																		)
																	)
																);
															case 7:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function (t) {
										return i.apply(this, arguments);
									}),
							},
						]),
						n && G(e.prototype, n),
						r && G(e, r),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				X = J;
			n(9826), n(4723), n(3210);
			function Z(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			var V = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							this.init();
					}
					var e, n, r;
					return (
						(e = t),
						(n = [
							{
								key: 'init',
								value: function () {
									$('body').append('<div id="MoeNotification"></div>');
								},
							},
							{
								key: 'display',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '喵~',
										e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'success',
										n =
											arguments.length > 2 && void 0 !== arguments[2]
												? arguments[2]
												: function () {};
									$('#MoeNotification').append(
										$('<div>')
											.addClass('MoeNotification-notice')
											.addClass('MoeNotification-notice-' + e)
											.append('<span>' + t + '</span>')
									),
										$('#MoeNotification').find('.MoeNotification-notice').last().fadeIn(300),
										this.bind(),
										this.clear(),
										n($('#MoeNotification').find('.MoeNotification-notice').last());
								},
							},
							{
								key: 'bind',
								value: function () {
									var t = this;
									$('.MoeNotification-notice').on('mouseover', function () {
										t.slideLeft($(this));
									});
								},
							},
							{
								key: 'success',
								value: function (t, e) {
									this.display(t, 'success', e);
								},
							},
							{
								key: 'warning',
								value: function (t, e) {
									this.display(t, 'warning', e);
								},
							},
							{
								key: 'error',
								value: function (t, e) {
									this.display(t, 'error', e);
								},
							},
							{
								key: 'clear',
								value: function () {
									$('.MoeNotification-notice').length >= 10 &&
										($('#MoeNotification')
											.children()
											.first()
											.fadeOut(150, function () {
												$(this).remove();
											}),
										setTimeout(this.clear, 300));
								},
							},
							{
								key: 'empty',
								value: function (t) {
									$('.MoeNotification-notice').each(function (e) {
										if ('function' == typeof t) {
											var n = $(this);
											setTimeout(function () {
												t(n);
											}, 200 * e);
										} else
											$(this)
												.delay(200 * e)
												.fadeOut('fast', function () {
													$(this).remove();
												});
									});
								},
							},
							{
								key: 'slideLeft',
								value: function (t, e) {
									t.css('position', 'relative'),
										t.animate({left: '-200%'}, e || 150, function () {
											$(this).fadeOut('fast', function () {
												$(this).remove();
											});
										});
								},
							},
						]),
						n && Z(e.prototype, n),
						r && Z(e, r),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				K = new V(),
				tt = function (t) {
					return new Promise(function (e) {
						return setTimeout(e, t);
					});
				};
			function et(t) {
				for (var e, n = /(([^?&=]+)(?:=([^?&=]*))*)/g, r = {}; (e = n.exec(t)); )
					try {
						r[e[2]] = decodeURIComponent(e[3]);
					} catch (t) {
						r[e[2]] = e[3];
					}
				return r;
			}
			function nt(t, e, n, r, i, o, a) {
				try {
					var c = t[o](a),
						u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function rt(t) {
				return function () {
					var e = this,
						n = arguments;
					return new Promise(function (r, i) {
						var o = t.apply(e, n);
						function a(t) {
							nt(o, r, i, a, c, 'next', t);
						}
						function c(t) {
							nt(o, r, i, a, c, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function it(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			function ot(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = n),
					t
				);
			}
			var at = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							ot(this, 'quickEditPanelVisible', !1),
							ot(this, 'scrollTop', 0);
					}
					var e, n, i;
					return (
						(e = t),
						(n = [
							{
								key: 'createDialogBox',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Wikiplus',
										e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
										n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 600,
										r =
											arguments.length > 3 && void 0 !== arguments[3]
												? arguments[3]
												: function () {};
									$('.Wikiplus-InterBox').length > 0 &&
										$('.Wikiplus-InterBox').each(function () {
											$(this).remove();
										});
									var i = window.innerWidth,
										o = window.innerHeight,
										a = Math.min(i, n),
										c = $('<div>')
											.addClass('Wikiplus-InterBox')
											.css({
												'margin-left': i / 2 - a / 2,
												top: $(document).scrollTop() + 0.2 * o,
												display: 'none',
											})
											.append($('<div>').addClass('Wikiplus-InterBox-Header').html(t))
											.append($('<div>').addClass('Wikiplus-InterBox-Content').append(e))
											.append($('<span>').text('×').addClass('Wikiplus-InterBox-Close'));
									$('body').append(c),
										$('.Wikiplus-InterBox').width(a),
										$('.Wikiplus-InterBox-Close').on('click', function () {
											$(this)
												.parent()
												.fadeOut('fast', function () {
													(window.onclose = window.onbeforeunload = void 0), $(this).remove();
												});
										});
									var u = function t(e) {
										e.mousedown(function (n) {
											var r = n.clientX,
												i = n.clientY,
												o = e.parent().offset().left,
												a = e.parent().offset().top;
											$(document).on('mousemove', function (t) {
												e.parent().css({
													'margin-left': o + t.clientX - r,
													top: a + t.clientY - i,
												});
											}),
												$(document).on('mouseup', function () {
													e.unbind('mousedown'),
														$(document).off('mousemove'),
														$(document).off('mouseup'),
														t(e);
												});
										});
									};
									return (
										u($('.Wikiplus-InterBox-Header')), $('.Wikiplus-InterBox').fadeIn(500), r(), c
									);
								},
							},
							{
								key: 'addFunctionButton',
								value: function (t, e) {
									var n;
									switch (r.skin) {
										case 'minerva':
											n = $('<li>')
												.attr('id', e)
												.addClass('toggle-list-item')
												.append(
													$('<a>')
														.addClass(
															'mw-ui-icon mw-ui-icon-before toggle-list-item__anchor'
														)
														.append(
															$('<span>')
																.attr('href', 'javascript:void(0);')
																.addClass('toggle-list-item__label')
																.text(t)
														)
												);
											break;
										case 'moeskin':
											n = $('<li>')
												.addClass('Wikiplus-More-Function-Button')
												.attr('id', e)
												.append($('<a>').attr('href', 'javascript:void(0);').text(t));
											break;
										default:
											n = $('<li>')
												.addClass('mw-list-item')
												.addClass('vector-tab-noicon')
												.attr('id', e)
												.append($('<a>').attr('href', 'javascript:void(0);').text(t));
									}
									return 'minerva' === r.skin && $('#p-tb').length > 0
										? ($('#p-tb').append(n), $('#'.concat(e)))
										: 'moeskin' === r.skin
										? ($('.more-actions-list').first().append(n), $('#'.concat(e)))
										: $('#p-cactions').length > 0
										? ($('#p-cactions ul').append(n), $('#'.concat(e)))
										: void j.info(b.translate('cant_add_funcbtn'));
								},
							},
							{
								key: 'insertSimpleRedirectButton',
								value: function () {
									var t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: function () {},
										e = this.addFunctionButton(b.translate('redirect_from'), 'Wikiplus-SR-Intro');
									e && e.on('click', t);
								},
							},
							{
								key: 'insertSettingsPanelButton',
								value: function () {
									var t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: function () {},
										e = this.addFunctionButton(
											b.translate('wikiplus_settings'),
											'Wikiplus-Settings-Intro'
										);
									e && e.on('click', t);
								},
							},
							{
								key: 'insertTopQuickEditEntry',
								value: function (t) {
									var e = $('<li>').attr('id', 'Wikiplus-Edit-TopBtn').attr('class', 'mw-list-item'),
										n = $('<a>')
											.attr('href', 'javascript:void(0)')
											.text(''.concat(b.translate('quickedit_topbtn')));
									switch ((e.append(n), r.skin)) {
										case 'minerva':
											e.css({'align-items': 'center', display: 'flex'}),
												e.find('span').addClass('page-actions-menu__list-item'),
												e
													.find('a')
													.addClass(
														'mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop'
													)
													.css('vertical-align', 'middle');
											break;
										case 'vector-2022':
											e.addClass('vector-tab-noicon');
											break;
										case 'vector':
											e.append($('<span>').append(n));
									}
									$(e).on('click', function () {
										t({sectionNumber: -1, targetPageName: r.currentPageName});
									}),
										$('#ca-edit').length > 0 &&
											0 === $('#Wikiplus-Edit-TopBtn').length &&
											('minerva' === r.skin
												? $('#ca-edit').parent().after(e)
												: $('#ca-edit').after(e));
								},
							},
							{
								key: 'insertSectionQuickEditEntries',
								value: function () {
									var t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: function () {},
										e =
											'minerva' === r.skin
												? $('<span>').append(
														$('<a>')
															.addClass(
																'Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right'
															)
															.css('margin-left', '0.75em')
															.attr('href', 'javascript:void(0)')
															.attr('title', b.translate('quickedit_sectionbtn'))
												  )
												: $('<span>')
														.append(
															$('<span>').addClass('mw-editsection-divider').text(' | ')
														)
														.append(
															$('<a>')
																.addClass('Wikiplus-Edit-SectionBtn')
																.attr('href', 'javascript:void(0)')
																.text(b.translate('quickedit_sectionbtn'))
														);
									$('.mw-editsection').each(function (n) {
										try {
											var i = $(this).find("a[href*='action=edit']").first().attr('href'),
												o = i.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, ''),
												a = decodeURIComponent(i.match(/title=(.+?)&/)[1]),
												c = $(this).prev().clone();
											c.find('.mw-headline-number').remove();
											var u = c.text().trim(),
												s = e.clone();
											s.find('.Wikiplus-Edit-SectionBtn').on('click', function () {
												t({sectionNumber: o, sectionName: u, targetPageName: a});
											}),
												'minerva' === r.skin
													? $(this).append(s)
													: $(this).find('.mw-editsection-bracket').last().before(s);
										} catch (t) {
											j.error('fail_to_init_quickedit');
										}
									});
								},
							},
							{
								key: 'insertLinkEditEntries',
								value: function () {
									var t =
										arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {};
									$('#mw-content-text a.external').each(function (e) {
										var n = et($(this).attr('href'));
										'edit' === n.action &&
											void 0 !== n.title &&
											'new' !== n.section &&
											$(this).after(
												$('<a>')
													.attr({
														href: 'javascript:void(0)',
														class: 'Wikiplus-Edit-EveryWhereBtn',
													})
													.text('('.concat(b.translate('quickedit_sectionbtn'), ')'))
													.on('click', function () {
														var e;
														t({
															targetPageName: n.title,
															sectionNumber:
																null !== (e = n.section) && void 0 !== e ? e : -1,
														});
													})
											);
									});
								},
							},
							{
								key: 'showQuickEditPanel',
								value: function (t) {
									var e = t.title,
										n = void 0 === e ? '' : e,
										r = t.content,
										i = void 0 === r ? '' : r,
										o = t.summary,
										a = void 0 === o ? '' : o,
										c = t.onBack,
										u = void 0 === c ? function () {} : c,
										s = t.onParse,
										l = void 0 === s ? function () {} : s,
										f = t.onEdit,
										p = void 0 === f ? function () {} : f,
										d = t.escExit,
										h = void 0 !== d && d,
										v = this;
									(this.scrollTop = $(document).scrollTop()),
										this.quickEditPanelVisible && this.hideQuickEditPanel(),
										(this.quickEditPanelVisible = !0),
										(window.onclose = window.onbeforeunload =
											function () {
												return ''.concat(b.translate('onclose_confirm'));
											});
									var g = $('.noarticletext').length > 0,
										m = $('<span>')
											.attr('id', 'Wikiplus-Quickedit-Back')
											.addClass('Wikiplus-Btn')
											.text(''.concat(b.translate('back'))),
										y = $('<span>')
											.attr('id', 'Wikiplus-Quickedit-Jump')
											.addClass('Wikiplus-Btn')
											.append(
												$('<a>')
													.attr('href', '#Wikiplus-Quickedit')
													.text(''.concat(b.translate('goto_editbox')))
											),
										k = $('<textarea>').attr('id', 'Wikiplus-Quickedit'),
										A = $('<div>').attr('id', 'Wikiplus-Quickedit-Preview-Output'),
										w = $('<input>')
											.attr('id', 'Wikiplus-Quickedit-Summary-Input')
											.attr('placeholder', ''.concat(b.translate('summary_placehold'))),
										x = $('<button>')
											.attr('id', 'Wikiplus-Quickedit-Submit')
											.text(
												''.concat(
													b.translate(g ? 'publish_page' : 'publish_change'),
													'(Ctrl+S)'
												)
											),
										I = $('<button>')
											.attr('id', 'Wikiplus-Quickedit-Preview-Submit')
											.text(''.concat(b.translate('preview'))),
										C = $('<div>')
											.append(
												$('<input>').attr({
													type: 'checkbox',
													id: 'Wikiplus-Quickedit-MinorEdit',
												})
											)
											.append(
												$('<label>')
													.attr('for', 'Wikiplus-Quickedit-MinorEdit')
													.text(''.concat(b.translate('mark_minoredit'), '(Ctrl+Shift+S)'))
											)
											.css({margin: '5px 5px 5px -3px', display: 'inline'}),
										B = $('<div>').append(m, y, A, k, w, $('<br>'), C, x, I);
									this.createDialogBox(n, B, 1e3, function () {
										$('#Wikiplus-Quickedit').val(i), $('#Wikiplus-Quickedit-Summary-Input').val(a);
									}),
										$('#Wikiplus-Quickedit-Back').on('click', u),
										$('#Wikiplus-Quickedit-Preview-Submit').on(
											'click',
											rt(
												regeneratorRuntime.mark(function t() {
													var e, n, r;
													return regeneratorRuntime.wrap(
														function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (
																			(e = $('<div>')
																				.addClass('Wikiplus-Banner')
																				.text(
																					''.concat(
																						b.translate('loading_preview')
																					)
																				)),
																			(n = $('#Wikiplus-Quickedit').val()),
																			$(this).attr('disabled', 'disabled'),
																			$(
																				'#Wikiplus-Quickedit-Preview-Output'
																			).fadeOut(100, function () {
																				$('#Wikiplus-Quickedit-Preview-Output')
																					.html('')
																					.append(e),
																					$(
																						'#Wikiplus-Quickedit-Preview-Output'
																					).fadeIn(100);
																			}),
																			$('html, body').animate(
																				{scrollTop: v.scrollTop},
																				200
																			),
																			(t.next = 7),
																			l(n)
																		);
																	case 7:
																		(r = t.sent),
																			$(
																				'#Wikiplus-Quickedit-Preview-Output'
																			).fadeOut('100', function () {
																				$(
																					'#Wikiplus-Quickedit-Preview-Output'
																				).html(
																					'<hr><div class="mw-body-content">' +
																						r +
																						'</div><hr>'
																				),
																					$(
																						'#Wikiplus-Quickedit-Preview-Output'
																					).fadeIn('100'),
																					$(
																						'#Wikiplus-Quickedit-Preview-Submit'
																					).prop('disabled', !1);
																			});
																	case 9:
																	case 'end':
																		return t.stop();
																}
														},
														t,
														this
													);
												})
											)
										),
										$('#Wikiplus-Quickedit-Submit').on(
											'click',
											rt(
												regeneratorRuntime.mark(function t() {
													var e, n, r, i;
													return regeneratorRuntime.wrap(
														function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (
																			(e = new Date().valueOf()),
																			(n = $('<div>')
																				.addClass('Wikiplus-Banner')
																				.text(
																					''.concat(
																						b.translate('submitting_edit')
																					)
																				)),
																			(r = {
																				summary: $(
																					'#Wikiplus-Quickedit-Summary-Input'
																				).val(),
																				content: $('#Wikiplus-Quickedit').val(),
																				isMinorEdit: $(
																					'#Wikiplus-Quickedit-MinorEdit'
																				).is(':checked'),
																			}),
																			$(
																				'#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit'
																			).attr('disabled', 'disabled'),
																			$('html, body').animate(
																				{scrollTop: v.scrollTop},
																				200
																			),
																			$(
																				'#Wikiplus-Quickedit-Preview-Output'
																			).fadeOut(100, function () {
																				$('#Wikiplus-Quickedit-Preview-Output')
																					.html('')
																					.append(n),
																					$(
																						'#Wikiplus-Quickedit-Preview-Output'
																					).fadeIn(100);
																			}),
																			(t.prev = 6),
																			(t.next = 9),
																			p(r)
																		);
																	case 9:
																		(i = new Date().valueOf() - e),
																			$('#Wikiplus-Quickedit-Preview-Output')
																				.find('.Wikiplus-Banner')
																				.css(
																					'background',
																					'rgba(6, 239, 92, 0.44)'
																				),
																			$('#Wikiplus-Quickedit-Preview-Output')
																				.find('.Wikiplus-Banner')
																				.text(
																					''.concat(
																						b.translate('edit_success', [
																							i.toString(),
																						])
																					)
																				),
																			(window.onclose = window.onbeforeunload =
																				void 0),
																			setTimeout(function () {
																				location.reload();
																			}, 500),
																			(t.next = 21);
																		break;
																	case 16:
																		(t.prev = 16),
																			(t.t0 = t.catch(6)),
																			console.log(t.t0),
																			$('.Wikiplus-Banner').css(
																				'background',
																				'rgba(218, 142, 167, 0.65)'
																			),
																			$('.Wikiplus-Banner').html(t.t0.message);
																	case 21:
																		return (
																			(t.prev = 21),
																			$(
																				'#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit'
																			).prop('disabled', !1),
																			t.finish(21)
																		);
																	case 24:
																	case 'end':
																		return t.stop();
																}
														},
														t,
														null,
														[[6, 16, 21, 24]]
													);
												})
											)
										),
										$(
											'#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit'
										).on('keydown', function (t) {
											t.ctrlKey &&
												83 === t.which &&
												(t.shiftKey && $('#Wikiplus-Quickedit-MinorEdit').trigger('click'),
												$('#Wikiplus-Quickedit-Submit').trigger('click'),
												t.preventDefault(),
												t.stopPropagation());
										}),
										h &&
											$(document).on('keydown', function (t) {
												27 === t.which && $('#Wikiplus-Quickedit-Back').click();
											});
								},
							},
							{
								key: 'hideQuickEditPanel',
								value: function () {
									(this.quickEditPanelVisible = !1),
										$('.Wikiplus-InterBox').fadeOut('fast', function () {
											(window.onclose = window.onbeforeunload = void 0), $(this).remove();
										});
								},
							},
							{
								key: 'showSimpleRedirectPanel',
								value: function () {
									var t = this,
										e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										n = e.onEdit,
										r = void 0 === n ? function () {} : n,
										i = e.onSuccess,
										o = void 0 === i ? function () {} : i,
										a = $('<input>').addClass('Wikiplus-InterBox-Input'),
										c = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-SR-Apply')
											.text(b.translate('submit')),
										u = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-SR-Cancel')
											.text(b.translate('cancel')),
										s = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-SR-Continue')
											.text(b.translate('continue')),
										l = $('<div>').append(a).append($('<hr>')).append(c).append(u),
										f = this.createDialogBox(b.translate('redirect_desc'), l, 600);
									c.on(
										'click',
										rt(
											regeneratorRuntime.mark(function e() {
												var n;
												return regeneratorRuntime.wrap(
													function (e) {
														for (;;)
															switch ((e.prev = e.next)) {
																case 0:
																	return (
																		(n = $('.Wikiplus-InterBox-Input').val()),
																		$('.Wikiplus-InterBox-Content').html(
																			'<div class="Wikiplus-Banner">'.concat(
																				b.translate('submitting_edit'),
																				'</div>'
																			)
																		),
																		(e.prev = 2),
																		(e.next = 5),
																		r({title: n, forceOverwrite: !1})
																	);
																case 5:
																	$('.Wikiplus-Banner').text(
																		b.translate('redirect_saved')
																	),
																		t.hideSimpleRedirectPanel(f),
																		o({title: n}),
																		(e.next = 15);
																	break;
																case 10:
																	(e.prev = 10),
																		(e.t0 = e.catch(2)),
																		$('.Wikiplus-Banner').css(
																			'background',
																			'rgba(218, 142, 167, 0.65)'
																		),
																		$('.Wikiplus-Banner').text(e.t0.message),
																		'articleexists' === e.t0.code &&
																			($('.Wikiplus-InterBox-Content')
																				.append($('<hr>'))
																				.append(s)
																				.append(u),
																			u.on('click', function () {
																				t.hideSimpleRedirectPanel(f);
																			}),
																			s.on(
																				'click',
																				rt(
																					regeneratorRuntime.mark(
																						function e() {
																							return regeneratorRuntime.wrap(
																								function (e) {
																									for (;;)
																										switch (
																											(e.prev =
																												e.next)
																										) {
																											case 0:
																												return (
																													$(
																														'.Wikiplus-InterBox-Content'
																													).html(
																														'<div class="Wikiplus-Banner">'.concat(
																															b.translate(
																																'submitting_edit'
																															),
																															'</div>'
																														)
																													),
																													(e.prev = 1),
																													(e.next = 4),
																													r({
																														title: n,
																														forceOverwrite:
																															!0,
																													})
																												);
																											case 4:
																												$(
																													'.Wikiplus-Banner'
																												).text(
																													b.translate(
																														'redirect_saved'
																													)
																												),
																													t.hideSimpleRedirectPanel(
																														f
																													),
																													o({
																														title: n,
																													}),
																													(e.next = 13);
																												break;
																											case 9:
																												(e.prev = 9),
																													(e.t0 =
																														e.catch(
																															1
																														)),
																													$(
																														'.Wikiplus-Banner'
																													).css(
																														'background',
																														'rgba(218, 142, 167, 0.65)'
																													),
																													$(
																														'.Wikiplus-Banner'
																													).text(
																														e
																															.t0
																															.message
																													);
																											case 13:
																											case 'end':
																												return e.stop();
																										}
																								},
																								e,
																								null,
																								[[1, 9]]
																							);
																						}
																					)
																				)
																			));
																case 15:
																case 'end':
																	return e.stop();
															}
													},
													e,
													null,
													[[2, 10]]
												);
											})
										)
									),
										u.on('click', function () {
											t.hideSimpleRedirectPanel(f);
										});
								},
							},
							{
								key: 'hideSimpleRedirectPanel',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $('body');
									t.find('.Wikiplus-InterBox-Close').trigger('click');
								},
							},
							{
								key: 'showSettingsPanel',
								value: function () {
									var t = this,
										e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										n = e.onSubmit,
										r = void 0 === n ? function () {} : n,
										i = $('<textarea>').attr('id', 'Wikiplus-Setting-Input').attr('rows', '10'),
										o = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-Setting-Apply')
											.text(b.translate('submit')),
										a = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-Setting-Cancel')
											.text(b.translate('cancel')),
										c = $('<div>').append(i).append($('<hr>')).append(o).append(a),
										u = this.createDialogBox(
											b.translate('wikiplus_settings_desc'),
											c,
											600,
											function () {
												if (localStorage.Wikiplus_Settings) {
													$('#Wikiplus-Setting-Input').val(localStorage.Wikiplus_Settings);
													try {
														var t = JSON.parse(localStorage.Wikiplus_Settings);
														$('#Wikiplus-Setting-Input').val(JSON.stringify(t, null, 2));
													} catch (t) {}
												} else
													$('#Wikiplus-Setting-Input').attr(
														'placeholder',
														b.translate('wikiplus_settings_placeholder')
													);
											}
										);
									o.on(
										'click',
										rt(
											regeneratorRuntime.mark(function e() {
												var n, i;
												return regeneratorRuntime.wrap(
													function (e) {
														for (;;)
															switch ((e.prev = e.next)) {
																case 0:
																	return (
																		(n = $('<div>')
																			.addClass('Wikiplus-Banner')
																			.text(
																				b.translate('wikiplus_settings_saved')
																			)),
																		(i = $('#Wikiplus-Setting-Input').val()),
																		(e.prev = 2),
																		r({settings: i}),
																		$('.Wikiplus-InterBox-Content')
																			.html('')
																			.append(n),
																		(e.next = 7),
																		tt(1500)
																	);
																case 7:
																	t.hideSettingsPanel(u), (e.next = 13);
																	break;
																case 10:
																	(e.prev = 10),
																		(e.t0 = e.catch(2)),
																		K.error(
																			b.translate(
																				'wikiplus_settings_grammar_error'
																			)
																		);
																case 13:
																case 'end':
																	return e.stop();
															}
													},
													e,
													null,
													[[2, 10]]
												);
											})
										)
									),
										a.on('click', function () {
											t.hideSettingsPanel(u);
										});
								},
							},
							{
								key: 'hideSettingsPanel',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $('body');
									t.find('.Wikiplus-InterBox-Close').trigger('click');
								},
							},
							{
								key: 'bindPreloadEvents',
								value: function (t) {
									$('#toc')
										.children('ul')
										.find('a')
										.each(function (e) {
											$(this).on('mouseover', function () {
												$(this).off('mouseover'), t({sectionNumber: e + 1});
											});
										});
								},
							},
						]),
						n && it(e.prototype, n),
						i && it(e, i),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				ct = new at();
			function ut(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			var st = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t);
					}
					var e, n, r;
					return (
						(e = t),
						(n = [
							{
								key: 'getSetting',
								value: function (t) {
									var e,
										n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
										r = n;
									try {
										e = JSON.parse(localStorage.Wikiplus_Settings);
									} catch (t) {
										return;
									}
									try {
										var i = new Function('return ' + e[t]);
										if ('function' != typeof i) return e[t];
										try {
											return !0 === i()(r) ? void 0 : i()(r) || e[t];
										} catch (n) {
											return e[t];
										}
									} catch (r) {
										try {
											for (var o = e[t], a = 0, c = Object.keys(n); a < c.length; a++) {
												var u = c[a];
												o = o.replace('${'.concat(u, '}'), n[u]);
											}
											return o;
										} catch (t) {
											return;
										}
									}
								},
							},
						]),
						n && ut(e.prototype, n),
						r && ut(e, r),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				lt = new st(),
				ft = n(3379),
				pt = n.n(ft),
				dt = n(7795),
				ht = n.n(dt),
				vt = n(569),
				gt = n.n(vt),
				mt = n(3565),
				yt = n.n(mt),
				kt = n(9216),
				bt = n.n(kt),
				At = n(4589),
				wt = n.n(At),
				xt = n(9183),
				It = {};
			(It.styleTagTransform = wt()),
				(It.setAttributes = yt()),
				(It.insert = gt().bind(null, 'head')),
				(It.domAPI = ht()),
				(It.insertStyleElement = bt());
			pt()(xt.Z, It), xt.Z && xt.Z.locals && xt.Z.locals;
			function Ct(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e &&
						(r = r.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function Bt(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? Ct(Object(n), !0).forEach(function (e) {
								_t(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: Ct(Object(n)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
						  });
				}
				return t;
			}
			function _t(t, e, n) {
				return (
					e in t
						? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = n),
					t
				);
			}
			function St(t, e, n, r, i, o, a) {
				try {
					var c = t[o](a),
						u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function Ot(t) {
				return function () {
					var e = this,
						n = arguments;
					return new Promise(function (r, i) {
						var o = t.apply(e, n);
						function a(t) {
							St(o, r, i, a, c, 'next', t);
						}
						function c(t) {
							St(o, r, i, a, c, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			$(
				Ot(
					regeneratorRuntime.mark(function t() {
						var e, n, i, o, a, c, u, s, l, f;
						return regeneratorRuntime.wrap(function (t) {
							for (;;)
								switch ((t.prev = t.next)) {
									case 0:
										if (
											((e = {}),
											(n = $('.noarticletext').length > 0 && 0 === r.articleId),
											(i = (function () {
												var t = Ot(
													regeneratorRuntime.mark(function t(n) {
														var r, i, o;
														return regeneratorRuntime.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		if (
																			((r = n.revisionId), (i = n.title), !e[r])
																		) {
																			t.next = 3;
																			break;
																		}
																		return t.abrupt('return', e[r]);
																	case 3:
																		return (
																			(o = new X({revisionId: r, title: i})),
																			(t.next = 6),
																			o.init()
																		);
																	case 6:
																		return (e[r] = o), t.abrupt('return', e[r]);
																	case 8:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function (e) {
													return t.apply(this, arguments);
												};
											})()),
											j.info('Wikiplus now loading. Version: '.concat(r.version)),
											window.mw)
										) {
											t.next = 7;
											break;
										}
										return (
											console.log('Mediawiki JavaScript not loaded or not a Mediawiki website.'),
											t.abrupt('return')
										);
									case 7:
										if (r.userGroups.includes('autoconfirmed')) {
											t.next = 11;
											break;
										}
										return (
											K.error(b.translate('not_autoconfirmed_user')),
											j.info(b.translate('not_autoconfirmed_user')),
											t.abrupt('return')
										);
									case 11:
										if (r.isArticle && 'view' === r.action) {
											t.next = 14;
											break;
										}
										return j.info('Not an editable page. Stop initialization.'), t.abrupt('return');
									case 14:
										return (
											(window._WikiplusPages = e),
											(o = r.currentPageName),
											(a = r.revisionId),
											(t.next = 19),
											i({revisionId: a, title: o})
										);
									case 19:
										(c = t.sent),
											(u = (function () {
												var t = Ot(
													regeneratorRuntime.mark(function t() {
														var e,
															a,
															c,
															u,
															s,
															l,
															f,
															p,
															d,
															h,
															v,
															g,
															m,
															y,
															k,
															A = arguments;
														return regeneratorRuntime.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		if (
																			((e =
																				A.length > 0 && void 0 !== A[0]
																					? A[0]
																					: {}),
																			(a = e.sectionNumber),
																			(c = e.sectionName),
																			(u = e.targetPageName) === o ||
																				r.latestRevisionId === r.revisionId)
																		) {
																			t.next = 4;
																			break;
																		}
																		return (
																			j.error(
																				'cross_page_history_revision_edit_warning'
																			),
																			t.abrupt('return')
																		);
																	case 4:
																		if (u !== o) {
																			t.next = 8;
																			break;
																		}
																		(t.t0 = r.revisionId), (t.next = 11);
																		break;
																	case 8:
																		return (
																			(t.next = 10),
																			D.getLatestRevisionIdForPage(u)
																		);
																	case 10:
																		t.t0 = t.sent;
																	case 11:
																		return (
																			(s = t.t0),
																			(t.next = 14),
																			i({revisionId: s, title: u})
																		);
																	case 14:
																		return (
																			(l = t.sent),
																			(f = lt.getSetting('defaultSummary', {
																				sectionName: c,
																				sectionNumber: a,
																				sectionTargetName: u,
																			})),
																			(p =
																				f ||
																				(c
																					? '/* '
																							.concat(c, ' */ ')
																							.concat(
																								b.translate(
																									'default_summary_suffix'
																								)
																							)
																					: b.translate(
																							'default_summary_suffix'
																					  ))),
																			(d = setTimeout(function () {
																				K.success(b.translate('loading'));
																			}, 200)),
																			(t.next = 20),
																			l.getWikiText({section: a})
																		);
																	case 20:
																		(h = t.sent),
																			(v =
																				u === o &&
																				r.latestRevisionId !== r.revisionId),
																			(g =
																				!0 ===
																					lt.getSetting(
																						'esc_to_exit_quickedit'
																					) ||
																				'true' ===
																					lt.getSetting(
																						'esc_to_exit_quickedit'
																					) ||
																				!0 ===
																					lt.getSetting(
																						'escToExitQuickEdit'
																					) ||
																				'true' ===
																					lt.getSetting(
																						'escToExitQuickEdit'
																					)),
																			(m = lt.getSetting('custom_edit_tags')),
																			(y =
																				location.host.includes(
																					'zh.wikipedia.org'
																				) ||
																				location.host.includes(
																					'zh.m.wikipedia.org'
																				)
																					? ['wikiplus']
																					: []),
																			(k = null != m && m.length ? m : y),
																			clearTimeout(d),
																			K.empty(),
																			v &&
																				K.warning(
																					b.translate('history_edit_warning')
																				),
																			ct.showQuickEditPanel({
																				title: ''
																					.concat(
																						b.translate('quickedit_topbtn')
																					)
																					.concat(
																						v
																							? b.translate(
																									'history_edit_warning'
																							  )
																							: ''
																					),
																				content: n
																					? b.translate('create_page_tip')
																					: h,
																				summary: p,
																				onBack: ct.hideQuickEditPanel,
																				onParse: function (t) {
																					return l.parseWikiText(t);
																				},
																				onEdit: (function () {
																					var t = Ot(
																						regeneratorRuntime.mark(
																							function t(e) {
																								var n, r, i, o;
																								return regeneratorRuntime.wrap(
																									function (t) {
																										for (;;)
																											switch (
																												(t.prev =
																													t.next)
																											) {
																												case 0:
																													return (
																														(n =
																															e.content),
																														(r =
																															e.summary),
																														(i =
																															e.isMinorEdit),
																														(o =
																															{
																																content:
																																	n,
																																config: Bt(
																																	Bt(
																																		{
																																			summary:
																																				r,
																																		},
																																		-1 !==
																																			a
																																			? {
																																					section:
																																						a,
																																			  }
																																			: {}
																																	),
																																	k.length
																																		? {
																																				tags: k.join(
																																					'|'
																																				),
																																		  }
																																		: {}
																																),
																															}),
																														i
																															? (o.config.minor =
																																	'true')
																															: (o.config.notminor =
																																	'true'),
																														(t.next = 5),
																														l.edit(
																															o
																														)
																													);
																												case 5:
																												case 'end':
																													return t.stop();
																											}
																									},
																									t
																								);
																							}
																						)
																					);
																					return function (e) {
																						return t.apply(this, arguments);
																					};
																				})(),
																				escExit: g,
																			});
																	case 30:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function () {
													return t.apply(this, arguments);
												};
											})()),
											(s = (function () {
												var t = Ot(
													regeneratorRuntime.mark(function t() {
														return regeneratorRuntime.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		ct.showSimpleRedirectPanel({
																			onEdit: (function () {
																				var t = Ot(
																					regeneratorRuntime.mark(
																						function t(e) {
																							var n, o, a, c, u, s;
																							return regeneratorRuntime.wrap(
																								function (t) {
																									for (;;)
																										switch (
																											(t.prev =
																												t.next)
																										) {
																											case 0:
																												return (
																													(n =
																														e.title),
																													(o =
																														e.forceOverwrite),
																													(a =
																														void 0 !==
																															o &&
																														o),
																													(t.next = 3),
																													i({
																														title: n,
																													})
																												);
																											case 3:
																												return (
																													(c =
																														t.sent),
																													(u =
																														r.currentPageName),
																													(s =
																														{
																															content:
																																'#REDIRECT [['.concat(
																																	u,
																																	']]'
																																),
																															config: {
																																summary:
																																	b.translate(
																																		'redirect_from_summary',
																																		[
																																			n,
																																			u,
																																		]
																																	),
																															},
																														}),
																													a ||
																														(s.config.createonly =
																															'true'),
																													(t.next = 9),
																													c.edit(
																														s
																													)
																												);
																											case 9:
																											case 'end':
																												return t.stop();
																										}
																								},
																								t
																							);
																						}
																					)
																				);
																				return function (e) {
																					return t.apply(this, arguments);
																				};
																			})(),
																			onSuccess: function (t) {
																				var e = t.title;
																				location.href = r.articlePath.replace(
																					/\$1/gi,
																					e
																				);
																			},
																		});
																	case 1:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function () {
													return t.apply(this, arguments);
												};
											})()),
											(l = (function () {
												var t = Ot(
													regeneratorRuntime.mark(function t() {
														return regeneratorRuntime.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		ct.showSettingsPanel({
																			onSubmit: function (t) {
																				var e = t.settings;
																				JSON.parse(e),
																					localStorage.setItem(
																						'Wikiplus_Settings',
																						e
																					);
																			},
																		});
																	case 1:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function () {
													return t.apply(this, arguments);
												};
											})()),
											(f = (function () {
												var t = Ot(
													regeneratorRuntime.mark(function t(e) {
														var n;
														return regeneratorRuntime.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (
																			(n = e.sectionNumber),
																			(t.next = 3),
																			c.getWikiText({section: n})
																		);
																	case 3:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function (e) {
													return t.apply(this, arguments);
												};
											})()),
											ct.insertTopQuickEditEntry(u),
											ct.insertSectionQuickEditEntries(u),
											ct.insertLinkEditEntries(u),
											ct.insertSimpleRedirectButton(s),
											ct.insertSettingsPanelButton(l),
											ct.bindPreloadEvents(f);
									case 30:
									case 'end':
										return t.stop();
								}
						}, t);
					})
				)
			);
		})();
})();
