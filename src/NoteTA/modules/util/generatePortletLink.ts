import './generatePortletLink.less';
import {portletId} from '../initGlobalMethods';

const generatePortletLink = (hash: string): JQuery | undefined => {
	if (!portletId) {
		return;
	}

	const portletLink: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', '汉/漢', `ca-noteTA-${hash}`);
	if (!portletLink) {
		return;
	}
	portletLink.classList.add('ca-noteTA');

	// The following classes are used here:
	// * see constant.ts
	// * for more information
	const $portletLink: JQuery = $(portletLink).addClass('x-noteTA-viewer');
	const link = $portletLink.find('a').empty()[0];
	if (!link) {
		return;
	}
	const label = document.createElement('div');
	const labels: [string, string][] = [
		['hans', '汉'],
		['hant', '漢'],
	];
	for (const [variant, text] of labels) {
		const span = document.createElement('span');
		span.classList.add('x-noteTA-viewer__label', `x-noteTA-viewer__label-${variant}`);
		span.textContent = text;
		label.append(span);
	}
	link.append(label);

	return $portletLink;
};

export {generatePortletLink};
