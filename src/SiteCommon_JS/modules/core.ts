export const core = (): void => {
	/**
	 * &withCSS= and &withJS= URL parameters
	 * Allow to try custom scripts from MediaWiki space
	 * without editing personal .css or .js files
	 */
	if (mw.util.getParamValue('withCSS') || mw.util.getParamValue('withJS') || mw.util.getParamValue('withModule')) {
		const extraCSS: string | null = mw.util.getParamValue('withCSS');
		const extraJS: string | null = mw.util.getParamValue('withJS');
		const extraModule: string | null = mw.util.getParamValue('withModule');
		if (extraCSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(extraCSS)) {
			mw.loader.load(
				mw.util.getUrl(extraCSS, {
					action: 'raw',
					ctype: 'text/css',
					maxage: '3600',
					smaxage: '3600',
				}),
				'text/css'
			);
		}
		if (extraJS && /^MediaWiki:[^#%&<=>]*\.js$/.test(extraJS)) {
			mw.loader.load(
				mw.util.getUrl(extraJS, {
					action: 'raw',
					ctype: 'text/javascript',
					maxage: '3600',
					smaxage: '3600',
				})
			);
		}
		if (extraModule && /^ext\.[^,|]+$/.test(extraModule)) {
			mw.loader.load(extraModule);
		}
	}
	/**
	 * Load CSS and JS files temporarily through URL.
	 * &use=File1.css|File2.css|File3.js
	 */
	const useFiles: string | null = mw.util.getParamValue('use');
	if (useFiles) {
		const wgUserName: string = mw.util.escapeRegExp(mw.config.get('wgUserName') ?? '');
		const FileRegex = new RegExp(
			`^(?:MediaWiki:${wgUserName ? `|User:${wgUserName}/` : ''})[^&<>=%#]*\\.(js|css)$`
		);
		const ExtRegex = /^ext\.[^,]+$/;
		const path = `${mw.config.get('wgScript')}?action=raw&ctype=text/`;
		for (const [useFile, _index] of useFiles.split('|').entries()) {
			const name = useFile.toString().trim();
			const what = FileRegex.exec(name) || ['', ''];
			switch (what[1]) {
				case 'js':
					mw.loader.load(`${path}javascript&title=${encodeURIComponent(name)}`);
					break;
				case 'css':
					mw.loader.load(`${path}css&title=${encodeURIComponent(name)}`);
					break;
				default:
					if (ExtRegex.test(name)) {
						mw.loader.load(name);
					}
			}
		}
	}
	/**
	 * Load warning(s) when user has no access to page
	 */
	const locationHref = location.href.toString();
	const noPerm = mw.util.getParamValue('noperm');
	if (noPerm) {
		switch (noPerm) {
			case '0':
				mw.notify(
					window.wgULS(
						'因技术原因，您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。',
						'因技術原因，您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。'
					),
					{tag: 'noPerm', type: 'error'}
				);
				break;
			case '1':
				mw.notify(
					window.wgULS(
						'您没有权限访问相关页面。若您是资深编者，请与求闻百科技术团队联系，以获取权限。',
						'您沒有權限訪問相關頁面。若您是資深編者，請與求聞百科技術團隊聯系，以獲取權限。'
					),
					{tag: 'noPerm', type: 'error'}
				);
				break;
			case '2':
				mw.notify(
					window.wgULS(
						'您的网络环境存在风险，请登录后继续使用。若您没有求闻百科账号，请注册后登录。',
						'您的網路環境存在風險，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。'
					),
					{tag: 'noPerm', type: 'warn'}
				);
				break;
			case '3':
				mw.notify(
					window.wgULS(
						'相关功能仅向注册用户开放，请登录后继续使用。若您没有求闻百科账号，请注册后登录。',
						'相關功能僅向注冊用戶開放，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。'
					),
					{tag: 'noPerm', type: 'warn'}
				);
				break;
			default:
				mw.notify(
					window.wgULS(
						'您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。',
						'您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。'
					),
					{tag: 'noPerm', type: 'error'}
				);
		}
		const newURL = locationHref.replace(/[?&]noperm=[0-9]+/, '');
		history.pushState({}, document.title, newURL);
	}
	/**
	 * Add highlight to revisions when using `&hilight=revid` or `&highlight=revid`
	 */
	const highlight = mw.util.getParamValue('hilight') || mw.util.getParamValue('highlight');
	if (mw.config.get('wgAction') === 'history' && highlight) {
		for (const [version, _index] of highlight.split(',').entries()) {
			$(`input[name=oldid][value=${version}]`).parent().addClass('not-patrolled');
		}
	}
	/**
	 * Add target="blank" to external links
	 */
	$('a.external, a[rel="mw:ExtLink"]').filter((_index, element) => {
		const self: HTMLAnchorElement = element as HTMLAnchorElement;
		const linkHref = $(element).attr('href');
		if (linkHref !== undefined) {
			const hrefSplit: string[] = linkHref.split('/');
			if (hrefSplit.length < 3 || hrefSplit[2] === location.host) {
				return false;
			}
		}
		if (self.href.includes(`${location.protocol}//${location.hostname}`)) {
			self.target = '_blank';
			if (!self.rel.includes('noopener')) {
				self.rel += ' noopener';
			}
			if (!self.rel.includes('noreferrer')) {
				self.rel += ' noreferrer';
			}
		}
		return true;
	});
	/**
	 * Remove title=* from permalink
	 */
	const permaLink = document.querySelector('#t-permalink');
	if (permaLink) {
		const permaLinkFirstChild: HTMLAnchorElement = permaLink.firstChild as HTMLAnchorElement;
		permaLinkFirstChild.href = permaLinkFirstChild.href.replace(/title=[^&]*&/, '');
	}
	/**
	 * Open search results in a new tab or window
	 * when holding down the Ctrl key (by Timeshifter)
	 */
	$('#searchform, #searchbox, #search, .search-types, #search-types').on(
		'keyup keydown mousedown',
		function ({ctrlKey, metaKey}) {
			$(this).attr('target', ctrlKey || metaKey ? '_blank' : '');
		}
	);
	/**
	 * Cleanup title for all pages
	 */
	const titleCleanUp = () => {
		const oldTitleTag: string = $('title').text();
		const oldPageTitle: string = $('.firstHeading').text();
		const newPageTitle: string = new mw.Title(mw.config.get('wgPageName')).toText();
		$('title').text(oldTitleTag.replace(oldPageTitle, newPageTitle));
		$('.firstHeading').text(oldPageTitle.replace(oldPageTitle, newPageTitle));
	};
	if (
		mw.config.get('wgAction') === 'view' &&
		[2, 3, 6, 118].includes(mw.config.get('wgNamespaceNumber')) &&
		!location.href.includes('diff=')
	) {
		titleCleanUp();
	}
	/**
	 * Display title=(.*) of <span class="inline-unihan"> after them.
	 * (beta test)
	 */
	// Do not display on Special Pages
	if (!(mw.config.get('wgNamespaceNumber') < 0)) {
		$('attr, .inline-unihan').each((_index: number, element: HTMLElement): void => {
			const elementTitle: string = element.title;
			if (!elementTitle) {
				return;
			}
			const popup = new OO.ui.PopupWidget({
				$content: $('<p>').text(elementTitle),
				padded: true,
				anchor: true,
				head: true,
				label: window.wgULS('注释：', '注釋：'),
			});
			$(element).append(popup.$element);
			$(element).on('click', () => {
				popup.toggle();
			});
		});
	}
	/* 修正折叠后定位变化 */
	if (location.hash) {
		location.href = location.hash;
	}
	/* 临时：禁止用户查看用户创建日志 */
	if (mw.config.get('wgCanonicalSpecialPageName') === 'Log') {
		$('input[name="wpfilters[]"][value=newusers]').attr('checked', 0);
		$('input[name="wpfilters[]"][value=newusers]').parent().parent().parent().parent().remove();
	}
	/* 调整折叠按钮的颜色 */
	const $toggle = $('.mw-collapsible-toggle');
	if ($toggle.length > 0 && $toggle.parent()[0]?.style.color) {
		$toggle.find('a').css('color', 'inherit');
	}
};
