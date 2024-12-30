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
		smaxage: 600,
		maxage: 600,
	};

	if (pccontinue) {
		params.pccontinue = pccontinue;
	}

	const data = await api.get(params);

	return data;
};

const getContributors = async (titles: string) => {
	const pclist: string[] = [];
	let pccontinue: string | undefined;

	while (true) {
		const data = await queryContributors(titles, pccontinue);

		try {
			if (data['query'] && data['query'].pages) {
				for (const page of data['query'].pages) {
					const {contributors} = page as {
						contributors: {userid: number; name: string}[];
					};

					if (contributors && contributors[0] && contributors[0].name) {
						for (const {name} of contributors) {
							pclist[pclist.length] = name;
						}
					}
				}
			} else {
				break;
			}

			if (data['continue'] && data['continue'].pccontinue) {
				({pccontinue} = data['continue'] as {pccontinue: string});
			} else {
				break;
			}
		} catch {
			break;
		}
	}

	return uniqueArray(pclist);
};

export {getContributors};
