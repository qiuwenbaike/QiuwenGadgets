import {queryContributors} from '../queryContributors';
import {uniqueArray} from 'ext.gadget.Util';

const getContributors = async (title: string) => {
	let pclist: (string | number)[] = [];
	let pccontinue: string | undefined;

	const CACHE_KEY_PREFIX = 'ext.gadget.QueryContributors_getContributors-';

	if (mw.storage.getObject(CACHE_KEY_PREFIX + title)) {
		pclist = mw.storage.getObject(CACHE_KEY_PREFIX + title) as string[];

		return uniqueArray(pclist);
	}

	while (true) {
		const data = await queryContributors(title, pccontinue);

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
						pclist[pclist.length] = page.anoncontributors;
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

	// Cache for 10 minutes
	mw.storage.setObject(CACHE_KEY_PREFIX + title, pclist, 10 * 60);

	return uniqueArray(pclist);
};

export {getContributors};
