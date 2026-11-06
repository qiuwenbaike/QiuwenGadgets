/*!
 * @description Ajax-based simple Category manager. Allows adding/removing/changing categories on a page view.
 * Supports multiple category changes, as well as redirect and disambiguation resolution. Also
 * plugs into the upload form. Search engines to use for the suggestion list are configurable, and
 * can be selected interactively.
 *
 * @see {@link https://commons.wikimedia.org/wiki/Help:Gadget-HotCat}
 * @author authors <https://commons.wikimedia.org/wiki/Help:Gadget-HotCat/Version_history>
 */
import './modules/check';
import {conf} from './modules/conf';
import {getBody} from 'ext.gadget.Util';
import {hotCatMessages} from './modules/messages';
import {run} from './modules/core';

void getBody().then(function hotCat(): void {
	// Load translations locally
	hotCatMessages();

	// Guard against double inclusions
	if ((window.HotCat && !(window.HotCat as unknown as {nodeName?: string}).nodeName) || conf.wgAction === 'edit') {
		return; // Not on edit mode
	}

	// We can safely trigger just after user configuration is loaded.
	// Use always() instead of then() to also start HotCat if the user module has problems.
	run();
});
