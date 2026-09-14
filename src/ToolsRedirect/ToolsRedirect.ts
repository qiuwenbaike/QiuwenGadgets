import './ToolsRedirect.less';
import {ToolsRedirect} from './modules/core';
import {getBody} from 'ext.gadget.Util';
import {mountToolsRedirect} from './modules/ui';
import {setMessages} from './modules/messages';

setMessages();

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const {open} = mountToolsRedirect(ToolsRedirect);
	ToolsRedirect.init($body, open);
});

export {findRedirectCallback, findRedirectBySelector, setRedirectTextSuffix} from './modules/core';
