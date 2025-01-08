import {queryContributors} from './queryContributors';
import {uniqueArray} from 'ext.gadget.Util';

const getContributors = async (titles: string) => {
	const pclist: string[] = [];
	let pccontinue: string | undefined;

	while (true) {
		const data = await queryContributors(titles, pccontinue);

		try {
			if (data['query']?.pages) {
				for (const page of data['query'].pages) {
					const {contributors} = page as {
						contributors: {userid: number; name: string}[];
					};

					if (contributors && contributors[0] && contributors[0]?.name) {
						for (const {name} of contributors) {
							pclist[pclist.length] = name;
						}
					}
				}
			} else {
				break;
			}

			if (data['continue']?.pccontinue) {
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
