import {getMessage} from './i18n';

export const addSectionPlus = (): void => {
	const wrapperElement: HTMLElement | null = document.querySelector('#ca-addsection');
	if (!wrapperElement) {
		return;
	}

	const skin: string = mw.config.get('skin');

	const targetElement: HTMLElement | null = ['citizen', 'write'].includes(skin)
		? wrapperElement.querySelector('a')
		: wrapperElement.querySelector('span');
	if (!targetElement) {
		return;
	}

	const title = getMessage('Title');
	switch (skin) {
		case 'citizen':
			targetElement.setAttribute('style', 'font-size:0;gap:0');
			break;
		case 'gongbi':
			targetElement.title = title;
			targetElement.innerHTML = '&#8203';
			break;
		default:
			targetElement.title = title;
			targetElement.textContent = '[+]';
			break;
	}
};
