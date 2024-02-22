import React from 'ext.gadget.React';
import {getMessage} from '../i18n';

const sanitize = (string: string) =>
	string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&lt;').replace(/"/g, '&quot;');

interface UserLinkProps {
	userName: string;
}

interface GroupListProps {
	groupName: string;
	userNames: string[];
}

const UserLink = ({userName}: UserLinkProps) => (
	<li>
		<a href={mw.util.getUrl(`User:${sanitize(userName)}`)} rel="noopener noreferrer" target="_blank">
			{sanitize(userName)}
		</a>
		&nbsp;
		<span style={{fontSize: '90%'}}>
			（
			<a href={mw.util.getUrl(`User_talk:${sanitize(userName)}`)} rel="noopener noreferrer" target="_blank">
				留言
			</a>
			）
		</span>
	</li>
);

const onlineCountText: string = getMessage(' ($1 online):');

const GroupList = ({groupName, userNames}: GroupListProps) => (
	<div class={'onlineadmin-section'}>
		<span>{groupName}</span>
		<span>{onlineCountText.replace('$1', String(userNames.length))}</span>
		<ul class={'onlineadmin-list'}>
			{userNames.map((user) => (
				<UserLink key={user} userName={user} />
			))}
		</ul>
	</div>
);

const groupListElement = (groupName: string, userNames: string[]) => (
	<GroupList groupName={groupName} userNames={userNames} />
);

const listTitle = () => <p>{getMessage('OnlineWithin30Minutes')}</p>;

export {groupListElement, listTitle};
