import {getMessage} from './i18n';

const {skin, wgAction, wgPageName} = mw.config.get();
const isCitizen: boolean = skin === 'citizen';
const loginURL: string = mw.util.getUrl('Special:UserLogin', {
	returnto: wgPageName,
});
const registerURL: string = mw.util.getUrl('Special:CreateAccount', {
	returnto: wgPageName,
});
const helpURL: string = 'https://www.qiuwenbaike.cn/wiki/H:LOGIN';

const openDialog = async (): Promise<void> => {
	const moduleName = 'ext.gadget.NoticeDialog';
	const require = await mw.loader.using(moduleName);
	const {showNoticeDialog} = require(moduleName) as typeof import('ext.gadget.NoticeDialog');

	showNoticeDialog({
		title: getMessage('DialogTitle'),
		message: getMessage('DialogMessage'),
		cancelLabel: getMessage('Cancel'),
		helpLabel: getMessage('Help'),
		helpURL,
		actions: [
			{
				label: getMessage('Register'),
				onClick: (): void => {
					location.href = registerURL;
				},
			},
			{
				label: getMessage('Login'),
				onClick: (): void => {
					location.href = loginURL;
				},
			},
		],
	});
};

const initDialog = (): void => {
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
				void openDialog();
			});
		}
	}

	if (['edit', 'submit'].includes(wgAction)) {
		void openDialog();
	}
};

export {initDialog};
