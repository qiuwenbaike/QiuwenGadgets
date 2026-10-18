import {getMessage} from '../i18n';
import {sanitize} from '../util/sanitize';
import {talkPageLink} from './OnlineAdmins.module.less';

interface UserLinkProps {
	userName: string;
}

const userLink = ({userName}: UserLinkProps) => {
	const userNameLink = document.createElement('a');
	userNameLink.href = mw.util.getUrl(`User:${sanitize(userName)}`);
	userNameLink.target = '_blank';
	userNameLink.rel = ['noopener', 'noreferrer'].join(' ');
	userNameLink.textContent = sanitize(userName);

	const userTalkLink = document.createElement('a');
	userTalkLink.href = mw.util.getUrl(`User_talk:${sanitize(userName)}`);
	userTalkLink.target = '_blank';
	userTalkLink.rel = ['noopener', 'noreferrer'].join(' ');
	userTalkLink.textContent = getMessage('(') + getMessage('Talk') + getMessage(')');

	const userTalkLinkWrap = document.createElement('span');
	userTalkLinkWrap.className = talkPageLink;
	userTalkLinkWrap.append(userTalkLink);

	const item = document.createElement('li');
	item.append(userNameLink, ' ', userTalkLinkWrap);

	return item;
};

export {userLink};
