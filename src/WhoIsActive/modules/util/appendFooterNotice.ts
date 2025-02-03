import * as OPTIONS from '../../options.json';

const appendFooterNotice = (element: Element) => {
	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);

	if (mountPoint) {
		mountPoint.prepend(element);
	}
};

export {appendFooterNotice};
