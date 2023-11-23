import {WG_WIKI_ID} from './constant';
import {buildLink} from './buildLink';
import {getMessage} from './i18n';
import {initMwApi} from '../../util';

const compareWithRemoteDiffId = (diffId: number): void => {
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (DiffLink/2.0; ${WG_WIKI_ID})`);
	const params: ApiComparePagesParams = {
		action: 'compare',
		format: 'json',
		formatversion: '2',
		prop: 'ids',
		fromrev: diffId,
		torelative: 'prev',
	};
	api.get(params)
		.then((response) => {
			if (
				diffId === mw.config.get('wgDiffNewId') &&
				response['compare']?.fromrevid === mw.config.get('wgDiffOldId')
			) {
				buildLink(false, diffId);
			}
		})
		.fail(() => {
			toastify(
				{
					text: getMessage('Network error'),
					close: true,
					duration: -1,
				},
				'error'
			);
		});
};

export {compareWithRemoteDiffId};
