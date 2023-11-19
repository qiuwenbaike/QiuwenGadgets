(function Wikiplus() {
	/*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
	const t = {
		3099: function (t) {
			t.exports = (t) => {
				if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
				return t;
			};
		},
		6077: function (t, e, n) {
			const r = n(111);
			t.exports = (t) => {
				if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + ' as a prototype');
				return t;
			};
		},
		1223: function (t, e, n) {
			const r = n(5112);
			const i = n(30);
			const o = n(3070);
			const a = r('unscopables');
			const c = Array.prototype;
			null == c[a] && o.f(c, a, {configurable: !0, value: i(null)}),
				(t.exports = (t) => {
					c[a][t] = !0;
				});
		},
		1530: function (t, e, n) {
			'use strict';
			const r = n(8710).charAt;
			t.exports = (t, e, n) => e + (n ? r(t, e).length : 1);
		},
		5787: function (t) {
			t.exports = (t, e, n) => {
				if (!(t instanceof e)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
				return t;
			};
		},
		9670: function (t, e, n) {
			const r = n(111);
			t.exports = (t) => {
				if (!r(t)) throw TypeError(String(t) + ' is not an object');
				return t;
			};
		},
		8533: function (t, e, n) {
			'use strict';
			const r = n(2092).forEach;
			const i = n(9341);
			const o = n(9207);
			const a = i('forEach');
			const c = o('forEach');
			t.exports =
				a && c
					? [].forEach
					: function (t) {
							return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
					  };
		},
		8457: function (t, e, n) {
			'use strict';
			const r = n(9974);
			const i = n(7908);
			const o = n(3411);
			const a = n(7659);
			const c = n(7466);
			const u = n(6135);
			const s = n(1246);
			t.exports = function (t) {
				let e;
				let n;
				let l;
				let f;
				let p;
				let d;
				const h = i(t);
				const v = 'function' == typeof this ? this : Array;
				const g = arguments.length;
				let m = g > 1 ? arguments[1] : void 0;
				const y = void 0 !== m;
				const k = s(h);
				let b = 0;
				if ((y && (m = r(m, g > 2 ? arguments[2] : void 0, 2)), null == k || (v == Array && a(k))))
					for (n = new v((e = c(h.length))); e > b; b++) (d = y ? m(h[b], b) : h[b]), u(n, b, d);
				else
					for (p = (f = k.call(h)).next, n = new v(); !(l = p.call(f)).done; b++)
						(d = y ? o(f, m, [l.value, b], !0) : l.value), u(n, b, d);
				return (n.length = b), n;
			};
		},
		1318: function (t, e, n) {
			const r = n(5656);
			const i = n(7466);
			const o = n(1400);

			const a = (t) => (e, n, a) => {
				let c;
				const u = r(e);
				const s = i(u.length);
				let l = o(a, s);
				if (t && n != n) {
					for (; s > l; ) if ((c = u[l++]) != c) return !0;
				} else for (; s > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
				return !t && -1;
			};

			t.exports = {includes: a(!0), indexOf: a(!1)};
		},
		2092: function (t, e, n) {
			const r = n(9974);
			const i = n(8361);
			const o = n(7908);
			const a = n(7466);
			const c = n(5417);
			const u = [].push;

			const s = (t) => {
				const e = 1 == t,
					n = 2 == t,
					s = 3 == t,
					l = 4 == t,
					f = 6 == t,
					p = 5 == t || f;
				return (d, h, v, g) => {
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
			const r = n(7293);
			const i = n(5112);
			const o = n(7392);
			const a = i('species');
			t.exports = (t) =>
				o >= 51 ||
				!r(() => {
					const e = [];
					return (
						((e.constructor = {})[a] = () => ({
							foo: 1,
						})),
						1 !== e[t](Boolean).foo
					);
				});
		},
		9341: function (t, e, n) {
			'use strict';
			const r = n(7293);
			t.exports = (t, e) => {
				const n = [][t];
				return (
					!!n &&
					r(() => {
						n.call(
							null,
							e ||
								(() => {
									throw 1;
								}),
							1
						);
					})
				);
			};
		},
		9207: function (t, e, n) {
			const r = n(9781);
			const i = n(7293);
			const o = n(6656);
			const a = Object.defineProperty;
			const c = {};

			const u = (t) => {
				throw t;
			};

			t.exports = (t, e) => {
				if (o(c, t)) return c[t];
				e || (e = {});
				const n = [][t];
				const s = !!o(e, 'ACCESSORS') && e.ACCESSORS;
				const l = o(e, 0) ? e[0] : u;
				const f = o(e, 1) ? e[1] : void 0;
				return (c[t] =
					!!n &&
					!i(() => {
						if (s && !r) return !0;
						const t = {length: -1};
						s ? a(t, 1, {enumerable: !0, get: u}) : (t[1] = 1), n.call(t, l, f);
					}));
			};
		},
		5417: function (t, e, n) {
			const r = n(111);
			const i = n(3157);
			const o = n(5112)('species');
			t.exports = (t, e) => {
				let n;
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
			const r = n(9670);
			t.exports = (t, e, n, i) => {
				try {
					return i ? e(r(n)[0], n[1]) : e(n);
				} catch (e) {
					const o = t.return;
					throw (void 0 !== o && r(o.call(t)), e);
				}
			};
		},
		7072: function (t, e, n) {
			const r = n(5112)('iterator');
			let i = !1;
			try {
				let o = 0;

				const a = {
					next() {
						return {done: !!o++};
					},
					return() {
						i = !0;
					},
				};

				(a[r] = function () {
					return this;
				}),
					Array.from(a, () => {
						throw 2;
					});
			} catch (t) {}
			t.exports = (t, e) => {
				if (!e && !i) return !1;
				let n = !1;
				try {
					const o = {};
					(o[r] = () => ({
						next() {
							return {done: (n = !0)};
						},
					})),
						t(o);
				} catch (t) {}
				return n;
			};
		},
		4326: function (t) {
			const e = {}.toString;
			t.exports = (t) => e.call(t).slice(8, -1);
		},
		648: function (t, e, n) {
			const r = n(1694);
			const i = n(4326);
			const o = n(5112)('toStringTag');

			const a =
				'Arguments' ==
				i(
					(function (...args) {
						return args;
					})()
				);

			t.exports = r
				? i
				: (t) => {
						let e;
						let n;
						let r;
						return void 0 === t
							? 'Undefined'
							: null === t
							  ? 'Null'
							  : 'string' ==
							      typeof (n = ((t, e) => {
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
			const r = n(3070).f;
			const i = n(30);
			const o = n(2248);
			const a = n(9974);
			const c = n(5787);
			const u = n(408);
			const s = n(654);
			const l = n(6340);
			const f = n(9781);
			const p = n(2423).fastKey;
			const d = n(9909);
			const h = d.set;
			const v = d.getterFor;
			t.exports = {
				getConstructor(t, e, n, s) {
					const l = t((t, r) => {
						c(t, l, e),
							h(t, {type: e, index: i(null), first: void 0, last: void 0, size: 0}),
							f || (t.size = 0),
							null != r && u(r, t[s], t, n);
					});

					const d = v(e);

					const g = (t, e, n) => {
						let r;
						let i;
						const o = d(t);
						let a = m(t, e);
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
					};

					var m = (t, e) => {
						let n;
						const r = d(t);
						const i = p(e);
						if ('F' !== i) return r.index[i];
						for (n = r.first; n; n = n.next) if (n.key == e) return n;
					};

					return (
						o(l.prototype, {
							clear() {
								for (var t = d(this), e = t.index, n = t.first; n; )
									(n.removed = !0),
										n.previous && (n.previous = n.previous.next = void 0),
										delete e[n.index],
										(n = n.next);
								(t.first = t.last = void 0), f ? (t.size = 0) : (this.size = 0);
							},
							delete(t) {
								const e = this;
								const n = d(e);
								const r = m(e, t);
								if (r) {
									const i = r.next;
									const o = r.previous;
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
							forEach(t) {
								for (
									let e, n = d(this), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
									(e = e ? e.next : n.first);

								)
									for (r(e.value, e.key, this); e && e.removed; ) e = e.previous;
							},
							has(t) {
								return !!m(this, t);
							},
						}),
						o(
							l.prototype,
							n
								? {
										get(t) {
											const e = m(this, t);
											return e && e.value;
										},
										set(t, e) {
											return g(this, 0 === t ? 0 : t, e);
										},
								  }
								: {
										add(t) {
											return g(this, (t = 0 === t ? 0 : t), t);
										},
								  }
						),
						f &&
							r(l.prototype, 'size', {
								get() {
									return d(this).size;
								},
							}),
						l
					);
				},
				setStrong(t, e, n) {
					const r = e + ' Iterator';
					const i = v(e);
					const o = v(r);
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
			const r = n(2109);
			const i = n(7854);
			const o = n(4705);
			const a = n(1320);
			const c = n(2423);
			const u = n(408);
			const s = n(5787);
			const l = n(111);
			const f = n(7293);
			const p = n(7072);
			const d = n(8003);
			const h = n(9587);
			t.exports = (t, e, n) => {
				const v = t.includes('Map');
				const g = t.includes('Weak');
				const m = v ? 'set' : 'add';
				const y = i[t];
				const k = y && y.prototype;
				let b = y;
				const A = {};

				const w = (t) => {
					const e = k[t];
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
									!f(() => {
										new y().entries().next();
									}))
							)
					)
				)
					(b = n.getConstructor(e, t, v, m)), (c.REQUIRED = !0);
				else if (o(t, !0)) {
					const x = new b();
					const I = x[m](g ? {} : -0, 1) != x;

					const C = f(() => {
						x.has(1);
					});

					const B = p((t) => {
						new y(t);
					});

					const _ =
						!g &&
						f(() => {
							for (var t = new y(), e = 5; e--; ) t[m](e, e);
							return !t.has(-0);
						});

					B ||
						(((b = e((e, n) => {
							s(e, b, t);
							const r = h(new y(), e, b);
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
			const r = n(6656);
			const i = n(3887);
			const o = n(1236);
			const a = n(3070);
			t.exports = (t, e) => {
				for (let n = i(e), c = a.f, u = o.f, s = 0; s < n.length; s++) {
					const l = n[s];
					r(t, l) || c(t, l, u(e, l));
				}
			};
		},
		4964: function (t, e, n) {
			const r = n(5112)('match');
			t.exports = (t) => {
				const e = /./;
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
			const r = n(7293);
			t.exports = !r(() => {
				function t() {}
				return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
			});
		},
		4994: function (t, e, n) {
			'use strict';
			const r = n(3383).IteratorPrototype;
			const i = n(30);
			const o = n(9114);
			const a = n(8003);
			const c = n(7497);

			const u = function () {
				return this;
			};

			t.exports = (t, e, n) => {
				const s = e + ' Iterator';
				return (t.prototype = i(r, {next: o(1, n)})), a(t, s, !1, !0), (c[s] = u), t;
			};
		},
		8880: function (t, e, n) {
			const r = n(9781);
			const i = n(3070);
			const o = n(9114);
			t.exports = r ? (t, e, n) => i.f(t, e, o(1, n)) : (t, e, n) => ((t[e] = n), t);
		},
		9114: function (t) {
			t.exports = (t, e) => ({
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e,
			});
		},
		6135: function (t, e, n) {
			'use strict';
			const r = n(7593);
			const i = n(3070);
			const o = n(9114);
			t.exports = (t, e, n) => {
				const a = r(e);
				a in t ? i.f(t, a, o(0, n)) : (t[a] = n);
			};
		},
		654: function (t, e, n) {
			'use strict';
			const r = n(2109);
			const i = n(4994);
			const o = n(9518);
			const a = n(7674);
			const c = n(8003);
			const u = n(8880);
			const s = n(1320);
			const l = n(5112);
			const f = n(1913);
			const p = n(7497);
			const d = n(3383);
			const h = d.IteratorPrototype;
			const v = d.BUGGY_SAFARI_ITERATORS;
			const g = l('iterator');
			const m = 'keys';
			const y = 'values';
			const k = 'entries';

			const b = function () {
				return this;
			};

			t.exports = (t, e, n, l, d, A, w) => {
				i(n, e, l);
				let x;
				let I;
				let C;

				const B = (t) => {
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
				};

				const _ = e + ' Iterator';
				let S = !1;
				var O = t.prototype;
				const P = O[g] || O['@@iterator'] || (d && O[d]);
				var W = (!v && P) || B(d);
				const E = ('Array' == e && O.entries) || P;
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
			const r = n(857);
			const i = n(6656);
			const o = n(6061);
			const a = n(3070).f;
			t.exports = (t) => {
				const e = r.Symbol || (r.Symbol = {});
				i(e, t) || a(e, t, {value: o.f(t)});
			};
		},
		9781: function (t, e, n) {
			const r = n(7293);
			t.exports = !r(
				() =>
					7 !=
					Object.defineProperty({}, 1, {
						get() {
							return 7;
						},
					})[1]
			);
		},
		317: function (t, e, n) {
			const r = n(7854);
			const i = n(111);
			const o = r.document;
			const a = i(o) && i(o.createElement);
			t.exports = (t) => (a ? o.createElement(t) : {});
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
			const r = n(8113);
			t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
		},
		8113: function (t, e, n) {
			const r = n(5005);
			t.exports = r('navigator', 'userAgent') || '';
		},
		7392: function (t, e, n) {
			let r;
			let i;
			const o = n(7854);
			const a = n(8113);
			const c = o.process;
			const u = c && c.versions;
			const s = u && u.v8;
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
			const r = n(7854);
			const i = n(1236).f;
			const o = n(8880);
			const a = n(1320);
			const c = n(3505);
			const u = n(9920);
			const s = n(4705);
			t.exports = (t, e) => {
				let n;
				let l;
				let f;
				let p;
				let d;
				const h = t.target;
				const v = t.global;
				const g = t.stat;
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
			t.exports = (t) => {
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
			const r = n(1320);
			const i = n(7293);
			const o = n(5112);
			const a = n(2261);
			const c = n(8880);
			const u = o('species');

			const s = !i(() => {
				const t = /./;
				return (
					(t.exec = () => {
						const t = [];
						return (t.groups = {a: '7'}), t;
					}),
					'7' !== ''.replace(t, '$<a>')
				);
			});

			const l = '$0' === 'a'.replace(/./, '$0');
			const f = o('replace');
			const p = !!/./[f] && '' === /./[f]('a', '$0');

			const d = !i(() => {
				const t = /(?:)/,
					e = t.exec;
				t.exec = function (...args) {
					return e.apply(this, args);
				};
				const n = 'ab'.split(t);
				return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
			});

			t.exports = (t, e, n, f) => {
				const h = o(t);

				const v = !i(() => {
					const e = {};
					return (e[h] = () => 7), 7 != ''[t](e);
				});

				const g =
					v &&
					!i(() => {
						let e = !1,
							n = /a/;
						return (
							'split' === t &&
								(((n = {}).constructor = {}),
								(n.constructor[u] = () => n),
								(n.flags = ''),
								(n[h] = /./[h])),
							(n.exec = () => ((e = !0), null)),
							n[h](''),
							!e
						);
					});

				if (!v || !g || ('replace' === t && (!s || !l || p)) || ('split' === t && !d)) {
					const m = /./[h];

					const y = n(
						h,
						''[t],
						(t, e, n, r, i) =>
							e.exec === a
								? v && !i
									? {done: !0, value: m.call(e, n, r)}
									: {done: !0, value: t.call(n, e, r)}
								: {done: !1},
						{REPLACE_KEEPS_$0: l, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p}
					);

					const k = y[0];
					const b = y[1];
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
			const r = n(7293);
			t.exports = !r(() => Object.isExtensible(Object.preventExtensions({})));
		},
		9974: function (t, e, n) {
			const r = n(3099);
			t.exports = (t, e, n) => {
				if ((r(t), void 0 === e)) return t;
				switch (n) {
					case 0:
						return () => t.call(e);
					case 1:
						return (n) => t.call(e, n);
					case 2:
						return (n, r) => t.call(e, n, r);
					case 3:
						return (n, r, i) => t.call(e, n, r, i);
				}
				return function (...args) {
					return t.apply(e, args);
				};
			};
		},
		7065: function (t, e, n) {
			'use strict';
			const r = n(3099);
			const i = n(111);
			const o = [].slice;
			const a = {};

			const c = (t, e, n) => {
				if (!(e in a)) {
					for (var r = [], i = 0; i < e; i++) r[i] = 'a[' + i + ']';
					a[e] = Function('C,a', 'return new C(' + r.join(',') + ')');
				}
				return a[e](t, n);
			};

			t.exports =
				Function.bind ||
				function (t) {
					const e = r(this);
					const n = o.call(arguments, 1);

					const a = function (...args) {
						const r = n.concat(o.call(args));
						return this instanceof a ? c(e, r.length, r) : e.apply(t, r);
					};

					return i(e.prototype) && (a.prototype = e.prototype), a;
				};
		},
		5005: function (t, e, n) {
			const r = n(857);
			const i = n(7854);
			const o = (t) => ('function' == typeof t ? t : void 0);
			t.exports = function (t, e) {
				return arguments.length < 2 ? o(r[t]) || o(i[t]) : (r[t] && r[t][e]) || (i[t] && i[t][e]);
			};
		},
		1246: function (t, e, n) {
			const r = n(648);
			const i = n(7497);
			const o = n(5112)('iterator');
			t.exports = (t) => {
				if (null != t) return t[o] || t['@@iterator'] || i[r(t)];
			};
		},
		8554: function (t, e, n) {
			const r = n(9670);
			const i = n(1246);
			t.exports = (t) => {
				const e = i(t);
				if ('function' != typeof e) throw TypeError(String(t) + ' is not iterable');
				return r(e.call(t));
			};
		},
		7854: function (t, e, n) {
			const r = (t) => t && t.Math == Math && t;
			t.exports =
				r('object' == typeof globalThis && globalThis) ||
				r('object' == typeof window && window) ||
				r('object' == typeof self && self) ||
				r('object' == typeof n.g && n.g) ||
				Function('return this')();
		},
		6656: function (t) {
			const e = {}.hasOwnProperty;
			t.exports = (t, n) => e.call(t, n);
		},
		3501: function (t) {
			t.exports = {};
		},
		842: function (t, e, n) {
			const r = n(7854);
			t.exports = function (t, e) {
				const n = r.console;
				n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
			};
		},
		490: function (t, e, n) {
			const r = n(5005);
			t.exports = r('document', 'documentElement');
		},
		4664: function (t, e, n) {
			const r = n(9781);
			const i = n(7293);
			const o = n(317);
			t.exports =
				!r &&
				!i(
					() =>
						7 !=
						Object.defineProperty(o('div'), 'a', {
							get() {
								return 7;
							},
						}).a
				);
		},
		8361: function (t, e, n) {
			const r = n(7293);
			const i = n(4326);
			const o = ''.split;
			t.exports = r(() => !Object('z').propertyIsEnumerable(0))
				? (t) => ('String' == i(t) ? o.call(t, '') : Object(t))
				: Object;
		},
		9587: function (t, e, n) {
			const r = n(111);
			const i = n(7674);
			t.exports = (t, e, n) => {
				let o;
				let a;
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
			const r = n(5465);
			const i = Function.toString;
			'function' != typeof r.inspectSource && (r.inspectSource = (t) => i.call(t)), (t.exports = r.inspectSource);
		},
		2423: function (t, e, n) {
			const r = n(3501);
			const i = n(111);
			const o = n(6656);
			const a = n(3070).f;
			const c = n(9711);
			const u = n(6677);
			const s = c('meta');
			let l = 0;

			const f = Object.isExtensible || (() => !0);

			const p = (t) => {
				a(t, s, {value: {objectID: 'O' + ++l, weakData: {}}});
			};

			const d = (t.exports = {
				REQUIRED: !1,
				fastKey(t, e) {
					if (!i(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
					if (!o(t, s)) {
						if (!f(t)) return 'F';
						if (!e) return 'E';
						p(t);
					}
					return t[s].objectID;
				},
				getWeakData(t, e) {
					if (!o(t, s)) {
						if (!f(t)) return !0;
						if (!e) return !1;
						p(t);
					}
					return t[s].weakData;
				},
				onFreeze(t) {
					return u && d.REQUIRED && f(t) && !o(t, s) && p(t), t;
				},
			});

			r[s] = !0;
		},
		9909: function (t, e, n) {
			let r;
			let i;
			let o;
			const a = n(8536);
			const c = n(7854);
			const u = n(111);
			const s = n(8880);
			const l = n(6656);
			const f = n(6200);
			const p = n(3501);
			const d = c.WeakMap;
			if (a) {
				const h = new d();
				const v = h.get;
				const g = h.has;
				const m = h.set;
				(r = (t, e) => (m.call(h, t, e), e)), (i = (t) => v.call(h, t) || {}), (o = (t) => g.call(h, t));
			} else {
				const y = f('state');
				(p[y] = !0), (r = (t, e) => (s(t, y, e), e)), (i = (t) => (l(t, y) ? t[y] : {})), (o = (t) => l(t, y));
			}
			t.exports = {
				set: r,
				get: i,
				has: o,
				enforce(t) {
					return o(t) ? i(t) : r(t, {});
				},
				getterFor(t) {
					return (e) => {
						let n;
						if (!u(e) || (n = i(e)).type !== t)
							throw TypeError('Incompatible receiver, ' + t + ' required');
						return n;
					};
				},
			};
		},
		7659: function (t, e, n) {
			const r = n(5112);
			const i = n(7497);
			const o = r('iterator');
			const a = Array.prototype;
			t.exports = (t) => void 0 !== t && (i.Array === t || a[o] === t);
		},
		3157: function (t, e, n) {
			const r = n(4326);
			t.exports = Array.isArray || ((t) => 'Array' == r(t));
		},
		4705: function (t, e, n) {
			const r = n(7293);
			const i = /#|\.prototype\./;

			const o = (t, e) => {
				const n = c[a(t)];
				return n == s || (n != u && ('function' == typeof e ? r(e) : !!e));
			};

			var a = (o.normalize = (t) => String(t).replace(i, '.').toLowerCase());
			var c = (o.data = {});
			var u = (o.NATIVE = 'N');
			var s = (o.POLYFILL = 'P');
			t.exports = o;
		},
		111: function (t) {
			t.exports = (t) => ('object' == typeof t ? null !== t : 'function' == typeof t);
		},
		1913: function (t) {
			t.exports = !1;
		},
		7850: function (t, e, n) {
			const r = n(111);
			const i = n(4326);
			const o = n(5112)('match');
			t.exports = (t) => {
				let e;
				return r(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' == i(t));
			};
		},
		408: function (t, e, n) {
			const r = n(9670);
			const i = n(7659);
			const o = n(7466);
			const a = n(9974);
			const c = n(1246);
			const u = n(3411);

			const s = function (t, e) {
				(this.stopped = t), (this.result = e);
			};

			(t.exports = (t, e, n, l, f) => {
				let p;
				let d;
				let h;
				let v;
				let g;
				let m;
				let y;
				const k = a(e, n, l ? 2 : 1);
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
			}).stop = (t) => new s(!0, t);
		},
		3383: function (t, e, n) {
			'use strict';
			let r;
			let i;
			let o;
			const a = n(9518);
			const c = n(8880);
			const u = n(6656);
			const s = n(5112);
			const l = n(1913);
			const f = s('iterator');
			let p = !1;
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
			let r;
			let i;
			let o;
			let a;
			let c;
			let u;
			let s;
			let l;
			const f = n(7854);
			const p = n(1236).f;
			const d = n(4326);
			const h = n(261).set;
			const v = n(6833);
			const g = f.MutationObserver || f.WebKitMutationObserver;
			const m = f.process;
			const y = f.Promise;
			const k = 'process' == d(m);
			const b = p(f, 'queueMicrotask');
			const A = b && b.value;
			A ||
				((r = () => {
					let t;
					let e;
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
					? (a = () => {
							m.nextTick(r);
					  })
					: g && !v
					  ? ((c = !0),
					    (u = document.createTextNode('')),
					    new g(r).observe(u, {characterData: !0}),
					    (a = () => {
								u.data = c = !c;
					    }))
					  : y && y.resolve
					    ? ((s = y.resolve(void 0)),
					      (l = s.then),
					      (a = () => {
									l.call(s, r);
					      }))
					    : (a = () => {
									h.call(f, r);
					      })),
				(t.exports =
					A ||
					((t) => {
						const e = {fn: t, next: void 0};
						o && (o.next = e), i || ((i = e), a()), (o = e);
					}));
		},
		3366: function (t, e, n) {
			const r = n(7854);
			t.exports = r.Promise;
		},
		133: function (t, e, n) {
			const r = n(7293);
			t.exports = !!Object.getOwnPropertySymbols && !r(() => !String(Symbol()));
		},
		590: function (t, e, n) {
			const r = n(7293);
			const i = n(5112);
			const o = n(1913);
			const a = i('iterator');
			t.exports = !r(() => {
				const t = new URL('b?a=1&b=2&c=3', 'http://a');
				const e = t.searchParams;
				let n = '';
				return (
					(t.pathname = 'c%20d'),
					e.forEach((t, r) => {
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
			const r = n(7854);
			const i = n(2788);
			const o = r.WeakMap;
			t.exports = 'function' == typeof o && /native code/.test(i(o));
		},
		8523: function (t, e, n) {
			'use strict';
			const r = n(3099);

			const i = function (t) {
				let e, n;
				(this.promise = new t((t, r) => {
					if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
					(e = t), (n = r);
				})),
					(this.resolve = r(e)),
					(this.reject = r(n));
			};

			t.exports.f = (t) => new i(t);
		},
		3929: function (t, e, n) {
			const r = n(7850);
			t.exports = (t) => {
				if (r(t)) throw TypeError("The method doesn't accept regular expressions");
				return t;
			};
		},
		1574: function (t, e, n) {
			'use strict';
			const r = n(9781);
			const i = n(7293);
			const o = n(1956);
			const a = n(5181);
			const c = n(5296);
			const u = n(7908);
			const s = n(8361);
			const l = Object.assign;
			const f = Object.defineProperty;
			t.exports =
				!l ||
				i(() => {
					if (
						r &&
						1 !==
							l(
								{b: 1},
								l(
									f({}, 'a', {
										enumerable: !0,
										get() {
											f(this, 'b', {value: 3, enumerable: !1});
										},
									}),
									{b: 2}
								)
							).b
					)
						return !0;
					const t = {};
					const e = {};
					const n = Symbol();
					const i = 'abcdefghijklmnopqrst';
					return (
						(t[n] = 7),
						i.split('').forEach((t) => {
							e[t] = t;
						}),
						7 != l({}, t)[n] || o(l({}, e)).join('') != i
					);
				})
					? function (t, e) {
							for (var n = u(t), i = arguments.length, l = 1, f = a.f, p = c.f; i > l; )
								for (
									let d, h = s(arguments[l++]), v = f ? o(h).concat(f(h)) : o(h), g = v.length, m = 0;
									g > m;

								)
									(d = v[m++]), (r && !p.call(h, d)) || (n[d] = h[d]);
							return n;
					  }
					: l;
		},
		30: function (t, e, n) {
			let r;
			const i = n(9670);
			const o = n(6048);
			const a = n(748);
			const c = n(3501);
			const u = n(490);
			const s = n(317);
			const l = n(6200);
			const f = l('IE_PROTO');
			const p = () => {};
			const d = (t) => '<script>' + t + '</' + 'script>';

			let h = () => {
				try {
					r = document.domain && new ActiveXObject('htmlfile');
				} catch (t) {}
				var t;
				let e;
				h = r
					? ((t) => {
							t.write(d('')), t.close();
							const e = t.parentWindow.Object;
							return (t = null), e;
					  })(r)
					: (((e = s('iframe')).style.display = 'none'),
					  u.appendChild(e),
					  (e.src = String('javascript:')),
					  (t = e.contentWindow.document).open(),
					  t.write(d('document.F=Object')),
					  t.close(),
					  t.F);
				for (let n = a.length; n--; ) delete h.prototype[a[n]];
				return h();
			};

			(c[f] = !0),
				(t.exports =
					Object.create ||
					((t, e) => {
						let n;
						return (
							null !== t
								? ((p.prototype = i(t)), (n = new p()), (p.prototype = null), (n[f] = t))
								: (n = h()),
							void 0 === e ? n : o(n, e)
						);
					}));
		},
		6048: function (t, e, n) {
			const r = n(9781);
			const i = n(3070);
			const o = n(9670);
			const a = n(1956);
			t.exports = r
				? Object.defineProperties
				: (t, e) => {
						o(t);
						for (let n, r = a(e), c = r.length, u = 0; c > u; ) i.f(t, (n = r[u++]), e[n]);
						return t;
				  };
		},
		3070: function (t, e, n) {
			const r = n(9781);
			const i = n(4664);
			const o = n(9670);
			const a = n(7593);
			const c = Object.defineProperty;
			e.f = r
				? c
				: (t, e, n) => {
						if ((o(t), (e = a(e, !0)), o(n), i))
							try {
								return c(t, e, n);
							} catch (t) {}
						if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
						return 'value' in n && (t[e] = n.value), t;
				  };
		},
		1236: function (t, e, n) {
			const r = n(9781);
			const i = n(5296);
			const o = n(9114);
			const a = n(5656);
			const c = n(7593);
			const u = n(6656);
			const s = n(4664);
			const l = Object.getOwnPropertyDescriptor;
			e.f = r
				? l
				: (t, e) => {
						if (((t = a(t)), (e = c(e, !0)), s))
							try {
								return l(t, e);
							} catch (t) {}
						if (u(t, e)) return o(!i.f.call(t, e), t[e]);
				  };
		},
		1156: function (t, e, n) {
			const r = n(5656);
			const i = n(8006).f;
			const o = {}.toString;

			const a =
				'object' == typeof window && window && Object.getOwnPropertyNames
					? Object.getOwnPropertyNames(window)
					: [];

			t.exports.f = (t) =>
				a && '[object Window]' == o.call(t)
					? ((t) => {
							try {
								return i(t);
							} catch (t) {
								return a.slice();
							}
					  })(t)
					: i(r(t));
		},
		8006: function (t, e, n) {
			const r = n(6324);
			const i = n(748).concat('length', 'prototype');
			e.f = Object.getOwnPropertyNames || ((t) => r(t, i));
		},
		5181: function (t, e) {
			e.f = Object.getOwnPropertySymbols;
		},
		9518: function (t, e, n) {
			const r = n(6656);
			const i = n(7908);
			const o = n(6200);
			const a = n(8544);
			const c = o('IE_PROTO');
			const u = Object.prototype;
			t.exports = a
				? Object.getPrototypeOf
				: (t) => (
						(t = i(t)),
						r(t, c)
							? t[c]
							: 'function' == typeof t.constructor && t instanceof t.constructor
							  ? t.constructor.prototype
							  : t instanceof Object
							    ? u
							    : null
				  );
		},
		6324: function (t, e, n) {
			const r = n(6656);
			const i = n(5656);
			const o = n(1318).indexOf;
			const a = n(3501);
			t.exports = (t, e) => {
				let n;
				const c = i(t);
				let u = 0;
				const s = [];
				for (n in c) !r(a, n) && r(c, n) && s.push(n);
				for (; e.length > u; ) r(c, (n = e[u++])) && (~o(s, n) || s.push(n));
				return s;
			};
		},
		1956: function (t, e, n) {
			const r = n(6324);
			const i = n(748);
			t.exports = Object.keys || ((t) => r(t, i));
		},
		5296: function (t, e) {
			'use strict';
			const n = {}.propertyIsEnumerable;
			const r = Object.getOwnPropertyDescriptor;
			const i = r && !n.call({1: 2}, 1);
			e.f = i
				? function (t) {
						const e = r(this, t);
						return !!e && e.enumerable;
				  }
				: n;
		},
		7674: function (t, e, n) {
			const r = n(9670);
			const i = n(6077);
			t.exports =
				Object.setPrototypeOf ||
				('__proto__' in {}
					? (() => {
							let t;
							let e = !1;
							const n = {};
							try {
								(t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []),
									(e = n instanceof Array);
							} catch (t) {}
							return (n, o) => (r(n), i(o), e ? t.call(n, o) : (n.__proto__ = o), n);
					  })()
					: void 0);
		},
		4699: function (t, e, n) {
			const r = n(9781);
			const i = n(1956);
			const o = n(5656);
			const a = n(5296).f;

			const c = (t) => (e) => {
				for (var n, c = o(e), u = i(c), s = u.length, l = 0, f = []; s > l; )
					(n = u[l++]), (r && !a.call(c, n)) || f.push(t ? [n, c[n]] : c[n]);
				return f;
			};

			t.exports = {entries: c(!0), values: c(!1)};
		},
		288: function (t, e, n) {
			'use strict';
			const r = n(1694);
			const i = n(648);
			t.exports = r
				? {}.toString
				: function () {
						return '[object ' + i(this) + ']';
				  };
		},
		3887: function (t, e, n) {
			const r = n(5005);
			const i = n(8006);
			const o = n(5181);
			const a = n(9670);
			t.exports =
				r('Reflect', 'ownKeys') ||
				((t) => {
					const e = i.f(a(t));
					const n = o.f;
					return n ? e.concat(n(t)) : e;
				});
		},
		857: function (t, e, n) {
			const r = n(7854);
			t.exports = r;
		},
		2534: function (t) {
			t.exports = (t) => {
				try {
					return {error: !1, value: t()};
				} catch (t) {
					return {error: !0, value: t};
				}
			};
		},
		9478: function (t, e, n) {
			const r = n(9670);
			const i = n(111);
			const o = n(8523);
			t.exports = (t, e) => {
				if ((r(t), i(e) && e.constructor === t)) return e;
				const n = o.f(t);
				return (0, n.resolve)(e), n.promise;
			};
		},
		2248: function (t, e, n) {
			const r = n(1320);
			t.exports = (t, e, n) => {
				for (const i in e) r(t, i, e[i], n);
				return t;
			};
		},
		1320: function (t, e, n) {
			const r = n(7854);
			const i = n(8880);
			const o = n(6656);
			const a = n(3505);
			const c = n(2788);
			const u = n(9909);
			const s = u.get;
			const l = u.enforce;
			const f = String(String).split('String');
			(t.exports = (t, e, n, c) => {
				const u = !!c && !!c.unsafe;
				let s = !!c && !!c.enumerable;
				const p = !!c && !!c.noTargetGet;
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
			const r = n(4326);
			const i = n(2261);
			t.exports = (t, e) => {
				const n = t.exec;
				if ('function' == typeof n) {
					const o = n.call(t, e);
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
			let r;
			let i;
			const o = n(7066);
			const a = n(2999);
			const c = RegExp.prototype.exec;
			const u = String.prototype.replace;
			let s = c;
			const l = ((r = /a/), (i = /b*/g), c.call(r, 'a'), c.call(i, 'a'), 0 !== r.lastIndex || 0 !== i.lastIndex);
			const f = a.UNSUPPORTED_Y || a.BROKEN_CARET;
			const p = void 0 !== /()??/.exec('')[1];
			(l || p || f) &&
				(s = function (t) {
					let e;
					let n;
					let r;
					let i;
					const a = this;
					const s = f && a.sticky;
					let d = o.call(a);
					let h = a.source;
					let v = 0;
					let g = t;
					return (
						s &&
							(!(d = d.replace('y', '')).includes('g') && (d += 'g'),
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
							u.call(r[0], n, function (...args) {
								for (i = 1; i < args.length - 2; i++) void 0 === args[i] && (r[i] = void 0);
							}),
						r
					);
				}),
				(t.exports = s);
		},
		7066: function (t, e, n) {
			'use strict';
			const r = n(9670);
			t.exports = function () {
				const t = r(this);
				let e = '';
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
			const r = n(7293);
			function i(t, e) {
				return RegExp(t, e);
			}
			(e.UNSUPPORTED_Y = r(() => {
				const t = i('a', 'y');
				return (t.lastIndex = 2), null != t.exec('abcd');
			})),
				(e.BROKEN_CARET = r(() => {
					const t = i('^r', 'gy');
					return (t.lastIndex = 2), null != t.exec('str');
				}));
		},
		4488: function (t) {
			t.exports = (t) => {
				if (null == t) throw TypeError("Can't call method on " + t);
				return t;
			};
		},
		3505: function (t, e, n) {
			const r = n(7854);
			const i = n(8880);
			t.exports = (t, e) => {
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
			const r = n(5005);
			const i = n(3070);
			const o = n(5112);
			const a = n(9781);
			const c = o('species');
			t.exports = (t) => {
				const e = r(t);
				const n = i.f;
				a &&
					e &&
					!e[c] &&
					n(e, c, {
						configurable: !0,
						get() {
							return this;
						},
					});
			};
		},
		8003: function (t, e, n) {
			const r = n(3070).f;
			const i = n(6656);
			const o = n(5112)('toStringTag');
			t.exports = (t, e, n) => {
				t && !i((t = n ? t : t.prototype), o) && r(t, o, {configurable: !0, value: e});
			};
		},
		6200: function (t, e, n) {
			const r = n(2309);
			const i = n(9711);
			const o = r('keys');
			t.exports = (t) => o[t] || (o[t] = i(t));
		},
		5465: function (t, e, n) {
			const r = n(7854);
			const i = n(3505);
			const o = '__core-js_shared__';
			const a = r[o] || i(o, {});
			t.exports = a;
		},
		2309: function (t, e, n) {
			const r = n(1913);
			const i = n(5465);
			(t.exports = (t, e) => i[t] || (i[t] = void 0 !== e ? e : {}))('versions', []).push({
				version: '3.6.5',
				mode: r ? 'pure' : 'global',
				copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
			});
		},
		6707: function (t, e, n) {
			const r = n(9670);
			const i = n(3099);
			const o = n(5112)('species');
			t.exports = (t, e) => {
				let n;
				const a = r(t).constructor;
				return void 0 === a || null == (n = r(a)[o]) ? e : i(n);
			};
		},
		8710: function (t, e, n) {
			const r = n(9958);
			const i = n(4488);

			const o = (t) => (e, n) => {
				let o;
				let a;
				const c = String(i(e));
				const u = r(n);
				const s = c.length;
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

			t.exports = {codeAt: o(!1), charAt: o(!0)};
		},
		3197: function (t) {
			'use strict';
			const e = 2147483647;
			const n = /[^\0-\u007E]/;
			const r = /[.\u3002\uFF0E\uFF61]/g;
			const i = 'Overflow: input needs wider integers to process';
			const o = Math.floor;
			const a = String.fromCharCode;
			const c = (t) => t + 22 + 75 * (t < 26);

			const u = (t, e, n) => {
				let r = 0;
				for (t = n ? o(t / 700) : t >> 1, t += o(t / e); t > 455; r += 36) t = o(t / 35);
				return o(r + (36 * t) / (t + 38));
			};

			const s = (t) => {
				const n = [];
				t = ((t) => {
					for (var e = [], n = 0, r = t.length; n < r; ) {
						const i = t.charCodeAt(n++);
						if (i >= 55296 && i <= 56319 && n < r) {
							const o = t.charCodeAt(n++);
							56320 == (64512 & o) ? e.push(((1023 & i) << 10) + (1023 & o) + 65536) : (e.push(i), n--);
						} else e.push(i);
					}
					return e;
				})(t);
				let r;
				let s;
				const l = t.length;
				let f = 128;
				let p = 0;
				let d = 72;
				for (r = 0; r < t.length; r++) (s = t[r]) < 128 && n.push(a(s));
				const h = n.length;
				let v = h;
				for (h && n.push('-'); v < l; ) {
					let g = e;
					for (r = 0; r < t.length; r++) (s = t[r]) >= f && s < g && (g = s);
					const m = v + 1;
					if (g - f > o((e - p) / m)) throw RangeError(i);
					for (p += (g - f) * m, f = g, r = 0; r < t.length; r++) {
						if ((s = t[r]) < f && ++p > e) throw RangeError(i);
						if (s == f) {
							for (var y = p, k = 36; ; k += 36) {
								const b = k <= d ? 1 : k >= d + 26 ? 26 : k - d;
								if (y < b) break;
								const A = y - b,
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

			t.exports = (t) => {
				let e;
				let i;
				const o = [];
				const a = t.toLowerCase().replace(r, '.').split('.');
				for (e = 0; e < a.length; e++) (i = a[e]), o.push(n.test(i) ? 'xn--' + s(i) : i);
				return o.join('.');
			};
		},
		6091: function (t, e, n) {
			const r = n(7293);
			const i = n(1361);
			t.exports = (t) => r(() => !!i[t]() || '​᠎' != '​᠎'[t]() || i[t].name !== t);
		},
		3111: function (t, e, n) {
			const r = n(4488);
			const i = '[' + n(1361) + ']';
			const o = RegExp('^' + i + i + '*');
			const a = RegExp(i + i + '*$');

			const c = (t) => (e) => {
				let n = String(r(e));
				return 1 & t && (n = n.replace(o, '')), 2 & t && (n = n.replace(a, '')), n;
			};

			t.exports = {start: c(1), end: c(2), trim: c(3)};
		},
		261: function (t, e, n) {
			let r;
			let i;
			let o;
			const a = n(7854);
			const c = n(7293);
			const u = n(4326);
			const s = n(9974);
			const l = n(490);
			const f = n(317);
			const p = n(6833);
			const d = a.location;
			let h = a.setImmediate;
			let v = a.clearImmediate;
			const g = a.process;
			const m = a.MessageChannel;
			const y = a.Dispatch;
			let k = 0;
			const b = {};
			const A = 'onreadystatechange';

			const w = (t) => {
				if (b.hasOwnProperty(t)) {
					const e = b[t];
					delete b[t], e();
				}
			};

			const x = (t) => () => {
				w(t);
			};

			const I = (t) => {
				w(t.data);
			};

			const C = (t) => {
				a.postMessage(t + '', d.protocol + '//' + d.host);
			};

			(h && v) ||
				((h = function (t) {
					for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
					return (
						(b[++k] = () => {
							('function' == typeof t ? t : Function(t)).apply(void 0, e);
						}),
						r(k),
						k
					);
				}),
				(v = (t) => {
					delete b[t];
				}),
				'process' == u(g)
					? (r = (t) => {
							g.nextTick(x(t));
					  })
					: y && y.now
					  ? (r = (t) => {
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
											? (t) => {
													l.appendChild(f('script')).onreadystatechange = function () {
														l.removeChild(this), w(t);
													};
											  }
											: (t) => {
													setTimeout(x(t), 0);
											  })
					      : ((r = C), a.addEventListener('message', I, !1))),
				(t.exports = {set: h, clear: v});
		},
		1400: function (t, e, n) {
			const r = n(9958);
			const i = Math.max;
			const o = Math.min;
			t.exports = (t, e) => {
				const n = r(t);
				return n < 0 ? i(n + e, 0) : o(n, e);
			};
		},
		5656: function (t, e, n) {
			const r = n(8361);
			const i = n(4488);
			t.exports = (t) => r(i(t));
		},
		9958: function (t) {
			const e = Math.ceil;
			const n = Math.floor;
			t.exports = (t) => (isNaN((t = +t)) ? 0 : (t > 0 ? n : e)(t));
		},
		7466: function (t, e, n) {
			const r = n(9958);
			const i = Math.min;
			t.exports = (t) => (t > 0 ? i(r(t), 9007199254740991) : 0);
		},
		7908: function (t, e, n) {
			const r = n(4488);
			t.exports = (t) => Object(r(t));
		},
		7593: function (t, e, n) {
			const r = n(111);
			t.exports = (t, e) => {
				if (!r(t)) return t;
				let n;
				let i;
				if (e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
				if ('function' == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
				if (!e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
				throw TypeError("Can't convert object to primitive value");
			};
		},
		1694: function (t, e, n) {
			const r = {};
			(r[n(5112)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(r));
		},
		9711: function (t) {
			let e = 0;
			const n = Math.random();
			t.exports = (t) => 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++e + n).toString(36);
		},
		3307: function (t, e, n) {
			const r = n(133);
			t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
		},
		6061: function (t, e, n) {
			const r = n(5112);
			e.f = r;
		},
		5112: function (t, e, n) {
			const r = n(7854);
			const i = n(2309);
			const o = n(6656);
			const a = n(9711);
			const c = n(133);
			const u = n(3307);
			const s = i('wks');
			const l = r.Symbol;
			const f = u ? l : (l && l.withoutSetter) || a;
			t.exports = (t) => (o(s, t) || (c && o(l, t) ? (s[t] = l[t]) : (s[t] = f('Symbol.' + t))), s[t]);
		},
		1361: function (t) {
			t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
		},
		2222: function (t, e, n) {
			'use strict';
			const r = n(2109);
			const i = n(7293);
			const o = n(3157);
			const a = n(111);
			const c = n(7908);
			const u = n(7466);
			const s = n(6135);
			const l = n(5417);
			const f = n(1194);
			const p = n(5112);
			const d = n(7392);
			const h = p('isConcatSpreadable');
			const v = 9007199254740991;
			const g = 'Maximum allowed index exceeded';

			const m =
				d >= 51 ||
				!i(() => {
					const t = [];
					return (t[h] = !1), t.concat()[0] !== t;
				});

			const y = f('concat');

			const k = (t) => {
				if (!a(t)) return !1;
				const e = t[h];
				return void 0 !== e ? !!e : o(t);
			};

			r(
				{target: 'Array', proto: !0, forced: !m || !y},
				{
					concat(t) {
						let e;
						let n;
						let r;
						let i;
						let o;
						const a = c(this);
						const f = l(a, 0);
						let p = 0;
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
			const r = n(2109);
			const i = n(2092).filter;
			const o = n(1194);
			const a = n(9207);
			const c = o('filter');
			const u = a('filter');
			r(
				{target: 'Array', proto: !0, forced: !c || !u},
				{
					filter(t) {
						return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		9826: function (t, e, n) {
			'use strict';
			const r = n(2109);
			const i = n(2092).find;
			const o = n(1223);
			const a = n(9207);
			const c = 'find';
			let u = !0;
			const s = a(c);
			c in [] &&
				Array(1).find(() => {
					u = !1;
				}),
				r(
					{target: 'Array', proto: !0, forced: u || !s},
					{
						find(t) {
							return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
						},
					}
				),
				o(c);
		},
		1038: function (t, e, n) {
			const r = n(2109);
			const i = n(8457);
			r(
				{
					target: 'Array',
					stat: !0,
					forced: !n(7072)((t) => {
						Array.from(t);
					}),
				},
				{from: i}
			);
		},
		6699: function (t, e, n) {
			'use strict';
			const r = n(2109);
			const i = n(1318).includes;
			const o = n(1223);
			r(
				{target: 'Array', proto: !0, forced: !n(9207)('indexOf', {ACCESSORS: !0, 1: 0})},
				{
					includes(t) {
						return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			),
				o('includes');
		},
		2772: function (t, e, n) {
			'use strict';
			const r = n(2109);
			const i = n(1318).indexOf;
			const o = n(9341);
			const a = n(9207);
			const c = [].indexOf;
			const u = !!c && 1 / [1].indexOf(1, -0) < 0;
			const s = o('indexOf');
			const l = a('indexOf', {ACCESSORS: !0, 1: 0});
			r(
				{target: 'Array', proto: !0, forced: u || !s || !l},
				{
					indexOf(t) {
						return u
							? c.apply(this, arguments) || 0
							: i(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		6992: function (t, e, n) {
			'use strict';
			const r = n(5656);
			const i = n(1223);
			const o = n(7497);
			const a = n(9909);
			const c = n(654);
			const u = 'Array Iterator';
			const s = a.set;
			const l = a.getterFor(u);
			(t.exports = c(
				Array,
				'Array',
				function (t, e) {
					s(this, {type: u, target: r(t), index: 0, kind: e});
				},
				function () {
					const t = l(this);
					const e = t.target;
					const n = t.kind;
					const r = t.index++;
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
			const r = n(2109);
			const i = n(8361);
			const o = n(5656);
			const a = n(9341);
			const c = [].join;
			const u = i != Object;
			const s = a('join', ',');
			r(
				{target: 'Array', proto: !0, forced: u || !s},
				{
					join(t) {
						return c.call(o(this), void 0 === t ? ',' : t);
					},
				}
			);
		},
		7042: function (t, e, n) {
			'use strict';
			const r = n(2109);
			const i = n(111);
			const o = n(3157);
			const a = n(1400);
			const c = n(7466);
			const u = n(5656);
			const s = n(6135);
			const l = n(5112);
			const f = n(1194);
			const p = n(9207);
			const d = f('slice');
			const h = p('slice', {ACCESSORS: !0, 0: 0, 1: 2});
			const v = l('species');
			const g = [].slice;
			const m = Math.max;
			r(
				{target: 'Array', proto: !0, forced: !d || !h},
				{
					slice(t, e) {
						let n;
						let r;
						let l;
						const f = u(this);
						const p = c(f.length);
						let d = a(t, p);
						const h = a(void 0 === e ? p : e, p);
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
			const r = n(9781);
			const i = n(3070).f;
			const o = Function.prototype;
			const a = o.toString;
			const c = /^\s*function ([^ (]*)/;
			const u = 'name';
			r &&
				!(u in o) &&
				i(o, u, {
					configurable: !0,
					get() {
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
			const r = n(7710);
			const i = n(5631);
			t.exports = r(
				'Map',
				(t) =>
					function (...args) {
						return t(this, args.length ? args[0] : void 0);
					},
				i
			);
		},
		3321: function (t, e, n) {
			const r = n(2109);
			const i = n(9781);
			r({target: 'Object', stat: !0, forced: !i, sham: !i}, {defineProperties: n(6048)});
		},
		9070: function (t, e, n) {
			const r = n(2109);
			const i = n(9781);
			r({target: 'Object', stat: !0, forced: !i, sham: !i}, {defineProperty: n(3070).f});
		},
		9720: function (t, e, n) {
			const r = n(2109);
			const i = n(4699).entries;
			r(
				{target: 'Object', stat: !0},
				{
					entries(t) {
						return i(t);
					},
				}
			);
		},
		5003: function (t, e, n) {
			const r = n(2109);
			const i = n(7293);
			const o = n(5656);
			const a = n(1236).f;
			const c = n(9781);

			const u = i(() => {
				a(1);
			});

			r(
				{target: 'Object', stat: !0, forced: !c || u, sham: !c},
				{
					getOwnPropertyDescriptor(t, e) {
						return a(o(t), e);
					},
				}
			);
		},
		9337: function (t, e, n) {
			const r = n(2109);
			const i = n(9781);
			const o = n(3887);
			const a = n(5656);
			const c = n(1236);
			const u = n(6135);
			r(
				{target: 'Object', stat: !0, sham: !i},
				{
					getOwnPropertyDescriptors(t) {
						for (var e, n, r = a(t), i = c.f, s = o(r), l = {}, f = 0; s.length > f; )
							void 0 !== (n = i(r, (e = s[f++]))) && u(l, e, n);
						return l;
					},
				}
			);
		},
		489: function (t, e, n) {
			const r = n(2109);
			const i = n(7293);
			const o = n(7908);
			const a = n(9518);
			const c = n(8544);
			r(
				{
					target: 'Object',
					stat: !0,
					forced: i(() => {
						a(1);
					}),
					sham: !c,
				},
				{
					getPrototypeOf(t) {
						return a(o(t));
					},
				}
			);
		},
		7941: function (t, e, n) {
			const r = n(2109);
			const i = n(7908);
			const o = n(1956);
			r(
				{
					target: 'Object',
					stat: !0,
					forced: n(7293)(() => {
						o(1);
					}),
				},
				{
					keys(t) {
						return o(i(t));
					},
				}
			);
		},
		8304: function (t, e, n) {
			n(2109)({target: 'Object', stat: !0}, {setPrototypeOf: n(7674)});
		},
		1539: function (t, e, n) {
			const r = n(1694);
			const i = n(1320);
			const o = n(288);
			r || i(Object.prototype, 'toString', o, {unsafe: !0});
		},
		8674: function (t, e, n) {
			'use strict';
			let r;
			let i;
			let o;
			let a;
			const c = n(2109);
			const u = n(1913);
			const s = n(7854);
			const l = n(5005);
			const f = n(3366);
			const p = n(1320);
			const d = n(2248);
			const h = n(8003);
			const v = n(6340);
			const g = n(111);
			const m = n(3099);
			const y = n(5787);
			const k = n(4326);
			const b = n(2788);
			const A = n(408);
			const w = n(7072);
			const x = n(6707);
			const I = n(261).set;
			const C = n(5948);
			const B = n(9478);
			const _ = n(842);
			const S = n(8523);
			const O = n(2534);
			const P = n(9909);
			const W = n(4705);
			const E = n(5112);
			const j = n(7392);
			const R = E('species');
			const $ = 'Promise';
			const T = P.get;
			const L = P.set;
			const N = P.getterFor($);
			let M = f;
			const U = s.TypeError;
			const Q = s.document;
			const D = s.process;
			const q = l('fetch');
			let F = S.f;
			const z = F;
			const Y = 'process' == k(D);
			const G = !!(Q && Q.createEvent && s.dispatchEvent);
			const H = 'unhandledrejection';

			const J = W($, () => {
				if (!(b(M) !== String(M))) {
					if (66 === j) return !0;
					if (!Y && 'function' != typeof PromiseRejectionEvent) return !0;
				}
				if (u && !M.prototype.finally) return !0;
				if (j >= 51 && /native code/.test(M)) return !1;
				const t = M.resolve(1),
					e = (t) => {
						t(
							() => {},
							() => {}
						);
					};
				return ((t.constructor = {})[R] = e), !(t.then(() => {}) instanceof e);
			});

			const X =
				J ||
				!w((t) => {
					M.all(t).catch(() => {});
				});

			const Z = (t) => {
				let e;
				return !(!g(t) || 'function' != typeof (e = t.then)) && e;
			};

			const V = (t, e, n) => {
				if (!e.notified) {
					e.notified = !0;
					const r = e.reactions;
					C(() => {
						for (let i = e.value, o = 1 == e.state, a = 0; r.length > a; ) {
							let c;
							let u;
							let s;
							const l = r[a++];
							const f = o ? l.ok : l.fail;
							const p = l.resolve;
							const d = l.reject;
							const h = l.domain;
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
			};

			const K = (t, e, n) => {
				let r, i;
				G
					? (((r = Q.createEvent('Event')).promise = e),
					  (r.reason = n),
					  r.initEvent(t, !1, !0),
					  s.dispatchEvent(r))
					: (r = {promise: e, reason: n}),
					(i = s['on' + t]) ? i(r) : t === H && _('Unhandled promise rejection', n);
			};

			var tt = (t, e) => {
				I.call(s, () => {
					let n;
					const r = e.value;
					if (
						et(e) &&
						((n = O(() => {
							Y ? D.emit('unhandledRejection', r, t) : K(H, t, r);
						})),
						(e.rejection = Y || et(e) ? 2 : 1),
						n.error)
					)
						throw n.value;
				});
			};

			var et = (t) => 1 !== t.rejection && !t.parent;

			var nt = (t, e) => {
				I.call(s, () => {
					Y ? D.emit('rejectionHandled', t) : K('rejectionhandled', t, e.value);
				});
			};

			const rt = (t, e, n, r) => (i) => {
				t(e, n, i, r);
			};

			const it = (t, e, n, r) => {
				e.done || ((e.done = !0), r && (e = r), (e.value = n), (e.state = 2), V(t, e, !0));
			};

			const ot = (t, e, n, r) => {
				if (!e.done) {
					(e.done = !0), r && (e = r);
					try {
						if (t === n) throw U("Promise can't be resolved itself");
						const i = Z(n);
						i
							? C(() => {
									const r = {done: !1};
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
					const e = T(this);
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
					then(t, e) {
						const n = N(this);
						const r = F(x(this, M));
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
					catch(t) {
						return this.then(void 0, t);
					},
				})),
				(i = function () {
					const t = new r();
					const e = T(t);
					(this.promise = t), (this.resolve = rt(ot, t, e)), (this.reject = rt(it, t, e));
				}),
				(S.f = F = (t) => (t === M || t === o ? new i(t) : z(t))),
				u ||
					'function' != typeof f ||
					((a = f.prototype.then),
					p(
						f.prototype,
						'then',
						function (t, e) {
							const n = this;
							return new M((t, e) => {
								a.call(n, t, e);
							}).then(t, e);
						},
						{unsafe: !0}
					),
					'function' == typeof q &&
						c(
							{global: !0, enumerable: !0, forced: !0},
							{
								fetch(t) {
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
						reject(t) {
							const e = F(this);
							return e.reject.call(void 0, t), e.promise;
						},
					}
				),
				c(
					{target: $, stat: !0, forced: u || J},
					{
						resolve(t) {
							return B(u && this === o ? M : this, t);
						},
					}
				),
				c(
					{target: $, stat: !0, forced: X},
					{
						all(t) {
							const e = this;
							const n = F(e);
							const r = n.resolve;
							const i = n.reject;

							const o = O(() => {
								const n = m(e.resolve);
								const o = [];
								let a = 0;
								let c = 1;
								A(t, (t) => {
									const u = a++;
									let s = !1;
									o.push(void 0),
										c++,
										n.call(e, t).then((t) => {
											s || ((s = !0), (o[u] = t), --c || r(o));
										}, i);
								}),
									--c || r(o);
							});

							return o.error && i(o.value), n.promise;
						},
						race(t) {
							const e = this;
							const n = F(e);
							const r = n.reject;

							const i = O(() => {
								const i = m(e.resolve);
								A(t, (t) => {
									i.call(e, t).then(n.resolve, r);
								});
							});

							return i.error && r(i.value), n.promise;
						},
					}
				);
		},
		2419: function (t, e, n) {
			const r = n(2109);
			const i = n(5005);
			const o = n(3099);
			const a = n(9670);
			const c = n(111);
			const u = n(30);
			const s = n(7065);
			const l = n(7293);
			const f = i('Reflect', 'construct');

			const p = l(() => {
				function t() {}
				return !(f(() => {}, [], t) instanceof t);
			});

			const d = !l(() => {
				f(() => {});
			});

			const h = p || d;
			r(
				{target: 'Reflect', stat: !0, forced: h, sham: h},
				{
					construct(t, e) {
						o(t), a(e);
						const n = arguments.length < 3 ? t : o(arguments[2]);
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
							const r = [null];
							return r.push(...e), new (s.apply(t, r))();
						}
						const i = n.prototype;
						const l = u(c(i) ? i : Object.prototype);
						const h = Function.apply.call(t, l, e);
						return c(h) ? h : l;
					},
				}
			);
		},
		4603: function (t, e, n) {
			const r = n(9781);
			const i = n(7854);
			const o = n(4705);
			const a = n(9587);
			const c = n(3070).f;
			const u = n(8006).f;
			const s = n(7850);
			const l = n(7066);
			const f = n(2999);
			const p = n(1320);
			const d = n(7293);
			const h = n(9909).set;
			const v = n(6340);
			const g = n(5112)('match');
			const m = i.RegExp;
			const y = m.prototype;
			const k = /a/g;
			const b = /a/g;
			const A = new m(k) !== k;
			const w = f.UNSUPPORTED_Y;
			if (r && o('RegExp', !A || w || d(() => ((b[g] = !1), m(k) != k || m(b) == b || '/a/i' != m(k, 'i'))))) {
				for (
					var x = function (t, e) {
							let n;
							const r = this instanceof x;
							const i = s(t);
							const o = void 0 === e;
							if (!r && i && t.constructor === x && o) return t;
							A ? i && !o && (t = t.source) : t instanceof x && (o && (e = l.call(t)), (t = t.source)),
								w && (n = !!e && e.includes('y')) && (e = e.replace(/y/g, ''));
							const c = a(A ? new m(t, e) : m(t, e), r ? this : y, x);
							return w && n && h(c, {sticky: n}), c;
						},
						I = (t) => {
							(t in x) ||
								c(x, t, {
									configurable: !0,
									get() {
										return m[t];
									},
									set(e) {
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
			const r = n(2109);
			const i = n(2261);
			r({target: 'RegExp', proto: !0, forced: /./.exec !== i}, {exec: i});
		},
		9714: function (t, e, n) {
			'use strict';
			const r = n(1320);
			const i = n(9670);
			const o = n(7293);
			const a = n(7066);
			const c = 'toString';
			const u = RegExp.prototype;
			const s = u.toString;
			const l = o(() => '/a/b' != s.call({source: 'a', flags: 'b'}));
			const f = s.name != c;
			(l || f) &&
				r(
					RegExp.prototype,
					c,
					function () {
						const t = i(this);
						const e = String(t.source);
						const n = t.flags;
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
			const r = n(2109);
			const i = n(3929);
			const o = n(4488);
			r(
				{target: 'String', proto: !0, forced: !n(4964)('includes')},
				{
					includes(t) {
						return !!~String(o(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		8783: function (t, e, n) {
			'use strict';
			const r = n(8710).charAt;
			const i = n(9909);
			const o = n(654);
			const a = 'String Iterator';
			const c = i.set;
			const u = i.getterFor(a);
			o(
				String,
				'String',
				function (t) {
					c(this, {type: a, string: String(t), index: 0});
				},
				function () {
					let t;
					const e = u(this);
					const n = e.string;
					const i = e.index;
					return i >= n.length
						? {value: void 0, done: !0}
						: ((t = r(n, i)), (e.index += t.length), {value: t, done: !1});
				}
			);
		},
		4723: function (t, e, n) {
			'use strict';
			const r = n(7007);
			const i = n(9670);
			const o = n(7466);
			const a = n(4488);
			const c = n(1530);
			const u = n(7651);
			r('match', 1, (t, e, n) => [
				function (e) {
					const n = a(this);
					const r = null == e ? void 0 : e[t];
					return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
				},
				function (t) {
					const r = n(e, t, this);
					if (r.done) return r.value;
					const a = i(t);
					const s = String(this);
					if (!a.global) return u(a, s);
					const l = a.unicode;
					a.lastIndex = 0;
					for (var f, p = [], d = 0; null !== (f = u(a, s)); ) {
						const h = String(f[0]);
						(p[d] = h), '' === h && (a.lastIndex = c(s, o(a.lastIndex), l)), d++;
					}
					return 0 === d ? null : p;
				},
			]);
		},
		5306: function (t, e, n) {
			'use strict';
			const r = n(7007);
			const i = n(9670);
			const o = n(7908);
			const a = n(7466);
			const c = n(9958);
			const u = n(4488);
			const s = n(1530);
			const l = n(7651);
			const f = Math.max;
			const p = Math.min;
			const d = Math.floor;
			const h = /\$([$&'`]|\d\d?|<[^>]*>)/g;
			const v = /\$([$&'`]|\d\d?)/g;
			r('replace', 2, (t, e, n, r) => {
				const g = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
				const m = r.REPLACE_KEEPS_$0;
				const y = g ? '$' : '$0';
				return [
					function (n, r) {
						const i = u(this);
						const o = null == n ? void 0 : n[t];
						return void 0 !== o ? o.call(n, i, r) : e.call(String(i), n, r);
					},
					function (t, r) {
						if ((!g && m) || ('string' == typeof r && !r.includes(y))) {
							const o = n(e, t, this, r);
							if (o.done) return o.value;
						}
						const u = i(t);
						const d = String(this);
						const h = 'function' == typeof r;
						h || (r = String(r));
						const v = u.global;
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
							const W = w.groups;
							if (h) {
								const E = [_].concat(O, S, d);
								void 0 !== W && E.push(W);
								var j = String(r.apply(void 0, E));
							} else j = k(_, d, S, O, W, r);
							S >= C && ((I += d.slice(C, S) + j), (C = S + _.length));
						}
						return I + d.slice(C);
					},
				];
				function k(t, n, r, i, a, c) {
					const u = r + t.length;
					const s = i.length;
					let l = v;
					return (
						void 0 !== a && ((a = o(a)), (l = h)),
						e.call(c, l, (e, o) => {
							let c;
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
									const l = +o;
									if (0 === l) return e;
									if (l > s) {
										const f = d(l / 10);
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
			const r = n(2109);
			const i = n(3111).trim;
			r(
				{target: 'String', proto: !0, forced: n(6091)('trim')},
				{
					trim() {
						return i(this);
					},
				}
			);
		},
		1817: function (t, e, n) {
			'use strict';
			const r = n(2109);
			const i = n(9781);
			const o = n(7854);
			const a = n(6656);
			const c = n(111);
			const u = n(3070).f;
			const s = n(9920);
			const l = o.Symbol;
			if (i && 'function' == typeof l && (!('description' in l.prototype) || void 0 !== l().description)) {
				const f = {};

				const p = function (...args) {
					const t = args.length < 1 || void 0 === args[0] ? void 0 : String(args[0]),
						e = this instanceof p ? new l(t) : void 0 === t ? l() : l(t);
					return '' === t && (f[e] = !0), e;
				};

				s(p, l);
				const d = (p.prototype = l.prototype);
				d.constructor = p;
				const h = d.toString;
				const v = 'Symbol(test)' == String(l('test'));
				const g = /^Symbol\((.*)\)[^)]+$/;
				u(d, 'description', {
					configurable: !0,
					get() {
						const t = c(this) ? this.valueOf() : this;
						const e = h.call(t);
						if (a(f, t)) return '';
						const n = v ? e.slice(7, -1) : e.replace(g, '$1');
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
			const r = n(2109);
			const i = n(7854);
			const o = n(5005);
			const a = n(1913);
			const c = n(9781);
			const u = n(133);
			const s = n(3307);
			const l = n(7293);
			const f = n(6656);
			const p = n(3157);
			const d = n(111);
			const h = n(9670);
			const v = n(7908);
			const g = n(5656);
			const m = n(7593);
			const y = n(9114);
			const k = n(30);
			const b = n(1956);
			const A = n(8006);
			const w = n(1156);
			const x = n(5181);
			const I = n(1236);
			const C = n(3070);
			const B = n(5296);
			const _ = n(8880);
			const S = n(1320);
			const O = n(2309);
			const P = n(6200);
			const W = n(3501);
			const E = n(9711);
			const j = n(5112);
			const R = n(6061);
			const $ = n(7235);
			const T = n(8003);
			const L = n(9909);
			const N = n(2092).forEach;
			const M = P('hidden');
			const U = 'Symbol';
			const Q = j('toPrimitive');
			const D = L.set;
			const q = L.getterFor(U);
			const F = Object.prototype;
			let z = i.Symbol;
			const Y = o('JSON', 'stringify');
			const G = I.f;
			const H = C.f;
			const J = w.f;
			const X = B.f;
			const Z = O('symbols');
			const V = O('op-symbols');
			const K = O('string-to-symbol-registry');
			const tt = O('symbol-to-string-registry');
			const et = O('wks');
			const nt = i.QObject;
			let rt = !nt || !nt.prototype || !nt.prototype.findChild;

			const it =
				c &&
				l(
					() =>
						7 !=
						k(
							H({}, 'a', {
								get() {
									return H(this, 'a', {value: 7}).a;
								},
							})
						).a
				)
					? (t, e, n) => {
							const r = G(F, e);
							r && delete F[e], H(t, e, n), r && t !== F && H(F, e, r);
					  }
					: H;

			const ot = (t, e) => {
				const n = (Z[t] = k(z.prototype));
				return D(n, {type: U, tag: t, description: e}), c || (n.description = e), n;
			};

			const at = s ? (t) => 'symbol' == typeof t : (t) => Object(t) instanceof z;

			const ct = (t, e, n) => {
				t === F && ct(V, e, n), h(t);
				const r = m(e, !0);
				return (
					h(n),
					f(Z, r)
						? (n.enumerable
								? (f(t, M) && t[M][r] && (t[M][r] = !1), (n = k(n, {enumerable: y(0, !1)})))
								: (f(t, M) || H(t, M, y(1, {})), (t[M][r] = !0)),
						  it(t, r, n))
						: H(t, r, n)
				);
			};

			const ut = (t, e) => {
				h(t);
				const n = g(e),
					r = b(n).concat(pt(n));
				return (
					N(r, (e) => {
						(c && !st.call(n, e)) || ct(t, e, n[e]);
					}),
					t
				);
			};

			var st = function (t) {
				const e = m(t, !0),
					n = X.call(this, e);
				return (
					!(this === F && f(Z, e) && !f(V, e)) &&
					(!(n || !f(this, e) || !f(Z, e) || (f(this, M) && this[M][e])) || n)
				);
			};

			const lt = (t, e) => {
				const n = g(t),
					r = m(e, !0);
				if (n !== F || !f(Z, r) || f(V, r)) {
					const i = G(n, r);
					return !i || !f(Z, r) || (f(n, M) && n[M][r]) || (i.enumerable = !0), i;
				}
			};

			const ft = (t) => {
				const e = J(g(t)),
					n = [];
				return (
					N(e, (t) => {
						f(Z, t) || f(W, t) || n.push(t);
					}),
					n
				);
			};

			var pt = (t) => {
				const e = t === F,
					n = J(e ? V : g(t)),
					r = [];
				return (
					N(n, (t) => {
						!f(Z, t) || (e && !f(F, t)) || r.push(Z[t]);
					}),
					r
				);
			};

			(u ||
				((z = function (...args) {
					if (this instanceof z) throw TypeError('Symbol is not a constructor');
					const t = args.length && void 0 !== args[0] ? String(args[0]) : void 0;
					const e = E(t);

					const n = function (t) {
						this === F && n.call(V, t),
							f(this, M) && f(this[M], e) && (this[M][e] = !1),
							it(this, e, y(1, t));
					};

					return c && rt && it(F, e, {configurable: !0, set: n}), ot(e, t);
				}),
				S(z.prototype, 'toString', function () {
					return q(this).tag;
				}),
				S(z, 'withoutSetter', (t) => ot(E(t), t)),
				(B.f = st),
				(C.f = ct),
				(I.f = lt),
				(A.f = w.f = ft),
				(x.f = pt),
				(R.f = (t) => ot(j(t), t)),
				c &&
					(H(z.prototype, 'description', {
						configurable: !0,
						get() {
							return q(this).description;
						},
					}),
					a || S(F, 'propertyIsEnumerable', st, {unsafe: !0}))),
			r({global: !0, wrap: !0, forced: !u, sham: !u}, {Symbol: z}),
			N(b(et), (t) => {
				$(t);
			}),
			r(
				{target: U, stat: !0, forced: !u},
				{
					for(t) {
						const e = String(t);
						if (f(K, e)) return K[e];
						const n = z(e);
						return (K[e] = n), (tt[n] = e), n;
					},
					keyFor(t) {
						if (!at(t)) throw TypeError(t + ' is not a symbol');
						if (f(tt, t)) return tt[t];
					},
					useSetter() {
						rt = !0;
					},
					useSimple() {
						rt = !1;
					},
				}
			),
			r(
				{target: 'Object', stat: !0, forced: !u, sham: !c},
				{
					create(t, e) {
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
					forced: l(() => {
						x.f(1);
					}),
				},
				{
					getOwnPropertySymbols(t) {
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
							l(() => {
								const t = z();
								return '[null]' != Y([t]) || '{}' != Y({a: t}) || '{}' != Y(Object(t));
							}),
					},
					{
						stringify(t, e, n) {
							for (var r, i = [t], o = 1; arguments.length > o; ) i.push(arguments[o++]);
							if (((r = e), (d(e) || void 0 !== t) && !at(t)))
								return (
									p(e) ||
										(e = function (t, e) {
											if (('function' == typeof r && (e = r.call(this, t, e)), !at(e))) return e;
										}),
									(i[1] = e),
									Y(...i)
								);
						},
					}
				);
			z.prototype[Q] || _(z.prototype, Q, z.prototype.valueOf), T(z, U), (W[M] = !0);
		},
		4747: function (t, e, n) {
			const r = n(7854);
			const i = n(8324);
			const o = n(8533);
			const a = n(8880);
			for (const c in i) {
				const u = r[c];
				const s = u && u.prototype;
				if (s && s.forEach !== o)
					try {
						a(s, 'forEach', o);
					} catch (t) {
						s.forEach = o;
					}
			}
		},
		3948: function (t, e, n) {
			const r = n(7854);
			const i = n(8324);
			const o = n(6992);
			const a = n(8880);
			const c = n(5112);
			const u = c('iterator');
			const s = c('toStringTag');
			const l = o.values;
			for (const f in i) {
				const p = r[f];
				const d = p && p.prototype;
				if (d) {
					if (d[u] !== l)
						try {
							a(d, u, l);
						} catch (t) {
							d[u] = l;
						}
					if ((d[s] || a(d, s, f), i[f]))
						for (const h in o)
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
			const r = n(2109);
			const i = n(5005);
			const o = n(590);
			const a = n(1320);
			const c = n(2248);
			const u = n(8003);
			const s = n(4994);
			const l = n(9909);
			const f = n(5787);
			const p = n(6656);
			const d = n(9974);
			const h = n(648);
			const v = n(9670);
			const g = n(111);
			const m = n(30);
			const y = n(9114);
			const k = n(8554);
			const b = n(1246);
			const A = n(5112);
			const w = i('fetch');
			const x = i('Headers');
			const I = A('iterator');
			const C = 'URLSearchParams';
			const B = 'URLSearchParamsIterator';
			const _ = l.set;
			const S = l.getterFor(C);
			const O = l.getterFor(B);
			const P = /\+/g;
			const W = Array(4);
			const E = (t) => W[t - 1] || (W[t - 1] = RegExp('((?:%[\\da-f]{2}){' + t + '})', 'gi'));

			const j = (t) => {
				try {
					return decodeURIComponent(t);
				} catch (e) {
					return t;
				}
			};

			const R = (t) => {
				let e = t.replace(P, ' '),
					n = 4;
				try {
					return decodeURIComponent(e);
				} catch (t) {
					for (; n; ) e = e.replace(E(n--), j);
					return e;
				}
			};

			const $ = /[!'()~]|%20/g;
			const T = {'!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+'};
			const L = (t) => T[t];
			const N = (t) => encodeURIComponent(t).replace($, L);

			const M = (t, e) => {
				if (e)
					for (let n, r, i = e.split('&'), o = 0; o < i.length; )
						(n = i[o++]).length && ((r = n.split('=')), t.push({key: R(r.shift()), value: R(r.join('='))}));
			};

			const U = function (t) {
				(this.entries.length = 0), M(this.entries, t);
			};

			const Q = (t, e) => {
				if (t < e) throw TypeError('Not enough arguments');
			};

			const D = s(
				function (t, e) {
					_(this, {type: B, iterator: k(S(t).entries), kind: e});
				},
				'Iterator',
				function () {
					const t = O(this),
						e = t.kind,
						n = t.iterator.next(),
						r = n.value;
					return n.done || (n.value = 'keys' === e ? r.key : 'values' === e ? r.value : [r.key, r.value]), n;
				}
			);

			const q = function (...args) {
				f(this, q, C);
				let t;
				let e;
				let n;
				let r;
				let i;
				let o;
				let a;
				let c;
				let u;
				const s = args.length > 0 ? args[0] : void 0;
				const l = this;
				const d = [];
				if ((_(l, {type: C, entries: d, updateURL() {}, updateSearchParams: U}), void 0 !== s))
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
			};

			const F = q.prototype;
			c(
				F,
				{
					append(t, e) {
						Q(arguments.length, 2);
						const n = S(this);
						n.entries.push({key: t + '', value: e + ''}), n.updateURL();
					},
					delete(t) {
						Q(arguments.length, 1);
						for (var e = S(this), n = e.entries, r = t + '', i = 0; i < n.length; )
							n[i].key === r ? n.splice(i, 1) : i++;
						e.updateURL();
					},
					get(t) {
						Q(arguments.length, 1);
						for (let e = S(this).entries, n = t + '', r = 0; r < e.length; r++)
							if (e[r].key === n) return e[r].value;
						return null;
					},
					getAll(t) {
						Q(arguments.length, 1);
						for (var e = S(this).entries, n = t + '', r = [], i = 0; i < e.length; i++)
							e[i].key === n && r.push(e[i].value);
						return r;
					},
					has(t) {
						Q(arguments.length, 1);
						for (let e = S(this).entries, n = t + '', r = 0; r < e.length; )
							if (e[r++].key === n) return !0;
						return !1;
					},
					set(t, e) {
						Q(arguments.length, 1);
						for (
							var n, r = S(this), i = r.entries, o = !1, a = t + '', c = e + '', u = 0;
							u < i.length;
							u++
						)
							(n = i[u]).key === a && (o ? i.splice(u--, 1) : ((o = !0), (n.value = c)));
						o || i.push({key: a, value: c}), r.updateURL();
					},
					sort() {
						let t;
						let e;
						let n;
						const r = S(this);
						const i = r.entries;
						const o = i.slice();
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
					forEach(t) {
						for (
							let e,
								n = S(this).entries,
								r = d(t, arguments.length > 1 ? arguments[1] : void 0, 3),
								i = 0;
							i < n.length;

						)
							r((e = n[i++]).value, e.key, this);
					},
					keys() {
						return new D(this, 'keys');
					},
					values() {
						return new D(this, 'values');
					},
					entries() {
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
							fetch(t) {
								let e;
								let n;
								let r;
								const i = [t];
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
			let r;
			const i = n(2109);
			const o = n(9781);
			const a = n(590);
			const c = n(7854);
			const u = n(6048);
			const s = n(1320);
			const l = n(5787);
			const f = n(6656);
			const p = n(1574);
			const d = n(8457);
			const h = n(8710).codeAt;
			const v = n(3197);
			const g = n(8003);
			const m = n(1637);
			const y = n(9909);
			const k = c.URL;
			const b = m.URLSearchParams;
			const A = m.getState;
			const w = y.set;
			const x = y.getterFor('URL');
			const I = Math.floor;
			const C = Math.pow;
			const B = 'Invalid scheme';
			const _ = 'Invalid host';
			const S = 'Invalid port';
			const O = /[A-Za-z]/;
			const P = /[\d+-.A-Za-z]/;
			const W = /\d/;
			const E = /^(0x|0X)/;
			const j = /^[0-7]+$/;
			const R = /^\d+$/;
			const $ = /^[\dA-Fa-f]+$/;
			const T = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
			const L = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
			const N = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
			const M = /[\u0009\u000A\u000D]/g;

			const U = (t, e) => {
				let n, r, i;
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
			};

			var Q = (t) => {
				let e;
				let n;
				let r;
				let i;
				let o;
				let a;
				let c;
				const u = t.split('.');
				if ((u.length && '' == u[u.length - 1] && u.pop(), (e = u.length) > 4)) return t;
				for (n = [], r = 0; r < e; r++) {
					if ('' == (i = u[r])) return t;
					if (
						((o = 10),
						i.length > 1 && '0' == i.charAt(0) && ((o = E.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
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
			};

			var D = (t) => {
				let e;
				let n;
				let r;
				let i;
				let o;
				let a;
				let c;
				const u = [0, 0, 0, 0, 0, 0, 0, 0];
				let s = 0;
				let l = null;
				let f = 0;
				const p = () => t.charAt(f);
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
			};

			const q = (t) => {
				let e, n, r, i;
				if ('number' == typeof t) {
					for (e = [], n = 0; n < 4; n++) e.unshift(t % 256), (t = I(t / 256));
					return e.join('.');
				}
				if ('object' == typeof t) {
					for (
						e = '',
							r = ((t) => {
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
			};

			var F = {};
			const z = p({}, F, {' ': 1, '"': 1, '<': 1, '>': 1, '`': 1});
			const Y = p({}, z, {'#': 1, '?': 1, '{': 1, '}': 1});
			const G = p({}, Y, {'/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1});

			var H = (t, e) => {
				const n = h(t, 0);
				return n > 32 && n < 127 && !f(e, t) ? t : encodeURIComponent(t);
			};

			const J = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443};
			var X = (t) => f(J, t.scheme);
			const Z = (t) => '' != t.username || '' != t.password;
			const V = (t) => !t.host || t.cannotBeABaseURL || 'file' == t.scheme;

			const K = (t, e) => {
				let n;
				return 2 == t.length && O.test(t.charAt(0)) && (':' == (n = t.charAt(1)) || (!e && '|' == n));
			};

			const tt = (t) => {
				let e;
				return (
					t.length > 1 &&
					K(t.slice(0, 2)) &&
					(2 == t.length || '/' === (e = t.charAt(2)) || '\\' === e || '?' === e || '#' === e)
				);
			};

			const et = (t) => {
				const e = t.path,
					n = e.length;
				!n || ('file' == t.scheme && 1 == n && K(e[0], !0)) || e.pop();
			};

			const nt = (t) => '.' === t || '%2e' === t.toLowerCase();
			const rt = {};
			const it = {};
			const ot = {};
			const at = {};
			const ct = {};
			const ut = {};
			const st = {};
			const lt = {};
			const ft = {};
			const pt = {};
			const dt = {};
			const ht = {};
			const vt = {};
			const gt = {};
			const mt = {};
			const yt = {};
			const kt = {};
			const bt = {};
			const At = {};
			const wt = {};
			const xt = {};

			const It = (t, e, n, i) => {
				let o,
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
								if (((t.scheme = h), n)) return void (X(t) && J[t.scheme] == t.port && (t.port = null));
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

								for (const k of c) {
									if (':' != k || m) {
										const b = H(k, G);
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
										const A = parseInt(h, 10);
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
			};

			const Ct = function (t) {
				let e;
				let n;
				const r = l(this, Ct, 'URL');
				const i = arguments.length > 1 ? arguments[1] : void 0;
				const a = String(t);
				const c = w(r, {type: 'URL'});
				if (void 0 !== i)
					if (i instanceof Ct) e = x(i);
					else if ((n = It((e = {}), String(i)))) throw TypeError(n);
				if ((n = It(c, a, null, e))) throw TypeError(n);
				const u = (c.searchParams = new b()),
					s = A(u);
				s.updateSearchParams(c.query),
					(s.updateURL = () => {
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
			};

			const Bt = Ct.prototype;

			var _t = function () {
				const t = x(this);
				const e = t.scheme;
				const n = t.username;
				const r = t.password;
				const i = t.host;
				const o = t.port;
				const a = t.path;
				const c = t.query;
				const u = t.fragment;
				let s = e + ':';
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
			};

			var St = function () {
				const t = x(this),
					e = t.scheme,
					n = t.port;
				if ('blob' == e)
					try {
						return new URL(e.path[0]).origin;
					} catch (t) {
						return 'null';
					}
				return 'file' != e && X(t) ? e + '://' + q(t.host) + (null !== n ? ':' + n : '') : 'null';
			};

			var Ot = function () {
				return x(this).scheme + ':';
			};

			var Pt = function () {
				return x(this).username;
			};

			var Wt = function () {
				return x(this).password;
			};

			var Et = function () {
				const t = x(this),
					e = t.host,
					n = t.port;
				return null === e ? '' : null === n ? q(e) : q(e) + ':' + n;
			};

			var jt = function () {
				const t = x(this).host;
				return null === t ? '' : q(t);
			};

			var Rt = function () {
				const t = x(this).port;
				return null === t ? '' : String(t);
			};

			var $t = function () {
				const t = x(this),
					e = t.path;
				return t.cannotBeABaseURL ? e[0] : e.length ? '/' + e.join('/') : '';
			};

			var Tt = function () {
				const t = x(this).query;
				return t ? '?' + t : '';
			};

			var Lt = function () {
				return x(this).searchParams;
			};

			var Nt = function () {
				const t = x(this).fragment;
				return t ? '#' + t : '';
			};

			const Mt = (t, e) => ({
				get: t,
				set: e,
				configurable: !0,
				enumerable: !0,
			});

			if (
				(o &&
					u(Bt, {
						href: Mt(_t, function (t) {
							const e = x(this);
							const n = String(t);
							const r = It(e, n);
							if (r) throw TypeError(r);
							A(e.searchParams).updateSearchParams(e.query);
						}),
						origin: Mt(St),
						protocol: Mt(Ot, function (t) {
							const e = x(this);
							It(e, String(t) + ':', rt);
						}),
						username: Mt(Pt, function (t) {
							const e = x(this);
							const n = d(String(t));
							if (!V(e)) {
								e.username = '';
								for (let r = 0; r < n.length; r++) e.username += H(n[r], G);
							}
						}),
						password: Mt(Wt, function (t) {
							const e = x(this);
							const n = d(String(t));
							if (!V(e)) {
								e.password = '';
								for (let r = 0; r < n.length; r++) e.password += H(n[r], G);
							}
						}),
						host: Mt(Et, function (t) {
							const e = x(this);
							e.cannotBeABaseURL || It(e, String(t), dt);
						}),
						hostname: Mt(jt, function (t) {
							const e = x(this);
							e.cannotBeABaseURL || It(e, String(t), ht);
						}),
						port: Mt(Rt, function (t) {
							const e = x(this);
							V(e) || ('' == (t = String(t)) ? (e.port = null) : It(e, t, vt));
						}),
						pathname: Mt($t, function (t) {
							const e = x(this);
							e.cannotBeABaseURL || ((e.path = []), It(e, t + '', kt));
						}),
						search: Mt(Tt, function (t) {
							const e = x(this);
							'' == (t = String(t))
								? (e.query = null)
								: ('?' == t.charAt(0) && (t = t.slice(1)), (e.query = ''), It(e, t, wt)),
								A(e.searchParams).updateSearchParams(e.query);
						}),
						searchParams: Mt(Lt),
						hash: Mt(Nt, function (t) {
							const e = x(this);
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
				const Ut = k.createObjectURL;
				const Qt = k.revokeObjectURL;
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
		3645: function (t) {
			'use strict';
			t.exports = (t) => {
				const e = [];
				return (
					(e.toString = function () {
						return this.map((e) => {
							let n = '';
							const r = void 0 !== e[5];
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
						const a = {};
						if (r)
							for (let c = 0; c < this.length; c++) {
								const u = this[c][0];
								null != u && (a[u] = !0);
							}
						for (let s = 0; s < t.length; s++) {
							const l = [].concat(t[s]);
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
			t.exports = (t) => {
				const e = t[1];
				const n = t[3];
				if (!n) return e;
				if ('function' == typeof btoa) {
					const r = btoa(unescape(encodeURIComponent(JSON.stringify(n))));
					const i = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(r);
					const o = '/*# '.concat(i, ' */');
					const a = n.sources.map((t) => '/*# sourceURL='.concat(n.sourceRoot || '').concat(t, ' */'));
					return [e].concat(a).concat([o]).join('\n');
				}
				return [e].join('\n');
			};
		},
		5666: function (t) {
			const e = ((t) => {
				'use strict';
				let e;
				const n = Object.prototype;
				const r = n.hasOwnProperty;
				const i = 'function' == typeof Symbol ? Symbol : {};
				const o = i.iterator || '@@iterator';
				const a = i.asyncIterator || '@@asyncIterator';
				const c = i.toStringTag || '@@toStringTag';
				function u(t, e, n) {
					return (
						Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					u({}, '');
				} catch (t) {
					u = (t, e, n) => (t[e] = n);
				}
				function s(t, e, n, r) {
					const i = e && e.prototype instanceof g ? e : g;
					const o = Object.create(i.prototype);
					const a = new S(r || []);
					return (
						(o._invoke = ((t, e, n) => {
							let r = f;
							return (i, o) => {
								if (r === d) throw new Error('Generator is already running');
								if (r === h) {
									if ('throw' === i) throw o;
									return P();
								}
								for (n.method = i, n.arg = o; ; ) {
									const a = n.delegate;
									if (a) {
										const c = C(a, n);
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
									const u = l(t, e, n);
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
				var f = 'suspendedStart';
				var p = 'suspendedYield';
				var d = 'executing';
				var h = 'completed';
				var v = {};
				function g() {}
				function m() {}
				function y() {}
				let k = {};
				u(k, o, function () {
					return this;
				});
				const b = Object.getPrototypeOf;
				const A = b && b(b(O([])));
				A && A !== n && r.call(A, o) && (k = A);
				const w = (y.prototype = g.prototype = Object.create(k));
				function x(t) {
					['next', 'throw', 'return'].forEach((e) => {
						u(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function I(t, e) {
					function n(i, o, a, c) {
						const u = l(t[i], t, o);
						if ('throw' !== u.type) {
							const s = u.arg;
							const f = s.value;
							return f && 'object' == typeof f && r.call(f, '__await')
								? e.resolve(f.__await).then(
										(t) => {
											n('next', t, a, c);
										},
										(t) => {
											n('throw', t, a, c);
										}
								  )
								: e.resolve(f).then(
										(t) => {
											(s.value = t), a(s);
										},
										(t) => n('throw', t, a, c)
								  );
						}
						c(u.arg);
					}
					let i;
					this._invoke = (t, r) => {
						function o() {
							return new e((e, i) => {
								n(t, r, e, i);
							});
						}
						return (i = i ? i.then(o, o) : o());
					};
				}
				function C(t, n) {
					const r = t.iterator[n.method];
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
					const i = l(r, t.iterator, n.arg);
					if ('throw' === i.type) return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), v;
					const o = i.arg;
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
					const e = {tryLoc: t[0]};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					const e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function S(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(B, this), this.reset(!0);
				}
				function O(t) {
					if (t) {
						const n = t[o];
						if (n) return n.call(t);
						if ('function' == typeof t.next) return t;
						if (!isNaN(t.length)) {
							let i = -1;

							const a = function n() {
								for (; ++i < t.length; ) if (r.call(t, i)) return (n.value = t[i]), (n.done = !1), n;
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
					(t.isGeneratorFunction = (t) => {
						const e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(t.mark = (t) => (
						Object.setPrototypeOf
							? Object.setPrototypeOf(t, y)
							: ((t.__proto__ = y), u(t, c, 'GeneratorFunction')),
						(t.prototype = Object.create(w)),
						t
					)),
					(t.awrap = (t) => ({
						__await: t,
					})),
					x(I.prototype),
					u(I.prototype, a, function () {
						return this;
					}),
					(t.AsyncIterator = I),
					(t.async = (e, n, r, i, o) => {
						void 0 === o && (o = Promise);
						const a = new I(s(e, n, r, i), o);
						return t.isGeneratorFunction(n) ? a : a.next().then((t) => (t.done ? t.value : a.next()));
					}),
					x(w),
					u(w, c, 'Generator'),
					u(w, o, function () {
						return this;
					}),
					u(w, 'toString', () => '[object Generator]'),
					(t.keys = (t) => {
						const e = [];
						for (const n in t) e.push(n);
						return (
							e.reverse(),
							function n() {
								for (; e.length; ) {
									const r = e.pop();
									if (r in t) return (n.value = r), (n.done = !1), n;
								}
								return (n.done = !0), n;
							}
						);
					}),
					(t.values = O),
					(S.prototype = {
						constructor: S,
						reset(t) {
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
								for (const n in this)
									't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
						},
						stop() {
							this.done = !0;
							const t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException(t) {
							if (this.done) throw t;
							const n = this;
							function i(r, i) {
								return (
									(c.type = 'throw'),
									(c.arg = t),
									(n.next = r),
									i && ((n.method = 'next'), (n.arg = e)),
									!!i
								);
							}
							for (let o = this.tryEntries.length - 1; o >= 0; --o) {
								const a = this.tryEntries[o];
								var c = a.completion;
								if ('root' === a.tryLoc) return i('end');
								if (a.tryLoc <= this.prev) {
									const u = r.call(a, 'catchLoc');
									const s = r.call(a, 'finallyLoc');
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
						abrupt(t, e) {
							for (let n = this.tryEntries.length - 1; n >= 0; --n) {
								const i = this.tryEntries[n];
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
							const a = o ? o.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
							);
						},
						complete(t, e) {
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
						finish(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const n = this.tryEntries[e];
								if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), _(n), v;
							}
						},
						catch(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const n = this.tryEntries[e];
								if (n.tryLoc === t) {
									const r = n.completion;
									if ('throw' === r.type) {
										var i = r.arg;
										_(n);
									}
									return i;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield(t, n, r) {
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
			const e = [];
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
					const u = t[c];
					const s = r.base ? u[0] + r.base : u[0];
					const l = o[s] || 0;
					const f = ''.concat(s, ' ').concat(l);
					o[s] = l + 1;
					const p = n(f);
					const d = {css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5]};
					if (-1 !== p) e[p].references++, e[p].updater(d);
					else {
						const h = i(d, r);
						(r.byIndex = c), e.splice(c, 0, {identifier: f, updater: h, references: 1});
					}
					a.push(f);
				}
				return a;
			}
			function i(t, e) {
				const n = e.domAPI(e);
				n.update(t);
				return (e) => {
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
			t.exports = (t, i) => {
				let o = r((t = t || []), (i = i || {}));
				return (t = []) => {
					for (let a = 0; a < o.length; a++) {
						const c = n(o[a]);
						e[c].references--;
					}
					for (var u = r(t, i), s = 0; s < o.length; s++) {
						const l = n(o[s]);
						0 === e[l].references && (e[l].updater(), e.splice(l, 1));
					}
					o = u;
				};
			};
		},
		569: function (t) {
			'use strict';
			const e = {};
			t.exports = (t, n) => {
				const r = ((t) => {
					if (void 0 === e[t]) {
						let n = document.querySelector(t);
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
			t.exports = (t) => {
				const e = document.createElement('style');
				return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
			};
		},
		3565: function (t, e, n) {
			'use strict';
			t.exports = (t) => {
				const e = n.nc;
				e && t.setAttribute('nonce', e);
			};
		},
		7795: function (t) {
			'use strict';
			t.exports = (t) => {
				const e = t.insertStyleElement(t);
				return {
					update(n) {
						!((t, e, n) => {
							let r = '';
							n.supports && (r += '@supports ('.concat(n.supports, ') {')),
								n.media && (r += '@media '.concat(n.media, ' {'));
							const i = void 0 !== n.layer;
							i && (r += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')),
								(r += n.css),
								i && (r += '}'),
								n.media && (r += '}'),
								n.supports && (r += '}');
							const o = n.sourceMap;
							o &&
								'undefined' != typeof btoa &&
								(r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
									btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
									' */'
								)),
								e.styleTagTransform(r, t, e.options);
						})(e, t, n);
					},
					remove() {
						!((t) => {
							if (null === t.parentNode) return !1;
							t.parentNode.removeChild(t);
						})(e);
					},
				};
			};
		},
		4589: function (t) {
			'use strict';
			t.exports = (t, e) => {
				if (e.styleSheet) e.styleSheet.cssText = t;
				else {
					for (; e.firstChild; ) e.removeChild(e.firstChild);
					e.appendChild(document.createTextNode(t));
				}
			};
		},
	};
	const e = {};
	function n(r) {
		const i = e[r];
		if (void 0 !== i) return i.exports;
		const o = (e[r] = {id: r, exports: {}});
		return t[r](o, o.exports, n), o.exports;
	}
	(n.n = (t) => {
		const e = t && t.__esModule ? () => t.default : () => t;
		return n.d(e, {a: e}), e;
	}),
		(n.d = (t, e) => {
			for (const r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]});
		}),
		(n.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || new Function('return this')();
			} catch (t) {
				if ('object' == typeof window) return window;
			}
		})()),
		(n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
		(() => {
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
				for (const r of e) {
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}

			const e = (() => {
				function e() {
					let t, n, r;
					!((t, e) => {
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
				let n, r, i;
				return (
					(n = e),
					(r = [
						{
							key: 'isArticle',
							get() {
								return window.mw.config.get('wgIsArticle');
							},
						},
						{
							key: 'currentPageName',
							get() {
								return window.mw.config.get('wgPageName').replace(/ /g, '_');
							},
						},
						{
							key: 'articleId',
							get() {
								return window.mw.config.get('wgArticleId');
							},
						},
						{
							key: 'revisionId',
							get() {
								return window.mw.config.get('wgRevisionId');
							},
						},
						{
							key: 'latestRevisionId',
							get() {
								return window.mw.config.get('wgCurRevisionId');
							},
						},
						{
							key: 'articlePath',
							get() {
								return window.mw.config.get('wgArticlePath');
							},
						},
						{
							key: 'scriptPath',
							get() {
								return window.mw.config.get('wgScriptPath');
							},
						},
						{
							key: 'action',
							get() {
								return window.mw.config.get('wgAction');
							},
						},
						{
							key: 'skin',
							get() {
								return window.mw.config.get('skin');
							},
						},
						{
							key: 'userGroups',
							get() {
								return window.mw.config.get('wgUserGroups');
							},
						},
						{
							key: 'wikiId',
							get() {
								return window.mw.config.get('wgWikiID');
							},
						},
					]) && t(n.prototype, r),
					i && t(n, i),
					Object.defineProperty(n, 'prototype', {writable: !1}),
					e
				);
			})();

			const r = new e();
			function i(t, e) {
				return (
					((t) => {
						if (Array.isArray(t)) return t;
					})(t) ||
					((t, e) => {
						let n =
							null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
						if (null == n) return;
						let r;
						let i;
						const o = [];
						let a = !0;
						let c = !1;
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
					((t, e) => {
						if (!t) return;
						if ('string' == typeof t) return o(t, e);
						let n = Object.prototype.toString.call(t).slice(8, -1);
						'Object' === n && t.constructor && (n = t.constructor.name);
						if ('Map' === n || 'Set' === n) return Array.from(t);
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e);
					})(t, e) ||
					(() => {
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
					var c = t[o](a);
					var u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function c(t) {
				return function (...args) {
					const e = this;
					const n = args;
					return new Promise((r, i) => {
						const o = t.apply(e, n);
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
				for (const r of e) {
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}
			let s;
			let l;
			let f;

			const p = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t);
				}
				let e, n, o, a, s;
				return (
					(e = t),
					(n = null),
					(o = [
						{
							key: 'get',
							value:
								((s = c(
									regeneratorRuntime.mark(function e(n) {
										let i, o;
										return regeneratorRuntime.wrap((e) => {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															(i = new URL(t.base)),
															Object.keys(n).forEach((t) => {
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
										let o, a, c;
										return regeneratorRuntime.wrap((e) => {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															(o = new URL(t.base)),
															(a = new FormData()),
															Object.entries(n).forEach((t) => {
																const e = i(t, 2),
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
			const d = p;

			const h =
				(n(8304),
				n(489),
				n(4603),
				n(9714),
				n(2772),
				n(2419),
				n(1532),
				JSON.parse(
					'{"__language":"zh-cn","__author":["Eridanus Sora"],"__version":"212","unknown_error_name":"未知的错误名","api_unaccessiable":"无可用的API","api_unwriteable":"无可用的写入API","fail_to_get_timestamp":"无法获得页面编辑起始时间戳","fail_to_get_edittoken":"无法获得页面编辑权标","fail_to_get_pageinfo":"无法获得页面信息","not_autoconfirmed_user":"非自动确认用户","hit_abusefilter":"被防滥用过滤器拦截","unknown_edit_error":"未知编辑错误","unknown_edit_error_message":"未知编辑错误($1)","notitle":"无法编辑空标题页面","notext":"缺少页面内容","notoken":"空编辑权标","invalidsection":"段落编号非法","protectedtitle":"该标题被保护，无法创建","cantcreate":"无新建页面权限","cantcreate_anon":"匿名用户无新建页面权限","articleexists":"无法创建已经存在的页面","noimageredirect_anon":"匿名用户无新建文件重定向权限","noimageredirect":"无新建文件重定向权限","spamdetected":"文本含有敏感内容，被SPAM过滤器拦截","filtered":"编辑被过滤器拦截","contenttoobig":"文本超过最大长度限制","noedit_anon":"匿名用户无编辑页面权限","noedit":"无编辑页面权限","pagedeleted":"编辑时，此页面被删除","emptypage":"无法新建空内容页面","emptynewsection":"无法新建空内容段落","editconflict":"编辑冲突，请手工检查页面当前内容与提交内容差异并修正后，刷新页面提交","revwrongpage":"编辑的修订版本与编辑的页面不匹配","undofailure":"由于存在冲突的中间版本，无法撤销编辑","missingtitle":"无法创建或编辑空标题页面","mustbeposted":"必须使用POST方式提交编辑","readapidenied":"无读取API使用权限","writeapidenied":"无通过API编辑页面权限","noapiwrite":"本Wiki未开启可用的写入API","badtoken":"非法的编辑权标","missingparam":"缺少必要参数，页面名和页面ID不能均为空","invalidparammix":"参数重复，页面名和页面ID不能同时给定","invalidtitle":"非法的标题","nosuchpageid":"不存在的页面ID","pagecannotexist":"该名称空间不允许新建一般页面","nosuchrevid":"不存在的修订版本","badmd5":"非法的MD5值","hookaborted":"编辑被扩展Hook拦截","parseerror":"无法解析页面文本","summaryrequired":"编辑摘要不能为空","blocked":"已被封禁","ratelimited":"达到操作速率上限，请稍后重试","unknownerror":"未知错误","nosuchsection":"无法编辑不存在的段落","sectionsnotsupported":"该页面不支持段落编辑","editnotsupported":"该页面不支持通过API编辑","appendnotsupported":"该页面无法在前后插入文本","redirect_appendonly":"在遵循重定向的情况下，只能进行前后插入或创建新段落","badformat":"文本格式错误","customcssprotected":"无法编辑用户CSS页","customjsprotected":"无法编辑用户JS页","cascadeprotected":"该页面被级联保护","network_edit_error":"由于网络原因编辑失败","redirect_to_summary":"重定向页面至[[$1]] // Wikiplus","redirect_from_summary":"将[[$1]]重定向至[[$2]] // Wikiplus","need_init":"页面类未加载完成","fail_to_get_wikitext":"无法获得页面文本","quickedit_topbtn":"快速编辑","quickedit_sectionbtn":"快速编辑","fail_to_init_quickedit":"无法加载快速编辑","back":"返回","goto_editbox":"到编辑框","summary_placehold":"请输入编辑摘要","submit":"提交","publish_page":"发布页面","publish_change":"发布更改","preview":"预览","cancel":"取消","mark_minoredit":"标记为小编辑","onclose_confirm":"[Wikiplus] 您确认要关闭/刷新页面吗？这会导致您的编辑数据丢失","fail_to_get_wikitext_when_edit":"无法获得页面文本以编辑","cant_parse_wikitext":"无法解析维基文本","loading_preview":"正在读取预览","submitting_edit":"正在提交编辑","edit_success":"编辑成功 用时$1ms","empty_page_confirm":"您向编辑函数传入了空内容参数 这将清空页面\\r\\n由于该行为危险 请将config参数的empty键值设定为true来确认","cross_page_edit":"编辑目标位于其他页面 正在获取基础信息","cross_page_edit_submit":"基础信息获取成功 正在提交编辑","cross_page_edit_error":"无法获得基础信息>.<","install_tip":"您是否允许Wikiplus采集非敏感数据用于改进Wikiplus及为当前Wiki：$1提供改进建议？","accept":"接受","decline":"拒绝","install_finish":"Wikiplus安装完毕","loading":"正在载入","cant_add_funcbtn":"无法增加功能按钮","wikiplus_settings":"Wikiplus设置","wikiplus_settings_desc":"请在下方按规范修改Wikiplus设置","wikiplus_settings_placeholder":"当前设置为空 请在此处按规范修改Wikiplus设置","wikiplus_settings_grammar_error":"设置存在语法错误 请检查后重试","wikiplus_settings_saved":"设置已保存","redirect_from":"将页面重定向至此","redirect_desc":"请输入要重定向至此的页面名","empty_input":"输入不能为空","redirect_saved":"重定向完成","uninited":"Wikiplus未加载完毕 请刷新重试","cant_parse_i18ncache":"无法解析多语言定义文件缓存","cant_load_language":"无法获取多语言定义文件","history_edit_warning":" // 正试图编辑历史版本 这将会应用到本页面的最新版本 请慎重提交","create_page_tip":"\x3c!-- 正在创建新页面 请删去此行注释后继续 --\x3e","continue":"仍然继续","default_summary_suffix":"// Edit via Wikiplus"}'
				));

			const v = JSON.parse(
				'{"__language":"en-us","__author":["Eridanus Sora","AnnAngela","YinYan"],"__version":"212","unknown_error_name":"Unknown error","api_unaccessiable":"API of this wiki is not available","api_unwriteable":"Write API of this wiki is not available","fail_to_get_timestamp":"Failed to get the timestamp of this page.","fail_to_get_edittoken":"Failed to get the EditToken of this page.","fail_to_get_pageinfo":"Failed to load infomation of this page","not_autoconfirmed_user":"You are not an autoconfiremd user","hit_abusefilter":"Your edit hit the abusefilter(s)","unknown_edit_error":"Unknown edit error","unknown_edit_error_message":"Unknown edit error($1)","notitle":"The title parameter must be set","notext":"The text parameter must be set","notoken":"The token parameter must be set","invalidsection":"The section parameter must be set to an integer or \'new\'","protectedtitle":"This title has been protected from creation","cantcreate":"You don\'t have permission to create new pages","cantcreate_anon":"Anonymous users can\'t create new pages","articleexists":"The article you tried to create has already existed","noimageredirect_anon":"Anonymous users can\'t create image redirects","noimageredirect":"You don\'t have the permission to create image redirects","spamdetected":"Your edit was rejected because it contained a spam fragment","filtered":"The filter callback function rejected your edit","contenttoobig":"The content you submitted exceeds the article size limit","noedit_anon":"Anonymous users can\'t edit pages","noedit":"You don\'t have the permission to edit pages","pagedeleted":"The page was deleted during your edit","emptypage":"Creating new, empty pages is not allowed","emptynewsection":"Creating empty new sections is not possible.","editconflict":"Edit Conflict! Don\'t panic. Please check the difference between your content below and the existing revision, then refresh the page to make another submit","revwrongpage":"The revision you are editing now is not one a valid reversions of this page","undofailure":"Undo failed due to conflicts.","missingtitle":"Missing title in your edit/creation","mustbeposted":"The edit must be submited by POST method","readapidenied":"Read API Denied","writeapidenied":"Write API Denied","noapiwrite":"No available write API in this wiki","badtoken":"Invalid EditToken","missingparam":"One of the parameters title, pageid is required","invalidparammix":"The parameters title, pageid can not be used together","invalidtitle":"Invalid page title","nosuchpageid":"Inexistent page ID","pagecannotexist":"No access to create a new page in this namespace","nosuchrevid":"Inexisting reversion ID","badmd5":"Invalid MD5","hookaborted":"Your edit was rejected by the hook(s)","parseerror":"Failed to parse the wikitext of this page","summaryrequired":"No summary in your edit","blocked":"You have been already BLOCKED","ratelimited":"You\'ve exceeded your rate limit. Please have a tea and try again later","unknownerror":"Unknown error","nosuchsection":"There is no such section","sectionsnotsupported":"Can\'t edit in this section","editnotsupported":"Can\'t edit in this section by writing section","appendnotsupported":"Can\'t append/prepend wikitext to this page","redirect_appendonly":"Only append/prepend can be made to this page because of the rules of the redirect page","badformat":"The requested serialization format can not be applied to the page\'s content model","customcssprotected":"You\'re not allowed to edit custom CSS pages","customjsprotected":"You\'re not allowed to edit custom JavaScript pages","cascadeprotected":"This page is under a cascading protection","network_edit_error":"Failed to edit this page because of network errors","redirect_to_summary":"Redirect to [[$1]] // Wikiplus","redirect_from_summary":"Redirect [[$1]] to [[$2]] // Wikiplus","need_init":"Wikiplus haven\'t been loaded completely. It\'s a rare occasion so you can try to refresh and try again.","fail_to_get_wikitext":"Failed to load the wikitext of this page","quickedit_topbtn":"QuickEdit","quickedit_sectionbtn":"QuickEdit","fail_to_init_quickedit":"Failed to initialize Wikiplus","back":"Back","goto_editbox":"Jump to editbox","summary_placehold":"Edit summary","submit":"Submit","publish_page":"Publish Page","publish_change":"Publish Changes","preview":"Preview","cancel":"Cancel","mark_minoredit":"Mark this edit as a minor edit","onclose_confirm":"[Wikiplus] Do you really want to close this page when you are still editing it, as you will lose all your unsaved work?","fail_to_get_wikitext_when_edit":"Failed to load wikitext for your edit","cant_parse_wikitext":"Failed to parse the wikitext","loading_preview":"Loading the preview","submitting_edit":"Submitting your edit","edit_success":"Your edit is submitted within $1ms","empty_page_confirm":"The wikitext in your edit is empty, which will empty this page.\\r\\nPlease set the value of key \\"empty\\" true to allow this kind of edits. (This is a tip for developers)","cross_page_edit":"The content you are editing belongs to another page, please wait...","cross_page_edit_submit":"Submitting your edit...","cross_page_edit_error":"Failed to load the infomation","install_tip":"Do you allow Wikiplus to collect insensitive data to help us develop Wikiplus and provide feedback to current site: $1 ?","accept":"Yes","decline":"No","install_finish":"Wikiplus is installed, enjoy it","loading":"Loading","cant_add_funcbtn":"Failed to add buttons for Wikiplus","wikiplus_settings":"Wikiplus Setting","wikiplus_settings_desc":"Please modify your setting according to the standards below","wikiplus_settings_placeholder":"Your setting is empty, please modify your setting according to the documentation.","wikiplus_settings_grammar_error":"Syntax error in your setting","wikiplus_settings_saved":"Your settings have been saved","redirect_from":"Redirect from","redirect_desc":"Which page do you want to redirect here?","empty_input":"Empty input","redirect_saved":"Redirection is finished","uninited":"Wikiplus is not completely initialized, please refeash this page","cant_parse_i18ncache":"Failed to parse the cache of i18n file","cant_load_language":"Failed to load i18n file","history_edit_warning":" // You are trying to edit a history revision of this page. This will apply to the latest revision. Please be careful.","create_page_tip":"\x3c!-- You are now creating a new page. Please delete this line and be careful. --\x3e","continue":"Continue anyway","default_summary_suffix":"// Edit via Wikiplus"}'
			);

			function g(t, e, n, r, i, o, a) {
				try {
					var c = t[o](a);
					var u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function m(t, e) {
				for (const r of e) {
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

			const k = (() => {
				function t() {
					let e;
					!((t, e) => {
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
							let n = JSON.parse(localStorage.getItem('Wikiplus_i18nCache')), r = 0, i = Object.keys(n);
							r < i.length;
							r++
						) {
							const o = i[r];
							'zh-cn' !== o && 'en-us' !== o && (this.i18nData[o] = n[o]);
						}
					} catch (t) {
						localStorage.setItem('Wikiplus_i18nCache', '{}');
					}
				}
				let e, n, r, i, o;
				return (
					(e = t),
					(n = [
						{
							key: 'translate',
							value(t) {
								const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
								let n = '';
								return (
									this.language in this.i18nData
										? t in this.i18nData[this.language]
											? (n = this.i18nData[this.language][t])
											: (this.loadLanguage(this.language),
											  (n = t in this.i18nData['en-us'] ? this.i18nData['en-us'][t] : t))
										: this.loadLanguage(this.language),
									e.length > 0 &&
										e.forEach((t, e) => {
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
									let n, r;
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
								(o = function (...args) {
									const t = this,
										e = args;
									return new Promise((n, r) => {
										const o = i.apply(t, e);
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
			})();

			const b = new k();
			function A(t) {
				return (
					(A =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => typeof t
							: (t) =>
									t &&
									'function' == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
										? 'symbol'
										: typeof t),
					A(t)
				);
			}
			function w(t, e) {
				for (const r of e) {
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
				return ((t) => {
					if (void 0 === t)
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t;
				})(t);
			}
			function B(t) {
				const e = 'function' == typeof Map ? new Map() : void 0;
				return (
					(B = (t) => {
						if (null === t || ((n = t), !Function.toString.call(n).includes('[native code]'))) return t;
						var n;
						if ('function' != typeof t)
							throw new TypeError('Super expression must either be null or a function');
						if (void 0 !== e) {
							if (e.has(t)) return e.get(t);
							e.set(t, r);
						}
						function r(...args) {
							return _(t, args, P(this).constructor);
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
						: (t, e, n) => {
								const r = [null];
								r.push(...e);
								const i = new (Function.bind.apply(t, r))();
								return n && O(i, n.prototype), i;
						  }),
					_(...arguments)
				);
			}
			function S() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
				} catch (t) {
					return !1;
				}
			}
			function O(t, e) {
				return (O = Object.setPrototypeOf || ((t, e) => ((t.__proto__ = e), t))), O(t, e);
			}
			function P(t) {
				return (
					(P = Object.setPrototypeOf
						? Object.getPrototypeOf
						: (t) => t.__proto__ || Object.getPrototypeOf(t)),
					P(t)
				);
			}

			const W = ((t) => {
				!((t, e) => {
					if ('function' != typeof e && null !== e)
						throw new TypeError('Super expression must either be null or a function');
					(t.prototype = Object.create(e && e.prototype, {
						constructor: {value: t, writable: !0, configurable: !0},
					})),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e && O(t, e);
				})(i, t);
				let e;
				let n;

				const r =
					((e = i),
					(n = S()),
					function (...args) {
						let t;
						const r = P(e);
						if (n) {
							const i = P(this).constructor;
							t = Reflect.construct(r, args, i);
						} else t = r.apply(this, args);
						return C(this, t);
					});

				function i(t, e) {
					let n;
					return I(this, i), ((n = r.call(this, t)).code = e), n;
				}
				return x(i);
			})(B(Error));

			const E = (() => {
				function t() {
					I(this, t);
				}
				return (
					x(t, null, [
						{
							key: 'debug',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : '';
								console.debug('[Wikiplus-DEBUG] '.concat(t));
							},
						},
						{
							key: 'info',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : '';
								console.info('[Wikiplus-INFO] '.concat(t));
							},
						},
						{
							key: 'error',
							value(t) {
								const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
								let n = b.translate(t);
								throw (
									(e.length > 0 &&
										e.forEach((t, e) => {
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
			})();

			const j = E;
			function R(t, e) {
				const n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					let r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((e) => Object.getOwnPropertyDescriptor(t, e).enumerable)), n.push(...r);
				}
				return n;
			}
			function T(t) {
				for (let e = 1; e < arguments.length; e++) {
					const n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? R(Object(n), !0).forEach((e) => {
								U(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						  : R(Object(n)).forEach((e) => {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
						    });
				}
				return t;
			}
			function L(t, e, n, r, i, o, a) {
				try {
					var c = t[o](a);
					var u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function N(t) {
				return function (...args) {
					const e = this;
					const n = args;
					return new Promise((r, i) => {
						const o = t.apply(e, n);
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
				for (const r of e) {
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

			const Q = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						U(this, 'pageInfoCache', {});
				}
				let e, n, i, o, a, c, u, s, l;
				return (
					(e = t),
					(n = [
						{
							key: 'getEditToken',
							value:
								((l = N(
									regeneratorRuntime.mark(function t() {
										let e;
										return regeneratorRuntime.wrap((t) => {
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
								function (...args) {
									return l.apply(this, args);
								}),
						},
						{
							key: 'getPageInfo',
							value:
								((s = N(
									regeneratorRuntime.mark(function t(e) {
										let n, r, i, o, a;
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
										let n, i, o;
										return regeneratorRuntime.wrap(
											(t) => {
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
										let n;
										let r;
										const i = arguments;
										return regeneratorRuntime.wrap(
											(t) => {
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
										let e;
										let n;
										let r;
										let i;
										let o;
										let a;
										let c;
										let u;
										let s;
										let l;
										const f = arguments;
										return regeneratorRuntime.wrap(
											(t) => {
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
								function (...args) {
									return a.apply(this, args);
								}),
						},
						{
							key: 'getLatestRevisionIdForPage',
							value:
								((o = N(
									regeneratorRuntime.mark(function t(e) {
										let n, r;
										return regeneratorRuntime.wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (t.next = 2), this.getPageInfo({title: e});
														case 2:
															return (
																(n = t.sent), (r = n.revisionId), t.abrupt('return', r)
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
			})();

			const D = new Q();
			function q(t, e) {
				const n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					let r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((e) => Object.getOwnPropertyDescriptor(t, e).enumerable)), n.push(...r);
				}
				return n;
			}
			function F(t) {
				for (let e = 1; e < arguments.length; e++) {
					const n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? q(Object(n), !0).forEach((e) => {
								H(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						  : q(Object(n)).forEach((e) => {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
						    });
				}
				return t;
			}
			function z(t, e, n, r, i, o, a) {
				try {
					var c = t[o](a);
					var u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function Y(t) {
				return function (...args) {
					const e = this;
					const n = args;
					return new Promise((r, i) => {
						const o = t.apply(e, n);
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
				for (const r of e) {
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

			const J = (() => {
				function t(e) {
					const n = e.title,
						r = e.revisionId;
					!((t, e) => {
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
				let e, n, r, i, o, a, c, u, s;
				return (
					(e = t),
					(n = [
						{
							key: 'init',
							value:
								((s = Y(
									regeneratorRuntime.mark(function t() {
										let e;
										let n;
										let r;
										let i;
										const o = arguments;
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
								function (...args) {
									return s.apply(this, args);
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
								function (...args) {
									return u.apply(this, args);
								}),
						},
						{
							key: 'getTimestamp',
							value:
								((c = Y(
									regeneratorRuntime.mark(function t() {
										let e, n, r;
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
								function (...args) {
									return c.apply(this, args);
								}),
						},
						{
							key: 'getWikiText',
							value:
								((a = Y(
									regeneratorRuntime.mark(function t() {
										let e;
										let n;
										let r;
										let i;
										let o;
										const a = arguments;
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
								function (...args) {
									return a.apply(this, args);
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
															return t.abrupt('return', D.parseWikiText(e, this.title));
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
															return j.error('fail_to_get_edittoken'), t.abrupt('return');
														case 3:
															if (this.timestamp || this.isNewPage) {
																t.next = 6;
																break;
															}
															return j.error('fail_to_get_timestamp'), t.abrupt('return');
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
			})();

			const X = J;
			n(9826), n(4723), n(3210);
			function Z(t, e) {
				for (const r of e) {
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}

			const V = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						this.init();
				}
				let e, n, r;
				return (
					(e = t),
					(n = [
						{
							key: 'init',
							value() {
								$('body').append('<div id="MoeNotification"></div>');
							},
						},
						{
							key: 'display',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : '喵~',
									e = args.length > 1 && void 0 !== args[1] ? args[1] : 'success',
									n = args.length > 2 && void 0 !== args[2] ? args[2] : () => {};
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
							value() {
								const t = this;
								$('.MoeNotification-notice').on('mouseover', function () {
									t.slideLeft($(this));
								});
							},
						},
						{
							key: 'success',
							value(t, e) {
								this.display(t, 'success', e);
							},
						},
						{
							key: 'warning',
							value(t, e) {
								this.display(t, 'warning', e);
							},
						},
						{
							key: 'error',
							value(t, e) {
								this.display(t, 'error', e);
							},
						},
						{
							key: 'clear',
							value() {
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
							value(t) {
								$('.MoeNotification-notice').each(function (e) {
									if ('function' == typeof t) {
										const n = $(this);
										setTimeout(() => {
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
							value(t, e) {
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
			})();

			const K = new V();
			const tt = (t) => new Promise((e) => setTimeout(e, t));
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
					var c = t[o](a);
					var u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function rt(t) {
				return function (...args) {
					const e = this;
					const n = args;
					return new Promise((r, i) => {
						const o = t.apply(e, n);
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
				for (const r of e) {
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

			const at = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						ot(this, 'quickEditPanelVisible', !1),
						ot(this, 'scrollTop', 0);
				}
				let e, n, i;
				return (
					(e = t),
					(n = [
						{
							key: 'createDialogBox',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : 'Wikiplus',
									e = args.length > 1 && void 0 !== args[1] ? args[1] : '',
									n = args.length > 2 && void 0 !== args[2] ? args[2] : 600,
									r = args.length > 3 && void 0 !== args[3] ? args[3] : () => {};
								$('.Wikiplus-InterBox').length > 0 &&
									$('.Wikiplus-InterBox').each(function () {
										$(this).remove();
									});
								const i = window.innerWidth,
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
								const u = function t(e) {
									e.mousedown((n) => {
										const r = n.clientX,
											i = n.clientY,
											o = e.parent().offset().left,
											a = e.parent().offset().top;
										$(document).on('mousemove', (t) => {
											e.parent().css({
												'margin-left': o + t.clientX - r,
												top: a + t.clientY - i,
											});
										}),
											$(document).on('mouseup', () => {
												e.unbind('mousedown'),
													$(document).off('mousemove'),
													$(document).off('mouseup'),
													t(e);
											});
									});
								};
								return u($('.Wikiplus-InterBox-Header')), $('.Wikiplus-InterBox').fadeIn(500), r(), c;
							},
						},
						{
							key: 'addFunctionButton',
							value(t, e) {
								let n;
								switch (r.skin) {
									case 'minerva':
										n = $('<li>')
											.attr('id', e)
											.addClass('toggle-list-item')
											.append(
												$('<a>')
													.addClass('mw-ui-icon mw-ui-icon-before toggle-list-item__anchor')
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
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : () => {},
									e = this.addFunctionButton(b.translate('redirect_from'), 'Wikiplus-SR-Intro');
								e && e.on('click', t);
							},
						},
						{
							key: 'insertSettingsPanelButton',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : () => {},
									e = this.addFunctionButton(
										b.translate('wikiplus_settings'),
										'Wikiplus-Settings-Intro'
									);
								e && e.on('click', t);
							},
						},
						{
							key: 'insertTopQuickEditEntry',
							value(t) {
								const e = $('<li>').attr('id', 'Wikiplus-Edit-TopBtn').attr('class', 'mw-list-item'),
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
								$(e).on('click', () => {
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
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : () => {},
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
													.append($('<span>').addClass('mw-editsection-divider').text(' | '))
													.append(
														$('<a>')
															.addClass('Wikiplus-Edit-SectionBtn')
															.attr('href', 'javascript:void(0)')
															.text(b.translate('quickedit_sectionbtn'))
													);
								$('.mw-editsection').each(function (n) {
									try {
										const i = $(this).find("a[href*='action=edit']").first().attr('href'),
											o = i.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, ''),
											a = decodeURIComponent(i.match(/title=(.+?)&/)[1]),
											c = $(this).prev().clone();
										c.find('.mw-headline-number').remove();
										const u = c.text().trim(),
											s = e.clone();
										s.find('.Wikiplus-Edit-SectionBtn').on('click', () => {
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
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : () => {};
								$('#mw-content-text a.external').each(function (e) {
									const n = et($(this).attr('href'));
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
												.on('click', () => {
													let e;
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
							value(t) {
								const e = t.title,
									n = void 0 === e ? '' : e,
									r = t.content,
									i = void 0 === r ? '' : r,
									o = t.summary,
									a = void 0 === o ? '' : o,
									c = t.onBack,
									u = void 0 === c ? () => {} : c,
									s = t.onParse,
									l = void 0 === s ? () => {} : s,
									f = t.onEdit,
									p = void 0 === f ? () => {} : f,
									d = t.escExit,
									h = void 0 !== d && d,
									v = this;
								(this.scrollTop = $(document).scrollTop()),
									this.quickEditPanelVisible && this.hideQuickEditPanel(),
									(this.quickEditPanelVisible = !0),
									(window.onclose = window.onbeforeunload =
										() => ''.concat(b.translate('onclose_confirm')));
								const g = $('.noarticletext').length > 0,
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
											''.concat(b.translate(g ? 'publish_page' : 'publish_change'), '(Ctrl+S)')
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
								this.createDialogBox(n, B, 1e3, () => {
									$('#Wikiplus-Quickedit').val(i), $('#Wikiplus-Quickedit-Summary-Input').val(a);
								}),
									$('#Wikiplus-Quickedit-Back').on('click', u),
									$('#Wikiplus-Quickedit-Preview-Submit').on(
										'click',
										rt(
											regeneratorRuntime.mark(function t() {
												let e, n, r;
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
																		$('#Wikiplus-Quickedit-Preview-Output').fadeOut(
																			100,
																			() => {
																				$('#Wikiplus-Quickedit-Preview-Output')
																					.html('')
																					.append(e),
																					$(
																						'#Wikiplus-Quickedit-Preview-Output'
																					).fadeIn(100);
																			}
																		),
																		$('html, body').animate(
																			{scrollTop: v.scrollTop},
																			200
																		),
																		(t.next = 7),
																		l(n)
																	);
																case 7:
																	(r = t.sent),
																		$('#Wikiplus-Quickedit-Preview-Output').fadeOut(
																			'100',
																			() => {
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
																			}
																		);
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
												let e, n, r, i;
												return regeneratorRuntime.wrap(
													(t) => {
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
																		$('#Wikiplus-Quickedit-Preview-Output').fadeOut(
																			100,
																			() => {
																				$('#Wikiplus-Quickedit-Preview-Output')
																					.html('')
																					.append(n),
																					$(
																						'#Wikiplus-Quickedit-Preview-Output'
																					).fadeIn(100);
																			}
																		),
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
																		setTimeout(() => {
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
									).on('keydown', (t) => {
										t.ctrlKey &&
											83 === t.which &&
											(t.shiftKey && $('#Wikiplus-Quickedit-MinorEdit').trigger('click'),
											$('#Wikiplus-Quickedit-Submit').trigger('click'),
											t.preventDefault(),
											t.stopPropagation());
									}),
									h &&
										$(document).on('keydown', (t) => {
											27 === t.which && $('#Wikiplus-Quickedit-Back').click();
										});
							},
						},
						{
							key: 'hideQuickEditPanel',
							value() {
								(this.quickEditPanelVisible = !1),
									$('.Wikiplus-InterBox').fadeOut('fast', function () {
										(window.onclose = window.onbeforeunload = void 0), $(this).remove();
									});
							},
						},
						{
							key: 'showSimpleRedirectPanel',
							value(...args) {
								const t = this,
									e = args.length > 0 && void 0 !== args[0] ? args[0] : {},
									n = e.onEdit,
									r = void 0 === n ? () => {} : n,
									i = e.onSuccess,
									o = void 0 === i ? () => {} : i,
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
											let n;
											return regeneratorRuntime.wrap(
												(e) => {
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
																		u.on('click', () => {
																			t.hideSimpleRedirectPanel(f);
																		}),
																		s.on(
																			'click',
																			rt(
																				regeneratorRuntime.mark(function e() {
																					return regeneratorRuntime.wrap(
																						(e) => {
																							for (;;)
																								switch (
																									(e.prev = e.next)
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
																												e.t0
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
																				})
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
									u.on('click', () => {
										t.hideSimpleRedirectPanel(f);
									});
							},
						},
						{
							key: 'hideSimpleRedirectPanel',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : $('body');
								t.find('.Wikiplus-InterBox-Close').trigger('click');
							},
						},
						{
							key: 'showSettingsPanel',
							value(...args) {
								const t = this,
									e = args.length > 0 && void 0 !== args[0] ? args[0] : {},
									n = e.onSubmit,
									r = void 0 === n ? () => {} : n,
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
									u = this.createDialogBox(b.translate('wikiplus_settings_desc'), c, 600, () => {
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
									});
								o.on(
									'click',
									rt(
										regeneratorRuntime.mark(function e() {
											let n, i;
											return regeneratorRuntime.wrap(
												(e) => {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(n = $('<div>')
																		.addClass('Wikiplus-Banner')
																		.text(b.translate('wikiplus_settings_saved'))),
																	(i = $('#Wikiplus-Setting-Input').val()),
																	(e.prev = 2),
																	r({settings: i}),
																	$('.Wikiplus-InterBox-Content').html('').append(n),
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
																		b.translate('wikiplus_settings_grammar_error')
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
									a.on('click', () => {
										t.hideSettingsPanel(u);
									});
							},
						},
						{
							key: 'hideSettingsPanel',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : $('body');
								t.find('.Wikiplus-InterBox-Close').trigger('click');
							},
						},
						{
							key: 'bindPreloadEvents',
							value(t) {
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
			})();

			const ct = new at();
			function ut(t, e) {
				for (const r of e) {
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						'value' in r && (r.writable = !0),
						Object.defineProperty(t, r.key, r);
				}
			}

			const st = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t);
				}
				let e, n, r;
				return (
					(e = t),
					(n = [
						{
							key: 'getSetting',
							value(t) {
								let e;
								const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								const r = n;
								try {
									e = JSON.parse(localStorage.Wikiplus_Settings);
								} catch (t) {
									return;
								}
								try {
									const i = new Function('return ' + e[t]);
									if ('function' != typeof i) return e[t];
									try {
										return !0 === i()(r) ? void 0 : i()(r) || e[t];
									} catch (n) {
										return e[t];
									}
								} catch (r) {
									try {
										for (var o = e[t], a = 0, c = Object.keys(n); a < c.length; a++) {
											const u = c[a];
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
			})();

			const lt = new st();
			const ft = n(3379);
			const pt = n.n(ft);
			const dt = n(7795);
			const ht = n.n(dt);
			const vt = n(569);
			const gt = n.n(vt);
			const mt = n(3565);
			const yt = n.n(mt);
			const kt = n(9216);
			const bt = n.n(kt);
			const At = n(4589);
			const wt = n.n(At);
			const It = {};
			(It.styleTagTransform = wt()),
				(It.setAttributes = yt()),
				(It.insert = gt().bind(null, 'head')),
				(It.domAPI = ht()),
				(It.insertStyleElement = bt());
			function Ct(t, e) {
				const n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					let r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((e) => Object.getOwnPropertyDescriptor(t, e).enumerable)), n.push(...r);
				}
				return n;
			}
			function Bt(t) {
				for (let e = 1; e < arguments.length; e++) {
					const n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? Ct(Object(n), !0).forEach((e) => {
								_t(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						  : Ct(Object(n)).forEach((e) => {
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
					var c = t[o](a);
					var u = c.value;
				} catch (t) {
					return void n(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(r, i);
			}
			function Ot(t) {
				return function (...args) {
					const e = this;
					const n = args;
					return new Promise((r, i) => {
						const o = t.apply(e, n);
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
						let e;
						let n;
						let i;
						let o;
						let a;
						let c;
						let u;
						let s;
						let l;
						let f;
						return regeneratorRuntime.wrap((t) => {
							for (;;)
								switch ((t.prev = t.next)) {
									case 0:
										if (
											((e = {}),
											(n = $('.noarticletext').length > 0 && 0 === r.articleId),
											(i = (() => {
												const t = Ot(
													regeneratorRuntime.mark(function t(n) {
														let r;
														let i;
														let o;
														return regeneratorRuntime.wrap((t) => {
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
											(u = (() => {
												const t = Ot(
													regeneratorRuntime.mark(function t() {
														let e;
														let a;
														let c;
														let u;
														let s;
														let l;
														let f;
														let p;
														let d;
														let h;
														let v;
														let g;
														let m;
														let y;
														let k;
														const A = arguments;
														return regeneratorRuntime.wrap((t) => {
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
																			(d = setTimeout(() => {
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
																				onParse(t) {
																					return l.parseWikiText(t);
																				},
																				onEdit: (() => {
																					const t = Ot(
																						regeneratorRuntime.mark(
																							function t(e) {
																								let n;
																								let r;
																								let i;
																								let o;
																								return regeneratorRuntime.wrap(
																									(t) => {
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
												return function (...args) {
													return t.apply(this, args);
												};
											})()),
											(s = (() => {
												const t = Ot(
													regeneratorRuntime.mark(function t() {
														return regeneratorRuntime.wrap((t) => {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		ct.showSimpleRedirectPanel({
																			onEdit: (() => {
																				const t = Ot(
																					regeneratorRuntime.mark(
																						function t(e) {
																							let n;
																							let o;
																							let a;
																							let c;
																							let u;
																							let s;
																							return regeneratorRuntime.wrap(
																								(t) => {
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
																			onSuccess(t) {
																				const e = t.title;
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
												return function (...args) {
													return t.apply(this, args);
												};
											})()),
											(l = (() => {
												const t = Ot(
													regeneratorRuntime.mark(function t() {
														return regeneratorRuntime.wrap((t) => {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		ct.showSettingsPanel({
																			onSubmit(t) {
																				const e = t.settings;
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
												return function (...args) {
													return t.apply(this, args);
												};
											})()),
											(f = (() => {
												const t = Ot(
													regeneratorRuntime.mark(function t(e) {
														let n;
														return regeneratorRuntime.wrap((t) => {
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
