import {$noticeMessage} from './noticeMessage';
import {delay} from 'ext.gadget.Util';
import {getCurrentRevisionId} from './getCurrentRevisionId';
import {toastify} from 'ext.gadget.Toastify';

const editConflict = async ($body: JQuery<HTMLBodyElement>): Promise<void> => {
	let isContinue: boolean = true;

	$body.find('input[name="wpSave"]').on('click', (): void => {
		isContinue = false;
	});

	const checkEditConflict = async (): Promise<void> => {
		const {wgCurRevisionId, wgPageName} = mw.config.get();
		const pageRevisionId: number = await getCurrentRevisionId(wgPageName);
		if (!pageRevisionId) {
			isContinue = false;
		} else if (pageRevisionId > wgCurRevisionId) {
			isContinue = false;
			toastify(
				{
					node: $noticeMessage.get(0),
					close: true,
					duration: -1,
				},
				'info'
			);
		}
	};

	while (true) {
		// If !isContinue triggered (by onClick) then break
		if (!isContinue) {
			break;
		}

		await checkEditConflict();

		// If !isContinue triggered (by checkEditConflict) then break
		if (!isContinue) {
			break;
		}

		await delay(3 * 1000);
	}
};

export {editConflict};
