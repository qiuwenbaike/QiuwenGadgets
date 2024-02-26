import {addPortletLink} from './addPortletLink';

const buildLink = (oldId: number | null, diffId: number): void => {
	let link: string = '/d';
	if (oldId) {
		link += `/${oldId}`;
	}
	link += `/${diffId}`;

	addPortletLink(link);
};

export {buildLink};
