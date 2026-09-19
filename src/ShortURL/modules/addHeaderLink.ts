import {addEventListenerWithRemover} from 'ext.gadget.Util';
import {copyText} from './copyText';
import {getMessage} from './i18n';
import {getShortDomains} from './util/getShortDomains';

const {wgUserName} = mw.config.get();
const domains = getShortDomains();

let headerLinkEventListener: ReturnType<typeof addEventListenerWithRemover> = {
	remove: (): void => {},
};

const addHeaderLink = (link: string, permaLink: string): void => {
	let headerLink: HTMLAnchorElement | null = document.querySelector('#mw-indicator-shortURL a');
	if (!headerLink) {
		headerLink = document.createElement('a');
		headerLink.href = '#';
		headerLink.setAttribute(
			'aria-label',
			wgUserName ? getMessage('Short URL') : getMessage('Share URL for the page')
		);
		const icon = document.createElement('span');
		icon.className = 'gadget-short-link__icon';
		headerLink.append(icon);
		const headerElement = document.createElement('div');
		headerElement.className = 'mw-indicator';
		headerElement.id = 'mw-indicator-shortURL';
		headerElement.append(headerLink);
		document.querySelector('.mw-indicators')?.prepend(headerElement);
	}

	const headerLinkClickListener = (event: MouseEvent): void => {
		event.preventDefault();
		copyText(wgUserName ? `https://${domains[0]}${link}` : `https://${location.host}${permaLink}`);
	};

	headerLinkEventListener.remove();
	headerLinkEventListener = addEventListenerWithRemover({
		target: headerLink,
		type: 'click',
		listener: headerLinkClickListener,
	});
};

export {addHeaderLink};
