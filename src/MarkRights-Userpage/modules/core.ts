import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './constant';
import type {UserRights} from '~/MarkRights/modules/types';
import {api} from './api';
import {appendIcon} from './appendIcon';
import {getMessage} from './i18n';

const getPermissions = async (): Promise<void> => {
	const {wgRelevantUserName} = mw.config.get();

	if (!wgRelevantUserName) {
		return;
	}

	try {
		const listUsersParams: ApiQueryUsersParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			list: 'users',
			ususers: wgRelevantUserName,
			usprop: 'groups',
		};
		const {query} = await api.get(listUsersParams);
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
