import {getMessage} from '../i18n';
import {groupList} from './groupList';

interface OnlineAdminsListProps {
	stewards: string[];
	sysops: string[];
	patrollers: string[];
}

const onlineAdminsList = ({stewards, sysops, patrollers}: OnlineAdminsListProps) => {
	const listTitle = document.createElement('p');
	listTitle.textContent = getMessage('OnlineWithin30Minutes');

	const listWrap = document.createElement('div');
	listWrap.append(listTitle);

	if (stewards.length) {
		const stewardList = groupList({groupName: getMessage('Stewards'), userNames: stewards});
		listWrap.append(stewardList);
	}

	if (sysops.length) {
		const sysOpList = groupList({groupName: getMessage('SysOps'), userNames: sysops});
		listWrap.append(sysOpList);
	}

	if (patrollers.length) {
		const patrollerList = groupList({groupName: getMessage('Patrollers'), userNames: patrollers});
		listWrap.append(patrollerList);
	}

	return listWrap;
};

export {onlineAdminsList};
