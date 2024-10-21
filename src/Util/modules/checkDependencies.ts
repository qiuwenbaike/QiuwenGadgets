import {generateArray} from './generateArray';
import {initMwApi} from './initMwApi';
import {uniqueArray} from './uniqueArray';

type CheckDependencies = (gadgetNames: string | string[], option?: '0' | '1') => Promise<void>;

const checkDependencies = async (gadgetNames: string | string[], option: '0' | '1' = '1'): Promise<void> => {
	const api: mw.Api = initMwApi('Util-CheckDependencies');
	gadgetNames = uniqueArray(generateArray(gadgetNames));

	for (const gadgetName of gadgetNames) {
		if (
			(option === '0' && mw.user.options.get(`gadget-${gadgetName}`)) ||
			(option === '1' && !mw.user.options.get(`gadget-${gadgetName}`))
		) {
			await api.postWithEditToken({
				action: 'options',
				change: `gadget-${gadgetName}=${option}`,
			} as ApiOptionsParams);
			await mw.loader.using(`ext.gadget.${gadgetName}`);
		}
	}
};

export {type CheckDependencies, checkDependencies};
