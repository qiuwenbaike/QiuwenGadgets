import {WG_CUR_REVISION_ID, WG_PAGE_NAME} from './constant';
import {delay} from '../../util';
import {getCurrentRevisionId} from './getCurrentRevisionId';
import {getMessage} from './i18n';

const editConflict = async (): Promise<void> => {
	let isContinue = true;

	const checkEditConflict = async (): Promise<void> => {
		const pageRevisionId: number = await getCurrentRevisionId(WG_PAGE_NAME);
		if (!pageRevisionId) {
			isContinue = false;
		} else if (pageRevisionId > WG_CUR_REVISION_ID) {
			isContinue = false;
			toastify(
				{
					node: $(getMessage('Notice')).get(0),
					close: true,
					duration: -1,
				},
				'info'
			);
		}
	};

	while (true) {
		await checkEditConflict();
		if (!isContinue) {
			break;
		}

		await delay(2 * 1000);
	}

	$('body')
		.find('#wpSave')
		.on('click', (): void => {
			isContinue = false;
		});
};

export {editConflict};
