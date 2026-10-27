import App from './components/TranslateVariantsView.vue';
import {createApp} from 'vue';
import {getBody} from 'ext.gadget.Util';
import {getLangQueue} from './modules/getLangQueue';
import {translate} from './modules/util/translate';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const {wgPageName} = mw.config.get();
	if (!/^MediaWiki:[^/]+(\/zh)?$/.test(wgPageName)) {
		return;
	}

	const portletId: 'p-cactions' | 'p-tb' = $body.find('#p-cactions').length ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', translate('转换变体', '轉換變體'));

	if (element) {
		element.addEventListener('click', (): void => {
			element.remove();

			const langQueue = getLangQueue();
			const root = document.createElement('div');
			document.querySelector('#bodyContent')?.prepend(root);

			createApp(App, {wgPageName, langQueue}).mount(root);
		});
	}
});
