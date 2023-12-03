import {type EditParams} from './generateEditParams';
import {WG_PAGE_NAME} from '../constant';
import {api} from '../api';
import {refresh} from './refreshPage';

const create = async (editParams: EditParams): Promise<void> => {
	const {targetPage, text, summary} = editParams;

	await api.create(
		WG_PAGE_NAME,
		{
			summary,
		},
		text
	);

	refresh(targetPage);
};

export {create};
