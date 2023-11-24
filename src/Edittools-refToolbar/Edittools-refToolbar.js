/**
 * RefToolbar
 *
 * @description Adds tools for citing references to the edit toolbar.
 * One of two possible versions will load (Reftoolbar 1.0 or Reftoolbar 1.0)
 * depending on the user preferences (the usebetatoolbar preference).
 *
 * @author: Mr.Z-man, Kaldari
 */

import {refToolbar2} from './modules/RefToolbar2.0';
import {refToolbarMesages} from './modules/RefToolbarMessages';

(() => {
	if (mw.config.get('wgRefToolbarInstalled')) {
		return;
	}

	if (!['edit', 'submit'].includes(mw.config.get('wgAction'))) {
		return;
	}

	if (document.querySelectorAll('#wpTextbox1[readonly]').length > 0) {
		return;
	}

	if (!mw.user.options.get('usebetatoolbar')) {
		return;
	}

	// Load local messages.
	refToolbarMesages();

	// Load main functions
	refToolbar2();

	// Set guard
	mw.config.set('wgRefToolbarInstalled', true);
})();
