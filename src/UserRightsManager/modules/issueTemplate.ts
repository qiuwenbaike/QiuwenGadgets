import * as OPTIONS from '../options.json';
import {getPermissonName, getpermissionTemplate, permissionNames} from './i18n';
import {api} from './api';

const issueTemplate = (
	userName: string,
	permission: Partial<keyof typeof permissionNames>,
	watch: boolean | 'watch' | 'unwatch'
) => {
	const talkPage = `User talk:${userName.replace(/ /g, '_')}`;
	const params = {
		action: 'edit',
		format: 'json',
		title: talkPage,
		appendtext: '\n\n{{'.concat(
			'subst:',
			getpermissionTemplate(
				permission as 'templateeditor' | 'transwiki' | 'patroller' | 'autoreviewer' | 'massmessage-sender'
			),
			'}}}'
		),
		summary: `根据共识授予${getPermissonName(permission)}${OPTIONS.userRightsManagerSummary}`,
		watchlist: watch ? 'watch' : 'unwatch',
	} as const satisfies ApiEditPageParams;
	return api.postWithEditToken(params);
};

export {issueTemplate};
