import {IS_WG_EDIT_OR_SUBMIT_ACTION} from './modules/constant';
import {markBlockedUser} from './modules/core';

let isInit: boolean = false;

mw.hook<JQuery[]>('wikipage.content').add(($content): void => {
	if (isInit) {
		return;
	}
	isInit = true;

	// 'view', 'history', 'purge', ...
	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		return;
	}
	// On the first call after initial page load, container is mw.util.$content
	// Used to limit mainspace activity to just the diff definitions
	if (mw.config.get('wgAction') === 'view' && mw.config.get('wgNamespaceNumber') === 0) {
		$content = $content.find('.diff-title');
	}
	// On page load, also update the namespace tab
	$content = $content.add('#ca-nstab-user');

	markBlockedUser($content);
});
