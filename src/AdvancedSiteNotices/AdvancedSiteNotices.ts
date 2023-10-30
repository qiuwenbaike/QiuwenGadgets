import type {RemoteNotices} from './modules/util/queryApi';
import {loadRemoteNotices} from './modules/loadRemoteNotices';
import {showNotices} from './modules/showNotice';

$(async function advancedSiteNotices() {
	const $siteNotice: JQuery = $('#siteNotice');
	if (['edit', 'submit'].includes(mw.config.get('wgAction')) || !$siteNotice.length) {
		return;
	}

	const remoteNotices: RemoteNotices = await loadRemoteNotices();
	if (!remoteNotices.$notices) {
		return;
	}

	const randomIndex: number = Math.floor(Math.random() * remoteNotices.$notices.length);
	showNotices($siteNotice, randomIndex, remoteNotices);
});
