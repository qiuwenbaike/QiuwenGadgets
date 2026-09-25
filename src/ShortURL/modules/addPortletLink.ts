import {type App as VueApp, createApp} from 'vue';
import App from '../App.vue';
import {addEventListenerWithRemover} from 'ext.gadget.Util';
import {getMessage} from './i18n';
import {getShortDomains} from './util/getShortDomains';

const {skin, wgUserName} = mw.config.get();
const domains = getShortDomains();

let portletLinkEventListener: ReturnType<typeof addEventListenerWithRemover> = {
	remove: (): void => {},
};

const openDialog = (items: {label: string; text: string}[]): void => {
	const root = document.createElement('div');
	document.body.append(root);

	const app: VueApp<Element> | null = createApp(App, {
		open: true,
		items,
		onClose: (): void => {
			app?.unmount();
			root.remove();
		},
	});
	app.mount(root);
};

const addPortletLink = (link: string, permaLink: string): void => {
	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	let portletLink: HTMLLIElement | null = document.querySelector('#t-shortlink');
	portletLink ||= mw.util.addPortletLink(
		portletId,
		'#',
		getMessage('Share URL for the page'),
		't-shortlink',
		getMessage('Show URL')
	);

	if (portletLink) {
		const portletLinkClickListener = (event: MouseEvent): void => {
			event.preventDefault();
			const items = [
				{label: getMessage('Page URL'), text: location.href},
				{label: getMessage('Permanent URL'), text: `https://${location.host}${permaLink}`},
			];
			if (wgUserName) {
				for (const [i, domain] of domains.entries()) {
					items.push({label: `${getMessage('Short URL')}${i + 1}`, text: `https://${domain}${link}`});
				}
			}
			openDialog(items);
		};

		portletLinkEventListener.remove();
		portletLinkEventListener = addEventListenerWithRemover({
			target: (portletLink.firstElementChild ?? portletLink) as HTMLElement,
			type: 'click',
			listener: portletLinkClickListener,
		});

		if (skin === 'citizen' && !$(portletLink).find('#mw-ui-icon-wikimedia-shortlink').length) {
			$(portletLink)
				.find('a')
				.prepend(
					'<span id="mw-ui-icon-wikimedia-shortlink" class="citizen-ui-icon mw-ui-icon-link mw-ui-icon-wikimedia-link"></span>'
				);
		}
	}
};

export {addPortletLink};
