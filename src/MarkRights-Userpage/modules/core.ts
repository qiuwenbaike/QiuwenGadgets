import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './constant';
import type {UserRights} from '~/MarkRights/modules/types';
import {api} from './api';
import {appendIcon} from './appendIcon';
import {getMessage} from './i18n';

const queryUserGroups = async (ususers: string) => {
	const params = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'users',
		ususers,
		usprop: 'groups',
	} as const satisfies ApiQueryUsersParams;
	const response = await api.post(params);

	return response;
};

const getPermissions = async (): Promise<void> => {
	const {wgRelevantUserName} = mw.config.get();

	if (!wgRelevantUserName) {
		return;
	}

	try {
		const {query} = await queryUserGroups(wgRelevantUserName);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const [{groups}]: [{groups: UserRights[]}] = query.users;

		for (const group of groups) {
			if (['*', 'user', 'autoconfirmed', 'rnrsverify-confirmed'].includes(group)) {
				continue; // Do not show implicit groups
			} else if (group === 'bot' && SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
				continue; // Already shown in GeoLocationViewer
			} else if (WEBMASTER_LIST.includes(wgRelevantUserName) || group === 'qiuwen') {
				appendIcon(getMessage('qiuwen'), 'qiuwen');
			} else if (groups.includes(group)) {
				appendIcon(getMessage(group), group);
			}
		}
	} catch {}
};

export {getPermissions};
