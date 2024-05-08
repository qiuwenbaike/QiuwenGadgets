import * as OPTIONS from '../options.json';
import {getPermissonName, permissionNames} from './i18n';
import {api} from './api';

const assignPermission = (
	userName: string,
	permission: keyof typeof permissionNames,
	summary: string,
	revId: number,
	expiry: string
) => {
	const permaLink = `[[Special:PermaLink/${revId}#User:${userName}|权限申请]]`;
	let fullSummary = `+${getPermissonName(permission)}；${permaLink}`;
	if (summary !== '') {
		fullSummary += `；${summary}`;
	}
	fullSummary += OPTIONS.userRightsManagerSummary;
	const params: ApiUserrightsParams = {
		action: 'userrights',
		user: userName.replace(/ /g, '_'),
		reason: fullSummary,
		// @ts-expect-error TS2322
		add: permission,
		expiry: expiry === '' ? 'infinity' : expiry,
	};
	return api.postWithToken('userrights', params);
};

export {assignPermission};
