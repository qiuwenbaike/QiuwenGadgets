import {ToolsRedirect} from './core';
import {toolsRedirectMessages} from './messages';

import {toolsRedirect_bio_latin_names} from './bio-latin-names';
import {toolsRedirect_courtesy_and_art_names} from './courtesy-and-art-names';
import {toolsRedirect_opt_bolds} from './opt-bolds';

toolsRedirectMessages();
ToolsRedirect.init();

if (mw.user.options.get('gadget-ToolsRedirect-bio-latin-names')) {
	$(toolsRedirect_bio_latin_names);
}

if (mw.user.options.get('gadget-ToolsRedirect-courtesy-and-art-names')) {
	$(toolsRedirect_courtesy_and_art_names);
}

if (mw.user.options.get('gadget-ToolsRedirect-opt-bolds')) {
	$(toolsRedirect_opt_bolds);
}
