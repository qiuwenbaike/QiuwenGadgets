const origPageName = mw.config.get('wgPageName');
const scriptPath = mw.config.get('wgScriptPath');
const nsNumber = mw.config.get('wgNamespaceNumber');
const isCategory = nsNumber === 14;
const findRedirectCallbacks = [];
const pageWithRedirectTextSuffix = {};
const redirectExcludes = {};
const SUFFIX_APPEND = 0;
const SUFFIX_REPLACE = 1;
const SUFFIX_SETDEFAULT = 2;
let _nsCanonPrefix = `${origPageName.split(':')[0]}:`;
const nsPrefixes = [];
for (const [text, nsid] of Object.entries(mw.config.get('wgNamespaceIds'))) {
	if (nsid === mw.config.get('wgNamespaceNumber') && !!text) {
		nsPrefixes.push(text);
	}
}
let _nsPrefixPattern = nsPrefixes.join('|');
_nsPrefixPattern = new RegExp(`^(${_nsPrefixPattern}):`, 'i');
if (nsNumber === 0) {
	// articles
	_nsCanonPrefix = '';
	_nsPrefixPattern = /^/;
}
const fixNamespace = (title) => {
	if (nsNumber === 0) {
		// do nothing if it's articles
		return title;
	} else if (_nsPrefixPattern.test(title)) {
		// canonize the namespace
		return title.replace(_nsPrefixPattern, _nsCanonPrefix);
	}
	// don't have a namespace
	return _nsCanonPrefix + title;
};

/**
 * Add new custom callback for finding new potential redirect titles.
 *
 * @param {Function} callback(pagename, $content, titles) => title list
 */
window.toolsRedirect = {
	SUFFIX_APPEND,
	SUFFIX_REPLACE,
	SUFFIX_SETDEFAULT,
	findRedirectCallback(callback, ...args) {
		if (callback) {
			findRedirectCallbacks.push(callback);
		} else {
			$.merge(findRedirectCallbacks, [callback, ...args]);
		}
		return this;
	},
	findRedirectBySelector(selector) {
		/* A shortcut to add CSS selectors as rule to find new potential redirect titles. */
		findRedirectCallbacks.push(() => {
			return $(selector).map((_index, element) => {
				const title = $(element).text();
				return title || null;
			});
		});
		return this;
	},
	setRedirectTextSuffix(title, suffix, flag) {
		let flag_set = false;
		let flag_append = false;
		flag ||= SUFFIX_APPEND; // default append
		flag_set = flag === SUFFIX_REPLACE;
		title = fixNamespace(title);
		if (title in pageWithRedirectTextSuffix) {
			flag_append = flag === SUFFIX_APPEND;
		} else {
			// if not exist, every flag can set
			flag_set = true;
		}
		if (flag_set) {
			pageWithRedirectTextSuffix[title] = suffix;
		} else if (flag_append) {
			pageWithRedirectTextSuffix[title] += suffix;
		}
	},
};

