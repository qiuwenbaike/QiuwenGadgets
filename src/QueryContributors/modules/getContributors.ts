import {getMessage} from './i18n';
import {queryContributors} from './queryContributors';
import {uniqueArray} from 'ext.gadget.Util';

const getContributors = async (titles: string) => {
	const pclist: string[] = [];
	let pccontinue: string | undefined;

	while (true) {
		const data = await queryContributors(titles, pccontinue);

		try {
			if (data['query']?.pages) {
				for (const page of data['query'].pages as {
					anoncontributors: number;
					contributors: {userid: number; name: string}[];
				}[]) {
					if (page?.contributors) {
						for (const contributor of page.contributors) {
							if (contributor?.name) {
								pclist[pclist.length] = contributor.name;
							}
						}
					}

					if (page?.anoncontributors) {
						pclist[pclist.length] = getMessage('Other anonymous contributors').replace(
							'$1',
							`${page.anoncontributors}`
						);
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
