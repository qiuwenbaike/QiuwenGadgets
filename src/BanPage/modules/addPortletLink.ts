import {editPage} from './editPage';
import {getMessage} from './i18n';
import {oouiConfirmWithStyle} from '../../util';

const addPortletLink = (): void => {
	const element: HTMLLIElement | null = mw.util.addPortletLink(
		document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb',
		'#',
		getMessage('Ban'),
		't-banpage'
	);
	if (!element) {
		return;
	}

	$(element)
		.find('a')
		.on('click', async (event: JQuery.ClickEvent): Promise<void> => {
			event.preventDefault();

			const isConfirm: boolean = await oouiConfirmWithStyle(getMessage('Confirm'));
			if (!isConfirm) {
				return;
			}

			editPage();
		});
};

export {addPortletLink};
