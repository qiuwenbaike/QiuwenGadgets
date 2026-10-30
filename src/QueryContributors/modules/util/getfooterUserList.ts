import {getMessage} from '../i18n';
import {sanitize} from './sanitize';

interface UserListProps {
	userNames: (string | number)[];
}

const anonyContrib = (number: number): HTMLElement => {
	const span = document.createElement('span');
	span.textContent = getMessage('Other $1 anonymous contributors').replace('$1', `${number}`);
	return span;
};

const userLink = (userName: string): HTMLElement => {
	const link = document.createElement('a');
	link.textContent = userName;
	link.href = /(>|&gt;)/.test(userName)
		? mw.util.getUrl(
				`Special:GoToInterWiki/${sanitize(userName.replace(/(>|&gt;)/, ':User:').replace(/(>|&gt;)/g, '&gt;'))}`
			)
		: mw.util.getUrl(`User:${sanitize(userName)}`);
	link.target = '_blank';
	link.rel = ['noopener', 'noreferrer'].join(' ');
	return link;
};

const footerUserList = ({userNames}: UserListProps) => {
	const span = document.createElement('span');

	span.append(getMessage('Based on contributions of'));
	userNames.forEach((userName, index) => {
		span.append(
			typeof userName === 'number' ? anonyContrib(userName) : userLink(userName),
			index < userNames.length - 1 ? getMessage('Seperator') : getMessage('Period')
		);
	});
	return span;
};

export {footerUserList};
