import {editPage} from './editPage';
import {getMessage} from './i18n';
import {oouiConfirmWithStyle} from '~/util';

const addListener = ($element: JQuery): void => {
	const clickListener = async (event: JQuery.ClickEvent): Promise<void> => {
		event.preventDefault();

		const isConfirm: boolean = await oouiConfirmWithStyle(getMessage('Confirm'));
		if (!isConfirm) {
			return;
		}

		editPage();
	};

	$element.on('click', clickListener);
};

export {addListener};
