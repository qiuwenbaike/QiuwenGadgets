import {markBlockedUser} from './modules/core';

(() => {
	if (['edit', 'submit'].includes(mw.config.get('wgAction'))) {
		return;
	}

	const markBlockedLoad = (): void => {
		// 'view', 'history', 'purge', ...
		mw.config.set('wgMarkBlockInitialized', false);
		mw.hook('wikipage.content').add(($content: JQuery): void => {
			// On the first call after initial page load, container is mw.util.$content
			// Used to limit mainspace activity to just the diff definitions
			if (mw.config.get('wgAction') === 'view' && mw.config.get('wgNamespaceNumber') === 0) {
				$content = $content.find('.diff-title');
			}
			if (!mw.config.get('wgMarkBlockInitialized')) {
				mw.config.set('wgMarkBlockInitialized', true);
				// On page load, also update the namespace tab
				$content = $content.add('#ca-nstab-user');
			}
			markBlockedUser($content);
		});
	};

	$(markBlockedLoad);
})();
