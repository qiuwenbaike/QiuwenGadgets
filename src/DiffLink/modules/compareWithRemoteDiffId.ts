import {WG_WIKI_ID} from './constant';
import {buildLink} from './buildLink';
import {getMessage} from './i18n';
import {initMwApi} from '../../util';

const compareWithRemoteDiffId = async (diffId: number): Promise<void> => {
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (DiffLink/1.1; ${WG_WIKI_ID})`);
	const params: ApiComparePagesParams = {
		action: 'compare',
		format: 'json',
		formatversion: '2',
		prop: 'ids',
		fromrev: diffId,
		torelative: 'prev',
	};
	try {
		const response = await api.get(params);
		if (
			diffId === mw.config.get('wgDiffNewId') &&
			response['compare']?.fromrevid === mw.config.get('wgDiffOldId')
		) {
			buildLink(false, diffId);
		}
	} catch {
		toastify(
			{
				text: getMessage('Network error'),
				close: true,
				duration: -1,
			},
			'error'
		);
	}
};

export {compareWithRemoteDiffId};
