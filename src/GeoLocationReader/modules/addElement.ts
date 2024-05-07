import {api} from './api';
import {appendGeoIcon} from './appendGeoIcon';

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

const addElement = async (): Promise<void> => {
	const {wgRelevantUserName} = mw.config.get();
	try {
		const {
			query: {
				users: [{groups}],
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

		if (groups.includes('bot') || groups.includes('qiuwen')) {
			/* empty */
			// Already shown in MarkRights-Userpage
		} else {
			void appendGeoIcon();
		}
	} catch (error: unknown) {
		console.error('[GeoLocationReader] Ajax error in `addElement` method:', error);
	}
};

export {addElement};
