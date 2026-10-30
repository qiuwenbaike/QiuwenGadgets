import * as OPTIONS from '../../options.json';
import {CLASS_NAME} from '../constant';

const createFooterRoot = (mountPoint: HTMLElement): HTMLElement => {
	const {skin} = mw.config.get();
	const isCitizen = skin === 'citizen';
	const isListItem =
		['gongbi', 'vector', 'vector-2022'].includes(skin) || Boolean(document.querySelector('ul#footer-info'));
	const root = document.createElement(isCitizen ? 'section' : isListItem ? 'li' : 'div');

	root.id = OPTIONS.elementId;
	root.classList.add(CLASS_NAME, 'noprint');
	if (isCitizen) {
		root.classList.add('page-info__item', 'citizen-footer__pageinfo-item');
	}
	mountPoint.prepend(root);

	return root;
};

export {createFooterRoot};
