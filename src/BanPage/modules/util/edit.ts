import {type EditParams} from './generateEditParams';
import {WG_PAGE_NAME} from '../constant';
import {api} from '../api';
import {refresh} from './refreshPage';

const edit = async (editParams: EditParams): Promise<void> => {
	const {targetPage, text, summary} = editParams;

	await api.edit(WG_PAGE_NAME, () => {
		return {
			text,
			summary,
			minor: true,
		};
	});

	refresh(targetPage);
};

export {edit};
