import * as OPTIONS from '../../options.json';
import React, {ReactElement} from 'ext.gadget.React';
import {getMessage} from '../i18n';
import {sanitize} from '../util/sanitize';

interface FooterNoticeProps {
	id?: string;
	children?: ReactElement | ReactElement[];
}

const FooterNotice = ({id, children = <></>}: FooterNoticeProps) => {
	const {skin} = mw.config.get();

	return (
		<>
			{skin === 'citizen' ? (
				<section
					id={id ?? OPTIONS.elementId}
					className={[OPTIONS.elementId, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}
				>
					{children ?? <></>}
				</section>
			) : ['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info') ? (
				<li id={id ?? OPTIONS.elementId} className={[OPTIONS.elementId, 'noprint']}>
					{children ?? <></>}
				</li>
			) : (
				<div id={id ?? OPTIONS.elementId} className={[OPTIONS.elementId, 'noprint']}>
					{children ?? <></>}
				</div>
			)}
		</>
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
