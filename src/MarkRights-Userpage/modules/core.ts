import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './constant';
import type {UserRights} from '~/MarkRights/modules/types';
import {api} from './api';
import {appendIcon} from './appendIcon';
import {getMessage} from './i18n';
import {uniqueArray} from 'ext.gadget.Util';

const queryUserGroups = async (ususers: string) => {
	const params: ApiQueryUsersParams = {
		ususers,
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'users',
		usprop: 'groups',
	};
	const response = await api.post(params);

	return response;
};

const queryGlobalUserGroups = async (user: string) => {
	const params = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		meta: 'globaluserinfo',
		guiuser: user,
		guiprop: 'groups',
	};
	const response = await api.post(params);

	return response;
};

const getPermissions = async (wgRelevantUserName: string): Promise<void> => {
	try {
		const {query: localquery} = await queryUserGroups(wgRelevantUserName);
		const {query: globalquery} = await queryGlobalUserGroups(wgRelevantUserName);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const [{groups: localgroups}]: [{groups: UserRights[]}] = localquery.users;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const {groups: globalgroups}: {groups: UserRights[]} = globalquery.globaluserinfo;

		for (const group of uniqueArray([...localgroups, ...globalgroups])) {
			if (['*', 'user', 'autoconfirmed', 'rnrsverify-confirmed'].includes(group)) {
				continue; // Do not show implicit groups
			} else if (group === 'bot' && SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
				continue; // Already shown in GeoLocationViewer
			} else if (WEBMASTER_LIST.includes(wgRelevantUserName) || group === 'qiuwen') {
				appendIcon(getMessage('qiuwen'), 'qiuwen');
			} else if (uniqueArray([...localgroups, ...globalgroups]).includes(group)) {
				appendIcon(getMessage(group), group);
			}
		}
	} catch {}
};

export {getPermissions};
