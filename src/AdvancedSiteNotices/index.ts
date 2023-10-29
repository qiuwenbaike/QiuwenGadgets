import {advancedSiteNotices} from './core';

if (!['edit', 'submit'].includes(mw.config.get('wgAction')) && document.getElementById('siteNotice')) {
	advancedSiteNotices();
}
