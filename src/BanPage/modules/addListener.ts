import {editPage} from './editPage';
import {getMessage} from './i18n';
import {oouiConfirmWithStyle} from 'ext.gadget.Util';

const addListener = ($element: JQuery): void => {
	const clickListener = async (event: JQuery.ClickEvent): Promise<void> => {
		event.preventDefault();

		const isConfirm: boolean = await oouiConfirmWithStyle(getMessage('Confirm'));
		if (!isConfirm) {
			return;
		}

		void editPage();
	};

	$element.on('click', (event): void => {
		void clickListener(event);
	});
};

export {addListener};
