import {type EditParams} from './generateEditParams';
import {api} from '../api';
import {refresh} from './refreshPage';

const create = async (editParams: EditParams): Promise<void> => {
	const {targetPage, text, summary, wgPageName} = editParams;

	await api.create(
		wgPageName,
		{
			summary,
		},
		text
	);

	refresh(targetPage);
};

export {create};
