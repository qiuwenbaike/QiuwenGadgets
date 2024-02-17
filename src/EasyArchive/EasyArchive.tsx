import * as OPTIONS from './options.json';
import {easyArchive} from './modules/core';

(function easyArchiveLoad() {
	if (
		mw.config.get('wgNamespaceNumber') < 0 ||
		mw.config.get('wgPageName') === 'Qiuwen:首页' ||
		!document.querySelectorAll(OPTIONS.mountPointSelector).length
	) {
		return;
	}
	if (!window.easy_archive) {
		window.easy_archive = {
			never_enable_on_these_pages_regex: [],
			section_count: null,
		};
	}
	easyArchive();
})();
