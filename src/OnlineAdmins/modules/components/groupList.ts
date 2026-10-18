import {section, sectionList} from './OnlineAdmins.module.less';
import {getMessage} from '../i18n';
import {userLink} from './userLink';

interface GroupListProps {
	groupName: string;
	userNames: string[];
}

const groupList = ({groupName, userNames}: GroupListProps): HTMLElement | Comment => {
	if (groupName && userNames.length) {
		const groupNameTitle = document.createElement('span');
		groupNameTitle.textContent = groupName;

		const onlineUserNumber = document.createElement('span');
		onlineUserNumber.textContent = getMessage(' ($1 online):').replace('$1', String(userNames.length));

		const userNameLinks = userNames.map((userName) => {
			return userLink({userName});
		});

		const sectionUserList = document.createElement('ul');
		sectionUserList.className = sectionList;
		sectionUserList.append(...userNameLinks);

		const groupListWrap = document.createElement('div');
		groupListWrap.className = section;
		groupListWrap.append(groupNameTitle, onlineUserNumber, sectionUserList);

		return groupListWrap;
	}

	const comment = document.createComment('');
	return comment;
};

export {groupList};
