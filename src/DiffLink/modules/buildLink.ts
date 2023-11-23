import {addPortletLink} from './addPortletLink';
import {getMessage} from './i18n';

const buildLink = (oldId: number, diffId?: number): void => {
	let link = 'Special:Diff/';
	if (oldId) {
		link += `${oldId}/`;
	}
	link += diffId;

	addPortletLink({
		link,
		text: getMessage('Diff'),
		tooltip: getMessage('CopyDiff'),
		defaultTextArrayIndex: 0,
	});
};

export {buildLink};
