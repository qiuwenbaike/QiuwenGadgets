import {type App as VueApp, createApp, reactive} from 'vue';
import App from '../App.vue';
import {getMessage} from './i18n';

const {skin, wgAction} = mw.config.get();
const isCitizen: boolean = skin === 'citizen';

interface DialogState {
	open: boolean;
}

const initDialog = ($body: JQuery<HTMLBodyElement>): void => {
	const state: DialogState = reactive({open: false});

	const root: HTMLElement = document.createElement('div');
	$body.append(root);

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
