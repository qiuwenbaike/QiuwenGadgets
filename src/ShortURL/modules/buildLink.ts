import {addHeaderLink} from './addHeaderLink';
import {addPortletLink} from './addPortletLink';

const buildLink = (oldId: number | null, diffId: number): void => {
	let link: string = '/d';
	let permaLink: string = '/wiki/Special:Diff';
	if (oldId) {
		link += `/${oldId}`;
		permaLink += `/${oldId}`;
	}
	link += `/${diffId}`;
	permaLink += `/${diffId}`;

	addHeaderLink(link, permaLink);
	addPortletLink(link, permaLink);
};

export {buildLink};
