/*! Twinkle.js - twinkleclose.ts */
import {createApp, h} from 'vue';
import TwCloseDialog from './ui/TwCloseDialog.vue';
import {uls} from './utils/useUls';

/**
 * twinkleclose.ts: XFD closing module
 * Mode of invocation: Links after section heading
 * Active on: AfD dated archive pages
 * Config directives in: TwinkleConfig
 *
 * Dialog rendering and the closing logic (`evaluate` and `callbacks`) live in
 * `ui/TwCloseDialog.vue`; this file provides the module entry, the close link
 * setup and the dialog data preparation.
 */
interface TwinkleClose {
	(): void;
	callback: (title: string, section: string, noop: boolean) => void;
}

declare const Twinkle: import('./ui/twinkleGlobal').TwinkleGlobalBase & {
	getPref: (key: string) => string;
	close?: TwinkleClose;
};

const $body = $('body');

const twinkleclose = (() => {
	if (
		Twinkle.getPref('XfdClose') === 'hide' ||
		!/^Qiuwen([_ ]talk)?:存废讨论\/记录(?:\/\d+){3}$/.test(mw.config.get('wgPageName'))
	) {
		return;
	}
	mw.hook('wikipage.content').add((item) => {
		if (item.attr('id') === 'mw-content-text') {
			addLinks();
		}
	});
}) as TwinkleClose;

const addLinks = (): void => {
	const spanTag = (color: string, content: string): HTMLSpanElement => {
		const span = document.createElement('span');
		span.style.color = color;
		span.appendChild(document.createTextNode(content));
		return span;
	};
	$body
		.find(
			'h1:has(.mw-headline),h2:has(.mw-headline),h3:has(.mw-headline),h4:has(.mw-headline),h5:has(.mw-headline),h6:has(.mw-headline)'
		)
		.each((index, element) => {
			element.dataset['section'] = String(index + 1);
		});
	const selector = ':has(.mw-headline a:only-of-type):not(:has(+ div.NavFrame))';
	const titles = $body.find('#bodyContent').find(`h2${selector}:not(:has(+ p + h3)), h3${selector}`); // really needs to work on
	const delNode = document.createElement('strong');
	const delLink = document.createElement('a');
	delLink.appendChild(spanTag('Black', '['));
	delLink.appendChild(spanTag('Red', uls('关闭讨论', '關閉討論')));
	delLink.appendChild(spanTag('Black', ']'));
	delNode.appendChild(delLink);
	for (const current of titles) {
		const headlinehref = $(current)
			.find('.mw-headline a:not(.ext-discussiontools-init-section-subscribe-link)')
			.attr('href');
		if (headlinehref !== undefined) {
			let title: string | null = null;
			if (headlinehref.includes('redlink=1')) {
				title = headlinehref.slice(19, -22);
			} else {
				const m = headlinehref.match(/\/wiki\/([^?]+)/);
				if (m !== null) {
					title = m[1] ?? null;
				}
			}
			if (title !== null) {
				const normalized = decodeURIComponent(title).replace(/_/g, ' '); // Normalize for using in interface and summary
				const pagenotexist = $(current).find('.mw-headline a').hasClass('new');
				const section = current.dataset['section'];
				const [node] = current.querySelectorAll('.mw-headline');
				if (!node || section === undefined) {
					continue;
				}
				node.appendChild(document.createTextNode(' '));
				const tmpNode = delNode.cloneNode(true);
				const anchor = tmpNode.firstChild as HTMLAnchorElement;
				anchor.href = `#${section}`;
				$(anchor).on('click', () => {
					twinkleclose.callback(normalized, section, pagenotexist);
					return false;
				});
				node.appendChild(tmpNode);
			}
		}
	}
};

twinkleclose.callback = (title, section, noop) => {
	const root = document.createElement('div');
	document.body.append(root);
	const app = createApp({
		render: () => {
			return h(TwCloseDialog, {
				title,
				section: section ?? '',
				initialNoop: noop,
				footerLinks: [
					{text: '存废讨论设置', href: mw.util.getUrl('H:TW/PREF#close')},
					{text: 'Twinkle帮助', href: mw.util.getUrl('H:TW/DOC#close')},
					{text: uls('反馈意见', '回報意見'), href: mw.util.getUrl('HT:TW')},
				],
				onClose: () => {
					app.unmount();
					root.remove();
				},
			});
		},
	});
	app.mount(root);
};

Twinkle.close = twinkleclose;
Twinkle.addInitCallback(Twinkle.close, 'close');

export {};
