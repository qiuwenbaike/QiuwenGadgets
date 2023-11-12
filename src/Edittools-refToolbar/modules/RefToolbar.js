/**
 * RefToolbar
 *
 * @description Adds tools for citing references to the edit toolbar.
 * One of two possible versions will load (Reftoolbar 1.0 or Reftoolbar 1.0)
 * depending on the user preferences (the usebetatoolbar preference).
 *
 * @author: Mr.Z-man, Kaldari
 */

import {refToolbar2} from './RefToolbar2.0';
import {refToolbarBase} from './RefToolbarBase';

export const initializeRefTools = () => {
	if (window.RefToolbarInstalled || document.querySelectorAll('#wpTextbox1[readonly]').length > 0) {
		return;
	}
	if (mw.user.options.get('usebetatoolbar')) {
		// Enhanced editing toolbar is on. Going to load RefToolbar 2.0.
		refToolbarBase();
		mw.loader.using(['ext.wikiEditor']).done(() => {
			refToolbar2();
		});
	} else {
		return;
	}
	window.RefToolbarInstalled = true;
};
