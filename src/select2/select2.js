((A) => {
	'function' == typeof define && define.amd ? define(['jquery'], A) : A(jQuery);
})((A) => {
	const Y = (() => {
		function K(g, h) {
			let e;
			let c;
			let b;
			let a;
			let d;
			let f;
			h = h && h.split('/');
			const k = B.map;
			const m = (k && k['*']) || {};
			if (g) {
				var n = (g = g.split('/')).length - 1;
				B.nodeIdCompat && P.test(g[n]) && (g[n] = g[n].replace(P, ''));
				'.' === g[0].charAt(0) && h && (g = h.slice(0, h.length - 1).concat(g));
				for (n = 0; n < g.length; n++)
					'.' === (e = g[n])
						? (g.splice(n, 1), --n)
						: '..' !== e ||
						  0 === n ||
						  (1 === n && '..' === g[2]) ||
						  '..' === g[n - 1] ||
						  (0 < n && (g.splice(n - 1, 2), (n -= 2)));
				g = g.join('/');
			}
			if ((h || m) && k) {
				for (n = (e = g.split('/')).length; 0 < n; --n) {
					if (((c = e.slice(0, n).join('/')), h))
						for (f = h.length; 0 < f; --f)
							if ((b = (b = k[h.slice(0, f).join('/')]) && b[c])) {
								var p = b;
								var t = n;
								break;
							}
					if (p) {
						break;
					}
					!a && m && m[c] && ((a = m[c]), (d = n));
				}
				!p && a && ((p = a), (t = d));
				p && (e.splice(0, t, p), (g = e.join('/')));
			}
			return g;
		}
		function U(g, h) {
			return (...args) => {
				const e = V.call(args, 0);
				return 'string' != typeof e[0] && 1 === e.length && e.push(null), H.apply(E, e.concat([g, h]));
			};
		}
		function Z(g) {
			return (h) => {
				w[g] = h;
			};
		}
		function L(g) {
			if (C.call(F, g)) {
				const h = F[g];
				delete F[g];
				M[g] = !0;
				N.apply(E, h);
			}
			if (!C.call(w, g) && !C.call(M, g)) {
				throw Error('No ' + g);
			}
			return w[g];
		}
		function O(g) {
			let h;
			const e = g ? g.indexOf('!') : -1;
			return -1 < e && ((h = g.substring(0, e)), (g = g.substring(e + 1, g.length))), [h, g];
		}
		if (A && A.fn && A.fn.select2 && A.fn.select2.amd) {
			var q = A.fn.select2.amd;
		}
		let Q;
		let R;
		let W;
		var E;
		var N;
		var H;
		let S;
		let I;
		var w;
		var F;
		var B;
		var M;
		var C;
		var V;
		var P;
		return (
			(q && q.requirejs) ||
				(q ? (R = q) : (q = {}),
				(w = {}),
				(F = {}),
				(B = {}),
				(M = {}),
				(C = Object.prototype.hasOwnProperty),
				(V = [].slice),
				(P = /\.js$/),
				(S = (g, h) => {
					let e;
					let c = O(g);
					let b = c[0];
					h = h[1];
					return (
						(g = c[1]),
						b && (e = L((b = K(b, h)))),
						b
							? (g =
									e && e.normalize
										? e.normalize(
												g,
												(
													(a) => (d) =>
														K(d, a)
												)(h)
										  )
										: K(g, h))
							: ((b = (c = O((g = K(g, h))))[0]), (g = c[1]), b && (e = L(b))),
						{f: b ? b + '!' + g : g, n: g, pr: b, p: e}
					);
				}),
				(I = {
					require: (g) => U(g),
					exports: (g) => {
						const h = w[g];
						return void 0 !== h ? h : (w[g] = {});
					},
					module: (g) => ({
						id: g,
						uri: '',
						exports: w[g],
						config: (
							(h) => () =>
								(B && B.config && B.config[h]) || {}
						)(g),
					}),
				}),
				(N = (g, h, e, c) => {
					let b;
					let a;
					const d = [];
					let f = typeof e;
					let k = (k = c = c || g) ? O(k) : [];
					if ('undefined' == f || 'function' == f) {
						h = !h.length && e.length ? ['require', 'exports', 'module'] : h;
						for (a = 0; a < h.length; a += 1)
							if ('require' === (f = (b = S(h[a], k)).f)) {
								d[a] = I.require(g);
							} else if ('exports' === f) {
								d[a] = I.exports(g);
								var m = !0;
							} else if ('module' === f) {
								var n = (d[a] = I.module(g));
							} else if (C.call(w, f) || C.call(F, f) || C.call(M, f)) {
								d[a] = L(f);
							} else {
								if (!b.p) {
									throw Error(g + ' missing ' + f);
								}
								b.p.load(b.n, U(c, !0), Z(f), {});
								d[a] = w[f];
							}
						h = e ? e.apply(w[g], d) : void 0;
						g &&
							(n && n.exports !== E && n.exports !== w[g]
								? (w[g] = n.exports)
								: (h === E && m) || (w[g] = h));
					} else g && (w[g] = e);
				}),
				(Q =
					R =
					H =
						(g, h, e, c, b) => {
							if ('string' == typeof g) {
								return I[g] ? I[g](h) : L(S(g, h ? O(h) : []).f);
							}
							if (!g.splice) {
								if (((B = g).deps && H(B.deps, B.callback), !h)) {
									return;
								}
								h.splice ? ((g = h), (h = e), (e = null)) : (g = E);
							}
							return (
								(h = h || (() => {})),
								'function' == typeof e && ((e = c), (c = b)),
								c
									? N(E, g, h, e)
									: setTimeout(() => {
											N(E, g, h, e);
									  }, 0),
								H
							);
						}),
				(H.config = (g) => H(g)),
				(Q._defined = w),
				((W = (g, h, e) => {
					if ('string' != typeof g) {
						throw Error('See almond README: incorrect module build, no module name');
					}
					h.splice || ((e = h), (h = []));
					C.call(w, g) || C.call(F, g) || (F[g] = [g, h, e]);
				}).amd = {jQuery: !0}),
				(q.requirejs = Q),
				(q.require = R),
				(q.define = W)),
			q.define('almond', () => {}),
			q.define('jquery', [], () => {
				const g = A || $;
				return (
					null == g &&
						console &&
						console.error &&
						console.error(
							'Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.'
						),
					g
				);
			}),
			q.define('select2/utils', ['jquery'], (g) => {
				function h(a) {
					a = a.prototype;
					const d = [];
					let f;
					for (f in a) 'function' == typeof a[f] && 'constructor' !== f && d.push(f);
					return d;
				}
				function e() {
					this.listeners = {};
				}
				const c = {
					Extend: (a, d) => {
						function f() {
							this.constructor = a;
						}
						const k = {}.hasOwnProperty;
						let m;
						for (m in d) k.call(d, m) && (a[m] = d[m]);
						return (f.prototype = d.prototype), (a.prototype = new f()), (a.__super__ = d.prototype), a;
					},
					Decorate: (a, d) => {
						function f(...args) {
							const y = Array.prototype.unshift;
							let z = a.prototype.constructor;
							0 < d.prototype.constructor.length &&
								(y.call(args, a.prototype.constructor), (z = d.prototype.constructor));
							z.apply(this, args);
						}
						function k(y) {
							let z = () => {};
							y in f.prototype && (z = f.prototype[y]);
							const T = d.prototype[y];
							return function (...args) {
								return Array.prototype.unshift.call(args, z), T.apply(this, args);
							};
						}
						const m = h(d);
						let n = h(a);
						d.displayName = a.displayName;
						f.prototype = new (function () {
							this.constructor = f;
						})();
						for (var p = 0; p < n.length; p++) {
							const t = n[p];
							f.prototype[t] = a.prototype[t];
						}
						for (n = 0; n < m.length; n++) (p = m[n]), (f.prototype[p] = k(p));
						return f;
					},
				};
				e.prototype.on = function (a, d) {
					this.listeners = this.listeners || {};
					a in this.listeners ? this.listeners[a].push(d) : (this.listeners[a] = [d]);
				};
				e.prototype.trigger = function (a) {
					const d = Array.prototype.slice;
					let f = d.call(arguments, 1);
					this.listeners = this.listeners || {};
					null == f && (f = []);
					0 === f.length && f.push({});
					(f[0]._type = a) in this.listeners && this.invoke(this.listeners[a], d.call(arguments, 1));
					'*' in this.listeners && this.invoke(this.listeners['*'], arguments);
				};
				e.prototype.invoke = function (a, d) {
					for (let f = 0, k = a.length; f < k; f++) a[f].apply(this, d);
				};
				c.Observable = e;
				c.generateChars = (a) => {
					for (var d = '', f = 0; f < a; f++) d += Math.floor(36 * Math.random()).toString(36);
					return d;
				};
				c.bind =
					(a, d) =>
					(...args) => {
						a.apply(d, args);
					};
				c._convertData = (a) => {
					for (const d in a) {
						const f = d.split('-');
						let k = a;
						if (1 !== f.length) {
							for (let m = 0; m < f.length; m++) {
								let n = f[m];
								(n = n.substring(0, 1).toLowerCase() + n.substring(1)) in k || (k[n] = {});
								m == f.length - 1 && (k[n] = a[d]);
								k = k[n];
							}
							delete a[d];
						}
					}
					return a;
				};
				c.hasScroll = (a, d) => {
					a = g(d);
					const f = d.style.overflowX;
					const k = d.style.overflowY;
					return (
						(f !== k || ('hidden' !== k && 'visible' !== k)) &&
						('scroll' === f ||
							'scroll' === k ||
							a.innerHeight() < d.scrollHeight ||
							a.innerWidth() < d.scrollWidth)
					);
				};
				c.escapeMarkup = (a) => {
					const d = {
						'\\': '&#92;',
						'&': '&amp;',
						'<': '&lt;',
						'>': '&gt;',
						'"': '&quot;',
						"'": '&#39;',
						'/': '&#47;',
					};
					return 'string' != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, (f) => d[f]);
				};
				c.appendMany = (a, d) => {
					if ('1.7' === g.fn.jquery.substr(0, 3)) {
						let f = g();
						g.map(d, (k) => {
							f = f.add(k);
						});
						d = f;
					}
					a.append(d);
				};
				c.__cache = {};
				let b = 0;
				return (
					(c.GetUniqueElementId = (a) => {
						let d = a.getAttribute('data-select2-id');
						return (
							null == d &&
								(a.id
									? ((d = a.id), a.setAttribute('data-select2-id', d))
									: (a.setAttribute('data-select2-id', ++b), (d = b.toString()))),
							d
						);
					}),
					(c.StoreData = (a, d, f) => {
						a = c.GetUniqueElementId(a);
						c.__cache[a] || (c.__cache[a] = {});
						c.__cache[a][d] = f;
					}),
					(c.GetData = (a, d) => {
						const f = c.GetUniqueElementId(a);
						return d
							? c.__cache[f] && null != c.__cache[f][d]
								? c.__cache[f][d]
								: g(a).data(d)
							: c.__cache[f];
					}),
					(c.RemoveData = (a) => {
						const d = c.GetUniqueElementId(a);
						null != c.__cache[d] && delete c.__cache[d];
						a.removeAttribute('data-select2-id');
					}),
					c
				);
			}),
			q.define('select2/results', ['jquery', './utils'], (g, h) => {
				function e(c, b, a) {
					this.$element = c;
					this.data = a;
					this.options = b;
					e.__super__.constructor.call(this);
				}
				return (
					h.Extend(e, h.Observable),
					(e.prototype.render = function () {
						const c = g('<ul class="select2-results__options" role="listbox"></ul>');
						return (
							this.options.get('multiple') && c.attr('aria-multiselectable', 'true'), (this.$results = c)
						);
					}),
					(e.prototype.clear = function () {
						this.$results.empty();
					}),
					(e.prototype.displayMessage = function (c) {
						const b = this.options.get('escapeMarkup');
						this.clear();
						this.hideLoading();
						const a = g('<li role="alert" aria-live="assertive" class="select2-results__option"></li>');
						const d = this.options.get('translations').get(c.message);
						a.append(b(d(c.args)));
						a[0].className += ' select2-results__message';
						this.$results.append(a);
					}),
					(e.prototype.hideMessages = function () {
						this.$results.find('.select2-results__message').remove();
					}),
					(e.prototype.append = function (c) {
						this.hideLoading();
						const b = [];
						if (null != c.results && 0 !== c.results.length) {
							c.results = this.sort(c.results);
							for (let a = 0; a < c.results.length; a++) {
								const d = this.option(c.results[a]);
								b.push(d);
							}
							this.$results.append(b);
						} else
							0 === this.$results.children().length &&
								this.trigger('results:message', {message: 'noResults'});
					}),
					(e.prototype.position = (c, b) => {
						b.find('.select2-results').append(c);
					}),
					(e.prototype.sort = function (c) {
						return this.options.get('sorter')(c);
					}),
					(e.prototype.highlightFirstItem = function () {
						const c = this.$results.find('.select2-results__option[aria-selected]');
						const b = c.filter('[aria-selected=true]');
						0 < b.length ? b.first().trigger('mouseenter') : c.first().trigger('mouseenter');
						this.ensureHighlightVisible();
					}),
					(e.prototype.setClasses = function () {
						const c = this;
						this.data.current((b) => {
							const a = g.map(b, (d) => d.id.toString());
							c.$results.find('.select2-results__option[aria-selected]').each(function () {
								const d = g(this);
								const f = h.GetData(this, 'data');
								const k = '' + f.id;
								(null != f.element && f.element.selected) || (null == f.element && -1 < g.inArray(k, a))
									? d.attr('aria-selected', 'true')
									: d.attr('aria-selected', 'false');
							});
						});
					}),
					(e.prototype.showLoading = function (c) {
						this.hideLoading();
						c = {disabled: !0, loading: !0, text: this.options.get('translations').get('searching')(c)};
						c = this.option(c);
						c.className += ' loading-results';
						this.$results.prepend(c);
					}),
					(e.prototype.hideLoading = function () {
						this.$results.find('.loading-results').remove();
					}),
					(e.prototype.option = function (c) {
						const b = document.createElement('li');
						b.className = 'select2-results__option';
						let a = {role: 'option', 'aria-selected': 'false'};
						let d =
							window.Element.prototype.matches ||
							window.Element.prototype.msMatchesSelector ||
							window.Element.prototype.webkitMatchesSelector;
						for (f in (((null != c.element && d.call(c.element, ':disabled')) ||
							(null == c.element && c.disabled)) &&
							(delete a['aria-selected'], (a['aria-disabled'] = 'true')),
						null == c.id && delete a['aria-selected'],
						null != c._resultId && (b.id = c._resultId),
						c.title && (b.title = c.title),
						c.children && ((a.role = 'group'), (a['aria-label'] = c.text), delete a['aria-selected']),
						a))
							b.setAttribute(f, a[f]);
						if (c.children) {
							a = g(b);
							d = document.createElement('strong');
							d.className = 'select2-results__group';
							g(d);
							this.template(c, d);
							var f = [];
							for (var k = 0; k < c.children.length; k++) {
								const m = this.option(c.children[k]);
								f.push(m);
							}
							k = g('<ul></ul>', {
								class: 'select2-results__options select2-results__options--nested',
							});
							k.append(f);
							a.append(d);
							a.append(k);
						} else this.template(c, b);
						return h.StoreData(b, 'data', c), b;
					}),
					(e.prototype.bind = function (c, b) {
						const a = this;
						this.$results.attr('id', c.id + '-results');
						c.on('results:all', (d) => {
							a.clear();
							a.append(d.data);
							c.isOpen() && (a.setClasses(), a.highlightFirstItem());
						});
						c.on('results:append', (d) => {
							a.append(d.data);
							c.isOpen() && a.setClasses();
						});
						c.on('query', (d) => {
							a.hideMessages();
							a.showLoading(d);
						});
						c.on('select', () => {
							c.isOpen() &&
								(a.setClasses(), a.options.get('scrollAfterSelect') && a.highlightFirstItem());
						});
						c.on('unselect', () => {
							c.isOpen() &&
								(a.setClasses(), a.options.get('scrollAfterSelect') && a.highlightFirstItem());
						});
						c.on('open', () => {
							a.$results.attr('aria-expanded', 'true');
							a.$results.attr('aria-hidden', 'false');
							a.setClasses();
							a.ensureHighlightVisible();
						});
						c.on('close', () => {
							a.$results.attr('aria-expanded', 'false');
							a.$results.attr('aria-hidden', 'true');
							a.$results.removeAttr('aria-activedescendant');
						});
						c.on('results:toggle', () => {
							const d = a.getHighlightedResults();
							0 !== d.length && d.trigger('mouseup');
						});
						c.on('results:select', () => {
							const d = a.getHighlightedResults();
							if (0 !== d.length) {
								const f = h.GetData(d[0], 'data');
								'true' == d.attr('aria-selected')
									? a.trigger('close', {})
									: a.trigger('select', {data: f});
							}
						});
						c.on('results:previous', () => {
							let d = a.getHighlightedResults();
							let f = a.$results.find('[aria-selected]');
							let k = f.index(d);
							if (!(0 >= k)) {
								--k;
								0 === d.length && (k = 0);
								f = f.eq(k);
								f.trigger('mouseenter');
								d = a.$results.offset().top;
								f = f.offset().top;
								const m = a.$results.scrollTop() + (f - d);
								0 === k ? a.$results.scrollTop(0) : 0 > f - d && a.$results.scrollTop(m);
							}
						});
						c.on('results:next', () => {
							let d = a.getHighlightedResults();
							let f = a.$results.find('[aria-selected]');
							d = f.index(d) + 1;
							if (!(d >= f.length)) {
								let k = f.eq(d);
								k.trigger('mouseenter');
								f = a.$results.offset().top + a.$results.outerHeight(!1);
								k = k.offset().top + k.outerHeight(!1);
								const m = a.$results.scrollTop() + k - f;
								0 === d ? a.$results.scrollTop(0) : f < k && a.$results.scrollTop(m);
							}
						});
						c.on('results:focus', (d) => {
							d.element.addClass('select2-results__option--highlighted');
						});
						c.on('results:message', (d) => {
							a.displayMessage(d);
						});
						g.fn.mousewheel &&
							this.$results.on('mousewheel', (d) => {
								let f = a.$results.scrollTop();
								let k = a.$results.get(0).scrollHeight - f + d.deltaY;
								f = 0 < d.deltaY && 0 >= f - d.deltaY;
								k = 0 > d.deltaY && k <= a.$results.height();
								f
									? (a.$results.scrollTop(0), d.preventDefault(), d.stopPropagation())
									: k &&
									  (a.$results.scrollTop(a.$results.get(0).scrollHeight - a.$results.height()),
									  d.preventDefault(),
									  d.stopPropagation());
							});
						this.$results.on('mouseup', '.select2-results__option[aria-selected]', function (d) {
							const f = g(this);
							const k = h.GetData(this, 'data');
							'true' !== f.attr('aria-selected')
								? a.trigger('select', {originalEvent: d, data: k})
								: a.options.get('multiple')
								? a.trigger('unselect', {originalEvent: d, data: k})
								: a.trigger('close', {});
						});
						this.$results.on('mouseenter', '.select2-results__option[aria-selected]', function (d) {
							d = h.GetData(this, 'data');
							a.getHighlightedResults().removeClass('select2-results__option--highlighted');
							a.trigger('results:focus', {data: d, element: g(this)});
						});
					}),
					(e.prototype.getHighlightedResults = function () {
						return this.$results.find('.select2-results__option--highlighted');
					}),
					(e.prototype.destroy = function () {
						this.$results.remove();
					}),
					(e.prototype.ensureHighlightVisible = function () {
						const c = this.getHighlightedResults();
						if (0 !== c.length) {
							const b = this.$results.find('[aria-selected]').index(c);
							let a = this.$results.offset().top;
							const d = c.offset().top;
							let f = this.$results.scrollTop() + (d - a);
							a = d - a;
							f -= 2 * c.outerHeight(!1);
							2 >= b
								? this.$results.scrollTop(0)
								: (a > this.$results.outerHeight() || 0 > a) && this.$results.scrollTop(f);
						}
					}),
					(e.prototype.template = function (c, b) {
						const a = this.options.get('templateResult');
						const d = this.options.get('escapeMarkup');
						c = a(c, b);
						null == c
							? (b.style.display = 'none')
							: 'string' == typeof c
							? (b.innerHTML = d(c))
							: g(b).append(c);
					}),
					e
				);
			}),
			q.define('select2/keys', [], () => ({
				BACKSPACE: 8,
				TAB: 9,
				ENTER: 13,
				SHIFT: 16,
				CTRL: 17,
				ALT: 18,
				ESC: 27,
				SPACE: 32,
				PAGE_UP: 33,
				PAGE_DOWN: 34,
				END: 35,
				HOME: 36,
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				DELETE: 46,
			})),
			q.define('select2/selection/base', ['jquery', '../utils', '../keys'], (g, h, e) => {
				function c(b, a) {
					this.$element = b;
					this.options = a;
					c.__super__.constructor.call(this);
				}
				return (
					h.Extend(c, h.Observable),
					(c.prototype.render = function () {
						const b = g(
							'<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
						);
						return (
							(this._tabindex = 0),
							null != h.GetData(this.$element[0], 'old-tabindex')
								? (this._tabindex = h.GetData(this.$element[0], 'old-tabindex'))
								: null != this.$element.attr('tabindex') &&
								  (this._tabindex = this.$element.attr('tabindex')),
							b.attr('title', this.$element.attr('title')),
							b.attr('tabindex', this._tabindex),
							b.attr('aria-disabled', 'false'),
							(this.$selection = b)
						);
					}),
					(c.prototype.bind = function (b, a) {
						const d = this;
						const f = b.id + '-results';
						this.container = b;
						this.$selection.on('focus', (k) => {
							d.trigger('focus', k);
						});
						this.$selection.on('blur', (k) => {
							d._handleBlur(k);
						});
						this.$selection.on('keydown', (k) => {
							d.trigger('keypress', k);
							k.which === e.SPACE && k.preventDefault();
						});
						b.on('results:focus', (k) => {
							d.$selection.attr('aria-activedescendant', k.data._resultId);
						});
						b.on('selection:update', (k) => {
							d.update(k.data);
						});
						b.on('open', () => {
							d.$selection.attr('aria-expanded', 'true');
							d.$selection.attr('aria-owns', f);
							d._attachCloseHandler(b);
						});
						b.on('close', () => {
							d.$selection.attr('aria-expanded', 'false');
							d.$selection.removeAttr('aria-activedescendant');
							d.$selection.removeAttr('aria-owns');
							d.$selection.trigger('focus');
							d._detachCloseHandler(b);
						});
						b.on('enable', () => {
							d.$selection.attr('tabindex', d._tabindex);
							d.$selection.attr('aria-disabled', 'false');
						});
						b.on('disable', () => {
							d.$selection.attr('tabindex', '-1');
							d.$selection.attr('aria-disabled', 'true');
						});
					}),
					(c.prototype._handleBlur = function (b) {
						const a = this;
						setTimeout(() => {
							document.activeElement == a.$selection[0] ||
								g.contains(a.$selection[0], document.activeElement) ||
								a.trigger('blur', b);
						}, 0);
					}),
					(c.prototype._attachCloseHandler = (b) => {
						g(document.body).on('mousedown.select2.' + b.id, (a) => {
							const d = g(a.target).closest('.select2');
							g('.select2.select2-container--open').each(function () {
								this != d[0] && h.GetData(this, 'element').select2('close');
							});
						});
					}),
					(c.prototype._detachCloseHandler = (b) => {
						g(document.body).off('mousedown.select2.' + b.id);
					}),
					(c.prototype.position = (b, a) => {
						a.find('.selection').append(b);
					}),
					(c.prototype.destroy = function () {
						this._detachCloseHandler(this.container);
					}),
					(c.prototype.update = (b) => {
						throw Error('The `update` method must be defined in child classes.');
					}),
					c
				);
			}),
			q.define('select2/selection/single', ['jquery', './base', '../utils', '../keys'], (g, h, e, c) => {
				function b(...args) {
					b.__super__.constructor.apply(this, args);
				}
				return (
					e.Extend(b, h),
					(b.prototype.render = function () {
						const a = b.__super__.render.call(this);
						return (
							a.addClass('select2-selection--single'),
							a.html(
								'<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
							),
							a
						);
					}),
					(b.prototype.bind = function (a, d) {
						const f = this;
						b.__super__.bind.apply(this, arguments);
						const k = a.id + '-container';
						this.$selection
							.find('.select2-selection__rendered')
							.attr('id', k)
							.attr('role', 'textbox')
							.attr('aria-readonly', 'true');
						this.$selection.attr('aria-labelledby', k);
						this.$selection.on('mousedown', (m) => {
							1 === m.which && f.trigger('toggle', {originalEvent: m});
						});
						this.$selection.on('focus', (m) => {});
						this.$selection.on('blur', (m) => {});
						a.on('focus', (m) => {
							a.isOpen() || f.$selection.trigger('focus');
						});
					}),
					(b.prototype.clear = function () {
						const a = this.$selection.find('.select2-selection__rendered');
						a.empty();
						a.removeAttr('title');
					}),
					(b.prototype.display = function (a, d) {
						const f = this.options.get('templateSelection');
						return this.options.get('escapeMarkup')(f(a, d));
					}),
					(b.prototype.selectionContainer = () => g('<span></span>')),
					(b.prototype.update = function (a) {
						if (0 !== a.length) {
							let d = a[0];
							a = this.$selection.find('.select2-selection__rendered');
							const f = this.display(d, a);
							a.empty().append(f);
							(d = d.title || d.text) ? a.attr('title', d) : a.removeAttr('title');
						} else this.clear();
					}),
					b
				);
			}),
			q.define('select2/selection/multiple', ['jquery', './base', '../utils'], (g, h, e) => {
				function c(b, a) {
					c.__super__.constructor.apply(this, arguments);
				}
				return (
					e.Extend(c, h),
					(c.prototype.render = function () {
						const b = c.__super__.render.call(this);
						return (
							b.addClass('select2-selection--multiple'),
							b.html('<ul class="select2-selection__rendered"></ul>'),
							b
						);
					}),
					(c.prototype.bind = function (b, a) {
						const d = this;
						c.__super__.bind.apply(this, arguments);
						this.$selection.on('click', (f) => {
							d.trigger('toggle', {originalEvent: f});
						});
						this.$selection.on('click', '.select2-selection__choice__remove', function (f) {
							if (!d.options.get('disabled')) {
								let k = g(this).parent();
								k = e.GetData(k[0], 'data');
								d.trigger('unselect', {originalEvent: f, data: k});
							}
						});
					}),
					(c.prototype.clear = function () {
						const b = this.$selection.find('.select2-selection__rendered');
						b.empty();
						b.removeAttr('title');
					}),
					(c.prototype.display = function (b, a) {
						const d = this.options.get('templateSelection');
						return this.options.get('escapeMarkup')(d(b, a));
					}),
					(c.prototype.selectionContainer = () =>
						g(
							'<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
						)),
					(c.prototype.update = function (b) {
						if ((this.clear(), 0 !== b.length)) {
							for (var a = [], d = 0; d < b.length; d++) {
								const f = b[d];
								const k = this.selectionContainer();
								let m = this.display(f, k);
								k.append(m);
								(m = f.title || f.text) && k.attr('title', m);
								e.StoreData(k[0], 'data', f);
								a.push(k);
							}
							b = this.$selection.find('.select2-selection__rendered');
							e.appendMany(b, a);
						}
					}),
					c
				);
			}),
			q.define('select2/selection/placeholder', ['../utils'], (g) => {
				function h(e, c, b) {
					this.placeholder = this.normalizePlaceholder(b.get('placeholder'));
					e.call(this, c, b);
				}
				return (
					(h.prototype.normalizePlaceholder = (e, c) => ('string' == typeof c && (c = {id: '', text: c}), c)),
					(h.prototype.createPlaceholder = function (e, c) {
						e = this.selectionContainer();
						return (
							e.html(this.display(c)),
							e.addClass('select2-selection__placeholder').removeClass('select2-selection__choice'),
							e
						);
					}),
					(h.prototype.update = function (e, c) {
						const b = 1 == c.length && c[0].id != this.placeholder.id;
						if (1 < c.length || b) {
							return e.call(this, c);
						}
						this.clear();
						e = this.createPlaceholder(this.placeholder);
						this.$selection.find('.select2-selection__rendered').append(e);
					}),
					h
				);
			}),
			q.define('select2/selection/allowClear', ['jquery', '../keys', '../utils'], (g, h, e) => {
				function c() {}
				return (
					(c.prototype.bind = function (b, a, d) {
						const f = this;
						b.call(this, a, d);
						null == this.placeholder &&
							this.options.get('debug') &&
							window.console &&
							console.error &&
							console.error(
								'Select2: The `allowClear` option should be used in combination with the `placeholder` option.'
							);
						this.$selection.on('mousedown', '.select2-selection__clear', (k) => {
							f._handleClear(k);
						});
						a.on('keypress', (k) => {
							f._handleKeyboardClear(k, a);
						});
					}),
					(c.prototype._handleClear = function (b, a) {
						if (
							!this.options.get('disabled') &&
							((b = this.$selection.find('.select2-selection__clear')), 0 !== b.length)
						) {
							a.stopPropagation();
							a = e.GetData(b[0], 'data');
							b = this.$element.val();
							this.$element.val(this.placeholder.id);
							let d = {data: a};
							if ((this.trigger('clear', d), d.prevented)) {
								this.$element.val(b);
							} else {
								for (let f = 0; f < a.length; f++)
									if (((d = {data: a[f]}), this.trigger('unselect', d), d.prevented))
										return void this.$element.val(b);
								this.$element.trigger('change');
								this.trigger('toggle', {});
							}
						}
					}),
					(c.prototype._handleKeyboardClear = function (b, a, d) {
						d.isOpen() || (a.which != h.DELETE && a.which != h.BACKSPACE) || this._handleClear(a);
					}),
					(c.prototype.update = function (b, a) {
						(b.call(this, a),
						0 < this.$selection.find('.select2-selection__placeholder').length || 0 === a.length) ||
							((b = this.options.get('translations').get('removeAllItems')),
							(b = g('<span class="select2-selection__clear" title="' + b() + '">&times;</span>')),
							e.StoreData(b[0], 'data', a),
							this.$selection.find('.select2-selection__rendered').prepend(b));
					}),
					c
				);
			}),
			q.define('select2/selection/search', ['jquery', '../utils', '../keys'], (g, h, e) => {
				function c(b, a, d) {
					b.call(this, a, d);
				}
				return (
					(c.prototype.render = function (b) {
						const a = g(
							'<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>'
						);
						this.$searchContainer = a;
						this.$search = a.find('input');
						b = b.call(this);
						return this._transferTabIndex(), b;
					}),
					(c.prototype.bind = function (b, a, d) {
						const f = this;
						const k = a.id + '-results';
						b.call(this, a, d);
						a.on('open', () => {
							f.$search.attr('aria-controls', k);
							f.$search.trigger('focus');
						});
						a.on('close', () => {
							f.$search.val('');
							f.$search.removeAttr('aria-controls');
							f.$search.removeAttr('aria-activedescendant');
							f.$search.trigger('focus');
						});
						a.on('enable', () => {
							f.$search.prop('disabled', !1);
							f._transferTabIndex();
						});
						a.on('disable', () => {
							f.$search.prop('disabled', !0);
						});
						a.on('focus', (n) => {
							f.$search.trigger('focus');
						});
						a.on('results:focus', (n) => {
							n.data._resultId
								? f.$search.attr('aria-activedescendant', n.data._resultId)
								: f.$search.removeAttr('aria-activedescendant');
						});
						this.$selection.on('focusin', '.select2-search--inline', (n) => {
							f.trigger('focus', n);
						});
						this.$selection.on('focusout', '.select2-search--inline', (n) => {
							f._handleBlur(n);
						});
						this.$selection.on('keydown', '.select2-search--inline', (n) => {
							if (
								(n.stopPropagation(),
								f.trigger('keypress', n),
								(f._keyUpPrevented = n.isDefaultPrevented()),
								n.which === e.BACKSPACE && '' === f.$search.val())
							) {
								let p = f.$searchContainer.prev('.select2-selection__choice');
								0 < p.length &&
									((p = h.GetData(p[0], 'data')), f.searchRemoveChoice(p), n.preventDefault());
							}
						});
						this.$selection.on('click', '.select2-search--inline', (n) => {
							f.$search.val() && n.stopPropagation();
						});
						const m = (b = document.documentMode) && 11 >= b;
						this.$selection.on('input.searchcheck', '.select2-search--inline', (n) => {
							m ? f.$selection.off('input.search input.searchcheck') : f.$selection.off('keyup.search');
						});
						this.$selection.on('keyup.search input.search', '.select2-search--inline', (n) => {
							if (m && 'input' === n.type) {
								f.$selection.off('input.search input.searchcheck');
							} else {
								const p = n.which;
								p != e.SHIFT && p != e.CTRL && p != e.ALT && p != e.TAB && f.handleSearch(n);
							}
						});
					}),
					(c.prototype._transferTabIndex = function (b) {
						this.$search.attr('tabindex', this.$selection.attr('tabindex'));
						this.$selection.attr('tabindex', '-1');
					}),
					(c.prototype.createPlaceholder = function (b, a) {
						this.$search.attr('placeholder', a.text);
					}),
					(c.prototype.update = function (b, a) {
						const d = this.$search[0] == document.activeElement;
						this.$search.attr('placeholder', '');
						b.call(this, a);
						this.$selection.find('.select2-selection__rendered').append(this.$searchContainer);
						this.resizeSearch();
						d && this.$search.trigger('focus');
					}),
					(c.prototype.handleSearch = function () {
						if ((this.resizeSearch(), !this._keyUpPrevented)) {
							const b = this.$search.val();
							this.trigger('query', {term: b});
						}
						this._keyUpPrevented = !1;
					}),
					(c.prototype.searchRemoveChoice = function (b, a) {
						this.trigger('unselect', {data: a});
						this.$search.val(a.text);
						this.handleSearch();
					}),
					(c.prototype.resizeSearch = function () {
						this.$search.css('width', '25px');
						let b = '';
						'' !== this.$search.attr('placeholder')
							? (b = this.$selection.find('.select2-selection__rendered').width())
							: (b = 0.75 * (this.$search.val().length + 1) + 'em');
						this.$search.css('width', b);
					}),
					c
				);
			}),
			q.define('select2/selection/eventRelay', ['jquery'], (g) => {
				function h() {}
				return (
					(h.prototype.bind = function (e, c, b) {
						const a = this;
						const d =
							'open opening close closing select selecting unselect unselecting clear clearing'.split(
								' '
							);
						const f = ['opening', 'closing', 'selecting', 'unselecting', 'clearing'];
						e.call(this, c, b);
						c.on('*', (k, m) => {
							if (-1 !== g.inArray(k, d)) {
								m = m || {};
								const n = g.Event('select2:' + k, {params: m});
								a.$element.trigger(n);
								-1 !== g.inArray(k, f) && (m.prevented = n.isDefaultPrevented());
							}
						});
					}),
					h
				);
			}),
			q.define('select2/translation', ['jquery', 'require'], (g, h) => {
				function e(c) {
					this.dict = c || {};
				}
				return (
					(e.prototype.all = function () {
						return this.dict;
					}),
					(e.prototype.get = function (c) {
						return this.dict[c];
					}),
					(e.prototype.extend = function (c) {
						this.dict = g.extend({}, c.all(), this.dict);
					}),
					(e._cache = {}),
					(e.loadPath = (c) => {
						if (!(c in e._cache)) {
							const b = h(c);
							e._cache[c] = b;
						}
						return new e(e._cache[c]);
					}),
					e
				);
			}),
			q.define('select2/diacritics', [], () => ({
				'\u24b6': 'A',
				'\uff21': 'A',
				'\u00c0': 'A',
				'\u00c1': 'A',
				'\u00c2': 'A',
				'\u1ea6': 'A',
				'\u1ea4': 'A',
				'\u1eaa': 'A',
				'\u1ea8': 'A',
				'\u00c3': 'A',
				'\u0100': 'A',
				'\u0102': 'A',
				'\u1eb0': 'A',
				'\u1eae': 'A',
				'\u1eb4': 'A',
				'\u1eb2': 'A',
				'\u0226': 'A',
				'\u01e0': 'A',
				'\u00c4': 'A',
				'\u01de': 'A',
				'\u1ea2': 'A',
				'\u00c5': 'A',
				'\u01fa': 'A',
				'\u01cd': 'A',
				'\u0200': 'A',
				'\u0202': 'A',
				'\u1ea0': 'A',
				'\u1eac': 'A',
				'\u1eb6': 'A',
				'\u1e00': 'A',
				'\u0104': 'A',
				'\u023a': 'A',
				'\u2c6f': 'A',
				'\ua732': 'AA',
				'\u00c6': 'AE',
				'\u01fc': 'AE',
				'\u01e2': 'AE',
				'\ua734': 'AO',
				'\ua736': 'AU',
				'\ua738': 'AV',
				'\ua73a': 'AV',
				'\ua73c': 'AY',
				'\u24b7': 'B',
				'\uff22': 'B',
				'\u1e02': 'B',
				'\u1e04': 'B',
				'\u1e06': 'B',
				'\u0243': 'B',
				'\u0182': 'B',
				'\u0181': 'B',
				'\u24b8': 'C',
				'\uff23': 'C',
				'\u0106': 'C',
				'\u0108': 'C',
				'\u010a': 'C',
				'\u010c': 'C',
				'\u00c7': 'C',
				'\u1e08': 'C',
				'\u0187': 'C',
				'\u023b': 'C',
				'\ua73e': 'C',
				'\u24b9': 'D',
				'\uff24': 'D',
				'\u1e0a': 'D',
				'\u010e': 'D',
				'\u1e0c': 'D',
				'\u1e10': 'D',
				'\u1e12': 'D',
				'\u1e0e': 'D',
				'\u0110': 'D',
				'\u018b': 'D',
				'\u018a': 'D',
				'\u0189': 'D',
				'\ua779': 'D',
				'\u01f1': 'DZ',
				'\u01c4': 'DZ',
				'\u01f2': 'Dz',
				'\u01c5': 'Dz',
				'\u24ba': 'E',
				'\uff25': 'E',
				'\u00c8': 'E',
				'\u00c9': 'E',
				'\u00ca': 'E',
				'\u1ec0': 'E',
				'\u1ebe': 'E',
				'\u1ec4': 'E',
				'\u1ec2': 'E',
				'\u1ebc': 'E',
				'\u0112': 'E',
				'\u1e14': 'E',
				'\u1e16': 'E',
				'\u0114': 'E',
				'\u0116': 'E',
				'\u00cb': 'E',
				'\u1eba': 'E',
				'\u011a': 'E',
				'\u0204': 'E',
				'\u0206': 'E',
				'\u1eb8': 'E',
				'\u1ec6': 'E',
				'\u0228': 'E',
				'\u1e1c': 'E',
				'\u0118': 'E',
				'\u1e18': 'E',
				'\u1e1a': 'E',
				'\u0190': 'E',
				'\u018e': 'E',
				'\u24bb': 'F',
				'\uff26': 'F',
				'\u1e1e': 'F',
				'\u0191': 'F',
				'\ua77b': 'F',
				'\u24bc': 'G',
				'\uff27': 'G',
				'\u01f4': 'G',
				'\u011c': 'G',
				'\u1e20': 'G',
				'\u011e': 'G',
				'\u0120': 'G',
				'\u01e6': 'G',
				'\u0122': 'G',
				'\u01e4': 'G',
				'\u0193': 'G',
				'\ua7a0': 'G',
				'\ua77d': 'G',
				'\ua77e': 'G',
				'\u24bd': 'H',
				'\uff28': 'H',
				'\u0124': 'H',
				'\u1e22': 'H',
				'\u1e26': 'H',
				'\u021e': 'H',
				'\u1e24': 'H',
				'\u1e28': 'H',
				'\u1e2a': 'H',
				'\u0126': 'H',
				'\u2c67': 'H',
				'\u2c75': 'H',
				'\ua78d': 'H',
				'\u24be': 'I',
				'\uff29': 'I',
				'\u00cc': 'I',
				'\u00cd': 'I',
				'\u00ce': 'I',
				'\u0128': 'I',
				'\u012a': 'I',
				'\u012c': 'I',
				'\u0130': 'I',
				'\u00cf': 'I',
				'\u1e2e': 'I',
				'\u1ec8': 'I',
				'\u01cf': 'I',
				'\u0208': 'I',
				'\u020a': 'I',
				'\u1eca': 'I',
				'\u012e': 'I',
				'\u1e2c': 'I',
				'\u0197': 'I',
				'\u24bf': 'J',
				'\uff2a': 'J',
				'\u0134': 'J',
				'\u0248': 'J',
				'\u24c0': 'K',
				'\uff2b': 'K',
				'\u1e30': 'K',
				'\u01e8': 'K',
				'\u1e32': 'K',
				'\u0136': 'K',
				'\u1e34': 'K',
				'\u0198': 'K',
				'\u2c69': 'K',
				'\ua740': 'K',
				'\ua742': 'K',
				'\ua744': 'K',
				'\ua7a2': 'K',
				'\u24c1': 'L',
				'\uff2c': 'L',
				'\u013f': 'L',
				'\u0139': 'L',
				'\u013d': 'L',
				'\u1e36': 'L',
				'\u1e38': 'L',
				'\u013b': 'L',
				'\u1e3c': 'L',
				'\u1e3a': 'L',
				'\u0141': 'L',
				'\u023d': 'L',
				'\u2c62': 'L',
				'\u2c60': 'L',
				'\ua748': 'L',
				'\ua746': 'L',
				'\ua780': 'L',
				'\u01c7': 'LJ',
				'\u01c8': 'Lj',
				'\u24c2': 'M',
				'\uff2d': 'M',
				'\u1e3e': 'M',
				'\u1e40': 'M',
				'\u1e42': 'M',
				'\u2c6e': 'M',
				'\u019c': 'M',
				'\u24c3': 'N',
				'\uff2e': 'N',
				'\u01f8': 'N',
				'\u0143': 'N',
				'\u00d1': 'N',
				'\u1e44': 'N',
				'\u0147': 'N',
				'\u1e46': 'N',
				'\u0145': 'N',
				'\u1e4a': 'N',
				'\u1e48': 'N',
				'\u0220': 'N',
				'\u019d': 'N',
				'\ua790': 'N',
				'\ua7a4': 'N',
				'\u01ca': 'NJ',
				'\u01cb': 'Nj',
				'\u24c4': 'O',
				'\uff2f': 'O',
				'\u00d2': 'O',
				'\u00d3': 'O',
				'\u00d4': 'O',
				'\u1ed2': 'O',
				'\u1ed0': 'O',
				'\u1ed6': 'O',
				'\u1ed4': 'O',
				'\u00d5': 'O',
				'\u1e4c': 'O',
				'\u022c': 'O',
				'\u1e4e': 'O',
				'\u014c': 'O',
				'\u1e50': 'O',
				'\u1e52': 'O',
				'\u014e': 'O',
				'\u022e': 'O',
				'\u0230': 'O',
				'\u00d6': 'O',
				'\u022a': 'O',
				'\u1ece': 'O',
				'\u0150': 'O',
				'\u01d1': 'O',
				'\u020c': 'O',
				'\u020e': 'O',
				'\u01a0': 'O',
				'\u1edc': 'O',
				'\u1eda': 'O',
				'\u1ee0': 'O',
				'\u1ede': 'O',
				'\u1ee2': 'O',
				'\u1ecc': 'O',
				'\u1ed8': 'O',
				'\u01ea': 'O',
				'\u01ec': 'O',
				'\u00d8': 'O',
				'\u01fe': 'O',
				'\u0186': 'O',
				'\u019f': 'O',
				'\ua74a': 'O',
				'\ua74c': 'O',
				'\u0152': 'OE',
				'\u01a2': 'OI',
				'\ua74e': 'OO',
				'\u0222': 'OU',
				'\u24c5': 'P',
				'\uff30': 'P',
				'\u1e54': 'P',
				'\u1e56': 'P',
				'\u01a4': 'P',
				'\u2c63': 'P',
				'\ua750': 'P',
				'\ua752': 'P',
				'\ua754': 'P',
				'\u24c6': 'Q',
				'\uff31': 'Q',
				'\ua756': 'Q',
				'\ua758': 'Q',
				'\u024a': 'Q',
				'\u24c7': 'R',
				'\uff32': 'R',
				'\u0154': 'R',
				'\u1e58': 'R',
				'\u0158': 'R',
				'\u0210': 'R',
				'\u0212': 'R',
				'\u1e5a': 'R',
				'\u1e5c': 'R',
				'\u0156': 'R',
				'\u1e5e': 'R',
				'\u024c': 'R',
				'\u2c64': 'R',
				'\ua75a': 'R',
				'\ua7a6': 'R',
				'\ua782': 'R',
				'\u24c8': 'S',
				'\uff33': 'S',
				'\u1e9e': 'S',
				'\u015a': 'S',
				'\u1e64': 'S',
				'\u015c': 'S',
				'\u1e60': 'S',
				'\u0160': 'S',
				'\u1e66': 'S',
				'\u1e62': 'S',
				'\u1e68': 'S',
				'\u0218': 'S',
				'\u015e': 'S',
				'\u2c7e': 'S',
				'\ua7a8': 'S',
				'\ua784': 'S',
				'\u24c9': 'T',
				'\uff34': 'T',
				'\u1e6a': 'T',
				'\u0164': 'T',
				'\u1e6c': 'T',
				'\u021a': 'T',
				'\u0162': 'T',
				'\u1e70': 'T',
				'\u1e6e': 'T',
				'\u0166': 'T',
				'\u01ac': 'T',
				'\u01ae': 'T',
				'\u023e': 'T',
				'\ua786': 'T',
				'\ua728': 'TZ',
				'\u24ca': 'U',
				'\uff35': 'U',
				'\u00d9': 'U',
				'\u00da': 'U',
				'\u00db': 'U',
				'\u0168': 'U',
				'\u1e78': 'U',
				'\u016a': 'U',
				'\u1e7a': 'U',
				'\u016c': 'U',
				'\u00dc': 'U',
				'\u01db': 'U',
				'\u01d7': 'U',
				'\u01d5': 'U',
				'\u01d9': 'U',
				'\u1ee6': 'U',
				'\u016e': 'U',
				'\u0170': 'U',
				'\u01d3': 'U',
				'\u0214': 'U',
				'\u0216': 'U',
				'\u01af': 'U',
				'\u1eea': 'U',
				'\u1ee8': 'U',
				'\u1eee': 'U',
				'\u1eec': 'U',
				'\u1ef0': 'U',
				'\u1ee4': 'U',
				'\u1e72': 'U',
				'\u0172': 'U',
				'\u1e76': 'U',
				'\u1e74': 'U',
				'\u0244': 'U',
				'\u24cb': 'V',
				'\uff36': 'V',
				'\u1e7c': 'V',
				'\u1e7e': 'V',
				'\u01b2': 'V',
				'\ua75e': 'V',
				'\u0245': 'V',
				'\ua760': 'VY',
				'\u24cc': 'W',
				'\uff37': 'W',
				'\u1e80': 'W',
				'\u1e82': 'W',
				'\u0174': 'W',
				'\u1e86': 'W',
				'\u1e84': 'W',
				'\u1e88': 'W',
				'\u2c72': 'W',
				'\u24cd': 'X',
				'\uff38': 'X',
				'\u1e8a': 'X',
				'\u1e8c': 'X',
				'\u24ce': 'Y',
				'\uff39': 'Y',
				'\u1ef2': 'Y',
				'\u00dd': 'Y',
				'\u0176': 'Y',
				'\u1ef8': 'Y',
				'\u0232': 'Y',
				'\u1e8e': 'Y',
				'\u0178': 'Y',
				'\u1ef6': 'Y',
				'\u1ef4': 'Y',
				'\u01b3': 'Y',
				'\u024e': 'Y',
				'\u1efe': 'Y',
				'\u24cf': 'Z',
				'\uff3a': 'Z',
				'\u0179': 'Z',
				'\u1e90': 'Z',
				'\u017b': 'Z',
				'\u017d': 'Z',
				'\u1e92': 'Z',
				'\u1e94': 'Z',
				'\u01b5': 'Z',
				'\u0224': 'Z',
				'\u2c7f': 'Z',
				'\u2c6b': 'Z',
				'\ua762': 'Z',
				'\u24d0': 'a',
				'\uff41': 'a',
				'\u1e9a': 'a',
				'\u00e0': 'a',
				'\u00e1': 'a',
				'\u00e2': 'a',
				'\u1ea7': 'a',
				'\u1ea5': 'a',
				'\u1eab': 'a',
				'\u1ea9': 'a',
				'\u00e3': 'a',
				'\u0101': 'a',
				'\u0103': 'a',
				'\u1eb1': 'a',
				'\u1eaf': 'a',
				'\u1eb5': 'a',
				'\u1eb3': 'a',
				'\u0227': 'a',
				'\u01e1': 'a',
				'\u00e4': 'a',
				'\u01df': 'a',
				'\u1ea3': 'a',
				'\u00e5': 'a',
				'\u01fb': 'a',
				'\u01ce': 'a',
				'\u0201': 'a',
				'\u0203': 'a',
				'\u1ea1': 'a',
				'\u1ead': 'a',
				'\u1eb7': 'a',
				'\u1e01': 'a',
				'\u0105': 'a',
				'\u2c65': 'a',
				'\u0250': 'a',
				'\ua733': 'aa',
				'\u00e6': 'ae',
				'\u01fd': 'ae',
				'\u01e3': 'ae',
				'\ua735': 'ao',
				'\ua737': 'au',
				'\ua739': 'av',
				'\ua73b': 'av',
				'\ua73d': 'ay',
				'\u24d1': 'b',
				'\uff42': 'b',
				'\u1e03': 'b',
				'\u1e05': 'b',
				'\u1e07': 'b',
				'\u0180': 'b',
				'\u0183': 'b',
				'\u0253': 'b',
				'\u24d2': 'c',
				'\uff43': 'c',
				'\u0107': 'c',
				'\u0109': 'c',
				'\u010b': 'c',
				'\u010d': 'c',
				'\u00e7': 'c',
				'\u1e09': 'c',
				'\u0188': 'c',
				'\u023c': 'c',
				'\ua73f': 'c',
				'\u2184': 'c',
				'\u24d3': 'd',
				'\uff44': 'd',
				'\u1e0b': 'd',
				'\u010f': 'd',
				'\u1e0d': 'd',
				'\u1e11': 'd',
				'\u1e13': 'd',
				'\u1e0f': 'd',
				'\u0111': 'd',
				'\u018c': 'd',
				'\u0256': 'd',
				'\u0257': 'd',
				'\ua77a': 'd',
				'\u01f3': 'dz',
				'\u01c6': 'dz',
				'\u24d4': 'e',
				'\uff45': 'e',
				'\u00e8': 'e',
				'\u00e9': 'e',
				'\u00ea': 'e',
				'\u1ec1': 'e',
				'\u1ebf': 'e',
				'\u1ec5': 'e',
				'\u1ec3': 'e',
				'\u1ebd': 'e',
				'\u0113': 'e',
				'\u1e15': 'e',
				'\u1e17': 'e',
				'\u0115': 'e',
				'\u0117': 'e',
				'\u00eb': 'e',
				'\u1ebb': 'e',
				'\u011b': 'e',
				'\u0205': 'e',
				'\u0207': 'e',
				'\u1eb9': 'e',
				'\u1ec7': 'e',
				'\u0229': 'e',
				'\u1e1d': 'e',
				'\u0119': 'e',
				'\u1e19': 'e',
				'\u1e1b': 'e',
				'\u0247': 'e',
				'\u025b': 'e',
				'\u01dd': 'e',
				'\u24d5': 'f',
				'\uff46': 'f',
				'\u1e1f': 'f',
				'\u0192': 'f',
				'\ua77c': 'f',
				'\u24d6': 'g',
				'\uff47': 'g',
				'\u01f5': 'g',
				'\u011d': 'g',
				'\u1e21': 'g',
				'\u011f': 'g',
				'\u0121': 'g',
				'\u01e7': 'g',
				'\u0123': 'g',
				'\u01e5': 'g',
				'\u0260': 'g',
				'\ua7a1': 'g',
				'\u1d79': 'g',
				'\ua77f': 'g',
				'\u24d7': 'h',
				'\uff48': 'h',
				'\u0125': 'h',
				'\u1e23': 'h',
				'\u1e27': 'h',
				'\u021f': 'h',
				'\u1e25': 'h',
				'\u1e29': 'h',
				'\u1e2b': 'h',
				'\u1e96': 'h',
				'\u0127': 'h',
				'\u2c68': 'h',
				'\u2c76': 'h',
				'\u0265': 'h',
				'\u0195': 'hv',
				'\u24d8': 'i',
				'\uff49': 'i',
				'\u00ec': 'i',
				'\u00ed': 'i',
				'\u00ee': 'i',
				'\u0129': 'i',
				'\u012b': 'i',
				'\u012d': 'i',
				'\u00ef': 'i',
				'\u1e2f': 'i',
				'\u1ec9': 'i',
				'\u01d0': 'i',
				'\u0209': 'i',
				'\u020b': 'i',
				'\u1ecb': 'i',
				'\u012f': 'i',
				'\u1e2d': 'i',
				'\u0268': 'i',
				'\u0131': 'i',
				'\u24d9': 'j',
				'\uff4a': 'j',
				'\u0135': 'j',
				'\u01f0': 'j',
				'\u0249': 'j',
				'\u24da': 'k',
				'\uff4b': 'k',
				'\u1e31': 'k',
				'\u01e9': 'k',
				'\u1e33': 'k',
				'\u0137': 'k',
				'\u1e35': 'k',
				'\u0199': 'k',
				'\u2c6a': 'k',
				'\ua741': 'k',
				'\ua743': 'k',
				'\ua745': 'k',
				'\ua7a3': 'k',
				'\u24db': 'l',
				'\uff4c': 'l',
				'\u0140': 'l',
				'\u013a': 'l',
				'\u013e': 'l',
				'\u1e37': 'l',
				'\u1e39': 'l',
				'\u013c': 'l',
				'\u1e3d': 'l',
				'\u1e3b': 'l',
				'\u017f': 'l',
				'\u0142': 'l',
				'\u019a': 'l',
				'\u026b': 'l',
				'\u2c61': 'l',
				'\ua749': 'l',
				'\ua781': 'l',
				'\ua747': 'l',
				'\u01c9': 'lj',
				'\u24dc': 'm',
				'\uff4d': 'm',
				'\u1e3f': 'm',
				'\u1e41': 'm',
				'\u1e43': 'm',
				'\u0271': 'm',
				'\u026f': 'm',
				'\u24dd': 'n',
				'\uff4e': 'n',
				'\u01f9': 'n',
				'\u0144': 'n',
				'\u00f1': 'n',
				'\u1e45': 'n',
				'\u0148': 'n',
				'\u1e47': 'n',
				'\u0146': 'n',
				'\u1e4b': 'n',
				'\u1e49': 'n',
				'\u019e': 'n',
				'\u0272': 'n',
				'\u0149': 'n',
				'\ua791': 'n',
				'\ua7a5': 'n',
				'\u01cc': 'nj',
				'\u24de': 'o',
				'\uff4f': 'o',
				'\u00f2': 'o',
				'\u00f3': 'o',
				'\u00f4': 'o',
				'\u1ed3': 'o',
				'\u1ed1': 'o',
				'\u1ed7': 'o',
				'\u1ed5': 'o',
				'\u00f5': 'o',
				'\u1e4d': 'o',
				'\u022d': 'o',
				'\u1e4f': 'o',
				'\u014d': 'o',
				'\u1e51': 'o',
				'\u1e53': 'o',
				'\u014f': 'o',
				'\u022f': 'o',
				'\u0231': 'o',
				'\u00f6': 'o',
				'\u022b': 'o',
				'\u1ecf': 'o',
				'\u0151': 'o',
				'\u01d2': 'o',
				'\u020d': 'o',
				'\u020f': 'o',
				'\u01a1': 'o',
				'\u1edd': 'o',
				'\u1edb': 'o',
				'\u1ee1': 'o',
				'\u1edf': 'o',
				'\u1ee3': 'o',
				'\u1ecd': 'o',
				'\u1ed9': 'o',
				'\u01eb': 'o',
				'\u01ed': 'o',
				'\u00f8': 'o',
				'\u01ff': 'o',
				'\u0254': 'o',
				'\ua74b': 'o',
				'\ua74d': 'o',
				'\u0275': 'o',
				'\u0153': 'oe',
				'\u01a3': 'oi',
				'\u0223': 'ou',
				'\ua74f': 'oo',
				'\u24df': 'p',
				'\uff50': 'p',
				'\u1e55': 'p',
				'\u1e57': 'p',
				'\u01a5': 'p',
				'\u1d7d': 'p',
				'\ua751': 'p',
				'\ua753': 'p',
				'\ua755': 'p',
				'\u24e0': 'q',
				'\uff51': 'q',
				'\u024b': 'q',
				'\ua757': 'q',
				'\ua759': 'q',
				'\u24e1': 'r',
				'\uff52': 'r',
				'\u0155': 'r',
				'\u1e59': 'r',
				'\u0159': 'r',
				'\u0211': 'r',
				'\u0213': 'r',
				'\u1e5b': 'r',
				'\u1e5d': 'r',
				'\u0157': 'r',
				'\u1e5f': 'r',
				'\u024d': 'r',
				'\u027d': 'r',
				'\ua75b': 'r',
				'\ua7a7': 'r',
				'\ua783': 'r',
				'\u24e2': 's',
				'\uff53': 's',
				'\u00df': 's',
				'\u015b': 's',
				'\u1e65': 's',
				'\u015d': 's',
				'\u1e61': 's',
				'\u0161': 's',
				'\u1e67': 's',
				'\u1e63': 's',
				'\u1e69': 's',
				'\u0219': 's',
				'\u015f': 's',
				'\u023f': 's',
				'\ua7a9': 's',
				'\ua785': 's',
				'\u1e9b': 's',
				'\u24e3': 't',
				'\uff54': 't',
				'\u1e6b': 't',
				'\u1e97': 't',
				'\u0165': 't',
				'\u1e6d': 't',
				'\u021b': 't',
				'\u0163': 't',
				'\u1e71': 't',
				'\u1e6f': 't',
				'\u0167': 't',
				'\u01ad': 't',
				'\u0288': 't',
				'\u2c66': 't',
				'\ua787': 't',
				'\ua729': 'tz',
				'\u24e4': 'u',
				'\uff55': 'u',
				'\u00f9': 'u',
				'\u00fa': 'u',
				'\u00fb': 'u',
				'\u0169': 'u',
				'\u1e79': 'u',
				'\u016b': 'u',
				'\u1e7b': 'u',
				'\u016d': 'u',
				'\u00fc': 'u',
				'\u01dc': 'u',
				'\u01d8': 'u',
				'\u01d6': 'u',
				'\u01da': 'u',
				'\u1ee7': 'u',
				'\u016f': 'u',
				'\u0171': 'u',
				'\u01d4': 'u',
				'\u0215': 'u',
				'\u0217': 'u',
				'\u01b0': 'u',
				'\u1eeb': 'u',
				'\u1ee9': 'u',
				'\u1eef': 'u',
				'\u1eed': 'u',
				'\u1ef1': 'u',
				'\u1ee5': 'u',
				'\u1e73': 'u',
				'\u0173': 'u',
				'\u1e77': 'u',
				'\u1e75': 'u',
				'\u0289': 'u',
				'\u24e5': 'v',
				'\uff56': 'v',
				'\u1e7d': 'v',
				'\u1e7f': 'v',
				'\u028b': 'v',
				'\ua75f': 'v',
				'\u028c': 'v',
				'\ua761': 'vy',
				'\u24e6': 'w',
				'\uff57': 'w',
				'\u1e81': 'w',
				'\u1e83': 'w',
				'\u0175': 'w',
				'\u1e87': 'w',
				'\u1e85': 'w',
				'\u1e98': 'w',
				'\u1e89': 'w',
				'\u2c73': 'w',
				'\u24e7': 'x',
				'\uff58': 'x',
				'\u1e8b': 'x',
				'\u1e8d': 'x',
				'\u24e8': 'y',
				'\uff59': 'y',
				'\u1ef3': 'y',
				'\u00fd': 'y',
				'\u0177': 'y',
				'\u1ef9': 'y',
				'\u0233': 'y',
				'\u1e8f': 'y',
				'\u00ff': 'y',
				'\u1ef7': 'y',
				'\u1e99': 'y',
				'\u1ef5': 'y',
				'\u01b4': 'y',
				'\u024f': 'y',
				'\u1eff': 'y',
				'\u24e9': 'z',
				'\uff5a': 'z',
				'\u017a': 'z',
				'\u1e91': 'z',
				'\u017c': 'z',
				'\u017e': 'z',
				'\u1e93': 'z',
				'\u1e95': 'z',
				'\u01b6': 'z',
				'\u0225': 'z',
				'\u0240': 'z',
				'\u2c6c': 'z',
				'\ua763': 'z',
				'\u0386': '\u0391',
				'\u0388': '\u0395',
				'\u0389': '\u0397',
				'\u038a': '\u0399',
				'\u03aa': '\u0399',
				'\u038c': '\u039f',
				'\u038e': '\u03a5',
				'\u03ab': '\u03a5',
				'\u038f': '\u03a9',
				'\u03ac': '\u03b1',
				'\u03ad': '\u03b5',
				'\u03ae': '\u03b7',
				'\u03af': '\u03b9',
				'\u03ca': '\u03b9',
				'\u0390': '\u03b9',
				'\u03cc': '\u03bf',
				'\u03cd': '\u03c5',
				'\u03cb': '\u03c5',
				'\u03b0': '\u03c5',
				'\u03ce': '\u03c9',
				'\u03c2': '\u03c3',
				'\u2019': "'",
			})),
			q.define('select2/data/base', ['../utils'], (g) => {
				function h(e, c) {
					h.__super__.constructor.call(this);
				}
				return (
					g.Extend(h, g.Observable),
					(h.prototype.current = (e) => {
						throw Error('The `current` method must be defined in child classes.');
					}),
					(h.prototype.query = (e, c) => {
						throw Error('The `query` method must be defined in child classes.');
					}),
					(h.prototype.bind = (e, c) => {}),
					(h.prototype.destroy = () => {}),
					(h.prototype.generateResultId = (e, c) => {
						e = e.id + '-result-';
						return (
							(e += g.generateChars(4)),
							null != c.id ? (e += '-' + c.id.toString()) : (e += '-' + g.generateChars(4)),
							e
						);
					}),
					h
				);
			}),
			q.define('select2/data/select', ['./base', '../utils', 'jquery'], (g, h, e) => {
				function c(b, a) {
					this.$element = b;
					this.options = a;
					c.__super__.constructor.call(this);
				}
				return (
					h.Extend(c, g),
					(c.prototype.current = function (b) {
						const a = [];
						const d = this;
						this.$element.find(':selected').each(function () {
							let f = e(this);
							f = d.item(f);
							a.push(f);
						});
						b(a);
					}),
					(c.prototype.select = function (b) {
						const a = this;
						if (((b.selected = !0), e(b.element).is('option')))
							return (b.element.selected = !0), void this.$element.trigger('change');
						this.$element.prop('multiple')
							? this.current((d) => {
									const f = [];
									(b = [b]).push.apply(b, d);
									for (d = 0; d < b.length; d++) {
										const k = b[d].id;
										-1 === e.inArray(k, f) && f.push(k);
									}
									a.$element.val(f);
									a.$element.trigger('change');
							  })
							: (this.$element.val(b.id), this.$element.trigger('change'));
					}),
					(c.prototype.unselect = function (b) {
						const a = this;
						if (this.$element.prop('multiple')) {
							if (((b.selected = !1), e(b.element).is('option')))
								return (b.element.selected = !1), void this.$element.trigger('change');
							this.current((d) => {
								for (var f = [], k = 0; k < d.length; k++) {
									const m = d[k].id;
									m !== b.id && -1 === e.inArray(m, f) && f.push(m);
								}
								a.$element.val(f);
								a.$element.trigger('change');
							});
						}
					}),
					(c.prototype.bind = function (b, a) {
						const d = this;
						(this.container = b).on('select', (f) => {
							d.select(f.data);
						});
						b.on('unselect', (f) => {
							d.unselect(f.data);
						});
					}),
					(c.prototype.destroy = function () {
						this.$element.find('*').each(function () {
							h.RemoveData(this);
						});
					}),
					(c.prototype.query = function (b, a) {
						const d = [];
						const f = this;
						this.$element.children().each(function () {
							let k = e(this);
							if (k.is('option') || k.is('optgroup'))
								(k = f.item(k)), (k = f.matches(b, k)), null !== k && d.push(k);
						});
						a({results: d});
					}),
					(c.prototype.addOptions = function (b) {
						h.appendMany(this.$element, b);
					}),
					(c.prototype.option = function (b) {
						let a;
						b.children
							? ((a = document.createElement('optgroup')).label = b.text)
							: void 0 !== (a = document.createElement('option')).textContent
							? (a.textContent = b.text)
							: (a.innerText = b.text);
						void 0 !== b.id && (a.value = b.id);
						b.disabled && (a.disabled = !0);
						b.selected && (a.selected = !0);
						b.title && (a.title = b.title);
						const d = e(a);
						b = this._normalizeItem(b);
						return (b.element = a), h.StoreData(a, 'data', b), d;
					}),
					(c.prototype.item = function (b) {
						let a;
						if (null != (a = h.GetData(b[0], 'data'))) {
							return a;
						}
						if (b.is('option'))
							a = {
								id: b.val(),
								text: b.text(),
								disabled: b.prop('disabled'),
								selected: b.prop('selected'),
								title: b.prop('title'),
							};
						else if (b.is('optgroup')) {
							a = {text: b.prop('label'), children: [], title: b.prop('title')};
							for (var d = b.children('option'), f = [], k = 0; k < d.length; k++) {
								let m = e(d[k]);
								m = this.item(m);
								f.push(m);
							}
							a.children = f;
						}
						return ((a = this._normalizeItem(a)).element = b[0]), h.StoreData(b[0], 'data', a), a;
					}),
					(c.prototype._normalizeItem = function (b) {
						b !== Object(b) && (b = {id: b, text: b});
						return (
							null != (b = e.extend({}, {text: ''}, b)).id && (b.id = b.id.toString()),
							null != b.text && (b.text = b.text.toString()),
							null == b._resultId &&
								b.id &&
								null != this.container &&
								(b._resultId = this.generateResultId(this.container, b)),
							e.extend({}, {selected: !1, disabled: !1}, b)
						);
					}),
					(c.prototype.matches = function (b, a) {
						return this.options.get('matcher')(b, a);
					}),
					c
				);
			}),
			q.define('select2/data/array', ['./select', '../utils', 'jquery'], (g, h, e) => {
				function c(b, a) {
					this._dataToConvert = a.get('data') || [];
					c.__super__.constructor.call(this, b, a);
				}
				return (
					h.Extend(c, g),
					(c.prototype.bind = function (b, a) {
						c.__super__.bind.call(this, b, a);
						this.addOptions(this.convertToOptions(this._dataToConvert));
					}),
					(c.prototype.select = function (b) {
						let a = this.$element.find('option').filter((d, f) => f.value == b.id.toString());
						0 === a.length && ((a = this.option(b)), this.addOptions(a));
						c.__super__.select.call(this, b);
					}),
					(c.prototype.convertToOptions = function (b) {
						function a(z) {
							return function () {
								return e(this).val() == z.id;
							};
						}
						for (
							var d = this,
								f = this.$element.find('option'),
								k = f
									.map(function () {
										return d.item(e(this)).id;
									})
									.get(),
								m = [],
								n = 0;
							n < b.length;
							n++
						) {
							let p = this._normalizeItem(b[n]);
							if (0 <= e.inArray(p.id, k)) {
								var t = f.filter(a(p));
								const y = this.item(t);
								p = e.extend(!0, {}, p, y);
								p = this.option(p);
								t.replaceWith(p);
							} else
								(t = this.option(p)),
									p.children && ((p = this.convertToOptions(p.children)), h.appendMany(t, p)),
									m.push(t);
						}
						return m;
					}),
					c
				);
			}),
			q.define('select2/data/ajax', ['./array', '../utils', 'jquery'], (g, h, e) => {
				function c(b, a) {
					this.ajaxOptions = this._applyDefaults(a.get('ajax'));
					null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults);
					c.__super__.constructor.call(this, b, a);
				}
				return (
					h.Extend(c, g),
					(c.prototype._applyDefaults = (b) =>
						e.extend(
							{},
							{
								data: (a) => e.extend({}, a, {q: a.term}),
								transport: (a, d, f) => {
									a = e.ajax(a);
									return a.then(d), a.fail(f), a;
								},
							},
							b,
							!0
						)),
					(c.prototype.processResults = (b) => b),
					(c.prototype.query = function (b, a) {
						function d() {
							const m = k.transport(
								k,
								(n) => {
									n = f.processResults(n, b);
									f.options.get('debug') &&
										window.console &&
										console.error &&
										((n && n.results && e.isArray(n.results)) ||
											console.error(
												'Select2: The AJAX results did not return an array in the `results` key of the response.'
											));
									a(n);
								},
								() => {
									('status' in m && (0 === m.status || '0' === m.status)) ||
										f.trigger('results:message', {message: 'errorLoading'});
								}
							);
							f._request = m;
						}
						var f = this;
						null != this._request &&
							(e.isFunction(this._request.abort) && this._request.abort(), (this._request = null));
						var k = e.extend({type: 'GET'}, this.ajaxOptions);
						'function' == typeof k.url && (k.url = k.url.call(this.$element, b));
						'function' == typeof k.data && (k.data = k.data.call(this.$element, b));
						this.ajaxOptions.delay && null != b.term
							? (this._queryTimeout && clearTimeout(this._queryTimeout),
							  (this._queryTimeout = setTimeout(d, this.ajaxOptions.delay)))
							: d();
					}),
					c
				);
			}),
			q.define('select2/data/tags', ['jquery'], (g) => {
				function h(e, c, b) {
					const a = b.get('tags');
					let d = b.get('createTag');
					void 0 !== d && (this.createTag = d);
					d = b.get('insertTag');
					if ((void 0 !== d && (this.insertTag = d), e.call(this, c, b), g.isArray(a)))
						for (e = 0; e < a.length; e++)
							(c = this._normalizeItem(a[e])), (c = this.option(c)), this.$element.append(c);
				}
				return (
					(h.prototype.query = function (e, c, b) {
						const a = this;
						this._removeOldTags();
						null != c.term && null == c.page
							? e.call(this, c, function m(f, k) {
									for (var n = f.results, p = 0; p < n.length; p++) {
										const t = n[p];
										const y = null != t.children && !m({results: t.children}, !0);
										if ((t.text || '').toUpperCase() === (c.term || '').toUpperCase() || y)
											return !k && ((f.data = n), void b(f));
									}
									if (k) {
										return !0;
									}
									k = a.createTag(c);
									null != k &&
										((p = a.option(k)),
										p.attr('data-select2-tag', !0),
										a.addOptions([p]),
										a.insertTag(n, k));
									f.results = n;
									b(f);
							  })
							: e.call(this, c, b);
					}),
					(h.prototype.createTag = (e, c) => {
						e = g.trim(c.term);
						return '' === e ? null : {id: e, text: e};
					}),
					(h.prototype.insertTag = (e, c, b) => {
						c.unshift(b);
					}),
					(h.prototype._removeOldTags = function (e) {
						this.$element.find('option[data-select2-tag]').each(function () {
							this.selected || g(this).remove();
						});
					}),
					h
				);
			}),
			q.define('select2/data/tokenizer', ['jquery'], (g) => {
				function h(e, c, b) {
					const a = b.get('tokenizer');
					void 0 !== a && (this.tokenizer = a);
					e.call(this, c, b);
				}
				return (
					(h.prototype.bind = function (e, c, b) {
						e.call(this, c, b);
						this.$search = c.dropdown.$search || c.selection.$search || b.find('.select2-search__field');
					}),
					(h.prototype.query = function (e, c, b) {
						const a = this;
						c.term = c.term || '';
						const d = this.tokenizer(c, this.options, (f) => {
							const k = a._normalizeItem(f);
							a.$element.find('option').filter(function () {
								return g(this).val() === k.id;
							}).length ||
								((f = a.option(k)),
								f.attr('data-select2-tag', !0),
								a._removeOldTags(),
								a.addOptions([f]));
							a.trigger('select', {data: k});
							!0;
						});
						d.term !== c.term &&
							(this.$search.length && (this.$search.val(d.term), this.$search.trigger('focus')),
							(c.term = d.term));
						e.call(this, c, b);
					}),
					(h.prototype.tokenizer = function (e, c, b, a) {
						e = b.get('tokenSeparators') || [];
						b = c.term;
						for (
							let d = 0,
								f =
									this.createTag ||
									((m) => ({
										id: m.term,
										text: m.term,
									}));
							d < b.length;

						)
							if (-1 !== g.inArray(b[d], e)) {
								let k = b.substr(0, d);
								k = f(g.extend({}, c, {term: k}));
								null != k ? (a(k), (b = b.substr(d + 1) || ''), (d = 0)) : d++;
							} else d++;
						return {term: b};
					}),
					h
				);
			}),
			q.define('select2/data/minimumInputLength', [], () => {
				function g(h, e, c) {
					this.minimumInputLength = c.get('minimumInputLength');
					h.call(this, e, c);
				}
				return (
					(g.prototype.query = function (h, e, c) {
						e.term = e.term || '';
						e.term.length < this.minimumInputLength
							? this.trigger('results:message', {
									message: 'inputTooShort',
									args: {minimum: this.minimumInputLength, input: e.term, params: e},
							  })
							: h.call(this, e, c);
					}),
					g
				);
			}),
			q.define('select2/data/maximumInputLength', [], () => {
				function g(h, e, c) {
					this.maximumInputLength = c.get('maximumInputLength');
					h.call(this, e, c);
				}
				return (
					(g.prototype.query = function (h, e, c) {
						e.term = e.term || '';
						0 < this.maximumInputLength && e.term.length > this.maximumInputLength
							? this.trigger('results:message', {
									message: 'inputTooLong',
									args: {maximum: this.maximumInputLength, input: e.term, params: e},
							  })
							: h.call(this, e, c);
					}),
					g
				);
			}),
			q.define('select2/data/maximumSelectionLength', [], () => {
				function g(h, e, c) {
					this.maximumSelectionLength = c.get('maximumSelectionLength');
					h.call(this, e, c);
				}
				return (
					(g.prototype.bind = function (h, e, c) {
						const b = this;
						h.call(this, e, c);
						e.on('select', () => {
							b._checkIfMaximumSelected();
						});
					}),
					(g.prototype.query = function (h, e, c) {
						const b = this;
						this._checkIfMaximumSelected(() => {
							h.call(b, e, c);
						});
					}),
					(g.prototype._checkIfMaximumSelected = function (h, e) {
						const c = this;
						this.current((b) => {
							b = null != b ? b.length : 0;
							0 < c.maximumSelectionLength && b >= c.maximumSelectionLength
								? c.trigger('results:message', {
										message: 'maximumSelected',
										args: {maximum: c.maximumSelectionLength},
								  })
								: e && e();
						});
					}),
					g
				);
			}),
			q.define('select2/dropdown', ['jquery', './utils'], (g, h) => {
				function e(c, b) {
					this.$element = c;
					this.options = b;
					e.__super__.constructor.call(this);
				}
				return (
					h.Extend(e, h.Observable),
					(e.prototype.render = function () {
						const c = g('<span class="select2-dropdown"><span class="select2-results"></span></span>');
						return c.attr('dir', this.options.get('dir')), (this.$dropdown = c);
					}),
					(e.prototype.bind = () => {}),
					(e.prototype.position = (c, b) => {}),
					(e.prototype.destroy = function () {
						this.$dropdown.remove();
					}),
					e
				);
			}),
			q.define('select2/dropdown/search', ['jquery', '../utils'], (g, h) => {
				function e() {}
				return (
					(e.prototype.render = function (c) {
						c = c.call(this);
						const b = g(
							'<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
						);
						return (this.$searchContainer = b), (this.$search = b.find('input')), c.prepend(b), c;
					}),
					(e.prototype.bind = function (c, b, a) {
						const d = this;
						const f = b.id + '-results';
						c.call(this, b, a);
						this.$search.on('keydown', (k) => {
							d.trigger('keypress', k);
							d._keyUpPrevented = k.isDefaultPrevented();
						});
						this.$search.on('input', function (k) {
							g(this).off('keyup');
						});
						this.$search.on('keyup input', (k) => {
							d.handleSearch(k);
						});
						b.on('open', () => {
							d.$search.attr('tabindex', 0);
							d.$search.attr('aria-controls', f);
							d.$search.trigger('focus');
							setTimeout(() => {
								d.$search.trigger('focus');
							}, 0);
						});
						b.on('close', () => {
							d.$search.attr('tabindex', -1);
							d.$search.removeAttr('aria-controls');
							d.$search.removeAttr('aria-activedescendant');
							d.$search.val('');
							d.$search.trigger('blur');
						});
						b.on('focus', () => {
							b.isOpen() || d.$search.trigger('focus');
						});
						b.on('results:all', (k) => {
							(null != k.query.term && '' !== k.query.term) ||
								(d.showSearch(k)
									? d.$searchContainer.removeClass('select2-search--hide')
									: d.$searchContainer.addClass('select2-search--hide'));
						});
						b.on('results:focus', (k) => {
							k.data._resultId
								? d.$search.attr('aria-activedescendant', k.data._resultId)
								: d.$search.removeAttr('aria-activedescendant');
						});
					}),
					(e.prototype.handleSearch = function (c) {
						this._keyUpPrevented || ((c = this.$search.val()), this.trigger('query', {term: c}));
						this._keyUpPrevented = !1;
					}),
					(e.prototype.showSearch = (c, b) => !0),
					e
				);
			}),
			q.define('select2/dropdown/hidePlaceholder', [], () => {
				function g(h, e, c, b) {
					this.placeholder = this.normalizePlaceholder(c.get('placeholder'));
					h.call(this, e, c, b);
				}
				return (
					(g.prototype.append = function (h, e) {
						e.results = this.removePlaceholder(e.results);
						h.call(this, e);
					}),
					(g.prototype.normalizePlaceholder = (h, e) => ('string' == typeof e && (e = {id: '', text: e}), e)),
					(g.prototype.removePlaceholder = function (h, e) {
						h = e.slice(0);
						for (let c = e.length - 1; 0 <= c; c--) this.placeholder.id === e[c].id && h.splice(c, 1);
						return h;
					}),
					g
				);
			}),
			q.define('select2/dropdown/infiniteScroll', ['jquery'], (g) => {
				function h(e, c, b, a) {
					this.lastParams = {};
					e.call(this, c, b, a);
					this.$loadingMore = this.createLoadingMore();
					this.loading = !1;
				}
				return (
					(h.prototype.append = function (e, c) {
						this.$loadingMore.remove();
						this.loading = !1;
						e.call(this, c);
						this.showLoadingMore(c) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
					}),
					(h.prototype.bind = function (e, c, b) {
						const a = this;
						e.call(this, c, b);
						c.on('query', (d) => {
							a.lastParams = d;
							a.loading = !0;
						});
						c.on('query:append', (d) => {
							a.lastParams = d;
							a.loading = !0;
						});
						this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
					}),
					(h.prototype.loadMoreIfNeeded = function () {
						let e = g.contains(document.documentElement, this.$loadingMore[0]);
						!this.loading &&
							e &&
							((e = this.$results.offset().top + this.$results.outerHeight(!1)),
							this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= e + 50 &&
								this.loadMore());
					}),
					(h.prototype.loadMore = function () {
						this.loading = !0;
						const e = g.extend({}, {page: 1}, this.lastParams);
						e.page++;
						this.trigger('query:append', e);
					}),
					(h.prototype.showLoadingMore = (e, c) => c.pagination && c.pagination.more),
					(h.prototype.createLoadingMore = function () {
						const e = g(
							'<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
						);
						const c = this.options.get('translations').get('loadingMore');
						return e.html(c(this.lastParams)), e;
					}),
					h
				);
			}),
			q.define('select2/dropdown/attachBody', ['jquery', '../utils'], (g, h) => {
				function e(c, b, a) {
					this.$dropdownParent = g(a.get('dropdownParent') || document.body);
					c.call(this, b, a);
				}
				return (
					(e.prototype.bind = function (c, b, a) {
						const d = this;
						c.call(this, b, a);
						b.on('open', () => {
							d._showDropdown();
							d._attachPositioningHandler(b);
							d._bindContainerResultHandlers(b);
						});
						b.on('close', () => {
							d._hideDropdown();
							d._detachPositioningHandler(b);
						});
						this.$dropdownContainer.on('mousedown', (f) => {
							f.stopPropagation();
						});
					}),
					(e.prototype.destroy = function (c) {
						c.call(this);
						this.$dropdownContainer.remove();
					}),
					(e.prototype.position = function (c, b, a) {
						b.attr('class', a.attr('class'));
						b.removeClass('select2');
						b.addClass('select2-container--open');
						b.css({position: 'absolute', top: -999999});
						this.$container = a;
					}),
					(e.prototype.render = function (c) {
						const b = g('<span></span>');
						c = c.call(this);
						return b.append(c), (this.$dropdownContainer = b);
					}),
					(e.prototype._hideDropdown = function (c) {
						this.$dropdownContainer.detach();
					}),
					(e.prototype._bindContainerResultHandlers = function (c, b) {
						if (!this._containerResultsHandlersBound) {
							const a = this;
							b.on('results:all', () => {
								a._positionDropdown();
								a._resizeDropdown();
							});
							b.on('results:append', () => {
								a._positionDropdown();
								a._resizeDropdown();
							});
							b.on('results:message', () => {
								a._positionDropdown();
								a._resizeDropdown();
							});
							b.on('select', () => {
								a._positionDropdown();
								a._resizeDropdown();
							});
							b.on('unselect', () => {
								a._positionDropdown();
								a._resizeDropdown();
							});
							this._containerResultsHandlersBound = !0;
						}
					}),
					(e.prototype._attachPositioningHandler = function (c, b) {
						const a = this;
						c = 'scroll.select2.' + b.id;
						const d = 'resize.select2.' + b.id;
						b = 'orientationchange.select2.' + b.id;
						const f = this.$container.parents().filter(h.hasScroll);
						f.each(function () {
							h.StoreData(this, 'select2-scroll-position', {
								x: g(this).scrollLeft(),
								y: g(this).scrollTop(),
							});
						});
						f.on(c, function (k) {
							k = h.GetData(this, 'select2-scroll-position');
							g(this).scrollTop(k.y);
						});
						g(window).on(c + ' ' + d + ' ' + b, (k) => {
							a._positionDropdown();
							a._resizeDropdown();
						});
					}),
					(e.prototype._detachPositioningHandler = function (c, b) {
						c = 'scroll.select2.' + b.id;
						const a = 'resize.select2.' + b.id;
						b = 'orientationchange.select2.' + b.id;
						this.$container.parents().filter(h.hasScroll).off(c);
						g(window).off(c + ' ' + a + ' ' + b);
					}),
					(e.prototype._positionDropdown = function () {
						let c = g(window);
						const b = this.$dropdown.hasClass('select2-dropdown--above');
						const a = this.$dropdown.hasClass('select2-dropdown--below');
						let d = null;
						let f = this.$container.offset();
						f.bottom = f.top + this.$container.outerHeight(!1);
						let k = this.$container.outerHeight(!1);
						const m = f.top;
						let n = f.top + k;
						k = this.$dropdown.outerHeight(!1);
						let p = c.scrollTop();
						let t = c.scrollTop() + c.height();
						c = p < f.top - k;
						p = t > f.bottom + k;
						f = {left: f.left, top: n};
						n = this.$dropdownParent;
						'static' === n.css('position') && (n = n.offsetParent());
						t = {top: 0, left: 0};
						(g.contains(document.body, n[0]) || n[0].isConnected) && (t = n.offset());
						f.top -= t.top;
						f.left -= t.left;
						b || a || (d = 'below');
						p || !c || b ? !c && p && b && (d = 'below') : (d = 'above');
						('above' == d || (b && 'below' !== d)) && (f.top = m - t.top - k);
						null != d &&
							(this.$dropdown
								.removeClass('select2-dropdown--below select2-dropdown--above')
								.addClass('select2-dropdown--' + d),
							this.$container
								.removeClass('select2-container--below select2-container--above')
								.addClass('select2-container--' + d));
						this.$dropdownContainer.css(f);
					}),
					(e.prototype._resizeDropdown = function () {
						const c = {width: this.$container.outerWidth(!1) + 'px'};
						this.options.get('dropdownAutoWidth') &&
							((c.minWidth = c.width), (c.position = 'relative'), (c.width = 'auto'));
						this.$dropdown.css(c);
					}),
					(e.prototype._showDropdown = function (c) {
						this.$dropdownContainer.appendTo(this.$dropdownParent);
						this._positionDropdown();
						this._resizeDropdown();
					}),
					e
				);
			}),
			q.define('select2/dropdown/minimumResultsForSearch', [], () => {
				function g(h, e, c, b) {
					this.minimumResultsForSearch = c.get('minimumResultsForSearch');
					0 > this.minimumResultsForSearch && (this.minimumResultsForSearch = 1 / 0);
					h.call(this, e, c, b);
				}
				return (
					(g.prototype.showSearch = function (h, e) {
						return (
							!(
								(function a(b) {
									for (var d = 0, f = 0; f < b.length; f++) {
										const k = b[f];
										k.children ? (d += a(k.children)) : d++;
									}
									return d;
								})(e.data.results) < this.minimumResultsForSearch
							) && h.call(this, e)
						);
					}),
					g
				);
			}),
			q.define('select2/dropdown/selectOnClose', ['../utils'], (g) => {
				function h() {}
				return (
					(h.prototype.bind = function (e, c, b) {
						const a = this;
						e.call(this, c, b);
						c.on('close', (d) => {
							a._handleSelectOnClose(d);
						});
					}),
					(h.prototype._handleSelectOnClose = function (e, c) {
						if (
							c &&
							null != c.originalSelect2Event &&
							((e = c.originalSelect2Event), 'select' === e._type || 'unselect' === e._type)
						)
							return;
						e = this.getHighlightedResults();
						1 > e.length ||
							((e = g.GetData(e[0], 'data')),
							(null != e.element && e.element.selected) ||
								(null == e.element && e.selected) ||
								this.trigger('select', {data: e}));
					}),
					h
				);
			}),
			q.define('select2/dropdown/closeOnSelect', [], () => {
				function g() {}
				return (
					(g.prototype.bind = function (h, e, c) {
						const b = this;
						h.call(this, e, c);
						e.on('select', (a) => {
							b._selectTriggered(a);
						});
						e.on('unselect', (a) => {
							b._selectTriggered(a);
						});
					}),
					(g.prototype._selectTriggered = function (h, e) {
						((h = e.originalEvent) && (h.ctrlKey || h.metaKey)) ||
							this.trigger('close', {originalEvent: h, originalSelect2Event: e});
					}),
					g
				);
			}),
			q.define('select2/i18n/en', [], () => ({
				errorLoading: () => 'The results could not be loaded.',
				inputTooLong: (g) => {
					g = g.input.length - g.maximum;
					let h = 'Please delete ' + g + ' character';
					return 1 != g && (h += 's'), h;
				},
				inputTooShort: (g) => 'Please enter ' + (g.minimum - g.input.length) + ' or more characters',
				loadingMore: () => 'Loading more results\u2026',
				maximumSelected: (g) => {
					let h = 'You can only select ' + g.maximum + ' item';
					return 1 != g.maximum && (h += 's'), h;
				},
				noResults: () => 'No results found',
				searching: () => 'Searching\u2026',
				removeAllItems: () => 'Remove all items',
			})),
			q.define(
				'select2/defaults',
				'jquery require ./results ./selection/single ./selection/multiple ./selection/placeholder ./selection/allowClear ./selection/search ./selection/eventRelay ./utils ./translation ./diacritics ./data/select ./data/array ./data/ajax ./data/tags ./data/tokenizer ./data/minimumInputLength ./data/maximumInputLength ./data/maximumSelectionLength ./dropdown ./dropdown/search ./dropdown/hidePlaceholder ./dropdown/infiniteScroll ./dropdown/attachBody ./dropdown/minimumResultsForSearch ./dropdown/selectOnClose ./dropdown/closeOnSelect ./i18n/en'.split(
					' '
				),
				(g, h, e, c, b, a, d, f, k, m, n, p, t, y, z, T, aa, ba, ca, da, X, ea, fa, ha, ia, ja, ka, la, na) => {
					function G() {
						this.reset();
					}
					return (
						(G.prototype.apply = function (l) {
							if (null == (l = g.extend(!0, {}, this.defaults, l)).dataAdapter) {
								if (
									(null != l.ajax
										? (l.dataAdapter = z)
										: null != l.data
										? (l.dataAdapter = y)
										: (l.dataAdapter = t),
									0 < l.minimumInputLength && (l.dataAdapter = m.Decorate(l.dataAdapter, ba)),
									0 < l.maximumInputLength && (l.dataAdapter = m.Decorate(l.dataAdapter, ca)),
									0 < l.maximumSelectionLength && (l.dataAdapter = m.Decorate(l.dataAdapter, da)),
									l.tags && (l.dataAdapter = m.Decorate(l.dataAdapter, T)),
									(null == l.tokenSeparators && null == l.tokenizer) ||
										(l.dataAdapter = m.Decorate(l.dataAdapter, aa)),
									null != l.query)
								) {
									var u = h(l.amdBase + 'compat/query');
									l.dataAdapter = m.Decorate(l.dataAdapter, u);
								}
								null != l.initSelection &&
									((u = h(l.amdBase + 'compat/initSelection')),
									(l.dataAdapter = m.Decorate(l.dataAdapter, u)));
							}
							if (
								(null == l.resultsAdapter &&
									((l.resultsAdapter = e),
									null != l.ajax && (l.resultsAdapter = m.Decorate(l.resultsAdapter, ha)),
									null != l.placeholder && (l.resultsAdapter = m.Decorate(l.resultsAdapter, fa)),
									l.selectOnClose && (l.resultsAdapter = m.Decorate(l.resultsAdapter, ka))),
								null == l.dropdownAdapter)
							) {
								l.multiple
									? (l.dropdownAdapter = X)
									: ((u = m.Decorate(X, ea)), (l.dropdownAdapter = u));
								if (
									(0 !== l.minimumResultsForSearch &&
										(l.dropdownAdapter = m.Decorate(l.dropdownAdapter, ja)),
									l.closeOnSelect && (l.dropdownAdapter = m.Decorate(l.dropdownAdapter, la)),
									null != l.dropdownCssClass ||
										null != l.dropdownCss ||
										null != l.adaptDropdownCssClass)
								)
									(u = h(l.amdBase + 'compat/dropdownCss')),
										(l.dropdownAdapter = m.Decorate(l.dropdownAdapter, u));
								l.dropdownAdapter = m.Decorate(l.dropdownAdapter, ia);
							}
							if (null == l.selectionAdapter) {
								if (
									(l.multiple ? (l.selectionAdapter = b) : (l.selectionAdapter = c),
									null != l.placeholder && (l.selectionAdapter = m.Decorate(l.selectionAdapter, a)),
									l.allowClear && (l.selectionAdapter = m.Decorate(l.selectionAdapter, d)),
									l.multiple && (l.selectionAdapter = m.Decorate(l.selectionAdapter, f)),
									null != l.containerCssClass ||
										null != l.containerCss ||
										null != l.adaptContainerCssClass)
								)
									(u = h(l.amdBase + 'compat/containerCss')),
										(l.selectionAdapter = m.Decorate(l.selectionAdapter, u));
								l.selectionAdapter = m.Decorate(l.selectionAdapter, k);
							}
							l.language = this._resolveLanguage(l.language);
							l.language.push('en');
							u = [];
							for (const v of l.language) {
								!u.includes(v) && u.push(v);
							}
							return (
								(l.language = u), (l.translations = this._processTranslations(l.language, l.debug)), l
							);
						}),
						(G.prototype.reset = function () {
							function l(u) {
								return u.replace(/[^\u0000-\u007E]/g, (r) => p[r] || r);
							}
							this.defaults = {
								amdBase: './',
								amdLanguageBase: './i18n/',
								closeOnSelect: !0,
								debug: !1,
								dropdownAutoWidth: !1,
								escapeMarkup: m.escapeMarkup,
								language: {},
								matcher: function D(r, v) {
									if ('' === g.trim(r.term)) {
										return v;
									}
									if (v.children && 0 < v.children.length) {
										for (var x = g.extend(!0, {}, v), J = v.children.length - 1; 0 <= J; J--)
											null == D(r, v.children[J]) && x.children.splice(J, 1);
										return 0 < x.children.length ? x : D(r, x);
									}
									x = l(v.text).toUpperCase();
									r = l(r.term).toUpperCase();
									return x.includes(r) ? v : null;
								},
								minimumInputLength: 0,
								maximumInputLength: 0,
								maximumSelectionLength: 0,
								minimumResultsForSearch: 0,
								selectOnClose: !1,
								scrollAfterSelect: !1,
								sorter: (r) => r,
								templateResult: (r) => r.text,
								templateSelection: (r) => r.text,
								theme: 'default',
								width: 'resolve',
							};
						}),
						(G.prototype.applyFromElement = function (l, u) {
							let r = l.language;
							const v = this.defaults.language;
							const D = u.prop('lang');
							u = u.closest('[lang]').prop('lang');
							r = Array.prototype.concat.call(
								this._resolveLanguage(D),
								this._resolveLanguage(r),
								this._resolveLanguage(v),
								this._resolveLanguage(u)
							);
							return (l.language = r), l;
						}),
						(G.prototype._resolveLanguage = (l) => {
							if (!l || g.isEmptyObject(l)) {
								return [];
							}
							if (g.isPlainObject(l)) {
								return [l];
							}
							l = g.isArray(l) ? l : [l];
							for (var u = [], r = 0; r < l.length; r++)
								if ((u.push(l[r]), 'string' == typeof l[r] && 0 < l[r].indexOf('-'))) {
									const v = l[r].split('-')[0];
									u.push(v);
								}
							return u;
						}),
						(G.prototype._processTranslations = function (l, u) {
							for (var r = new n(), v = 0; v < l.length; v++) {
								let D = new n();
								let x = l[v];
								if ('string' == typeof x)
									try {
										D = n.loadPath(x);
									} catch (J) {
										try {
											(x = this.defaults.amdLanguageBase + x), (D = n.loadPath(x));
										} catch (oa) {
											u &&
												window.console &&
												console.warn &&
												console.warn(
													'Select2: The language file for "' +
														x +
														'" could not be automatically loaded. A fallback will be used instead.'
												);
										}
									}
								else D = g.isPlainObject(x) ? new n(x) : x;
								r.extend(D);
							}
							return r;
						}),
						(G.prototype.set = function (l, u) {
							const r = {};
							r[g.camelCase(l)] = u;
							l = m._convertData(r);
							g.extend(!0, this.defaults, l);
						}),
						new G()
					);
				}
			),
			q.define('select2/options', ['require', 'jquery', './defaults', './utils'], (g, h, e, c) => {
				function b(a, d) {
					if (
						((this.options = a),
						null != d && this.fromElement(d),
						null != d && (this.options = e.applyFromElement(this.options, d)),
						(this.options = e.apply(this.options)),
						d && d.is('input'))
					)
						(a = g(this.get('amdBase') + 'compat/inputData')),
							(this.options.dataAdapter = c.Decorate(this.options.dataAdapter, a));
				}
				return (
					(b.prototype.fromElement = function (a) {
						function d(y, z) {
							return z.toUpperCase();
						}
						const f = ['select2'];
						null == this.options.multiple && (this.options.multiple = a.prop('multiple'));
						null == this.options.disabled && (this.options.disabled = a.prop('disabled'));
						null == this.options.dir &&
							(a.prop('dir')
								? (this.options.dir = a.prop('dir'))
								: a.closest('[dir]').prop('dir')
								? (this.options.dir = a.closest('[dir]').prop('dir'))
								: (this.options.dir = 'ltr'));
						a.prop('disabled', this.options.disabled);
						a.prop('multiple', this.options.multiple);
						c.GetData(a[0], 'select2Tags') &&
							(this.options.debug &&
								window.console &&
								console.warn &&
								console.warn(
									'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
								),
							c.StoreData(a[0], 'data', c.GetData(a[0], 'select2Tags')),
							c.StoreData(a[0], 'tags', !0));
						c.GetData(a[0], 'ajaxUrl') &&
							(this.options.debug &&
								window.console &&
								console.warn &&
								console.warn(
									'Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.'
								),
							a.attr('ajax--url', c.GetData(a[0], 'ajaxUrl')),
							c.StoreData(a[0], 'ajax-Url', c.GetData(a[0], 'ajaxUrl')));
						for (var k = {}, m = 0; m < a[0].attributes.length; m++) {
							let n = a[0].attributes[m].name;
							if ('data-' == n.substr(0, 5)) {
								n = n.substring(5);
								const p = c.GetData(a[0], n);
								k[n.replace(/-([a-z])/g, d)] = p;
							}
						}
						h.fn.jquery &&
							'1.' == h.fn.jquery.substr(0, 2) &&
							a[0].dataset &&
							(k = h.extend(!0, {}, a[0].dataset, k));
						a = h.extend(!0, {}, c.GetData(a[0]), k);
						for (const t in (a = c._convertData(a)))
							-1 < h.inArray(t, f) ||
								(h.isPlainObject(this.options[t])
									? h.extend(this.options[t], a[t])
									: (this.options[t] = a[t]));
						return this;
					}),
					(b.prototype.get = function (a) {
						return this.options[a];
					}),
					(b.prototype.set = function (a, d) {
						this.options[a] = d;
					}),
					b
				);
			}),
			q.define('select2/core', ['jquery', './options', './utils', './keys'], (g, h, e, c) => {
				const b = function (a, d) {
					null != e.GetData(a[0], 'select2') && e.GetData(a[0], 'select2').destroy();
					this.$element = a;
					this.id = this._generateId(a);
					d = d || {};
					this.options = new h(d, a);
					b.__super__.constructor.call(this);
					d = a.attr('tabindex') || 0;
					e.StoreData(a[0], 'old-tabindex', d);
					a.attr('tabindex', '-1');
					this.dataAdapter = new (this.options.get('dataAdapter'))(a, this.options);
					d = this.render();
					this._placeContainer(d);
					this.selection = new (this.options.get('selectionAdapter'))(a, this.options);
					this.$selection = this.selection.render();
					this.selection.position(this.$selection, d);
					this.dropdown = new (this.options.get('dropdownAdapter'))(a, this.options);
					this.$dropdown = this.dropdown.render();
					this.dropdown.position(this.$dropdown, d);
					this.results = new (this.options.get('resultsAdapter'))(a, this.options, this.dataAdapter);
					this.$results = this.results.render();
					this.results.position(this.$results, this.$dropdown);
					const f = this;
					this._bindAdapters();
					this._registerDomEvents();
					this._registerDataEvents();
					this._registerSelectionEvents();
					this._registerDropdownEvents();
					this._registerResultsEvents();
					this._registerEvents();
					this.dataAdapter.current((k) => {
						f.trigger('selection:update', {data: k});
					});
					a.addClass('select2-hidden-accessible');
					a.attr('aria-hidden', 'true');
					this._syncAttributes();
					e.StoreData(a[0], 'select2', this);
					a.data('select2', this);
				};
				return (
					e.Extend(b, e.Observable),
					(b.prototype._generateId = (a) =>
						'select2-' +
						(null != a.attr('id')
							? a.attr('id')
							: null != a.attr('name')
							? a.attr('name') + '-' + e.generateChars(2)
							: e.generateChars(4)
						).replace(/(:|\.|\[|\]|,)/g, '')),
					(b.prototype._placeContainer = function (a) {
						a.insertAfter(this.$element);
						const d = this._resolveWidth(this.$element, this.options.get('width'));
						null != d && a.css('width', d);
					}),
					(b.prototype._resolveWidth = function (a, d) {
						let f = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
						if ('resolve' == d)
							return (
								(f = this._resolveWidth(a, 'style')), null != f ? f : this._resolveWidth(a, 'element')
							);
						if ('element' == d) {
							return (f = a.outerWidth(!1)), 0 >= f ? 'auto' : f + 'px';
						}
						if ('style' != d) {
							return 'computedstyle' != d ? d : window.getComputedStyle(a[0]).width;
						}
						a = a.attr('style');
						if ('string' != typeof a) {
							return null;
						}
						a = a.split(';');
						d = 0;
						for (const k = a.length; d < k; d += 1) {
							const m = a[d].replace(/\s/g, '').match(f);
							if (null !== m && 1 <= m.length) {
								return m[1];
							}
						}
						return null;
					}),
					(b.prototype._bindAdapters = function () {
						this.dataAdapter.bind(this, this.$container);
						this.selection.bind(this, this.$container);
						this.dropdown.bind(this, this.$container);
						this.results.bind(this, this.$container);
					}),
					(b.prototype._registerDomEvents = function () {
						const a = this;
						this.$element.on('change.select2', () => {
							a.dataAdapter.current((f) => {
								a.trigger('selection:update', {data: f});
							});
						});
						this.$element.on('focus.select2', (f) => {
							a.trigger('focus', f);
						});
						this._syncA = e.bind(this._syncAttributes, this);
						this._syncS = e.bind(this._syncSubtree, this);
						this.$element[0].attachEvent && this.$element[0].attachEvent('onpropertychange', this._syncA);
						const d =
							window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
						null != d
							? ((this._observer = new d((f) => {
									g.each(f, a._syncA);
									g.each(f, a._syncS);
							  })),
							  this._observer.observe(this.$element[0], {
									attributes: !0,
									childList: !0,
									subtree: !1,
							  }))
							: this.$element[0].addEventListener &&
							  (this.$element[0].addEventListener('DOMAttrModified', a._syncA, !1),
							  this.$element[0].addEventListener('DOMNodeInserted', a._syncS, !1),
							  this.$element[0].addEventListener('DOMNodeRemoved', a._syncS, !1));
					}),
					(b.prototype._registerDataEvents = function () {
						const a = this;
						this.dataAdapter.on('*', (d, f) => {
							a.trigger(d, f);
						});
					}),
					(b.prototype._registerSelectionEvents = function () {
						const a = this;
						const d = ['toggle', 'focus'];
						this.selection.on('toggle', () => {
							a.toggleDropdown();
						});
						this.selection.on('focus', (f) => {
							a.focus(f);
						});
						this.selection.on('*', (f, k) => {
							-1 === g.inArray(f, d) && a.trigger(f, k);
						});
					}),
					(b.prototype._registerDropdownEvents = function () {
						const a = this;
						this.dropdown.on('*', (d, f) => {
							a.trigger(d, f);
						});
					}),
					(b.prototype._registerResultsEvents = function () {
						const a = this;
						this.results.on('*', (d, f) => {
							a.trigger(d, f);
						});
					}),
					(b.prototype._registerEvents = function () {
						const a = this;
						this.on('open', () => {
							a.$container.addClass('select2-container--open');
						});
						this.on('close', () => {
							a.$container.removeClass('select2-container--open');
						});
						this.on('enable', () => {
							a.$container.removeClass('select2-container--disabled');
						});
						this.on('disable', () => {
							a.$container.addClass('select2-container--disabled');
						});
						this.on('blur', () => {
							a.$container.removeClass('select2-container--focus');
						});
						this.on('query', function (d) {
							a.isOpen() || a.trigger('open', {});
							this.dataAdapter.query(d, (f) => {
								a.trigger('results:all', {data: f, query: d});
							});
						});
						this.on('query:append', function (d) {
							this.dataAdapter.query(d, (f) => {
								a.trigger('results:append', {data: f, query: d});
							});
						});
						this.on('keypress', (d) => {
							const f = d.which;
							a.isOpen()
								? f === c.ESC || f === c.TAB || (f === c.UP && d.altKey)
									? (a.close(), d.preventDefault())
									: f === c.ENTER
									? (a.trigger('results:select', {}), d.preventDefault())
									: f === c.SPACE && d.ctrlKey
									? (a.trigger('results:toggle', {}), d.preventDefault())
									: f === c.UP
									? (a.trigger('results:previous', {}), d.preventDefault())
									: f === c.DOWN && (a.trigger('results:next', {}), d.preventDefault())
								: (f === c.ENTER || f === c.SPACE || (f === c.DOWN && d.altKey)) &&
								  (a.open(), d.preventDefault());
						});
					}),
					(b.prototype._syncAttributes = function () {
						this.options.set('disabled', this.$element.prop('disabled'));
						this.options.get('disabled')
							? (this.isOpen() && this.close(), this.trigger('disable', {}))
							: this.trigger('enable', {});
					}),
					(b.prototype._syncSubtree = function (a, d) {
						let f = !1;
						const k = this;
						if (!a || !a.target || 'OPTION' === a.target.nodeName || 'OPTGROUP' === a.target.nodeName) {
							if (d)
								if (d.addedNodes && 0 < d.addedNodes.length)
									for (a = 0; a < d.addedNodes.length; a++) d.addedNodes[a].selected && (f = !0);
								else d.removedNodes && 0 < d.removedNodes.length && (f = !0);
							else f = !0;
							f &&
								this.dataAdapter.current((m) => {
									k.trigger('selection:update', {data: m});
								});
						}
					}),
					(b.prototype.trigger = function (a, d) {
						const f = b.__super__.trigger;
						const k = {
							open: 'opening',
							close: 'closing',
							select: 'selecting',
							unselect: 'unselecting',
							clear: 'clearing',
						};
						if ((void 0 === d && (d = {}), a in k)) {
							const m = {prevented: !1, name: a, args: d};
							if ((f.call(this, k[a], m), m.prevented)) {
								return void (d.prevented = !0);
							}
						}
						f.call(this, a, d);
					}),
					(b.prototype.toggleDropdown = function () {
						this.options.get('disabled') || (this.isOpen() ? this.close() : this.open());
					}),
					(b.prototype.open = function () {
						this.isOpen() || this.trigger('query', {});
					}),
					(b.prototype.close = function () {
						this.isOpen() && this.trigger('close', {});
					}),
					(b.prototype.isOpen = function () {
						return this.$container.hasClass('select2-container--open');
					}),
					(b.prototype.hasFocus = function () {
						return this.$container.hasClass('select2-container--focus');
					}),
					(b.prototype.focus = function (a) {
						this.hasFocus() ||
							(this.$container.addClass('select2-container--focus'), this.trigger('focus', {}));
					}),
					(b.prototype.enable = function (a) {
						this.options.get('debug') &&
							window.console &&
							console.warn &&
							console.warn(
								'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
							);
						(null != a && 0 !== a.length) || (a = [!0]);
						this.$element.prop('disabled', !a[0]);
					}),
					(b.prototype.data = function (...args) {
						this.options.get('debug') &&
							0 < args.length &&
							window.console &&
							console.warn &&
							console.warn(
								'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
							);
						let a = [];
						return (
							this.dataAdapter.current((d) => {
								a = d;
							}),
							a
						);
					}),
					(b.prototype.val = function (a) {
						if (
							(this.options.get('debug') &&
								window.console &&
								console.warn &&
								console.warn(
									'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
								),
							null == a || 0 === a.length)
						)
							return this.$element.val();
						a = a[0];
						g.isArray(a) && (a = g.map(a, (d) => d.toString()));
						this.$element.val(a).trigger('change');
					}),
					(b.prototype.destroy = function () {
						this.$container.remove();
						this.$element[0].detachEvent && this.$element[0].detachEvent('onpropertychange', this._syncA);
						null != this._observer
							? (this._observer.disconnect(), (this._observer = null))
							: this.$element[0].removeEventListener &&
							  (this.$element[0].removeEventListener('DOMAttrModified', this._syncA, !1),
							  this.$element[0].removeEventListener('DOMNodeInserted', this._syncS, !1),
							  this.$element[0].removeEventListener('DOMNodeRemoved', this._syncS, !1));
						this._syncS = this._syncA = null;
						this.$element.off('.select2');
						this.$element.attr('tabindex', e.GetData(this.$element[0], 'old-tabindex'));
						this.$element.removeClass('select2-hidden-accessible');
						this.$element.attr('aria-hidden', 'false');
						e.RemoveData(this.$element[0]);
						this.$element.removeData('select2');
						this.dataAdapter.destroy();
						this.selection.destroy();
						this.dropdown.destroy();
						this.results.destroy();
						this.results = this.dropdown = this.selection = this.dataAdapter = null;
					}),
					(b.prototype.render = function () {
						const a = g(
							'<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
						);
						return (
							a.attr('dir', this.options.get('dir')),
							(this.$container = a),
							this.$container.addClass('select2-container--' + this.options.get('theme')),
							e.StoreData(a[0], 'element', this.$element),
							a
						);
					}),
					b
				);
			}),
			q.define('jquery-mousewheel', ['jquery'], (g) => g),
			q.define(
				'jquery.select2',
				['jquery', 'jquery-mousewheel', './select2/core', './select2/defaults', './select2/utils'],
				(g, h, e, c, b) => {
					if (null == g.fn.select2) {
						const a = ['open', 'close', 'destroy'];
						g.fn.select2 = function (d) {
							if ('object' == typeof (d = d || {}))
								return (
									this.each(function () {
										const m = g.extend(!0, {}, d);
										new e(g(this), m);
									}),
									this
								);
							if ('string' != typeof d) {
								throw Error('Invalid arguments for Select2: ' + d);
							}
							let f;
							const k = Array.prototype.slice.call(arguments, 1);
							return (
								this.each(function () {
									const m = b.GetData(this, 'select2');
									null == m &&
										window.console &&
										console.error &&
										console.error(
											"The select2('" +
												d +
												"') method was called on an element that is not using Select2."
										);
									f = m[d](...k);
								}),
								-1 < g.inArray(d, a) ? this : f
							);
						};
					}
					return null == g.fn.select2.defaults && (g.fn.select2.defaults = c), e;
				}
			),
			{define: q.define, require: q.require}
		);
	})();
	const ma = Y.require('jquery.select2');
	return (A.fn.select2.amd = Y), ma;
});
