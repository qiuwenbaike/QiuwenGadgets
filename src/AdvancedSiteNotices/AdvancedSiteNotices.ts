import * as OPTIONS from './options.json';
import type {RemoteNotices} from './modules/util/queryApi';
import {WG_ACTION} from './modules/constant';
import {loadRemoteNotices} from './modules/loadRemoteNotices';
import {showNotices} from './modules/showNotice';

$(async function advancedSiteNotices(): Promise<void> {
	const $body: JQuery<HTMLBodyElement> = $('body');

	const $mountPoint: JQuery = $body.find(OPTIONS.mountPointSelector);
	if (OPTIONS.disableActios.includes(WG_ACTION) || !$mountPoint.length) {
		return;
	}

	const remoteNotices: RemoteNotices = await loadRemoteNotices();
	if (!remoteNotices.$notices) {
		return;
	}

	const randomIndex: number = Math.floor(Math.random() * remoteNotices.$notices.length);
	showNotices($mountPoint, randomIndex, remoteNotices);
});
