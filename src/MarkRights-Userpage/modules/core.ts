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

const queryGlobalUserGroups = async (guiuser: string) => {
	const params = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		meta: 'globaluserinfo',
		guiuser,
		guiprop: 'groups',
	};
	const response = await api.post(params);

	return response;
};

const getPermissions = async (wgRelevantUserName: string): Promise<void> => {
	try {
		const {
			query: {
				users: [{groups: localgroups}],
			},
		}: {
			query: {
				users: [
					{
						groups: string[];
					},
				];
			};
		} = (await queryUserGroups(`${wgRelevantUserName}`)) as never;
		const {
			query: {
				globaluserinfo: {groups: globalgroups},
			},
		}: {
			query: {
				globaluserinfo: {
					groups: string[];
				};
			};
		} = (await queryGlobalUserGroups(`${wgRelevantUserName}`)) as never;

		const groups = uniqueArray([...localgroups, ...globalgroups]).filter((element) => {
			// Do not show implicit groups. Bots Already shown in GeoLocationViewer
			return !['*', 'user', 'autoconfirmed', 'rnrsverify-confirmed', 'bot'].includes(element);
		});

		if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
			// Already shown in GeoLocationViewer
		} else if (WEBMASTER_LIST.includes(wgRelevantUserName)) {
			appendIcon(getMessage('qiuwen'), 'qiuwen');
		} else {
			for (const group of groups) {
				appendIcon(getMessage(group as UserRights), group as UserRights);
			}
		}
	} catch {}
};

export {getPermissions};
