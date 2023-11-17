import type {RemoteNotices} from './modules/util/queryApi';
import {WG_ACTION} from './modules/constant';
import {loadRemoteNotices} from './modules/loadRemoteNotices';
import {showNotices} from './modules/showNotice';

$(async function advancedSiteNotices(): Promise<void> {
	const $siteNotice: JQuery = $(document).find('#siteNotice');
	if (['edit', 'submit'].includes(WG_ACTION) || !$siteNotice.length) {
		return;
	}

	const remoteNotices: RemoteNotices = await loadRemoteNotices();
	if (!remoteNotices.$notices) {
		return;
	}

	const randomIndex: number = Math.floor(Math.random() * remoteNotices.$notices.length);
	showNotices($siteNotice, randomIndex, remoteNotices);
});
