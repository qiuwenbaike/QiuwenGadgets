import './ToolsRedirect.less';
import {ToolsRedirect} from './modules/core';
import {getBody} from 'ext.gadget.Util';
import {setMessages} from './modules/messages';

import {toolsRedirect_bio_latin_names} from './modules/bio-latin-names';
import {toolsRedirect_opt_bolds} from './modules/opt-bolds';

setMessages();

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	ToolsRedirect.init($body);

	if (mw.user.options.get('gadget-ToolsRedirect-bio-latin-names')) {
		toolsRedirect_bio_latin_names();
	}
	if (mw.user.options.get('gadget-ToolsRedirect-opt-bolds')) {
		toolsRedirect_opt_bolds();
	}
});
