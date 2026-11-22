import {getMessage} from './i18n';

const {skin, wgAction} = mw.config.get();
const isCitizen: boolean = skin === 'citizen';
const helpURL: string = 'https://www.qiuwenbaike.cn/wiki/H:RNRS';
const verifyURL: string = `${mw.util.getUrl('Special:Preferences')}#mw-input-wprnrshook-module`;

const openDialog = async (): Promise<void> => {
	try {
		const moduleName = 'ext.gadget.NoticeDialog';
		const require = await mw.loader.using(moduleName);
		const {showNoticeDialog} = require(moduleName) as typeof import('ext.gadget.NoticeDialog');

		showNoticeDialog({
			title: getMessage('DialogTitle'),
			message: getMessage('DialogMessage'),
			cancelLabel: getMessage('Cancel'),
			helpLabel: getMessage('Help'),
			helpURL,
			primary: {
				label: getMessage('Verify'),
				onClick: (): void => {
					location.href = verifyURL;
				},
			},
		});
	} catch (error) {
		// `ext.gadget.NoticeDialog` may be unknown on wikis where the gadget has not been deployed yet.
		// Fall back to a native confirm so the portlet link and the auto-open on edit still work.
		mw.log.warn('[VerifyToEdit] ext.gadget.NoticeDialog is unavailable; falling back to window.confirm.', error);
		if (window.confirm(`${getMessage('DialogTitle')}\n\n${getMessage('DialogMessage')}`)) {
			location.href = verifyURL;
		}
	}
};

const initDialog = (): void => {
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
				void openDialog();
			});
		}
	}

	if (['edit', 'submit'].includes(wgAction)) {
		void openDialog();
	}
};

export {initDialog};
