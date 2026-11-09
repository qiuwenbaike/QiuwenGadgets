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

const initDialog = (): void => {
	const state: DialogState = reactive({open: false});

	const root: HTMLElement = document.createElement('div');
	document.body.append(root);

	const triggerLogin = (): void => {
		location.href = loginURL;
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

	const caViewsource: HTMLElement | null = document.querySelector('#ca-viewsource');
	if (caViewsource) {
		caViewsource.id = 'ca-edit';

		const link: HTMLAnchorElement | null = caViewsource.querySelector('a');
		if (link) {
			link.replaceChildren();
			link.setAttribute('aria-label', getMessage('DialogMessage'));

			if (isCitizen) {
				const editIcon: HTMLSpanElement = document.createElement('span');
				editIcon.className = 'citizen-ui-icon mw-ui-icon-wikimedia-edit';
				link.append(editIcon);
			}

			link.append(getMessage('Edit'));
			link.addEventListener('click', (event: MouseEvent): void => {
				event.preventDefault();
				openDialog();
			});
		}
	}

	if (['edit', 'submit'].includes(wgAction)) {
		openDialog();
	}
};

export {initDialog};
