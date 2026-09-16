import * as OPTIONS from '~/AjaxLogin/options.json';
import {type App as VueApp, createApp, reactive} from 'vue';
import App from '../App.vue';
import {getMessage} from './i18n';

const {skin, wgAction, wgPageName} = mw.config.get();
const isCitizen: boolean = skin === 'citizen';
const loginURL: string = mw.util.getUrl('Special:UserLogin', {
	returnto: wgPageName,
});
const registerURL: string = mw.util.getUrl('Special:CreateAccount', {
	returnto: wgPageName,
});

interface DialogState {
	open: boolean;
}

const initDialog = ($body: JQuery<HTMLBodyElement>): void => {
	const state: DialogState = reactive({open: false});

	const root: HTMLElement = document.createElement('div');
	$body.append(root);

	const triggerLogin = (): void => {
		const $element: JQuery<HTMLAnchorElement> = $(OPTIONS.loginElementSelector);
		if ($element.length && mw.config.get(OPTIONS.configKey) === true) {
			$element.trigger('click');
		} else {
			location.href = loginURL;
		}
	};

	const app: VueApp<Element> = createApp(App, {
		state,
		loginURL,
		registerURL,
		triggerLogin,
		'onUpdate:open': (open: boolean): void => {
			state.open = open;
		},
	});
	app.mount(root);

	const openDialog = (): void => {
		state.open = !state.open;
	};

	const $caViewsource: JQuery = $body.find('#ca-viewsource');
	if ($caViewsource.length) {
		const editIcon: string = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : '';
		$caViewsource
			.attr('id', 'ca-edit')
			.find('a')
			.attr('aria-label', getMessage('DialogMessage'))
			.html(editIcon + getMessage('Edit'))
			.on('click', (event: JQuery.ClickEvent): void => {
				event.preventDefault();
				openDialog();
			});
	}

	if (['edit', 'submit'].includes(wgAction)) {
		openDialog();
	}
};

export {initDialog};
