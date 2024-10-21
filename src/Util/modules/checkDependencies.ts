import {generateArray} from './generateArray';
import {initMwApi} from './initMwApi';
import {uniqueArray} from './uniqueArray';

type Boolean = '0' | '1' | 0 | 1;
type CheckDependencies = typeof checkDependencies;

function checkDependencies(gadgetNames: string | string[]): Promise<void>;
function checkDependencies(gadgetNames: string, option: Boolean): Promise<void>;
// eslint-disable-next-line func-style
async function checkDependencies(gadgetNames: string | string[], option?: Boolean): Promise<void> {
	const api: mw.Api = initMwApi('Util-CheckDependencies');
	gadgetNames = uniqueArray(generateArray(gadgetNames));
	option ||= 1;

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
}

export {type CheckDependencies, checkDependencies};
