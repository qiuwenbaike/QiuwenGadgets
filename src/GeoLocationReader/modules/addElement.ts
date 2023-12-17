import {USER_SCRIPT_LIST, USER_WEBMASTER_LIST, WG_RELEVANT_USER_NAME} from './constant';
import {appendGeoIcon, appendIcon} from './appendGeoIcon';
import {api} from './api';
import {getBody} from '~/util';
import {getMessage} from './i18n';

const addElement = async (): Promise<void> => {
	const queryUserGroupsParams: ApiQueryUsersParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'users',
		ususers: WG_RELEVANT_USER_NAME,
		usprop: 'groups',
	};

	try {
		const {
			query: [{groups}],
		}: {
			query: [
				{
					groups: string[];
				},
			];
		} = (await api.get(queryUserGroupsParams)) as never;

		const $body: JQuery<HTMLBodyElement> = await getBody();

		if (USER_SCRIPT_LIST.includes(WG_RELEVANT_USER_NAME) || groups.includes('bot')) {
			appendIcon($body, {
				icon: 'settings',
				indicatorText: getMessage('Bot'),
				spanClass: 'blue',
			});
		} else if (USER_WEBMASTER_LIST.includes(WG_RELEVANT_USER_NAME) || groups.includes('qiuwen')) {
			appendIcon($body, {
				icon: 'userAvatar',
				indicatorText: getMessage('Webmaster'),
				spanClass: 'blue',
			});
		} else {
			appendGeoIcon($body);
		}
	} catch (error: unknown) {
		console.error('[GeoLocationReader] Ajax error in `addElement` method:', error);
	}
};

export {addElement};
