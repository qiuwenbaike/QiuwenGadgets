import * as OPTIONS from '../../options.json';
import React, {ReactElement} from 'ext.gadget.JSX';
import {getMessage} from '../i18n';
import {sanitize} from '../util/sanitize';

interface FooterNoticeProps {
	children?: ReactElement;
}

const FooterNotice = ({children = <></>}: FooterNoticeProps) => {
	const {skin} = mw.config.get();
	const id = OPTIONS.elementId;
	const className = OPTIONS.elementId;

	if (skin === 'citizen') {
		return (
			<section id={id} className={[className, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}>
				{children}
			</section>
		);
	} else if (['gongbi', 'vector', 'vector-2022'].includes(skin) || document.querySelector('ul#footer-info')) {
		return (
			<li id={id} className={[className, 'noprint']}>
				{children}
			</li>
		);
	}

	return (
		<div id={id} className={[className, 'noprint']}>
			{children}
		</div>
	);
};

interface UserListProps {
	userNames: string[];
}

const UserList = ({userNames}: UserListProps) => (
	<>
		<>{getMessage('Based on contributions of')}</>
		{userNames.map((userName, index) => (
			<>
				<a
					href={
						userName.includes('>')
							? mw.util.getUrl(`Special:GoToInterWiki/${sanitize(userName.replace('>', ':User:'))}`)
							: mw.util.getUrl(`User:${sanitize(userName)}`)
					}
					key={userName}
				>
					{userName}
				</a>
				<>{index < userNames.length - 1 ? getMessage('Seperator') : getMessage('Period')}</>
			</>
		))}
	</>
);

const FooterUserList = ({userNames}: UserListProps) => (
	<FooterNotice>
		<UserList userNames={userNames} />
	</FooterNotice>
);

export {FooterUserList};
