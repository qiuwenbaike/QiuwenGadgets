import {addPortletLink} from './addPortletLink';
import {getMessage} from './i18n';

const buildLink = (oldId: number | false, diffId?: number): void => {
	let link = 'Special:Diff/';
	if (oldId) {
		link += `${oldId}/`;
	}
	link += diffId;
	addPortletLink({
		text: getMessage('Diff'),
		tooltip: getMessage('CopyDiff'),
		link,
		defaultTextArrayIndex: 0,
	});
};

export {buildLink};
