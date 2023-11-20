import {
	URL_DIFF,
	URL_HIGHLIGHT,
	URL_HILIGHT,
	URL_NO_PERM,
	URL_USE,
	URL_WITH_CSS,
	URL_WITH_JS,
	URL_WITH_MODULE,
	WG_ACTION,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_NAMESPACE_NUMBER,
	WG_PAGE_NAME,
	WG_SCRIPT,
	WG_USER_NAME,
} from './constant';

const core = (): void => {
	const $body = $('body'),
		$document = $(document);

	/**
	 * &withCSS= and &withJS= URL parameters
	 * Allow to try custom scripts from MediaWiki space
	 * without editing personal .css or .js files
	 */
	if (URL_WITH_CSS || URL_WITH_JS || URL_WITH_MODULE) {
		if (URL_WITH_CSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(URL_WITH_CSS)) {
			mw.loader.load(
				mw.util.getUrl(URL_WITH_CSS, {
					action: 'raw',
					ctype: 'text/css',
					maxage: '3600',
					smaxage: '3600',
				}),
				'text/css'
			);
		}
		if (URL_WITH_JS && /^MediaWiki:[^#%&<=>]*\.js$/.test(URL_WITH_JS)) {
			mw.loader.load(
				mw.util.getUrl(URL_WITH_JS, {
					action: 'raw',
					ctype: 'text/javascript',
					maxage: '3600',
					smaxage: '3600',
				})
			);
		}
		if (URL_WITH_MODULE && /^ext\.[^,|]+$/.test(URL_WITH_MODULE)) {
			mw.loader.load(URL_WITH_MODULE);
		}
	}
	/**
	 * Load CSS and JS files temporarily through URL.
	 * &use=File1.css|File2.css|File3.js
	 */
	if (URL_USE) {
		const wgUserName: string = mw.util.escapeRegExp(WG_USER_NAME ?? '');
		const REGEX_FILE = new RegExp(
			`^(?:MediaWiki:${wgUserName ? `|User:${wgUserName}/` : ''})[^&<>=%#]*\\.(js|css)$`
		);
		const REGEX_EXT = /^ext\.[^,]+$/;
		const path = `${WG_SCRIPT}?action=raw&ctype=text/`;
		for (const useFile of URL_USE.split('|')) {
			const name: string = useFile.toString().trim();
			const what: string[] = REGEX_FILE.exec(name) || ['', ''];
			switch (what[1]) {
				case 'js':
					mw.loader.load(`${path}javascript&title=${encodeURIComponent(name)}`);
					break;
				case 'css':
					mw.loader.load(`${path}css&title=${encodeURIComponent(name)}`);
					break;
				default:
					if (REGEX_EXT.test(name)) {
						mw.loader.load(name);
					}
			}
		}
	}
	/**
	 * Load warning(s) when user has no access to page
	 */
	if (URL_NO_PERM) {
		switch (URL_NO_PERM) {
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
		const newUrl: string = location.href.replace(/[?&]noperm=[0-9]+/, '');
		history.pushState({}, document.title, newUrl);
	}
	/**
	 * Add highlight to revisions when using `&hilight=revid` or `&highlight=revid`
	 */
	const highlight: string | null = URL_HIGHLIGHT || URL_HILIGHT;
	if (WG_ACTION === 'history' && highlight) {
		for (const version of highlight.split(',')) {
			$(`input[name=oldid][value=${version}]`).parent().addClass('not-patrolled');
		}
	}
	/**
	 * Add target="blank" to external links
	 */
	$body.find('a.external, a[rel="mw:ExtLink"]').filter((_index, element): boolean => {
		const self: HTMLAnchorElement = element as HTMLAnchorElement;
		const linkHref: string | undefined = $(element).attr('href');
		if (linkHref) {
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
	const permaLink: HTMLElement | null = document.querySelector('#t-permalink');
	if (permaLink) {
		const permaLinkFirstChild: HTMLAnchorElement = permaLink.firstChild as HTMLAnchorElement;
		permaLinkFirstChild.href = permaLinkFirstChild.href.replace(/title=[^&]*&/, '');
	}
	/**
	 * Open search results in a new tab or window
	 * when holding down the Ctrl key (by Timeshifter)
	 */
	$body
		.find('#searchform, #searchbox, #search, .search-types, #search-types')
		.on('keyup keydown mousedown', function ({ctrlKey, metaKey}): void {
			$(this).attr('target', ctrlKey || metaKey ? '_blank' : '');
		});
	/**
	 * Cleanup title for all pages
	 */
	const titleCleanUp = (): void => {
		const oldTitleTag: string = $document.find('title').text();
		const oldPageTitle: string = $body.find('.firstHeading').text();
		const newPageTitle: string = new mw.Title(WG_PAGE_NAME).toText();
		$document.find('title').text(oldTitleTag.replace(oldPageTitle, newPageTitle));
		$body.find('.firstHeading').text(oldPageTitle.replace(oldPageTitle, newPageTitle));
	};
	if (WG_ACTION === 'view' && [2, 3, 6, 118].includes(WG_NAMESPACE_NUMBER) && !URL_DIFF) {
		titleCleanUp();
	}
	/**
	 * Display title=(.*) of <span class="inline-unihan"> after them.
	 * (beta test)
	 */
	// Do not display on Special Pages
	if (WG_NAMESPACE_NUMBER >= 0) {
		$body.find('attr, .inline-unihan').each((_index: number, element: HTMLElement): void => {
			const $element: JQuery = $(element);
			const title: string | undefined = $element.attr('title');
			if (!title) {
				return;
			}
			const popup: OO.ui.PopupWidget = new OO.ui.PopupWidget({
				$content: $('<p>').text(title),
				label: window.wgULS('注释：', '注釋：'),
				anchor: true,
				head: true,
				padded: true,
			});
			$element.append(popup.$element).on('click', () => {
				popup.toggle();
			});
		});
	}
	/* 修正折叠后定位变化 */
	if (location.hash) {
		location.href = location.hash;
	}
	/* 临时：禁止用户查看用户创建日志 */
	if (WG_CANONICAL_SPECIAL_PAGE_NAME === 'Log') {
		$body.find('input[name="wpfilters[]"][value=newusers]').attr('checked', 0);
		const $element = $body.find('input[name="wpfilters[]"][value=newusers]').parents('.oo-ui-labelElement').get(0);
		if ($element) {
			$element.remove();
		}
	}
	/* 调整折叠按钮的颜色 */
	const $toggle = $body.find('.mw-collapsible-toggle, .gadget-collapsible__toggler');
	if ($toggle.length && $toggle.parent()[0]?.style.color) {
		$toggle.find('a').css('color', 'inherit');
	}
};

export {core};
