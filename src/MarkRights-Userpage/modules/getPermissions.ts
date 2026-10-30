import {IMPLICIT_GROUPS, SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './constant';
import {getGlobalUserGroups, getLocalUserGroups} from 'ext.gadget.MarkRights';
import type {Indicator} from './types';
import type {UserRights} from '~/MarkRights/modules/types';
import {appendIcon} from './appendIcon';
import {getMessage} from './i18n';
import {uniqueArray} from 'ext.gadget.Util';

/**
 * @param wgRelevantUserName The name of the user owning the current user page.
 * @returns The indicators to display, an empty array when there is none.
 */
const buildIndicators = async (wgRelevantUserName: string): Promise<Indicator[]> => {
	if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
		// Already shown in GeoLocationReader
		return [];
	}

	if (WEBMASTER_LIST.includes(wgRelevantUserName)) {
		return [{group: 'qiuwen', text: getMessage('qiuwen')}];
	}

	const localGroupsMap = await getLocalUserGroups([wgRelevantUserName]);
	const localGroups: string[] = localGroupsMap[wgRelevantUserName] ?? [];

	const globalGroupsMap = await getGlobalUserGroups([wgRelevantUserName]);
	const globalGroups: string[] = globalGroupsMap[wgRelevantUserName] ?? [];

	return uniqueArray([...localGroups, ...globalGroups])
		.filter((group) => {
			return !IMPLICIT_GROUPS.includes(group);
		})
		.map<Indicator>((group) => {
			const userRight: UserRights = group as UserRights;

			return {
				group: userRight,
				text: getMessage(userRight),
			};
		});
};

/**
 * @param wgRelevantUserName The name of the user owning the current user page.
 */
const getPermissions = async (wgRelevantUserName: string): Promise<void> => {
	try {
		const indicators = await buildIndicators(wgRelevantUserName);

		appendIcon(indicators);
	} catch (error: unknown) {
		console.error('[MarkRights-Userpage] Ajax error in `getPermissions` method:', error);
	}
};

export {getPermissions};