export const ToolsRedirect = {
	tabselem: null,
	tagselem: null,
	variants: ['zh-hans', 'zh-hant', 'zh-cn', 'zh-hk', 'zh-mo', 'zh-sg', 'zh-tw'],
	msg(key, ...args) {
		key = `toolsredirect-${key}`;
		return args.length ? mw.message.apply(mw.message, [key, ...args]).parse() : mw.message(key).plain();
	},
	init() {
		const self = this;
		const button = $('<li>')
			.addClass('mw-list-item collapsible')
			.attr('id', 'ca-redirect')
			.css('cursor', 'pointer')
			.append($('<a>').attr('title', ToolsRedirect.msg('btndesc')).text(ToolsRedirect.msg('btntitle')));
		button.on('click', (event) => {
			event.preventDefault();
			self.dialog();
		});
		$('li#ca-history').after(button);
		$('li#ca-history').after(button);
	},
	dialog() {
		const dlg = $('<div>')
			.attr('title', ToolsRedirect.msg('dlgtitle'))
			.addClass('dialog-redirect')
			.dialog({
				bgiframe: true,
				resizable: false,
				modal: true,
				width: Math.round($(window).width() * 0.8),
				position: 'center',
			});
		dlg.css('max-height', `${Math.round($(window).height() * 0.8)}px`);
		this.tabselem = $('<div>').addClass('tab-redirect').appendTo(dlg);
		this.tagselem = $('<ul>').appendTo(this.tabselem);
		this.addTabs();
		this.tabselem.tabs();
	},
	addTabs() {
		for (const kname in this.tabs) {
			if (Object.hasOwn(this.tabs, kname)) {
				if (this.tabs[kname] === null) {
					this.tabs[kname] = this[`_initTab${kname[0].charAt(0).toUpperCase()}${kname.slice(1)}`]();
				}
				const tab = this.tabs[kname];
				this.tagselem.append(tab.tag);
				this.tabselem.append(tab.cont);
			}
		}
		// default tab, autoload when dialog initiate
		this.loadView();
	},
	createTab(tabname, tabtitle, onClick) {
		const self = this;
		const tag = $('<li>').append($('<a>').attr('href', `#tab-${tabname}`).text(tabtitle));
		const cont = $('<div>').attr('id', `tab-${tabname}`);
		$('a', tag).on('click', () => {
			onClick.call(self);
		});
		return {
			tag,
			cont,
			loaded: false,
		};
	},
	_initTabView() {
		return this.createTab('view', ToolsRedirect.msg('tabviewtitle'), this.loadView);
	},
	_initTabCreate() {
		return this.createTab('create', ToolsRedirect.msg('tabcreatetitle'), this.loadCreate);
	},
	tabs: {
		view: null,
		create: null,
	},
	fix(pagenames) {
		const self = this;
		$('p.desc', this.tabs.view.cont).text(ToolsRedirect.msg('fixloading'));
		$('p[class!=desc]', this.tabs.view.cont).remove();
		this.loading(this.tabs.view.cont);
		this.bulkEditByRegex(pagenames, / \[\[.*?\]\]/, ` [[${origPageName}]]`, ToolsRedirect.msg('fixsummary')).done(
			() => {
				// delay load before the asynchronous tasks on server finished
				setTimeout(() => {
					self.loaded(self.tabs.view.cont);
					self.loadView(true);
				}, 3000);
			}
		);
	},
	create(pagenames) {
		const self = this;
		$('p.desc', this.tabs.create.cont).text(ToolsRedirect.msg('createloading'));
		$('p[class!=desc]', this.tabs.create.cont).remove();
		this.loading(this.tabs.create.cont);
		this.bulkEdit(
			pagenames,
			ToolsRedirect.msg('createtext').replace('$1', origPageName),
			ToolsRedirect.msg('createsummary').replace('$1', origPageName)
		).done(() => {
			// delay load before the asynchronous tasks on server finished
			setTimeout(() => {
				self.loaded(self.tabs.create.cont);
				self.tabs.view.loaded = false;
				self.loadCreate(true);
			}, 500);
		});
	},
	addRedirectTextSuffix(title, text) {
		if (title in pageWithRedirectTextSuffix) {
			text += pageWithRedirectTextSuffix[title];
		}
		return text;
	},
	bulkEdit(titles, text, summary) {
		const self = this;
		titles = titles.filter((v, i, arr) => {
			return arr.indexOf(v) === i;
		});
		titles = titles.join('|');
		return $.ajax(
			this.buildQuery({
				action: 'query',
				prop: 'info',
				titles,
				meta: 'tokens',
			})
		).then(({query}) => {
			const deferreds = [];
			for (const [_index, {title}] of Object.entries(query.pages)) {
				deferreds.push(
					$.ajax(
						self.buildQuery({
							action: 'edit',
							title,
							token: query.tokens.csrftoken,
							text: self.addRedirectTextSuffix(title, text),
							summary,
							tags: 'ToolsRedirect',
						})
					)
				);
			}
			return $.when(...deferreds);
		});
	},
	bulkEditByRegex(titles, regex, text, summary) {
		const self = this;
		titles = titles.filter((v, i, arr) => {
			return arr.indexOf(v) === i;
		});
		titles = titles.join('|');
		return $.ajax(
			this.buildQuery({
				action: 'query',
				prop: 'revisions',
				rvprop: 'content',
				meta: 'tokens',
				titles,
			})
		).then((data) => {
			const deferreds = [];
			for (const [_index, page] of Object.entries(data.query.pages)) {
				const content = page.revisions[0]['*'];
				const newContent = content.replace(regex, text);
				deferreds.push(
					$.ajax(
						self.buildQuery({
							action: 'edit',
							title: page.title,
							token: data.query.tokens.csrftoken,
							text: newContent,
							tags: 'ToolsRedirect',
							basetimestamp: page.revisions[0].timestamp,
							summary,
						})
					)
				);
			}
			return $.when(...deferreds);
		});
	},
	loadTabCont(tabname, callback, reload) {
		const self = this;
		const tab = this.tabs[tabname];
		if (reload) {
			tab.loaded = false;
		}
		if (!tab.loaded) {
			tab.cont.html('');
			//
			const $desc = $('<p>')
				.addClass('desc')
				.append($('<span>').addClass('desc-text').text(ToolsRedirect.msg('rediloading')))
				.appendTo(tab.cont);
			const $text = $desc.find('> .desc-text');
			callback
				.apply(this)
				.done(() => {
					$text.text(ToolsRedirect.msg(`tab${tabname}desc`));
				})
				.fail(() => {
					$text.text(ToolsRedirect.msg(`tab${tabname}notfound`));
				})
				.always(() => {
					self.addMethods($desc, [
						{
							href: '#refresh',
							title: ToolsRedirect.msg('refresh'),
							click(event) {
								event.preventDefault();
								self.loadTabCont(tabname, callback, true);
							},
						},
					]);
				});
			tab.loaded = true;
		}
	},
	loading(container) {
		if (container.prop('tagName').toLowerCase() === 'span') {
			container.addClass('mw-ajax-loader');
		} else if ($('span.mw-ajax-loader', container).length === 0) {
			$('<span>').addClass('mw-ajax-loader').appendTo(container);
		}
	},
	loaded(container) {
		if (container.prop('tagName').toLowerCase() === 'span') {
			container.removeClass('mw-ajax-loader');
		} else {
			$('span.mw-ajax-loader', container).remove();
		}
	},
	selectAll(cont) {
		$('input[type=checkbox]:not(:disabled)', cont).prop('checked', true);
	},
	selectInverse(cont) {
		$('input[type=checkbox]:not(:disabled)', cont).each((_index, element) => {
			const $element = $(element);
			$element.prop('checked', !$element.prop('checked'));
		});
	},
	selectAction(cont, cb) {
		const pagenames = [];
		$('input[type=checkbox]:checked', cont).each((_index, pagename) => {
			pagenames.push($(pagename).data('page-title'));
		});
		if (pagenames.length > 0) {
			cb.call(this, pagenames);
		}
	},
	clickAction(cont, cb) {
		const pagename = $('input[type="checkbox"]', cont).data('page-title');
		cb.call(this, [pagename]);
	},
	buildLink({title, href, click, classname}) {
		const a = $('<a>')
			.attr({
				title,
				href,
				target: '_blank',
			})
			.text(title);
		if (click) {
			a.on('click', click);
		}
		if (classname) {
			a.addClass(classname);
		}
		return $('<span>').addClass('tools-redirect_link').append(a);
	},
	addMethods($parent, methods) {
		const self = this;
		let $container = $parent.find('> .tools-redirect_methods');
		const methodExist = ({href}) => {
			return $container.find(`a[href=${JSON.stringify(href)}]`).length > 0;
		};
		if ($container.length === 0) {
			$container = $('<span>').addClass('tools-redirect_methods').appendTo($parent);
		}
		for (const method of methods) {
			if (!methodExist(method)) {
				self.buildLink(method).appendTo($container);
			}
		}
	},
	buildSelection(main, metd, mt, dsab) {
		const cont = $('<span>');
		const sele = $('<input>').attr('type', 'checkbox').appendTo(cont);
		this.buildLink(main).appendTo(cont);
		this.addMethods(cont, metd);
		sele.data('page-title', mt);
		if (dsab) {
			sele.attr('disabled', 'disabled');
		}
		return cont;
	},
	loadView(reload) {
		const $container = this.tabs.view.cont;
		this.loadTabCont(
			'view',
			function () {
				return this.loadRedirect(origPageName, $container, 0);
			},
			reload
		);
	},
	loadCreate(reload) {
		this.loadTabCont(
			'create',
			function () {
				return this.findRedirect(origPageName);
			},
			reload
		);
	},
	loadRedirect(pagename, container, deep, loaded) {
		this.loading(container);
		const self = this;
		const deferObj = $.Deferred();
		const top = deep ? $('<dl>').appendTo(container) : container;
		if (!loaded) {
			loaded = {};
			loaded[pagename] = true;
		}
		const onClickFix = function (event) {
			const entry = $(this).parents('dd, p').first();
			event.preventDefault();
			self.clickAction(entry, self.fix);
		};
		$.ajax(
			this.buildQuery({
				action: 'query',
				prop: 'redirects',
				titles: pagename,
				rdlimit: 'max',
			})
		).done(({query}) => {
			self.loaded(container);
			let has_redirect = false;
			const desc = $('p.desc', self.tabs.view.cont);
			const maximumRedirectDepth = mw.config.get('toolsRedirectMaximumRedirectDepth', 10);
			for (const [_index, page] of Object.entries(query.pages)) {
				if (!('redirects' in page)) {
					return;
				}
				const {redirects} = page;
				for (const [__index, {title}] of Object.entries(redirects)) {
					const rdtitle = title;
					const ultitle = rdtitle.replace(/ /g, '_');
					const entry = (deep ? $('<dd>') : $('<p>')).appendTo(top);
					const methods = [
						{
							href: mw.util.getUrl(ultitle, {action: 'edit'}),
							title: ToolsRedirect.msg('rediedit'),
						},
					];
					const isCycleRedirect = rdtitle in loaded;
					loaded[rdtitle] = true;
					if (!isCycleRedirect && deep) {
						methods.push({
							href: '#fix-redirect',
							title: ToolsRedirect.msg('tabviewfix'),
							click: onClickFix,
						});
					}
					const $container = self
						.buildSelection(
							{
								href: mw.util.getUrl(ultitle, {redirect: 'no'}),
								title: rdtitle,
							},
							methods,
							ultitle,
							!deep
						)
						.appendTo(entry);
					if (isCycleRedirect) {
						$container.append(`<span class="error">${ToolsRedirect.msg('errcycleredirect')}</span>`);
					} else if (deep < maximumRedirectDepth) {
						deferObj.done(() => {
							return self.loadRedirect(rdtitle, entry, deep + 1, loaded);
						});
					}
					has_redirect = true;
				}
			}
			if (has_redirect && deep === 1) {
				self.addMethods(desc, [
					{
						href: '#select-all',
						title: ToolsRedirect.msg('selectall'),
						click(event) {
							event.preventDefault();
							self.selectAll(self.tabs.view.cont);
						},
					},
					{
						href: '#select-inverse',
						title: ToolsRedirect.msg('selectinverse'),
						click(event) {
							event.preventDefault();
							self.selectInverse(self.tabs.view.cont);
						},
					},
					{
						href: '#fix-selected',
						title: ToolsRedirect.msg('tabviewfix'),
						click(event) {
							event.preventDefault();
							self.selectAction(self.tabs.view.cont, self.fix);
						},
					},
				]);
			}
			if (has_redirect) {
				deferObj.resolveWith(self);
			} else {
				deferObj.rejectWith(self);
			}
		});
		return deferObj.promise();
	},
	findVariants(pagename, titles) {
		const self = this;
		const suffixReg = /^.+?((（|[ _]\().+?([)）]))$/;
		const retTitles = [];
		const deferreds = [];
		const simpAndTrad = {
			'zh-hans': true,
			'zh-hant': true,
		};
		for (const [_index, variant] of Object.entries(this.variants)) {
			let xhr = $.ajax(
				self.buildQuery({
					action: 'parse',
					page: pagename,
					prop: 'displaytitle',
					variant,
				})
			).then(({parse}) => {
				const title = fixNamespace(parse.displaytitle);
				if (variant in simpAndTrad) {
					window.toolsRedirect.setRedirectTextSuffix(title, '\n{{简繁重定向}}', SUFFIX_APPEND);
				}
				return title;
			});
			if (isCategory) {
				xhr = xhr.then(async (origTitle) => {
					const data = await $.ajax(
						self.buildQuery({
							action: 'parse',
							text: pagename,
							prop: 'text',
							variant,
						})
					);
					const tmpTitle = $(data.parse.text['*'])
						.text()
						.replace(/(^\s*|\s*$)/g, '');
					// should not create redirect categories
					// if the conversion is already in global table,
					// or it will mess up a lot
					redirectExcludes[tmpTitle] = true;
					return origTitle;
				});
			}
			deferreds.push(xhr);
		}
		return $.when(...deferreds).then((...args) => {
			const suffixes = [];
			for (const arg of args) {
				let suffix;
				// find title suffix,
				// for example " (济南市)" to "市中区 (济南市)"
				suffix = suffixReg.exec(arg);
				suffix = suffix && suffix.length === 2 ? suffix[1] : '';
				retTitles.push(arg);
				suffixes.push(suffix);
			}
			// append suffixes
			const suffixesDedup = [...new Set(suffixes)];
			for (const suffix of suffixesDedup) {
				$.merge(
					retTitles,
					titles.map((title) => {
						title = fixNamespace(title);
						return suffixReg.test(title) ? title : title + suffix;
					})
				);
			}
			return self.findNotExists([...new Set(retTitles)]);
		});
	},
	findNotExists(titles) {
		const self = this;
		const deferreds = [];
		const excludes = new Set(['用字模式']);
		let alltitles = [];
		titles = titles.join('|');
		for (const [variant, _index] of ['zh-hans', 'zh-hant'].entries()) {
			deferreds.push(
				$.ajax(
					self.buildQuery({
						action: 'parse',
						text: titles,
						prop: 'text',
						variant,
					})
				)
			);
		}
		return $.when(...deferreds).then((...args) => {
			for (const arg of args) {
				alltitles = [
					...alltitles,
					...$(arg[0].parse.text['*'])
						.text()
						.replace(/(^\s*|\s*$)/g, '')
						.split('|'),
				];
			}
			alltitles = alltitles.filter((v, i, arr) => {
				return arr.indexOf(v) === i;
			});
			alltitles = alltitles.join('|');
			return $.ajax(
				self.buildQuery({
					action: 'query',
					prop: 'info',
					titles: alltitles,
				})
			).then(({query}) => {
				titles = [];
				for (const [pageid, page] of Object.entries(query.pages)) {
					const {title} = page;
					if (pageid < 0 && !excludes.has(title)) {
						if (title in redirectExcludes) {
							// exclude special titles
							return;
						}
						titles.push(title);
						if (isCategory) {
							const target = origPageName.replace(/^Category:/, '');
							window.toolsRedirect.setRedirectTextSuffix(
								title,
								'\n{{分类重定向|$1}}'.replace('$1', target)
							);
						}
						// only set default suffix
						window.toolsRedirect.setRedirectTextSuffix(title, '\n{{别名重定向}}', SUFFIX_SETDEFAULT);
					}
				}
				return titles;
			});
		});
	},
	findRedirect(pagename) {
		const self = this;
		const frcDeferreds = [];
		const container = this.tabs.create.cont;
		const $content = $('#mw-content-text > div.mw-parser-output');
		const deferObj = $.Deferred();
		let titles = [];
		this.loading(container);
		for (const callback of findRedirectCallbacks) {
			const ret = callback(pagename, $content, titles);
			if (typeof ret === 'string') {
				titles.push(ret);
			} else if ('done' in ret) {
				// is Deferred
				frcDeferreds.push(ret);
			} else {
				titles = [...new Set([...titles, ...ret])];
			}
		}
		// remove all empty titles
		titles = titles.map((title) => {
			return title || null;
		});
		const onClickCreate = function (event) {
			const entry = $(this).parents('p:first');
			event.preventDefault();
			self.clickAction(entry, self.create);
		};
		// handles the deferred callbacks
		$.when(...frcDeferreds)
			.then((...args) => {
				for (const ret of args) {
					if (typeof ret === 'string') {
						titles.push(ret);
					} else {
						titles = [...new Set([...titles, ...ret])];
					}
				}
				return self.findVariants(pagename, titles);
			})
			.done((fvtitles) => {
				// build HTML
				self.loaded(container);
				for (const title of fvtitles) {
					const ultitle = title.replace(' ', '_');
					const entry = $('<p>').appendTo(container);
					self.buildSelection(
						{
							href: mw.util.getUrl(ultitle, {action: 'edit', redlink: '1'}),
							title,
							classname: 'new',
						},
						[
							{
								href: '#create-redirect',
								title: ToolsRedirect.msg('tabcreatetitle'),
								click: onClickCreate,
							},
						],
						ultitle,
						false
					).appendTo(entry);
				}
				const desc = $('p.desc', container);
				if (fvtitles.length > 0) {
					self.addMethods(desc, [
						{
							href: '#select-all',
							title: ToolsRedirect.msg('selectall'),
							click(event) {
								event.preventDefault();
								self.selectAll(container);
							},
						},
						{
							href: '#select-inverse',
							title: ToolsRedirect.msg('selectinverse'),
							click(event) {
								event.preventDefault();
								self.selectInverse(container);
							},
						},
						{
							href: '#create-selected',
							title: ToolsRedirect.msg('tabcreatetitle'),
							click(event) {
								event.preventDefault();
								self.selectAction(container, self.create);
							},
						},
					]);
					deferObj.resolveWith(self, [fvtitles]);
				} else {
					deferObj.rejectWith(self, [fvtitles]);
				}
			});
		return deferObj.promise();
	},
	buildQuery: (data) => {
		const query = {
			url: `${scriptPath}/api.php`,
			dataType: 'json',
			type: 'POST',
		};
		query.data = data;
		query.data.format = 'json';
		return query;
	},
};
