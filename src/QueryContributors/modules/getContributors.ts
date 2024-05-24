import {api} from './api';
import {uniqueArray} from 'ext.gadget.Util';

const queryContributors = async (titles: string, pccontinue?: string) => {
	const params: ApiQueryContributorsParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'contributors',
		pcexcludegroup: ['bot'],
		pclimit: 5000,
		titles,
	};

	if (pccontinue) {
		params.pccontinue = pccontinue;
	}

	const data = await api.post(params);

	return data;
};

const getContributors = async (titles: string) => {
	const pclist: string[] = [];
	let pccontinue: string | undefined;

	while (true) {
		const data = await queryContributors(titles, pccontinue);

		for (const page of data['query'].pages) {
			const {contributors} = page as {
				contributors: {userid: number; name: string}[];
			};

			for (const {name} of contributors) {
				pclist[pclist.length] = name;
			}
		}

		if (data['continue'] && data['continue'].pccontinue) {
			({pccontinue} = data['continue'] as {pccontinue: string});
		} else {
			break;
		}
	}

	return uniqueArray(pclist);
};

export {getContributors};
