import {type App as VueApp, createApp, reactive} from 'vue';
import App from '../App.vue';
import {getMessage} from './i18n';

const {skin, wgAction} = mw.config.get();
const isCitizen: boolean = skin === 'citizen';

interface DialogState {
	open: boolean;
}

const initDialog = (): void => {
	const state: DialogState = reactive({open: false});

	const root: HTMLElement = document.createElement('div');
	document.body.append(root);

	const app: VueApp<Element> = createApp(App, {
		state,
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
			link.setAttribute('aria-label', getMessage('DialogMessage'));

			if (isCitizen) {
				const editIcon: HTMLSpanElement = document.createElement('span');
				editIcon.className = 'citizen-ui-icon mw-ui-icon-wikimedia-edit';
				link.replaceChildren(editIcon, getMessage('Edit'));
			} else {
				link.replaceChildren(getMessage('Edit'));
			}

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
