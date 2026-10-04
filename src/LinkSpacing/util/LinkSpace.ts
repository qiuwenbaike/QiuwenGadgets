import {linkSpace} from './LinkSpacing.module.less';

const LinkSpace = () => {
	const spaceElement = document.createElement('span');
	spaceElement.className = linkSpace;
	return spaceElement;
};

export {LinkSpace};
