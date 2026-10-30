import {CLASS_NAME} from '../constant';

/**
 * Create and insert the root element which hosts the Vue application.
 *
 * @param userLink The user link to append the indicator to.
 * @returns The created root element.
 */
const createLinkRoot = (userLink: HTMLAnchorElement): HTMLElement => {
	const root = document.createElement('span');

	root.classList.add(CLASS_NAME, 'noprint');
	userLink.after(root);

	return root;
};

export {createLinkRoot};
