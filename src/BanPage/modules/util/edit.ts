import {type EditParams} from './generateEditParams';
import {api} from '../api';
import {refresh} from './refreshPage';

const edit = async (editParams: EditParams): Promise<void> => {
	const {targetPage, text, summary, wgPageName} = editParams;

	await api.edit(wgPageName, () => {
		return {
			text,
			summary,
			action: 'edit',
			minor: true,
		};
	});

	refresh(targetPage);
};

export {edit};
