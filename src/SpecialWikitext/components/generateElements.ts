import {previewLoadingContent, previewLoadingInner} from './SpecialWikitext.module.less';
import ajaxLoader from '../images/Ajax-loader.gif';
import alert from '../images/Alert.png';
import {getMessage} from '../modules/i18n';

const failedElement = () => {
	const loadingIcon = document.createElement('img');
	loadingIcon.src = alert;
	loadingIcon.decoding = 'async';
	loadingIcon.width = 32;
	loadingIcon.height = 32;

	const loadingMsg = document.createElement('span');
	loadingMsg.textContent = ` ${getMessage('Failed')}`;

	return [loadingIcon, loadingMsg];
};

const loadingElement = () => {
	const root = document.createElement('div');
	root.id = 'specialwikitext-preview-loading';

	const inner = document.createElement('div');
	inner.id = 'specialwikitext-preview-loading__inner';
	inner.classList.add('quotebox', previewLoadingInner);

	const content = document.createElement('div');
	content.id = 'specialwikitext-preview-loading__content';
	content.className = previewLoadingContent;

	const loadingIcon = document.createElement('img');
	loadingIcon.src = ajaxLoader;
	loadingIcon.decoding = 'async';
	loadingIcon.width = 32;
	loadingIcon.height = 32;

	const loadingMsg = document.createElement('span');
	loadingMsg.textContent = ` ${getMessage('Loading')}`;

	root.append(inner);
	inner.append(content);
	content.append(loadingIcon, loadingMsg);
	return root;
};

export {failedElement, loadingElement};
