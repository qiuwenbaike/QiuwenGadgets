/**
 * ProveIt is a powerful reference manager for Wikipedia
 * Documentation at <commons.wikimedia.org/wiki/Help:Gadget-ProveIt>
 *
 * This script sets the configuration options specific to this wiki
 * and loads the gadget code from Wikimedia Commons
 */
import {ProveIt} from './core';
import {messages} from './messages';

const loadProveIt = () => {
	messages();
	$(ProveIt.init);
};
// Only load when editing
mw.hook('wikipage.editform').add(loadProveIt);
mw.hook('ve.activationComplete').add(loadProveIt);
