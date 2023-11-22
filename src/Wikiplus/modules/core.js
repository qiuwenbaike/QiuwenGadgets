// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
(function Wikiplus() {
	/*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
	const t = {
		509: function (t, e, r) {
			const n = r(9985),
				o = r(3691),
				i = TypeError;
			t.exports = (t) => {
				if (n(t)) return t;
				throw new i(`${o(t)} is not a function`);
			};
		},
		2655: function (t, e, r) {
			const n = r(9429),
				o = r(3691),
				i = TypeError;
			t.exports = (t) => {
				if (n(t)) return t;
				throw new i(`${o(t)} is not a constructor`);
			};
		},
		9945: function (t, e, r) {
			const n = r(3914).has;
			t.exports = (t) => {
				return n(t), t;
			};
		},
		3550: function (t, e, r) {
			const n = r(9985),
				o = String,
				i = TypeError;
			t.exports = (t) => {
				if ('object' == typeof t || n(t)) return t;
				throw new i(`Can't set ${o(t)} as a prototype`);
			};
		},
		7370: function (t, e, r) {
			const n = r(4201),
				o = r(5391),
				i = r(2560).f,
				a = n('unscopables'),
				u = Array.prototype;
			void 0 === u[a] && i(u, a, {configurable: !0, value: o(null)}),
				(t.exports = (t) => {
					u[a][t] = !0;
				});
		},
		1514: function (t, e, r) {
			const n = r(730).charAt;
			t.exports = (t, e, r) => {
				return e + (r ? n(t, e).length : 1);
			};
		},
		767: function (t, e, r) {
			const n = r(3622),
				o = TypeError;
			t.exports = (t, e) => {
				if (n(e, t)) return t;
				throw new o('Incorrect invocation');
			};
		},
		5027: function (t, e, r) {
			const n = r(8999),
				o = String,
				i = TypeError;
			t.exports = (t) => {
				if (n(t)) return t;
				throw new i(`${o(t)} is not an object`);
			};
		},
		1655: function (t, e, r) {
			const n = r(3689);
			t.exports = n(() => {
				if ('function' == typeof ArrayBuffer) {
					const t = new ArrayBuffer(8);
					Object.isExtensible(t) && Object.defineProperty(t, 'a', {value: 8});
				}
			});
		},
		7612: function (t, e, r) {
			const n = r(2960).forEach,
				o = r(6834)('forEach');
			t.exports = o
				? [].forEach
				: function (t) {
						return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
				  };
		},
		1055: function (t, e, r) {
			const n = r(4071),
				o = r(2615),
				i = r(690),
				a = r(1228),
				u = r(3292),
				c = r(9429),
				s = r(6310),
				f = r(6522),
				l = r(5185),
				p = r(1664),
				h = Array;
			t.exports = function (t) {
				const e = i(t);
				const r = c(this);
				const v = arguments.length;
				let d = v > 1 ? arguments[1] : void 0;
				const y = void 0 !== d;
				y && (d = n(d, v > 2 ? arguments[2] : void 0));
				let g;
				let m;
				let b;
				let w;
				let x;
				let k;
				const S = p(e);
				let E = 0;
				if (!S || (this === h && u(S)))
					for (g = s(e), m = r ? new this(g) : h(g); g > E; E++) (k = y ? d(e[E], E) : e[E]), f(m, E, k);
				else
					for (x = (w = l(e, S)).next, m = r ? new this() : []; !(b = o(x, w)).done; E++)
						(k = y ? a(w, d, [b.value, E], !0) : b.value), f(m, E, k);
				return (m.length = E), m;
			};
		},
		4328: function (t, e, r) {
			const n = r(5290),
				o = r(7578),
				i = r(6310),
				a = (t) => {
					return (e, r, a) => {
						let u;
						const c = n(e);
						const s = i(c);
						let f = o(a, s);
						if (t && r != r) {
							for (; s > f; ) if ((u = c[f++]) != u) return !0;
						} else for (; s > f; f++) if ((t || f in c) && c[f] === r) return t || f || 0;
						return !t && -1;
					};
				};
			t.exports = {includes: a(!0), indexOf: a(!1)};
		},
		2960: function (t, e, r) {
			const n = r(4071),
				o = r(8844),
				i = r(4413),
				a = r(690),
				u = r(6310),
				c = r(7120),
				s = o([].push),
				f = (t) => {
					const e = 1 === t,
						r = 2 === t,
						o = 3 === t,
						f = 4 === t,
						l = 6 === t,
						p = 7 === t,
						h = 5 === t || l;
					return (v, d, y, g) => {
						for (
							var m,
								b,
								w = a(v),
								x = i(w),
								k = n(d, y),
								S = u(x),
								E = 0,
								O = g || c,
								P = e ? O(v, S) : r || p ? O(v, 0) : void 0;
							S > E;
							E++
						)
							if ((h || E in x) && ((b = k((m = x[E]), E, w)), t))
								if (e) P[E] = b;
								else if (b)
									switch (t) {
										case 3:
											return !0;
										case 5:
											return m;
										case 6:
											return E;
										case 2:
											s(P, m);
									}
								else
									switch (t) {
										case 4:
											return !1;
										case 7:
											s(P, m);
									}
						return l ? -1 : o || f ? f : P;
					};
				};
			t.exports = {
				forEach: f(0),
				map: f(1),
				filter: f(2),
				some: f(3),
				every: f(4),
				find: f(5),
				findIndex: f(6),
				filterReject: f(7),
			};
		},
		9042: function (t, e, r) {
			const n = r(3689),
				o = r(4201),
				i = r(3615),
				a = o('species');
			t.exports = (t) => {
				return (
					i >= 51 ||
					!n(() => {
						const e = [];
						return (
							((e.constructor = {})[a] = () => {
								return {foo: 1};
							}),
							1 !== e[t](Boolean).foo
						);
					})
				);
			};
		},
		6834: function (t, e, r) {
			const n = r(3689);
			t.exports = (t, e) => {
				const r = [][t];
				return (
					!!r &&
					n(() => {
						r.call(
							null,
							e ||
								(() => {
									return 1;
								}),
							1
						);
					})
				);
			};
		},
		5649: function (t, e, r) {
			const n = r(7697),
				o = r(2297),
				i = TypeError,
				a = Object.getOwnPropertyDescriptor,
				u =
					n &&
					!(function () {
						if (void 0 !== this) return !0;
						try {
							Object.defineProperty([], 'length', {writable: !1}).length = 1;
						} catch (t) {
							return t instanceof TypeError;
						}
					})();
			t.exports = u
				? (t, e) => {
						if (o(t) && !a(t, 'length').writable) throw new i('Cannot set read only .length');
						return (t.length = e);
				  }
				: (t, e) => {
						return (t.length = e);
				  };
		},
		9015: function (t, e, r) {
			const n = r(7578),
				o = r(6310),
				i = r(6522),
				a = Array,
				u = Math.max;
			t.exports = (t, e, r) => {
				for (
					var c = o(t), s = n(e, c), f = n(void 0 === r ? c : r, c), l = a(u(f - s, 0)), p = 0;
					s < f;
					s++, p++
				)
					i(l, p, t[s]);
				return (l.length = p), l;
			};
		},
		6004: function (t, e, r) {
			const n = r(8844);
			t.exports = n([].slice);
		},
		382: function (t, e, r) {
			const n = r(9015),
				o = Math.floor,
				i = (t, e) => {
					const r = t.length,
						c = o(r / 2);
					return r < 8 ? a(t, e) : u(t, i(n(t, 0, c), e), i(n(t, c), e), e);
				},
				a = (t, e) => {
					for (let r, n, o = t.length, i = 1; i < o; ) {
						for (n = i, r = t[i]; n && e(t[n - 1], r) > 0; ) t[n] = t[--n];
						n !== i++ && (t[n] = r);
					}
					return t;
				},
				u = (t, e, r, n) => {
					for (let o = e.length, i = r.length, a = 0, u = 0; a < o || u < i; )
						t[a + u] = a < o && u < i ? (n(e[a], r[u]) <= 0 ? e[a++] : r[u++]) : a < o ? e[a++] : r[u++];
					return t;
				};
			t.exports = i;
		},
		5271: function (t, e, r) {
			const n = r(2297),
				o = r(9429),
				i = r(8999),
				a = r(4201)('species'),
				u = Array;
			t.exports = (t) => {
				let e;
				return (
					n(t) &&
						((e = t.constructor),
						((o(e) && (e === u || n(e.prototype))) || (i(e) && null === (e = e[a]))) && (e = void 0)),
					void 0 === e ? u : e
				);
			};
		},
		7120: function (t, e, r) {
			const n = r(5271);
			t.exports = (t, e) => {
				return new (n(t))(0 === e ? 0 : e);
			};
		},
		2399: function (t, e, r) {
			const n = r(2615),
				o = r(6058),
				i = r(4849);
			t.exports = (t, e, r, a) => {
				try {
					const u = i(t, 'return');
					if (u)
						return o('Promise')
							.resolve(n(u, t))
							.then(
								() => {
									e(r);
								},
								(t) => {
									a(t);
								}
							);
				} catch (t) {
					return a(t);
				}
				e(r);
			};
		},
		7394: function (t, e, r) {
			const n = r(2615),
				o = r(9302),
				i = r(5027),
				a = r(5391),
				u = r(5773),
				c = r(6045),
				s = r(4201),
				f = r(618),
				l = r(6058),
				p = r(4849),
				h = r(3070),
				v = r(7807),
				d = r(2125),
				y = l('Promise'),
				g = s('toStringTag'),
				m = 'AsyncIteratorHelper',
				b = 'WrapForValidAsyncIterator',
				w = f.set,
				x = (t) => {
					const e = !t,
						r = f.getterFor(t ? b : m),
						u = (t) => {
							const n = o(() => {
									return r(t);
								}),
								i = n.error,
								a = n.value;
							return i || (e && a.done)
								? {exit: !0, value: i ? y.reject(a) : y.resolve(v(void 0, !0))}
								: {exit: !1, value: a};
						};
					return c(a(h), {
						next() {
							const t = u(this),
								e = t.value;
							if (t.exit) return e;
							const r = o(() => {
									return i(e.nextHandler(y));
								}),
								n = r.error,
								a = r.value;
							return n && (e.done = !0), n ? y.reject(a) : y.resolve(a);
						},
						return() {
							const e = u(this),
								r = e.value;
							if (e.exit) return r;
							r.done = !0;
							let a;
							let c;
							const s = r.iterator;

							let f = o(() => {
								if (r.inner)
									try {
										d(r.inner.iterator, 'normal');
									} catch (t) {
										return d(s, 'throw', t);
									}
								return p(s, 'return');
							});

							return (
								(a = c = f.value),
								f.error
									? y.reject(c)
									: void 0 === a
									  ? y.resolve(v(void 0, !0))
									  : ((c = (f = o(() => {
												return n(a, s);
									    })).value),
									    f.error
												? y.reject(c)
												: t
												  ? y.resolve(c)
												  : y.resolve(c).then((t) => {
															return i(t), v(void 0, !0);
												    }))
							);
						},
					});
				},
				k = x(!0),
				S = x(!1);
			u(S, g, 'Async Iterator Helper'),
				(t.exports = (t, e) => {
					const r = function (r, n) {
						n ? ((n.iterator = r.iterator), (n.next = r.next)) : (n = r),
							(n.type = e ? b : m),
							(n.nextHandler = t),
							(n.counter = 0),
							(n.done = !1),
							w(this, n);
					};
					return (r.prototype = e ? k : S), r;
				});
		},
		2489: function (t, e, r) {
			const n = r(2615),
				o = r(509),
				i = r(5027),
				a = r(8999),
				u = r(5565),
				c = r(6058),
				s = r(2302),
				f = r(2399),
				l = (t) => {
					const e = 0 === t,
						r = 1 === t,
						l = 2 === t,
						p = 3 === t;
					return (t, h, v) => {
						i(t);
						const d = void 0 !== h;
						(!d && e) || o(h);
						const y = s(t);
						const g = c('Promise');
						const m = y.iterator;
						const b = y.next;
						let w = 0;
						return new g((t, o) => {
							const c = (t) => {
									f(m, o, t, o);
								},
								s = () => {
									try {
										if (d)
											try {
												u(w);
											} catch (t) {
												c(t);
											}
										g.resolve(i(n(b, m))).then((n) => {
											try {
												if (i(n).done) e ? ((v.length = w), t(v)) : t(!p && (l || void 0));
												else {
													const u = n.value;
													try {
														if (d) {
															const y = h(u, w),
																b = (n) => {
																	if (r) s();
																	else if (l) n ? s() : f(m, t, !1, o);
																	else if (e)
																		try {
																			(v[w++] = n), s();
																		} catch (t) {
																			c(t);
																		}
																	else n ? f(m, t, p || u, o) : s();
																};
															a(y) ? g.resolve(y).then(b, c) : b(y);
														} else (v[w++] = u), s();
													} catch (t) {
														c(t);
													}
												}
											} catch (t) {
												o(t);
											}
										}, o);
									} catch (t) {
										o(t);
									}
								};
							s();
						});
					};
				};
			t.exports = {toArray: l(0), forEach: l(1), every: l(2), some: l(3), find: l(4)};
		},
		3070: function (t, e, r) {
			let n;
			let o;
			const i = r(9037);
			const a = r(4091);
			const u = r(9985);
			const c = r(5391);
			const s = r(1868);
			const f = r(1880);
			const l = r(4201);
			const p = r(3931);
			const h = 'USE_FUNCTION_CONSTRUCTOR';
			const v = l('asyncIterator');
			const d = i.AsyncIterator;
			const y = a.AsyncIteratorPrototype;
			if (y) n = y;
			else if (u(d)) n = d.prototype;
			else if (a[h] || i[h])
				try {
					(o = s(s(s(Function('return async function*(){}()')())))), s(o) === Object.prototype && (n = o);
				} catch (t) {}
			n ? p && (n = c(n)) : (n = {}),
				u(n[v]) ||
					f(n, v, function () {
						return this;
					}),
				(t.exports = n);
		},
		1228: function (t, e, r) {
			const n = r(5027),
				o = r(2125);
			t.exports = (t, e, r, i) => {
				try {
					return i ? e(n(r)[0], r[1]) : e(r);
				} catch (e) {
					o(t, 'throw', e);
				}
			};
		},
		6431: function (t, e, r) {
			const n = r(4201)('iterator');
			let o = !1;
			try {
				let i = 0;

				const a = {
					next() {
						return {done: !!i++};
					},
					return() {
						o = !0;
					},
				};

				(a[n] = function () {
					return this;
				}),
					Array.from(a, () => {
						throw 2;
					});
			} catch (t) {}
			t.exports = (t, e) => {
				try {
					if (!e && !o) return !1;
				} catch (t) {
					return !1;
				}
				let r = !1;
				try {
					const i = {};
					(i[n] = () => {
						return {
							next() {
								return {done: (r = !0)};
							},
						};
					}),
						t(i);
				} catch (t) {}
				return r;
			};
		},
		6648: function (t, e, r) {
			const n = r(8844),
				o = n({}.toString),
				i = n(''.slice);
			t.exports = (t) => {
				return i(o(t), 8, -1);
			};
		},
		926: function (t, e, r) {
			const n = r(3043),
				o = r(9985),
				i = r(6648),
				a = r(4201)('toStringTag'),
				u = Object,
				c =
					'Arguments' ===
					i(
						((...args) => {
							return args;
						})()
					);
			t.exports = n
				? i
				: (t) => {
						let e, r, n;
						return void 0 === t
							? 'Undefined'
							: null === t
							  ? 'Null'
							  : 'string' ==
							      typeof (r = ((t, e) => {
											try {
												return t[e];
											} catch (t) {}
							      })((e = u(t)), a))
							    ? r
							    : c
							      ? i(e)
							      : 'Object' === (n = i(e)) && o(e.callee)
							        ? 'Arguments'
							        : n;
				  };
		},
		800: function (t, e, r) {
			const n = r(5391),
				o = r(2148),
				i = r(6045),
				a = r(4071),
				u = r(767),
				c = r(981),
				s = r(8734),
				f = r(1934),
				l = r(7807),
				p = r(4241),
				h = r(7697),
				v = r(5375).fastKey,
				d = r(618),
				y = d.set,
				g = d.getterFor;
			t.exports = {
				getConstructor(t, e, r, f) {
					const l = t((t, o) => {
							u(t, p),
								y(t, {type: e, index: n(null), first: void 0, last: void 0, size: 0}),
								h || (t.size = 0),
								c(o) || s(o, t[f], {that: t, AS_ENTRIES: r});
						}),
						p = l.prototype,
						d = g(e),
						m = (t, e, r) => {
							let n;
							let o;
							const i = d(t);
							let a = b(t, e);
							return (
								a
									? (a.value = r)
									: ((i.last = a =
											{
												index: (o = v(e, !0)),
												key: e,
												value: r,
												previous: (n = i.last),
												next: void 0,
												removed: !1,
											}),
									  i.first || (i.first = a),
									  n && (n.next = a),
									  h ? i.size++ : t.size++,
									  'F' !== o && (i.index[o] = a)),
								t
							);
						},
						b = (t, e) => {
							let r;
							const n = d(t);
							const o = v(e);
							if ('F' !== o) return n.index[o];
							for (r = n.first; r; r = r.next) if (r.key === e) return r;
						};
					return (
						i(p, {
							clear() {
								for (var t = d(this), e = t.index, r = t.first; r; )
									(r.removed = !0),
										r.previous && (r.previous = r.previous.next = void 0),
										delete e[r.index],
										(r = r.next);
								(t.first = t.last = void 0), h ? (t.size = 0) : (this.size = 0);
							},
							delete(t) {
								const e = this,
									r = d(e),
									n = b(e, t);
								if (n) {
									const o = n.next,
										i = n.previous;
									delete r.index[n.index],
										(n.removed = !0),
										i && (i.next = o),
										o && (o.previous = i),
										r.first === n && (r.first = o),
										r.last === n && (r.last = i),
										h ? r.size-- : e.size--;
								}
								return !!n;
							},
							forEach(t) {
								for (
									let e, r = d(this), n = a(t, arguments.length > 1 ? arguments[1] : void 0);
									(e = e ? e.next : r.first);

								)
									for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
							},
							has(t) {
								return !!b(this, t);
							},
						}),
						i(
							p,
							r
								? {
										get(t) {
											const e = b(this, t);
											return e && e.value;
										},
										set(t, e) {
											return m(this, 0 === t ? 0 : t, e);
										},
								  }
								: {
										add(t) {
											return m(this, (t = 0 === t ? 0 : t), t);
										},
								  }
						),
						h &&
							o(p, 'size', {
								configurable: !0,
								get() {
									return d(this).size;
								},
							}),
						l
					);
				},
				setStrong(t, e, r) {
					const n = `${e} Iterator`,
						o = g(e),
						i = g(n);
					f(
						t,
						e,
						function (t, e) {
							y(this, {type: n, target: t, state: o(t), kind: e, last: void 0});
						},
						function () {
							for (var t = i(this), e = t.kind, r = t.last; r && r.removed; ) r = r.previous;
							return t.target && (t.last = r = r ? r.next : t.state.first)
								? l('keys' === e ? r.key : 'values' === e ? r.value : [r.key, r.value], !1)
								: ((t.target = void 0), l(void 0, !0));
						},
						r ? 'entries' : 'values',
						!r,
						!0
					),
						p(e);
				},
			};
		},
		319: function (t, e, r) {
			const n = r(9989),
				o = r(9037),
				i = r(8844),
				a = r(5266),
				u = r(1880),
				c = r(5375),
				s = r(8734),
				f = r(767),
				l = r(9985),
				p = r(981),
				h = r(8999),
				v = r(3689),
				d = r(6431),
				y = r(5997),
				g = r(3457);
			t.exports = (t, e, r) => {
				const m = t.includes('Map');
				const b = t.includes('Weak');
				const w = m ? 'set' : 'add';
				const x = o[t];
				const k = x && x.prototype;
				let S = x;
				const E = {};

				const O = (t) => {
					const e = i(k[t]);
					u(
						k,
						t,
						'add' === t
							? function (t) {
									return e(this, 0 === t ? 0 : t), this;
							  }
							: 'delete' === t
							  ? function (t) {
										return !(b && !h(t)) && e(this, 0 === t ? 0 : t);
							    }
							  : 'get' === t
							    ? function (t) {
											return b && !h(t) ? void 0 : e(this, 0 === t ? 0 : t);
							      }
							    : 'has' === t
							      ? function (t) {
												return !(b && !h(t)) && e(this, 0 === t ? 0 : t);
							        }
							      : function (t, r) {
												return e(this, 0 === t ? 0 : t, r), this;
							        }
					);
				};

				if (
					a(
						t,
						!l(x) ||
							!(
								b ||
								(k.forEach &&
									!v(() => {
										new x().entries().next();
									}))
							)
					)
				)
					(S = r.getConstructor(e, t, m, w)), c.enable();
				else if (a(t, !0)) {
					const P = new S(),
						j = P[w](b ? {} : -0, 1) !== P,
						L = v(() => {
							P.has(1);
						}),
						_ = d((t) => {
							new x(t);
						}),
						I =
							!b &&
							v(() => {
								for (var t = new x(), e = 5; e--; ) t[w](e, e);
								return !t.has(-0);
							});
					_ ||
						(((S = e((t, e) => {
							f(t, k);
							const r = g(new x(), t, S);
							return p(e) || s(e, r[w], {that: r, AS_ENTRIES: m}), r;
						})).prototype = k),
						(k.constructor = S)),
						(L || I) && (O('delete'), O('has'), m && O('get')),
						(I || j) && O(w),
						b && k.clear && delete k.clear;
				}
				return (
					(E[t] = S),
					n({global: !0, constructor: !0, forced: S !== x}, E),
					y(S, t),
					b || r.setStrong(S, t, m),
					S
				);
			};
		},
		8758: function (t, e, r) {
			const n = r(6812),
				o = r(9152),
				i = r(2474),
				a = r(2560);
			t.exports = (t, e, r) => {
				for (let u = o(e), c = a.f, s = i.f, f = 0; f < u.length; f++) {
					const l = u[f];
					n(t, l) || (r && n(r, l)) || c(t, l, s(e, l));
				}
			};
		},
		7413: function (t, e, r) {
			const n = r(4201)('match');
			t.exports = (t) => {
				const e = /./;
				try {
					'/./'[t](e);
				} catch (r) {
					try {
						return (e[n] = !1), '/./'[t](e);
					} catch (t) {}
				}
				return !1;
			};
		},
		1748: function (t, e, r) {
			const n = r(3689);
			t.exports = !n(() => {
				function t() {}
				return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
			});
		},
		7807: function (t) {
			t.exports = (t, e) => {
				return {value: t, done: e};
			};
		},
		5773: function (t, e, r) {
			const n = r(7697),
				o = r(2560),
				i = r(5684);
			t.exports = n
				? (t, e, r) => {
						return o.f(t, e, i(1, r));
				  }
				: (t, e, r) => {
						return (t[e] = r), t;
				  };
		},
		5684: function (t) {
			t.exports = (t, e) => {
				return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
			};
		},
		6522: function (t, e, r) {
			const n = r(8360),
				o = r(2560),
				i = r(5684);
			t.exports = (t, e, r) => {
				const a = n(e);
				a in t ? o.f(t, a, i(0, r)) : (t[a] = r);
			};
		},
		1797: function (t, e, r) {
			const n = r(5027),
				o = r(5899),
				i = TypeError;
			t.exports = function (t) {
				if ((n(this), 'string' === t || 'default' === t)) t = 'string';
				else if ('number' !== t) throw new i('Incorrect hint');
				return o(this, t);
			};
		},
		2148: function (t, e, r) {
			const n = r(8702),
				o = r(2560);
			t.exports = (t, e, r) => {
				return r.get && n(r.get, e, {getter: !0}), r.set && n(r.set, e, {setter: !0}), o.f(t, e, r);
			};
		},
		1880: function (t, e, r) {
			const n = r(9985),
				o = r(2560),
				i = r(8702),
				a = r(5014);
			t.exports = (t, e, r, u) => {
				u || (u = {});
				let c = u.enumerable;
				const s = void 0 !== u.name ? u.name : e;
				if ((n(r) && i(r, s, u), u.global)) c ? (t[e] = r) : a(e, r);
				else {
					try {
						u.unsafe ? t[e] && (c = !0) : delete t[e];
					} catch (t) {}
					c
						? (t[e] = r)
						: o.f(t, e, {
								value: r,
								enumerable: !1,
								configurable: !u.nonConfigurable,
								writable: !u.nonWritable,
						  });
				}
				return t;
			};
		},
		6045: function (t, e, r) {
			const n = r(1880);
			t.exports = (t, e, r) => {
				for (const o in e) n(t, o, e[o], r);
				return t;
			};
		},
		5014: function (t, e, r) {
			const n = r(9037),
				o = Object.defineProperty;
			t.exports = (t, e) => {
				try {
					o(n, t, {value: e, configurable: !0, writable: !0});
				} catch (r) {
					n[t] = e;
				}
				return e;
			};
		},
		7697: function (t, e, r) {
			const n = r(3689);
			t.exports = !n(() => {
				return (
					7 !==
					Object.defineProperty({}, 1, {
						get() {
							return 7;
						},
					})[1]
				);
			});
		},
		2659: function (t) {
			const e = 'object' == typeof document && document.all,
				r = void 0 === e && void 0 !== e;
			t.exports = {all: e, IS_HTMLDDA: r};
		},
		6420: function (t, e, r) {
			const n = r(9037),
				o = r(8999),
				i = n.document,
				a = o(i) && o(i.createElement);
			t.exports = (t) => {
				return a ? i.createElement(t) : {};
			};
		},
		5565: function (t) {
			const e = TypeError;
			t.exports = (t) => {
				if (t > 9007199254740991) throw e('Maximum allowed index exceeded');
				return t;
			};
		},
		6338: function (t) {
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
		3265: function (t, e, r) {
			const n = r(6420)('span').classList,
				o = n && n.constructor && n.constructor.prototype;
			t.exports = o === Object.prototype ? void 0 : o;
		},
		2532: function (t, e, r) {
			const n = r(8563),
				o = r(806);
			t.exports = !n && !o && 'object' == typeof window && 'object' == typeof document;
		},
		8563: function (t) {
			t.exports = 'object' == typeof Deno && Deno && 'object' == typeof Deno.version;
		},
		3221: function (t, e, r) {
			const n = r(71);
			t.exports = /ipad|iphone|ipod/i.test(n) && 'undefined' != typeof Pebble;
		},
		4764: function (t, e, r) {
			const n = r(71);
			t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
		},
		806: function (t, e, r) {
			const n = r(9037),
				o = r(6648);
			t.exports = 'process' === o(n.process);
		},
		7486: function (t, e, r) {
			const n = r(71);
			t.exports = /web0s(?!.*chrome)/i.test(n);
		},
		71: function (t) {
			t.exports = ('undefined' != typeof navigator && String(navigator.userAgent)) || '';
		},
		3615: function (t, e, r) {
			let n;
			let o;
			const i = r(9037);
			const a = r(71);
			const u = i.process;
			const c = i.Deno;
			const s = (u && u.versions) || (c && c.version);
			const f = s && s.v8;
			f && (o = (n = f.split('.'))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
				!o &&
					a &&
					(!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
					(n = a.match(/Chrome\/(\d+)/)) &&
					(o = +n[1]),
				(t.exports = o);
		},
		2739: function (t) {
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
		6610: function (t, e, r) {
			const n = r(8844),
				o = Error,
				i = n(''.replace),
				a = String(new o('zxcasd').stack),
				u = /\n\s*at [^:]*:[^\n]*/,
				c = u.test(a);
			t.exports = (t, e) => {
				if (c && 'string' == typeof t && !o.prepareStackTrace) for (; e--; ) t = i(t, u, '');
				return t;
			};
		},
		5411: function (t, e, r) {
			const n = r(5773),
				o = r(6610),
				i = r(9599),
				a = Error.captureStackTrace;
			t.exports = (t, e, r, u) => {
				i && (a ? a(t, e) : n(t, 'stack', o(r, u)));
			};
		},
		9599: function (t, e, r) {
			const n = r(3689),
				o = r(5684);
			t.exports = !n(() => {
				const t = new Error('a');
				return !('stack' in t) || (Object.defineProperty(t, 'stack', o(1, 7)), 7 !== t.stack);
			});
		},
		9989: function (t, e, r) {
			const n = r(9037),
				o = r(2474).f,
				i = r(5773),
				a = r(1880),
				u = r(5014),
				c = r(8758),
				s = r(5266);
			t.exports = (t, e) => {
				let r;
				let f;
				let l;
				let p;
				let h;
				const v = t.target;
				const d = t.global;
				const y = t.stat;
				if ((r = d ? n : y ? n[v] || u(v, {}) : (n[v] || {}).prototype))
					for (f in e) {
						if (
							((p = e[f]),
							(l = t.dontCallGetSet ? (h = o(r, f)) && h.value : r[f]),
							!s(d ? f : v + (y ? '.' : '#') + f, t.forced) && void 0 !== l)
						) {
							if (typeof p == typeof l) continue;
							c(p, l);
						}
						(t.sham || (l && l.sham)) && i(p, 'sham', !0), a(r, f, p, t);
					}
			};
		},
		3689: function (t) {
			t.exports = (t) => {
				try {
					return !!t();
				} catch (t) {
					return !0;
				}
			};
		},
		8678: function (t, e, r) {
			r(4043);
			const n = r(6576),
				o = r(1880),
				i = r(6308),
				a = r(3689),
				u = r(4201),
				c = r(5773),
				s = u('species'),
				f = RegExp.prototype;
			t.exports = (t, e, r, l) => {
				const p = u(t),
					h = !a(() => {
						const e = {};
						return (
							(e[p] = () => {
								return 7;
							}),
							7 !== ''[t](e)
						);
					}),
					v =
						h &&
						!a(() => {
							let e = !1,
								r = /a/;
							return (
								'split' === t &&
									(((r = {}).constructor = {}),
									(r.constructor[s] = () => {
										return r;
									}),
									(r.flags = ''),
									(r[p] = /./[p])),
								(r.exec = () => {
									return (e = !0), null;
								}),
								r[p](''),
								!e
							);
						});
				if (!h || !v || r) {
					const d = n(/./[p]),
						y = e(p, ''[t], (t, e, r, o, a) => {
							const u = n(t),
								c = e.exec;
							return c === i || c === f.exec
								? h && !a
									? {done: !0, value: d(e, r, o)}
									: {done: !0, value: u(r, e, o)}
								: {done: !1};
						});
					o(String.prototype, t, y[0]), o(f, p, y[1]);
				}
				l && c(f[p], 'sham', !0);
			};
		},
		1594: function (t, e, r) {
			const n = r(3689);
			t.exports = !n(() => {
				return Object.isExtensible(Object.preventExtensions({}));
			});
		},
		1735: function (t, e, r) {
			const n = r(7215),
				o = Function.prototype,
				i = o.apply,
				a = o.call;
			t.exports =
				('object' == typeof Reflect && Reflect.apply) ||
				(n
					? a.bind(i)
					: (...args) => {
							return a.apply(i, args);
					  });
		},
		4071: function (t, e, r) {
			const n = r(6576),
				o = r(509),
				i = r(7215),
				a = n(n.bind);
			t.exports = (t, e) => {
				return (
					o(t),
					void 0 === e
						? t
						: i
						  ? a(t, e)
						  : (...args) => {
									return t.apply(e, args);
						    }
				);
			};
		},
		7215: function (t, e, r) {
			const n = r(3689);
			t.exports = !n(() => {
				const t = (() => {}).bind();
				return 'function' != typeof t || t.hasOwnProperty('prototype');
			});
		},
		6761: function (t, e, r) {
			const n = r(8844),
				o = r(509),
				i = r(8999),
				a = r(6812),
				u = r(6004),
				c = r(7215),
				s = Function,
				f = n([].concat),
				l = n([].join),
				p = {};
			t.exports = c
				? s.bind
				: function (t) {
						const e = o(this),
							r = e.prototype,
							n = u(arguments, 1),
							c = function (...args) {
								const r = f(n, u(args));
								return this instanceof c
									? ((t, e, r) => {
											if (!a(p, e)) {
												for (var n = [], o = 0; o < e; o++) n[o] = `a[${o}]`;
												p[e] = s('C,a', `return new C(${l(n, ',')})`);
											}
											return p[e](t, r);
									  })(e, r.length, r)
									: e.apply(t, r);
							};
						return i(r) && (c.prototype = r), c;
				  };
		},
		2615: function (t, e, r) {
			const n = r(7215),
				o = Function.prototype.call;
			t.exports = n
				? o.bind(o)
				: (...args) => {
						return o.apply(o, args);
				  };
		},
		1236: function (t, e, r) {
			const n = r(7697),
				o = r(6812),
				i = Function.prototype,
				a = n && Object.getOwnPropertyDescriptor,
				u = o(i, 'name'),
				c = u && 'something' === (() => {}).name,
				s = u && (!n || (n && a(i, 'name').configurable));
			t.exports = {EXISTS: u, PROPER: c, CONFIGURABLE: s};
		},
		2743: function (t, e, r) {
			const n = r(8844),
				o = r(509);
			t.exports = (t, e, r) => {
				try {
					return n(o(Object.getOwnPropertyDescriptor(t, e)[r]));
				} catch (t) {}
			};
		},
		6576: function (t, e, r) {
			const n = r(6648),
				o = r(8844);
			t.exports = (t) => {
				if ('Function' === n(t)) return o(t);
			};
		},
		8844: function (t, e, r) {
			const n = r(7215),
				o = Function.prototype,
				i = o.call,
				a = n && o.bind.bind(i, i);
			t.exports = n
				? a
				: (t) => {
						return (...args) => {
							return i.apply(t, args);
						};
				  };
		},
		6058: function (t, e, r) {
			const n = r(9037),
				o = r(9985);
			t.exports = function (t, e) {
				return arguments.length < 2 ? ((r = n[t]), o(r) ? r : void 0) : n[t] && n[t][e];
				var r;
			};
		},
		2302: function (t) {
			t.exports = (t) => {
				return {iterator: t, next: t.next, done: !1};
			};
		},
		1664: function (t, e, r) {
			const n = r(926),
				o = r(4849),
				i = r(981),
				a = r(9478),
				u = r(4201)('iterator');
			t.exports = (t) => {
				if (!i(t)) return o(t, u) || o(t, '@@iterator') || a[n(t)];
			};
		},
		5185: function (t, e, r) {
			const n = r(2615),
				o = r(509),
				i = r(5027),
				a = r(3691),
				u = r(1664),
				c = TypeError;
			t.exports = function (t, e) {
				const r = arguments.length < 2 ? u(t) : e;
				if (o(r)) return i(n(r, t));
				throw new c(`${a(t)} is not iterable`);
			};
		},
		2643: function (t, e, r) {
			const n = r(8844),
				o = r(2297),
				i = r(9985),
				a = r(6648),
				u = r(4327),
				c = n([].push);
			t.exports = (t) => {
				if (i(t)) return t;
				if (o(t)) {
					for (var e = t.length, r = [], n = 0; n < e; n++) {
						const s = t[n];
						'string' == typeof s
							? c(r, s)
							: ('number' != typeof s && 'Number' !== a(s) && 'String' !== a(s)) || c(r, u(s));
					}
					const f = r.length;
					let l = !0;
					return function (t, e) {
						if (l) return (l = !1), e;
						if (o(this)) return e;
						for (let n = 0; n < f; n++) if (r[n] === t) return e;
					};
				}
			};
		},
		4849: function (t, e, r) {
			const n = r(509),
				o = r(981);
			t.exports = (t, e) => {
				const r = t[e];
				return o(r) ? void 0 : n(r);
			};
		},
		7017: function (t, e, r) {
			const n = r(8844),
				o = r(690),
				i = Math.floor,
				a = n(''.charAt),
				u = n(''.replace),
				c = n(''.slice),
				s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
				f = /\$([$&'`]|\d{1,2})/g;
			t.exports = (t, e, r, n, l, p) => {
				const h = r + t.length;
				const v = n.length;
				let d = f;
				return (
					void 0 !== l && ((l = o(l)), (d = s)),
					u(p, d, (o, u) => {
						let s;
						switch (a(u, 0)) {
							case '$':
								return '$';
							case '&':
								return t;
							case '`':
								return c(e, 0, r);
							case "'":
								return c(e, h);
							case '<':
								s = l[c(u, 1, -1)];
								break;
							default:
								const f = +u;
								if (0 === f) return o;
								if (f > v) {
									const p = i(f / 10);
									return 0 === p
										? o
										: p <= v
										  ? void 0 === n[p - 1]
												? a(u, 1)
												: n[p - 1] + a(u, 1)
										  : o;
								}
								s = n[f - 1];
						}
						return void 0 === s ? '' : s;
					})
				);
			};
		},
		9037: function (t, e, {g}) {
			const n = (t) => {
				return t && t.Math === Math && t;
			};
			t.exports =
				n('object' == typeof globalThis && globalThis) ||
				n('object' == typeof window && window) ||
				n('object' == typeof self && self) ||
				n('object' == typeof g && g) ||
				n('object' == typeof this && this) ||
				(function () {
					return this;
				})() ||
				Function('return this')();
		},
		6812: function (t, e, r) {
			const n = r(8844),
				o = r(690),
				i = n({}.hasOwnProperty);
			t.exports =
				Object.hasOwn ||
				((t, e) => {
					return i(o(t), e);
				});
		},
		7248: function (t) {
			t.exports = {};
		},
		920: function (t) {
			t.exports = function (t, e) {
				try {
					1 === arguments.length ? console.error(t) : console.error(t, e);
				} catch (t) {}
			};
		},
		2688: function (t, e, r) {
			const n = r(6058);
			t.exports = n('document', 'documentElement');
		},
		8506: function (t, e, r) {
			const n = r(7697),
				o = r(3689),
				i = r(6420);
			t.exports =
				!n &&
				!o(() => {
					return (
						7 !==
						Object.defineProperty(i('div'), 'a', {
							get() {
								return 7;
							},
						}).a
					);
				});
		},
		4413: function (t, e, r) {
			const n = r(8844),
				o = r(3689),
				i = r(6648),
				a = Object,
				u = n(''.split);
			t.exports = o(() => {
				return !a('z').propertyIsEnumerable(0);
			})
				? (t) => {
						return 'String' === i(t) ? u(t, '') : a(t);
				  }
				: a;
		},
		3457: function (t, e, r) {
			const n = r(9985),
				o = r(8999),
				i = r(9385);
			t.exports = (t, {constructor}, r) => {
				let a, u;
				return i && n((a = constructor)) && a !== r && o((u = a.prototype)) && u !== r.prototype && i(t, u), t;
			};
		},
		6738: function (t, e, r) {
			const n = r(8844),
				o = r(9985),
				i = r(4091),
				a = n(Function.toString);
			o(i.inspectSource) ||
				(i.inspectSource = (t) => {
					return a(t);
				}),
				(t.exports = i.inspectSource);
		},
		2570: function (t, e, r) {
			const n = r(8999),
				o = r(5773);
			t.exports = (t, e) => {
				n(e) && 'cause' in e && o(t, 'cause', e.cause);
			};
		},
		5375: function (t, e, r) {
			const n = r(9989);
			const o = r(8844);
			const i = r(7248);
			const a = r(8999);
			const u = r(6812);
			const c = r(2560).f;
			const s = r(2741);
			const f = r(6062);
			const l = r(1129);
			const p = r(4630);
			const h = r(1594);
			let v = !1;
			const d = p('meta');
			let y = 0;

			const g = (t) => {
				c(t, d, {value: {objectID: `O${y++}`, weakData: {}}});
			};

			const m = (t.exports = {
				enable() {
					(m.enable = () => {}), (v = !0);
					const t = s.f,
						e = o([].splice),
						r = {};
					(r[d] = 1),
						t(r).length &&
							((s.f = (r) => {
								for (var n = t(r), o = 0, i = n.length; o < i; o++)
									if (n[o] === d) {
										e(n, o, 1);
										break;
									}
								return n;
							}),
							n({target: 'Object', stat: !0, forced: !0}, {getOwnPropertyNames: f.f}));
				},
				fastKey(t, e) {
					if (!a(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
					if (!u(t, d)) {
						if (!l(t)) return 'F';
						if (!e) return 'E';
						g(t);
					}
					return t[d].objectID;
				},
				getWeakData(t, e) {
					if (!u(t, d)) {
						if (!l(t)) return !0;
						if (!e) return !1;
						g(t);
					}
					return t[d].weakData;
				},
				onFreeze(t) {
					return h && v && l(t) && !u(t, d) && g(t), t;
				},
			});

			i[d] = !0;
		},
		618: function (t, e, r) {
			let n;
			let o;
			let i;
			const a = r(9834);
			const u = r(9037);
			const c = r(8999);
			const s = r(5773);
			const f = r(6812);
			const l = r(4091);
			const p = r(2713);
			const h = r(7248);
			const v = 'Object already initialized';
			const d = u.TypeError;
			const y = u.WeakMap;
			if (a || l.state) {
				const g = l.state || (l.state = new y());
				(g.get = g.get),
					(g.has = g.has),
					(g.set = g.set),
					(n = (t, e) => {
						if (g.has(t)) throw new d(v);
						return (e.facade = t), g.set(t, e), e;
					}),
					(o = (t) => {
						return g.get(t) || {};
					}),
					(i = (t) => {
						return g.has(t);
					});
			} else {
				const m = p('state');
				(h[m] = !0),
					(n = (t, e) => {
						if (f(t, m)) throw new d(v);
						return (e.facade = t), s(t, m, e), e;
					}),
					(o = (t) => {
						return f(t, m) ? t[m] : {};
					}),
					(i = (t) => {
						return f(t, m);
					});
			}
			t.exports = {
				set: n,
				get: o,
				has: i,
				enforce(t) {
					return i(t) ? o(t) : n(t, {});
				},
				getterFor(t) {
					return (e) => {
						let r;
						if (!c(e) || (r = o(e)).type !== t) throw new d(`Incompatible receiver, ${t} required`);
						return r;
					};
				},
			};
		},
		3292: function (t, e, r) {
			const n = r(4201),
				o = r(9478),
				i = n('iterator'),
				a = Array.prototype;
			t.exports = (t) => {
				return void 0 !== t && (o.Array === t || a[i] === t);
			};
		},
		2297: function (t, e, r) {
			const n = r(6648);
			t.exports =
				Array.isArray ||
				((t) => {
					return 'Array' === n(t);
				});
		},
		9985: function (t, e, r) {
			const n = r(2659),
				o = n.all;
			t.exports = n.IS_HTMLDDA
				? (t) => {
						return 'function' == typeof t || t === o;
				  }
				: (t) => {
						return 'function' == typeof t;
				  };
		},
		9429: function (t, e, r) {
			const n = r(8844),
				o = r(3689),
				i = r(9985),
				a = r(926),
				u = r(6058),
				c = r(6738),
				s = () => {},
				f = [],
				l = u('Reflect', 'construct'),
				p = /^\s*(?:class|function)\b/,
				h = n(p.exec),
				v = !p.test(s),
				d = (t) => {
					if (!i(t)) return !1;
					try {
						return l(s, f, t), !0;
					} catch (t) {
						return !1;
					}
				},
				y = (t) => {
					if (!i(t)) return !1;
					switch (a(t)) {
						case 'AsyncFunction':
						case 'GeneratorFunction':
						case 'AsyncGeneratorFunction':
							return !1;
					}
					try {
						return v || !!h(p, c(t));
					} catch (t) {
						return !0;
					}
				};
			(y.sham = !0),
				(t.exports =
					!l ||
					o(() => {
						let t;
						return (
							d(d.call) ||
							!d(Object) ||
							!d(() => {
								t = !0;
							}) ||
							t
						);
					})
						? y
						: d);
		},
		5266: function (t, e, r) {
			const n = r(3689),
				o = r(9985),
				i = /#|\.prototype\./,
				a = (t, e) => {
					const r = c[u(t)];
					return r === f || (r !== s && (o(e) ? n(e) : !!e));
				},
				u = (a.normalize = (t) => {
					return String(t).replace(i, '.').toLowerCase();
				}),
				c = (a.data = {}),
				s = (a.NATIVE = 'N'),
				f = (a.POLYFILL = 'P');
			t.exports = a;
		},
		981: function (t) {
			t.exports = (t) => {
				return null == t;
			};
		},
		8999: function (t, e, r) {
			const n = r(9985),
				o = r(2659),
				i = o.all;
			t.exports = o.IS_HTMLDDA
				? (t) => {
						return 'object' == typeof t ? null !== t : n(t) || t === i;
				  }
				: (t) => {
						return 'object' == typeof t ? null !== t : n(t);
				  };
		},
		3931: function (t) {
			t.exports = !1;
		},
		1245: function (t, e, r) {
			const n = r(8999),
				o = r(6648),
				i = r(4201)('match');
			t.exports = (t) => {
				let e;
				return n(t) && (void 0 !== (e = t[i]) ? !!e : 'RegExp' === o(t));
			};
		},
		734: function (t, e, r) {
			const n = r(6058),
				o = r(9985),
				i = r(3622),
				a = r(9525),
				u = Object;
			t.exports = a
				? (t) => {
						return 'symbol' == typeof t;
				  }
				: (t) => {
						const e = n('Symbol');
						return o(e) && i(e.prototype, u(t));
				  };
		},
		6704: function (t, e, r) {
			const n = r(2615);
			t.exports = (t, e, r) => {
				for (let o, i, a = r ? t : t.iterator, u = t.next; !(o = n(u, a)).done; )
					if (void 0 !== (i = e(o.value))) return i;
			};
		},
		8734: function (t, e, r) {
			const n = r(4071),
				o = r(2615),
				i = r(5027),
				a = r(3691),
				u = r(3292),
				c = r(6310),
				s = r(3622),
				f = r(5185),
				l = r(1664),
				p = r(2125),
				h = TypeError,
				v = function (t, e) {
					(this.stopped = t), (this.result = e);
				},
				d = v.prototype;
			t.exports = (t, e, r) => {
				let y;
				let g;
				let m;
				let b;
				let w;
				let x;
				let k;
				const S = r && r.that;
				const E = !(!r || !r.AS_ENTRIES);
				const O = !(!r || !r.IS_RECORD);
				const P = !(!r || !r.IS_ITERATOR);
				const j = !(!r || !r.INTERRUPTED);
				const L = n(e, S);

				const _ = (t) => {
					return y && p(y, 'normal', t), new v(!0, t);
				};

				const I = (t) => {
					return E ? (i(t), j ? L(t[0], t[1], _) : L(t[0], t[1])) : j ? L(t, _) : L(t);
				};

				if (O) y = t.iterator;
				else if (P) y = t;
				else {
					if (!(g = l(t))) throw new h(`${a(t)} is not iterable`);
					if (u(g)) {
						for (m = 0, b = c(t); b > m; m++) if ((w = I(t[m])) && s(d, w)) return w;
						return new v(!1);
					}
					y = f(t, g);
				}
				for (x = O ? t.next : y.next; !(k = o(x, y)).done; ) {
					try {
						w = I(k.value);
					} catch (t) {
						p(y, 'throw', t);
					}
					if ('object' == typeof w && w && s(d, w)) return w;
				}
				return new v(!1);
			};
		},
		2125: function (t, e, r) {
			const n = r(2615),
				o = r(5027),
				i = r(4849);
			t.exports = (t, e, r) => {
				let a, u;
				o(t);
				try {
					if (!(a = i(t, 'return'))) {
						if ('throw' === e) throw r;
						return r;
					}
					a = n(a, t);
				} catch (t) {
					(u = !0), (a = t);
				}
				if ('throw' === e) throw r;
				if (u) throw a;
				return o(a), r;
			};
		},
		974: function (t, e, r) {
			const n = r(2013).IteratorPrototype,
				o = r(5391),
				i = r(5684),
				a = r(5997),
				u = r(9478),
				c = function () {
					return this;
				};
			t.exports = (t, e, r, s) => {
				const f = `${e} Iterator`;
				return (t.prototype = o(n, {next: i(+!s, r)})), a(t, f, !1, !0), (u[f] = c), t;
			};
		},
		5419: function (t, e, r) {
			const n = r(2615),
				o = r(5391),
				i = r(5773),
				a = r(6045),
				u = r(4201),
				c = r(618),
				s = r(4849),
				f = r(2013).IteratorPrototype,
				l = r(7807),
				p = r(2125),
				h = u('toStringTag'),
				v = 'IteratorHelper',
				d = 'WrapForValidIterator',
				y = c.set,
				g = (t) => {
					const e = c.getterFor(t ? d : v);
					return a(o(f), {
						next() {
							const r = e(this);
							if (t) return r.nextHandler();
							try {
								const n = r.done ? void 0 : r.nextHandler();
								return l(n, r.done);
							} catch (t) {
								throw ((r.done = !0), t);
							}
						},
						return() {
							const r = e(this),
								o = r.iterator;
							if (((r.done = !0), t)) {
								const i = s(o, 'return');
								return i ? n(i, o) : l(void 0, !0);
							}
							if (r.inner)
								try {
									p(r.inner.iterator, 'normal');
								} catch (t) {
									return p(o, 'throw', t);
								}
							return p(o, 'normal'), l(void 0, !0);
						},
					});
				},
				m = g(!0),
				b = g(!1);
			i(b, h, 'Iterator Helper'),
				(t.exports = (t, e) => {
					const r = function (r, n) {
						n ? ((n.iterator = r.iterator), (n.next = r.next)) : (n = r),
							(n.type = e ? d : v),
							(n.nextHandler = t),
							(n.counter = 0),
							(n.done = !1),
							y(this, n);
					};
					return (r.prototype = e ? m : b), r;
				});
		},
		1934: function (t, e, r) {
			const n = r(9989),
				o = r(2615),
				i = r(3931),
				a = r(1236),
				u = r(9985),
				c = r(974),
				s = r(1868),
				f = r(9385),
				l = r(5997),
				p = r(5773),
				h = r(1880),
				v = r(4201),
				d = r(9478),
				y = r(2013),
				g = a.PROPER,
				m = a.CONFIGURABLE,
				b = y.IteratorPrototype,
				w = y.BUGGY_SAFARI_ITERATORS,
				x = v('iterator'),
				k = 'keys',
				S = 'values',
				E = 'entries',
				O = function () {
					return this;
				};
			t.exports = (t, e, r, a, v, y, P) => {
				c(r, e, a);
				let j;
				let L;
				let _;

				const I = (t) => {
					if (t === v && C) return C;
					if (!w && t && t in $) return $[t];
					switch (t) {
						case k:
						case S:
						case E:
							return function () {
								return new r(this, t);
							};
					}
					return function () {
						return new r(this);
					};
				};

				const T = `${e} Iterator`;
				let R = !1;
				const $ = t.prototype;
				const N = $[x] || $['@@iterator'] || (v && $[v]);
				let C = (!w && N) || I(v);
				const A = ('Array' === e && $.entries) || N;
				if (
					(A &&
						(j = s(A.call(new t()))) !== Object.prototype &&
						j.next &&
						(i || s(j) === b || (f ? f(j, b) : u(j[x]) || h(j, x, O)), l(j, T, !0, !0), i && (d[T] = O)),
					g &&
						v === S &&
						N &&
						N.name !== S &&
						(!i && m
							? p($, 'name', S)
							: ((R = !0),
							  (C = function () {
									return o(N, this);
							  }))),
					v)
				)
					if (((L = {values: I(S), keys: y ? C : I(k), entries: I(E)}), P))
						for (_ in L) (w || R || !(_ in $)) && h($, _, L[_]);
					else n({target: e, proto: !0, forced: w || R}, L);
				return (i && !P) || $[x] === C || h($, x, C, {name: v}), (d[e] = C), L;
			};
		},
		2013: function (t, e, r) {
			let n;
			let o;
			let i;
			const a = r(3689);
			const u = r(9985);
			const c = r(8999);
			const s = r(5391);
			const f = r(1868);
			const l = r(1880);
			const p = r(4201);
			const h = r(3931);
			const v = p('iterator');
			let d = !1;
			[].keys && ('next' in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : (d = !0)),
				!c(n) ||
				a(() => {
					const t = {};
					return n[v].call(t) !== t;
				})
					? (n = {})
					: h && (n = s(n)),
				u(n[v]) ||
					l(n, v, function () {
						return this;
					}),
				(t.exports = {IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d});
		},
		9478: function (t) {
			t.exports = {};
		},
		6310: function (t, e, r) {
			const n = r(3126);
			t.exports = ({length}) => {
				return n(length);
			};
		},
		8702: function (t, e, r) {
			const n = r(8844),
				o = r(3689),
				i = r(9985),
				a = r(6812),
				u = r(7697),
				c = r(1236).CONFIGURABLE,
				s = r(6738),
				f = r(618),
				l = f.enforce,
				p = f.get,
				h = String,
				v = Object.defineProperty,
				d = n(''.slice),
				y = n(''.replace),
				g = n([].join),
				m =
					u &&
					!o(() => {
						return 8 !== v(() => {}, 'length', {value: 8}).length;
					}),
				b = String(String).split('String'),
				w = (t.exports = (t, e, r) => {
					'Symbol(' === d(h(e), 0, 7) && (e = `[${y(h(e), /^Symbol\(([^)]*)\)/, '$1')}]`),
						r && r.getter && (e = `get ${e}`),
						r && r.setter && (e = `set ${e}`),
						(!a(t, 'name') || (c && t.name !== e)) &&
							(u ? v(t, 'name', {value: e, configurable: !0}) : (t.name = e)),
						m && r && a(r, 'arity') && t.length !== r.arity && v(t, 'length', {value: r.arity});
					try {
						r && a(r, 'constructor') && r.constructor
							? u && v(t, 'prototype', {writable: !1})
							: t.prototype && (t.prototype = void 0);
					} catch (t) {}
					const n = l(t);
					return a(n, 'source') || (n.source = g(b, 'string' == typeof e ? e : '')), t;
				});
			Function.prototype.toString = w(function () {
				return (i(this) && p(this).source) || s(this);
			}, 'toString');
		},
		3914: function (t, e, r) {
			const n = r(8844),
				o = Map.prototype;
			t.exports = {Map, set: n(o.set), get: n(o.get), has: n(o.has), remove: n(o.delete), proto: o};
		},
		613: function (t, e, r) {
			const n = r(8844),
				o = r(6704),
				i = r(3914),
				a = i.Map,
				u = i.proto,
				c = n(u.forEach),
				s = n(u.entries),
				f = s(new a()).next;
			t.exports = (t, e, r) => {
				return r
					? o({iterator: s(t), next: f}, (t) => {
							return e(t[1], t[0]);
					  })
					: c(t, e);
			};
		},
		8828: function (t) {
			const e = Math.ceil,
				r = Math.floor;
			t.exports =
				Math.trunc ||
				((t) => {
					const n = +t;
					return (n > 0 ? r : e)(n);
				});
		},
		231: function (t, e, r) {
			let n;
			let o;
			let i;
			let a;
			let u;
			const c = r(9037);
			const s = r(4071);
			const f = r(2474).f;
			let l = r(9886).set;
			const p = r(4410);
			const h = r(4764);
			const v = r(3221);
			const d = r(7486);
			const y = r(806);
			const g = c.MutationObserver || c.WebKitMutationObserver;
			const m = c.document;
			const b = c.process;
			const w = c.Promise;
			const x = f(c, 'queueMicrotask');
			let k = x && x.value;
			if (!k) {
				const S = new p(),
					E = () => {
						let t, e;
						for (y && (t = b.domain) && t.exit(); (e = S.get()); )
							try {
								e();
							} catch (t) {
								throw (S.head && n(), t);
							}
						t && t.enter();
					};
				h || y || d || !g || !m
					? !v && w && w.resolve
						? (((a = w.resolve(void 0)).constructor = w),
						  (u = s(a.then, a)),
						  (n = () => {
								u(E);
						  }))
						: y
						  ? (n = () => {
									b.nextTick(E);
						    })
						  : ((l = s(l, c)),
						    (n = () => {
									l(E);
						    }))
					: ((o = !0),
					  (i = m.createTextNode('')),
					  new g(E).observe(i, {characterData: !0}),
					  (n = () => {
							i.data = o = !o;
					  })),
					(k = (t) => {
						S.head || n(), S.add(t);
					});
			}
			t.exports = k;
		},
		8742: function ({exports}, e, r) {
			const n = r(509),
				o = TypeError,
				i = function (t) {
					let e, r;
					(this.promise = new t((t, n) => {
						if (void 0 !== e || void 0 !== r) throw new o('Bad Promise constructor');
						(e = t), (r = n);
					})),
						(this.resolve = n(e)),
						(this.reject = n(r));
				};
			exports.f = (t) => {
				return new i(t);
			};
		},
		3841: function (t, e, r) {
			const n = r(4327);
			t.exports = function (t, e) {
				return void 0 === t ? (arguments.length < 2 ? '' : e) : n(t);
			};
		},
		2124: function (t, e, r) {
			const n = r(1245),
				o = TypeError;
			t.exports = (t) => {
				if (n(t)) throw new o("The method doesn't accept regular expressions");
				return t;
			};
		},
		5394: function (t, e, r) {
			const n = r(7697),
				o = r(8844),
				i = r(2615),
				a = r(3689),
				u = r(300),
				c = r(7518),
				s = r(9556),
				f = r(690),
				l = r(4413),
				p = Object.assign,
				h = Object.defineProperty,
				v = o([].concat);
			t.exports =
				!p ||
				a(() => {
					if (
						n &&
						1 !==
							p(
								{b: 1},
								p(
									h({}, 'a', {
										enumerable: !0,
										get() {
											h(this, 'b', {value: 3, enumerable: !1});
										},
									}),
									{b: 2}
								)
							).b
					)
						return !0;
					const t = {},
						e = {},
						r = Symbol('assign detection'),
						o = 'abcdefghijklmnopqrst';
					return (
						(t[r] = 7),
						o.split('').forEach((t) => {
							e[t] = t;
						}),
						7 !== p({}, t)[r] || u(p({}, e)).join('') !== o
					);
				})
					? function (t, e) {
							for (var r = f(t), o = arguments.length, a = 1, p = c.f, h = s.f; o > a; )
								for (
									let d, y = l(arguments[a++]), g = p ? v(u(y), p(y)) : u(y), m = g.length, b = 0;
									m > b;

								)
									(d = g[b++]), (n && !i(h, y, d)) || (r[d] = y[d]);
							return r;
					  }
					: p;
		},
		5391: function (t, e, r) {
			let n;
			const o = r(5027);
			const i = r(8920);
			const a = r(2739);
			const u = r(7248);
			const c = r(2688);
			const s = r(6420);
			const f = r(2713);
			const l = 'prototype';
			const p = 'script';
			const h = f('IE_PROTO');
			const v = () => {};

			const d = (t) => {
				return `<${p}>${t}</${p}>`;
			};

			const y = (t) => {
				t.write(d('')), t.close();
				const e = t.parentWindow.Object;
				return (t = null), e;
			};

			let g = () => {
				try {
					n = new ActiveXObject('htmlfile');
				} catch (t) {}
				var t;
				let e;
				let r;
				g =
					'undefined' != typeof document
						? document.domain && n
							? y(n)
							: ((e = s('iframe')),
							  (r = `java${p}:`),
							  (e.style.display = 'none'),
							  c.appendChild(e),
							  (e.src = String(r)),
							  (t = e.contentWindow.document).open(),
							  t.write(d('document.F=Object')),
							  t.close(),
							  t.F)
						: y(n);
				for (let o = a.length; o--; ) delete g[l][a[o]];
				return g();
			};

			(u[h] = !0),
				(t.exports =
					Object.create ||
					((t, e) => {
						let r;
						return (
							null !== t ? ((v[l] = o(t)), (r = new v()), (v[l] = null), (r[h] = t)) : (r = g()),
							void 0 === e ? r : i.f(r, e)
						);
					}));
		},
		8920: function (t, e, r) {
			const n = r(7697),
				o = r(5648),
				i = r(2560),
				a = r(5027),
				u = r(5290),
				c = r(300);
			e.f =
				n && !o
					? Object.defineProperties
					: (t, e) => {
							a(t);
							for (let r, n = u(e), o = c(e), s = o.length, f = 0; s > f; ) i.f(t, (r = o[f++]), n[r]);
							return t;
					  };
		},
		2560: function (t, e, r) {
			const n = r(7697),
				o = r(8506),
				i = r(5648),
				a = r(5027),
				u = r(8360),
				c = TypeError,
				s = Object.defineProperty,
				f = Object.getOwnPropertyDescriptor,
				l = 'enumerable',
				p = 'configurable',
				h = 'writable';
			e.f = n
				? i
					? (t, e, r) => {
							if (
								(a(t),
								(e = u(e)),
								a(r),
								'function' == typeof t && 'prototype' === e && 'value' in r && h in r && !r[h])
							) {
								const n = f(t, e);
								n &&
									n[h] &&
									((t[e] = r.value),
									(r = {
										configurable: p in r ? r[p] : n[p],
										enumerable: l in r ? r[l] : n[l],
										writable: !1,
									}));
							}
							return s(t, e, r);
					  }
					: s
				: (t, e, r) => {
						if ((a(t), (e = u(e)), a(r), o))
							try {
								return s(t, e, r);
							} catch (t) {}
						if ('get' in r || 'set' in r) throw new c('Accessors not supported');
						return 'value' in r && (t[e] = r.value), t;
				  };
		},
		2474: function (t, e, r) {
			const n = r(7697),
				o = r(2615),
				i = r(9556),
				a = r(5684),
				u = r(5290),
				c = r(8360),
				s = r(6812),
				f = r(8506),
				l = Object.getOwnPropertyDescriptor;
			e.f = n
				? l
				: (t, e) => {
						if (((t = u(t)), (e = c(e)), f))
							try {
								return l(t, e);
							} catch (t) {}
						if (s(t, e)) return a(!o(i.f, t, e), t[e]);
				  };
		},
		6062: function ({exports}, e, r) {
			const n = r(6648),
				o = r(5290),
				i = r(2741).f,
				a = r(9015),
				u =
					'object' == typeof window && window && Object.getOwnPropertyNames
						? Object.getOwnPropertyNames(window)
						: [];
			exports.f = (t) => {
				return u && 'Window' === n(t)
					? ((t) => {
							try {
								return i(t);
							} catch (t) {
								return a(u);
							}
					  })(t)
					: i(o(t));
			};
		},
		2741: function (t, e, r) {
			const n = r(4948),
				o = r(2739).concat('length', 'prototype');
			e.f =
				Object.getOwnPropertyNames ||
				((t) => {
					return n(t, o);
				});
		},
		7518: function (t, e) {
			e.f = Object.getOwnPropertySymbols;
		},
		1868: function (t, e, r) {
			const n = r(6812),
				o = r(9985),
				i = r(690),
				a = r(2713),
				u = r(1748),
				c = a('IE_PROTO'),
				s = Object,
				f = s.prototype;
			t.exports = u
				? s.getPrototypeOf
				: (t) => {
						const e = i(t);
						if (n(e, c)) return e[c];
						const r = e.constructor;
						return o(r) && e instanceof r ? r.prototype : e instanceof s ? f : null;
				  };
		},
		1129: function (t, e, r) {
			const n = r(3689),
				o = r(8999),
				i = r(6648),
				a = r(1655),
				u = Object.isExtensible,
				c = n(() => {
					u(1);
				});
			t.exports =
				c || a
					? (t) => {
							return !!o(t) && (!a || 'ArrayBuffer' !== i(t)) && (!u || u(t));
					  }
					: u;
		},
		3622: function (t, e, r) {
			const n = r(8844);
			t.exports = n({}.isPrototypeOf);
		},
		4948: function (t, e, r) {
			const n = r(8844),
				o = r(6812),
				i = r(5290),
				a = r(4328).indexOf,
				u = r(7248),
				c = n([].push);
			t.exports = (t, e) => {
				let r;
				const n = i(t);
				let s = 0;
				const f = [];
				for (r in n) !o(u, r) && o(n, r) && c(f, r);
				for (; e.length > s; ) o(n, (r = e[s++])) && (~a(f, r) || c(f, r));
				return f;
			};
		},
		300: function (t, e, r) {
			const n = r(4948),
				o = r(2739);
			t.exports =
				Object.keys ||
				((t) => {
					return n(t, o);
				});
		},
		9556: function (t, e) {
			const r = {}.propertyIsEnumerable,
				n = Object.getOwnPropertyDescriptor,
				o = n && !r.call({1: 2}, 1);
			e.f = o
				? function (t) {
						const e = n(this, t);
						return !!e && e.enumerable;
				  }
				: r;
		},
		9385: function (t, e, r) {
			const n = r(2743),
				o = r(5027),
				i = r(3550);
			t.exports =
				Object.setPrototypeOf ||
				('__proto__' in {}
					? (() => {
							let t;
							let e = !1;
							const r = {};
							try {
								(t = n(Object.prototype, '__proto__', 'set'))(r, []), (e = r instanceof Array);
							} catch (t) {}
							return (r, n) => {
								return o(r), i(n), e ? t(r, n) : (r.__proto__ = n), r;
							};
					  })()
					: void 0);
		},
		9419: function (t, e, r) {
			const n = r(7697),
				o = r(3689),
				i = r(8844),
				a = r(1868),
				u = r(300),
				c = r(5290),
				s = i(r(9556).f),
				f = i([].push),
				l =
					n &&
					o(() => {
						const t = Object.create(null);
						return (t[2] = 2), !s(t, 2);
					}),
				p = (t) => {
					return (e) => {
						for (var r, o = c(e), i = u(o), p = l && null === a(o), h = i.length, v = 0, d = []; h > v; )
							(r = i[v++]), (n && !(p ? r in o : s(o, r))) || f(d, t ? [r, o[r]] : o[r]);
						return d;
					};
				};
			t.exports = {entries: p(!0), values: p(!1)};
		},
		5073: function (t, e, r) {
			const n = r(3043),
				o = r(926);
			t.exports = n
				? {}.toString
				: function () {
						return `[object ${o(this)}]`;
				  };
		},
		5899: function (t, e, r) {
			const n = r(2615),
				o = r(9985),
				i = r(8999),
				a = TypeError;
			t.exports = (t, e) => {
				let r, u;
				if ('string' === e && o((r = t.toString)) && !i((u = n(r, t)))) return u;
				if (o((r = t.valueOf)) && !i((u = n(r, t)))) return u;
				if ('string' !== e && o((r = t.toString)) && !i((u = n(r, t)))) return u;
				throw new a("Can't convert object to primitive value");
			};
		},
		9152: function (t, e, r) {
			const n = r(6058),
				o = r(8844),
				i = r(2741),
				a = r(7518),
				u = r(5027),
				c = o([].concat);
			t.exports =
				n('Reflect', 'ownKeys') ||
				((t) => {
					const e = i.f(u(t)),
						r = a.f;
					return r ? c(e, r(t)) : e;
				});
		},
		6675: function (t, e, r) {
			const n = r(8844),
				o = r(6812),
				i = SyntaxError,
				a = parseInt,
				u = String.fromCharCode,
				c = n(''.charAt),
				s = n(''.slice),
				f = n(/./.exec),
				l = {
					'\\"': '"',
					'\\\\': '\\',
					'\\/': '/',
					'\\b': '\b',
					'\\f': '\f',
					'\\n': '\n',
					'\\r': '\r',
					'\\t': '\t',
				},
				p = /^[\da-f]{4}$/i,
				h = /^[\u0000-\u001F]$/;
			t.exports = (t, e) => {
				for (var r = !0, n = ''; e < t.length; ) {
					const v = c(t, e);
					if ('\\' === v) {
						const d = s(t, e, e + 2);
						if (o(l, d)) (n += l[d]), (e += 2);
						else {
							if ('\\u' !== d) throw new i(`Unknown escape sequence: "${d}"`);
							const y = s(t, (e += 2), e + 4);
							if (!f(p, y)) throw new i(`Bad Unicode escape at: ${e}`);
							(n += u(a(y, 16))), (e += 4);
						}
					} else {
						if ('"' === v) {
							(r = !1), e++;
							break;
						}
						if (f(h, v)) throw new i(`Bad control character in string literal at: ${e}`);
						(n += v), e++;
					}
				}
				if (r) throw new i(`Unterminated string at: ${e}`);
				return {value: n, end: e};
			};
		},
		496: function (t, e, r) {
			const n = r(9037);
			t.exports = n;
		},
		9302: function (t) {
			t.exports = (t) => {
				try {
					return {error: !1, value: t()};
				} catch (t) {
					return {error: !0, value: t};
				}
			};
		},
		7073: function (t, e, r) {
			const n = r(9037);
			const o = r(7919);
			const i = r(9985);
			const a = r(5266);
			const u = r(6738);
			const c = r(4201);
			const s = r(2532);
			const f = r(8563);
			const l = r(3931);
			const p = r(3615);
			const h = o && o.prototype;
			const v = c('species');
			let d = !1;
			const y = i(n.PromiseRejectionEvent);

			const g = a('Promise', () => {
				const t = u(o),
					e = t !== String(o);
				if (!e && 66 === p) return !0;
				if (l && (!h.catch || !h.finally)) return !0;
				if (!p || p < 51 || !/native code/.test(t)) {
					const r = new o((t) => {
							t(1);
						}),
						n = (t) => {
							t(
								() => {},
								() => {}
							);
						};
					if ((((r.constructor = {})[v] = n), !(d = r.then(() => {}) instanceof n))) return !0;
				}
				return !e && (s || f) && !y;
			});

			t.exports = {CONSTRUCTOR: g, REJECTION_EVENT: y, SUBCLASSING: d};
		},
		7919: function (t, e, r) {
			const n = r(9037);
			t.exports = n.Promise;
		},
		2945: function (t, e, r) {
			const n = r(5027),
				o = r(8999),
				i = r(8742);
			t.exports = (t, e) => {
				if ((n(t), o(e) && e.constructor === t)) return e;
				const r = i.f(t);
				return (0, r.resolve)(e), r.promise;
			};
		},
		562: function (t, e, r) {
			const n = r(7919),
				o = r(6431),
				i = r(7073).CONSTRUCTOR;
			t.exports =
				i ||
				!o((t) => {
					n.all(t).then(void 0, () => {});
				});
		},
		8055: function (t, e, r) {
			const n = r(2560).f;
			t.exports = (t, e, r) => {
				r in t ||
					n(t, r, {
						configurable: !0,
						get() {
							return e[r];
						},
						set(t) {
							e[r] = t;
						},
					});
			};
		},
		4410: function (t) {
			const e = function () {
				(this.head = null), (this.tail = null);
			};
			(e.prototype = {
				add(t) {
					const e = {item: t, next: null},
						r = this.tail;
					r ? (r.next = e) : (this.head = e), (this.tail = e);
				},
				get() {
					const t = this.head;
					if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
				},
			}),
				(t.exports = e);
		},
		6100: function (t, e, r) {
			const n = r(2615),
				o = r(5027),
				i = r(9985),
				a = r(6648),
				u = r(6308),
				c = TypeError;
			t.exports = (t, e) => {
				const r = t.exec;
				if (i(r)) {
					const s = n(r, t, e);
					return null !== s && o(s), s;
				}
				if ('RegExp' === a(t)) return n(u, t, e);
				throw new c('RegExp#exec called on incompatible receiver');
			};
		},
		6308: function (t, e, r) {
			let n;
			let o;
			const i = r(2615);
			const a = r(8844);
			const u = r(4327);
			const c = r(9633);
			const s = r(7901);
			const f = r(3430);
			const l = r(5391);
			const p = r(618).get;
			const h = r(2100);
			const v = r(6422);
			const d = f('native-string-replace', String.prototype.replace);
			const y = RegExp.prototype.exec;
			let g = y;
			const m = a(''.charAt);
			const b = a(''.indexOf);
			const w = a(''.replace);
			const x = a(''.slice);
			const k = ((o = /b*/g), i(y, (n = /a/), 'a'), i(y, o, 'a'), 0 !== n.lastIndex || 0 !== o.lastIndex);
			const S = s.BROKEN_CARET;
			const E = void 0 !== /()??/.exec('')[1];
			(k || E || S || h || v) &&
				(g = function (t) {
					let e;
					let r;
					let n;
					let o;
					let a;
					let s;
					let f;
					const h = this;
					const v = p(h);
					const O = u(t);
					const P = v.raw;
					if (P) return (P.lastIndex = h.lastIndex), (e = i(g, P, O)), (h.lastIndex = P.lastIndex), e;
					const j = v.groups;
					const L = S && h.sticky;
					let _ = i(c, h);
					let I = h.source;
					let T = 0;
					let R = O;
					if (
						(L &&
							((_ = w(_, 'y', '')),
							-1 === b(_, 'g') && (_ += 'g'),
							(R = x(O, h.lastIndex)),
							h.lastIndex > 0 &&
								(!h.multiline || (h.multiline && '\n' !== m(O, h.lastIndex - 1))) &&
								((I = `(?: ${I})`), (R = ` ${R}`), T++),
							(r = new RegExp(`^(?:${I})`, _))),
						E && (r = new RegExp(`^${I}$(?!\\s)`, _)),
						k && (n = h.lastIndex),
						(o = i(y, L ? r : h, R)),
						L
							? o
								? ((o.input = x(o.input, T)),
								  (o[0] = x(o[0], T)),
								  (o.index = h.lastIndex),
								  (h.lastIndex += o[0].length))
								: (h.lastIndex = 0)
							: k && o && (h.lastIndex = h.global ? o.index + o[0].length : n),
						E &&
							o &&
							o.length > 1 &&
							i(d, o[0], r, (...args) => {
								for (a = 1; a < args.length - 2; a++) void 0 === args[a] && (o[a] = void 0);
							}),
						o && j)
					)
						for (o.groups = s = l(null), a = 0; a < j.length; a++) s[(f = j[a])[0]] = o[f[1]];
					return o;
				}),
				(t.exports = g);
		},
		9633: function (t, e, r) {
			const n = r(5027);
			t.exports = function () {
				const t = n(this);
				let e = '';
				return (
					t.hasIndices && (e += 'd'),
					t.global && (e += 'g'),
					t.ignoreCase && (e += 'i'),
					t.multiline && (e += 'm'),
					t.dotAll && (e += 's'),
					t.unicode && (e += 'u'),
					t.unicodeSets && (e += 'v'),
					t.sticky && (e += 'y'),
					e
				);
			};
		},
		3477: function (t, e, r) {
			const n = r(2615),
				o = r(6812),
				i = r(3622),
				a = r(9633),
				u = RegExp.prototype;
			t.exports = (t) => {
				const e = t.flags;
				return void 0 !== e || 'flags' in u || o(t, 'flags') || !i(u, t) ? e : n(a, t);
			};
		},
		7901: function (t, e, r) {
			const n = r(3689),
				o = r(9037).RegExp,
				i = n(() => {
					const t = o('a', 'y');
					return (t.lastIndex = 2), null !== t.exec('abcd');
				}),
				a =
					i ||
					n(() => {
						return !o('a', 'y').sticky;
					}),
				u =
					i ||
					n(() => {
						const t = o('^r', 'gy');
						return (t.lastIndex = 2), null !== t.exec('str');
					});
			t.exports = {BROKEN_CARET: u, MISSED_STICKY: a, UNSUPPORTED_Y: i};
		},
		2100: function (t, e, r) {
			const n = r(3689),
				o = r(9037).RegExp;
			t.exports = n(() => {
				const t = o('.', 's');
				return !(t.dotAll && t.test('\n') && 's' === t.flags);
			});
		},
		6422: function (t, e, r) {
			const n = r(3689),
				o = r(9037).RegExp;
			t.exports = n(() => {
				const t = o('(?<a>b)', 'g');
				return 'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c');
			});
		},
		4684: function (t, e, r) {
			const n = r(981),
				o = TypeError;
			t.exports = (t) => {
				if (n(t)) throw new o(`Can't call method on ${t}`);
				return t;
			};
		},
		8600: function (t) {
			t.exports = (t, e) => {
				return t === e || (t != t && e != e);
			};
		},
		4241: function (t, e, r) {
			const n = r(6058),
				o = r(2148),
				i = r(4201),
				a = r(7697),
				u = i('species');
			t.exports = (t) => {
				const e = n(t);
				a &&
					e &&
					!e[u] &&
					o(e, u, {
						configurable: !0,
						get() {
							return this;
						},
					});
			};
		},
		5997: function (t, e, r) {
			const n = r(2560).f,
				o = r(6812),
				i = r(4201)('toStringTag');
			t.exports = (t, e, r) => {
				t && !r && (t = t.prototype), t && !o(t, i) && n(t, i, {configurable: !0, value: e});
			};
		},
		2713: function (t, e, r) {
			const n = r(3430),
				o = r(4630),
				i = n('keys');
			t.exports = (t) => {
				return i[t] || (i[t] = o(t));
			};
		},
		4091: function (t, e, r) {
			const n = r(9037),
				o = r(5014),
				i = '__core-js_shared__',
				a = n[i] || o(i, {});
			t.exports = a;
		},
		3430: function (t, e, r) {
			const n = r(3931),
				o = r(4091);
			(t.exports = (t, e) => {
				return o[t] || (o[t] = void 0 !== e ? e : {});
			})('versions', []).push({
				version: '3.33.3',
				mode: n ? 'pure' : 'global',
				copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
				license: 'https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE',
				source: 'https://github.com/zloirock/core-js',
			});
		},
		6373: function (t, e, r) {
			const n = r(5027),
				o = r(2655),
				i = r(981),
				a = r(4201)('species');
			t.exports = (t, e) => {
				let r;
				const u = n(t).constructor;
				return void 0 === u || i((r = n(u)[a])) ? e : o(r);
			};
		},
		730: function (t, e, r) {
			const n = r(8844),
				o = r(8700),
				i = r(4327),
				a = r(4684),
				u = n(''.charAt),
				c = n(''.charCodeAt),
				s = n(''.slice),
				f = (t) => {
					return (e, r) => {
						let n;
						let f;
						const l = i(a(e));
						const p = o(r);
						const h = l.length;
						return p < 0 || p >= h
							? t
								? ''
								: void 0
							: (n = c(l, p)) < 55296 ||
							    n > 56319 ||
							    p + 1 === h ||
							    (f = c(l, p + 1)) < 56320 ||
							    f > 57343
							  ? t
									? u(l, p)
									: n
							  : t
							    ? s(l, p, p + 2)
							    : f - 56320 + ((n - 55296) << 10) + 65536;
					};
				};
			t.exports = {codeAt: f(!1), charAt: f(!0)};
		},
		6430: function (t, e, r) {
			const n = r(8844),
				o = 2147483647,
				i = /[^\0-\u007E]/,
				a = /[.\u3002\uFF0E\uFF61]/g,
				u = 'Overflow: input needs wider integers to process',
				c = RangeError,
				s = n(a.exec),
				f = Math.floor,
				l = String.fromCharCode,
				p = n(''.charCodeAt),
				h = n([].join),
				v = n([].push),
				d = n(''.replace),
				y = n(''.split),
				g = n(''.toLowerCase),
				m = (t) => {
					return t + 22 + 75 * (t < 26);
				},
				b = (t, e, r) => {
					let n = 0;
					for (t = r ? f(t / 700) : t >> 1, t += f(t / e); t > 455; ) (t = f(t / 35)), (n += 36);
					return f(n + (36 * t) / (t + 38));
				},
				w = (t) => {
					const e = [];
					t = ((t) => {
						for (var e = [], r = 0, n = t.length; r < n; ) {
							const o = p(t, r++);
							if (o >= 55296 && o <= 56319 && r < n) {
								const i = p(t, r++);
								56320 == (64512 & i) ? v(e, ((1023 & o) << 10) + (1023 & i) + 65536) : (v(e, o), r--);
							} else v(e, o);
						}
						return e;
					})(t);
					let r;
					let n;
					const i = t.length;
					let a = 128;
					let s = 0;
					let d = 72;
					for (r = 0; r < t.length; r++) (n = t[r]) < 128 && v(e, l(n));
					const y = e.length;
					let g = y;
					for (y && v(e, '-'); g < i; ) {
						let w = o;
						for (r = 0; r < t.length; r++) (n = t[r]) >= a && n < w && (w = n);
						const x = g + 1;
						if (w - a > f((o - s) / x)) throw new c(u);
						for (s += (w - a) * x, a = w, r = 0; r < t.length; r++) {
							if ((n = t[r]) < a && ++s > o) throw new c(u);
							if (n === a) {
								for (var k = s, S = 36; ; ) {
									const E = S <= d ? 1 : S >= d + 26 ? 26 : S - d;
									if (k < E) break;
									const O = k - E,
										P = 36 - E;
									v(e, l(m(E + (O % P)))), (k = f(O / P)), (S += 36);
								}
								v(e, l(m(k))), (d = b(s, x, g === y)), (s = 0), g++;
							}
						}
						s++, a++;
					}
					return h(e, '');
				};
			t.exports = (t) => {
				let e;
				let r;
				const n = [];
				const o = y(d(g(t), a, '.'), '.');
				for (e = 0; e < o.length; e++) (r = o[e]), v(n, s(i, r) ? `xn--${w(r)}` : r);
				return h(n, '.');
			};
		},
		5984: function (t, e, r) {
			const n = r(1236).PROPER,
				o = r(3689),
				i = r(6350);
			t.exports = (t) => {
				return o(() => {
					return !!i[t]() || '​᠎' !== '​᠎'[t]() || (n && i[t].name !== t);
				});
			};
		},
		1435: function (t, e, r) {
			const n = r(8844),
				o = r(4684),
				i = r(4327),
				a = r(6350),
				u = n(''.replace),
				c = RegExp(`^[${a}]+`),
				s = RegExp(`(^|[^${a}])[${a}]+$`),
				f = (t) => {
					return (e) => {
						let r = i(o(e));
						return 1 & t && (r = u(r, c, '')), 2 & t && (r = u(r, s, '$1')), r;
					};
				};
			t.exports = {start: f(1), end: f(2), trim: f(3)};
		},
		146: function (t, e, r) {
			const n = r(3615),
				o = r(3689),
				i = r(9037).String;
			t.exports =
				!!Object.getOwnPropertySymbols &&
				!o(() => {
					const t = Symbol('symbol detection');
					return !i(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && n && n < 41);
				});
		},
		3032: function (t, e, r) {
			const n = r(2615),
				o = r(6058),
				i = r(4201),
				a = r(1880);
			t.exports = () => {
				const t = o('Symbol'),
					e = t && t.prototype,
					r = e && e.valueOf,
					u = i('toPrimitive');
				e &&
					!e[u] &&
					a(
						e,
						u,
						function (t) {
							return n(r, this);
						},
						{arity: 1}
					);
			};
		},
		6549: function (t, e, r) {
			const n = r(146);
			t.exports = n && !!Symbol.for && !!Symbol.keyFor;
		},
		9886: function (t, e, r) {
			let n;
			let o;
			let i;
			let a;
			const u = r(9037);
			const c = r(1735);
			const s = r(4071);
			const f = r(9985);
			const l = r(6812);
			const p = r(3689);
			const h = r(2688);
			const v = r(6004);
			const d = r(6420);
			const y = r(1500);
			const g = r(4764);
			const m = r(806);
			let b = u.setImmediate;
			let w = u.clearImmediate;
			const x = u.process;
			const k = u.Dispatch;
			const S = u.Function;
			const E = u.MessageChannel;
			const O = u.String;
			let P = 0;
			const j = {};
			const L = 'onreadystatechange';
			p(() => {
				n = u.location;
			});
			const _ = (t) => {
					if (l(j, t)) {
						const e = j[t];
						delete j[t], e();
					}
				},
				I = (t) => {
					return () => {
						_(t);
					};
				},
				T = ({data}) => {
					_(data);
				},
				R = (t) => {
					u.postMessage(O(t), `${n.protocol}//${n.host}`);
				};
			(b && w) ||
				((b = function (t) {
					y(arguments.length, 1);
					const e = f(t) ? t : S(t),
						r = v(arguments, 1);
					return (
						(j[++P] = () => {
							c(e, void 0, r);
						}),
						o(P),
						P
					);
				}),
				(w = (t) => {
					delete j[t];
				}),
				m
					? (o = (t) => {
							x.nextTick(I(t));
					  })
					: k && k.now
					  ? (o = (t) => {
								k.now(I(t));
					    })
					  : E && !g
					    ? ((a = (i = new E()).port2), (i.port1.onmessage = T), (o = s(a.postMessage, a)))
					    : u.addEventListener &&
					        f(u.postMessage) &&
					        !u.importScripts &&
					        n &&
					        'file:' !== n.protocol &&
					        !p(R)
					      ? ((o = R), u.addEventListener('message', T, !1))
					      : (o =
										L in d('script')
											? (t) => {
													h.appendChild(d('script'))[L] = function () {
														h.removeChild(this), _(t);
													};
											  }
											: (t) => {
													setTimeout(I(t), 0);
											  })),
				(t.exports = {set: b, clear: w});
		},
		3648: function (t, e, r) {
			const n = r(8844);
			t.exports = n((1).valueOf);
		},
		7578: function (t, e, r) {
			const n = r(8700),
				o = Math.max,
				i = Math.min;
			t.exports = (t, e) => {
				const r = n(t);
				return r < 0 ? o(r + e, 0) : i(r, e);
			};
		},
		5290: function (t, e, r) {
			const n = r(4413),
				o = r(4684);
			t.exports = (t) => {
				return n(o(t));
			};
		},
		8700: function (t, e, r) {
			const n = r(8828);
			t.exports = (t) => {
				const e = +t;
				return e != e || 0 === e ? 0 : n(e);
			};
		},
		3126: function (t, e, r) {
			const n = r(8700),
				o = Math.min;
			t.exports = (t) => {
				return t > 0 ? o(n(t), 9007199254740991) : 0;
			};
		},
		690: function (t, e, r) {
			const n = r(4684),
				o = Object;
			t.exports = (t) => {
				return o(n(t));
			};
		},
		8732: function (t, e, r) {
			const n = r(2615),
				o = r(8999),
				i = r(734),
				a = r(4849),
				u = r(5899),
				c = r(4201),
				s = TypeError,
				f = c('toPrimitive');
			t.exports = (t, e) => {
				if (!o(t) || i(t)) return t;
				let r;
				const c = a(t, f);
				if (c) {
					if ((void 0 === e && (e = 'default'), (r = n(c, t, e)), !o(r) || i(r))) return r;
					throw new s("Can't convert object to primitive value");
				}
				return void 0 === e && (e = 'number'), u(t, e);
			};
		},
		8360: function (t, e, r) {
			const n = r(8732),
				o = r(734);
			t.exports = (t) => {
				const e = n(t, 'string');
				return o(e) ? e : `${e}`;
			};
		},
		3043: function (t, e, r) {
			const n = {};
			(n[r(4201)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(n));
		},
		4327: function (t, e, r) {
			const n = r(926),
				o = String;
			t.exports = (t) => {
				if ('Symbol' === n(t)) throw new TypeError('Cannot convert a Symbol value to a string');
				return o(t);
			};
		},
		3691: function (t) {
			const e = String;
			t.exports = (t) => {
				try {
					return e(t);
				} catch (t) {
					return 'Object';
				}
			};
		},
		4630: function (t, e, r) {
			const n = r(8844);
			let o = 0;
			const i = Math.random();
			const a = n((1).toString);
			t.exports = (t) => {
				return `Symbol(${void 0 === t ? '' : t})_${a(++o + i, 36)}`;
			};
		},
		6837: function (t, e, r) {
			const n = r(3689),
				o = r(4201),
				i = r(7697),
				a = r(3931),
				u = o('iterator');
			t.exports = !n(() => {
				const t = new URL('b?a=1&b=2&c=3', 'http://a');
				const e = t.searchParams;
				const r = new URLSearchParams('a=1&a=2&b=3');
				let n = '';
				return (
					(t.pathname = 'c%20d'),
					e.forEach((t, r) => {
						e.delete('b'), (n += r + t);
					}),
					r.delete('a', 2),
					r.delete('b', void 0),
					(a && (!t.toJSON || !r.has('a', 1) || r.has('a', 2) || !r.has('a', void 0) || r.has('b'))) ||
						(!e.size && (a || !i)) ||
						!e.sort ||
						'http://a/c%20d?a=1&c=3' !== t.href ||
						'3' !== e.get('c') ||
						'a=1' !== String(new URLSearchParams('?a=1')) ||
						!e[u] ||
						'a' !== new URL('https://a@b').username ||
						'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
						'xn--e1aybc' !== new URL('http://тест').host ||
						'#%D0%B1' !== new URL('http://a#б').hash ||
						'a1c3' !== n ||
						'x' !== new URL('http://x', void 0).host
				);
			});
		},
		9525: function (t, e, r) {
			const n = r(146);
			t.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
		},
		5648: function (t, e, r) {
			const n = r(7697),
				o = r(3689);
			t.exports =
				n &&
				o(() => {
					return 42 !== Object.defineProperty(() => {}, 'prototype', {value: 42, writable: !1}).prototype;
				});
		},
		1500: function (t) {
			const e = TypeError;
			t.exports = (t, r) => {
				if (t < r) throw new e('Not enough arguments');
				return t;
			};
		},
		9834: function (t, e, r) {
			const n = r(9037),
				o = r(9985),
				i = n.WeakMap;
			t.exports = o(i) && /native code/.test(String(i));
		},
		5405: function (t, e, r) {
			const n = r(496),
				o = r(6812),
				i = r(6145),
				a = r(2560).f;
			t.exports = (t) => {
				const e = n.Symbol || (n.Symbol = {});
				o(e, t) || a(e, t, {value: i.f(t)});
			};
		},
		6145: function (t, e, r) {
			const n = r(4201);
			e.f = n;
		},
		4201: function (t, e, r) {
			const n = r(9037),
				o = r(3430),
				i = r(6812),
				a = r(4630),
				u = r(146),
				c = r(9525),
				s = n.Symbol,
				f = o('wks'),
				l = c ? s.for || s : (s && s.withoutSetter) || a;
			t.exports = (t) => {
				return i(f, t) || (f[t] = u && i(s, t) ? s[t] : l(`Symbol.${t}`)), f[t];
			};
		},
		6350: function (t) {
			t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
		},
		1064: function (t, e, r) {
			const n = r(6058),
				o = r(6812),
				i = r(5773),
				a = r(3622),
				u = r(9385),
				c = r(8758),
				s = r(8055),
				f = r(3457),
				l = r(3841),
				p = r(2570),
				h = r(5411),
				v = r(7697),
				d = r(3931);
			t.exports = (t, e, r, y) => {
				const g = 'stackTraceLimit',
					m = y ? 2 : 1,
					b = t.split('.'),
					w = b[b.length - 1],
					x = n(...b);
				if (x) {
					const k = x.prototype;
					if ((!d && o(k, 'cause') && delete k.cause, !r)) return x;
					const S = n('Error'),
						E = e(function (t, e) {
							const r = l(y ? e : t, void 0),
								n = y ? new x(t) : new x();
							return (
								void 0 !== r && i(n, 'message', r),
								h(n, E, n.stack, 2),
								this && a(k, this) && f(n, this, E),
								arguments.length > m && p(n, arguments[m]),
								n
							);
						});
					if (
						((E.prototype = k),
						'Error' !== w
							? u
								? u(E, S)
								: c(E, S, {name: !0})
							: v && g in x && (s(E, x, g), s(E, x, 'prepareStackTrace')),
						c(E, x),
						!d)
					)
						try {
							k.name !== w && i(k, 'name', w), (k.constructor = E);
						} catch (t) {}
					return E;
				}
			};
		},
		4338: function (t, e, r) {
			const n = r(9989),
				o = r(3689),
				i = r(2297),
				a = r(8999),
				u = r(690),
				c = r(6310),
				s = r(5565),
				f = r(6522),
				l = r(7120),
				p = r(9042),
				h = r(4201),
				v = r(3615),
				d = h('isConcatSpreadable'),
				y =
					v >= 51 ||
					!o(() => {
						const t = [];
						return (t[d] = !1), t.concat()[0] !== t;
					}),
				g = (t) => {
					if (!a(t)) return !1;
					const e = t[d];
					return void 0 !== e ? !!e : i(t);
				};
			n(
				{target: 'Array', proto: !0, arity: 1, forced: !y || !p('concat')},
				{
					concat(t) {
						let e;
						let r;
						let n;
						let o;
						let i;
						const a = u(this);
						const p = l(a, 0);
						let h = 0;
						for (e = -1, n = arguments.length; e < n; e++)
							if (g((i = -1 === e ? a : arguments[e])))
								for (o = c(i), s(h + o), r = 0; r < o; r++, h++) r in i && f(p, h, i[r]);
							else s(h + 1), f(p, h++, i);
						return (p.length = h), p;
					},
				}
			);
		},
		8077: function (t, e, r) {
			const n = r(9989),
				o = r(2960).filter;
			n(
				{target: 'Array', proto: !0, forced: !r(9042)('filter')},
				{
					filter(t) {
						return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		5728: function (t, e, r) {
			const n = r(9989);
			const o = r(2960).find;
			const i = r(7370);
			const a = 'find';
			let u = !0;
			a in [] &&
				Array(1)[a](() => {
					u = !1;
				}),
				n(
					{target: 'Array', proto: !0, forced: u},
					{
						find(t) {
							return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
						},
					}
				),
				i(a);
		},
		7049: function (t, e, r) {
			const n = r(9989),
				o = r(1055);
			n(
				{
					target: 'Array',
					stat: !0,
					forced: !r(6431)((t) => {
						Array.from(t);
					}),
				},
				{from: o}
			);
		},
		6801: function (t, e, r) {
			const n = r(9989),
				o = r(4328).includes,
				i = r(3689),
				a = r(7370);
			n(
				{
					target: 'Array',
					proto: !0,
					forced: i(() => {
						return !Array(1).includes();
					}),
				},
				{
					includes(t) {
						return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			),
				a('includes');
		},
		752: function (t, e, r) {
			const n = r(5290),
				o = r(7370),
				i = r(9478),
				a = r(618),
				u = r(2560).f,
				c = r(1934),
				s = r(7807),
				f = r(3931),
				l = r(7697),
				p = 'Array Iterator',
				h = a.set,
				v = a.getterFor(p);
			t.exports = c(
				Array,
				'Array',
				function (t, e) {
					h(this, {type: p, target: n(t), index: 0, kind: e});
				},
				function () {
					const t = v(this),
						e = t.target,
						r = t.index++;
					if (!e || r >= e.length) return (t.target = void 0), s(void 0, !0);
					switch (t.kind) {
						case 'keys':
							return s(r, !1);
						case 'values':
							return s(e[r], !1);
					}
					return s([r, e[r]], !1);
				},
				'values'
			);
			const d = (i.Arguments = i.Array);
			if ((o('keys'), o('values'), o('entries'), !f && l && 'values' !== d.name))
				try {
					u(d, 'name', {value: 'values'});
				} catch (t) {}
		},
		6203: function (t, e, r) {
			const n = r(9989),
				o = r(8844),
				i = r(4413),
				a = r(5290),
				u = r(6834),
				c = o([].join);
			n(
				{target: 'Array', proto: !0, forced: i !== Object || !u('join', ',')},
				{
					join(t) {
						return c(a(this), void 0 === t ? ',' : t);
					},
				}
			);
		},
		560: function (t, e, r) {
			const n = r(9989),
				o = r(690),
				i = r(6310),
				a = r(5649),
				u = r(5565);
			n(
				{
					target: 'Array',
					proto: !0,
					arity: 1,
					forced:
						r(3689)(() => {
							return 4294967297 !== [].push.call({length: 4294967296}, 1);
						}) ||
						!(() => {
							try {
								Object.defineProperty([], 'length', {writable: !1}).push();
							} catch (t) {
								return t instanceof TypeError;
							}
						})(),
				},
				{
					push(t) {
						const e = o(this);
						let r = i(e);
						const n = arguments.length;
						u(r + n);
						for (let c = 0; c < n; c++) (e[r] = arguments[c]), r++;
						return a(e, r), r;
					},
				}
			);
		},
		9730: function (t, e, r) {
			const n = r(9989),
				o = r(2297),
				i = r(9429),
				a = r(8999),
				u = r(7578),
				c = r(6310),
				s = r(5290),
				f = r(6522),
				l = r(4201),
				p = r(9042),
				h = r(6004),
				v = p('slice'),
				d = l('species'),
				y = Array,
				g = Math.max;
			n(
				{target: 'Array', proto: !0, forced: !v},
				{
					slice(t, e) {
						let r;
						let n;
						let l;
						const p = s(this);
						const v = c(p);
						let m = u(t, v);
						const b = u(void 0 === e ? v : e, v);
						if (
							o(p) &&
							((r = p.constructor),
							((i(r) && (r === y || o(r.prototype))) || (a(r) && null === (r = r[d]))) && (r = void 0),
							r === y || void 0 === r)
						)
							return h(p, m, b);
						for (n = new (void 0 === r ? y : r)(g(b - m, 0)), l = 0; m < b; m++, l++)
							m in p && f(n, l, p[m]);
						return (n.length = l), n;
					},
				}
			);
		},
		9903: function (t, e, r) {
			const n = r(6812),
				o = r(1880),
				i = r(1797),
				a = r(4201)('toPrimitive'),
				u = Date.prototype;
			n(u, a) || o(u, a, i);
		},
		1057: function (t, e, r) {
			const n = r(9989),
				o = r(9037),
				i = r(1735),
				a = r(1064),
				u = 'WebAssembly',
				c = o[u],
				s = 7 !== new Error('e', {cause: 7}).cause,
				f = (t, e) => {
					const r = {};
					(r[t] = a(t, e, s)), n({global: !0, constructor: !0, arity: 1, forced: s}, r);
				},
				l = (t, e) => {
					if (c && c[t]) {
						const r = {};
						(r[t] = a(`${u}.${t}`, e, s)),
							n({target: u, stat: !0, constructor: !0, arity: 1, forced: s}, r);
					}
				};
			f('Error', (t) => {
				return function (e) {
					return i(t, this, arguments);
				};
			}),
				f('EvalError', (t) => {
					return function (e) {
						return i(t, this, arguments);
					};
				}),
				f('RangeError', (t) => {
					return function (e) {
						return i(t, this, arguments);
					};
				}),
				f('ReferenceError', (t) => {
					return function (e) {
						return i(t, this, arguments);
					};
				}),
				f('SyntaxError', (t) => {
					return function (e) {
						return i(t, this, arguments);
					};
				}),
				f('TypeError', (t) => {
					return function (e) {
						return i(t, this, arguments);
					};
				}),
				f('URIError', (t) => {
					return function (e) {
						return i(t, this, arguments);
					};
				}),
				l('CompileError', (t) => {
					return function (e) {
						return i(t, this, arguments);
					};
				}),
				l('LinkError', (t) => {
					return function (e) {
						return i(t, this, arguments);
					};
				}),
				l('RuntimeError', (t) => {
					return function (e) {
						return i(t, this, arguments);
					};
				});
		},
		4284: function (t, e, r) {
			const n = r(7697),
				o = r(1236).EXISTS,
				i = r(8844),
				a = r(2148),
				u = Function.prototype,
				c = i(u.toString),
				s = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
				f = i(s.exec);
			n &&
				!o &&
				a(u, 'name', {
					configurable: !0,
					get() {
						try {
							return f(s, c(this))[1];
						} catch (t) {
							return '';
						}
					},
				});
		},
		8324: function (t, e, r) {
			const n = r(9989),
				o = r(6058),
				i = r(1735),
				a = r(2615),
				u = r(8844),
				c = r(3689),
				s = r(9985),
				f = r(734),
				l = r(6004),
				p = r(2643),
				h = r(146),
				v = String,
				d = o('JSON', 'stringify'),
				y = u(/./.exec),
				g = u(''.charAt),
				m = u(''.charCodeAt),
				b = u(''.replace),
				w = u((1).toString),
				x = /[\uD800-\uDFFF]/g,
				k = /^[\uD800-\uDBFF]$/,
				S = /^[\uDC00-\uDFFF]$/,
				E =
					!h ||
					c(() => {
						const t = o('Symbol')('stringify detection');
						return '[null]' !== d([t]) || '{}' !== d({a: t}) || '{}' !== d(Object(t));
					}),
				O = c(() => {
					return '"\\udf06\\ud834"' !== d('\udf06\ud834') || '"\\udead"' !== d('\udead');
				}),
				P = function (t, e) {
					const r = l(arguments),
						n = p(e);
					if (s(n) || (void 0 !== t && !f(t)))
						return (
							(r[1] = function (t, e) {
								if ((s(n) && (e = a(n, this, v(t), e)), !f(e))) return e;
							}),
							i(d, null, r)
						);
				},
				j = (t, e, r) => {
					const n = g(r, e - 1),
						o = g(r, e + 1);
					return (y(k, t) && !y(S, o)) || (y(S, t) && !y(k, n)) ? `\\u${w(m(t, 0), 16)}` : t;
				};
			d &&
				n(
					{target: 'JSON', stat: !0, arity: 3, forced: E || O},
					{
						stringify(t, e, r) {
							const n = l(arguments),
								o = i(E ? P : d, null, n);
							return O && 'string' == typeof o ? b(o, x, j) : o;
						},
					}
				);
		},
		7629: function (t, e, r) {
			const n = r(9037);
			r(5997)(n.JSON, 'JSON', !0);
		},
		9322: function (t, e, r) {
			r(319)(
				'Map',
				(t) => {
					return function (...args) {
						return t(this, args.length ? args[0] : void 0);
					};
				},
				r(800)
			);
		},
		6646: function (t, e, r) {
			r(9322);
		},
		7509: function (t, e, r) {
			r(5997)(Math, 'Math', !0);
		},
		9288: function (t, e, r) {
			const n = r(9989),
				o = r(3931),
				i = r(7697),
				a = r(9037),
				u = r(496),
				c = r(8844),
				s = r(5266),
				f = r(6812),
				l = r(3457),
				p = r(3622),
				h = r(734),
				v = r(8732),
				d = r(3689),
				y = r(2741).f,
				g = r(2474).f,
				m = r(2560).f,
				b = r(3648),
				w = r(1435).trim,
				x = 'Number',
				k = a[x],
				S = u[x],
				E = k.prototype,
				O = a.TypeError,
				P = c(''.slice),
				j = c(''.charCodeAt),
				L = (t) => {
					let e,
						r,
						n,
						o,
						i,
						a,
						u,
						c,
						s = v(t, 'number');
					if (h(s)) throw new O('Cannot convert a Symbol value to a number');
					if ('string' == typeof s && s.length > 2)
						if (((s = w(s)), 43 === (e = j(s, 0)) || 45 === e)) {
							if (88 === (r = j(s, 2)) || 120 === r) return NaN;
						} else if (48 === e) {
							switch (j(s, 1)) {
								case 66:
								case 98:
									(n = 2), (o = 49);
									break;
								case 79:
								case 111:
									(n = 8), (o = 55);
									break;
								default:
									return +s;
							}
							for (a = (i = P(s, 2)).length, u = 0; u < a; u++)
								if ((c = j(i, u)) < 48 || c > o) return NaN;
							return parseInt(i, n);
						}
					return +s;
				},
				_ = s(x, !k(' 0o1') || !k('0b1') || k('+0x1')),
				I = function (t) {
					let e;

					const r =
						arguments.length < 1
							? 0
							: k(
									((t) => {
										const e = v(t, 'number');
										return 'bigint' == typeof e ? e : L(e);
									})(t)
							  );

					return p(E, (e = this)) &&
						d(() => {
							b(e);
						})
						? l(Object(r), this, I)
						: r;
				};
			(I.prototype = E),
				_ && !o && (E.constructor = I),
				n({global: !0, constructor: !0, wrap: !0, forced: _}, {Number: I});
			const T = (t, e) => {
				for (
					let r,
						n = i
							? y(e)
							: 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range'.split(
									','
							  ),
						o = 0;
					n.length > o;
					o++
				)
					f(e, (r = n[o])) && !f(t, r) && m(t, r, g(e, r));
			};
			o && S && T(u[x], S), (_ || o) && T(u[x], k);
		},
		6585: function (t, e, r) {
			const n = r(9989),
				o = r(9419).entries;
			n(
				{target: 'Object', stat: !0},
				{
					entries(t) {
						return o(t);
					},
				}
			);
		},
		1919: function (t, e, r) {
			const n = r(9989),
				o = r(3689),
				i = r(5290),
				a = r(2474).f,
				u = r(7697);
			n(
				{
					target: 'Object',
					stat: !0,
					forced:
						!u ||
						o(() => {
							a(1);
						}),
					sham: !u,
				},
				{
					getOwnPropertyDescriptor(t, e) {
						return a(i(t), e);
					},
				}
			);
		},
		9474: function (t, e, r) {
			const n = r(9989),
				o = r(7697),
				i = r(9152),
				a = r(5290),
				u = r(2474),
				c = r(6522);
			n(
				{target: 'Object', stat: !0, sham: !o},
				{
					getOwnPropertyDescriptors(t) {
						for (var e, r, n = a(t), o = u.f, s = i(n), f = {}, l = 0; s.length > l; )
							void 0 !== (r = o(n, (e = s[l++]))) && c(f, e, r);
						return f;
					},
				}
			);
		},
		9434: function (t, e, r) {
			const n = r(9989),
				o = r(146),
				i = r(3689),
				a = r(7518),
				u = r(690);
			n(
				{
					target: 'Object',
					stat: !0,
					forced:
						!o ||
						i(() => {
							a.f(1);
						}),
				},
				{
					getOwnPropertySymbols(t) {
						const e = a.f;
						return e ? e(u(t)) : [];
					},
				}
			);
		},
		8052: function (t, e, r) {
			const n = r(9989),
				o = r(3689),
				i = r(690),
				a = r(1868),
				u = r(1748);
			n(
				{
					target: 'Object',
					stat: !0,
					forced: o(() => {
						a(1);
					}),
					sham: !u,
				},
				{
					getPrototypeOf(t) {
						return a(i(t));
					},
				}
			);
		},
		9358: function (t, e, r) {
			const n = r(9989),
				o = r(690),
				i = r(300);
			n(
				{
					target: 'Object',
					stat: !0,
					forced: r(3689)(() => {
						i(1);
					}),
				},
				{
					keys(t) {
						return i(o(t));
					},
				}
			);
		},
		228: function (t, e, r) {
			const n = r(3043),
				o = r(1880),
				i = r(5073);
			n || o(Object.prototype, 'toString', i, {unsafe: !0});
		},
		1692: function (t, e, r) {
			const n = r(9989),
				o = r(2615),
				i = r(509),
				a = r(8742),
				u = r(9302),
				c = r(8734);
			n(
				{target: 'Promise', stat: !0, forced: r(562)},
				{
					all(t) {
						const e = this,
							r = a.f(e),
							n = r.resolve,
							s = r.reject,
							f = u(() => {
								const r = i(e.resolve);
								const a = [];
								let u = 0;
								let f = 1;
								c(t, (t) => {
									const i = u++;
									let c = !1;
									f++,
										o(r, e, t).then((t) => {
											c || ((c = !0), (a[i] = t), --f || n(a));
										}, s);
								}),
									--f || n(a);
							});
						return f.error && s(f.value), r.promise;
					},
				}
			);
		},
		5089: function (t, e, r) {
			const n = r(9989),
				o = r(3931),
				i = r(7073).CONSTRUCTOR,
				a = r(7919),
				u = r(6058),
				c = r(9985),
				s = r(1880),
				f = a && a.prototype;
			if (
				(n(
					{target: 'Promise', proto: !0, forced: i, real: !0},
					{
						catch(t) {
							return this.then(void 0, t);
						},
					}
				),
				!o && c(a))
			) {
				const l = u('Promise').prototype.catch;
				f.catch !== l && s(f, 'catch', l, {unsafe: !0});
			}
		},
		6697: function (t, e, r) {
			let n;
			let o;
			let i;
			const a = r(9989);
			const u = r(3931);
			const c = r(806);
			const s = r(9037);
			const f = r(2615);
			const l = r(1880);
			const p = r(9385);
			const h = r(5997);
			const v = r(4241);
			const d = r(509);
			const y = r(9985);
			const g = r(8999);
			const m = r(767);
			const b = r(6373);
			const w = r(9886).set;
			const x = r(231);
			const k = r(920);
			const S = r(9302);
			const E = r(4410);
			const O = r(618);
			const P = r(7919);
			const j = r(7073);
			const L = r(8742);
			const _ = 'Promise';
			const I = j.CONSTRUCTOR;
			const T = j.REJECTION_EVENT;
			const R = j.SUBCLASSING;
			const $ = O.getterFor(_);
			const N = O.set;
			const C = P && P.prototype;
			let A = P;
			let W = C;
			const B = s.TypeError;
			const F = s.document;
			const U = s.process;
			let M = L.f;
			const D = M;
			const G = !!(F && F.createEvent && s.dispatchEvent);
			const q = 'unhandledrejection';

			const Q = (t) => {
				let e;
				return !(!g(t) || !y((e = t.then))) && e;
			};

			const H = (t, e) => {
				let r;
				let n;
				let o;
				const i = e.value;
				const a = 1 === e.state;
				const u = a ? t.ok : t.fail;
				const c = t.resolve;
				const s = t.reject;
				const l = t.domain;
				try {
					u
						? (a || (2 === e.rejection && K(e), (e.rejection = 1)),
						  !0 === u ? (r = i) : (l && l.enter(), (r = u(i)), l && (l.exit(), (o = !0))),
						  r === t.promise ? s(new B('Promise-chain cycle')) : (n = Q(r)) ? f(n, r, c, s) : c(r))
						: s(i);
				} catch (t) {
					l && !o && l.exit(), s(t);
				}
			};

			const z = (t, e) => {
				t.notified ||
					((t.notified = !0),
					x(() => {
						for (let r, n = t.reactions; (r = n.get()); ) H(r, t);
						(t.notified = !1), e && !t.rejection && V(t);
					}));
			};

			const Y = (t, e, r) => {
				let n, o;
				G
					? (((n = F.createEvent('Event')).promise = e),
					  (n.reason = r),
					  n.initEvent(t, !1, !0),
					  s.dispatchEvent(n))
					: (n = {promise: e, reason: r}),
					!T && (o = s[`on${t}`]) ? o(n) : t === q && k('Unhandled promise rejection', r);
			};

			const V = (t) => {
				f(w, s, () => {
					let e;
					const r = t.facade;
					const n = t.value;
					if (
						J(t) &&
						((e = S(() => {
							c ? U.emit('unhandledRejection', n, r) : Y(q, r, n);
						})),
						(t.rejection = c || J(t) ? 2 : 1),
						e.error)
					)
						throw e.value;
				});
			};

			const J = ({rejection, parent}) => {
				return 1 !== rejection && !parent;
			};

			const K = ({facade, value}) => {
				f(w, s, () => {
					const e = facade;
					c ? U.emit('rejectionHandled', e) : Y('rejectionhandled', e, value);
				});
			};

			const X = (t, e, r) => {
				return (n) => {
					t(e, n, r);
				};
			};

			const Z = (t, e, r) => {
				t.done || ((t.done = !0), r && (t = r), (t.value = e), (t.state = 2), z(t, !0));
			};

			const tt = (t, e, r) => {
				if (!t.done) {
					(t.done = !0), r && (t = r);
					try {
						if (t.facade === e) throw new B("Promise can't be resolved itself");
						const n = Q(e);
						n
							? x(() => {
									const r = {done: !1};
									try {
										f(n, e, X(tt, r, t), X(Z, r, t));
									} catch (e) {
										Z(r, e, t);
									}
							  })
							: ((t.value = e), (t.state = 1), z(t, !1));
					} catch (e) {
						Z({done: !1}, e, t);
					}
				}
			};

			if (
				I &&
				((W = (A = function (t) {
					m(this, W), d(t), f(n, this);
					const e = $(this);
					try {
						t(X(tt, e), X(Z, e));
					} catch (t) {
						Z(e, t);
					}
				}).prototype),
				((n = function (t) {
					N(this, {
						type: _,
						done: !1,
						notified: !1,
						parent: !1,
						reactions: new E(),
						rejection: !1,
						state: 0,
						value: void 0,
					});
				}).prototype = l(W, 'then', function (t, e) {
					const r = $(this),
						n = M(b(this, A));
					return (
						(r.parent = !0),
						(n.ok = !y(t) || t),
						(n.fail = y(e) && e),
						(n.domain = c ? U.domain : void 0),
						0 === r.state
							? r.reactions.add(n)
							: x(() => {
									H(n, r);
							  }),
						n.promise
					);
				})),
				(o = function () {
					const t = new n(),
						e = $(t);
					(this.promise = t), (this.resolve = X(tt, e)), (this.reject = X(Z, e));
				}),
				(L.f = M =
					(t) => {
						return t === A || undefined === t ? new o(t) : D(t);
					}),
				!u && y(P) && C !== Object.prototype)
			) {
				(i = C.then),
					R ||
						l(
							C,
							'then',
							function (t, e) {
								const r = this;
								return new A((t, e) => {
									f(i, r, t, e);
								}).then(t, e);
							},
							{unsafe: !0}
						);
				try {
					delete C.constructor;
				} catch (t) {}
				p && p(C, W);
			}
			a({global: !0, constructor: !0, wrap: !0, forced: I}, {Promise: A}), h(A, _, !1, !0), v(_);
		},
		3964: function (t, e, r) {
			r(6697), r(1692), r(5089), r(8829), r(2092), r(7905);
		},
		8829: function (t, e, r) {
			const n = r(9989),
				o = r(2615),
				i = r(509),
				a = r(8742),
				u = r(9302),
				c = r(8734);
			n(
				{target: 'Promise', stat: !0, forced: r(562)},
				{
					race(t) {
						const e = this,
							r = a.f(e),
							n = r.reject,
							s = u(() => {
								const a = i(e.resolve);
								c(t, (t) => {
									o(a, e, t).then(r.resolve, n);
								});
							});
						return s.error && n(s.value), r.promise;
					},
				}
			);
		},
		2092: function (t, e, r) {
			const n = r(9989),
				o = r(2615),
				i = r(8742);
			n(
				{target: 'Promise', stat: !0, forced: r(7073).CONSTRUCTOR},
				{
					reject(t) {
						const e = i.f(this);
						return o(e.reject, void 0, t), e.promise;
					},
				}
			);
		},
		7905: function (t, e, r) {
			const n = r(9989),
				o = r(6058),
				i = r(3931),
				a = r(7919),
				u = r(7073).CONSTRUCTOR,
				c = r(2945),
				s = o('Promise'),
				f = i && !u;
			n(
				{target: 'Promise', stat: !0, forced: i || u},
				{
					resolve(t) {
						return c(f && this === s ? a : this, t);
					},
				}
			);
		},
		50: function (t, e, r) {
			const n = r(9989),
				o = r(6058),
				i = r(1735),
				a = r(6761),
				u = r(2655),
				c = r(5027),
				s = r(8999),
				f = r(5391),
				l = r(3689),
				p = o('Reflect', 'construct'),
				h = Object.prototype,
				v = [].push,
				d = l(() => {
					function t() {}
					return !(p(() => {}, [], t) instanceof t);
				}),
				y = !l(() => {
					p(() => {});
				}),
				g = d || y;
			n(
				{target: 'Reflect', stat: !0, forced: g, sham: g},
				{
					construct(t, e) {
						u(t), c(e);
						const r = arguments.length < 3 ? t : u(arguments[2]);
						if (y && !d) return p(t, e, r);
						if (t === r) {
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
							const n = [null];
							return i(v, n, e), new (i(a, t, n))();
						}
						const o = r.prototype,
							l = f(s(o) ? o : h),
							g = i(t, l, e);
						return s(g) ? g : l;
					},
				}
			);
		},
		6034: function (t, e, r) {
			const n = r(9989),
				o = r(9037),
				i = r(5997);
			n({global: !0}, {Reflect: {}}), i(o.Reflect, 'Reflect', !0);
		},
		2003: function (t, e, r) {
			const n = r(7697),
				o = r(9037),
				i = r(8844),
				a = r(5266),
				u = r(3457),
				c = r(5773),
				s = r(2741).f,
				f = r(3622),
				l = r(1245),
				p = r(4327),
				h = r(3477),
				v = r(7901),
				d = r(8055),
				y = r(1880),
				g = r(3689),
				m = r(6812),
				b = r(618).enforce,
				w = r(4241),
				x = r(4201),
				k = r(2100),
				S = r(6422),
				E = x('match'),
				O = o.RegExp,
				P = O.prototype,
				j = o.SyntaxError,
				L = i(P.exec),
				_ = i(''.charAt),
				I = i(''.replace),
				T = i(''.indexOf),
				R = i(''.slice),
				$ = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
				N = /a/g,
				C = /a/g,
				A = new O(N) !== N,
				W = v.MISSED_STICKY,
				B = v.UNSUPPORTED_Y,
				F =
					n &&
					(!A ||
						W ||
						k ||
						S ||
						g(() => {
							return (C[E] = !1), O(N) !== N || O(C) === C || '/a/i' !== String(O(N, 'i'));
						}));
			if (a('RegExp', F)) {
				for (
					var U = function (t, e) {
							let r;
							let n;
							let o;
							let i;
							let a;
							let s;
							const v = f(P, this);
							const d = l(t);
							const y = void 0 === e;
							let g = [];
							let w = t;
							if (!v && d && y && t.constructor === U) return t;
							if (
								((d || f(P, t)) && ((t = t.source), y && (e = h(w))),
								(t = void 0 === t ? '' : p(t)),
								(e = void 0 === e ? '' : p(e)),
								(w = t),
								k && ('dotAll' in N) && (n = !!e && T(e, 's') > -1) && (e = I(e, /s/g, '')),
								(r = e),
								W && ('sticky' in N) && (o = !!e && T(e, 'y') > -1) && B && (e = I(e, /y/g, '')),
								S &&
									((i = ((t) => {
										for (
											var e,
												r = t.length,
												n = 0,
												o = '',
												i = [],
												a = {},
												u = !1,
												c = !1,
												s = 0,
												f = '';
											n <= r;
											n++
										) {
											if ('\\' === (e = _(t, n))) e += _(t, ++n);
											else if (']' === e) u = !1;
											else if (!u)
												switch (!0) {
													case '[' === e:
														u = !0;
														break;
													case '(' === e:
														L($, R(t, n + 1)) && ((n += 2), (c = !0)), (o += e), s++;
														continue;
													case '>' === e && c:
														if ('' === f || m(a, f))
															throw new j('Invalid capture group name');
														(a[f] = !0), (i[i.length] = [f, s]), (c = !1), (f = '');
														continue;
												}
											c ? (f += e) : (o += e);
										}
										return [o, i];
									})(t)),
									(t = i[0]),
									(g = i[1])),
								(a = u(O(t, e), v ? this : P, U)),
								(n || o || g.length) &&
									((s = b(a)),
									n &&
										((s.dotAll = !0),
										(s.raw = U(
											((t) => {
												for (var e, r = t.length, n = 0, o = '', i = !1; n <= r; n++)
													'\\' !== (e = _(t, n))
														? i || '.' !== e
															? ('[' === e ? (i = !0) : ']' === e && (i = !1), (o += e))
															: (o += '[\\s\\S]')
														: (o += e + _(t, ++n));
												return o;
											})(t),
											r
										))),
									o && (s.sticky = !0),
									g.length && (s.groups = g)),
								t !== w)
							)
								try {
									c(a, 'source', '' === w ? '(?:)' : w);
								} catch (t) {}
							return a;
						},
						M = s(O),
						D = 0;
					M.length > D;

				)
					d(U, O, M[D++]);
				(P.constructor = U), (U.prototype = P), y(o, 'RegExp', U, {constructor: !0});
			}
			w('RegExp');
		},
		8518: function (t, e, r) {
			const n = r(7697),
				o = r(2100),
				i = r(6648),
				a = r(2148),
				u = r(618).get,
				c = RegExp.prototype,
				s = TypeError;
			n &&
				o &&
				a(c, 'dotAll', {
					configurable: !0,
					get() {
						if (this !== c) {
							if ('RegExp' === i(this)) return !!u(this).dotAll;
							throw new s('Incompatible receiver, RegExp required');
						}
					},
				});
		},
		4043: function (t, e, r) {
			const n = r(9989),
				o = r(6308);
			n({target: 'RegExp', proto: !0, forced: /./.exec !== o}, {exec: o});
		},
		3440: function (t, e, r) {
			const n = r(7697),
				o = r(7901).MISSED_STICKY,
				i = r(6648),
				a = r(2148),
				u = r(618).get,
				c = RegExp.prototype,
				s = TypeError;
			n &&
				o &&
				a(c, 'sticky', {
					configurable: !0,
					get() {
						if (this !== c) {
							if ('RegExp' === i(this)) return !!u(this).sticky;
							throw new s('Incompatible receiver, RegExp required');
						}
					},
				});
		},
		7409: function (t, e, r) {
			r(4043);
			let n;
			let o;
			const i = r(9989);
			const a = r(2615);
			const u = r(9985);
			const c = r(5027);
			const s = r(4327);

			const f =
				((n = !1),
				((o = /[ac]/).exec = function (...args) {
					return (n = !0), /./.exec.apply(this, args);
				}),
				!0 === o.test('abc') && n);

			const l = /./.test;
			i(
				{target: 'RegExp', proto: !0, forced: !f},
				{
					test(t) {
						const e = c(this),
							r = s(t),
							n = e.exec;
						if (!u(n)) return a(l, e, r);
						const o = a(n, e, r);
						return null !== o && (c(o), !0);
					},
				}
			);
		},
		2826: function (t, e, r) {
			const n = r(1236).PROPER,
				o = r(1880),
				i = r(5027),
				a = r(4327),
				u = r(3689),
				c = r(3477),
				s = 'toString',
				f = RegExp.prototype[s],
				l = u(() => {
					return '/a/b' !== f.call({source: 'a', flags: 'b'});
				}),
				p = n && f.name !== s;
			(l || p) &&
				o(
					RegExp.prototype,
					s,
					function () {
						const t = i(this);
						return `/${a(t.source)}/${a(c(t))}`;
					},
					{unsafe: !0}
				);
		},
		3843: function (t, e, r) {
			const n = r(9989),
				o = r(8844),
				i = r(2124),
				a = r(4684),
				u = r(4327),
				c = r(7413),
				s = o(''.indexOf);
			n(
				{target: 'String', proto: !0, forced: !c('includes')},
				{
					includes(t) {
						return !!~s(u(a(this)), u(i(t)), arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		1694: function (t, e, r) {
			const n = r(730).charAt,
				o = r(4327),
				i = r(618),
				a = r(1934),
				u = r(7807),
				c = 'String Iterator',
				s = i.set,
				f = i.getterFor(c);
			a(
				String,
				'String',
				function (t) {
					s(this, {type: c, string: o(t), index: 0});
				},
				function () {
					let t;
					const e = f(this);
					const r = e.string;
					const o = e.index;
					return o >= r.length ? u(void 0, !0) : ((t = n(r, o)), (e.index += t.length), u(t, !1));
				}
			);
		},
		2462: function (t, e, r) {
			const n = r(2615),
				o = r(8678),
				i = r(5027),
				a = r(981),
				u = r(3126),
				c = r(4327),
				s = r(4684),
				f = r(4849),
				l = r(1514),
				p = r(6100);
			o('match', (t, e, r) => {
				return [
					function (e) {
						const r = s(this),
							o = a(e) ? void 0 : f(e, t);
						return o ? n(o, e, r) : new RegExp(e)[t](c(r));
					},
					function (t) {
						const n = i(this),
							o = c(t),
							a = r(e, n, o);
						if (a.done) return a.value;
						if (!n.global) return p(n, o);
						const s = n.unicode;
						n.lastIndex = 0;
						for (var f, h = [], v = 0; null !== (f = p(n, o)); ) {
							const d = c(f[0]);
							(h[v] = d), '' === d && (n.lastIndex = l(o, u(n.lastIndex), s)), v++;
						}
						return 0 === v ? null : h;
					},
				];
			});
		},
		7267: function (t, e, r) {
			const n = r(1735),
				o = r(2615),
				i = r(8844),
				a = r(8678),
				u = r(3689),
				c = r(5027),
				s = r(9985),
				f = r(981),
				l = r(8700),
				p = r(3126),
				h = r(4327),
				v = r(4684),
				d = r(1514),
				y = r(4849),
				g = r(7017),
				m = r(6100),
				b = r(4201)('replace'),
				w = Math.max,
				x = Math.min,
				k = i([].concat),
				S = i([].push),
				E = i(''.indexOf),
				O = i(''.slice),
				P = '$0' === 'a'.replace(/./, '$0'),
				j = !!/./[b] && '' === /./[b]('a', '$0');
			a(
				'replace',
				(t, e, r) => {
					const i = j ? '$' : '$0';
					return [
						function (t, r) {
							const n = v(this),
								i = f(t) ? void 0 : y(t, b);
							return i ? o(i, t, n, r) : o(e, h(n), t, r);
						},
						function (t, o) {
							const a = c(this),
								u = h(t);
							if ('string' == typeof o && -1 === E(o, i) && -1 === E(o, '$<')) {
								const f = r(e, a, u, o);
								if (f.done) return f.value;
							}
							const v = s(o);
							v || (o = h(o));
							let y;
							const b = a.global;
							b && ((y = a.unicode), (a.lastIndex = 0));
							for (var P, j = []; null !== (P = m(a, u)) && (S(j, P), b); ) {
								'' === h(P[0]) && (a.lastIndex = d(u, p(a.lastIndex), y));
							}
							for (var L, _ = '', I = 0, T = 0; T < j.length; T++) {
								for (
									var R, $ = h((P = j[T])[0]), N = w(x(l(P.index), u.length), 0), C = [], A = 1;
									A < P.length;
									A++
								)
									S(C, void 0 === (L = P[A]) ? L : String(L));
								const W = P.groups;
								if (v) {
									const B = k([$], C, N, u);
									void 0 !== W && S(B, W), (R = h(n(o, void 0, B)));
								} else R = g($, u, N, C, W, o);
								N >= I && ((_ += O(u, I, N) + R), (I = N + $.length));
							}
							return _ + O(u, I);
						},
					];
				},
				!!u(() => {
					const t = /./;
					return (
						(t.exec = () => {
							const t = [];
							return (t.groups = {a: '7'}), t;
						}),
						'7' !== ''.replace(t, '$<a>')
					);
				}) ||
					!P ||
					j
			);
		},
		8436: function (t, e, r) {
			const n = r(9989),
				o = r(1435).trim;
			n(
				{target: 'String', proto: !0, forced: r(5984)('trim')},
				{
					trim() {
						return o(this);
					},
				}
			);
		},
		8373: function (t, e, r) {
			r(5405)('asyncIterator');
		},
		7855: function (t, e, r) {
			const n = r(9989);
			const o = r(9037);
			const i = r(2615);
			const a = r(8844);
			const u = r(3931);
			const c = r(7697);
			const s = r(146);
			const f = r(3689);
			const l = r(6812);
			const p = r(3622);
			const h = r(5027);
			const v = r(5290);
			const d = r(8360);
			const y = r(4327);
			const g = r(5684);
			const m = r(5391);
			const b = r(300);
			const w = r(2741);
			const x = r(6062);
			const k = r(7518);
			const S = r(2474);
			const E = r(2560);
			const O = r(8920);
			const P = r(9556);
			const j = r(1880);
			const L = r(2148);
			const _ = r(3430);
			const I = r(2713);
			const T = r(7248);
			const R = r(4630);
			const $ = r(4201);
			const N = r(6145);
			const C = r(5405);
			const A = r(3032);
			const W = r(5997);
			const B = r(618);
			const F = r(2960).forEach;
			const U = I('hidden');
			const M = 'Symbol';
			const D = 'prototype';
			const G = B.set;
			const q = B.getterFor(M);
			const Q = Object[D];
			let H = o.Symbol;
			let z = H && H[D];
			const Y = o.RangeError;
			const V = o.TypeError;
			const J = o.QObject;
			const K = S.f;
			const X = E.f;
			const Z = x.f;
			const tt = P.f;
			const et = a([].push);
			const rt = _('symbols');
			const nt = _('op-symbols');
			const ot = _('wks');
			let it = !J || !J[D] || !J[D].findChild;

			const at = (t, e, r) => {
				const n = K(Q, e);
				n && delete Q[e], X(t, e, r), n && t !== Q && X(Q, e, n);
			};

			const ut =
				c &&
				f(() => {
					return (
						7 !==
						m(
							X({}, 'a', {
								get() {
									return X(this, 'a', {value: 7}).a;
								},
							})
						).a
					);
				})
					? at
					: X;

			const ct = (t, e) => {
				const r = (rt[t] = m(z));
				return G(r, {type: M, tag: t, description: e}), c || (r.description = e), r;
			};

			const st = (t, e, r) => {
				t === Q && st(nt, e, r), h(t);
				const n = d(e);
				return (
					h(r),
					l(rt, n)
						? (r.enumerable
								? (l(t, U) && t[U][n] && (t[U][n] = !1), (r = m(r, {enumerable: g(0, !1)})))
								: (l(t, U) || X(t, U, g(1, {})), (t[U][n] = !0)),
						  ut(t, n, r))
						: X(t, n, r)
				);
			};

			const ft = (t, e) => {
				h(t);
				const r = v(e),
					n = b(r).concat(vt(r));
				return (
					F(n, (e) => {
						(c && !i(lt, r, e)) || st(t, e, r[e]);
					}),
					t
				);
			};

			const lt = function (t) {
				const e = d(t),
					r = i(tt, this, e);
				return (
					!(this === Q && l(rt, e) && !l(nt, e)) &&
					(!(r || !l(this, e) || !l(rt, e) || (l(this, U) && this[U][e])) || r)
				);
			};

			const pt = (t, e) => {
				const r = v(t),
					n = d(e);
				if (r !== Q || !l(rt, n) || l(nt, n)) {
					const o = K(r, n);
					return !o || !l(rt, n) || (l(r, U) && r[U][n]) || (o.enumerable = !0), o;
				}
			};

			const ht = (t) => {
				const e = Z(v(t)),
					r = [];
				return (
					F(e, (t) => {
						l(rt, t) || l(T, t) || et(r, t);
					}),
					r
				);
			};

			const vt = (t) => {
				const e = t === Q,
					r = Z(e ? nt : v(t)),
					n = [];
				return (
					F(r, (t) => {
						!l(rt, t) || (e && !l(Q, t)) || et(n, rt[t]);
					}),
					n
				);
			};

			s ||
				((H = function (...args) {
					if (p(z, this)) throw new V('Symbol is not a constructor');
					const t = args.length && void 0 !== args[0] ? y(args[0]) : void 0,
						e = R(t),
						r = function (t) {
							const n = void 0 === this ? o : this;
							n === Q && i(r, nt, t), l(n, U) && l(n[U], e) && (n[U][e] = !1);
							const a = g(1, t);
							try {
								ut(n, e, a);
							} catch (t) {
								if (!(t instanceof Y)) throw t;
								at(n, e, a);
							}
						};
					return c && it && ut(Q, e, {configurable: !0, set: r}), ct(e, t);
				}),
				j((z = H[D]), 'toString', function () {
					return q(this).tag;
				}),
				j(H, 'withoutSetter', (t) => {
					return ct(R(t), t);
				}),
				(P.f = lt),
				(E.f = st),
				(O.f = ft),
				(S.f = pt),
				(w.f = x.f = ht),
				(k.f = vt),
				(N.f = (t) => {
					return ct($(t), t);
				}),
				c &&
					(L(z, 'description', {
						configurable: !0,
						get() {
							return q(this).description;
						},
					}),
					u || j(Q, 'propertyIsEnumerable', lt, {unsafe: !0}))),
				n({global: !0, constructor: !0, wrap: !0, forced: !s, sham: !s}, {Symbol: H}),
				F(b(ot), (t) => {
					C(t);
				}),
				n(
					{target: M, stat: !0, forced: !s},
					{
						useSetter() {
							it = !0;
						},
						useSimple() {
							it = !1;
						},
					}
				),
				n(
					{target: 'Object', stat: !0, forced: !s, sham: !c},
					{
						create(t, e) {
							return void 0 === e ? m(t) : ft(m(t), e);
						},
						defineProperty: st,
						defineProperties: ft,
						getOwnPropertyDescriptor: pt,
					}
				),
				n({target: 'Object', stat: !0, forced: !s}, {getOwnPropertyNames: ht}),
				A(),
				W(H, M),
				(T[U] = !0);
		},
		6544: function (t, e, r) {
			const n = r(9989),
				o = r(7697),
				i = r(9037),
				a = r(8844),
				u = r(6812),
				c = r(9985),
				s = r(3622),
				f = r(4327),
				l = r(2148),
				p = r(8758),
				h = i.Symbol,
				v = h && h.prototype;
			if (o && c(h) && (!('description' in v) || void 0 !== h().description)) {
				const d = {},
					y = function (...args) {
						const t = args.length < 1 || void 0 === args[0] ? void 0 : f(args[0]),
							e = s(v, this) ? new h(t) : void 0 === t ? h() : h(t);
						return '' === t && (d[e] = !0), e;
					};
				p(y, h), (y.prototype = v), (v.constructor = y);
				const g = 'Symbol(description detection)' === String(h('description detection')),
					m = a(v.valueOf),
					b = a(v.toString),
					w = /^Symbol\((.*)\)[^)]+$/,
					x = a(''.replace),
					k = a(''.slice);
				l(v, 'description', {
					configurable: !0,
					get() {
						const t = m(this);
						if (u(d, t)) return '';
						const e = b(t),
							r = g ? k(e, 7, -1) : x(e, w, '$1');
						return '' === r ? void 0 : r;
					},
				}),
					n({global: !0, constructor: !0, forced: !0}, {Symbol: y});
			}
		},
		3975: function (t, e, r) {
			const n = r(9989),
				o = r(6058),
				i = r(6812),
				a = r(4327),
				u = r(3430),
				c = r(6549),
				s = u('string-to-symbol-registry'),
				f = u('symbol-to-string-registry');
			n(
				{target: 'Symbol', stat: !0, forced: !c},
				{
					for(t) {
						const e = a(t);
						if (i(s, e)) return s[e];
						const r = o('Symbol')(e);
						return (s[e] = r), (f[r] = e), r;
					},
				}
			);
		},
		4254: function (t, e, r) {
			r(5405)('iterator');
		},
		9749: function (t, e, r) {
			r(7855), r(3975), r(1445), r(8324), r(9434);
		},
		1445: function (t, e, r) {
			const n = r(9989),
				o = r(6812),
				i = r(734),
				a = r(3691),
				u = r(3430),
				c = r(6549),
				s = u('symbol-to-string-registry');
			n(
				{target: 'Symbol', stat: !0, forced: !c},
				{
					keyFor(t) {
						if (!i(t)) throw new TypeError(`${a(t)} is not a symbol`);
						if (o(s, t)) return s[t];
					},
				}
			);
		},
		9373: function (t, e, r) {
			const n = r(5405),
				o = r(3032);
			n('toPrimitive'), o();
		},
		6793: function (t, e, r) {
			const n = r(6058),
				o = r(5405),
				i = r(5997);
			o('toStringTag'), i(n('Symbol'), 'Symbol');
		},
		6237: function (t, e, r) {
			const n = r(9989),
				o = r(2615),
				i = r(509),
				a = r(5027),
				u = r(8999),
				c = r(2302),
				s = r(7394),
				f = r(7807),
				l = r(2399),
				p = r(3931),
				h = s(function (t) {
					const e = this,
						r = e.iterator,
						n = e.predicate;
					return new t((i, c) => {
						const s = (t) => {
								(e.done = !0), c(t);
							},
							p = (t) => {
								l(r, s, t, s);
							},
							h = () => {
								try {
									t.resolve(a(o(e.next, r))).then((r) => {
										try {
											if (a(r).done) (e.done = !0), i(f(void 0, !0));
											else {
												const o = r.value;
												try {
													const c = n(o, e.counter++),
														l = (t) => {
															t ? i(f(o, !1)) : h();
														};
													u(c) ? t.resolve(c).then(l, p) : l(c);
												} catch (t) {
													p(t);
												}
											}
										} catch (t) {
											s(t);
										}
									}, s);
								} catch (t) {
									s(t);
								}
							};
						h();
					});
				});
			n(
				{target: 'AsyncIterator', proto: !0, real: !0, forced: p},
				{
					filter(t) {
						return a(this), i(t), new h(c(this), {predicate: t});
					},
				}
			);
		},
		1954: function (t, e, r) {
			const n = r(9989),
				o = r(2489).find;
			n(
				{target: 'AsyncIterator', proto: !0, real: !0},
				{
					find(t) {
						return o(this, t);
					},
				}
			);
		},
		9667: function (t, e, r) {
			const n = r(9989),
				o = r(2489).forEach;
			n(
				{target: 'AsyncIterator', proto: !0, real: !0},
				{
					forEach(t) {
						return o(this, t);
					},
				}
			);
		},
		7602: function (t, e, r) {
			const n = r(9989),
				o = r(9037),
				i = r(767),
				a = r(9985),
				u = r(1868),
				c = r(5773),
				s = r(3689),
				f = r(6812),
				l = r(4201),
				p = r(2013).IteratorPrototype,
				h = r(3931),
				v = l('toStringTag'),
				d = TypeError,
				y = o.Iterator,
				g =
					h ||
					!a(y) ||
					y.prototype !== p ||
					!s(() => {
						y({});
					}),
				m = function () {
					if ((i(this, p), u(this) === p)) throw new d('Abstract class Iterator not directly constructable');
				};
			f(p, v) || c(p, v, 'Iterator'),
				(!g && f(p, 'constructor') && p.constructor !== Object) || c(p, 'constructor', m),
				(m.prototype = p),
				n({global: !0, constructor: !0, forced: g}, {Iterator: m});
		},
		3476: function (t, e, r) {
			const n = r(9989),
				o = r(2615),
				i = r(509),
				a = r(5027),
				u = r(2302),
				c = r(5419),
				s = r(1228),
				f = r(3931),
				l = c(function () {
					for (let t, e, r = this.iterator, n = this.predicate, i = this.next; ; ) {
						if (((t = a(o(i, r))), (this.done = !!t.done))) return;
						if (((e = t.value), s(r, n, [e, this.counter++], !0))) return e;
					}
				});
			n(
				{target: 'Iterator', proto: !0, real: !0, forced: f},
				{
					filter(t) {
						return a(this), i(t), new l(u(this), {predicate: t});
					},
				}
			);
		},
		928: function (t, e, r) {
			const n = r(9989),
				o = r(8734),
				i = r(509),
				a = r(5027),
				u = r(2302);
			n(
				{target: 'Iterator', proto: !0, real: !0},
				{
					find(t) {
						a(this), i(t);
						const e = u(this);
						let r = 0;
						return o(
							e,
							(e, n) => {
								if (t(e, r++)) return n(e);
							},
							{IS_RECORD: !0, INTERRUPTED: !0}
						).result;
					},
				}
			);
		},
		5: function (t, e, r) {
			const n = r(9989),
				o = r(8734),
				i = r(509),
				a = r(5027),
				u = r(2302);
			n(
				{target: 'Iterator', proto: !0, real: !0},
				{
					forEach(t) {
						a(this), i(t);
						const e = u(this);
						let r = 0;
						o(
							e,
							(e) => {
								t(e, r++);
							},
							{IS_RECORD: !0}
						);
					},
				}
			);
		},
		691: function (t, e, r) {
			const n = r(9989),
				o = r(7697),
				i = r(9037),
				a = r(6058),
				u = r(8844),
				c = r(2615),
				s = r(9985),
				f = r(8999),
				l = r(2297),
				p = r(6812),
				h = r(4327),
				v = r(6310),
				d = r(6522),
				y = r(3689),
				g = r(6675),
				m = r(146),
				b = i.JSON,
				w = i.Number,
				x = i.SyntaxError,
				k = b && b.parse,
				S = a('Object', 'keys'),
				E = Object.getOwnPropertyDescriptor,
				O = u(''.charAt),
				P = u(''.slice),
				j = u(/./.exec),
				L = u([].push),
				_ = /^\d$/,
				I = /^[1-9]$/,
				T = /^(?:-|\d)$/,
				R = /^[\t\n\r ]$/,
				$ = (t, e, r, n) => {
					let o;
					let i;
					let a;
					let u;
					let s;
					const h = t[e];
					const d = n && h === n.value;
					const y = d && 'string' == typeof n.source ? {source: n.source} : {};
					if (f(h)) {
						const g = l(h),
							m = d ? n.nodes : g ? [] : {};
						if (g)
							for (o = m.length, a = v(h), u = 0; u < a; u++)
								N(h, u, $(h, `${u}`, r, u < o ? m[u] : void 0));
						else
							for (i = S(h), a = v(i), u = 0; u < a; u++)
								(s = i[u]), N(h, s, $(h, s, r, p(m, s) ? m[s] : void 0));
					}
					return c(r, t, e, h, y);
				},
				N = (t, e, r) => {
					if (o) {
						const n = E(t, e);
						if (n && !n.configurable) return;
					}
					void 0 === r ? delete t[e] : d(t, e, r);
				},
				C = function (t, e, r, n) {
					(this.value = t), (this.end = e), (this.source = r), (this.nodes = n);
				},
				A = function (t, e) {
					(this.source = t), (this.index = e);
				};
			A.prototype = {
				fork(t) {
					return new A(this.source, t);
				},
				parse() {
					const t = this.source,
						e = this.skip(R, this.index),
						r = this.fork(e),
						n = O(t, e);
					if (j(T, n)) return r.number();
					switch (n) {
						case '{':
							return r.object();
						case '[':
							return r.array();
						case '"':
							return r.string();
						case 't':
							return r.keyword(!0);
						case 'f':
							return r.keyword(!1);
						case 'n':
							return r.keyword(null);
					}
					throw new x(`Unexpected character: "${n}" at: ${e}`);
				},
				node(t, e, r, n, o) {
					return new C(e, n, t ? null : P(this.source, r, n), o);
				},
				object() {
					for (var t = this.source, e = this.index + 1, r = !1, n = {}, o = {}; e < t.length; ) {
						if (((e = this.until(['"', '}'], e)), '}' === O(t, e) && !r)) {
							e++;
							break;
						}
						let i = this.fork(e).string();
						const a = i.value;
						(e = i.end),
							(e = this.until([':'], e) + 1),
							(e = this.skip(R, e)),
							(i = this.fork(e).parse()),
							d(o, a, i),
							d(n, a, i.value),
							(e = this.until([',', '}'], i.end));
						const u = O(t, e);
						if (',' === u) (r = !0), e++;
						else if ('}' === u) {
							e++;
							break;
						}
					}
					return this.node(1, n, this.index, e, o);
				},
				array() {
					for (var t = this.source, e = this.index + 1, r = !1, n = [], o = []; e < t.length; ) {
						if (((e = this.skip(R, e)), ']' === O(t, e) && !r)) {
							e++;
							break;
						}
						const i = this.fork(e).parse();
						if ((L(o, i), L(n, i.value), (e = this.until([',', ']'], i.end)), ',' === O(t, e)))
							(r = !0), e++;
						else if (']' === O(t, e)) {
							e++;
							break;
						}
					}
					return this.node(1, n, this.index, e, o);
				},
				string() {
					const t = this.index,
						e = g(this.source, this.index + 1);
					return this.node(0, e.value, t, e.end);
				},
				number() {
					const t = this.source;
					const e = this.index;
					let r = e;
					if (('-' === O(t, r) && r++, '0' === O(t, r))) r++;
					else {
						if (!j(I, O(t, r))) throw new x(`Failed to parse number at: ${r}`);
						r = this.skip(_, ++r);
					}
					if (
						('.' === O(t, r) && (r = this.skip(_, ++r)), 'e' === O(t, r) || 'E' === O(t, r)) &&
						(r++, ('+' !== O(t, r) && '-' !== O(t, r)) || r++, r === (r = this.skip(_, r)))
					)
						throw new x(`Failed to parse number's exponent value at: ${r}`);
					return this.node(0, w(P(t, e, r)), e, r);
				},
				keyword(t) {
					const e = `${t}`,
						r = this.index,
						n = r + e.length;
					if (P(this.source, r, n) !== e) throw new x(`Failed to parse value at: ${r}`);
					return this.node(0, t, r, n);
				},
				skip(t, e) {
					for (const r = this.source; e < r.length && j(t, O(r, e)); e++);
					return e;
				},
				until(t, e) {
					e = this.skip(R, e);
					for (var r = O(this.source, e), n = 0; n < t.length; n++) if (t[n] === r) return e;
					throw new x(`Unexpected character: "${r}" at: ${e}`);
				},
			};
			const W = y(() => {
					let t;
					const e = '9007199254740993';
					return (
						k(e, (e, r, {source}) => {
							t = source;
						}),
						t !== e
					);
				}),
				B =
					m &&
					!y(() => {
						return 1 / k('-0 \t') != -1 / 0;
					});
			n(
				{target: 'JSON', stat: !0, forced: W},
				{
					parse(t, e) {
						return B && !s(e)
							? k(t)
							: ((t, e) => {
									t = h(t);
									const r = new A(t, 0, ''),
										n = r.parse(),
										o = n.value,
										i = r.skip(R, n.end);
									if (i < t.length)
										throw new x(
											`Unexpected extra character: "${O(t, i)}" after the parsed data at: ${i}`
										);
									return s(e) ? $({'': o}, '', e, n) : o;
							  })(t, e);
					},
				}
			);
		},
		7444: function (t, e, r) {
			const n = r(9989),
				o = r(9945),
				i = r(3914).remove;
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					deleteAll(...args) {
						for (var t, e = o(this), r = !0, n = 0, a = args.length; n < a; n++)
							(t = i(e, args[n])), (r = r && t);
						return !!r;
					},
				}
			);
		},
		7968: function (t, e, r) {
			const n = r(9989),
				o = r(9945),
				i = r(3914),
				a = i.get,
				u = i.has,
				c = i.set;
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					emplace(t, e) {
						let r;
						let n;
						const i = o(this);
						return u(i, t)
							? ((r = a(i, t)), 'update' in e && ((r = e.update(r, t, i)), c(i, t, r)), r)
							: ((n = e.insert(t, i)), c(i, t, n), n);
					},
				}
			);
		},
		747: function (t, e, r) {
			const n = r(9989),
				o = r(4071),
				i = r(9945),
				a = r(613);
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					every(t) {
						const e = i(this),
							r = o(t, arguments.length > 1 ? arguments[1] : void 0);
						return (
							!1 !==
							a(
								e,
								(t, n) => {
									if (!r(t, n, e)) return !1;
								},
								!0
							)
						);
					},
				}
			);
		},
		1099: function (t, e, r) {
			const n = r(9989),
				o = r(4071),
				i = r(9945),
				a = r(3914),
				u = r(613),
				c = a.Map,
				s = a.set;
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					filter(t) {
						const e = i(this),
							r = o(t, arguments.length > 1 ? arguments[1] : void 0),
							n = new c();
						return (
							u(e, (t, o) => {
								r(t, o, e) && s(n, o, t);
							}),
							n
						);
					},
				}
			);
		},
		876: function (t, e, r) {
			const n = r(9989),
				o = r(4071),
				i = r(9945),
				a = r(613);
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					findKey(t) {
						const e = i(this),
							r = o(t, arguments.length > 1 ? arguments[1] : void 0),
							n = a(
								e,
								(t, n) => {
									if (r(t, n, e)) return {key: n};
								},
								!0
							);
						return n && n.key;
					},
				}
			);
		},
		6320: function (t, e, r) {
			const n = r(9989),
				o = r(4071),
				i = r(9945),
				a = r(613);
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					find(t) {
						const e = i(this),
							r = o(t, arguments.length > 1 ? arguments[1] : void 0),
							n = a(
								e,
								(t, n) => {
									if (r(t, n, e)) return {value: t};
								},
								!0
							);
						return n && n.value;
					},
				}
			);
		},
		6791: function (t, e, r) {
			const n = r(9989),
				o = r(8600),
				i = r(9945),
				a = r(613);
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					includes(t) {
						return (
							!0 ===
							a(
								i(this),
								(e) => {
									if (o(e, t)) return !0;
								},
								!0
							)
						);
					},
				}
			);
		},
		19: function (t, e, r) {
			const n = r(9989),
				o = r(9945),
				i = r(613);
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					keyOf(t) {
						const e = i(
							o(this),
							(e, r) => {
								if (e === t) return {key: r};
							},
							!0
						);
						return e && e.key;
					},
				}
			);
		},
		2343: function (t, e, r) {
			const n = r(9989),
				o = r(4071),
				i = r(9945),
				a = r(3914),
				u = r(613),
				c = a.Map,
				s = a.set;
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					mapKeys(t) {
						const e = i(this),
							r = o(t, arguments.length > 1 ? arguments[1] : void 0),
							n = new c();
						return (
							u(e, (t, o) => {
								s(n, r(t, o, e), t);
							}),
							n
						);
					},
				}
			);
		},
		1096: function (t, e, r) {
			const n = r(9989),
				o = r(4071),
				i = r(9945),
				a = r(3914),
				u = r(613),
				c = a.Map,
				s = a.set;
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					mapValues(t) {
						const e = i(this),
							r = o(t, arguments.length > 1 ? arguments[1] : void 0),
							n = new c();
						return (
							u(e, (t, o) => {
								s(n, o, r(t, o, e));
							}),
							n
						);
					},
				}
			);
		},
		4314: function (t, e, r) {
			const n = r(9989),
				o = r(9945),
				i = r(8734),
				a = r(3914).set;
			n(
				{target: 'Map', proto: !0, real: !0, arity: 1, forced: !0},
				{
					merge(t) {
						for (var e = o(this), r = arguments.length, n = 0; n < r; )
							i(
								arguments[n++],
								(t, r) => {
									a(e, t, r);
								},
								{AS_ENTRIES: !0}
							);
						return e;
					},
				}
			);
		},
		3346: function (t, e, r) {
			const n = r(9989),
				o = r(509),
				i = r(9945),
				a = r(613),
				u = TypeError;
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					reduce(t) {
						const e = i(this);
						let r = arguments.length < 2;
						let n = r ? void 0 : arguments[1];
						if (
							(o(t),
							a(e, (o, i) => {
								r ? ((r = !1), (n = o)) : (n = t(n, o, i, e));
							}),
							r)
						)
							throw new u('Reduce of empty map with no initial value');
						return n;
					},
				}
			);
		},
		4984: function (t, e, r) {
			const n = r(9989),
				o = r(4071),
				i = r(9945),
				a = r(613);
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					some(t) {
						const e = i(this),
							r = o(t, arguments.length > 1 ? arguments[1] : void 0);
						return (
							!0 ===
							a(
								e,
								(t, n) => {
									if (r(t, n, e)) return !0;
								},
								!0
							)
						);
					},
				}
			);
		},
		4078: function (t, e, r) {
			const n = r(9989),
				o = r(509),
				i = r(9945),
				a = r(3914),
				u = TypeError,
				c = a.get,
				s = a.has,
				f = a.set;
			n(
				{target: 'Map', proto: !0, real: !0, forced: !0},
				{
					update(t, e) {
						const r = i(this),
							n = arguments.length;
						o(e);
						const a = s(r, t);
						if (!a && n < 3) throw new u('Updating absent value');
						const l = a ? c(r, t) : o(n > 2 ? arguments[2] : void 0)(t, r);
						return f(r, t, e(l, t, r)), r;
					},
				}
			);
		},
		7522: function (t, e, r) {
			const n = r(9037),
				o = r(6338),
				i = r(3265),
				a = r(7612),
				u = r(5773),
				c = (t) => {
					if (t && t.forEach !== a)
						try {
							u(t, 'forEach', a);
						} catch (e) {
							t.forEach = a;
						}
				};
			for (const s in o) o[s] && c(n[s] && n[s].prototype);
			c(i);
		},
		6265: function (t, e, r) {
			const n = r(9037),
				o = r(6338),
				i = r(3265),
				a = r(752),
				u = r(5773),
				c = r(4201),
				s = c('iterator'),
				f = c('toStringTag'),
				l = a.values,
				p = (t, e) => {
					if (t) {
						if (t[s] !== l)
							try {
								u(t, s, l);
							} catch (e) {
								t[s] = l;
							}
						if ((t[f] || u(t, f, e), o[e]))
							for (const r in a)
								if (t[r] !== a[r])
									try {
										u(t, r, a[r]);
									} catch (e) {
										t[r] = a[r];
									}
					}
				};
			for (const h in o) p(n[h] && n[h].prototype, h);
			p(i, 'DOMTokenList');
		},
		2625: function (t, e, r) {
			r(752);
			const n = r(9989),
				o = r(9037),
				i = r(2615),
				a = r(8844),
				u = r(7697),
				c = r(6837),
				s = r(1880),
				f = r(2148),
				l = r(6045),
				p = r(5997),
				h = r(974),
				v = r(618),
				d = r(767),
				y = r(9985),
				g = r(6812),
				m = r(4071),
				b = r(926),
				w = r(5027),
				x = r(8999),
				k = r(4327),
				S = r(5391),
				E = r(5684),
				O = r(5185),
				P = r(1664),
				j = r(7807),
				L = r(1500),
				_ = r(4201),
				I = r(382),
				T = _('iterator'),
				R = 'URLSearchParams',
				$ = `${R}Iterator`,
				N = v.set,
				C = v.getterFor(R),
				A = v.getterFor($),
				W = Object.getOwnPropertyDescriptor,
				B = (t) => {
					if (!u) return o[t];
					const e = W(o, t);
					return e && e.value;
				},
				F = B('fetch'),
				U = B('Request'),
				M = B('Headers'),
				D = U && U.prototype,
				G = M && M.prototype,
				q = o.RegExp,
				Q = o.TypeError,
				H = o.decodeURIComponent,
				z = o.encodeURIComponent,
				Y = a(''.charAt),
				V = a([].join),
				J = a([].push),
				K = a(''.replace),
				X = a([].shift),
				Z = a([].splice),
				tt = a(''.split),
				et = a(''.slice),
				rt = /\+/g,
				nt = Array(4),
				ot = (t) => {
					return nt[t - 1] || (nt[t - 1] = q(`((?:%[\\da-f]{2}){${t}})`, 'gi'));
				},
				it = (t) => {
					try {
						return H(t);
					} catch (e) {
						return t;
					}
				},
				at = (t) => {
					let e = K(t, rt, ' '),
						r = 4;
					try {
						return H(e);
					} catch (t) {
						for (; r; ) e = K(e, ot(r--), it);
						return e;
					}
				},
				ut = /[!'()~]|%20/g,
				ct = {'!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+'},
				st = (t) => {
					return ct[t];
				},
				ft = (t) => {
					return K(z(t), ut, st);
				},
				lt = h(
					function (t, e) {
						N(this, {type: $, target: C(t).entries, index: 0, kind: e});
					},
					R,
					function () {
						const t = A(this),
							e = t.target,
							r = t.index++;
						if (!e || r >= e.length) return (t.target = void 0), j(void 0, !0);
						const n = e[r];
						switch (t.kind) {
							case 'keys':
								return j(n.key, !1);
							case 'values':
								return j(n.value, !1);
						}
						return j([n.key, n.value], !1);
					},
					!0
				),
				pt = function (t) {
					(this.entries = []),
						(this.url = null),
						void 0 !== t &&
							(x(t)
								? this.parseObject(t)
								: this.parseQuery('string' == typeof t ? ('?' === Y(t, 0) ? et(t, 1) : t) : k(t)));
				};
			pt.prototype = {
				type: R,
				bindURL(t) {
					(this.url = t), this.update();
				},
				parseObject(t) {
					let e;
					let r;
					let n;
					let o;
					let a;
					let u;
					let c;
					const s = this.entries;
					const f = P(t);
					if (f)
						for (r = (e = O(t, f)).next; !(n = i(r, e)).done; ) {
							if (
								((a = (o = O(w(n.value))).next),
								(u = i(a, o)).done || (c = i(a, o)).done || !i(a, o).done)
							)
								throw new Q('Expected sequence with length 2');
							J(s, {key: k(u.value), value: k(c.value)});
						}
					else for (const l in t) g(t, l) && J(s, {key: l, value: k(t[l])});
				},
				parseQuery(t) {
					if (t)
						for (let e, r, n = this.entries, o = tt(t, '&'), i = 0; i < o.length; )
							(e = o[i++]).length && ((r = tt(e, '=')), J(n, {key: at(X(r)), value: at(V(r, '='))}));
				},
				serialize() {
					for (var t, e = this.entries, r = [], n = 0; n < e.length; )
						(t = e[n++]), J(r, `${ft(t.key)}=${ft(t.value)}`);
					return V(r, '&');
				},
				update() {
					(this.entries.length = 0), this.parseQuery(this.url.query);
				},
				updateURL() {
					this.url && this.url.update();
				},
			};
			const ht = function (...args) {
					d(this, vt);
					const t = N(this, new pt(args.length > 0 ? args[0] : void 0));
					u || (this.size = t.entries.length);
				},
				vt = ht.prototype;
			if (
				(l(
					vt,
					{
						append(t, e) {
							const r = C(this);
							L(arguments.length, 2),
								J(r.entries, {key: k(t), value: k(e)}),
								u || this.length++,
								r.updateURL();
						},
						delete(t) {
							for (
								var e = C(this),
									r = L(arguments.length, 1),
									n = e.entries,
									o = k(t),
									i = r < 2 ? void 0 : arguments[1],
									a = void 0 === i ? i : k(i),
									c = 0;
								c < n.length;

							) {
								const s = n[c];
								if (s.key !== o || (void 0 !== a && s.value !== a)) c++;
								else if ((Z(n, c, 1), void 0 !== a)) break;
							}
							u || (this.size = n.length), e.updateURL();
						},
						get(t) {
							const e = C(this).entries;
							L(arguments.length, 1);
							for (let r = k(t), n = 0; n < e.length; n++) if (e[n].key === r) return e[n].value;
							return null;
						},
						getAll(t) {
							const e = C(this).entries;
							L(arguments.length, 1);
							for (var r = k(t), n = [], o = 0; o < e.length; o++) e[o].key === r && J(n, e[o].value);
							return n;
						},
						has(t) {
							for (
								let e = C(this).entries,
									r = L(arguments.length, 1),
									n = k(t),
									o = r < 2 ? void 0 : arguments[1],
									i = void 0 === o ? o : k(o),
									a = 0;
								a < e.length;

							) {
								const u = e[a++];
								if (u.key === n && (void 0 === i || u.value === i)) return !0;
							}
							return !1;
						},
						set(t, e) {
							const r = C(this);
							L(arguments.length, 1);
							for (var n, o = r.entries, i = !1, a = k(t), c = k(e), s = 0; s < o.length; s++)
								(n = o[s]).key === a && (i ? Z(o, s--, 1) : ((i = !0), (n.value = c)));
							i || J(o, {key: a, value: c}), u || (this.size = o.length), r.updateURL();
						},
						sort() {
							const t = C(this);
							I(t.entries, ({key}, {key}) => {
								return key > key ? 1 : -1;
							}),
								t.updateURL();
						},
						forEach(t) {
							for (
								let e,
									r = C(this).entries,
									n = m(t, arguments.length > 1 ? arguments[1] : void 0),
									o = 0;
								o < r.length;

							)
								n((e = r[o++]).value, e.key, this);
						},
						keys() {
							return new lt(this, 'keys');
						},
						values() {
							return new lt(this, 'values');
						},
						entries() {
							return new lt(this, 'entries');
						},
					},
					{enumerable: !0}
				),
				s(vt, T, vt.entries, {name: 'entries'}),
				s(
					vt,
					'toString',
					function () {
						return C(this).serialize();
					},
					{enumerable: !0}
				),
				u &&
					f(vt, 'size', {
						get() {
							return C(this).entries.length;
						},
						configurable: !0,
						enumerable: !0,
					}),
				p(ht, R),
				n({global: !0, constructor: !0, forced: !c}, {URLSearchParams: ht}),
				!c && y(M))
			) {
				const dt = a(G.has),
					yt = a(G.set),
					gt = (t) => {
						if (x(t)) {
							let e;
							const r = t.body;
							if (b(r) === R)
								return (
									(e = t.headers ? new M(t.headers) : new M()),
									dt(e, 'content-type') ||
										yt(e, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
									S(t, {body: E(0, k(r)), headers: E(0, e)})
								);
						}
						return t;
					};
				if (
					(y(F) &&
						n(
							{global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0},
							{
								fetch(t) {
									return F(t, arguments.length > 1 ? gt(arguments[1]) : {});
								},
							}
						),
					y(U))
				) {
					const mt = function (t) {
						return d(this, D), new U(t, arguments.length > 1 ? gt(arguments[1]) : {});
					};
					(D.constructor = mt),
						(mt.prototype = D),
						n({global: !0, constructor: !0, dontCallGetSet: !0, forced: !0}, {Request: mt});
				}
			}
			t.exports = {URLSearchParams: ht, getState: C};
		},
		8858: function (t, e, r) {
			const n = r(1880),
				o = r(8844),
				i = r(4327),
				a = r(1500),
				u = URLSearchParams,
				c = u.prototype,
				s = o(c.append),
				f = o(c.delete),
				l = o(c.forEach),
				p = o([].push),
				h = new u('a=1&a=2&b=3');
			h.delete('a', 1),
				h.delete('b', void 0),
				`${h}` != 'a=2' &&
					n(
						c,
						'delete',
						function (t) {
							const e = arguments.length,
								r = e < 2 ? void 0 : arguments[1];
							if (e && void 0 === r) return f(this, t);
							const n = [];
							l(this, (t, e) => {
								p(n, {key: e, value: t});
							}),
								a(e, 1);
							for (var o, u = i(t), c = i(r), h = 0, v = 0, d = !1, y = n.length; h < y; )
								(o = n[h++]), d || o.key === u ? ((d = !0), f(this, o.key)) : v++;
							for (; v < y; ) ((o = n[v++]).key === u && o.value === c) || s(this, o.key, o.value);
						},
						{enumerable: !0, unsafe: !0}
					);
		},
		1318: function (t, e, r) {
			const n = r(1880),
				o = r(8844),
				i = r(4327),
				a = r(1500),
				u = URLSearchParams,
				c = u.prototype,
				s = o(c.getAll),
				f = o(c.has),
				l = new u('a=1');
			(!l.has('a', 2) && l.has('a', void 0)) ||
				n(
					c,
					'has',
					function (t) {
						const e = arguments.length,
							r = e < 2 ? void 0 : arguments[1];
						if (e && void 0 === r) return f(this, t);
						const n = s(this, t);
						a(e, 1);
						for (let o = i(r), u = 0; u < n.length; ) if (n[u++] === o) return !0;
						return !1;
					},
					{enumerable: !0, unsafe: !0}
				);
		},
		9307: function (t, e, r) {
			r(2625);
		},
		3228: function (t, e, r) {
			const n = r(7697),
				o = r(8844),
				i = r(2148),
				a = URLSearchParams.prototype,
				u = o(a.forEach);
			n &&
				!('size' in a) &&
				i(a, 'size', {
					get() {
						let t = 0;
						return (
							u(this, () => {
								t++;
							}),
							t
						);
					},
					configurable: !0,
					enumerable: !0,
				});
		},
		9391: function (t, e, r) {
			r(1694);
			let n;
			const o = r(9989);
			const i = r(7697);
			const a = r(6837);
			const u = r(9037);
			const c = r(4071);
			const s = r(8844);
			const f = r(1880);
			const l = r(2148);
			const p = r(767);
			const h = r(6812);
			const v = r(5394);
			const d = r(1055);
			const y = r(9015);
			const g = r(730).codeAt;
			const m = r(6430);
			const b = r(4327);
			const w = r(5997);
			const x = r(1500);
			const k = r(2625);
			const S = r(618);
			const E = S.set;
			const O = S.getterFor('URL');
			const P = k.URLSearchParams;
			const j = k.getState;
			const L = u.URL;
			const _ = u.TypeError;
			const I = u.parseInt;
			const T = Math.floor;
			const R = Math.pow;
			const $ = s(''.charAt);
			const N = s(/./.exec);
			const C = s([].join);
			const A = s((1).toString);
			const W = s([].pop);
			const B = s([].push);
			const F = s(''.replace);
			const U = s([].shift);
			const M = s(''.split);
			const D = s(''.slice);
			const G = s(''.toLowerCase);
			const q = s([].unshift);
			const Q = 'Invalid scheme';
			const H = 'Invalid host';
			const z = 'Invalid port';
			const Y = /[a-z]/i;
			const V = /[\d+-.a-z]/i;
			const J = /\d/;
			const K = /^0x/i;
			const X = /^[0-7]+$/;
			const Z = /^\d+$/;
			const tt = /^[\da-f]+$/i;
			const et = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
			const rt = /[\0\t\n\r #/:<>?@[\\\]^|]/;
			const nt = /^[\u0000-\u0020]+/;
			const ot = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
			const it = /[\t\n\r]/g;

			const at = (t) => {
				let e, r, n, o;
				if ('number' == typeof t) {
					for (e = [], r = 0; r < 4; r++) q(e, t % 256), (t = T(t / 256));
					return C(e, '.');
				}
				if ('object' == typeof t) {
					for (
						e = '',
							n = ((t) => {
								for (var e = null, r = 1, n = null, o = 0, i = 0; i < 8; i++)
									0 !== t[i]
										? (o > r && ((e = n), (r = o)), (n = null), (o = 0))
										: (null === n && (n = i), ++o);
								return o > r && ((e = n), (r = o)), e;
							})(t),
							r = 0;
						r < 8;
						r++
					)
						(o && 0 === t[r]) ||
							(o && (o = !1),
							n === r ? ((e += r ? ':' : '::'), (o = !0)) : ((e += A(t[r], 16)), r < 7 && (e += ':')));
					return `[${e}]`;
				}
				return t;
			};

			const ut = {};
			const ct = v({}, ut, {' ': 1, '"': 1, '<': 1, '>': 1, '`': 1});
			const st = v({}, ct, {'#': 1, '?': 1, '{': 1, '}': 1});
			const ft = v({}, st, {'/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1});

			const lt = (t, e) => {
				const r = g(t, 0);
				return r > 32 && r < 127 && !h(e, t) ? t : encodeURIComponent(t);
			};

			const pt = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443};

			const ht = (t, e) => {
				let r;
				return 2 === t.length && N(Y, $(t, 0)) && (':' === (r = $(t, 1)) || (!e && '|' === r));
			};

			const vt = (t) => {
				let e;
				return (
					t.length > 1 &&
					ht(D(t, 0, 2)) &&
					(2 === t.length || '/' === (e = $(t, 2)) || '\\' === e || '?' === e || '#' === e)
				);
			};

			const dt = (t) => {
				return '.' === t || '%2e' === G(t);
			};

			const yt = {};
			const gt = {};
			const mt = {};
			const bt = {};
			const wt = {};
			const xt = {};
			const kt = {};
			const St = {};
			const Et = {};
			const Ot = {};
			const Pt = {};
			const jt = {};
			const Lt = {};
			const _t = {};
			const It = {};
			const Tt = {};
			const Rt = {};
			const $t = {};
			const Nt = {};
			const Ct = {};
			const At = {};

			const Wt = function (t, e, r) {
				let n;
				let o;
				let i;
				const a = b(t);
				if (e) {
					if ((o = this.parse(a))) throw new _(o);
					this.searchParams = null;
				} else {
					if ((void 0 !== r && (n = new Wt(r, !0)), (o = this.parse(a, null, n)))) throw new _(o);
					(i = j(new P())).bindURL(this), (this.searchParams = i);
				}
			};

			Wt.prototype = {
				type: 'URL',
				parse(t, e, r) {
					let o;
					let i;
					let a;
					let u;
					let c;
					const s = this;
					let f = e || yt;
					let l = 0;
					let p = '';
					let v = !1;
					let g = !1;
					let m = !1;
					for (
						t = b(t),
							e ||
								((s.scheme = ''),
								(s.username = ''),
								(s.password = ''),
								(s.host = null),
								(s.port = null),
								(s.path = []),
								(s.query = null),
								(s.fragment = null),
								(s.cannotBeABaseURL = !1),
								(t = F(t, nt, '')),
								(t = F(t, ot, '$1'))),
							t = F(t, it, ''),
							o = d(t);
						l <= o.length;

					) {
						switch (((i = o[l]), f)) {
							case yt:
								if (!i || !N(Y, i)) {
									if (e) return Q;
									f = mt;
									continue;
								}
								(p += G(i)), (f = gt);
								break;
							case gt:
								if (i && (N(V, i) || '+' === i || '-' === i || '.' === i)) p += G(i);
								else {
									if (':' !== i) {
										if (e) return Q;
										(p = ''), (f = mt), (l = 0);
										continue;
									}
									if (
										e &&
										(s.isSpecial() !== h(pt, p) ||
											('file' === p && (s.includesCredentials() || null !== s.port)) ||
											('file' === s.scheme && !s.host))
									)
										return;
									if (((s.scheme = p), e))
										return void (s.isSpecial() && pt[s.scheme] === s.port && (s.port = null));
									(p = ''),
										'file' === s.scheme
											? (f = _t)
											: s.isSpecial() && r && r.scheme === s.scheme
											  ? (f = bt)
											  : s.isSpecial()
											    ? (f = St)
											    : '/' === o[l + 1]
											      ? ((f = wt), l++)
											      : ((s.cannotBeABaseURL = !0), B(s.path, ''), (f = Nt));
								}
								break;
							case mt:
								if (!r || (r.cannotBeABaseURL && '#' !== i)) return Q;
								if (r.cannotBeABaseURL && '#' === i) {
									(s.scheme = r.scheme),
										(s.path = y(r.path)),
										(s.query = r.query),
										(s.fragment = ''),
										(s.cannotBeABaseURL = !0),
										(f = At);
									break;
								}
								f = 'file' === r.scheme ? _t : xt;
								continue;
							case bt:
								if ('/' !== i || '/' !== o[l + 1]) {
									f = xt;
									continue;
								}
								(f = Et), l++;
								break;
							case wt:
								if ('/' === i) {
									f = Ot;
									break;
								}
								f = $t;
								continue;
							case xt:
								if (((s.scheme = r.scheme), i === n))
									(s.username = r.username),
										(s.password = r.password),
										(s.host = r.host),
										(s.port = r.port),
										(s.path = y(r.path)),
										(s.query = r.query);
								else if ('/' === i || ('\\' === i && s.isSpecial())) f = kt;
								else if ('?' === i)
									(s.username = r.username),
										(s.password = r.password),
										(s.host = r.host),
										(s.port = r.port),
										(s.path = y(r.path)),
										(s.query = ''),
										(f = Ct);
								else {
									if ('#' !== i) {
										(s.username = r.username),
											(s.password = r.password),
											(s.host = r.host),
											(s.port = r.port),
											(s.path = y(r.path)),
											s.path.length--,
											(f = $t);
										continue;
									}
									(s.username = r.username),
										(s.password = r.password),
										(s.host = r.host),
										(s.port = r.port),
										(s.path = y(r.path)),
										(s.query = r.query),
										(s.fragment = ''),
										(f = At);
								}
								break;
							case kt:
								if (!s.isSpecial() || ('/' !== i && '\\' !== i)) {
									if ('/' !== i) {
										(s.username = r.username),
											(s.password = r.password),
											(s.host = r.host),
											(s.port = r.port),
											(f = $t);
										continue;
									}
									f = Ot;
								} else f = Et;
								break;
							case St:
								if (((f = Et), '/' !== i || '/' !== $(p, l + 1))) continue;
								l++;
								break;
							case Et:
								if ('/' !== i && '\\' !== i) {
									f = Ot;
									continue;
								}
								break;
							case Ot:
								if ('@' === i) {
									v && (p = `%40${p}`), (v = !0), (a = d(p));
									for (let w = 0; w < a.length; w++) {
										const x = a[w];
										if (':' !== x || m) {
											const k = lt(x, ft);
											m ? (s.password += k) : (s.username += k);
										} else m = !0;
									}
									p = '';
								} else if (
									i === n ||
									'/' === i ||
									'?' === i ||
									'#' === i ||
									('\\' === i && s.isSpecial())
								) {
									if (v && '' === p) return 'Invalid authority';
									(l -= d(p).length + 1), (p = ''), (f = Pt);
								} else p += i;
								break;
							case Pt:
							case jt:
								if (e && 'file' === s.scheme) {
									f = Tt;
									continue;
								}
								if (':' !== i || g) {
									if (
										i === n ||
										'/' === i ||
										'?' === i ||
										'#' === i ||
										('\\' === i && s.isSpecial())
									) {
										if (s.isSpecial() && '' === p) return H;
										if (e && '' === p && (s.includesCredentials() || null !== s.port)) return;
										if ((u = s.parseHost(p))) return u;
										if (((p = ''), (f = Rt), e)) return;
										continue;
									}
									'[' === i ? (g = !0) : ']' === i && (g = !1), (p += i);
								} else {
									if ('' === p) return H;
									if ((u = s.parseHost(p))) return u;
									if (((p = ''), (f = Lt), e === jt)) return;
								}
								break;
							case Lt:
								if (!N(J, i)) {
									if (
										i === n ||
										'/' === i ||
										'?' === i ||
										'#' === i ||
										('\\' === i && s.isSpecial()) ||
										e
									) {
										if ('' !== p) {
											const S = I(p, 10);
											if (S > 65535) return z;
											(s.port = s.isSpecial() && S === pt[s.scheme] ? null : S), (p = '');
										}
										if (e) return;
										f = Rt;
										continue;
									}
									return z;
								}
								p += i;
								break;
							case _t:
								if (((s.scheme = 'file'), '/' === i || '\\' === i)) f = It;
								else {
									if (!r || 'file' !== r.scheme) {
										f = $t;
										continue;
									}
									switch (i) {
										case n:
											(s.host = r.host), (s.path = y(r.path)), (s.query = r.query);
											break;
										case '?':
											(s.host = r.host), (s.path = y(r.path)), (s.query = ''), (f = Ct);
											break;
										case '#':
											(s.host = r.host),
												(s.path = y(r.path)),
												(s.query = r.query),
												(s.fragment = ''),
												(f = At);
											break;
										default:
											vt(C(y(o, l), '')) ||
												((s.host = r.host), (s.path = y(r.path)), s.shortenPath()),
												(f = $t);
											continue;
									}
								}
								break;
							case It:
								if ('/' === i || '\\' === i) {
									f = Tt;
									break;
								}
								r &&
									'file' === r.scheme &&
									!vt(C(y(o, l), '')) &&
									(ht(r.path[0], !0) ? B(s.path, r.path[0]) : (s.host = r.host)),
									(f = $t);
								continue;
							case Tt:
								if (i === n || '/' === i || '\\' === i || '?' === i || '#' === i) {
									if (!e && ht(p)) f = $t;
									else if ('' === p) {
										if (((s.host = ''), e)) return;
										f = Rt;
									} else {
										if ((u = s.parseHost(p))) return u;
										if (('localhost' === s.host && (s.host = ''), e)) return;
										(p = ''), (f = Rt);
									}
									continue;
								}
								p += i;
								break;
							case Rt:
								if (s.isSpecial()) {
									if (((f = $t), '/' !== i && '\\' !== i)) continue;
								} else if (e || '?' !== i)
									if (e || '#' !== i) {
										if (i !== n && ((f = $t), '/' !== i)) continue;
									} else (s.fragment = ''), (f = At);
								else (s.query = ''), (f = Ct);
								break;
							case $t:
								if (
									i === n ||
									'/' === i ||
									('\\' === i && s.isSpecial()) ||
									(!e && ('?' === i || '#' === i))
								) {
									if (
										('..' === (c = G((c = p))) || '%2e.' === c || '.%2e' === c || '%2e%2e' === c
											? (s.shortenPath(),
											  '/' === i || ('\\' === i && s.isSpecial()) || B(s.path, ''))
											: dt(p)
											  ? '/' === i || ('\\' === i && s.isSpecial()) || B(s.path, '')
											  : ('file' === s.scheme &&
														!s.path.length &&
														ht(p) &&
														(s.host && (s.host = ''), (p = `${$(p, 0)}:`)),
											    B(s.path, p)),
										(p = ''),
										'file' === s.scheme && (i === n || '?' === i || '#' === i))
									)
										for (; s.path.length > 1 && '' === s.path[0]; ) U(s.path);
									'?' === i ? ((s.query = ''), (f = Ct)) : '#' === i && ((s.fragment = ''), (f = At));
								} else p += lt(i, st);
								break;
							case Nt:
								'?' === i
									? ((s.query = ''), (f = Ct))
									: '#' === i
									  ? ((s.fragment = ''), (f = At))
									  : i !== n && (s.path[0] += lt(i, ut));
								break;
							case Ct:
								e || '#' !== i
									? i !== n &&
									  ("'" === i && s.isSpecial()
											? (s.query += '%27')
											: (s.query += '#' === i ? '%23' : lt(i, ut)))
									: ((s.fragment = ''), (f = At));
								break;
							case At:
								i !== n && (s.fragment += lt(i, ct));
						}
						l++;
					}
				},
				parseHost(t) {
					let e, r, n;
					if ('[' === $(t, 0)) {
						if (']' !== $(t, t.length - 1)) return H;
						if (
							((e = ((t) => {
								let e;
								let r;
								let n;
								let o;
								let i;
								let a;
								let u;
								const c = [0, 0, 0, 0, 0, 0, 0, 0];
								let s = 0;
								let f = null;
								let l = 0;

								const p = () => {
									return $(t, l);
								};

								if (':' === p()) {
									if (':' !== $(t, 1)) return;
									(l += 2), (f = ++s);
								}
								for (; p(); ) {
									if (8 === s) return;
									if (':' !== p()) {
										for (e = r = 0; r < 4 && N(tt, p()); ) (e = 16 * e + I(p(), 16)), l++, r++;
										if ('.' === p()) {
											if (0 === r) return;
											if (((l -= r), s > 6)) return;
											for (n = 0; p(); ) {
												if (((o = null), n > 0)) {
													if (!('.' === p() && n < 4)) return;
													l++;
												}
												if (!N(J, p())) return;
												for (; N(J, p()); ) {
													if (((i = I(p(), 10)), null === o)) o = i;
													else {
														if (0 === o) return;
														o = 10 * o + i;
													}
													if (o > 255) return;
													l++;
												}
												(c[s] = 256 * c[s] + o), (2 != ++n && 4 !== n) || s++;
											}
											if (4 !== n) return;
											break;
										}
										if (':' === p()) {
											if ((l++, !p())) return;
										} else if (p()) return;
										c[s++] = e;
									} else {
										if (null !== f) return;
										l++, (f = ++s);
									}
								}
								if (null !== f)
									for (a = s - f, s = 7; 0 !== s && a > 0; )
										(u = c[s]), (c[s--] = c[f + a - 1]), (c[f + --a] = u);
								else if (8 !== s) return;
								return c;
							})(D(t, 1, -1))),
							!e)
						)
							return H;
						this.host = e;
					} else if (this.isSpecial()) {
						if (((t = m(t)), N(et, t))) return H;
						if (
							((e = ((t) => {
								let e;
								let r;
								let n;
								let o;
								let i;
								let a;
								let u;
								const c = M(t, '.');
								if ((c.length && '' === c[c.length - 1] && c.length--, (e = c.length) > 4)) return t;
								for (r = [], n = 0; n < e; n++) {
									if ('' === (o = c[n])) return t;
									if (
										((i = 10),
										o.length > 1 &&
											'0' === $(o, 0) &&
											((i = N(K, o) ? 16 : 8), (o = D(o, 8 === i ? 1 : 2))),
										'' === o)
									)
										a = 0;
									else {
										if (!N(10 === i ? Z : 8 === i ? X : tt, o)) return t;
										a = I(o, i);
									}
									B(r, a);
								}
								for (n = 0; n < e; n++)
									if (((a = r[n]), n === e - 1)) {
										if (a >= R(256, 5 - e)) return null;
									} else if (a > 255) return null;
								for (u = W(r), n = 0; n < r.length; n++) u += r[n] * R(256, 3 - n);
								return u;
							})(t)),
							null === e)
						)
							return H;
						this.host = e;
					} else {
						if (N(rt, t)) return H;
						for (e = '', r = d(t), n = 0; n < r.length; n++) e += lt(r[n], ut);
						this.host = e;
					}
				},
				cannotHaveUsernamePasswordPort() {
					return !this.host || this.cannotBeABaseURL || 'file' === this.scheme;
				},
				includesCredentials() {
					return '' !== this.username || '' !== this.password;
				},
				isSpecial() {
					return h(pt, this.scheme);
				},
				shortenPath() {
					const t = this.path,
						e = t.length;
					!e || ('file' === this.scheme && 1 === e && ht(t[0], !0)) || t.length--;
				},
				serialize() {
					const t = this;
					const e = t.scheme;
					const r = t.username;
					const n = t.password;
					const o = t.host;
					const i = t.port;
					const a = t.path;
					const u = t.query;
					const c = t.fragment;
					let s = `${e}:`;
					return (
						null !== o
							? ((s += '//'),
							  t.includesCredentials() && (s += `${r + (n ? `:${n}` : '')}@`),
							  (s += at(o)),
							  null !== i && (s += `:${i}`))
							: 'file' === e && (s += '//'),
						(s += t.cannotBeABaseURL ? a[0] : a.length ? `/${C(a, '/')}` : ''),
						null !== u && (s += `?${u}`),
						null !== c && (s += `#${c}`),
						s
					);
				},
				setHref(t) {
					const e = this.parse(t);
					if (e) throw new _(e);
					this.searchParams.update();
				},
				getOrigin() {
					const t = this.scheme,
						e = this.port;
					if ('blob' === t)
						try {
							return new Bt(t.path[0]).origin;
						} catch (t) {
							return 'null';
						}
					return 'file' !== t && this.isSpecial()
						? `${t}://${at(this.host)}${null !== e ? `:${e}` : ''}`
						: 'null';
				},
				getProtocol() {
					return `${this.scheme}:`;
				},
				setProtocol(t) {
					this.parse(`${b(t)}:`, yt);
				},
				getUsername() {
					return this.username;
				},
				setUsername(t) {
					const e = d(b(t));
					if (!this.cannotHaveUsernamePasswordPort()) {
						this.username = '';
						for (let r = 0; r < e.length; r++) this.username += lt(e[r], ft);
					}
				},
				getPassword() {
					return this.password;
				},
				setPassword(t) {
					const e = d(b(t));
					if (!this.cannotHaveUsernamePasswordPort()) {
						this.password = '';
						for (let r = 0; r < e.length; r++) this.password += lt(e[r], ft);
					}
				},
				getHost() {
					const t = this.host,
						e = this.port;
					return null === t ? '' : null === e ? at(t) : `${at(t)}:${e}`;
				},
				setHost(t) {
					this.cannotBeABaseURL || this.parse(t, Pt);
				},
				getHostname() {
					const t = this.host;
					return null === t ? '' : at(t);
				},
				setHostname(t) {
					this.cannotBeABaseURL || this.parse(t, jt);
				},
				getPort() {
					const t = this.port;
					return null === t ? '' : b(t);
				},
				setPort(t) {
					this.cannotHaveUsernamePasswordPort() ||
						('' === (t = b(t)) ? (this.port = null) : this.parse(t, Lt));
				},
				getPathname() {
					const t = this.path;
					return this.cannotBeABaseURL ? t[0] : t.length ? `/${C(t, '/')}` : '';
				},
				setPathname(t) {
					this.cannotBeABaseURL || ((this.path = []), this.parse(t, Rt));
				},
				getSearch() {
					const t = this.query;
					return t ? `?${t}` : '';
				},
				setSearch(t) {
					'' === (t = b(t))
						? (this.query = null)
						: ('?' === $(t, 0) && (t = D(t, 1)), (this.query = ''), this.parse(t, Ct)),
						this.searchParams.update();
				},
				getSearchParams() {
					return this.searchParams.facade;
				},
				getHash() {
					const t = this.fragment;
					return t ? `#${t}` : '';
				},
				setHash(t) {
					'' !== (t = b(t))
						? ('#' === $(t, 0) && (t = D(t, 1)), (this.fragment = ''), this.parse(t, At))
						: (this.fragment = null);
				},
				update() {
					this.query = this.searchParams.serialize() || null;
				},
			};

			var Bt = function (t) {
				const e = p(this, Ft),
					r = x(arguments.length, 1) > 1 ? arguments[1] : void 0,
					n = E(e, new Wt(t, !1, r));
				i ||
					((e.href = n.serialize()),
					(e.origin = n.getOrigin()),
					(e.protocol = n.getProtocol()),
					(e.username = n.getUsername()),
					(e.password = n.getPassword()),
					(e.host = n.getHost()),
					(e.hostname = n.getHostname()),
					(e.port = n.getPort()),
					(e.pathname = n.getPathname()),
					(e.search = n.getSearch()),
					(e.searchParams = n.getSearchParams()),
					(e.hash = n.getHash()));
			};

			const Ft = Bt.prototype;

			const Ut = (t, e) => {
				return {
					get() {
						return O(this)[t]();
					},
					set:
						e &&
						function (t) {
							return O(this)[e](t);
						},
					configurable: !0,
					enumerable: !0,
				};
			};

			if (
				(i &&
					(l(Ft, 'href', Ut('serialize', 'setHref')),
					l(Ft, 'origin', Ut('getOrigin')),
					l(Ft, 'protocol', Ut('getProtocol', 'setProtocol')),
					l(Ft, 'username', Ut('getUsername', 'setUsername')),
					l(Ft, 'password', Ut('getPassword', 'setPassword')),
					l(Ft, 'host', Ut('getHost', 'setHost')),
					l(Ft, 'hostname', Ut('getHostname', 'setHostname')),
					l(Ft, 'port', Ut('getPort', 'setPort')),
					l(Ft, 'pathname', Ut('getPathname', 'setPathname')),
					l(Ft, 'search', Ut('getSearch', 'setSearch')),
					l(Ft, 'searchParams', Ut('getSearchParams')),
					l(Ft, 'hash', Ut('getHash', 'setHash'))),
				f(
					Ft,
					'toJSON',
					function () {
						return O(this).serialize();
					},
					{enumerable: !0}
				),
				f(
					Ft,
					'toString',
					function () {
						return O(this).serialize();
					},
					{enumerable: !0}
				),
				L)
			) {
				const Mt = L.createObjectURL,
					Dt = L.revokeObjectURL;
				Mt && f(Bt, 'createObjectURL', c(Mt, L)), Dt && f(Bt, 'revokeObjectURL', c(Dt, L));
			}
			w(Bt, 'URL'), o({global: !0, constructor: !0, forced: !a, sham: !i}, {URL: Bt});
		},
		8730: function (t, e, r) {
			r(9391);
		},
	};
	const e = {};
	function r(n) {
		const o = e[n];
		if (void 0 !== o) return o.exports;
		const i = (e[n] = {exports: {}});
		return t[n].call(i.exports, i, i.exports, r), i.exports;
	}
	(r.g = (function () {
		if ('object' == typeof globalThis) return globalThis;
		try {
			return this || new Function('return this')();
		} catch (t) {
			if ('object' == typeof window) return window;
		}
	})()),
		(() => {
			r(6801),
				r(3843),
				r(4338),
				r(6203),
				r(4043),
				r(7267),
				r(9358),
				r(691),
				r(228),
				r(3964),
				r(9749),
				r(6544),
				r(4254),
				r(752),
				r(1694),
				r(6265),
				r(8373),
				r(6793),
				r(7629),
				r(7509),
				r(8052),
				r(1057),
				r(560),
				r(9667),
				r(7602),
				r(5),
				r(7522),
				r(4284),
				r(9730),
				r(9373),
				r(9903),
				r(9288),
				r(8077),
				r(6237),
				r(3476),
				r(1919),
				r(9474),
				r(8730),
				r(9307),
				r(8858),
				r(1318),
				r(3228),
				r(6585),
				r(2826),
				r(7049),
				r(7409);
			function t(e) {
				return (
					(t =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					t(e)
				);
			}
			function e(t, e) {
				for (let r = 0; r < e.length; r++) {
					const o = e[r];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						Object.defineProperty(t, n(o.key), o);
				}
			}
			function n(e) {
				const r = ((e, r) => {
					if ('object' !== t(e) || null === e) return e;
					const n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						const o = n.call(e, r || 'default');
						if ('object' !== t(o)) return o;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === r ? String : Number)(e);
				})(e, 'string');
				return 'symbol' === t(r) ? r : String(r);
			}

			const o = (() => {
				function t() {
					let e, r, o;
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						(e = this),
						(o = '4.0.12'),
						(r = n((r = 'version'))) in e
							? Object.defineProperty(e, r, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0,
							  })
							: (e[r] = o);
				}
				let r, o, i;
				return (
					(r = t),
					(o = [
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
					]) && e(r.prototype, o),
					i && e(r, i),
					Object.defineProperty(r, 'prototype', {writable: !1}),
					t
				);
			})();

			const i = new o();
			function a(t) {
				return (
					(a =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					a(t)
				);
			}
			function u(t, e) {
				return (
					((t) => {
						if (Array.isArray(t)) return t;
					})(t) ||
					((t, e) => {
						let r =
							null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
						if (null != r) {
							let n;
							let o;
							let i;
							let a;
							const u = [];
							let c = !0;
							let s = !1;
							try {
								if (((i = (r = r.call(t)).next), 0 === e)) {
									if (Object(r) !== r) return;
									c = !1;
								} else for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
							} catch (t) {
								(s = !0), (o = t);
							} finally {
								try {
									if (!c && null != r.return && ((a = r.return()), Object(a) !== a)) return;
								} finally {
									if (s) throw o;
								}
							}
							return u;
						}
					})(t, e) ||
					((t, e) => {
						if (!t) return;
						if ('string' == typeof t) return c(t, e);
						let r = Object.prototype.toString.call(t).slice(8, -1);
						'Object' === r && t.constructor && (r = t.constructor.name);
						if ('Map' === r || 'Set' === r) return Array.from(t);
						if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e);
					})(t, e) ||
					(() => {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					})()
				);
			}
			function c(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
				return n;
			}
			function s() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ s =
					() => {
						return e;
					};
				let t;
				var e = {};
				const r = Object.prototype;
				const n = r.hasOwnProperty;

				const o =
					Object.defineProperty ||
					((t, e, {value}) => {
						t[e] = value;
					});

				const i = 'function' == typeof Symbol ? Symbol : {};
				const u = i.iterator || '@@iterator';
				const c = i.asyncIterator || '@@asyncIterator';
				const f = i.toStringTag || '@@toStringTag';
				function l(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					l({}, '');
				} catch (t) {
					l = (t, e, r) => {
						return (t[e] = r);
					};
				}
				function p(t, e, r, n) {
					const i = e && e.prototype instanceof b ? e : b;
					const a = Object.create(i.prototype);
					const u = new R(n || []);
					return o(a, '_invoke', {value: L(t, r, u)}), a;
				}
				function h(t, e, r) {
					try {
						return {type: 'normal', arg: t.call(e, r)};
					} catch (t) {
						return {type: 'throw', arg: t};
					}
				}
				e.wrap = p;
				const v = 'suspendedStart';
				const d = 'suspendedYield';
				const y = 'executing';
				const g = 'completed';
				const m = {};
				function b() {}
				function w() {}
				function x() {}
				let k = {};
				l(k, u, function () {
					return this;
				});
				const S = Object.getPrototypeOf;
				const E = S && S(S($([])));
				E && E !== r && n.call(E, u) && (k = E);
				const O = (x.prototype = b.prototype = Object.create(k));
				function P(t) {
					['next', 'throw', 'return'].forEach((e) => {
						l(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function j(t, e) {
					function r(o, i, u, c) {
						const s = h(t[o], t, i);
						if ('throw' !== s.type) {
							const f = s.arg;
							const l = f.value;
							return l && 'object' == a(l) && n.call(l, '__await')
								? e.resolve(l.__await).then(
										(t) => {
											r('next', t, u, c);
										},
										(t) => {
											r('throw', t, u, c);
										}
								  )
								: e.resolve(l).then(
										(t) => {
											(f.value = t), u(f);
										},
										(t) => {
											return r('throw', t, u, c);
										}
								  );
						}
						c(s.arg);
					}
					let i;
					o(this, '_invoke', {
						value(t, n) {
							function o() {
								return new e((e, o) => {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function L(e, r, n) {
					let o = v;
					return (i, a) => {
						if (o === y) throw new Error('Generator is already running');
						if (o === g) {
							if ('throw' === i) throw a;
							return {value: t, done: !0};
						}
						for (n.method = i, n.arg = a; ; ) {
							const u = n.delegate;
							if (u) {
								const c = _(u, n);
								if (c) {
									if (c === m) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === v) throw ((o = g), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = y;
							const s = h(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? g : d), s.arg === m)) continue;
								return {value: s.arg, done: n.done};
							}
							'throw' === s.type && ((o = g), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function _(e, r) {
					const n = r.method;
					const o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), _(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
							m
						);
					const i = h(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), m;
					const a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
							  (r.next = e.nextLoc),
							  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
							  (r.delegate = null),
							  m)
							: a
						: ((r.method = 'throw'),
						  (r.arg = new TypeError('iterator result is not an object')),
						  (r.delegate = null),
						  m);
				}
				function I(t) {
					const e = {tryLoc: t[0]};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function T(t) {
					const e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function R(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(I, this), this.reset(!0);
				}
				function $(e) {
					if (e || '' === e) {
						const r = e[u];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							let o = -1;

							const i = function r() {
								for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
								return (r.value = t), (r.done = !0), r;
							};

							return (i.next = i);
						}
					}
					throw new TypeError(`${a(e)} is not iterable`);
				}
				return (
					(w.prototype = x),
					o(O, 'constructor', {value: x, configurable: !0}),
					o(x, 'constructor', {value: w, configurable: !0}),
					(w.displayName = l(x, f, 'GeneratorFunction')),
					(e.isGeneratorFunction = (t) => {
						const e = 'function' == typeof t && t.constructor;
						return !!e && (e === w || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = (t) => {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, x)
								: ((t.__proto__ = x), l(t, f, 'GeneratorFunction')),
							(t.prototype = Object.create(O)),
							t
						);
					}),
					(e.awrap = (t) => {
						return {__await: t};
					}),
					P(j.prototype),
					l(j.prototype, c, function () {
						return this;
					}),
					(e.AsyncIterator = j),
					(e.async = (t, r, n, o, i) => {
						void 0 === i && (i = Promise);
						const a = new j(p(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(({done, value}) => {
									return done ? value : a.next();
							  });
					}),
					P(O),
					l(O, f, 'Generator'),
					l(O, u, function () {
						return this;
					}),
					l(O, 'toString', () => {
						return '[object Generator]';
					}),
					(e.keys = (t) => {
						const e = Object(t);
						const r = [];
						for (const n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									const n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = $),
					(R.prototype = {
						constructor: R,
						reset(e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(T),
								!e)
							)
								for (const r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop() {
							this.done = !0;
							const t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException(e) {
							if (this.done) throw e;
							const r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (let i = this.tryEntries.length - 1; i >= 0; --i) {
								const a = this.tryEntries[i];
								var u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									const c = n.call(a, 'catchLoc');
									const s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt(t, e) {
							for (let r = this.tryEntries.length - 1; r >= 0; --r) {
								const o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							const a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), m) : this.complete(a)
							);
						},
						complete({type, arg}, e) {
							if ('throw' === type) throw arg;
							return (
								'break' === type || 'continue' === type
									? (this.next = arg)
									: 'return' === type
									  ? ((this.rval = this.arg = arg), (this.method = 'return'), (this.next = 'end'))
									  : 'normal' === type && e && (this.next = e),
								m
							);
						},
						finish(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), T(r), m;
							}
						},
						catch(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.tryLoc === t) {
									const n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										T(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield(e, r, n) {
							return (
								(this.delegate = {iterator: $(e), resultName: r, nextLoc: n}),
								'next' === this.method && (this.arg = t),
								m
							);
						},
					}),
					e
				);
			}
			function f(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a);
					var c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function l(t) {
				return function (...args) {
					const e = this;
					const r = args;
					return new Promise((n, o) => {
						const i = t.apply(e, r);
						function a(t) {
							f(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							f(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function p(t, e) {
				for (let r = 0; r < e.length; r++) {
					const n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, h(n.key), n);
				}
			}
			function h(t) {
				const e = ((t, e) => {
					if ('object' !== a(t) || null === t) return t;
					const r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						const n = r.call(t, e || 'default');
						if ('object' !== a(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === a(e) ? e : String(e);
			}
			let v;
			let d;
			let y;

			const g = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t);
				}
				let e;
				let r;
				let n;
				let o;
				let a;
				return (
					(e = t),
					(r = null),
					(n = [
						{
							key: 'get',
							value:
								((a = l(
									s().mark(function e(r) {
										let n;
										let o;
										return s().wrap((e) => {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															(n = new URL(t.base)),
															Object.keys(r).forEach((t) => {
																n.searchParams.append(t, r[t]);
															}),
															(e.next = 4),
															fetch(n, {
																credentials: 'same-origin',
																headers: {
																	'Api-User-Agent': 'Wikiplus/'
																		.concat(i.version, ' (')
																		.concat(i.wikiId, ')'),
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
									return a.apply(this, arguments);
								}),
						},
						{
							key: 'post',
							value:
								((o = l(
									s().mark(function e(r) {
										let n;
										let o;
										let a;
										return s().wrap((e) => {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															(n = new URL(t.base)),
															(o = new FormData()),
															Object.entries(r).forEach((t) => {
																const e = u(t, 2);
																const r = e[0];
																const n = e[1];
																o.append(r, n);
															}),
															(e.next = 5),
															fetch(n, {
																method: 'POST',
																body: o,
																credentials: 'same-origin',
																headers: {
																	'Api-User-Agent': 'Wikiplus/'
																		.concat(i.version, ' (')
																		.concat(i.wikiId, ')'),
																},
															})
														);
													case 5:
														return (a = e.sent), (e.next = 8), a.json();
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
									return o.apply(this, arguments);
								}),
						},
					]),
					r && p(e.prototype, r),
					n && p(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t
				);
			})();

			(v = g),
				(d = 'base'),
				(y = ''.concat(location.protocol, '//').concat(location.host).concat(i.scriptPath, '/api.php')),
				(d = h(d)) in v
					? Object.defineProperty(v, d, {value: y, enumerable: !0, configurable: !0, writable: !0})
					: (v[d] = y);
			const m = g;
			r(2003),
				r(8518),
				r(3440),
				r(6034),
				r(50),
				r(6646),
				r(7444),
				r(7968),
				r(747),
				r(1099),
				r(6320),
				r(876),
				r(6791),
				r(19),
				r(2343),
				r(1096),
				r(4314),
				r(3346),
				r(4984),
				r(4078),
				r(8324);
			function b(t) {
				return (
					(b =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					b(t)
				);
			}
			function w() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ w =
					() => {
						return e;
					};
				let t;
				var e = {};
				const r = Object.prototype;
				const n = r.hasOwnProperty;

				const o =
					Object.defineProperty ||
					((t, e, {value}) => {
						t[e] = value;
					});

				const i = 'function' == typeof Symbol ? Symbol : {};
				const a = i.iterator || '@@iterator';
				const u = i.asyncIterator || '@@asyncIterator';
				const c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = (t, e, r) => {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					const i = e && e.prototype instanceof g ? e : g;
					const a = Object.create(i.prototype);
					const u = new R(n || []);
					return o(a, '_invoke', {value: L(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {type: 'normal', arg: t.call(e, r)};
					} catch (t) {
						return {type: 'throw', arg: t};
					}
				}
				e.wrap = f;
				const p = 'suspendedStart';
				const h = 'suspendedYield';
				const v = 'executing';
				const d = 'completed';
				const y = {};
				function g() {}
				function m() {}
				function x() {}
				let k = {};
				s(k, a, function () {
					return this;
				});
				const S = Object.getPrototypeOf;
				const E = S && S(S($([])));
				E && E !== r && n.call(E, a) && (k = E);
				const O = (x.prototype = g.prototype = Object.create(k));
				function P(t) {
					['next', 'throw', 'return'].forEach((e) => {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function j(t, e) {
					function r(o, i, a, u) {
						const c = l(t[o], t, i);
						if ('throw' !== c.type) {
							const s = c.arg;
							const f = s.value;
							return f && 'object' == b(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										(t) => {
											r('next', t, a, u);
										},
										(t) => {
											r('throw', t, a, u);
										}
								  )
								: e.resolve(f).then(
										(t) => {
											(s.value = t), a(s);
										},
										(t) => {
											return r('throw', t, a, u);
										}
								  );
						}
						u(c.arg);
					}
					let i;
					o(this, '_invoke', {
						value(t, n) {
							function o() {
								return new e((e, o) => {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function L(e, r, n) {
					let o = p;
					return (i, a) => {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {value: t, done: !0};
						}
						for (n.method = i, n.arg = a; ; ) {
							const u = n.delegate;
							if (u) {
								const c = _(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							const s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {value: s.arg, done: n.done};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function _(e, r) {
					const n = r.method;
					const o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), _(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
							y
						);
					const i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					const a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
							  (r.next = e.nextLoc),
							  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
							  (r.delegate = null),
							  y)
							: a
						: ((r.method = 'throw'),
						  (r.arg = new TypeError('iterator result is not an object')),
						  (r.delegate = null),
						  y);
				}
				function I(t) {
					const e = {tryLoc: t[0]};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function T(t) {
					const e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function R(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(I, this), this.reset(!0);
				}
				function $(e) {
					if (e || '' === e) {
						const r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							let o = -1;

							const i = function r() {
								for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
								return (r.value = t), (r.done = !0), r;
							};

							return (i.next = i);
						}
					}
					throw new TypeError(`${b(e)} is not iterable`);
				}
				return (
					(m.prototype = x),
					o(O, 'constructor', {value: x, configurable: !0}),
					o(x, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(x, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = (t) => {
						const e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = (t) => {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, x)
								: ((t.__proto__ = x), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(O)),
							t
						);
					}),
					(e.awrap = (t) => {
						return {__await: t};
					}),
					P(j.prototype),
					s(j.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = j),
					(e.async = (t, r, n, o, i) => {
						void 0 === i && (i = Promise);
						const a = new j(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(({done, value}) => {
									return done ? value : a.next();
							  });
					}),
					P(O),
					s(O, c, 'Generator'),
					s(O, a, function () {
						return this;
					}),
					s(O, 'toString', () => {
						return '[object Generator]';
					}),
					(e.keys = (t) => {
						const e = Object(t);
						const r = [];
						for (const n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									const n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = $),
					(R.prototype = {
						constructor: R,
						reset(e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(T),
								!e)
							)
								for (const r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop() {
							this.done = !0;
							const t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException(e) {
							if (this.done) throw e;
							const r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (let i = this.tryEntries.length - 1; i >= 0; --i) {
								const a = this.tryEntries[i];
								var u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									const c = n.call(a, 'catchLoc');
									const s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt(t, e) {
							for (let r = this.tryEntries.length - 1; r >= 0; --r) {
								const o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							const a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete({type, arg}, e) {
							if ('throw' === type) throw arg;
							return (
								'break' === type || 'continue' === type
									? (this.next = arg)
									: 'return' === type
									  ? ((this.rval = this.arg = arg), (this.method = 'return'), (this.next = 'end'))
									  : 'normal' === type && e && (this.next = e),
								y
							);
						},
						finish(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), T(r), y;
							}
						},
						catch(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.tryLoc === t) {
									const n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										T(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield(e, r, n) {
							return (
								(this.delegate = {iterator: $(e), resultName: r, nextLoc: n}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function x(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a);
					var c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function k(t, e) {
				for (let r = 0; r < e.length; r++) {
					const n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, E(n.key), n);
				}
			}
			function S(t, e, r) {
				return (
					(e = E(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function E(t) {
				const e = ((t, e) => {
					if ('object' !== b(t) || null === t) return t;
					const r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						const n = r.call(t, e || 'default');
						if ('object' !== b(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === b(e) ? e : String(e);
			}

			const O = (() => {
				function t() {
					let e;
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						S(this, 'language', void 0),
						S(this, 'i18nData', {}),
						S(this, 'sessionUpdateLog', []);
					try {
						e = JSON.parse(localStorage.Wikiplus_Settings).language || navigator.language.toLowerCase();
					} catch (t) {
						e = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, '').toLowerCase();
					}
					this.language = e;
					try {
						for (
							let r = JSON.parse(localStorage.getItem('Wikiplus_i18nCache')), n = 0, o = Object.keys(r);
							n < o.length;
							n++
						) {
							const i = o[n];
							this.i18nData[i] = r[i];
						}
					} catch (t) {
						localStorage.setItem('Wikiplus_i18nCache', '{}');
					}
				}
				let e, r, n, o, i;
				return (
					(e = t),
					(r = [
						{
							key: 'translate',
							value(t) {
								const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
								let r = '';
								return (
									this.language in this.i18nData
										? t in this.i18nData[this.language]
											? (r = this.i18nData[this.language][t])
											: (this.loadLanguage(this.language),
											  (r = t in this.i18nData['en-us'] ? this.i18nData['en-us'][t] : t))
										: this.loadLanguage(this.language),
									e.length > 0 &&
										e.forEach((t, e) => {
											r = r.replace('$'.concat(e + 1), t);
										}),
									r
								);
							},
						},
						{
							key: 'loadLanguage',
							value:
								((o = w().mark(function t(e) {
									let r, n;
									return w().wrap(
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
																'https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/'.concat(
																	e
																)
															)
														);
													case 5:
														return (t.next = 7), t.sent.json();
													case 7:
														(r = t.sent),
															(n =
																localStorage.getItem('Wikiplus_LanguageVersion') ||
																'000'),
															this.sessionUpdateLog.push(e),
															(r.__version === n && e in this.i18nData) ||
																(console.info(
																	'Update '
																		.concat(e, ' support to version ')
																		.concat(r.__version)
																),
																(this.i18nData[e] = r),
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
								(i = function (...args) {
									const t = this,
										e = args;
									return new Promise((r, n) => {
										const i = o.apply(t, e);
										function a(t) {
											x(i, r, n, a, u, 'next', t);
										}
										function u(t) {
											x(i, r, n, a, u, 'throw', t);
										}
										a(void 0);
									});
								}),
								function (t) {
									return i.apply(this, arguments);
								}),
						},
					]),
					r && k(e.prototype, r),
					n && k(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t
				);
			})();

			const P = new O();
			function j(t) {
				return (
					(j =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					j(t)
				);
			}
			function L(t, e) {
				for (let r = 0; r < e.length; r++) {
					const n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, I(n.key), n);
				}
			}
			function _(t, e, r) {
				return e && L(t.prototype, e), r && L(t, r), Object.defineProperty(t, 'prototype', {writable: !1}), t;
			}
			function I(t) {
				const e = ((t, e) => {
					if ('object' !== j(t) || null === t) return t;
					const r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						const n = r.call(t, e || 'default');
						if ('object' !== j(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === j(e) ? e : String(e);
			}
			function T(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function R(t) {
				const e = A();
				return function (...args) {
					let r;
					const n = B(t);
					if (e) {
						const o = B(this).constructor;
						r = Reflect.construct(n, args, o);
					} else r = n.apply(this, args);
					return ((t, e) => {
						if (e && ('object' === j(e) || 'function' == typeof e)) return e;
						if (void 0 !== e)
							throw new TypeError('Derived constructors may only return object or undefined');
						return ((t) => {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
						})(t);
					})(this, r);
				};
			}
			function N(t) {
				const e = 'function' == typeof Map ? new Map() : void 0;
				return (
					(N = (t) => {
						if (
							null === t ||
							!((t) => {
								try {
									return Function.toString.call(t).includes('[native code]');
								} catch (e) {
									return 'function' == typeof t;
								}
							})(t)
						)
							return t;
						if ('function' != typeof t)
							throw new TypeError('Super expression must either be null or a function');
						if (void 0 !== e) {
							if (e.has(t)) return e.get(t);
							e.set(t, r);
						}
						function r(...args) {
							return C(t, args, B(this).constructor);
						}
						return (
							(r.prototype = Object.create(t.prototype, {
								constructor: {value: r, enumerable: !1, writable: !0, configurable: !0},
							})),
							W(r, t)
						);
					}),
					N(t)
				);
			}
			function C(t, e, r) {
				return (
					(C = A()
						? Reflect.construct.bind()
						: (t, e, r) => {
								const n = [null];
								n.push(...e);
								const o = new (Function.bind.apply(t, n))();
								return r && W(o, r.prototype), o;
						  }),
					C(...arguments)
				);
			}
			function A() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
				} catch (t) {
					return !1;
				}
			}
			function W(t, e) {
				return (
					(W = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: (t, e) => {
								return (t.__proto__ = e), t;
						  }),
					W(t, e)
				);
			}
			function B(t) {
				return (
					(B = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: (t) => {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					B(t)
				);
			}

			const F = ((t) => {
				!((t, e) => {
					if ('function' != typeof e && null !== e)
						throw new TypeError('Super expression must either be null or a function');
					(t.prototype = Object.create(e && e.prototype, {
						constructor: {value: t, writable: !0, configurable: !0},
					})),
						Object.defineProperty(t, 'prototype', {writable: !1}),
						e && W(t, e);
				})(r, t);
				const e = R(r);
				function r(t, n) {
					let o;
					return T(this, r), ((o = e.call(this, t)).code = n), o;
				}
				return _(r);
			})(N(Error));

			const U = (() => {
				function t() {
					T(this, t);
				}
				return (
					_(t, null, [
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
								let r = P.translate(t);
								throw (
									(e.length > 0 &&
										e.forEach((t, e) => {
											r = r.replace(new RegExp('\\'.concat(e + 1), 'ig'), t);
										}),
									console.error('[Wikiplus-ERROR] '.concat(r)),
									new F(''.concat(r), t))
								);
							},
						},
					]),
					t
				);
			})();

			const M = U;
			function D(t) {
				return (
					(D =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					D(t)
				);
			}
			function G(t, e) {
				const r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					let n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter((e) => {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push(...n);
				}
				return r;
			}
			function q(t) {
				for (let e = 1; e < arguments.length; e++) {
					const r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? G(Object(r), !0).forEach((e) => {
								V(t, e, r[e]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						  : G(Object(r)).forEach((e) => {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
						    });
				}
				return t;
			}
			function Q() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Q =
					() => {
						return e;
					};
				let t;
				var e = {};
				const r = Object.prototype;
				const n = r.hasOwnProperty;

				const o =
					Object.defineProperty ||
					((t, e, {value}) => {
						t[e] = value;
					});

				const i = 'function' == typeof Symbol ? Symbol : {};
				const a = i.iterator || '@@iterator';
				const u = i.asyncIterator || '@@asyncIterator';
				const c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = (t, e, r) => {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					const i = e && e.prototype instanceof g ? e : g;
					const a = Object.create(i.prototype);
					const u = new I(n || []);
					return o(a, '_invoke', {value: P(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {type: 'normal', arg: t.call(e, r)};
					} catch (t) {
						return {type: 'throw', arg: t};
					}
				}
				e.wrap = f;
				const p = 'suspendedStart';
				const h = 'suspendedYield';
				const v = 'executing';
				const d = 'completed';
				const y = {};
				function g() {}
				function m() {}
				function b() {}
				let w = {};
				s(w, a, function () {
					return this;
				});
				const x = Object.getPrototypeOf;
				const k = x && x(x(T([])));
				k && k !== r && n.call(k, a) && (w = k);
				const S = (b.prototype = g.prototype = Object.create(w));
				function E(t) {
					['next', 'throw', 'return'].forEach((e) => {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function O(t, e) {
					function r(o, i, a, u) {
						const c = l(t[o], t, i);
						if ('throw' !== c.type) {
							const s = c.arg;
							const f = s.value;
							return f && 'object' == D(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										(t) => {
											r('next', t, a, u);
										},
										(t) => {
											r('throw', t, a, u);
										}
								  )
								: e.resolve(f).then(
										(t) => {
											(s.value = t), a(s);
										},
										(t) => {
											return r('throw', t, a, u);
										}
								  );
						}
						u(c.arg);
					}
					let i;
					o(this, '_invoke', {
						value(t, n) {
							function o() {
								return new e((e, o) => {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function P(e, r, n) {
					let o = p;
					return (i, a) => {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {value: t, done: !0};
						}
						for (n.method = i, n.arg = a; ; ) {
							const u = n.delegate;
							if (u) {
								const c = j(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							const s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {value: s.arg, done: n.done};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function j(e, r) {
					const n = r.method;
					const o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
							y
						);
					const i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					const a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
							  (r.next = e.nextLoc),
							  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
							  (r.delegate = null),
							  y)
							: a
						: ((r.method = 'throw'),
						  (r.arg = new TypeError('iterator result is not an object')),
						  (r.delegate = null),
						  y);
				}
				function L(t) {
					const e = {tryLoc: t[0]};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					const e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function I(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(L, this), this.reset(!0);
				}
				function T(e) {
					if (e || '' === e) {
						const r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							let o = -1;

							const i = function r() {
								for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
								return (r.value = t), (r.done = !0), r;
							};

							return (i.next = i);
						}
					}
					throw new TypeError(`${D(e)} is not iterable`);
				}
				return (
					(m.prototype = b),
					o(S, 'constructor', {value: b, configurable: !0}),
					o(b, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(b, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = (t) => {
						const e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = (t) => {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, b)
								: ((t.__proto__ = b), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(S)),
							t
						);
					}),
					(e.awrap = (t) => {
						return {__await: t};
					}),
					E(O.prototype),
					s(O.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = O),
					(e.async = (t, r, n, o, i) => {
						void 0 === i && (i = Promise);
						const a = new O(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(({done, value}) => {
									return done ? value : a.next();
							  });
					}),
					E(S),
					s(S, c, 'Generator'),
					s(S, a, function () {
						return this;
					}),
					s(S, 'toString', () => {
						return '[object Generator]';
					}),
					(e.keys = (t) => {
						const e = Object(t);
						const r = [];
						for (const n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									const n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = T),
					(I.prototype = {
						constructor: I,
						reset(e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(_),
								!e)
							)
								for (const r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop() {
							this.done = !0;
							const t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException(e) {
							if (this.done) throw e;
							const r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (let i = this.tryEntries.length - 1; i >= 0; --i) {
								const a = this.tryEntries[i];
								var u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									const c = n.call(a, 'catchLoc');
									const s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt(t, e) {
							for (let r = this.tryEntries.length - 1; r >= 0; --r) {
								const o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							const a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete({type, arg}, e) {
							if ('throw' === type) throw arg;
							return (
								'break' === type || 'continue' === type
									? (this.next = arg)
									: 'return' === type
									  ? ((this.rval = this.arg = arg), (this.method = 'return'), (this.next = 'end'))
									  : 'normal' === type && e && (this.next = e),
								y
							);
						},
						finish(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y;
							}
						},
						catch(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.tryLoc === t) {
									const n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										_(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield(e, r, n) {
							return (
								(this.delegate = {iterator: T(e), resultName: r, nextLoc: n}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function H(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a);
					var c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function z(t) {
				return function (...args) {
					const e = this;
					const r = args;
					return new Promise((n, o) => {
						const i = t.apply(e, r);
						function a(t) {
							H(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							H(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function Y(t, e) {
				for (let r = 0; r < e.length; r++) {
					const n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, J(n.key), n);
				}
			}
			function V(t, e, r) {
				return (
					(e = J(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function J(t) {
				const e = ((t, e) => {
					if ('object' !== D(t) || null === t) return t;
					const r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						const n = r.call(t, e || 'default');
						if ('object' !== D(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === D(e) ? e : String(e);
			}

			const K = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						V(this, 'pageInfoCache', {});
				}
				let e, r, n, o, a, u, c, s, f;
				return (
					(e = t),
					(r = [
						{
							key: 'getEditToken',
							value:
								((f = z(
									Q().mark(function t() {
										let e;
										return Q().wrap((t) => {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.next = 2),
															m.get({action: 'query', meta: 'tokens', format: 'json'})
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
														return t.abrupt('return', M.error('fail_to_get_edittoken'));
													case 8:
													case 'end':
														return t.stop();
												}
										}, t);
									})
								)),
								function (...args) {
									return f.apply(this, args);
								}),
						},
						{
							key: 'getPageInfo',
							value:
								((s = z(
									Q().mark(function t(e) {
										let r, n, o, i, a;
										return Q().wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															if (
																((r = e.title),
																(n = e.revisionId),
																(t.prev = 1),
																(o = {
																	action: 'query',
																	prop: 'revisions|info',
																	rvprop: 'timestamp|ids',
																	format: 'json',
																}),
																!n)
															) {
																t.next = 7;
																break;
															}
															(o.revids = n), (t.next = 11);
															break;
														case 7:
															if (!r) {
																t.next = 11;
																break;
															}
															if (!this.pageInfoCache[r]) {
																t.next = 10;
																break;
															}
															return t.abrupt('return', {
																timestamp: this.pageInfoCache[r].timestamp,
																revisionId: this.pageInfoCache[r].revid,
															});
														case 10:
															o.titles = r;
														case 11:
															return (t.next = 13), m.get(o);
														case 13:
															if (!(i = t.sent).query || !i.query.pages) {
																t.next = 20;
																break;
															}
															if ('-1' !== Object.keys(i.query.pages)[0]) {
																t.next = 17;
																break;
															}
															return t.abrupt('return', {});
														case 17:
															return (
																(a =
																	i.query.pages[Object.keys(i.query.pages)[0]]
																		.revisions[0]),
																r && (this.pageInfoCache[r] = a),
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
																M.error('fail_to_get_edittoken');
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
								((c = z(
									Q().mark(function t(e) {
										let r, n, o;
										return Q().wrap(
											(t) => {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(r = e.section),
																(n = e.revisionId),
																(t.prev = 1),
																(t.next = 4),
																fetch(
																	''
																		.concat(location.protocol, '//')
																		.concat(location.host)
																		.concat(i.scriptPath, '/index.php?oldid=')
																		.concat(n, '&section=')
																		.concat(r, '&action=raw')
																)
															);
														case 4:
															return (t.next = 6), t.sent.text();
														case 6:
															return (o = t.sent), t.abrupt('return', o);
														case 10:
															(t.prev = 10),
																(t.t0 = t.catch(1)),
																M.error('fail_to_get_wikitext');
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
									return c.apply(this, arguments);
								}),
						},
						{
							key: 'parseWikiText',
							value:
								((u = z(
									Q().mark(function t(e) {
										let r;
										let n;
										const o = arguments;
										return Q().wrap(
											(t) => {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(r = o.length > 1 && void 0 !== o[1] ? o[1] : ''),
																(t.prev = 2),
																(t.next = 5),
																m.post({
																	format: 'json',
																	action: 'parse',
																	text: e,
																	title: r,
																	pst: 'true',
																})
															);
														case 5:
															if (!(n = t.sent).parse || !n.parse.text) {
																t.next = 8;
																break;
															}
															return t.abrupt('return', n.parse.text['*']);
														case 8:
															t.next = 13;
															break;
														case 10:
															(t.prev = 10),
																(t.t0 = t.catch(2)),
																M.error('cant_parse_wikitext');
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
									return u.apply(this, arguments);
								}),
						},
						{
							key: 'edit',
							value:
								((a = z(
									Q().mark(function t() {
										let e;
										let r;
										let n;
										let o;
										let i;
										let a;
										let u;
										let c;
										let s;
										let f;
										const l = arguments;
										return Q().wrap(
											(t) => {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(r = (e = l.length > 0 && void 0 !== l[0] ? l[0] : {})
																	.title),
																(n = e.content),
																(o = e.editToken),
																(i = e.timestamp),
																(a = e.config),
																(u = void 0 === a ? {} : a),
																(c = e.additionalConfig),
																(s = void 0 === c ? {} : c),
																(t.prev = 1),
																(t.next = 4),
																m.post(
																	q(
																		q(
																			q(
																				{
																					action: 'edit',
																					format: 'json',
																					text: n,
																					title: r,
																					token: o,
																				},
																				i ? {basetimestamp: i} : {}
																			),
																			u
																		),
																		s
																	)
																)
															);
														case 4:
															(f = t.sent), (t.next = 10);
															break;
														case 7:
															(t.prev = 7),
																(t.t0 = t.catch(1)),
																M.error('network_edit_error');
														case 10:
															if (!f.edit) {
																t.next = 22;
																break;
															}
															if ('Success' !== f.edit.result) {
																t.next = 15;
																break;
															}
															return t.abrupt('return', !0);
														case 15:
															if (!f.edit.code) {
																t.next = 19;
																break;
															}
															throw new Error(
																'\n                        '
																	.concat(P.translate('hit_abusefilter'), ':')
																	.concat(
																		f.edit.info.replace(
																			'/Hit AbuseFilter: /ig',
																			''
																		),
																		'\n                        <br>\n                        <div style="font-size: smaller;">'
																	)
																	.concat(
																		f.edit.warning,
																		'</div>\n                    '
																	)
															);
														case 19:
															M.error('unknown_edit_error');
														case 20:
															t.next = 23;
															break;
														case 22:
															f.error && f.error.code
																? M.error(f.error.code)
																: f.code
																  ? M.error(f.code)
																  : M.error('unknown_edit_error');
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
								((o = z(
									Q().mark(function t(e) {
										let r, n;
										return Q().wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (t.next = 2), this.getPageInfo({title: e});
														case 2:
															return (
																(r = t.sent), (n = r.revisionId), t.abrupt('return', n)
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
					r && Y(e.prototype, r),
					n && Y(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t
				);
			})();

			const X = new K();
			function Z(t) {
				return (
					(Z =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					Z(t)
				);
			}
			function tt(t, e) {
				const r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					let n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter((e) => {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push(...n);
				}
				return r;
			}
			function et(t) {
				for (let e = 1; e < arguments.length; e++) {
					const r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? tt(Object(r), !0).forEach((e) => {
								at(t, e, r[e]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						  : tt(Object(r)).forEach((e) => {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
						    });
				}
				return t;
			}
			function rt() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ rt =
					() => {
						return e;
					};
				let t;
				var e = {};
				const r = Object.prototype;
				const n = r.hasOwnProperty;

				const o =
					Object.defineProperty ||
					((t, e, {value}) => {
						t[e] = value;
					});

				const i = 'function' == typeof Symbol ? Symbol : {};
				const a = i.iterator || '@@iterator';
				const u = i.asyncIterator || '@@asyncIterator';
				const c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = (t, e, r) => {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					const i = e && e.prototype instanceof g ? e : g;
					const a = Object.create(i.prototype);
					const u = new I(n || []);
					return o(a, '_invoke', {value: P(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {type: 'normal', arg: t.call(e, r)};
					} catch (t) {
						return {type: 'throw', arg: t};
					}
				}
				e.wrap = f;
				const p = 'suspendedStart';
				const h = 'suspendedYield';
				const v = 'executing';
				const d = 'completed';
				const y = {};
				function g() {}
				function m() {}
				function b() {}
				let w = {};
				s(w, a, function () {
					return this;
				});
				const x = Object.getPrototypeOf;
				const k = x && x(x(T([])));
				k && k !== r && n.call(k, a) && (w = k);
				const S = (b.prototype = g.prototype = Object.create(w));
				function E(t) {
					['next', 'throw', 'return'].forEach((e) => {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function O(t, e) {
					function r(o, i, a, u) {
						const c = l(t[o], t, i);
						if ('throw' !== c.type) {
							const s = c.arg;
							const f = s.value;
							return f && 'object' == Z(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										(t) => {
											r('next', t, a, u);
										},
										(t) => {
											r('throw', t, a, u);
										}
								  )
								: e.resolve(f).then(
										(t) => {
											(s.value = t), a(s);
										},
										(t) => {
											return r('throw', t, a, u);
										}
								  );
						}
						u(c.arg);
					}
					let i;
					o(this, '_invoke', {
						value(t, n) {
							function o() {
								return new e((e, o) => {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function P(e, r, n) {
					let o = p;
					return (i, a) => {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {value: t, done: !0};
						}
						for (n.method = i, n.arg = a; ; ) {
							const u = n.delegate;
							if (u) {
								const c = j(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							const s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {value: s.arg, done: n.done};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function j(e, r) {
					const n = r.method;
					const o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
							y
						);
					const i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					const a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
							  (r.next = e.nextLoc),
							  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
							  (r.delegate = null),
							  y)
							: a
						: ((r.method = 'throw'),
						  (r.arg = new TypeError('iterator result is not an object')),
						  (r.delegate = null),
						  y);
				}
				function L(t) {
					const e = {tryLoc: t[0]};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					const e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function I(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(L, this), this.reset(!0);
				}
				function T(e) {
					if (e || '' === e) {
						const r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							let o = -1;

							const i = function r() {
								for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
								return (r.value = t), (r.done = !0), r;
							};

							return (i.next = i);
						}
					}
					throw new TypeError(`${Z(e)} is not iterable`);
				}
				return (
					(m.prototype = b),
					o(S, 'constructor', {value: b, configurable: !0}),
					o(b, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(b, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = (t) => {
						const e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = (t) => {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, b)
								: ((t.__proto__ = b), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(S)),
							t
						);
					}),
					(e.awrap = (t) => {
						return {__await: t};
					}),
					E(O.prototype),
					s(O.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = O),
					(e.async = (t, r, n, o, i) => {
						void 0 === i && (i = Promise);
						const a = new O(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(({done, value}) => {
									return done ? value : a.next();
							  });
					}),
					E(S),
					s(S, c, 'Generator'),
					s(S, a, function () {
						return this;
					}),
					s(S, 'toString', () => {
						return '[object Generator]';
					}),
					(e.keys = (t) => {
						const e = Object(t);
						const r = [];
						for (const n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									const n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = T),
					(I.prototype = {
						constructor: I,
						reset(e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(_),
								!e)
							)
								for (const r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop() {
							this.done = !0;
							const t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException(e) {
							if (this.done) throw e;
							const r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (let i = this.tryEntries.length - 1; i >= 0; --i) {
								const a = this.tryEntries[i];
								var u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									const c = n.call(a, 'catchLoc');
									const s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt(t, e) {
							for (let r = this.tryEntries.length - 1; r >= 0; --r) {
								const o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							const a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete({type, arg}, e) {
							if ('throw' === type) throw arg;
							return (
								'break' === type || 'continue' === type
									? (this.next = arg)
									: 'return' === type
									  ? ((this.rval = this.arg = arg), (this.method = 'return'), (this.next = 'end'))
									  : 'normal' === type && e && (this.next = e),
								y
							);
						},
						finish(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y;
							}
						},
						catch(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.tryLoc === t) {
									const n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										_(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield(e, r, n) {
							return (
								(this.delegate = {iterator: T(e), resultName: r, nextLoc: n}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function nt(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a);
					var c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function ot(t) {
				return function (...args) {
					const e = this;
					const r = args;
					return new Promise((n, o) => {
						const i = t.apply(e, r);
						function a(t) {
							nt(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							nt(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function it(t, e) {
				for (let r = 0; r < e.length; r++) {
					const n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, ut(n.key), n);
				}
			}
			function at(t, e, r) {
				return (
					(e = ut(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function ut(t) {
				const e = ((t, e) => {
					if ('object' !== Z(t) || null === t) return t;
					const r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						const n = r.call(t, e || 'default');
						if ('object' !== Z(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === Z(e) ? e : String(e);
			}

			const ct = (() => {
				function t({title, revisionId}) {
					const r = title,
						n = revisionId;
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						at(this, 'timestamp', void 0),
						at(this, 'editToken', void 0),
						at(this, 'title', void 0),
						at(this, 'revisionId', void 0),
						at(this, 'inited', !1),
						at(this, 'isNewPage', !1),
						at(this, 'sectionCache', {}),
						(this.title = r),
						(this.revisionId = n),
						(this.isNewPage = !n);
				}
				let e, r, n, o, i, a, u, c, s;
				return (
					(e = t),
					(r = [
						{
							key: 'init',
							value:
								((s = ot(
									rt().mark(function t() {
										let e;
										let r;
										let n;
										const o = arguments;
										return rt().wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(e = (o.length > 0 && void 0 !== o[0] ? o[0] : {})
																	.editToken),
																(r = void 0 === e ? '' : e),
																(n = [this.getTimestamp()]),
																r || n.push(this.getEditToken()),
																(t.next = 5),
																Promise.all(n)
															);
														case 5:
															(this.inited = !0),
																M.info(
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
								((c = ot(
									rt().mark(function t() {
										return rt().wrap(
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
															return (t.next = 7), X.getEditToken();
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
									return c.apply(this, args);
								}),
						},
						{
							key: 'getTimestamp',
							value:
								((u = ot(
									rt().mark(function t() {
										let e, r, n;
										return rt().wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(t.next = 2),
																X.getPageInfo({
																	revisionId: this.revisionId,
																	title: this.title,
																})
															);
														case 2:
															(e = t.sent),
																(r = e.timestamp),
																(n = e.revisionId),
																(this.timestamp = r),
																n && ((this.revisionId = n), (this.isNewPage = !1));
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
									return u.apply(this, args);
								}),
						},
						{
							key: 'getWikiText',
							value:
								((a = ot(
									rt().mark(function t() {
										let e;
										let r;
										let n;
										let o;
										const i = arguments;
										return rt().wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															if (
																((e = (i.length > 0 && void 0 !== i[0] ? i[0] : {})
																	.section),
																(n = -1 === (r = void 0 === e ? '' : e) ? '' : r),
																!this.sectionCache[n])
															) {
																t.next = 4;
																break;
															}
															return t.abrupt('return', this.sectionCache[n]);
														case 4:
															return (
																(t.next = 6),
																X.getWikiText({
																	section: n,
																	revisionId: this.revisionId,
																})
															);
														case 6:
															return (
																(o = t.sent),
																M.info(
																	'Wikitext of '
																		.concat(this.title, '#')
																		.concat(r, ' fetched.')
																),
																(this.sectionCache[n] = o),
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
								((i = ot(
									rt().mark(function t(e) {
										return rt().wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return t.abrupt('return', X.parseWikiText(e, this.title));
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
									return i.apply(this, arguments);
								}),
						},
						{
							key: 'edit',
							value:
								((o = ot(
									rt().mark(function t(e) {
										return rt().wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															if (this.editToken) {
																t.next = 3;
																break;
															}
															return M.error('fail_to_get_edittoken'), t.abrupt('return');
														case 3:
															if (this.timestamp || this.isNewPage) {
																t.next = 6;
																break;
															}
															return M.error('fail_to_get_timestamp'), t.abrupt('return');
														case 6:
															return t.abrupt(
																'return',
																X.edit(
																	et(
																		et(
																			et(
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
																			additionalConfig: et(
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
									return o.apply(this, arguments);
								}),
						},
					]),
					r && it(e.prototype, r),
					n && it(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t
				);
			})();

			const st = ct;
			r(5728), r(1954), r(928), r(2462), r(8436);
			function ft(t) {
				return (
					(ft =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					ft(t)
				);
			}
			function lt(t, e) {
				for (let r = 0; r < e.length; r++) {
					const n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, pt(n.key), n);
				}
			}
			function pt(t) {
				const e = ((t, e) => {
					if ('object' !== ft(t) || null === t) return t;
					const r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						const n = r.call(t, e || 'default');
						if ('object' !== ft(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === ft(e) ? e : String(e);
			}

			const ht = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						this.init();
				}
				let e, r, n;
				return (
					(e = t),
					(r = [
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
									r = args.length > 2 && void 0 !== args[2] ? args[2] : () => {};
								$('#MoeNotification').append(
									$('<div>')
										.addClass('MoeNotification-notice')
										.addClass(`MoeNotification-notice-${e}`)
										.append(`<span>${t}</span>`)
								),
									$('#MoeNotification').find('.MoeNotification-notice').last().fadeIn(300),
									this.bind(),
									this.clear(),
									r($('#MoeNotification').find('.MoeNotification-notice').last());
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
										const r = $(this);
										setTimeout(() => {
											t(r);
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
					r && lt(e.prototype, r),
					n && lt(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t
				);
			})();

			const vt = new ht();

			const dt = (t) => {
				return new Promise((e) => {
					return setTimeout(e, t);
				});
			};

			function yt(t) {
				return (
					(yt =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					yt(t)
				);
			}
			function gt() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ gt =
					() => {
						return e;
					};
				let t;
				var e = {};
				const r = Object.prototype;
				const n = r.hasOwnProperty;

				const o =
					Object.defineProperty ||
					((t, e, {value}) => {
						t[e] = value;
					});

				const i = 'function' == typeof Symbol ? Symbol : {};
				const a = i.iterator || '@@iterator';
				const u = i.asyncIterator || '@@asyncIterator';
				const c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = (t, e, r) => {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					const i = e && e.prototype instanceof g ? e : g;
					const a = Object.create(i.prototype);
					const u = new I(n || []);
					return o(a, '_invoke', {value: P(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {type: 'normal', arg: t.call(e, r)};
					} catch (t) {
						return {type: 'throw', arg: t};
					}
				}
				e.wrap = f;
				const p = 'suspendedStart';
				const h = 'suspendedYield';
				const v = 'executing';
				const d = 'completed';
				const y = {};
				function g() {}
				function m() {}
				function b() {}
				let w = {};
				s(w, a, function () {
					return this;
				});
				const x = Object.getPrototypeOf;
				const k = x && x(x(T([])));
				k && k !== r && n.call(k, a) && (w = k);
				const S = (b.prototype = g.prototype = Object.create(w));
				function E(t) {
					['next', 'throw', 'return'].forEach((e) => {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function O(t, e) {
					function r(o, i, a, u) {
						const c = l(t[o], t, i);
						if ('throw' !== c.type) {
							const s = c.arg;
							const f = s.value;
							return f && 'object' == yt(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										(t) => {
											r('next', t, a, u);
										},
										(t) => {
											r('throw', t, a, u);
										}
								  )
								: e.resolve(f).then(
										(t) => {
											(s.value = t), a(s);
										},
										(t) => {
											return r('throw', t, a, u);
										}
								  );
						}
						u(c.arg);
					}
					let i;
					o(this, '_invoke', {
						value(t, n) {
							function o() {
								return new e((e, o) => {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function P(e, r, n) {
					let o = p;
					return (i, a) => {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {value: t, done: !0};
						}
						for (n.method = i, n.arg = a; ; ) {
							const u = n.delegate;
							if (u) {
								const c = j(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							const s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {value: s.arg, done: n.done};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function j(e, r) {
					const n = r.method;
					const o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
							y
						);
					const i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					const a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
							  (r.next = e.nextLoc),
							  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
							  (r.delegate = null),
							  y)
							: a
						: ((r.method = 'throw'),
						  (r.arg = new TypeError('iterator result is not an object')),
						  (r.delegate = null),
						  y);
				}
				function L(t) {
					const e = {tryLoc: t[0]};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					const e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function I(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(L, this), this.reset(!0);
				}
				function T(e) {
					if (e || '' === e) {
						const r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							let o = -1;

							const i = function r() {
								for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
								return (r.value = t), (r.done = !0), r;
							};

							return (i.next = i);
						}
					}
					throw new TypeError(`${yt(e)} is not iterable`);
				}
				return (
					(m.prototype = b),
					o(S, 'constructor', {value: b, configurable: !0}),
					o(b, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(b, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = (t) => {
						const e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = (t) => {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, b)
								: ((t.__proto__ = b), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(S)),
							t
						);
					}),
					(e.awrap = (t) => {
						return {__await: t};
					}),
					E(O.prototype),
					s(O.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = O),
					(e.async = (t, r, n, o, i) => {
						void 0 === i && (i = Promise);
						const a = new O(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(({done, value}) => {
									return done ? value : a.next();
							  });
					}),
					E(S),
					s(S, c, 'Generator'),
					s(S, a, function () {
						return this;
					}),
					s(S, 'toString', () => {
						return '[object Generator]';
					}),
					(e.keys = (t) => {
						const e = Object(t);
						const r = [];
						for (const n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									const n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = T),
					(I.prototype = {
						constructor: I,
						reset(e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(_),
								!e)
							)
								for (const r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop() {
							this.done = !0;
							const t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException(e) {
							if (this.done) throw e;
							const r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (let i = this.tryEntries.length - 1; i >= 0; --i) {
								const a = this.tryEntries[i];
								var u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									const c = n.call(a, 'catchLoc');
									const s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt(t, e) {
							for (let r = this.tryEntries.length - 1; r >= 0; --r) {
								const o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							const a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete({type, arg}, e) {
							if ('throw' === type) throw arg;
							return (
								'break' === type || 'continue' === type
									? (this.next = arg)
									: 'return' === type
									  ? ((this.rval = this.arg = arg), (this.method = 'return'), (this.next = 'end'))
									  : 'normal' === type && e && (this.next = e),
								y
							);
						},
						finish(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y;
							}
						},
						catch(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.tryLoc === t) {
									const n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										_(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield(e, r, n) {
							return (
								(this.delegate = {iterator: T(e), resultName: r, nextLoc: n}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function mt(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a);
					var c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function bt(t) {
				return function (...args) {
					const e = this;
					const r = args;
					return new Promise((n, o) => {
						const i = t.apply(e, r);
						function a(t) {
							mt(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							mt(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function wt(t, e) {
				for (let r = 0; r < e.length; r++) {
					const n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, kt(n.key), n);
				}
			}
			function xt(t, e, r) {
				return (
					(e = kt(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function kt(t) {
				const e = ((t, e) => {
					if ('object' !== yt(t) || null === t) return t;
					const r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						const n = r.call(t, e || 'default');
						if ('object' !== yt(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === yt(e) ? e : String(e);
			}

			const St = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
						xt(this, 'quickEditPanelVisible', !1),
						xt(this, 'scrollTop', 0);
				}
				let e, r, n;
				return (
					(e = t),
					(r = [
						{
							key: 'createDialogBox',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : 'Wikiplus',
									e = args.length > 1 && void 0 !== args[1] ? args[1] : '',
									r = args.length > 2 && void 0 !== args[2] ? args[2] : 600,
									n = args.length > 3 && void 0 !== args[3] ? args[3] : () => {};
								$('.Wikiplus-InterBox').length > 0 &&
									$('.Wikiplus-InterBox').each(function () {
										$(this).remove();
									});
								const o = window.innerWidth,
									i = window.innerHeight,
									a = Math.min(o, r),
									u = $('<div>')
										.addClass('Wikiplus-InterBox')
										.css({
											'margin-left': o / 2 - a / 2,
											top: $(document).scrollTop() + 0.2 * i,
											display: 'none',
										})
										.append($('<div>').addClass('Wikiplus-InterBox-Header').html(t))
										.append($('<div>').addClass('Wikiplus-InterBox-Content').append(e))
										.append($('<span>').text('×').addClass('Wikiplus-InterBox-Close'));
								return (
									$('body').append(u),
									$('.Wikiplus-InterBox').width(a),
									$('.Wikiplus-InterBox-Close').on('click', function () {
										$(this)
											.parent()
											.fadeOut('fast', function () {
												(window.onclose = window.onbeforeunload = void 0), $(this).remove();
											});
									}),
									(function t(e) {
										e.mousedown(({clientX, clientY}) => {
											const n = clientX,
												o = clientY,
												i = e.parent().offset().left,
												a = e.parent().offset().top;
											$(document).on('mousemove', ({clientX, clientY}) => {
												e.parent().css({
													'margin-left': i + clientX - n,
													top: a + clientY - o,
												});
											}),
												$(document).on('mouseup', () => {
													e.unbind('mousedown'),
														$(document).off('mousemove'),
														$(document).off('mouseup'),
														t(e);
												});
										});
									})($('.Wikiplus-InterBox-Header')),
									$('.Wikiplus-InterBox').fadeIn(500),
									n(),
									u
								);
							},
						},
						{
							key: 'addFunctionButton',
							value(t, e) {
								let r;
								switch (i.skin) {
									case 'minerva':
										r = $('<li>')
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
										r = $('<li>')
											.addClass('Wikiplus-More-Function-Button')
											.attr('id', e)
											.append($('<a>').attr('href', 'javascript:void(0);').text(t));
										break;
									default:
										r = $('<li>')
											.addClass('mw-list-item')
											.addClass('vector-tab-noicon')
											.attr('id', e)
											.append($('<a>').attr('href', 'javascript:void(0);').text(t));
								}
								return 'minerva' === i.skin && $('#p-tb').length > 0
									? ($('#p-tb').append(r), $('#'.concat(e)))
									: 'moeskin' === i.skin
									  ? ($('.more-actions-list').first().append(r), $('#'.concat(e)))
									  : $('#p-cactions').length > 0
									    ? ($('#p-cactions ul').append(r), $('#'.concat(e)))
									    : void M.info(P.translate('cant_add_funcbtn'));
							},
						},
						{
							key: 'insertSimpleRedirectButton',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : () => {},
									e = this.addFunctionButton(P.translate('redirect_from'), 'Wikiplus-SR-Intro');
								e && e.on('click', t);
							},
						},
						{
							key: 'insertSettingsPanelButton',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : () => {},
									e = this.addFunctionButton(
										P.translate('wikiplus_settings'),
										'Wikiplus-Settings-Intro'
									);
								e && e.on('click', t);
							},
						},
						{
							key: 'insertTopQuickEditEntry',
							value(t) {
								const e = $('<li>').attr('id', 'Wikiplus-Edit-TopBtn').attr('class', 'mw-list-item'),
									r = $('<a>')
										.attr('href', 'javascript:void(0)')
										.text(''.concat(P.translate('quickedit_topbtn')));
								switch ((e.append(r), i.skin)) {
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
										e.append($('<span>').append(r));
								}
								$(e).on('click', () => {
									t({sectionNumber: -1, targetPageName: i.currentPageName});
								}),
									$('#ca-edit').length > 0 &&
										0 === $('#Wikiplus-Edit-TopBtn').length &&
										('minerva' === i.skin
											? $('#ca-edit').parent().after(e)
											: $('#ca-edit').after(e));
							},
						},
						{
							key: 'insertSectionQuickEditEntries',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : () => {},
									e =
										'minerva' === i.skin
											? $('<span>').append(
													$('<a>')
														.addClass(
															'Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right'
														)
														.css('margin-left', '0.75em')
														.attr('href', 'javascript:void(0)')
														.attr('title', P.translate('quickedit_sectionbtn'))
											  )
											: $('<span>')
													.append($('<span>').addClass('mw-editsection-divider').text(' | '))
													.append(
														$('<a>')
															.addClass('Wikiplus-Edit-SectionBtn')
															.attr('href', 'javascript:void(0)')
															.text(P.translate('quickedit_sectionbtn'))
													);
								$('.mw-editsection').each(function (r) {
									try {
										const n = $(this).find("a[href*='action=edit']").first().attr('href'),
											o = n.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, ''),
											a = decodeURIComponent(n.match(/title=(.+?)&/)[1]),
											u = $(this).prev().clone();
										u.find('.mw-headline-number').remove();
										const c = u.text().trim(),
											s = e.clone();
										s.find('.Wikiplus-Edit-SectionBtn').on('click', () => {
											t({sectionNumber: o, sectionName: c, targetPageName: a});
										}),
											'minerva' === i.skin
												? $(this).append(s)
												: $(this).find('.mw-editsection-bracket').last().before(s);
									} catch (t) {
										M.error('fail_to_init_quickedit');
									}
								});
							},
						},
						{
							key: 'insertLinkEditEntries',
							value(...args) {
								const t = args.length > 0 && void 0 !== args[0] ? args[0] : () => {};
								$('#mw-content-text a.external').each(function (e) {
									const r = ((t) => {
										for (var e, r = /(([^?&=]+)(?:=([^?&=]*))*)/g, n = {}; (e = r.exec(t)); )
											try {
												n[e[2]] = decodeURIComponent(e[3]);
											} catch (t) {
												n[e[2]] = e[3];
											}
										return n;
									})($(this).attr('href'));
									'edit' === r.action &&
										void 0 !== r.title &&
										'new' !== r.section &&
										$(this).after(
											$('<a>')
												.attr({
													href: 'javascript:void(0)',
													class: 'Wikiplus-Edit-EveryWhereBtn',
												})
												.text('('.concat(P.translate('quickedit_sectionbtn'), ')'))
												.on('click', () => {
													let e;
													t({
														targetPageName: r.title,
														sectionNumber:
															null !== (e = r.section) && void 0 !== e ? e : -1,
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
									r = void 0 === e ? '' : e,
									n = t.content,
									o = void 0 === n ? '' : n,
									i = t.summary,
									a = void 0 === i ? '' : i,
									u = t.onBack,
									c = void 0 === u ? () => {} : u,
									s = t.onParse,
									f = void 0 === s ? () => {} : s,
									l = t.onEdit,
									p = void 0 === l ? () => {} : l,
									h = t.escExit,
									v = void 0 !== h && h,
									d = this;
								(this.scrollTop = $(document).scrollTop()),
									this.quickEditPanelVisible && this.hideQuickEditPanel(),
									(this.quickEditPanelVisible = !0),
									(window.onclose = window.onbeforeunload =
										() => {
											return ''.concat(P.translate('onclose_confirm'));
										});
								const y = $('.noarticletext').length > 0,
									g = $('<span>')
										.attr('id', 'Wikiplus-Quickedit-Back')
										.addClass('Wikiplus-Btn')
										.text(''.concat(P.translate('back'))),
									m = $('<span>')
										.attr('id', 'Wikiplus-Quickedit-Jump')
										.addClass('Wikiplus-Btn')
										.append(
											$('<a>')
												.attr('href', '#Wikiplus-Quickedit')
												.text(''.concat(P.translate('goto_editbox')))
										),
									b = $('<textarea>').attr('id', 'Wikiplus-Quickedit'),
									w = $('<div>').attr('id', 'Wikiplus-Quickedit-Preview-Output'),
									x = $('<input>')
										.attr('id', 'Wikiplus-Quickedit-Summary-Input')
										.attr('placeholder', ''.concat(P.translate('summary_placehold'))),
									k = $('<button>')
										.attr('id', 'Wikiplus-Quickedit-Submit')
										.text(
											''.concat(P.translate(y ? 'publish_page' : 'publish_change'), '(Ctrl+S)')
										),
									S = $('<button>')
										.attr('id', 'Wikiplus-Quickedit-Preview-Submit')
										.text(''.concat(P.translate('preview'))),
									E = $('<div>')
										.append(
											$('<input>').attr({
												type: 'checkbox',
												id: 'Wikiplus-Quickedit-MinorEdit',
											})
										)
										.append(
											$('<label>')
												.attr('for', 'Wikiplus-Quickedit-MinorEdit')
												.text(''.concat(P.translate('mark_minoredit'), '(Ctrl+Shift+S)'))
										)
										.css({margin: '5px 5px 5px -3px', display: 'inline'}),
									O = $('<div>').append(g, m, w, b, x, $('<br>'), E, k, S);
								this.createDialogBox(r, O, 1e3, () => {
									$('#Wikiplus-Quickedit').val(o), $('#Wikiplus-Quickedit-Summary-Input').val(a);
								}),
									$('#Wikiplus-Quickedit-Back').on('click', c),
									$('#Wikiplus-Quickedit-Preview-Submit').on(
										'click',
										bt(
											gt().mark(function t() {
												let e, r, n;
												return gt().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(e = $('<div>')
																			.addClass('Wikiplus-Banner')
																			.text(
																				''.concat(
																					P.translate('loading_preview')
																				)
																			)),
																		(r = $('#Wikiplus-Quickedit').val()),
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
																			{scrollTop: d.scrollTop},
																			200
																		),
																		(t.next = 7),
																		f(r)
																	);
																case 7:
																	(n = t.sent),
																		$('#Wikiplus-Quickedit-Preview-Output').fadeOut(
																			'100',
																			() => {
																				$(
																					'#Wikiplus-Quickedit-Preview-Output'
																				).html(
																					`<hr><div class="mw-body-content">${n}</div><hr>`
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
										bt(
											gt().mark(function t() {
												let e, r, n, o;
												return gt().wrap(
													(t) => {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(e = new Date().valueOf()),
																		(r = $('<div>')
																			.addClass('Wikiplus-Banner')
																			.text(
																				''.concat(
																					P.translate('submitting_edit')
																				)
																			)),
																		(n = {
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
																			{scrollTop: d.scrollTop},
																			200
																		),
																		$('#Wikiplus-Quickedit-Preview-Output').fadeOut(
																			100,
																			() => {
																				$('#Wikiplus-Quickedit-Preview-Output')
																					.html('')
																					.append(r),
																					$(
																						'#Wikiplus-Quickedit-Preview-Output'
																					).fadeIn(100);
																			}
																		),
																		(t.prev = 6),
																		(t.next = 9),
																		p(n)
																	);
																case 9:
																	(o = new Date().valueOf() - e),
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
																					P.translate('edit_success', [
																						o.toString(),
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
									v &&
										$(document).on('keydown', ({which}) => {
											27 === which && $('#Wikiplus-Quickedit-Back').click();
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
									r = e.onEdit,
									n = void 0 === r ? () => {} : r,
									o = e.onSuccess,
									i = void 0 === o ? () => {} : o,
									a = $('<input>').addClass('Wikiplus-InterBox-Input'),
									u = $('<div>')
										.addClass('Wikiplus-InterBox-Btn')
										.attr('id', 'Wikiplus-SR-Apply')
										.text(P.translate('submit')),
									c = $('<div>')
										.addClass('Wikiplus-InterBox-Btn')
										.attr('id', 'Wikiplus-SR-Cancel')
										.text(P.translate('cancel')),
									s = $('<div>')
										.addClass('Wikiplus-InterBox-Btn')
										.attr('id', 'Wikiplus-SR-Continue')
										.text(P.translate('continue')),
									f = $('<div>').append(a).append($('<hr>')).append(u).append(c),
									l = this.createDialogBox(P.translate('redirect_desc'), f, 600);
								u.on(
									'click',
									bt(
										gt().mark(function e() {
											let r;
											return gt().wrap(
												(e) => {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(r = $('.Wikiplus-InterBox-Input').val()),
																	$('.Wikiplus-InterBox-Content').html(
																		'<div class="Wikiplus-Banner">'.concat(
																			P.translate('submitting_edit'),
																			'</div>'
																		)
																	),
																	(e.prev = 2),
																	(e.next = 5),
																	n({title: r, forceOverwrite: !1})
																);
															case 5:
																$('.Wikiplus-Banner').text(
																	P.translate('redirect_saved')
																),
																	t.hideSimpleRedirectPanel(l),
																	i({title: r}),
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
																			.append(c),
																		c.on('click', () => {
																			t.hideSimpleRedirectPanel(l);
																		}),
																		s.on(
																			'click',
																			bt(
																				gt().mark(function e() {
																					return gt().wrap(
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
																													P.translate(
																														'submitting_edit'
																													),
																													'</div>'
																												)
																											),
																											(e.prev = 1),
																											(e.next = 4),
																											n({
																												title: r,
																												forceOverwrite:
																													!0,
																											})
																										);
																									case 4:
																										$(
																											'.Wikiplus-Banner'
																										).text(
																											P.translate(
																												'redirect_saved'
																											)
																										),
																											t.hideSimpleRedirectPanel(
																												l
																											),
																											i({
																												title: r,
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
									c.on('click', () => {
										t.hideSimpleRedirectPanel(l);
									});
							},
						},
						{
							key: 'hideSimpleRedirectPanel',
							value(...args) {
								(args.length > 0 && void 0 !== args[0] ? args[0] : $('body'))
									.find('.Wikiplus-InterBox-Close')
									.trigger('click');
							},
						},
						{
							key: 'showSettingsPanel',
							value(...args) {
								const t = this,
									e = (args.length > 0 && void 0 !== args[0] ? args[0] : {}).onSubmit,
									r = void 0 === e ? () => {} : e,
									n = $('<textarea>').attr('id', 'Wikiplus-Setting-Input').attr('rows', '10'),
									o = $('<div>')
										.addClass('Wikiplus-InterBox-Btn')
										.attr('id', 'Wikiplus-Setting-Apply')
										.text(P.translate('submit')),
									i = $('<div>')
										.addClass('Wikiplus-InterBox-Btn')
										.attr('id', 'Wikiplus-Setting-Cancel')
										.text(P.translate('cancel')),
									a = $('<div>').append(n).append($('<hr>')).append(o).append(i),
									u = this.createDialogBox(P.translate('wikiplus_settings_desc'), a, 600, () => {
										if (localStorage.Wikiplus_Settings) {
											$('#Wikiplus-Setting-Input').val(localStorage.Wikiplus_Settings);
											try {
												var t = JSON.parse(localStorage.Wikiplus_Settings);
												$('#Wikiplus-Setting-Input').val(JSON.stringify(t, null, 2));
											} catch (t) {}
										} else
											$('#Wikiplus-Setting-Input').attr(
												'placeholder',
												P.translate('wikiplus_settings_placeholder')
											);
									});
								o.on(
									'click',
									bt(
										gt().mark(function e() {
											let n, o;
											return gt().wrap(
												(e) => {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(n = $('<div>')
																		.addClass('Wikiplus-Banner')
																		.text(P.translate('wikiplus_settings_saved'))),
																	(o = $('#Wikiplus-Setting-Input').val()),
																	(e.prev = 2),
																	r({settings: o}),
																	$('.Wikiplus-InterBox-Content').html('').append(n),
																	(e.next = 7),
																	dt(1500)
																);
															case 7:
																t.hideSettingsPanel(u), (e.next = 13);
																break;
															case 10:
																(e.prev = 10),
																	(e.t0 = e.catch(2)),
																	vt.error(
																		P.translate('wikiplus_settings_grammar_error')
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
									i.on('click', () => {
										t.hideSettingsPanel(u);
									});
							},
						},
						{
							key: 'hideSettingsPanel',
							value(...args) {
								(args.length > 0 && void 0 !== args[0] ? args[0] : $('body'))
									.find('.Wikiplus-InterBox-Close')
									.trigger('click');
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
					r && wt(e.prototype, r),
					n && wt(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t
				);
			})();

			const Et = new St();
			function Ot(t) {
				return (
					(Ot =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					Ot(t)
				);
			}
			function Pt(t, e) {
				for (let r = 0; r < e.length; r++) {
					const n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, jt(n.key), n);
				}
			}
			function jt(t) {
				const e = ((t, e) => {
					if ('object' !== Ot(t) || null === t) return t;
					const r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						const n = r.call(t, e || 'default');
						if ('object' !== Ot(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === Ot(e) ? e : String(e);
			}

			const Lt = (() => {
				function t() {
					!((t, e) => {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
					})(this, t);
				}
				let e, r, n;
				return (
					(e = t),
					(r = [
						{
							key: 'getSetting',
							value(t) {
								let e;
								const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								const n = r;
								try {
									e = JSON.parse(localStorage.Wikiplus_Settings);
								} catch (t) {
									return;
								}
								try {
									const o = new Function(`return ${e[t]}`);
									if ('function' != typeof o) return e[t];
									try {
										return !0 === o()(n) ? void 0 : o()(n) || e[t];
									} catch (r) {
										return e[t];
									}
								} catch (n) {
									try {
										for (var i = e[t], a = 0, u = Object.keys(r); a < u.length; a++) {
											const c = u[a];
											i = i.replace('${'.concat(c, '}'), r[c]);
										}
										return i;
									} catch (t) {
										return;
									}
								}
							},
						},
					]),
					r && Pt(e.prototype, r),
					n && Pt(e, n),
					Object.defineProperty(e, 'prototype', {writable: !1}),
					t
				);
			})();

			const _t = new Lt();
			function It(t) {
				return (
					(It =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? (t) => {
									return typeof t;
							  }
							: (t) => {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
							  }),
					It(t)
				);
			}
			function Tt(t, e) {
				const r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					let n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter((e) => {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push(...n);
				}
				return r;
			}
			function Rt(t) {
				for (let e = 1; e < arguments.length; e++) {
					const r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? Tt(Object(r), !0).forEach((e) => {
								$t(t, e, r[e]);
						  })
						: Object.getOwnPropertyDescriptors
						  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
						  : Tt(Object(r)).forEach((e) => {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
						    });
				}
				return t;
			}
			function $t(t, e, r) {
				return (
					(e = ((t) => {
						const e = ((t, e) => {
							if ('object' !== It(t) || null === t) return t;
							const r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								const n = r.call(t, e || 'default');
								if ('object' !== It(n)) return n;
								throw new TypeError('@@toPrimitive must return a primitive value.');
							}
							return ('string' === e ? String : Number)(t);
						})(t, 'string');
						return 'symbol' === It(e) ? e : String(e);
					})(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function Nt() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Nt =
					() => {
						return e;
					};
				let t;
				var e = {};
				const r = Object.prototype;
				const n = r.hasOwnProperty;

				const o =
					Object.defineProperty ||
					((t, e, {value}) => {
						t[e] = value;
					});

				const i = 'function' == typeof Symbol ? Symbol : {};
				const a = i.iterator || '@@iterator';
				const u = i.asyncIterator || '@@asyncIterator';
				const c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = (t, e, r) => {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					const i = e && e.prototype instanceof g ? e : g;
					const a = Object.create(i.prototype);
					const u = new I(n || []);
					return o(a, '_invoke', {value: P(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {type: 'normal', arg: t.call(e, r)};
					} catch (t) {
						return {type: 'throw', arg: t};
					}
				}
				e.wrap = f;
				const p = 'suspendedStart';
				const h = 'suspendedYield';
				const v = 'executing';
				const d = 'completed';
				const y = {};
				function g() {}
				function m() {}
				function b() {}
				let w = {};
				s(w, a, function () {
					return this;
				});
				const x = Object.getPrototypeOf;
				const k = x && x(x(T([])));
				k && k !== r && n.call(k, a) && (w = k);
				const S = (b.prototype = g.prototype = Object.create(w));
				function E(t) {
					['next', 'throw', 'return'].forEach((e) => {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function O(t, e) {
					function r(o, i, a, u) {
						const c = l(t[o], t, i);
						if ('throw' !== c.type) {
							const s = c.arg;
							const f = s.value;
							return f && 'object' == It(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										(t) => {
											r('next', t, a, u);
										},
										(t) => {
											r('throw', t, a, u);
										}
								  )
								: e.resolve(f).then(
										(t) => {
											(s.value = t), a(s);
										},
										(t) => {
											return r('throw', t, a, u);
										}
								  );
						}
						u(c.arg);
					}
					let i;
					o(this, '_invoke', {
						value(t, n) {
							function o() {
								return new e((e, o) => {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function P(e, r, n) {
					let o = p;
					return (i, a) => {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {value: t, done: !0};
						}
						for (n.method = i, n.arg = a; ; ) {
							const u = n.delegate;
							if (u) {
								const c = j(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							const s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {value: s.arg, done: n.done};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function j(e, r) {
					const n = r.method;
					const o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError(`The iterator does not provide a '${n}' method`)))),
							y
						);
					const i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					const a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
							  (r.next = e.nextLoc),
							  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
							  (r.delegate = null),
							  y)
							: a
						: ((r.method = 'throw'),
						  (r.arg = new TypeError('iterator result is not an object')),
						  (r.delegate = null),
						  y);
				}
				function L(t) {
					const e = {tryLoc: t[0]};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					const e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function I(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(L, this), this.reset(!0);
				}
				function T(e) {
					if (e || '' === e) {
						const r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							let o = -1;

							const i = function r() {
								for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
								return (r.value = t), (r.done = !0), r;
							};

							return (i.next = i);
						}
					}
					throw new TypeError(`${It(e)} is not iterable`);
				}
				return (
					(m.prototype = b),
					o(S, 'constructor', {value: b, configurable: !0}),
					o(b, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(b, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = (t) => {
						const e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = (t) => {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, b)
								: ((t.__proto__ = b), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(S)),
							t
						);
					}),
					(e.awrap = (t) => {
						return {__await: t};
					}),
					E(O.prototype),
					s(O.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = O),
					(e.async = (t, r, n, o, i) => {
						void 0 === i && (i = Promise);
						const a = new O(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(({done, value}) => {
									return done ? value : a.next();
							  });
					}),
					E(S),
					s(S, c, 'Generator'),
					s(S, a, function () {
						return this;
					}),
					s(S, 'toString', () => {
						return '[object Generator]';
					}),
					(e.keys = (t) => {
						const e = Object(t);
						const r = [];
						for (const n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									const n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = T),
					(I.prototype = {
						constructor: I,
						reset(e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(_),
								!e)
							)
								for (const r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop() {
							this.done = !0;
							const t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException(e) {
							if (this.done) throw e;
							const r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (let i = this.tryEntries.length - 1; i >= 0; --i) {
								const a = this.tryEntries[i];
								var u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									const c = n.call(a, 'catchLoc');
									const s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt(t, e) {
							for (let r = this.tryEntries.length - 1; r >= 0; --r) {
								const o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							const a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete({type, arg}, e) {
							if ('throw' === type) throw arg;
							return (
								'break' === type || 'continue' === type
									? (this.next = arg)
									: 'return' === type
									  ? ((this.rval = this.arg = arg), (this.method = 'return'), (this.next = 'end'))
									  : 'normal' === type && e && (this.next = e),
								y
							);
						},
						finish(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y;
							}
						},
						catch(t) {
							for (let e = this.tryEntries.length - 1; e >= 0; --e) {
								const r = this.tryEntries[e];
								if (r.tryLoc === t) {
									const n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										_(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield(e, r, n) {
							return (
								(this.delegate = {iterator: T(e), resultName: r, nextLoc: n}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function Ct(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a);
					var c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function At(t) {
				return function (...args) {
					const e = this;
					const r = args;
					return new Promise((n, o) => {
						const i = t.apply(e, r);
						function a(t) {
							Ct(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							Ct(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			$(
				At(
					Nt().mark(function t() {
						let e;
						let r;
						let n;
						let o;
						let a;
						let u;
						let c;
						let s;
						let f;
						let l;
						return Nt().wrap((t) => {
							for (;;)
								switch ((t.prev = t.next)) {
									case 0:
										if (
											((e = {}),
											(r = $('.noarticletext').length > 0 && 0 === i.articleId),
											(n = (() => {
												const t = At(
													Nt().mark(function t(r) {
														let n;
														let o;
														let i;
														return Nt().wrap((t) => {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		if (
																			((n = r.revisionId), (o = r.title), !e[n])
																		) {
																			t.next = 3;
																			break;
																		}
																		return t.abrupt('return', e[n]);
																	case 3:
																		return (
																			(i = new st({revisionId: n, title: o})),
																			(t.next = 6),
																			i.init()
																		);
																	case 6:
																		return (e[n] = i), t.abrupt('return', e[n]);
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
											M.info('Wikiplus now loading. Version: '.concat(i.version)),
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
										if (i.userGroups.includes('autoconfirmed')) {
											t.next = 11;
											break;
										}
										return (
											vt.error(P.translate('not_autoconfirmed_user')),
											M.info(P.translate('not_autoconfirmed_user')),
											t.abrupt('return')
										);
									case 11:
										if (i.isArticle && 'view' === i.action) {
											t.next = 14;
											break;
										}
										return M.info('Not an editable page. Stop initialization.'), t.abrupt('return');
									case 14:
										return (
											(window._WikiplusPages = e),
											(o = i.currentPageName),
											(a = i.revisionId),
											(t.next = 19),
											n({revisionId: a, title: o})
										);
									case 19:
										(u = t.sent),
											(c = (() => {
												const t = At(
													Nt().mark(function t() {
														let e;
														let a;
														let u;
														let c;
														let s;
														let f;
														let l;
														let p;
														let h;
														let v;
														let d;
														let y;
														let g;
														let m;
														let b;
														let w;
														let x;
														const k = arguments;
														return Nt().wrap((t) => {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		if (
																			((a = (e =
																				k.length > 0 && void 0 !== k[0]
																					? k[0]
																					: {}).sectionNumber),
																			(u = e.sectionName),
																			(c = e.targetPageName),
																			!(s = c !== o) ||
																				i.latestRevisionId === i.revisionId)
																		) {
																			t.next = 5;
																			break;
																		}
																		return (
																			M.error(
																				'cross_page_history_revision_edit_warning'
																			),
																			t.abrupt('return')
																		);
																	case 5:
																		if (!s) {
																			t.next = 11;
																			break;
																		}
																		return (
																			(t.next = 8),
																			X.getLatestRevisionIdForPage(c)
																		);
																	case 8:
																		(t.t0 = t.sent), (t.next = 12);
																		break;
																	case 11:
																		t.t0 = i.revisionId;
																	case 12:
																		return (
																			(f = t.t0),
																			(t.next = 15),
																			n({revisionId: f, title: c})
																		);
																	case 15:
																		return (
																			(l = t.sent),
																			(p = _t.getSetting('defaultSummary', {
																				sectionName: u,
																				sectionNumber: a,
																				sectionTargetName: c,
																			})),
																			(h =
																				p ||
																				(u
																					? '/* '
																							.concat(u, ' */ ')
																							.concat(
																								P.translate(
																									'default_summary_suffix'
																								)
																							)
																					: P.translate(
																							'default_summary_suffix'
																					  ))),
																			(v = setTimeout(() => {
																				vt.success(P.translate('loading'));
																			}, 200)),
																			(t.next = 21),
																			l.getWikiText({section: a})
																		);
																	case 21:
																		(d = t.sent),
																			(y =
																				!s &&
																				i.latestRevisionId !== i.revisionId),
																			(g =
																				!0 ===
																					_t.getSetting(
																						'esc_to_exit_quickedit'
																					) ||
																				'true' ===
																					_t.getSetting(
																						'esc_to_exit_quickedit'
																					) ||
																				!0 ===
																					_t.getSetting(
																						'escToExitQuickEdit'
																					) ||
																				'true' ===
																					_t.getSetting(
																						'escToExitQuickEdit'
																					)),
																			(m = _t.getSetting('custom_edit_tags')),
																			(b =
																				location.host.includes(
																					'zh.wikipedia.org'
																				) ||
																				location.host.includes(
																					'zh.m.wikipedia.org'
																				)
																					? ['wikiplus']
																					: []),
																			(w = null != m && m.length ? m : b),
																			clearTimeout(v),
																			vt.empty(),
																			y &&
																				vt.warning(
																					P.translate('history_edit_warning')
																				),
																			(x = s ? !f : r),
																			Et.showQuickEditPanel({
																				title: ''
																					.concat(
																						P.translate('quickedit_topbtn')
																					)
																					.concat(
																						y
																							? P.translate(
																									'history_edit_warning'
																							  )
																							: ''
																					),
																				content: x
																					? P.translate('create_page_tip')
																					: d,
																				summary: h,
																				onBack: Et.hideQuickEditPanel,
																				onParse(t) {
																					return l.parseWikiText(t);
																				},
																				onEdit: (() => {
																					const t = At(
																						Nt().mark(function t(e) {
																							let r;
																							let n;
																							let o;
																							let i;
																							return Nt().wrap((t) => {
																								for (;;)
																									switch (
																										(t.prev =
																											t.next)
																									) {
																										case 0:
																											return (
																												(r =
																													e.content),
																												(n =
																													e.summary),
																												(o =
																													e.isMinorEdit),
																												(i = {
																													content:
																														r,
																													config: Rt(
																														Rt(
																															{
																																summary:
																																	n,
																															},
																															-1 !==
																																a
																																? {
																																		section:
																																			a,
																																  }
																																: {}
																														),
																														w.length
																															? {
																																	tags: w.join(
																																		'|'
																																	),
																															  }
																															: {}
																													),
																												}),
																												o
																													? (i.config.minor =
																															'true')
																													: (i.config.notminor =
																															'true'),
																												(t.next = 5),
																												l.edit(
																													i
																												)
																											);
																										case 5:
																										case 'end':
																											return t.stop();
																									}
																							}, t);
																						})
																					);
																					return function (e) {
																						return t.apply(this, arguments);
																					};
																				})(),
																				escExit: g,
																			});
																	case 32:
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
												const t = At(
													Nt().mark(function t() {
														return Nt().wrap((t) => {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		Et.showSimpleRedirectPanel({
																			onEdit: (() => {
																				const t = At(
																					Nt().mark(function t(e) {
																						let r;
																						let o;
																						let a;
																						let u;
																						let c;
																						let s;
																						return Nt().wrap((t) => {
																							for (;;)
																								switch (
																									(t.prev = t.next)
																								) {
																									case 0:
																										return (
																											(r =
																												e.title),
																											(o =
																												e.forceOverwrite),
																											(a =
																												void 0 !==
																													o &&
																												o),
																											(t.next = 3),
																											n({
																												title: r,
																											})
																										);
																									case 3:
																										return (
																											(u =
																												t.sent),
																											(c =
																												i.currentPageName),
																											(s = {
																												content:
																													'#REDIRECT [['.concat(
																														c,
																														']]'
																													),
																												config: {
																													summary:
																														P.translate(
																															'redirect_from_summary',
																															[
																																r,
																																c,
																															]
																														),
																												},
																											}),
																											a ||
																												(s.config.createonly =
																													'true'),
																											(t.next = 9),
																											u.edit(s)
																										);
																									case 9:
																									case 'end':
																										return t.stop();
																								}
																						}, t);
																					})
																				);
																				return function (e) {
																					return t.apply(this, arguments);
																				};
																			})(),
																			onSuccess({title}) {
																				const e = title;
																				location.href = i.articlePath.replace(
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
											(f = (() => {
												const t = At(
													Nt().mark(function t() {
														return Nt().wrap((t) => {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		Et.showSettingsPanel({
																			onSubmit({settings}) {
																				const e = settings;
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
											(l = (() => {
												const t = At(
													Nt().mark(function t(e) {
														let r;
														return Nt().wrap((t) => {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (
																			(r = e.sectionNumber),
																			(t.next = 3),
																			u.getWikiText({section: r})
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
											Et.insertTopQuickEditEntry(c),
											Et.insertSectionQuickEditEntries(c),
											Et.insertLinkEditEntries(c),
											Et.insertSimpleRedirectButton(s),
											Et.insertSettingsPanelButton(f),
											Et.bindPreloadEvents(l);
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
